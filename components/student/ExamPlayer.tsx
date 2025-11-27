'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Clock, AlertCircle, CheckCircle, Flag, Send } from 'lucide-react';
import { toast } from 'sonner';

interface Question {
  id: string;
  type: string;
  question: string;
  points: number;
  options?: any[];
}

interface ExamPlayerProps {
  attemptId: string;
  questions: Question[];
  duration: number;
  onSubmit: (answers: any[]) => void;
}

export function ExamPlayer({
  attemptId,
  questions,
  duration,
  onSubmit,
}: ExamPlayerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(duration * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    const autoSave = setInterval(() => {
      localStorage.setItem(`exam-${attemptId}`, JSON.stringify(answers));
    }, 30000);

    return () => clearInterval(autoSave);
  }, [answers, attemptId]);

  const handleAutoSubmit = useCallback(() => {
    toast.info('Tiempo agotado. Enviando examen automáticamente...');
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const toggleFlag = (questionId: string) => {
    setFlagged((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleSubmit = async () => {
    const unanswered = questions.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
      const confirm = window.confirm(
        `Tienes ${unanswered.length} pregunta(s) sin responder. ¿Deseas enviar el examen de todas formas?`
      );
      if (!confirm) return;
    }

    setIsSubmitting(true);
    try {
      const formattedAnswers = questions.map((q) => ({
        questionId: q.id,
        answer: answers[q.id] || null,
      }));

      await onSubmit(formattedAnswers);
      localStorage.removeItem(`exam-${attemptId}`);
    } catch (error) {
      console.error('Error submitting exam:', error);
      toast.error('Error al enviar el examen');
      setIsSubmitting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getAnsweredCount = () => {
    return questions.filter((q) => answers[q.id] !== undefined).length;
  };

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 bg-white border-b pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                timeRemaining < 300 ? 'bg-red-100 text-red-700' : 'bg-neutral-100'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg font-semibold">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <div className="text-sm text-neutral-600">
              Pregunta {currentQuestion + 1} de {questions.length}
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-black text-white hover:bg-neutral-800"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Enviando...' : 'Enviar Examen'}
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-neutral-600">
            <span>Progreso</span>
            <span>
              {getAnsweredCount()} / {questions.length} respondidas
            </span>
          </div>
          <Progress value={(getAnsweredCount() / questions.length) * 100} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-sm font-medium text-neutral-500">
                  Pregunta {currentQuestion + 1}
                </CardTitle>
                {answers[question.id] !== undefined && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                {flagged.has(question.id) && <Flag className="w-4 h-4 text-red-500" />}
              </div>
              <p className="text-lg font-medium">{question.question}</p>
              <p className="text-sm text-neutral-500 mt-1">{question.points} puntos</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleFlag(question.id)}
              className={flagged.has(question.id) ? 'text-red-500' : ''}
            >
              <Flag className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {question.type === 'MULTIPLE_CHOICE' && (
            <div className="space-y-3">
              {question.options?.map((option: any, index: number) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-neutral-50 ${
                    answers[question.id] === index ? 'border-black bg-neutral-50' : ''
                  }`}
                  onClick={() => handleAnswerChange(question.id, index)}
                >
                  <input
                    type="radio"
                    name={question.id}
                    checked={answers[question.id] === index}
                    onChange={() => handleAnswerChange(question.id, index)}
                    className="w-4 h-4"
                  />
                  <span>{option.text}</span>
                </div>
              ))}
            </div>
          )}

          {question.type === 'TRUE_FALSE' && (
            <div className="space-y-3">
              <div
                className={`flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-neutral-50 ${
                  answers[question.id] === 'true' ? 'border-black bg-neutral-50' : ''
                }`}
                onClick={() => handleAnswerChange(question.id, 'true')}
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={answers[question.id] === 'true'}
                  onChange={() => handleAnswerChange(question.id, 'true')}
                  className="w-4 h-4"
                />
                <span>Verdadero</span>
              </div>
              <div
                className={`flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-neutral-50 ${
                  answers[question.id] === 'false' ? 'border-black bg-neutral-50' : ''
                }`}
                onClick={() => handleAnswerChange(question.id, 'false')}
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={answers[question.id] === 'false'}
                  onChange={() => handleAnswerChange(question.id, 'false')}
                  className="w-4 h-4"
                />
                <span>Falso</span>
              </div>
            </div>
          )}

          {question.type === 'SHORT_ANSWER' && (
            <Input
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              placeholder="Tu respuesta"
              className="w-full"
            />
          )}

          {question.type === 'ESSAY' && (
            <Textarea
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              placeholder="Escribe tu respuesta aquí"
              rows={8}
              className="w-full"
            />
          )}

          {question.type === 'FILE_UPLOAD' && (
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Input type="file" className="max-w-md mx-auto" />
              <p className="text-sm text-neutral-500 mt-2">
                Sube tu archivo (PDF, DWG, RVT, etc.)
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
        >
          Anterior
        </Button>

        <div className="flex flex-wrap gap-2 justify-center">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 rounded-full border-2 font-semibold text-sm ${
                currentQuestion === index
                  ? 'bg-black text-white border-black'
                  : answers[q.id] !== undefined
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : flagged.has(q.id)
                  ? 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-white border-neutral-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() =>
            setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1))
          }
          disabled={currentQuestion === questions.length - 1}
        >
          Siguiente
        </Button>
      </div>

      {timeRemaining < 300 && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-700">
            ¡Atención! Quedan menos de 5 minutos para finalizar el examen
          </p>
        </div>
      )}
    </div>
  );
}
