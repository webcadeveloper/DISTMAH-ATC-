# Leccion 3: Dimensiones Basicas

**Duracion:** 60 minutos
**Modulo:** 5 - Anotaciones Basicas
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear cotas lineales (horizontal, vertical, alineada)
- Usar cotas angulares, radiales y de diametro
- Entender el sistema de estilos de dimension
- Modificar cotas existentes
- Aplicar cotas continuas y de base

---

## Introduccion

Las dimensiones (cotas) comunican las medidas exactas de los objetos en un dibujo tecnico. AutoCAD ofrece un sistema robusto de acotacion que genera automaticamente valores basados en la geometria, y permite personalizar la apariencia mediante estilos.

---

## 1. Conceptos de Dimension

### 1.1 Partes de una Dimension

| Elemento | Descripcion |
|----------|-------------|
| Dimension Line | Linea con flechas que indica extension |
| Extension Lines | Lineas que conectan al objeto |
| Arrows | Puntas de flecha (symbols) |
| Dimension Text | Valor numerico |
| Center Mark | Marca de centro (para radios) |

![Dimension Parts](../imagenes/leccion-3-m5-dimension-parts.png)

### 1.2 Tipos de Dimensiones

- **Linear:** Horizontal, Vertical, Aligned
- **Angular:** Angulos entre lineas
- **Radial:** Radio, Diametro
- **Arc Length:** Longitud de arco
- **Ordinate:** Coordenadas X,Y

---

## 2. Dimension Linear

### 2.1 Acceso al Comando

- **Command Line:** `DIMLINEAR` o `DLI`
- **Ribbon:** Annotate Tab > Dimensions Panel > Linear
- **Menu:** Dimension > Linear

### 2.2 Sintaxis

```
Command: DIMLINEAR
Specify first extension line origin or <select object>: (click punto 1)
Specify second extension line origin: (click punto 2)
Specify dimension line location or [Mtext/Text/Angle/Horizontal/Vertical/Rotated]: (click ubicacion)
```

### 2.3 Seleccionar Objeto

Presiona Enter para seleccionar objeto directamente:

```
Specify first extension line origin or <select object>: (Enter)
Select object to dimension: (click en linea)
Specify dimension line location: (click ubicacion)
```

### 2.4 Horizontal y Vertical

Por defecto, AutoCAD determina si la cota es horizontal o vertical segun la ubicacion de la linea de cota.

Para forzar:
- **H:** Fuerza cota horizontal
- **V:** Fuerza cota vertical

```
Specify dimension line location or [...Horizontal/Vertical...]: H
(cota sera horizontal sin importar direccion)
```

---

## 3. Dimension Aligned

### 3.1 Acceso

- **Command:** `DIMALIGNED` o `DAL`
- **Ribbon:** Annotate > Dimensions > Aligned

### 3.2 Uso

Crea cota paralela al objeto, ideal para lineas inclinadas:

```
Command: DIMALIGNED
Specify first extension line origin: (click punto 1)
Specify second extension line origin: (click punto 2)
Specify dimension line location: (click ubicacion)
Dimension text = 141.42
```

---

## 4. Dimension Angular

### 4.1 Acceso

- **Command:** `DIMANGULAR` o `DAN`
- **Ribbon:** Annotate > Dimensions > Angular

### 4.2 Uso

```
Command: DIMANGULAR
Select arc, circle, line, or <specify vertex>: (click linea 1)
Select second line: (click linea 2)
Specify dimension arc line location: (click ubicacion)
Dimension text = 45
```

### 4.3 Opciones

- **Seleccionar arco:** Muestra angulo del arco
- **Seleccionar circulo:** Seleccionar dos puntos
- **Dos lineas:** Angulo entre ellas
- **Tres puntos:** Vertice + dos puntos

---

## 5. Dimension Radius

### 5.1 Acceso

- **Command:** `DIMRADIUS` o `DRA`
- **Ribbon:** Annotate > Dimensions > Radius

### 5.2 Uso

```
Command: DIMRADIUS
Select arc or circle: (click en circulo/arco)
Specify dimension line location: (click ubicacion)
Dimension text = R25.00
```

### 5.3 Resultado

Muestra "R" seguido del valor del radio con linea hacia el centro.

---

## 6. Dimension Diameter

### 6.1 Acceso

- **Command:** `DIMDIAMETER` o `DDI`
- **Ribbon:** Annotate > Dimensions > Diameter

### 6.2 Uso

```
Command: DIMDIAMETER
Select arc or circle: (click en circulo)
Specify dimension line location: (click ubicacion)
Dimension text = Ø50.00
```

### 6.3 Resultado

Muestra simbolo "Ø" seguido del valor del diametro.

---

## 7. Dimension Arc Length

### 7.1 Acceso

- **Command:** `DIMARC`
- **Ribbon:** Annotate > Dimensions > Arc Length

### 7.2 Uso

Mide la longitud del arco (no el radio):

```
Command: DIMARC
Select arc or polyline arc segment: (click en arco)
Specify arc length dimension location: (click ubicacion)
Dimension text = 78.54
```

---

## 8. Baseline y Continue

### 8.1 Continue Dimension

Crea cotas consecutivas desde el ultimo punto:

```
Command: DIMCONTINUE (o DCO)
Specify a second extension line origin or [Undo/Select]: (click siguiente punto)
Dimension text = 50.00
Specify a second extension line origin: (click siguiente)
Dimension text = 75.00
Specify a second extension line origin: (Enter para terminar)
```

### 8.2 Baseline Dimension

Crea cotas desde una base comun:

```
Command: DIMBASELINE (o DBA)
Specify a second extension line origin or [Undo/Select]: (click punto)
Dimension text = 50.00
Specify a second extension line origin: (click siguiente)
Dimension text = 125.00
```

![Baseline vs Continue](../imagenes/leccion-3-m5-baseline-continue.png)

### 8.3 Select para Cambiar Base

```
Specify a second extension line origin or [Undo/Select]: S
Select base dimension: (click en otra dimension)
(nueva base establecida)
```

---

## 9. Estilos de Dimension

### 9.1 Comando DIMSTYLE

- **Command:** `DIMSTYLE` o `D`
- **Ribbon:** Annotate > Dimensions > Dimension Style

### 9.2 Dialogo Dimension Style Manager

![Dimension Style Manager](../imagenes/leccion-3-m5-dimstyle.png)

### 9.3 Crear Nuevo Estilo

1. Click "New..."
2. Nombrar el estilo (ej: "ISO-25")
3. Configurar en cada tab
4. OK

### 9.4 Tabs de Configuracion

| Tab | Configura |
|-----|-----------|
| Lines | Lineas de cota y extension |
| Symbols and Arrows | Flechas y simbolos |
| Text | Texto de cota |
| Fit | Ajustes de espacio |
| Primary Units | Unidades principales |
| Alternate Units | Unidades alternativas |
| Tolerances | Tolerancias |

### 9.5 Configuraciones Importantes

**Lines Tab:**
- Color, Linetype, Lineweight
- Extension line offset
- Extend beyond dim lines

**Symbols and Arrows:**
- Arrow type: Closed filled, Open, Dot, etc.
- Arrow size

**Text Tab:**
- Text style
- Text height
- Text placement
- Text alignment

**Primary Units:**
- Unit format: Decimal, Fractional
- Precision: 0.00, 0.000, etc.
- Scale factor

---

## 10. Modificar Dimensiones

### 10.1 Grips de Dimension

Seleccionar dimension muestra grips para:
- Mover texto
- Mover linea de dimension
- Mover extension lines

### 10.2 Override de Texto

```
Specify dimension line location or [Mtext/Text/...]: T
Enter dimension text <50.00>: 50.00 TYP
(agrega "TYP" al valor)
```

### 10.3 DIMEDIT

```
Command: DIMEDIT
Enter type of dimension editing [Home/New/Rotate/Oblique]: N
Select objects: (seleccionar dimensiones)
Enter dimension text <current>: VERIFICAR
```

### 10.4 DIMTEDIT

Reposiciona el texto de dimension:

```
Command: DIMTEDIT
Select dimension: (click)
Specify new location for dimension text or [Left/Right/Center/Home/Angle]:
```

### 10.5 Properties Palette

Ctrl+1 para modificar:
- Measurement
- Text override
- Text position
- Arrow size
- Extension line suppress

---

## Ejercicio Practico 3

**Objetivo:** Dominar dimensiones basicas.

**Preparacion:**
Dibujar:
- Rectangulo 150x100
- Circulo R30
- Triangulo con angulos variados
- Arco de 90°

**Tarea 1: Linear Dimensions**
- Acotar ancho y alto del rectangulo
- Usar cota horizontal y vertical

**Tarea 2: Aligned Dimension**
- Acotar la hipotenusa del triangulo

**Tarea 3: Angular Dimension**
- Acotar un angulo del triangulo
- Acotar el angulo del arco

**Tarea 4: Radius y Diameter**
- Acotar radio del circulo
- Acotar diametro del mismo circulo

**Tarea 5: Continue y Baseline**
- Dibujar linea con 4 puntos marcados
- Crear cotas Continue
- Crear cotas Baseline

**Tarea 6: Estilo de Dimension**
- Crear estilo "METRICO-50" con:
  - Precision: 0.00
  - Arrow size: 3
  - Text height: 3.5
- Aplicar a nuevas dimensiones

**Entregable:** Plano completamente acotado.

---

## Evaluacion

**Pregunta 1:** Cual es el comando para cota lineal?

**Pregunta 2:** Que tipo de cota se usa para lineas inclinadas?

**Pregunta 3:** Cual es la diferencia entre Continue y Baseline?

**Pregunta 4:** Que comando abre el administrador de estilos de dimension?

**Pregunta 5:** Que simbolo aparece en cotas de diametro?

---

## Resumen

En esta leccion aprendiste:

- Crear cotas lineales, angulares, radiales
- Usar Aligned para lineas inclinadas
- Continue y Baseline para series de cotas
- Configurar estilos de dimension
- Modificar dimensiones existentes

**Proxima Leccion:** Leaders y Anotaciones

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos acotando plano completo
