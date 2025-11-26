# Leccion 2: ERASE, MOVE y COPY

**Duracion:** 60 minutos
**Modulo:** 4 - Edicion Basica de Objetos
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Eliminar objetos correctamente con ERASE
- Mover objetos con precision usando MOVE
- Duplicar objetos con COPY
- Aplicar estos comandos con diferentes metodos de entrada
- Combinar con herramientas de precision

---

## Introduccion

ERASE, MOVE y COPY son los comandos de edicion mas fundamentales. Dominarlos es esencial para cualquier trabajo en AutoCAD. Estos comandos trabajan con selecciones y permiten multiples metodos de entrada de puntos.

---

## 1. Comando ERASE

### 1.1 Acceso al Comando

- **Command Line:** `ERASE` o `E`
- **Ribbon:** Home Tab > Modify Panel > Erase
- **Teclado:** Delete (con objetos pre-seleccionados)

### 1.2 Sintaxis

```
Command: ERASE
Select objects: (seleccionar)
Select objects: (Enter)
```

### 1.3 Metodos de Uso

**Metodo 1: Comando primero**
```
Command: ERASE
Select objects: (seleccionar objetos)
Select objects: (Enter para ejecutar)
```

**Metodo 2: Seleccionar primero (Noun/Verb)**
```
(seleccionar objetos)
Command: ERASE (o tecla Delete)
(objetos eliminados inmediatamente)
```

### 1.4 Deshacer Borrado

```
Command: UNDO (o Ctrl+Z)
```

### 1.5 OOPS - Recuperar Ultimo Borrado

```
Command: OOPS
```

Recupera los ultimos objetos borrados, incluso despues de otros comandos.

**Diferencia con UNDO:** UNDO deshace el ultimo comando (cualquiera). OOPS recupera especificamente el ultimo ERASE.

---

## 2. Comando MOVE

### 2.1 Acceso al Comando

- **Command Line:** `MOVE` o `M`
- **Ribbon:** Home Tab > Modify Panel > Move
- **Grips:** Activar grip + Spacebar hasta MOVE

### 2.2 Sintaxis Basica

```
Command: MOVE
Select objects: (seleccionar)
Select objects: (Enter)
Specify base point or [Displacement]: (punto base)
Specify second point or <use first point as displacement>: (punto destino)
```

### 2.3 Metodos de Entrada

**Metodo 1: Dos puntos (mas comun)**
```
Command: MOVE
Select objects: (seleccionar)
Specify base point: (click en esquina del objeto)
Specify second point: (click donde va esa esquina)
```

**Metodo 2: Desplazamiento relativo**
```
Command: MOVE
Select objects: (seleccionar)
Specify base point: 0,0 (o cualquier punto)
Specify second point: @100,50 (desplazamiento)
```

**Metodo 3: Desplazamiento directo**
```
Command: MOVE
Select objects: (seleccionar)
Specify base point or [Displacement]: D
Specify displacement: 100,50
(mueve 100 en X, 50 en Y)
```

### 2.4 Con Herramientas de Precision

**Con OSNAP:**
```
Command: MOVE
Select objects: (seleccionar)
Specify base point: END (click en endpoint)
Specify second point: MID (click en midpoint destino)
```

**Con ORTHO:**
```
Command: MOVE
Select objects: (seleccionar)
Specify base point: (click)
(F8 activo)
Specify second point: 150 (mueve 150 en direccion ortogonal)
```

**Con POLAR:**
```
Command: MOVE
Select objects: (seleccionar)
Specify base point: (click)
(F10 activo, configurado 45°)
Specify second point: 100 (mueve 100 a 45°)
```

### 2.5 Mover con Grips

1. Seleccionar objeto
2. Click en grip (se vuelve rojo)
3. Presionar Spacebar hasta "MOVE"
4. Especificar destino

![Move with Grips](../imagenes/leccion-2-m4-move-grips.png)

---

## 3. Comando COPY

### 3.1 Acceso al Comando

- **Command Line:** `COPY` o `CO` (o `CP`)
- **Ribbon:** Home Tab > Modify Panel > Copy
- **Grips:** Activar grip + Spacebar

### 3.2 Sintaxis Basica

```
Command: COPY
Select objects: (seleccionar)
Select objects: (Enter)
Specify base point or [Displacement/mOde]: (punto base)
Specify second point or [Array] <use first point as displacement>: (destino)
Specify second point or [Array/Exit/Undo]: (mas copias o Enter)
```

### 3.3 Copia Unica

```
Command: COPY
Select objects: (seleccionar)
Specify base point: (click)
Specify second point: (click destino)
Specify second point: (Enter para terminar)
```

### 3.4 Copias Multiples

```
Command: COPY
Select objects: (seleccionar)
Specify base point: (click)
Specify second point: (click destino 1)
Specify second point: (click destino 2)
Specify second point: (click destino 3)
Specify second point: (Enter para terminar)
```

### 3.5 Opcion Array

Crea copias en arreglo lineal:

```
Command: COPY
Select objects: (seleccionar)
Specify base point: (click)
Specify second point or [Array]: A
Enter number of items to array: 5
Specify second point or [Fit]: (click destino final)
```

Resultado: 5 copias distribuidas uniformemente.

### 3.6 Con Desplazamiento

```
Command: COPY
Select objects: (seleccionar)
Specify base point or [Displacement]: D
Specify displacement: 100,0
(copia desplazada 100 en X)
```

### 3.7 Con Herramientas de Precision

**Copia a distancia exacta:**
```
Command: COPY
Select objects: (seleccionar)
Specify base point: (click en objeto)
(F8 activo)
Specify second point: 200 (200 unidades en direccion ortogonal)
```

**Copia alineada:**
```
Command: COPY
Select objects: (seleccionar)
Specify base point: CEN (centro de circulo)
Specify second point: END (endpoint de linea)
```

### 3.8 Modos de Copia

```
Specify base point or [Displacement/mOde]: O
Enter a copy mode option [Single/Multiple] <Multiple>:
```

- **Single:** Solo una copia, luego termina
- **Multiple:** Multiples copias (default)

---

## 4. Comparacion MOVE vs COPY

| Aspecto | MOVE | COPY |
|---------|------|------|
| Original | Se mueve | Permanece |
| Resultado | 1 objeto reubicado | 2+ objetos |
| Copias multiples | No | Si |
| Atajo | M | CO o CP |

---

## 5. Atajos con Ctrl

### 5.1 Ctrl+C, Ctrl+V (Portapapeles)

Copia al portapapeles de Windows:

```
(seleccionar objetos)
Ctrl+C (copiar)
Ctrl+V (pegar)
Specify insertion point: (click)
```

### 5.2 Ctrl+Shift+C (Copiar con Base Point)

```
(seleccionar objetos)
Ctrl+Shift+C
Specify base point: (click punto de referencia)
(copiar al portapapeles con punto base)
```

### 5.3 Ctrl+Shift+V (Pegar como Bloque)

Pega como un bloque unico.

### 5.4 Diferencia con COPY

| COPY comando | Ctrl+C/V |
|--------------|----------|
| Solo en AutoCAD | Entre aplicaciones |
| Mantiene propiedades | Puede perder datos |
| Multiples copias | Una por pegado |
| Mas preciso | Para transferir |

---

## 6. Ejemplos Practicos

### 6.1 Mover Mueble a Posicion

```
Command: MOVE
Select objects: (seleccionar silla)
Specify base point: INS (punto de insercion)
Specify second point: @150,200 (nueva posicion relativa)
```

### 6.2 Copiar Ventana Multiple Veces

```
Command: COPY
Select objects: (seleccionar ventana)
Specify base point: MID (midpoint de ventana)
Specify second point: @300,0 (primera copia)
Specify second point: @600,0 (segunda copia)
Specify second point: @900,0 (tercera copia)
Specify second point: (Enter)
```

### 6.3 Distribuir Postes Uniformemente

```
Command: COPY
Select objects: (seleccionar poste)
Specify base point: CEN (centro)
Specify second point or [Array]: A
Enter number of items: 10
Specify second point: @450,0 (punto final de distribucion)
```

### 6.4 Mover Grupo de Objetos

```
Command: MOVE
Select objects: W (window)
Specify first corner: (click)
Specify opposite corner: (click)
25 found
Select objects: (Enter)
Specify base point: 0,0
Specify second point: @-50,-50 (mover arriba-izquierda)
```

---

## 7. Tips y Mejores Practicas

### 7.1 Punto Base Inteligente

Siempre usa un punto base que tenga sentido:
- Esquina de objeto a alinear
- Centro de objeto simetrico
- Punto de insercion de bloque

### 7.2 Preview de Movimiento

AutoCAD muestra preview del resultado mientras arrastras.

### 7.3 Copiar vs Offset

- **COPY:** Duplicado exacto
- **OFFSET:** Copia paralela a distancia

### 7.4 Evitar Acumulacion

Al copiar multiples veces, verifica no crear duplicados accidentales.

---

## Ejercicio Practico 2

**Objetivo:** Dominar ERASE, MOVE y COPY.

**Preparacion:**
Dibujar plano simple con rectangulo (habitacion), circulos (muebles), lineas (muros).

**Tarea 1: ERASE**
- Crear 5 lineas auxiliares
- Borrar 3 usando Window
- Usar OOPS para recuperar una
- Borrar las restantes individualmente

**Tarea 2: MOVE**
- Mover circulo (mesa) al centro de la habitacion
- Usar OSNAP Center para precision
- Mover grupo de muebles usando desplazamiento relativo

**Tarea 3: COPY Simple**
- Copiar una silla
- Usar base point en el centro
- Colocar copia al otro lado de mesa

**Tarea 4: COPY Multiple**
- Copiar ventana a multiples posiciones
- Usar ORTHO para alineacion perfecta

**Tarea 5: COPY Array**
- Crear fila de 8 postes
- Usar opcion Array
- Distancia total: 350 unidades

**Tarea 6: Combinacion**
- Seleccionar conjunto de muebles
- Copiar a otra habitacion
- Mover para ajustar posicion final

**Entregable:** Archivo con habitacion amueblada usando COPY y MOVE.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia principal entre MOVE y COPY?

**Pregunta 2:** Que comando recupera objetos borrados incluso despues de otros comandos?

**Pregunta 3:** Como se crean multiples copias en una sola operacion?

**Pregunta 4:** Que opcion de COPY distribuye copias uniformemente?

**Pregunta 5:** Cual es el atajo de teclado para MOVE?

---

## Resumen

En esta leccion aprendiste:

- Eliminar objetos con ERASE y recuperar con OOPS
- Mover objetos con precision usando MOVE
- Crear copias unicas y multiples con COPY
- Usar la opcion Array para distribucion uniforme
- Combinar con OSNAP, ORTHO y POLAR

**Proxima Leccion:** ROTATE, SCALE y MIRROR

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos organizando elementos de un plano
