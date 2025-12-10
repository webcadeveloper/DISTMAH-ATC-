# Leccion 3: Sistemas de Coordenadas

**Duracion:** 60 minutos
**Modulo:** 1 - Introduccion a AutoCAD 2026
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender el sistema de coordenadas cartesianas de AutoCAD
- Utilizar coordenadas absolutas para ubicacion precisa
- Aplicar coordenadas relativas para dibujo eficiente
- Usar coordenadas polares para angulos y distancias
- Trabajar con el UCS (User Coordinate System)

---

## Introduccion

El sistema de coordenadas es la base de la precision en AutoCAD. Entender como funcionan las coordenadas te permite crear dibujos exactos sin depender exclusivamente del mouse.

AutoCAD utiliza un sistema cartesiano donde cada punto se define por su posicion X (horizontal), Y (vertical) y opcionalmente Z (profundidad en 3D).

---

## 1. Sistema Cartesiano en AutoCAD

### 1.1 Origen y Ejes

- **Origen (0,0):** Punto de referencia donde se cruzan los ejes
- **Eje X:** Horizontal, positivo hacia la derecha
- **Eje Y:** Vertical, positivo hacia arriba
- **Eje Z:** Perpendicular (3D), positivo hacia el usuario

### 1.2 Icono UCS

El icono UCS (User Coordinate System) en la esquina inferior izquierda muestra:

- Direccion de los ejes X e Y
- Orientacion actual del sistema
- Si estas en WCS (World) o UCS personalizado

![Sistema de Coordenadas AutoCAD](../imagenes/leccion-3-coordenadas.png)

### 1.3 Cuadrantes

| Cuadrante | X | Y | Ejemplo |
|-----------|---|---|---------|
| I | + | + | 50,75 |
| II | - | + | -50,75 |
| III | - | - | -50,-75 |
| IV | + | - | 50,-75 |

---

## 2. Coordenadas Absolutas

### 2.1 Concepto

Las coordenadas absolutas especifican la posicion exacta respecto al origen (0,0).

**Formato:** `X,Y`

### 2.2 Ejemplo Practico

Para dibujar un rectangulo con esquinas en puntos especificos:

```
Command: LINE
Specify first point: 0,0
Specify next point: 100,0
Specify next point: 100,50
Specify next point: 0,50
Specify next point: C (para cerrar)
```

**Resultado:** Rectangulo de 100x50 unidades en el origen.

### 2.3 Cuando Usar Coordenadas Absolutas

- Posicionar el primer punto de una figura
- Ubicar objetos en posiciones especificas del plano
- Crear referencias fijas en el dibujo
- Trabajar con coordenadas de levantamiento topografico

### 2.4 Visualizar Coordenadas

La barra de estado muestra las coordenadas actuales del cursor:

- **Formato estatico:** Muestra ultima posicion clickeada
- **Formato dinamico:** Actualiza en tiempo real
- **Toggle:** Click en el display de coordenadas o F6

---

## 3. Coordenadas Relativas

### 3.1 Concepto

Las coordenadas relativas especifican la posicion respecto al **ultimo punto** ingresado, no al origen.

**Formato:** `@X,Y`

El simbolo `@` indica "relativo al punto anterior".

### 3.2 Ejemplo Practico

Para dibujar el mismo rectangulo de 100x50:

```
Command: LINE
Specify first point: 0,0
Specify next point: @100,0 (100 unidades a la derecha)
Specify next point: @0,50 (50 unidades arriba)
Specify next point: @-100,0 (100 unidades a la izquierda)
Specify next point: C (cerrar al inicio)
```

### 3.3 Ventajas de Coordenadas Relativas

| Ventaja | Descripcion |
|---------|-------------|
| Eficiencia | No necesitas calcular posiciones absolutas |
| Flexibilidad | Mueves el punto inicial y todo se ajusta |
| Intuitivo | Piensas en "cuanto mover" no "donde estar" |
| Profesional | Metodo preferido en produccion |

### 3.4 Signos en Coordenadas Relativas

| Movimiento | X | Y | Ejemplo |
|------------|---|---|---------|
| Derecha | + | 0 | @50,0 |
| Izquierda | - | 0 | @-50,0 |
| Arriba | 0 | + | @0,50 |
| Abajo | 0 | - | @0,-50 |
| Diagonal derecha-arriba | + | + | @50,50 |
| Diagonal izquierda-abajo | - | - | @-50,-50 |

---

## 4. Coordenadas Polares

### 4.1 Concepto

Las coordenadas polares especifican un punto mediante:

- **Distancia:** Longitud desde el punto anterior
- **Angulo:** Direccion medida desde el eje X positivo

**Formato:** `@Distancia<Angulo`

### 4.2 Sistema de Angulos

Por defecto en AutoCAD:

- **0°:** Eje X positivo (derecha)
- **90°:** Eje Y positivo (arriba)
- **180°:** Eje X negativo (izquierda)
- **270°:** Eje Y negativo (abajo)
- Los angulos se miden en sentido anti-horario

![Sistema de Angulos AutoCAD](../imagenes/leccion-3-angulos.png)

### 4.3 Ejemplo Practico

Para dibujar un triangulo equilatero de lado 100:

```
Command: LINE
Specify first point: 100,100
Specify next point: @100<0 (100 unidades a 0 grados)
Specify next point: @100<120 (100 unidades a 120 grados)
Specify next point: C (cerrar)
```

### 4.4 Cuando Usar Coordenadas Polares

- Lineas en angulos especificos
- Dibujos arquitectonicos con muros inclinados
- Elementos radiales
- Topografia con rumbos y distancias

### 4.5 Ejemplos de Angulos Comunes

| Angulo | Direccion | Uso Tipico |
|--------|-----------|------------|
| 0° | Derecha (Este) | Lineas horizontales |
| 30° | Diagonal suave | Isometricos |
| 45° | Diagonal | Biseles, diagonales |
| 60° | Diagonal pronunciada | Isometricos |
| 90° | Arriba (Norte) | Lineas verticales |
| 135° | Diagonal arriba-izquierda | - |
| 180° | Izquierda (Oeste) | Lineas horizontales |
| 270° | Abajo (Sur) | Lineas verticales |

---

## 5. User Coordinate System (UCS)

### 5.1 WCS vs UCS

- **WCS (World Coordinate System):** Sistema fijo, el origen absoluto
- **UCS (User Coordinate System):** Sistema personalizable que puedes mover y rotar

### 5.2 Comando UCS

```
Command: UCS
Current ucs name: *WORLD*
Specify origin of UCS or [Face/NAmed/OBject/Previous/View/World/X/Y/Z/ZAxis] <World>:
```

### 5.3 Opciones Principales

| Opcion | Funcion |
|--------|---------|
| Origin | Mover el origen a nuevo punto |
| World | Regresar al sistema mundial |
| Object | Alinear UCS a un objeto |
| 3Point | Definir UCS con 3 puntos |
| X/Y/Z | Rotar alrededor de un eje |
| Previous | Volver al UCS anterior |

### 5.4 Ejemplo: Mover el Origen

```
Command: UCS
Specify origin of UCS: 500,500
```

Ahora el punto 0,0 esta en donde antes era 500,500.

### 5.5 Cuando Usar UCS

- Dibujar en planos inclinados
- Trabajar en diferentes areas de un proyecto grande
- Alinear con geometria existente
- Modelado 3D en diferentes caras

---

## 6. Dynamic Input y Coordenadas

### 6.1 Modo Relativo por Defecto

Cuando Dynamic Input (F12) esta activado:

- Las coordenadas se ingresan como **relativas por defecto**
- No necesitas escribir `@`
- El tooltip muestra distancia y angulo

### 6.2 Cambiar Entre Modos

Con Dynamic Input activo:

- **Tab:** Cambiar entre campos (distancia/angulo)
- **#:** Forzar coordenadas absolutas
- Los valores se muestran junto al cursor

### 6.3 Configurar Dynamic Input

1. Click derecho en DYN en Status Bar
2. Dynamic Input Settings
3. Activar/desactivar:
   - Pointer Input
   - Dimension Input
   - Dynamic Prompts

---

## 7. Direct Distance Entry

### 7.1 Concepto

Metodo rapido para dibujar lineas:

1. Indica la direccion con el cursor
2. Escribe solo la distancia
3. Presiona Enter

### 7.2 Ejemplo

```
Command: LINE
Specify first point: (click en un punto)
(mueve el cursor hacia la derecha)
Specify next point: 100 (Enter)
```

Resultado: Linea de 100 unidades en la direccion del cursor.

### 7.3 Combinacion con ORTHO

Con ORTHO activado (F8):
- El cursor se restringe a 0°, 90°, 180°, 270°
- Ideal para dibujos ortogonales
- Direct Distance se vuelve muy eficiente

### 7.4 Combinacion con Polar Tracking

Con Polar Tracking activado (F10):
- El cursor se alinea a angulos configurados
- Por defecto: cada 90°
- Configurable a 45°, 30°, 22.5°, etc.

---

## Ejercicio Practico 3

**Objetivo:** Dominar los tres sistemas de coordenadas dibujando figuras precisas.

**Tarea 1: Coordenadas Absolutas**

Dibujar un cuadrado con vertices en:
- (50,50)
- (150,50)
- (150,150)
- (50,150)

**Tarea 2: Coordenadas Relativas**

Dibujar una "L" comenzando en (200,50):
- Linea 80 unidades a la derecha
- Linea 120 unidades arriba
- Linea 40 unidades a la izquierda
- Linea 80 unidades abajo
- Linea 40 unidades a la izquierda
- Cerrar

**Tarea 3: Coordenadas Polares**

Dibujar un hexagono regular comenzando en (350,100):
- Lado = 50 unidades
- Usar angulos de 0°, 60°, 120°, 180°, 240°, 300°

**Tarea 4: Direct Distance con ORTHO**

1. Activar ORTHO (F8)
2. Comenzar en (50,250)
3. Dibujar rectangulo de 120x80 usando solo distancias

**Entregable:** Archivo .dwg con las 4 figuras correctamente posicionadas.

---

## Evaluacion

**Pregunta 1:** Cual es el formato para ingresar coordenadas relativas?

**Pregunta 2:** Que angulo corresponde a la direccion "arriba" en coordenadas polares?

**Pregunta 3:** Para que sirve el simbolo @ en AutoCAD?

**Pregunta 4:** Cual es la diferencia entre WCS y UCS?

**Pregunta 5:** Que tecla activa el modo ORTHO para dibujo ortogonal?

---

## Resumen

En esta leccion aprendiste:

- El sistema cartesiano X,Y,Z de AutoCAD
- Coordenadas absolutas (X,Y) desde el origen
- Coordenadas relativas (@X,Y) desde el ultimo punto
- Coordenadas polares (@Distancia<Angulo) con angulo
- El concepto de UCS para sistemas personalizados
- Direct Distance Entry para dibujo rapido

**Proxima Leccion:** Navegacion y Visualizacion (Zoom, Pan, Vistas)

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos dibujando figuras con diferentes metodos
