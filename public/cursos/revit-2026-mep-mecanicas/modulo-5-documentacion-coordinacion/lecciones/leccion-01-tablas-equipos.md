# Lección 1: Tablas de Equipos MEP

## Introducción

Las **tablas de equipos** (schedules) son fundamentales en la documentación de proyectos MEP, permitiendo extraer información cuantificada directamente del modelo BIM. En Revit MEP 2026, las schedules pueden incluir **parámetros compartidos**, **fórmulas calculadas**, **filtros condicionales** y formateo profesional para entregas a clientes, contratistas y fabricantes.

Esta lección cubre la creación de schedules personalizados para equipos HVAC, ductos, accesorios de ducto, rejillas/difusores y tuberías mecánicas.

## Tipos de Schedules en MEP

### 1. Schedules de Equipos (Equipment Schedules)

**Categorías típicas:**
- **Mechanical Equipment** - Manejadoras, fan coils, calderas, chillers
- **Air Terminals** - Rejillas, difusores, extractores
- **Mechanical Equipment** (pumps) - Bombas hidronicas

**Campos típicos:**
- Family and Type
- Mark (número de equipo)
- Level
- Flow (caudal de aire o agua)
- Electrical Data (voltaje, fases, potencia)
- Manufacturer / Model
- Notes / Comments

### 2. Schedules de Ductos (Duct Schedules)

**Categorías:**
- **Ducts** - Ductos principales
- **Duct Fittings** - Codos, tees, transiciones
- **Duct Accessories** - Dampers, VAV boxes, filtros

**Campos típicos:**
- System Name
- Size (dimensiones)
- Length
- Flow
- Velocity
- Insulation Thickness
- Material (chapa galvanizada, fibra de vidrio)

### 3. Schedules de Tuberías (Pipe Schedules)

**Categorías:**
- **Pipes** - Tuberías de agua fría/caliente
- **Pipe Fittings** - Codos, tees, reducciones
- **Pipe Accessories** - Válvulas, bombas, filtros

**Campos típicos:**
- System Name
- Size (diámetro nominal)
- Length
- Flow
- Velocity
- Material (cobre, acero, PEX)
- Insulation

## Crear Schedule de Equipos Mecánicos

### Procedimiento Paso a Paso

**Paso 1: Iniciar Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. En **New Schedule** dialog:
   - Category: **Mechanical Equipment**
   - Name: `HVAC Equipment Schedule`
   - Phase: **New Construction** (o según proyecto)
3. Click **OK**

**Paso 2: Agregar Campos (Fields)**

En **Schedule Properties** → **Fields** tab:

**Agregar en orden:**
1. **Family and Type** - Tipo de equipo
2. **Mark** - Número de equipo (ej. AHU-01, FCU-02)
3. **Level** - Nivel donde se ubica
4. **Room** - Espacio que sirve
5. **Flow** - Caudal de aire (L/s o CFM)
6. **Total Cooling Capacity** - Capacidad de enfriamiento (kW o BTU/h)
7. **Electrical Data: Apparent Load** - Carga eléctrica (kVA)
8. **Electrical Data: Voltage** - Voltaje (V)
9. **Electrical Data: Number of Poles** - Fases (1φ o 3φ)
10. **Manufacturer** - Fabricante
11. **Model** - Modelo
12. **Comments** - Notas

**Paso 3: Ordenar (Sorting/Grouping)**

En **Sorting/Grouping** tab:

- **Sort by:** `Level` (Ascending)
  - ☑ Header
  - ☑ Blank line
- **Then by:** `Mark` (Ascending)
- ☑ **Itemize every instance** (mostrar cada equipo individual)

**Paso 4: Filtrar (Filter)**

En **Filter** tab (opcional):

Ejemplo: Mostrar solo equipos de nivel Mechanical Roof:
- Filter by: `Level`
- Equals: `Mechanical Roof`

**Paso 5: Formateo (Formatting)**

En **Formatting** tab, para cada campo:

**Field: Flow**
- Heading: `Airflow`
- Heading orientation: **Horizontal**
- Alignment: **Right**
- Field Format: Click **[...]**
  - Use project settings: ☐
  - Units: **Liters/second**
  - Rounding: **1 decimal**

**Field: Total Cooling Capacity**
- Heading: `Cooling (kW)`
- Alignment: **Right**
- Field Format:
  - Units: **Kilowatts**
  - Rounding: **1 decimal**

**Paso 6: Apariencia (Appearance)**

En **Appearance** tab:

- Grid lines: **Thin Lines**
- Outline: **Medium Lines**
- ☑ **Bold - Title, Headers, Totals**
- Title text: **3.5 mm**
- Body text: **2.5 mm**

Click **OK** para crear el schedule.

![Schedule de Equipos Mecánicos](../imagenes/mod5-schedule-equipos-mecanicos.png)

## Parámetros Compartidos (Shared Parameters)

Los **shared parameters** permiten agregar datos personalizados a familias que luego aparecen en schedules.

### Crear Parámetro Compartido: "Número de Serie"

**Paso 1: Abrir Shared Parameters**

1. **Manage** → **Settings** → **Shared Parameters**
2. Click **Create...** para nuevo archivo (si no existe):
   - Guardar como: `C:\BIM\SharedParameters-MEP.txt`

**Paso 2: Crear Grupo de Parámetros**

1. Click **New...** en **Groups**
2. Name: `Equipment Data`
3. Click **OK**

**Paso 3: Crear Parámetro**

1. Seleccionar grupo `Equipment Data`
2. Click **New...** en **Parameters**
3. **Parameter Properties:**
   - Name: `Serial Number`
   - Discipline: **Common**
   - Type: **Text**
   - Group parameter under: **Identity Data**
4. Click **OK**

**Paso 4: Agregar a Proyecto**

1. En **Shared Parameters** dialog, click **OK**
2. **Manage** → **Project Parameters**
3. Click **Add...**
4. ☑ **Shared parameter**
5. Click **Select...** → elegir `Serial Number`
6. **Parameter Data:**
   - Categories: ☑ **Mechanical Equipment**
   - Group parameter under: **Identity Data**
   - ☐ Type (debe ser **Instance**)
7. Click **OK**

**Ahora** el parámetro `Serial Number` está disponible en equipos y en schedules.

## Campos Calculados (Calculated Values)

Los **calculated values** permiten crear columnas con **fórmulas** basadas en otros parámetros.

### Ejemplo: Calcular Área de Ducto (m²)

**Escenario:** Schedule de ductos rectangulares, calcular área de chapa requerida.

**Paso 1: Crear Schedule de Ductos**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Ducts**
3. Name: `Duct Schedule - Sheet Metal Area`

**Paso 2: Agregar Campos**

- System Name
- Size (dimensiones)
- Length
- **(nuevo) Sheet Metal Area** - campo calculado

**Paso 3: Crear Campo Calculado**

1. En **Fields** tab, click **Calculated Value...**
2. **Calculated Value** dialog:
   - Name: `Sheet Metal Area`
   - Discipline: **Common**
   - Type: **Area**
   - Formula: `(Width + Height) * 2 * Length`

     **Explicación:**
     - Perímetro del ducto rectangular: `(Width + Height) * 2`
     - Área total: Perímetro × Longitud

3. Click **OK**

**Paso 4: Formatear**

En **Formatting** tab, seleccionar `Sheet Metal Area`:
- Heading: `Area (m²)`
- Alignment: **Right**
- Calculate totals: ☑ (sumar total)
- Field Format:
  - Units: **Square Meters**
  - Rounding: **2 decimals**

**Resultado:**
Schedule muestra área de chapa por ducto y **total acumulado** para estimación de materiales.

![Schedule con Campo Calculado](../imagenes/mod5-schedule-campo-calculado.png)

## Fórmulas Condicionales (IF Statements)

Revit permite **fórmulas condicionales** en campos calculados.

### Ejemplo: Clasificar Equipos por Caudal

**Objetivo:** Agregar columna "Size Category" según caudal de aire.

**Clasificación:**
- Caudal < 2000 L/s → "Small"
- Caudal 2000-8000 L/s → "Medium"
- Caudal > 8000 L/s → "Large"

**Procedimiento:**

1. En schedule de equipos, **Calculated Value...**
2. Name: `Size Category`
3. Type: **Text**
4. Formula:
   ```
   if(Flow < 2000 L/s, "Small", if(Flow < 8000 L/s, "Medium", "Large"))
   ```

**Sintaxis:**
```
if(condición, valor_verdadero, valor_falso)
```

**Uso:** Filtrar/agrupar equipos por categoría de tamaño.

## Schedule Keys (Listas de Selección)

Los **schedule keys** crean **listas predefinidas** de valores para selección rápida.

### Ejemplo: Lista de Fabricantes de Equipos

**Paso 1: Crear Key Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. ☑ **Schedule Keys**
3. Category: **Mechanical Equipment**
4. Name: `Equipment Manufacturers`
5. Key name: `Manufacturer`

**Paso 2: Definir Valores**

En el schedule creado, agregar filas con fabricantes típicos:

| Manufacturer |
|--------------|
| Carrier      |
| Trane        |
| York         |
| Daikin       |
| Johnson Controls |

**Paso 3: Usar en Schedule Principal**

Ahora en el campo **Manufacturer** de equipos, aparece lista desplegable con valores predefinidos (evita errores de tipeo, estandariza nombres).

## Exportar Schedules

### Exportar a Excel

**Procedimiento:**

1. Abrir schedule en Revit
2. **File** → **Export** → **Reports** → **Schedule**
3. **Export Schedule** dialog:
   - Name: `HVAC_Equipment_Schedule.txt`
   - Format: **Tab delimited** (importable en Excel)
   - Export column headers: ☑ **Multiple rows, as formatted**
4. Click **Save**

**Abrir en Excel:**
1. Excel → **Data** → **From Text/CSV**
2. Seleccionar archivo `.txt`
3. Delimiter: **Tab**
4. Formatear como tabla profesional

### Integración con BIM 360 / Autodesk Construction Cloud

Los schedules se sincronizan automáticamente al publicar modelos en **BIM 360 Docs**, permitiendo revisión por equipo sin abrir Revit.

## Mejores Prácticas

1. **Nomenclatura consistente** - Usar `Mark` con prefijos lógicos (AHU-, FCU-, EF-)
2. **Parámetros compartidos** para datos especiales (serial, warranty, commissioning date)
3. **Formateo profesional** - Alineación, unidades, decimales apropiados
4. **Totales calculados** para estimación de materiales (área de chapa, longitud de tubería)
5. **Filtros por fase** - Construcción nueva vs. remodelación
6. **Templates de schedules** - Guardar configuraciones en plantillas de proyecto

## Ejercicio Aplicado

**Ver:** Ejercicio 1 en `ejercicios.md` - Crear schedule completo de equipos HVAC con parámetros compartidos y campos calculados.

---

**Próxima Lección:** Etiquetado MEP Profesional - Estrategias de tags para equipos, ductos y tuberías.
