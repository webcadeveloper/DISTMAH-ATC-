# Leccion 1: Arrays Rectangulares y Polares

**Duracion:** 60 minutos
**Modulo:** 1 - Edicion Avanzada de Objetos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear arrays rectangulares con control preciso
- Crear arrays polares alrededor de un centro
- Modificar arrays asociativos
- Usar grips para editar arrays
- Aplicar arrays en situaciones profesionales

---

## Introduccion

Los arrays (arreglos o matrices) permiten crear multiples copias de objetos siguiendo patrones especificos. AutoCAD 2026 ofrece tres tipos: Rectangular, Polar y Path. Los arrays asociativos mantienen la relacion entre copias, permitiendo modificaciones globales.

---

## 1. Comando ARRAYRECT (Rectangular)

### 1.1 Acceso al Comando

- **Command Line:** `ARRAYRECT` o `AR`
- **Ribbon:** Home Tab > Modify Panel > Rectangular Array
- **Menu:** Modify > Array > Rectangular Array

### 1.2 Sintaxis

```
Command: ARRAYRECT
Select objects: (seleccionar)
Select objects: (Enter)
Type = Rectangular  Associative = Yes
Select grip to edit array or [ASsociative/Base point/COUnt/Spacing/COLumns/Rows/Levels/eXit]:
```

### 1.3 Panel de Array (Ribbon)

Al crear array, aparece tab contextual Array:

| Opcion | Funcion |
|--------|---------|
| Columns | Numero de columnas |
| Between (Col) | Distancia entre columnas |
| Total (Col) | Distancia total columnas |
| Rows | Numero de filas |
| Between (Row) | Distancia entre filas |
| Total (Row) | Distancia total filas |
| Levels | Niveles 3D |

### 1.4 Ejemplo Basico

```
Command: ARRAYRECT
Select objects: (seleccionar circulo)
Columns: 5
Between: 30
Rows: 3
Between: 40
```

Resultado: 15 circulos (5x3) espaciados 30x40 unidades.

![Rectangular Array](../imagenes/leccion-1-m1-arrayrect.png)

### 1.5 Opciones Avanzadas

**COUnt:** Numero de columnas y filas
```
Enter the number of columns: 6
Enter the number of rows: 4
```

**Spacing:** Distancia entre elementos
```
Specify the distance between columns: 25
Specify the distance between rows: 35
```

**Base point:** Punto de referencia del patron
```
Specify base point: (click en punto de referencia)
```

---

## 2. Comando ARRAYPOLAR (Polar)

### 2.1 Acceso al Comando

- **Command Line:** `ARRAYPOLAR` o `AR` (luego PO)
- **Ribbon:** Home Tab > Modify Panel > Polar Array
- **Menu:** Modify > Array > Polar Array

### 2.2 Sintaxis

```
Command: ARRAYPOLAR
Select objects: (seleccionar)
Select objects: (Enter)
Type = Polar  Associative = Yes
Specify center point of array or [Base point/Axis of rotation]: (click centro)
Select grip to edit array or [ASsociative/Base point/Items/Angle between/Fill angle/ROWs/Levels/ROTate items/eXit]:
```

### 2.3 Opciones Principales

| Opcion | Funcion |
|--------|---------|
| Items | Numero total de elementos |
| Angle between | Angulo entre elementos |
| Fill angle | Angulo total a llenar |
| ROTate items | Si los items rotan o no |

### 2.4 Ejemplo: Engranaje

```
Command: ARRAYPOLAR
Select objects: (seleccionar diente)
Specify center point: (centro del engranaje)
Items: 24
Fill angle: 360
Rotate items: Yes
```

Resultado: 24 dientes distribuidos uniformemente.

### 2.5 Items vs Fill Angle

**Especificar Items:**
```
Enter number of items: 12
Specify the angle to fill: 360
```
Resultado: 12 elementos, cada 30°

**Especificar Angle Between:**
```
Specify the angle between items: 45
Specify the angle to fill: 360
```
Resultado: 8 elementos a 45° cada uno

### 2.6 Rotate Items

- **Yes:** Elementos rotan siguiendo el patron
- **No:** Elementos mantienen orientacion original

![Polar Array Rotate](../imagenes/leccion-1-m1-arraypolar-rotate.png)

---

## 3. Arrays Asociativos

### 3.1 Que es Asociativo

Un array asociativo mantiene vinculo entre:
- El objeto fuente y las copias
- Los parametros del array

### 3.2 Activar/Desactivar

```
Select grip to edit array or [ASsociative/...]: AS
Create associative array [Yes/No] <Yes>: Y
```

### 3.3 Ventajas de Asociativo

| Ventaja | Descripcion |
|---------|-------------|
| Edicion global | Cambiar fuente cambia todas las copias |
| Modificar parametros | Ajustar filas, columnas, espaciado |
| Grips especiales | Edicion visual del array |
| Menos memoria | Un objeto, multiples instancias |

### 3.4 Editar Array Asociativo

1. Seleccionar el array
2. Usar grips o panel Array
3. Modificar parametros
4. Todas las copias se actualizan

### 3.5 Convertir a No Asociativo

```
Command: EXPLODE
Select objects: (seleccionar array)
(array se convierte en objetos individuales)
```

---

## 4. Edicion con Grips

### 4.1 Grips de Array Rectangular

| Grip | Funcion |
|------|---------|
| Triangulo (columnas) | Agregar/quitar columnas |
| Triangulo (filas) | Agregar/quitar filas |
| Cuadrado (espaciado) | Modificar distancia |
| Cuadrado (total) | Modificar dimension total |

### 4.2 Grips de Array Polar

| Grip | Funcion |
|------|---------|
| Triangulo (items) | Agregar/quitar elementos |
| Flecha (fill) | Modificar angulo de llenado |
| Cuadrado (radio) | Cambiar radio |

### 4.3 Ejemplo de Edicion

1. Click en array para seleccionar
2. Aparecen grips especiales
3. Hover sobre grip muestra funcion
4. Click y arrastrar para modificar
5. O click y escribir valor

---

## 5. Reemplazar Elementos

### 5.1 Comando ARRAYEDIT

```
Command: ARRAYEDIT
Select array: (click en array)
Enter an option [Source/Replace/Base point/Items/Angle/Fill/ROWs/Levels/ROTate/RESet/eXit]:
```

### 5.2 Reemplazar Item

```
Enter an option: Replace
Select objects to replace items: (seleccionar objeto diferente)
Select objects: (Enter)
Replacement base point: (click)
```

### 5.3 Editar Fuente

```
Enter an option: Source
Enter an option [Edit source/Replace source] <Edit>: E
(editar objeto fuente)
Command: ARRAYCLOSE (o click Close Array)
```

---

## 6. Arrays Clasicos (No Asociativos)

### 6.1 Comando ARRAY (Clasico)

Si prefieres array no asociativo directo:

```
Command: -ARRAY
Select objects: (seleccionar)
Enter array type [Rectangular/PAth/POlar] <Rectangular>: R
Enter the number of columns: 5
Enter the number of rows: 3
Specify the distance between columns: 25
Specify the distance between rows: 30
```

### 6.2 Cuando Usar Clasico

- Necesitas objetos independientes
- No planeas modificar el patron
- Compatibilidad con versiones antiguas

---

## 7. Ejemplos Profesionales

### 7.1 Estacionamiento

```
Rectangular Array:
- Objeto: Cajon de estacionamiento (PLINE)
- Columnas: 20, espaciado 2.5m
- Filas: 2, espaciado 5m
```

### 7.2 Escalera Helicoidal

```
Polar Array:
- Objeto: Escalon
- Centro: Eje de escalera
- Items: 16 (una vuelta)
- Fill: 360°
- Rotate: Yes
```

### 7.3 Panel de Iluminacion

```
Rectangular Array:
- Objeto: Luminaria (bloque)
- Columnas: 4, espaciado 6m
- Filas: 3, espaciado 6m
- Resultado: 12 luminarias
```

### 7.4 Rueda de Bicicleta

```
Polar Array:
- Objeto: Rayo
- Centro: Eje de rueda
- Items: 32
- Fill: 360°
- Rotate: Yes
```

---

## Ejercicio Practico 1

**Objetivo:** Dominar arrays rectangulares y polares.

**Tarea 1: Array Rectangular - Estacionamiento**
- Dibujar cajon 2.5x5m
- Crear array 10 columnas x 2 filas
- Espaciado: 2.7m columnas, 5.5m filas

**Tarea 2: Array Polar - Reloj**
- Dibujar marca de hora (linea pequena)
- Crear array polar con 12 items
- Fill angle: 360°
- Rotate items: No (marcas siempre verticales)

**Tarea 3: Array Polar - Engranaje**
- Dibujar perfil de diente
- Centro en 0,0
- Items: 20
- Rotate: Yes

**Tarea 4: Editar Array Asociativo**
- Crear array rectangular 5x5
- Modificar a 8x4 usando grips
- Cambiar espaciado con panel

**Tarea 5: Reemplazar Items**
- Crear array rectangular de circulos
- Reemplazar con rectangulo
- Verificar actualizacion

**Entregable:** Archivo con todos los arrays.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre array asociativo y no asociativo?

**Pregunta 2:** Que opcion controla si los elementos rotan en array polar?

**Pregunta 3:** Como se modifica el numero de columnas en un array asociativo?

**Pregunta 4:** Que comando edita la fuente de un array asociativo?

**Pregunta 5:** Cuantos elementos crea un array con 360° fill y 30° entre elementos?

---

## Resumen

En esta leccion aprendiste:

- Crear arrays rectangulares con ARRAYRECT
- Crear arrays polares con ARRAYPOLAR
- Diferencia entre asociativo y no asociativo
- Editar arrays con grips y panel
- Reemplazar elementos en arrays
- Aplicaciones profesionales

**Proxima Leccion:** Array Path y OFFSET

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando patrones complejos
