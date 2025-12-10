# Lección 13: Introducción a TimeLiner

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Comprender los conceptos fundamentales de simulación 4D y su aplicación en proyectos de construcción
- Navegar eficientemente por la interfaz de TimeLiner y configurar el workspace óptimo
- Crear y gestionar task hierarchies utilizando Work Breakdown Structure (WBS)
- Vincular elementos del modelo 3D a tasks del cronograma mediante diferentes métodos
- Configurar appearance profiles para visualizar estados temporales (constructed, current, future, demolished)
- Reproducir simulaciones 4D básicas utilizando timeline controls y ajustes de velocidad
- Exportar snapshots de la simulación para documentación y presentaciones

**Duración**: 60 minutos

---

## 1. Fundamentos de Simulación 4D (10 minutos)

### ¿Qué es la Simulación 4D?

La simulación 4D agrega la **dimensión temporal** al modelo 3D tradicional, permitiendo visualizar cómo el proyecto se construye a lo largo del tiempo. Esta capacidad transforma la manera en que se planifica, comunica y ejecuta la construcción.

**Las 4 Dimensiones:**
- **1D**: Lista de actividades (cronograma tradicional en texto)
- **2D**: Gantt chart (barras horizontales mostrando duración)
- **3D**: Modelo geométrico del proyecto (BIM)
- **4D**: Modelo 3D + tiempo = visualización de la secuencia constructiva

### Beneficios de la Simulación 4D

**1. Constructability Analysis (Análisis de Constructibilidad)**
- Identificar conflictos de secuencia antes de comenzar la construcción
- Validar que los elementos se construyen en el orden lógico correcto
- Detectar problemas de acceso a zonas de trabajo
- Verificar disponibilidad de espacio para equipos y materiales

**Ejemplo Real**: En un proyecto de hospital de 12 pisos en Boston, la simulación 4D identificó que el cronograma original requería instalar equipos HVAC en el techo antes de completar las paredes del último piso. El equipo de VDC detectó este conflicto 3 meses antes de la instalación, ahorrando $180,000 USD en retrabajos y 2 semanas de retraso.

**2. Communication (Comunicación Visual)**
- Presentar el plan de construcción a clientes de manera intuitiva
- Alinear expectativas de propietarios sobre fases y disrupciones
- Coordinar con subcontratistas la secuencia de trabajo
- Demostrar competencia técnica en propuestas de licitación

**Caso de Estudio**: Un general contractor en Dubai utilizó videos 4D en su propuesta para un proyecto de $450M USD. El cliente eligió su propuesta sobre 7 competidores, citando la "claridad excepcional del plan de ejecución" como factor decisivo. El video 4D de 8 minutos comunicó lo que 200 páginas de documentos técnicos no lograban.

**3. Schedule Optimization (Optimización del Cronograma)**
- Visualizar el critical path en 3D
- Identificar oportunidades de fast-tracking o paralelización
- Validar que la duración de las actividades es realista
- Detectar actividades con recursos sobreasignados

**4. Site Logistics Planning (Planificación de Logística de Sitio)**
- Planificar ubicación de grúas, elevadores y equipos pesados
- Definir rutas de acceso para vehículos y materiales
- Identificar áreas de laydown y almacenamiento temporal
- Simular zonas de exclusión por seguridad (hot zones)

**5. Risk Identification (Identificación de Riesgos)**
- Detectar actividades con ventanas de tiempo críticas
- Visualizar impacto de retrasos en actividades downstream
- Identificar dependencias ocultas entre disciplinas
- Analizar robustez del cronograma ante contingencias

### Casos de Uso Típicos en la Industria

**Construcción Vertical (High-rise Buildings)**
- Simulación de ciclos repetitivos de pisos (estructura, MEP, arquitectura)
- Coordinación de múltiples grúas torre
- Fases de core and shell vs tenant fit-out

**Infraestructura (Puentes, Carreteras, Túneles)**
- Secuencia de excavación y soporte temporal
- Simulación de izaje de elementos prefabricados (dovelas de puentes)
- Coordinación con tráfico existente y desvíos

**Proyectos Industriales (Plantas, Refinerías)**
- Shutdowns y tie-ins con operaciones existentes
- Secuencia de instalación de equipos críticos
- Coordinación de hot work y permisos especiales

**Renovaciones y Expansiones**
- Construcción en sitios operativos (hospitales, aeropuertos)
- Fases de demolición vs construcción nueva
- Minimización de disrupciones a operaciones existentes

### Diferencia entre 3D y 4D

| Aspecto | Modelo 3D Estático | Simulación 4D Dinámica |
|---------|-------------------|------------------------|
| **Visualización** | Estado final completo | Progreso temporal de construcción |
| **Propósito** | Diseño y coordinación | Planificación y ejecución |
| **Información** | Geometría y propiedades | Geometría + secuencia + tiempo |
| **Preguntas que responde** | "¿Qué se va a construir?" | "¿Cuándo y cómo se construirá?" |
| **Usuarios típicos** | Diseñadores, ingenieros | Planners, VDC managers, field supervisors |
| **Entregables** | Planos, renders, coordinated models | Videos 4D, constructability reports, schedules |

---

## 2. Interfaz de TimeLiner (15 minutos)

### Acceso a TimeLiner

**Método 1: Ribbon Tab**
1. Ir a tab **Home** en el ribbon
2. Clic en **TimeLiner** en el panel Tools
3. Se abre el panel TimeLiner dockable a la izquierda o derecha

**Método 2: Keyboard Shortcut**
- Presionar **F5** (shortcut por defecto)
- Configurable en Options > Interface > Shortcuts

**Método 3: Quick Access Toolbar**
- Agregar TimeLiner al Quick Access Toolbar para acceso rápido
- Click derecho en botón TimeLiner > Add to Quick Access Toolbar

### Componentes de la Interfaz TimeLiner

![Interfaz TimeLiner Overview]

**1. Tasks Panel (Panel de Tareas)**
Ubicado en la parte superior del panel TimeLiner, muestra la lista jerárquica de todas las tareas del cronograma.

**Columnas principales:**
- **Task Name**: Nombre descriptivo de la actividad
- **Type**: Tipo de task (Construct, Demolish, Temporary, Maintain)
- **Start Date**: Fecha de inicio de la actividad
- **End Date**: Fecha de finalización de la actividad
- **Duration**: Duración en días, semanas o meses
- **Attached**: Número de elementos del modelo vinculados a esta task
- **Appearance**: Regla de apariencia aplicada (color, transparency)

**Columnas adicionales disponibles:**
- Planned Start/End (para tracking de baseline vs actual)
- Resource Names (personal, equipos asignados)
- Cost (costo planificado de la actividad)
- Predecessors/Successors (dependencias)
- Total Float (holgura disponible)
- Status (Not Started, In Progress, Complete)

**Personalizar columnas:**
- Click derecho en header de columnas > Configure Columns
- Arrastrar columnas para reordenar
- Ajustar ancho de columnas arrastrando bordes

**2. Timeline (Línea de Tiempo)**
Ubicada debajo del Tasks Panel, muestra gráficamente las barras de las tareas a lo largo del tiempo.

**Elementos visuales:**
- **Barra de tarea**: Representa duración de cada actividad
- **Diamante**: Hito (milestone) sin duración
- **Líneas de dependencia**: Conectan tareas predecesoras y sucesoras
- **Barra crítica**: Tareas del critical path (usualmente en rojo)
- **Time slider**: Indicador de posición actual en la simulación

**Controles de zoom temporal:**
- **Zoom In**: Click en + o rueda del mouse hacia arriba
- **Zoom Out**: Click en - o rueda del mouse hacia abajo
- **Zoom Extents**: Doble click en timeline para ver todo el proyecto
- **Pan horizontal**: Click y arrastrar en timeline, o usar scrollbar

**Escalas de tiempo disponibles:**
- Hours (para proyectos muy cortos o shutdowns)
- Days (proyectos de semanas/meses)
- Weeks (proyectos de varios meses)
- Months (proyectos de años)
- Quarters (programas multi-año)
- Years (programas de infraestructura de larga duración)

**3. Playback Controls (Controles de Reproducción)**
Ubicados en la parte inferior del panel TimeLiner, controlan la simulación temporal.

**Botones principales:**
- **Play**: Inicia la simulación automática
- **Pause**: Pausa la simulación en el frame actual
- **Stop**: Detiene y regresa al inicio
- **Step Backward**: Retrocede un frame o intervalo
- **Step Forward**: Avanza un frame o intervalo
- **Loop**: Reproduce en bucle continuo

**Configuración de velocidad:**
- **Interval**: Define el incremento temporal de cada frame (1 day, 1 week, etc.)
- **Speed**: Controla qué tan rápido avanza la simulación (0.1x a 10x)
- **Real-time**: Sincroniza con reloj del sistema (para simulaciones en vivo durante construcción)

**4. Simulation Settings Panel**
Accesible desde el menú desplegable en TimeLiner o desde Settings button.

**Configuraciones clave:**
- **Enable Simulation**: Activa/desactiva la visualización temporal en el modelo
- **Maintain Attached Selection**: Mantiene seleccionados los objetos de la task actual
- **Attach Override Color**: Define color de highlight para elementos attachados
- **Auto-Pause at Milestones**: Pausa automáticamente en hitos importantes
- **Export Settings**: Configuración para video output (resolución, fps, codec)

### Workspace Configuration Óptimo

**Dual Monitor Setup (Recomendado):**
- **Monitor 1**: Scene view maximizado con modelo 3D
- **Monitor 2**: TimeLiner panel completo + Selection Tree + Properties

**Single Monitor Setup:**
- TimeLiner docked a la derecha (30% de ancho de pantalla)
- Scene view a la izquierda (70%)
- Selection Tree colapsado o en modo autohide

**Saved Views para 4D:**
Crear saved viewpoints específicos para reproducción de simulación:
- View 1: Site overview (vista general del proyecto)
- View 2: Sectional view por piso/zona
- View 3: Close-up de áreas críticas
- View 4: Aerial view para site logistics

**Docking y Arranging Panels:**
1. Arrastrar panel TimeLiner al borde deseado (left, right, bottom)
2. Soltar cuando aparece preview azul del docking
3. Ajustar tamaño arrastrando divisor entre paneles
4. Guardar workspace: View > Workspace > Save Current Workspace

---

## 3. Conceptos de Construction Scheduling (10 minutos)

### Work Breakdown Structure (WBS)

El WBS es la estructura jerárquica que organiza el cronograma de construcción en niveles lógicos, desde el proyecto completo hasta las actividades individuales.

**Niveles típicos de WBS en construcción:**

**Nivel 1: Proyecto**
- Ejemplo: "Hospital Regional 250-Bed Expansion"

**Nivel 2: Fases Principales**
- Site Work & Demolition
- Foundations & Below-Grade
- Superstructure
- Building Enclosure
- MEP Rough-In
- Architectural Finishes
- MEP Final & Commissioning
- Site Restoration & Landscaping

**Nivel 3: Sub-fases por Disciplina**
- Superstructure
  - Structural Steel
  - Concrete Slabs
  - Metal Deck
  - Fireproofing

**Nivel 4: Zonas o Áreas**
- Structural Steel
  - Grid Lines A-D (North Wing)
  - Grid Lines E-H (Central Core)
  - Grid Lines I-L (South Wing)

**Nivel 5: Actividades Específicas**
- Grid Lines A-D (North Wing)
  - Erect Columns Level 2
  - Erect Beams Level 2
  - Install Metal Deck Level 2
  - Pour Concrete Slab Level 2

**Best Practice**: Limitar el WBS a 4-5 niveles máximo. Más niveles dificultan la visualización y management.

### Task Types en TimeLiner

TimeLiner soporta 4 tipos de tasks, cada uno con comportamiento visual diferente:

**1. Construct (Construir)**
- **Uso**: Elementos que se instalan permanentemente
- **Apariencia inicial**: Hidden (ocultos antes de start date)
- **Durante construcción**: Current work appearance (resaltados, semi-transparentes)
- **Después de construcción**: Constructed appearance (color/textura final)
- **Ejemplo**: Columnas, muros, losas, equipos MEP

**2. Demolish (Demoler)**
- **Uso**: Elementos existentes que se remueven
- **Apariencia inicial**: Existing appearance (visible, usualmente gris)
- **Durante demolición**: Current work appearance (resaltados en rojo)
- **Después de demolición**: Hidden (desaparecen del modelo)
- **Ejemplo**: Demolición de estructuras existentes, remoción de equipos viejos

**3. Temporary (Temporal)**
- **Uso**: Elementos que se instalan y luego se remueven
- **Apariencia inicial**: Hidden
- **Durante instalación**: Current work appearance
- **Durante uso**: Temporary appearance (color distintivo, ej: amarillo)
- **Después de remoción**: Hidden
- **Ejemplo**: Encofrados, andamios, grúas móviles, oficinas temporales

**4. Maintain (Mantener)**
- **Uso**: Elementos que permanecen visibles todo el tiempo
- **Apariencia**: No cambia durante la simulación
- **Ejemplo**: Edificios adyacentes, topografía existente, contexto urbano

### Task Dependencies (Dependencias entre Tareas)

Las dependencias definen el orden lógico de construcción. TimeLiner importa 4 tipos estándar de CPM (Critical Path Method):

**1. Finish-to-Start (FS) - La más común (85% de las dependencias)**
- La tarea sucesora no puede iniciar hasta que termine la predecesora
- Ejemplo: No se puede encofrar hasta terminar de colocar refuerzo (rebar)
- Representación: Task A → Task B

**2. Start-to-Start (SS)**
- La tarea sucesora no puede iniciar hasta que inicie la predecesora
- Común cuando dos actividades se hacen en paralelo con desfase
- Ejemplo: Instalación eléctrica puede iniciar cuando instalación mecánica inicia (mismo corredor)
- Representación: Task A ⇉ Task B

**3. Finish-to-Finish (FF)**
- La tarea sucesora no puede terminar hasta que termine la predecesora
- Menos común, usada para coordinación de finalización
- Ejemplo: Pruebas de commissioning no pueden terminar hasta que termine punch list
- Representación: Task A ⇶ Task B

**4. Start-to-Finish (SF) - Muy rara (< 1%)**
- La tarea sucesora no puede terminar hasta que inicie la predecesora
- Casi nunca se usa en construcción
- Ejemplo: Operación de planta vieja no termina hasta que inicie operación de planta nueva

**Lag y Lead:**
- **Lag (+)**: Tiempo de espera adicional después de la dependencia (ej: FS + 7 days para curado de concreto)
- **Lead (-)**: Solapamiento permitido (ej: FS - 2 days para iniciar ligeramente antes)

### Critical Path (Ruta Crítica)

**Definición**: Secuencia de tareas que determina la duración mínima del proyecto. Cualquier retraso en una tarea crítica retrasa el proyecto completo.

**Características:**
- Tasks con **Total Float = 0 días** (sin holgura)
- Usualmente representa 15-25% del total de tareas
- Cambia dinámicamente si se actualiza el cronograma

**Visualización en TimeLiner:**
- Barras rojas en el timeline
- Dependencias marcadas con líneas gruesas
- Resaltar en el modelo 3D con color distintivo (rojo/naranja)

**Caso Real**: En un proyecto de data center de $120M USD, el critical path pasaba por excavación → fundaciones → instalación eléctrica primaria → equipos de refrigeración → commissioning. Lluvia atrasó la excavación 2 semanas, retrasando todo el proyecto. La simulación 4D mostró visualmente el impacto en cascada, facilitando la comunicación con el cliente sobre la extensión de tiempo necesaria.

---

## 4. Linking Model Objects a Tasks (15 minutos)

Vincular elementos del modelo 3D a tasks del cronograma es el paso fundamental para crear la simulación 4D. TimeLiner ofrece múltiples métodos según el tamaño del proyecto y la complejidad.

### Método 1: Manual Attachment (Vinculación Manual)

**Cuándo usarlo:**
- Proyectos pequeños (< 100 tasks)
- Elementos únicos o especiales
- Correcciones rápidas de attachments incorrectos

**Procedimiento:**
1. Seleccionar la task en TimeLiner
2. En el modelo 3D, hacer Ctrl+Click en los elementos deseados
3. Click derecho en la task > Attach Current Selection
4. Los elementos se agregan a la task, columna "Attached" muestra la cantidad

**Ventajas:**
- Control total sobre qué se vincula
- Rápido para pocas tasks

**Desventajas:**
- No escala para proyectos grandes
- Propenso a errores humanos (olvidar elementos)
- Difícil de actualizar si cambia el modelo

### Método 2: Auto-Attach by Search Sets (Recomendado)

**Cuándo usarlo:**
- Proyectos medianos y grandes (100+ tasks)
- Cuando los nombres de tasks siguen convención lógica
- Modelos con propiedades BIM bien organizadas

**Procedimiento:**

**Paso 1: Crear Search Set**
1. Abrir Find Items (Ctrl+F)
2. Definir criterio de búsqueda
   - Ejemplo: Category = Structural Columns AND Level = Level 2
3. Ejecutar búsqueda y verificar resultados
4. Save Search (guardar con nombre descriptivo: "STR_Columns_L2")

**Paso 2: Vincular Search Set a Task**
1. Seleccionar la task en TimeLiner (ej: "Install Structural Columns Level 2")
2. Click derecho > Attach Current Search
3. Elegir el search set "STR_Columns_L2"
4. Todos los elementos que cumplan el criterio se vinculan automáticamente

**Ventajas:**
- Escala a miles de tasks
- Se actualiza automáticamente si se agregan elementos al modelo que cumplen el criterio
- Consistente y repetible
- Auditable (se puede revisar qué criterio se usó)

**Best Practice - Naming Convention para Search Sets:**
```
[Disciplina]_[Sistema]_[Nivel/Zona]
Ejemplos:
- ARCH_ExtWalls_L1-L3
- STR_Slabs_Basement
- MECH_Ducts_Zone_A
- ELEC_Panels_Level_5-8
- PLUMB_DomWater_Risers_A-D
```

### Método 3: Auto-Attach by Selection Sets

**Diferencia con Search Sets:**
- **Search Sets**: Criterio dinámico (se actualiza con cambios del modelo)
- **Selection Sets**: Selección estática (captura específica de elementos)

**Cuándo usarlo:**
- Elementos que no tienen propiedades consistentes para search
- Grupos específicos que requieren selección manual
- Combinación compleja de criterios

**Procedimiento:**
1. Seleccionar elementos en el modelo 3D manualmente o con Find Items
2. Guardar como Selection Set (Edit > Save Selection Set)
3. En TimeLiner, click derecho en task > Attach > Attach Selection Set
4. Elegir el selection set guardado

### Método 4: Attach from External Database

**Para proyectos enterprise:**
- Importar vinculaciones desde Excel/CSV con columnas:
  - Task ID
  - Element GUID
  - Attachment Rule
- Útil cuando se usa software de terceros (Synchro, VICO) para preparar data

### Verificación de Attachments

**Después de vincular, siempre verificar:**

**1. Columna "Attached" en Tasks Panel**
- Muestra cantidad de elementos vinculados
- 0 = No hay attachments (task no se verá en simulación)
- Click en número para highlight en el modelo

**2. Highlight en el Modelo**
- Seleccionar task en TimeLiner
- Elementos attachados se resaltan en el scene view
- Verificar visualmente que son los correctos

**3. Conflicts/Overlaps**
- Un elemento puede estar attachado a múltiples tasks
- Ejemplo válido: Un muro en task "Install Walls" Y task "Paint Walls"
- Ejemplo inválido: Un muro en "Install Walls Level 2" Y "Install Walls Level 3"
- TimeLiner > Tools > Check for Duplicate Attachments

**4. Missing Attachments Report**
- Tasks sin attachments no aparecerán en la simulación
- TimeLiner > Reports > Tasks Without Attachments
- Revisar y corregir antes de proceder

### Attachment Rules Avanzadas

**By Layer (para modelos CAD):**
- Vincular todos los elementos de un layer específico
- Útil para DWG/DXF imports

**By Property Match:**
- Vincular elementos donde propiedad X = valor Y
- Ejemplo: Vincular todos los elementos con "Construction Phase" = "Phase 2A"

**By Distance:**
- Vincular elementos dentro de cierto radio de un punto
- Útil para site work y excavaciones por zonas

---

## 5. Appearance Settings (10 minutos)

Los appearance profiles controlan cómo se visualizan los elementos del modelo en diferentes estados temporales de la simulación. Esta es la esencia visual de la simulación 4D.

### Estados Temporales de un Elemento

Cada elemento pasa por diferentes estados a lo largo de la simulación:

**1. Before Construction (Antes de Construirse)**
- Estado: Hidden (oculto)
- Lógica: No existe todavía, no debe verse

**2. During Construction (Durante Construcción)**
- Estado: Current Work (trabajo actual)
- Lógica: Es la actividad en progreso, debe resaltarse
- Apariencia típica: Color brillante, semi-transparente, con outline

**3. After Construction (Construido)**
- Estado: Constructed (construido)
- Lógica: Ya está terminado, forma parte del modelo completo
- Apariencia típica: Color/textura final, opaco

**4. Future Work (Trabajo Futuro)**
- Estado: Future (futuro)
- Lógica: Está en el cronograma pero no ha iniciado
- Apariencia típica: Gris tenue, muy transparente (ghosted)

**5. Demolished (Demolido)**
- Estado: Hidden (oculto)
- Lógica: Ya no existe, fue removido

### Configuración de Appearance Profiles

**Acceso:**
TimeLiner > Settings > Appearance

**Profiles por defecto en Navisworks:**

**Profile 1: Construction (Más común)**
- Before: Hidden
- Current Work: Red override, 50% transparency, thick edges
- Constructed: Original color/texture
- Future: Gray, 80% transparency

**Profile 2: Demolition**
- Before: Original color (elemento existente visible)
- Current Work: Red override, 50% transparency (resaltar demolición en progreso)
- Demolished: Hidden (desaparece del modelo)
- Future: Yellow, 70% transparency

**Profile 3: Temporary Works**
- Install: Hidden → Current Work → Temporary appearance (amarillo)
- In Place: Yellow override, 60% transparency (visible como temporal)
- Remove: Current Work → Hidden

### Personalizar Appearance Rules

**Caso Real - High-Rise Building:**

**Objetivo**: Simular construcción de estructura de 40 pisos con diferentes apariencias para estructura, MEP y arquitectura.

**Configuración personalizada:**

**Structural Elements:**
- Before: Hidden
- Current: Blue, 40% transparency, thick edges
- Constructed: Original material (concrete gray, steel metallic)
- Future: Light blue, 85% transparency

**MEP Systems:**
- Before: Hidden
- Current: Orange, 50% transparency
- Constructed: Original color por disciplina (red=fire, blue=water, yellow=electric)
- Future: Gray, 90% transparency

**Architectural Finishes:**
- Before: Hidden
- Current: Green, 30% transparency
- Constructed: Original texture (renders realistas)
- Future: White, 95% transparency (casi invisible)

**Procedimiento para crear profile personalizado:**
1. TimeLiner > Settings > Appearance Profiler
2. Click en "Add Profile"
3. Nombrar profile (ej: "HighRise_Structural")
4. Configurar cada estado temporal:
   - Before Start Date: Hidden (checkbox)
   - During Task: Override Color > Blue, Transparency 40%
   - After End Date: Use Original Appearance

5. Aplicar profile a tasks específicas:
   - Seleccionar tasks estructurales en TimeLiner
   - Click derecho > Appearance Profile > HighRise_Structural

### Appearance Overrides Avanzados

**Override Options:**
- **Color**: Solid color override
- **Texture**: Mantener texturas pero cambiar tint
- **Transparency**: 0% (opaco) a 100% (invisible)
- **Edges**: Mostrar edges con grosor ajustable
- **Lighting**: Iluminación diferente para highlight
- **Display Style**: Shaded, wireframe, hidden line

**Caso de Uso - Safety Zones:**
Crear appearance para visualizar zonas de seguridad alrededor de trabajo actual:
- Durante crane operations: Radio de 10m en rojo, 80% transparente
- Durante excavation: Área de riesgo en amarillo con patrón diagonal

**Configuración:**
1. Crear Selection Set "SafetyZone_Crane"
2. Vincular a task "Crane_Operation_Phase2"
3. Appearance profile: Red, 80% transparency, striped pattern
4. Task type: Temporary (desaparece después de la operación)

---

## 6. Simulation Playback Básico (10 minutos)

Una vez vinculados los elementos y configuradas las apariencias, es momento de reproducir la simulación 4D.

### Controles de Reproducción

**Play/Pause/Stop:**
- **Play**: Inicia simulación automática avanzando según el intervalo configurado
- **Pause**: Congela en el frame actual (permite inspeccionar detalles)
- **Stop**: Regresa al inicio del proyecto (primera fecha del cronograma)

**Step Forward/Backward:**
- **Step Forward** (tecla →): Avanza un intervalo (1 día, 1 semana, etc.)
- **Step Backward** (tecla ←): Retrocede un intervalo
- Útil para análisis detallado frame por frame

**Slider de Tiempo:**
- Arrastrar manualmente para ir a cualquier fecha
- Click en fecha específica en el timeline
- Útil para comparar dos momentos del proyecto

### Configuración de Intervalo y Velocidad

**Interval (Intervalo de Frame):**
Define el salto temporal entre cada frame de la simulación.

**Opciones típicas:**
- **1 hour**: Proyectos muy cortos (shutdowns de 24-48 horas)
- **1 day**: Proyectos de varias semanas/meses (más común)
- **1 week**: Proyectos largos (años), nivel de detalle macro
- **1 month**: Programas multi-año (infraestructura, megaproyectos)

**Cálculo del total de frames:**
Total Frames = (End Date - Start Date) / Interval

**Ejemplo:**
- Proyecto: 12 meses (365 días)
- Interval: 1 day
- Total frames: 365 frames

**Recomendación**: Usar 1 day para la mayoría de proyectos de edificación. Es el balance óptimo entre detalle y rendimiento.

**Speed (Velocidad de Reproducción):**
Controla qué tan rápido se reproduce la simulación en pantalla.

**Opciones:**
- **0.1x - 0.5x**: Velocidad lenta, para inspección detallada
- **1x**: Velocidad normal (1 frame por segundo)
- **2x - 5x**: Velocidad rápida, para overview del proyecto
- **10x**: Velocidad máxima, para proyectos muy largos

**Caso de Uso:**
- Reunión con cliente: 2x speed, interval 1 week (para 12 meses en 30 segundos)
- Constructability review: 0.5x speed, interval 1 day (para análisis detallado)

### Timeline Controls Avanzados

**Zoom Temporal:**
- **Zoom In**: Ver más detalle (horas/días)
- **Zoom Out**: Ver panorama completo (meses/años)
- **Zoom to Selection**: Zoom a la duración de la task seleccionada
- Keyboard: Ctrl + rueda del mouse para zoom dinámico

**Pan Temporal:**
- Arrastrar timeline horizontalmente para navegar por el cronograma
- Útil cuando se hace zoom y no cabe todo en pantalla

**Markers y Milestones:**
- Milestones aparecen como diamantes en el timeline
- Auto-pause en milestones: Settings > Pause at Milestones
- Útil para presentaciones (pausar en fechas clave para explicar)

**Loop Mode (Reproducción en Bucle):**
- Activar: Settings > Loop Simulation
- La simulación se repite automáticamente al llegar al final
- Útil para displays en oficina o ferias de construcción

### Sincronización con Viewpoints

**Problema**: Ver la simulación siempre desde el mismo ángulo es limitante.

**Solución**: Asociar saved viewpoints a momentos específicos del cronograma.

**Configuración:**
1. Crear saved viewpoint en el momento clave (ej: "Week 12 - Foundation Complete")
2. En TimeLiner, agregar Animation a la task correspondiente
3. TimeLiner > Add Animation > Camera Movement
4. Configurar: Fecha de inicio → Viewpoint destino → Duración de transición

**Resultado**: La cámara se mueve automáticamente a vistas estratégicas durante la simulación.

**Ejemplo - 40-Story Building:**
- Frames 1-50 (Foundation): Vista de planta baja, ángulo bajo
- Frames 51-300 (Superstructure): Vista isométrica alejada, sube con el edificio
- Frames 301-400 (MEP & Finishes): Sección cortada mostrando interiores
- Frames 401-450 (Site Restoration): Vista aérea del sitio completo

### Export Snapshot (Captura de Pantalla)

Durante la simulación, es útil exportar imágenes de momentos clave para documentación o presentaciones.

**Procedimiento:**
1. Pausar simulación en el frame deseado
2. Home > Output > Export Current View
3. Configurar:
   - Resolución: 1920x1080 (Full HD) o 3840x2160 (4K)
   - Format: PNG (transparencia), JPEG (menor tamaño), TIFF (máxima calidad)
   - Anti-aliasing: High (suaviza bordes)
4. Guardar con nombre descriptivo: "Project_Week_12_Foundation_Complete.png"

**Batch Export:**
- TimeLiner > Export > Batch Export Images
- Define intervalo (ej: cada 7 días)
- Genera automáticamente 50+ imágenes secuenciales
- Útil para crear timelapse en software de video (Premiere, After Effects)

---

## 7. Caso Práctico Guiado (5 minutos)

### Proyecto: Warehouse Expansion - 4D Simulation Básica

**Escenario:**
Expansión de bodega industrial de 5,000 m². Cronograma de 4 meses. Importaremos un modelo federado simple y crearemos una simulación 4D básica manualmente.

**Archivos necesarios:**
- `Warehouse_ARCH.rvt` (modelo arquitectónico)
- `Warehouse_STR.rvt` (modelo estructural)
- `Warehouse_Schedule.xlsx` (cronograma simplificado)

**Cronograma (Simplificado):**
1. Site Preparation (Semana 1-2)
2. Foundations (Semana 3-5)
3. Structural Steel (Semana 6-9)
4. Roof & Walls (Semana 10-13)
5. MEP Rough-In (Semana 11-14)
6. Architectural Finishes (Semana 14-16)

**Paso 1: Importar Modelos**
1. Abrir Navisworks Manage 2026
2. File > Append > Warehouse_ARCH.rvt
3. File > Append > Warehouse_STR.rvt
4. Verificar que ambos modelos están alineados

**Paso 2: Crear Task Hierarchy en TimeLiner**
1. Abrir TimeLiner (F5)
2. Click en "Add Task" (icono +)
3. Crear tarea root: "Warehouse Expansion Project"
4. Click derecho en root > Add Child Task
5. Agregar 6 child tasks (Site Prep, Foundations, etc.)
6. Configurar fechas:
   - Start Date: 01-Jan-2026
   - Site Prep: 1-2 weeks
   - Foundations: 3-5 weeks
   - Etc. (cada task con Start/End dates)

**Paso 3: Vincular Elementos a Tasks (Manual para este ejercicio)**
1. Seleccionar task "Foundations" en TimeLiner
2. En el modelo, usar Find Items (Ctrl+F):
   - Category = Structural Foundations
3. Seleccionar resultados (Ctrl+A en Find Items)
4. Click derecho en task "Foundations" > Attach Current Selection
5. Verificar columna "Attached" muestra cantidad de elementos

**Repetir para cada fase:**
- Structural Steel: Category = Structural Framing
- Roof & Walls: Category = Roofs, Walls (filtrar por type)
- MEP: Category = Mechanical Equipment, Ducts, Pipes

**Paso 4: Configurar Appearance Profile**
1. TimeLiner > Settings > Appearance
2. Usar profile "Construction" por defecto:
   - Before: Hidden
   - Current: Red, 50% transparency
   - Constructed: Original appearance
3. Aplicar a todas las tasks

**Paso 5: Reproducir Simulación**
1. Configurar:
   - Interval: 1 day
   - Speed: 2x
2. Click en Play
3. Observar cómo el modelo "se construye" progresivamente:
   - Semana 1-2: Nada visible (site prep sin modelo)
   - Semana 3-5: Fundaciones aparecen en rojo, luego se vuelven grises
   - Semana 6-9: Estructura metálica se levanta progresivamente
   - Semana 10-13: Techo y muros encierran el edificio
   - Semana 11-14: Sistemas MEP aparecen dentro (solapados con walls)
   - Semana 14-16: Finishes completan el proyecto

**Paso 6: Ajustar Vista y Exportar**
1. Pausar simulación en Week 9 (estructura completa, antes de enclosure)
2. Orbitar modelo para vista isométrica atractiva
3. Export Current View:
   - Resolution: 1920x1080
   - Format: PNG
   - Filename: "Warehouse_Week9_Structure_Complete.png"

**Resultado esperado:**
- Simulación funcional de 16 semanas
- Visualización clara de secuencia constructiva
- Identificación de solapamiento MEP/Walls (normal y esperado)

---

## Resumen de la Lección

**Conceptos Clave Cubiertos:**

1. **Fundamentos 4D**: Entendiste qué es simulación 4D, sus beneficios (constructability, communication, optimization) y casos de uso reales en la industria.

2. **Interfaz TimeLiner**: Dominas los componentes principales (Tasks Panel, Timeline, Playback Controls) y puedes configurar workspace óptimo.

3. **Scheduling Concepts**: Comprendes WBS, task types (construct, demolish, temporary), dependencies (FS, SS, FF) y critical path.

4. **Linking Methods**: Conoces 4 métodos de vinculación (manual, search sets, selection sets, external database) y sabes cuándo usar cada uno.

5. **Appearance Profiles**: Configuraste apariencias temporales (before, current, constructed, future) para visualización efectiva.

6. **Playback Controls**: Reprodujiste simulaciones con control de intervalo, velocidad, zoom temporal y exportación de snapshots.

**Habilidades Adquiridas:**
- Crear task hierarchy básica en TimeLiner
- Vincular manualmente elementos del modelo a tasks
- Configurar appearance profiles estándar
- Reproducir simulaciones 4D con controles básicos
- Exportar imágenes de momentos clave del cronograma

**Próximos Pasos:**
En la **Lección 14**, aprenderás a importar cronogramas completos desde Primavera P6 y MS Project, incluyendo dependencies, resources y critical path, eliminando la necesidad de crear tasks manualmente.

---

## Ejercicio Práctico 13

**Duración**: 40 minutos

**Objetivo**: Crear una simulación 4D básica de un proyecto de oficinas de 3 pisos, vinculando elementos manualmente y configurando apariencias.

**Archivos proporcionados:**
- `Office_Building_3Story.nwc` (modelo federado)
- `Schedule_Office_Simplified.xlsx` (cronograma de referencia)

**Instrucciones:**

**Parte 1: Configuración Inicial (10 min)**
1. Abrir `Office_Building_3Story.nwc` en Navisworks
2. Explorar el modelo: 3 pisos, estructura, arquitectura y MEP básico
3. Abrir TimeLiner (F5)
4. Crear task hierarchy siguiendo esta estructura:
   ```
   Office Building Project
   ├── Site & Foundations (Week 1-4)
   ├── Structure Level 1 (Week 5-6)
   ├── Structure Level 2 (Week 7-8)
   ├── Structure Level 3 (Week 9-10)
   ├── MEP Rough-In All Levels (Week 9-12)
   └── Finishes All Levels (Week 13-16)
   ```
5. Configurar Start Date: 01-Feb-2026
6. Asignar duraciones según parentesis

**Parte 2: Vincular Elementos (20 min)**

**Para cada fase, usar Find Items y vincular manualmente:**

**Foundations:**
- Find Items > Category = Structural Foundations
- Attach a task "Site & Foundations"

**Structure Level 1:**
- Find Items > Category = Structural Columns AND Level = Level 1
- Find Items > Category = Structural Framing AND Level = Level 1
- Find Items > Category = Floors AND Level = Level 1
- Attach todos a "Structure Level 1"

**Repetir para Level 2 y Level 3**

**MEP Rough-In:**
- Find Items > Category = Mechanical Equipment
- Find Items > Category = Ducts (major ducts only)
- Find Items > Category = Pipes (major pipes only)
- Attach a "MEP Rough-In All Levels"

**Finishes:**
- Find Items > Category = Walls AND Type = Interior
- Find Items > Category = Ceilings
- Find Items > Category = Doors
- Attach a "Finishes All Levels"

**Parte 3: Appearance Configuration (5 min)**
1. TimeLiner > Settings > Appearance
2. Crear profile "Office_Construction":
   - Before: Hidden
   - Current: Blue, 40% transparency, show edges
   - Constructed: Original appearance
   - Future: Gray, 85% transparency
3. Aplicar profile a todas las tasks de estructura
4. Para MEP, usar Orange en lugar de Blue (override diferente)

**Parte 4: Simulación y Export (5 min)**
1. Configurar Interval: 1 day, Speed: 3x
2. Reproducir simulación completa (16 semanas)
3. Identificar y documentar:
   - ¿En qué semana se completa la estructura?
   - ¿Hay solapamiento visible entre MEP y Finishes? (Esperado: Sí)
   - ¿Cuál es la fase más larga visualmente?
4. Pausar en Week 10 (estructura completa, MEP iniciando)
5. Ajustar vista a isométrica atractiva
6. Export imagen: "Office_Week10_Structure_MEP.png" (1920x1080)

**Entregables:**
1. Archivo NWF guardado: "Exercise_13_Office_4D.nwf"
2. Screenshot exportado: "Office_Week10_Structure_MEP.png"
3. Documento PDF (1 página) respondiendo:
   - ¿Cuántos elementos están attachados a cada task?
   - ¿Identificaste algún problema de secuencia? (Ej: MEP antes de estructura)
   - ¿Qué mejorarías en este cronograma simplificado?

**Criterios de Evaluación:**
- Task hierarchy correcta: 20%
- Attachments completos y correctos: 40%
- Appearance profile configurado: 20%
- Simulación reproduce correctamente: 10%
- Análisis escrito: 10%

---

## Recursos Adicionales

**Documentación Oficial:**
- Autodesk Knowledge Network: "TimeLiner User Guide 2026"
- Autodesk University: "4D Simulation Fundamentals" (video, 45 min)

**Tutoriales Recomendados:**
- "TimeLiner for Beginners" - BIM Track (YouTube, 30 min)
- "4D Simulation Best Practices" - AGC White Paper (PDF, 25 páginas)

**Software Complementario:**
- Primavera P6 (scheduling software, trial gratuito 30 días)
- MS Project (integración con TimeLiner, version 2019+)
- Excel (para cronogramas simples y import/export)

**Keyboard Shortcuts:**
- `F5`: Abrir/cerrar TimeLiner
- `Space`: Play/Pause simulation
- `→`: Step forward
- `←`: Step backward
- `Home`: Go to start of project
- `End`: Go to end of project
- `Ctrl+T`: Add new task
- `Del`: Delete selected task

**Common Issues y Soluciones:**

**Problema**: Elementos no aparecen durante la simulación
- **Causa**: No están attachados a ninguna task
- **Solución**: Verificar columna "Attached", usar Find Items para localizarlos y attach manualmente

**Problema**: Simulación muy lenta (< 1 FPS)
- **Causa**: Modelo muy pesado, demasiados elementos visibles simultáneamente
- **Solución**: Usar Section Box para limitar área visible, reducir detail level de objetos pequeños

**Problema**: Appearance no cambia durante simulación
- **Causa**: Simulation no está habilitada en Settings
- **Solución**: TimeLiner > Settings > Enable Simulation (checkbox)

**Problema**: Tasks no muestran dependencies en el timeline
- **Causa**: Dependencies no fueron importadas (creación manual no las crea)
- **Solución**: Se aprenderá en Lección 14 (import desde P6/MS Project)

---

**Próxima Lección**: Lección 14 - Importación de Schedules desde Primavera P6 y MS Project

En la siguiente lección eliminaremos la tediosa tarea de crear tasks manualmente. Aprenderás a importar cronogramas completos desde Primavera P6 y MS Project, incluyendo dependencies, resources, cost data y critical path, transformando un cronograma de 1,000+ tasks en una simulación 4D en minutos en lugar de días.
