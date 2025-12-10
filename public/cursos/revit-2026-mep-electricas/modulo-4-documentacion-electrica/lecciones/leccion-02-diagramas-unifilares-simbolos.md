# Lección 2: Diagramas Unifilares y Símbolos

## Introducción

Los **diagramas unifilares** (single line diagrams) son representaciones esquemáticas del sistema eléctrico que muestran la distribución de energía desde la acometida hasta los panelboards, usando símbolos estándar IEEE/ANSI. Son esenciales para comprender el sistema completo, análisis de cortocircuito, y coordinación de protecciones.

Esta lección cubre creación de diagramas unifilares en Revit, símbolos eléctricos estándar, leyendas, y mejores prácticas de documentación según códigos.

## Diagramas Unifilares - Fundamentos

### ¿Qué es un Single Line Diagram?

**Definición:** Representación simplificada del sistema eléctrico donde **una línea** representa un conjunto de conductores (3 fases + neutro).

**Características:**
- **Símbolos estándar** IEEE/ANSI
- **Flujo de energía** de arriba hacia abajo (vertical)
- **Ratings** de equipos y conductores
- **Protecciones** (breakers, fusibles)
- **NO muestra routing físico** (solo conexiones lógicas)

**Ejemplo típico:**
```
Utility Service 13.2kV
        ↓
    [Transformer 1500kVA]
        ↓
Main Switchboard 480V - 2000A
        ├→ Feeder 400A → LP-1 (225A)
        ├→ Feeder 300A → PP-1 (150A)
        └→ Feeder 200A → EPP-1 (100A)
```

### Símbolos Estándar IEEE/ANSI

**Símbolos comunes:**

**Transformador:**
```
    ──┬──
      ║
    ──┴──
```
(Dos bobinas con núcleo)

**Breaker (Interruptor Automático):**
```
    ──┤├──
```
(Línea con rectángulo)

**Fusible:**
```
    ──█──
```
(Línea con rectángulo relleno)

**Panelboard:**
```
    ┌─────┐
    │ LP-1│
    │ 225A│
    └─────┘
```
(Rectángulo con datos)

**Generator:**
```
      ⊕
    ──┬──
```
(Círculo con cruz)

**Motor:**
```
      M
    ──┬──
```
(Círculo con M)

![Símbolos IEEE/ANSI](../imagenes/mod4-ieee-symbols.png)

## Crear Single Line Diagram en Revit

### Método 1 - Drafting View (Manual)

**Paso 1: Crear Drafting View**

1. **View** → **Create** → **Drafting View**
2. **Name:** `Single Line Diagram - Main Distribution`
3. **Scale:** `None` (diagramas son esquemáticos)
4. **OK**

**Paso 2: Dibujar Elementos con Detail Lines**

1. **Annotate** → **Detail** → **Detail Line**
2. Dibujar líneas verticales para feeders
3. Dibujar líneas horizontales para branches

**Paso 3: Insertar Symbols**

1. **Annotate** → **Symbol** → **Load Family**
2. Navegar a: `Annotations\Electrical\`
3. Cargar: `Breaker Symbol.rfa`, `Transformer Symbol.rfa`, etc.

4. **Place Symbol** en ubicaciones apropiadas
5. **Align** y **Distribute** para layout limpio

**Paso 4: Agregar Text Annotations**

1. **Annotate** → **Text**
2. Anotar ratings:
   - Junto a breakers: `225A`, `20A 1P`
   - Junto a transformers: `1500 kVA`
   - Junto a panels: `LP-1 - 208Y/120V`

**Paso 5: Conectar con Detail Lines**

Usar **Detail Lines** para conectar símbolos verticalmente (flujo de energía).

![Single Line Diagram Manual](../imagenes/mod4-single-line-manual.png)

### Método 2 - Semi-Automático con Schedules

**Revit NO genera diagramas unifilares automáticamente** (limitación vs software especializado como ETAP, SKM).

**Workflow híbrido:**

1. **Exportar Equipment Schedule** con jerarquía
2. Usar **Dynamo** script para generar layout preliminar
3. Ajustar manualmente en drafting view

**Dynamo script básico (conceptual):**
```python
# Leer equipment schedule
panels = GetAllPanels()
feeders = GetAllFeeders()

# Calcular positions
for panel in panels:
    position_x = panel.level * 100
    position_y = panel.sequence * 50
    PlaceSymbol(panel.name, position_x, position_y)

# Conectar con líneas
for feeder in feeders:
    DrawLine(feeder.source, feeder.destination)
```

**Resultado:** Draft automático que requiere refinamiento manual.

### Método 3 - Software Externo (Integración)

**Para proyectos complejos:**

**Software especializado:**
- **ETAP** (Electrical Transient Analyzer Program)
- **SKM PowerTools**
- **EasyPower**

**Workflow:**
1. Exportar datos de Revit (equipment, circuits) a **Excel**
2. Importar a software de análisis eléctrico
3. Generar single line diagram automático
4. Exportar a **DWG** o **PDF**
5. Importar a Revit como **Raster Image** en drafting view

## Leyendas Eléctricas

### Crear Legend View

**Paso 1: Nueva Legend**

1. **View** → **Create** → **Legends** → **Legend**
2. **Name:** `Electrical Symbols Legend`
3. **Scale:** `None`
4. **OK**

**Paso 2: Agregar Component Legends**

1. **Annotate** → **Component** → **Legend Component**
2. **Family:** Seleccionar family (ej. `Panelboard`)
3. **View:** `Plan` (vista en planta)
4. Click para colocar en legend
5. Repetir para cada tipo de equipment:
   - Panelboards
   - Switchboards
   - Transformers
   - Lighting fixtures
   - Receptacles
   - Switches

**Paso 3: Agregar Descripciones**

1. **Annotate** → **Text**
2. Junto a cada símbolo, agregar descripción:
   - `Panelboard - 120/208V`
   - `GFCI Receptacle - 20A`
   - `Emergency Lighting Fixture`

**Paso 4: Agregar Símbolos de Línea (Conductors)**

**Detail Lines con anotaciones:**

```
────────  120V Single Phase Circuit
═══════  208V Three Phase Circuit
━━━━━━━  Emergency Circuit
- - - -  Communication/Data
```

**Uso de line styles:**
1. **Manage** → **Object Styles** → **Line Styles**
2. Crear: `Electrical - 120V`, `Electrical - 208V`, etc.
3. Configurar **Line Weight** y **Pattern**

![Electrical Legend](../imagenes/mod4-electrical-legend.png)

## Símbolos y Tags

### Electrical Device Tags

**Tipos de tags:**

**1. Lighting Fixture Tag:**
- Muestra: Type mark o wattage
- Ejemplo: `LED-40W`

**2. Receptacle Tag:**
- Muestra: Voltage, amperage
- Ejemplo: `120V-20A`

**3. Panel Tag:**
- Muestra: Panel name
- Ejemplo: `LP-1`

**4. Switch Tag:**
- Muestra: Switch designation
- Ejemplo: `S1` (controla zona 1)

### Personalizar Tags

**Ejemplo: Panel Tag con Voltage**

**Paso 1: Edit Family**

1. Seleccionar panel tag existente
2. **Edit Family** (ribbon)

**Paso 2: Agregar Labels**

En Family Editor:
1. **Create** → **Label**
2. Click para colocar
3. **Edit Label:**
   - **Category Parameters:** `Electrical Equipment`
   - Agregar: **Panel Name** (ya existe)
   - Agregar: **Voltage** (nuevo)
4. **OK**

**Paso 3: Formatear**

- Panel Name: Bold, 3mm
- Voltage: Regular, 2.5mm
- Layout:
  ```
  LP-1
  208V
  ```

**Paso 4: Load into Project**

1. **Load into Project**
2. **Overwrite** existing definition

**Ahora** todos los panel tags muestran voltaje.

## Diagramas Unifilares - Ejemplo Completo

### Proyecto: Edificio Comercial 3 Pisos

**Sistema eléctrico:**
```
Utility Service (13.2kV)
        ↓
    Transformer (13.2kV/480V - 1000kVA)
        ↓
Main Switchboard (480V - 2000A)
        ├→ Feeder 1 (400A) → Transformer (480V/208V - 225kVA) → LP-1 (225A)
        ├→ Feeder 2 (300A) → PP-1 (200A)
        ├→ Feeder 3 (200A) → HP-1 (150A - HVAC)
        └→ Feeder 4 (150A) → Generator (500kW) → EPP-1 (100A)
```

### Crear Diagrama Paso a Paso

**Paso 1: Drafting View**

1. Create drafting view: `SLD - Main Distribution`

**Paso 2: Utility Service (Top)**

1. **Detail Line** (horizontal) en top
2. **Text:** `Utility Service - 13.2kV - 3φ`
3. **Detail Line** (vertical) hacia abajo

**Paso 3: Transformer Principal**

1. **Place Symbol:** `Transformer Symbol`
2. **Text annotations:**
   - Arriba del transformer: `Primary: 13.2kV`
   - Abajo del transformer: `Secondary: 480V`
   - Al lado: `1000 kVA`

**Paso 4: Main Switchboard**

1. **Detail Line** vertical desde transformer
2. **Rectangle** (detail component) para switchboard
3. **Text inside:**
   ```
   SWBD-MAIN
   480V - 3φ - 4W
   Main Breaker: 2000A
   ```

**Paso 5: Feeders**

**Feeder 1:**
1. **Detail Line** desde switchboard hacia abajo
2. **Breaker symbol** en línea
3. **Text:** `Feeder 1 - 400A - 3P - #500 kcmil Cu`
4. Continuar a transformer step-down (480V/208V)
5. **Transformer symbol** con ratings
6. **Detail Line** a panel LP-1
7. **Rectangle** para LP-1
8. **Text:**
   ```
   LP-1
   208Y/120V
   225A - 42 Circuits
   Level 1
   ```

Repetir para Feeders 2, 3, 4.

**Paso 6: Generator Branch (Emergency)**

1. **Detail Line** desde SWBD-MAIN hacia lado derecho
2. **ATS symbol** (Automatic Transfer Switch)
3. **Text:** `ATS - 200A`
4. **Detail Line** desde generator hacia ATS (entrada alternativa)
5. **Generator symbol**
6. **Text:**
   ```
   Generator
   Diesel - 500kW
   480V - 3φ
   ```
7. **Detail Line** desde ATS hacia EPP-1
8. **Rectangle** para EPP-1

**Paso 7: Legend dentro del Diagram**

En esquina inferior derecha:
```
LEGEND
━━━━━  Normal Power
━ ━ ━  Emergency Power
───┤├───  Breaker
  ──┬──  Transformer
    ║
```

**Paso 8: Title Block**

1. **Text** (título grande): `SINGLE LINE DIAGRAM - MAIN ELECTRICAL DISTRIBUTION`
2. **Text** (info): `Project: Commercial Building - 3 Floors`
3. **Text:** `Voltage: 480Y/277V Primary, 208Y/120V Secondary`

![Single Line Diagram Completo](../imagenes/mod4-single-line-complete.png)

## One-Line vs Three-Line Diagrams

### Single Line (One-Line) Diagram

**Uso:** Sistema completo, distribución general
**Detalle:** Bajo (esquemático)
**Audiencia:** Ingenieros, gerentes de proyecto

### Three-Line Diagram

**Uso:** Detalles de circuitos trifásicos específicos
**Detalle:** Alto (muestra 3 fases + neutro)
**Audiencia:** Instaladores, técnicos

**Ejemplo - Three-Line de Circuito Trifásico:**
```
Phase A ────────┤├──── (Breaker A)
Phase B ────────┤├──── (Breaker B)
Phase C ────────┤├──── (Breaker C)
Neutral ──────────────
Ground ───────────────
```

**En Revit:** Crear como drafting view similar a single-line, pero con 3-5 líneas paralelas.

## Coordinación de Protecciones (Conceptual)

**Single line diagrams son base para análisis de coordinación.**

### Selectividad

**Objetivo:** Solo el breaker más cercano a falla debe disparar.

**Ejemplo:**
```
Main Breaker: 2000A (tiempo de disparo: 10 segundos @ 5000A)
Feeder Breaker: 400A (tiempo: 2 segundos @ 5000A)
Branch Breaker: 20A (tiempo: instantáneo @ 5000A)
```

**Coordinación:** Branch dispara primero → Feeder solo si branch falla → Main solo si feeder falla.

**Análisis:** Software especializado (ETAP, SKM) usa single-line diagram + curvas tiempo-corriente.

## Mejores Prácticas

### 1. Consistencia Visual

**Usar mismo layout para todos los single-line diagrams:**
- Utility siempre arriba
- Distribution hacia abajo
- Emergency a la derecha
- Spacing consistente

### 2. Ratings Completos

**Siempre incluir:**
- Voltajes (primario/secundario)
- Capacidades (kVA, kW, A)
- Wire sizes en feeders principales
- Número de circuitos en panels

### 3. Referencias Cruzadas

**Anotar:**
- `See Sheet E-201 for LP-1 panel schedule`
- `See Detail 3/E-301 for transformer connection`

**Facilita navegación** entre planos.

### 4. Revisiones

**Al modificar modelo eléctrico:**
1. Actualizar panel schedules (automático)
2. Actualizar circuit schedules (automático)
3. **Actualizar single-line diagram** (MANUAL en Revit)

**Importante:** Single-line NO actualiza automáticamente → Verificar siempre.

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Crear single-line diagram completo desde acometida hasta 6 panelboards, con símbolos IEEE/ANSI y leyenda.

---

**Próxima Lección:** Coordinación y Entrega de Planos - Clash detection, sheets, exportación final.
