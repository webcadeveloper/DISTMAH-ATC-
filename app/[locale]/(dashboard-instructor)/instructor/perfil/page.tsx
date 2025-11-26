import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone, MapPin, Award, BookOpen, Calendar, Edit, Save, Shield } from 'lucide-react';

export default function PerfilInstructorPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Mi Perfil</h1>
                    <p className="text-neutral-600">Gestiona tu información personal y profesional.</p>
                </div>
                <Button className="bg-neutral-900 hover:bg-neutral-800">
                    <Edit className="w-4 h-4 mr-2" /> Editar Perfil
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Columna Izquierda - Información Principal */}
                <div className="md:col-span-2 space-y-6">
                    {/* Información Personal */}
                    <Card className="bg-white border-neutral-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900">Información Personal</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Nombre Completo</label>
                                    <Input defaultValue="Dr. Miguel Hernández" className="bg-neutral-50 border-neutral-200" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Email</label>
                                    <Input defaultValue="miguel.hernandez@distmah.edu" className="bg-neutral-50 border-neutral-200" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Teléfono</label>
                                    <Input defaultValue="+52 (614) 123-4567" className="bg-neutral-50 border-neutral-200" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-neutral-700 mb-2 block">Ciudad</label>
                                    <Input defaultValue="Chihuahua, México" className="bg-neutral-50 border-neutral-200" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Biografía Profesional */}
                    <Card className="bg-white border-neutral-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900">Biografía Profesional</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <textarea
                                className="w-full h-32 p-3 border border-neutral-200 rounded-md bg-neutral-50 text-neutral-900 text-sm"
                                defaultValue="Ingeniero Civil con más de 15 años de experiencia en proyectos de infraestructura vial. Certificado Autodesk Professional en Civil 3D desde 2015. Especialista en diseño de carreteras, análisis topográfico y modelado BIM para proyectos de ingeniería civil."
                            />
                        </CardContent>
                    </Card>

                    {/* Certificaciones y Especialidades */}
                    <Card className="bg-white border-neutral-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900">Certificaciones y Especialidades</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Award className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-900">Autodesk Certified Professional</p>
                                            <p className="text-sm text-neutral-600">Civil 3D - Autodesk</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-800 border-green-200">Vigente</Badge>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                            <Award className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-900">Instructor Certificado ATC</p>
                                            <p className="text-sm text-neutral-600">Authorized Training Center - Autodesk</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-800 border-green-200">Vigente</Badge>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <Award className="w-6 h-6 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-900">Ing. Civil Certificado</p>
                                            <p className="text-sm text-neutral-600">Colegio de Ingenieros Civiles</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-800 border-green-200">Vigente</Badge>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full mt-4 border-neutral-300">
                                <Award className="w-4 h-4 mr-2" /> Agregar Certificación
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Seguridad */}
                    <Card className="bg-white border-neutral-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900">Seguridad</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-neutral-700 mb-2 block">Contraseña Actual</label>
                                <Input type="password" placeholder="••••••••" className="bg-neutral-50 border-neutral-200" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-neutral-700 mb-2 block">Nueva Contraseña</label>
                                <Input type="password" placeholder="••••••••" className="bg-neutral-50 border-neutral-200" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-neutral-700 mb-2 block">Confirmar Nueva Contraseña</label>
                                <Input type="password" placeholder="••••••••" className="bg-neutral-50 border-neutral-200" />
                            </div>
                            <Button variant="outline" className="w-full border-neutral-300">
                                <Shield className="w-4 h-4 mr-2" /> Actualizar Contraseña
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Columna Derecha - Estadísticas */}
                <div className="space-y-6">
                    {/* Foto de Perfil */}
                    <Card className="bg-white border-neutral-200">
                        <CardContent className="p-6 text-center">
                            <div className="w-32 h-32 rounded-full bg-neutral-200 mx-auto mb-4 flex items-center justify-center">
                                <User className="w-16 h-16 text-neutral-600" />
                            </div>
                            <h3 className="font-bold text-neutral-900 text-lg">Dr. Miguel Hernández</h3>
                            <p className="text-sm text-neutral-600 mb-4">Instructor Certificado ATC</p>
                            <Button variant="outline" className="w-full border-neutral-300">
                                Cambiar Foto
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Estadísticas Rápidas */}
                    <Card className="bg-white border-neutral-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900">Estadísticas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-neutral-600">Cursos Activos</span>
                                </div>
                                <span className="font-bold text-neutral-900">2</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <User className="w-5 h-5 text-green-600" />
                                    <span className="text-sm text-neutral-600">Estudiantes</span>
                                </div>
                                <span className="font-bold text-neutral-900">127</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Award className="w-5 h-5 text-yellow-600" />
                                    <span className="text-sm text-neutral-600">Calificación</span>
                                </div>
                                <span className="font-bold text-neutral-900">4.9/5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm text-neutral-600">Desde</span>
                                </div>
                                <span className="font-bold text-neutral-900">2020</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Información de Contacto */}
                    <Card className="bg-white border-neutral-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-neutral-900">Contacto</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-neutral-600 mt-0.5" />
                                <div>
                                    <p className="text-xs text-neutral-500">Email</p>
                                    <p className="text-sm font-medium text-neutral-900">miguel.hernandez@distmah.edu</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-neutral-600 mt-0.5" />
                                <div>
                                    <p className="text-xs text-neutral-500">Teléfono</p>
                                    <p className="text-sm font-medium text-neutral-900">+52 (614) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
                                <div>
                                    <p className="text-xs text-neutral-500">Ubicación</p>
                                    <p className="text-sm font-medium text-neutral-900">Chihuahua, México</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Acciones */}
                    <Button className="w-full bg-neutral-900 hover:bg-neutral-800">
                        <Save className="w-4 h-4 mr-2" /> Guardar Cambios
                    </Button>
                </div>
            </div>
        </div>
    );
}
