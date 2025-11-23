# Modulo 3: Modelado Avanzado y Toposolid

![Modelado Avanzado](./imagenes/modulo3-portada.png)

**Duracion:** 5 horas
**Nivel:** Intermedio-Avanzado
**Lecciones:** 6

---

## Descripcion del Modulo

Este modulo cubre elementos arquitectonicos avanzados, con enfasis especial en las **mejoras de Toposolid 2026** que incluyen subdivision de superficies, valores negativos para modelado de vialidades, y herramientas avanzadas de terreno. Aprend eras escaleras parametricas, muros cortina complejos, y modelado de sitio completo.

---

## Objetivos de Aprendizaje

- Crear escaleras parametricas complejas
- Modelar barandales y pasamanos personalizados
- Disenar muros cortina avanzados con paneles customizados
- **NUEVO 2026:** Trabajar con Toposolid subdivision
- **NUEVO 2026:** Usar valores negativos para vialidades
- Modelar terrenos complejos con plataformas
- Crear elementos de sitio (estacionamientos, senderos)

---

## Contenido del Modulo

### Leccion 1: Escaleras y Rampas (1h)
**Archivo:** [leccion-1-escaleras-rampas.md](./lecciones/leccion-1-escaleras-rampas.md)

- Stair by Component (parametrica)
- Stair by Sketch (personalizada)
- Straight Run, L-Shape, U-Shape
- Winder stairs (compensadas)
- Spiral stairs (caracol)
- Ramps (rampas)
- Landings (descansos)
- Nosing, Risers, Treads
- Calculation rules (normativa)
- Railings automaticos

**Ejercicio:** Escalera principal edificio 4 pisos

---

### Leccion 2: Barandales y Pasamanos (0.5h)
**Archivo:** [leccion-2-barandales.md](./lecciones/leccion-2-barandales.md)

- Railing types (vidrio, metal, madera)
- Sketch path method
- Top Rail, Handrails
- Baluster placement (balaustres)
- Post placement (postes)
- Edit Path para formas complejas
- Continuous vs Breaking at corners
- Custom baluster families

**Ejercicio:** Barandales para escaleras y terrazas

---

### Leccion 3: Muros Cortina Avanzados (1h)
**Archivo:** [leccion-3-muros-cortina.md](./lecciones/leccion-3-muros-cortina.md)

- Curtain Wall basics
- Curtain Grid (division horizontal/vertical)
- Mullions (parteluces)
- Panels (vidrio, solido, louvers)
- Pin/Unpin panels
- Custom panel families
- Curtain wall by face
- Embedded curtain walls
- Corner conditions
- Sloped glazing

**Ejercicio:** Fachada de vidrio completa

---

### Leccion 4: Toposolid - Subdivision y Modelado (1.5h)
**Archivo:** [leccion-4-toposolid.md](./lecciones/leccion-4-toposolid.md)

- **Introduccion a Toposolid**
- Toposolid vs Topography (diferencias)
- Create from points
- Create from imported contours
- **NUEVO 2026: Subdivision tool**
  - Dividir toposolid en sectores
  - Diferentes capas por sector
  - Mejor control de materiales
- **NUEVO 2026: Negative values**
  - Valores negativos para excavaciones
  - Modelado de vialidades deprimidas
  - Tuneles y pasos a desnivel
- Edit Surface (puntos, triangulacion)
- Layers (capas de terreno)
- Building Pad (plataforma de edificacion)
- Subregions (sub-regiones)

**Ejercicio:** Terreno complejo con vialidades y plataformas

---

### Leccion 5: Toposolid - Vialidades y Carreteras (0.5h)
**Archivo:** [leccion-5-toposolid-vialidades.md](./lecciones/leccion-5-toposolid-vialidades.md)

- **NUEVO 2026: Negative values para vialidades**
- Modelado de calles
- Modelado de estacionamientos
- Banquetas y cordones
- Drenajes y pendientes
- Split Surface para diferentes materiales
- Asphalt, Concrete materials
- Line-based road families

**Ejercicio:** Estacionamiento y acceso vehicular completo

---

### Leccion 6: Elementos de Sitio (0.5h)
**Archivo:** [leccion-6-elementos-sitio.md](./lecciones/leccion-6-elementos-sitio.md)

- Site components (arboles, vegetacion)
- Parking component
- Site furniture (bancas, luminarias)
- Retaining walls (muros de contencion)
- Property lines (linderos)
- Cut/Fill calculations (corte/relleno)
- Graded Region
- Site plans

**Ejercicio:** Conjunto completo de sitio

---

## Caracteristicas NUEVAS Revit 2026

### Toposolid Improvements

![Toposolid 2026](./imagenes/toposolid-2026-improvements.png)

#### 1. Subdivision Tool

**Beneficio:**
Divide toposolid en sectores independientes con diferentes configuraciones de capas.

**Uso:**
```
1. Seleccionar Toposolid
2. Modify | Edit Surface > Subdivide
3. Sketch boundary de subdivision
4. Finish
5. Cada sector tiene capas independientes
```

**Caso practico:**
- Zona verde: Capas de cesped
- Zona vialidad: Capas de asfalto/concreto
- Zona edificacion: Plataforma compactada

#### 2. Negative Values (Valores Negativos)

**Beneficio:**
Permite valores Z negativos para modelar excavaciones, vialidades deprimidas, tuneles.

**Uso:**
```
1. Edit Surface
2. Modify Points
3. Ingresar valores negativos (ej: -2.5m)
4. Modelar depresiones en terreno
```

**Aplicaciones:**
- Vialidades a desnivel
- Tuneles vehiculares
- Sotanos externos
- Drenajes profundos
- Pasos deprimidos

#### 3. Better Layer Control

**Beneficio:**
Control mas fino de capas de terreno por subdivision.

**Capas tipicas:**
1. Topsoil (tierra vegetal)
2. Subbase (sub-base)
3. Base course (base)
4. Surface (superficie: asfalto, concreto, etc.)

---

## Ejercicios Practicos

Ver archivo completo: [ejercicios.md](./ejercicios.md)

**Ejercicios incluidos:**
1. Escaleras complejas multi-nivel
2. Barandales de vidrio y metal
3. Fachada muro cortina completa
4. Terreno con subdivision
5. Vialidades con valores negativos
6. Conjunto de sitio completo
7. Proyecto integrador: Edificio + Sitio
8. Evaluacion del modulo

---

## Atajos de Teclado Modulo 3

| Atajo | Comando |
|-------|---------|
| `ST` | Stair |
| `RA` | Railing |
| `CW` | Curtain Wall |
| `MU` | Mullion |
| `TO` | Toposolid |
| `SU` | Subdivide Surface |
| `EP` | Edit Profile |
| `BP` | Building Pad |

---

## Evaluacion

- **Quiz teorico:** 10 preguntas (enfasis en Toposolid 2026)
- **Ejercicio practico:** Proyecto completo edificio + terreno
- **Puntuacion minima:** 70% para aprobar

---

## Navegacion

[← Modulo 2](../modulo-2-elementos-basicos/README.md) | [Inicio del Curso](../README.md) | [Siguiente: Modulo 4 →](../modulo-4-documentacion/README.md)

---

**Tiempo estimado:** 5-6 horas
**Dificultad:** ⭐⭐⭐ Intermedio-Avanzado
