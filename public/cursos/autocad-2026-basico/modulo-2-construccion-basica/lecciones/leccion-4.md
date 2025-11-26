# Leccion 4: Elipse y Herramientas de Precision

**Duracion:** 45 minutos
**Modulo:** 2 - Construccion Basica
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear elipses usando diferentes metodos
- Dibujar arcos elipticos
- Utilizar herramientas de precision adicionales
- Combinar ORTHO y POLAR para precision angular

---

## Introduccion

La elipse es una curva fundamental en dibujo tecnico, usada en representaciones isometricas, circulos en perspectiva, y formas ovaladas. AutoCAD ofrece multiples metodos para crearlas con precision.

---

## 1. Comando ELLIPSE

### 1.1 Acceso al Comando

- **Command Line:** `ELLIPSE` o `EL`
- **Ribbon:** Home Tab > Draw Panel > Ellipse
- **Menu:** Draw > Ellipse

### 1.2 Metodo por Defecto: Ejes

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: (click punto 1)
Specify other endpoint of axis: (click punto 2)
Specify distance to other axis or [Rotation]: (click o valor)
```

![Ellipse Axis Method](../imagenes/leccion-4-m2-ellipse-axis.png)

### 1.3 Metodo Centro

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: C
Specify center of ellipse: (click centro)
Specify endpoint of axis: (click extremo del eje)
Specify distance to other axis or [Rotation]: (distancia al otro eje)
```

### 1.4 Metodo Rotacion

Crea una elipse como si fuera un circulo visto en angulo.

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: (click punto 1)
Specify other endpoint of axis: (click punto 2)
Specify distance to other axis or [Rotation]: R
Specify rotation around major axis: 45 (angulo de rotacion)
```

**Angulos:**
- 0° = Circulo
- 45° = Elipse moderada
- 89° = Elipse muy alargada

### 1.5 Elipse vs Circulo Isometrico

Para dibujos isometricos, AutoCAD ofrece:

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center/Isocircle]: I
Specify center of isocircle: (click centro)
Specify radius of isocircle or [Diameter]: 25
```

**Nota:** Isocircle solo funciona con Snap Style = Isometric.

---

## 2. Arco Eliptico

### 2.1 Crear Arco Eliptico

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: A
Specify axis endpoint of elliptical arc or [Center]: (click punto 1)
Specify other endpoint of axis: (click punto 2)
Specify distance to other axis or [Rotation]: 30
Specify start angle or [Parameter]: 0
Specify end angle or [Parameter/Included angle]: 180
```

### 2.2 Parametros del Arco

| Parametro | Descripcion |
|-----------|-------------|
| Start angle | Angulo inicial del arco |
| End angle | Angulo final del arco |
| Included angle | Angulo total del arco |
| Parameter | Definicion parametrica (0-1) |

---

## 3. ORTHO Mode

### 3.1 Que es ORTHO

ORTHO restringe el cursor a movimientos ortogonales (0°, 90°, 180°, 270°).

### 3.2 Activar/Desactivar

- **Atajo:** F8
- **Status Bar:** Click en ORTHO

### 3.3 Uso con Comandos

```
Command: LINE
Specify first point: (click)
(F8 para activar ORTHO)
Specify next point: 100 (solo horizontal o vertical)
```

### 3.4 Cuando Usar ORTHO

- Dibujar lineas perfectamente horizontales o verticales
- Mover objetos en una sola direccion
- Copiar con desplazamiento ortogonal
- Cualquier operacion que requiera movimiento recto

---

## 4. POLAR Tracking

### 4.1 Que es POLAR

POLAR Tracking guia el cursor a angulos predefinidos, mostrando tooltips con distancia y angulo.

### 4.2 Activar/Desactivar

- **Atajo:** F10
- **Status Bar:** Click en POLAR

### 4.3 Configurar Angulos

Click derecho en POLAR > Tracking Settings:

**Increment angles predefinidos:**
- 90° (solo ortogonal)
- 45° (diagonal y ortogonal)
- 30° (util para isometrico)
- 22.5° (precision media)
- 18° (multiplos de 18)
- 15° (precision alta)
- 10° (muy preciso)
- 5° (maxima precision)

### 4.4 Angulos Adicionales

Puedes agregar angulos personalizados:

1. Tracking Settings > Additional angles
2. New > Ingresar angulo (ej: 60°)
3. OK

### 4.5 POLAR vs ORTHO

| Caracteristica | ORTHO | POLAR |
|----------------|-------|-------|
| Angulos | Solo 90° | Configurables |
| Visual | Sin tooltip | Con tooltip |
| Flexibilidad | Limitado | Alta |
| Uso simultaneo | No | Si (desactiva ORTHO) |

---

## 5. Dynamic Input (DYN)

### 5.1 Que es Dynamic Input

Muestra campos de entrada junto al cursor en lugar de usar solo la Command Line.

### 5.2 Activar/Desactivar

- **Atajo:** F12
- **Status Bar:** Click en DYN

### 5.3 Componentes

| Componente | Funcion |
|------------|---------|
| Pointer Input | Muestra coordenadas del cursor |
| Dimension Input | Muestra distancia y angulo |
| Dynamic Prompts | Muestra opciones del comando |

### 5.4 Configurar Dynamic Input

Click derecho en DYN > Dynamic Input Settings:

- Enable Pointer Input
- Enable Dimension Input
- Show command prompting and command input

### 5.5 Modo de Entrada

Con DYN activo:
- Las coordenadas son **relativas** por defecto
- Usar **#** para coordenadas absolutas
- **Tab** para cambiar entre campos

```
Specify next point: 100 (Tab) 45 (Enter)
= @100<45 (relativo polar)

Specify next point: #100,50 (Enter)
= 100,50 (absoluto)
```

---

## 6. Grid y Snap Avanzado

### 6.1 Tipos de Snap

**Rectangular Snap:** Grid rectangular estandar

**Isometric Snap:** Para dibujos isometricos
- Plano Izquierdo (Left)
- Plano Superior (Top)
- Plano Derecho (Right)
- Cambiar: F5 o Ctrl+E

### 6.2 Configurar Snap Isometrico

```
Command: SNAP
Specify snap spacing or [ON/OFF/Aspect/Style/Type]: S
Enter snap grid style [Standard/Isometric] <S>: I
```

O en Drafting Settings > Snap and Grid > Snap type: Isometric.

### 6.3 Dibujar en Isometrico

Con Snap Isometric:
1. F5 para cambiar plano isometrico
2. ORTHO funciona en direcciones isometricas
3. ELLIPSE > Isocircle crea elipses isometricas

---

## 7. Herramientas de Precision Adicionales

### 7.1 From (Desde)

Especifica un punto relativo a otro punto de referencia.

```
Command: LINE
Specify first point: FROM
Base point: (click punto de referencia)
<Offset>: @50,30 (desplazamiento desde referencia)
```

### 7.2 Temporary Track Point

Crea un punto de tracking temporal.

```
Command: LINE
Specify first point: TT
Specify temporary OTRACK point: (click punto)
(mover cursor para tracking)
Specify first point: (click en interseccion de trackings)
```

### 7.3 Mid Between 2 Points (M2P)

Encuentra el punto medio entre dos puntos.

```
Command: CIRCLE
Specify center point: M2P
First point: (click punto 1)
Second point: (click punto 2)
(el centro es el punto medio)
```

### 7.4 Point Filters (X, Y, Z)

Extrae coordenadas individuales de puntos.

```
Command: LINE
Specify first point: .X
of (click punto para obtener X)
(need YZ): (click otro punto o ingresar Y,Z)
```

---

## 8. Calculator (CAL)

### 8.1 Calculadora en Linea de Comandos

```
Command: CAL
>> Expression: 2+2
4

Command: CAL
>> Expression: 50*sin(45)
35.3553
```

### 8.2 Uso Transparente

Durante un comando:
```
Command: CIRCLE
Specify center point: (click)
Specify radius: 'CAL
>> Expression: 100/3
33.3333
```

### 8.3 Expresiones Comunes

| Expresion | Resultado |
|-----------|-----------|
| `2+3*4` | 14 |
| `sqrt(2)` | 1.4142 |
| `sin(30)` | 0.5 |
| `pi` | 3.14159 |
| `(end+mid)/2` | Punto medio entre endpoint y midpoint |

---

## Ejercicio Practico 4

**Objetivo:** Dominar elipses y herramientas de precision.

**Tarea 1: Elipses**

1. Elipse por ejes: eje mayor 100, eje menor 60
2. Elipse por centro: centro (200,100), semi-eje 50, semi-eje 30
3. Elipse por rotacion: eje 80, rotacion 60°
4. Arco eliptico: 180 grados

**Tarea 2: ORTHO y POLAR**

1. Activar ORTHO y dibujar rectangulo perfecto
2. Configurar POLAR a 30°
3. Dibujar hexagono usando POLAR

**Tarea 3: Dynamic Input**

1. Activar DYN (F12)
2. Dibujar linea de 75 unidades a 45°
3. Usar # para coordenada absoluta

**Tarea 4: Herramientas de Precision**

1. Usar FROM para iniciar linea a 25,25 de una esquina
2. Usar M2P para encontrar punto medio entre dos puntos
3. Usar CAL para calcular radio = 100/3

**Entregable:** Archivo con todas las figuras y anotaciones.

---

## Evaluacion

**Pregunta 1:** Cual es el comando para crear una elipse?

**Pregunta 2:** Que tecla activa ORTHO mode?

**Pregunta 3:** Cual es la diferencia entre ORTHO y POLAR?

**Pregunta 4:** Para que sirve el comando FROM?

**Pregunta 5:** Que hace M2P (Mid Between 2 Points)?

---

## Resumen

En esta leccion aprendiste:

- Los diferentes metodos para crear elipses
- Como usar arcos elipticos
- ORTHO para movimientos ortogonales
- POLAR Tracking para angulos configurables
- Dynamic Input para entrada visual
- Herramientas de precision: FROM, TT, M2P, Filters, CAL

**Proxima Leccion:** Modulo 3 - Comandos de Dibujo Fundamentales

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos combinando herramientas de precision
