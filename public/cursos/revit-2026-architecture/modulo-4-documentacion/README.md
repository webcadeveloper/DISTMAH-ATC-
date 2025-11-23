# Modulo 4: Documentacion y Anotacion

![Documentacion](./imagenes/modulo4-portada.png)

**Duracion:** 6 horas
**Nivel:** Intermedio
**Lecciones:** 7

---

## Descripcion del Modulo

Este modulo cubre la creacion de documentacion tecnica profesional en Revit 2026. Aprenderas a crear cotas inteligentes, anotaciones, etiquetas (con la **nueva caracteristica de auto-centrado en habitaciones**), tablas de planificacion, y laminas completas. Incluye la nueva herramienta **Save Position for Views on Sheets** de Revit 2026.

---

## Objetivos de Aprendizaje

- Crear cotas parametricas (lineales, alineadas, radiales, angulares)
- Anotar planos con texto y simbolos
- Usar etiquetas inteligentes (Rooms, Doors, Windows)
- **NUEVO 2026:** Auto-centrado de etiquetas de habitaciones
- Crear tablas de planificacion automaticas
- **NUEVO 2026:** Save Position for Views on Sheets
- Disenar laminas profesionales con caratulas
- Exportar e imprimir documentacion

---

## Contenido del Modulo

### Leccion 1: Cotas y Dimensionamiento (1h)
**Archivo:** [leccion-1-cotas.md](./lecciones/leccion-1-cotas.md)

- Dimension types (Linear, Aligned, Angular, Radial, Diameter, Arc Length)
- Aligned vs Linear dimensions
- Continuous dimensions (cadena)
- Baseline dimensions (desde linea base)
- Dimension to grids and levels
- EQ (Equal) constraints
- Dimension styles customization
- Witness line control
- Temporary vs Permanent dimensions
- Lock dimensions

**Ejercicio:** Acotar planos arquitectonicos completos

---

### Leccion 2: Texto y Anotaciones (0.5h)
**Archivo:** [leccion-2-texto-anotaciones.md](./lecciones/leccion-2-texto-anotaciones.md)

- Text types y estilos
- Model Text vs Text Notes
- Leaders y arrows
- Spelling check
- Find/Replace
- Text alignment
- Columns in text
- Parametric text
- Keynotes
- Revision clouds

**Ejercicio:** Anotar planos con notas tecnicas

---

### Leccion 3: Etiquetas Inteligentes (1h)
**Archivo:** [leccion-3-etiquetas.md](./lecciones/leccion-3-etiquetas.md)

- Room Tags
- **NUEVO 2026: Auto-center Room Tags**
  - Etiquetas de habitaciones se centran automaticamente
  - Ajuste dinamico al cambiar forma de habitacion
- Door Tags
- Window Tags
- Wall Tags
- Generic Tags
- Multi-category Tags
- Tag all not tagged
- Loaded Tags vs Project Tags
- Tag by Category
- Custom tag families

**Ejercicio:** Etiquetar proyecto completo

---

### Leccion 4: Habitaciones y Areas (1h)
**Archivo:** [leccion-4-habitaciones-areas.md](./lecciones/leccion-4-habitaciones-areas.md)

- Room tool
- Room properties (Number, Name, Department, etc.)
- Room Separation Lines
- Room boundaries
- Area Schemes
- Gross Building Area
- Rentable Area
- Color Fill Schemes
- Room calculations
- Room schedules
- Area plans

**Ejercicio:** Programacion arquitectonica completa

---

### Leccion 5: Tablas de Planificacion (1.5h)
**Archivo:** [leccion-5-tablas-planificacion.md](./lecciones/leccion-5-tablas-planificacion.md)

- Schedule/Quantities tool
- Door Schedule
- Window Schedule
- Room/Area Schedule
- Wall Schedule
- Material Takeoff
- Fields selection
- Filter rules
- Sorting/Grouping
- Formatting
- Calculated Values
- Grand Totals
- Embedded schedules in sheets
- Schedule updates (automatic)

**Ejercicio:** Set completo de tablas para proyecto

---

### Leccion 6: Laminas y Save Position for Views (1.5h)
**Archivo:** [leccion-6-laminas-sheets.md](./lecciones/leccion-6-laminas-sheets.md)

- Sheet creation
- Titleblock families
- Place views on sheets (viewports)
- Viewport activate/deactivate
- Viewport types
- **NUEVO 2026: Save Position for Views on Sheets**
  - Guardar posicion de viewports
  - Restaurar layout rapidamente
  - Plantillas de laminas
- View titles
- Matchlines
- Guide Grids
- Revisions on sheets
- Sheet lists
- Sheet organization

**Ejercicio:** Conjunto completo de laminas

---

### Leccion 7: Impresion y Exportacion (0.5h)
**Archivo:** [leccion-7-impresion-exportacion.md](./lecciones/leccion-7-impresion-exportacion.md)

- Print setup
- Print range (sheets, views)
- Print preview
- PDF export
- DWG/DXF export
- IFC export (BIM)
- Image export (PNG, JPG)
- Rendering export
- Batch printing
- Print sets
- Plot stamps

**Ejercicio:** Exportar proyecto completo a PDF

---

## Caracteristicas NUEVAS Revit 2026

### 1. Auto-center Room Tags

![Auto-center Tags](./imagenes/auto-center-tags-2026.png)

**Beneficio:**
Las etiquetas de habitaciones se centran automaticamente y se ajustan dinamicamente cuando cambia la geometria de la habitacion.

**Como funciona:**
```
1. Colocar Room Tag
2. Tag se centra automaticamente en habitacion
3. Al modificar muro o forma de habitacion:
   - Tag se reposiciona automaticamente
   - Mantiene centrado
   - No requiere ajuste manual
```

**Ventajas:**
- Ahorra tiempo en ajustes manuales
- Siempre centrado perfectamente
- Actualiza con cambios de diseno
- Menos errores visuales

**Configuracion:**
- Properties > Auto-center: ✓
- Se puede desactivar para control manual

### 2. Save Position for Views on Sheets

![Save Position](./imagenes/save-position-2026.png)

**Beneficio:**
Guarda la posicion exacta de viewports en laminas para restaurar layouts rapidamente.

**Como usar:**
```
1. Colocar vistas en lamina
2. Ajustar posiciones perfectamente
3. Select all viewports
4. Modify | Viewports > Save Position
5. Nombre: "Layout Standard A1"

Restaurar:
1. Colocar vistas nuevas
2. Select viewports
3. Modify | Viewports > Load Position
4. Seleccionar "Layout Standard A1"
5. Vistas se posicionan automaticamente
```

**Casos de uso:**
- Estandarizar layouts de laminas
- Aplicar mismo layout a multiples proyectos
- Reproducir formatos corporativos
- Ahorro de tiempo en presentaciones

---

## Ejercicios Practicos

Ver archivo completo: [ejercicios.md](./ejercicios.md)

**Ejercicios incluidos:**
1. Acotado completo de plantas
2. Anotaciones tecnicas
3. Etiquetado automatico y auto-centrado
4. Programacion arquitectonica
5. Tablas completas (puertas, ventanas, habitaciones)
6. Laminas profesionales con Save Position
7. Proyecto integrador: Documentacion completa
8. Evaluacion del modulo

---

## Atajos de Teclado Modulo 4

| Atajo | Comando |
|-------|---------|
| `DI` | Aligned Dimension |
| `DL` | Linear Dimension |
| `TX` | Text |
| `RM` | Room |
| `RT` | Room Tag |
| `TG` | Tag by Category |
| `SH` | Sheet |
| `SC` | Schedule |
| `PT` | Print |

---

## Dimension Styles Estandar

**Crear estilos corporativos:**

| Estilo | Uso | Text Size | Arrow | Tick |
|--------|-----|-----------|-------|------|
| Arquitectonico | Plantas generales | 2.5mm | Arrow | - |
| Estructural | Grillas y ejes | 3mm | Slash | - |
| Detalle | Detalles constructivos | 2mm | Dot | - |

---

## Evaluacion

- **Quiz teorico:** 10 preguntas (enfasis en nuevas caracteristicas 2026)
- **Ejercicio practico:** Documentacion completa de proyecto
- **Puntuacion minima:** 70% para aprobar

---

## Navegacion

[← Modulo 3](../modulo-3-modelado-avanzado/README.md) | [Inicio del Curso](../README.md) | [Siguiente: Modulo 5 →](../modulo-5-visualizacion/README.md)

---

**Tiempo estimado:** 6-7 horas
**Dificultad:** ⭐⭐ Intermedio
**Importancia:** ⭐⭐⭐⭐⭐ Fundamental para entrega de proyectos
