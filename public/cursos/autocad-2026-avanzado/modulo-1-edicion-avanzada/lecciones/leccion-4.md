# Leccion 4: STRETCH, LENGTHEN, JOIN y BREAK

**Duracion:** 45 minutos
**Modulo:** 1 - Edicion Avanzada de Objetos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Deformar geometria manteniendo relaciones con STRETCH
- Ajustar longitudes precisas con LENGTHEN
- Unir objetos separados con JOIN
- Separar objetos en puntos especificos con BREAK
- Aplicar estas herramientas eficientemente

---

## Introduccion

Estos comandos modifican la geometria de formas mas especializadas que MOVE o SCALE. Son esenciales para ajustes finos, preparacion de geometria y limpieza de dibujos.

---

## 1. Comando STRETCH

### 1.1 Acceso al Comando

- **Command Line:** `STRETCH` o `S`
- **Ribbon:** Home Tab > Modify Panel > Stretch
- **Menu:** Modify > Stretch

### 1.2 Concepto

STRETCH mueve vertices seleccionados mientras mantiene conexion con vertices no seleccionados. Los objetos se "estiran" o deforman.

### 1.3 Sintaxis

```
Command: STRETCH
Select objects to stretch by crossing-window or crossing-polygon...
Select objects: C (Crossing obligatorio)
Specify first corner: (click)
Specify opposite corner: (click)
Select objects: (Enter)
Specify base point or [Displacement]: (click)
Specify second point: (click o coordenadas)
```

### 1.4 Regla Importante

**Solo funciona con seleccion Crossing (C o CP)**

| Vertices | Comportamiento |
|----------|----------------|
| Dentro de crossing | Se mueven |
| Fuera de crossing | Permanecen fijos |
| Objeto completo dentro | Se mueve (como MOVE) |

![Stretch Concept](../imagenes/leccion-4-m1-stretch-concept.png)

### 1.5 Ejemplo: Alargar Habitacion

```
1. Dibujar rectangulo de habitacion
2. Command: STRETCH
3. Crossing selection: lado derecho
4. Base point: esquina
5. Second point: @200,0 (alargar 200)
6. Resultado: habitacion mas larga
```

---

## 2. STRETCH con Grips

### 2.1 Metodo Mas Comun

1. Seleccionar objeto (aparecen grips)
2. Seleccionar vertices con Shift+click
3. Click en grip activo
4. Mover o especificar desplazamiento

### 2.2 Ejemplo

```
1. Click en rectangulo
2. Shift+click en dos esquinas derechas
3. Click en una de las esquinas seleccionadas
4. Mover o escribir @100,0
```

---

## 3. Comando LENGTHEN

### 3.1 Acceso al Comando

- **Command Line:** `LENGTHEN` o `LEN`
- **Ribbon:** Home Tab > Modify Panel > Lengthen
- **Menu:** Modify > Lengthen

### 3.2 Sintaxis

```
Command: LENGTHEN
Select an object or [DElta/Percent/Total/DYnamic]:
```

### 3.3 Opciones

| Opcion | Funcion |
|--------|---------|
| DElta | Cambiar por incremento |
| Percent | Cambiar por porcentaje |
| Total | Establecer longitud total |
| DYnamic | Ajuste visual con cursor |

### 3.4 DElta (Incremento)

```
Select an object or [DElta/...]: DE
Enter delta length or [Angle] <0.0000>: 50
Select an object to change or [Undo]: (click cerca del extremo a extender)
(objeto 50 unidades mas largo desde ese extremo)
```

**Valor negativo:** Acorta el objeto

### 3.5 Percent (Porcentaje)

```
Select an object or [...Percent...]: P
Enter percentage length <100.0000>: 150
Select an object: (click)
(objeto ahora es 150% de su longitud original)
```

### 3.6 Total

```
Select an object or [...Total...]: T
Specify total length or [Angle] <1.0000>: 200
Select an object: (click)
(objeto ahora mide exactamente 200)
```

### 3.7 DYnamic

```
Select an object or [...DYnamic...]: DY
Select an object to change: (click)
Specify new end point: (arrastrar visualmente)
```

### 3.8 Angle (Para Arcos)

Con arcos, puedes modificar el angulo:

```
Enter delta length or [Angle]: A
Enter delta angle <0>: 30
(arco 30 grados mas largo)
```

---

## 4. Comando JOIN

### 4.1 Acceso al Comando

- **Command Line:** `JOIN` o `J`
- **Ribbon:** Home Tab > Modify Panel > Join
- **Menu:** Modify > Join

### 4.2 Funcion

JOIN une objetos colineales o arcos concentricos en un solo objeto.

### 4.3 Sintaxis

```
Command: JOIN
Select source object or multiple objects to join at once: (click objeto 1)
Select objects to join: (click objeto 2)
Select objects: (Enter)
1 object joined to source
```

### 4.4 Objetos que se Pueden Unir

| Objeto | Requisito para JOIN |
|--------|---------------------|
| Lines | Colineales (misma direccion) |
| Arcs | Mismo centro y radio |
| Polylines | Extremos conectados |
| Splines | Extremos conectados |
| Elliptical arcs | Misma elipse |

### 4.5 Ejemplos

**Lineas colineales:**
```
1. Dos lineas en la misma recta
2. JOIN
3. Resultado: una linea continua
```

**Arcos en circulo:**
```
1. Arcos de 90° cada uno
2. JOIN todos
3. Resultado: circulo completo
```

**Polylines separadas:**
```
1. Polylines con extremos tocandose
2. JOIN
3. Resultado: una polyline continua
```

### 4.6 JOIN vs PEDIT

| JOIN | PEDIT > Join |
|------|--------------|
| Objetos colineales | Objetos conectados |
| Une directamente | Convierte a polyline |
| Mas restrictivo | Mas flexible |

---

## 5. Comando BREAK

### 5.1 Acceso al Comando

- **Command Line:** `BREAK` o `BR`
- **Ribbon:** Home Tab > Modify Panel > Break
- **Menu:** Modify > Break

### 5.2 Funcion

BREAK divide un objeto en dos o elimina una porcion.

### 5.3 Sintaxis

```
Command: BREAK
Select object: (click - este es el primer punto de break)
Specify second break point or [First point]: (click segundo punto)
```

### 5.4 First Point Option

Para especificar primer punto diferente al de seleccion:

```
Select object: (click para seleccionar)
Specify second break point or [First point]: F
Specify first break point: (click punto exacto)
Specify second break point: (click segundo punto)
```

### 5.5 Break at Point (Un Solo Punto)

Para dividir sin eliminar material:

```
Command: BREAK
Select object: (click)
Specify second break point or [First point]: F
Specify first break point: (click punto)
Specify second break point: @ (mismo punto)
```

**Atajo:** `BREAK` > seleccionar > `@`

### 5.6 Resultado

| Entrada | Resultado |
|---------|-----------|
| Dos puntos diferentes | Elimina seccion entre puntos |
| Mismo punto (@) | Divide objeto en dos |

![Break Options](../imagenes/leccion-4-m1-break-options.png)

---

## 6. BREAKATPOINT (Comando Especifico)

### 6.1 Acceso

- **Ribbon:** Home Tab > Modify Panel > Break at Point

### 6.2 Uso

```
Command: BREAKATPOINT
Select object: (click)
Specify first break point: (click punto de division)
```

Equivalente a BREAK con @ automatico.

---

## 7. Aplicaciones Practicas

### 7.1 STRETCH - Ajustar Plano

```
1. Habitacion muy pequena
2. STRETCH con crossing en un lado
3. Alargar 50 cm
4. Todos los muros y objetos se ajustan
```

### 7.2 LENGTHEN - Lineas de Cota

```
1. Extension line muy corta
2. LENGTHEN > Delta > 20
3. Click cerca del extremo a extender
```

### 7.3 JOIN - Linea de Propiedad

```
1. Linea de propiedad en segmentos
2. JOIN todos los segmentos
3. Resultado: polyline continua para calcular area
```

### 7.4 BREAK - Crear Abertura

```
1. Muro continuo
2. BREAK en ubicacion de puerta
3. Dos segmentos con abertura
```

---

## Ejercicio Practico 4

**Objetivo:** Dominar STRETCH, LENGTHEN, JOIN y BREAK.

**Tarea 1: STRETCH**
- Dibujar rectangulo 100x80
- Usar STRETCH para alargarlo a 150x80
- Verificar que solo un lado se movio

**Tarea 2: STRETCH con Grips**
- Dibujar poligono irregular
- Seleccionar multiples vertices con Shift
- Mover con grip

**Tarea 3: LENGTHEN Delta**
- Dibujar linea de 100
- Alargar 30 (Delta)
- Verificar longitud = 130

**Tarea 4: LENGTHEN Total**
- Dibujar linea de cualquier longitud
- Establecer Total = 75
- Verificar longitud exacta

**Tarea 5: JOIN Lineas**
- Dibujar 3 lineas colineales separadas
- Usar JOIN para unirlas
- Resultado: 1 linea

**Tarea 6: JOIN Arcos**
- Dibujar 4 arcos de 90° (mismo centro)
- Usar JOIN
- Resultado: circulo completo

**Tarea 7: BREAK**
- Dibujar linea de 200
- BREAK eliminando seccion central
- Resultado: dos lineas

**Tarea 8: BREAK at Point**
- Dibujar circulo
- BREAK at point
- Resultado: arco abierto

**Entregable:** Archivo con todos los ejercicios.

---

## Evaluacion

**Pregunta 1:** Que tipo de seleccion requiere STRETCH?

**Pregunta 2:** Que opcion de LENGTHEN establece longitud exacta?

**Pregunta 3:** Que requisito deben cumplir lineas para JOIN?

**Pregunta 4:** Como se divide un objeto sin eliminar material con BREAK?

**Pregunta 5:** Que diferencia hay entre JOIN y PEDIT>Join?

---

## Resumen

En esta leccion aprendiste:

- STRETCH para deformar manteniendo conexiones
- LENGTHEN con Delta, Percent, Total y Dynamic
- JOIN para unir objetos colineales/concentricos
- BREAK para dividir o eliminar secciones
- BREAKATPOINT para division simple
- Aplicaciones practicas de cada comando

**Proxima Leccion:** Modulo 2 - Bloques y Atributos

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos modificando dibujos existentes
