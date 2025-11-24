# Lección 7: Extrude y Presspull

## Introducción

La extrusión es el proceso de convertir un perfil bidimensional en un sólido tridimensional "estirándolo" perpendicularmente a su plano. Es probablemente la operación más fundamental y utilizada en modelado 3D, aplicable en arquitectura (muros, losas), diseño mecánico (piezas extruidas), y diseño industrial (perfiles complejos).

AutoCAD 2026 ofrece dos herramientas principales para extrusión: **EXTRUDE** (extrusión paramétrica con opciones avanzadas) y **PRESSPULL** (extrusión directa e intuitiva). Esta lección cubre ambas herramientas en profundidad, con énfasis en opciones de taper (cónico) y path (trayectoria).

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Extruir perfiles 2D cerrados para crear sólidos 3D
- Aplicar taper (ángulo cónico) en extrusiones
- Extruir perfiles a lo largo de trayectorias curvas (path)
- Usar PRESSPULL para extrusión rápida e interactiva
- Identificar perfiles válidos vs inválidos para extrusión
- Combinar extrusión con operaciones booleanas
- Optimizar workflow de modelado con extrusión

## 1. Comando EXTRUDE

### 1.1 Fundamentos de EXTRUDE

**Comando:** `EXTRUDE`
**Ribbon:** Home tab → Modeling panel → Extrude

**Requisito principal:** Perfil 2D cerrado (PLINE cerrada, CIRCLE, ELLIPSE, REGION, etc.)

**Sintaxis básica:**
```
Command: EXTRUDE
Select objects to extrude or [MOde]: (selecciona perfil cerrado)
Specify height of extrusion or [Direction/Path/Taper angle/Expression]: (altura)
```

![Concepto básico de extrusión](../imagenes/extrude-concepto-basico.png)

### 1.2 Extrusión Básica con Altura

**Procedimiento:**
```
1. Dibuja perfil 2D cerrado (ejemplo: CIRCLE de radio 50)
2. Comando: EXTRUDE
3. Select objects: (selecciona círculo)
4. Specify height of extrusion: 100
```

Resultado: Cilindro de radio 50, altura 100 (equivalente a CYLINDER pero creado mediante extrusión).

**Dirección de extrusión:**
- Altura positiva: Extrude en dirección Z positiva del UCS actual
- Altura negativa: Extrude en dirección Z negativa

### 1.3 Opción Direction (Dirección Específica)

Permite especificar la dirección de extrusión mediante dos puntos.

**Procedimiento:**
```
Command: EXTRUDE
Select objects: (selecciona perfil)
Specify height or [Direction/Path/Taper/Expression]: D
Specify start point of direction: 0,0,0
Specify end point of direction: 100,50,75
```

Resultado: Perfil se extrude desde start point hacia end point, distancia = distancia entre puntos.

**Aplicación:** Extrusiones inclinadas, no necesariamente perpendiculares al perfil.

### 1.4 Opción Taper Angle (Ángulo de Conicidad)

Crea extrusiones cónicas, estrechándose o ensanchándose a lo largo de la altura.

**Sintaxis:**
```
Command: EXTRUDE
Select objects: (selecciona perfil)
Specify height or [Direction/Path/Taper/Expression]: T
Specify angle of taper for extrusion or [Expression] <0>: 10 (ángulo en grados)
Specify height of extrusion or [Direction/Path/Expression]: 100
```

**Comportamiento del taper:**
- **Ángulo positivo (ej: +10°):** Perfil se estrecha hacia arriba (cono)
- **Ángulo negativo (ej: -10°):** Perfil se ensancha hacia arriba (cono invertido)
- **Rango válido:** Generalmente -90° a +90°

![Extrusión con taper positivo y negativo](../imagenes/extrude-taper-comparison.png)

**Aplicación práctica:**
- Moldes de fundición (requieren taper para desmoldado)
- Recipientes cónicos
- Piezas mecánicas con conicidad

**Ejemplo: Embudo**
```
1. Dibuja CIRCLE de radio 80
2. EXTRUDE → Taper angle: 20 → Height: 150
Resultado: Embudo cónico
```

### 1.5 Opción Path (Trayectoria)

Extrude el perfil a lo largo de una trayectoria curva (LINE, ARC, PLINE, SPLINE, etc.).

**Requisitos:**
- Trayectoria puede ser abierta o cerrada
- Trayectoria puede ser 2D o 3D
- Perfil debe estar perpendicular a la trayectoria inicial (AutoCAD lo ajusta automáticamente)

**Procedimiento:**
```
Command: EXTRUDE
Select objects: (selecciona perfil)
Specify height or [Direction/Path/Taper/Expression]: P
Select extrusion path or [Taper]: (selecciona trayectoria)
```

![Extrusión a lo largo de trayectoria curva](../imagenes/extrude-path-ejemplo.png)

**Ejemplo: Tubería Curva**
```
1. Dibuja CIRCLE de radio 10 (perfil de tubería)
2. Dibuja ARC o 3DPOLY como trayectoria curva
3. EXTRUDE → Path → selecciona trayectoria
Resultado: Tubería siguiendo la trayectoria curva
```

**Nota importante:** El perfil se barre (sweep) a lo largo de la trayectoria, manteniéndose perpendicular en cada punto. Esto es similar al comando SWEEP (Lección 8) pero con menos opciones de control.

### 1.6 Perfiles Válidos para EXTRUDE

**Perfiles válidos (crean sólidos):**
- PLINE cerrada
- CIRCLE
- ELLIPSE
- POLYGON
- REGION (múltiples curvas cerradas combinadas)
- BOUNDARY (contorno cerrado automático)

**Perfiles inválidos (error o crean superficies):**
- Líneas abiertas (LINE simple)
- PLINE abierta
- Curvas con auto-intersecciones
- Curvas que no están en un plano único

**Solución para perfiles complejos:**
1. Comando `REGION` → selecciona todas las curvas cerradas
2. Región combina múltiples elementos en un objeto extruible
3. EXTRUDE → selecciona región

### 1.7 Extrusión de Regiones con Islas

**Región con isla:** Perfil externo con perfil interno (ej: arandela)

**Procedimiento:**
```
1. Dibuja CIRCLE grande (radio 50)
2. Dibuja CIRCLE pequeño concéntrico (radio 20)
3. Comando: REGION
4. Select objects: (selecciona ambos círculos)
5. EXTRUDE → Height: 10
```

Resultado: Sólido tipo arandela (disco con agujero central).

Las regiones reconocen automáticamente islas (perfiles internos) y las extrude correctamente.

## 2. Comando PRESSPULL

### 2.1 Fundamentos de PRESSPULL

**Comando:** `PRESSPULL`
**Ribbon:** Home tab → Modeling panel → Press/Pull
**Atajo:** `PRESS`

PRESSPULL es una versión simplificada e interactiva de EXTRUDE. Detecta automáticamente áreas cerradas (incluso si no son objetos únicos) y las extrude con un solo clic.

**Diferencia clave con EXTRUDE:**
- EXTRUDE requiere objeto cerrado preexistente
- PRESSPULL detecta áreas cerradas automáticamente (boundary detection)

### 2.2 Uso Básico de PRESSPULL

**Procedimiento:**
```
Command: PRESSPULL
Click inside bounded areas or [Multiple]: (clic dentro de área cerrada)
Specify extrusion height or [Multiple]: (arrastra mouse o ingresa valor)
```

**Ejemplo:**
```
1. Dibuja rectángulo con 4 LINE (no PLINE, líneas separadas)
2. PRESSPULL
3. Clic dentro del rectángulo (AutoCAD detecta el boundary)
4. Arrastra hacia arriba o ingresa: 50
```

Resultado: Sólido extruido aunque el perfil no era un objeto único.

![PRESSPULL detectando boundaries automáticamente](../imagenes/presspull-boundary-detection.png)

### 2.3 Opción Multiple

Permite extruir múltiples áreas en una sola operación.

**Procedimiento:**
```
Command: PRESSPULL
Click inside bounded areas or [Multiple]: M
Click inside bounded areas or [Undo]: (clic en área 1)
Click inside bounded areas or [Undo]: (clic en área 2)
Click inside bounded areas or [Undo]: (clic en área 3)
Click inside bounded areas or [Undo]: (Enter cuando termines de seleccionar)
Specify extrusion height: 30
```

Todas las áreas seleccionadas se extruyen simultáneamente a la misma altura.

### 2.4 PRESSPULL en Caras de Sólidos Existentes

PRESSPULL puede extruir o deprimir caras de sólidos ya existentes.

**Procedimiento:**
```
1. Crea BOX de 100×100×50
2. Dibuja CIRCLE de radio 20 sobre la cara superior del box
3. PRESSPULL
4. Clic dentro del círculo
5. Arrastra hacia abajo (valor negativo, ej: -20)
```

Resultado: Agujero cilíndrico en el box (equivalente a crear CYLINDER y SUBTRACT).

**Ventaja:** Modelado directo sin necesidad de primitivas adicionales ni operaciones booleanas.

### 2.5 PRESSPULL vs EXTRUDE: Cuándo Usar Cada Uno

| Criterio | EXTRUDE | PRESSPULL |
|---|---|---|
| Perfil debe ser objeto único | Sí | No (boundary detection) |
| Taper (conicidad) | Sí | No |
| Path (trayectoria) | Sí | No |
| Rapidez para perfiles simples | Medio | Rápido |
| Control preciso | Alto | Medio |
| Modelado directo en sólidos | No | Sí |
| Aplicación típica | Modelado planificado | Modelado rápido/directo |

**Recomendación:**
- **Usa EXTRUDE** para modelado preciso con taper o path
- **Usa PRESSPULL** para modelado rápido de conceptos o modificaciones directas

## 3. Aplicaciones Prácticas

### 3.1 Arquitectura: Losas y Muros

**Losa de entrepiso:**
```
1. Dibuja PLINE con contorno de losa (puede incluir islas para aberturas)
2. REGION para crear área sólida
3. EXTRUDE → Height: 25 (grosor de losa 25cm)
```

**Muros con aberturas:**
```
1. Dibuja rectángulo exterior (perímetro de muro)
2. Dibuja rectángulos interiores (puertas, ventanas)
3. REGION → selecciona todos los rectángulos
4. EXTRUDE → Height: 270 (altura de muro)
```

### 3.2 Diseño Mecánico: Bridas y Conectores

**Brida de tubería:**
```
1. Dibuja círculo grande (brida exterior)
2. Dibuja círculo mediano concéntrico (agujero de tubería)
3. Dibuja 4-6 círculos pequeños (agujeros de tornillos) en patrón
4. REGION → selecciona todos
5. EXTRUDE → Height: 15 (grosor de brida)
```

### 3.3 Diseño Industrial: Perfiles Complejos

**Perfil estructural en I (viga):**
```
1. Dibuja perfil de I beam con PLINE
2. EXTRUDE → Height: 5000 (longitud de viga)
```

**Moldura arquitectónica:**
```
1. Dibuja perfil de moldura (sección transversal)
2. Dibuja trayectoria (PLINE siguiendo perímetro de techo)
3. EXTRUDE → Path → selecciona trayectoria
```

## 4. Errores Comunes y Soluciones

### Error 1: "Cannot extrude object"
**Causa:** Perfil no es cerrado o tiene auto-intersecciones.
**Solución:** Verifica que la PLINE esté cerrada (comando PEDIT → Close). Elimina auto-intersecciones.

### Error 2: Extrusión en dirección incorrecta
**Causa:** UCS mal orientado.
**Solución:** Ajusta UCS o usa opción Direction para especificar vector de extrusión.

### Error 3: PRESSPULL no detecta área
**Causa:** Líneas no forman boundary cerrado perfectamente.
**Solución:** Verifica que todas las líneas se toquen en los extremos (usa OSNAP Endpoint). Alterna a REGION + EXTRUDE.

### Error 4: Taper angle demasiado grande
**Causa:** Ángulo de taper causa que el perfil colapse antes de llegar a la altura especificada.
**Solución:** Reduce taper angle o aumenta tamaño del perfil base.

## Resumen

En esta lección has aprendido:

- EXTRUDE convierte perfiles 2D cerrados en sólidos 3D
- Opción Taper crea extrusiones cónicas
- Opción Path extrude perfiles a lo largo de trayectorias curvas
- PRESSPULL detecta boundaries automáticamente para extrusión rápida
- REGION combina múltiples curvas en perfil extruible
- Perfiles deben ser cerrados y sin auto-intersecciones
- PRESSPULL permite modelado directo en caras de sólidos existentes

## Próxima Lección

En la Lección 8, aprenderás REVOLVE (revolución de perfiles alrededor de ejes) y SWEEP (barrido con más control que EXTRUDE path), dos operaciones fundamentales para geometría simétrica radial y formas orgánicas complejas.

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Intermedia
**Prerequisito para:** Lección 8 - Revolve y Sweep
