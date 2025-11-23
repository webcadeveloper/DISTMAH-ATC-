# Modulo 6: Familias y BIM

![Familias BIM](./imagenes/modulo6-portada.png)

**Duracion:** 4 horas
**Nivel:** Avanzado
**Lecciones:** 6

---

## Descripcion del Modulo

Este modulo final cubre la creacion de familias parametricas personalizadas y flujos de trabajo BIM profesionales. Aprenderas a crear familias desde cero, parametros compartidos, y a implementar metodologias BIM colaborativas con Worksharing. Conocimientos esenciales para BIM Managers y usuarios avanzados.

---

## Objetivos de Aprendizaje

- Comprender arquitectura de familias en Revit
- Crear familias parametricas basicas y avanzadas
- Trabajar con Reference Planes y Parameters
- Crear familias anidadas (Nested families)
- Implementar parametros compartidos
- Configurar Worksharing para trabajo colaborativo
- Implementar flujos de trabajo BIM (BEP, LOD)
- Exportar e importar datos BIM (IFC, COBie)

---

## Contenido del Modulo

### Leccion 1: Introduccion al Editor de Familias (0.5h)
**Archivo:** [leccion-1-editor-familias.md](./lecciones/leccion-1-editor-familias.md)

- Que es una familia en Revit
- Tipos de familias:
  - System Families (muros, pisos, techos)
  - Loadable Families (puertas, ventanas, mobiliario)
  - In-Place Families (elementos unicos)
- Templates de familias
- Family Editor interface
- Reference Planes
- Parameters (Type vs Instance)
- Testing families
- Loading into project

**Ejercicio:** Familia simple de mobiliario

---

### Leccion 2: Familias Parametricas Basicas (1h)
**Archivo:** [leccion-2-familias-basicas.md](./lecciones/leccion-2-familias-basicas.md)

- Crear familia desde template
- Reference Planes setup
- Dimensionar con parametros
- Formulas en parametros
- Constraints (restricciones)
- Geometry creation
- Materials en familias
- Visibility controls
- Family Types
- Testing y validacion

**Ejercicio:** Mesa parametrica (ancho, largo, altura variables)

---

### Leccion 3: Familias Avanzadas y Anidadas (1h)
**Archivo:** [leccion-3-familias-avanzadas.md](./lecciones/leccion-3-familias-avanzadas.md)

- Nested Families (familias anidadas)
- Shared vs Non-shared nested
- Arrays en familias
- Conditional visibility (si/entonces)
- Lookup tables
- Family Categories
- Subcategories para control fino
- Line-based families
- Face-based families
- Adaptive Components (introduccion)

**Ejercicio:** Estanteria parametrica con elementos anidados

---

### Leccion 4: Parametros Compartidos (0.5h)
**Archivo:** [leccion-4-parametros-compartidos.md](./lecciones/leccion-4-parametros-compartidos.md)

- Que son Shared Parameters
- Shared Parameters File (.txt)
- Crear parametros compartidos
- Groups de parametros
- Aplicar a familias
- Aplicar a proyecto
- Schedules con parametros compartidos
- Tags con parametros compartidos
- Project Parameters vs Shared Parameters
- Global Parameters

**Ejercicio:** Sistema de parametros corporativos

---

### Leccion 5: Flujos de Trabajo BIM (1h)
**Archivo:** [leccion-5-flujos-trabajo-bim.md](./lecciones/leccion-5-flujos-trabajo-bim.md)

- Introduccion a BIM
- BIM Execution Plan (BEP)
- Level of Development (LOD 100-500)
- Model Element Table
- Information Delivery Manual (IDM)
- Common Data Environment (CDE)
- BIM protocols
- Naming conventions
- File structure
- Quality Control checklists
- BIM coordination meetings

**Ejercicio:** Crear BEP basico para proyecto

---

### Leccion 6: Colaboracion con Worksharing (1h)
**Archivo:** [leccion-6-worksharing.md](./lecciones/leccion-6-worksharing.md)

- Que es Worksharing
- Central Model vs Local Model
- Enabling Worksharing
- Worksets creation
- Worksets strategies:
  - Por nivel
  - Por disciplina
  - Por zona
- Borrowing elements
- Synchronize with Central
- Save to Central
- Relinquish ownership
- Worksharing Display Modes
- Worksharing Monitor
- Best practices
- Troubleshooting conflicts

**Ejercicio:** Proyecto colaborativo multi-usuario

---

## Conceptos Avanzados BIM

### LOD (Level of Development)

| LOD | Descripcion | Uso |
|-----|-------------|-----|
| LOD 100 | Simbolico | Conceptual design |
| LOD 200 | Generico | Schematic design |
| LOD 300 | Preciso | Design development |
| LOD 350 | Coordinacion | Construction documents |
| LOD 400 | Fabricacion | Shop drawings |
| LOD 500 | As-built | Facility management |

### BIM Uses

1. **Design Authoring:** Modelado arquitectonico
2. **Clash Detection:** Deteccion de interferencias
3. **Quantity Takeoff:** Computos metricos
4. **4D Simulation:** Planificacion temporal
5. **5D Cost Estimation:** Estimacion de costos
6. **Energy Analysis:** Analisis energetico
7. **FM (Facility Management):** Gestion de instalaciones

---

## Worksharing Workflow

```
SERVIDOR (Central Model)
        |
        |-- Usuario 1 (Local Model)
        |     - Workset: Arquitectura Nivel 1
        |     - Edita muros, puertas
        |     - Sync to Central
        |
        |-- Usuario 2 (Local Model)
        |     - Workset: Arquitectura Nivel 2
        |     - Edita pisos, techos
        |     - Sync to Central
        |
        |-- Usuario 3 (Local Model)
              - Workset: Sitio
              - Edita terreno
              - Sync to Central

Todos sincronizados al Central Model
```

### Commandos clave:

| Comando | Funcion |
|---------|---------|
| `SWC` | Synchronize with Central |
| `RL` | Relinquish All Mine |
| `WS` | Worksets Dialog |

---

## Interoperabilidad BIM

### IFC (Industry Foundation Classes)

**Export IFC:**
```
1. File > Export > IFC
2. Setup: IFC 2x3 o IFC 4
3. Configurar mapping
4. Export
```

**Import IFC:**
```
1. Insert > Link IFC
2. Seleccionar archivo .ifc
3. Positioning
4. OK
```

**Usos:**
- Compartir con software BIM diferente
- Coordinacion multidisciplinaria
- Cumplimiento normativo BIM
- Open BIM workflows

### COBie (Construction Operations Building Information Exchange)

**Export COBie:**
- File > Export > COBie
- Spreadsheet con datos estructurados
- Facility Management

---

## Ejercicios Practicos

Ver archivo completo: [ejercicios.md](./ejercicios.md)

**Ejercicios incluidos:**
1. Familia parametrica basica
2. Mesa con dimensiones variables
3. Estanteria con familias anidadas
4. Sistema de parametros compartidos
5. BEP (BIM Execution Plan) basico
6. Proyecto Worksharing multi-usuario
7. Proyecto integrador: BIM completo
8. Evaluacion final del curso

---

## Recursos BIM

### Estandares y Guias

- **ISO 19650:** Information management using BIM
- **AIA G202:** Project BIM Protocol
- **PAS 1192:** UK BIM Standards
- **NBIMS-US:** National BIM Standard (USA)
- **buildingSMART:** Open BIM Standards

### Software Complementario

- **Navisworks:** Coordinacion y clash detection
- **BIM 360:** Colaboracion en nube
- **Solibri:** Model checking
- **Dynamo:** Automatizacion y programacion visual

---

## Evaluacion Final del Curso

### Proyecto Final Integrador (3 horas)

**Requisitos:**

**Modelado (40 pts):**
- Edificio completo 3-4 pisos
- Todos los elementos arquitectonicos
- Terreno y sitio
- Aplicar caracteristicas 2026

**Documentacion (30 pts):**
- Plantas completas acotadas
- Elevaciones y cortes
- Tablas de planificacion
- Laminas profesionales

**Visualizacion (20 pts):**
- 3 renders fotorrealistas
- Integracion Twinmotion
- Recorrido virtual

**BIM (10 pts):**
- Parametros compartidos
- Export IFC
- Documentacion BIM

**Total: 100 pts - Aprobar con 70+**

---

## Certificacion

Al completar exitosamente:

**Certificado Digital:**
- Nombre completo
- 30 horas acreditadas
- Revit Architecture 2026 Professional
- Fecha de finalizacion
- Codigo de verificacion

**Incluye:**
- Badge digital para LinkedIn
- PDF descargable
- Verificacion online

---

## Navegacion

[← Modulo 5](../modulo-5-visualizacion/README.md) | [Inicio del Curso](../README.md) | [Proyecto Final →](./proyecto-final.md)

---

## Proximos Pasos

**Despues de este curso, puedes:**

1. **Trabajar profesionalmente** con Revit Architecture 2026
2. **Aplicar a posiciones BIM** (Modelador, BIM Coordinator)
3. **Continuar especializacion:**
   - Revit Structure 2026
   - Revit MEP 2026
   - Dynamo for Revit
   - Navisworks
   - BIM Manager certification

4. **Certificacion Autodesk:**
   - Autodesk Certified User (ACU)
   - Autodesk Certified Professional (ACP)

---

**Felicitaciones por completar el curso completo!**

Has dominado Revit Architecture 2026 desde fundamentos hasta nivel avanzado, incluyendo todas las nuevas caracteristicas.

**Tiempo total:** 30 horas
**Dificultad:** ⭐⭐⭐⭐ Avanzado
**Importancia:** ⭐⭐⭐⭐⭐ Fundamental para carrera BIM
