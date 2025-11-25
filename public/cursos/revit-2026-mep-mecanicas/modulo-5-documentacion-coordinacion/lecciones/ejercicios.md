# Ejercicios - Módulo 5: Documentación y Coordinación MEP

## Ejercicio 1: Schedule de Equipos HVAC con Parámetros Compartidos

**Objetivo:** Crear schedule profesional de equipos mecánicos con parámetros compartidos personalizados y campos calculados.

### Contexto

Proyecto: Edificio de oficinas de 5 pisos con los siguientes equipos HVAC:
- 2 Manejadoras de aire (AHU-01, AHU-02)
- 12 Fan coil units (FCU-101 a FCU-112)
- 4 Exhaust fans (EF-1 a EF-4)
- 1 Chiller enfriado por aire (CH-01)

### Tareas

**Parte A: Crear Parámetros Compartidos (20 min)**

1. Crear archivo de shared parameters: `HVAC_Equipment_Parameters.txt`
2. Crear grupo: `Equipment Extended Data`
3. Agregar los siguientes parámetros compartidos:
   - `Serial Number` (Text) - Número de serie del fabricante
   - `Warranty Expiration` (Date) - Fecha de expiración de garantía
   - `Commissioning Date` (Date) - Fecha de puesta en marcha
   - `Maintenance Schedule` (Text) - Frecuencia de mantenimiento
   - `Service Contractor` (Text) - Empresa de servicio

4. Agregar parámetros a categoría **Mechanical Equipment** como **Instance** parameters

**Parte B: Crear Schedule Completo (30 min)**

5. Crear schedule: `HVAC Equipment Schedule - Complete`
6. Incluir los siguientes campos **en orden:**
   - Mark
   - Family and Type
   - Level
   - Room
   - Flow (Airflow)
   - Total Cooling Capacity
   - Electrical Data: Apparent Load
   - Electrical Data: Voltage
   - Serial Number (shared parameter)
   - Warranty Expiration (shared parameter)
   - Manufacturer
   - Model
   - Service Contractor (shared parameter)
   - Comments

7. **Sorting/Grouping:**
   - Sort by: `Level` (Ascending) con Header y Blank line
   - Then by: `Mark` (Ascending)
   - ☑ Itemize every instance

8. **Formatting:**
   - Flow: Heading "Airflow (L/s)", Right aligned, 1 decimal
   - Cooling Capacity: Heading "Cooling (kW)", Right aligned, 1 decimal
   - Apparent Load: Heading "Power (kVA)", Right aligned, 2 decimals

9. **Appearance:**
   - Grid lines: Thin
   - Outline: Medium
   - Title text: 3.5mm, Bold
   - Body text: 2.5mm

**Parte C: Crear Campo Calculado (15 min)**

10. Agregar **Calculated Value:**
    - Name: `Electrical Current`
    - Type: Number
    - Formula: `(Apparent Load * 1000) / (Voltage * 1.732)`
      - (Calcula corriente trifásica: I = kVA / (V × √3))
    - Heading: "Current (A)"
    - Rounding: 1 decimal

11. Agregar columna `Electrical Current` después de `Voltage`

**Parte D: Poblar Datos (20 min)**

12. Llenar datos de equipos (ejemplos):

**AHU-01:**
- Mark: AHU-01
- Flow: 8000 L/s
- Cooling Capacity: 250 kW
- Apparent Load: 45 kVA
- Voltage: 480 V
- Serial Number: AHU-2024-X7891
- Warranty Expiration: 2027-01-15
- Manufacturer: Carrier
- Model: 39M080
- Service Contractor: HVAC Services Inc.

**FCU-101:**
- Mark: FCU-101
- Flow: 600 L/s
- Cooling Capacity: 8.5 kW
- Apparent Load: 2.3 kVA
- Voltage: 208 V
- Serial Number: FCU-2024-B4521

13. Completar datos para todos los equipos

**Parte E: Exportar (10 min)**

14. Exportar schedule a formato tab-delimited: `HVAC_Equipment_Schedule.txt`
15. Abrir en Excel y formatear como tabla profesional
16. Agregar fórmula en Excel para calcular **Total Weight** (suma de pesos)

### Entregables

- Archivo Revit con schedule completo
- Archivo de shared parameters `.txt`
- Archivo Excel con schedule formateado
- Captura de pantalla del schedule en Revit

### Criterios de Evaluación

- Parámetros compartidos correctamente configurados (25%)
- Schedule con todos los campos requeridos (25%)
- Campo calculado funcional con fórmula correcta (20%)
- Datos completos y realistas (20%)
- Formateo profesional (10%)

---

## Ejercicio 2: Etiquetado Masivo de Sistema HVAC

**Objetivo:** Implementar estrategia de etiquetado profesional para sistema HVAC completo con nomenclatura consistente.

### Contexto

Edificio comercial con sistema HVAC VAV:
- 1 Manejadora central (AHU-01)
- Red de ductos supply y return
- 24 VAV boxes (VAV-101 a VAV-124)
- 35 Difusores de supply air
- 18 Rejillas de return air
- 12 Exhaust grilles

### Tareas

**Parte A: Configurar Nomenclatura (15 min)**

1. Definir **nomenclatura estándar** para todos los elementos:

**Equipos:**
- Manejadora: `AHU-XX`
- VAV boxes: `VAV-XXX` (número de sala)
- Exhaust fans: `EF-X`

**Terminales:**
- Supply diffusers: `SD-XXX` (número de sala)
- Return grilles: `RG-XXX`
- Exhaust grilles: `EG-XXX`

2. Crear **Key Schedule** para fabricantes de difusores:
   - Titus
   - Price Industries
   - Krueger
   - Nailor

**Parte B: Tag Manual de Equipos Principales (20 min)**

3. Etiquetar equipos manualmente:
   - **Tag by Category** → Manejadora AHU-01
   - Configurar tag con **Leader** (línea guía)
   - Posicionar tag fuera de geometría del equipo

4. Personalizar **Equipment Tag** para mostrar:
   - Mark
   - Flow (caudal)
   - Formato:
     ```
     AHU-01
     Q = 8000 L/s
     ```

5. Etiquetar los 24 VAV boxes individualmente
6. Asignar Mark secuencial según número de sala:
   - VAV-101 (sala 101)
   - VAV-102 (sala 102)
   - etc.

**Parte C: Tag All para Terminales (30 min)**

7. Crear vista de plano: `Level 1 - HVAC Tags`
8. Configurar visibilidad:
   - ☑ Air Terminals
   - ☑ Mechanical Equipment
   - ☐ Ocultar arquitectura decorativa (furniture, casework)

9. **Tag All Not Tagged:**
   - Category: **Air Terminals**
   - Orientation: **Horizontal**
   - ☑ Leader
   - Leader length: 6mm
   - Click OK

10. Revisar tags colocados automáticamente
11. **Ajustar posiciones:**
    - Usar **Align** tool para alinear tags en filas
    - Mover tags que se superponen
    - Ajustar leaders para claridad

**Parte D: Etiquetado de Ductos (25 min)**

12. Etiquetar **ductos principales** (mains):
    - Supply main: Mostrar Size + Flow
    - Return main: Mostrar Size + System Name

13. **Tag by Category** en:
    - Main supply duct (después de AHU)
    - Risers verticales (uno por piso)
    - Main return duct

14. **NO etiquetar:**
    - Branch ducts pequeños (< 300mm)
    - Flexible ducts cortos a difusores

**Parte E: Personalizar Tag de Ductos (20 min)**

15. **Edit Family** del Duct Tag:
    - Agregar label: **Flow**
    - Agregar label: **Velocity**
    - Formato:
      ```
      600x300
      Q = 2500 L/s
      V = 13.9 m/s
      ```

16. **Load into Project**
17. Re-tag ductos principales con nuevo tag

**Parte F: Verificación Final (15 min)**

18. Crear **schedule de verificación:**
    - `Air Terminal Tag Verification`
    - Campos: Mark, Tag, Room, Level
    - Filtrar: `Mark` **does not contain** valores → identificar terminales sin Mark

19. Completar Mark faltantes

20. Verificar que **no haya duplicados:**
    - Schedule sorted by Mark
    - Revisar visualmente duplicados

### Entregables

- Vista de plano con todos los elementos etiquetados
- Familia de tag personalizado (`.rfa`)
- Schedule de verificación
- Documento PDF con nomenclatura estándar utilizada

### Criterios de Evaluación

- Nomenclatura consistente y lógica (25%)
- Tags correctamente posicionados y legibles (25%)
- Tag All ejecutado sin superposiciones (20%)
- Tag personalizado funcional (20%)
- Verificación completa sin duplicados (10%)

---

## Ejercicio 3: Coordinación con Arquitectura - Copy/Monitor

**Objetivo:** Vincular modelo arquitectónico, copiar/monitorear elementos clave y resolver coordination warnings.

### Contexto

Proyecto MEP de edificio corporativo 3 pisos:
- Modelo ARQ: `Building_ARQ.rvt` (proporcionado)
- Modelo MEP-M: `Building_MEP_M.rvt` (tu archivo)

**Cambios arquitectónicos recientes:**
- Level 2 elevación cambió de 4.00m a 4.20m (+200mm)
- Grid C se movió 500mm al oeste
- Muro entre salas 201-202 eliminado (ahora sala abierta)

### Tareas

**Parte A: Vincular Modelo Arquitectónico (15 min)**

1. Abrir modelo MEP: `Building_MEP_M.rvt`
2. **Insert** → **Link Revit** → seleccionar `Building_ARQ.rvt`
3. Positioning: **Auto - Origin to Origin**
4. ☑ Room Bounding (elementos ARQ definen límites de spaces)
5. Insertar link

6. **Configurar visibilidad del link:**
   - **Visibility/Graphics** → **Revit Links**
   - `Building_ARQ.rvt` → Display Settings: **Halftone**
   - Override color: Gris claro (192, 192, 192)

**Parte B: Copy/Monitor Levels (20 min)**

7. **Collaborate** → **Copy/Monitor** → **Select Link**
8. Click en link arquitectónico

9. **Copiar Levels:**
   - **Copy/Monitor** panel → **Copy**
   - En vista de elevación, click en cada level:
     - Level 1 (0.00m)
     - Level 2 (4.20m) ← **nota elevación nueva**
     - Level 3 (8.40m)
     - Roof (12.00m)
   - **Finish**

10. Verificar que levels MEP ahora coinciden con ARQ

**Parte C: Copy/Monitor Grids (20 min)**

11. **Copy/Monitor** → **Select Link** (nuevamente)
12. **Copy** grids arquitectónicos:
    - En vista de plano, click en grids:
      - Grid A, B, C, D (horizontal)
      - Grid 1, 2, 3, 4, 5 (vertical)

13. **Copy/Monitor Options** → **Grids** tab:
    - Prefix: `ARQ-` (para diferenciar)
    - Click OK

14. **Finish**

15. Grids copiados ahora son `ARQ-A`, `ARQ-B`, `ARQ-C`, etc.

**Parte D: Monitor Walls (Room Boundaries) (15 min)**

16. **Copy/Monitor** → **Select Link**
17. **Monitor** (NO copy) los siguientes muros:
    - Muros perimetrales del edificio
    - Muros entre salas 101-102, 103-104 (Level 1)
    - Muros de shaft de ductos verticales

18. **Finish**

19. Estos muros están ahora **monitoreados** (cambios en ARQ generarán warnings)

**Parte E: Reload Link y Coordination Review (30 min)**

20. **Simular cambio arquitectónico:**
    - Abrir `Building_ARQ.rvt`
    - Mover **Level 2** de 4.20m a **4.30m** (+100mm adicional)
    - Mover **Grid C** 200mm adicionales
    - **Eliminar muro** entre salas 201-202
    - **Save**

21. Volver a modelo MEP: `Building_MEP_M.rvt`

22. **Manage Links** → **Revit** tab
23. Seleccionar `Building_ARQ.rvt` → **Reload**

24. **Collaborate** → **Coordination Review** → **Review Warnings**

25. **Analizar warnings:**

**Warning 1:** `Level "Level 2" has moved`
- **Before:** 4.20m
- **After:** 4.30m
- **Action:** Click **Show** para ver en modelo
- **Decision:** **Postpone** (discutir con arquitecto antes de aceptar)
- **Comment:** "Pending approval - verificar impacto en ductos de plenum"

**Warning 2:** `Grid "ARQ-C" has moved`
- **Before:** Posición original
- **After:** Moved 200mm west
- **Action:** **Accept** (actualizar grid MEP)

**Warning 3:** `Wall "Basic Wall 200mm" has been deleted`
- **Before:** Muro entre 201-202
- **After:** Deleted
- **Action:** Click **Show**
- **Decision:** **Accept**
- **Comment:** "Space 201 y 202 ahora combinados - actualizar HVAC Zone"

26. **Commit changes** → Click OK

**Parte F: Actualizar Modelo MEP según Changes (25 min)**

27. **Actualizar HVAC Zones:**
    - Eliminar zone separado de sala 202
    - Expandir zone de sala 201 para cubrir espacio combinado
    - Renombrar: `Zone 201-202 - Open Office`

28. **Verificar equipos:**
    - Sala 201 tenía FCU-201
    - Sala 202 tenía FCU-202
    - **Decisión:** Mantener solo FCU-201, eliminar FCU-202
    - Aumentar capacidad de FCU-201 de 8kW a **15kW** (para espacio combinado)

29. **Re-route ductos si necesario:**
    - Verificar que ductos no chocan con nueva posición de Grid C

30. **Documentar cambios:**
    - Crear text note en plano:
      ```
      COORDINATION CHANGE 2024-11-23:
      - Rooms 201-202 combined per ARQ change
      - FCU-202 removed, FCU-201 upsized to 15kW
      - Zone 201-202 reconfigured
      ```

### Entregables

- Modelo MEP con link arquitectónico configurado
- Captura de pantalla de **Coordination Review** dialog con warnings
- Plano Level 2 mostrando cambios implementados
- Documento Word con:
  - Lista de warnings encontrados
  - Decisiones tomadas (Accept/Reject/Postpone)
  - Justificación de cada decisión

### Criterios de Evaluación

- Link correctamente insertado y configurado (15%)
- Levels y grids copiados/monitoreados (20%)
- Walls monitoreados correctamente (15%)
- Coordination Review ejecutado y documentado (25%)
- Modelo MEP actualizado según cambios (20%)
- Documentación profesional de decisiones (5%)

---

## Ejercicio 4: Coordination Model Completo (5 Disciplinas)

**Objetivo:** Crear coordination model maestro vinculando modelos de arquitectura, estructura y 3 disciplinas MEP.

### Contexto

Proyecto: Hospital de 8 pisos con múltiples disciplinas:

**Modelos disponibles:**
- `Hospital_ARQ.rvt` - Arquitectura
- `Hospital_STR.rvt` - Estructura
- `Hospital_MEP_M.rvt` - Mecánicas (HVAC)
- `Hospital_MEP_E.rvt` - Eléctricas
- `Hospital_MEP_S.rvt` - Sanitarias (plumbing)

### Tareas

**Parte A: Crear Coordination Model (30 min)**

1. **File** → **New** → **Project**
   - Template: `Construction-Default.rte`
   - Create new: ☐ (no worksharing inicialmente)

2. **Configurar Levels base:**
   - Opción: Copy/Monitor levels desde `Hospital_ARQ.rvt`
   - Levels: Ground, 1, 2, 3, 4, 5, 6, 7, Roof (9 levels total)

3. **Vincular modelos en orden:**

   **Link 1: Arquitectura**
   - **Insert** → **Link Revit** → `Hospital_ARQ.rvt`
   - Positioning: **Origin to Origin**
   - ☑ Room Bounding

   **Link 2: Estructura**
   - **Insert** → **Link Revit** → `Hospital_STR.rvt`
   - Positioning: **Origin to Origin**

   **Link 3: MEP Mecánicas**
   - **Insert** → **Link Revit** → `Hospital_MEP_M.rvt`
   - Positioning: **Origin to Origin**

   **Link 4: MEP Eléctricas**
   - **Insert** → **Link Revit** → `Hospital_MEP_E.rvt`
   - Positioning: **Origin to Origin**

   **Link 5: MEP Sanitarias**
   - **Insert** → **Link Revit** → `Hospital_MEP_S.rvt`
   - Positioning: **Origin to Origin**

4. **Guardar coordination model:**
   - **File** → **Save As** → `Hospital_COORDINATION.rvt`
   - Ubicación: Carpeta compartida `/COORD/`

**Parte B: Configurar Worksets por Disciplina (25 min)**

5. **Enable Worksharing:**
   - **Collaborate** → **Worksets**
   - Dialog: **OK** (create default worksets)

6. **Crear worksets dedicados:**
   - **Collaborate** → **Worksets** → **New**
   - Nombres:
     - `Links - Architecture`
     - `Links - Structure`
     - `Links - MEP Mechanical`
     - `Links - MEP Electrical`
     - `Links - MEP Plumbing`

7. **Asignar links a worksets:**
   - Seleccionar link `Hospital_ARQ.rvt`
   - **Properties** → **Workset:** `Links - Architecture`
   - Repetir para cada link

**Parte C: Crear View Templates de Coordinación (40 min)**

**Template 1: Full Coordination (Todas las disciplinas)**

8. Crear vista 3D: `3D - Full Coordination`
9. **Visibility/Graphics** → **Revit Links:**

   **Hospital_ARQ.rvt:**
   - Display: **By host view**
   - Override: **Halftone**, Transparency 50%
   - Categories: ☑ Walls, Floors, Roofs, Stairs

   **Hospital_STR.rvt:**
   - Display: **By host view**
   - Override: Color **Cyan** (0, 255, 255), Line Weight 2
   - Categories: ☑ Structural Framing, Columns

   **Hospital_MEP_M.rvt:**
   - Display: **By host view**
   - Override: Color **Rojo** (255, 0, 0)
   - Categories: ☑ Ducts, Mechanical Equipment

   **Hospital_MEP_E.rvt:**
   - Display: **By host view**
   - Override: Color **Amarillo** (255, 255, 0)
   - Categories: ☑ Cable Trays, Conduits, Electrical Equipment

   **Hospital_MEP_S.rvt:**
   - Display: **By host view**
   - Override: Color **Azul** (0, 0, 255)
   - Categories: ☑ Pipes, Plumbing Fixtures

10. **View** → **Create Template from Current View**
    - Name: `COORD - Full Model by Discipline`
    - Include: ☑ Visibility/Graphics, ☑ Detail Level, ☑ Visual Style

**Template 2: MEP Only (Sin ARQ/STR)**

11. Duplicar vista: `3D - MEP Only`
12. **Visibility/Graphics:**
    - ☐ Uncheck links ARQ y STR (solo mostrar MEP)
13. Create template: `COORD - MEP Systems Only`

**Template 3: Mechanical Room Detail**

14. Crear vista 3D: `3D - Mechanical Room Level 1`
15. **Section Box:** Ajustar para aislar mechanical room
16. Detail Level: **Fine**
17. Visibility: Todas las disciplinas (color-coded)
18. Create template: `COORD - Mechanical Room Detail`

**Parte D: Configurar Clash Detection Sets (35 min)**

19. **Collaborate** → **Interference Check** → **Run Interference Check**

**Set 1: MEP-M vs Structure**

20. **Selection A:**
    - Categories from: `Hospital_MEP_M.rvt`
    - Categories: ☑ Ducts, Duct Fittings, Mechanical Equipment

21. **Selection B:**
    - Categories from: `Hospital_STR.rvt`
    - Categories: ☑ Structural Framing, Structural Columns

22. Tolerance: `0 mm` (hard clashes only)
23. **Save Settings:** `Set1_MEP-M_vs_STR.interference`

**Set 2: MEP-M vs MEP-E**

24. **Selection A:** Ducts (from MEP-M)
25. **Selection B:** Cable Trays, Conduits (from MEP-E)
26. Tolerance: `50 mm` (soft clashes - verificar clearance)
27. **Save Settings:** `Set2_MEP-M_vs_MEP-E.interference`

**Set 3: MEP-S vs Structure**

28. **Selection A:** Pipes (from MEP-S)
29. **Selection B:** Structural Framing, Columns (from STR)
30. Tolerance: `0 mm`
31. **Save Settings:** `Set3_MEP-S_vs_STR.interference`

**Set 4: All MEP Systems Inter-Clash**

32. **Selection A:** Ducts (MEP-M)
33. **Selection B:** Pipes (MEP-S)
34. Tolerance: `0 mm`
35. **Save Settings:** `Set4_MEP-M_vs_MEP-S.interference`

**Parte E: Ejecutar Clash Detection y Generar Reporte (30 min)**

36. Ejecutar los 4 sets configurados
37. **Interference Report** - Analizar resultados:
    - Total clashes encontrados (documentar número)
    - Clasificar por severidad (crítico, alto, medio, bajo)

38. **Para cada clash crítico (máximo 10):**
    - Click **Show** para visualizar
    - Capturar screenshot
    - Asignar responsable (ej. "MEP-M Designer")
    - Agregar comment con solución propuesta

39. **Exportar reporte:**
    - **Export** → HTML format
    - ☑ Include images
    - Save as: `Hospital_Clash_Report_2024-11-23.html`

**Parte F: Crear Coordination Views por Zona (20 min)**

40. Crear vistas 3D para zonas críticas:

   **Vista 1:** `3D - COORD - Mechanical Room Ground Floor`
   - Section box: Solo mechanical room
   - Template: `COORD - Mechanical Room Detail`

   **Vista 2:** `3D - COORD - Vertical Shaft Grid B-3`
   - Section box: Shaft vertical (8 pisos)
   - Rotar vista para ver interior de shaft

   **Vista 3:** `3D - COORD - Level 4 Ceiling Plenum`
   - Section box: Plenum entre Level 4 y Level 5 slab
   - Mostrar todo MEP en plenum

41. Aplicar view templates correspondientes

### Entregables

- Archivo `Hospital_COORDINATION.rvt` con:
  - 5 links configurados
  - Worksets asignados
  - 3 View Templates creados
  - 4 Clash Detection Sets guardados
- Reporte HTML de clashes con imágenes
- 3 Vistas de coordinación por zona (PDF)
- Documento Excel con:
  - Lista de clashes críticos
  - Responsables asignados
  - Soluciones propuestas

### Criterios de Evaluación

- Links correctamente vinculados (15%)
- Worksets configurados profesionalmente (10%)
- View Templates funcionales y bien configurados (20%)
- Clash Detection Sets lógicos y completos (20%)
- Reporte de clashes detallado (20%)
- Vistas de coordinación claras y útiles (10%)
- Documentación profesional (5%)

---

## Ejercicio 5: Clash Detection y Resolución Sistemática

**Objetivo:** Ejecutar clash detection completo, clasificar interferencias por severidad, resolver 5 clashes críticos y documentar soluciones.

### Contexto

Edificio industrial con sistemas MEP complejos:
- Nave principal 40m × 60m × 12m altura
- Mechanical mezzanine con equipos principales
- Red de ductos de proceso (alta temperatura)
- Cable trays extensos para controles
- Tubería de proceso (vapor, agua de enfriamiento)

**Problema:** Diseño preliminar tiene 87 clashes detectados. Cliente requiere resolución antes de CD (Construction Documents).

### Tareas

**Parte A: Configurar y Ejecutar Clash Detection (30 min)**

1. Abrir coordination model: `Industrial_COORD.rvt`

2. **Reload all links** para asegurar modelos actualizados

3. Configurar **5 clash detection sets:**

   **Set 1: High-Temp Ducts vs Structure**
   - A: High-temp process ducts (> 250°C)
   - B: Structural steel
   - Tolerance: 0mm
   - **Crítico:** Ducts de alta temp no pueden tocar acero (expansión térmica)

   **Set 2: Ducts vs Cable Trays**
   - A: All ducts (MEP-M)
   - B: Cable trays (MEP-E)
   - Tolerance: 100mm
   - **Razón:** NEC requiere mínimo 100mm clearance entre ductos y electrical

   **Set 3: Pipes vs Ducts**
   - A: Process piping (steam, cooling water)
   - B: HVAC ducts
   - Tolerance: 50mm

   **Set 4: Equipment vs Structure**
   - A: Mechanical equipment (chillers, pumps, air handlers)
   - B: Structural columns, beams
   - Tolerance: 0mm

   **Set 5: Clearance Check - Mechanical Mezzanine**
   - A: All MEP systems
   - B: Architectural floors, walls
   - Tolerance: 150mm
   - **Razón:** Verificar clearance mínimo para acceso de mantenimiento

4. **Ejecutar los 5 sets** (toma 3-5 min total)

5. **Documentar resultados iniciales:**

| Set | Clashes Encontrados | Críticos | Altos | Medios | Bajos |
|-----|---------------------|----------|-------|--------|-------|
| Set 1 | 23 | 12 | 8 | 3 | 0 |
| Set 2 | 31 | 5 | 15 | 11 | 0 |
| Set 3 | 18 | 3 | 10 | 5 | 0 |
| Set 4 | 9 | 9 | 0 | 0 | 0 |
| Set 5 | 6 | 2 | 4 | 0 | 0 |
| **Total** | **87** | **31** | **37** | **19** | **0** |

**Parte B: Clasificar y Priorizar Clashes (25 min)**

6. **Exportar todos los clashes** a Excel:
   - Interference Report → Export → Tab delimited
   - Abrir en Excel

7. **Agregar columnas de clasificación:**
   - **Priority** (P1-P4)
   - **Severity** (Critical, High, Medium, Low)
   - **Impact** (Constructibility, Code, Cost, Schedule)
   - **Responsible Party** (MEP-M, MEP-E, STR, Joint)

8. **Clasificar los 31 clashes críticos:**

**Criterios de prioridad:**

**P1 (Priority 1) - Resolver inmediatamente:**
- Equipment vs structure (no construible)
- High-temp ducts vs steel (riesgo de seguridad)
- Code violations (< 100mm duct-to-electrical)

**P2 (Priority 2) - Resolver esta semana:**
- Main ducts vs cable trays
- Process piping vs structure

**P3 (Priority 3) - Resolver antes de CD:**
- Branch ducts vs secondary structure
- Clearance violations menores

**P4 (Priority 4) - Resolver en coordinación:**
- Soft clashes resolvibles en campo

9. **Identificar 5 clashes P1 para resolver en este ejercicio:**

   **Clash 1:** Chiller CH-01 intersecta columna W14x90
   **Clash 2:** High-temp duct Ø800 toca viga W21x44 en grid B-4
   **Clash 3:** Cable tray 600mm width a 30mm de supply duct (requiere 100mm)
   **Clash 4:** Steam pipe DN 150 atraviesa losa sin sleeve
   **Clash 5:** Air handler AHU-02 sin clearance de mantenimiento (0.5m al muro, requiere 1.0m)

**Parte C: Resolver Clash 1 - Chiller vs Columna (20 min)**

10. **Analizar clash:**
    - **Show** clash en modelo 3D
    - Chiller 3.5m × 1.8m × 2.2m height
    - Columna W14x90 en grid C-3
    - Intersección: 400mm overlap

11. **Opciones de solución:**
    - **Opción A:** Mover chiller 500mm al este
    - **Opción B:** Mover columna (requiere aprobación estructural)
    - **Opción C:** Cambiar a chiller más compacto (menor capacidad)

12. **Decisión:** Opción A - Mover chiller
    - **Verificar:** Nueva posición no crea nuevos clashes
    - **Check:** Espacio suficiente para conexiones de tuberías
    - **Check:** Clearance de mantenimiento (1.5m en todos los lados)

13. **Implementar:**
    - Abrir `Industrial_MEP_M.rvt`
    - Seleccionar Chiller CH-01
    - **Move** → 500mm al este
    - Verificar conexiones de tuberías (puede requerir re-route)
    - **Save**

14. **Documentar:**
    - Status: **Resolved**
    - Solution: "Chiller CH-01 relocated 500mm east to grid C-3.5, clears column W14x90"
    - Date: 2024-11-23
    - Resolved by: [Tu nombre]

**Parte D: Resolver Clash 2 - High-Temp Duct vs Viga (25 min)**

15. **Analizar clash:**
    - High-temp duct Ø800 (250°C) toca viga W21x44
    - Ubicación: Grid B-4, elevation 6.5m
    - **Crítico:** Contacto causa transferencia de calor al acero

16. **Opciones:**
    - **Opción A:** Re-route duct para pasar SOBRE viga (+600mm arriba)
    - **Opción B:** Re-route para pasar al LADO de viga (+800mm horizontal)
    - **Opción C:** Install thermal insulation barrier (sleeve de aislamiento)

17. **Decisión:** Opción A - Pasar sobre viga
    - **Ventaja:** Ruta más corta, menos pérdida de carga
    - **Desventaja:** Consume 600mm de altura adicional

18. **Verificar restricciones:**
    - Clearance a losa superior: Debe ser ≥ 300mm
    - Losa superior en elevation 8.0m
    - Nueva elevación de duct: 6.5m + 0.6m = 7.1m
    - Clearance = 8.0m - 7.1m - 0.4m (radio duct) = **0.5m ✓** (suficiente)

19. **Implementar:**
    - Abrir `Industrial_MEP_M.rvt`
    - Seleccionar segment de duct en clash
    - **Modify** → **Move** vertical
    - Subir 600mm
    - Ajustar transitions antes/después del offset
    - **Save**

20. **Documentar:**
    - Status: **Resolved**
    - Solution: "High-temp duct Ø800 rerouted 600mm up to pass over W21x44 beam at B-4. Verified 500mm clearance to slab above."
    - Sketch: Crear coordination sketch mostrando elevación

**Parte E: Resolver Clash 3 - Cable Tray vs Duct (20 min)**

21. **Analizar clash:**
    - Cable tray 600mm width a 30mm de supply duct
    - NEC requiere **mínimo 100mm** clearance
    - Deficit: 70mm

22. **Opciones:**
    - **Opción A:** Mover cable tray 100mm lateralmente
    - **Opción B:** Mover duct 100mm
    - **Opción C:** Coordinate routing - cable tray arriba, duct abajo (vertical separation)

23. **Decisión:** Opción C - Vertical separation
    - **Razón:** Routing horizontal restringido, mejor usar separación vertical

24. **Implementar:**
    - Cable tray elevation actual: 3.8m
    - Duct elevation actual: 3.7m
    - **Subir cable tray** a 4.2m → clearance vertical = 400mm ✓

25. **Verificar:**
    - Cable tray no choca con estructura arriba
    - Acceso de mantenimiento a cable tray mantenido

26. **Documentar:**
    - Status: **Resolved**
    - Solution: "Cable tray CT-SA-01 raised from 3.8m to 4.2m elevation, achieving 400mm vertical clearance to duct below (NEC compliant)"

**Parte F: Resolver Clash 4 - Steam Pipe vs Losa (15 min)**

27. **Analizar clash:**
    - Steam pipe DN 150 atraviesa losa de concreto
    - **NO HAY sleeve modelado** (clash válido que requiere sleeve)

28. **Solución:** Modelar sleeve

29. **Implementar:**
    - Load family: `Pipe Sleeve.rfa`
    - Size: DN 250 (2× pipe size para aislamiento)
    - Colocar sleeve en punto de penetración
    - Verificar orientación vertical

30. **Documentar:**
    - Status: **Approved** (clash permanece pero con solución)
    - Solution: "DN 250 sleeve installed per MEP-S detail 3/S-501. Coordinate with GC for sleeve placement before slab pour."
    - **NO marcar como Resolved** (el clash sigue existiendo, pero está aprobado con sleeve)

**Parte G: Resolver Clash 5 - AHU Clearance (15 min)**

31. **Analizar clash:**
    - AHU-02 a 0.5m de muro
    - ASHRAE requiere 1.0m minimum para acceso de mantenimiento

32. **Opciones:**
    - **Opción A:** Mover AHU 0.6m alejándolo del muro
    - **Opción B:** Cambiar orientación de AHU (acceso desde lado opuesto)

33. **Decisión:** Opción A - Mover AHU

34. **Implementar:**
    - Mover AHU-02 hacia centro de mechanical room
    - Verificar que nuevas conexiones de ductos son viables
    - Verificar clearance en TODOS los lados (1.0m mínimo)

35. **Documentar:**
    - Status: **Resolved**
    - Solution: "AHU-02 relocated 600mm toward room center, now 1.1m clearance to wall (ASHRAE 62.1 compliant for maintenance access)"

**Parte H: Re-Ejecutar Clash Detection (15 min)**

36. Reload all links (modelos actualizados con soluciones)

37. Re-ejecutar los 5 clash detection sets

38. **Verificar resultados:**

| Set | Antes | Después | Resueltos |
|-----|-------|---------|-----------|
| Set 1 | 23 | 18 | 5 (incluye Clash 2) |
| Set 2 | 31 | 28 | 3 (incluye Clash 3) |
| Set 3 | 18 | 18 | 0 |
| Set 4 | 9 | 8 | 1 (Clash 1) |
| Set 5 | 6 | 4 | 2 (Clash 5 + otro) |
| **Total** | **87** | **76** | **11** |

39. **Confirmar:** Los 5 clashes resueltos NO aparecen en nuevo reporte

**Parte I: Generar Reporte Final (20 min)**

40. **Exportar HTML report:**
    - Include images: ☑
    - Group by: **Priority**
    - Filename: `Industrial_Clash_Report_RESOLVED_2024-11-23.html`

41. **Crear documento de resolución:**

**Template de documentación:**

```
CLASH RESOLUTION REPORT
Project: Industrial Building MEP
Date: 2024-11-23
Resolved by: [Nombre]

SUMMARY:
- Total Clashes Detected: 87
- Resolved This Session: 11
- Remaining: 76
  - Priority 1: 26 (down from 31)
  - Priority 2: 35
  - Priority 3: 15

CLASHES RESOLVED (Details):

1. Clash ID: C-004 - Chiller vs Column
   Severity: Critical (P1)
   Elements: CH-01 (Chiller) / W14x90 Column Grid C-3
   Solution: Chiller relocated 500mm east
   Status: RESOLVED
   Verification: No new clashes created
   Coordination Drawing: SK-MEP-M-023

2. Clash ID: C-012 - High-Temp Duct vs Beam
   Severity: Critical (P1)
   Elements: High-temp duct Ø800 / W21x44 Beam Grid B-4
   Solution: Duct rerouted 600mm up, passes over beam
   Status: RESOLVED
   Clearance verified: 500mm to slab above
   Coordination Drawing: SK-MEP-M-024

[... continuar para los 5 clashes...]

NEXT STEPS:
1. Coordinate with electrical on remaining cable tray clashes (P2)
2. Structural review of beam penetration sleeves required (P2)
3. Schedule coordination meeting for mechanical mezzanine clashes (P2)
4. Target: Resolve all P1 clashes by end of week
5. Target: Resolve all P2 clashes before CD submittal (2 weeks)
```

42. Incluir **sketches de coordinación** para cada clash resuelto

### Entregables

- Archivo Revit con 5 clashes resueltos
- Reporte HTML de clashes (antes y después)
- Documento de resolución (formato arriba) en Word/PDF
- 5 Coordination sketches (elevaciones/secciones mostrando soluciones)
- Excel con matriz de clashes clasificados

### Criterios de Evaluación

- Clash detection correctamente configurado (15%)
- Clasificación de clashes lógica y completa (15%)
- 5 Clashes P1 correctamente resueltos (40%)
- Verificación de que soluciones no crean nuevos clashes (10%)
- Documentación profesional y completa (15%)
- Coordination sketches claros (5%)

---

## Ejercicio 6: Conversión a Fabrication y Generación de CAM Files

**Objetivo:** Convertir sistema HVAC completo a fabrication parts, configurar gauges y materiales, agregar hangers, y generar flat patterns para fabricación.

### Contexto

Proyecto comercial con sistema VAV:
- Main supply duct: 1200x600mm (48"x24")
- Branch ducts: 600x300 a 300x150mm
- Round ducts a terminales: Ø200-300mm
- Material: Galvanized steel
- Estándar: SMACNA HVAC Duct Construction Standards

Cliente solicita **modelo LOD 400** para licitación con fabricantes. Requiere:
- Fabrication parts con gauges correctos
- Soportes (hangers) cada 3m
- Flat patterns exportables para cortadoras CNC
- Estimación precisa de peso de chapa

### Tareas

**Parte A: Configurar Fabrication Service (15 min)**

1. Abrir modelo: `Commercial_MEP_M.rvt`

2. **Manage** → **MEP Settings** → **Fabrication Settings**

3. **Cargar service:**
   - Click **Browse**
   - Seleccionar: `US Imperial SMACNA.xml`
     (Ruta: `C:\ProgramData\Autodesk\RVT 2026\Libraries\US\Fabrication\`)
   - Click **Open**

4. **Configurar opciones:**
   - Units: **Imperial** (inches)
   - Database path: Verificar default path correcto
   - **Hangers:**
     - ☑ Automatically add hangers
     - Support spacing: `10 ft` (3.05m - SMACNA estándar)
     - Hanger type: `Trapeze Hanger`
   - **Insulation:**
     - Default thickness: `1"` (25mm)
     - Type: `Fiberglass`

5. Click **OK** → Service cargado

6. **Verificar service activo:**
   - **View** → **Properties** → Fabrication Service: `US Imperial SMACNA`

**Parte B: Convertir Design Ducts a Fabrication Parts (30 min)**

7. En vista 3D, **Select All Ducts:**
   - **Filter** → Category: **Ducts**
   - Click **OK**
   - Todos los design ducts seleccionados (~120 segments)

8. **Convert to Fabrication:**
   - **Modify | Ducts** → **Convert to Fabrication**
   - **Convert to Fabrication Parts** dialog aparece

9. **Configurar mapping:**

   **Service:** `US Imperial SMACNA`

   **Specification:** `Rectangular Duct - TDC` (Transverse Duct Connection)

   **Material mapping:**

   | Design Duct Size | Fabrication Part | Gauge (SMACNA) |
   |------------------|------------------|----------------|
   | 1200x600mm (48"x24") | Rectangular Duct 48"x24" | 18 GA |
   | 900x450mm (36"x18") | Rectangular Duct 36"x18" | 20 GA |
   | 600x300mm (24"x12") | Rectangular Duct 24"x12" | 22 GA |
   | 300x150mm (12"x6") | Rectangular Duct 12"x6" | 24 GA |

   **Round duct mapping:**

   | Design Duct Diameter | Fabrication Part | Gauge |
   |---------------------|------------------|-------|
   | Ø300mm (12") | Round Spiral Duct 12" | 24 GA |
   | Ø250mm (10") | Round Spiral Duct 10" | 26 GA |
   | Ø200mm (8") | Round Spiral Duct 8" | 26 GA |

10. **Default settings:**
    - Material: **Galvanized Steel**
    - Connection: **TDC (Transverse Duct Connection)**
    - Insulation: **None** (se agregará después si necesario)

11. Click **OK** → Conversión ejecuta (15-30 segundos)

12. **Verificar conversión:**
    - Design ducts desaparecen
    - Fabrication parts aparecen en mismas ubicaciones
    - Zoom in en un ducto → verificar que se ven **flanges** y **stiffeners** en 3D

**Parte C: Revisar y Ajustar Gauges (25 min)**

13. **Verificar gauges según SMACNA:**

**SMACNA Table para ductos rectangulares:**

| Size Range | Pressure Class | Minimum Gauge |
|------------|----------------|---------------|
| 48"x24" (1200x600) | 2" w.g. | 18 GA (1.22mm) |
| 36"x18" (900x450) | 2" w.g. | 20 GA (0.91mm) |
| 24"x12" (600x300) | 2" w.g. | 22 GA (0.76mm) |
| 12"x6" (300x150) | 2" w.g. | 24 GA (0.61mm) |

14. **Seleccionar main supply duct** (48"x24")

15. **Properties:**
    - Gauge: Verificar que es **18 GA**
    - Si es incorrecto (ej. 20 GA), cambiar a **18 GA**
    - Weight: Revit recalcula automáticamente

16. **Crear schedule de verificación:**
    - **View** → **Schedules** → **Schedule/Quantities**
    - Category: **Fabrication Ductwork**
    - Name: `Fabrication Duct Gauge Verification`

17. **Campos:**
    - Size
    - Length
    - Material
    - Gauge
    - Weight

18. **Sort by:** Size (Descending) → ductos grandes primero

19. **Revisar schedule:**
    - Verificar que todos los ductos grandes (> 36") son ≤ 20 GA
    - Ajustar gauges incorrectos

**Parte D: Convertir Fittings a Fabrication (20 min)**

20. **Select All Duct Fittings:**
    - **Filter** → Category: **Duct Fittings**
    - ~45 fittings seleccionados

21. **Convert to Fabrication:**
    - **Modify | Duct Fittings** → **Convert to Fabrication**

22. **Configurar:**
    - Service: `US Imperial SMACNA`
    - **Elbow specification:** `90° Elbow - 5-Gore` (5 gajos para radio largo)
    - **Tee specification:** `Tee - Straight Through`
    - Gauge: Match connected duct (automático)

23. Click **OK**

24. **Verificar fittings:**
    - Zoom in en codo 90° → verificar que se ven **5 gores** (gajos)
    - Verificar que **flanges** aparecen en extremos

**Parte E: Agregar Hangers Automáticamente (25 min)**

25. **Select All Horizontal Ducts:**
    - En vista 3D, seleccionar ductos horizontales
    - **Filter** → Fabrication Ductwork
    - Excluir ductos verticales (risers)

26. **Generate Hangers:**
    - **Systems** → **Generate Fabrication** → **Add Hanger**
    - **Add Hanger** dialog:

      **Hanger type:** `Trapeze Hanger`

      **Spacing:** `10 ft` (3.05m - SMACNA max spacing)

      **Rod size:** `3/8"` (M10)

      **Offset from ceiling:** `24"` (600mm)

      **Material:** `Galvanized Steel`

27. Click **OK**

28. **Resultado:**
    - Trapeze hangers aparecen cada 3m a lo largo de ductos
    - Total hangers agregados: ~65 piezas

29. **Ajustar hangers en zonas especiales:**

    **Zona 1: Cerca de equipos**
    - Seleccionar hangers a <1m de AHU
    - **Delete** (equipos se soportan independientemente)

    **Zona 2: Near beams**
    - Seleccionar hangers
    - **Move** para alinear con vigas estructurales (mejor práctica)
    - Rod length se ajusta automáticamente

**Parte F: Agregar Insulation (15 min)**

30. **Select Main Supply Ducts** (requieren aislamiento)

31. **Add Insulation:**
    - **Modify | Fabrication Parts** → **Add Insulation**
    - **Insulation** dialog:
      - Type: **Fiberglass**
      - Thickness: `2"` (50mm)
      - Jacket: **Aluminum**
      - Jacket thickness: `0.016"` (0.4mm)

32. Click **OK**

33. **Visualizar:**
    - Detail Level: **Fine**
    - Ductos ahora muestran capa de aislamiento exterior
    - Color diferente para jacket

34. **Verificar Weight update:**
    - Seleccionar ducto aislado
    - **Properties** → Weight: Aumentó (incluye insulation + jacket)

**Parte G: Schedule de Materiales Completo (30 min)**

35. **Crear schedule de takeoff:**
    - **View** → **Schedules** → **Schedule/Quantities**
    - Category: **Fabrication Ductwork**
    - Name: `Fabrication Material Takeoff - Complete`

36. **Agregar campos:**
    - Item Number
    - Service
    - Product Entry
    - Size
    - Length (para straight ducts)
    - Material
    - Gauge
    - Insulation Thickness
    - Weight (individual)
    - Area (sheet metal area)

37. **Sorting/Grouping:**
    - Sort by: `Material`
    - Then by: `Gauge`
    - Then by: `Size` (Descending)
    - ☑ Grand totals

38. **Formatting:**
    - Weight: Calculate totals ☑
    - Area: Calculate totals ☑

39. **Revisar schedule:**

**Ejemplo de output esperado:**

| Material | Gauge | Size | Qty | Total Weight (lb) | Total Area (ft²) |
|----------|-------|------|-----|-------------------|------------------|
| Galv Steel | 18 GA | 48x24 | 8 segments | 850 | 245 |
| Galv Steel | 20 GA | 36x18 | 15 segments | 620 | 310 |
| Galv Steel | 22 GA | 24x12 | 45 segments | 980 | 485 |
| Galv Steel | 24 GA | 12x6 | 32 segments | 285 | 180 |
| **TOTAL** | | | **120** | **2,735 lb** | **1,220 ft²** |

40. **Exportar schedule:**
    - **File** → **Export** → **Reports** → **Schedule**
    - Format: Tab delimited
    - Save as: `Fabrication_Takeoff.txt`

41. Abrir en Excel y crear tabla pivot para estimación

**Parte H: Generar Flat Patterns (CAM Output) (30 min)**

42. **Seleccionar ducto main (48"x24")** para exportar flat pattern

43. **Export Single Flat Pattern:**
    - **Modify | Fabrication Parts** → **Export Flat Pattern**
    - **Export Flat Pattern** dialog:
      - Format: **DXF** (AutoCAD compatible)
      - Scale: **1:1** (full scale)
      - ☑ Include bend lines
      - ☑ Include labels (part number, orientation)
      - ☑ Include hole patterns (bolt holes para flanges)

44. Save as: `FabDuct_Main_48x24_Segment_001.dxf`

45. **Verificar DXF:**
    - Abrir en AutoCAD o visor DXF
    - Verificar que muestra:
      - Outline de chapa a cortar
      - Bend lines (líneas de doblez)
      - Hole patterns para tornillos
      - Part number label

46. **Export ALL Flat Patterns (Batch):**
    - **Modify | Fabrication Parts** → **Export All Flat Patterns**
    - **Export All** dialog:
      - Destination folder: `C:\Fabrication\Flat_Patterns\`
      - Format: DXF
      - Naming: **Auto-number** (Part_001.dxf, Part_002.dxf, etc.)
      - ☑ Create index file (CSV con lista de todos los parts)

47. Click **OK**

48. **Resultado:**
    - ~120 archivos DXF generados (uno por cada straight duct segment)
    - Archivo `Index.csv` con mapping:
      ```
      File, Part Number, Size, Length, Material, Gauge
      Part_001.dxf, DUCT-001, 48x24, 10ft, Galv Steel, 18GA
      Part_002.dxf, DUCT-002, 48x24, 8ft, Galv Steel, 18GA
      ...
      ```

**Parte I: Crear Coordination Drawings (20 min)**

49. **Crear sección de fabricación:**
    - **View** → **Section**
    - Cortar a través de main duct run
    - Detail Level: **Fine**
    - Name: `Section - Main Duct Fabrication Details`

50. **Anotar detalles:**
    - **Dimension** → Dimensionar:
      - Duct sizes
      - Hanger spacing (verificar 10 ft max)
      - Clearances a estructura

    - **Tag** → Etiquetar:
      - Fabrication parts con Item Numbers
      - Hangers con tipos

51. **Crear detail callout:**
    - **Callout** → Detail view de conexión TDC
    - Scale: 1:5 (detalle ampliado)
    - Mostrar:
      - TDC flange details
      - Bolt spacing
      - Gasket location

52. **Crear Sheet:**
    - **View** → **Sheets** → **New Sheet**
    - Title: `M-401 - HVAC Ductwork Fabrication Details`
    - Colocar:
      - Section view
      - Detail callout
      - Fabrication takeoff schedule

**Parte J: Verificación Final (15 min)**

53. **Checklist de verificación:**

    - ☐ Todos los ducts convertidos a fabrication parts
    - ☐ Gauges correctos según SMACNA verificados
    - ☐ Fittings convertidos con gauges matching
    - ☐ Hangers agregados con spacing ≤ 10 ft
    - ☐ Insulation agregada a ducts principales
    - ☐ Schedule de materiales completo con totales
    - ☐ Flat patterns exportados (batch completo)
    - ☐ Index.csv generado correctamente
    - ☐ Coordination drawings creados
    - ☐ Item Numbers asignados a todos los parts

54. **Run Clash Detection** (verificar que conversión no creó clashes)

55. **Guardar modelo final:**
    - **Save As:** `Commercial_MEP_M_FABRICATION_LOD400.rvt`

### Entregables

- Archivo Revit con sistema completo en fabrication parts
- Schedule de materiales (Revit + Excel)
- Carpeta con flat patterns DXF (120 archivos)
- Index.csv con mapping de parts
- Sheet M-401 con coordination drawings
- Documento PDF con:
  - Gauge verification table
  - Material summary (total weight, area, cost estimate)
  - Hanger schedule

### Criterios de Evaluación

- Conversión correcta a fabrication parts (20%)
- Gauges correctos según SMACNA (20%)
- Hangers agregados con spacing correcto (15%)
- Schedule de materiales completo y preciso (15%)
- Flat patterns exportados correctamente (15%)
- Coordination drawings profesionales (10%)
- Documentación completa (5%)

---

## Conclusión de Ejercicios - Módulo 5

Estos 6 ejercicios cubren las habilidades esenciales de **documentación y coordinación MEP profesional**:

1. ✅ Schedules avanzados con parámetros compartidos y campos calculados
2. ✅ Etiquetado masivo eficiente con nomenclatura consistente
3. ✅ Coordinación multidisciplinaria con Copy/Monitor y Coordination Review
4. ✅ Coordination Models complejos con múltiples disciplinas
5. ✅ Clash Detection sistemático con resolución documentada
6. ✅ Preparación completa de modelos para fabricación LOD 400

**Tiempo total estimado:** 12-14 horas de trabajo práctico

**Habilidades adquiridas:**
- Documentación BIM profesional nivel LOD 300-400
- Coordinación multidisciplinaria efectiva
- Resolución sistemática de interferencias
- Preparación de entregables para fabricantes
- Flujos de trabajo BIM-to-Fabrication

---

**DISTMAH Universidad Autodesk - Revit MEP 2026 Mecánicas - Módulo 5 Completo**
