'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Plus, Save, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { QuestionType } from '@prisma/client';

interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface QuestionData {
  id?: string;
  type: QuestionType;
  question: string;
  points: number;
  order: number;
  options?: Option[];
  correctAnswer?: any;
  rubric?: string;
  explanation?: string;
}

interface QuestionEditorProps {
  examId: string;
  initialData?: QuestionData;
  questionNumber: number;
  onSave?: () => void;
  onDelete?: () => void;
}

export function QuestionEditor({
  examId,
  initialData,
  questionNumber,
  onSave,
  onDelete,
}: QuestionEditorProps) {
  const [questionData, setQuestionData] = useState<QuestionData>(
    initialData || {
      type: 'MULTIPLE_CHOICE',
      question: '',
      points: 1,
      order: questionNumber - 1,
      options: [
        { id: '1', text: '', isCorrect: false },
        { id: '2', text: '', isCorrect: false },
        { id: '3', text: '', isCorrect: false },
        { id: '4', text: '', isCorrect: false },
      ],
      explanation: '',
    }
  );
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleTypeChange = (type: QuestionType) => {
    setQuestionData((prev) => {
      const newData: QuestionData = {
        ...prev,
        type,
      };

      if (type === 'MULTIPLE_CHOICE') {
        newData.options = [
          { id: '1', text: '', isCorrect: false },
          { id: '2', text: '', isCorrect: false },
          { id: '3', text: '', isCorrect: false },
          { id: '4', text: '', isCorrect: false },
        ];
        newData.correctAnswer = null;
      } else if (type === 'TRUE_FALSE') {
        newData.options = [
          { id: 'true', text: 'Verdadero' },
          { id: 'false', text: 'Falso' },
        ];
        newData.correctAnswer = null;
      } else {
        newData.options = undefined;
        newData.correctAnswer = null;
      }

      return newData;
    });
  };

  const handleOptionChange = (index: number, text: string) => {
    setQuestionData((prev) => {
      const newOptions = [...(prev.options || [])];
      newOptions[index] = { ...newOptions[index], text };
      return { ...prev, options: newOptions };
    });
  };

  const handleCorrectAnswerChange = (index: number) => {
    if (questionData.type === 'MULTIPLE_CHOICE') {
      setQuestionData((prev) => {
        const newOptions = prev.options?.map((opt, i) => ({
          ...opt,
          isCorrect: i === index,
        }));
        return {
          ...prev,
          options: newOptions,
          correctAnswer: index,
        };
      });
    } else if (questionData.type === 'TRUE_FALSE') {
      setQuestionData((prev) => ({
        ...prev,
        correctAnswer: index === 0 ? 'true' : 'false',
      }));
    }
  };

  const addOption = () => {
    if (questionData.type === 'MULTIPLE_CHOICE') {
      setQuestionData((prev) => ({
        ...prev,
        options: [
          ...(prev.options || []),
          { id: String((prev.options?.length || 0) + 1), text: '', isCorrect: false },
        ],
      }));
    }
  };

  const removeOption = (index: number) => {
    if (questionData.type === 'MULTIPLE_CHOICE' && (questionData.options?.length || 0) > 2) {
      setQuestionData((prev) => ({
        ...prev,
        options: prev.options?.filter((_, i) => i !== index),
      }));
    }
  };

  const handleSave = async () => {
    if (!questionData.question.trim()) {
      toast.error('La pregunta no puede estar vacía');
      return;
    }

    if (questionData.type === 'MULTIPLE_CHOICE' && !questionData.correctAnswer) {
      toast.error('Debes seleccionar la respuesta correcta');
      return;
    }

    if (questionData.type === 'TRUE_FALSE' && !questionData.correctAnswer) {
      toast.error('Debes seleccionar la respuesta correcta');
      return;
    }

    setIsSaving(true);
    try {
      const url = questionData.id
        ? `/api/instructor/questions/${questionData.id}`
        : `/api/instructor/exams/${examId}/questions`;

      const response = await fetch(url, {
        method: questionData.id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al guardar la pregunta');
      }

      toast.success('Pregunta guardada exitosamente');
      onSave?.();
    } catch (error) {
      console.error('Error saving question:', error);
      toast.error(error instanceof Error ? error.message : 'Error al guardar la pregunta');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!questionData.id) {
      onDelete?.();
      return;
    }

    if (!confirm('¿Estás seguro de eliminar esta pregunta?')) {
      return;
    }

    try {
      const response = await fetch(`/api/instructor/questions/${questionData.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la pregunta');
      }

      toast.success('Pregunta eliminada');
      onDelete?.();
    } catch (error) {
      console.error('Error deleting question:', error);
      toast.error('Error al eliminar la pregunta');
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Pregunta {questionNumber}</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Editar' : 'Vista Previa'}
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDelete}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showPreview ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Tipo de pregunta</Label>
                <Select
                  value={questionData.type}
                  onValueChange={(value) => handleTypeChange(value as QuestionType)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MULTIPLE_CHOICE">Opción Múltiple</SelectItem>
                    <SelectItem value="TRUE_FALSE">Verdadero/Falso</SelectItem>
                    <SelectItem value="SHORT_ANSWER">Respuesta Corta</SelectItem>
                    <SelectItem value="ESSAY">Ensayo</SelectItem>
                    <SelectItem value="FILE_UPLOAD">Subir Archivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Puntos</Label>
                <Input
                  type="number"
                  min={1}
                  value={questionData.points}
                  onChange={(e) =>
                    setQuestionData({ ...questionData, points: parseInt(e.target.value) })
                  }
                />
              </div>
            </div>

            <div>
              <Label>Pregunta *</Label>
              <Textarea
                value={questionData.question}
                onChange={(e) =>
                  setQuestionData({ ...questionData, question: e.target.value })
                }
                placeholder="Escribe tu pregunta aquí"
                rows={3}
              />
            </div>

            {questionData.type === 'MULTIPLE_CHOICE' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Opciones</Label>
                  <Button variant="outline" size="sm" onClick={addOption}>
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar Opción
                  </Button>
                </div>
                {questionData.options?.map((option, index) => (
                  <div key={option.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={option.isCorrect}
                      onCheckedChange={() => handleCorrectAnswerChange(index)}
                    />
                    <Input
                      value={option.text}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      placeholder={`Opción ${index + 1}`}
                      className="flex-1"
                    />
                    {(questionData.options?.length || 0) > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeOption(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <p className="text-sm text-neutral-500">
                  Marca la casilla de la respuesta correcta
                </p>
              </div>
            )}

            {questionData.type === 'TRUE_FALSE' && (
              <div className="space-y-2">
                <Label>Respuesta correcta</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={questionData.correctAnswer === 'true'}
                      onCheckedChange={() => handleCorrectAnswerChange(0)}
                    />
                    <Label>Verdadero</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={questionData.correctAnswer === 'false'}
                      onCheckedChange={() => handleCorrectAnswerChange(1)}
                    />
                    <Label>Falso</Label>
                  </div>
                </div>
              </div>
            )}

            {questionData.type === 'SHORT_ANSWER' && (
              <div>
                <Label>Respuesta esperada (para auto-grading)</Label>
                <Input
                  value={questionData.correctAnswer || ''}
                  onChange={(e) =>
                    setQuestionData({ ...questionData, correctAnswer: e.target.value })
                  }
                  placeholder="Palabras clave separadas por comas"
                />
                <p className="text-sm text-neutral-500 mt-1">
                  El sistema buscará estas palabras clave en la respuesta del estudiante
                </p>
              </div>
            )}

            {(questionData.type === 'ESSAY' || questionData.type === 'FILE_UPLOAD') && (
              <div>
                <Label>Rúbrica de calificación</Label>
                <Textarea
                  value={questionData.rubric || ''}
                  onChange={(e) =>
                    setQuestionData({ ...questionData, rubric: e.target.value })
                  }
                  placeholder="Criterios de evaluación para calificación manual"
                  rows={4}
                />
              </div>
            )}

            <div>
              <Label>Explicación de respuesta correcta</Label>
              <Textarea
                value={questionData.explanation || ''}
                onChange={(e) =>
                  setQuestionData({ ...questionData, explanation: e.target.value })
                }
                placeholder="Explicación que verá el estudiante al finalizar el examen"
                rows={3}
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSave} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Guardando...' : 'Guardar Pregunta'}
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="font-medium mb-2">{questionData.question}</p>
              {questionData.type === 'MULTIPLE_CHOICE' &&
                questionData.options?.map((option, index) => (
                  <div key={option.id} className="flex items-center gap-2 mt-2">
                    <input
                      type="radio"
                      name="preview"
                      disabled
                      checked={option.isCorrect}
                    />
                    <span className={option.isCorrect ? 'font-medium text-green-600' : ''}>
                      {option.text || `Opción ${index + 1}`}
                    </span>
                  </div>
                ))}
              {questionData.type === 'TRUE_FALSE' && (
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preview"
                      disabled
                      checked={questionData.correctAnswer === 'true'}
                    />
                    <span
                      className={
                        questionData.correctAnswer === 'true'
                          ? 'font-medium text-green-600'
                          : ''
                      }
                    >
                      Verdadero
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preview"
                      disabled
                      checked={questionData.correctAnswer === 'false'}
                    />
                    <span
                      className={
                        questionData.correctAnswer === 'false'
                          ? 'font-medium text-green-600'
                          : ''
                      }
                    >
                      Falso
                    </span>
                  </div>
                </div>
              )}
              {questionData.type === 'SHORT_ANSWER' && (
                <Input className="mt-2" placeholder="Respuesta del estudiante" disabled />
              )}
              {questionData.type === 'ESSAY' && (
                <Textarea className="mt-2" placeholder="Ensayo del estudiante" disabled rows={4} />
              )}
              {questionData.type === 'FILE_UPLOAD' && (
                <div className="mt-2 p-4 border-2 border-dashed rounded text-center text-neutral-500">
                  Subir archivo
                </div>
              )}
            </div>
            {questionData.explanation && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900 mb-1">Explicación:</p>
                <p className="text-sm text-blue-700">{questionData.explanation}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
