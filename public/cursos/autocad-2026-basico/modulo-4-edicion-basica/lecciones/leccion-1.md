# Leccion 1: Seleccion de Objetos

**Duracion:** 45 minutos
**Modulo:** 4 - Edicion Basica de Objetos
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Dominar todos los metodos de seleccion de objetos
- Usar Window y Crossing para selecciones multiples
- Aplicar filtros de seleccion
- Crear y usar grupos de seleccion
- Configurar opciones de seleccion

---

## Introduccion

La seleccion eficiente de objetos es fundamental para la productividad en AutoCAD. Antes de modificar, copiar, mover o eliminar objetos, debes seleccionarlos. AutoCAD ofrece numerosos metodos de seleccion para diferentes situaciones.

---

## 1. Metodos Basicos de Seleccion

### 1.1 Click Individual

El metodo mas simple: click directo sobre el objeto.

```
Command: ERASE
Select objects: (click en objeto)
1 found
Select objects: (click en otro)
1 found, 2 total
Select objects: (Enter para ejecutar)
```

### 1.2 Pickbox

El cuadro pequeno en el centro del cursor (pickbox) determina el area de deteccion.

**Ajustar tamano:**
- Options > Selection > Pickbox Size
- O variable `PICKBOX` (valor 0-50, default 3)

### 1.3 Indicadores Visuales

| Indicador | Significado |
|-----------|-------------|
| Objeto resaltado | Cursor sobre objeto seleccionable |
| Grips (cuadros) | Objeto seleccionado |
| Linea punteada | Objeto en seleccion temporal |

---

## 2. Seleccion Window (Ventana)

### 2.1 Concepto

Selecciona objetos **completamente dentro** del rectangulo.

### 2.2 Metodo

1. Click en esquina vacia (izquierda a derecha)
2. Arrastra hacia la derecha
3. Click en esquina opuesta
4. Solo objetos 100% dentro se seleccionan

### 2.3 Caracteristicas

- Rectangulo con borde **continuo azul**
- Fondo **azul claro** semitransparente
- Direccion: **izquierda a derecha**

![Window Selection](../imagenes/leccion-1-m4-window.png)

### 2.4 Escribir W

```
Select objects: W
Specify first corner: (click)
Specify opposite corner: (click)
5 found
```

---

## 3. Seleccion Crossing (Cruce)

### 3.1 Concepto

Selecciona objetos **dentro o que cruzan** el rectangulo.

### 3.2 Metodo

1. Click en esquina vacia (derecha a izquierda)
2. Arrastra hacia la izquierda
3. Click en esquina opuesta
4. Objetos dentro O tocando el borde se seleccionan

### 3.3 Caracteristicas

- Rectangulo con borde **discontinuo verde**
- Fondo **verde claro** semitransparente
- Direccion: **derecha a izquierda**

### 3.4 Escribir C

```
Select objects: C
Specify first corner: (click)
Specify opposite corner: (click)
12 found
```

---

## 4. Otros Metodos de Seleccion

### 4.1 Window Polygon (WP)

Selecciona con poligono irregular (objetos completamente dentro):

```
Select objects: WP
First polygon point: (click)
Specify endpoint of line or [Undo]: (click)
Specify endpoint of line or [Undo]: (click)
Specify endpoint of line or [Undo]: (Enter)
```

### 4.2 Crossing Polygon (CP)

Selecciona con poligono irregular (dentro o cruzando):

```
Select objects: CP
First polygon point: (click)
Specify endpoint of line or [Undo]: (click)
...
```

### 4.3 Fence (F)

Selecciona todo lo que toca una linea de seleccion:

```
Select objects: F
Specify first fence point: (click)
Specify next fence point or [Undo]: (click)
Specify next fence point or [Undo]: (Enter)
```

### 4.4 Last (L)

Selecciona el ultimo objeto creado:

```
Select objects: L
1 found
```

### 4.5 Previous (P)

Selecciona la seleccion anterior:

```
Select objects: P
5 found (seleccion previa restaurada)
```

### 4.6 All (ALL)

Selecciona todos los objetos visibles (excepto en capas congeladas/bloqueadas):

```
Select objects: ALL
156 found
```

---

## 5. Tabla de Metodos de Seleccion

| Metodo | Atajo | Funcion |
|--------|-------|---------|
| Window | W | Completamente dentro (izq→der) |
| Crossing | C | Dentro o cruzando (der→izq) |
| Window Polygon | WP | Dentro de poligono |
| Crossing Polygon | CP | Cruza poligono |
| Fence | F | Toca linea de seleccion |
| Last | L | Ultimo objeto creado |
| Previous | P | Seleccion anterior |
| All | ALL | Todos los objetos |
| Box | BOX | W o C segun direccion |
| AUto | AU | Individual o Box |

---

## 6. Modificar Seleccion

### 6.1 Agregar a Seleccion

Por defecto, cada click/ventana agrega a la seleccion.

### 6.2 Remover de Seleccion (Shift)

Mantiene Shift y click/ventana para remover:

```
Select objects: (click) - agrega
1 found
Select objects: (Shift+click) - remueve
1 found, 1 removed, 0 total
```

### 6.3 Remove Mode (R)

```
Select objects: R (entra en modo remover)
Remove objects: (click para remover)
Remove objects: A (vuelve a modo agregar)
Select objects: (click para agregar)
```

---

## 7. Quick Select (QSELECT)

### 7.1 Acceso

- **Command:** `QSELECT`
- **Ribbon:** Home > Utilities > Quick Select
- **Properties Palette:** Icono Quick Select

### 7.2 Dialogo Quick Select

![Quick Select Dialog](../imagenes/leccion-1-m4-qselect.png)

### 7.3 Opciones

| Campo | Funcion |
|-------|---------|
| Apply to | Dibujo completo o seleccion |
| Object type | Tipo de objeto a buscar |
| Properties | Propiedad a filtrar |
| Operator | =, ≠, >, <, etc. |
| Value | Valor a comparar |
| How to apply | Nueva seleccion o agregar/remover |

### 7.4 Ejemplo: Seleccionar Circulos Rojos

1. Object type: Circle
2. Properties: Color
3. Operator: = Equals
4. Value: Red
5. OK

---

## 8. Selection Filter (FILTER)

### 8.1 Acceso

```
Command: FILTER
```

### 8.2 Uso

El dialogo permite crear filtros complejos combinando:
- Tipo de objeto
- Propiedades (color, capa, etc.)
- Operadores logicos (AND, OR, NOT)

### 8.3 Guardar Filtros

Los filtros pueden guardarse con nombre para reutilizar.

---

## 9. Select Similar

### 9.1 Funcion

Selecciona objetos similares al seleccionado.

### 9.2 Uso

1. Selecciona un objeto
2. Click derecho > Select Similar
3. Todos los objetos similares se seleccionan

### 9.3 Configurar Criterios

```
Command: SELECTSIMILAR
Settings: permite configurar que propiedades comparar
```

---

## 10. Opciones de Seleccion

### 10.1 Acceder a Opciones

Options > Selection Tab

### 10.2 Opciones Principales

| Opcion | Funcion |
|--------|---------|
| Noun/Verb selection | Seleccionar antes de comando |
| Use Shift to add | Shift para agregar (no default) |
| Press and drag | Mantener click para ventana |
| Implied windowing | Auto-ventana al click vacio |
| Object grouping | Respetar grupos |
| Associative Hatch | Seleccionar hatch con contorno |

### 10.3 Pickbox Size

Ajusta el tamano del cuadro de seleccion.

### 10.4 Grip Settings

Configura tamano, color y comportamiento de grips.

---

## 11. Grips

### 11.1 Que son los Grips

Cuadros que aparecen en objetos seleccionados para edicion directa.

### 11.2 Tipos de Grips

| Color | Estado |
|-------|--------|
| Azul | Frio (no seleccionado) |
| Rojo | Caliente (seleccionado) |
| Verde | Hover (cursor sobre) |

### 11.3 Edicion con Grips

1. Selecciona objeto (aparecen grips azules)
2. Click en un grip (se vuelve rojo)
3. Mueve, estira, rota, escala, etc.
4. Spacebar cicla entre modos

### 11.4 Modos de Grip

Al activar un grip, presiona Spacebar para ciclar:
- STRETCH
- MOVE
- ROTATE
- SCALE
- MIRROR

---

## Ejercicio Practico 1

**Objetivo:** Dominar metodos de seleccion.

**Preparacion:**
Crear 20+ objetos variados (lineas, circulos, rectangulos) en diferentes capas y colores.

**Tarea 1: Window vs Crossing**
- Usar Window para seleccionar solo objetos dentro
- Usar Crossing para seleccionar objetos que cruzan
- Observar diferencia visual (azul vs verde)

**Tarea 2: Fence**
- Dibujar linea de fence atravesando varios objetos
- Solo se seleccionan los que toca

**Tarea 3: Quick Select**
- Seleccionar todos los circulos
- Seleccionar todos los objetos en capa "CONSTRUCCION"
- Seleccionar todos los objetos rojos

**Tarea 4: Modificar Seleccion**
- Seleccionar 10 objetos con Window
- Usar Shift+click para remover 3
- Verificar conteo

**Tarea 5: Grips**
- Seleccionar una linea
- Usar grip para estirar
- Usar grip + Spacebar para rotar

**Entregable:** Descripcion de cada metodo usado y resultado.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre Window y Crossing?

**Pregunta 2:** Que tecla se usa para remover objetos de la seleccion?

**Pregunta 3:** Que metodo selecciona objetos que tocan una linea?

**Pregunta 4:** Que comando abre Quick Select?

**Pregunta 5:** Que significa un grip de color rojo?

---

## Resumen

En esta leccion aprendiste:

- Metodos basicos: click individual, Window, Crossing
- Metodos avanzados: WP, CP, Fence, Last, Previous, All
- Modificar seleccion con Shift y modo Remove
- Quick Select para filtros rapidos
- Uso de grips para edicion directa

**Proxima Leccion:** Comandos ERASE, MOVE, COPY

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos practicando selecciones
