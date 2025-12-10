# Lección 22: BIM 360 Glue Integration

## Introducción

La colaboración en proyectos de construcción modernos requiere acceso distribuido a modelos BIM desde cualquier ubicación y dispositivo. La integración cloud permite a equipos geográficamente dispersos coordinar modelos, detectar clashes, gestionar issues y tomar decisiones en tiempo real sin necesidad de intercambio manual de archivos.

**Autodesk BIM 360 Glue** (ahora parte del ecosistema Autodesk Construction Cloud) es la plataforma cloud que extiende las capacidades de Navisworks a colaboración en línea, proporcionando acceso móvil, sincronización automática, clash detection distribuido y gestión centralizada de issues. En esta lección, aprenderá a publicar modelos federados a la nube, configurar workspaces colaborativos, realizar coordinación remota y gestionar proyectos desde múltiples dispositivos.

Esta lección es esencial para BIM Managers, VDC Coordinators y equipos de construcción distribuidos que requieren colaboración eficiente y acceso ubicuo a información de proyecto.

---

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

- Configurar cuenta y workspace en Autodesk BIM 360/Construction Cloud
- Publicar modelos federados desde Navisworks a BIM 360 Glue
- Establecer flujos de trabajo colaborativos con equipos distribuidos
- Acceder y navegar modelos desde tablets y smartphones (iOS/Android)
- Realizar clash detection en línea con equipos remotos
- Crear, asignar y gestionar issues en tiempo real
- Configurar dashboards de proyecto para stakeholders
- Implementar control de versiones y gestión de permisos en la nube
- Sincronizar work entre desktop Navisworks y BIM 360 mobile
- Generar reportes de coordinación directamente desde la nube
- Integrar BIM 360 con otros productos Autodesk Construction Cloud

---

## 1. Introducción a BIM 360 y Construction Cloud

### 1.1 ¿Qué es BIM 360 Glue?

**BIM 360 Glue** es la plataforma cloud de Autodesk para:
- Visualización de modelos BIM en navegador web y móvil
- Coordinación distribuida multi-usuario
- Clash detection en línea
- Gestión de issues colaborativa
- Sincronización automática de modelos

**Evolución del producto:**
- **2012-2020:** BIM 360 Glue (producto standalone)
- **2020-presente:** Integrado en **Autodesk Construction Cloud**
  - Ahora parte de BIM Collaborate / BIM Collaborate Pro
  - Funcionalidad extendida con Design Collaboration, Docs, Field, etc.

**Nota importante:** A partir de 2023, Autodesk migró BIM 360 Glue a **BIM Collaborate** y **BIM Collaborate Pro**. Esta lección cubre conceptos aplicables a ambas plataformas.

### 1.2 Arquitectura de la Plataforma

**Componentes:**

1. **Navisworks Desktop:**
   - Aplicación principal de coordinación
   - Publica modelos a cloud
   - Sincroniza clash tests y viewpoints

2. **BIM 360 Web Application:**
   - Acceso desde navegador (Chrome, Edge, Firefox)
   - Visualización de modelos
   - Gestión de issues
   - Reportes y dashboards

3. **BIM 360 Mobile Apps:**
   - iOS (iPad, iPhone)
   - Android (tablets, smartphones)
   - Navegación 3D en obra
   - Captura de issues en campo

4. **Autodesk Construction Cloud Backend:**
   - Almacenamiento de modelos en AWS
   - Procesamiento de clash detection
   - Sincronización en tiempo real
   - Control de versiones automático

**Flujo de trabajo típico:**
```
Navisworks Desktop (Oficina)
    ↓ Publish
BIM 360 Cloud (AWS)
    ↓ Sync
BIM 360 Web (Stakeholders remotos)
BIM 360 Mobile (Equipo en obra)
```

### 1.3 Ventajas de Cloud Collaboration

**Vs. Workflow tradicional (archivos locales):**

**Tradicional:**
- Envío de archivos NWD por email/FTP
- Versiones desincronizadas
- Clash tests en máquinas locales
- Comunicación de issues por email/PDF
- Sin acceso móvil

**BIM 360 Cloud:**
- Modelos siempre actualizados automáticamente
- Single source of truth
- Clash detection distribuido
- Issues vinculados a geometría 3D
- Acceso desde cualquier dispositivo/ubicación

**Beneficios cuantificables:**
- Reducción 50-70% en tiempo de coordinación
- Detección 30-40% más temprana de clashes
- Reducción 60% en RFIs (menos dudas por visualización clara)
- Acceso 24/7 desde obra sin laptop pesada

---

## 2. Configuración de BIM 360 Account y Workspace

### 2.1 Creación de Cuenta BIM 360

**Proceso de registro:**

1. **Visitar Autodesk Construction Cloud:**
   - URL: https://construction.autodesk.com
   - O https://bim360.autodesk.com (redirect automático)

2. **Sign Up o Sign In:**
   - Si tiene Autodesk Account existente: Sign In
   - Si es nuevo: Sign Up con email corporativo

3. **Seleccionar plan:**
   - **BIM Collaborate:** Básico, incluye Model Coordination
   - **BIM Collaborate Pro:** Avanzado, incluye Design Collaboration + Docs
   - Trial: 30 días gratuitos

4. **Crear Account (Tenant):**
   - Nombre de empresa/organización
   - Región de datos (US, EU, Australia)
   - Aceptar términos

5. **Invitar usuarios:**
   - Admin puede invitar team members
   - Roles: Admin, Project Admin, Member, View Only

**Nota sobre licenciamiento:**
- Navisworks Manage incluye acceso básico a BIM 360 Glue/Collaborate
- Usuarios adicionales requieren licencias BIM 360 Team/Collaborate

### 2.2 Configuración de Project Workspace

**Crear proyecto en BIM 360:**

1. **Access BIM 360 Admin Console:**
   - https://admin.b360.autodesk.com
   - Login con credenciales Admin

2. **Create New Project:**
   - Click "+ Project"
   - Nombre: "Torre Corporativa ABC"
   - Project Number: "TCABC-2025-001"
   - Tipo: Commercial Building
   - Ubicación: Ciudad de México, México
   - Timezone: (UTC-6) Central Standard Time

3. **Configurar módulos activos:**
   - ☑ Model Coordination (para Navisworks/Glue)
   - ☑ Docs (documentos y planos)
   - ☑ Issues (gestión de problemas)
   - ☐ Field (opcional, para obra)
   - ☐ Sheets (opcional, para planos)

4. **Invitar miembros del proyecto:**
   - Add Project Members
   - Email de cada miembro
   - Asignar roles:
     - **Project Admin:** BIM Manager, VDC Manager
     - **Collaborate:** Coordinadores, ingenieros
     - **View Only:** Cliente, stakeholders

5. **Configurar permisos:**
   - Model Coordination: Quién puede publicar modelos
   - Issues: Quién puede crear, asignar, resolver
   - Docs: Permisos de lectura/escritura

### 2.3 Instalación de BIM 360 Add-in para Navisworks

**Requisitos:**
- Navisworks Manage 2020 o superior
- Cuenta BIM 360 activa
- Conexión a internet

**Proceso de instalación:**

1. **Descargar add-in:**
   - Desde Autodesk App Store: https://apps.autodesk.com
   - Buscar "BIM 360 Glue for Navisworks"
   - Download e Install

2. **Reiniciar Navisworks:**
   - Cerrar y reabrir Navisworks Manage

3. **Verificar instalación:**
   - Ribbon: Debería aparecer tab "BIM 360"
   - Si no aparece, verificar Add-ins Manager

4. **Sign In a BIM 360:**
   - BIM 360 tab > Sign In
   - Ingresar credenciales Autodesk Account
   - Autorizar acceso

5. **Seleccionar Account y Project:**
   - Dropdown: Seleccionar Account (empresa)
   - Dropdown: Seleccionar Project activo
   - Status: Conectado (verde)

**Nota:** Versiones recientes de Navisworks (2023+) incluyen integración BIM 360 nativa sin add-in adicional.

---

## 3. Publicación de Modelos a BIM 360

### 3.1 Preparación de Modelo para Publicación

Antes de publicar, preparar modelo adecuadamente:

**Checklist de preparación:**

1. **Federar todos modelos necesarios:**
   - Arquitectura, Estructura, MEP actualizados
   - Verificar que versiones son las correctas

2. **Ocultar elementos innecesarios:**
   - Elementos temporales (andamios, excavación)
   - Links externos no necesarios
   - Hidden items que consumen espacio

3. **Aplicar materiales y appearance (opcional):**
   - Si se desea presentación visual en BIM 360
   - Presenter materials para realismo

4. **Crear Saved Viewpoints:**
   - Viewpoints clave del proyecto
   - Facilitan navegación en BIM 360 web/mobile

5. **Configurar Clash Tests (si aplica):**
   - Clash Detection tests activos (Lección 7-12)
   - Se publicarán junto con modelo

6. **Guardar archivo NWF:**
   - File > Save As > NWF (Navisworks File Set)
   - Guardar localmente primero

### 3.2 Proceso de Publicación

**Pasos detallados:**

**Paso 1: Abrir modelo en Navisworks**
- Abrir archivo NWF preparado
- Verificar que todo está correcto

**Paso 2: Acceder a BIM 360 Publish**
- BIM 360 tab > Publish Model
- O Collaborate tab > Publish
- Se abre dialog de publicación

**Paso 3: Configurar publicación**

**Model Name:**
- Nombre descriptivo: "Torre ABC - Coordinación General"
- O por disciplina: "Torre ABC - Arquitectura"

**Version:**
- Seleccionar versión existente para actualizar
- O crear nueva versión: "v1.0", "v2.0"

**Description (opcional pero recomendado):**
- Descripción de cambios en esta versión
- Ejemplo: "Actualización estructural piso 3-5, revisión MEP completa"

**Include:**
- ☑ Geometry (3D model)
- ☑ Viewpoints (saved viewpoints)
- ☑ Clash Tests (si están configurados)
- ☑ Appearance (materiales Presenter)
- ☐ Animations (opcional, aumenta tamaño)

**Paso 4: Iniciar publicación**
- Click "Publish"
- Progress bar muestra upload
- Tiempo: Depende de tamaño (100 MB = 5-10 min, 500 MB = 20-40 min)

**Paso 5: Procesamiento en cloud**
- Después de upload, BIM 360 procesa modelo
- Genera thumbnails, optimiza geometría
- Ejecuta clash detection si tests fueron incluidos
- Tiempo procesamiento: 10-30 minutos adicionales

**Paso 6: Notificación de disponibilidad**
- Email notification cuando modelo está listo
- Team members reciben notificación de nueva versión

**Paso 7: Verificar publicación**
- Acceder a BIM 360 web
- Abrir proyecto > Model Coordination
- Verificar que modelo aparece
- Abrir y navegar para confirmar

### 3.3 Gestión de Versiones

BIM 360 mantiene historial completo de versiones:

**Versionado automático:**
- Cada publicación crea nueva versión: v1, v2, v3...
- Versiones anteriores se mantienen accesibles
- Historial completo de cambios

**Comparación de versiones:**
1. En BIM 360 web, seleccionar modelo
2. Click "Version History"
3. Seleccionar dos versiones a comparar
4. BIM 360 muestra diferencias:
   - Elementos agregados (verde)
   - Elementos eliminados (rojo)
   - Elementos modificados (amarillo)

**Rollback a versión anterior:**
- Si versión nueva tiene problemas
- Seleccionar versión anterior como "Current"
- Equipo continúa trabajando con versión estable

**Best practices de versionado:**
- Publicar semanalmente o tras cambios significativos
- Nombrar versiones consistentemente: "v1.0", "v1.1", "v2.0"
- Incluir description detallada de cambios
- Mantener log de versiones en documentación de proyecto

---

## 4. Colaboración en BIM 360 Web

### 4.1 Acceso y Navegación en Web Browser

**Acceso:**
1. Navegar a: https://bim360.autodesk.com
2. Login con credenciales
3. Seleccionar Project
4. Click "Model Coordination" en menú lateral
5. Seleccionar modelo publicado

**Interfaz BIM 360 Model Coordination:**

**Viewport 3D:**
- Visualización del modelo federado
- Controles de navegación (orbit, pan, zoom)
- Similar a Navisworks pero más simplificado

**Sidebar izquierdo:**
- **Models:** Lista de modelos publicados
- **Viewpoints:** Saved viewpoints
- **Clash Tests:** Tests de detección de interferencias
- **Issues:** Problemas detectados/creados
- **Markups:** Anotaciones 2D

**Toolbar superior:**
- Navigation tools
- Section tools
- Measure tools
- Markup tools
- Settings

**Properties panel:**
- Propiedades de elemento seleccionado
- Similar a Properties en Navisworks

### 4.2 Herramientas de Navegación Web

**Navigation modes:**

**Orbit:**
- Click y drag mouse: Rotar vista
- Scroll wheel: Zoom in/out
- Similar a navegación Navisworks

**Walk:**
- Navegación first-person
- WASD keys para moverse
- Mouse para mirar

**Fly:**
- Navegación libre 3D
- Sin restricción de gravedad

**Zoom Window:**
- Define ventana rectangular
- Zoom a esa área

**Zoom All:**
- Encuadre de modelo completo
- Reset de vista

**Section:**
- Activar section plane
- Drag para mover plano de corte
- Visualizar interiores

**Measure:**
- Point to Point
- Area
- Angle
- Resultados en unidades del proyecto

### 4.3 Viewpoints Colaborativos

Los Saved Viewpoints de Navisworks se sincronizan a BIM 360:

**Uso de Viewpoints en web:**

1. **Acceder a panel Viewpoints:**
   - Sidebar > Viewpoints tab

2. **Seleccionar viewpoint:**
   - Click en viewpoint de lista
   - Cámara se anima a esa vista

3. **Crear nuevo viewpoint en web:**
   - Navegar a vista deseada
   - Click "+" en panel Viewpoints
   - Nombrar y guardar
   - Se sincroniza de vuelta a Navisworks desktop

4. **Compartir viewpoint:**
   - Click derecho en viewpoint
   - "Copy Link"
   - Pegar link en email/chat
   - Receptor abre directamente esa vista en BIM 360

**Uso típico:**
- Coordinador identifica clash en Navisworks desktop
- Crea viewpoint en ubicación de clash
- Publica a BIM 360
- Contratista en obra abre viewpoint en tablet
- Visualiza exactamente la misma vista, entiende problema

---

## 5. Clash Detection en BIM 360

### 5.1 Publicación de Clash Tests

Clash tests configurados en Navisworks (Lecciones 7-12) se publican a cloud:

**Proceso:**

1. **Configurar clash tests en Navisworks:**
   - Crear tests Arq-Est, Arq-MEP, Est-MEP, etc.
   - Ejecutar tests, revisar resultados

2. **Publicar modelo con clash tests:**
   - BIM 360 tab > Publish Model
   - Verificar checkbox "Include Clash Tests"
   - Publish

3. **Procesamiento en cloud:**
   - BIM 360 ejecuta clash tests en cloud
   - Genera reportes automáticamente
   - Notifica a team members

4. **Acceder a resultados en BIM 360 web:**
   - Project > Model Coordination
   - Sidebar > Clash Tests
   - Ver lista de tests y resultados

### 5.2 Revisión de Clashes en Web

**Interface de Clash Tests:**

**Lista de Clash Tests:**
- Nombre de test
- Número de clashes detectados
- Status: New, Active, Reviewed, Approved, Resolved
- Fecha de última ejecución

**Detalle de Clash Test:**

1. **Seleccionar clash test:**
   - Click en test específico (ej: "Arq-MEP")

2. **Lista de clashes individuales:**
   - Grid mostrando cada clash
   - Columnas:
     - **ID:** Identificador único
     - **Status:** New, Active, Reviewed, Resolved
     - **Assigned To:** Usuario responsable
     - **Grid Location:** Ubicación en proyecto
     - **Distance:** Distancia de penetración
     - **Elements:** Elementos involucrados

3. **Visualizar clash en 3D:**
   - Click en row de clash
   - Viewport 3D zoom automático a ubicación
   - Elementos en clash se destacan (rojo)
   - Sección automática para visualización clara

4. **Cambiar status de clash:**
   - Click en clash > Change Status
   - Opciones:
     - **Active:** Pendiente de resolver
     - **Reviewed:** Revisado, esperando acción
     - **Approved:** Aceptado como design intent (no es error)
     - **Resolved:** Resuelto en nueva versión de modelo

5. **Asignar responsable:**
   - Click en clash > Assign To
   - Seleccionar team member
   - Usuario recibe notificación

### 5.3 Workflow de Resolución Colaborativa

**Proceso típico:**

**Día 1 - Detección:**
1. BIM Coordinator publica modelo actualizado desde Navisworks
2. BIM 360 ejecuta clash tests automáticamente
3. 45 nuevos clashes detectados

**Día 2 - Revisión:**
4. BIM Coordinator revisa clashes en BIM 360 web
5. Clasifica clashes:
   - 30 clashes reales (Active)
   - 10 clashes aceptables (Approved - ducto pasa por viga con coordinación)
   - 5 duplicados (Resolved)
6. Asigna clashes activos a responsables:
   - 15 clashes Arq-MEP → Coordinator MEP
   - 15 clashes Est-MEP → Structural Engineer

**Día 3-5 - Resolución:**
7. Coordinator MEP revisa sus 15 clashes asignados
8. Algunos resuelve directamente en Revit:
   - Mueve ductos para evitar vigas
   - Re-rutea tuberías
9. Otros comunica a diseñador:
   - Crea Issue en BIM 360 vinculado a clash
   - Diseñador recibe notificación

**Día 6 - Verificación:**
10. Diseñadores publican modelos corregidos
11. BIM 360 re-ejecuta clash tests automáticamente
12. BIM Coordinator verifica:
    - 12 clashes resueltos exitosamente
    - 3 clashes persisten → Follow up

**Resultado:** Proceso colaborativo eficiente sin envío de emails, archivos adjuntos o confusiones.

---

## 6. Issues Management

### 6.1 Creación de Issues en BIM 360

**Issues** son problemas/observaciones vinculados a ubicación 3D en el modelo:

**Tipos de issues:**
- Clashes no resueltos
- Falta de información (RFI)
- Problemas de constructibilidad
- Errores de diseño
- Observaciones de campo
- Solicitudes de cambio

**Proceso de creación:**

**Método 1: Desde Clash**

1. En BIM 360 web, visualizar clash
2. Click en clash > "Create Issue"
3. BIM 360 crea issue automáticamente:
   - Título: "Clash between [Element A] and [Element B]"
   - Ubicación: Coordenadas del clash
   - Viewpoint: Vista del clash
   - Elementos involucrados: Vinculados

**Método 2: Manual**

1. Navegar a ubicación problemática en modelo 3D
2. Click "+" en panel Issues
3. Configurar issue:

**Título:**
- Descriptivo y específico
- Ejemplo: "Ducto HVAC interfiere con viga V-203 en eje C"

**Description:**
- Detalle del problema
- Ejemplo: "Ducto de suministro 600x400mm pasa a través de viga estructural. Requiere re-ruteo o coordinación con hueco estructural."

**Type:**
- Clash
- Design
- RFI (Request for Information)
- Safety
- Constructibility
- Other

**Status:**
- Draft (borrador)
- Open (abierto)
- In Progress (en proceso)
- Resolved (resuelto)
- Closed (cerrado)

**Priority:**
- Low
- Medium
- High
- Critical

**Assigned To:**
- Usuario responsable de resolver
- Ejemplo: MEP Coordinator

**Due Date:**
- Fecha límite de resolución

**Root Cause (opcional):**
- Design Error
- Construction Issue
- Coordination Gap
- Changed Condition

**Attachments:**
- Subir fotos, documentos, markups adicionales

4. Click "Create"
5. Issue se guarda y notifica a asignado

### 6.2 Workflow de Issues

**Ciclo de vida de un Issue:**

```
1. OPEN → 2. ASSIGNED → 3. IN PROGRESS → 4. RESOLVED → 5. CLOSED
```

**1. OPEN:**
- Issue creado, esperando asignación
- Responsabilidad: Issue Creator o BIM Coordinator

**2. ASSIGNED:**
- Issue asignado a responsable específico
- Responsable recibe notificación email + in-app

**3. IN PROGRESS:**
- Responsable trabaja en resolución
- Puede comentar progreso
- Puede subir archivos (planos corregidos, fotos, etc.)

**4. RESOLVED:**
- Responsable marca como resuelto
- Incluye comentario explicando resolución
- Ejemplo: "Ducto re-ruteado 500mm al norte. Ver modelo actualizado v2.3"

**5. CLOSED:**
- BIM Coordinator verifica resolución
- Cierra issue si está satisfecho
- O reabre si no está resuelto adecuadamente

**Comentarios y comunicación:**
- Cualquier miembro del proyecto puede comentar en issue
- Thread de conversación visible para todos con permisos
- Notificaciones automáticas de nuevos comentarios
- Comunicación centralizada, sin emails perdidos

### 6.3 Dashboards y Reportes de Issues

**Dashboard de Issues:**

En BIM 360 web, acceder a Issues Dashboard:
- Muestra resumen visual de estado de issues
- Gráficos:
  - **Issues by Status:** Pie chart (Open, In Progress, Resolved, Closed)
  - **Issues by Type:** Bar chart (Clash, Design, RFI, etc.)
  - **Issues by Priority:** Stacked bar (Low, Medium, High, Critical)
  - **Issues by Assignee:** Quién tiene más issues asignados
  - **Issues Over Time:** Line chart, tendencia de apertura/cierre

**Reportes exportables:**

1. **Acceder a Reports:**
   - BIM 360 > Project > Insights > Reports

2. **Seleccionar reporte:**
   - "Issues Report"
   - Configure date range, filters

3. **Exportar:**
   - PDF: Para presentaciones
   - Excel: Para análisis detallado
   - CSV: Para integración con otras herramientas

**Ejemplo - Issues Summary Report:**

```
PROJECT ISSUES SUMMARY REPORT
Project: Torre Corporativa ABC
Period: 2025-10-01 to 2025-11-24

OVERVIEW:
- Total Issues Created: 87
- Currently Open: 23
- In Progress: 18
- Resolved (pending closure): 12
- Closed: 34

BY TYPE:
- Clash: 45 (52%)
- Design: 18 (21%)
- RFI: 12 (14%)
- Constructibility: 8 (9%)
- Safety: 4 (4%)

BY PRIORITY:
- Critical: 3 (all in progress)
- High: 15 (8 resolved, 7 in progress)
- Medium: 42 (20 closed, 22 in progress/open)
- Low: 27 (14 closed, 13 open)

RESPONSE TIME (avg):
- Time to Assign: 1.2 days
- Time to Start Progress: 2.5 days
- Time to Resolve: 8.3 days
- Time to Close: 10.1 days

TOP CONTRIBUTORS:
- MEP Coordinator: 28 issues resolved
- Structural Engineer: 18 issues resolved
- Architect: 15 issues resolved
```

---

## 7. Acceso Móvil - Tablets y Smartphones

### 7.1 BIM 360 Mobile App

**Disponibilidad:**
- **iOS:** App Store (iPad, iPhone)
- **Android:** Google Play (tablets, smartphones)
- Gratis para usuarios con licencia BIM 360

**Instalación:**
1. Descargar "BIM 360" app de tienda
2. Abrir app
3. Login con credenciales Autodesk
4. Seleccionar Account y Project
5. Modelos se sincronizan automáticamente

### 7.2 Navegación en Tablet/Smartphone

**Interface mobile optimizada:**

**Gestos táctiles:**
- **1 dedo drag:** Pan (mover vista)
- **2 dedos pinch:** Zoom in/out
- **2 dedos rotate:** Orbit alrededor de modelo
- **Double tap:** Zoom a elemento tocado
- **3 dedos swipe up:** Menú de herramientas

**Herramientas disponibles:**
- Navigate (orbit, pan, zoom)
- Walk (navegación first-person con acelerómetro del dispositivo)
- Measure (distancias, áreas)
- Section (cortes dinámicos)
- Markups (anotaciones touch)
- Issues (crear, ver, resolver desde campo)

**Viewpoints:**
- Acceder a saved viewpoints desde lista
- Tocar viewpoint → anima a esa vista
- Crear nuevos viewpoints en campo

**Offline mode:**
- Descargar modelo para acceso sin internet
- Útil en obras con conectividad limitada
- Cambios se sincronizan al reconectar

### 7.3 Uso en Obra - Casos Prácticos

**Caso 1: Verificación de instalación MEP**

**Contexto:** Contratista MEP instalando ductos en piso 3

**Proceso:**
1. Capataz abre BIM 360 en iPad
2. Navega a ubicación actual en modelo 3D
3. Compara modelo vs instalación física
4. Identifica discrepancia: Ducto instalado no coincide con modelo
5. Toma foto con iPad
6. Crea Issue directamente desde iPad:
   - Título: "Ducto instalado no coincide con diseño - Eje B"
   - Attach foto tomada
   - Ubicación: Automática (GPS + posición en modelo)
   - Assign a: Coordinator MEP
   - Priority: High
7. Issue sincroniza a cloud
8. Coordinator en oficina recibe notificación inmediata
9. Responde con comentario: "Revisar, posiblemente diseño cambió. Verifico planos."

**Resultado:** Problema detectado y comunicado en tiempo real, evitando trabajo incorrecto.

**Caso 2: Coordinación de grúa**

**Contexto:** Operador de grúa izando elemento prefabricado

**Proceso:**
1. Operador abre BIM 360 en tablet resistente
2. Accede a viewpoint "Izaje Viga Prefab V-08"
3. Visualiza en 3D posición final de viga
4. Usa measure tool para confirmar altura de instalación: 18.50m
5. Coordina con riggers usando vista 3D como referencia común
6. Ejecuta izaje con precisión

**Resultado:** Comunicación clara, instalación precisa, sin errores costosos.

**Caso 3: Walkthrough con cliente en obra**

**Contexto:** Recorrido de cliente VIP por obra en construcción

**Proceso:**
1. BIM Manager carga modelo en iPad
2. Durante recorrido físico por obra, muestra en paralelo:
   - Estado actual real (visual)
   - Diseño final en BIM 360 (iPad)
3. Cliente visualiza cómo se verá terminado
4. Navega entre viewpoints: Lobby, oficinas, terraza
5. Cliente hace preguntas sobre acabados
6. BIM Manager muestra materiales en modelo 3D
7. Cliente solicita cambio de color de carpintería
8. BIM Manager crea Issue en el momento:
   - "Cliente solicita cambio color carpintería de nogal a roble"
   - Assign a: Architect
   - Urgente para no retrasar fabricación

**Resultado:** Cliente involucrado, decisiones en tiempo real, comunicación efectiva.

---

## 8. Control de Permisos y Seguridad

### 8.1 Roles y Permisos en BIM 360

**Roles disponibles:**

**Account Admin:**
- Control total sobre account
- Crear/eliminar proyectos
- Gestionar usuarios y licencias
- Configurar integraciones

**Project Admin:**
- Control total sobre proyecto específico
- Invitar/remover miembros de proyecto
- Configurar permisos por módulo
- Acceso a todos modelos y datos

**Collaborate:**
- Acceso completo a modelos
- Crear/editar/resolver issues
- Publicar modelos desde Navisworks
- Ejecutar clash tests

**View Only:**
- Solo visualización de modelos
- No puede crear issues o markups
- No puede publicar modelos
- Útil para stakeholders externos, clientes

**Custom Roles:**
- Configurables con permisos específicos
- Ejemplo: "Contractor" con acceso limitado a issues de su especialidad

### 8.2 Configuración de Permisos

**Nivel de proyecto:**

1. **Acceder a Project Settings:**
   - BIM 360 > Project > Settings > Permissions

2. **Configurar permisos por módulo:**

**Model Coordination:**
- Who can publish models: Collaborate roles
- Who can create clash tests: Collaborate
- Who can resolve clashes: Collaborate
- Who can view models: All project members

**Issues:**
- Who can create issues: Collaborate + View Only (configurable)
- Who can assign issues: Collaborate
- Who can change status: Assigned user + Admin
- Who can close issues: Admin + Issue Creator

**Docs:**
- Who can upload: Collaborate
- Who can download: All
- Who can delete: Admin only

3. **Permisos por folder (Docs):**
   - Carpeta "Confidencial" → Solo Admins
   - Carpeta "Diseño" → Collaborate members
   - Carpeta "Público" → All members

### 8.3 Auditoría y Tracking

BIM 360 registra todas las acciones:

**Activity Log:**
- Quién publicó modelo X
- Quién creó issue Y
- Quién resolvió clash Z
- Quién descargó documento W

**Acceso al Activity Log:**
- Project > Insights > Activity
- Filtrar por usuario, fecha, acción

**Uso para auditoría:**
- Verificar quién hizo cambios problemáticos
- Cumplir con requisitos de trazabilidad
- Resolver disputas (quién era responsable)

---

## 9. Integración con Autodesk Construction Cloud

### 9.1 Ecosistema Construction Cloud

BIM 360 Glue/Collaborate es parte de ecosistema mayor:

**Productos integrados:**

**BIM Collaborate / BIM Collaborate Pro:**
- Model Coordination (ex-Glue)
- Design Collaboration
- Document Management (Docs)

**Autodesk Build:**
- Field Management (obra)
- RFIs, Submittals, Daily Logs
- Punch Lists, Inspections

**Autodesk Takeoff:**
- Quantification 2D/3D
- Estimación de costos

**Autodesk Cost Management:**
- Presupuesto y control de costos
- Change orders, invoicing

**Integración:**
- Single sign-on entre productos
- Datos compartidos (projects, users, files)
- Issues fluyen entre BIM Collaborate → Build → Cost
- Modelos 3D accesibles desde todos productos

### 9.2 Workflow Integrado Ejemplo

**Proyecto completo usando Construction Cloud:**

**Design Phase:**
1. Diseñadores trabajan en Revit
2. Publican a BIM Collaborate para coordinación
3. Navisworks detecta clashes
4. Issues creados en BIM Collaborate
5. Diseñadores resuelven en Revit, re-publican

**Pre-Construction:**
6. Estimadores usan Autodesk Takeoff
7. Extraen cantidades de modelo 3D en BIM Collaborate
8. Generan presupuesto en Autodesk Cost Management
9. Vinculan partidas a modelo 3D

**Construction:**
10. Contractor usa Autodesk Build en obra
11. Crea RFIs vinculados a ubicación 3D en modelo
12. Daily Logs documentan progreso
13. Punch Lists se crean vinculadas a elementos del modelo
14. Inspections usan modelo como referencia

**Close-out:**
15. Todos issues cerrados verificados en BIM Collaborate
16. Modelo as-built actualizado
17. Documentación completa en Docs
18. Handover a operaciones con modelo completo

**Ventaja:** Single platform, datos conectados, sin re-entrada manual.

---

## 10. Best Practices y Workflows Profesionales

### 10.1 Mejores Prácticas de Publicación

1. **Frecuencia consistente:**
   - Publicar semanalmente (mínimo)
   - O tras cambios significativos
   - Coordinar horario con equipo (ej: Viernes 5pm)

2. **Naming conventions:**
   - Consistente: "Torre ABC - Coordination Model v2.5"
   - Incluir versión en nombre
   - Incluir fecha si publicaciones múltiples en semana

3. **Descriptions detalladas:**
   - Resumir cambios en esta versión
   - Ejemplo: "Actualización MEP piso 3-5, corrección estructural eje B, actualización fachada norte"

4. **Limpieza antes de publicar:**
   - Hide elementos innecesarios
   - Ocultar clash debris
   - Mantener modelo limpio para equipo

5. **Verificación post-publicación:**
   - Siempre abrir en BIM 360 web después de publicar
   - Verificar que modelo se ve correcto
   - Confirmar que clash tests corrieron

### 10.2 Mejores Prácticas de Issues

1. **Títulos descriptivos:**
   - Malo: "Problema en piso 3"
   - Bueno: "Ducto HVAC interfiere con viga V-205 en eje C, nivel 3"

2. **Fotos y markups:**
   - Siempre incluir visual de problema
   - Markup sobre modelo indicando área específica

3. **Assignment preciso:**
   - Asignar a persona específica, no a rol genérico
   - Verificar que asignado tiene capacidad de resolver

4. **Priority realista:**
   - No marcar todo como Critical
   - Critical: Detiene construcción
   - High: Impacta próxima fase
   - Medium: Resolver en 1-2 semanas
   - Low: Resolver eventualmente

5. **Follow-up:**
   - BIM Coordinator revisa dashboard diario
   - Follow up con asignados si issues están estancados
   - Escalar si no hay progreso

### 10.3 Workflow de Coordinación Semanal

**Lunes:**
- Recibir modelos actualizados de diseñadores
- Federar en Navisworks
- Ejecutar clash detection localmente
- Revisar nuevos clashes

**Martes:**
- Publicar modelo a BIM 360
- BIM 360 ejecuta clash tests en cloud
- Revisar resultados cloud vs local (deben coincidir)

**Miércoles:**
- Asignar clashes a responsables
- Crear issues para clashes complejos
- Coordinación meeting remota usando BIM 360 web
- Team members se conectan desde ubicaciones distribuidas
- Navegar modelo juntos, discutir resoluciones

**Jueves-Viernes:**
- Responsables trabajan en resolver clashes
- Actualizan status de issues
- Comentan resoluciones propuestas

**Próximo Lunes:**
- Recibir modelos corregidos
- Verificar resoluciones
- Cerrar issues resueltos
- Repetir ciclo

**Resultado:** Ritmo consistente, coordinación eficiente, todos en sync.

---

## Resumen de la Lección

En esta lección ha dominado **BIM 360 Glue Integration** en Navisworks 2026:

### Competencias Adquiridas

**Técnicas:**
- Configuración de account y workspace en BIM 360/Construction Cloud
- Publicación de modelos federados desde Navisworks a cloud
- Navegación y visualización de modelos en BIM 360 web
- Acceso móvil desde tablets y smartphones (iOS/Android)
- Ejecución y revisión de clash detection en línea
- Creación, asignación y gestión de issues colaborativos
- Configuración de permisos y control de acceso
- Generación de dashboards y reportes de coordinación
- Sincronización entre Navisworks desktop y BIM 360 cloud

**Profesionales:**
- Coordinación distribuida con equipos geográficamente dispersos
- Colaboración en tiempo real sin envío manual de archivos
- Gestión centralizada de issues con trazabilidad completa
- Comunicación efectiva entre oficina y obra
- Toma de decisiones informada con acceso ubicuo a información
- Control de versiones automático y auditable
- Workflows integrados en ecosistema Autodesk Construction Cloud

### Puntos Clave

1. **BIM 360 extiende Navisworks a colaboración cloud** - Acceso ubicuo, sincronización automática
2. **Publicación es simple** - Unos clicks desde Navisworks, procesamiento automático en cloud
3. **Clash detection distribuido** - Equipos remotos revisan y resuelven en línea
4. **Issues vinculados a 3D** - Comunicación precisa de problemas con ubicación exacta
5. **Acceso móvil transforma coordinación en obra** - Tablets reemplazan planos, información en tiempo real
6. **Control de versiones automático** - Historial completo, rollback posible, auditoría total
7. **Integración con Construction Cloud** - Workflow completo design → construcción → operación

### Preparación para Lección 23

En la próxima lección aprenderá **Data Exchange y Interoperability**, donde explorará exportación a múltiples formatos, integración con ecosistema Autodesk y plataformas de terceros, workflows IFC estándar y mejores prácticas de intercambio de datos BIM.

**Adelanto Lección 23:**
- Formatos de exportación (NWD, NWC, FBX, DWF)
- Integración con Revit, AutoCAD, Civil 3D, Plant 3D
- Workflows con plataformas no-Autodesk (Tekla, ArchiCAD, Bentley)
- Implementación de estándares IFC (Industry Foundation Classes)
- Integración de nubes de puntos y reality capture
- Escaneo láser y datos de campo
- Mejores prácticas de interoperabilidad BIM

---

## Ejercicio Práctico

Ver **Ejercicio 22** en el archivo `ejercicios.md` del módulo para implementar un workflow completo de colaboración BIM 360 con publicación de modelo, clash detection en línea y gestión de issues distribuida.

**¡Felicitaciones por completar la Lección 22!** Ha adquirido las habilidades de colaboración cloud esenciales para coordinación distribuida y eficiente en proyectos BIM modernos.
