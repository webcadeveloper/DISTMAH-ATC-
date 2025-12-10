# Lección 2: Sistema de Coordenadas y Unidades

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Comprender el sistema de coordenadas cartesianas de AutoCAD (X, Y, Z)
2. Diferenciar entre coordenadas absolutas, relativas cartesianas y relativas polares
3. Aplicar cada método de coordenadas en situaciones apropiadas
4. Configurar unidades de dibujo (métricas, imperiales, arquitectónicas)
5. Establecer precisión de unidades y ángulos
6. Interpretar las coordenadas del cursor en la barra de estado
7. Utilizar el UCS (User Coordinate System) efectivamente

## Introducción

El sistema de coordenadas es el fundamento matemático sobre el cual AutoCAD construye todo dibujo técnico. A diferencia del dibujo manual en papel, donde la precisión está limitada por la habilidad del dibujante y la calidad de los instrumentos, AutoCAD permite precisión absoluta mediante coordenadas numéricas.

AutoCAD utiliza un sistema de coordenadas cartesianas tridimensional, aunque en dibujo 2D trabajamos principalmente con los ejes X (horizontal) e Y (vertical), dejando Z en cero. Este sistema permite especificar la ubicación exacta de cada punto en el espacio de dibujo mediante números.

La comprensión profunda de los sistemas de coordenadas te permite:

- **Dibujar con precisión milimétrica** sin necesidad de medición visual
- **Reproducir dimensiones exactas** de planos existentes
- **Crear geometría matemáticamente perfecta** (círculos perfectos, líneas paralelas exactas)
- **Trabajar a cualquier escala** sin pérdida de precisión
- **Intercambiar datos** con software CAM, GIS y análisis de ingeniería

AutoCAD 2026 mantiene compatibilidad total con el sistema de coordenadas de versiones anteriores, garantizando que archivos creados hace décadas abren con precisión absoluta.

## Contenido

### 1. El Sistema de Coordenadas Cartesianas (WCS)

#### World Coordinate System (WCS)

El WCS es el sistema de coordenadas global y fijo de AutoCAD. Establece:

- **Origen (0,0,0)**: El punto de referencia absoluto
- **Eje X**: Se extiende horizontalmente hacia la derecha (positivo) e izquierda (negativo)
- **Eje Y**: Se extiende verticalmente hacia arriba (positivo) y abajo (negativo)
- **Eje Z**: Se extiende perpendicular a la pantalla (positivo hacia el usuario)

![Sistema de coordenadas WCS](../imagenes/leccion-2-wcs-sistema.png)

El icono del UCS en la esquina inferior izquierda muestra la orientación actual:
- Flecha X: Dirección del eje X
- Flecha Y: Dirección del eje Y
- Cuadrado en el origen: Indica que estás en WCS (World)

**Características del WCS**:
- Inmutable y universal para todo dibujo
- Origen siempre en (0,0,0)
- No puede rotarse ni moverse (es el marco de referencia absoluto)
- Coordenadas WCS son las que se muestran en la Status Bar por defecto

#### User Coordinate System (UCS)

El UCS es un sistema de coordenadas personalizado que puedes crear, rotar y mover. En dibujo 2D básico generalmente trabajamos en WCS, pero el UCS es esencial en 3D y en proyectos complejos.

**Comando UCS**:
```
Command: UCS
Enter an option [New/Move/orthoGraphic/Prev/Restore/Save/Del/Apply/?/World]: W
```

La opción "W" (World) regresa al WCS si estás en un UCS personalizado.

### 2. Métodos de Entrada de Coordenadas

AutoCAD ofrece tres métodos principales para especificar puntos mediante coordenadas:

#### Método 1: Coordenadas Absolutas (X,Y)

Las coordenadas absolutas especifican la ubicación exacta desde el origen (0,0).

**Formato**: `X,Y`

**Ejemplo práctico - Dibujar un rectángulo**:
```
Command: LINE
Specify first point: 100,50
Specify next point: 200,50
Specify next point: 200,120
Specify next point: 100,120
Specify next point: C
```

Este comando dibuja un rectángulo con:
- Esquina inferior izquierda: (100,50)
- Esquina inferior derecha: (200,50)
- Esquina superior derecha: (200,120)
- Esquina superior izquierda: (100,120)

![Coordenadas absolutas ejemplo](../imagenes/leccion-2-coordenadas-absolutas.png)

**Cuándo usar coordenadas absolutas**:
- Cuando conoces la ubicación exacta desde el origen
- Al transcribir puntos de una tabla de coordenadas
- En topografía y GIS donde tienes coordenadas geográficas
- Para el primer punto de cualquier objeto

**Ventajas**:
- Precisión absoluta desde el origen
- Fácil verificación matemática
- Repetible en cualquier sesión

**Desventajas**:
- Requiere cálculo mental para puntos relativos
- Poco práctico para geometría incremental

#### Método 2: Coordenadas Relativas Cartesianas (@X,Y)

Las coordenadas relativas se especifican desde el último punto introducido, usando el símbolo `@`.

**Formato**: `@DeltaX,DeltaY`

Donde DeltaX y DeltaY son desplazamientos desde el punto anterior.

**Ejemplo práctico - Mismo rectángulo con coordenadas relativas**:
```
Command: LINE
Specify first point: 100,50 (absoluto - punto inicial)
Specify next point: @100,0 (100 unidades a la derecha, 0 vertical)
Specify next point: @0,70 (0 horizontal, 70 hacia arriba)
Specify next point: @-100,0 (100 a la izquierda, 0 vertical)
Specify next point: C (cierra al inicio)
```

![Coordenadas relativas cartesianas](../imagenes/leccion-2-coordenadas-relativas.png)

**Interpretación de signos**:
- `@100,0`: 100 hacia la derecha (X positivo)
- `@-50,0`: 50 hacia la izquierda (X negativo)
- `@0,80`: 80 hacia arriba (Y positivo)
- `@0,-30`: 30 hacia abajo (Y negativo)
- `@40,60`: 40 derecha, 60 arriba (diagonal)
- `@-20,-15`: 20 izquierda, 15 abajo (diagonal)

**Cuándo usar coordenadas relativas cartesianas**:
- Cuando conoces dimensiones incrementales (ancho, alto)
- En dibujos arquitectónicos (muro de 5 metros, luego 3 metros)
- Para desplazamientos ortogonales (horizontales/verticales)
- Al trazar desde dimensiones conocidas

**Ventajas**:
- Natural para pensar en dimensiones (ancho x alto)
- No requiere conocer posición absoluta
- Ideal para geometría rectangular

**Desventajas**:
- Menos intuitivo para líneas angulares
- Requiere cálculo trigonométrico para diagonales

#### Método 3: Coordenadas Polares (@distancia<ángulo)

Las coordenadas polares especifican un punto mediante distancia y ángulo desde el último punto.

**Formato**: `@distancia<ángulo`

**Ejemplo práctico - Dibujar un triángulo equilátero**:
```
Command: LINE
Specify first point: 150,100 (absoluto - punto inicial)
Specify next point: @100<0 (100 unidades a 0 grados)
Specify next point: @100<120 (100 unidades a 120 grados)
Specify next point: C (cierra)
```

![Coordenadas polares ejemplo](../imagenes/leccion-2-coordenadas-polares.png)

**Sistema de ángulos en AutoCAD**:
- **0°**: Horizontal hacia la derecha (Este)
- **90°**: Vertical hacia arriba (Norte)
- **180°**: Horizontal hacia la izquierda (Oeste)
- **270°**: Vertical hacia abajo (Sur)
- Rotación antihoraria (counterclockwise) - estándar matemático

![Sistema angular AutoCAD](../imagenes/leccion-2-sistema-angular.png)

**Ejemplos de ángulos comunes**:
- `@50<0`: 50 unidades horizontal derecha
- `@50<90`: 50 unidades vertical arriba
- `@50<45`: 50 unidades diagonal 45° (NE)
- `@50<180`: 50 unidades horizontal izquierda
- `@50<270`: 50 unidades vertical abajo
- `@50<30`: 50 unidades a 30° sobre horizontal

**Cuándo usar coordenadas polares**:
- Para líneas angulares (techos inclinados, vigas diagonales)
- Radios y geometría circular
- Construcciones basadas en ángulos conocidos
- Diseño de estructuras radiales (escaleras circulares)

**Ventajas**:
- Intuitivo para geometría angular
- Perfecto para construcciones radiales
- Natural para ángulos específicos (30°, 45°, 60°)

**Desventajas**:
- Requiere conocer ángulo exacto
- Menos natural para geometría rectangular

### 3. Combinación de Métodos de Coordenadas

Los profesionales combinan los tres métodos según la situación:

**Ejemplo práctico - Perfil arquitectónico**:
```
Command: LINE
Specify first point: 0,0 (absoluto - inicio en origen)
Specify next point: @5000,0 (relativo cartesiano - base 5 metros)
Specify next point: @0,3000 (relativo cartesiano - muro 3 metros)
Specify next point: @2500<30 (polar - techo inclinado 30°)
Specify next point: @2500<150 (polar - otro lado techo)
Specify next point: C (cierra)
```

Este comando dibuja el perfil de una casa simple usando la combinación óptima de métodos.

### 4. Configuración de Unidades de Dibujo

El comando UNITS controla cómo AutoCAD interpreta y muestra números.

**Comando UNITS**:
```
Command: UNITS (o escribe UN)
```

Abre el diálogo "Drawing Units":

![Diálogo Drawing Units](../imagenes/leccion-2-units-dialog.png)

#### Length Type (Tipo de Longitud)

**Opciones disponibles**:

1. **Decimal** (predeterminado):
   - Formato: 15.5000
   - Uso: Ingeniería métrica, diseño mecánico, general
   - Ejemplo: 100.25 podría ser 100.25mm, metros, o cualquier unidad

2. **Engineering** (Ingeniería imperial):
   - Formato: 1'-3.5000"
   - Uso: Ingeniería civil en sistema imperial
   - Base: Pies y pulgadas decimales

3. **Architectural** (Arquitectónico):
   - Formato: 1'-3 1/2"
   - Uso: Arquitectura en EE.UU.
   - Fracciones: 1/16", 1/8", 1/4", 1/2"

4. **Fractional** (Fraccionario):
   - Formato: 15 1/2
   - Uso: Carpintería, construcción imperial
   - Sin designación de pies/pulgadas

5. **Scientific** (Científico):
   - Formato: 1.55E+01
   - Uso: Escalas muy grandes o pequeñas (astronomía, microelectrónica)

#### Precision (Precisión)

Controla cuántos decimales se muestran:

**Ejemplos según precision**:
- 0: Muestra 15
- 0.0: Muestra 15.5
- 0.00: Muestra 15.50
- 0.000: Muestra 15.500
- 0.0000: Muestra 15.5000

**Importante**: La precisión de visualización NO afecta la precisión interna. AutoCAD siempre almacena 16 dígitos significativos. Esto solo controla cómo se muestran los números.

**Configuración recomendada**:
- **Mecánico métrico**: Decimal, 0.00 (2 decimales para mm)
- **Arquitectónico métrico**: Decimal, 0.000 (3 decimales para m)
- **Arquitectónico imperial**: Architectural, 1/16"
- **Ingeniería civil**: Decimal, 0.0000 (4 decimales)

#### Angle Type (Tipo de Ángulo)

**Opciones**:

1. **Decimal Degrees** (Grados decimales - predeterminado):
   - Formato: 45.0000°
   - Uso: General, más común
   - Ejemplo: 30.5°, 90°, 180°

2. **Deg/Min/Sec** (Grados/Minutos/Segundos):
   - Formato: 45d30'15"
   - Uso: Topografía, navegación
   - 1 grado = 60 minutos, 1 minuto = 60 segundos

3. **Grads**:
   - Formato: 50.0000g
   - Uso: Topografía europea
   - 400 grads = 360 grados (círculo completo)

4. **Radians**:
   - Formato: 0.7854r
   - Uso: Matemática, programación
   - 2π radianes = 360 grados

5. **Surveyor's Units**:
   - Formato: N 45d0'0" E
   - Uso: Topografía estadounidense
   - Basado en rumbos (bearings)

**Configuración típica**: Decimal Degrees con precisión 0 (enteros) para la mayoría de trabajos.

#### Angle Precision

Similar a Length Precision, controla visualización:
- 0: Muestra 45°
- 0.0: Muestra 45.5°
- 0.00: Muestra 45.50°

#### Clockwise / Counterclockwise (Sentido de ángulos)

Por defecto: **Counterclockwise** (antihorario - estándar matemático)

Marcar "Clockwise" invierte el sistema angular (raro, solo topografía especializada).

#### Direction (Dirección base)

Establece dónde está el ángulo 0°:
- **East (0°)**: Predeterminado - horizontal derecha
- North (90°)
- West (180°)
- South (270°)
- Other: Personalizado

**Importante**: Cambiar esto puede confundir. Mantén East (0°) salvo requerimiento específico del proyecto.

#### Insertion Scale

Controla unidades predeterminadas para bloques insertados:
- Milímetros
- Centímetros
- Metros
- Inches
- Feet

Debe coincidir con tus unidades de dibujo principales.

### 5. Interpretación de Coordenadas en la Barra de Estado

La Status Bar muestra constantemente las coordenadas del cursor:

![Coordenadas en Status Bar](../imagenes/leccion-2-status-bar-coordenadas.png)

**Formato mostrado**: `X,Y,Z` (ejemplo: 245.3421, 187.6532, 0.0000)

**Tres modos de visualización** (clic en coordenadas para cambiar):

1. **Dynamic** (Dinámico):
   - Actualiza constantemente mientras mueves el cursor
   - Muestra posición actual del cursor en coordenadas absolutas
   - Modo más útil para navegación general

2. **Static** (Estático):
   - Solo actualiza al hacer clic
   - Muestra último punto seleccionado
   - Útil para verificar puntos específicos

3. **Distance and Angle** (Distancia y ángulo):
   - Durante comandos de dibujo, muestra distancia y ángulo desde último punto
   - Formato: `distance < angle` (ejemplo: 125.43 < 45°)
   - Automático durante LINE, similar

**Uso práctico**:
```
Command: LINE
Specify first point: [clic en 100,100]
[Status bar cambia a mostrar distancia<ángulo]
Specify next point: [mueve cursor - observa 156.21 < 37°]
```

### 6. Límites del Dibujo (Drawing Limits)

Aunque el espacio de dibujo de AutoCAD es prácticamente infinito, puedes establecer límites de trabajo.

**Comando LIMITS**:
```
Command: LIMITS
Reset Model space limits:
Specify lower left corner or [ON/OFF] <0.0000,0.0000>: 0,0
Specify upper right corner <420.0000,297.0000>: 420,297
Command: ZOOM
All/Center/Dynamic/Extents/Previous/Scale/Window/<Realtime>: A
```

**Límites comunes**:
- **A4 (mm)**: 0,0 a 297,210
- **A3 (mm)**: 0,0 a 420,297
- **A2 (mm)**: 0,0 a 594,420
- **A1 (mm)**: 0,0 a 841,594
- **A0 (mm)**: 0,0 a 1189,841

**Límites imperiales**:
- **11x17 inches**: 0,0 a 17,11
- **24x36 inches (Arch D)**: 0,0 a 36,24

**ON/OFF**:
- `LIMITS ON`: Restringe dibujo dentro de límites (rechaza puntos fuera)
- `LIMITS OFF`: Permite dibujar en cualquier lugar (recomendado)

**Uso moderno**: Los límites son menos importantes ahora. Se usaban en plotters antiguos. Hoy principalmente sirven para `ZOOM ALL`.

### 7. Precisión Numérica en AutoCAD

AutoCAD internamente trabaja con **precisión de punto flotante de 64 bits**, equivalente a aproximadamente **16 dígitos significativos**.

**Ejemplo de precisión**:
- Puedes dibujar con precisión de **0.0000000000000001** unidades
- Equivalente a 0.1 attómetros si tu unidad es 1 metro
- Más preciso que cualquier fabricación física posible

**Rango de coordenadas**:
- Mínimo: -1.0 × 10^99
- Máximo: 1.0 × 10^99
- Prácticamente ilimitado para cualquier aplicación terrestre

**Implicación práctica**: No necesitas preocuparte por precisión. AutoCAD nunca "redondea" o pierde exactitud en coordenadas.

### 8. Consejos de Entrada de Coordenadas

**Regla de oro para elegir método**:

```
Punto inicial de objeto: Absoluto (100,50)
Líneas horizontales/verticales: Relativo cartesiano (@100,0)
Líneas angulares: Polar (@50<30)
Con ORTHO activo: Direct Distance Entry (solo número)
```

**Errores comunes a evitar**:

1. **Olvidar el @ en coordenadas relativas**:
   ```
   Incorrecto: 100,50 (AutoCAD lo toma como absoluto)
   Correcto: @100,50
   ```

2. **Espacios en coordenadas**:
   ```
   Incorrecto: 100, 50 (error de sintaxis)
   Correcto: 100,50
   ```

3. **Usar comas en coordenadas polares**:
   ```
   Incorrecto: @100,45 (esto es cartesiano, no polar)
   Correcto: @100<45
   ```

4. **Mezclar sistemas de unidades**:
   Si tu dibujo es métrico (mm), no introduzcas pies: 10' causa confusión

**Técnicas profesionales**:

1. **Direct Distance Entry** (entrada directa):
   Con ORTHO (F8) activado:
   ```
   Command: LINE
   Specify first point: [clic]
   Specify next point: [apunta cursor derecha] 100 [Enter]
   ```
   Solo escribes la distancia, AutoCAD toma la dirección del cursor.

2. **Object Snap override** (veremos en lección posterior):
   Permite referenciar puntos existentes sin conocer coordenadas.

3. **Calculadora de coordenadas** (CAL):
   ```
   Command: LINE
   Specify first point: 'CAL
   >> Expression: (100+50)/2,sqrt(144)
   (devuelve 75,12)
   ```

## Ejercicio Práctico

**Ejercicio 2.1: Dibujo con Coordenadas Absolutas**

**Objetivo**: Dominar coordenadas absolutas

**Instrucciones**:
1. Comando: `UNITS` > Decimal, Precision 0.00
2. Comando: `LINE`
3. Dibuja un cuadrado usando solo coordenadas absolutas:
   - 50,50
   - 150,50
   - 150,150
   - 50,150
   - C (cerrar)

**Ejercicio 2.2: Dibujo con Coordenadas Relativas**

**Objetivo**: Dominar coordenadas relativas cartesianas

**Instrucciones**:
1. Comando: `LINE`
2. Dibuja una escalera (perfil) usando coordenadas relativas:
   - 200,100 (absoluto - inicio)
   - @40,0 (huella)
   - @0,20 (contrahuella)
   - @40,0 (huella)
   - @0,20 (contrahuella)
   - @40,0 (huella)
   - @0,20 (contrahuella)

**Ejercicio 2.3: Dibujo con Coordenadas Polares**

**Objetivo**: Dominar coordenadas polares

**Instrucciones**:
1. Comando: `LINE`
2. Dibuja un hexágono regular usando coordenadas polares:
   - 300,100 (absoluto - inicio)
   - @50<0
   - @50<60
   - @50<120
   - @50<180
   - @50<240
   - C (cerrar)

**Ejercicio 2.4: Combinación de Métodos**

**Objetivo**: Usar el método óptimo para cada situación

**Instrucciones**:
Dibuja una casa simple (perfil frontal):
```
Command: LINE
400,50 (absoluto - esquina inferior izquierda)
@100,0 (relativo - base)
@0,80 (relativo - muro derecho)
@-50<60 (polar - techo derecho inclinado)
@-50<120 (polar - techo izquierdo inclinado)
C (cerrar)
```

**Ejercicio 2.5: Configuración de Unidades**

**Objetivo**: Configurar unidades para diferentes proyectos

**Parte A - Proyecto Mecánico Métrico**:
1. `UNITS` > Decimal, 0.00, Decimal Degrees, 0
2. Insertion scale: Millimeters
3. Dibuja rectángulo 50mm x 30mm: LINE > 0,0 > @50,0 > @0,30 > @-50,0 > C

**Parte B - Proyecto Arquitectónico Imperial**:
1. `UNITS` > Architectural, 1/16", Decimal Degrees, 0
2. Insertion scale: Feet
3. Dibuja habitación 12'x10': LINE > 0,0 > @12',0 > @0,10' > @-12',0 > C

## Resumen

En esta lección has dominado:

✓ **Sistema de coordenadas cartesianas**: WCS y UCS
✓ **Tres métodos de coordenadas**:
  - Absolutas: X,Y
  - Relativas cartesianas: @X,Y
  - Relativas polares: @distancia<ángulo
✓ **Comando UNITS**: Configuración de unidades y precisión
✓ **Interpretación de coordenadas**: Status Bar
✓ **Drawing Limits**: Establecimiento de área de trabajo
✓ **Precisión numérica**: 16 dígitos significativos

**Puntos clave**:

1. **@** indica coordenadas relativas desde último punto
2. **<** separa distancia de ángulo en coordenadas polares
3. **Precision** de visualización no afecta precisión interna
4. **Combina métodos** según situación (usa el más natural)
5. **0° está a la derecha**, rotación antihoraria

**Fórmula de decisión**:
```
¿Conozco posición desde origen? → Absoluto
¿Conozco dimensiones rectangulares? → Relativo cartesiano
¿Conozco distancia y ángulo? → Polar
```

**Próxima lección**: Navegación y Visualización - aprenderás a moverte eficientemente en dibujos de cualquier escala usando ZOOM, PAN y vistas guardadas.

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre 100,50 y @100,50?
2. ¿Qué significa @80<135?
3. ¿A qué ángulo corresponde "arriba" en AutoCAD?
4. ¿Cuántos decimales almacena internamente AutoCAD?
5. ¿Qué unidades usa AutoCAD internamente? (Ninguna - son números puros)
6. ¿Cómo dibujarías una línea de 75 unidades exactamente horizontal?
7. ¿Qué comando configura tipo de unidades?
8. ¿El @ es necesario en el primer punto de un comando de dibujo?

---

**Práctica recomendada**: Dedica 30 minutos dibujando formas geométricas simples usando cada método de coordenadas. La fluidez viene con repetición.
