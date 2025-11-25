'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Mail, Lock, User, Eye, EyeOff, Phone, MapPin } from 'lucide-react';
import { LogoDistmah } from '@/components/brand/LogoDistmah';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        country: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Por favor completa todos los campos obligatorios');
            setLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            setLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            setLoading(false);
            return;
        }

        if (!acceptTerms) {
            setError('Debes aceptar los términos y condiciones');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                    country: formData.country,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Error al crear la cuenta');
                setLoading(false);
                return;
            }

            window.location.href = '/login?registered=true';
        } catch (err) {
            setError('Error al crear la cuenta. Intenta de nuevo.');
            setLoading(false);
        }
    };

    const handleMicrosoftRegister = () => {
        window.location.href = '/api/auth/signin?provider=azure-ad';
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Register Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <LogoDistmah />
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900">Crear Cuenta</h2>
                        <p className="text-neutral-600 mt-2">
                            Regístrate y comienza tu camino en Autodesk
                        </p>
                    </div>

                    {/* Error Alert */}
                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* Register Form */}
                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Name */}
                        <div>
                            <Label htmlFor="name" className="text-neutral-700 font-medium">
                                Nombre Completo <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative mt-2">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="Juan Pérez"
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="text-neutral-700 font-medium">
                                Correo Electrónico <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative mt-2">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="tu@email.com"
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone & Country in one row */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Phone */}
                            <div>
                                <Label htmlFor="phone" className="text-neutral-700 font-medium">
                                    Teléfono
                                </Label>
                                <div className="relative mt-2">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        placeholder="+58 412..."
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            {/* Country */}
                            <div>
                                <Label htmlFor="country" className="text-neutral-700 font-medium">
                                    País
                                </Label>
                                <div className="relative mt-2">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 z-10" />
                                    <Select
                                        value={formData.country}
                                        onValueChange={(value) => handleChange('country', value)}
                                    >
                                        <SelectTrigger className="pl-10">
                                            <SelectValue placeholder="Selecciona" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ve">Venezuela</SelectItem>
                                            <SelectItem value="co">Colombia</SelectItem>
                                            <SelectItem value="mx">México</SelectItem>
                                            <SelectItem value="ar">Argentina</SelectItem>
                                            <SelectItem value="pe">Perú</SelectItem>
                                            <SelectItem value="cl">Chile</SelectItem>
                                            <SelectItem value="ec">Ecuador</SelectItem>
                                            <SelectItem value="es">España</SelectItem>
                                            <SelectItem value="us">Estados Unidos</SelectItem>
                                            <SelectItem value="other">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <Label htmlFor="password" className="text-neutral-700 font-medium">
                                Contraseña <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative mt-2">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    placeholder="Mínimo 8 caracteres"
                                    className="pl-10 pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <Label htmlFor="confirmPassword" className="text-neutral-700 font-medium">
                                Confirmar Contraseña <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative mt-2">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                    placeholder="Repite tu contraseña"
                                    className="pl-10 pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                            />
                            <Label htmlFor="terms" className="ml-2 text-sm text-neutral-600 cursor-pointer">
                                Acepto los{' '}
                                <Link href="/terminos" className="text-blue-600 hover:text-blue-700 font-medium">
                                    términos
                                </Link>{' '}
                                y{' '}
                                <Link href="/privacidad" className="text-blue-600 hover:text-blue-700 font-medium">
                                    privacidad
                                </Link>
                            </Label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                            disabled={loading}
                        >
                            {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-neutral-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-neutral-500">O regístrate con</span>
                        </div>
                    </div>

                    {/* Microsoft Register */}
                    <Button
                        type="button"
                        onClick={handleMicrosoftRegister}
                        variant="outline"
                        className="w-full py-3 border-2 hover:bg-neutral-50"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23">
                            <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                            <path fill="#f35325" d="M1 1h10v10H1z" />
                            <path fill="#81bc06" d="M12 1h10v10H12z" />
                            <path fill="#05a6f0" d="M1 12h10v10H1z" />
                            <path fill="#ffba08" d="M12 12h10v10H12z" />
                        </svg>
                        Registrarse con Microsoft
                    </Button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-neutral-600 mt-6">
                        ¿Ya tienes una cuenta?{' '}
                        <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                            Inicia sesión
                        </Link>
                    </p>

                    {/* Back to Home */}
                    <div className="text-center mt-6">
                        <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
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
                        Únete a miles de profesionales
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Aprende de los mejores instructores certificados por Autodesk y transforma tu carrera
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
