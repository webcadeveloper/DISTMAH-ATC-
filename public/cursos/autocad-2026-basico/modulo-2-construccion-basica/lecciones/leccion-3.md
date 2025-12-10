# Leccion 3: Object Snap (OSNAP)

**Duracion:** 60 minutos
**Modulo:** 2 - Construccion Basica
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender la importancia de Object Snap para precision
- Utilizar todos los modos de OSNAP disponibles
- Configurar OSNAP Running (permanente) y Override (temporal)
- Combinar OSNAP con otros comandos de dibujo
- Resolver conflictos cuando hay multiples snaps

---

## Introduccion

Object Snap (OSNAP) es la herramienta mas importante para lograr precision en AutoCAD. Permite "engancharse" a puntos geometricos especificos de objetos existentes: extremos, centros, intersecciones, etc.

Sin OSNAP, seria practicamente imposible crear dibujos precisos conectando lineas exactamente o ubicando puntos en posiciones geometricas especificas.

---

## 1. Conceptos Basicos

### 1.1 Que es Object Snap

OSNAP detecta automaticamente puntos geometricos clave en objetos existentes y permite hacer click precisamente en esos puntos.

### 1.2 Activar/Desactivar OSNAP

- **Atajo:** F3
- **Status Bar:** Click en icono OSNAP
- **Command:** `OSNAP` (ON/OFF)

### 1.3 Indicadores Visuales

Cuando OSNAP encuentra un punto valido:

- **Marker:** Simbolo geometrico (cuadrado, triangulo, X, etc.)
- **Tooltip:** Nombre del snap (Endpoint, Midpoint, etc.)
- **AutoSnap Magnet:** El cursor "salta" al punto

![OSNAP Markers](../imagenes/leccion-3-m2-osnap-markers.png)

---

## 2. Modos de Object Snap

### 2.1 Endpoint (Extremo)

Detecta los extremos de lineas, arcos, polilineas.

**Marker:** Cuadrado
**Atajo temporal:** END

```
Specify next point: END
of (click cerca del extremo)
```

### 2.2 Midpoint (Punto Medio)

Detecta el punto medio de lineas y arcos.

**Marker:** Triangulo
**Atajo temporal:** MID

### 2.3 Center (Centro)

Detecta el centro de circulos, arcos y elipses.

**Marker:** Circulo pequeno
**Atajo temporal:** CEN

### 2.4 Node (Nodo)

Detecta objetos Point (puntos).

**Marker:** Circulo con X
**Atajo temporal:** NOD

### 2.5 Quadrant (Cuadrante)

Detecta los puntos a 0°, 90°, 180°, 270° de circulos y arcos.

**Marker:** Rombo
**Atajo temporal:** QUA

### 2.6 Intersection (Interseccion)

Detecta donde se cruzan dos objetos.

**Marker:** X
**Atajo temporal:** INT

### 2.7 Extension (Extension)

Detecta puntos en la extension imaginaria de lineas.

**Marker:** Cruz con puntos
**Atajo temporal:** EXT

### 2.8 Insertion (Insercion)

Detecta el punto de insercion de bloques y texto.

**Marker:** Cuadrado con barra
**Atajo temporal:** INS

### 2.9 Perpendicular

Detecta el punto perpendicular a una linea desde el punto anterior.

**Marker:** Angulo recto
**Atajo temporal:** PER

### 2.10 Tangent (Tangente)

Detecta el punto de tangencia en circulos y arcos.

**Marker:** Circulo con linea tangente
**Atajo temporal:** TAN

### 2.11 Nearest (Mas Cercano)

Detecta cualquier punto sobre un objeto (el mas cercano al cursor).

**Marker:** Reloj de arena
**Atajo temporal:** NEA

### 2.12 Apparent Intersection (Interseccion Aparente)

Detecta donde se cruzarian dos objetos si se extendieran.

**Marker:** Cuadrado con X
**Atajo temporal:** APPINT

### 2.13 Parallel (Paralelo)

Permite dibujar paralelo a otra linea.

**Marker:** Lineas paralelas
**Atajo temporal:** PAR

---

## 3. Tabla Resumen de OSNAPs

| OSNAP | Atajo | Marker | Detecta |
|-------|-------|--------|---------|
| Endpoint | END | Cuadrado | Extremos |
| Midpoint | MID | Triangulo | Punto medio |
| Center | CEN | Circulo | Centro de curvas |
| Node | NOD | Circulo+X | Objetos Point |
| Quadrant | QUA | Rombo | 0°,90°,180°,270° |
| Intersection | INT | X | Cruces de objetos |
| Extension | EXT | Cruz | Extension de lineas |
| Insertion | INS | Cuadrado+barra | Punto de insercion |
| Perpendicular | PER | Angulo recto | Perpendicular |
| Tangent | TAN | Circulo+linea | Tangencia |
| Nearest | NEA | Reloj arena | Cualquier punto |
| Apparent Int | APPINT | Cuadrado+X | Interseccion proyectada |
| Parallel | PAR | Lineas || | Direccion paralela |

---

## 4. Configurar Running OSNAP

### 4.1 Dialogo de Configuracion

- **Atajo:** Click derecho en OSNAP en Status Bar > Settings
- **Command:** `OSNAP` + Enter, luego `S` para Settings
- **Menu:** Tools > Drafting Settings > Object Snap

### 4.2 Drafting Settings - Object Snap Tab

![Drafting Settings OSNAP](../imagenes/leccion-3-m2-drafting-settings.png)

**Opciones:**

- **Object Snap On (F3):** Activa/desactiva OSNAP global
- **Object Snap Tracking On (F11):** Activa tracking
- **Lista de OSNAPs:** Checkboxes para activar/desactivar cada uno

### 4.3 Configuracion Recomendada

Para dibujo general, activar:

- [x] Endpoint
- [x] Midpoint
- [x] Center
- [x] Intersection
- [x] Perpendicular
- [ ] Tangent (activar solo cuando se necesite)
- [ ] Nearest (evitar, puede causar imprecision)

### 4.4 Clear All / Select All

- **Clear All:** Desactiva todos los OSNAPs
- **Select All:** Activa todos (no recomendado)

---

## 5. OSNAP Override (Temporal)

### 5.1 Concepto

Override permite usar un OSNAP especifico solo para el siguiente punto, ignorando la configuracion Running.

### 5.2 Metodos para Override

**Metodo 1: Escribir en Command Line**
```
Specify next point: MID
of (click en objeto)
```

**Metodo 2: Shift + Click Derecho**
Abre menu contextual con todos los OSNAPs.

**Metodo 3: Barra de Herramientas**
Object Snap toolbar (si esta visible).

### 5.3 None (Ninguno)

Desactiva OSNAP para el siguiente punto:

```
Specify next point: NON
of (click libre sin snap)
```

Util cuando OSNAP interfiere y necesitas un punto libre.

---

## 6. Object Snap Tracking (OTRACK)

### 6.1 Que es OTRACK

Object Snap Tracking permite rastrear desde puntos de OSNAP sin hacer click, creando lineas de referencia temporales.

### 6.2 Activar OTRACK

- **Atajo:** F11
- **Status Bar:** Click en OTRACK

### 6.3 Como Funciona

1. Activa OTRACK (F11) y OSNAP (F3)
2. Durante un comando, pasa el cursor sobre un punto OSNAP
3. Aparece una pequena cruz
4. Mueve el cursor - aparece linea de tracking
5. Click cuando encuentres la posicion deseada

### 6.4 Ejemplo Practico

Para dibujar un punto alineado con el centro de un circulo:

```
Command: LINE
Specify first point: (click cualquier punto)
Specify next point: (pasar cursor sobre centro del circulo - aparece cruz)
(mover cursor hacia abajo - aparece linea vertical)
(click cuando este en la posicion deseada)
```

### 6.5 Tracking Multiple

Puedes adquirir multiples puntos de tracking:

1. Pasar sobre punto 1 - aparece cruz
2. Pasar sobre punto 2 - otra cruz
3. Las lineas de tracking se cruzan
4. Click en la interseccion

---

## 7. Polar Tracking con OSNAP

### 7.1 Combinacion Poderosa

Polar Tracking (F10) + OSNAP (F3) + OTRACK (F11) = Maxima precision.

### 7.2 Configurar Polar Tracking

Click derecho en POLAR > Settings:

- Increment angle: 30°, 45°, 90°
- Additional angles: Angulos personalizados
- Object Snap Tracking: Ortho only / All

### 7.3 Ejemplo

Dibujar linea a 45° desde el midpoint de otra linea:

```
1. Activar F3, F10, F11
2. Command: LINE
3. Pasar sobre midpoint - adquirir tracking
4. Mover cursor a 45° - aparece tooltip "45°"
5. Escribir distancia y Enter
```

---

## 8. Configuracion AutoSnap

### 8.1 Acceder a Opciones

Options > Drafting Tab > AutoSnap Settings

### 8.2 Opciones Disponibles

| Opcion | Funcion |
|--------|---------|
| Marker | Muestra simbolo geometrico |
| Magnet | Cursor salta al punto |
| Display AutoSnap tooltip | Muestra nombre del snap |
| Display AutoSnap aperture box | Muestra apertura de busqueda |
| AutoSnap Marker Size | Tamano del marcador |
| Aperture Size | Tamano del area de deteccion |

### 8.3 Configuracion Recomendada

- Marker: ON
- Magnet: ON
- Tooltip: ON
- Marker Size: 5-7 (segun preferencia)
- Aperture Size: 10 (valor medio)

---

## 9. Resolucion de Conflictos

### 9.1 Problema: Multiples Puntos Detectados

Cuando hay varios puntos OSNAP cerca, AutoCAD puede elegir el incorrecto.

### 9.2 Soluciones

**Solucion 1: Tab para ciclar**
Presiona Tab para ciclar entre los puntos detectados.

**Solucion 2: Override temporal**
Usa un override especifico: `END`, `MID`, `CEN`

**Solucion 3: Desactivar OSNAPs innecesarios**
Reduce los OSNAPs activos en Running mode.

**Solucion 4: Zoom in**
Acercate para separar los puntos visualmente.

### 9.3 Orden de Prioridad

Cuando hay conflicto, AutoCAD prioriza:
1. Punto mas cercano al cursor
2. Orden en la lista de OSNAPs

---

## 10. Mejores Practicas

### 10.1 Configuracion por Tipo de Trabajo

**Dibujo Arquitectonico:**
- Endpoint, Midpoint, Intersection, Perpendicular

**Dibujo Mecanico:**
- Endpoint, Center, Quadrant, Tangent, Intersection

**Topografia:**
- Node, Endpoint, Intersection

### 10.2 Evitar Nearest

Nearest detecta cualquier punto, lo que puede causar:
- Puntos imprecisos
- Conexiones no deseadas
- Usar solo cuando sea especificamente necesario

### 10.3 Usar Override Estrategicamente

- Running OSNAP: Solo los mas usados
- Override: Para situaciones especificas
- None: Cuando OSNAP interfiere

---

## Ejercicio Practico 3

**Objetivo:** Dominar OSNAP para dibujo preciso.

**Preparacion:**
1. Crear capa CONSTRUCCION
2. Dibujar: rectangulo 100x80, circulo R30, triangulo

**Tarea 1: Configurar Running OSNAP**
- Activar: Endpoint, Midpoint, Center, Intersection
- Desactivar: Nearest, Node

**Tarea 2: Usar Endpoints**
- Dibujar linea desde esquina del rectangulo a otra esquina
- Verificar conexion exacta

**Tarea 3: Usar Midpoints**
- Conectar los midpoints de los 4 lados del rectangulo
- Resultado: Rombo interno

**Tarea 4: Usar Center**
- Dibujar linea desde centro del circulo al midpoint del rectangulo

**Tarea 5: Usar Intersection**
- Dibujar lineas que se crucen
- Iniciar nueva linea desde la interseccion

**Tarea 6: Object Snap Tracking**
- Activar OTRACK (F11)
- Dibujar punto alineado con centro del circulo Y midpoint del rectangulo

**Entregable:** Archivo con todas las lineas de construccion visibles.

---

## Evaluacion

**Pregunta 1:** Cual es el atajo de teclado para activar/desactivar OSNAP?

**Pregunta 2:** Que OSNAP usarias para conectar al centro de un circulo?

**Pregunta 3:** Como se llama el OSNAP que detecta el punto medio de una linea?

**Pregunta 4:** Que hace el OSNAP "None" (NON)?

**Pregunta 5:** Cual es la tecla para ciclar entre multiples puntos OSNAP?

---

## Resumen

En esta leccion aprendiste:

- Los 13 modos de Object Snap disponibles
- Como configurar Running OSNAP
- El uso de Override para snaps temporales
- Object Snap Tracking para precision avanzada
- Mejores practicas y resolucion de conflictos

**Proxima Leccion:** Zoom y Pan Avanzado

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos dibujando con diferentes combinaciones de OSNAP
