'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Award, AlertCircle, RefreshCw } from 'lucide-react';

interface Answer {
  questionId: string;
  answer: any;
  score: number;
  correct: boolean;
  maxPoints: number;
  correctAnswer?: any;
  explanation?: string;
}

interface ExamResultsProps {
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  timeSpent: number;
  answers?: Answer[];
  attemptsRemaining?: number;
  onRetry?: () => void;
  onBackToCourse?: () => void;
}

export function ExamResults({
  score,
  maxScore,
  percentage,
  passed,
  timeSpent,
  answers,
  attemptsRemaining,
  onRetry,
  onBackToCourse,
}: ExamResultsProps) {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  return (
    <div className="space-y-6">
      <Card className={passed ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
        <CardContent className="pt-6">
          <div className="text-center">
            {passed ? (
              <div className="mb-4">
                <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-700 mb-2">
                  ¡Felicitaciones!
                </h2>
                <p className="text-green-600">Has aprobado el examen</p>
              </div>
            ) : (
              <div className="mb-4">
                <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-12 h-12 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-red-700 mb-2">
                  No aprobaste
                </h2>
                <p className="text-red-600">
                  Necesitas {percentage}% o más para aprobar
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm text-gray-500 mb-2">Puntaje</p>
                <p className="text-3xl font-bold">
                  {score} / {maxScore}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm text-gray-500 mb-2">Porcentaje</p>
                <p className="text-3xl font-bold">{percentage}%</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm text-gray-500 mb-2">Tiempo</p>
                <p className="text-3xl font-bold">{formatTime(timeSpent)}</p>
              </div>
            </div>

            {!passed && attemptsRemaining !== undefined && attemptsRemaining > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700">
                  Te quedan <strong>{attemptsRemaining}</strong> intento(s) más
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {answers && answers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Revisión de Respuestas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {answers.map((answer, index) => (
              <div
                key={answer.questionId}
                className={`p-4 rounded-lg border-2 ${
                  answer.correct ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {answer.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="font-semibold">Pregunta {index + 1}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {answer.score} / {answer.maxPoints} puntos
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-2">Tu respuesta:</p>
                  <div className="p-3 bg-white rounded border">
                    {typeof answer.answer === 'string' || typeof answer.answer === 'number' ? (
                      <p>{answer.answer}</p>
                    ) : (
                      <p>{JSON.stringify(answer.answer)}</p>
                    )}
                  </div>
                </div>

                {!answer.correct && answer.correctAnswer && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Respuesta correcta:</p>
                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      {typeof answer.correctAnswer === 'string' ||
                      typeof answer.correctAnswer === 'number' ? (
                        <p>{answer.correctAnswer}</p>
                      ) : (
                        <p>{JSON.stringify(answer.correctAnswer)}</p>
                      )}
                    </div>
                  </div>
                )}

                {answer.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-sm font-medium text-blue-900 mb-1">
                      Explicación:
                    </p>
                    <p className="text-sm text-blue-700">{answer.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex gap-4 justify-center">
        {!passed && attemptsRemaining !== undefined && attemptsRemaining > 0 && onRetry && (
          <Button onClick={onRetry} className="bg-black text-white hover:bg-gray-800">
            <RefreshCw className="w-4 h-4 mr-2" />
            Intentar de Nuevo
          </Button>
        )}
        {onBackToCourse && (
          <Button variant="outline" onClick={onBackToCourse}>
            Volver al Curso
          </Button>
        )}
      </div>
    </div>
  );
}
