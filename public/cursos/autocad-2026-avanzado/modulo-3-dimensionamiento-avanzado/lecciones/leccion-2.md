# Leccion 2: Dimensiones Especiales

**Duracion:** 60 minutos
**Modulo:** 3 - Dimensionamiento Avanzado
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear dimensiones angulares con precision
- Aplicar dimensiones de radio y diametro
- Usar dimensiones de longitud de arco
- Dominar dimensiones ordenadas (ordinate)
- Implementar cotas en cadena y paralelas

---

## Introduccion

Mas alla de las dimensiones lineales basicas, AutoCAD ofrece tipos especializados para diferentes geometrias y necesidades de documentacion. Esta leccion cubre todas las variantes de dimensionamiento que necesitas para documentacion tecnica profesional.

---

## 1. Dimensiones Angulares

### 1.1 Comando DIMANGULAR

- **Command Line:** `DIMANGULAR` o `DAN`
- **Ribbon:** Annotate Tab > Dimensions > Angular
- **Menu:** Dimension > Angular

### 1.2 Metodos de Creacion

**Metodo 1: Dos Lineas**
```
Command: DIMANGULAR
Select arc, circle, line, or <specify vertex>: (click linea 1)
Select second line: (click linea 2)
Specify dimension arc line location: (ubicar dimension)
```

**Metodo 2: Vertice y Dos Puntos**
```
Command: DIMANGULAR
Select arc, circle, line, or <specify vertex>: Enter
Specify angle vertex: (click vertice)
Specify first angle endpoint: (click punto 1)
Specify second angle endpoint: (click punto 2)
Specify dimension arc line location: (ubicar)
```

**Metodo 3: Arco**
```
Command: DIMANGULAR
Select arc, circle, line, or <specify vertex>: (click arco)
Specify dimension arc line location: (ubicar)
(muestra angulo incluido del arco)
```

### 1.3 Opciones del Comando

| Opcion | Funcion |
|--------|---------|
| Mtext | Agregar texto multilinea |
| Text | Modificar texto de dimension |
| Angle | Especificar angulo de texto |
| Quadrant | Seleccionar cuadrante para circulo |

### 1.4 Angulos Mayores de 180°

Para angulos mayores a 180°, ubicar el arco de dimension en el lado exterior.

```
Specify dimension arc line location: (click fuera del angulo agudo)
(muestra angulo reflejo)
```

---

## 2. Dimensiones de Diametro

### 2.1 Comando DIMDIAMETER

- **Command Line:** `DIMDIAMETER` o `DDI`
- **Ribbon:** Annotate Tab > Dimensions > Diameter
- **Menu:** Dimension > Diameter

### 2.2 Uso

```
Command: DIMDIAMETER
Select arc or circle: (click circulo o arco)
Specify dimension line location or [Mtext/Text/Angle]: (ubicar)
```

### 2.3 Configuracion de Simbolo

El simbolo de diametro (Ø) se configura en el estilo:

```
Dimension Style > Primary Units tab
Prefix: %%c
(o configurar automaticamente en familia de estilos)
```

### 2.4 Posicionamiento

**Interior:**
- Para circulos grandes
- Linea de dimension cruza el centro

**Exterior:**
- Para circulos pequenos
- Leader automatico hacia afuera

### 2.5 DIMCENTER y DIMCEN

Para marcar centros sin dimension:

```
Command: DIMCENTER
Select arc or circle: (click)
(crea marca de centro)
```

Variable DIMCEN controla el tipo:
- 0: Sin marca
- Positivo: Cruz
- Negativo: Lineas de centro

---

## 3. Dimensiones de Radio

### 3.1 Comando DIMRADIUS

- **Command Line:** `DIMRADIUS` o `DRA`
- **Ribbon:** Annotate Tab > Dimensions > Radius
- **Menu:** Dimension > Radius

### 3.2 Uso

```
Command: DIMRADIUS
Select arc or circle: (click)
Specify dimension line location: (ubicar)
```

### 3.3 Prefijo R

El prefijo "R" se configura automaticamente o en estilo:

```
Dimension Style > Primary Units
Prefix: R
```

### 3.4 DIMJOGGED (Radio Acortado)

Para arcos con centro muy lejano:

```
Command: DIMJOGGED
Select arc or circle: (click)
Specify center location override: (nueva ubicacion de "centro")
Specify dimension line location: (ubicar dimension)
Specify jog location: (ubicar pliegue)
```

---

## 4. Dimension de Longitud de Arco

### 4.1 Comando DIMARC

- **Command Line:** `DIMARC` o `DAR`
- **Ribbon:** Annotate Tab > Dimensions > Arc Length
- **Menu:** Dimension > Arc Length

### 4.2 Uso

```
Command: DIMARC
Select arc or polyline arc segment: (click arco)
Specify arc length dimension location: (ubicar)
```

### 4.3 Simbolo de Arco

El simbolo de arco (⌒) aparece automaticamente.

Configurar en estilo:
```
Dimension Style > Symbols and Arrows
Arc length symbol: Preceding/Above/None
```

### 4.4 Opciones

| Opcion | Funcion |
|--------|---------|
| Mtext | Texto multilinea |
| Text | Modificar texto |
| Angle | Angulo del texto |
| Partial | Medir solo parte del arco |
| Leader | Agregar leader |

---

## 5. Dimensiones Ordenadas (Ordinate)

### 5.1 Concepto

Las dimensiones ordenadas miden distancias X o Y desde un punto de origen (datum).

### 5.2 Comando DIMORDINATE

- **Command Line:** `DIMORDINATE` o `DOR`
- **Ribbon:** Annotate Tab > Dimensions > Ordinate
- **Menu:** Dimension > Ordinate

### 5.3 Establecer Origen

Antes de usar dimensiones ordenadas, establecer el origen UCS:

```
Command: UCS
Origin: (click en punto datum)
```

### 5.4 Uso

```
Command: DIMORDINATE
Specify feature location: (click punto a dimensionar)
Specify leader endpoint or [Xdatum/Ydatum/Mtext/Text/Angle]: (ubicar)
```

**Opciones:**
- **Xdatum:** Forzar dimension X
- **Ydatum:** Forzar dimension Y
- **Automatico:** Segun direccion del leader

### 5.5 Aplicaciones

- Dibujos de manufactura CNC
- Ubicacion de agujeros
- Coordenadas de puntos
- Planos de instalacion

### 5.6 Ejemplo Practico

```
1. Dibujar placa con agujeros
2. UCS > Origin en esquina inferior izquierda
3. DIMORDINATE en cada agujero
4. Arrastrar horizontalmente para X
5. Arrastrar verticalmente para Y
```

---

## 6. Dimensiones en Cadena (Baseline y Continue)

### 6.1 DIMBASELINE

Crea dimensiones desde una linea base comun.

```
Command: DIMBASELINE
Specify a second extension line origin or [Undo/Select] <Select>: S
Select base dimension: (click dimension existente)
Specify a second extension line origin: (click siguiente punto)
(continua agregando puntos)
Enter: (terminar)
```

**Espaciado:**
Variable DIMDLI controla el espaciado entre dimensiones baseline.

```
Command: DIMDLI
Enter new value <3.75>: 10
```

### 6.2 DIMCONTINUE

Crea dimensiones encadenadas extremo a extremo.

```
Command: DIMCONTINUE
Specify a second extension line origin or [Undo/Select] <Select>: S
Select continued dimension: (click dimension existente)
Specify a second extension line origin: (click siguiente punto)
(continua agregando puntos)
Enter: (terminar)
```

### 6.3 Comparacion

| Baseline | Continue |
|----------|----------|
| Desde origen comun | Extremo a extremo |
| Dimensiones acumulativas | Dimensiones incrementales |
| Mejor para tolerancias | Mejor para fabricacion |

---

## 7. Quick Dimension (QDIM)

### 7.1 Comando QDIM

Crea multiples dimensiones rapidamente.

- **Command Line:** `QDIM`
- **Ribbon:** Annotate Tab > Dimensions > Quick Dimension

### 7.2 Uso

```
Command: QDIM
Select geometry to dimension: (seleccionar objetos)
Specify dimension line position or [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint/Edit/seTtings]: (ubicar u opcion)
```

### 7.3 Opciones

| Opcion | Resultado |
|--------|-----------|
| Continuous | Dimensiones en cadena |
| Staggered | Dimensiones escalonadas |
| Baseline | Dimensiones desde base |
| Ordinate | Dimensiones ordenadas |
| Radius | Radios de arcos |
| Diameter | Diametros de circulos |
| datumPoint | Establecer punto datum |
| Edit | Editar puntos a dimensionar |

---

## 8. Dimension Inspection

### 8.1 Comando DIMINSPECT

Agrega informacion de inspeccion a dimensiones existentes.

```
Command: DIMINSPECT
Select dimensions: (seleccionar)
Enter option [Add/Remove] <Add>: A
```

### 8.2 Dialogo de Inspeccion

| Campo | Opciones |
|-------|----------|
| Shape | Round, Angular, None |
| Label | Identificador (A, B, C) |
| Inspection rate | 25%, 50%, 100% |

### 8.3 Aplicaciones

- Control de calidad en manufactura
- Tolerancias criticas
- Cumplimiento ISO 9001
- Documentacion de inspeccion

---

## 9. Dimension Space y Adjust

### 9.1 DIMSPACE

Ajusta el espaciado entre dimensiones paralelas.

```
Command: DIMSPACE
Select base dimension: (click primera dimension)
Select dimensions to space: (seleccionar otras)
Enter value or [Auto] <Auto>: 10
(espaciado uniforme de 10 unidades)
```

### 9.2 DIMREASSOCIATE

Reasociar dimension a nuevos puntos.

```
Command: DIMREASSOCIATE
Select dimensions to reassociate: (seleccionar)
Specify first extension line origin or [Select object] <next>: (nuevo punto)
```

---

## 10. Mejores Practicas

### 10.1 Seleccion del Tipo Correcto

| Geometria | Tipo de Dimension |
|-----------|------------------|
| Distancia lineal | DIMLINEAR, DIMALIGNED |
| Angulos | DIMANGULAR |
| Circulos completos | DIMDIAMETER |
| Arcos | DIMRADIUS, DIMARC |
| Coordenadas | DIMORDINATE |
| Secuencias | DIMBASELINE, DIMCONTINUE |

### 10.2 Ubicacion de Dimensiones

- Evitar cruce de lineas de dimension
- Mantener dimensiones fuera del dibujo
- Agrupar dimensiones relacionadas
- Usar DIMSPACE para uniformidad

### 10.3 Consistencia

- Usar estilos apropiados por tipo
- Mantener precision consistente
- Seguir estandares de la industria

---

## Ejercicio Practico 2

**Objetivo:** Dominar dimensiones especiales.

**Tarea 1: Dimensiones Angulares**
- Dibujar triangulo con angulos conocidos
- Dimensionar los tres angulos
- Verificar que sumen 180°

**Tarea 2: Diametros y Radios**
- Dibujar placa con 4 agujeros (2 tamanos)
- Aplicar dimensiones de diametro
- Marcar centros con DIMCENTER

**Tarea 3: Longitud de Arco**
- Dibujar arco de 90°
- Dimensionar radio
- Dimensionar longitud de arco

**Tarea 4: Dimensiones Ordenadas**
- Dibujar patron de agujeros
- Establecer UCS en esquina
- Crear dimensiones ordenadas X e Y

**Tarea 5: Baseline y Continue**
- Dibujar perfil con multiples escalones
- Crear dimensiones baseline
- Crear dimensiones continue
- Comparar resultados

**Tarea 6: Quick Dimension**
- Seleccionar geometria compleja
- Usar QDIM con diferentes opciones
- Aplicar DIMSPACE para uniformidad

**Entregable:** Plano con todos los tipos de dimension.

---

## Evaluacion

**Pregunta 1:** Que comando se usa para medir longitud de arco?

**Pregunta 2:** Cual es la diferencia entre DIMBASELINE y DIMCONTINUE?

**Pregunta 3:** Que se debe hacer antes de usar DIMORDINATE?

**Pregunta 4:** Que comando ajusta el espaciado entre dimensiones?

**Pregunta 5:** Cuando usar DIMJOGGED en lugar de DIMRADIUS?

---

## Resumen

En esta leccion aprendiste:

- Crear dimensiones angulares con multiples metodos
- Aplicar dimensiones de diametro y radio
- Usar dimensiones de longitud de arco
- Dominar dimensiones ordenadas
- Implementar baseline y continue
- Usar QDIM para dimensionamiento rapido

**Proxima Leccion:** Tolerancias y GD&T

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos dimensionando plano mecanico
