# Leccion 4: SPLINE y POINT

**Duracion:** 45 minutos
**Modulo:** 3 - Comandos de Dibujo Fundamentales
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear curvas suaves con SPLINE
- Entender la diferencia entre Fit Points y Control Vertices
- Editar splines existentes
- Usar objetos POINT como referencias
- Configurar el estilo de visualizacion de puntos
- Utilizar DIVIDE y MEASURE con puntos

---

## Introduccion

SPLINE crea curvas suaves que pasan por o cerca de puntos especificados, ideales para formas organicas y contornos complejos. POINT crea marcadores de referencia utilizados con DIVIDE y MEASURE para distribuir puntos uniformemente.

---

## 1. Comando SPLINE

### 1.1 Acceso al Comando

- **Command Line:** `SPLINE` o `SPL`
- **Ribbon:** Home Tab > Draw Panel > Spline
- **Menu:** Draw > Spline

### 1.2 Metodos de Creacion

AutoCAD ofrece dos metodos:

| Metodo | Descripcion |
|--------|-------------|
| Fit Points | Curva pasa POR los puntos |
| Control Vertices | Curva es ATRAIDA por los puntos |

---

## 2. Spline por Fit Points

### 2.1 Metodo Basico

```
Command: SPLINE
Current settings: Method=Fit  Knots=Chord
Specify first point or [Method/Knots/Object]: (click punto 1)
Enter next point or [start Tangency/toLerance]: (click punto 2)
Enter next point or [end Tangency/toLerance/Undo]: (click punto 3)
Enter next point or [end Tangency/toLerance/Undo/Close]: (Enter para terminar)
```

### 2.2 Opciones de Fit Points

| Opcion | Funcion |
|--------|---------|
| start Tangency | Direccion tangente al inicio |
| end Tangency | Direccion tangente al final |
| toLerance | Tolerancia de ajuste |
| Undo | Deshacer ultimo punto |
| Close | Cerrar spline |

### 2.3 Tangencia

Controla la direccion de entrada/salida:

```
Specify first point: (click)
Enter next point or [start Tangency/...]: T
Specify start tangent direction: @1<90 (tangente vertical)
Enter next point: (continuar)
```

### 2.4 Tolerancia

Define que tan cerca debe pasar la curva de los puntos:

```
Enter next point or [...toLerance...]: L
Specify fit tolerance <0.0000>: 5
(curva puede alejarse hasta 5 unidades de los puntos)
```

![Spline Fit Points](../imagenes/leccion-4-m3-spline-fit.png)

---

## 3. Spline por Control Vertices

### 3.1 Cambiar a Metodo CV

```
Command: SPLINE
Specify first point or [Method/...]: M
Enter spline creation method [Fit/CV] <Fit>: CV
Specify first point: (click)
Enter next point: (click)
...
```

### 3.2 Caracteristicas CV

- La curva es **atraida** por los vertices, no pasa por ellos
- Mayor control sobre la forma
- Grado de la curva configurable
- Ideal para modelado preciso

### 3.3 Grado de Spline

El grado controla la suavidad:

- **Grado 1:** Lineas rectas entre vertices
- **Grado 2:** Curva cuadratica
- **Grado 3:** Curva cubica (mas comun)

```
Command: SPLINE
Method=CV, Degree=3
Specify first point or [Method/Degree/...]: Degree
Specify degree of spline <3>: 5
```

---

## 4. Editar Splines

### 4.1 Comando SPLINEDIT

```
Command: SPLINEDIT
Select spline: (click en spline)
Enter an option [Open/Close/Join/Fit data/Edit vertex/convert to Polyline/...]:
```

### 4.2 Opciones Principales

| Opcion | Funcion |
|--------|---------|
| Close/Open | Cerrar o abrir spline |
| Join | Unir con otra spline |
| Fit data | Editar puntos de ajuste |
| Edit vertex | Editar vertices de control |
| convert to Polyline | Convertir a polilinea |
| Reverse | Invertir direccion |
| Undo | Deshacer ultimo cambio |

### 4.3 Editar Vertices

```
Enter an option [...Edit vertex...]: E
Enter a vertex editing option [Add/Delete/Elevate order/Move/Weight/...]:
```

- **Add:** Agregar vertice
- **Delete:** Eliminar vertice
- **Move:** Mover vertice
- **Weight:** Cambiar peso (atraccion)

### 4.4 Grips de Edicion

Selecciona la spline y usa grips:
- **Cuadrados:** Fit points (si Fit method)
- **Triangulos:** Control vertices (si CV method)
- Arrastra para modificar la forma

---

## 5. Knot Parameterization

### 5.1 Tipos de Knots

Controla como se distribuye la curva:

| Tipo | Descripcion |
|------|-------------|
| Chord | Basado en distancia entre puntos |
| Square Root | Raiz cuadrada de distancia |
| Uniform | Espaciado uniforme |

### 5.2 Configurar Knots

```
Command: SPLINE
Specify first point or [Method/Knots/...]: K
Enter knot parameterization [Chord/Squareroot/Uniform] <Chord>: U
```

---

## 6. Comando POINT

### 6.1 Acceso al Comando

- **Command Line:** `POINT` o `PO`
- **Ribbon:** Home Tab > Draw Panel > Point
- **Menu:** Draw > Point

### 6.2 Crear Puntos

```
Command: POINT
Current point modes: PDMODE=0  PDSIZE=0.0000
Specify a point: 100,100
```

### 6.3 Crear Multiples Puntos

El comando se repite automaticamente:

```
Command: POINT
Specify a point: (click)
Specify a point: (click)
Specify a point: (Enter para terminar)
```

---

## 7. Estilo de Punto (PDMODE y PDSIZE)

### 7.1 PDMODE (Forma)

| Valor | Forma |
|-------|-------|
| 0 | Punto (.) |
| 1 | Nada (invisible) |
| 2 | Cruz (+) |
| 3 | X |
| 4 | Linea vertical |
| 32 | Circulo |
| 33 | Circulo con punto |
| 34 | Circulo con cruz |
| 35 | Circulo con X |
| 64 | Cuadrado |
| 65 | Cuadrado con punto |
| 66 | Cuadrado con cruz |
| 67 | Cuadrado con X |
| 96 | Circulo y cuadrado |

### 7.2 PDSIZE (Tamano)

| Valor | Efecto |
|-------|--------|
| 0 | 5% de la altura de pantalla |
| Positivo | Tamano absoluto en unidades |
| Negativo | Porcentaje de la pantalla |

### 7.3 Dialogo Point Style

- **Command:** `DDPTYPE`
- **Menu:** Format > Point Style

![Point Style Dialog](../imagenes/leccion-4-m3-point-style.png)

### 7.4 Ejemplo de Configuracion

```
Command: PDMODE
Enter new value for PDMODE <0>: 35

Command: PDSIZE
Enter new value for PDSIZE <0.0000>: 5
```

Resultado: Puntos como circulos con X, tamano 5 unidades.

---

## 8. Comando DIVIDE

### 8.1 Funcion

Divide un objeto en partes iguales colocando puntos.

### 8.2 Uso

```
Command: DIVIDE
Select object to divide: (click en linea/arco/etc.)
Enter the number of segments or [Block]: 5
```

Resultado: 4 puntos que dividen el objeto en 5 partes iguales.

**Nota:** Los puntos NO cortan el objeto, solo marcan posiciones.

### 8.3 Divide con Bloques

Inserta bloques en lugar de puntos:

```
Command: DIVIDE
Select object to divide: (click)
Enter the number of segments or [Block]: B
Enter name of block to insert: MI_BLOQUE
Align block with object? [Yes/No] <Y>: Y
Enter the number of segments: 10
```

---

## 9. Comando MEASURE

### 9.1 Funcion

Coloca puntos a intervalos de distancia especifica.

### 9.2 Uso

```
Command: MEASURE
Select object to measure: (click en linea/arco/etc.)
Specify length of segment or [Block]: 25
```

Resultado: Puntos cada 25 unidades a lo largo del objeto.

### 9.3 Diferencia DIVIDE vs MEASURE

| DIVIDE | MEASURE |
|--------|---------|
| Partes iguales | Distancia fija |
| Numero de segmentos | Longitud de segmento |
| Siempre llena todo | Puede no llenar todo |

### 9.4 Measure con Bloques

```
Command: MEASURE
Select object to measure: (click)
Specify length of segment or [Block]: B
Enter name of block to insert: POSTE
Align block with object? [Yes/No] <Y>: Y
Specify length of segment: 50
```

---

## 10. Snap a Puntos (NODE)

### 10.1 Activar OSNAP Node

Para conectar a puntos creados:

1. F3 (activar OSNAP)
2. Click derecho > Settings
3. Activar "Node"

### 10.2 Uso

```
Command: LINE
Specify first point: NOD (o con OSNAP Node activo)
of (click cerca de un punto)
```

---

## Ejercicio Practico 4

**Objetivo:** Dominar SPLINE y POINT.

**Tarea 1: Spline Fit Points**
- Crear curva suave pasando por:
  - (50,100), (100,150), (150,100), (200,150), (250,100)
- Cerrar la spline

**Tarea 2: Spline Control Vertices**
- Cambiar a metodo CV
- Crear curva con vertices en:
  - (50,250), (100,300), (150,250), (200,300), (250,250)
- Observar como NO pasa por los puntos

**Tarea 3: Configurar Point Style**
- PDMODE = 35 (circulo con X)
- PDSIZE = 5

**Tarea 4: DIVIDE**
- Dibujar linea de 200 unidades
- Usar DIVIDE con 8 segmentos
- Usar los puntos como referencia para circulos

**Tarea 5: MEASURE**
- Dibujar arco (semicirculo R=80)
- Usar MEASURE con distancia 25
- Conectar puntos con lineas

**Tarea 6: Editar Spline**
- Seleccionar spline de Tarea 1
- Usar SPLINEDIT > Edit vertex > Move
- Modificar la forma

**Entregable:** Archivo con todas las curvas y puntos.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre Fit Points y Control Vertices?

**Pregunta 2:** Que variable controla la forma de los puntos?

**Pregunta 3:** Que comando divide un objeto en partes iguales?

**Pregunta 4:** Que OSNAP se usa para conectar a objetos Point?

**Pregunta 5:** Cual es la diferencia entre DIVIDE y MEASURE?

---

## Resumen

En esta leccion aprendiste:

- Crear splines con Fit Points y Control Vertices
- Editar splines con SPLINEDIT y grips
- Configurar estilo de puntos (PDMODE, PDSIZE)
- Usar DIVIDE para partes iguales
- Usar MEASURE para intervalos fijos
- Conectar a puntos con OSNAP Node

**Proxima Leccion:** Modulo 4 - Edicion Basica de Objetos

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos creando curvas complejas
