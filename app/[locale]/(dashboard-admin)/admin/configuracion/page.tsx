'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Shield,
  Settings,
  Users,
  BookOpen,
  Save,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { toast } from 'sonner';

interface Role {
  name: string;
  displayName: string;
  permissions: {
    [key: string]: boolean;
  };
}

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  maxEnrollmentsPerUser: number;
  allowSelfRegistration: boolean;
  requireEmailVerification: boolean;
  enableCertificates: boolean;
  enablePayments: boolean;
  defaultCurrency: string;
  maintenanceMode: boolean;
}

export default function ConfigurationPage() {
  const [roles] = useState<Role[]>([
    {
      name: 'ADMIN',
      displayName: 'Administrador',
      permissions: {
        manageUsers: true,
        manageCourses: true,
        managePayments: true,
        viewReports: true,
        manageSettings: true,
        manageCertificates: true,
      },
    },
    {
      name: 'INSTRUCTOR',
      displayName: 'Instructor',
      permissions: {
        manageUsers: false,
        manageCourses: true,
        managePayments: false,
        viewReports: true,
        manageSettings: false,
        manageCertificates: true,
      },
    },
    {
      name: 'STUDENT',
      displayName: 'Estudiante',
      permissions: {
        manageUsers: false,
        manageCourses: false,
        managePayments: false,
        viewReports: false,
        manageSettings: false,
        manageCertificates: false,
      },
    },
  ]);

  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'DISTMAH ATC',
    siteDescription: 'Authorized Training Center - Cursos Profesionales de Autodesk',
    contactEmail: 'contacto@distmah.com',
    maxEnrollmentsPerUser: 10,
    allowSelfRegistration: true,
    requireEmailVerification: true,
    enableCertificates: true,
    enablePayments: true,
    defaultCurrency: 'USD',
    maintenanceMode: false,
  });

  const [saving, setSaving] = useState(false);

  const handleSaveSettings = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (!response.ok) throw new Error('Error al guardar configuración');

      toast.success('Configuración guardada exitosamente');
    } catch (error: any) {
      toast.error(error.message || 'Error al guardar configuración');
    } finally {
      setSaving(false);
    }
  };

  const permissionLabels = {
    manageUsers: 'Gestionar usuarios',
    manageCourses: 'Gestionar cursos',
    managePayments: 'Gestionar pagos',
    viewReports: 'Ver reportes',
    manageSettings: 'Gestionar configuración',
    manageCertificates: 'Gestionar certificados',
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black">Configuración del Sistema</h1>
        <p className="text-gray-600 mt-1">
          Gestiona roles, permisos y configuración general de DISTMAH ATC
        </p>
      </div>

      <Tabs defaultValue="roles" className="space-y-6">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="roles">
            <Shield className="w-4 h-4 mr-2" />
            Roles y Permisos
          </TabsTrigger>
          <TabsTrigger value="general">
            <Settings className="w-4 h-4 mr-2" />
            Configuración General
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle>Roles y Permisos del Sistema</CardTitle>
              <CardDescription>
                Define qué acciones puede realizar cada tipo de usuario en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Rol</TableHead>
                    {Object.entries(permissionLabels).map(([key, label]) => (
                      <TableHead key={key} className="text-center">
                        {label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.name}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              role.name === 'ADMIN'
                                ? 'bg-blue-100 text-blue-900'
                                : role.name === 'INSTRUCTOR'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }
                          >
                            {role.displayName}
                          </Badge>
                        </div>
                      </TableCell>
                      {Object.keys(permissionLabels).map((permission) => (
                        <TableCell key={permission} className="text-center">
                          {role.permissions[permission] ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Nota:</strong> Los permisos son configurables a nivel de código. Para
                  modificar permisos, contacta al equipo de desarrollo o edita la configuración en
                  el archivo de roles del sistema.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-900" />
                  Administradores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Acceso completo al sistema. Pueden gestionar usuarios, cursos, pagos y
                  configuración.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Gestión total de usuarios</li>
                  <li>• Publicar/archivar cursos</li>
                  <li>• Acceso a reportes financieros</li>
                  <li>• Configuración del sistema</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-700" />
                  Instructores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Pueden crear y gestionar sus propios cursos. Acceso a estadísticas de sus
                  estudiantes.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Crear y editar cursos propios</li>
                  <li>• Gestionar contenido y lecciones</li>
                  <li>• Ver progreso de estudiantes</li>
                  <li>• Generar certificados</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-700" />
                  Estudiantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Pueden inscribirse a cursos, acceder al contenido y obtener certificados.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Inscribirse a cursos</li>
                  <li>• Acceder a lecciones y recursos</li>
                  <li>• Seguir progreso personal</li>
                  <li>• Descargar certificados</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="general">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información General del Sitio</CardTitle>
                <CardDescription>Configuración básica de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Nombre del Sitio</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email de Contacto</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) =>
                        setSettings({ ...settings, contactEmail: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Descripción del Sitio</Label>
                  <Input
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) =>
                      setSettings({ ...settings, siteDescription: e.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configuración de Usuarios</CardTitle>
                <CardDescription>Controla el registro y acceso de usuarios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Permitir Auto-registro</Label>
                    <p className="text-sm text-gray-600">
                      Los usuarios pueden crear cuentas sin invitación
                    </p>
                  </div>
                  <Switch
                    checked={settings.allowSelfRegistration}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, allowSelfRegistration: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Requerir Verificación de Email</Label>
                    <p className="text-sm text-gray-600">
                      Los usuarios deben verificar su email antes de acceder
                    </p>
                  </div>
                  <Switch
                    checked={settings.requireEmailVerification}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, requireEmailVerification: checked })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxEnrollments">Máximo de Inscripciones por Usuario</Label>
                  <Input
                    id="maxEnrollments"
                    type="number"
                    value={settings.maxEnrollmentsPerUser}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        maxEnrollmentsPerUser: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configuración de Plataforma</CardTitle>
                <CardDescription>Activa o desactiva funcionalidades del sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Certificados Habilitados</Label>
                    <p className="text-sm text-gray-600">
                      Permitir generación de certificados al completar cursos
                    </p>
                  </div>
                  <Switch
                    checked={settings.enableCertificates}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, enableCertificates: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Pagos Habilitados</Label>
                    <p className="text-sm text-gray-600">
                      Permitir procesamiento de pagos para inscripciones
                    </p>
                  </div>
                  <Switch
                    checked={settings.enablePayments}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, enablePayments: checked })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moneda por Defecto</Label>
                  <Input
                    id="currency"
                    value={settings.defaultCurrency}
                    onChange={(e) =>
                      setSettings({ ...settings, defaultCurrency: e.target.value.toUpperCase() })
                    }
                    maxLength={3}
                    placeholder="USD"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Modo Mantenimiento</CardTitle>
                <CardDescription>
                  Desactiva el acceso público al sitio para realizar mantenimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Activar Modo Mantenimiento</Label>
                    <p className="text-sm text-gray-600">
                      Solo los administradores podrán acceder al sitio
                    </p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, maintenanceMode: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                onClick={handleSaveSettings}
                disabled={saving}
                className="bg-blue-900 hover:bg-blue-800 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Guardando...' : 'Guardar Configuración'}
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
