# Lección 26: Integración con Vault y Gestión Documental

**Módulo 6: Colaboración y Gestión de Proyectos**
**Duración:** 60 minutos
**Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, los estudiantes serán capaces de:

✅ **Configurar y gestionar proyectos colaborativos** utilizando Autodesk Vault Professional integrado con AutoCAD Plant 3D

✅ **Implementar flujos de trabajo check-in/check-out** para garantizar integridad de datos en entornos multiusuario

✅ **Establecer control de versiones robusto** para rastrear cambios, revisiones y evolución de diseños de plantas

✅ **Gestionar dependencias de archivos** entre P&IDs, modelos 3D, especificaciones y documentación asociada

✅ **Resolver conflictos de colaboración** y sincronizar trabajo de múltiples usuarios en proyectos complejos

## Introducción

En el entorno actual de proyectos de ingeniería de plantas industriales, la colaboración efectiva entre disciplinas es crítica para el éxito del proyecto. Los proyectos modernos involucran equipos distribuidos geográficamente, múltiples disciplinas (tuberías, estructuras, instrumentación, electricidad) y cientos o miles de archivos interdependientes.

Autodesk Vault Professional es el sistema de gestión de datos de proyecto (PDM - Product Data Management) diseñado específicamente para manejar la complejidad de proyectos CAD y BIM. Cuando se integra con AutoCAD Plant 3D, Vault proporciona:

- **Control de versiones automático:** Cada cambio es rastreado y reversible
- **Gestión de concurrencia:** Múltiples usuarios pueden trabajar simultáneamente sin conflictos
- **Integridad referencial:** Las dependencias entre archivos se mantienen automáticamente
- **Trazabilidad completa:** Auditoría completa de quién cambió qué y cuándo
- **Colaboración segura:** Permisos granulares y seguridad de datos empresarial

Según la norma **ISO 19650-2** (Organización y digitalización de información sobre edificios y obras de ingeniería civil usando BIM), la gestión de información debe seguir un "entorno de datos común" (CDE - Common Data Environment) con estados de información claramente definidos. Vault implementa este concepto mediante:

1. **WIP (Work in Progress):** Información en desarrollo, no compartida
2. **Shared:** Información compartida con el equipo, en revisión
3. **Published:** Información aprobada para uso
4. **Archived:** Información histórica, supersedida

En proyectos de plantas industriales donde un cambio en un P&ID puede afectar cientos de isométricos, o donde una modificación de equipo puede impactar routing de tuberías, estructuras de soporte e instrumentación, la gestión de datos no es opcional: es una necesidad crítica.

Esta lección cubre la integración completa de Plant 3D con Vault, desde configuración inicial hasta flujos de trabajo avanzados de colaboración en proyectos reales de plantas de proceso.

![Introducción a Vault](../imagenes/leccion-26-introduccion-vault.png)

## 1. Fundamentos de Autodesk Vault Professional

### 1.1 Arquitectura de Vault

Autodesk Vault utiliza una arquitectura cliente-servidor que separa el almacenamiento centralizado de datos de las aplicaciones de usuario:

**Componentes de Vault:**

1. **Vault Server:** Servidor central que aloja la base de datos SQL Server y el file store
2. **Vault Client:** Aplicación independiente para gestión de archivos y administración
3. **Vault Add-ins:** Integraciones dentro de AutoCAD, Inventor, Revit, Plant 3D
4. **Vault Web Client:** Interfaz web para acceso remoto y revisión
5. **Vault API:** Interfaz de programación para automatización e integraciones personalizadas

**Base de Datos:**

Vault utiliza Microsoft SQL Server (Express, Standard o Enterprise según escala) para almacenar:

- Metadatos de archivos (propiedades, descripciones, números de parte)
- Relaciones entre archivos (dependencias, donde se usa)
- Historial de versiones y revisiones
- Información de usuarios, grupos y permisos
- Flujos de trabajo y estados de aprobación
- Logs de auditoría

**File Store:**

El almacenamiento físico de archivos está separado de la base de datos:

- Archivos se almacenan en estructura de carpetas del servidor
- Cada versión de archivo se conserva indefinidamente
- Compresión automática para optimizar espacio
- Opciones de réplica y backup automático

![Arquitectura de Vault](../imagenes/leccion-26-arquitectura-vault.png)

### 1.2 Conceptos Clave de Vault

**Check Out / Check In:**

El flujo de trabajo fundamental de Vault:

- **Check Out:** Obtener copia de archivo para edición, bloqueando ediciones concurrentes
- **Check In:** Devolver archivo modificado al Vault, creando nueva versión
- **Undo Check Out:** Cancelar edición y descartar cambios locales

**Versiones vs Revisiones:**

Vault distingue entre versiones (cambios internos) y revisiones (hitos aprobados):

- **Versión:** Cada check-in crea nueva versión (v1, v2, v3...)
- **Revisión:** Etiqueta de hito aprobado (A, B, C o 1, 2, 3)
- Ejemplo: Archivo puede estar en versión 15, revisión C
- Revisiones requieren proceso de cambio de revisión (revision bump)

**Estados del Ciclo de Vida:**

Vault gestiona el ciclo de vida de diseño mediante estados:

- **Work in Progress:** Diseño en desarrollo
- **For Review:** Enviado para revisión técnica
- **Reviewed:** Revisión técnica completada
- **For Approval:** Enviado para aprobación formal
- **Approved:** Diseño aprobado para construcción
- **Released:** Entregado a fabricación/construcción
- **Obsolete:** Supersedido por nuevo diseño

**Categorías de Archivo:**

Vault organiza archivos en categorías con propiedades específicas:

- **Engineering:** Archivos CAD (DWG, P&ID, modelos 3D)
- **Specification:** Documentos de especificación (DOC, PDF)
- **Drawing:** Planos de construcción
- **Calculation:** Cálculos de ingeniería
- Cada categoría tiene propiedades personalizadas relevantes

![Conceptos de Vault](../imagenes/leccion-26-conceptos-vault.png)

### 1.3 Integración Vault-Plant 3D

La integración entre Vault y Plant 3D es bidireccional y profunda:

**Desde Plant 3D a Vault:**

- **Publicación automática de proyectos:** Estructura de proyecto Plant 3D se replica en Vault
- **Check-in de archivos de proyecto:** DWGs, P&IDs, catálogos, specs se gestionan en Vault
- **Sincronización de propiedades:** Propiedades de Plant 3D se mapean a propiedades Vault
- **Gestión de dependencias:** Referencias P&ID-3D se mantienen automáticamente

**Desde Vault a Plant 3D:**

- **Apertura directa:** Abrir proyectos Plant 3D directamente desde Vault
- **Get Latest:** Obtener últimas versiones de archivos del proyecto
- **Detección de referencias:** Vault identifica y descarga archivos referenciados
- **Notificaciones:** Alertas de archivos modificados por otros usuarios

**Plant 3D Project en Vault:**

Cuando un proyecto Plant 3D se gestiona en Vault:

1. **Estructura de carpetas:** Carpetas de proyecto se crean en Vault
2. **Archivos del proyecto:**
   - ProjectName.xml (configuración de proyecto)
   - DWGs de P&ID y modelo 3D
   - Catálogos personalizados (si los hay)
   - Specs personalizadas
   - Plantillas de proyecto
3. **Base de datos del proyecto:** La BD del proyecto permanece local, solo archivos en Vault
4. **Sincronización:** Vault sincroniza archivos, no datos de BD en tiempo real

**Consideración Importante:** Vault gestiona *archivos*, no la base de datos SQL Server de Plant 3D. Los datos de componentes, líneas, equipos están en archivos DWG. La BD del proyecto es local y se reconstruye al abrir proyecto desde Vault.

![Integración Vault Plant 3D](../imagenes/leccion-26-integracion-vault-plant3d.png)

## 2. Configuración de Vault para Proyectos Plant 3D

### 2.1 Instalación y Configuración Inicial

**Requisitos de Sistema:**

- **Sistema Operativo:** Windows Server 2019/2022 (para servidor) o Windows 10/11 (cliente)
- **Base de Datos:** SQL Server 2016 o superior (Express incluido con Vault)
- **Red:** TCP/IP, puertos 80 (HTTP) y 443 (HTTPS) abiertos
- **Almacenamiento:** SSD recomendado, mínimo 100 GB para file store
- **Memoria:** 8 GB mínimo (servidor), 4 GB (cliente)

**Proceso de Instalación del Servidor:**

1. **Ejecutar instalador de Vault Server:**
   - Seleccionar "Vault Professional Server"
   - Especificar instancia SQL Server (crear nueva o usar existente)
   - Definir ubicación del file store (espacio suficiente)

2. **Configurar Vault:**
   - Crear Vault (nombre: "PlantProjects" por ejemplo)
   - Configurar credenciales de administrador
   - Establecer políticas de respaldo

3. **Configurar SQL Server:**
   - Autenticación Windows o SQL (según política corporativa)
   - Configurar backups automáticos de base de datos
   - Establecer plan de mantenimiento

**Instalación de Cliente:**

1. **Instalar Vault Client y Add-ins:**
   - Ejecutar instalador de Vault Client
   - Seleccionar "Vault Client" y "AutoCAD Add-in"
   - Vault se integra automáticamente con Plant 3D

2. **Primera Conexión:**
   - Abrir Autodesk Vault Client
   - Conectar a servidor: `servidor:puerto` (ejemplo: `vaultserver:80`)
   - Autenticar con credenciales
   - Vault: seleccionar "PlantProjects"

![Configuración de Vault](../imagenes/leccion-26-configuracion-inicial.png)

### 2.2 Configuración de Estructura de Carpetas

Una estructura de carpetas bien organizada es crítica para gestión efectiva:

**Estructura Recomendada para Proyectos Plant 3D:**

```
$/Projects/
  └── ProjectName/
      ├── 01-PID/
      │   ├── Drafts/
      │   ├── Issued/
      │   └── Archive/
      ├── 02-3DModel/
      │   ├── Areas/
      │   ├── Equipment/
      │   └── Piping/
      ├── 03-Isometrics/
      │   ├── Pending/
      │   ├── Approved/
      │   └── Issued/
      ├── 04-Specifications/
      │   ├── PipingSpecs/
      │   ├── Equipment/
      │   └── Instruments/
      ├── 05-Calculations/
      ├── 06-Reports/
      ├── 07-Documents/
      └── 08-Deliverables/
```

**Creación de Estructura:**

1. **En Vault Client:**
   - Crear carpeta raíz: `$/Projects/`
   - Crear subcarpetas por proyecto
   - Establecer permisos por carpeta

2. **Asignar Permisos:**
   - Administradores: Control total
   - Ingenieros Senior: Read/Write en todas las áreas
   - Diseñadores: Read/Write en áreas específicas (3DModel, PID)
   - Revisores: Read-only
   - Clientes: Read-only en Deliverables

3. **Configurar Propiedades por Carpeta:**
   - P&IDs: propiedades de diagrama (número, revisión, fecha)
   - Modelo 3D: propiedades de área, disciplina
   - Isométricos: número de ISO, línea, estado de fabricación

**Mejores Prácticas de Estructura:**

- **Consistencia:** Usar misma estructura en todos los proyectos
- **Claridad:** Nombres descriptivos, sin espacios (usar guiones)
- **Escalabilidad:** Estructura debe funcionar para proyectos pequeños y grandes
- **Alineación con estándares:** Seguir convenciones ISO 19650 de CDE

![Estructura de Carpetas Vault](../imagenes/leccion-26-estructura-carpetas.png)

### 2.3 Configuración de Propiedades Personalizadas

Las propiedades personalizadas permiten clasificar y buscar archivos efectivamente:

**Propiedades para Archivos P&ID:**

```
- Drawing Number (Text, Required)
- Revision (Text, Default: "A")
- Drawing Title (Text, Required)
- Plant Area (List: Area-100, Area-200, Area-300...)
- Discipline (List: Process, Piping, Instrumentation)
- Sheet Size (List: A1, A3, A0)
- Design Phase (List: Conceptual, FEED, Detailed)
- Approval Date (Date)
- Approved By (Text)
```

**Propiedades para Modelos 3D:**

```
- Model Area (List: Area-100, Area-200...)
- Discipline (List: Piping, Equipment, Structure, E&I)
- Design Status (List: WIP, For Review, Approved)
- Last Modified By (Auto-populated)
- Clash Status (List: Not Checked, Passed, Issues Found)
- Model Phase (List: 30%, 60%, 90%, IFC)
```

**Propiedades para Isométricos:**

```
- ISO Number (Text, Auto-numbered)
- Line Number (Text, linked from 3D model)
- ISO Status (List: Pending, Approved, Issued for Fabrication)
- Spool Quantity (Number)
- Material Class (List: CS, SS, Alloy)
- Priority (List: Critical Path, High, Normal, Low)
- Fabrication Shop (List: Shop-A, Shop-B, Field)
```

**Configuración en Vault:**

1. **Abrir Vault ADMS Console (Administración):**
   - Tools > Administration
   - Ingresar credenciales de administrador

2. **Ir a Behaviors > Properties:**
   - Click en "New Property Definition"
   - Definir nombre, tipo de dato, valores por defecto

3. **Asignar Propiedades a Categorías:**
   - Behaviors > Categories
   - Seleccionar categoría (Engineering, Drawing)
   - Asignar propiedades relevantes

4. **Configurar Mappings (Mapeos):**
   - Mapear propiedades AutoCAD a propiedades Vault
   - Ejemplo: AutoCAD `TITLE` → Vault `Drawing Title`
   - Sincronización bidireccional

**Uso de Property Definitions Reutilizables:**

Vault permite crear "Property Definition Sets" que pueden aplicarse a múltiples categorías, promoviendo consistencia.

![Propiedades Personalizadas](../imagenes/leccion-26-propiedades-personalizadas.png)

### 2.4 Configuración de Flujos de Trabajo

Los flujos de trabajo (workflows) controlan el ciclo de vida de archivos:

**Flujo de Trabajo de Diseño Típico:**

```
[Work in Progress] → Check-in inicial
         ↓
[Design Review] → Enviar para revisión
         ↓
[Review Comments] → Comentarios recibidos
         ↓
[Revisions in Progress] → Incorporar comentarios
         ↓
[For Approval] → Enviar para aprobación formal
         ↓
[Approved] → Aprobado por autoridad apropiada
         ↓
[Released] → Liberado para construcción/fabricación
         ↓
[Obsolete] → Supersedido por nueva revisión
```

**Configuración de Workflow:**

1. **En Vault ADMS Console:**
   - Behaviors > Lifecycle Definitions
   - New Lifecycle Definition: "Plant Design Lifecycle"

2. **Definir Estados:**
   - Agregar estados según flujo arriba
   - Configurar transiciones permitidas entre estados

3. **Establecer Comportamientos por Estado:**
   - **WIP:** Editable, no visible para otros
   - **Review:** Read-only, comentarios permitidos
   - **Approved:** Locked, solo administradores pueden editar
   - **Released:** Completamente locked, auditoría estricta

4. **Configurar Revisiones Automáticas:**
   - Transición "Approved → Released" puede incrementar revisión (A→B)
   - Configurar esquema de revisiones (letras vs números)

5. **Asignar Workflow a Categorías:**
   - Categoría "Engineering" usa "Plant Design Lifecycle"
   - Todos los archivos P&ID y 3D siguen este flujo

**Permisos por Estado:**

Vault permite configurar permisos diferentes según estado del archivo:

- **WIP:** Solo el creador puede editar
- **Review:** Grupo de revisores puede leer y comentar
- **Approved:** Solo gestores de proyecto pueden cambiar estado
- **Released:** Nadie puede modificar (excepto admins para casos excepcionales)

![Flujos de Trabajo](../imagenes/leccion-26-workflows.png)

## Resumen de la Lección

En esta lección hemos cubierto la integración completa de AutoCAD Plant 3D con Autodesk Vault Professional para gestión documental y colaboración en proyectos de plantas industriales:

**Puntos Clave:**

1. **Vault proporciona gestión centralizada de datos** para proyectos complejos con múltiples usuarios y disciplinas

2. **Flujos de trabajo check-in/check-out** garantizan que solo un usuario edita un archivo a la vez, previniendo conflictos

3. **Control de versiones automático** rastrea cada cambio, con historial completo y capacidad de rollback

4. **Gestión de dependencias** mantiene integridad referencial entre P&IDs, modelos 3D, isométricos y documentación

5. **Colaboración efectiva** mediante notificaciones, estados de lifecycle y sincronización automática

6. **Alineación con ISO 19650** mediante implementación de Common Data Environment (CDE) con estados claramente definidos

**Aplicación Práctica:**

La implementación de Vault en proyectos de plantas industriales transforma la gestión de información de ad-hoc y propensa a errores en un proceso estructurado, trazable y eficiente.

**Próximos Pasos:**

En la próxima lección (Lección 27), aprenderemos sobre detección de interferencias y choques, un proceso crítico de validación del modelo 3D.

## Ejercicio Práctico

Ver archivo `ejercicios.md` para el Ejercicio 26: Configuración de flujo de trabajo de proyecto en Vault.

**Duración estimada:** 40 minutos
