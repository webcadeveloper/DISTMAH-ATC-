# Lección 27: Detección de Interferencias y Choques

**Módulo 6: Colaboración y Gestión de Proyectos**
**Duración:** 60 minutos
**Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, los estudiantes serán capaces de:

✅ **Configurar y ejecutar detección de interferencias** utilizando las herramientas nativas de AutoCAD Plant 3D y Navisworks Manage

✅ **Clasificar choques** entre hard clashes (interferencias físicas) y soft clashes (violaciones de holgura)

✅ **Generar reportes de interferencias** completos con ubicación, disciplinas afectadas y prioridad de resolución

✅ **Implementar flujo de trabajo de resolución de choques** integrando detección, asignación y verificación

✅ **Validar holguras para acceso y mantenimiento** según estándares industriales y códigos aplicables

✅ **Establecer tolerancias apropiadas** para diferentes tipos de componentes y situaciones de proyecto

## Introducción

La detección de interferencias (clash detection) es uno de los procesos más críticos en proyectos BIM de plantas industriales. A diferencia de la construcción tradicional donde los conflictos se descubren durante la construcción (con costos significativos de retrabajos), la metodología BIM permite identificar y resolver interferencias durante la fase de diseño.

**Importancia de la Detección de Interferencias:**

En proyectos de plantas de proceso, las interferencias no detectadas pueden causar:

- **Retrasos de construcción:** Detener instalación para resolver conflictos en campo
- **Costos de cambio:** Rehacer trabajo ya ejecutado, modificar componentes
- **Problemas de mantenimiento:** Equipos inaccesibles para operación y mantenimiento
- **Riesgos de seguridad:** Accesos bloqueados, espacios de escape inadecuados
- **Incumplimiento de códigos:** Violaciones de distancias mínimas requeridas por normativa

**Datos de Industria:**

Según estudios de la Construction Industry Institute (CII):

- **25-35%** de costos de cambio en proyectos de plantas se deben a interferencias no detectadas
- **Detección temprana** (fase de diseño) reduce costos de corrección en **90%** comparado con detección en campo
- **Proyectos BIM** con detección sistemática de interferencias reducen **RFIs** (Request for Information) en construcción en **40-60%**

**Estándares Aplicables:**

- **ISO 19650-2:** Fase de entrega de activos - coordinación de modelos
- **PAS 1192-5:** BIM para gestión de activos operacionales - accesibilidad
- **ASME B31.3:** Código de tuberías de proceso - separaciones mínimas
- **NFPA 30:** Código de líquidos inflamables - distancias de seguridad
- **OSHA 1910.37:** Rutas de salida y planificación de emergencia

Esta lección cubre metodologías completas de detección de interferencias, desde configuración de tolerancias hasta flujos de trabajo de resolución en equipos multidisciplinarios.

![Introducción a Detección de Interferencias](../imagenes/leccion-27-introduccion-clash-detection.png)

## 1. Fundamentos de Detección de Interferencias

### 1.1 Tipos de Interferencias

**Hard Clashes (Choques Duros):**

Interferencias físicas donde dos o más objetos ocupan el mismo espacio tridimensional:

**Ejemplos:**
- Tubería que atraviesa viga estructural
- Conducto eléctrico que intercepta ducto de ventilación
- Equipo que se solapa con columna
- Tubería que choca con otra tubería

**Características:**
- **Imposibles de construir:** No pueden existir físicamente
- **Prioridad máxima:** Deben resolverse antes de liberación para construcción
- **Fáciles de detectar:** Software identifica automáticamente geometría superpuesta

**Soft Clashes (Choques Suaves):**

Violaciones de holguras mínimas requeridas para acceso, mantenimiento, operación o seguridad:

**Ejemplos:**
- Tubería a 50mm de estructura (código requiere 75mm mínimo)
- Válvula sin espacio suficiente para operación
- Equipo sin acceso para mantenimiento
- Tubería muy cerca de fuente de calor (riesgo térmico)
- Salida de emergencia bloqueada

**Características:**
- **Técnicamente construibles:** Pueden instalarse físicamente
- **Funcionalmente problemáticos:** Causan problemas operacionales
- **Requieren juicio ingenieril:** Determinar si violación es aceptable
- **Difíciles de detectar:** Requieren configuración de zonas de holgura

**Workflow Clashes (Choques de Flujo de Trabajo):**

Conflictos relacionados con secuencia de construcción:

**Ejemplos:**
- Equipo que debe instalarse antes que estructura que lo rodea
- Tubería que debe montarse antes que bandeja de cables que la cruza
- Acceso de grúa bloqueado por estructura existente

**Características:**
- **No son conflictos geométricos:** No hay superposición física
- **Requieren análisis 4D:** Considerar dimensión temporal (secuencia)
- **Críticos para constructibilidad:** Afectan planificación de construcción

![Tipos de Interferencias](../imagenes/leccion-27-tipos-interferencias.png)

### 1.2 Matriz de Detección

Una matriz de detección define qué elementos deben verificarse contra qué otros elementos:

**Estructura de Matriz Típica:**

```
             │ Piping │ Equipment │ Structure │ HVAC │ Electrical │
─────────────┼────────┼───────────┼───────────┼──────┼────────────┤
Piping       │   NO   │    YES    │    YES    │ YES  │    YES     │
Equipment    │  YES   │    YES    │    YES    │ YES  │    YES     │
Structure    │  YES   │    YES    │    NO     │ YES  │    YES     │
HVAC         │  YES   │    YES    │    YES    │  NO  │    YES     │
Electrical   │  YES   │    YES    │    YES    │ YES  │    NO      │
```

**Explicación:**

- **Diagonal (NO):** No verificar disciplina contra sí misma (tubería vs tubería se maneja separadamente)
- **YES:** Verificar estas combinaciones
- **Personalización:** Matriz varía según proyecto y estándares

**Consideraciones Especiales:**

**Piping vs Piping:**
- Generalmente verificado, pero con tolerancias ajustadas
- Tuberías de misma spec pueden estar cercanas
- Tuberías de servicios incompatibles requieren separación mayor

**Structure vs Structure:**
- Generalmente no requiere verificación (diseño estructural resuelve)
- Excepto cuando múltiples disciplinas estructurales (acero, concreto, arquitectónico)

**Equipment vs Equipment:**
- Verificar para asegurar espacios de acceso entre equipos
- Importante para layout de equipos rotativos (bombas, compresores)

![Matriz de Detección](../imagenes/leccion-27-matriz-deteccion.png)

### 1.3 Tolerancias y Holguras

Las tolerancias definen distancias mínimas aceptables entre componentes:

**Tolerancias por Disciplina:**

**Piping:**
```
- Pipe to Steel Structure: 75mm (3")
- Pipe to Concrete: 100mm (4")
- Pipe to Pipe (different systems): 50mm (2")
- Pipe to Equipment: 150mm (6") - para acceso
- Pipe to Hot Pipe: 200mm (8") - para protección térmica
```

**HVAC:**
```
- Duct to Structure: 100mm (4")
- Duct to Piping: 75mm (3")
- Duct to Duct: 50mm (2")
- Duct to Ceiling: 300mm (12") - para acceso
```

**Electrical:**
```
- Cable Tray to Structure: 50mm (2")
- Cable Tray to Piping: 100mm (4") - evitar condensación
- Cable Tray to HVAC: 75mm (3")
- Conduit to Structure: 25mm (1")
```

**Equipment:**
```
- Equipment to Equipment: 1000mm (3'-3") - acceso para mantenimiento
- Equipment to Wall: 800mm (2'-8") - acceso lateral
- Rotating Equipment Space: 1500mm (5'-0") - para retiro de componentes
- Heat Exchanger Tube Pull: Length + 500mm - para extracción de tubos
```

**Consideraciones Especiales:**

**Holgura Térmica:**
- Tuberías de alta temperatura (>150°C) requieren mayor separación
- Evitar transmisión de calor a tuberías frías o cables
- Considerar expansión térmica

**Holgura para Aislamiento:**
- Tuberías aisladas requieren espacio adicional
- Espesor de aislamiento varía: 25mm a 150mm según servicio y temperatura
- Detección debe considerar geometría con aislamiento

**Holgura para Operación:**
- Válvulas: espacio para operación manual (volante) o actuador
- Instrumentos: acceso para calibración
- Equipos: acceso para inspección

![Tolerancias y Holguras](../imagenes/leccion-27-tolerancias-holguras.png)

## 2. Detección de Interferencias en Plant 3D

### 2.1 Interference Detection Tool Nativo

AutoCAD Plant 3D incluye herramienta básica de detección de interferencias:

**Acceso:**

1. **Ribbon:** Home tab > Interference panel > Interference Check
2. **Command Line:** `INTERFERE`
3. **Keyboard:** Tipo `INT` + Enter

**Proceso de Detección Básica:**

**Paso 1: Seleccionar Primer Conjunto de Objetos**

```
Command: INTERFERE
Select first set of objects: [Seleccionar componentes de Disciplina A]
  - Opción: Window/Crossing para área completa
  - Opción: Filter por layer (ej: solo piping)
  - Opción: Select All similar (componentes de tipo específico)
```

**Paso 2: Seleccionar Segundo Conjunto**

```
Select second set of objects: [Seleccionar componentes de Disciplina B]
  - Si se presiona Enter sin selección: verifica primer conjunto contra sí mismo
  - Seleccionar otra disciplina para detección cruzada
```

**Paso 3: Configuración de Detección**

En diálogo de Interference Checking:

- **Check Type:**
  - **Interference:** Solo superposiciones físicas (hard clash)
  - **Clearance:** Incluir violaciones de holgura (soft clash)

- **Clearance Distance:**
  - Distancia mínima requerida (ej: 75mm)
  - Aplicable solo en modo Clearance

- **Ignore Tolerance:**
  - Ignorar interferencias menores a cierto valor (ej: 1mm)
  - Útil para evitar falsos positivos por tolerancias de modelado

**Paso 4: Resultados**

Interference Check genera:

- **Número de interferencias detectadas**
- **Lista de pares de objetos en conflicto**
- **Sólidos 3D representando volumen de interferencia** (opcional)

![Interference Detection Tool](../imagenes/leccion-27-interference-tool-plant3d.png)

### 2.2 Visualización de Interferencias

**Representación Visual:**

**Método 1: Sólidos de Interferencia**

Plant 3D puede crear sólidos 3D representando el volumen de superposición:

```
1. En diálogo Interference Checking:
   - Check "Create interference solids"
   - Specify layer: CLASH-DETECTED (crear layer dedicado)

2. Resultado:
   - Sólido 3D rojo en ubicación de cada interferencia
   - Tamaño del sólido = volumen de superposición
   - Fácil identificación visual
```

**Método 2: Zoom y Highlight**

```
1. En lista de interferencias, seleccionar par de objetos
2. Click "Zoom to Pair"
3. Objetos en conflicto se resaltan
4. Zoom automático a ubicación de interferencia
```

**Método 3: Layer Freeze/Thaw**

Para análisis por disciplina:

```
1. Congelar (Freeze) todas las disciplinas excepto las en análisis
2. Ejecutar Interference Check
3. Solo interferencias relevantes son visibles
4. Proceso iterativo disciplina por disciplina
```

![Visualización de Interferencias](../imagenes/leccion-27-visualizacion-interferencias.png)

### 2.3 Limitaciones de Herramienta Nativa

La herramienta nativa de Plant 3D tiene limitaciones:

**Limitaciones:**

1. **No Persistente:** Resultados no se guardan entre sesiones
2. **Reporte Limitado:** Sin capacidad robusta de generación de reportes
3. **Sin Gestión de Estado:** No rastrea interferencias resueltas vs pendientes
4. **Modelo Individual:** Solo analiza archivos abiertos actualmente
5. **Sin Priorización:** No permite clasificar interferencias por severidad
6. **Geometría Simplificada:** No considera aislamiento, soportes, accesorios opcionales

**Uso Recomendado:**

La herramienta nativa es adecuada para:

- **Verificación rápida** durante diseño
- **Detección preliminar** en modelos pequeños
- **Validación local** de cambios antes de check-in a Vault

Para detección comprensiva en proyectos grandes:

- **Usar Autodesk Navisworks Manage** (cubierto en Lección 28)
- Capacidades avanzadas de gestión de choques
- Persistencia de resultados entre sesiones
- Reportes detallados
- Seguimiento de estado de resolución

![Limitaciones Herramienta Nativa](../imagenes/leccion-27-limitaciones-nativa.png)

## 3. Configuración de Detección Avanzada

### 3.1 Selección Estratégica de Objetos

**Estrategia 1: Por Layers**

Organizar modelo con layers por disciplina facilita selección:

```
Layers de Piping:
- PIPE-PROCESS
- PIPE-UTILITY
- PIPE-INSTRUMENTATION
- PIPE-FIRE-PROTECTION

Layers de Structure:
- STEEL-BEAMS
- STEEL-COLUMNS
- STEEL-BRACING
- CONCRETE-FOUNDATIONS

Selección:
- Quick Select > Layer > PIPE-* (todos los layers de piping)
- Filters > Layer = STEEL-* (todos los layers de estructura)
```

**Estrategia 2: Por Selection Sets**

Crear selection sets reutilizables:

```
1. Seleccionar todos los componentes de una disciplina
2. Command: GROUP
3. Crear grupo: "PIPING-ALL"
4. En futuras detecciones: seleccionar grupo completo rápidamente
```

**Estrategia 3: Por Propiedades de Objeto**

Usar Quick Select con filtros avanzados:

```
Quick Select Dialog:
- Object Type: AcPpLineSegment (segmentos de tubería)
- Properties: Service (filtrar por servicio específico)
  - Value: "Steam" (solo tuberías de vapor)
- Operator: Equals
```

**Estrategia 4: Por Áreas del Modelo**

Dividir detección por zonas:

```
1. Definir áreas: Area-100, Area-200, Area-300
2. Crear viewports o boundary boxes por área
3. Ejecutar detección área por área
4. Beneficio: Resultados manejables, asignación por equipo
```

![Selección Estratégica](../imagenes/leccion-27-seleccion-estrategica.png)

### 3.2 Configuración de Tolerancias Personalizadas

**Creación de Categorías de Tolerancia:**

Para proyectos grandes, definir categorías de tolerancia:

**Categoría 1: Critical Clearances (Holguras Críticas)**

```
- Pipe to Hot Surface (>200°C): 300mm
- Electrical to Wet Pipe: 200mm (prevenir corto circuito)
- Emergency Exit Path: 1200mm (width mínimo según OSHA)
- Fire Protection access: 900mm (acceso para brigada)
```

**Categoría 2: Standard Clearances (Holguras Estándar)**

```
- Pipe to Structure: 75mm
- Pipe to HVAC: 75mm
- Cable Tray to Structure: 50mm
- Duct to Duct: 50mm
```

**Categoría 3: Minimum Clearances (Holguras Mínimas)**

```
- Pipe to Pipe (same service): 25mm
- Conduit to Structure: 10mm
- Small bore piping to large bore: 50mm
```

**Implementación en Plant 3D:**

Dado que herramienta nativa no permite múltiples tolerancias simultáneas:

**Enfoque 1: Detección Iterativa**

```
Pass 1: Detección con tolerancia crítica (300mm)
  - Identificar violaciones críticas
  - Documentar en spreadsheet

Pass 2: Detección con tolerancia estándar (75mm)
  - Identificar violaciones estándar
  - Excluir áreas ya identificadas en Pass 1

Pass 3: Detección con tolerancia mínima (25mm)
  - Verificación final
  - Documentar advertencias menores
```

**Enfoque 2: Scripts de Automatización**

Usar AutoLISP o .NET para automatizar:

```lisp
; Pseudocódigo AutoLISP
(defun c:MULTI-CLASH-CHECK ()
  (setq tolerances '(300 75 25))  ; Lista de tolerancias
  (foreach tol tolerances
    (command "INTERFERE" ...)
    (setq tol tol)
    (export-results-to-excel tol)
  )
)
```

![Tolerancias Personalizadas](../imagenes/leccion-27-tolerancias-personalizadas.png)

### 3.3 Filtrado de Resultados

**Técnicas de Filtrado:**

**Filtro 1: Por Tamaño de Interferencia**

Ignorar interferencias triviales:

```
- Volumen de interferencia < 0.001 m³: Ignorar (tolerancia de modelado)
- Volumen 0.001 - 0.01 m³: Advertencia (revisar)
- Volumen > 0.01 m³: Crítico (resolver inmediatamente)
```

**Filtro 2: Por Componentes**

Excluir combinaciones esperadas:

```
Excluir:
- Pipe Supports vs Pipe (intencionalmente superpuestos)
- Flanges vs Flanges (par atornillado)
- Valves vs Pipe (válvula es parte de línea)
- Nozzles vs Equipment (nozzle es parte de equipo)
```

**Filtro 3: Por Ubicación**

Filtrar por área crítica vs no crítica:

```
Alta Prioridad:
- Área de proceso principal
- Rack de tuberías crítico
- Sala de control

Baja Prioridad:
- Áreas de utility general
- Zonas de almacenamiento
```

**Filtro 4: Por Disciplina Responsable**

Clasificar por quién debe resolver:

```
Piping Team:
- Pipe vs Structure (piping debe reubicar)
- Pipe vs Equipment (piping debe reubicar)

Structure Team:
- Structure vs HVAC (estructura debe acomodar)
- Structure vs Electrical (estructura debe proveer espacio)

Multidisciplinary:
- Pipe vs HVAC (requiere coordinación)
- Equipment vs Structure (requiere coordinación design/structural)
```

![Filtrado de Resultados](../imagenes/leccion-27-filtrado-resultados.png)

## 4. Flujo de Trabajo de Resolución

### 4.1 Proceso de Resolución Sistemática

**Workflow Completo:**

```
1. DETECCIÓN
   ├─ Ejecutar clash detection
   ├─ Generar reporte de interferencias
   └─ Clasificar por severidad y tipo

2. ASIGNACIÓN
   ├─ Distribuir interferencias a disciplinas responsables
   ├─ Establecer prioridades (crítico/alto/medio/bajo)
   └─ Definir fechas límite

3. ANÁLISIS
   ├─ Revisar cada interferencia en contexto 3D
   ├─ Determinar causa raíz
   └─ Proponer solución

4. RESOLUCIÓN
   ├─ Implementar cambios en modelo
   ├─ Documentar decisión de diseño
   └─ Check-in de archivos modificados

5. VERIFICACIÓN
   ├─ Re-ejecutar clash detection
   ├─ Confirmar resolución (clash desaparece)
   └─ Verificar que solución no creó nuevas interferencias

6. DOCUMENTACIÓN
   ├─ Actualizar registro de interferencias
   ├─ Marcar como "Resolved"
   └─ Archivar evidencia de resolución
```

![Flujo de Trabajo Resolución](../imagenes/leccion-27-workflow-resolucion.png)

### 4.2 Estrategias de Resolución

**Estrategia 1: Reubicación (Relocate)**

Mover componente a ubicación libre de conflictos:

**Casos de Uso:**
- Tubería pequeña vs estructura: reubicar tubería
- Cable tray vs tubería: reubicar cable tray (más flexible)
- Instrumento vs tubería: reubicar instrumento

**Consideraciones:**
- ✅ Solución más común
- ✅ Típicamente más fácil y económico
- ⚠ Verificar que nueva ubicación no crea nuevas interferencias
- ⚠ Validar que ruta alternativa cumple requisitos de proceso

**Ejemplo:**

```
Interferencia: Tubería 2-P-101-CS6-4 choca con viga I-beam B-45
Análisis:
  - Tubería puede reubicar ±500mm verticalmente
  - Viga estructural es fija (crítica para cargas)
Solución:
  - Bajar tubería 200mm
  - Verificar clearance con piso: OK
  - Verificar pendiente de línea: OK (1:100 mantenido)
Resultado: Resuelto
```

**Estrategia 2: Rediseño (Redesign)**

Cambiar diseño de componente o sistema:

**Casos de Uso:**
- Cambiar routing completo de línea (no solo mover segmento)
- Rediseñar soporte estructural para acomodar tuberías
- Cambiar tipo de componente (válvula de bola vs globo)

**Consideraciones:**
- ⚠ Más complejo que reubicación
- ⚠ Puede requerir aprobación de proceso/cliente
- ✅ Puede resultar en mejor diseño general
- ⚠ Impacto en schedule (requiere más tiempo)

**Ejemplo:**

```
Interferencia: Múltiples tuberías chocan con estructura en área congestionada
Análisis:
  - Área con 12+ interferencias
  - Reubicación individual no factible
  - Espacio limitado
Solución:
  - Rediseñar pipe rack completo
  - Consolidar tuberías en dos niveles en lugar de tres
  - Optimizar elevaciones
Resultado: Resuelto 12 interferencias simultáneamente
```

**Estrategia 3: Coordinación (Coordinate)**

Ajustar ambas disciplinas para acomodar:

**Casos de Uso:**
- Pipe vs HVAC: ambos ajustan routing
- Estructura vs equipo: estructura agrega abertura, equipo ajusta posición
- Pipe vs electrical: coordinación de niveles

**Consideraciones:**
- ✅ Solución balanceada entre disciplinas
- ⚠ Requiere coordinación entre equipos
- ⚠ Meetings de coordinación necesarios
- ✅ Evita que una disciplina asuma todo el costo de cambio

**Ejemplo:**

```
Interferencia: Ducto HVAC grande (900x600mm) choca con header de tubería crítico
Análisis:
  - Header de tubería: difícil reubicar (proceso crítico)
  - Ducto HVAC: puede dividirse pero requiere ajuste
Solución (coordinada):
  - HVAC: Dividir ducto en dos conductos menores (450x600mm cada uno)
  - Piping: Bajar header 150mm (dentro de rango aceptable)
  - Ambos disciplinas comparten esfuerzo de rediseño
Resultado: Resuelto con impacto mínimo en ambas disciplinas
```

**Estrategia 4: Aceptación (Accept)**

Documentar interferencia como aceptable:

**Casos de Uso:**
- Interferencia trivial (1-2mm, dentro de tolerancia de fabricación)
- Construcción secuencial resuelve (instalar A antes de B)
- Componentes que intencionalmente se tocan (soportes, clips)

**Consideraciones:**
- ⚠ Requiere justificación formal
- ⚠ Aprobación de ingeniería senior
- ⚠ Documentar en clash report
- ✅ Evita rediseño innecesario

**Ejemplo:**

```
Interferencia: Small bore pipe support clip "choca" con estructura en 3mm
Análisis:
  - Clip de soporte se atornilla a estructura
  - "Interferencia" es conexión intencional
  - Modelado representa contacto físico esperado
Solución:
  - Aceptar interferencia
  - Clasificar como "False Positive"
  - Agregar a lista de exclusión en futuras detecciones
Resultado: No requiere acción de diseño
```

![Estrategias de Resolución](../imagenes/leccion-27-estrategias-resolucion.png)

### 4.3 Priorización de Interferencias

**Sistema de Clasificación por Severidad:**

**Crítico (Priority 1):**

```
Características:
- Interferencia física mayor (volumen >0.1 m³)
- Bloquea ruta crítica de construcción
- Afecta equipo crítico del proceso
- Viola código de seguridad

Acción:
- Resolver inmediatamente (dentro de 24-48 horas)
- Requiere coordinación senior
- Hold en liberación de diseño hasta resolución

Ejemplos:
- Reactor choca con columna estructural principal
- Header principal de proceso choca con viga del edificio
- Ruta de escape de emergencia bloqueada
```

**Alto (Priority 2):**

```
Características:
- Interferencia significativa pero no crítica
- Afecta tuberías principales o equipos importantes
- Requiere rediseño moderado

Acción:
- Resolver en 1 semana
- Asignar a equipo de disciplina
- Revisar en meeting semanal de coordinación

Ejemplos:
- Tubería de 12" choca con bandeja de cables
- Equipo secundario choca con estructura menor
- HVAC duct choca con piping de utility
```

**Medio (Priority 3):**

```
Características:
- Interferencia menor pero requiere atención
- Afecta componentes secundarios
- Solución típicamente simple (reubicación menor)

Acción:
- Resolver en 2 semanas
- Puede resolverse en batch con otras interferencias
- Seguimiento en reporte de progreso

Ejemplos:
- Small bore piping (2" o menor) choca con estructura
- Cable tray menor choca con conduit
- Instrumentos chocan con piping
```

**Bajo (Priority 4):**

```
Características:
- Interferencia trivial
- Diferencia menor con tolerancia (50-70mm vs 75mm requerido)
- Puede ser falso positivo

Acción:
- Revisar y validar
- Resolver si es genuino, aceptar si es menor
- No bloquea progreso de diseño

Ejemplos:
- Clearance de 60mm vs 75mm requerido (dentro de rango aceptable)
- Componentes auxiliares con superposición menor
- Interferencias de componentes temporales de construcción
```

**Matriz de Priorización:**

```
                │ Critical Path │ Non-Critical │
────────────────┼───────────────┼──────────────┤
Hard Clash      │   Priority 1  │  Priority 2  │
Soft Clash      │   Priority 2  │  Priority 3  │
Minor Clearance │   Priority 3  │  Priority 4  │
```

![Priorización de Interferencias](../imagenes/leccion-27-priorizacion.png)

### 4.4 Registro y Seguimiento

**Clash Register (Registro de Choques):**

Mantener registro centralizado de todas las interferencias:

**Formato de Registro (Excel/Database):**

```
Columnas:
1. Clash ID: Identificador único (CL-001, CL-002...)
2. Detection Date: Fecha de detección
3. Location: Área/zona del modelo (Area-100, Grid B-5/C-6)
4. Discipline 1: Primera disciplina involucrada (Piping)
5. Discipline 2: Segunda disciplina (Structure)
6. Component 1: Componente específico (Line 1-P-101-CS6-6)
7. Component 2: Componente específico (Beam B-45)
8. Clash Type: Hard/Soft/Clearance
9. Priority: 1/2/3/4
10. Volume: Volumen de interferencia (m³)
11. Clearance: Distancia actual vs requerida (60mm vs 75mm)
12. Assigned To: Persona/equipo responsable (John Smith - Piping)
13. Due Date: Fecha límite de resolución
14. Status: Open/In Progress/Resolved/Accepted/Closed
15. Resolution: Descripción de solución implementada
16. Resolution Date: Fecha de resolución
17. Verified By: Quién verificó la resolución
18. Notes: Comentarios adicionales
```

**Ejemplo de Entrada:**

```
CL-045:
  Detection Date: 2024-01-15
  Location: Area-100, Grid B-5/C-6
  Discipline 1: Piping
  Discipline 2: Structure
  Component 1: Line 1-P-101-CS6-6 (12" Carbon Steel)
  Component 2: Beam B-45 (W18x50)
  Clash Type: Hard Clash
  Priority: 1 (Critical)
  Volume: 0.025 m³
  Assigned To: John Smith (Piping Lead)
  Due Date: 2024-01-17
  Status: Resolved
  Resolution: Rerouted line 300mm south, added elbow EL-045
  Resolution Date: 2024-01-16
  Verified By: Jane Doe (Project Coordinator)
  Notes: Solution approved by process engineer. No impact on hydraulics.
```

**KPIs de Seguimiento:**

```
1. Total Clashes: Número total detectado
2. Open Clashes: Pendientes de resolución
3. Resolved Clashes: Resueltos y verificados
4. Closure Rate: (Resolved / Total) x 100%
5. Average Resolution Time: Tiempo promedio de resolución
6. Overdue Clashes: Pasados de fecha límite
7. Critical Clashes Outstanding: Críticos sin resolver
```

**Dashboard de Proyecto:**

```
Clash Detection Dashboard - Week 24

Total Clashes Detected: 487
  ├─ Closed: 412 (84.6%)
  ├─ Open: 75 (15.4%)
  └─ Overdue: 8 (1.6%)

By Priority:
  ├─ P1 (Critical): 12 → 1 open (91.7% closed)
  ├─ P2 (High): 98 → 24 open (75.5% closed)
  ├─ P3 (Medium): 245 → 38 open (84.5% closed)
  └─ P4 (Low): 132 → 12 open (90.9% closed)

By Discipline:
  ├─ Piping vs Structure: 187 clashes → 156 closed
  ├─ HVAC vs Piping: 134 clashes → 118 closed
  ├─ Electrical vs Structure: 89 clashes → 78 closed
  └─ Equipment vs Piping: 77 clashes → 60 closed

Average Resolution Time: 4.2 days
Target: < 7 days for P2 and above
Status: On Track ✓
```

![Registro y Seguimiento](../imagenes/leccion-27-registro-seguimiento.png)

## 5. Validación de Acceso y Mantenimiento

### 5.1 Holguras para Acceso

**Requisitos de Acceso según Códigos:**

**OSHA 1910.37 - Means of Egress:**

```
- Exit Passageway Width: 1120mm (44") mínimo
- Exit Door Width: 810mm (32") mínimo
- Exit Route Clearance Height: 2030mm (80") mínimo
- Unobstructed Path: Sin protuberancias >100mm
```

**ASME PCC-1 - Maintenance Access:**

```
- Valve Access (manual operation): 750mm (30") frontal clearance
- Instrumentation Access: 600mm (24") frontal clearance
- Flange Access (bolt-up): 300mm (12") radial clearance
- Heat Exchanger Tube Bundle Pull: Length + 500mm (20") axial clearance
```

**API RP 14J - Offshore Platform Access:**

```
- Personnel Access Corridors: 900mm (36") width
- Escape Routes: 1200mm (48") width
- Vertical Ladders: 750mm (30") width
- Platforms with Equipment: 1500mm (60") width
```

**Verificación en Plant 3D:**

**Método 1: Soft Clash Detection con Holgura Aumentada**

```
1. Definir "access zones" alrededor de equipos críticos:
   - Crear bounding box 1500mm alrededor de equipo
   - Layer: ACCESS-ZONE-EQUIPMENT

2. Ejecutar Interference Check:
   - First Set: ACCESS-ZONE-EQUIPMENT
   - Second Set: All other components
   - Mode: Clearance Check

3. Cualquier interferencia = acceso bloqueado
```

**Método 2: Modelado de Espacios de Acceso**

```
1. Crear 3D solids representando espacios requeridos:
   - Box delante de válvulas: 750x750x2000mm
   - Box delante de instrumentos: 600x600x1500mm
   - Corridor boxes: 1200mm width x altura de área

2. Estos "access volumes" se tratan como objetos reales

3. Cualquier objeto que invade access volume = violación
```

![Holguras para Acceso](../imagenes/leccion-27-holguras-acceso.png)

### 5.2 Holguras para Mantenimiento

**Equipos Críticos con Requisitos Especiales:**

**Bombas Centrífugas:**

```
Holguras Requeridas:
- Lado de motor: 1200mm (para retiro de motor)
- Lado de succión: 800mm (para mantenimiento de sello)
- Lado de descarga: 600mm (para válvulas)
- Sobre bomba: 2500mm (para extracción con grúa)
- Perímetro: 900mm (acceso general)
```

**Intercambiadores de Calor:**

```
Holguras Requeridas:
- Lado de cabezal (tube pull): Longitud de tubos + 500mm
  - Ejemplo: Exchanger 6m long → 6.5m clearance
- Lado posterior: 600mm (acceso a bridas)
- Lateral: 800mm (mantenimiento de bridas laterales)
- Superior: espacio para izaje (mínimo 3000mm en indoor)
```

**Compresores Reciprocantes:**

```
Holguras Requeridas:
- Lado de cilindros: 1500mm (para retiro de pistones)
- Lado de motor: 1500mm (para mantenimiento de motor)
- Extremos: 2000mm (para extracción de componentes largos)
- Overhead: 4000mm (para grúa/polipasto)
```

**Filtros y Strainers:**

```
Holguras Requeridas:
- Frente: Longitud de basket/cartridge + 300mm
  - Ejemplo: 600mm basket → 900mm clearance
- Acceso a cover: 1000mm (para retiro de tapa con herramientas)
```

**Validación en Modelo 3D:**

**Checklist de Validación por Equipo:**

```
Para cada equipo crítico en Data Manager:

1. Identificar requisitos de mantenimiento:
   - Consultar vendor drawings
   - Revisar O&M manual
   - Aplicar estándares internos

2. Crear "maintenance zones" en modelo:
   - 3D boxes representando espacios requeridos
   - Color-code: Verde = suficiente, Rojo = insuficiente

3. Verificar clearances:
   - Ejecutar clash detection contra maintenance zones
   - Documentar violaciones

4. Resolver violaciones:
   - Reubicar equipo si posible
   - Reubicar componentes interfiriendo
   - Justificar si acceso alternativo disponible
```

![Holguras para Mantenimiento](../imagenes/leccion-27-holguras-mantenimiento.png)

### 5.3 Ergonomía y Seguridad

**Consideraciones Ergonómicas:**

**Altura de Operación:**

```
- Válvulas de operación frecuente: 900mm - 1500mm del piso
  - Rango cómodo para operador de pie
- Instrumentos locales (gauges): 1200mm - 1800mm
  - Altura de lectura visual cómoda
- Válvulas de operación ocasional: Hasta 2200mm aceptable
  - Con plataforma portátil
- Válvulas sobre 2200mm: Requiere plataforma permanente
```

**Plataformas de Acceso:**

```
Requisitos:
- Width: 900mm mínimo (1200mm recomendado)
- Guardrails: 1100mm altura, con toe board 100mm
- Loading: 4.8 kPa (100 lbs/ft²) mínimo
- Slope: <2% (esencialmente horizontal)
- Surface: Grating anti-slip
```

**Escaleras y Ladders:**

```
Escaleras:
- Angle: 30-35° (óptimo)
- Step Height: 175-200mm
- Step Width: 250mm mínimo
- Width: 900mm mínimo

Ladders:
- Vertical o max 15° de vertical
- Rung spacing: 300mm
- Width: 400mm entre rieles
- Landing cada 6m de altura
```

**Verificación en Plant 3D:**

```
1. Identificar válvulas de operación frecuente:
   - Filtrar por: Control = Manual, Frequency = Daily/Weekly
   - Extraer lista desde Data Manager

2. Verificar elevación de cada válvula:
   - Z-coordinate de handwheel
   - Si Z < 900mm o Z > 1500mm → Flag para revisión

3. Determinar necesidad de plataforma:
   - Válvulas sobre 2200mm: plataforma obligatoria
   - Cluster de válvulas en altura: plataforma recomendada

4. Modelar plataformas de acceso:
   - Agregar plataformas donde requerido
   - Verificar clearances de guardrails
   - Ejecutar clash detection de plataformas vs otros sistemas
```

![Ergonomía y Seguridad](../imagenes/leccion-27-ergonomia-seguridad.png)

## Resumen de la Lección

En esta lección hemos cubierto detección y resolución de interferencias en AutoCAD Plant 3D:

**Puntos Clave:**

1. **Tipos de interferencias:** Hard clashes (físicos), soft clashes (violaciones de holgura), y workflow clashes (secuencia de construcción)

2. **Detección en Plant 3D:** Herramienta nativa INTERFERE para verificación rápida durante diseño

3. **Configuración avanzada:** Matrices de detección, tolerancias personalizadas, y filtrado de resultados

4. **Flujo de trabajo de resolución:** Proceso sistemático de detección, asignación, análisis, resolución, verificación y documentación

5. **Estrategias de resolución:** Reubicación, rediseño, coordinación multidisciplinaria, y aceptación justificada

6. **Priorización:** Sistema de clasificación por severidad (P1-P4) para manejo eficiente

7. **Validación de acceso:** Verificación de holguras para operación, mantenimiento y seguridad

**Aplicación Práctica:**

Detección sistemática de interferencias es crítica para:

- **Reducir costos de cambio:** Resolver conflictos en fase de diseño es 90% más económico que en construcción
- **Mejorar constructibilidad:** Modelo validado resulta en construcción más fluida
- **Garantizar operabilidad:** Espacios de acceso adecuados facilitan operación y mantenimiento
- **Cumplimiento de códigos:** Validar distancias mínimas requeridas por normativa

**Próximos Pasos:**

En la próxima lección (Lección 28), exploraremos integración con Autodesk Navisworks para detección avanzada de interferencias, animaciones 4D, y presentaciones para stakeholders.

## Ejercicio Práctico

Ver archivo `ejercicios.md` para el Ejercicio 27: Detección completa de interferencias en modelo de planta.

**Duración estimada:** 45 minutos
