# Lección 3: Coordenadas 3D y Métodos de Entrada

## Introducción

La entrada precisa de coordenadas tridimensionales es la habilidad fundamental que separa el modelado amateur del profesional. Mientras que en 2D trabajamos con dos valores (X, Y), el espacio 3D introduce el eje Z, añadiendo complejidad pero también capacidades de diseño ilimitadas.

AutoCAD 2026 ofrece múltiples sistemas de entrada de coordenadas 3D, cada uno optimizado para diferentes situaciones de modelado. Esta lección cubre coordenadas absolutas, relativas, cilíndricas, esféricas, y el poderoso sistema de filtros de coordenadas que permite construir geometría compleja con precisión milimétrica.

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Comprender el sistema de coordenadas cartesianas 3D (X, Y, Z)
- Introducir coordenadas absolutas 3D con precisión
- Utilizar coordenadas relativas 3D para modelado incremental
- Aplicar coordenadas cilíndricas para objetos circulares
- Emplear coordenadas esféricas para geometría angular compleja
- Dominar filtros de coordenadas (.X, .Y, .Z, .XY, .XZ, .YZ)
- Combinar métodos de entrada para máxima eficiencia

## 1. Sistema de Coordenadas Cartesianas 3D

### 1.1 Los Tres Ejes

En el espacio tridimensional, cada punto se define mediante tres valores:

- **Eje X:** Horizontal, generalmente hacia la derecha (rojo)
- **Eje Y:** Horizontal, generalmente hacia arriba en vista superior (verde)
- **Eje Z:** Vertical, perpendicular al plano XY (azul)

**Regla de la mano derecha:**
- Pulgar apunta en dirección X positiva
- Índice apunta en dirección Y positiva
- Dedo medio apunta en dirección Z positiva

Esta convención determina si el sistema es "mano derecha" (estándar en AutoCAD).

### 1.2 Formato de Coordenadas 3D

**Sintaxis básica:** `X,Y,Z`

Ejemplos:
- `10,20,5` → Punto en X=10, Y=20, Z=5
- `0,0,0` → Origen del sistema de coordenadas actual
- `-5,10,15` → Valores negativos son válidos
- `100.5,200.75,50.25` → Decimales para precisión

**IMPORTANTE:** Separador es la coma (,), no espacios. `10, 20, 5` es incorrecto.

## 2. Coordenadas Absolutas 3D

### 2.1 Definición

Las **coordenadas absolutas** se miden desde el origen (0,0,0) del UCS actual. Cada coordenada es una posición fija en el espacio, independiente de puntos anteriores.

### 2.2 Sintaxis

`X,Y,Z`

Sin prefijo, las coordenadas son interpretadas como absolutas.

### 2.3 Ejemplo Práctico: Dibujar Línea 3D

```
Command: LINE
Specify first point: 0,0,0
Specify next point or [Undo]: 100,0,0
Specify next point or [Undo]: 100,50,0
Specify next point or [Close/Undo]: 100,50,30
Specify next point or [Close/Undo]: (Enter para terminar)
```

Este ejemplo crea una polilínea que:
1. Inicia en el origen
2. Va 100 unidades en dirección X
3. Sube 50 unidades en dirección Y
4. Se eleva 30 unidades en dirección Z

### 2.4 Cuándo Usar Coordenadas Absolutas

**Ideal para:**
- Puntos clave conocidos en el sistema de coordenadas
- Esquinas de edificios desde un origen definido
- Puntos de control topográficos
- Geometría referenciada a un grid conocido

**No ideal para:**
- Modelado incremental (usar relativas)
- Cuando no conoces las coordenadas absolutas exactas

## 3. Coordenadas Relativas 3D

### 3.1 Definición

Las **coordenadas relativas** se miden desde el último punto introducido. Permiten especificar desplazamientos en X, Y, Z en lugar de posiciones absolutas.

### 3.2 Sintaxis

`@X,Y,Z`

El símbolo `@` indica que las coordenadas son relativas al punto anterior.

### 3.3 Ejemplo Práctico: Caja con Coordenadas Relativas

```
Command: LINE
Specify first point: 0,0,0 (punto inicial absoluto)
Specify next point or [Undo]: @100,0,0 (100 unidades en X desde punto anterior)
Specify next point or [Undo]: @0,50,0 (50 unidades en Y desde punto anterior)
Specify next point or [Close/Undo]: @0,0,30 (30 unidades en Z desde punto anterior)
```

Cada coordenada relativa es un vector de desplazamiento:
- `@100,0,0` → Muévete 100 en X, 0 en Y, 0 en Z
- `@0,50,0` → Muévete 0 en X, 50 en Y, 0 en Z
- `@0,0,30` → Muévete 0 en X, 0 en Y, 30 en Z (solo elevación)

### 3.4 Cuándo Usar Coordenadas Relativas

**Ideal para:**
- Modelado incremental paso a paso
- Cuando conoces dimensiones de desplazamiento
- Construcción de geometría secuencial
- Evitar cálculos de coordenadas absolutas

**Ventaja principal:** No necesitas calcular posiciones absolutas, solo desplazamientos.

## 4. Coordenadas Cilíndricas

### 4.1 Definición

Las **coordenadas cilíndricas** son ideales para geometría que involucra rotación alrededor del eje Z. Especifican un punto mediante:
- Distancia horizontal desde el origen (radio)
- Ángulo en el plano XY desde el eje X
- Elevación Z

### 4.2 Sintaxis

**Absolutas:** `distancia<ángulo,Z`
**Relativas:** `@distancia<ángulo,Z`

Ejemplos:
- `50<45,10` → Punto a 50 unidades de distancia, 45° desde eje X, elevación 10
- `@100<90,25` → Desde punto anterior, 100 unidades a 90°, elevación relativa 25

### 4.3 Componentes

**Distancia:** Radio en el plano XY desde el origen (o punto anterior si es relativa)
**Ángulo:** Medido desde el eje X positivo, contrareloj en vista superior
- 0° = dirección X positiva (Este)
- 90° = dirección Y positiva (Norte)
- 180° = dirección X negativa (Oeste)
- 270° = dirección Y negativa (Sur)

**Z:** Elevación vertical

### 4.4 Ejemplo Práctico: Patrón Circular en 3D

Crear 6 puntos en círculo de radio 50, cada uno a diferente altura:

```
Command: POINT
Current point modes: PDMODE=3 PDSIZE=5
Specify a point: 50<0,0
Command: POINT
Specify a point: 50<60,10
Command: POINT
Specify a point: 50<120,20
Command: POINT
Specify a point: 50<180,30
Command: POINT
Specify a point: 50<240,40
Command: POINT
Specify a point: 50<300,50
```

Resultado: Espiral de puntos alrededor del eje Z.

### 4.5 Cuándo Usar Coordenadas Cilíndricas

**Ideal para:**
- Geometría con simetría circular
- Patrones radiales (escaleras caracol, aspas de ventilador)
- Puntos en arcos o círculos
- Modelado arquitectónico con componentes circulares

## 5. Coordenadas Esféricas

### 5.1 Definición

Las **coordenadas esféricas** especifican un punto mediante:
- Distancia directa desde el origen (radio esférico)
- Ángulo en el plano XY desde el eje X
- Ángulo vertical desde el plano XY

### 5.2 Sintaxis

**Absolutas:** `distancia<ángulo_XY<ángulo_vertical`
**Relativas:** `@distancia<ángulo_XY<ángulo_vertical`

Ejemplos:
- `100<45<30` → Punto a 100 unidades, 45° en plano XY, 30° sobre plano XY
- `@50<90<60` → Desde punto anterior, 50 unidades a 90° y 60° de elevación

### 5.3 Componentes

**Distancia:** Radio esférico desde origen (distancia directa 3D)
**Ángulo XY:** Rotación en plano XY (igual que cilíndricas)
**Ángulo vertical:** Elevación desde el plano XY
- 0° = en el plano XY
- 90° = dirección Z positiva (directamente arriba)
- -90° = dirección Z negativa (directamente abajo)

### 5.4 Diferencia con Cilíndricas

**Coordenadas cilíndricas:** `distancia_horizontal<ángulo,Z_vertical`
- Distancia es radio en plano XY
- Z es coordenada de elevación directa

**Coordenadas esféricas:** `distancia_total<ángulo_XY<ángulo_Z`
- Distancia es radio 3D (hipotenusa)
- Segundo ángulo es inclinación, no coordenada

### 5.5 Ejemplo Práctico: Domos y Estructuras Geodésicas

Crear puntos en una semiesfera de radio 100:

```
Command: POINT
Specify a point: 100<0<0 (ecuador, 0°)
Command: POINT
Specify a point: 100<0<30 (30° sobre ecuador)
Command: POINT
Specify a point: 100<0<60 (60° sobre ecuador)
Command: POINT
Specify a point: 100<0<90 (cima del domo)
```

Todos están a 100 unidades del origen, pero a diferentes ángulos verticales.

### 5.6 Cuándo Usar Coordenadas Esféricas

**Ideal para:**
- Domos y estructuras esféricas
- Modelado astronómico (órbitas, trayectorias)
- Geometría con simetría esférica
- Análisis de iluminación (dirección de luz solar)

## 6. Filtros de Coordenadas

### 6.1 Concepto de Filtros

Los **filtros de coordenadas** permiten extraer uno o más componentes (X, Y, Z) de un punto existente y combinarlos con nuevos valores. Son extremadamente poderosos para construir geometría alineada.

**Sintaxis:** `.X`, `.Y`, `.Z`, `.XY`, `.XZ`, `.YZ`

### 6.2 Filtro .X

Extrae solo la coordenada X de un punto, requiriendo que ingreses Y y Z.

**Ejemplo:**
```
Command: LINE
Specify first point: .X
of (selecciona punto para extraer X)
(need YZ): 50,30 (proporcionas Y=50, Z=30)
```

Resultado: Punto con X del punto seleccionado, Y=50, Z=30.

### 6.3 Filtro .Y

Extrae solo la coordenada Y de un punto.

**Ejemplo:**
```
Command: LINE
Specify first point: .Y
of (selecciona punto para extraer Y)
(need XZ): 100,20 (proporcionas X=100, Z=20)
```

### 6.4 Filtro .Z

Extrae solo la coordenada Z de un punto (muy común para alineación vertical).

**Ejemplo práctico:** Dibujar línea a la misma elevación de un objeto existente:
```
Command: LINE
Specify first point: .Z
of (selecciona punto en objeto a esa elevación)
(need XY): 0,0 (proporcionas coordenadas XY)
Specify next point: .Z
of (mismo punto u otro a la misma elevación)
(need XY): 100,100
```

Ambos puntos de la línea están a la misma elevación Z.

### 6.5 Filtro .XY

Extrae las coordenadas X e Y de un punto, requiriendo solo Z.

**Ejemplo:** Crear punto directamente encima de otro punto:
```
Command: POINT
Specify a point: .XY
of (selecciona punto base)
(need Z): 50 (altura sobre el punto base)
```

Resultado: Punto con mismas coordenadas XY que el punto seleccionado, pero Z=50.

**Aplicación común:** Modelado de columnas verticales.

### 6.6 Filtro .XZ

Extrae X y Z, requiere Y.

**Ejemplo:**
```
Command: LINE
Specify first point: .XZ
of (selecciona punto)
(need Y): 25
```

### 6.7 Filtro .YZ

Extrae Y y Z, requiere X.

**Ejemplo:**
```
Command: LINE
Specify first point: .YZ
of (selecciona punto)
(need X): 100
```

### 6.8 Ejemplo Práctico Avanzado: Alineación Compleja

**Problema:** Dibujar una línea que:
- Inicia con la misma X que el punto A
- Tiene la misma Y que el punto B
- Está a elevación Z=100

**Solución con filtros:**
```
Command: LINE
Specify first point: .X
of (selecciona punto A)
(need YZ): .Y
of (selecciona punto B)
(need Z): 100
Specify next point: (continúa normalmente)
```

**Filtros anidados** permiten construcciones geométricas extremadamente precisas.

## 7. Entrada Dinámica y Coordenadas 3D

### 7.1 Dynamic Input en 3D

La entrada dinámica (Dynamic Input) muestra un campo de entrada junto al cursor. En 3D, funciona principalmente en el plano XY del UCS actual.

**Activación:** Tecla `F12` o botón DYN en status bar

### 7.2 Limitaciones en 3D

Dynamic Input está optimizada para 2D. Para entrada 3D precisa:
- Desactiva Dynamic Input (F12) temporalmente
- O ingresa coordenadas completas X,Y,Z en el campo dinámico

### 7.3 Coordenadas Z con Dynamic Input

Al ingresar distancias, añade valor Z separado por coma:
```
100,50 (distancia en XY dinámico, pero falta Z)
100,50,25 (incluye Z=25)
```

## 8. Object Snaps en 3D

### 8.1 Osnaps Importantes en 3D

Todos los Object Snaps 2D funcionan en 3D, pero con consideraciones especiales:

**Endpoint:** Captura extremos de líneas 3D, aristas de sólidos
**Midpoint:** Punto medio de aristas y líneas 3D
**Center:** Centro de círculos, arcos, y caras circulares de sólidos
**Intersection:** Intersección aparente o real de objetos 3D
**Perpendicular:** Perpendicular a caras y aristas en 3D

### 8.2 Osnap 3D Específico: Vertex

**Vertex:** Captura vértices de mesh y polysolids.

### 8.3 Proyección de Osnaps en 3D

Los osnaps se proyectan sobre el plano XY del UCS actual. Para capturar puntos fuera del plano:
- Cambia el UCS para alinear con el objeto
- O usa filtros de coordenadas combinados con osnaps

## 9. Ejercicios Prácticos

### Ejercicio 1: Coordenadas Absolutas
Dibuja un triángulo 3D con vértices en:
- (0,0,0)
- (100,0,0)
- (50,86.6,50)

### Ejercicio 2: Coordenadas Relativas
Desde el punto (0,0,0), dibuja una escalera de 5 escalones:
- Cada escalón: 30 unidades en X, 0 en Y, 20 en Z
- Usa coordenadas relativas (@30,0,20)

### Ejercicio 3: Coordenadas Cilíndricas
Crea 8 puntos en un círculo de radio 50, espaciados cada 45°, todos a Z=0:
- 50<0,0
- 50<45,0
- 50<90,0
- ... hasta 50<315,0

### Ejercicio 4: Coordenadas Esféricas
Crea 5 puntos en un arco vertical de radio 100:
- 100<0<0
- 100<0<30
- 100<0<60
- 100<0<90

### Ejercicio 5: Filtros de Coordenadas
Dado un punto A en (50,75,100):
1. Crea un punto directamente encima a Z=200 (usar filtro .XY)
2. Crea un punto con misma X, pero Y=0, Z=0 (usar filtro .X)

## 10. Errores Comunes y Soluciones

### Error 1: Olvidar el símbolo @
**Síntoma:** Coordenadas relativas no funcionan como esperado.
**Solución:** Siempre usa `@` antes de coordenadas relativas.

### Error 2: Usar espacios en coordenadas
**Síntoma:** AutoCAD no reconoce la entrada.
**Solución:** `10,20,30` (correcto), no `10, 20, 30` (incorrecto).

### Error 3: Confundir cilíndricas y esféricas
**Síntoma:** Puntos aparecen en lugares inesperados.
**Solución:** Cilíndricas: `distancia<ángulo,Z`. Esféricas: `distancia<ángulo<ángulo`.

### Error 4: Filtros de coordenadas con Dynamic Input activo
**Síntoma:** Filtros no funcionan correctamente.
**Solución:** Desactiva Dynamic Input (F12) al usar filtros complejos.

## Resumen

En esta lección has aprendido:

- Coordenadas absolutas 3D: `X,Y,Z` desde el origen
- Coordenadas relativas 3D: `@X,Y,Z` desde el último punto
- Coordenadas cilíndricas: `distancia<ángulo,Z` para geometría circular
- Coordenadas esféricas: `distancia<ángulo<ángulo` para geometría esférica
- Filtros de coordenadas: `.X`, `.Y`, `.Z`, `.XY`, `.XZ`, `.YZ` para alineación precisa
- Combinación de métodos para modelado eficiente y preciso

## Próxima Lección

En la Lección 4, aprenderás a crear objetos 3D básicos (primitivas): Box, Cylinder, Sphere, Cone, Pyramid, y Torus. Aplicarás los métodos de entrada de coordenadas aquí aprendidos para modelar geometría tridimensional precisa.

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Intermedia
**Prerequisito para:** Todas las lecciones de modelado 3D
