'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = useMemo(() => searchParams.get('token'), [searchParams]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!password || !confirmPassword) {
            setError('Por favor completa todos los campos');
            setLoading(false);
            return;
        }

        if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            setLoading(false);
            return;
        }

        if (!token) {
            setError('Token inválido');
            setLoading(false);
            return;
        }

        try {
            const result = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token,
                    password,
                }),
            });

            const data = await result.json();

            if (!result.ok) {
                setError(data.error || 'Error al resetear contraseña');
                setLoading(false);
                return;
            }

            setSuccess(true);
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        } catch {
            setError('Error al resetear contraseña. Intenta de nuevo.');
            setLoading(false);
        }
    };

    const getPasswordStrength = (pass: string) => {
        if (pass.length === 0) return { strength: 0, label: '', color: '' };
        if (pass.length < 8) return { strength: 1, label: 'Débil', color: 'bg-red-500' };

        let strength = 1;
        if (pass.length >= 12) strength++;
        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
        if (/\d/.test(pass)) strength++;
        if (/[^a-zA-Z0-9]/.test(pass)) strength++;

        if (strength <= 2) return { strength: 2, label: 'Media', color: 'bg-yellow-500' };
        if (strength <= 4) return { strength: 3, label: 'Buena', color: 'bg-green-500' };
        return { strength: 4, label: 'Excelente', color: 'bg-emerald-500' };
    };

    const passwordStrength = getPasswordStrength(password);

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
                        <h2 className="text-2xl font-bold text-neutral-900">Crear Nueva Contraseña</h2>
                        <p className="text-neutral-600 mt-2">
                            Ingresa tu nueva contraseña para recuperar el acceso a tu cuenta
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
                                Contraseña actualizada exitosamente. Redirigiendo al inicio de sesión...
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Invalid Token Alert */}
                    {!token && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                Token inválido o faltante. Por favor solicita un nuevo enlace de recuperación.
                            </AlertDescription>
                        </Alert>
                    )}

                    {!success && token && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nueva Contraseña */}
                            <div>
                                <Label htmlFor="password" className="text-neutral-700 font-medium">
                                    Nueva Contraseña
                                </Label>
                                <div className="relative mt-2">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="pl-10 pr-10"
                                        required
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Password Strength Indicator */}
                                {password.length > 0 && (
                                    <div className="mt-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="flex-1 h-1 bg-neutral-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all ${passwordStrength.color}`}
                                                    style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-neutral-600">{passwordStrength.label}</span>
                                        </div>
                                        <p className="text-xs text-neutral-500">
                                            Mínimo 8 caracteres. Usa mayúsculas, minúsculas, números y símbolos.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Confirmar Contraseña */}
                            <div>
                                <Label htmlFor="confirmPassword" className="text-neutral-700 font-medium">
                                    Confirmar Contraseña
                                </Label>
                                <div className="relative mt-2">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="pl-10 pr-10"
                                        required
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Match Indicator */}
                                {confirmPassword && (
                                    <p className={`text-xs mt-1 ${password === confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                                        {password === confirmPassword ? 'Las contraseñas coinciden' : 'Las contraseñas no coinciden'}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                                disabled={loading}
                            >
                                {loading ? 'Actualizando...' : 'Actualizar Contraseña'}
                            </Button>
                        </form>
                    )}

                    {/* Back to Login */}
                    <div className="text-center mt-6">
                        <Link href="/login" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            ← Volver al inicio de sesión
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
                <div className="max-w-md text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        Seguridad de tu Cuenta
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Elige una contraseña segura para proteger tu cuenta y tus cursos.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                ✓
                            </div>
                            <p className="text-blue-100">Mínimo 8 caracteres de longitud</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                ✓
                            </div>
                            <p className="text-blue-100">Combina mayúsculas y minúsculas</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                ✓
                            </div>
                            <p className="text-blue-100">Incluye al menos un número</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                ✓
                            </div>
                            <p className="text-blue-100">Usa caracteres especiales (@, #, $, etc.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <ResetPasswordForm />
        </Suspense>
    );
}
