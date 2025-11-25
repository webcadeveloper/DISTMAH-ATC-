'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { LogoDistmah } from '@/components/brand/LogoDistmah';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!email || !password) {
            setError('Por favor completa todos los campos');
            setLoading(false);
            return;
        }

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError('Email o contraseña incorrectos');
                setLoading(false);
                return;
            }

            window.location.href = '/estudiante/dashboard';
        } catch (err) {
            setError('Error al iniciar sesión. Intenta de nuevo.');
            setLoading(false);
        }
    };

    const handleMicrosoftLogin = () => {
        signIn('azure-ad', { callbackUrl: '/estudiante/dashboard' });
    };

    return (
        <div className="min-h-screen flex bg-black">
            {/* Left Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-neutral-900 rounded-2xl p-8 border border-white/10">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <LogoDistmah />
                    </div>

                    {/* Title */}
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-white">Iniciar Sesión</h2>
                        <p className="text-neutral-400 mt-2">
                            Accede a tus cursos y continúa tu aprendizaje
                        </p>
                    </div>

                    {/* Error Alert */}
                    {error && (
                        <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                            <AlertDescription className="text-red-400">{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="text-neutral-300 font-medium">
                                Correo Electrónico
                            </Label>
                            <div className="relative mt-2">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    className="pl-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <Label htmlFor="password" className="text-neutral-300 font-medium">
                                Contraseña
                            </Label>
                            <div className="relative mt-2">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="w-4 h-4 bg-neutral-800 border-neutral-700 rounded focus:ring-primary-500"
                                />
                                <Label htmlFor="remember" className="ml-2 text-sm text-neutral-400">
                                    Recordarme
                                </Label>
                            </div>
                            <Link
                                href="/recuperar-contrasena"
                                className="text-sm text-white hover:text-neutral-300 font-medium"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-500 text-white py-3 font-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-neutral-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-neutral-900 text-neutral-500">O continúa con</span>
                        </div>
                    </div>

                    {/* Microsoft Login */}
                    <Button
                        type="button"
                        onClick={handleMicrosoftLogin}
                        variant="outline"
                        className="w-full py-3 border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23">
                            <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                            <path fill="#f35325" d="M1 1h10v10H1z" />
                            <path fill="#81bc06" d="M12 1h10v10H12z" />
                            <path fill="#05a6f0" d="M1 12h10v10H1z" />
                            <path fill="#ffba08" d="M12 12h10v10H12z" />
                        </svg>
                        Iniciar sesión con Microsoft
                    </Button>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-neutral-400 mt-6">
                        ¿No tienes una cuenta?{' '}
                        <Link href="/registro" className="text-white hover:text-neutral-300 font-medium">
                            Regístrate aquí
                        </Link>
                    </p>

                    {/* Back to Home */}
                    <div className="text-center mt-6">
                        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300">
                            ← Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Video Background */}
            <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/video/LOGIN.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                {/* Content */}
                <div className="relative z-10 max-w-md text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        Aprende AutoCAD, Revit y Civil 3D con expertos
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Más de 16 cursos profesionales de Autodesk 2026 con certificación oficial
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <div>
                                <p className="font-semibold">Certificación Autodesk</p>
                                <p className="text-sm text-white/70">Reconocida internacionalmente</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">👨‍🏫</span>
                            </div>
                            <div>
                                <p className="font-semibold">Instructores Expertos</p>
                                <p className="text-sm text-white/70">Profesionales certificados</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">💻</span>
                            </div>
                            <div>
                                <p className="font-semibold">Proyectos Reales</p>
                                <p className="text-sm text-white/70">Aprende con casos prácticos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
