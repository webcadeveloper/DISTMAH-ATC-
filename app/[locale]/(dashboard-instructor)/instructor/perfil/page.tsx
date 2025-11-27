'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone, MapPin, Award, BookOpen, Calendar, Edit, Save, Shield, Camera, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface UserProfile {
    id: string;
    name: string;
    email: string;
    phoneNumber: string | null;
    country: string | null;
    city: string | null;
    bio: string | null;
    avatar: string | null;
    profession: string | null;
    institution: string | null;
    _count: {
        enrollments: number;
        certificates: number;
    };
}

interface InstructorStats {
    totalCourses: number;
    totalStudents: number;
    averageRating: number;
}

export default function PerfilInstructorPage() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [stats, setStats] = useState<InstructorStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [uploadingAvatar, setUploadingAvatar] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');
    const [profession, setProfession] = useState('');
    const [institution, setInstitution] = useState('');

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [changingPassword, setChangingPassword] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [profileRes, statsRes] = await Promise.all([
                fetch('/api/profile'),
                fetch('/api/instructor/dashboard')
            ]);

            if (profileRes.ok) {
                const data = await profileRes.json();
                setProfile(data);
                setName(data.name || '');
                setPhoneNumber(data.phoneNumber || '');
                setCountry(data.country || '');
                setCity(data.city || '');
                setBio(data.bio || '');
                setProfession(data.profession || '');
                setInstitution(data.institution || '');
            }

            if (statsRes.ok) {
                const data = await statsRes.json();
                setStats({
                    totalCourses: data.totalCourses || 0,
                    totalStudents: data.totalStudents || 0,
                    averageRating: data.averageRating || 0
                });
            }
        } catch {
            toast.error('Error al cargar perfil');
        } finally {
            setLoading(false);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingAvatar(true);
        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const response = await fetch('/api/profile/avatar', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al subir imagen');
            }

            const { avatar } = await response.json();
            setProfile({ ...profile, avatar } as UserProfile);
            toast.success('Foto actualizada');
        } catch (error: any) {
            toast.error(error.message || 'Error al subir imagen');
        } finally {
            setUploadingAvatar(false);
        }
    };

    const handleSaveProfile = async () => {
        setSaving(true);
        try {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phoneNumber,
                    country,
                    city,
                    bio,
                    profession,
                    institution
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al guardar');
            }

            const updated = await response.json();
            setProfile(updated);
            setEditMode(false);
            toast.success('Perfil actualizado');
        } catch (error: any) {
            toast.error(error.message || 'Error al guardar perfil');
        } finally {
            setSaving(false);
        }
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error('Las contrasenas no coinciden');
            return;
        }

        if (newPassword.length < 8) {
            toast.error('La contrasena debe tener al menos 8 caracteres');
            return;
        }

        setChangingPassword(true);
        try {
            const response = await fetch('/api/profile/password', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword, newPassword })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al cambiar contrasena');
            }

            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            toast.success('Contrasena actualizada');
        } catch (error: any) {
            toast.error(error.message || 'Error al cambiar contrasena');
        } finally {
            setChangingPassword(false);
        }
    };

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Mi Perfil</h1>
                    <p className="text-neutral-600 dark:text-neutral-400">Gestiona tu informacion personal y profesional.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <p className="text-neutral-600 dark:text-neutral-400">Cargando perfil...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Mi Perfil</h1>
                    <p className="text-neutral-600 dark:text-neutral-400">Gestiona tu informacion personal y profesional.</p>
                </div>
                {!editMode ? (
                    <Button className="bg-neutral-900 hover:bg-neutral-800" onClick={() => setEditMode(true)}>
                        <Edit className="w-4 h-4 mr-2" /> Editar Perfil
                    </Button>
                ) : (
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setEditMode(false)}>
                            Cancelar
                        </Button>
                        <Button className="bg-neutral-900 hover:bg-neutral-800" onClick={handleSaveProfile} disabled={saving}>
                            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                            Guardar
                        </Button>
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900 dark:text-white">Informacion Personal</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Nombre Completo</label>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={!editMode}
                                        className="bg-neutral-50 border-neutral-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Email</label>
                                    <Input
                                        value={profile?.email || ''}
                                        disabled
                                        className="bg-neutral-100 border-neutral-200"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Telefono</label>
                                    <Input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        disabled={!editMode}
                                        placeholder="+52 (614) 123-4567"
                                        className="bg-neutral-50 border-neutral-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Ciudad</label>
                                    <Input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        disabled={!editMode}
                                        placeholder="Ciudad, Pais"
                                        className="bg-neutral-50 border-neutral-200"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Profesion</label>
                                    <Input
                                        value={profession}
                                        onChange={(e) => setProfession(e.target.value)}
                                        disabled={!editMode}
                                        placeholder="Ingeniero Civil"
                                        className="bg-neutral-50 border-neutral-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Institucion</label>
                                    <Input
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        disabled={!editMode}
                                        placeholder="DISTMAH ATC"
                                        className="bg-neutral-50 border-neutral-200"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900 dark:text-white">Biografia Profesional</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <textarea
                                className="w-full h-32 p-3 border border-neutral-200 rounded-md bg-neutral-50 text-neutral-900 text-sm disabled:bg-neutral-100"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                disabled={!editMode}
                                placeholder="Escribe una breve descripcion sobre tu experiencia y especialidades..."
                            />
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900 dark:text-white">Certificaciones</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Award className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-900 dark:text-white">Instructor Certificado ATC</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Autodesk Authorized Training Center</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-800 border-green-200">Vigente</Badge>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-4 border-neutral-300">
                                <Award className="w-4 h-4 mr-2" /> Agregar Certificacion
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900 dark:text-white">Seguridad</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-neutral-700 mb-2 block">Contrasena Actual</label>
                                <Input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="********"
                                    className="bg-neutral-50 border-neutral-200"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-neutral-700 mb-2 block">Nueva Contrasena</label>
                                <Input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="********"
                                    className="bg-neutral-50 border-neutral-200"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-neutral-700 mb-2 block">Confirmar Nueva Contrasena</label>
                                <Input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="********"
                                    className="bg-neutral-50 border-neutral-200"
                                />
                            </div>
                            <Button
                                variant="outline"
                                className="w-full border-neutral-300"
                                onClick={handleChangePassword}
                                disabled={changingPassword || !currentPassword || !newPassword}
                            >
                                {changingPassword ? (
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                ) : (
                                    <Shield className="w-4 h-4 mr-2" />
                                )}
                                Actualizar Contrasena
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardContent className="p-6 text-center">
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                onChange={handleAvatarChange}
                            />
                            <div
                                className="w-32 h-32 rounded-full bg-neutral-200 mx-auto mb-4 flex items-center justify-center overflow-hidden relative cursor-pointer group"
                                onClick={handleAvatarClick}
                            >
                                {profile?.avatar ? (
                                    <Image
                                        src={profile.avatar}
                                        alt={profile.name || 'Avatar'}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <User className="w-16 h-16 text-neutral-600" />
                                )}
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    {uploadingAvatar ? (
                                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                                    ) : (
                                        <Camera className="w-8 h-8 text-white" />
                                    )}
                                </div>
                            </div>
                            <h3 className="font-bold text-neutral-900 dark:text-white text-lg">{profile?.name || 'Instructor'}</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Instructor Certificado ATC</p>
                            <Button variant="outline" className="w-full border-neutral-300" onClick={handleAvatarClick}>
                                Cambiar Foto
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900 dark:text-white">Estadisticas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Cursos Activos</span>
                                </div>
                                <span className="font-bold text-neutral-900 dark:text-white">{stats?.totalCourses || 0}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <User className="w-5 h-5 text-green-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Estudiantes</span>
                                </div>
                                <span className="font-bold text-neutral-900 dark:text-white">{stats?.totalStudents || 0}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Award className="w-5 h-5 text-yellow-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Calificacion</span>
                                </div>
                                <span className="font-bold text-neutral-900 dark:text-white">
                                    {stats?.averageRating ? `${stats.averageRating.toFixed(1)}/5.0` : 'N/A'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Desde</span>
                                </div>
                                <span className="font-bold text-neutral-900 dark:text-white">2024</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900 dark:text-white">Contacto</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-neutral-600 mt-0.5" />
                                <div>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Email</p>
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white">{profile?.email}</p>
                                </div>
                            </div>
                            {profile?.phoneNumber && (
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-neutral-600 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Telefono</p>
                                        <p className="text-sm font-medium text-neutral-900 dark:text-white">{profile.phoneNumber}</p>
                                    </div>
                                </div>
                            )}
                            {profile?.city && (
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Ubicacion</p>
                                        <p className="text-sm font-medium text-neutral-900 dark:text-white">{profile.city}</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
