'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Lock, Camera, Save, Loader2, Briefcase, Building } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';

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

export default function PerfilPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    profession: '',
    institution: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await fetch('/api/profile');
      if (!response.ok) throw new Error('Error al cargar perfil');
      const data = await response.json();
      setProfile(data);
      setFormData({
        name: data.name || '',
        email: data.email || '',
        phoneNumber: data.phoneNumber || '',
        country: data.country || '',
        city: data.city || '',
        profession: data.profession || '',
        institution: data.institution || '',
      });
    } catch (error) {
      toast.error('Error al cargar el perfil');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.phoneNumber || null,
          country: formData.country || null,
          city: formData.city || null,
          profession: formData.profession || null,
          institution: formData.institution || null,
        }),
      });

      if (!response.ok) throw new Error('Error al guardar');

      const updatedProfile = await response.json();
      setProfile({ ...profile, ...updatedProfile } as UserProfile);
      toast.success('Perfil actualizado correctamente');
      setIsEditing(false);
    } catch (error) {
      toast.error('Error al guardar el perfil');
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('La imagen debe ser menor a 5MB');
      return;
    }

    setUploadingAvatar(true);
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await fetch('/api/profile/avatar', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al subir imagen');
      }

      const { avatar } = await response.json();
      setProfile({ ...profile, avatar } as UserProfile);
      toast.success('Foto actualizada correctamente');
    } catch (error: any) {
      toast.error(error.message || 'Error al subir la foto');
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleSavePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast.error('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    setChangingPassword(true);
    try {
      const response = await fetch('/api/profile/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al cambiar contraseña');
      }

      toast.success('Contraseña actualizada correctamente');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error: any) {
      toast.error(error.message || 'Error al cambiar la contraseña');
    } finally {
      setChangingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Mi Perfil</h1>
          <p className="text-neutral-600">Gestiona tu información personal y configuración de cuenta</p>
        </div>
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
            <p className="text-neutral-600">Cargando perfil...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Mi Perfil</h1>
        <p className="text-neutral-600">Gestiona tu información personal y configuración de cuenta</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <Card className="border border-neutral-200">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="hidden"
                  />
                  {profile?.avatar ? (
                    <div className="w-32 h-32 rounded-full overflow-hidden relative">
                      <Image
                        src={profile.avatar}
                        alt={profile.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                      {formData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <button
                    onClick={handleAvatarClick}
                    disabled={uploadingAvatar}
                    className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors disabled:opacity-50"
                  >
                    {uploadingAvatar ? (
                      <Loader2 className="w-5 h-5 text-neutral-600 animate-spin" />
                    ) : (
                      <Camera className="w-5 h-5 text-neutral-600" />
                    )}
                  </button>
                </div>
                <h2 className="text-xl font-bold text-neutral-900 mb-1">{profile?.name}</h2>
                <p className="text-sm text-neutral-600 mb-4">{formData.profession || 'Sin profesión'}</p>

                <div className="space-y-2 text-sm text-neutral-600">
                  {(formData.city || formData.country) && (
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{[formData.city, formData.country].filter(Boolean).join(', ')}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{profile?.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">Estadísticas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Cursos inscritos</span>
                    <span className="font-semibold text-neutral-900">{profile?._count?.enrollments || 0}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Certificados</span>
                    <span className="font-semibold text-neutral-900">{profile?._count?.certificates || 0}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900">Información Personal</h3>
                {!isEditing ? (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)} disabled={saving}>
                      Cancelar
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveProfile} disabled={saving}>
                      {saving ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4 mr-2" />
                      )}
                      Guardar
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-neutral-700 mb-2 block">
                    Nombre Completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-neutral-700 mb-2 block">
                    Correo Electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      disabled
                      className="pl-10 border-neutral-200 bg-neutral-50"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">El email no se puede cambiar</p>
                </div>

                <div>
                  <Label htmlFor="phoneNumber" className="text-neutral-700 mb-2 block">
                    Teléfono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="profession" className="text-neutral-700 mb-2 block">
                    Profesión
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                      placeholder="Ingeniero Civil"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-neutral-700 mb-2 block">
                    País
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                      placeholder="México"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city" className="text-neutral-700 mb-2 block">
                    Ciudad
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="border-neutral-200"
                    placeholder="Ciudad de México"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="institution" className="text-neutral-700 mb-2 block">
                    Institución / Empresa
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                      placeholder="Universidad / Empresa"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Cambiar Contraseña</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="text-neutral-700 mb-2 block">
                    Contraseña Actual
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="pl-10 border-neutral-200"
                      placeholder="Ingresa tu contraseña actual"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="newPassword" className="text-neutral-700 mb-2 block">
                    Nueva Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="pl-10 border-neutral-200"
                      placeholder="Mínimo 8 caracteres"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-neutral-700 mb-2 block">
                    Confirmar Nueva Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="pl-10 border-neutral-200"
                      placeholder="Confirma tu nueva contraseña"
                    />
                  </div>
                </div>

                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleSavePassword}
                  disabled={changingPassword || !passwordData.currentPassword || !passwordData.newPassword}
                >
                  {changingPassword ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Lock className="w-4 h-4 mr-2" />
                  )}
                  Actualizar Contraseña
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-red-200 bg-red-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-red-900 mb-2">Zona de Peligro</h3>
              <p className="text-sm text-red-700 mb-4">
                Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten en cuenta esto.
              </p>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                Eliminar Cuenta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
