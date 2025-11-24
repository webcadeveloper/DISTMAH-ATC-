# Lección 11: 3D Array y 3D Mirror

## Introducción

La duplicación eficiente de geometría mediante arrays (patrones) y mirrors (simetrías) es fundamental para modelar estructuras repetitivas y simétricas. 3DARRAY crea patrones rectangulares (filas, columnas, niveles) y polares (circular alrededor de un eje) en el espacio tridimensional. MIRROR3D refleja objetos respecto a planos 3D, aprovechando simetría para reducir trabajo de modelado a la mitad o menos.

## Objetivos

- Crear arrays rectangulares 3D con filas, columnas y niveles
- Generar arrays polares alrededor de ejes 3D
- Reflejar geometría con MIRROR3D respecto a planos tridimensionales
- Definir planos de espejo mediante 3 puntos, objetos, o ejes
- Aplicar duplicación eficiente en estructuras simétricas

## 1. Comando 3DARRAY

### 1.1 Fundamentos

**Comando:** `3DARRAY` (clásico) o `ARRAYRECT`/`ARRAYPOLAR` (modernos, AutoCAD 2012+)

AutoCAD 2026 usa preferentemente `ARRAYRECT` y `ARRAYPOLAR` que son asociativos (edición dinámica).

**Dos tipos:**
- **Rectangular:** Filas (X), Columnas (Y), Niveles (Z)
- **Polar:** Circular alrededor de un eje con rotación

### 1.2 Array Rectangular 3D

**Comando:** `ARRAYRECT` (3D Rectangular Array)

```
Command: ARRAYRECT
Select objects: (selecciona objetos a duplicar)
Type: Rectangular
Select grip to edit array or [ASsociative/Base point/COUnt/Spacing/COLumns/Rows/Levels/eXit] <eXit>:
```

**Parámetros clave:**
- **Rows:** Número de filas (dirección Y)
- **Columns:** Número de columnas (dirección X)
- **Levels:** Número de niveles (dirección Z)
- **Spacing:** Distancia entre elementos en cada dirección

![Array rectangular 3D 3×3×2](../imagenes/arrayrect-3d.png)

### 1.3 Ejemplo: Patrón de Columnas

```
1. Crea CYLINDER de radio 15, altura 300 (columna)
2. Comando: ARRAYRECT
3. Select objects: (selecciona cilindro)
4. Columns: 4 (4 columnas en dirección X)
5. Column spacing: 500 (500 unidades entre columnas)
6. Rows: 3 (3 filas en dirección Y)
7. Row spacing: 600 (600 unidades entre filas)
8. Levels: 1 (un solo nivel, sin duplicación vertical)
```

Resultado: Grid de 4×3 = 12 columnas.

### 1.4 Array Rectangular 3D con Niveles

```
Command: ARRAYRECT
Select objects: (selecciona objeto)
Columns: 3
Column spacing: 100
Rows: 3
Row spacing: 100
Levels: 4 (4 pisos verticales)
Level spacing: 300 (300 unidades de altura entre pisos)
```

Resultado: Grid 3D de 3×3×4 = 36 objetos.

**Aplicación:** Estructura de edificio multi-piso con elementos repetitivos.

### 1.5 Array Polar 3D

**Comando:** `ARRAYPOLAR`

Crea patrón circular alrededor de un eje 3D.

```
Command: ARRAYPOLAR
Select objects: (selecciona objeto)
Type: Polar
Specify center point of array or [Base point/Axis of rotation]: (punto central)
Select grip to edit array or [ASsociative/Base point/Items/Angle between/Fill angle/ROWs/Levels/ROTate items/eXit]:
```

**Parámetros:**
- **Items:** Número total de elementos en el círculo
- **Angle between:** Ángulo entre elementos consecutivos
- **Fill angle:** Ángulo total del patrón (360° = círculo completo)
- **Axis of rotation:** Eje alrededor del cual rotar

![Array polar alrededor de eje Z](../imagenes/arraypolar-3d.png)

### 1.6 Ejemplo: Agujeros de Tornillos en Brida

```
1. Crea círculo base (brida)
2. Crea CYLINDER pequeño de radio 5, altura 20 (agujero de tornillo)
3. Posiciona cilindro en radio intermedio de la brida
4. ARRAYPOLAR
5. Select objects: (selecciona cilindro)
6. Center point: 0,0,0 (centro de la brida)
7. Items: 6 (6 agujeros)
8. Fill angle: 360 (círculo completo)
9. Rotate items: Yes (cilindros rotan con el patrón)
```

Resultado: 6 agujeros distribuidos uniformemente en círculo.

### 1.7 Array Polar con Eje Personalizado

```
ARRAYPOLAR → Axis of rotation: A
Specify axis start point: (punto inicial del eje)
Specify axis endpoint: (punto final del eje)
```

**Aplicación:** Escalera caracol (objetos rotan alrededor de eje vertical Z).

## 2. Comando MIRROR3D

### 2.1 Fundamentos

**Comando:** `MIRROR3D`

Refleja objetos respecto a un plano 3D (no una línea 2D como MIRROR).

**Definición del plano de espejo:**
- 3 puntos
- Objeto plano existente
- Último plano usado
- Plano ZX, XY, YZ del UCS

### 2.2 Sintaxis Básica

```
Command: MIRROR3D
Select objects: (selecciona objetos a reflejar)
Specify first point of mirror plane (3 points) or [Object/Last/Zaxis/View/XY/YZ/ZX/3points] <3points>: (método de plano)
Delete source objects? [Yes/No] <N>: N (generalmente No, para mantener original)
```

![MIRROR3D respecto a plano XY](../imagenes/mirror3d-plano-xy.png)

### 2.3 Opción 3 Points (Tres Puntos)

Define plano mediante tres puntos no colineales.

```
MIRROR3D
Specify first point of plane: (punto 1)
Specify second point on plane: (punto 2)
Specify third point on plane: (punto 3)
Delete source: N
```

**Los tres puntos definen el plano de simetría.**

### 2.4 Opción Object (Objeto Plano)

Usa objeto plano existente como plano de espejo (REGION, cara de sólido, superficie).

```
MIRROR3D
Mirror plane: Object
Select a circle, arc, or 2D-polyline segment: (selecciona objeto plano)
```

### 2.5 Opción XY, YZ, ZX (Planos del UCS)

Refleja respecto a planos principales del UCS actual.

```
MIRROR3D → XY (plano XY del UCS actual)
MIRROR3D → YZ (plano YZ)
MIRROR3D → ZX (plano ZX)
```

**Más rápido cuando el plano de simetría coincide con planos del UCS.**

### 2.6 Ejemplo: Pieza Mecánica Simétrica

```
1. Modela mitad de la pieza (usando EXTRUDE, operaciones booleanas, etc.)
2. Comando: MIRROR3D
3. Select objects: (selecciona mitad de la pieza)
4. Mirror plane: YZ (asumiendo simetría respecto a plano YZ)
5. Delete source: N
6. (Opcional) UNION ambas mitades para sólido único
```

Resultado: Pieza completa simétrica modelando solo la mitad.

**Ventaja:** Reduce trabajo de modelado al 50% en piezas simétricas.

### 2.7 Ejemplo: Edificio Simétrico

```
1. Modela ala izquierda del edificio completa
2. MIRROR3D
3. Select objects: (selecciona toda el ala izquierda)
4. Mirror plane: 3points
5. Specify points: (define plano central del edificio con 3 puntos)
6. Delete source: N
```

Resultado: Edificio completo simétrico.

## 3. Arrays Asociativos

### 3.1 Concepto de Asociatividad

Arrays creados con `ARRAYRECT` y `ARRAYPOLAR` (comandos modernos) son asociativos por defecto.

**Asociativo:** Editar el array completo modificando parámetros (filas, columnas, spacing) sin recrear.

**No asociativo (clásico 3DARRAY):** Objetos duplicados son independientes.

### 3.2 Editar Array Asociativo

```
1. Selecciona cualquier elemento del array
2. Aparece panel "Array" en ribbon
3. Modifica parámetros:
   - Number of columns
   - Column spacing
   - Rows, Levels, etc.
4. Array se actualiza dinámicamente
```

### 3.3 Convertir Array a Objetos Independientes

```
Selecciona array → Ribbon: Array tab → Explode (o comando ARRAYEDIT → Explode)
```

Todos los elementos se vuelven objetos independientes (pierde asociatividad).

## 4. Aplicaciones Combinadas

### 4.1 Estructura de Puente

```
1. Modela sección transversal de puente (viga, columnas)
2. ARRAYRECT a lo largo del puente (Columns con spacing = longitud de tramo)
3. MIRROR3D la estructura completa si el puente es simétrico
```

### 4.2 Rueda Dentada

```
1. Modela un solo diente (EXTRUDE perfil de diente)
2. ARRAYPOLAR alrededor del eje central
3. Items = número de dientes (ej: 24)
4. UNION todos los dientes con el disco base
```

### 4.3 Edificio Multi-Piso con Simetría

```
1. Modela un piso completo (columnas, vigas, losas)
2. ARRAYRECT verticalmente (Levels = número de pisos, Level spacing = altura de entre-piso)
3. Si edificio simétrico, MIRROR3D para duplicar ala opuesta
```

## 5. Workflow Recomendado

### Para Elementos Repetitivos:

1. **Modelar elemento individual** completamente (con todos los detalles)
2. **Verificar dimensiones** y posición
3. **Aplicar array** (rectangular o polar según patrón)
4. **Ajustar spacing** hasta obtener distribución deseada
5. **Convertir a objetos independientes** si necesitas modificar elementos individuales

### Para Elementos Simétricos:

1. **Modelar mitad completa** (la más compleja o detallada)
2. **Verificar geometría** antes de mirror
3. **Aplicar MIRROR3D** respecto a plano de simetría
4. **UNION ambas mitades** si deben ser sólido único
5. **Aplicar modificadores finales** (FILLET, CHAMFER) que afecten ambas mitades

## 6. Errores Comunes

### Error 1: Array en dirección incorrecta
**Causa:** UCS mal orientado.
**Solución:** Ajusta UCS antes de array, o especifica direcciones manualmente.

### Error 2: MIRROR3D refleja en plano incorrecto
**Causa:** Puntos de plano mal especificados.
**Solución:** Usa OSNAP para precisión, o usa opción XY/YZ/ZX si plano coincide con UCS.

### Error 3: No puedo editar array después de crear
**Causa:** Array no es asociativo (creado con 3DARRAY clásico).
**Solución:** Usa ARRAYRECT o ARRAYPOLAR (modernos, asociativos).

## Resumen

- ARRAYRECT crea patrones rectangulares 3D (filas, columnas, niveles)
- ARRAYPOLAR genera patrones circulares alrededor de ejes 3D
- MIRROR3D refleja objetos respecto a planos tridimensionales
- Planos de espejo: 3 puntos, objetos, planos XY/YZ/ZX del UCS
- Arrays asociativos permiten edición dinámica de parámetros
- Simetría y patrones reducen dramáticamente tiempo de modelado

## Próxima Lección

Lección 12 cubre SECTION (secciones 2D) y SLICE (cortes de sólidos), herramientas para análisis y documentación técnica de modelos 3D.

---

**Tiempo estimado:** 1 hora
**Dificultad:** Intermedia
