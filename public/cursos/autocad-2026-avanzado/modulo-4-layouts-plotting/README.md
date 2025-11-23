# Módulo 4: Layouts, Paper Space y Plotting

## Descripción del Módulo

Este módulo avanzado cubre la gestión profesional de presentaciones, configuración de layouts, viewports flotantes y producción de planos de calidad profesional en AutoCAD. Aprenderás a organizar proyectos complejos con múltiples láminas, configurar estilos de impresión y dominar el flujo de trabajo entre Model Space y Paper Space.

## Duración Estimada

**5-6 horas** de contenido técnico

## Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

1. **Distinguir y trabajar eficientemente** entre Model Space y Paper Space para organización profesional de proyectos
2. **Crear y configurar layouts** con ajustes de página, escalas y orientaciones apropiadas para diferentes tipos de planos
3. **Dominar viewports flotantes** incluyendo escalas, bloqueo, control de capas por viewport y alineación precisa
4. **Configurar y aplicar estilos de trazado** (CTB/STB) para producción consistente y profesional de documentos
5. **Ejecutar impresión y plotting** a PDF, plotter y otros formatos con configuraciones optimizadas
6. **Gestionar proyectos completos** mediante Sheet Sets para organización, publicación y archivado de conjuntos de planos
7. **Implementar flujos de trabajo profesionales** siguiendo estándares de la industria para entrega de documentación técnica

## Requisitos Previos

- Completar **AutoCAD 2026 Básico** completo
- Completar **Módulo 1: Bloques Dinámicos y Atributos** del curso avanzado
- Completar **Módulo 2: Referencias Externas (Xrefs) y Gestión de Archivos** del curso avanzado
- Completar **Módulo 3: Anotaciones Avanzadas y Estilos** del curso avanzado
- Conocimiento sólido de capas, escalas y organización de dibujos
- Experiencia básica con impresión en AutoCAD

## Contenido del Módulo

### [Lección 1: Model Space vs Paper Space](./leccion-01-model-space-vs-paper-space.md)
**Duración:** 45-50 minutos

Comprende las diferencias fundamentales entre espacios de trabajo, cuándo usar cada uno, y establece las bases para organización profesional de proyectos.

**Temas clave:**
- Conceptos de Model Space y Paper Space
- Comandos MSPACE, PSPACE y Tilemode
- Workflow profesional y mejores prácticas
- Objetos anotativos en layouts

---

### [Lección 2: Creación y Configuración de Layouts](./leccion-02-creacion-configuracion-layouts.md)
**Duración:** 50-55 minutos

Aprende a crear, configurar y gestionar layouts para presentación profesional de planos con configuraciones de página apropiadas.

**Temas clave:**
- Comando LAYOUT y creación de layouts
- Page Setup Manager (PAGESETUP)
- Configuración de tamaño de papel y dispositivos
- Gestión de múltiples layouts
- Plantillas de layouts

---

### [Lección 3: Viewports Flotantes](./leccion-03-viewports-flotantes.md)
**Duración:** 60-70 minutos

Domina la creación y configuración de viewports flotantes, incluyendo escalas, bloqueo y control avanzado de capas por viewport.

**Temas clave:**
- Comando MVIEW y tipos de viewports
- Escalas estándar y bloqueo de viewports
- Control de capas por viewport (VPLAYER)
- Alineación y maximización de viewports
- Estrategias de múltiples viewports

---

### [Lección 4: Estilos de Plot (CTB/STB)](./leccion-04-estilos-plot-ctb-stb.md)
**Duración:** 50-60 minutos

Configura estilos de trazado profesionales para producción consistente de planos impresos y digitales.

**Temas clave:**
- Plot styles dependientes de color (.CTB)
- Plot styles nominales (.STB)
- Plot Style Manager y edición de tablas
- Asignación de estilos a objetos y capas
- Estándares profesionales de plotting

---

### [Lección 5: Impresión y Plotting](./leccion-05-impresion-plotting.md)
**Duración:** 50-60 minutos

Ejecuta impresión profesional a múltiples formatos, incluyendo PDF, plotter físico y publicación en batch.

**Temas clave:**
- Comando PLOT y diálogo de impresión
- Configuración de impresoras y plotters
- Plotting a PDF, DWF y DWFx
- PUBLISH para impresión en batch
- Validación y troubleshooting

---

### [Lección 6: Sheet Sets](./leccion-06-sheet-sets.md)
**Duración:** 60-70 minutos

Gestiona proyectos completos mediante Sheet Set Manager para organización, colaboración y publicación de conjuntos completos de planos.

**Temas clave:**
- Sheet Set Manager (SSM)
- Creación y organización de sheet sets
- Propiedades, vistas y callouts
- Tablas de lista de planos
- Publicación y archivado de proyectos

---

### [Ejercicios Prácticos](./ejercicios.md)
**Duración:** 60-90 minutos

12-15 ejercicios prácticos que integran todos los conceptos del módulo en proyectos arquitectónicos e ingenieriles reales.

---

## Recursos Adicionales

### Comandos Principales del Módulo

| Comando | Función | Atajo |
|---------|---------|-------|
| LAYOUT | Crear/gestionar layouts | - |
| MVIEW | Crear viewports flotantes | MV |
| PAGESETUP | Configurar página | - |
| PLOT | Imprimir/plotear | Ctrl+P |
| PUBLISH | Publicación en batch | - |
| SHEETSET | Sheet Set Manager | SSM |
| PSPACE | Activar Paper Space | PS |
| MSPACE | Activar Model Space | MS |
| VPLAYER | Control de capas por viewport | - |
| VPMAX | Maximizar viewport | - |

### Variables de Sistema Relevantes

- `TILEMODE` - Controla Model/Paper Space
- `PSLTSCALE` - Escala de linetype en Paper Space
- `MSLTSCALE` - Escala de linetype en Model Space
- `BACKGROUNDPLOT` - Plotting en segundo plano
- `PUBLISHCOLLATE` - Colación en publicación

### Formatos de Archivo

- **.CTB** - Color-dependent plot style table
- **.STB** - Named plot style table
- **.PC3** - Plotter configuration file
- **.DWS** - Drawing standards file
- **.DST** - Sheet set template

---

## Notas Importantes

### Mejores Prácticas

1. **Siempre dibujar a escala real (1:1) en Model Space**
2. **Configurar escalas en viewports, no en objetos**
3. **Usar objetos anotativos para textos y dimensiones**
4. **Mantener consistencia en naming de layouts**
5. **Bloquear viewports después de configurar escala**
6. **Usar plantillas de layout para consistencia**
7. **Validar configuraciones antes de plotear**

### Estándares Profesionales

- Seguir convenciones de naming de la industria
- Usar escalas estándar (1:50, 1:100, etc.)
- Mantener bibliotecas de plot styles corporativos
- Documentar configuraciones de proyecto
- Archivar sheet sets completos

---

## Evaluación del Módulo

Para aprobar este módulo, deberás:

- Completar todas las lecciones (1-6)
- Realizar al menos 10 de los 15 ejercicios prácticos
- Demostrar dominio de viewports y escalas
- Producir set completo de planos profesionales
- Configurar y aplicar plot styles correctamente

---

## Navegación

**Anterior:** [Módulo 3: Anotaciones Avanzadas y Estilos](../modulo-3-anotaciones-avanzadas/)

**Siguiente:** [Módulo 5: Personalización y Automatización](../modulo-5-personalizacion-automatizacion/)

**Inicio:** [AutoCAD 2026 Avanzado](../)

---

**Empezar:** [Lección 1: Model Space vs Paper Space →](./leccion-01-model-space-vs-paper-space.md)
