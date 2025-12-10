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
    <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">Configuración del Sistema</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Gestiona roles, permisos y configuración general de DISTMAH ATC
        </p>
      </div>

      <Tabs defaultValue="roles" className="space-y-6">
        <TabsList className="bg-neutral-100 dark:bg-neutral-800">
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
          <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Roles y Permisos del Sistema</CardTitle>
              <CardDescription className="dark:text-neutral-400">
                Define qué acciones puede realizar cada tipo de usuario en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-neutral-200 dark:border-neutral-700">
                    <TableHead className="w-[200px] text-neutral-700 dark:text-neutral-300">Rol</TableHead>
                    {Object.entries(permissionLabels).map(([key, label]) => (
                      <TableHead key={key} className="text-center text-neutral-700 dark:text-neutral-300">
                        {label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.name} className="border-neutral-200 dark:border-neutral-700">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              role.name === 'ADMIN'
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300'
                                : role.name === 'INSTRUCTOR'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300'
                            }
                          >
                            {role.displayName}
                          </Badge>
                        </div>
                      </TableCell>
                      {Object.keys(permissionLabels).map((permission) => (
                        <TableCell key={permission} className="text-center">
                          {role.permissions[permission] ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-neutral-300 dark:text-neutral-600 mx-auto" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  <strong>Nota:</strong> Los permisos son configurables a nivel de código. Para
                  modificar permisos, contacta al equipo de desarrollo o edita la configuración en
                  el archivo de roles del sistema.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-black dark:text-white">
                  <Users className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                  Administradores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Acceso completo al sistema. Pueden gestionar usuarios, cursos, pagos y
                  configuración.
                </p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Gestión total de usuarios</li>
                  <li>• Publicar/archivar cursos</li>
                  <li>• Acceso a reportes financieros</li>
                  <li>• Configuración del sistema</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-black dark:text-white">
                  <BookOpen className="w-5 h-5 text-green-700 dark:text-green-400" />
                  Instructores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Pueden crear y gestionar sus propios cursos. Acceso a estadísticas de sus
                  estudiantes.
                </p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Crear y editar cursos propios</li>
                  <li>• Gestionar contenido y lecciones</li>
                  <li>• Ver progreso de estudiantes</li>
                  <li>• Generar certificados</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-black dark:text-white">
                  <Users className="w-5 h-5 text-neutral-700 dark:text-neutral-400" />
                  Estudiantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Pueden inscribirse a cursos, acceder al contenido y obtener certificados.
                </p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
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
            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Información General del Sitio</CardTitle>
                <CardDescription className="dark:text-neutral-400">Configuración básica de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName" className="text-neutral-700 dark:text-neutral-300">Nombre del Sitio</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="text-neutral-700 dark:text-neutral-300">Email de Contacto</Label>
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
                  <Label htmlFor="siteDescription" className="text-neutral-700 dark:text-neutral-300">Descripción del Sitio</Label>
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

            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Configuración de Usuarios</CardTitle>
                <CardDescription className="dark:text-neutral-400">Controla el registro y acceso de usuarios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-neutral-700 dark:text-neutral-300">Permitir Auto-registro</Label>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
                    <Label className="text-neutral-700 dark:text-neutral-300">Requerir Verificación de Email</Label>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
                  <Label htmlFor="maxEnrollments" className="text-neutral-700 dark:text-neutral-300">Máximo de Inscripciones por Usuario</Label>
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

            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Configuración de Plataforma</CardTitle>
                <CardDescription className="dark:text-neutral-400">Activa o desactiva funcionalidades del sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-neutral-700 dark:text-neutral-300">Certificados Habilitados</Label>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
                    <Label className="text-neutral-700 dark:text-neutral-300">Pagos Habilitados</Label>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
                  <Label htmlFor="currency" className="text-neutral-700 dark:text-neutral-300">Moneda por Defecto</Label>
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

            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-400">Modo Mantenimiento</CardTitle>
                <CardDescription className="dark:text-neutral-400">
                  Desactiva el acceso público al sitio para realizar mantenimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-neutral-700 dark:text-neutral-300">Activar Modo Mantenimiento</Label>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
