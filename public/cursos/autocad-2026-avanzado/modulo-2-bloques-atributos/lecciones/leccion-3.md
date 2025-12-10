# Leccion 3: Bloques Dinamicos

**Duracion:** 75 minutos
**Modulo:** 2 - Bloques y Atributos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender el concepto de bloques dinamicos
- Usar el Block Editor para crear bloques dinamicos
- Agregar parametros y acciones
- Crear bloques con visibilidad multiple
- Aplicar restricciones y estados de visibilidad

---

## Introduccion

Los bloques dinamicos contienen reglas que permiten modificar su geometria, tamano, visibilidad y otras propiedades sin crear multiples definiciones de bloque. Un solo bloque dinamico puede reemplazar decenas de bloques estaticos.

---

## 1. Concepto de Bloques Dinamicos

### 1.1 Bloque Estatico vs Dinamico

| Estatico | Dinamico |
|----------|----------|
| Geometria fija | Geometria modificable |
| Una variacion | Multiples variaciones |
| Muchos bloques similares | Un bloque flexible |
| Editar = redefinir | Editar con grips |

### 1.2 Ejemplos de Uso

- Puerta con multiples anchos (0.60, 0.70, 0.80, 0.90)
- Ventana con diferentes estilos
- Mesa con extension
- Luminaria con diferentes configuraciones
- Flecha que cambia direccion

### 1.3 Componentes

| Componente | Funcion |
|------------|---------|
| Parametro | Define QUE puede cambiar |
| Accion | Define COMO cambia |
| Grip | Permite interaccion del usuario |

---

## 2. Block Editor

### 2.1 Acceso

- **Command:** `BEDIT` o doble-click en bloque
- **Ribbon:** Home Tab > Block Panel > Block Editor
- **Menu:** Tools > Block Editor

### 2.2 Interfaz

![Block Editor Interface](../imagenes/leccion-3-m2-block-editor.png)

**Elementos:**
- Block Authoring Palettes (parametros, acciones)
- Ribbon Block Editor tab
- Area de edicion
- Fondo gris indica modo edicion

### 2.3 Salir del Editor

- **Command:** `BCLOSE`
- **Ribbon:** Close Block Editor
- **Esc:** Sale sin guardar (pregunta)

---

## 3. Parametros

### 3.1 Tipos de Parametros

| Parametro | Funcion | Grip |
|-----------|---------|------|
| Point | Posicion | Punto |
| Linear | Distancia en linea | Flecha |
| Polar | Distancia y angulo | Flecha |
| XY | Distancias X e Y | Cuadrado |
| Rotation | Angulo | Circulo |
| Alignment | Alineacion auto | Linea |
| Flip | Voltear | Triangulo |
| Visibility | Estados visibles | Dropdown |
| Lookup | Tabla de valores | Dropdown |
| Base Point | Punto de insercion | Cuadrado |

### 3.2 Agregar Parametro

```
1. En Block Editor
2. Block Authoring Palettes > Parameters
3. Click en tipo de parametro
4. Seguir prompts para ubicar
```

### 3.3 Propiedades de Parametros

- **Name:** Nombre identificador
- **Label:** Etiqueta visible
- **Grip Display:** Cuantos grips (0, 1, o 2)
- **Chain actions:** Encadenar acciones

---

## 4. Acciones

### 4.1 Tipos de Acciones

| Accion | Funcion |
|--------|---------|
| Move | Mover objetos |
| Scale | Escalar objetos |
| Stretch | Estirar objetos |
| Polar Stretch | Estirar con angulo |
| Rotate | Rotar objetos |
| Flip | Voltear objetos |
| Array | Crear array |
| Lookup | Seleccionar de tabla |

### 4.2 Agregar Accion

```
1. Agregar parametro primero
2. Block Authoring Palettes > Actions
3. Click en tipo de accion
4. Seleccionar parametro asociado
5. Seleccionar objetos afectados
```

### 4.3 Relacion Parametro-Accion

Cada accion se asocia a un parametro:
- Linear parameter → Stretch action
- Rotation parameter → Rotate action
- Flip parameter → Flip action

---

## 5. Ejemplo: Puerta Dinamica

### 5.1 Geometria Base

```
1. Dibujar puerta de 0.90m
   - Hoja: Rectangulo
   - Arco de apertura: 90°
2. Crear bloque estatico primero
3. BEDIT para convertir a dinamico
```

### 5.2 Agregar Parametro Linear

```
1. Parameters > Linear
2. Start point: esquina de bisagra
3. End point: otro lado de puerta
4. Label location: centro
```

### 5.3 Agregar Accion Stretch

```
1. Actions > Stretch
2. Select parameter: Distance1
3. Parameter point: extremo opuesto
4. Stretch frame: crossing window del lado movil
5. Objects: hoja y arco
```

### 5.4 Agregar Flip

```
1. Parameters > Flip
2. Reflection line: linea de muro
3. Actions > Flip
4. Select parameter: Flip1
5. Objects: todos
```

### 5.5 Resultado

Puerta que:
- Cambia ancho arrastrando grip
- Se voltea con grip de flip

---

## 6. Estados de Visibilidad

### 6.1 Concepto

Diferentes configuraciones visuales en un solo bloque.

### 6.2 Proceso

```
1. Parameters > Visibility
2. Click para ubicar grip
3. Click en "Visibility States" boton
4. Manage visibility states dialog
```

### 6.3 Crear Estados

```
Visibility States Manager:
- New: "Abierta"
- New: "Cerrada"
- New: "Semi-abierta"
```

### 6.4 Configurar Cada Estado

```
1. Seleccionar estado en dropdown
2. Dibujar/mostrar geometria para ese estado
3. Ocultar geometria no deseada (BVHIDE)
4. Repetir para otros estados
```

### 6.5 Comandos de Visibilidad

| Comando | Funcion |
|---------|---------|
| BVSHOW | Mostrar objeto en estado |
| BVHIDE | Ocultar objeto en estado |
| BVSTATE | Gestionar estados |

---

## 7. Lookup Tables

### 7.1 Funcion

Permite seleccionar de una lista de valores predefinidos.

### 7.2 Crear Lookup

```
1. Parameters > Lookup
2. Ubicar grip
3. Actions > Lookup
4. Select parameter
5. Property Lookup Table dialog
```

### 7.3 Tabla de Valores

```
| Lookup | Distance1 |
|--------|-----------|
| 0.60m  | 600       |
| 0.70m  | 700       |
| 0.80m  | 800       |
| 0.90m  | 900       |
| 1.00m  | 1000      |
```

### 7.4 Resultado

Dropdown en bloque con opciones predefinidas.

---

## 8. Constraint Parameters

### 8.1 Restricciones Geometricas

- Horizontal, Vertical
- Perpendicular, Parallel
- Tangent, Coincident
- Equal, Concentric

### 8.2 Restricciones Dimensionales

- Linear, Aligned
- Angular, Radial
- Diameter

### 8.3 Aplicar en Block Editor

```
1. Geometric tab en Parametric ribbon
2. Seleccionar tipo de restriccion
3. Aplicar a geometria
```

---

## 9. Test Block

### 9.1 Probar Bloque

```
1. En Block Editor
2. Ribbon > Test Block
3. Manipular grips
4. Verificar funcionamiento
5. Close Test Block Window
```

### 9.2 Importancia

Siempre probar antes de cerrar editor.

---

## 10. Aplicaciones Avanzadas

### 10.1 Mesa Extensible

```
- Geometria base: mesa cerrada
- Parametro Linear: extension
- Accion Stretch: alargar cubierta
- Visibility: extension visible/oculta
```

### 10.2 Luminaria Multi-configuracion

```
- Visibility states: 1 lampara, 2 lamparas, 4 lamparas
- Lookup: seleccion de configuracion
```

### 10.3 Ventana con Estilos

```
- Visibility: corrediza, abatible, fija
- Linear: ancho variable
- Flip: orientacion
```

---

## Ejercicio Practico 3

**Objetivo:** Crear bloques dinamicos funcionales.

**Tarea 1: Puerta Dinamica**
- Crear puerta 0.90m
- Agregar stretch para cambiar ancho
- Agregar flip para orientacion
- Probar con Test Block

**Tarea 2: Ventana con Visibilidad**
- Crear ventana base
- 3 estados de visibilidad: simple, doble, corrediza
- Configurar cada estado

**Tarea 3: Lookup Table**
- Crear bloque de tornillo
- Lookup con tamanos: M6, M8, M10, M12
- Escala automatica segun seleccion

**Tarea 4: Mesa Extensible**
- Mesa base 1.20m
- Parametro para extender a 1.80m
- Restricciones para limitar extension

**Tarea 5: Bloque con Rotacion**
- Crear flecha de norte
- Parametro de rotacion
- 8 posiciones predefinidas con lookup

**Entregable:** Biblioteca de 5 bloques dinamicos funcionales.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre parametro y accion?

**Pregunta 2:** Que tipo de parametro se usa para crear dropdown con opciones?

**Pregunta 3:** Que comando oculta geometria en un estado de visibilidad?

**Pregunta 4:** Como se prueba un bloque dinamico antes de cerrarlo?

**Pregunta 5:** Que accion se usa tipicamente con un parametro Linear?

---

## Resumen

En esta leccion aprendiste:

- Concepto de bloques dinamicos
- Usar Block Editor (BEDIT)
- Agregar parametros y acciones
- Crear estados de visibilidad
- Usar Lookup tables
- Probar bloques con Test Block

**Proxima Leccion:** Gestion Avanzada de Bloques

---

**Tiempo de estudio recomendado:** 75 minutos
**Practica adicional:** 60 minutos creando bloques dinamicos complejos
