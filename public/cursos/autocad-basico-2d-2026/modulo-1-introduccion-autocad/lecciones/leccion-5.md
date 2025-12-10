# Lección 5: Sistema de Entrada Dinámica

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Comprender el sistema de Dynamic Input y sus componentes
2. Utilizar Pointer Input para entrada de coordenadas junto al cursor
3. Aplicar Dimension Input para ingresar dimensiones directamente
4. Dominar Dynamic Prompts para ver opciones de comando en el cursor
5. Configurar Dynamic Input según preferencias de trabajo
6. Combinar Dynamic Input con métodos tradicionales
7. Usar tecla TAB para navegar entre campos de entrada
8. Alternar entre modos de entrada con símbolos especiales (@ y #)

## Introducción

Dynamic Input, introducido en AutoCAD 2006 y refinado constantemente, representa un cambio paradigmático en cómo interactúas con AutoCAD. Tradicionalmente, los usuarios debían mirar constantemente entre el cursor (donde dibujan) y la línea de comandos (donde ingresan datos). Dynamic Input unifica ambas áreas, mostrando información y solicitudes de entrada directamente junto al cursor.

AutoCAD 2026 mejora Dynamic Input con:

- **Enhanced Tooltips**: Información contextual expandida con ejemplos
- **Smart Field Recognition**: Predicción de campos más probables
- **Improved TAB Navigation**: Navegación más fluida entre campos
- **Dark Theme Optimization**: Mejor legibilidad en fondos oscuros
- **Multi-monitor Support**: Tooltips adaptativos según disposición de pantallas

Estudios de Autodesk demuestran que Dynamic Input puede aumentar velocidad de dibujo hasta 40% una vez dominado, eliminando movimientos oculares constantes entre cursor y línea de comandos.

## Contenido

### 1. Componentes de Dynamic Input

Dynamic Input consta de tres componentes principales:

![Dynamic Input Components](../imagenes/leccion-5-dynamic-input-components.png)

#### 1. Pointer Input (Entrada de Puntero)

Muestra coordenadas del cursor y permite entrada de coordenadas junto al cursor.

**Visualización**: Tooltips flotantes mostrando X,Y o distancia<ángulo

#### 2. Dimension Input (Entrada de Dimensión)

Durante creación de objetos, muestra campos para ingresar dimensiones (largo, ancho, radio, etc).

**Visualización**: Campos editables junto al objeto siendo creado

#### 3. Dynamic Prompts (Avisos Dinámicos)

Muestra opciones y mensajes de comando junto al cursor en lugar de solo en línea de comandos.

**Visualización**: Tooltip con opciones disponibles y descripción del paso actual

### 2. Activar/Desactivar Dynamic Input

**Toggle rápido**: Tecla `F12`

**Status Bar**: Clic en icono DYN (Dynamic Input)

**Verificación**:
- ON: Icono DYN azul en status bar, tooltip aparece junto a cursor
- OFF: Icono DYN gris, sin tooltips en cursor

### 3. Configuración de Dynamic Input

**Comando DSETTINGS**:
```
Command: DSETTINGS (o DS)
Tab: Dynamic Input
```

![DSETTINGS Dialog - Dynamic Input](../imagenes/leccion-5-dsettings-dialog.png)

**Opciones principales**:

✓ **Enable Pointer Input**: Activa entrada de coordenadas en cursor
✓ **Enable Dimension Input where possible**: Muestra dimensiones editables
✓ **Enable Dynamic Prompts**: Muestra opciones de comando en cursor

#### Configuración de Pointer Input

**Botón "Settings" junto a Enable Pointer Input**:

**Format**:
- **Polar format**: Distancia < ángulo (recomendado para dibujo)
- **Cartesian format**: X, Y (recomendado para coordenadas absolutas)
- **Relative coordinates**: @ implícito (coordenadas relativas por defecto)
- **Absolute coordinates**: Coordenadas absolutas por defecto

![Pointer Input Settings](../imagenes/leccion-5-pointer-input-settings.png)

**Visibility**:
- **As soon as I type coordinate data**: Tooltip aparece al escribir
- **When a command asks for a point**: Tooltip siempre visible durante comandos
- **Always - even when not in a command**: Tooltip siempre visible

**Configuración recomendada para principiantes**:
```
Format: Polar format
✓ Relative coordinates
Visibility: When a command asks for a point
```

**Configuración profesional**:
```
Format: Polar format
Relative coordinates (desmarcar para usar @ explícitamente)
Visibility: As soon as I type coordinate data
```

#### Configuración de Dimension Input

**Botón "Settings" junto a Enable Dimension Input**:

**Options**:
- ✓ **Show only 1 dimension input field at a time**: Muestra solo un campo (más simple)
- ✓ **Show 2 dimension input fields at a time**: Muestra múltiples campos simultáneamente (más potente)
- ✓ **Show the following dimension input fields simultaneously**: Personalizar cuáles campos mostrar

**Campos disponibles** (varía según comando):
- Length
- Angle
- Radius
- Arc length
- Resulting dimension

**Configuración recomendada**:
```
✓ Show 2 dimension input fields at a time
[Esto permite TAB entre campos]
```

#### Configuración de Dynamic Prompts

**Botón "Settings" junto a Enable Dynamic Prompts**:

**Options**:
- ✓ **Show command prompting and command input near the crosshairs**: Mensajes completos junto a cursor
- **Show additional tips with command prompting**: Tips extra (puede ser verbose)
- **Colors**: Personalizar colores de tooltips

**Configuración recomendada**:
```
✓ Show command prompting and command input near the crosshairs
Show additional tips: Marcar si eres principiante, desmarcar si experto
```

### 4. Uso de Pointer Input

Con Pointer Input activo (F12 ON):

**Modo Polar (distancia < ángulo)**:

```
Command: LINE
Specify first point: [clic en punto inicial]
[Aparece tooltip mostrando distancia y ángulo desde punto inicial]
[Mueve cursor - valores se actualizan en tiempo real]
Specify next point: 100 [escribe distancia, presiona TAB]
[Campo ángulo se activa]
Specify next point: 45 [escribe ángulo, Enter]
[Línea de 100 unidades a 45 grados se crea]
```

![Pointer Input Polar Mode](../imagenes/leccion-5-pointer-input-polar.png)

**Flujo completo**:
1. Comando solicita punto
2. Tooltip aparece junto a cursor
3. Escribes distancia: `100`
4. Presionas TAB (cambia a campo ángulo)
5. Escribes ángulo: `45`
6. Presionas ENTER
7. Objeto se crea

**Modo Cartesiano (X, Y)**:

```
Command: LINE
Specify first point: [clic]
[Tooltip muestra X,Y]
Specify next point: 100 [escribe X, presiona TAB]
50 [escribe Y, Enter]
[Línea horizontal 100, vertical 50 desde punto inicial]
```

**Navegación con TAB**:
- TAB: Avanza al siguiente campo
- Shift+TAB: Retrocede al campo anterior
- ENTER: Acepta valores y ejecuta

**Teclas especiales durante Pointer Input**:

**@ (arroba)**: Fuerza coordenadas relativas
```
Specify next point: @100,50
[Relativas desde último punto, ignorando configuración de Pointer Input]
```

**# (numeral)**: Fuerza coordenadas absolutas
```
Specify next point: #200,150
[Absolutas desde origen 0,0, ignorando configuración de Pointer Input]
```

### 5. Uso de Dimension Input

Durante comandos de dibujo, Dimension Input muestra campos para dimensiones específicas del objeto.

**Ejemplo - Comando RECTANG**:

```
Command: RECTANG
Specify first corner point: [clic en punto inicial]
[Aparecen dos campos: Width y Height]
Specify other corner point or [Area/Dimensions/Rotation]:
  Width: [campo activo]
  Height: [campo inactivo]
```

**Entrada de dimensiones**:
```
[Escribe] 80 [Width = 80]
[Presiona TAB]
[Campo Height se activa]
[Escribe] 50 [Height = 50]
[Enter]
[Rectángulo 80x50 se crea]
```

![Dimension Input Rectang](../imagenes/leccion-5-dimension-input-rectang.png)

**Ejemplo - Comando CIRCLE**:

```
Command: CIRCLE
Specify center point: [clic]
Specify radius of circle or [Diameter]:
  Radius: [campo activo]
[Escribe] 40 [Enter]
[Círculo con radio 40 se crea]
```

**Cambiar entre opciones con TAB**:
```
Command: CIRCLE
Specify center point: [clic]
[Campo muestra "Radius"]
[Presiona TAB repetidamente]
[Alterna entre "Radius" y "Diameter"]
[Escribe valor deseado]
```

**Dimension Input con polilíneas**:

```
Command: PLINE
Specify start point: [clic]
Specify next point or [Arc/Halfwidth/Length/Undo/Width]:
  [Campos: Length, Angle]
100 [TAB] 0 [Enter] - Segmento horizontal 100
[TAB para cambiar a Length]
50 [TAB] 90 [Enter] - Segmento vertical 50
```

### 6. Uso de Dynamic Prompts

Dynamic Prompts muestra mensajes y opciones de comando junto al cursor.

**Sin Dynamic Prompts**:
```
Command line muestra:
Command: CIRCLE
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]:
```

**Con Dynamic Prompts**:
```
Tooltip en cursor muestra:
  Specify center point
  [3P/2P/Ttr]
```

**Activar opciones desde Dynamic Prompts**:

**Método 1**: Escribe letra mayúscula de opción
```
[Tooltip muestra: Specify center point [3P/2P/Ttr]]
[Escribe] 3P [Enter]
[Activa opción 3 Points]
```

**Método 2**: Flecha abajo para menú
```
[Presiona flecha ↓]
[Aparece menú con opciones:]
  Center, Radius
  3P (3 Points)
  2P (2 Points)
  Ttr (Tan, Tan, Radius)
[Selecciona con flechas, Enter]
```

![Dynamic Prompts Menu](../imagenes/leccion-5-dynamic-prompts-menu.png)

**Novedad 2026**: Menú de opciones ahora muestra iconos representativos de cada opción.

### 7. Direct Distance Entry con Dynamic Input

Combinación poderosa: Apuntas dirección con cursor + escribes distancia.

**Con ORTHO (F8) activado**:

```
Command: LINE
Specify first point: [clic]
[Apunta cursor hacia la derecha]
100 [Enter]
[Línea horizontal de 100 unidades]

[Apunta cursor hacia arriba]
50 [Enter]
[Línea vertical de 50 unidades]

[Apunta cursor hacia la izquierda]
100 [Enter]
[Línea horizontal de 100 hacia izquierda]
```

**Sin necesidad de**:
- Especificar ángulo (el cursor lo define)
- Usar coordenadas polares
- Escribir @ para relativas

**Flujo profesional más rápido**:
```
L [Enter] - Activa LINE
[Clic punto inicial]
[Apunta derecha] 150 [Enter]
[Apunta arriba] 80 [Enter]
[Apunta izquierda] 150 [Enter]
C [Enter] - Cierra
[Rectángulo 150x80 creado en 3 segundos]
```

**Con Polar Tracking (F10)**:

Polar Tracking + Direct Distance Entry = Máxima velocidad

```
[Activa Polar Tracking a 45°]
Command: LINE
[Clic inicio]
[Apunta a 45°, Polar Tracking muestra tracking line]
100 [Enter]
[Línea perfecta a 45° de 100 unidades]
```

### 8. Combinaciones de Entrada

Puedes mezclar métodos según necesidad:

**Ejemplo complejo**:
```
Command: LINE
Specify first point: 100,100 [absoluto tradicional]
Specify next point: [Dynamic Input] 150 [TAB] 0 [Enter]
Specify next point: @0,75 [relativo tradicional con @]
Specify next point: [Direct Distance: apunta izquierda] 150 [Enter]
Specify next point: C [cierra]
```

**Cuándo usar cada método**:

| Situación | Método recomendado |
|-----------|-------------------|
| Primer punto de objeto | Coordenadas absolutas tradicionales: 100,50 |
| Líneas ortogonales (H/V) | Direct Distance Entry + ORTHO |
| Líneas angulares conocidas | Dynamic Input polar: 100 TAB 45 |
| Rectángulos, círculos | Dimension Input: 80 TAB 50 |
| Punto relativo complejo | Coordenadas relativas tradicionales: @50,30 |
| Línea a 45° u otro ángulo preciso | Direct Distance + Polar Tracking |

### 9. Atajos y Tips de Dynamic Input

**Atajos de teclado durante Dynamic Input**:

- **TAB**: Navega entre campos (Length ↔ Angle, Width ↔ Height)
- **Shift+TAB**: Navega hacia atrás
- **↓ (Flecha abajo)**: Abre menú de opciones de comando
- **↑ (Flecha arriba)**: Navega menú hacia arriba
- **Enter**: Acepta valores y ejecuta
- **Esc**: Cancela entrada actual
- **@**: Fuerza coordenadas relativas
- **#**: Fuerza coordenadas absolutas
- **<**: Separador de ángulo en modo cartesiano (100<45)

**Tips profesionales**:

1. **Mínima escritura**:
   ```
   En lugar de: 100 [TAB] 45 [Enter]
   Escribe: 100<45 [Enter]
   [El símbolo < actúa como TAB automático]
   ```

2. **Saltar campos vacíos**:
   ```
   Si solo necesitas altura de rectángulo:
   [TAB para saltar width]
   50 [Enter]
   [Width toma valor del cursor, Height = 50]
   ```

3. **Cambio rápido Radius/Diameter**:
   ```
   CIRCLE comando:
   Campo muestra "Radius"
   Escribe: D [Enter] - Cambia a Diameter mode
   O TAB para alternar
   ```

4. **Coordenadas relativas implícitas**:
   ```
   Con "Relative coordinates" marcado en configuración:
   No necesitas @, todas son relativas automáticamente
   Para absolutas, usa #100,50
   ```

### 10. Dynamic Input vs Command Line

**Ventajas de Dynamic Input**:
- ✓ No necesitas mirar lejos del cursor
- ✓ Feedback visual inmediato
- ✓ Entrada más intuitiva para principiantes
- ✓ Opciones de comando visibles sin memorizar
- ✓ Menos errores de sintaxis

**Ventajas de Command Line tradicional**:
- ✓ Más rápido para usuarios expertos que memorizan sintaxis
- ✓ Historial visible de todos los comandos
- ✓ Copy/paste de comandos complejos
- ✓ Scripting y macros más claros
- ✓ No obstruye vista del dibujo

**Recomendación**: Usa **ambos** según contexto:
- Dynamic Input para dibujo activo
- Command Line para verificar historial y comandos complejos

### 11. Solución de Problemas Comunes

**Problema 1**: Tooltip no aparece
```
Solución:
- Verifica F12 está ON (icono DYN azul)
- DSETTINGS > Dynamic Input > Todas las opciones marcadas
- Reinicia AutoCAD si persiste
```

**Problema 2**: TAB no cambia entre campos
```
Solución:
- DSETTINGS > Dimension Input Settings
- Marca "Show 2 dimension input fields at a time"
```

**Problema 3**: Coordenadas relativas no funcionan
```
Solución:
- Pointer Input Settings > Marca "Relative coordinates"
- O usa @ explícitamente: @100,50
```

**Problema 4**: Tooltip obstruye vista
```
Solución:
- Mueve cursor ligeramente (tooltip sigue)
- O reduce tamaño: DSETTINGS > Display > Tooltip appearance
- Temporalmente F12 OFF para desactivar
```

**Problema 5**: Valores incorrectos al escribir
```
Solución:
- Verifica qué campo está activo (resaltado)
- Usa TAB para cambiar al campo correcto
- Verifica unidades (mm vs metros vs inches)
```

### 12. Prácticas Recomendadas

**Para principiantes**:
```
Configuración inicial:
✓ Enable Pointer Input - Polar format, Relative coordinates
✓ Enable Dimension Input - Show 2 fields
✓ Enable Dynamic Prompts - Con additional tips
F12: ON permanentemente
ORTHO (F8): ON durante práctica inicial
```

**Para usuarios intermedios**:
```
Toggle F12 según necesidad:
- ON para geometría dimensional (rectángulos, círculos)
- OFF para edición compleja con muchos objetos (menos visual clutter)
Aprende atajos: @ # < TAB
```

**Para profesionales**:
```
Configuración híbrida:
- Dynamic Input ON
- Relative coordinates OFF (usar @ explícitamente)
- Dimension Input ON solo cuando sea útil
- Dominio completo de Direct Distance Entry
- Command Line siempre visible para verificación
```

## Ejercicio Práctico

**Ejercicio 5.1: Configuración de Dynamic Input**

Tiempo: 15 minutos

1. `DSETTINGS` > Tab Dynamic Input
2. Activa las tres opciones principales
3. Configura Pointer Input: Polar, Relative
4. Configura Dimension Input: 2 fields
5. Activa Dynamic Prompts
6. Presiona F12 para toggle y observa cambios

**Ejercicio 5.2: Dibujo con Pointer Input**

Tiempo: 20 minutos

1. F12 ON (Dynamic Input activo)
2. `LINE`
3. Dibuja cuadrado 100x100 usando Pointer Input:
   ```
   Clic punto inicial
   100 [TAB] 0 [Enter] - Lado derecho
   100 [TAB] 90 [Enter] - Lado superior
   100 [TAB] 180 [Enter] - Lado izquierdo
   C [Enter] - Cierra
   ```
4. Repite usando Direct Distance Entry (más rápido):
   ```
   F8 ON (ORTHO)
   Clic inicio
   [Apunta derecha] 100 [Enter]
   [Apunta arriba] 100 [Enter]
   [Apunta izquierda] 100 [Enter]
   C [Enter]
   ```

**Ejercicio 5.3: Dimension Input**

Tiempo: 20 minutos

1. Dibuja 3 rectángulos usando `RECTANG`:
   ```
   Rectángulo 1: 80 x 50
   Command: RECTANG
   [Clic first corner]
   80 [TAB] 50 [Enter]

   Rectángulo 2: 120 x 75
   Rectángulo 3: 60 x 60 (cuadrado)
   ```

2. Dibuja 3 círculos usando `CIRCLE`:
   ```
   Círculo 1: Radio 40
   [Clic center]
   40 [Enter]

   Círculo 2: Diameter 100
   [Clic center]
   [TAB hasta ver "Diameter"]
   100 [Enter]

   Círculo 3: Radio 25
   ```

**Ejercicio 5.4: Combinación de Métodos**

Tiempo: 25 minutos

Dibuja perfil de casa usando combinación óptima:

```
Command: LINE
100,100 [absoluto - esquina inferior izquierda]
[Apunta derecha, ORTHO ON] 150 [Enter] - Base
[Apunta arriba] 100 [Enter] - Muro derecho
75<120 [Enter] - Techo lado derecho (polar con <)
@-75,0 [Enter] - Techo lado izquierdo (relativo tradicional)
C [Enter] - Cierra

[Resultado: Perfil de casa simple]
```

**Ejercicio 5.5: Speed Test**

Tiempo: 10 minutos

Cronometra cuánto tardas:

**Método 1: Sin Dynamic Input (F12 OFF)**
```
Dibujar rectángulo 100x75
Dibujar círculo radio 50
Dibujar línea 80 unidades a 45°
```

**Método 2: Con Dynamic Input (F12 ON)**
```
Mismos objetos
```

Compara tiempos. Dynamic Input debería ser más rápido.

## Resumen

Dominaste Dynamic Input y sus tres componentes:

✓ **Pointer Input**: Coordenadas junto al cursor (polar o cartesiano)
✓ **Dimension Input**: Dimensiones editables de objetos
✓ **Dynamic Prompts**: Opciones de comando en cursor
✓ **TAB Navigation**: Cambiar entre campos
✓ **Direct Distance Entry**: Apuntar + escribir distancia
✓ **Símbolos especiales**: @ (relativo), # (absoluto), < (ángulo)
✓ **Configuración personalizada**: DSETTINGS

**Atajos esenciales**:
- `F12`: Toggle Dynamic Input ON/OFF
- `TAB`: Cambiar entre campos
- `Shift+TAB`: Campo anterior
- `↓`: Menú de opciones de comando
- `@`: Forzar coordenadas relativas
- `#`: Forzar coordenadas absolutas
- `<`: Separador de ángulo

**Flujo profesional**:
```
Geometría ortogonal: Direct Distance + ORTHO
Geometría angular: Pointer Input polar (distancia TAB ángulo)
Rectángulos/círculos: Dimension Input
Coordenadas precisas: Métodos tradicionales (@, absolutos)
```

**Próxima lección**: Archivos DWG y Plantillas - aprenderás a gestionar archivos, crear plantillas personalizadas, usar Drawing Utilities y configurar archivos de recuperación automática.

## Preguntas de Autoevaluación

1. ¿Qué tecla activa/desactiva Dynamic Input?
2. ¿Cuáles son los tres componentes de Dynamic Input?
3. ¿Qué hace la tecla TAB durante Dynamic Input?
4. ¿Qué símbolo fuerza coordenadas relativas?
5. ¿Qué símbolo fuerza coordenadas absolutas?
6. ¿Cómo se usa Direct Distance Entry?
7. ¿Dónde configuras Dynamic Input?
8. ¿Cuál es más rápido para líneas ortogonales: coordenadas polares o Direct Distance?

---

**Práctica recomendada**: Usa Dynamic Input exclusivamente durante una semana para desarrollar memoria muscular. Luego alterna según necesidad.
