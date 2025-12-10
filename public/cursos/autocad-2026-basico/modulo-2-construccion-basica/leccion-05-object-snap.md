# Lección 5: Object Snap

## Introducción

**Object Snap** es una de las herramientas más importantes en AutoCAD y en cualquier software CAD. Permite seleccionar ubicaciones precisas basadas en objetos existentes en el dibujo.

### ¿Por qué es tan importante?

Sin Object Snap, sería prácticamente imposible lograr precisión al seleccionar puntos en objetos existentes. La resolución de la pantalla y la precisión del cursor no son suficientes para garantizar exactitud en diseños técnicos.

**Punto clave:** Object Snap garantiza que estás seleccionando exactamente el punto que necesitas (extremo de línea, centro de círculo, punto medio, etc.) sin depender de la precisión visual.

---

## Dos Modos de Object Snap

AutoCAD ofrece dos formas de trabajar con Object Snap:

### 1. Override Mode (Modo Temporal)

- Se activa **durante** un comando
- Solo es activo para **un click**
- Funciona como modificador dentro del string del comando
- Se accede desde la Object Snap toolbar o typing el código de 3 letras

**Ejemplo de uso:**
```
Command: LINE
Specify first point: END ↵ (type END y presiona Enter)
(Selecciona el extremo de una línea)
Specify next point:
```

**Características:**
- Aparece el marker y SnapTip al acercarte al punto
- Solo afecta la siguiente selección
- Ideal cuando necesitas un snap específico ocasionalmente

### 2. Running Mode (Modo Continuo)

- Se activa **antes** de usar comandos
- Permanece activo continuamente
- El marker box y SnapTip aparecen automáticamente
- Toggle On/Off con F3 o el botón en Status Bar

**Características:**
- Más eficiente para trabajo continuo
- Puedes activar múltiples snaps simultáneamente
- AutoCAD selecciona el snap más cercano al cursor

---

## Configurar Object Snap

### Acceso a Object Snap Settings

1. Right-click en el botón **Object Snap** en Status Bar
2. Selecciona **Object Snap Settings**
3. Se abre el **Drafting Settings dialog box**

### Drafting Settings Dialog Box

El dialog box contiene cuatro tabs:
- **Snap and Grid** - Configuración de grilla
- **Polar Tracking** - Seguimiento polar
- **Object Snap** - Configuración de snaps
- **3D Object Snap** - Snaps para 3D

### Controles Rápidos

- **Select All** - Activa todos los object snaps
- **Clear All** - Desactiva todos los object snaps
- **Checkboxes individuales** - Activa/desactiva snaps específicos

---

## Object Snap Modes Principales

### Tabla Completa de Object Snap Modes

| Icono | Nombre | Código 3 letras | Marker | Descripción |
|-------|--------|-----------------|---------|-------------|
| ![Endpoint](icon) | **Endpoint** | END | Cuadrado | Selecciona el extremo final de líneas, arcos y segmentos de polyline |
| ![Midpoint](icon) | **Midpoint** | MID | Triángulo | Selecciona el punto medio de líneas, arcos y segmentos de polyline |
| ![Center](icon) | **Center** | CEN | Círculo | Selecciona el centro de círculos, arcos y elipses |
| ![Node](icon) | **Node** | NOD | Círculo con X | Selecciona objetos tipo Point |
| ![Quadrant](icon) | **Quadrant** | QUA | Rombo | Selecciona los cuatro puntos cuadrantes (0°, 90°, 180°, 270°) de círculos y arcos |
| ![Intersection](icon) | **Intersection** | INT | Aspa (X) | Selecciona la intersección real entre dos objetos |
| ![Extension](icon) | **Extension** | EXT | Cruz (+) | Crea una línea de extensión temporal desde el extremo de un objeto |
| ![Insertion](icon) | **Insertion** | INS | Cuadrado doble | Selecciona el punto de inserción de bloques, texto y atributos |
| ![Perpendicular](icon) | **Perpendicular** | PER | Ángulo recto | Selecciona un punto perpendicular al objeto seleccionado |
| ![Tangent](icon) | **Tangent** | TAN | Círculo con línea | Selecciona el punto tangente de círculos y arcos |
| ![Nearest](icon) | **Nearest** | NEA | Reloj de arena | Selecciona el punto más cercano en un objeto |
| ![Apparent Intersection](icon) | **Apparent Intersection** | APP | Aspa con ojo | Selecciona la intersección aparente de dos objetos en vista 3D |
| ![Parallel](icon) | **Parallel** | PAR | Líneas paralelas | Crea una línea paralela a otro objeto |

---

## Snap to Node (Ejemplo Práctico)

### Configuración

1. Abre **Object Snap Settings**
2. Selecciona el checkbox **Node**
3. Click **OK**

### Uso con Points

El snap **Node** es especialmente útil para seleccionar objetos creados con el comando **POINT**.

**Marker shape:** Círculo con X

**Ejemplo práctico:**
```
Command: POINT ↵
Current point modes: PDMODE=0 PDSIZE=0.0000
Specify a point: (Click en varias ubicaciones)
Command: LINE ↵
Specify first point: NOD ↵
(Acerca el cursor a un point - aparece el marker)
(Click para seleccionar el point exacto)
```

---

## Opciones del Marker

### Personalizar Marker Display

1. En Drafting Settings dialog, click **Options**
2. Se abre el **Options dialog box**
3. Tab: **Drafting**

### Configuraciones disponibles:

**Marker Size:**
- Ajusta con el slider
- Rango: pequeño a grande
- Recomendado: tamaño medio para mejor visibilidad

**Marker Color:**
- Cambia el color del marker
- Útil para mejorar contraste con el dibujo
- Default: amarillo

**AutoSnap Settings:**
- **Marker** - Mostrar/ocultar marker
- **Magnet** - Atracción magnética al punto snap
- **Display AutoSnap tooltip** - Mostrar SnapTip
- **Display AutoSnap aperture box** - Mostrar aperture box

---

## Teclas de Acceso Rápido

### F3 - Toggle Object Snap On/Off

La tecla **F3** activa/desactiva Object Snap Running Mode:

- **F3** una vez - Activa Object Snap
- **F3** de nuevo - Desactiva Object Snap

**Ventaja:** Control rápido sin interrumpir el flujo de trabajo

### Typing de 3 Letras (Override Mode)

Durante cualquier comando que pida un punto, puedes escribir el código de 3 letras:

```
Command: LINE ↵
Specify first point: END ↵
(Selecciona endpoint)
Specify next point: MID ↵
(Selecciona midpoint)
Specify next point: CEN ↵
(Selecciona center)
```

**Códigos más comunes:**
- **END** - Endpoint
- **MID** - Midpoint
- **CEN** - Center
- **INT** - Intersection
- **PER** - Perpendicular
- **TAN** - Tangent
- **NEA** - Nearest

---

## Object Snap Modes Detallados

### Endpoint

**Descripción:** Selecciona el extremo final de líneas, arcos y segmentos de polyline.

**Uso común:**
- Conectar líneas exactamente
- Cerrar polígonos
- Crear geometría continua

**Marker:** Cuadrado

### Midpoint

**Descripción:** Selecciona el punto medio exacto de líneas, arcos y segmentos.

**Uso común:**
- Dividir objetos visualmente
- Centrar elementos
- Simetría

**Marker:** Triángulo

### Center

**Descripción:** Selecciona el centro de círculos, arcos y elipses.

**Uso común:**
- Alinear círculos
- Crear círculos concéntricos
- Ubicar centros exactos

**Marker:** Círculo

**Nota:** Debes pasar el cursor sobre el perímetro del círculo/arco para que aparezca el marker del centro.

### Intersection

**Descripción:** Selecciona el punto donde dos objetos se cruzan.

**Uso común:**
- Encontrar esquinas
- Puntos de cruce
- Geometría compleja

**Marker:** Aspa (X)

**Tipos:**
- **Intersection** - Intersección real visible
- **Apparent Intersection** - Intersección aparente en vistas 3D

### Perpendicular

**Descripción:** Selecciona el punto perpendicular (90°) al objeto.

**Uso común:**
- Crear líneas perpendiculares
- Mediciones ortogonales
- Diseño estructural

**Marker:** Símbolo de ángulo recto (⊥)

**Importante:** La perpendicular se calcula desde el primer punto seleccionado.

### Tangent

**Descripción:** Selecciona el punto tangente de círculos y arcos.

**Uso común:**
- Líneas tangentes a círculos
- Transiciones suaves
- Diseño de curvas

**Marker:** Círculo con línea tangente

**Nota:** Necesitas seleccionar dos objetos circulares para crear tangencia.

### Extension

**Descripción:** Crea una línea de extensión temporal desde el extremo de un objeto.

**Uso común:**
- Proyectar puntos
- Alineación extendida
- Geometría proyectada

**Marker:** Cruz (+) con línea punteada

**Cómo usar:**
1. Pasa el cursor sobre el endpoint (sin click)
2. Mueve el cursor en la dirección de extensión
3. Aparece la línea de extensión temporal
4. Click en el punto deseado sobre la extensión

### Quadrant

**Descripción:** Selecciona los cuatro puntos cuadrantes de círculos y arcos.

**Ubicación de cuadrantes:**
- 0° - Derecha (3 en punto)
- 90° - Arriba (12 en punto)
- 180° - Izquierda (9 en punto)
- 270° - Abajo (6 en punto)

**Marker:** Rombo

**Uso común:**
- Alinear círculos horizontal/verticalmente
- Puntos cardinales
- Simetría circular

### Parallel

**Descripción:** Crea una línea paralela a otro objeto.

**Cómo usar:**
1. Inicia comando LINE
2. Selecciona primer punto
3. Pasa cursor sobre línea de referencia (sin click)
4. Mueve cursor paralelamente
5. Aparece línea de tracking paralela
6. Click para crear línea paralela

**Marker:** Dos líneas paralelas

### Nearest

**Descripción:** Selecciona el punto más cercano en un objeto al cursor.

**Uso común:**
- Dividir objetos
- Puntos arbitrarios sobre objetos
- Cuando no necesitas precisión específica

**Marker:** Reloj de arena

**Advertencia:** Usar con precaución - no garantiza puntos específicos.

---

## AutoSnap Marker y SnapTip

### AutoSnap Marker

El **marker** es el símbolo geométrico que aparece cuando el cursor se acerca a un punto snap válido.

**Características:**
- Cada object snap tiene su propio marker shape único
- Aparece automáticamente en Running Mode
- En Override Mode aparece solo para el snap especificado
- Tamaño y color personalizables

### SnapTip

El **SnapTip** es el tooltip que aparece junto al marker mostrando el nombre del snap.

**Ejemplo:**
```
Marker: □  SnapTip: "Endpoint"
Marker: ○  SnapTip: "Center"
Marker: △  SnapTip: "Midpoint"
```

**Ventajas:**
- Confirmación visual del snap activo
- Evita errores de selección
- Ayuda al aprendizaje de markers

---

## Tips y Mejores Prácticas

### 1. No Actives Todos los Snaps

**Problema:** Tener demasiados snaps activos causa confusión.

**Solución:** Activa solo los snaps que uses frecuentemente:
- Endpoint
- Midpoint
- Center
- Intersection
- Perpendicular

Para snaps ocasionales (Tangent, Quadrant, Node), usa Override Mode.

### 2. Usa F3 para Desactivar Temporalmente

Cuando necesites seleccionar un punto arbitrario (no snap):
1. Presiona **F3** para desactivar Object Snap
2. Selecciona el punto
3. Presiona **F3** nuevamente para reactivar

### 3. Override Tiene Prioridad

Si tienes Running Mode activo pero escribes un código de 3 letras, el Override tiene prioridad para ese click.

**Ejemplo:**
```
Running Mode activo: Endpoint, Midpoint, Center
Command: LINE ↵
Specify first point: TAN ↵
(Ignora Running Mode, usa solo Tangent para este click)
```

### 4. Combina con Polar Tracking

Object Snap + Polar Tracking = precisión máxima

**Ejemplo:**
```
- Endpoint para punto inicial
- Polar Tracking 0° para dirección
- Direct Distance Entry para distancia
= Línea perfectamente horizontal desde endpoint
```

### 5. Extension Lines para Alineación

El snap **Extension** es poderoso para alineación:

1. Pasa cursor sobre endpoint A (sin click)
2. Pasa cursor sobre endpoint B (sin click)
3. Mueve cursor a intersección de extensiones
4. Aparece marker de intersección extendida
5. Click para seleccionar punto alineado

### 6. Verifica el SnapTip

Siempre lee el **SnapTip** antes de hacer click para confirmar que estás seleccionando el snap correcto.

**Evita errores comunes:**
- Confundir Endpoint con Midpoint
- Confundir Center con Quadrant
- Confundir Intersection con Nearest

### 7. Usa Tab para Ciclar Snaps

Cuando hay múltiples snaps disponibles en un punto:
1. Presiona **Tab** para ciclar entre opciones
2. El SnapTip cambia mostrando cada snap
3. Click cuando aparezca el snap deseado

---

## Ejercicio Práctico

### Objetivo

Practicar los Object Snap modes más comunes construyendo una figura geométrica precisa.

### Pasos

1. **Preparación:**
   - Abre un nuevo dibujo
   - Activa Object Snap (F3)
   - Running Mode: Endpoint, Midpoint, Center

2. **Dibuja un cuadrado:**
   ```
   Command: RECTANG ↵
   Specify first corner point: 0,0 ↵
   Specify other corner point: @100,100 ↵
   ```

3. **Encuentra el centro (Midpoint):**
   ```
   Command: LINE ↵
   Specify first point: MID ↵ (selecciona lado izquierdo)
   Specify next point: MID ↵ (selecciona lado derecho)
   ↵ (termina)

   Command: LINE ↵
   Specify first point: MID ↵ (selecciona lado superior)
   Specify next point: MID ↵ (selecciona lado inferior)
   ↵ (termina)
   ```

4. **Dibuja círculo en centro (Intersection):**
   ```
   Command: CIRCLE ↵
   Specify center point: INT ↵ (intersección de líneas)
   Specify radius: 30 ↵
   ```

5. **Líneas desde esquinas al centro (Endpoint + Intersection):**
   ```
   Command: LINE ↵
   Specify first point: END ↵ (esquina cuadrado)
   Specify next point: INT ↵ (centro)
   ↵
   (Repite para las 4 esquinas)
   ```

6. **Círculos en cuadrantes (Quadrant):**
   ```
   Command: CIRCLE ↵
   Specify center point: QUA ↵ (selecciona cuadrante)
   Specify radius: 10 ↵
   (Repite para los 4 cuadrantes)
   ```

### Resultado

Una figura geométrica precisa con:
- Cuadrado base
- Líneas diagonales desde esquinas
- Círculo central
- 4 círculos pequeños en cuadrantes

**Todo con precisión absoluta gracias a Object Snap.**

---

## Troubleshooting

### Problema: Marker no aparece

**Posibles causas:**
1. Object Snap desactivado (F3)
2. El snap específico no está activado en Running Mode
3. Cursor muy lejos del punto snap
4. Marker oculto en Options

**Solución:**
- Verifica F3 está ON (botón azul en Status Bar)
- Revisa Drafting Settings → Object Snap
- Acerca más el cursor al objeto
- Options → Drafting → AutoSnap Settings → Marker

### Problema: Snap incorrecto se activa

**Causa:** Múltiples snaps activos en Running Mode

**Solución:**
- Usa Tab para ciclar entre snaps disponibles
- Usa Override Mode (3 letras) para forzar snap específico
- Desactiva snaps no necesarios en Running Mode

### Problema: No puedo seleccionar punto arbitrario

**Causa:** Object Snap fuerza snap a objetos cercanos

**Solución:**
- Presiona F3 para desactivar temporalmente
- Usa snap Nearest (NEA) si necesitas punto sobre objeto
- Escribe coordenadas exactas

---

## Resumen

**Object Snap es esencial para:**
- Precisión absoluta en selección de puntos
- Eficiencia en construcción de geometría
- Evitar errores de alineación
- Garantizar exactitud técnica

**Dos modos:**
1. **Override Mode** - Temporal, 3 letras, un click
2. **Running Mode** - Continuo, múltiples snaps, F3 toggle

**Snaps más importantes:**
- Endpoint, Midpoint, Center, Intersection
- Perpendicular, Tangent, Extension
- Quadrant, Node, Parallel

**Mejores prácticas:**
- No actives todos los snaps simultáneamente
- Verifica SnapTip antes de click
- Usa F3 para control rápido
- Combina con Polar Tracking y Direct Distance Entry

**Tecla esencial:** **F3** - Toggle Object Snap On/Off

---

## Siguiente Lección

**Lección 6:** Object Snap Tracking - Combinar snaps con tracking para alineación compleja y construcción geométrica avanzada.

---

**Nota final:** La maestría en Object Snap viene con la práctica. Al principio puede parecer lento verificar cada SnapTip, pero pronto se vuelve automático y dramáticamente aumenta tu velocidad y precisión en AutoCAD.