# Lección 9: Loft y Operaciones Booleanas

## Introducción

LOFT crea transiciones suaves entre múltiples perfiles (secciones transversales), ideal para formas orgánicas y aerodinámicas. Las operaciones booleanas (UNION, SUBTRACT, INTERSECT) son el corazón del modelado constructivo de sólidos (CSG - Constructive Solid Geometry), permitiendo combinar, restar e intersectar sólidos para crear geometría compleja.

## Objetivos

- Crear sólidos loft interpolando entre 2+ secciones transversales
- Aplicar guías (guides) y trayectorias en loft
- Unir múltiples sólidos con UNION
- Crear aberturas y huecos con SUBTRACT
- Calcular volúmenes comunes con INTERSECT
- Aplicar estrategias de modelado constructivo

## 1. Comando LOFT

### 1.1 Fundamentos

**Comando:** `LOFT`

Interpola superficie suave entre múltiples secciones transversales (cross-sections).

**Requisitos:**
- Mínimo 2 secciones transversales
- Secciones pueden ser cerradas (sólido) o abiertas (superficie)
- Secciones deben estar en planos paralelos o diferentes elevaciones

### 1.2 Loft Básico

```
Command: LOFT
Select cross sections in lofting order or [Point/Join multiple edges/MOde]: (selecciona perfil 1)
Select cross sections: (selecciona perfil 2)
Select cross sections: (selecciona perfil 3 opcional)
Select cross sections: (Enter cuando termines)
Enter an option [Guides/Path/Cross sections only/Settings] <Cross sections only>: (Enter para loft directo)
```

![Loft entre tres secciones](../imagenes/loft-tres-secciones.png)

**Orden de selección importa:** AutoCAD conecta secciones en el orden seleccionado.

### 1.3 Ejemplo: Botella

```
1. Dibuja CIRCLE de radio 20 en Z=0 (base)
2. Dibuja CIRCLE de radio 30 en Z=50 (cuerpo ancho)
3. Dibuja CIRCLE de radio 25 en Z=100 (hombro)
4. Dibuja CIRCLE de radio 10 en Z=130 (cuello)
5. LOFT → selecciona círculos en orden de abajo hacia arriba
```

Resultado: Botella con transición suave entre secciones.

### 1.4 Opción Guides (Guías)

Guías controlan la trayectoria de transición entre secciones.

```
LOFT → selecciona secciones → Enter
Enter option: G (Guides)
Select guide curves: (selecciona líneas o splines que conectan secciones)
```

**Requisitos de guías:**
- Deben tocar todas las secciones transversales
- Típicamente SPLINE o 3DPOLY
- Múltiples guías para mejor control

**Aplicación:** Fuselajes de aviones, cascos de barcos, diseño automotriz.

### 1.5 Opción Path (Trayectoria)

Define trayectoria central del loft.

```
LOFT → selecciona secciones → Enter
Enter option: P (Path)
Select path curve: (selecciona línea, arc, spline como trayectoria central)
```

**Diferencia con Guides:** Path es una sola curva central, guides son múltiples curvas laterales.

### 1.6 Opción Settings (Configuración)

```
LOFT → Enter option: Settings (o S)
```

**Opciones de loft settings:**
- **Ruled:** Transición lineal (facetada)
- **Smooth Fit:** Transición suave (default)
- **Normal to:** Control de tangencia en secciones inicial/final
  - Start cross section
  - End cross section
  - Start and end cross sections
  - All cross sections

**Draft angles:** Ángulos de salida en inicio/fin (similar a taper en EXTRUDE).

## 2. Operaciones Booleanas

### 2.1 Concepto de CSG

**Constructive Solid Geometry (CSG):** Modelado mediante combinación de primitivas usando operaciones booleanas.

**Tres operaciones:**
- **UNION (∪):** Combina volúmenes (A + B)
- **SUBTRACT (−):** Resta volúmenes (A − B)
- **INTERSECT (∩):** Volumen común (A ∩ B)

![Operaciones booleanas visualizadas](../imagenes/booleanas-venn.png)

### 2.2 Comando UNION

**Comando:** `UNION`

Combina dos o más sólidos en un solo sólido.

```
Command: UNION
Select objects: (selecciona sólido 1)
Select objects: (selecciona sólido 2)
Select objects: (selecciona sólido 3, etc.)
Select objects: (Enter)
```

Resultado: Todos los sólidos seleccionados se fusionan en uno solo.

**Aplicaciones:**
- Consolidar geometría compleja en un solo objeto
- Preparar modelo para exportación (STL, STEP)
- Simplificar jerarquía de objetos

**Ejemplo: Mueble**
```
1. Crea 4 CYLINDER para patas (radio 2, altura 70)
2. Crea BOX para cubierta (120×80×3)
3. UNION → selecciona los 5 objetos
```

Resultado: Mesa como objeto único.

### 2.3 Comando SUBTRACT

**Comando:** `SUBTRACT`

Resta volumen de un sólido de otro (creación de huecos, aberturas, agujeros).

```
Command: SUBTRACT
Select solids, surfaces, and regions to subtract from: (selecciona sólido base)
Select solids, surfaces, and regions to subtract: (selecciona sólido a restar)
Select solids, surfaces, and regions to subtract: (selecciona más sólidos a restar)
Select objects: (Enter)
```

**Importante:**
- **Primera selección:** Sólido del cual restar (permanece)
- **Segunda selección:** Sólido(s) a restar (desaparecen)

![SUBTRACT creando agujero cilíndrico](../imagenes/subtract-agujero.png)

**Aplicaciones más comunes:**
- Agujeros de tornillos: SUBTRACT cilindros pequeños
- Puertas y ventanas: SUBTRACT boxes de muros
- Cavidades internas: SUBTRACT forma de cavidad del sólido principal

**Ejemplo: Carcasa con agujeros**
```
1. Crea BOX de 100×80×50 (carcasa)
2. Crea CYLINDER de radio 5, altura 60 en posición para agujero
3. COPY el cilindro para crear 4 agujeros de esquina
4. SUBTRACT → selecciona BOX → selecciona los 4 cilindros
```

### 2.4 Comando INTERSECT

**Comando:** `INTERSECT`

Conserva solo el volumen común compartido por todos los sólidos seleccionados.

```
Command: INTERSECT
Select objects: (selecciona sólido 1)
Select objects: (selecciona sólido 2)
Select objects: (selecciona más sólidos)
Select objects: (Enter)
```

Resultado: Solo el volumen donde TODOS los sólidos se intersectan.

**Aplicaciones:**
- Análisis de interferencias
- Creación de formas complejas por intersección
- Cálculo de volúmenes de intersección

**Ejemplo: Intersección de cilindros**
```
1. Crea CYLINDER vertical (radio 30, altura 100) en 0,0,0
2. Crea CYLINDER horizontal (radio 30, altura 100) rotado 90° en X
3. INTERSECT → selecciona ambos cilindros
```

Resultado: Solo la parte donde ambos cilindros se cruzan (forma como lente).

### 2.5 Orden de Operaciones Booleanas

Para modelos complejos, el orden importa:

**Workflow recomendado:**
1. **Crear todas las primitivas** necesarias (boxes, cylinders, spheres)
2. **UNION componentes principales** que forman el cuerpo base
3. **SUBTRACT aberturas y huecos** del cuerpo unido
4. **Aplicar modificadores** (FILLET3D, CHAMFER3D - Lección 10)

**Ejemplo: Bloque de motor**
```
1. BOX principal (bloque base)
2. CYLINDER (cilindro de motor) - UNION con base
3. Múltiples CYLINDER pequeños (agujeros de tornillos) - posicionar
4. BOX (cavidad interna) - posicionar
5. UNION todos los componentes principales
6. SUBTRACT todos los agujeros y cavidades
```

## 3. Estrategias de Modelado Constructivo

### 3.1 Additive Modeling (Aditivo)

Construir por adición de primitivas.

```
Base → +Componente1 (UNION) → +Componente2 (UNION) → ...
```

**Ideal para:** Ensamblajes, estructuras compuestas.

### 3.2 Subtractive Modeling (Sustractivo)

Comenzar con bloque sólido, restar para crear forma.

```
Bloque sólido → -Cavidad1 (SUBTRACT) → -Cavidad2 (SUBTRACT) → ...
```

**Ideal para:** Tallados, moldes, cavidades internas.

### 3.3 Hybrid Modeling (Híbrido)

Combinar ambas estrategias.

```
Base → +Componentes (UNION) → -Aberturas (SUBTRACT) → +Detalles (UNION)
```

**Más común en práctica profesional.**

## 4. Verificación de Geometría Sólida

### 4.1 Comando SOLIDEDIT

Verifica validez de sólidos después de operaciones booleanas.

```
Command: SOLIDEDIT
Enter a solids editing option [Face/Edge/Body/Undo/eXit] <eXit>: Body
Enter a body editing option [Imprint/seParate solids/Shell/cLean/Check/Undo/eXit] <eXit>: Check
Select a 3D solid: (selecciona sólido)
```

AutoCAD verifica si el sólido es válido (no tiene errores geométricos).

### 4.2 Comando MASSPROP

Calcula propiedades de masa (volumen, centro de masa, momentos de inercia).

```
Command: MASSPROP
Select objects: (selecciona sólido)
```

Muestra:
- **Volume:** Volumen total
- **Bounding box:** Dimensiones de caja contenedora
- **Centroid:** Centro geométrico
- **Moments of inertia:** Para análisis estructural

Útil para verificar que operaciones booleanas funcionaron correctamente (volumen esperado vs obtenido).

## 5. Errores Comunes

### Error 1: SUBTRACT no funciona
**Causa:** Sólidos no se intersectan realmente.
**Solución:** Verifica en vista isométrica que sólidos se solapan donde esperas.

### Error 2: LOFT crea geometría retorcida
**Causa:** Secciones transversales no alineadas correctamente.
**Solución:** Alinea puntos iniciales de las secciones (comando PEDIT → Edit vertex para ajustar punto de inicio).

### Error 3: UNION crea objeto no sólido
**Causa:** Sólidos originales tienen errores.
**Solución:** Usa SOLIDEDIT → Body → Check en cada sólido antes de UNION.

## Resumen

- LOFT interpola suavemente entre 2+ secciones transversales
- Guides y Path proporcionan control adicional sobre transiciones loft
- UNION combina sólidos, SUBTRACT resta volúmenes, INTERSECT conserva volumen común
- Modelado constructivo (CSG) combina primitivas mediante booleanas
- Orden de operaciones importa: UNION primero, SUBTRACT después
- MASSPROP verifica volumen y propiedades de sólidos resultantes

## Próxima Lección

Lección 10 cubre modificaciones avanzadas de sólidos: SHELL (ahuecado), FILLET3D (redondeo de aristas), y CHAMFER3D (chaflanes), esenciales para diseño mecánico e industrial.

---

**Tiempo estimado:** 1 hora
**Dificultad:** Avanzada
