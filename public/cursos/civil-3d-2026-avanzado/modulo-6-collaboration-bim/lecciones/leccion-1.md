# Lección 1: Autodesk Construction Cloud (ACC)

**Duración:** 1 hora
**Nivel:** Avanzado
**Objetivo:** Dominar Autodesk Construction Cloud para colaboración en proyectos de infraestructura civil

---

## Introducción a Autodesk Construction Cloud

Autodesk Construction Cloud (ACC) es la plataforma unificada en la nube para gestión de proyectos de construcción e infraestructura. Combina Design Collaboration, BIM 360 Docs, Model Coordination y Field Management en una solución integrada.

### ¿Qué es ACC?

**Definición:**
ACC es una plataforma cloud que conecta workflows de diseño, construcción y operaciones, permitiendo colaboración en tiempo real entre todos los stakeholders del proyecto.

**Componentes Principales:**
1. **Design Collaboration** - Compartir y revisar diseños
2. **Docs** - Gestión documental centralizada
3. **Model Coordination** - Coordinación de modelos BIM
4. **Build** - Gestión de construcción
5. **Analytics** - Reportes y dashboards
6. **Field** - Aplicaciones móviles para campo

### Beneficios de ACC

**Colaboración sin fricción:**
- Todos trabajan en la misma versión
- Actualizaciones en tiempo real
- No más emails con archivos adjuntos
- Historial completo de cambios

**Acceso desde cualquier lugar:**
- Web browser (no requiere software)
- Apps móviles (iOS, Android)
- Integración con Autodesk Desktop Apps
- Offline sync disponible

**Control y seguridad:**
- Permisos granulares por usuario
- Registro de auditoría completo
- Encriptación de datos
- Compliance con regulaciones

**Reducción de errores:**
- Siempre la última versión
- Notificaciones automáticas
- Workflows de aprobación
- Trazabilidad completa

### ACC vs BIM 360

**Evolución:**
```
BIM 360 (2011-2022)
    ↓
Autodesk Construction Cloud (2020+)
    ↓
Plataforma unificada
```

**Diferencias clave:**

| Característica | BIM 360 | ACC |
|----------------|---------|-----|
| Interface | Múltiples productos | Unificada |
| Navegación | Por producto | Centralizada |
| Integración | Separada | Nativa |
| Pricing | Por módulo | Bundled |
| Futuro | Descontinuado | Plataforma actual |

**Migración:**
- BIM 360 se integró en ACC (2020-2022)
- Cuentas existentes migradas automáticamente
- Funcionalidad preservada y mejorada

---

## Configuración de Proyectos en ACC

### Crear Cuenta en ACC

**PASO 1: Registro**

```
1. Ir a: https://acc.autodesk.com
2. Click en "Get Started" o "Sign Up"
3. Opciones:
   - Autodesk Account existente (recomendado)
   - Email + crear nueva cuenta
   - SSO empresarial
4. Verificar email
5. Completar perfil:
   - Nombre completo
   - Empresa/organización
   - Rol (Designer, Engineer, PM, etc.)
   - País/región
```

**PASO 2: Seleccionar Plan**

**Planes disponibles:**

**1. ACC Free (Gratis)**
- 1 proyecto activo
- 5 GB almacenamiento
- 10 colaboradores
- Funcionalidad básica
- Ideal para: Pruebas y proyectos pequeños

**2. ACC Pro ($500-800/usuario/año)**
- Proyectos ilimitados
- 100 GB por proyecto
- Colaboradores ilimitados
- Todas las funciones
- Ideal para: Profesionales y empresas

**3. ACC Enterprise (Custom pricing)**
- Todo de Pro
- Almacenamiento ilimitado
- Soporte premium
- Customización avanzada
- Ideal para: Grandes organizaciones

**Trial disponible:** 30 días gratis de ACC Pro

**PASO 3: Configuración Inicial**

```
Settings > Account Admin
├── Company Info
│   ├── Company name
│   ├── Logo (upload)
│   ├── Industry: Construction/Infrastructure
│   └── Company size
├── Users & Permissions
│   ├── Invite users
│   ├── Assign roles
│   └── Configure permissions
└── Preferences
    ├── Date/time format
    ├── Units (metric/imperial)
    ├── Language
    └── Notifications
```

### Crear Proyecto Nuevo

**PASO 1: New Project**

```
Projects > Create Project

Información del proyecto:
├── Project Name: "Highway Expansion Project 2024"
├── Project ID: HWY-2024-001 (único en la cuenta)
├── Project Type: Infrastructure / Heavy Civil
├── Description: "Design and construction of 15km highway expansion"
├── Address/Location: GPS coordinates o dirección
├── Start Date: 2024-01-15
├── End Date: 2025-12-31
├── Budget: $50,000,000 (opcional)
└── Company: Seleccionar de lista
```

**PASO 2: Configurar Módulos del Proyecto**

```
Modules to Enable:
☑ Design Collaboration (diseño)
☑ Docs (documentos)
☑ Model Coordination (coordinación BIM)
☐ Build (construcción) - para fase posterior
☐ Cost (costos) - opcional
☐ Field (campo) - para construcción
```

**PASO 3: Template del Proyecto**

Aplicar template estándar o personalizado:

```json
{
  "project_template": "Highway Infrastructure",
  "folder_structure": {
    "01_Design": [
      "Civil",
      "Structural",
      "Drainage",
      "Traffic"
    ],
    "02_Models": [
      "Civil_3D",
      "Revit",
      "Navisworks"
    ],
    "03_Documents": [
      "Specifications",
      "Drawings",
      "Reports"
    ],
    "04_Submittals": [],
    "05_RFIs": [],
    "06_Coordination": [
      "Clash_Reports",
      "Meeting_Minutes"
    ]
  },
  "permissions": "default_highway_template",
  "workflows": "standard_approval_chain"
}
```

**PASO 4: Invitar Equipo**

```
Project Members > Invite

Roles comunes:
├── Project Admin (acceso total)
├── Project Lead (gestión general)
├── Designer (puede editar diseños)
├── Reviewer (puede revisar y comentar)
├── Viewer (solo lectura)
└── Guest (acceso limitado temporal)

Proceso:
1. Click "Invite Members"
2. Ingresar emails separados por coma
3. Asignar roles
4. Seleccionar permisos:
   - Access to specific folders
   - Upload/download rights
   - Markup/comment rights
   - Approval authority
5. Enviar invitaciones
```

**Permisos Granulares:**

```
Permissions Matrix:

                  Admin  Lead  Designer  Reviewer  Viewer
Upload files       ✓     ✓      ✓         ✗        ✗
Download files     ✓     ✓      ✓         ✓        ✓
Create markups     ✓     ✓      ✓         ✓        ✗
Create issues      ✓     ✓      ✓         ✓        ✗
Approve changes    ✓     ✓      ✗         ✓        ✗
Delete files       ✓     ✗      ✗         ✗        ✗
Manage users       ✓     ✗      ✗         ✗        ✗
Project settings   ✓     ✗      ✗         ✗        ✗
```

---

## Design Collaboration Workflows

### Subir Modelos Civil 3D a ACC

**Método 1: Desktop Connector**

```
Instalación:
1. Download: Autodesk Desktop Connector desde ACC
2. Install en Windows
3. Login con cuenta ACC
4. Seleccionar proyectos a sincronizar

Uso:
1. Desktop Connector aparece en File Explorer
2. Navegar a carpeta del proyecto ACC
3. Arrastrar archivos DWG
4. Sync automático con la nube
5. Versionado automático
```

**Método 2: Desde Civil 3D (Direct Upload)**

```
En Civil 3D 2026:

1. File > Share > Autodesk Docs
2. Login to ACC
3. Seleccionar proyecto
4. Seleccionar carpeta de destino
5. Upload file
6. Agregar comentarios de versión
7. Publish
```

**Método 3: Web Upload**

```
En ACC web interface:

1. Navegar a Docs
2. Seleccionar carpeta
3. Click "Upload"
4. Drag & drop archivos o Browse
5. Esperar procesamiento
6. Verificar previsualizaciones generadas
```

**Versionado Automático:**

```
Archivo: Highway-Design.dwg

Versiones:
├── v1 (2024-01-15) - "Initial design" - John Smith
├── v2 (2024-01-20) - "Updated alignment" - Jane Doe
├── v3 (2024-01-25) - "Added drainage" - John Smith
└── v4 (2024-02-01) - "Final for review" - Jane Doe

Características:
- Versionado automático en cada upload
- Historial completo preservado
- Comparación entre versiones (visual diff)
- Rollback a versión anterior
- Comentarios por versión
```

### Revisión y Markup de Diseños

**Proceso de Revisión:**

**PASO 1: Abrir Modelo para Revisión**

```
En ACC web viewer:

1. Docs > Navegar a archivo
2. Click en archivo DWG
3. Viewer 2D/3D se abre automáticamente
4. Esperar procesamiento (si es primera vez)

Viewer features:
├── 2D/3D toggle
├── Zoom/pan/rotate
├── Layer control
├── Measure tools
├── Section box
├── Markup tools
└── Compare versions
```

**PASO 2: Crear Markups**

```
Markup Tools:
├── Cloud ☁️ - Nube de revisión
├── Arrow → - Flecha de señalamiento
├── Text 📝 - Comentario de texto
├── Line ─ - Línea de medición
├── Rectangle ▭ - Área de interés
├── Callout 💬 - Etiqueta con llamada
├── Stamp ✓✗ - Aprobado/Rechazado
└── Snapshot 📷 - Captura de pantalla

Proceso de markup:
1. Seleccionar herramienta
2. Click/drag en el modelo
3. Agregar comentario textual
4. Asignar a usuario responsable (opcional)
5. Categorizar (Design, Clash, RFI, etc.)
6. Guardar markup
```

**PASO 3: Issues Management**

```
Crear Issue desde Markup:

1. Click en markup creado
2. "Create Issue"
3. Completar formulario:
   ├── Title: "Alignment conflicts with existing utilities"
   ├── Description: Detalles del problema
   ├── Assigned to: Responsible person
   ├── Due date: 2024-02-15
   ├── Priority: High/Medium/Low
   ├── Status: Open
   ├── Type: Design/Coordination/RFI
   └── Attachments: Images, PDFs
4. Submit issue
5. Notificaciones automáticas enviadas
```

**PASO 4: Workflow de Aprobación**

```
Approval Chain:

Designer → Team Lead → Project Manager → Client
   ↓          ↓             ↓              ↓
 Design    Review       Approve        Sign-off

Estados:
├── Draft (borrador)
├── In Review (en revisión)
├── Approved (aprobado)
├── Rejected (rechazado)
└── On Hold (en espera)

Proceso:
1. Designer marca "Ready for Review"
2. Notificación a Team Lead
3. Team Lead revisa y aprueba/rechaza
4. Si aprobado, pasa a PM
5. PM da aprobación final
6. Cliente recibe para sign-off
```

### Sincronización Bidireccional

**Civil 3D ↔ ACC Sync**

```
Workflow típico:

1. UPLOAD from Civil 3D:
   - Designer trabaja localmente en Civil 3D
   - Guarda cambios en DWG
   - Publica a ACC (File > Share > Autodesk Docs)
   - Nueva versión creada automáticamente
   - Equipo notificado de nueva versión

2. REVIEW in ACC:
   - Revisores abren en web viewer
   - Crean markups y comments
   - Asignan issues a designer
   - Aprueban o rechazan cambios

3. SYNC back to Civil 3D:
   - Designer recibe notificaciones
   - Abre modelo con markups visibles
   - Resuelve issues documentados
   - Publica versión actualizada

4. REPEAT:
   - Ciclo continúa hasta aprobación final
   - Historial completo preservado
```

**Conflict Resolution:**

```
Escenario: Dos usuarios editan el mismo archivo

User A:
- Download Highway-Design.dwg v3
- Trabaja offline 2 horas
- Hace cambios significativos
- Intenta subir como v4

User B:
- Descargó v3 hace 1 hora
- También hizo cambios
- Ya subió como v4

Resultado:
- ACC detecta conflicto
- User A recibe warning:
  "File has been updated by User B"
- Opciones:
  1. Download v4 y merge manualmente
  2. Upload as new branch (v4a)
  3. Override (no recomendado)

Best Practice:
- Comunicación constante
- Check-out system (lock file)
- Short iteration cycles
- Frequent syncs
```

---

## Gestión de Permisos y Equipos

### Estructura de Equipos

**Organización típica:**

```
Project: Highway Expansion 2024
│
├── Project Admins
│   ├── John Smith (Project Manager)
│   └── Jane Doe (BIM Manager)
│
├── Design Team
│   ├── Civil Engineers (5 users)
│   ├── Structural Engineers (3 users)
│   ├── Drainage Specialists (2 users)
│   └── CAD Technicians (4 users)
│
├── Review Team
│   ├── Senior Engineers (3 users)
│   ├── QA/QC (2 users)
│   └── Client Representatives (2 users)
│
├── Construction Team (añadir en fase posterior)
│   ├── General Contractor (pending)
│   └── Subcontractors (pending)
│
└── External Stakeholders
    ├── Environmental Consultants (2 users)
    ├── Traffic Engineers (1 user)
    └── Government Reviewers (3 users)
```

### Best Practices de Permisos

**1. Principio de Menor Privilegio**
```
- Dar solo permisos necesarios
- Revisar permisos trimestralmente
- Revocar acceso al terminar fase
```

**2. Segregación por Disciplina**
```
Civil Team:
- Full access: /01_Design/Civil
- Read access: /01_Design/Structural
- No access: /05_Finance

Structural Team:
- Full access: /01_Design/Structural
- Read access: /01_Design/Civil
- No access: /05_Finance
```

**3. Carpetas Sensibles**
```
/05_Finance
/06_Legal
/07_Proprietary_Data

Permisos: Solo Project Admin + Client
```

---

## Casos de Uso Reales

### Caso 1: Proyecto de Autopista 50km

**Contexto:**
- 5 empresas involucradas
- 30+ usuarios activos
- 500+ archivos DWG
- 24 meses de duración

**Configuración ACC:**
```
Proyectos separados por segmento:
├── Segment A (km 0-10)
│   ├── Design Team: 6 users
│   └── Storage: 25 GB
├── Segment B (km 10-25)
│   ├── Design Team: 8 users
│   └── Storage: 35 GB
├── Segment C (km 25-40)
│   ├── Design Team: 7 users
│   └── Storage: 30 GB
└── Segment D (km 40-50)
    ├── Design Team: 5 users
    └── Storage: 20 GB

Master Project (coordinación):
├── Todos los segments linked
├── Model Coordination habilitado
└── Solo leads y PM tienen acceso
```

**Resultados:**
- Reducción de 60% en emails
- Conflictos de diseño reducidos 80%
- Tiempo de aprobaciones: de 2 semanas a 3 días
- ROI: $250,000 en ahorro de tiempo

### Caso 2: Renovación Urbana

**Contexto:**
- Área urbana 5 km²
- Múltiples disciplinas (civil, estructural, MEP)
- Cliente requiere actualizaciones semanales
- Regulaciones estrictas municipales

**Workflow implementado:**
```
Lunes: Design sprint comienza
Martes-Jueves: Diseño y modelado
Viernes: Upload a ACC para revisión interna
Fin de semana: Revisión por seniors
Lunes: Issues distribuidos a designers
Miércoles: Resolución de issues
Jueves: Upload versión revisada
Viernes: Presentación a cliente via ACC viewer
```

**Características únicas:**
- Custom approval workflow para municipalidad
- Automatic reports generados semanalmente
- Public viewer link para comunidad
- Mobile access para inspecciones en sitio

**Resultados:**
- 100% transparencia con stakeholders
- Aprobaciones gubernamentales más rápidas
- Comunidad informada constantemente
- Proyecto terminado 3 meses antes

---

## Ejercicio Práctico

### Ejercicio: Configurar Proyecto ACC Completo

**Objetivo:** Crear y configurar proyecto ACC para infraestructura civil.

**Tareas:**
1. Crear cuenta ACC (trial 30 días)
2. Crear nuevo proyecto:
   - Nombre: "Your Name - Highway Project"
   - Tipo: Infrastructure
3. Configurar estructura de carpetas
4. Invitar 3 colaboradores (usar emails de compañeros o cuentas test)
5. Subir modelo Civil 3D
6. Crear 5 markups en el modelo
7. Crear 2 issues asignados a otros usuarios
8. Configurar workflow de aprobación

**Entregable:**
- Screenshots de configuración
- URL del proyecto (con guest access)
- Reporte de markups/issues creados

**Tiempo estimado:** 1 hora

---

## Resumen de la Lección

Has aprendido:

✅ **Fundamentos de ACC**
- Qué es ACC y sus beneficios
- Diferencias con BIM 360
- Componentes principales

✅ **Configuración de Proyectos**
- Crear cuenta y proyecto
- Estructura de carpetas
- Invitar y gestionar equipo

✅ **Design Collaboration**
- Subir modelos Civil 3D
- Versionado automático
- Sincronización bidireccional

✅ **Revisión y Markup**
- Herramientas de revisión
- Crear markups y comments
- Issues management

✅ **Permisos y Seguridad**
- Roles y permisos
- Best practices
- Gestión de equipos

---

## Siguiente Paso

En la **Lección 2: BIM 360 Integration**, aprenderás a:
- Gestión documental con BIM 360 Docs
- Issues, RFIs y workflows de aprobación
- Model Coordination para infraestructura
- Field Management y apps móviles

[Continuar a Lección 2 →](./leccion-2.md)

---

**DISTMAH Advanced Technical Center (ATC)**
*Liderando colaboración BIM en infraestructura desde 2024*
