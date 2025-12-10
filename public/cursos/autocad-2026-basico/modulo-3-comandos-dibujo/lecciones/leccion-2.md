# Leccion 2: Comando POLYLINE

**Duracion:** 60 minutos
**Modulo:** 3 - Comandos de Dibujo Fundamentales
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Entender las ventajas de POLYLINE sobre LINE
- Crear polilineas con segmentos rectos y curvos
- Aplicar grosor variable a las polilineas
- Editar polilineas existentes
- Convertir lineas a polilineas y viceversa

---

## Introduccion

POLYLINE (PLINE) es uno de los comandos mas versatiles de AutoCAD. A diferencia de LINE que crea segmentos individuales, PLINE crea un unico objeto que puede contener lineas rectas, arcos y tener grosor variable.

---

## 1. Acceso al Comando PLINE

### 1.1 Metodos de Acceso

- **Command Line:** `PLINE` o `PL`
- **Ribbon:** Home Tab > Draw Panel > Polyline
- **Menu:** Draw > Polyline

### 1.2 Sintaxis Basica

```
Command: PLINE
Specify start point: (punto inicial)
Current line-width is 0.0000
Specify next point or [Arc/Halfwidth/Length/Undo/Width]: (opciones)
```

---

## 2. Ventajas de POLYLINE

| Ventaja | Descripcion |
|---------|-------------|
| Objeto unico | Toda la figura es una entidad |
| Grosor | Puede tener ancho variable |
| Area | Se puede calcular area encerrada |
| Offset | Crea parallelas perfectas |
| Edicion | Modificar vertices facilmente |
| Extrusion | Base para solidos 3D |
| Hatch | Mejor reconocimiento de contorno |

---

## 3. Dibujar Polilineas Rectas

### 3.1 Metodo Basico

```
Command: PLINE
Specify start point: 0,0
Specify next point or [Arc/...]: @100,0
Specify next point or [Arc/...]: @0,80
Specify next point or [Arc/Close/...]: @-100,0
Specify next point or [Arc/Close/...]: C
```

### 3.2 Con Close

Al igual que LINE, usa C para cerrar:

```
Specify next point or [Arc/Close/...]: C
```

### 3.3 Con Undo

U deshace el ultimo segmento:

```
Specify next point or [Arc/...]: U
(ultimo segmento eliminado)
```

---

## 4. Opcion Width (Ancho)

### 4.1 Ancho Constante

```
Command: PLINE
Specify start point: 100,100
Specify next point or [Arc/...]: W
Specify starting width <0.0000>: 5
Specify ending width <5.0000>: 5
Specify next point or [Arc/...]: @100,0
```

Resultado: Linea de 5 unidades de ancho.

### 4.2 Ancho Variable (Flecha)

```
Command: PLINE
Specify start point: 100,200
Specify next point or [Arc/...]: W
Specify starting width <0.0000>: 0
Specify ending width <0.0000>: 20
Specify next point or [Arc/...]: @80,0
```

Resultado: Flecha que va de 0 a 20 de ancho.

### 4.3 Halfwidth (Medio Ancho)

Especifica la mitad del ancho (desde el centro):

```
Specify next point or [Arc/Halfwidth/...]: H
Specify starting half-width <0.0000>: 5
Specify ending half-width <5.0000>: 5
```

Ancho total = 10 (5 a cada lado del centro).

![Polyline Width Options](../imagenes/leccion-2-m3-pline-width.png)

---

## 5. Opcion Arc (Arco)

### 5.1 Cambiar a Modo Arco

```
Command: PLINE
Specify start point: 200,100
Specify next point or [Arc/...]: @50,0
Specify next point or [Arc/...]: A
Specify endpoint of arc or [Angle/CEnter/CLose/Direction/...]:
```

### 5.2 Opciones de Arco

| Opcion | Funcion |
|--------|---------|
| Angle | Especifica angulo incluido |
| CEnter | Especifica centro del arco |
| CLose | Cierra con arco |
| Direction | Direccion tangente inicial |
| Halfwidth | Medio ancho del arco |
| Line | Vuelve a modo linea |
| Radius | Radio del arco |
| Second pt | Segundo punto de arco 3P |
| Width | Ancho del arco |

### 5.3 Arco por Defecto (Tangente)

El arco continua tangente al segmento anterior:

```
Specify endpoint of arc: @50,50
(arco tangente al ultimo segmento)
```

### 5.4 Arco con Angulo

```
Specify endpoint of arc or [Angle/...]: A
Specify included angle: 90
Specify endpoint of arc or [Center/Radius]: (click)
```

### 5.5 Arco con Radio

```
Specify endpoint of arc or [Angle/...]: R
Specify radius of arc: 30
Specify endpoint of arc: @60,0
```

### 5.6 Volver a Modo Linea

```
Specify endpoint of arc or [Angle/...Line/...]: L
Specify next point or [Arc/...]: (continua con lineas)
```

---

## 6. Opcion Length (Longitud)

Crea segmento en la misma direccion del anterior:

```
Command: PLINE
Specify start point: 0,0
Specify next point: @100<45 (linea a 45 grados)
Specify next point or [Arc/...Length/...]: L
Specify length of line: 50
(nueva linea de 50 unidades en la misma direccion)
```

---

## 7. Ejemplo: Figura Completa

### 7.1 Tornillo Simplificado

```
Command: PLINE
Specify start point: 100,100
Width: 0, 0
Specify next point: @0,30 (vastago)
Specify next point: A (cambiar a arco)
Radius: 15
Specify endpoint: @30,0 (semicirculo cabeza)
L (volver a linea)
Specify next point: @0,-30 (bajar)
C (cerrar)
```

### 7.2 Flecha Indicadora

```
Command: PLINE
Specify start point: 200,150
W: 0, 10 (punta de flecha)
Specify next point: @30,0
W: 3, 3 (cuerpo constante)
Specify next point: @70,0
(Enter para terminar)
```

---

## 8. Editar Polilineas (PEDIT)

### 8.1 Acceso a PEDIT

- **Command Line:** `PEDIT` o `PE`
- **Ribbon:** Home > Modify > Edit Polyline
- **Doble-click** en polilinea

### 8.2 Opciones de PEDIT

```
Command: PEDIT
Select polyline: (click en pline)
Enter an option [Close/Join/Width/Edit vertex/Fit/Spline/Decurve/...]:
```

| Opcion | Funcion |
|--------|---------|
| Close | Cierra polilinea abierta |
| Open | Abre polilinea cerrada |
| Join | Une lineas/arcos a la polilinea |
| Width | Cambia ancho de toda la polilinea |
| Edit vertex | Edita vertices individualmente |
| Fit | Crea curva suave por vertices |
| Spline | Crea spline por vertices |
| Decurve | Elimina curvas Fit/Spline |
| Reverse | Invierte direccion |

### 8.3 Join (Unir)

Convierte lineas sueltas en polilinea:

```
Command: PEDIT
Select polyline: (click en linea)
Object selected is not a polyline
Do you want to turn it into one? <Y>: Y
Enter an option [...Join...]: J
Select objects: (seleccionar lineas conectadas)
Select objects: (Enter)
X segments added to polyline
```

### 8.4 Edit Vertex

Permite mover, agregar, eliminar vertices:

```
Enter an option [...Edit vertex...]: E
Enter a vertex editing option [Next/Previous/Break/Insert/Move/...]:
```

---

## 9. Convertir Objetos

### 9.1 LINE a PLINE

Usa PEDIT > Join o el comando JOIN:

```
Command: JOIN
Select source object: (click linea)
Select objects to join: (seleccionar lineas conectadas)
```

### 9.2 PLINE a LINEs

Usa EXPLODE:

```
Command: EXPLODE
Select objects: (click en polilinea)
(polilinea se convierte en segmentos individuales)
```

**Nota:** Al explotar, se pierde el ancho de la polilinea.

---

## 10. Propiedades Especiales

### 10.1 Area y Perimetro

```
Command: AREA
Specify first corner point or [Object/Add/Subtract]: O
Select objects: (click en polilinea cerrada)
Area = 10000.0000, Perimeter = 400.0000
```

O en Properties palette: Area y Length.

### 10.2 Closed (Cerrada)

En Properties:
- Closed: Yes/No
- Cambiar cierra/abre la polilinea

### 10.3 Global Width

Cambiar ancho uniforme desde Properties:
- Global width: (nuevo valor)

---

## 11. Aplicaciones Practicas

### 11.1 Contornos para Hatch

Las polilineas cerradas son ideales para definir areas de sombreado.

### 11.2 Perfiles de Extrusion

En 3D, las polilineas cerradas se pueden extruir para crear solidos.

### 11.3 Offset Preciso

El comando OFFSET funciona perfectamente con polilineas, creando copias paralelas.

### 11.4 Lineas con Grosor

Para representar muros en planta, caminos, etc.

---

## Ejercicio Practico 2

**Objetivo:** Dominar PLINE con todas sus opciones.

**Tarea 1: Polilinea Basica**
- Inicio: (50,50)
- Dibujar rectangulo 100x80
- Usar Close para cerrar

**Tarea 2: Polilinea con Ancho**
- Inicio: (200,50)
- Ancho constante: 5
- Dibujar cuadrado 60x60

**Tarea 3: Flecha**
- Inicio: (50,180)
- Punta: Width 0 a 15, longitud 30
- Cuerpo: Width 5 constante, longitud 70

**Tarea 4: Combinacion Linea-Arco**
- Inicio: (200,180)
- Linea: @40,0
- Arco: semicirculo R=20
- Linea: @40,0
- Arco: semicirculo R=20
- Cerrar

**Tarea 5: Edicion con PEDIT**
- Dibujar 4 lineas formando cuadrado (no conectadas)
- Usar PEDIT > Join para convertir a polilinea
- Cambiar Width a 3

**Entregable:** Archivo con todas las figuras y calcular area de una.

---

## Evaluacion

**Pregunta 1:** Cual es la principal diferencia entre LINE y PLINE?

**Pregunta 2:** Que opcion cambia el ancho de una polilinea?

**Pregunta 3:** Como se cambia de modo linea a modo arco en PLINE?

**Pregunta 4:** Que comando se usa para editar una polilinea existente?

**Pregunta 5:** Como se unen lineas sueltas en una polilinea?

---

## Resumen

En esta leccion aprendiste:

- Las ventajas de POLYLINE sobre LINE
- Como usar Width para crear lineas con grosor
- Crear arcos dentro de una polilinea
- Editar polilineas con PEDIT
- Convertir entre LINE y PLINE
- Propiedades especiales como Area

**Proxima Leccion:** Comandos RECTANGLE y POLYGON

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando figuras complejas con PLINE
