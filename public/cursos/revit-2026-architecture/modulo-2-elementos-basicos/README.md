# Modulo 2: Modelado de Elementos Arquitectonicos Basicos

![Elementos Basicos](./imagenes/modulo2-portada.png)

**Duracion:** 6 horas
**Nivel:** Principiante-Intermedio
**Lecciones:** 6

---

## Descripcion del Modulo

Este modulo cubre el modelado de todos los elementos arquitectonicos basicos en Revit 2026. Aprenderas a crear muros (incluyendo la **nueva caracteristica 2026 de creacion automatica desde areas cerradas**), puertas, ventanas, pisos, techos y otros componentes fundamentales de cualquier proyecto arquitectonico.

---

## Objetivos de Aprendizaje

Al completar este modulo, seras capaz de:

- Crear muros con metodos tradicionales y automaticos (NUEVO 2026)
- Modelar puertas y ventanas parametricas
- Crear pisos y entrepisos con diferentes materiales
- Disenar techos planos e inclinados
- Modelar plafones y cielos rasos
- Editar y modificar elementos arquitectonicos
- Comprender propiedades de materiales y capas
- Usar la nueva herramienta **Duplicate Layers in Edit Assembly** (2026)

---

## Contenido del Modulo

### Leccion 1: Muros - Creacion Tradicional y Automatica (1.5h)
**Archivo:** [leccion-1-muros.md](./lecciones/leccion-1-muros.md)

- Tipos de muros (Basic, Stacked, Curtain)
- Creacion tradicional de muros
- **NUEVO 2026:** Creacion automatica desde areas cerradas
- Properties: Base/Top Constraint, Offset
- Edit Profile para muros irregulares
- Join/Unjoin Walls
- **NUEVO 2026:** Duplicate Layers in Edit Assembly
- Attach/Detach Top/Base
- Embedded walls

**Ejercicio:** Casa unifamiliar con muros perimetrales y tabiqueria

---

### Leccion 2: Puertas y Ventanas (1h)
**Archivo:** [leccion-2-puertas-ventanas.md](./lecciones/leccion-2-puertas-ventanas.md)

- Cargar familias de puertas
- Colocar puertas en muros
- Properties: Tipo, dimensiones, offset
- Door schedules automaticos
- Familias de ventanas
- Window placement y altura de alfeizar
- Flip controls (direccion de apertura)
- Tag automatico
- Create similar

**Ejercicio:** Equipar edificio con puertas y ventanas completas

---

### Leccion 3: Pisos y Entrepisos (1h)
**Archivo:** [leccion-3-pisos-entrepisos.md](./lecciones/leccion-3-pisos-entrepisos.md)

- Floor types (estructura de capas)
- Sketch-based creation
- Pick Walls para pisos automaticos
- Slope Arrow para pendientes
- Edit Boundary para modificaciones
- Split Face para diferentes acabados
- Structural floors vs Architectural floors
- Floor by Face (en masas)
- Shaft openings (vanos de instalaciones)

**Ejercicio:** Modelar pisos de edificio multi-nivel con diferentes acabados

---

### Leccion 4: Techos y Cubiertas (1h)
**Archivo:** [leccion-4-techos.md](./lecciones/leccion-4-techos.md)

- Roof by Footprint (por contorno)
- Roof by Extrusion (por extrusion)
- Slope definition (pendientes)
- Edit Footprint para formas complejas
- Join/Unjoin Roof
- Fascia, Gutters, Soffit
- Attach Walls to Roof
- Roof openings (tragaluces, chimeneas)
- Flat roofs vs Sloped roofs

**Ejercicio:** Techo a 4 aguas con tragaluz

---

### Leccion 5: Plafones y Cielos Rasos (0.5h)
**Archivo:** [leccion-5-plafones.md](./lecciones/leccion-5-plafones.md)

- Ceiling types
- Automatic Ceilings
- Sketch Ceiling para areas especificas
- Ceiling height offset
- Split Face para diferentes tipos
- Light fixtures in ceilings
- Reflected ceiling plans

**Ejercicio:** Plafones de oficina con diferentes alturas

---

### Leccion 6: Componentes Arquitectonicos y Edicion (1h)
**Archivo:** [leccion-6-componentes-edicion.md](./lecciones/leccion-6-componentes-edicion.md)

- Component families (columnas, vigas decorativas)
- Placing components
- Arrays y patrones
- Edit Type vs Edit Instance
- Match Type Properties
- Paint tool para acabados
- Join Geometry
- Split Elements
- Editing profiles avanzado

**Ejercicio:** Completar edificio con todos los componentes

---

## Caracteristicas NUEVAS Revit 2026

### 1. Creacion Automatica de Muros desde Areas Cerradas

![Auto Walls](./imagenes/auto-walls-2026.png)

**Beneficio:**
Genera muros automaticamente desde un area cerrada (boundary), ahorrando tiempo significativo.

**Como usar:**
1. Dibujar area cerrada (Closed Loop)
2. `Architecture > Wall > Create Walls from Area`
3. Seleccionar area
4. Muros se generan automaticamente

**Caso de uso:**
- Importar DWG con polylines cerradas
- Convertir a muros instantaneamente
- Especialmente util para remodelaciones

### 2. Duplicate Layers in Edit Assembly

![Duplicate Layers](./imagenes/duplicate-layers-2026.png)

**Beneficio:**
Duplica capas en ensamblajes de muros/pisos/techos sin tener que recrearlas.

**Como usar:**
1. Edit Type > Edit Assembly
2. Seleccionar capa existente
3. Click "Duplicate"
4. Capa se duplica con todas las propiedades

**Caso de uso:**
- Muros multi-capa simetricos
- Pisos con capas repetidas
- Ahorra tiempo en configuracion

---

## Ejercicios Practicos

Ver archivo completo: [ejercicios.md](./ejercicios.md)

**Ejercicios incluidos:**
1. Casa unifamiliar completa
2. Creacion automatica de muros desde DWG
3. Edificio de departamentos con puertas/ventanas
4. Pisos multi-material
5. Techos complejos
6. Oficina con plafones
7. Proyecto integrador: Edificio completo 3 pisos
8. Evaluacion del modulo

---

## Atajos de Teclado Modulo 2

| Atajo | Comando |
|-------|---------|
| `WA` | Wall |
| `DR` | Door |
| `WN` | Window |
| `FL` | Floor |
| `RO` | Roof |
| `CE` | Ceiling |
| `CM` | Component |
| `JG` | Join Geometry |
| `UJ` | Unjoin Geometry |
| `EP` | Edit Profile |
| `PA` | Paint |

---

## Archivos de Practica

- `M2_Casa-Base.rvt` - Casa unifamiliar base
- `M2_Edificio-Multi-Nivel.rvt` - Edificio 3 pisos
- `M2_DWG-Import.dwg` - Planos para importar
- `M2_Familias-Puertas.rfa` - Familias adicionales
- `M2_Familias-Ventanas.rfa` - Familias adicionales

---

## Evaluacion

- **Quiz teorico:** 10 preguntas
- **Ejercicio practico:** Modelar edificio completo con todos los elementos
- **Puntuacion minima:** 70% para aprobar

---

## Navegacion

[← Modulo 1](../modulo-1-introduccion/README.md) | [Inicio del Curso](../README.md) | [Siguiente: Modulo 3 →](../modulo-3-modelado-avanzado/README.md)

---

## Recursos Complementarios

### Videos
- "Wall Creation Enhancements Revit 2026" - Autodesk
- "Duplicate Layers Feature" - Autodesk
- "Complete Architectural Modeling" - Tutorial completo

### Documentacion
- [Revit 2026 - Wall Improvements](https://help.autodesk.com/view/RVT/2026/ENU/)
- [Architectural Elements Guide](https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/)

---

**Tiempo estimado de completacion:** 6-7 horas (incluyendo ejercicios)
**Prerequisitos:** Modulo 1 completado
**Dificultad:** ⭐⭐ Principiante-Intermedio
