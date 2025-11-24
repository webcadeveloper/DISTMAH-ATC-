# Lección 14: Importación de Schedules

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Importar cronogramas completos desde Primavera P6 en formatos XER y XML con mapping correcto de campos
- Importar cronogramas desde MS Project en formatos MPP y XML preservando dependencies y resources
- Importar cronogramas desde Excel/CSV con configuración personalizada de columnas
- Configurar schedule data mapping para tasks, dates, dependencies, resources y cost
- Visualizar y gestionar task relationships (FS, SS, FF, SF) con lags importados
- Identificar y highlighting del critical path importado desde software de scheduling
- Importar resource data incluyendo resource allocation, quantities y cost loading

**Duración**: 60 minutos

---

## 1. Fundamentos de Schedule Import (10 minutos)

### ¿Por Qué Importar en Lugar de Crear Manualmente?

**Realidad de Proyectos Grandes:**
- Proyectos típicos de construcción: **500-2,000 tasks**
- Proyectos complejos (hospitales, data centers): **3,000-10,000 tasks**
- Programas multi-proyecto: **50,000+ tasks**

**Tiempo para crear manualmente:**
- 1,000 tasks × 2 min/task = **33 horas de trabajo manual**
- Propenso a errores (typos, fechas incorrectas, dependencies faltantes)
- Difícil de actualizar cuando cambia el cronograma (lo cual sucede semanalmente)

**Tiempo con import automatizado:**
- 1,000 tasks importadas = **5-15 minutos**
- Zero errores de transcripción
- Actualización con nuevo cronograma = 2 minutos (re-import)

**Caso Real - Data Center Project:**
Cliente: Empresa Fortune 500 construyendo data center de $280M USD en Virginia.

**Cronograma original:**
- Software: Primavera P6
- Tasks: 4,200 actividades
- Duración: 18 meses
- Critical path: 180 actividades

**Sin import (escenario hipotético):**
- 4,200 tasks × 3 min = 210 horas (5 semanas de trabajo full-time)
- Costo: $15,000 USD (@ $70/hr para VDC coordinator)
- Errores estimados: 50-100 tasks con fechas o dependencies incorrectas

**Con import de P6:**
- Tiempo: 12 minutos (configurar mapping + import)
- Costo: $14 USD (0.2 hrs × $70/hr)
- Errores: 0 (data directa de P6, validada)
- ROI: 99.9% de ahorro

**Conclusión**: Import de cronogramas no es opcional para proyectos profesionales. Es el estándar de la industria.

### Software de Scheduling Soportado

**Tier 1 - Soporte Nativo Total:**
1. **Primavera P6** (Oracle)
   - Formatos: XER (XML Exchange), XML (Primavera XML)
   - Características importadas: Tasks, dependencies, resources, baselines, calendars, WBS
   - Uso: 70% de proyectos enterprise y infrastructure

2. **MS Project** (Microsoft)
   - Formatos: MPP (Project file), XML (Microsoft Project XML)
   - Características importadas: Tasks, dependencies, resources, baselines
   - Uso: 80% de proyectos de edificación commercial

3. **Asta Powerproject**
   - Formato: XML export
   - Uso: UK y mercados commonwealth (15% global)

**Tier 2 - Soporte vía Excel/CSV:**
4. **Synchro Pro** (Bentley)
5. **VICO Office**
6. **Phoenix Project Manager**
7. **Cualquier software con export a Excel/CSV**

**Tier 3 - Import Manual:**
- Software propietario sin export estándar
- Cronogramas en PDF o imágenes (requiere re-crear manualmente)

### Workflow de Import General

**Flujo estándar para cualquier software:**

```
1. Export desde scheduling software
   ↓ (P6 XER, MS Project MPP, Excel CSV)
2. Import a Navisworks TimeLiner
   ↓ (Configure field mapping)
3. Validación de import
   ↓ (Check task count, dependencies, dates)
4. Attachment de elementos del modelo
   ↓ (Auto-attach by search/selection sets)
5. Appearance configuration
   ↓ (Configure visual rules)
6. Simulación 4D
   ↓ (Playback, análisis, reporting)
7. Re-import cuando cronograma actualiza
   ↓ (Preserva attachments existentes)
```

**Frecuencia de Updates:**
- Pre-construction: Mensual (optimización de plan)
- Durante construcción: Semanal (actual progress tracking)
- Near completion: Diario (punch list y commissioning)

---

## 2. Import desde Primavera P6 (15 minutos)

Primavera P6 de Oracle es el software de scheduling enterprise más usado en proyectos grandes de construcción e infraestructura. Navisworks tiene integración robusta con P6 para import de cronogramas complejos.

### Export desde Primavera P6

**Paso 1: Abrir proyecto en P6**
1. Primavera P6 Professional o EPPM (Enterprise)
2. Navegar al proyecto deseado
3. Verificar que tiene:
   - Todas las tasks creadas
   - Dependencies configuradas
   - Dates calculated (F9 para recalcular)
   - Resources asignados (si deseas importar resource data)

**Paso 2: Export a XER (Recomendado)**

XER (XML Exchange) es el formato propietario de P6, más completo que XML estándar.

1. En P6: File > Export...
2. Dialog "Export Projects"
3. Seleccionar formato: **"Primavera P6 - (XER)"**
4. Seleccionar proyecto específico (o múltiples si es programa)
5. Opciones de export:
   - ☑ Export all data (incluye WBS, resources, baselines, calendars)
   - ☑ Export resource assignments
   - ☑ Export activity codes (importante para filtering en Navisworks)
   - ☑ Export user-defined fields (custom data)
6. Destination: Guardar como `Project_Schedule_2026-02-15.xer`
   - Tip: Incluir fecha en filename para version control
7. Click "Export"

**Paso 3: Verificar Export (QC)**
1. Abrir archivo XER en notepad (es texto plano XML)
2. Verificar que contiene data:
   - `<Project>...</Project>`
   - `<Activity>...</Activity>` (repetido por cada task)
   - `<Relationship>...</Relationship>` (dependencies)
3. Verificar tamaño: Archivo > 100KB para proyectos típicos

**Alternativa: Export a XML**

Si no tienes acceso a XER (versión limitada de P6), puedes exportar a XML estándar:
1. File > Export > Project XML...
2. Menos data que XER, pero suficiente para simulación 4D básica
3. Formato estándar, compatible con otros software

### Import a Navisworks TimeLiner

**Paso 1: Preparar Navisworks**
1. Abrir modelo federado del proyecto (NWF o NWC)
2. Abrir TimeLiner (F5)
3. Verificar que TimeLiner está vacío o respaldar tasks existentes

**Paso 2: Iniciar Import**
1. TimeLiner > Data Sources tab
2. Click "Add..." button
3. Dialog "Add Data Source"
4. Type: **Primavera P6 (XER/XML)**
5. Click "Browse..." y seleccionar archivo `Project_Schedule_2026-02-15.xer`
6. Click "OK"

**Paso 3: Configure Field Mapping**

Navisworks muestra dialog "Configure Primavera Import":

**Section 1: Project Selection**
- Si el XER contiene múltiples proyectos, seleccionar el específico
- Usualmente solo hay 1 proyecto en el export

**Section 2: Data Mapping**

| P6 Field | Navisworks TimeLiner Field | Notes |
|----------|---------------------------|-------|
| Activity ID | Task ID | Código único (ej: A1020) |
| Activity Name | Task Name | Descripción (ej: "Install Structural Steel Level 3") |
| Start Date | Start Date | Fecha de inicio calculada |
| Finish Date | End Date | Fecha de fin calculada |
| Duration | Duration | Duración en días |
| Activity Type | Task Type | Convert: Task→Construct, Resource Dependent→Construct |
| Activity Status | Status | Not Started, In Progress, Complete |
| Total Float | Total Float | Holgura disponible |
| WBS | Task Hierarchy | Estructura jerárquica del WBS |

**Section 3: Dependency Mapping**
- ☑ Import Relationships (dependencies)
- Mapear Primavera relationship types a Navisworks:
  - PR (Finish-to-Start) → FS
  - SS (Start-to-Start) → SS
  - FF (Finish-to-Finish) → FF
  - SF (Start-to-Finish) → SF
- ☑ Import Lag Values (para FS+7d, etc.)

**Section 4: Resource Mapping**
- ☑ Import Resource Assignments
- Map P6 "Resource Name" → Navisworks "Resource"
- Map P6 "Resource Units" → Navisworks "Quantity"
- ☑ Import Resource Costs

**Section 5: Baseline y Calendar**
- Import Baseline: Seleccionar baseline específico (ej: "Baseline 1 - Bid Schedule")
- Import Calendar: Seleccionar project calendar (work days, holidays)
- Navisworks usará calendar para calcular work days correctamente

**Section 6: Activity Codes (Filtros Avanzados)**
P6 Activity Codes permiten filtering avanzado (por disciplina, área, responsibility).

Ejemplo de Activity Codes en P6:
- Discipline: [ARCH, STR, MECH, ELEC, PLUMB]
- Area: [Zone A, Zone B, Zone C]
- Contractor: [GC, Steel Sub, MEP Sub]

- ☑ Import Activity Codes
- Estos codes se importan como custom properties en Navisworks
- Útiles para search sets: "Show me all MECH tasks in Zone A"

**Paso 4: Execute Import**
1. Revisar configuración (tomar screenshot para documentación)
2. Click "OK" para iniciar import
3. Progress bar muestra avance
4. Dialog de confirmación: "Successfully imported 1,247 tasks"

**Paso 5: Validación Post-Import**

**Verificación básica:**
1. Task count: ¿Coincide con P6?
   - P6: Tools > Project Statistics > Activity Count
   - Navisworks TimeLiner: Contar tasks en panel
2. Date range: ¿Start y End dates son correctos?
   - First task: Fecha de mobilización esperada?
   - Last task: Fecha de completion esperada?
3. Dependencies visible: ¿Hay líneas conectando tasks en timeline?
4. WBS hierarchy: ¿Se respeta la estructura jerárquica?

**Verificación avanzada:**
1. Seleccionar task aleatoria en TimeLiner
2. Ver propiedades (click derecho > Properties)
3. Verificar:
   - Task ID coincide con Activity ID en P6
   - Start/End dates coinciden con P6
   - Predecessors/Successors listados correctamente
   - Duration en días es correcta
4. Abrir P6 en paralelo y comparar 3-5 tasks aleatoriamente

**Common Issues:**

**Problema**: Import muestra 0 tasks
- **Causa**: Archivo XER corrupto o versión incompatible
- **Solución**: Re-export desde P6, verificar versión (P6 v20+ recomendado)

**Problema**: Dependencies no se importaron
- **Causa**: Opción "Import Relationships" no activada en mapping
- **Solución**: Re-import con checkbox activado

**Problema**: Fechas incorrectas (offset por días)
- **Causa**: Calendar mismatch (P6 usa 8hrs/day, Navisworks 24hrs/day)
- **Solución**: Verificar configuración de calendar en mapping

**Problema**: Tasks sin WBS hierarchy (todas al mismo nivel)
- **Causa**: WBS no exportado correctamente desde P6
- **Solución**: En P6, verificar que project tiene WBS definido (no solo flat list)

### Actualización de Cronograma (Re-Import)

**Escenario**: Después de 2 semanas de construcción, el cronograma P6 se actualiza con progress real. Necesitas re-importar para reflejar cambios.

**Procedimiento:**
1. Export nuevo XER desde P6: `Project_Schedule_2026-03-01.xer`
2. Navisworks TimeLiner > Data Sources tab
3. Seleccionar data source existente (el import anterior)
4. Click "Refresh" o "Update"
5. Dialog: "Update existing tasks or replace?"
   - **Update**: Preserva attachments existentes, solo actualiza dates/dependencies (recomendado)
   - **Replace**: Borra todo y re-importa desde cero (solo si hubo cambios mayores en WBS)
6. Click "Update"
7. Progress bar
8. Validar: Verificar que tasks con progress ahora muestran % complete

**Resultado**:
- Dates actualizadas (retrasos/adelantos reflejados)
- Attachments preservados (no necesitas re-attach elementos)
- Critical path actualizado (puede haber cambiado)
- Simulación 4D ahora refleja cronograma real

**Best Practice**: Guardar XER files con version control:
```
Project_Schedule_2026-01-15_Baseline.xer
Project_Schedule_2026-02-01_Update_1.xer
Project_Schedule_2026-02-15_Update_2.xer
Project_Schedule_2026-03-01_Update_3.xer
```
Esto permite volver atrás si es necesario.

---

## 3. Import desde MS Project (12 minutos)

Microsoft Project es el software de scheduling más común en proyectos commercial de edificación, especialmente en Norteamérica. Navisworks tiene soporte nativo para formatos MPP y XML de MS Project.

### Export desde MS Project

**Paso 1: Preparar cronograma en MS Project**
1. Abrir archivo .mpp del proyecto
2. Verificar que schedule está calculado:
   - Project > Calculate Project (F9)
3. Verificar que contiene:
   - Task names descriptivos
   - Start/Finish dates
   - Dependencies (Predecessors column populated)
   - Resources asignados (opcional)
   - Baseline guardado (Project > Set Baseline)

**Paso 2: Export a MPP (Directo - Recomendado)**

Para versiones recientes de MS Project (2016+), Navisworks puede abrir archivos MPP directamente:

1. Simplemente guardar archivo MS Project: File > Save As > `Project_Schedule.mpp`
2. No requiere export adicional
3. Navisworks leerá el archivo MPP nativo

**Ventajas:**
- Más simple, no requiere pasos de export
- Todas las features de MS Project preservadas
- Un solo archivo (no necesitas mantener XML + MPP)

**Desventajas:**
- Requiere MS Project instalado en la misma máquina que Navisworks (para drivers)
- Versiones viejas de MS Project (2010 o anterior) pueden tener problemas de compatibilidad

**Paso 3: Export a XML (Alternativa - Más Portable)**

Si necesitas compartir con usuarios sin MS Project instalado, exporta a XML estándar:

1. MS Project: File > Save As
2. Save as type: **XML Format (*.xml)**
3. Filename: `Project_Schedule.xml`
4. Click "Save"
5. Dialog "Mapping": Seleccionar "Default task mapping" (incluye tasks, dependencies, resources)
6. Click "OK"

**Verificación del XML:**
- Abrir XML en browser (Chrome, Firefox) para ver estructura
- Verificar que tags `<Task>...</Task>` existen
- Tamaño: > 50KB para proyectos típicos

### Import a Navisworks TimeLiner

**Método 1: Import MPP Directo**

1. Navisworks TimeLiner > Data Sources tab
2. Click "Add..."
3. Type: **Microsoft Project (MPP)**
4. Browse: Seleccionar `Project_Schedule.mpp`
5. Click "OK"

**Dialog "Configure MS Project Import":**

**Section 1: Data Mapping**

| MS Project Field | Navisworks Field | Notes |
|------------------|------------------|-------|
| ID | Task ID | Número único (1, 2, 3...) |
| Name | Task Name | Descripción de la actividad |
| Start | Start Date | Fecha inicio |
| Finish | End Date | Fecha fin |
| Duration | Duration | En días |
| % Complete | Progress | Porcentaje completado (0-100%) |
| Work | Total Work | Horas-hombre totales |
| Cost | Cost | Costo planificado |
| WBS | Task Hierarchy | Outline number (1.1.1, 1.1.2, etc.) |

**Section 2: Outline Levels (WBS Hierarchy)**

MS Project usa "Outline Levels" para jerarquía:
- Level 0: Task name (proyecto completo, usualmente)
- Level 1: Summary tasks (fases principales)
- Level 2-3: Sub-tasks
- Level 4+: Actividades detalladas

- ☑ Import Outline Structure
- ☑ Import Summary Tasks (para mantener WBS completo)
  - Desactivar si solo quieres work tasks (sin summaries)

**Section 3: Dependencies**
- ☑ Import Predecessors
- Mapear MS Project link types:
  - FS (Finish-to-Start) → FS
  - SS (Start-to-Start) → SS
  - FF (Finish-to-Finish) → FF
  - SF (Start-to-Finish) → SF
- ☑ Import Lead/Lag values (ej: -2d para lead, +5d para lag)

**Section 4: Resources y Cost**
- ☑ Import Resource Names
- ☑ Import Resource Work (hours per resource per task)
- ☑ Import Cost Data ($ amounts)
- Si MS Project tiene cost loaded, aparecerá en TimeLiner reports

**Section 5: Baseline**
- Seleccionar baseline: "Baseline" (default), "Baseline 1", "Baseline 2", etc.
- MS Project permite hasta 11 baselines
- Importar baseline permite comparación planned vs actual

**Section 6: Filters**
- Filtrar tasks antes de import:
  - Example: Solo tasks con Duration > 0 (excluir milestones)
  - Example: Solo tasks de cierta disciplina (si hay custom fields)
- Usualmente dejar "Import All Tasks" (default)

**Paso 2: Execute Import**
1. Revisar mapping configurado
2. Click "OK"
3. Progress bar (puede tardar 1-2 min para cronogramas de 2,000+ tasks)
4. Confirmation: "Successfully imported 892 tasks"

**Método 2: Import XML**

Similar al MPP, pero seleccionar:
- Type: **Microsoft Project XML (*.xml)**
- Browse: `Project_Schedule.xml`

Mapping dialog es idéntico.

**Ventaja de XML**: Portabilidad (funciona sin MS Project instalado)

### Validación Post-Import

**Verificación Visual:**
1. TimeLiner Tasks Panel: Verificar que WBS hierarchy se importó correctamente
   - Tasks con "+" expand para mostrar sub-tasks
   - Indentación muestra niveles jerárquicos
2. Timeline view: Verificar que barras de tasks aparecen con duraciones correctas
3. Dependencies: Líneas conectando tasks en timeline

**Verificación Numérica:**
1. Task count: Contar en MS Project (sin summary tasks) vs Navisworks
   - MS Project: Ver status bar "Tasks: 892 / 1024" (892 work tasks, 132 summaries)
   - Navisworks: Si importaste summaries, deberías ver ~1,024. Si no, ~892.
2. Date range: First task start date y last task finish date deben coincidir
3. Duration total: Project duration (MS Project: Project > Project Information > Duration)

**Verificación de Detalles:**
1. Seleccionar random task en Navisworks TimeLiner
2. Ver Properties panel
3. Comparar con MS Project (abrir misma task):
   - Name: ¿Coincide?
   - Start/Finish: ¿Mismo día?
   - Duration: ¿Misma cantidad de días?
   - Predecessors: ¿Lista de IDs coincide?

**Common Issues:**

**Problema**: Summary tasks importados como work tasks (tienen duration)
- **Causa**: MS Project summary tasks calculan duration automáticamente
- **Solución**: En Navisworks, convertir summaries a "folder" type (no afectan simulación)

**Problema**: Resources no se importaron
- **Causa**: MS Project file no tiene resource assignments
- **Solución**: En MS Project, verificar que columna "Resource Names" está populated. Re-export y re-import.

**Problema**: Fechas con offset (ej: 1 día de diferencia)
- **Causa**: MS Project usa "Start of day" (8:00 AM), Navisworks usa midnight (12:00 AM)
- **Solución**: Configurable en Import Settings > Time of Day > usar "Start of work day"

**Problema**: Critical path no se muestra
- **Causa**: Critical path no se calcula automáticamente en import
- **Solución**: TimeLiner > Tools > Calculate Critical Path (Navisworks recalcula basado en dependencies)

### Actualización desde MS Project (Re-Import)

**Escenario**: Schedule actualizado semanalmente con % complete real.

**Workflow:**
1. MS Project: Actualizar % complete de tasks
2. Actualizar dependencies si hubo cambios (re-sequence)
3. Calculate Project (F9) para recalcular dates
4. Save As (sobrescribir `Project_Schedule.mpp` o crear nueva versión)
5. Navisworks: TimeLiner > Data Sources > Seleccionar source > Refresh
6. Dialog: "Update existing tasks?"
   - **Yes**: Preserva attachments, actualiza dates/progress
   - **No**: Full re-import (más lento, úsalo si WBS cambió radicalmente)
7. Click "Update"

**Resultado**:
- Tasks con % complete ahora muestran partial completion en simulación
- Dates ajustadas por delays o accelerations
- Attachments preservados (no re-work)

---

## 4. Import desde Excel/CSV (10 minutos)

Para software de scheduling sin soporte directo en Navisworks, o para cronogramas simples creados en Excel, el import CSV/Excel es la solución universal.

### Preparar Excel/CSV para Import

**Estructura de columnas mínimas requeridas:**

| Column | Description | Example |
|--------|-------------|---------|
| Task ID | Unique identifier | A1010, A1020, B2050 |
| Task Name | Descriptive name | "Install Structural Steel - Level 3" |
| Start Date | Start date (format: MM/DD/YYYY or DD/MM/YYYY) | 02/15/2026 |
| End Date | Finish date | 02/28/2026 |
| Duration | Duration in days | 14 |

**Columnas opcionales (recomendadas):**

| Column | Description | Example |
|--------|-------------|---------|
| WBS | Hierarchical code | 1.2.3 |
| Type | Task type | Construct, Demolish, Temporary |
| Predecessors | Dependency list (comma-separated) | A1005, A1008 |
| Successors | Dependent tasks | A1025, A1030 |
| Resources | Resource names | Steel Crew, Crane 1 |
| Cost | Task cost | $45,000 |
| % Complete | Progress percentage | 75 |

**Ejemplo de Excel bien estructurado:**

```
| Task ID | Task Name                      | Start Date | End Date   | Duration | WBS   | Predecessors | Type      |
|---------|--------------------------------|------------|------------|----------|-------|--------------|-----------|
| A1000   | Site Mobilization              | 01/05/2026 | 01/12/2026 | 7        | 1.1   |              | Construct |
| A1010   | Excavation - Building Footprint| 01/13/2026 | 01/26/2026 | 14       | 1.2   | A1000        | Construct |
| A1020   | Install Rebar - Foundations    | 01/27/2026 | 02/09/2026 | 14       | 1.3   | A1010        | Construct |
| A1030   | Pour Concrete - Foundations    | 02/10/2026 | 02/16/2026 | 7        | 1.4   | A1020        | Construct |
| A1040   | Cure Concrete                  | 02/17/2026 | 02/23/2026 | 7        | 1.5   | A1030        | Construct |
| B2000   | Erect Structural Steel - L1    | 02/24/2026 | 03/09/2026 | 14       | 2.1   | A1040        | Construct |
...
```

**Best Practices para Excel:**
1. **Primera fila = Headers**: Task ID, Task Name, etc.
2. **Fecha format consistente**: USA (MM/DD/YYYY) o Internacional (DD/MM/YYYY)
3. **Sin filas vacías** entre tasks
4. **Sin merged cells** (Navisworks no las procesa correctamente)
5. **Task IDs únicos**: No duplicar códigos
6. **Predecessors format**: Usar Task IDs separados por comas (A1010, A1020) o punto y coma (A1010; A1020)

**Exportar a CSV:**
1. Excel: File > Save As
2. Save as type: **CSV (Comma delimited) (*.csv)**
3. Filename: `Project_Schedule.csv`
4. Warning: "Some features may be lost" → Click "Yes" (es esperado)

### Import a Navisworks TimeLiner

**Paso 1: Iniciar Import**
1. Navisworks TimeLiner > Data Sources tab
2. Click "Add..."
3. Type: **CSV File** o **Microsoft Excel (*.xlsx)**
4. Browse: Seleccionar `Project_Schedule.csv` o `Project_Schedule.xlsx`
5. Click "OK"

**Paso 2: Configure CSV Mapping**

Dialog "Configure CSV Import":

**Section 1: File Settings**
- **Delimiter**: Comma (,) para CSV, Tab (\t) para TSV
- **Text Qualifier**: Double quote (") - para text con comas dentro
- **First Row Contains Headers**: ☑ (checked)
- **Date Format**: MM/DD/YYYY o DD/MM/YYYY (según tu Excel regional settings)
- **Encoding**: UTF-8 (para caracteres especiales/acentos)

**Section 2: Column Mapping**

Navisworks muestra preview de las primeras 10 filas del CSV. Debes mapear cada columna de CSV a un campo de TimeLiner.

| CSV Column | Map To (TimeLiner Field) | Required? |
|------------|--------------------------|-----------|
| Task ID | Task ID | ✓ Yes |
| Task Name | Task Name | ✓ Yes |
| Start Date | Start Date | ✓ Yes |
| End Date | End Date | ✓ Yes |
| Duration | Duration | No (se calcula automáticamente) |
| WBS | WBS Code | No (pero útil para hierarchy) |
| Type | Task Type | No (default: Construct) |
| Predecessors | Predecessors | No (pero necesario para dependencies) |
| Resources | Resources | No |
| Cost | Cost | No |
| % Complete | Progress | No |

**Configuración de mapping:**
1. Columna "Task ID" de CSV → Dropdown "Task ID" en Navisworks
2. Columna "Task Name" → "Task Name"
3. Columna "Start Date" → "Start Date"
4. Etc.

**Section 3: Dependency Parsing**

Si tu CSV tiene columna "Predecessors", configurar parsing:
- **Format**: Task IDs separated by comma (A1010, A1020)
- **Relationship Type**: Default = Finish-to-Start (FS)
  - Si tu CSV especifica tipo (ej: "A1010 FS, A1020 SS"), activar "Parse relationship type"
- **Lag**: Si tu CSV especifica lag (ej: "A1010 FS+7d"), activar "Parse lag values"

**Section 4: WBS Hierarchy**

Si tu CSV tiene columna "WBS" (ej: 1.2.3), Navisworks puede reconstruir hierarchy:
- ☑ Build hierarchy from WBS codes
- Separator: Period (.) - para código 1.2.3
- Resultado: Tasks se organizan en árbol según WBS

**Sin WBS Code:**
- Tasks se importan planas (flat list, todas al mismo nivel)
- Puedes re-organizar manualmente después en TimeLiner (drag & drop)

**Paso 3: Execute Import**
1. Preview: Verificar que mapping es correcto (primeras 10 filas)
2. Click "Import"
3. Progress bar (rápido, < 1 min para 1,000 tasks)
4. Confirmation: "Successfully imported 437 tasks from CSV"

### Validación Post-Import

**Verificación rápida:**
1. Task count: Contar filas en Excel (excluyendo header) vs tasks en Navisworks
2. Random sample: Seleccionar 5 tasks aleatorias, comparar dates con Excel
3. Dependencies: Si importaste predecessors, verificar que líneas aparecen en timeline

**Issues comunes:**

**Problema**: Dates importadas incorrectamente (ej: 02/15/2026 se lee como 15/02/2026)
- **Causa**: Date format mismatch
- **Solución**: En Import Settings, cambiar Date Format a DD/MM/YYYY o viceversa. Re-import.

**Problema**: Predecessors no se importaron
- **Causa**: Format de predecessors no reconocido
- **Solución**: Verificar que CSV usa Task IDs exactos (case-sensitive). Format: "A1010, A1020" (con espacio después de coma es OK)

**Problema**: WBS hierarchy plana (todos al mismo nivel)
- **Causa**: Columna WBS no mapeada o formato incorrecto
- **Solución**: Verificar que WBS codes usan separator consistente (1.1, 1.2, 1.3 no 1.1, 1-2, 1.3 mixto)

**Problema**: Caracteres especiales (acentos) corruptos
- **Causa**: Encoding incorrecto
- **Solución**: Guardar CSV con UTF-8 encoding (Excel > Save As > Tools > Web Options > Encoding > UTF-8)

### Ejemplo Completo - Small Commercial Building

**Escenario**: Oficina de 2 pisos, cronograma simple creado en Excel.

**Excel file: "Office_Schedule.xlsx"**

10 tasks principales:
1. Site Prep (1 week)
2. Foundations (2 weeks)
3. Slab on Grade (1 week)
4. Structure Level 1 (2 weeks)
5. Structure Level 2 (2 weeks)
6. Roof (1 week)
7. Exterior Walls (2 weeks)
8. MEP Rough (3 weeks)
9. Interior Finishes (4 weeks)
10. Site Work & Landscaping (2 weeks)

Total: 20 weeks

**CSV export:**
```csv
Task ID,Task Name,Start,End,Duration,Predecessors,Type
T001,Site Preparation,01/05/2026,01/12/2026,7,,Construct
T002,Foundations,01/13/2026,01/26/2026,14,T001,Construct
T003,Slab on Grade,01/27/2026,02/02/2026,7,T002,Construct
T004,Structure Level 1,02/03/2026,02/16/2026,14,T003,Construct
T005,Structure Level 2,02/17/2026,03/02/2026,14,T004,Construct
T006,Roof,03/03/2026,03/09/2026,7,T005,Construct
T007,Exterior Walls,03/10/2026,03/23/2026,14,T006,Construct
T008,MEP Rough-In,03/10/2026,03/30/2026,21,T005,Construct
T009,Interior Finishes,03/31/2026,04/27/2026,28,"T007,T008",Construct
T010,Site Work & Landscaping,04/28/2026,05/11/2026,14,T009,Construct
```

**Import a Navisworks:**
1. TimeLiner > Add Data Source > CSV
2. Select "Office_Schedule.csv"
3. Configure mapping:
   - Task ID → Task ID
   - Task Name → Task Name
   - Start → Start Date (format: MM/DD/YYYY)
   - End → End Date
   - Duration → Duration
   - Predecessors → Predecessors (comma-separated)
   - Type → Task Type
4. Import
5. Resultado: 10 tasks importadas, dependencies conectadas

**Next step**: Attach elementos del modelo (foundations → foundation elements, structure L1 → level 1 columns/beams, etc.)

---

## 5. Schedule Data Mapping Avanzado (8 minutos)

### Custom Fields y User-Defined Properties

Tanto P6 como MS Project permiten custom fields. Estos pueden importarse a Navisworks como propiedades adicionales de las tasks.

**Ejemplo - Responsibility Assignment:**
En P6, Activity Code "Responsible Party":
- GC (General Contractor)
- STEEL_SUB (Steel Subcontractor)
- MEP_SUB (MEP Subcontractor)
- ARCH_SUB (Architectural Finishes)

**Import a Navisworks:**
1. Configurar mapping: P6 "Responsible Party" → Navisworks Custom Property "Contractor"
2. Después de import, cada task tiene property "Contractor"
3. Usar para filtering: Search Set "Show all tasks where Contractor = MEP_SUB"
4. Útil para simulaciones por contractor (show MEP scope only)

**Otro Ejemplo - Phase Codes:**
MS Project custom field "Construction Phase":
- Phase 1A: Core & Shell
- Phase 1B: MEP Infrastructure
- Phase 2A: Tenant Fit-Out Floor 1-3
- Phase 2B: Tenant Fit-Out Floor 4-6

**Uso en Navisworks:**
- Import como "Phase" property
- Crear múltiples simulaciones (una por phase)
- Comparar progress de phases en parallel

### Resource Data y Allocation

**Resource Types:**
1. **Labor**: Personal (carpenters, electricians, etc.)
2. **Equipment**: Maquinaria (cranes, excavators, etc.)
3. **Material**: Consumibles (concrete, steel, piping)

**Resource Import desde P6:**
- P6 Resource Assignments → Navisworks Resources
- Incluye: Resource Name, Units (quantity), Cost
- Ejemplo: Task "Pour Concrete Slab L3" → Resources: [Concrete (120 CY), Labor Crew (40 hrs), Pump Truck (8 hrs)]

**Uso en TimeLiner:**
1. TimeLiner > Resources tab
2. Ver histogram de resource allocation
3. Identificar over-allocation (misma grúa asignada a 2 tasks simultáneas)
4. Export resource report a Excel

**Resource Loading:**
- Útil para cashflow analysis
- Cost per month = Sum of (Task Cost × % Complete in that month)
- TimeLiner genera S-curve automática

### Cost Data y Earned Value

**Cost Loading:**
Si P6/MS Project tienen cost data ($), importar a Navisworks:
- Task Cost: Costo planificado de la actividad
- Cumulative Cost: Costo acumulado hasta esa fecha

**Earned Value Management (EVM):**

Métricas EVM calculadas por Navisworks:
- **Planned Value (PV)**: Costo planificado para la fecha actual
- **Earned Value (EV)**: Valor del trabajo completado (Cost × % Complete)
- **Actual Cost (AC)**: Costo real gastado (si se actualiza weekly)

Indicadores:
- **Schedule Performance Index (SPI)**: EV / PV
  - SPI > 1.0: Adelantado (bueno)
  - SPI < 1.0: Retrasado (malo)
- **Cost Performance Index (CPI)**: EV / AC
  - CPI > 1.0: Bajo presupuesto (bueno)
  - CPI < 1.0: Sobre presupuesto (malo)

**Visualización en Navisworks:**
- TimeLiner > Reports > Earned Value Chart
- Gráfica S-curve mostrando PV, EV, AC a lo largo del tiempo
- Útil para presentaciones a CFO/PMO

---

## 6. Critical Path Import y Visualization (5 minutos)

### ¿Qué es el Critical Path?

Repaso rápido:
- Secuencia de tasks con Total Float = 0
- Retraso en cualquier task crítica retrasa todo el proyecto
- Usualmente 15-25% de las tasks totales

**Import desde P6/MS Project:**
- P6 calcula critical path automáticamente (Activity > Critical)
- MS Project: Tools > Critical Path (marca tasks en rojo)
- Al importar a Navisworks, el flag "Critical" se preserva

### Configurar Critical Path Display en TimeLiner

**Paso 1: Verify Critical Path Imported**
1. TimeLiner > Tasks Panel
2. Agregar columna "Total Float":
   - Click derecho en header > Configure Columns > Add "Total Float"
3. Tasks con Total Float = 0 son críticas

**Paso 2: Highlight Critical Tasks**
1. TimeLiner > Tools > Calculate Critical Path
   - Navisworks recalcula basado en dependencies importadas
   - Marca tasks críticas
2. Configurar appearance:
   - Selection Set: "Critical Path Tasks"
   - Appearance Override: Red color, thick outline
3. Timeline: Barras críticas en rojo, no-críticas en azul/gris

**Paso 3: Critical Path en Simulación 4D**
1. Durante playback, tasks críticas se resaltan en rojo
2. Ayuda a visualizar qué activities no pueden retrasarse
3. Útil para constructability reviews: "Esta task es crítica, necesitamos recursos adicionales"

### Critical Path Análisis

**Caso Real - Hospital Project:**
Cronograma: 24 meses, 3,800 tasks, Critical Path: 620 tasks (16%)

**Critical Path sequence identificada:**
1. Excavation & Shoring (crítica: unstable soil, requiere drill piers)
2. Foundation Piles (crítica: long lead time para pile drilling rig)
3. Underground Utilities Tie-In (crítica: coordination con city, permisos)
4. Structural Steel Erection (crítica: secuencia piso por piso)
5. MEP Core Risers (crítica: all floors dependen de risers completos)
6. Elevator Installation (crítica: long lead equipment, 9 meses fabricación)
7. Commissioning (crítica: complex medical gas systems, FDA validation)

**Acción tomada:**
- VDC team corrió simulación 4D mostrando critical path en rojo
- Presentación a project team y owner
- Decisiones basadas en simulación:
  - **Elevator**: Ordenar 2 meses antes de lo planificado ($0 extra cost, solo advance payment)
  - **MEP Risers**: Assign doble crew para acelerar (cost: $120k, save: 3 semanas)
  - **Commissioning**: Start parallel con finishes en pisos superiores (vs secuencial)
- Resultado: Proyecto terminó 6 semanas antes de baseline, $2.1M bajo presupuesto

**4D Visualization Impact:**
Cliente (hospital CFO) declaró: "Nunca había entendido por qué los elevadores eran tan críticos hasta que vi el video 4D. Ver visualmente cómo todo el piso 8-12 esperaba a los elevadores fue revelador."

---

## Resumen de la Lección

**Conceptos Clave:**

1. **Import Automation**: Importar cronogramas elimina 95%+ del trabajo manual de crear tasks, ahorrando semanas de esfuerzo en proyectos grandes.

2. **Primavera P6**: Export a XER (formato más completo), import a Navisworks con mapping de fields, dependencies, resources y baselines. Update workflow para re-import semanal.

3. **MS Project**: Import directo desde MPP o export a XML, mapping similar a P6, soporte completo para dependencies y resources.

4. **Excel/CSV**: Solución universal para cualquier software sin soporte nativo, requiere estructurar columnas correctamente (Task ID, Name, Start, End, Predecessors).

5. **Schedule Data Mapping**: Custom properties, resource allocation, cost loading y earned value pueden importarse para análisis avanzados.

6. **Critical Path**: Import preserva flags críticos, Navisworks puede recalcular, visualización en rojo ayuda a identificar tasks que no pueden retrasarse.

**Habilidades Adquiridas:**
- Exportar cronogramas desde P6 (XER/XML) y MS Project (MPP/XML)
- Importar a Navisworks TimeLiner con field mapping correcto
- Configurar dependency parsing (FS, SS, FF, lag values)
- Validar post-import (task count, dates, dependencies)
- Update workflow para re-import de cronogramas actualizados
- Importar y visualizar critical path

**Próximos Pasos:**
En la **Lección 15**, configurarás simulaciones 4D avanzadas con task types complejos (temporary works, demolition), appearance rules personalizadas, auto-attach masivo con search sets, y export de videos 4D profesionales.

---

## Ejercicio Práctico 14

**Duración**: 45 minutos

**Objetivo**: Importar un cronograma real de 500+ tasks desde MS Project, configurar dependencies, validar import, y crear simulación 4D básica.

**Archivos proporcionados:**
- `Hospital_Addition_Model.nwc` (modelo federado)
- `Hospital_Schedule.mpp` (cronograma MS Project con 523 tasks)
- `Hospital_Schedule.csv` (backup en CSV)

**Instrucciones:**

**Parte 1: Import desde MS Project (15 min)**

1. Abrir `Hospital_Addition_Model.nwc` en Navisworks
2. Abrir TimeLiner (F5)
3. Import cronograma:
   - Data Sources > Add > MS Project (MPP)
   - Select `Hospital_Schedule.mpp`
4. Configure mapping:
   - Import outline structure (WBS)
   - Import predecessors/dependencies
   - Import resource names
   - Import baseline "Baseline 1"
5. Execute import
6. Documentar:
   - Total tasks imported: _____
   - Date range: _____ to _____
   - Task con mayor duration: _____ (cuántos días?)

**Parte 2: Validación (10 min)**

1. Verificar task count:
   - MS Project (abrir archivo en MS Project si disponible): Tools > Project Statistics
   - Comparar con Navisworks count
2. Verificar WBS hierarchy:
   - ¿Se importó correctamente la estructura jerárquica? (Sí/No)
   - ¿Cuántos niveles de hierarchy hay? (1, 2, 3, 4, 5+)
3. Verificar dependencies:
   - Timeline view: ¿Hay líneas conectando tasks? (Sí/No)
   - Seleccionar random task, ver Properties > Predecessors: ¿Listed? (Sí/No)
4. Critical Path:
   - TimeLiner > Tools > Calculate Critical Path
   - Add columna "Total Float"
   - Contar tasks críticas (Total Float = 0): _____
   - % del total: _____

**Parte 3: Attachment Básico (15 min)**

No haremos auto-attach avanzado (eso es Lección 15), pero vincularemos manualmente algunas fases:

1. **Foundation Phase:**
   - Find Items > Category = Structural Foundations
   - Buscar task "Foundation Construction" en TimeLiner
   - Attach selection a esa task
   - Attached count: _____

2. **Structural Steel Phase:**
   - Find Items > Category = Structural Framing
   - Task: "Structural Steel Erection"
   - Attach
   - Count: _____

3. **MEP Phase:**
   - Find Items > Category = Mechanical Equipment OR Ducts OR Pipes
   - Task: "MEP Rough-In"
   - Attach
   - Count: _____

**Parte 4: Simulación Básica (5 min)**

1. Configurar:
   - Interval: 1 week (proyecto es largo, 24 meses)
   - Speed: 5x (para ver progreso rápidamente)
2. Playback
3. Observar:
   - ¿Foundations aparecen primero? (Sí/No)
   - ¿Structural steel sigue después? (Sí/No)
   - ¿MEP se solapa con otras trades? (Sí/No - esperado)
4. Pausar en Week 52 (1 año)
5. Export snapshot: "Hospital_Year1_Progress.png"

**Entregables:**

1. **Archivo NWF**: "Exercise_14_Hospital_Import.nwf" (con cronograma importado y attachments básicos)
2. **Screenshot**: "Hospital_Year1_Progress.png"
3. **Validation Report** (1 página PDF):
   - Task count: X tasks imported
   - Date range: START to END
   - Critical path: X tasks (X%)
   - Dependencies: Imported successfully (Yes/No)
   - Issues encountered: (describe cualquier problema y cómo lo resolviste)
4. **Análisis** (3-5 bullet points):
   - ¿Qué fase del proyecto es más larga?
   - ¿Identificaste algún gap en el cronograma?
   - ¿El critical path pasa por qué disciplinas principalmente? (STR, ARCH, MEP?)

**Criterios de Evaluación:**
- Import exitoso: 30%
- Validación correcta: 25%
- Attachments básicos funcionan: 25%
- Simulación reproduce: 10%
- Análisis escrito: 10%

**Bonus (+10%)**: Si tienes MS Project instalado, abre `Hospital_Schedule.mpp` y compara side-by-side con Navisworks TimeLiner:
- Screenshot de ambos (MS Project Gantt + Navisworks Timeline)
- Validar que 5 tasks aleatorias tienen mismas dates

---

## Recursos Adicionales

**Documentación Oficial:**
- Autodesk Knowledge Network: "Importing Schedules into TimeLiner" (artículo completo)
- Autodesk University: "P6 to Navisworks Workflow" (video, 40 min)

**Tutoriales:**
- "MS Project to Navisworks Integration" - BIM 360 (YouTube, 25 min)
- "CSV Schedule Import Best Practices" - AGC Guide (PDF)

**Templates:**
- Excel template para CSV import (descargable, con columnas pre-configuradas)
- P6 export settings file (para consistent exports)

**Software de Scheduling:**
- Primavera P6 trial: 30 días gratis (Oracle website)
- MS Project trial: 30 días (Microsoft 365)
- LibreProject: Open-source alternative a MS Project (gratis)

**Common Issues Cheat Sheet:**

| Issue | Cause | Solution |
|-------|-------|----------|
| 0 tasks imported | Wrong file format | Verify XER/MPP/CSV, not PDF/image |
| Dates offset by 1 day | Time-of-day mismatch | Import Settings > Time of Day |
| No dependencies visible | Not imported | Re-import with "Import Relationships" checked |
| WBS flat (no hierarchy) | WBS not exported | Verify source file has outline/WBS |
| Critical path not showing | Not calculated | Tools > Calculate Critical Path |
| Resources not imported | No assignments in source | Verify source file has resources assigned |
| Accented characters broken | Encoding issue | CSV > Save As > UTF-8 encoding |

---

**Próxima Lección**: Lección 15 - 4D Simulation Configuration

En la siguiente lección profundizarás en configuración avanzada de simulaciones: task types complejos (temporary works, demolition sequences), appearance rules personalizadas por disciplina, auto-attach masivo con search sets inteligentes, animation recording profesional, y export de videos 4D en 4K para presentaciones ejecutivas.
