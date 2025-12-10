# Leccion 4: Leaders y Multileaders

**Duracion:** 60 minutos
**Modulo:** 3 - Dimensionamiento Avanzado
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear y configurar multileaders (MLEADER)
- Gestionar estilos de multileader
- Usar contenido de texto, bloque y tolerancia
- Aplicar multileaders para anotaciones profesionales
- Alinear y combinar multileaders

---

## Introduccion

Los Multileaders son herramientas de anotacion avanzadas que combinan lineas de llamada con contenido (texto, bloques o tolerancias). Son mas flexibles y potentes que los leaders tradicionales, ofreciendo multiples lineas de llamada para una sola anotacion.

---

## 1. Comparacion: Leader vs Multileader

### 1.1 Leader Tradicional (LEADER)

- Comando antiguo
- Una sola linea de llamada
- Configuracion limitada
- No recomendado para nuevos proyectos

### 1.2 Multileader (MLEADER)

- Comando moderno
- Multiples lineas de llamada
- Estilos configurables
- Contenido variable (texto, bloque, tolerancia)
- Recomendado para todos los proyectos

---

## 2. Comando MLEADER

### 2.1 Acceso

- **Command Line:** `MLEADER` o `MLD`
- **Ribbon:** Annotate Tab > Leaders > Multileader
- **Menu:** Dimension > Multileader

### 2.2 Proceso de Creacion

```
Command: MLEADER
Specify leader arrowhead location or [leader Landing first/Content first/Options] <Options>: (click punta de flecha)
Specify leader landing location: (click ubicacion del landing)
(editor de texto se abre)
Escribir anotacion
Esc o click fuera para terminar
```

### 2.3 Opciones de Orden

| Opcion | Descripcion |
|--------|-------------|
| Leader first | Primero punta, luego landing, luego contenido (default) |
| Landing first | Primero landing, luego punta |
| Content first | Primero contenido, luego leader |
| Options | Acceder a mas opciones |

### 2.4 Subopciones

```
[Options]:
- Leader type: Straight, Spline, None
- Landing: Yes, No
- Content type: Mtext, Block, None
```

---

## 3. Estilos de Multileader

### 3.1 Comando MLEADERSTYLE

- **Command Line:** `MLEADERSTYLE`
- **Ribbon:** Annotate Tab > Leaders > Multileader Style
- **Menu:** Format > Multileader Style

### 3.2 Dialogo Multileader Style Manager

| Seccion | Funcion |
|---------|---------|
| Styles | Lista de estilos |
| Preview | Vista previa |
| Set Current | Activar estilo |
| New | Crear nuevo |
| Modify | Modificar existente |
| Delete | Eliminar estilo |

### 3.3 Tabs de Configuracion

**Leader Format:**
| Parametro | Opciones |
|-----------|----------|
| Type | Straight, Spline, None |
| Color | ByBlock, ByLayer, Color |
| Linetype | ByBlock, ByLayer, tipo |
| Lineweight | ByBlock, ByLayer, peso |
| Arrowhead | Symbol, Size |
| Leader break | Size |

**Leader Structure:**
| Parametro | Opciones |
|-----------|----------|
| Maximum leader points | Numero maximo |
| First segment angle | Constrain angulo |
| Second segment angle | Constrain angulo |
| Landing | On/Off |
| Landing distance | Longitud |
| Annotative | Yes/No |

**Content:**
| Parametro | Opciones |
|-----------|----------|
| Multileader type | Mtext, Block, None |
| Text options | Style, angle, color |
| Leader connection | Attachment, gap |
| Block options | Block, scale, attachment |

---

## 4. Configurar Estilo de Texto

### 4.1 Crear Estilo para Notas

```
MLEADERSTYLE > New > "NOTAS"

Leader Format:
- Type: Straight
- Arrowhead: Closed filled, 2.5
- Leader break: 3.0

Leader Structure:
- Maximum points: 2
- First segment: 45°
- Landing: Yes
- Landing distance: 5.0
- Annotative: Yes

Content:
- Type: Mtext
- Text style: ROMANS
- Text height: 2.5
- Text color: ByLayer
- Left attachment: Middle of top line
- Landing gap: 2.0
```

### 4.2 Opciones de Attachment

| Attachment | Posicion del texto |
|------------|-------------------|
| Top of top line | Arriba de primera linea |
| Middle of top line | Mitad de primera linea |
| Middle of multi-line | Mitad del bloque de texto |
| Middle of bottom line | Mitad de ultima linea |
| Bottom of bottom line | Abajo de ultima linea |
| Underline bottom line | Subrayar ultima linea |

---

## 5. Multileader con Bloques

### 5.1 Configurar Estilo de Bloque

```
MLEADERSTYLE > New > "NUMERO_BURBUJA"

Content tab:
- Multileader type: Block
- Source block: BURBUJA_NUMERO
- Attachment: Center Extents
- Scale: 1.0
```

### 5.2 Crear Bloque de Burbuja

```
1. Dibujar circulo D=8
2. Agregar atributo:
   - Tag: NUMERO
   - Prompt: Numero de nota
   - Default: 1
   - Justify: Middle Center
3. BLOCK > "BURBUJA_NUMERO"
4. Usar en estilo de multileader
```

### 5.3 Uso de Bloques Estandar

AutoCAD incluye bloques para multileaders:
- Circle (circulo simple)
- Box (rectangulo)
- Hexagon (hexagono)
- Triangle (triangulo)
- Detail Callout
- Section Callout

---

## 6. Multileader con Tolerancia

### 6.1 Configurar para GD&T

```
MLEADERSTYLE > New > "GDT"

Content tab:
- Multileader type: None

Nota: El contenido de tolerancia se agrega despues
con el comando TOLERANCE
```

### 6.2 Proceso

```
1. Crear multileader con contenido None
2. Seleccionar multileader
3. Agregar tolerancia como contenido
```

---

## 7. Agregar Leaders a Multileader

### 7.1 Comando MLEADEREDIT

```
Command: MLEADEREDIT
Select a multileader: (click)
Enter an option [Add leader/Remove leader/Landing] <Add leader>: A
Specify leader arrowhead location: (click nueva punta)
(repetir para mas leaders)
Enter
```

### 7.2 Usando Grips

1. Seleccionar multileader
2. Click en grip "+" cerca del contenido
3. Arrastrar para crear nuevo leader

---

## 8. Alinear Multileaders

### 8.1 Comando MLEADERALIGN

- **Command Line:** `MLEADERALIGN`
- **Ribbon:** Annotate Tab > Leaders > Align

### 8.2 Uso

```
Command: MLEADERALIGN
Select multileaders: (seleccionar varios)
Select multileaders: Enter
Current mode: Use current spacing
Select multileader to align to or [Options]: (click multileader de referencia)
Specify direction: (indicar direccion)
```

### 8.3 Opciones

| Opcion | Resultado |
|--------|-----------|
| Distribute | Distribuir uniformemente |
| Make leader segments Parallel | Segmentos paralelos |
| Specify spacing | Espaciado especifico |
| Use current spacing | Mantener espaciado actual |

---

## 9. Combinar Multileaders

### 9.1 Comando MLEADERCOLLECT

- **Command Line:** `MLEADERCOLLECT`
- **Ribbon:** Annotate Tab > Leaders > Collect

### 9.2 Uso

```
Command: MLEADERCOLLECT
Select multileaders: (seleccionar varios con bloques)
Select multileaders: Enter
Specify collected multileader location or [Vertical/Horizontal/Wrap] <Horizontal>: (click ubicacion)
```

### 9.3 Requisitos

- Multileaders deben tener contenido de bloque
- Mismo estilo de multileader
- Util para numeros de burbuja agrupados

### 9.4 Opciones de Arreglo

| Opcion | Resultado |
|--------|-----------|
| Vertical | Bloques en columna |
| Horizontal | Bloques en fila |
| Wrap | Multiples filas con limite |

---

## 10. Quick Leader (QLEADER)

### 10.1 Comando Alternativo

QLEADER es un metodo rapido pero menos flexible:

```
Command: QLEADER
Specify first leader point: (click)
Specify next point: (click)
Specify next point: Enter
Specify text width <0>: Enter
Enter first line of annotation text: NOTA
Enter next line: Enter
```

### 10.2 Cuando Usar

- Anotaciones rapidas simples
- Compatibilidad con dibujos antiguos
- No recomendado para trabajo nuevo

---

## 11. Propiedades de Multileader

### 11.1 Panel Properties

Seleccionar multileader y abrir Properties (Ctrl+1):

| Categoria | Propiedades |
|-----------|-------------|
| General | Color, Layer, Linetype |
| Misc | Annotative, Scale |
| Leader | Arrowhead, Type, Landing |
| Content | Type, Text, Block |

### 11.2 Modificar Contenido

**Editar texto:**
- Doble click en multileader
- O MLEADEREDIT > Editar contenido

**Cambiar bloque:**
- Properties > Content > Block
- Seleccionar nuevo bloque

---

## 12. Mejores Practicas

### 12.1 Estilos Estandar

Crear estilos para:
- Notas generales
- Numeros de burbuja
- Simbolos de seccion
- Simbolos de detalle
- GD&T

### 12.2 Consistencia

- Usar estilos, no overrides
- Mantener landing consistente
- Alinear multileaders relacionados
- Evitar cruces de lineas

### 12.3 Legibilidad

- Tamano de texto apropiado
- Flechas proporcionales
- Espacio adecuado entre elementos
- Evitar anotaciones amontonadas

---

## Ejercicio Practico 4

**Objetivo:** Dominar multileaders.

**Tarea 1: Estilo de Notas**
- Crear estilo "NOTAS_PROYECTO"
- Leader recto, flecha cerrada
- Texto Arial 2.5mm
- Landing 5mm
- Anotativo

**Tarea 2: Estilo de Burbuja**
- Crear bloque burbuja con atributo
- Crear estilo "BURBUJA"
- Aplicar a anotaciones numeradas

**Tarea 3: Multiples Leaders**
- Crear multileader con texto
- Agregar 2 leaders adicionales
- Practicar con MLEADEREDIT

**Tarea 4: Alinear**
- Crear 5 multileaders desordenados
- Usar MLEADERALIGN para organizar
- Probar diferentes opciones

**Tarea 5: Collect**
- Crear 4 burbujas separadas
- Usar MLEADERCOLLECT
- Probar arreglo horizontal y vertical

**Tarea 6: Aplicacion Completa**
- Dibujar pieza mecanica
- Anotar con multileaders de notas
- Agregar numeros de burbuja
- Alinear profesionalmente

**Entregable:** Plano con sistema completo de anotaciones.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre LEADER y MLEADER?

**Pregunta 2:** Que tipos de contenido puede tener un multileader?

**Pregunta 3:** Como se agregan leaders adicionales a un multileader existente?

**Pregunta 4:** Que comando alinea multiples multileaders?

**Pregunta 5:** Que requisito tienen los multileaders para usar MLEADERCOLLECT?

---

## Resumen

En esta leccion aprendiste:

- Crear y configurar multileaders
- Gestionar estilos de multileader
- Usar contenido de texto, bloque y tolerancia
- Agregar multiples leaders
- Alinear y combinar multileaders
- Mejores practicas de anotacion

**Proxima Leccion:** Modulo 4 - Layouts y Plotting

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos anotando plano completo
