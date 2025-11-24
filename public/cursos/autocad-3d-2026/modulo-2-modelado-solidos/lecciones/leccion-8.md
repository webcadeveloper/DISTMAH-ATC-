# Lección 8: Revolve y Sweep

## Introducción

REVOLVE y SWEEP son operaciones fundamentales para crear geometría compleja a partir de perfiles 2D. REVOLVE rota un perfil alrededor de un eje (ideal para objetos simétricos radiales: jarrones, ejes mecánicos, domos). SWEEP arrastra un perfil a lo largo de una trayectoria con control avanzado de alineación y escala (tuberías, molduras, barandas).

## Objetivos

- Revolucionar perfiles alrededor de ejes con ángulos completos o parciales
- Crear sólidos de barrido con trayectorias 2D y 3D
- Aplicar opciones de alineación y escala en SWEEP
- Distinguir entre EXTRUDE path y SWEEP
- Modelar piezas de revolución mecánicas y elementos arquitectónicos curvos

## 1. Comando REVOLVE

### 1.1 Fundamentos

**Comando:** `REVOLVE`

Rota un perfil cerrado 2D alrededor de un eje para crear sólido de revolución.

**Requisitos:**
- Perfil cerrado (PLINE, CIRCLE, ELLIPSE, REGION)
- Eje de revolución (LINE, dos puntos, eje X/Y/Z del objeto)

### 1.2 Sintaxis Básica

```
Command: REVOLVE
Select objects to revolve: (selecciona perfil)
Specify axis start point or define axis by [Object/X/Y/Z] <Object>: (punto inicial de eje)
Specify axis endpoint: (punto final de eje)
Specify angle of revolution or [Start angle/Reverse/Expression] <360>: (ángulo, default 360°)
```

![Concepto de REVOLVE](../imagenes/revolve-concepto.png)

### 1.3 Ejemplo: Jarrón

```
1. Dibuja perfil de medio jarrón con PLINE (mitad derecha, cerrada)
2. Dibuja LINE vertical como eje de revolución (eje central del jarrón)
3. REVOLVE → selecciona perfil
4. Axis by Object → selecciona línea de eje
5. Angle: 360 (revolución completa)
```

Resultado: Jarrón simétrico 3D.

### 1.4 Opción Object (Eje como Objeto)

```
REVOLVE → Object → selecciona LINE, PLINE o arista de sólido como eje
```

**Más común y preciso que especificar dos puntos.**

### 1.5 Opción X/Y/Z (Ejes del UCS)

```
REVOLVE → X (revolve alrededor del eje X del UCS actual)
REVOLVE → Y (revolve alrededor del eje Y)
REVOLVE → Z (revolve alrededor del eje Z)
```

Útil cuando el eje coincide con ejes del UCS.

### 1.6 Ángulos Parciales

```
Specify angle of revolution: 90 (cuarto de revolución)
Specify angle of revolution: 180 (media revolución)
Specify angle of revolution: 270 (tres cuartos)
```

**Aplicación:** Sectores de cono, cuñas, piezas mecánicas parciales.

### 1.7 Opción Start Angle

```
REVOLVE → Start angle: S
Specify start angle <0>: 45
Specify included angle: 90
```

Revolución desde 45° hasta 135° (45° + 90°).

### 1.8 Aplicaciones de REVOLVE

**Arquitectura:**
- Domos y cúpulas
- Columnas con capiteles ornamentales
- Jarrones y recipientes decorativos

**Mecánica:**
- Ejes, poleas, engranajes
- Piezas torneadas
- Resortes (combinado con helix)

**Industrial:**
- Botellas, envases
- Componentes simétricos radiales
- Roscas (con helix como trayectoria)

## 2. Comando SWEEP

### 2.1 Fundamentos

**Comando:** `SWEEP`

Arrastra un perfil 2D a lo largo de una trayectoria, manteniendo orientación controlada.

**Diferencia con EXTRUDE path:**
- SWEEP: Más opciones (alignment, base point, scale, twist)
- EXTRUDE path: Más simple, menos control

### 2.2 Sintaxis Básica

```
Command: SWEEP
Select objects to sweep: (selecciona perfil)
Select sweep path or [Alignment/Base point/Scale/Twist]: (selecciona trayectoria)
```

![Concepto de SWEEP](../imagenes/sweep-concepto.png)

### 2.3 Ejemplo: Tubería Curva

```
1. Dibuja CIRCLE de radio 10 (perfil de tubería)
2. Dibuja 3DPOLY o ARC como trayectoria curva
3. SWEEP → selecciona círculo
4. Select path → selecciona trayectoria
```

Resultado: Tubería siguiendo trayectoria curva.

**Nota:** El perfil debe estar perpendicular a la trayectoria inicial. AutoCAD lo reorienta automáticamente si no lo está.

### 2.4 Opción Alignment

Controla si el perfil se alinea perpendicular a la trayectoria.

```
SWEEP → Alignment: A
Align sweep object perpendicular to path before sweep [Yes/No] <Yes>: Y
```

- **Yes (default):** Perfil siempre perpendicular a trayectoria (más común)
- **No:** Perfil mantiene orientación original (casos especiales)

### 2.5 Opción Base Point

Define punto del perfil que seguirá exactamente la trayectoria.

```
SWEEP → Base point: B
Specify base point: (selecciona punto en el perfil)
```

**Default:** Centro del perfil sigue la trayectoria.
**Custom:** Punto específico (ej: esquina del perfil) sigue la trayectoria.

**Aplicación:** Molduras donde la trayectoria es el borde superior o inferior, no el centro.

### 2.6 Opción Scale

Escala el perfil a lo largo de la trayectoria (perfil crece o decrece).

```
SWEEP → Scale: S
Enter scale factor or [Reference] <1.0>: 2.0
```

- **Scale < 1:** Perfil se reduce a lo largo de trayectoria
- **Scale > 1:** Perfil crece
- **Scale = 1:** Sin cambio de escala (default)

**Ejemplo:** Tubo que se ensancha de radio 10 a radio 20:
```
SWEEP → Scale: Reference
Specify reference scale: 10
Specify second scale: 20
```

### 2.7 Opción Twist

Rota el perfil a lo largo de la trayectoria (efecto de torsión).

```
SWEEP → Twist: T
Specify twist angle or [Bank] <0>: 360
```

- **Twist = 0:** Sin torsión
- **Twist = 360:** Una vuelta completa de torsión

**Aplicación:**
- Espirales decorativas
- Barras torsionadas
- Resortes helicoidales

### 2.8 Trayectorias Válidas

**Válidas:**
- LINE, ARC, CIRCLE
- PLINE (2D o 3D)
- SPLINE
- HELIX (para resortes)

**Inválidas:**
- Trayectorias con auto-intersecciones severas
- Trayectorias que cruzan el plano del perfil

## 3. Aplicaciones Prácticas

### 3.1 Barandilla de Escalera

```
1. Dibuja perfil de barandilla (sección transversal rectangular o circular)
2. Dibuja 3DPOLY siguiendo la escalera (con cambios de elevación)
3. SWEEP → selecciona perfil → selecciona 3DPOLY
```

### 3.2 Moldura Arquitectónica

```
1. Dibuja perfil ornamental de moldura
2. Dibuja PLINE siguiendo perímetro de habitación
3. SWEEP → Base point: (esquina superior del perfil) → selecciona PLINE
```

Moldura sigue el perímetro con borde superior alineado a la trayectoria.

### 3.3 Manguera o Cable

```
1. Dibuja CIRCLE pequeño (sección de manguera)
2. Dibuja SPLINE o 3DPOLY como trayectoria sinuosa
3. SWEEP → selecciona círculo → selecciona trayectoria
```

### 3.4 Resorte Helicoidal

```
1. Dibuja HELIX (comando especial para hélices)
2. Dibuja CIRCLE pequeño (alambre del resorte)
3. SWEEP → selecciona círculo → selecciona helix
```

**Comando HELIX:**
```
HELIX
Specify center point: 0,0,0
Specify base radius: 20
Specify top radius <20>: 20 (mismo radio = cilindro)
Specify height: 100
Specify turns <3>: 10
```

## 4. REVOLVE vs SWEEP vs EXTRUDE Path

| Aspecto | REVOLVE | SWEEP | EXTRUDE Path |
|---|---|---|---|
| Trayectoria | Circular (eje) | Cualquiera | Cualquiera |
| Control de orientación | Automático | Alto (alignment, base point) | Básico |
| Escala variable | No | Sí | No |
| Torsión | No | Sí | No |
| Aplicación | Simetría radial | Trayectorias complejas | Extrusión simple |
| Complejidad | Media | Alta | Baja |

## 5. Errores Comunes

### Error 1: "Path is not on the same plane as profile"
**Solución:** Perfil y trayectoria deben estar en planos compatibles. Ajusta UCS o usa SWEEP en lugar de EXTRUDE path.

### Error 2: Sweep crea geometría distorsionada
**Causa:** Trayectoria con curvas muy cerradas.
**Solución:** Suaviza trayectoria o reduce tamaño del perfil.

### Error 3: Revolve alrededor del eje incorrecto
**Solución:** Verifica eje de revolución. Usa opción Object para máxima precisión.

## Resumen

- REVOLVE crea sólidos de revolución rotando perfiles alrededor de ejes
- Ángulos parciales (90°, 180°, 270°) crean sectores
- SWEEP arrastra perfiles a lo largo de trayectorias con control avanzado
- Opciones de SWEEP: Alignment, Base point, Scale, Twist
- REVOLVE ideal para simetría radial, SWEEP para trayectorias complejas

## Próxima Lección

Lección 9 cubre LOFT (transiciones suaves entre perfiles) y operaciones booleanas (UNION, SUBTRACT, INTERSECT) para modelado constructivo de sólidos.

---

**Tiempo estimado:** 1 hora
**Dificultad:** Intermedia-Avanzada
