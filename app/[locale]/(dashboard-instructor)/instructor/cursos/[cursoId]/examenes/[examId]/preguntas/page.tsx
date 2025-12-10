'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { QuestionEditor } from '@/components/instructor/QuestionEditor';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Plus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function PreguntasExamenPage() {
  const params = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewQuestion, setShowNewQuestion] = useState(false);

  const examId = params.examId as string;
  const cursoId = params.cursoId as string;

  useEffect(() => {
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId]);

  const loadQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/instructor/exams/${examId}/questions`);
      if (!response.ok) throw new Error('Error al cargar preguntas');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error loading questions:', error);
      toast.error('Error al cargar las preguntas');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionSaved = () => {
    setShowNewQuestion(false);
    loadQuestions();
  };

  const handleQuestionDeleted = () => {
    loadQuestions();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`/instructor/cursos/${cursoId}/examenes`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Gestionar Preguntas</h1>
            <p className="text-neutral-500 mt-1">
              {questions.length} pregunta{questions.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <Button onClick={() => setShowNewQuestion(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Agregar Pregunta
        </Button>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <QuestionEditor
            key={question.id}
            examId={examId}
            initialData={question}
            questionNumber={index + 1}
            onSave={handleQuestionSaved}
            onDelete={handleQuestionDeleted}
          />
        ))}

        {showNewQuestion && (
          <QuestionEditor
            examId={examId}
            questionNumber={questions.length + 1}
            onSave={handleQuestionSaved}
            onDelete={() => setShowNewQuestion(false)}
          />
        )}

        {questions.length === 0 && !showNewQuestion && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h3 className="text-xl font-semibold mb-2">No hay preguntas aún</h3>
              <p className="text-neutral-500 mb-6">
                Agrega preguntas para completar tu examen
              </p>
              <Button onClick={() => setShowNewQuestion(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Agregar Primera Pregunta
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
