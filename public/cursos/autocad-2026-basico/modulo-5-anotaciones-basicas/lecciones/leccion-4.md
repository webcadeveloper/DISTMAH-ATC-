# Leccion 4: Leaders y Anotaciones

**Duracion:** 45 minutos
**Modulo:** 5 - Anotaciones Basicas
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear lineas de referencia con MLEADER
- Configurar estilos de multileader
- Usar diferentes tipos de contenido (texto, bloque)
- Alinear y organizar leaders
- Crear anotaciones profesionales

---

## Introduccion

Los Leaders (lineas de referencia) conectan notas explicativas a elementos especificos del dibujo. Son esenciales para identificar materiales, especificaciones, notas de detalle y cualquier informacion que necesite senalar un punto especifico.

---

## 1. Comando MLEADER

### 1.1 Acceso al Comando

- **Command Line:** `MLEADER` o `MLD`
- **Ribbon:** Annotate Tab > Leaders Panel > Multileader
- **Menu:** Dimension > Multileader

### 1.2 Sintaxis Basica

```
Command: MLEADER
Specify leader arrowhead location or [Leader Landing first/Content first/Options]: (click en objeto)
Specify leader landing location: (click ubicacion del texto)
(editor de texto se abre)
```

### 1.3 Modos de Creacion

| Modo | Orden |
|------|-------|
| Arrowhead first | Flecha → Landing → Texto |
| Leader Landing first | Landing → Flecha → Texto |
| Content first | Texto → Flecha |

### 1.4 Cambiar Modo

```
Specify leader arrowhead location or [Leader Landing first/...]: L
Specify leader landing location: (click)
Specify leader arrowhead location: (click en objeto)
(editor de texto se abre)
```

---

## 2. Partes del Multileader

### 2.1 Componentes

| Parte | Descripcion |
|-------|-------------|
| Arrowhead | Punta de flecha que senala al objeto |
| Leader Line | Linea(s) de conexion |
| Landing | Linea horizontal antes del texto |
| Content | Texto o bloque |

![Multileader Parts](../imagenes/leccion-4-m5-mleader-parts.png)

### 2.2 Leader Lines

Pueden ser:
- Rectas (straight)
- Spline (curvas)
- Sin linea

### 2.3 Multiple Leader Lines

Un solo contenido puede tener varias lineas de leader.

---

## 3. Opciones de MLEADER

### 3.1 Durante el Comando

```
Specify leader arrowhead location or [Leader Landing first/Content first/Options]: O
Enter an option [Leader type/lAnding/Content type/Maxpoints/First angle/Second angle/eXit]:
```

### 3.2 Opciones Principales

| Opcion | Funcion |
|--------|---------|
| Leader type | Straight/Spline/None |
| Landing | On/Off |
| Content type | Mtext/Block/None |
| Maxpoints | Numero maximo de vertices |
| First angle | Angulo del primer segmento |
| Second angle | Angulo del segundo segmento |

---

## 4. Estilos de Multileader

### 4.1 Comando MLEADERSTYLE

- **Command:** `MLEADERSTYLE`
- **Ribbon:** Annotate > Leaders > Multileader Style
- **Atajo:** Panel expandido de Leaders

### 4.2 Dialogo Multileader Style Manager

![Multileader Style Manager](../imagenes/leccion-4-m5-mleaderstyle.png)

### 4.3 Crear Nuevo Estilo

1. Click "New..."
2. Nombrar (ej: "NOTAS")
3. Configurar tabs
4. OK

### 4.4 Tabs de Configuracion

**Leader Format Tab:**
- Type: Straight/Spline
- Color, Linetype, Lineweight
- Arrowhead: Symbol, Size
- Break size

**Leader Structure Tab:**
- Maximum leader points
- First/Second segment angles
- Landing settings

**Content Tab:**
- Multileader type: Mtext/Block/None
- Text options (si Mtext)
- Block options (si Block)

---

## 5. Contenido de Texto (MTEXT)

### 5.1 Configuracion

En Multileader Style > Content Tab:
- Default text
- Text style
- Text height
- Text angle
- Text color
- Landing gap

### 5.2 Opciones de Conexion

| Attachment | Descripcion |
|------------|-------------|
| Top of top line | Arriba de primera linea |
| Middle of top line | Centro de primera linea |
| Middle of multi-line text | Centro del bloque |
| Bottom of bottom line | Abajo de ultima linea |

### 5.3 Ejemplo de Texto

```
MURO DE BLOCK
DE CONCRETO
15x20x40 cm
```

---

## 6. Contenido de Bloque

### 6.1 Uso

Ideal para:
- Simbolos de detalle
- Numeros de globo
- Marcas de seccion
- Indicadores estandarizados

### 6.2 Configurar Bloque

En Multileader Style > Content Tab:
1. Multileader type: Block
2. Source block: Seleccionar bloque
3. Attachment: Centro, Insertion point
4. Color

### 6.3 Bloques con Atributos

Si el bloque tiene atributos, puedes llenarlos al crear el leader.

---

## 7. Editar Multileaders

### 7.1 Doble Click

Doble click sobre:
- Texto: Abre editor MTEXT
- Bloque: Edita atributos

### 7.2 Grips de Edicion

| Grip | Funcion |
|------|---------|
| Flecha | Mover punto de senal |
| Vertices | Mover vertices del leader |
| Landing | Mover posicion del landing |
| Texto | Mover contenido |

### 7.3 Agregar Leader Lines

```
Command: MLEADERADD
Select a multileader: (click en mleader existente)
Specify leader arrowhead location: (click nuevo punto)
```

### 7.4 Remover Leader Lines

```
Command: MLEADERREMOVE
Select a multileader: (click en mleader)
Specify leaders to remove: (click en linea a eliminar)
```

---

## 8. Alinear Multileaders

### 8.1 Comando MLEADERALIGN

```
Command: MLEADERALIGN
Select multileaders: (seleccionar varios)
Select multileaders: (Enter)
Current spacing: Use current spacing
Select multileader to align to or [Options]: (click en leader de referencia)
Specify direction: (click direccion de alineacion)
```

### 8.2 Opciones de Alineacion

| Opcion | Efecto |
|--------|--------|
| Distribute | Distribuir uniformemente |
| Make parallel | Hacer paralelos |
| Specify spacing | Definir espaciado |
| Use current | Usar espaciado actual |

---

## 9. Colectar Multileaders

### 9.1 Comando MLEADERCOLLECT

Une multiples leaders a un solo contenido:

```
Command: MLEADERCOLLECT
Select multileaders: (seleccionar)
Select multileaders: (Enter)
Specify collected multileader location: (click ubicacion)
```

### 9.2 Resultado

Todas las lineas de leader convergen en un punto comun, util para notas que aplican a varios elementos.

---

## 10. Anotaciones Adicionales

### 10.1 REVCLOUD (Nube de Revision)

```
Command: REVCLOUD
Specify start point or [Arc length/Object/Style]: (dibujar nube)
```

### 10.2 WIPEOUT

Crea area que oculta objetos debajo:

```
Command: WIPEOUT
Specify first point or [Frames/Polyline]: (dibujar contorno)
```

### 10.3 Notas de Area

Para calcular y anotar areas:

```
Command: AREA
Specify first corner point or [Object]: O
Select objects: (click en polilinea cerrada)
Area = 15000.00, Perimeter = 500.00
```

Usar FIELD en MTEXT para insertar area dinamica.

---

## 11. Mejores Practicas

### 11.1 Consistencia

- Usar estilos definidos
- Mantener angulos consistentes (45°, 30°)
- Alinear leaders relacionados

### 11.2 Legibilidad

- No cruzar otros leaders
- Evitar lineas muy largas
- Mantener texto legible

### 11.3 Organizacion

- Agrupar notas similares
- Usar capas especificas para leaders
- Alinear verticalmente cuando sea posible

---

## Ejercicio Practico 4

**Objetivo:** Dominar Multileaders.

**Preparacion:**
Dibujar planta simple con muros, puertas, ventanas.

**Tarea 1: MLEADER Basico**
- Crear leader senalando muro: "MURO DE CONCRETO"
- Crear leader senalando puerta: "PUERTA P-01 0.90x2.10"

**Tarea 2: Estilo Personalizado**
- Crear estilo "NOTAS-ARQU" con:
  - Arrow: Closed filled, size 3
  - Landing: 10
  - Text height: 3.5
- Aplicar a nuevos leaders

**Tarea 3: Multiple Leaders**
- Crear leader con dos lineas senalando dos ventanas
- Texto: "VENTANAS IGUALES"

**Tarea 4: Bloque como Contenido**
- Crear bloque simple (circulo con numero)
- Crear estilo con ese bloque
- Usar para marcar detalles

**Tarea 5: Alinear**
- Crear 4 leaders en el plano
- Usar MLEADERALIGN para alinearlos

**Tarea 6: Nube de Revision**
- Crear REVCLOUD alrededor de un cambio
- Agregar leader con nota: "REV. A"

**Entregable:** Plano con anotaciones profesionales.

---

## Evaluacion

**Pregunta 1:** Cual es el comando para crear multileader?

**Pregunta 2:** Que tipos de contenido puede tener un multileader?

**Pregunta 3:** Como se agregan lineas de leader adicionales?

**Pregunta 4:** Que comando alinea multiples leaders?

**Pregunta 5:** Que es el "Landing" en un leader?

---

## Resumen

En esta leccion aprendiste:

- Crear lineas de referencia con MLEADER
- Configurar estilos de multileader
- Usar texto y bloques como contenido
- Agregar/remover lineas de leader
- Alinear y colectar multileaders
- Crear nubes de revision

**Felicitaciones! Has completado el Modulo 5 y el curso basico de AutoCAD 2026.**

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos anotando proyecto completo

---

## Proximos Pasos

Has completado **AutoCAD 2026 Basico**. Para continuar tu aprendizaje:

1. **AutoCAD 2026 Avanzado** - Bloques, Referencias Externas, Layouts, Impresion
2. **Certificacion Autodesk** - Preparacion para examen oficial
3. **Especializaciones** - Arquitectura, Mecanico, Civil

**Exito en tu carrera con AutoCAD!**
