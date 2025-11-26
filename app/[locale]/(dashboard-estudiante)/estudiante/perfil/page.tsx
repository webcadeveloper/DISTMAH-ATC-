'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Lock, Camera, Save } from 'lucide-react';
import { useState } from 'react';

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: 'Juan Carlos Pérez',
    email: 'juan.perez@ejemplo.com',
    telefono: '+52 33 1234 5678',
    pais: 'México',
    ciudad: 'Guadalajara',
    ocupacion: 'Ingeniero Civil',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

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

  const handleSaveProfile = () => {
    alert('Perfil actualizado correctamente');
    setIsEditing(false);
  };

  const handleSavePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Contraseña actualizada correctamente');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

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
                  <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                    {formData.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                    <Camera className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-neutral-900 mb-1">{formData.nombre}</h2>
                <p className="text-sm text-neutral-600 mb-4">{formData.ocupacion}</p>

                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{formData.ciudad}, {formData.pais}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{formData.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">Estadísticas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Cursos completados</span>
                    <span className="font-semibold text-neutral-900">3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Horas de aprendizaje</span>
                    <span className="font-semibold text-neutral-900">127h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Certificados</span>
                    <span className="font-semibold text-neutral-900">3</span>
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
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveProfile}>
                      <Save className="w-4 h-4 mr-2" />
                      Guardar
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nombre" className="text-neutral-700 mb-2 block">
                    Nombre Completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
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
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-neutral-700 mb-2 block">
                    Teléfono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="ocupacion" className="text-neutral-700 mb-2 block">
                    Ocupación
                  </Label>
                  <Input
                    id="ocupacion"
                    name="ocupacion"
                    value={formData.ocupacion}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="border-neutral-200"
                  />
                </div>

                <div>
                  <Label htmlFor="pais" className="text-neutral-700 mb-2 block">
                    País
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="pais"
                      name="pais"
                      value={formData.pais}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10 border-neutral-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="ciudad" className="text-neutral-700 mb-2 block">
                    Ciudad
                  </Label>
                  <Input
                    id="ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="border-neutral-200"
                  />
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
                      placeholder="Ingresa tu nueva contraseña"
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
                >
                  <Lock className="w-4 h-4 mr-2" />
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
