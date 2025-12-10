# Lección 7: Comando Ellipse

## Introducción

El comando **Ellipse** permite crear elipses y arcos elípticos en AutoCAD. Una elipse es una figura geométrica definida por dos ejes: el eje mayor (major axis) y el eje menor (minor axis). AutoCAD determina automáticamente cuál es el eje mayor y cuál el menor basándose en las distancias especificadas.

### Acceso al Comando

- **Ribbon:** Home tab > Draw panel > Ellipse flyout
- **Alias:** `EL`
- **Comando completo:** `ELLIPSE`

### Conceptos Fundamentales

- **Major Axis (Eje Mayor):** La distancia más larga a través de la elipse
- **Minor Axis (Eje Menor):** La distancia más corta a través de la elipse
- **Centro:** Punto de intersección de los ejes mayor y menor
- **Rotation Angle:** Ángulo de rotación (0-90 grados) que simula la inclinación de un círculo

---

## Métodos de Creación de Elipses

### 1. Ellipse Axis, End (Método por Defecto)

Este método especifica tres puntos para definir la elipse:

**Proceso:**
1. Primer punto: inicio del primer eje
2. Segundo punto: final del primer eje (no necesariamente el major axis)
3. Tercer punto: distancia al segundo eje

**Características:**
- AutoCAD determina automáticamente cuál eje es mayor y cuál menor
- El primer par de puntos define un eje completo
- El tercer punto establece la mitad de la longitud del otro eje

**Ejemplo Práctico:**

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: (Point 1)
Specify other endpoint of axis: (Point 2)
Specify distance to other axis or [Rotation]: (Point 3)
```

**Cuándo Usar:**
- Cuando conoces puntos específicos en los extremos de los ejes
- Para elipses que deben pasar por puntos determinados
- Diseño mecánico con referencias geométricas claras

---

### 2. Ellipse con Rotation Angle

En lugar de especificar el tercer punto, se utiliza la opción **Rotation** para definir un ángulo de rotación.

**Concepto:**
- Simula "inclinar" un círculo alrededor del major axis
- El ángulo de rotación va de 0 a 90 grados
- 0 grados = círculo perfecto
- 90 grados = línea recta

**Proceso:**

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: (Point 1)
Specify other endpoint of axis: (Point 2)
Specify distance to other axis or [Rotation]: R
Specify rotation around major axis: 35
```

**Ejemplos de Ángulos:**
- **35 grados:** Elipse moderadamente achatada
- **60 grados:** Elipse muy achatada
- **45 grados:** Elipse equilibrada

**Cuándo Usar:**
- Dibujos isométricos (típicamente 30 grados)
- Objetos circulares vistos en perspectiva
- Cuando necesitas precisión angular específica

---

### 3. Ellipse Center (Por Centro)

Este método comienza especificando el centro de la elipse.

**Proceso:**
1. Centro de la elipse
2. Endpoint del primer eje
3. Distancia al segundo eje (o rotation)

**Ejemplo:**

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: C
Specify center of ellipse: (Point 1 - Centro)
Specify endpoint of axis: (Point 2)
Specify distance to other axis or [Rotation]: (Point 3)
```

**Ventajas:**
- Útil cuando conoces la ubicación exacta del centro
- Facilita la alineación con otros objetos
- Común en diseño arquitectónico y mecánico

**Cuándo Usar:**
- Elipses concéntricas
- Alineación con puntos centrales conocidos
- Diseño simétrico

---

### 4. Ellipse Center con Rotation

Combina el método Center con la opción Rotation.

**Proceso:**

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: C
Specify center of ellipse: (Click point)
Specify endpoint of axis: (Click point)
Specify distance to other axis or [Rotation]: R
Specify rotation around major axis: 30
```

**Aplicación Común:**
- Dibujos isométricos (ángulo 30 grados)
- Representación de objetos circulares en vistas inclinadas
- Diseño técnico con ángulos estándar

---

## Elliptical Arc (Arco Elíptico)

Los arcos elípticos son porciones de una elipse definida por ángulos inicial y final.

**Acceso:**

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: A
```

**Opciones:**
- Definir la elipse completa primero
- Especificar ángulo inicial y final
- Útil para elementos decorativos y diseño complejo

---

## Tabla de Opciones del Comando Ellipse

| Opción | Descripción | Uso Típico |
|--------|-------------|------------|
| **Axis, End** | Especifica tres puntos para los ejes | Método estándar, puntos conocidos |
| **Center** | Comienza desde el centro de la elipse | Alineación precisa, simetría |
| **Rotation** | Define ángulo de rotación (0-90°) | Dibujos isométricos, perspectiva |
| **Arc** | Crea un arco elíptico | Elementos decorativos, diseño complejo |

---

## Características de la Elipse

### Componentes Geométricos

```
        Minor Axis
            |
    --------|--------
   /        |        \
  |    Centro (C)    |
   \        |        /
    --------|--------
            |
       Major Axis
```

- **Major Axis:** Siempre la distancia más larga
- **Minor Axis:** Siempre la distancia más corta
- **Centro:** Intersección de ambos ejes
- **AutoCAD determina automáticamente** cuál eje es mayor

### Rotation Angle Explicado

```
Ángulo 0°  = Círculo perfecto (⭕)
Ángulo 30° = Elipse isométrica (⬭)
Ángulo 60° = Elipse muy achatada (—)
Ángulo 90° = Línea recta (—)
```

---

## Casos de Uso Profesionales

### 1. Dibujos Isométricos

**Aplicación:**
- Vistas isométricas de objetos circulares
- Ángulo estándar: 30 grados
- Representación 3D en 2D

**Ejemplo:**
```
Command: ELLIPSE
[Arc/Center]: C
Specify center: (Click)
Specify endpoint of axis: (Click)
[Rotation]: R
Specify rotation: 30
```

### 2. Diseño Mecánico

**Aplicación:**
- Engranajes vistos en ángulo
- Poleas y sistemas de transmisión
- Componentes cilíndricos en perspectiva

### 3. Arquitectura

**Aplicación:**
- Arcos elípticos decorativos
- Ventanas ovaladas
- Elementos estructurales curvos
- Diseño de escaleras circulares vistas en planta

### 4. Objetos Circulares en Perspectiva

**Aplicación:**
- Ruedas vistas en ángulo
- Tuberías en proyección
- Cualquier objeto circular no perpendicular al plano de vista

---

## Tips y Mejores Prácticas

### Selección del Método Correcto

| Situación | Método Recomendado |
|-----------|-------------------|
| Conoces puntos exactos en los ejes | Axis, End |
| Necesitas centrar la elipse | Center |
| Dibujo isométrico | Center + Rotation (30°) |
| Perspectiva específica | Rotation con ángulo calculado |
| Elemento decorativo parcial | Arc |

### Consejos de Eficiencia

1. **Usa Object Snap (OSNAP)**
   - Endpoint, Midpoint, Center
   - Facilita la precisión en la colocación

2. **Rotation Angles Comunes**
   - 30° - Isométrico estándar
   - 45° - Perspectiva intermedia
   - 60° - Muy achatado

3. **Coordenadas Relativas**
   - Combina con @ para distancias exactas
   - Ejemplo: `@50,0` para eje horizontal de 50 unidades

4. **Dynamic Input**
   - Activa para ver dimensiones en tiempo real
   - Facilita la entrada de valores precisos

---

## Ejercicios Prácticos

### Ejercicio 1: Elipse Básica por Ejes

**Objetivo:** Crear una elipse de 100x60 unidades

1. Command: `ELLIPSE`
2. Click punto inicial
3. Type: `@100,0` (eje horizontal de 100)
4. Type: `30` (mitad del eje vertical = 60 total)

### Ejercicio 2: Elipse Centrada con Rotation

**Objetivo:** Elipse isométrica centrada en 0,0

1. Command: `ELLIPSE`
2. Type: `C` (Center)
3. Type: `0,0` (centro en origen)
4. Type: `@40,0` (radio mayor 40)
5. Type: `R` (Rotation)
6. Type: `30` (ángulo isométrico)

### Ejercicio 3: Arco Elíptico Decorativo

**Objetivo:** Crear un arco elíptico de 180 grados

1. Command: `ELLIPSE`
2. Type: `A` (Arc)
3. Especifica los tres puntos para la elipse
4. Ángulo inicial: `0`
5. Ángulo final: `180`

---

## Relación con Otros Comandos

### Comandos Complementarios

- **CIRCLE:** Para formas circulares perfectas
- **ARC:** Para arcos circulares simples
- **PLINE:** Para crear formas complejas que incluyan segmentos elípticos
- **ROTATE:** Para rotar elipses completas después de crearlas
- **MIRROR:** Para crear elipses simétricas

### Modificación de Elipses

- **TRIM/EXTEND:** Funciona con elipses
- **FILLET:** Puede crear empalmes con elipses
- **OFFSET:** Crea elipses concéntricas
- **SCALE:** Modifica proporciones (puede deformar la elipse)

---

## Preguntas Frecuentes

**P: ¿Por qué AutoCAD determina automáticamente el major/minor axis?**

R: Para mantener la definición matemática correcta de una elipse, donde el eje mayor siempre es el más largo. Esto asegura que los cálculos geométricos sean precisos.

**P: ¿Qué ángulo de rotation usar para dibujos isométricos?**

R: El ángulo estándar es 30 grados, que simula correctamente un círculo visto en una vista isométrica.

**P: ¿Puedo editar una elipse después de crearla?**

R: Sí, usando grips (puntos de control) o comandos como PROPERTIES. Sin embargo, las elipses tienen limitaciones comparadas con otros objetos.

**P: ¿Cuál es la diferencia entre Rotation angle y rotar la elipse completa?**

R: Rotation angle cambia la proporción de los ejes (aplasta la elipse), mientras que ROTATE gira la elipse completa sin cambiar su forma.

---

## Resumen

El comando **Ellipse** es fundamental para:

- Crear formas elípticas precisas con múltiples métodos
- Dibujos isométricos y representaciones 3D en 2D
- Diseño mecánico y arquitectónico
- Objetos circulares vistos en perspectiva

**Métodos principales:**
1. **Axis, End:** Tres puntos para definir los ejes
2. **Rotation:** Ángulo de inclinación (0-90°)
3. **Center:** Desde el punto central
4. **Arc:** Arcos elípticos parciales

**Recuerda:**
- AutoCAD determina automáticamente major/minor axis
- Rotation angle de 30° para dibujos isométricos
- Usa Center cuando necesites alineación precisa
- Los arcos elípticos son útiles para elementos decorativos

---

## Navegación

- [← Lección Anterior: Comando Arc](leccion-06-comando-arc.md)
- [→ Siguiente Lección: Módulo 3](../../modulo-3-construccion-avanzada/README.md)
- [↑ Volver al Módulo 2](../README.md)
- [⌂ Inicio del Curso](../../README.md)
