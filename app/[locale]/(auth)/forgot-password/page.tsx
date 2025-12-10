'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Mail, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setLoading(true);

        if (!email) {
            setError('Por favor ingresa tu email');
            setLoading(false);
            return;
        }

        try {
            const result = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await result.json();

            if (!result.ok) {
                setError(data.error || 'Error al enviar email de recuperación');
                setLoading(false);
                return;
            }

            setSuccess(true);
            setEmail('');
        } catch {
            setError('Error al enviar email. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-neutral-900">DISTMAH ATC</h1>
                        <p className="text-neutral-600 mt-2">Universidad Autodesk 2026</p>
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900">Recuperar Contraseña</h2>
                        <p className="text-neutral-600 mt-2">
                            Ingresa tu email y te enviaremos un enlace para resetear tu contraseña
                        </p>
                    </div>

                    {/* Error Alert */}
                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* Success Alert */}
                    {success && (
                        <Alert className="mb-6 border-green-500 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                Si el email existe en nuestro sistema, recibirás un correo con instrucciones
                                para resetear tu contraseña en los próximos minutos.
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="text-neutral-700 font-medium">
                                Correo Electrónico
                            </Label>
                            <div className="relative mt-2">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    className="pl-10"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                            disabled={loading}
                        >
                            {loading ? 'Enviando...' : 'Enviar Email de Recuperación'}
                        </Button>
                    </form>

                    {/* Back to Login */}
                    <div className="text-center mt-6">
                        <Link href="/login" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            ← Volver al inicio de sesión
                        </Link>
                    </div>

                    {/* Info */}
                    <div className="mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                        <p className="text-sm text-neutral-600">
                            <strong>Nota:</strong> El enlace de recuperación expirará en 1 hora por seguridad.
                            Si no recibes el email, verifica tu carpeta de spam.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
                <div className="max-w-md text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        ¿Olvidaste tu contraseña?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        No te preocupes, es algo que le pasa a todos. Te ayudaremos a recuperar
                        el acceso a tu cuenta de forma rápida y segura.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-xl">1</span>
                            </div>
                            <div>
                                <p className="font-semibold">Ingresa tu email</p>
                                <p className="text-sm text-blue-100">El email asociado a tu cuenta</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-xl">2</span>
                            </div>
                            <div>
                                <p className="font-semibold">Revisa tu correo</p>
                                <p className="text-sm text-blue-100">Recibirás un enlace de recuperación</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-xl">3</span>
                            </div>
                            <div>
                                <p className="font-semibold">Crea nueva contraseña</p>
                                <p className="text-sm text-blue-100">Elige una contraseña segura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
