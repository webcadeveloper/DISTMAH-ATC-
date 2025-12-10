'use client';

import { useState } from 'react';
import { CheckCircle, Clock, AlertCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileUploader } from '@/components/cms/MediaLibrary/FileUploader';
import { toast } from 'sonner';

interface AssignmentSubmissionProps {
    lessonId: string;
    dueDate?: Date;
    maxScore?: number;
}

type SubmissionStatus = 'pending' | 'submitted' | 'graded' | 'late';

export function AssignmentSubmission({ dueDate }: AssignmentSubmissionProps) {
    const [status, setStatus] = useState<SubmissionStatus>('pending');
    const [files, setFiles] = useState<any[]>([]);
    const [submittedDate, setSubmittedDate] = useState<Date | null>(null);

    const handleFilesUploaded = (uploadedFiles: any[]) => {
        setFiles(uploadedFiles);
    };

    const handleSubmit = async () => {
        if (files.length === 0) {
            toast.error('Debes adjuntar al menos un archivo para entregar.');
            return;
        }

        // Mock submission API call
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1500)),
            {
                loading: 'Enviando tarea...',
                success: () => {
                    setStatus('submitted');
                    setSubmittedDate(new Date());
                    return 'Tarea entregada exitosamente';
                },
                error: 'Error al enviar la tarea',
            }
        );
    };

    return (
        <Card className="w-full border-neutral-200 shadow-sm">
            <CardHeader className="bg-neutral-50 border-b border-neutral-100 pb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg font-semibold text-neutral-900">Entrega de Tarea</CardTitle>
                        <CardDescription>Sube tus archivos para completar este ejercicio.</CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        {status === 'pending' && <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pendiente</Badge>}
                        {status === 'submitted' && <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Entregado</Badge>}
                        {status === 'graded' && <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Calificado</Badge>}

                        {dueDate && (
                            <div className="flex items-center gap-1 text-xs text-neutral-500">
                                <Clock className="w-3 h-3" />
                                <span>Vence: {dueDate.toLocaleDateString()}</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                {status === 'pending' ? (
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
                            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-blue-800">
                                <p className="font-medium mb-1">Instrucciones de entrega:</p>
                                <ul className="list-disc list-inside space-y-1 opacity-90">
                                    <li>Sube el archivo .dwg o .rvt final del ejercicio.</li>
                                    <li>Asegúrate de purgar el archivo antes de subirlo.</li>
                                    <li>Si tienes varios archivos, comprímelos en un .zip.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-neutral-900">Archivos de tu entrega:</h4>

                            {files.length > 0 ? (
                                <div className="space-y-3">
                                    {files.map((file, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-white border border-neutral-200 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                                                    <FileText className="w-5 h-5 text-neutral-500" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-neutral-900">{file.title}</p>
                                                    <p className="text-xs text-neutral-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                                            >
                                                Eliminar
                                            </Button>
                                        </div>
                                    ))}
                                    <div className="flex justify-end">
                                        <Button variant="outline" size="sm" onClick={() => setFiles([])}>
                                            Cambiar archivos
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <FileUploader
                                    onFilesUploaded={handleFilesUploaded}
                                    acceptedTypes={['.dwg', '.rvt', '.pdf', '.zip', '.rar']}
                                    maxSize={100 * 1024 * 1024} // 100MB
                                    multiple={false}
                                />
                            )}
                        </div>

                        <div className="pt-4 border-t border-neutral-100 flex justify-end">
                            <Button
                                onClick={handleSubmit}
                                disabled={files.length === 0}
                                className="bg-primary-600 hover:bg-primary-700"
                            >
                                Entregar Tarea
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">¡Tarea Entregada!</h3>
                        <p className="text-neutral-600 mb-6">
                            Tu entrega ha sido recibida el {submittedDate?.toLocaleString()}.<br />
                            Recibirás una notificación cuando sea calificada.
                        </p>
                        <Button variant="outline" onClick={() => setStatus('pending')}>
                            Editar entrega (Reenviar)
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
