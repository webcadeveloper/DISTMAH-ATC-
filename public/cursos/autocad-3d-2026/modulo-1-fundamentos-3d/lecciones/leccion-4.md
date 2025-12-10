# Lección 4: Objetos 3D Básicos (Box, Cylinder, Sphere)

## Introducción

Las primitivas 3D son los bloques constructivos fundamentales del modelado tridimensional. AutoCAD 2026 proporciona un conjunto de sólidos 3D básicos (primitivas) que sirven como base para modelos más complejos. Estas formas geométricas elementales se combinan, modifican y transforman para crear virtualmente cualquier objeto tridimensional.

Esta lección cubre las seis primitivas principales: Box (caja), Cylinder (cilindro), Sphere (esfera), Cone (cono), Pyramid (pirámide), y Torus (toroide). Cada primitiva tiene múltiples métodos de creación y opciones paramétricas que permiten control preciso sobre su geometría.

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Crear cajas (Box) mediante diferentes métodos de especificación
- Modelar cilindros con bases circulares y elípticas
- Generar esferas usando varios métodos de definición
- Construir conos y pirámides con diferentes configuraciones
- Crear toroides con controles de radio mayor y menor
- Comprender las propiedades paramétricas de primitivas 3D
- Modificar primitivas existentes mediante el Properties palette
- Aplicar primitivas en contextos de modelado arquitectónico y mecánico

## 1. Comando BOX (Caja)

### 1.1 Descripción General

El comando **BOX** crea un sólido rectangular 3D. Es probablemente la primitiva más utilizada en modelado arquitectónico y mecánico.

**Comando:** `BOX`
**Ribbon:** Home tab → Modeling panel → Box
**Alias:** No tiene alias estándar

### 1.2 Método Estándar: Esquina Opuesta

**Procedimiento:**
1. Comando: `BOX`
2. Specify first corner: (punto de esquina base)
3. Specify other corner or [Center]: (esquina opuesta diagonal)
4. Specify height or [2Point]: (altura del box)

**Ejemplo:**
```
Command: BOX
Specify first corner or [Center]: 0,0,0
Specify other corner or [Cube/Length]: 100,50,0
Specify height or [2Point]: 75
```

Resultado: Caja de 100×50×75 unidades con esquina base en origen.

![Box método esquina opuesta](../imagenes/box-metodo-esquina.png)

### 1.3 Opción Center (Centrado)

Crea el box especificando el centro de la base en lugar de una esquina.

**Procedimiento:**
```
Command: BOX
Specify first corner or [Center]: C (Center)
Specify center: 50,50,0
Specify corner or [Cube/Length]: 100,100,0
Specify height or [2Point]: 50
```

Resultado: Box centrado en (50,50,0).

### 1.4 Opción Cube (Cubo)

Crea un cubo perfecto especificando solo una dimensión.

**Procedimiento:**
```
Command: BOX
Specify first corner or [Center]: 0,0,0
Specify other corner or [Cube/Length]: C (Cube)
Specify length: 100
```

Resultado: Cubo de 100×100×100 unidades.

### 1.5 Opción Length (Dimensiones Específicas)

Permite ingresar largo, ancho y altura mediante valores numéricos.

**Procedimiento:**
```
Command: BOX
Specify first corner or [Center]: 0,0,0
Specify other corner or [Cube/Length]: L (Length)
Specify length: 150
Specify width: 80
Specify height: 60
```

Resultado: Caja con dimensiones exactas 150×80×60.

**Ventaja:** Máximo control dimensional sin cálculos de coordenadas.

### 1.6 Opción 2Point para Altura

Define la altura mediante dos puntos en lugar de un valor numérico.

**Procedimiento:**
```
Command: BOX
Specify first corner or [Center]: 0,0,0
Specify other corner or [Cube/Length]: 100,50,0
Specify height or [2Point]: 2P
Specify first point: 0,0,0
Specify second point: .Z (filtro para capturar Z de otro objeto)
of (selecciona punto a la altura deseada)
(need XY): 0,0
```

**Aplicación:** Igualar altura de objetos existentes.

### 1.7 Propiedades Paramétricas del Box

Una vez creado, puedes modificar el Box seleccionándolo y usando el **Properties palette** (Ctrl+1):

**Propiedades editables:**
- **Length:** Largo en dirección X
- **Width:** Ancho en dirección Y
- **Height:** Altura en dirección Z
- **Position X/Y/Z:** Ubicación de la esquina base

Modificar estos valores actualiza el sólido dinámicamente (mantiene historia paramétrica).

## 2. Comando CYLINDER (Cilindro)

### 2.1 Descripción General

El comando **CYLINDER** crea un sólido cilíndrico con base circular o elíptica.

**Comando:** `CYLINDER`
**Ribbon:** Home tab → Modeling panel → Cylinder

### 2.2 Método Estándar: Radio y Altura

**Procedimiento:**
```
Command: CYLINDER
Specify base center point or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 50
Specify height or [2Point/Axis endpoint]: 100
```

Resultado: Cilindro con radio 50, altura 100, base en origen.

![Cylinder con radio y altura](../imagenes/cylinder-radio-altura.png)

### 2.3 Opción Diameter (Diámetro)

Especifica el tamaño mediante diámetro en lugar de radio.

**Procedimiento:**
```
Command: CYLINDER
Specify base center point or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: D
Specify base diameter: 100 (diámetro en lugar de radio)
Specify height or [2Point/Axis endpoint]: 150
```

### 2.4 Opción 3P (Tres Puntos)

Define la base circular mediante tres puntos en su perímetro.

**Procedimiento:**
```
Command: CYLINDER
Specify base center point or [3P/2P/Ttr/Elliptical]: 3P
Specify first point on base circle: (punto 1)
Specify second point on base circle: (punto 2)
Specify third point on base circle: (punto 3)
Specify height or [2Point/Axis endpoint]: 80
```

**Aplicación:** Cuando conoces puntos en el perímetro pero no el centro.

### 2.5 Opción Elliptical (Cilindro Elíptico)

Crea cilindro con base elíptica en lugar de circular.

**Procedimiento:**
```
Command: CYLINDER
Specify base center point or [3P/2P/Ttr/Elliptical]: E
Specify center point of ellipse: 0,0,0
Specify endpoint of first axis: 100,0,0 (semieje mayor)
Specify endpoint of second axis or [Rotation]: 0,50,0 (semieje menor)
Specify height or [2Point/Axis endpoint]: 75
```

Resultado: Cilindro elíptico con ejes de 100 y 50 unidades, altura 75.

**Aplicación:** Columnas ovaladas, tuberías elípticas.

### 2.6 Opción Axis Endpoint

Define altura y dirección mediante un punto de extremo del eje.

**Procedimiento:**
```
Command: CYLINDER
Specify base center point or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 30
Specify height or [2Point/Axis endpoint]: A
Specify axis endpoint: 50,50,100
```

Resultado: Cilindro inclinado desde (0,0,0) hasta (50,50,100), radio 30.

**Ventaja:** Crea cilindros en cualquier orientación, no solo verticales.

## 3. Comando SPHERE (Esfera)

### 3.1 Descripción General

El comando **SPHERE** crea un sólido esférico perfecto.

**Comando:** `SPHERE`
**Ribbon:** Home tab → Modeling panel → Sphere

### 3.2 Método Estándar: Centro y Radio

**Procedimiento:**
```
Command: SPHERE
Specify center point or [3P/2P/Ttr]: 0,0,0
Specify radius or [Diameter]: 75
```

Resultado: Esfera con radio 75, centrada en origen.

### 3.3 Opción Diameter

**Procedimiento:**
```
Command: SPHERE
Specify center point or [3P/2P/Ttr]: 50,50,50
Specify radius or [Diameter]: D
Specify diameter: 100
```

### 3.4 Opción 3P (Tres Puntos)

Define la esfera mediante tres puntos en su superficie.

**Procedimiento:**
```
Command: SPHERE
Specify center point or [3P/2P/Ttr]: 3P
Specify first point: (punto 1)
Specify second point: (punto 2)
Specify third point: (punto 3)
```

Los tres puntos determinan el tamaño y ubicación de la esfera.

### 3.5 Opción 2P (Dos Puntos - Diámetro)

Define la esfera mediante dos puntos opuestos en su diámetro.

**Procedimiento:**
```
Command: SPHERE
Specify center point or [3P/2P/Ttr]: 2P
Specify first end point of diameter: 0,0,0
Specify second end point of diameter: 100,100,100
```

Resultado: Esfera con diámetro desde (0,0,0) hasta (100,100,100).

### 3.6 Opción Ttr (Tangente-Tangente-Radio)

Crea esfera tangente a dos objetos con radio especificado.

**Procedimiento:**
```
Command: SPHERE
Specify center point or [3P/2P/Ttr]: T
Specify point on object for first tangent: (selecciona objeto 1)
Specify point on object for second tangent: (selecciona objeto 2)
Specify radius: 50
```

**Aplicación:** Bolas de rodamiento, articulaciones esféricas.

## 4. Comando CONE (Cono)

### 4.1 Descripción General

El comando **CONE** crea un sólido cónico que se estrecha desde una base circular hasta un vértice.

**Comando:** `CONE`
**Ribbon:** Home tab → Modeling panel → Cone

### 4.2 Método Estándar

**Procedimiento:**
```
Command: CONE
Specify base center point or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 50
Specify height or [2Point/Axis endpoint/Top radius]: 100
```

Resultado: Cono con base radio 50, altura 100, vértice en punta.

![Cone estándar](../imagenes/cone-estandar.png)

### 4.3 Opción Top Radius (Cono Truncado)

Crea un cono truncado con radio superior diferente de cero.

**Procedimiento:**
```
Command: CONE
Specify base center point or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 60
Specify height or [2Point/Axis endpoint/Top radius]: T
Specify top radius: 20
Specify height or [2Point/Axis endpoint]: 80
```

Resultado: Cono truncado, base radio 60, top radio 20, altura 80.

**Aplicación:** Embudos, reducción de tuberías, soportes cónicos.

### 4.4 Opción Elliptical

Crea cono con base elíptica.

**Procedimiento:**
```
Command: CONE
Specify base center point or [3P/2P/Ttr/Elliptical]: E
Specify center point of ellipse: 0,0,0
Specify endpoint of first axis: 80,0,0
Specify endpoint of second axis or [Rotation]: 0,40,0
Specify height or [2Point/Axis endpoint/Top radius]: 100
```

### 4.5 Opción Axis Endpoint

Define altura y orientación mediante punto final del eje.

**Procedimiento:**
```
Command: CONE
Specify base center point or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 40
Specify height or [2Point/Axis endpoint/Top radius]: A
Specify axis endpoint: 60,60,120
```

Resultado: Cono inclinado desde origen hasta (60,60,120).

## 5. Comando PYRAMID (Pirámide)

### 5.1 Descripción General

El comando **PYRAMID** crea sólidos piramidales con bases de 3 a 32 lados.

**Comando:** `PYRAMID`
**Ribbon:** Home tab → Modeling panel → Pyramid

### 5.2 Método Estándar

**Procedimiento:**
```
Command: PYRAMID
Specify center point of base or [Edge/Sides]: 0,0,0
Specify base radius or [Inscribed]: 50
Specify height or [2Point/Axis endpoint/Top radius]: 100
```

Resultado: Pirámide cuadrada (4 lados por defecto) con radio base 50, altura 100.

### 5.3 Opción Sides (Número de Lados)

Cambia el número de lados de la base.

**Procedimiento:**
```
Command: PYRAMID
Specify center point of base or [Edge/Sides]: S
Enter number of sides <4>: 6
Specify center point of base or [Edge/Sides]: 0,0,0
Specify base radius or [Inscribed]: 60
Specify height or [2Point/Axis endpoint/Top radius]: 90
```

Resultado: Pirámide hexagonal.

**Rango válido:** 3 a 32 lados.

### 5.4 Opción Top Radius (Pirámide Truncada)

**Procedimiento:**
```
Command: PYRAMID
Specify center point of base or [Edge/Sides]: S
Enter number of sides <4>: 4
Specify center point of base or [Edge/Sides]: 0,0,0
Specify base radius or [Inscribed]: 70
Specify height or [2Point/Axis endpoint/Top radius]: T
Specify top radius: 30
Specify height or [2Point/Axis endpoint]: 80
```

Resultado: Pirámide cuadrada truncada.

**Aplicación:** Estructuras mayas, monumentos, bases arquitectónicas.

### 5.5 Opción Edge

Define la base mediante longitud de arista en lugar de radio.

**Procedimiento:**
```
Command: PYRAMID
Specify center point of base or [Edge/Sides]: E
Specify first endpoint of edge: 0,0,0
Specify second endpoint of edge: 100,0,0
Specify height or [2Point/Axis endpoint/Top radius]: 120
```

## 6. Comando TORUS (Toroide)

### 6.1 Descripción General

El comando **TORUS** crea un sólido toroidal (forma de dona) definido por dos radios.

**Comando:** `TORUS`
**Ribbon:** Home tab → Modeling panel → Torus

### 6.2 Método Estándar

**Procedimiento:**
```
Command: TORUS
Specify center point or [3P/2P/Ttr]: 0,0,0
Specify radius or [Diameter]: 80 (radio del tubo imaginario central)
Specify tube radius or [2Point/Diameter]: 20 (radio del tubo que forma el toroide)
```

Resultado: Toroide tipo dona, radio central 80, radio del tubo 20.

![Torus con dos radios](../imagenes/torus-radios.png)

**Terminología:**
- **Torus radius (primer radio):** Radio desde el centro del toroide hasta el centro del tubo
- **Tube radius (segundo radio):** Radio del tubo que forma el toroide

### 6.3 Opción Diameter para Ambos Radios

**Procedimiento:**
```
Command: TORUS
Specify center point or [3P/2P/Ttr]: 0,0,0
Specify radius or [Diameter]: D
Specify diameter: 160 (diámetro del tubo central)
Specify tube radius or [2Point/Diameter]: D
Specify tube diameter: 40 (diámetro del tubo)
```

### 6.4 Torus Autointerceptado

Si el tube radius es mayor que el torus radius, se crea un toroide que se intercepta a sí mismo (forma de pelota de rugby con depresión central).

**Ejemplo:**
```
Command: TORUS
Specify center point or [3P/2P/Ttr]: 0,0,0
Specify radius or [Diameter]: 30 (radio central)
Specify tube radius or [2Point/Diameter]: 50 (radio del tubo > radio central)
```

Resultado: Toroide autointerceptado.

**Aplicación:** Formas orgánicas, objetos de diseño industrial.

### 6.5 Opción 3P, 2P, Ttr

Similar a otras primitivas, permite definir el centro del toroide mediante:
- **3P:** Tres puntos
- **2P:** Dos puntos
- **Ttr:** Tangente-tangente-radio

## 7. Propiedades Paramétricas de Primitivas

### 7.1 Historia Paramétrica

Todas las primitivas 3D en AutoCAD 2026 mantienen **historia paramétrica** por defecto. Esto significa que puedes editarlas después de creación modificando sus parámetros originales.

### 7.2 Properties Palette

**Acceso:** Selecciona primitiva → Ctrl+1 (o clic derecho → Properties)

**Propiedades editables según primitiva:**

**BOX:**
- Length, Width, Height
- Position X, Y, Z

**CYLINDER:**
- Base radius (o Diameter)
- Height
- Base center X, Y, Z

**SPHERE:**
- Radius (o Diameter)
- Center X, Y, Z

**CONE:**
- Base radius
- Top radius (para conos truncados)
- Height

**PYRAMID:**
- Number of sides
- Base radius
- Top radius
- Height

**TORUS:**
- Torus radius
- Tube radius
- Center X, Y, Z

### 7.3 Edición por Grips

Selecciona una primitiva para ver **grips** (puntos de control):
- **Grips de arista:** Cambian dimensiones (largo, ancho, alto)
- **Grip de ubicación:** Mueve la primitiva
- **Grips especiales:** (según tipo de primitiva)

Arrastra grips para modificar geometría dinámicamente.

### 7.4 Desactivar Historia Paramétrica

Si no necesitas editar parámetros después de creación:

**Variable de sistema:** `DELOBJ`
- `DELOBJ = 0`: Mantiene objetos originales después de operaciones
- `DELOBJ = 1`: Elimina objetos originales (primitivas pierden historia)

## 8. Aplicaciones Prácticas por Primitiva

### BOX
- Edificios básicos, habitaciones
- Muebles (mesas, gabinetes)
- Bases y fundaciones
- Componentes mecánicos rectangulares

### CYLINDER
- Columnas arquitectónicas
- Tuberías y ductos
- Ejes mecánicos
- Tanques cilíndricos

### SPHERE
- Domos esféricos
- Rodamientos y bolas
- Tanques esféricos
- Elementos decorativos

### CONE
- Techos cónicos
- Embudos y tolvas
- Reducciones de tuberías
- Soportes cónicos

### PYRAMID
- Estructuras piramidales (arquitectura)
- Monumentos
- Bases decorativas
- Techos piramidales

### TORUS
- Sellos toroidales (O-rings)
- Elementos decorativos
- Componentes mecánicos toroidales
- Piezas de diseño industrial

## 9. Ejercicios Prácticos

### Ejercicio 1: Mesa Simple
Usa primitivas para modelar una mesa:
- 4 CYLINDERS para patas (radio 2, altura 70)
- 1 BOX para cubierta (120×80×3)

### Ejercicio 2: Tanque de Almacenamiento
- 1 CYLINDER vertical (radio 50, altura 100)
- 1 CONE invertido como base (base radius 50, height 20)
- 1 SPHERE como techo hemisférico (radio 50)

### Ejercicio 3: Torre con Cúpula
- 1 CYLINDER como torre (radio 30, altura 150)
- 1 PYRAMID hexagonal como base (6 sides, radius 40, height 20)
- 1 SPHERE truncada como cúpula (usar operaciones booleanas posteriormente)

## Resumen

En esta lección has aprendido:

- BOX crea cajas rectangulares con múltiples métodos de especificación
- CYLINDER genera cilindros circulares o elípticos
- SPHERE crea esferas perfectas mediante varios métodos
- CONE produce conos completos o truncados
- PYRAMID genera pirámides de 3 a 32 lados
- TORUS crea formas toroidales con dos radios
- Todas las primitivas mantienen propiedades paramétricas editables
- Primitivas son bloques constructivos para modelos complejos

## Próxima Lección

En la Lección 5, aprenderás las herramientas POLYSOLID y 3D POLYLINE para modelado lineal tridimensional, especialmente útil en arquitectura para crear muros y estructuras.

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Fundamental
**Prerequisito para:** Módulo 2 - Operaciones con Sólidos
