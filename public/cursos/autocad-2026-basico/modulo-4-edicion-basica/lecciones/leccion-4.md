# Leccion 4: TRIM y EXTEND

**Duracion:** 45 minutos
**Modulo:** 4 - Edicion Basica de Objetos
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Recortar objetos con TRIM
- Extender objetos con EXTEND
- Usar el modo Quick (todos como limite)
- Aplicar TRIM y EXTEND con seleccion de bordes
- Resolver situaciones de limpieza de dibujos

---

## Introduccion

TRIM y EXTEND son comandos complementarios esenciales para limpiar y ajustar geometria. TRIM recorta objetos hasta un limite, mientras EXTEND los alarga hasta tocar un limite. Son probablemente los comandos de edicion mas usados en produccion.

---

## 1. Comando TRIM

### 1.1 Acceso al Comando

- **Command Line:** `TRIM` o `TR`
- **Ribbon:** Home Tab > Modify Panel > Trim
- **Atajo:** TR + Enter

### 1.2 Modo Tradicional (Con Bordes)

```
Command: TRIM
Current settings: Projection=UCS, Edge=None
Select cutting edges...
Select objects or <select all>: (seleccionar lineas de corte)
Select objects: (Enter)
Select object to trim or shift-select to extend: (click en parte a eliminar)
```

### 1.3 Modo Quick (Default en 2026)

En AutoCAD 2026, TRIM usa todos los objetos como bordes por defecto:

```
Command: TRIM
Current settings: Projection=UCS, Edge=Extend, Mode=Quick
Select cutting edge ...
Select objects or <select all>: (Enter - usa todos)
Select object to trim: (click en segmento a recortar)
```

### 1.4 Funcionamiento

1. Los **bordes de corte** definen donde terminar
2. Click en la **parte del objeto a eliminar**
3. El objeto se recorta hasta el borde mas cercano

![Trim Operation](../imagenes/leccion-4-m4-trim.png)

### 1.5 Opciones de TRIM

| Opcion | Funcion |
|--------|---------|
| Fence | Recorta todo lo que toca una linea |
| Crossing | Recorta en area rectangular |
| Project | Modo de proyeccion (UCS/View) |
| Edge | Extend/No extend (bordes imaginarios) |
| eRase | Elimina objetos completos |
| Undo | Deshace ultimo recorte |

### 1.6 Fence Mode

Recorta multiples segmentos de una pasada:

```
Select object to trim: F
Specify first fence point: (click)
Specify next fence point: (dibujar linea atravesando segmentos)
Specify next fence point: (Enter)
(todos los segmentos tocados se recortan)
```

### 1.7 Opcion Edge

Permite recortar usando extensiones imaginarias de bordes:

```
Select object to trim or [...Edge...]: E
Enter an implied edge extension mode [Extend/No extend] <No extend>: E
(ahora puede recortar con bordes que no tocan)
```

---

## 2. Comando EXTEND

### 2.1 Acceso al Comando

- **Command Line:** `EXTEND` o `EX`
- **Ribbon:** Home Tab > Modify Panel > Extend
- **Atajo:** EX + Enter

### 2.2 Modo Quick (Default)

```
Command: EXTEND
Current settings: Projection=UCS, Edge=Extend, Mode=Quick
Select boundary edges...
Select objects or <select all>: (Enter - usa todos)
Select object to extend: (click en extremo a extender)
```

### 2.3 Funcionamiento

1. Los **bordes limite** definen hasta donde extender
2. Click **cerca del extremo** a extender
3. El objeto se alarga hasta el borde mas cercano

![Extend Operation](../imagenes/leccion-4-m4-extend.png)

### 2.4 Cual Extremo Extender

AutoCAD extiende el extremo **mas cercano al click**.

**Tip:** Click cerca del extremo que quieres alargar.

### 2.5 Opciones de EXTEND

Las mismas que TRIM:
- Fence
- Crossing
- Project
- Edge
- Undo

---

## 3. Cambio Rapido TRIM/EXTEND

### 3.1 Shift para Cambiar

Durante TRIM, mantiene Shift para EXTEND (y viceversa):

```
Command: TRIM
Select object to trim or shift-select to extend: (click = trim)
Select object to trim or shift-select to extend: (Shift+click = extend)
```

### 3.2 Por que es Util

- No necesitas cambiar de comando
- Flujo de trabajo mas rapido
- Limpieza eficiente de intersecciones

---

## 4. Ejemplos Practicos

### 4.1 Limpiar Esquinas

Para esquinas que se pasan:

```
Command: TRIM
Select all: (Enter)
(click en cada segmento que sobresale)
```

### 4.2 Crear Abertura en Muro

```
1. Dibujar lineas de abertura (jambas)
2. Command: TRIM
3. Select all: Enter
4. Click en segmento de muro entre jambas
(muro recortado para puerta)
```

### 4.3 Extender Lineas a Muro

```
Command: EXTEND
Select all: Enter
(click en cada linea cerca del extremo a extender)
```

### 4.4 Limpiar Interseccion Multiple

```
Command: TRIM
Select all: Enter
Fence: F
(dibujar linea atravesando todos los excesos)
(todos recortados de una vez)
```

---

## 5. TRIM y EXTEND con Diferentes Objetos

### 5.1 Objetos que se Pueden Recortar

- Lines
- Polylines
- Arcs
- Circles
- Ellipses
- Splines
- Rays
- Xlines (construction lines)

### 5.2 Objetos que Sirven como Borde

Casi cualquier objeto puede ser borde de corte o limite:
- Lineas, arcos, circulos
- Polilineas
- Texto (como borde)
- Bloques
- Viewport borders

### 5.3 Recortar Circulos

Al recortar un circulo, se convierte en arco:

```
Command: TRIM
(dibujar linea atravesando circulo)
(click en parte del circulo a eliminar)
(circulo ahora es arco)
```

---

## 6. Situaciones Especiales

### 6.1 Sin Interseccion Real

Con Edge=Extend, puedes recortar aunque no haya interseccion real:

```
Command: TRIM
Edge: E (Extend mode)
(recorta usando extension imaginaria del borde)
```

### 6.2 Multiples Posibles Bordes

AutoCAD recorta hasta el borde **mas cercano**. Si necesitas otro:
1. Recorta al primero
2. Recorta nuevamente al siguiente

### 6.3 Recortar Todo a Un Borde

1. Selecciona solo ese borde como cutting edge
2. Recorta los objetos

```
Command: TRIM
Select cutting edges: (click solo en la linea borde)
Select objects: Enter
(ahora solo ese objeto es borde)
```

---

## 7. TRIM vs BREAK

| TRIM | BREAK |
|------|-------|
| Necesita borde | No necesita borde |
| Recorta hasta interseccion | Corta en puntos especificos |
| Elimina segmento | Puede eliminar o separar |

### 7.1 Comando BREAK

```
Command: BREAK
Select object: (click en objeto)
Specify second break point or [First point]: F
Specify first break point: (punto 1)
Specify second break point: (punto 2)
(segmento entre puntos eliminado)
```

---

## 8. Tips de Productividad

### 8.1 Enter Rapido

Presiona Enter inmediatamente despues de TR/EX para usar todos los objetos como bordes.

### 8.2 Zoom para Precision

Acercate para clicks precisos en areas congestionadas.

### 8.3 Undo dentro del Comando

Usa U para deshacer el ultimo trim/extend sin salir del comando.

### 8.4 Fence para Limpieza Masiva

Fence es muy eficiente para limpiar multiples intersecciones.

---

## Ejercicio Practico 4

**Objetivo:** Dominar TRIM y EXTEND.

**Tarea 1: TRIM Basico**
- Dibujar cruz (+) con lineas que se pasan
- Usar TRIM para limpiar esquinas
- Resultado: cruz limpia

**Tarea 2: EXTEND Basico**
- Dibujar rectangulo
- Dibujar 4 lineas cortas dentro (sin tocar bordes)
- Extender cada linea hasta el borde del rectangulo

**Tarea 3: Shift para Cambiar**
- Dibujar patron de lineas mezclado
- Usar TRIM con Shift para alternar trim/extend
- No cambiar de comando

**Tarea 4: Fence Mode**
- Dibujar 10 lineas horizontales
- Dibujar linea vertical
- Usar TRIM con Fence para recortar todas de una pasada

**Tarea 5: Crear Puerta**
- Dibujar muro (linea larga)
- Dibujar jambas (2 lineas perpendiculares)
- Usar TRIM para crear abertura

**Tarea 6: Limpiar Intersecciones**
- Dibujar cuadricula de lineas que se pasan
- Limpiar todas las extensiones
- Resultado: cuadricula limpia

**Entregable:** Archivo con ejercicios antes y despues.

---

## Evaluacion

**Pregunta 1:** Que hace TRIM con un objeto?

**Pregunta 2:** Que tecla cambia entre TRIM y EXTEND durante el comando?

**Pregunta 3:** Que opcion permite recortar multiples objetos con una linea?

**Pregunta 4:** Que sucede cuando recortas un circulo?

**Pregunta 5:** Para que sirve la opcion Edge=Extend?

---

## Resumen

En esta leccion aprendiste:

- Recortar objetos hasta bordes con TRIM
- Extender objetos hasta limites con EXTEND
- Usar Shift para cambiar entre comandos
- Modo Fence para recortes multiples
- Diferencia entre TRIM y BREAK

**Proxima Leccion:** Modulo 5 - Anotaciones Basicas

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos limpiando intersecciones complejas
