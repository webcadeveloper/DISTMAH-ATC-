# Leccion 2: Array Path y Comando OFFSET

**Duracion:** 60 minutos
**Modulo:** 1 - Edicion Avanzada de Objetos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear arrays siguiendo trayectorias con ARRAYPATH
- Dominar el comando OFFSET para copias paralelas
- Usar OFFSET con diferentes modos
- Combinar arrays y offset en diseños profesionales
- Aplicar estas tecnicas en proyectos reales

---

## Introduccion

ARRAYPATH distribuye objetos a lo largo de una trayectoria curva o recta. OFFSET crea copias paralelas a una distancia especifica. Ambos comandos son esenciales para crear elementos repetitivos siguiendo contornos o generando geometria derivada.

---

## 1. Comando ARRAYPATH

### 1.1 Acceso al Comando

- **Command Line:** `ARRAYPATH` o `AR` (luego PA)
- **Ribbon:** Home Tab > Modify Panel > Path Array
- **Menu:** Modify > Array > Path Array

### 1.2 Sintaxis

```
Command: ARRAYPATH
Select objects: (seleccionar objeto a copiar)
Select objects: (Enter)
Type = Path  Associative = Yes
Select path curve: (seleccionar trayectoria)
Select grip to edit array or [ASsociative/Method/Base point/Tangent direction/Items/Rows/Levels/Align items/Z direction/eXit]:
```

### 1.3 Trayectorias Validas

| Tipo | Uso |
|------|-----|
| Line | Trayectoria recta |
| Polyline | Contornos complejos |
| Arc | Curvas simples |
| Circle | Distribucion circular |
| Spline | Curvas organicas |
| Ellipse | Trayectorias elipticas |
| Helix | Espirales 3D |

### 1.4 Metodo de Distribucion

```
Enter path method [Divide/Measure] <Divide>:
```

| Metodo | Funcion |
|--------|---------|
| Divide | Divide trayectoria en N partes iguales |
| Measure | Coloca items cada N unidades |

### 1.5 Ejemplo: Postes en Camino

```
Command: ARRAYPATH
Select objects: (bloque de poste)
Select path curve: (polyline del camino)
Method: Measure
Distance: 50 (cada 50 metros)
Align items: Yes
```

![Array Path](../imagenes/leccion-2-m1-arraypath.png)

---

## 2. Opciones de ARRAYPATH

### 2.1 Items

Numero total de elementos:

```
Enter number of items along path: 20
```

### 2.2 Rows

Filas perpendiculares a la trayectoria:

```
Enter number of rows: 2
Specify the distance between rows: 5
```

### 2.3 Levels

Niveles en direccion Z (3D):

```
Enter number of levels: 3
Specify the distance between levels: 3
```

### 2.4 Align Items

Controla si los elementos se alinean con la trayectoria:

```
Align items along path [Yes/No] <Yes>: Y
```

- **Yes:** Items rotan para seguir la curva
- **No:** Items mantienen orientacion original

### 2.5 Base Point

Punto del objeto que sigue la trayectoria:

```
Specify base point: (click en punto del objeto)
```

---

## 3. Ejemplos Path Array

### 3.1 Barandal en Escalera Curva

```
1. Dibujar spline de la escalera
2. Dibujar perfil de balaustre
Command: ARRAYPATH
Select objects: (balaustre)
Select path: (spline)
Method: Measure
Distance: 12 cm
Align: Yes
```

### 3.2 Arboles en Camino

```
1. Dibujar polyline del sendero
2. Insertar bloque de arbol
Command: ARRAYPATH
Select objects: (arbol)
Select path: (polyline)
Method: Measure
Distance: 8 metros
Rows: 2
Row offset: 3 metros (uno a cada lado)
```

### 3.3 Luminarias en Techo Curvo

```
1. Dibujar arco del techo
2. Insertar bloque de luminaria
Command: ARRAYPATH
Select objects: (luminaria)
Select path: (arco)
Method: Divide
Items: 10
Align: No (luminarias siempre hacia abajo)
```

---

## 4. Comando OFFSET

### 4.1 Acceso al Comando

- **Command Line:** `OFFSET` o `O`
- **Ribbon:** Home Tab > Modify Panel > Offset
- **Menu:** Modify > Offset

### 4.2 Sintaxis Basica

```
Command: OFFSET
Current settings: Erase source=No  Layer=Source  OFFSETGAPTYPE=0
Specify offset distance or [Through/Erase/Layer] <10.0000>: 25
Select object to offset or [Exit/Undo]: (click en objeto)
Specify point on side to offset or [Exit/Multiple/Undo]: (click lado)
```

### 4.3 Proceso

1. Especificar distancia
2. Seleccionar objeto
3. Indicar hacia que lado

---

## 5. Modos de OFFSET

### 5.1 Through (Por Punto)

Offset pasa por un punto especifico:

```
Specify offset distance or [Through/...]: T
Select object to offset: (click)
Specify through point: (click donde pase la copia)
```

### 5.2 Multiple

Crear multiples offsets sin repetir comando:

```
Specify point on side to offset or [...Multiple...]: M
Specify point on side to offset: (click)
Specify point on side to offset: (click otro lado)
Specify point on side to offset: (Enter para terminar)
```

### 5.3 Erase Source

Elimina el objeto original:

```
Specify offset distance or [...Erase...]: E
Erase source object after offsetting? [Yes/No] <No>: Y
```

### 5.4 Layer

Controla en que capa se crea el offset:

```
Specify offset distance or [...Layer...]: L
Enter layer option for offset objects [Current/Source] <Source>: C
```

- **Source:** Misma capa que el original
- **Current:** Capa actual

---

## 6. OFFSET con Diferentes Objetos

### 6.1 Lineas

Crea linea paralela a la distancia especificada.

### 6.2 Arcos

Crea arco concentrico (mayor o menor segun lado).

### 6.3 Circulos

Crea circulo concentrico:
- Interior: Radio menor
- Exterior: Radio mayor

### 6.4 Polylines

Crea polyline paralela completa, ajustando vertices automaticamente.

### 6.5 Splines

Crea spline paralela aproximada.

![Offset Objects](../imagenes/leccion-2-m1-offset-objects.png)

---

## 7. OFFSETGAPTYPE

### 7.1 Variable del Sistema

Controla como se manejan los espacios en esquinas agudas:

```
Command: OFFSETGAPTYPE
Enter new value for OFFSETGAPTYPE <0>:
```

| Valor | Efecto |
|-------|--------|
| 0 | Extiende segmentos hasta interseccion |
| 1 | Rellena con arcos (fillet) |
| 2 | Rellena con chaflanes (chamfer) |

### 7.2 Ejemplo Visual

Polyline con esquina aguda:
- **0:** Esquina extendida (punta)
- **1:** Esquina redondeada
- **2:** Esquina con chaflan

---

## 8. Aplicaciones Profesionales

### 8.1 Muros Dobles en Arquitectura

```
1. Dibujar eje de muro
Command: OFFSET
Distance: 0.075 (7.5 cm = medio muro)
(offset a ambos lados)
Resultado: Muro de 15 cm con dos lineas
```

### 8.2 Carriles de Carretera

```
1. Dibujar eje de via
Command: OFFSET
Distance: 3.5 (ancho de carril)
Multiple: Si
(crear multiples carriles)
```

### 8.3 Contornos de Mecanizado

```
1. Perfil de pieza
Command: OFFSET
Distance: 5 (tolerancia de mecanizado)
Side: Exterior
```

### 8.4 Marcos de Ventanas

```
1. Dibujar contorno exterior
Command: OFFSET
Distance: -50 (hacia adentro)
(crear marco interior)
```

---

## 9. Combinar Array Path + Offset

### 9.1 Barandal Completo

```
Paso 1: Dibujar linea de barandal
Paso 2: OFFSET 5 cm a cada lado (pasamanos)
Paso 3: ARRAYPATH balaustre en trayectoria
Paso 4: Agregar pasamanos superior e inferior
```

### 9.2 Estacionamiento Curvo

```
Paso 1: Dibujar arco de acceso
Paso 2: OFFSET para crear ancho de via
Paso 3: ARRAYPATH marcadores de cajon
```

---

## 10. Tips de Productividad

### 10.1 Offset Rapido

Despues del primer offset, Enter repite con misma distancia:
```
(despues de primer offset)
Select object: (nuevo objeto)
Side: (click)
(offset con misma distancia)
```

### 10.2 Distancia Cero para Copiar

```
OFFSET distance: 0
(crea copia exacta en el lugar del click)
```

### 10.3 Offset Negativo

No existe como tal. Para offset interior:
- Click en el lado interior del objeto

---

## Ejercicio Practico 2

**Objetivo:** Dominar Array Path y OFFSET.

**Tarea 1: Array Path - Cadena**
- Dibujar spline curva
- Dibujar eslabon de cadena
- Crear array path con espaciado de 10

**Tarea 2: Array Path - Via de Tren**
- Dibujar polyline para la via
- Dibujar durmiente (rectangulo)
- Array con method Measure, distancia 60

**Tarea 3: OFFSET - Muro Doble**
- Dibujar polyline de muro
- Offset 7.5 a cada lado
- Resultado: muro de 15 cm

**Tarea 4: OFFSET - Piscina**
- Dibujar contorno de piscina
- Offset 100 exterior (area de deck)
- Offset 50 interior (borde)

**Tarea 5: Combinado - Cerca**
- Dibujar polyline del perimetro
- Offset 5 para crear doble linea
- Array path de poste cada 200

**Entregable:** Archivo con todos los ejercicios.

---

## Evaluacion

**Pregunta 1:** Que metodo de Array Path divide la trayectoria en partes iguales?

**Pregunta 2:** Como se especifica que OFFSET pase por un punto especifico?

**Pregunta 3:** Que hace la opcion Align Items en Array Path?

**Pregunta 4:** Que variable controla el tratamiento de esquinas en OFFSET?

**Pregunta 5:** Como se crean multiples offsets sin repetir el comando?

---

## Resumen

En esta leccion aprendiste:

- Crear Array Path con metodos Divide y Measure
- Opciones de alineacion y filas en Array Path
- Comando OFFSET para copias paralelas
- Modos Through, Multiple, Erase, Layer
- OFFSETGAPTYPE para esquinas
- Aplicaciones profesionales combinadas

**Proxima Leccion:** FILLET, CHAMFER y BLEND

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando patrones en trayectorias
