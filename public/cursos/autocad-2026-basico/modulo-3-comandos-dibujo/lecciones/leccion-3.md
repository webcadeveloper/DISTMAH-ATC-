# Leccion 3: RECTANGLE y POLYGON

**Duracion:** 45 minutos
**Modulo:** 3 - Comandos de Dibujo Fundamentales
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear rectangulos con diferentes metodos
- Aplicar chaflanes y filetes a rectangulos
- Dibujar poligonos regulares inscritos y circunscritos
- Especificar poligonos por lado
- Combinar estas herramientas en dibujos tecnicos

---

## Introduccion

RECTANGLE y POLYGON son comandos que crean polilineas cerradas automaticamente. Son mas eficientes que dibujar figuras punto por punto y ofrecen opciones especiales como esquinas redondeadas.

---

## 1. Comando RECTANGLE

### 1.1 Acceso al Comando

- **Command Line:** `RECTANGLE` o `REC`
- **Ribbon:** Home Tab > Draw Panel > Rectangle
- **Menu:** Draw > Rectangle

### 1.2 Metodo Basico: Dos Esquinas

```
Command: RECTANGLE
Specify first corner point or [Chamfer/Elevation/Fillet/Thickness/Width]: (click esquina 1)
Specify other corner point or [Area/Dimensions/Rotation]: (click esquina 2)
```

### 1.3 Metodo Dimensiones

Especifica ancho y alto en lugar de segunda esquina:

```
Command: RECTANGLE
Specify first corner point: 100,100
Specify other corner point or [Area/Dimensions/Rotation]: D
Specify length for rectangles <0.0000>: 150
Specify width for rectangles <0.0000>: 80
Specify other corner point or [Area/Dimensions/Rotation]: (click direccion)
```

El click final determina hacia donde se dibuja el rectangulo.

### 1.4 Metodo Area

Especifica el area deseada y una dimension:

```
Command: RECTANGLE
Specify first corner point: 100,100
Specify other corner point or [Area/Dimensions/Rotation]: A
Enter area of rectangle in current units <100.0000>: 12000
Calculate rectangle dimensions based on [Length/Width] <Length>: L
Enter rectangle length <100.0000>: 150
(calcula automaticamente: width = 12000/150 = 80)
```

### 1.5 Metodo Rotacion

Crea rectangulo rotado:

```
Command: RECTANGLE
Specify first corner point: 100,100
Specify other corner point or [Area/Dimensions/Rotation]: R
Specify rotation angle or [Points] <0>: 45
Specify other corner point or [Area/Dimensions/Rotation]: @100,60
```

![Rectangle Rotation](../imagenes/leccion-3-m3-rectangle-rotation.png)

---

## 2. Opciones de RECTANGLE

### 2.1 Chamfer (Chaflan)

Crea esquinas biseladas:

```
Command: RECTANGLE
Specify first corner point or [Chamfer/...]: C
Specify first chamfer distance for rectangles <0.0000>: 10
Specify second chamfer distance for rectangles <10.0000>: 10
Specify first corner point: (click)
Specify other corner point: @100,80
```

Resultado: Rectangulo con esquinas cortadas a 45°.

### 2.2 Fillet (Filete/Redondeo)

Crea esquinas redondeadas:

```
Command: RECTANGLE
Specify first corner point or [Chamfer/Elevation/Fillet/...]: F
Specify fillet radius for rectangles <0.0000>: 15
Specify first corner point: (click)
Specify other corner point: @100,80
```

Resultado: Rectangulo con esquinas redondeadas R15.

### 2.3 Width (Ancho)

Aplica grosor a la polilinea:

```
Command: RECTANGLE
Specify first corner point or [...Width]: W
Specify line width for rectangles <0.0000>: 3
Specify first corner point: (click)
Specify other corner point: @100,80
```

### 2.4 Elevation y Thickness (3D)

- **Elevation:** Altura Z del rectangulo
- **Thickness:** Extrusion en Z (crea caja)

```
Command: RECTANGLE
Specify first corner point or [...Thickness...]: T
Specify thickness for rectangles <0.0000>: 50
(crea rectangulo con altura 3D de 50)
```

---

## 3. Resetear Opciones

Las opciones Chamfer, Fillet y Width **persisten** entre usos.

Para resetear:
- Chamfer: C, 0, 0
- Fillet: F, 0
- Width: W, 0

---

## 4. Comando POLYGON

### 4.1 Acceso al Comando

- **Command Line:** `POLYGON` o `POL`
- **Ribbon:** Home Tab > Draw Panel > Polygon
- **Menu:** Draw > Polygon

### 4.2 Sintaxis

```
Command: POLYGON
Enter number of sides <4>: 6
Specify center of polygon or [Edge]: (click centro)
Enter an option [Inscribed in circle/Circumscribed about circle] <I>: I
Specify radius of circle: 50
```

### 4.3 Numero de Lados

AutoCAD acepta de 3 a 1024 lados:

| Lados | Figura |
|-------|--------|
| 3 | Triangulo equilatero |
| 4 | Cuadrado |
| 5 | Pentagono |
| 6 | Hexagono |
| 8 | Octagono |
| 12 | Dodecagono |
| ... | ... |

---

## 5. Metodos de POLYGON

### 5.1 Inscrito en Circulo (I)

El poligono queda **dentro** de un circulo imaginario.
Los vertices tocan el circulo.

```
Command: POLYGON
Enter number of sides: 6
Specify center of polygon: 200,200
Enter an option [Inscribed/Circumscribed] <I>: I
Specify radius of circle: 50
```

El radio es la distancia del centro al vertice.

### 5.2 Circunscrito a Circulo (C)

El poligono queda **fuera** de un circulo imaginario.
Los lados son tangentes al circulo.

```
Command: POLYGON
Enter number of sides: 6
Specify center of polygon: 200,200
Enter an option [Inscribed/Circumscribed] <I>: C
Specify radius of circle: 50
```

El radio es la distancia del centro al punto medio del lado.

![Inscribed vs Circumscribed](../imagenes/leccion-3-m3-polygon-types.png)

### 5.3 Por Lado (Edge)

Especifica la longitud y posicion de un lado:

```
Command: POLYGON
Enter number of sides: 6
Specify center of polygon or [Edge]: E
Specify first endpoint of edge: 100,100
Specify second endpoint of edge: 150,100
```

Resultado: Hexagono con lado de 50 unidades a partir del punto especificado.

---

## 6. Relaciones Geometricas

### 6.1 Para Poligono Inscrito

| Dimension | Formula |
|-----------|---------|
| Radio (R) | Del centro al vertice |
| Lado (L) | L = 2 × R × sin(180°/n) |
| Apotema (a) | a = R × cos(180°/n) |

### 6.2 Para Poligono Circunscrito

| Dimension | Formula |
|-----------|---------|
| Radio (R) | Del centro al lado (apotema) |
| Lado (L) | L = 2 × R × tan(180°/n) |
| Dist. vertice | R / cos(180°/n) |

### 6.3 Ejemplos Numericos (Hexagono)

**Inscrito R=50:**
- Lado = 2 × 50 × sin(30°) = 50
- Apotema = 50 × cos(30°) = 43.3

**Circunscrito R=50:**
- Lado = 2 × 50 × tan(30°) = 57.7
- Dist. vertice = 50 / cos(30°) = 57.7

---

## 7. Aplicaciones Practicas

### 7.1 Cabezas de Tornillos

Hexagonos circunscritos para representar tuercas y cabezas:

```
Command: POLYGON
Enter number of sides: 6
Specify center: (centro del tornillo)
Circumscribed, radius: (tamano de llave)
```

### 7.2 Marcos y Bordes

Rectangulos con fillet para marcos redondeados:

```
Command: RECTANGLE
Fillet: 10
Primera esquina: 0,0
Dimensiones: 200,150
```

### 7.3 Placas con Chaflanes

Rectangulos con chamfer para placas mecanicas:

```
Command: RECTANGLE
Chamfer: 5,5
Dibujar segun especificaciones
```

### 7.4 Senales de Transito

- Octagonos: Alto/Stop
- Triangulos: Ceda el paso
- Rectangulos redondeados: Informativas

---

## 8. Editar Rectangulos y Poligonos

### 8.1 Son Polilineas

Tanto RECTANGLE como POLYGON crean polilineas cerradas.

Puedes usar:
- **PEDIT** para editar vertices
- **STRETCH** para deformar
- **SCALE** para redimensionar
- **EXPLODE** para separar en lineas

### 8.2 Modificar Esquinas Despues

Usa FILLET o CHAMFER en polilineas existentes:

```
Command: FILLET
Select first object or [Polyline/...]: P
Select 2D polyline: (click en rectangulo)
(todas las esquinas se redondean)
```

---

## Ejercicio Practico 3

**Objetivo:** Dominar RECTANGLE y POLYGON.

**Tarea 1: Rectangulos Basicos**
- Rectangulo dos esquinas: (50,50) a (150,120)
- Rectangulo por dimensiones: inicio (200,50), 100x80
- Rectangulo por area: 6000 u², ancho 60

**Tarea 2: Rectangulos Especiales**
- Con chamfer 10x10: inicio (50,180)
- Con fillet R15: inicio (200,180)
- Rotado 30°: inicio (350,180)

**Tarea 3: Poligonos Inscritos**
- Triangulo inscrito R40, centro (80,350)
- Cuadrado inscrito R40, centro (180,350)
- Hexagono inscrito R40, centro (280,350)
- Octagono inscrito R40, centro (380,350)

**Tarea 4: Poligonos Circunscritos**
- Hexagono circunscrito R35, centro (80,450)
- Octagono circunscrito R35, centro (180,450)

**Tarea 5: Poligono por Lado**
- Pentagono con lado de 50, inicio (300,450)

**Tarea 6: Tuerca Hexagonal**
- Hexagono circunscrito R12 (tamano llave 24)
- Circulo interior R5 (agujero)
- Centro: (450,350)

**Entregable:** Archivo con todas las figuras organizadas.

---

## Evaluacion

**Pregunta 1:** Que tipo de objeto crea el comando RECTANGLE?

**Pregunta 2:** Cual es la diferencia entre poligono Inscrito y Circunscrito?

**Pregunta 3:** Que opcion de RECTANGLE crea esquinas redondeadas?

**Pregunta 4:** Cuantos lados minimo puede tener un POLYGON?

**Pregunta 5:** Como se crea un poligono especificando la longitud del lado?

---

## Resumen

En esta leccion aprendiste:

- Crear rectangulos con diferentes metodos
- Usar Chamfer, Fillet y Width en rectangulos
- Dibujar poligonos regulares
- Diferencia entre Inscrito y Circunscrito
- Crear poligonos por longitud de lado
- Aplicaciones practicas de estas herramientas

**Proxima Leccion:** Comandos SPLINE y POINT

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos dibujando figuras tecnicas
