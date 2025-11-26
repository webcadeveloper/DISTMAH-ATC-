import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { QuestionType } from '@prisma/client';

interface Answer {
  questionId: string;
  answer: any;
}

function gradeAnswer(question: any, answer: any): { correct: boolean; points: number } {
  if (!answer) {
    return { correct: false, points: 0 };
  }

  switch (question.type) {
    case QuestionType.MULTIPLE_CHOICE:
      const correct = answer === question.correctAnswer;
      return { correct, points: correct ? question.points : 0 };

    case QuestionType.TRUE_FALSE:
      const isCorrect = answer === question.correctAnswer;
      return { correct: isCorrect, points: isCorrect ? question.points : 0 };

    case QuestionType.SHORT_ANSWER:
      if (!question.correctAnswer) {
        return { correct: false, points: 0 };
      }
      const keywords = String(question.correctAnswer).toLowerCase().split(',').map(k => k.trim());
      const studentAnswer = String(answer).toLowerCase();
      const matchedKeywords = keywords.filter(keyword => studentAnswer.includes(keyword));
      const percentage = matchedKeywords.length / keywords.length;
      const points = Math.round(question.points * percentage);
      return { correct: percentage >= 0.5, points };

    case QuestionType.ESSAY:
    case QuestionType.FILE_UPLOAD:
      return { correct: false, points: 0 };

    default:
      return { correct: false, points: 0 };
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { attemptId, answers }: { attemptId: string; answers: Answer[] } = body;

    const attempt = await prisma.examAttempt.findUnique({
      where: { id: attemptId },
      include: {
        exam: {
          include: {
            questions: true,
          },
        },
      },
    });

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt not found' }, { status: 404 });
    }

    if (attempt.userId !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    if (attempt.submittedAt) {
      return NextResponse.json({ error: 'Already submitted' }, { status: 400 });
    }

    const timeSpent = Math.floor((Date.now() - attempt.startedAt.getTime()) / 1000);

    let totalScore = 0;
    const gradedAnswers = answers.map((answer) => {
      const question = attempt.exam.questions.find((q) => q.id === answer.questionId);
      if (!question) {
        return { ...answer, score: 0, correct: false };
      }

      const result = gradeAnswer(question, answer.answer);
      totalScore += result.points;

      return {
        questionId: answer.questionId,
        answer: answer.answer,
        score: result.points,
        correct: result.correct,
        maxPoints: question.points,
      };
    });

    const percentage = Math.round((totalScore / attempt.maxScore) * 100);
    const passed = percentage >= attempt.exam.passingScore;

    await prisma.examAttempt.update({
      where: { id: attemptId },
      data: {
        answers: gradedAnswers,
        score: totalScore,
        percentage,
        passed,
        submittedAt: new Date(),
        timeSpent,
      },
    });

    if (passed) {
      await checkAndGenerateCertificate(session.user.id, attempt.exam.courseId);
    }

    let results = null;
    if (attempt.exam.showResults) {
      const questionsWithAnswers = await prisma.examQuestion.findMany({
        where: { examId: id },
      });

      results = {
        score: totalScore,
        maxScore: attempt.maxScore,
        percentage,
        passed,
        timeSpent,
        answers: gradedAnswers.map((ans) => {
          const question = questionsWithAnswers.find((q) => q.id === ans.questionId);
          return {
            ...ans,
            correctAnswer: question?.correctAnswer,
            explanation: question?.explanation,
          };
        }),
      };
    }

    return NextResponse.json({
      success: true,
      passed,
      score: totalScore,
      maxScore: attempt.maxScore,
      percentage,
      results: attempt.exam.showResults ? results : null,
    });
  } catch (error) {
    console.error('Error submitting exam:', error);
    return NextResponse.json(
      { error: 'Failed to submit exam' },
      { status: 500 }
    );
  }
}

async function checkAndGenerateCertificate(userId: string, courseId: string) {
  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: { userId, courseId },
      },
      include: {
        course: {
          include: {
            modules: {
              include: {
                lessons: true,
              },
            },
          },
        },
      },
    });

    if (!enrollment || enrollment.progressPercent < 100) {
      return;
    }

    const existingCertificate = await prisma.certificate.findFirst({
      where: { userId, courseId },
    });

    if (existingCertificate) {
      return;
    }

    const certificateCount = await prisma.certificate.count();
    const certificateNumber = `DIST-ATC-2026-${String(certificateCount + 1).padStart(4, '0')}`;
    const verificationCode = crypto.randomUUID();

    const user = await prisma.user.findUnique({ where: { id: userId } });
    const instructor = await prisma.user.findUnique({
      where: { id: enrollment.course.instructorId },
    });

    await prisma.certificate.create({
      data: {
        userId,
        courseId,
        certificateNumber,
        studentName: user?.name || 'Student',
        courseName: enrollment.course.title,
        instructorName: instructor?.name || 'Instructor',
        completionDate: new Date(),
        verificationCode,
      },
    });
  } catch (error) {
    console.error('Error generating certificate:', error);
  }
}
