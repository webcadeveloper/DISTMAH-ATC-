# Leccion 2: Comandos Circle y Arc

**Duracion:** 60 minutos
**Modulo:** 2 - Construccion Basica
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear circulos usando diferentes metodos
- Dibujar arcos con precision
- Seleccionar el metodo apropiado segun la situacion
- Combinar circulos y arcos con otros elementos

---

## Introduccion

Los circulos y arcos son elementos fundamentales en el dibujo tecnico. Desde engranajes hasta planos arquitectonicos, estas formas aparecen constantemente. AutoCAD ofrece multiples metodos para crearlos, adaptandose a diferentes situaciones de dibujo.

---

## 1. Comando CIRCLE

### 1.1 Acceso al Comando

- **Command Line:** `CIRCLE` o `C`
- **Ribbon:** Home Tab > Draw Panel > Circle
- **Menu desplegable:** Muestra todas las opciones

### 1.2 Metodo por Defecto: Centro y Radio

```
Command: CIRCLE
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: (click centro)
Specify radius of circle or [Diameter]: 50 (radio)
```

![Circle Centro-Radio](../imagenes/leccion-2-m2-circle-center-radius.png)

### 1.3 Centro y Diametro

```
Command: CIRCLE
Specify center point for circle: (click centro)
Specify radius of circle or [Diameter]: D
Specify diameter of circle: 100 (diametro)
```

### 1.4 Tres Puntos (3P)

Crea un circulo que pasa por tres puntos especificos.

```
Command: CIRCLE
Specify center point for circle or [3P/2P/Ttr]: 3P
Specify first point on circle: (click punto 1)
Specify second point on circle: (click punto 2)
Specify third point on circle: (click punto 3)
```

**Uso:** Cuando no conoces el centro pero si puntos en la circunferencia.

### 1.5 Dos Puntos (2P)

Crea un circulo donde los dos puntos definen el diametro.

```
Command: CIRCLE
Specify center point for circle or [3P/2P/Ttr]: 2P
Specify first end point of circle's diameter: (click punto 1)
Specify second end point of circle's diameter: (click punto 2)
```

**Uso:** Cuando conoces los extremos del diametro.

### 1.6 Tangente, Tangente, Radio (TTR)

Crea un circulo tangente a dos objetos con radio especifico.

```
Command: CIRCLE
Specify center point for circle or [3P/2P/Ttr]: TTR
Specify point on object for first tangent of circle: (click linea 1)
Specify point on object for second tangent of circle: (click linea 2)
Specify radius of circle: 25
```

**Uso:** Empalmes, redondeos, circulos de transicion.

### 1.7 Tangente, Tangente, Tangente (3 Puntos Tangentes)

Desde el menu: Draw > Circle > Tan, Tan, Tan

```
Command: CIRCLE
Specify center point for circle or [3P/2P/Ttr]: 3P
(con OSNAP Tangent activo)
_tan Specify first point on circle: (click tangente objeto 1)
_tan Specify second point on circle: (click tangente objeto 2)
_tan Specify third point on circle: (click tangente objeto 3)
```

---

## 2. Tabla de Metodos de Circle

| Metodo | Datos Necesarios | Uso Tipico |
|--------|------------------|------------|
| Center, Radius | Centro + Radio | Uso general |
| Center, Diameter | Centro + Diametro | Cuando tienes diametro |
| 3P | 3 puntos en circunferencia | Centro desconocido |
| 2P | 2 extremos de diametro | Diametro conocido |
| TTR | 2 tangentes + Radio | Empalmes |
| TTT | 3 tangentes | Circulo inscrito |

---

## 3. Comando ARC

### 3.1 Acceso al Comando

- **Command Line:** `ARC` o `A`
- **Ribbon:** Home Tab > Draw Panel > Arc (menu desplegable)
- **Menu:** Draw > Arc (11 metodos disponibles)

### 3.2 Metodo por Defecto: 3 Puntos

```
Command: ARC
Specify start point of arc or [Center]: (click punto inicio)
Specify second point of arc or [Center/End]: (click punto medio)
Specify end point of arc: (click punto final)
```

![Arc 3 Puntos](../imagenes/leccion-2-m2-arc-3points.png)

### 3.3 Inicio, Centro, Fin (Start, Center, End)

```
Command: ARC
Specify start point of arc or [Center]: (click inicio)
Specify second point of arc or [Center/End]: C
Specify center point of arc: (click centro)
Specify end point of arc or [Angle/chord Length]: (click fin)
```

### 3.4 Inicio, Centro, Angulo (Start, Center, Angle)

```
Command: ARC
Specify start point of arc or [Center]: (click inicio)
Specify second point of arc or [Center/End]: C
Specify center point of arc: (click centro)
Specify end point of arc or [Angle/chord Length]: A
Specify included angle: 90 (angulo del arco)
```

### 3.5 Inicio, Centro, Longitud (Start, Center, Length)

```
Command: ARC
Specify start point of arc or [Center]: (click inicio)
Specify second point of arc or [Center/End]: C
Specify center point of arc: (click centro)
Specify end point of arc or [Angle/chord Length]: L
Specify length of chord: 100 (longitud de cuerda)
```

### 3.6 Inicio, Fin, Angulo (Start, End, Angle)

Desde menu: Draw > Arc > Start, End, Angle

```
Command: ARC
Specify start point of arc: (click inicio)
_e Specify end point of arc: (click fin)
_a Specify included angle: 45
```

### 3.7 Inicio, Fin, Direccion (Start, End, Direction)

La direccion define la tangente inicial del arco.

```
Command: ARC
Specify start point of arc: (click inicio)
_e Specify end point of arc: (click fin)
_d Specify tangent direction for the start point of arc: (angulo o click)
```

### 3.8 Inicio, Fin, Radio (Start, End, Radius)

```
Command: ARC
Specify start point of arc: (click inicio)
_e Specify end point of arc: (click fin)
_r Specify radius of arc: 75
```

**Nota:** Radio positivo = arco menor, Radio negativo = arco mayor.

### 3.9 Centro, Inicio, Fin (Center, Start, End)

```
Command: ARC
Specify start point of arc or [Center]: C
Specify center point of arc: (click centro)
Specify start point of arc: (click inicio)
Specify end point of arc or [Angle/chord Length]: (click fin)
```

### 3.10 Centro, Inicio, Angulo (Center, Start, Angle)

```
Command: ARC
Specify start point of arc or [Center]: C
Specify center point of arc: (click centro)
Specify start point of arc: (click inicio)
Specify end point of arc or [Angle/chord Length]: A
Specify included angle: 180
```

### 3.11 Continuar Arco

Inicia un arco tangente al ultimo objeto dibujado.

```
Command: ARC
Specify start point of arc or [Center]: (Enter para continuar)
Specify end point of arc: (click punto final)
```

---

## 4. Tabla de Metodos de Arc

| Metodo | Datos | Uso |
|--------|-------|-----|
| 3 Points | Inicio, Medio, Fin | Uso general |
| Start, Center, End | Inicio, Centro, Fin | Centro conocido |
| Start, Center, Angle | Inicio, Centro, Angulo | Angulo especifico |
| Start, Center, Length | Inicio, Centro, Cuerda | Cuerda conocida |
| Start, End, Angle | Inicio, Fin, Angulo | Sin centro |
| Start, End, Direction | Inicio, Fin, Direccion | Tangente inicial |
| Start, End, Radius | Inicio, Fin, Radio | Radio conocido |
| Center, Start, End | Centro, Inicio, Fin | Centro primero |
| Center, Start, Angle | Centro, Inicio, Angulo | Desde centro |
| Continue | Continua ultimo | Arcos concatenados |

---

## 5. Direccion de Arcos

### 5.1 Sentido Anti-horario

Por defecto, los arcos se dibujan en sentido anti-horario (CCW - Counter-Clockwise).

### 5.2 Sentido Horario

Para arco en sentido horario:
- Usa angulo negativo
- O invierte los puntos de inicio/fin

```
Command: ARC
[...]
Specify included angle: -90 (arco en sentido horario)
```

### 5.3 Influencia del Orden de Puntos

| Puntos | Direccion |
|--------|-----------|
| Izquierda a Derecha (abajo) | Anti-horario |
| Derecha a Izquierda (arriba) | Anti-horario |
| Ajustar segun necesidad | Usar angulo negativo |

---

## 6. Object Snap con Circulos y Arcos

### 6.1 Osnaps para Circulos

| Osnap | Punto |
|-------|-------|
| Center | Centro del circulo |
| Quadrant | 0°, 90°, 180°, 270° |
| Tangent | Punto de tangencia |
| Nearest | Punto mas cercano en circunferencia |

### 6.2 Osnaps para Arcos

| Osnap | Punto |
|-------|-------|
| Center | Centro del arco |
| Endpoint | Extremos del arco |
| Midpoint | Punto medio del arco |
| Quadrant | Cuadrantes (si existen en el arco) |
| Tangent | Punto de tangencia |

### 6.3 Quadrant Points

Los cuadrantes estan a:
- 0° (derecha, Este)
- 90° (arriba, Norte)
- 180° (izquierda, Oeste)
- 270° (abajo, Sur)

![Quadrant Points](../imagenes/leccion-2-m2-quadrants.png)

---

## 7. Ejemplos Practicos

### 7.1 Dibujar un Engranaje Simple

```
1. Circulo exterior: C, centro 0,0, radio 50
2. Circulo interior: C, centro 0,0, radio 40
3. Circulo de eje: C, centro 0,0, radio 10
```

### 7.2 Dibujar Esquina Redondeada

```
1. Dibujar dos lineas perpendiculares
2. CIRCLE con TTR
3. Seleccionar linea 1, linea 2
4. Radio 25
5. TRIM para limpiar
```

### 7.3 Arco de Puerta en Planta

```
1. Dibujar linea de muro (longitud 90)
2. ARC > Start, End, Angle
3. Inicio: esquina del muro
4. Fin: 90 unidades a la derecha
5. Angulo: 90 grados
```

### 7.4 Media Circunferencia

```
Command: ARC
Specify start point of arc or [Center]: C
Specify center point of arc: 100,100
Specify start point of arc: 150,100
Specify end point of arc or [Angle/chord Length]: A
Specify included angle: 180
```

---

## 8. Comandos Relacionados

### 8.1 DONUT

Crea circulos rellenos o anillos.

```
Command: DONUT
Specify inside diameter of donut <0.5000>: 10
Specify outside diameter of donut <1.0000>: 20
Specify center of donut or <exit>: (click ubicacion)
```

### 8.2 ELLIPSE

Crea elipses (circulos alargados).

```
Command: ELLIPSE
Specify axis endpoint of ellipse or [Arc/Center]: (click extremo)
Specify other endpoint of axis: (click otro extremo)
Specify distance to other axis or [Rotation]: 30
```

### 8.3 REVCLOUD

Crea nubes de revision usando arcos.

```
Command: REVCLOUD
Minimum arc length: 15  Maximum arc length: 15
Specify start point or [Arc length/Object/Style] <Object>: (dibujar nube)
```

---

## Ejercicio Practico 2

**Objetivo:** Dominar circulos y arcos con diferentes metodos.

**Tarea 1: Circulos**

1. Dibujar circulo Centro-Radio: centro 50,50, radio 25
2. Dibujar circulo Centro-Diametro: centro 150,50, diametro 60
3. Dibujar circulo 2P: extremos (250,25) y (250,75)
4. Dibujar dos lineas perpendiculares y usar TTR con radio 20

**Tarea 2: Arcos**

1. Arco 3 puntos: (50,150), (75,175), (100,150)
2. Arco Start-Center-Angle: inicio (150,150), centro (175,150), angulo 90
3. Arco Start-End-Radius: inicio (250,150), fin (300,150), radio 40
4. Semicirculo: centro (350,150), radio 30

**Tarea 3: Figura Compuesta**

Crear la figura de una llave inglesa simple:
1. Circulo grande para cabeza (R=30)
2. Rectangulo para mango
3. Circulo pequeno para hueco (R=15)
4. Arcos para transiciones

**Entregable:** Archivo .dwg con todas las figuras organizadas.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre los metodos 2P y 3P para circulos?

**Pregunta 2:** Que metodo usarias para crear un circulo tangente a dos lineas?

**Pregunta 3:** En que sentido se dibujan los arcos por defecto?

**Pregunta 4:** Que Osnap se usa para encontrar el centro de un circulo?

**Pregunta 5:** Como se crea un arco de 180 grados (semicirculo)?

---

## Resumen

En esta leccion aprendiste:

- Los 6 metodos para crear circulos
- Los 10+ metodos para crear arcos
- La direccion y sentido de los arcos
- Como usar Object Snaps con circulos y arcos
- Comandos relacionados como DONUT y ELLIPSE

**Proxima Leccion:** Object Snap (OSNAP)

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando figuras con circulos y arcos
