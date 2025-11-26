# Leccion 2: Texto Multilinea (MTEXT)

**Duracion:** 60 minutos
**Modulo:** 5 - Anotaciones Basicas
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear texto multilinea con MTEXT
- Usar el editor de texto enriquecido
- Aplicar formato (negrita, cursiva, subrayado)
- Crear listas y columnas
- Importar texto desde archivos externos

---

## Introduccion

MTEXT (Texto Multilinea) es mas versatil que el texto de una linea. Permite parrafos, formato enriquecido, listas, columnas y mas. Es ideal para notas generales, especificaciones, leyendas y cualquier texto extenso.

---

## 1. Comando MTEXT

### 1.1 Acceso al Comando

- **Command Line:** `MTEXT` o `MT` o `T`
- **Ribbon:** Home Tab > Annotation Panel > Multiline Text
- **Menu:** Draw > Text > Multiline Text

### 1.2 Sintaxis Basica

```
Command: MTEXT
Current text style: "Standard" Text height: 2.5000
Specify first corner: (click esquina 1)
Specify opposite corner or [Height/Justify/Line spacing/Rotation/Style/Width/Columns]: (click esquina 2)
```

### 1.3 Proceso de Creacion

1. Click en primera esquina (define ubicacion)
2. Click en esquina opuesta (define ancho del cuadro)
3. Se abre el editor de texto
4. Escribir y formatear texto
5. Click fuera o Ctrl+Enter para cerrar

---

## 2. Editor de Texto In-Place

### 2.1 Interfaz del Editor

Al crear MTEXT, aparece:
- Area de escritura con bordes
- Regla superior
- Tab Text Editor en el Ribbon

![MTEXT Editor](../imagenes/leccion-2-m5-mtext-editor.png)

### 2.2 Ribbon Text Editor

| Panel | Herramientas |
|-------|--------------|
| Style | Estilo de texto |
| Formatting | Negrita, Cursiva, Subrayado |
| Paragraph | Justificacion, Listas, Espaciado |
| Insert | Simbolos, Campos, Columnas |
| Spell Check | Ortografia |
| Tools | Buscar/Reemplazar |
| Close | Cerrar editor |

---

## 3. Formato de Texto

### 3.1 Negrita, Cursiva, Subrayado

Seleccionar texto y aplicar:

- **Negrita:** Ctrl+B o boton B
- **Cursiva:** Ctrl+I o boton I
- **Subrayado:** Ctrl+U o boton U

### 3.2 Cambiar Fuente

1. Seleccionar texto
2. Panel Style > Font dropdown
3. Seleccionar fuente

### 3.3 Cambiar Tamano

1. Seleccionar texto
2. Panel Style > Text Height
3. Ingresar nuevo valor

### 3.4 Color de Texto

1. Seleccionar texto
2. Panel Formatting > Color
3. Seleccionar color

### 3.5 Sobrelinea y Tachado

- Sobrelinea: Panel Formatting > Overline
- Tachado: Panel Formatting > Strikethrough

---

## 4. Justificacion de Parrafo

### 4.1 Opciones de Justificacion

| Opcion | Descripcion |
|--------|-------------|
| Left | Izquierda (default) |
| Center | Centrado |
| Right | Derecha |
| Justify | Justificado (ambos lados) |
| Distribute | Distribuido uniformemente |

### 4.2 Aplicar Justificacion

1. Seleccionar parrafo(s)
2. Panel Paragraph > Justification
3. Seleccionar opcion

---

## 5. Listas

### 5.1 Tipos de Listas

- **Bullets:** Vinetas (puntos)
- **Numbers:** Numeradas (1, 2, 3)
- **Letters:** Letras (a, b, c o A, B, C)

### 5.2 Crear Lista

1. Panel Paragraph > Bullets and Lists
2. Seleccionar tipo
3. Escribir items, Enter para siguiente

### 5.3 Ejemplo

```
Especificaciones:
1. Material: Concreto f'c=250 kg/cm²
2. Acero: fy=4200 kg/cm²
3. Recubrimiento: 4 cm minimo
```

---

## 6. Espaciado de Lineas y Parrafos

### 6.1 Espaciado de Lineas (Line Spacing)

```
Command: MTEXT
... [Height/Justify/Line spacing/...]: L
Enter line spacing type [At least/Exactly] <At least>: E
Enter line spacing factor or distance <1x>: 1.5x
```

### 6.2 Opciones de Espaciado

| Valor | Efecto |
|-------|--------|
| 1x | Espaciado simple |
| 1.5x | Espacio y medio |
| 2x | Doble espacio |
| Numero | Distancia absoluta |

### 6.3 Espaciado de Parrafos

En el editor:
1. Panel Paragraph > Paragraph
2. Configurar Before/After spacing

---

## 7. Columnas

### 7.1 Tipos de Columnas

- **Dynamic:** Altura automatica
- **Static:** Altura fija, numero variable de columnas
- **No Columns:** Sin columnas (default)

### 7.2 Crear Columnas

1. Seleccionar MTEXT
2. Panel Insert > Columns
3. Seleccionar tipo
4. Configurar ancho y espaciado

### 7.3 Column Settings

- Column width: Ancho de cada columna
- Gutter: Espacio entre columnas
- Height: Altura (para Static)
- Number: Numero de columnas

![MTEXT Columns](../imagenes/leccion-2-m5-mtext-columns.png)

---

## 8. Simbolos y Caracteres Especiales

### 8.1 Panel Insert > Symbol

Acceso rapido a simbolos comunes:

| Simbolo | Descripcion |
|---------|-------------|
| ° | Grados |
| ± | Mas/menos |
| Ø | Diametro |
| ² | Cuadrado |
| ³ | Cubo |
| © | Copyright |
| ® | Registrado |
| ™ | Trademark |

### 8.2 Insertar Simbolo

1. Posicionar cursor
2. Insert > Symbol
3. Click en simbolo deseado

### 8.3 Non-breaking Space

Para evitar que texto se separe:
Insert > Symbol > Non-breaking Space

---

## 9. Campos (Fields)

### 9.1 Que son los Campos

Los campos son textos dinamicos que se actualizan automaticamente:
- Fecha actual
- Nombre del archivo
- Propiedades de objetos
- Valores calculados

### 9.2 Insertar Campo

1. Insert > Field (Ctrl+F)
2. Seleccionar categoria
3. Seleccionar campo
4. Configurar formato
5. OK

### 9.3 Campos Comunes

| Campo | Muestra |
|-------|---------|
| Date | Fecha actual |
| Filename | Nombre del archivo |
| Author | Autor del dibujo |
| Scale | Escala actual |
| Area | Area de objeto |

### 9.4 Actualizar Campos

Los campos se actualizan al:
- Abrir el dibujo
- Regenerar (REGEN)
- Comando UPDATEFIELD

---

## 10. Importar y Exportar Texto

### 10.1 Importar Texto

1. En el editor MTEXT
2. Click derecho > Import Text
3. Seleccionar archivo .txt o .rtf

### 10.2 Copiar desde Otras Aplicaciones

1. Copiar texto en Word/Notepad
2. En AutoCAD: Ctrl+V en editor MTEXT
3. El texto se pega con formato basico

### 10.3 Exportar a Archivo

1. Seleccionar todo el texto (Ctrl+A en editor)
2. Ctrl+C
3. Pegar en aplicacion externa

---

## 11. Opciones de MTEXT

### 11.1 Antes de Crear el Cuadro

```
Specify opposite corner or [Height/Justify/Line spacing/Rotation/Style/Width/Columns]:
```

| Opcion | Funcion |
|--------|---------|
| Height | Altura del texto |
| Justify | Punto de anclaje |
| Line spacing | Espaciado de lineas |
| Rotation | Angulo del cuadro |
| Style | Estilo de texto |
| Width | Ancho del cuadro |
| Columns | Configurar columnas |

### 11.2 Puntos de Anclaje (Justify)

Similar al texto de una linea: TL, TC, TR, ML, MC, MR, BL, BC, BR.

```
[...Justify...]: J
Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR]: MC
```

---

## 12. Editar MTEXT

### 12.1 Doble Click

Doble click sobre MTEXT abre el editor.

### 12.2 DDEDIT

```
Command: DDEDIT
Select an annotation object: (click en MTEXT)
```

### 12.3 Properties

Ctrl+1 para acceder a propiedades:
- Contents (abre editor)
- Text height
- Line spacing
- Width
- Rotation

---

## Ejercicio Practico 2

**Objetivo:** Dominar MTEXT.

**Tarea 1: MTEXT Basico**
- Crear cuadro de texto 200 ancho
- Escribir parrafo de notas generales
- Aplicar justificacion Justify

**Tarea 2: Formato de Texto**
- Crear titulo en **negrita**
- Agregar texto en *cursiva*
- Subrayar una palabra importante

**Tarea 3: Listas**
- Crear lista numerada de especificaciones
- Crear lista con vinetas de materiales

**Tarea 4: Columnas**
- Crear MTEXT con contenido extenso
- Convertir a 2 columnas
- Ajustar espaciado entre columnas

**Tarea 5: Simbolos**
- Insertar simbolo de grados en "45°"
- Insertar diametro "Ø25mm"
- Insertar tolerancia "±0.5"

**Tarea 6: Campos**
- Insertar campo de fecha
- Insertar campo de nombre de archivo
- Verificar que se actualicen

**Entregable:** Cuadro de notas generales completamente formateado.

---

## Evaluacion

**Pregunta 1:** Cual es el atajo de teclado para MTEXT?

**Pregunta 2:** Como se aplica formato negrita a texto seleccionado?

**Pregunta 3:** Que son los Fields (Campos)?

**Pregunta 4:** Que tipos de columnas ofrece MTEXT?

**Pregunta 5:** Como se importa texto desde un archivo externo?

---

## Resumen

En esta leccion aprendiste:

- Crear texto multilinea con MTEXT
- Usar el editor de texto enriquecido
- Aplicar formato: negrita, cursiva, subrayado
- Crear listas numeradas y con vinetas
- Configurar columnas
- Insertar simbolos y campos dinamicos
- Importar texto externo

**Proxima Leccion:** Dimensiones Basicas

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando notas tecnicas completas
