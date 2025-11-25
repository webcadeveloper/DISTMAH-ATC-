'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ExamPlayer } from '@/components/student/ExamPlayer';
import { ExamResults } from '@/components/student/ExamResults';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function TakeExamPage() {
  const params = useParams();
  const router = useRouter();
  const [examData, setExamData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [attemptData, setAttemptData] = useState<any>(null);
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const examId = params.id as string;
  const slug = params.slug as string;

  useEffect(() => {
    loadExam();
  }, [examId]);

  const loadExam = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/student/exams/${examId}`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al cargar el examen');
      }
      const data = await response.json();
      setExamData(data);
    } catch (error) {
      console.error('Error loading exam:', error);
      toast.error(error instanceof Error ? error.message : 'Error al cargar el examen');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartExam = async () => {
    try {
      const response = await fetch(`/api/student/exams/${examId}/start`, {
        method: 'POST',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al iniciar el examen');
      }

      const data = await response.json();
      setAttemptData(data);
    } catch (error) {
      console.error('Error starting exam:', error);
      toast.error(error instanceof Error ? error.message : 'Error al iniciar el examen');
    }
  };

  const handleSubmit = async (answers: any[]) => {
    try {
      const response = await fetch(`/api/student/exams/${examId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attemptId: attemptData.attemptId,
          answers,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al enviar el examen');
      }

      const result = await response.json();
      setResults(result);
      setShowResults(true);

      if (result.passed) {
        toast.success('¡Felicitaciones! Has aprobado el examen');
      } else {
        toast.error('No has aprobado el examen');
      }
    } catch (error) {
      console.error('Error submitting exam:', error);
      toast.error(error instanceof Error ? error.message : 'Error al enviar el examen');
      throw error;
    }
  };

  const handleRetry = () => {
    setAttemptData(null);
    setResults(null);
    setShowResults(false);
    loadExam();
  };

  const handleBackToCourse = () => {
    router.push(`/cursos/${slug}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!examData) {
    return (
      <div className="max-w-2xl mx-auto mt-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Examen no disponible</h2>
            <p className="text-gray-600 mb-6">
              Este examen no está disponible o no tienes acceso a él
            </p>
            <Button onClick={() => router.push(`/cursos/${slug}`)}>
              Volver al Curso
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">{examData.exam.title}</h1>
        <ExamResults
          score={results.score}
          maxScore={results.maxScore}
          percentage={results.percentage}
          passed={results.passed}
          timeSpent={results.results?.timeSpent || 0}
          answers={results.results?.answers}
          attemptsRemaining={examData.attemptsRemaining - 1}
          onRetry={examData.attemptsRemaining > 1 ? handleRetry : undefined}
          onBackToCourse={handleBackToCourse}
        />
      </div>
    );
  }

  if (attemptData) {
    return (
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{examData.exam.title}</h1>
          {examData.exam.description && (
            <p className="text-gray-600 mt-2">{examData.exam.description}</p>
          )}
        </div>
        <ExamPlayer
          examId={examId}
          attemptId={attemptData.attemptId}
          questions={attemptData.questions}
          duration={attemptData.duration}
          maxScore={attemptData.maxScore}
          onSubmit={handleSubmit}
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card>
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-4">{examData.exam.title}</h1>

          {examData.exam.description && (
            <p className="text-gray-700 mb-6">{examData.exam.description}</p>
          )}

          {examData.exam.instructions && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Instrucciones:</h3>
              <p className="text-blue-700 whitespace-pre-line">
                {examData.exam.instructions}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <p className="text-sm text-gray-600">Duración</p>
              </div>
              <p className="text-xl font-bold">{examData.exam.duration} min</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-gray-600" />
                <p className="text-sm text-gray-600">Preguntas</p>
              </div>
              <p className="text-xl font-bold">{examData.exam.questions.length}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-gray-600" />
                <p className="text-sm text-gray-600">Puntaje mínimo</p>
              </div>
              <p className="text-xl font-bold">{examData.exam.passingScore}%</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-gray-600" />
                <p className="text-sm text-gray-600">Intentos</p>
              </div>
              <p className="text-xl font-bold">
                {examData.attemptsUsed} / {examData.exam.maxAttempts}
              </p>
            </div>
          </div>

          {examData.lastAttempt && (
            <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">Último intento:</h3>
              <p className="text-yellow-700">
                Puntaje: {examData.lastAttempt.score} / {examData.lastAttempt.maxScore} (
                {examData.lastAttempt.percentage}%)
              </p>
              <p className="text-yellow-700">
                {examData.lastAttempt.passed ? '✓ Aprobado' : '✗ No aprobado'}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-start gap-2 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-900">Importante:</p>
                <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                  <li>• El examen se enviará automáticamente cuando se acabe el tiempo</li>
                  <li>• Tus respuestas se guardarán automáticamente cada 30 segundos</li>
                  <li>• No actualices ni cierres la página durante el examen</li>
                  <li>
                    • Te quedan {examData.attemptsRemaining} intento(s) disponible(s)
                  </li>
                </ul>
              </div>
            </div>

            <Button
              onClick={handleStartExam}
              className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg"
            >
              Comenzar Examen
            </Button>

            <Button variant="outline" onClick={handleBackToCourse} className="w-full">
              Volver al Curso
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
