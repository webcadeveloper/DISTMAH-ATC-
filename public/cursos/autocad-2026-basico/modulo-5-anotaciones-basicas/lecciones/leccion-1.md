# Leccion 1: Texto de Una Linea (DTEXT/TEXT)

**Duracion:** 45 minutos
**Modulo:** 5 - Anotaciones Basicas
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear texto de una linea con TEXT/DTEXT
- Configurar altura, rotacion y justificacion
- Entender los estilos de texto
- Editar texto existente
- Usar caracteres especiales y simbolos

---

## Introduccion

El texto es esencial para comunicar informacion en planos tecnicos. AutoCAD ofrece dos tipos principales de texto: texto de una linea (TEXT/DTEXT) y texto multilinea (MTEXT). Esta leccion se enfoca en el texto de una linea, ideal para etiquetas cortas, numeros de cuarto, cotas personalizadas y anotaciones simples.

---

## 1. Comando TEXT/DTEXT

### 1.1 Acceso al Comando

- **Command Line:** `TEXT` o `DT` (DTEXT)
- **Ribbon:** Home Tab > Annotation Panel > Single Line Text
- **Menu:** Draw > Text > Single Line Text

**Nota:** TEXT y DTEXT son el mismo comando.

### 1.2 Sintaxis Basica

```
Command: TEXT
Current text style: "Standard" Text height: 2.5000
Specify start point of text or [Justify/Style]: (click ubicacion)
Specify height <2.5000>: 5
Specify rotation angle of text <0>: 0
Enter text: SALA
Enter text: (Enter para terminar)
```

### 1.3 Proceso de Creacion

1. Especificar punto de inicio
2. Definir altura de texto
3. Definir angulo de rotacion
4. Escribir el texto
5. Enter para nueva linea o Enter vacio para terminar

---

## 2. Altura del Texto

### 2.1 Especificar Altura

```
Specify height <2.5000>: 10
```

### 2.2 Alturas Recomendadas (Escala 1:100)

| Uso | Altura Real | En Plano |
|-----|-------------|----------|
| Titulos | 500-700 | 5-7 mm |
| Subtitulos | 350-500 | 3.5-5 mm |
| Texto normal | 250-350 | 2.5-3.5 mm |
| Texto pequeno | 180-250 | 1.8-2.5 mm |

### 2.3 Formula General

```
Altura en AutoCAD = Altura deseada en papel × Factor de escala
```

Ejemplo: Para texto de 3mm en escala 1:100
```
Altura = 3 × 100 = 300 unidades
```

---

## 3. Rotacion del Texto

### 3.1 Especificar Angulo

```
Specify rotation angle of text <0>: 45
```

### 3.2 Angulos Comunes

| Angulo | Orientacion |
|--------|-------------|
| 0 | Horizontal (default) |
| 90 | Vertical (arriba) |
| -90 o 270 | Vertical (abajo) |
| 45 | Diagonal |

### 3.3 Texto Alineado

Para alinear con una linea existente, puedes:
1. Usar la opcion Align
2. O especificar dos puntos

---

## 4. Opciones de Justificacion

### 4.1 Acceso a Justify

```
Specify start point of text or [Justify/Style]: J
Enter an option [Align/Fit/Center/Middle/Right/TL/TC/TR/ML/MC/MR/BL/BC/BR]:
```

### 4.2 Opciones Principales

| Opcion | Descripcion | Punto de Referencia |
|--------|-------------|---------------------|
| Left | Izquierda (default) | Baseline izquierda |
| Center | Centrado | Baseline centro |
| Right | Derecha | Baseline derecha |
| Middle | Centro medio | Centro geometrico |
| Align | Alinear entre 2 puntos | Se estira |
| Fit | Ajustar entre 2 puntos | Altura fija |

### 4.3 Justificaciones de 9 Puntos

```
TL  TC  TR     (Top Left, Top Center, Top Right)
ML  MC  MR     (Middle Left, Middle Center, Middle Right)
BL  BC  BR     (Bottom Left, Bottom Center, Bottom Right)
```

![Text Justification Points](../imagenes/leccion-1-m5-text-justify.png)

### 4.4 Ejemplo Centro

```
Command: TEXT
Specify start point or [Justify/Style]: J
Enter an option: C
Specify center point of text: (click en centro deseado)
Specify height: 5
Specify rotation: 0
Enter text: TITULO CENTRADO
```

### 4.5 Align vs Fit

**Align:** El texto se escala proporcionalmente para caber entre dos puntos.

```
Enter an option: A
Specify first endpoint: (click)
Specify second endpoint: (click)
Enter text: TEXTO ALINEADO
```

**Fit:** La altura permanece fija, el texto se estira horizontalmente.

```
Enter an option: F
Specify first endpoint: (click)
Specify second endpoint: (click)
Specify height: 5
Enter text: TEXTO AJUSTADO
```

---

## 5. Estilos de Texto

### 5.1 Que es un Estilo de Texto

Un estilo de texto define:
- Fuente (font)
- Altura por defecto
- Factor de ancho
- Angulo oblicuo
- Orientacion

### 5.2 Estilo Standard

AutoCAD incluye el estilo "Standard" por defecto:
- Font: txt.shx
- Height: 0 (variable)
- Width factor: 1.0

### 5.3 Cambiar Estilo Actual

```
Command: TEXT
Specify start point or [Justify/Style]: S
Enter style name or [?] <Standard>: ROMANS
```

### 5.4 Comando STYLE

Para crear/modificar estilos:

```
Command: STYLE
```

Abre el dialogo Text Style:

![Text Style Dialog](../imagenes/leccion-1-m5-text-style.png)

### 5.5 Crear Nuevo Estilo

1. Click "New..."
2. Nombrar el estilo (ej: "TITULOS")
3. Seleccionar fuente
4. Configurar propiedades
5. Apply y Close

### 5.6 Fuentes Recomendadas

| Fuente | Uso | Tipo |
|--------|-----|------|
| txt.shx | Dibujo tecnico rapido | SHX |
| romans.shx | Texto general | SHX |
| romand.shx | Titulos | SHX |
| simplex.shx | Texto simple | SHX |
| Arial | Presentaciones | TTF |
| ISOCPEUR | Estandar ISO | SHX |

---

## 6. Editar Texto

### 6.1 Doble Click

La forma mas rapida: doble click sobre el texto.

### 6.2 Comando DDEDIT

```
Command: DDEDIT (o ED)
Select an annotation object: (click en texto)
(editor in-place se abre)
```

### 6.3 Properties Palette

1. Seleccionar texto
2. Ctrl+1 (Properties)
3. Modificar: Contents, Height, Rotation, Style, etc.

### 6.4 Quick Properties

Al seleccionar texto, aparece panel flotante con propiedades editables.

---

## 7. Caracteres Especiales

### 7.1 Codigos de Control

| Codigo | Resultado | Uso |
|--------|-----------|-----|
| %%D | ° | Grados |
| %%P | ± | Mas/menos |
| %%C | Ø | Diametro |
| %%% | % | Porcentaje |
| %%U | Subrayado | Toggle subrayado |
| %%O | Sobrelinea | Toggle sobrelinea |

### 7.2 Ejemplo

```
Enter text: ANGULO: 45%%D
Resultado: ANGULO: 45°

Enter text: %%C25.00
Resultado: Ø25.00
```

### 7.3 Unicode

Para caracteres Unicode:

```
Enter text: \U+00B2
Resultado: ² (superindice 2)
```

---

## 8. Propiedades del Texto

### 8.1 Propiedades en Properties Palette

| Propiedad | Descripcion |
|-----------|-------------|
| Contents | El texto en si |
| Style | Estilo de texto |
| Height | Altura |
| Rotation | Rotacion |
| Width factor | Factor de ancho |
| Oblique | Angulo oblicuo |
| Text alignment | Justificacion |
| Position X, Y | Ubicacion |

### 8.2 Cambiar Multiples Textos

1. Seleccionar varios textos
2. Abrir Properties
3. Cambiar propiedad comun
4. Se aplica a todos

---

## Ejercicio Practico 1

**Objetivo:** Dominar texto de una linea.

**Tarea 1: Texto Basico**
- Crear texto "PLANTA ARQUITECTONICA" altura 10
- Crear texto "ESC. 1:100" altura 5, debajo del anterior

**Tarea 2: Justificaciones**
- Crear texto centrado "TITULO CENTRADO"
- Crear texto justificado a la derecha "DERECHA"
- Crear texto con Middle Center "MC"

**Tarea 3: Align y Fit**
- Dibujar linea de 200 unidades
- Crear texto Align entre los extremos
- Crear texto Fit (altura 8) entre otros dos puntos

**Tarea 4: Rotacion**
- Crear texto vertical "ELEVACION NORTE"
- Crear texto a 45° "DIAGONAL"

**Tarea 5: Caracteres Especiales**
- Crear texto: "TEMPERATURA: 25°C"
- Crear texto: "TOLERANCIA: ±0.5mm"
- Crear texto: "DIAMETRO: Ø50.00"

**Tarea 6: Estilos**
- Crear estilo "TITULO" con fuente ROMAND, altura 0
- Crear estilo "NOTAS" con fuente ROMANS, altura 3.5
- Usar cada estilo para crear texto

**Entregable:** Archivo con todos los textos organizados.

---

## Evaluacion

**Pregunta 1:** Cual es el comando para texto de una linea?

**Pregunta 2:** Que codigo produce el simbolo de grados (°)?

**Pregunta 3:** Cual es la diferencia entre Align y Fit?

**Pregunta 4:** Como se edita texto existente rapidamente?

**Pregunta 5:** Que define un estilo de texto?

---

## Resumen

En esta leccion aprendiste:

- Crear texto de una linea con TEXT/DTEXT
- Configurar altura, rotacion y justificacion
- Las diferentes opciones de justificacion
- Como usar y crear estilos de texto
- Caracteres especiales y codigos de control
- Metodos para editar texto existente

**Proxima Leccion:** Texto Multilinea (MTEXT)

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos creando anotaciones para un plano
