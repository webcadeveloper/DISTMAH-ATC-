# Lección 4: Nuevas Herramientas de Dibujo y Edición

## Introducción

AutoCAD 2026 introduce un conjunto significativo de herramientas nuevas y mejoras a comandos existentes que transforman operaciones cotidianas. Estas no son simplemente refinamientos cosméticos, sino mejoras fundamentales que reducen pasos, aumentan precisión y habilitan flujos de trabajo antes imposibles o extremadamente complicados.

Desde el nuevo comando SMARTOFFSET que ajusta automáticamente parámetros según contexto, hasta BLENDCURVE que crea transiciones perfectas entre splines, pasando por mejoras revolucionarias en HATCH que ahora detecta límites con inteligencia artificial, cada nueva herramienta ha sido diseñada respondiendo a feedback directo de millones de usuarios profesionales. Esta lección te permitirá dominar estas herramientas desde el primer día y aplicarlas inmediatamente para acelerar tu trabajo.

## Objetivos de la Lección

- Dominar nuevos comandos de dibujo introducidos en AutoCAD 2026
- Utilizar mejoras significativas en comandos de edición existentes
- Implementar herramientas de precisión avanzadas en proyectos reales
- Optimizar flujos de trabajo con nuevos shortcuts y atajos
- Combinar múltiples herramientas nuevas para máxima eficiencia

## Duración
1 hora

## Contenido

### 1. Nuevos Comandos de Dibujo

**SMARTOFFSET - Offset Inteligente**

El comando OFFSET tradicional ha sido potenciado con inteligencia contextual:

**Características Nuevas:**

**Auto-Gap Detection:**
Al hacer offset de polilíneas con gaps, el sistema:
- Detecta automáticamente espacios
- Ofrece cerrarlos automáticamente
- Opciones: Extend, Fillet, Leave Open

**Multiple Distance Preview:**
Antes de confirmar, puedes ver previews de múltiples distancias simultáneamente:
```
Comando: SMARTOFFSET
Select object: [selecciona polilínea]
Preview mode: Activa "Multi-Distance Preview"
Distances: 5, 10, 15, 20 (muestra las 4 simultáneamente en diferentes colores)
Select desired preview: Click en la que necesitas
```

**Layer Options Intelligent:**
- Auto-detect: Coloca offset en capa apropiada según convención
- Source layer: Tradicional, misma capa
- Current layer: Capa actual
- Named layer: Especifica capa destino

**Syntax Mejorada:**
```
SMARTOFFSET
Options:
  D = Distance (con memoria de últimas 5 distancias usadas)
  T = Through point (especifica punto para calcular distancia)
  M = Multiple (múltiples offsets en una operación)
  E = Erase source (elimina original automáticamente)
  G = Gap handling (cómo manejar gaps)
```

![SmartOffset](../imagenes/leccion-4-smartoffset.png)

**BLENDCURVE - Transiciones Perfectas**

Nuevo comando para crear curvas de transición suaves entre splines, arcos y líneas:

**Uso Básico:**
```
Comando: BLENDCURVE
Select first curve: [selecciona spline o arc]
Select second curve: [selecciona otra curva]
Continuity: [G0/G1/G2]
  G0 = Tangent (básico)
  G1 = Curvature (suave)
  G2 = Smooth curvature (perfecto para diseño industrial)
```

**Aplicaciones:**
- Diseño automotriz (transiciones entre paneles)
- Arquitectura orgánica (formas fluidas)
- Diseño de productos (ergonomía)
- Diseño de parques (paths y caminos)

**ARRAYCIRCULAR3D - Arrays Circulares en 3D**

Extensión del ARRAYPOLAR tradicional que funciona en espacio 3D completo:

**Novedades:**
- Eje de rotación en cualquier orientación (no solo Z)
- Preview en tiempo real mientras ajustas parámetros
- Asociatividad mejorada con grips 3D
- Opciones de rotación de objetos mientras se arrayan

**Ejemplo:**
```
ARRAYCIRCULAR3D
Select objects: [selecciona objeto 3D]
Specify center point of array: [punto en espacio 3D]
Specify axis direction: [vector 3D personalizado]
Items: 12
Angle to fill: 360
Rotate objects as copied: YES
```

**POLYLINECOMBINE - Combinar Polilíneas Inteligentemente**

Nuevo comando que combina múltiples polilíneas con lógica avanzada:

**Características:**
- Detecta polilíneas conectadas o cercanas
- Auto-cierra gaps menores al tolerance especificado
- Mantiene propiedades (ancho, elevación) de manera inteligente
- Maneja intersecciones con opciones de prioridad

**Opciones:**
```
POLYLINECOMBINE
Select polylines: [selección múltiple]
Options:
  Gap tolerance: 0.01 (ajustable)
  Join method: Extend / Fillet / Straight
  Property priority: First / Last / Heaviest / Average
  Remove originals: YES/NO
```

### 2. Mejoras en Comandos de Edición Existentes

**TRIM y EXTEND - Rediseñados**

Estos comandos fundamentales han sido completamente renovados:

**TRIM Mejorado:**

**Quick Mode:**
Ya no necesitas seleccionar cutting edges primero:
```
TRIM [Enter]
Empieza a hacer click directamente en lo que quieres cortar
AutoCAD detecta automáticamente edges de corte cercanos
```

**Fence Select:**
Nueva opción de selección tipo "fence" que corta todo lo que cruza:
```
TRIM
Press F for Fence mode
Dibuja línea de fence
Todo lo que cruza se corta automáticamente
```

**Smart Recognition:**
Detecta intención:
- Click cerca de extremo → Corta hasta edge más cercano
- Click en medio → Divide en el punto
- Double-click → Elimina segmento completo entre intersecciones

**EXTEND Features:**

**Auto-Target:**
El comando detecta automáticamente objetivos de extensión lógicos:
- Muros cercanos
- Líneas de grids
- Ejes de simetría

**Multiple Extensions:**
Extiende a múltiples targets con una sola selección:
```
EXTEND
Select objects to extend: [selecciona líneas]
AutoCAD muestra todos los targets posibles
Click en targets deseados (puede ser múltiples por objeto)
```

![Trim Extend Improved](../imagenes/leccion-4-trim-extend-mejorado.png)

**HATCH - Inteligencia Artificial Integrada**

El comando HATCH tiene las mejoras más dramáticas:

**AI Boundary Detection:**
El sistema de detección de límites usa IA para:
- Reconocer áreas incluso con gaps pequeños
- Sugerir cerrar gaps automáticamente
- Detectar islas internas sin selección manual
- Predecir intención cuando límites son ambiguos

**Contextual Pattern Suggestions:**
Basado en:
- Tipo de objeto (muro, piso, techo)
- Escala del dibujo
- Disciplina del proyecto (arquitectura/mecánico/eléctrico)
- Patrones usados recientemente en proyecto

**Match Properties Enhanced:**
```
HATCH
Match Properties (MA)
Select source hatch
Opciones nuevas:
  - Match pattern only
  - Match scale only
  - Match angle only
  - Match all (tradicional)
  - Add to favorites (nuevo)
```

**Hatch Preview Improvements:**
- Preview en tiempo real mientras ajustas escala/ángulo
- Preview transparente para ver geometría debajo
- Multiple pattern preview (muestra 4 patrones diferentes simultáneamente)

**FILLET y CHAMFER - Precisión Mejorada**

**FILLET Enhancements:**

**Smart Radius Selection:**
El comando recuerda y sugiere radios basados en:
- Radios usados recientemente en proyecto
- Radios estándar de tu disciplina
- Escala del dibujo actual

**Multiple Object Mode:**
```
FILLET
Polyline option
Select polyline
New option: "Smart corners"
  - Fillets only corners >90° (evita redondear detalles)
  - Preserva corners <90° (mantiene detalles finos)
  - Variable radius (radio adapta a ángulo)
```

**Trim/No Trim Intelligence:**
Detecta automáticamente si debe recortar basado en contexto:
- Objetos en capas diferentes → probablemente no recortar
- Objetos del mismo tipo → probablemente recortar
- Puede sobreescribirse manualmente

**CHAMFER Improvements:**

**Angle + Distance Method Enhanced:**
Nuevo método híbrido:
```
CHAMFER
Method: Angle-Distance
First distance: 10
Angle from first line: 45
AutoCAD calcula segunda distancia automáticamente
Preview muestra resultado antes de confirmar
```

### 3. Herramientas de Precisión Avanzadas

**MEASUREGEOM - Mediciones Inteligentes**

El comando de medición se ha transformado en herramienta analítica completa:

**Nuevas Opciones:**

**Area Advanced:**
```
MEASUREGEOM → Area
Options:
  Add area (tradicional)
  Subtract area (tradicional)
  Accumulate multiple (nuevo)
  Export to Excel (nuevo)
  Compare with target (nuevo - útil para verificar áreas)
```

**Distance 3D Enhanced:**
- Medición de distancia en espacio 3D completo
- Shortest distance entre objetos (no solo puntos)
- Clearance check (distancia mínima entre elementos)

**Volume Calculation:**
Para sólidos 3D:
- Volumen total
- Centro de gravedad (centroid)
- Momentos de inercia (para cálculos estructurales)
- Export a formato CSV para análisis

**Quick Measure Mode:**
```
Atajo: QM
Click en cualquier objeto
Muestra instantáneamente:
  - Longitud/Perímetro
  - Área (si aplicable)
  - Coordenadas de extremos
  - Ángulo (si línea inclinada)
```

![MeasureGeom Enhanced](../imagenes/leccion-4-measuregeom.png)

**OVERKILL - Limpieza Inteligente**

El comando OVERKILL ha sido potenciado significativamente:

**AI-Powered Detection:**
Detecta no solo duplicados exactos, sino:
- Objetos casi duplicados (dentro de tolerance)
- Líneas fragmentadas que deberían ser una sola
- Arcos/círculos con centros casi idénticos
- Polilíneas con segmentos redundantes

**Selective Cleanup:**
```
OVERKILL
Select objects o ALL
Options mejoradas:
  Tolerance: 0.0001 (ajustable)
  Ignore object properties: YES/NO
  Combine partial overlaps: NEW OPTION
  Optimize polylines: NEW OPTION
  Maintain layer structure: NEW OPTION

Preview mode: Muestra qué se eliminará ANTES de ejecutar
```

**Cleanup Report:**
Genera reporte detallado:
- Número de objetos eliminados por tipo
- Reducción de tamaño de archivo
- Problemas detectados pero no resueltos automáticamente
- Recomendaciones de limpieza manual

### 4. Shortcuts y Flujos de Trabajo Optimizados

**Dynamic Input Improvements**

El sistema de entrada dinámica ha sido mejorado dramáticamente:

**Smart Coordinate Entry:**
```
Al dibujar línea:
Tipo: 100<45 [Enter]
Nuevo: Muestra preview de longitud Y ángulo mientras escribes
Antes: Solo veías resultado final
```

**Calculator Integration:**
Ahora puedes hacer cálculos directamente:
```
Command line: LINE
Specify first point:
Specify next point: 100+50,200/2 [Enter]
AutoCAD calcula: @150,100
```

**Unit Conversion On-The-Fly:**
```
Command: CIRCLE
Radius: 2' [Enter] (pies)
o
Radius: 24" [Enter] (pulgadas)
o
Radius: 600mm [Enter] (milímetros)

AutoCAD convierte automáticamente a unidades del dibujo
```

**Grips Enhanced**

El sistema de grips tiene nuevas capacidades:

**Multi-Functional Grips:**
Grips ahora tienen opciones contextuales:
- Hover sobre grip → Aparece menu con opciones
- Stretch / Move / Rotate / Scale según tipo de objeto
- Right-click en grip → Opciones avanzadas

**Grip Snapping:**
Grips ahora se atraen magnéticamente a:
- Grips de otros objetos
- Grid points
- Puntos notables (mid, end, center)

Configurable en OPTIONS → Selection → Grip Snap Radius

**Custom Grip Behavior:**
```
OPTIONS → Selection → Grips
New options:
  Grip color customization (unselected/hover/selected)
  Grip size adaptation (más grandes en objetos pequeños)
  Grip preview lines (muestra resultado antes de soltar)
```

![Enhanced Grips](../imagenes/leccion-4-grips-mejorados.png)

**Properties Palette Quick Edit**

La paleta de propiedades ahora permite ediciones ultra-rápidas:

**Quick Access Properties:**
Favoritos configurables en la parte superior:
```
Default favorites:
- Layer
- Color
- Linetype
- Lineweight

Personaliza añadiendo propiedades que editas frecuentemente:
- Elevation
- Thickness
- Plot style
```

**Bulk Property Change:**
Selecciona múltiples objetos de diferentes tipos:
```
Properties palette muestra:
- Propiedades comunes (editables en todos simultáneamente)
- Propiedades específicas (agrupadas por tipo de objeto)

Cambio masivo sin scripts ni LISP
```

**Property Formulas:**
Nuevo en 2026:
```
En campo de propiedad numérica, puedes escribir fórmulas:
Length: =SUM(selected) → Suma longitudes de todos seleccionados
Area: =MULTIPLY(10,5) → Calcula área
Rotation: =CURRENT+45 → Rota 45° desde ángulo actual
```

### 5. Comandos Express Tools Integrados

Varios Express Tools populares ahora son comandos nativos:

**FLATTEN** (antes Express Tool):
Convierte objetos 3D a 2D proyectándolos a plano:
```
FLATTEN
Select objects
Projection plane: Current UCS / Top / Front / Right / Custom
Mantiene o elimina Z-elevation
```

**BREAKLINE** (nuevo nativo):
Crea símbolo de línea quebrada automáticamente:
```
BREAKLINE
Select line
Break symbol style: [6 estilos predefinidos]
Size: Auto / Manual
```

**LAYOUTMERGE** (antes Express Tool):
Combina múltiples layouts en uno solo:
```
LAYOUTMERGE
Select layouts to merge
Arrangement: Grid / Linear / Custom
Spacing: Auto / Manual
```

**TEXTUNMASK**/**TEXTMASK** (mejorados):
```
TEXTMASK
Select text
Offset factor: 1.5 (ajustable)
Background: Viewport / Drawing / Custom color

Nuevo: Mask se actualiza automáticamente si texto cambia
```

### 6. Automatización de Tareas Repetitivas

**Action Recorder Improvements**

El grabador de acciones ha sido significativamente mejorado:

**AI-Assisted Recording:**
- Detecta loops automáticamente
- Sugiere pausas para input de usuario
- Optimiza acciones redundantes

**Smart Playback:**
```
Opciones de reproducción:
- Exact replay: Mismas coordenadas absolutas
- Relative replay: Coordenadas relativas
- Interactive replay: Pausa para input usuario
- Batch replay: Ejecuta en múltiples archivos
```

**Macro Library:**
Biblioteca compartible de macros:
- Import/Export como archivos .ACTM
- Share con equipo
- Cloud sync disponible

## Ejercicio Práctico

**Ejercicio 1: SmartOffset Avanzado**

1. Dibuja una polilínea con forma de L (90°)
2. Usa SMARTOFFSET con Multi-Distance Preview
3. Prueba distancias: 10, 20, 30
4. Activa Gap Handling → Fillet
5. Observa resultado vs OFFSET tradicional

**Ejercicio 2: Trim/Extend Modernos**

1. Dibuja cuadrícula de líneas (5x5)
2. Usa TRIM en Quick Mode (sin seleccionar cutting edges)
3. Prueba Fence Mode
4. Usa EXTEND con Auto-Target
5. Compara velocidad vs método tradicional

**Ejercicio 3: HATCH con IA**

1. Dibuja contorno irregular con gap pequeño (~2mm)
2. Usa HATCH → Observa AI Boundary Detection
3. Acepta sugerencia de cerrar gap
4. Prueba Multiple Pattern Preview
5. Usa Match Properties Enhanced en otro hatch

**Ejercicio 4: MeasureGeom Avanzado**

1. Dibuja polígono irregular
2. MEASUREGEOM → Area
3. Usa Accumulate Multiple para sumar 3 áreas diferentes
4. Export to Excel
5. Compara con target area de 500 unidades²

**Ejercicio 5: Workflow Completo**

Combina múltiples herramientas nuevas:
1. Dibuja planta simple con SMARTOFFSET
2. Limpia duplicados con OVERKILL
3. Ajusta esquinas con FILLET mejorado
4. Añade HATCH con AI detection
5. Mide áreas con MEASUREGEOM
6. Crea Action Macro de todo el proceso

## Consejos Profesionales

- **Prueba Quick Mode:** TRIM y EXTEND en Quick Mode ahorran 50% de tiempo
- **Configura favoritos:** Properties Palette favorites para propiedades que editas frecuentemente
- **Action Macros:** Graba tareas que haces 3+ veces al día
- **SmartOffset Always:** Usa SMARTOFFSET en lugar de OFFSET, tiene todas las capacidades del viejo más nuevas
- **AI Trust:** Confía en AI Boundary Detection de HATCH, es sorprendentemente preciso

## Preguntas Frecuentes

**P: ¿Puedo seguir usando comandos viejos?**
R: Sí, comandos tradicionales siguen funcionando idénticamente. Comandos nuevos son adiciones, no reemplazos.

**P: ¿SMARTOFFSET reemplaza OFFSET?**
R: OFFSET sigue existiendo, pero SMARTOFFSET incluye todas sus capacidades + nuevas funciones.

**P: ¿Las mejoras de HATCH funcionan offline?**
R: Sí, el AI engine corre localmente, no requiere internet.

**P: ¿Cómo vuelvo atrás si un comando nuevo no funciona como esperaba?**
R: UNDO funciona normalmente. Además, muchos comandos nuevos tienen Preview antes de commit.

## Recursos Adicionales

- Video: "New Drawing Tools Deep Dive" (45 min)
- Cheat sheet: Shortcuts de herramientas nuevas (PDF descargable)
- Practice files: Ejercicios adicionales para cada comando
- Comparison chart: Viejo vs Nuevo (tiempo ahorrado)

## Resumen

Las nuevas herramientas de dibujo y edición de AutoCAD 2026 representan décadas de feedback de usuarios destilado en mejoras prácticas que ahorran tiempo real. Desde SMARTOFFSET que anticipa necesidades hasta HATCH con IA que detecta límites inteligentemente, cada herramienta ha sido diseñada para reducir fricción y aumentar precisión. Dominar estas herramientas puede reducir tiempos de dibujo 30-40% en operaciones cotidianas.

## Próximos Pasos

Has completado el Módulo 1 sobre Novedades de AutoCAD 2026. En el Módulo 2, exploraremos las mejoras de productividad, optimizaciones de rendimiento, integraciones en la nube y mejores prácticas de migración desde versiones anteriores.
