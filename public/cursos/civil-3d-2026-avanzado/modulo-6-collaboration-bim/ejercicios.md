# Ejercicios Prácticos - Módulo 6: Collaboration y BIM Integration

## Instrucciones Generales

Estos ejercicios finales consolidan todo lo aprendido en el Módulo 6 y en el curso completo. Representan situaciones reales de proyectos de infraestructura BIM.

**Formato de Entrega:**
- Screenshots de configuraciones
- Archivos exportados (IFC, LandXML, NWF)
- Reportes generados
- Video demo del workflow completo
- Documento PDF con análisis y conclusiones

**Criterios de Evaluación:**
- Configuración correcta de plataformas (30%)
- Workflows de colaboración implementados (25%)
- Coordinación y clash resolution (25%)
- Exports validados (15%)
- Documentación profesional (5%)

---

## Ejercicio 1: Configuración Completa de Proyecto ACC

**Objetivo:** Crear y configurar proyecto completo en Autodesk Construction Cloud para infraestructura vial.

### Tareas Requeridas

**1.1 Setup Inicial (30 minutos)**

```
Crear proyecto nuevo en ACC:
├── Nombre: "[Tu Nombre] - Highway Expansion 2024"
├── Tipo: Infrastructure / Heavy Civil
├── Ubicación: [Tu ciudad/región]
├── Duración: 18 meses
└── Budget: $25,000,000 (opcional)
```

**1.2 Estructura de Carpetas (20 minutos)**

Implementar estructura profesional:
```
00_Project_Management/
01_Design/
├── Civil/
├── Structural/
└── Drainage/
02_Models/
03_Documents/
04_Submittals/
05_RFIs/
06_Coordination/
07_Photos/
08_As_Built/
```

**1.3 Gestión de Equipo (30 minutos)**

Invitar y configurar:
- Mínimo 3 colaboradores (compañeros o cuentas test)
- Roles:
  - 1 Project Admin (tú)
  - 1 Designer
  - 1 Reviewer
  - 1 Viewer

Configurar permisos granulares por carpeta

**1.4 Upload Modelos (20 minutos)**

- Subir mínimo 1 modelo Civil 3D (DWG)
- Configurar Desktop Connector
- Verificar que preview 2D/3D se genera

**1.5 Design Collaboration (45 minutos)**

- Crear 5 markups en el modelo
- Asignar 3 issues a colaboradores
- Configurar workflow de aprobación (2-3 pasos)
- Simular ciclo completo: Draft → Review → Approved

**Entregables:**
- Screenshots de configuración de proyecto
- URL del proyecto con guest access habilitado
- Documento con permisos configurados
- Screenshots de markups e issues
- Reporte de actividad del proyecto

**Tiempo estimado:** 2.5 horas

---

## Ejercicio 2: Workflow de RFI y Issues Management

**Objetivo:** Implementar proceso completo de gestión de RFIs e issues en BIM 360.

### Scenario

Eres el BIM Coordinator de un proyecto de carretera. El contractor ha identificado conflictos durante construcción y necesita clarificaciones.

**2.1 Crear RFIs (45 minutos)**

Crear 3 RFIs realistas:

**RFI #1: Pavement Thickness Clarification**
```
Subject: Discrepancy between plan and spec
Location: Station 2+350
Question: Plan shows 250mm, spec indicates 300mm. Which is correct?
Urgency: High (affects paving schedule)
Due Date: 5 días
```

**RFI #2: Drainage Pipe Material**
```
Subject: Storm pipe material specification unclear
Location: Manhole MH-15 to MH-16
Question: Spec says "approved equal" to RCP. Is HDPE acceptable?
Urgency: Medium
Due Date: 7 días
```

**RFI #3: Utility Relocation Responsibility**
```
Subject: Existing water line conflicts with design
Location: Station 1+875
Question: Is utility relocation in contractor scope?
Urgency: Critical (blocking earthwork)
Due Date: 2 días
```

**2.2 Respond to RFIs (30 minutos)**

- Simular respuestas del designer
- Incluir sketches o attachments
- Documentar decisiones

**2.3 Issues from Markups (30 minutos)**

Crear issues desde:
- Clash detection
- Design review
- Constructability concerns

**Entregables:**
- 3 RFIs completos con respuestas
- 5 Issues documentados
- Reporte de RFIs/Issues (exportado de BIM 360)
- Analysis de tiempo de resolución

**Tiempo estimado:** 2 horas

---

## Ejercicio 3: Model Coordination con Navisworks

**Objetivo:** Federar modelos multidisciplinarios y ejecutar clash detection profesional.

### Modelos Requeridos

Mínimo 3 modelos de disciplinas diferentes:
- Civil 3D: Highway corridor
- Revit o Civil 3D: Bridge/Structural
- Civil 3D: Drainage network

**3.1 Preparación de Modelos (30 minutos)**

- Exportar cada modelo a .nwc
- Verificar coordenadas compartidas
- Optimizar geometría (purge, simplify)

**3.2 Federación en Navisworks (45 minutos)**

- Append modelos en Navisworks Manage
- Verificar alineación correcta
- Configurar appearance overrides
- Crear selection sets por disciplina
- Guardar como .nwf con referencias

**3.3 Clash Detection (1.5 horas)**

Configurar y ejecutar mínimo 3 clash tests:

**Test 1: Civil vs Structural**
```
Selection A: Roadway corridor
Selection B: Bridge foundations
Type: Hard Clash
Tolerance: 0mm
Expected clashes: Document all
```

**Test 2: Drainage vs Utilities**
```
Selection A: Storm drainage pipes
Selection B: Existing utilities
Type: Hard Clash + Clearance (300mm minimum)
Tolerance: 0mm
Expected: Identify conflicts
```

**Test 3: Vertical Clearance Check**
```
Selection A: Bridge structure
Selection B: Road surface
Type: Clearance check
Minimum Distance: 5.5m (AASHTO)
Document any violations
```

**3.4 Clash Resolution (1 hour)**

Para cada clash encontrado:
- Assign a responsible party
- Classify (Approved/Active/Resolved/Ignored)
- Document resolution approach
- Track status

**3.5 Reporting (30 minutos)**

- Generate HTML clash report
- Export to Excel con detalles
- Create viewpoints de clashes críticos
- Prepare presentation slides

**Entregables:**
- Modelo federado (.nwf file)
- Clash detection report (HTML + Excel)
- Saved viewpoints de clashes críticos
- Resolution matrix (Excel)
- 5-min video demo navegando modelo federado

**Tiempo estimado:** 4 hours

---

## Ejercicio 4: 4D Construction Simulation

**Objetivo:** Crear simulación 4D del proceso de construcción.

**4.1 Preparar Schedule (1 hora)**

Crear schedule básico (MS Project o Excel):

```
Tareas mínimas (15-20):
├── Week 1-2: Site Preparation
├── Week 3-6: Earthwork Phase 1
├── Week 7-10: Drainage Installation
├── Week 11-14: Bridge Construction
├── Week 15-18: Pavement Base
├── Week 19-20: Pavement Surface
└── Week 21: Final Striping
```

**4.2 Link a Navisworks TimeLiner (1.5 horas)**

- Import schedule a Navisworks
- Link geometría a tasks
- Configure appearance (colores por estado)
- Set simulation speed

**4.3 Simulación y Export (30 minutos)**

- Run simulation completa
- Ajustar cámara para mejor viewing
- Export video (AVI, 1920x1080)
- Duración: 2-3 minutos

**Entregables:**
- Schedule file (MPP o Excel)
- Navisworks file con TimeLiner configurado
- Video 4D simulation (MP4/AVI)
- Commentary document explicando secuencia

**Tiempo estimado:** 3 horas

---

## Ejercicio 5: Exports a Formatos OpenBIM

**Objetivo:** Exportar modelos Civil 3D a IFC y LandXML con validación completa.

**5.1 Export to IFC 4 (1.5 horas)**

Exportar modelo Civil 3D a IFC:

```
Configuración requerida:
├── Version: IFC 4 Reference View
├── Coordinate System: Project shared coordinates
├── Include:
│   ├── Alignments (IfcAlignment)
│   ├── Surfaces (IfcGeographicElement)
│   ├── Corridors (IfcRoad)
│   └── Pipes (IfcPipeSegment)
├── Properties: Export object data
└── Tessellation: Medium-High quality
```

**Validación IFC:**
- Import en software IFC viewer (BIMcollab ZOOM, Solibri)
- Verificar geometría correcta
- Check propiedades exportadas
- Validate coordenadas (no en origin)
- Document cualquier warning/error

**5.2 Export to LandXML (1 hour)**

Exportar elementos civiles:

```
Include:
├── Surfaces: EG y FG
├── Alignments: All horizontal alignments
├── Profiles: Design profiles
└── (Opcional) Pipe networks
```

**Validación LandXML:**
- Verify XML well-formed (XML editor)
- Re-import a Civil 3D
- Compare con original (coordinates, elevations)
- Test import en otro software civil (si disponible)

**5.3 Documentation (30 minutos)**

Documentar proceso:
- Export settings utilizadas
- Issues encontrados y soluciones
- Lessons learned
- Best practices identificadas

**Entregables:**
- Highway_Model.ifc (validado)
- Highway_Design.xml (LandXML validado)
- Validation reports
- Screenshots de modelos importados
- Documentation PDF con proceso completo

**Tiempo estimado:** 3 horas

---

## Proyecto Final Integrador del Módulo 6

### Workflow Completo de Colaboración BIM

**Objetivo:** Demostrar dominio completo del ciclo de colaboración BIM en infraestructura.

### Descripción del Proyecto

Crear workflow end-to-end que incluya:

**FASE 1: Project Setup (2 horas)**
- Crear proyecto ACC configurado profesionalmente
- Invitar equipo multidisciplinario (mínimo 4 personas)
- Establecer estructura de carpetas y permisos
- Upload modelos iniciales (Civil 3D)

**FASE 2: Design Collaboration (3 horas)**
- Publicar 3 versiones del diseño
- Ciclo completo de markups y reviews
- Gestionar 5+ issues hasta resolución
- Workflow de aprobación completado
- Documentar comunicación del equipo

**FASE 3: Model Coordination (4 horas)**
- Federar modelos en Navisworks
- Ejecutar clash detection comprehensivo
- Documentar 15+ clashes
- Resolver clashes (modificar modelos)
- Re-run tests para verificar
- Generate clash report profesional

**FASE 4: Construction Planning (2 horas)**
- Crear schedule de construcción (20+ tasks)
- 4D simulation en Navisworks
- Export video de simulación
- Present a "cliente" (video narrado)

**FASE 5: BIM Exchange (2 horas)**
- Export modelo a IFC 4
- Export datos a LandXML
- Validar ambos exports
- Test interoperabilidad
- Document proceso y findings

**FASE 6: Documentation (2 horas)**
- Consolidar toda la documentación
- Crear presentation profesional (PowerPoint/PDF)
- Video demo del workflow completo (10-15 minutos)
- Write up de lessons learned

### Entregables del Proyecto Final

**1. ACC Project (funcional):**
- URL con guest access
- Screenshots de configuración
- Activity log exported

**2. Navisworks Coordination:**
- Federated model (.nwf)
- Clash reports (HTML + Excel)
- Resolution matrix
- Viewpoints saved

**3. 4D Simulation:**
- Schedule file
- Video simulation (MP4)
- Narrated presentation

**4. OpenBIM Exports:**
- IFC file validado
- LandXML file validado
- Validation reports
- Interoperability test results

**5. Final Presentation:**
- PowerPoint/PDF (15-20 slides):
  - Project overview
  - Workflow implemented
  - Results achieved
  - Challenges overcome
  - Lessons learned
  - ROI analysis
- Video demo (10-15 min)
- Written report (10-15 pages)

### Criterios de Evaluación del Proyecto Final

| Criterio | Peso | Descripción |
|----------|------|-------------|
| ACC Configuration | 15% | Proyecto configurado profesionalmente |
| Collaboration Workflow | 20% | Markups, issues, aprobaciones funcionales |
| Model Coordination | 25% | Federación correcta, clash detection completa |
| 4D Simulation | 15% | Schedule realista, simulación efectiva |
| OpenBIM Exports | 15% | IFC y LandXML validados correctamente |
| Documentation | 10% | Presentación y reportes profesionales |

**Calificación mínima para aprobar:** 85%

**Tiempo total estimado:** 15-18 horas

---

## Rúbrica Detallada de Evaluación

### Excelente (90-100%)
- Configuración impecable, siguiendo best practices
- Workflows completos y bien documentados
- Clash detection exhaustiva con resoluciones creativas
- Exports perfectamente validados
- Documentation profesional y detallada
- Demuestra innovación y pensamiento crítico

### Bueno (80-89%)
- Configuración correcta con minor issues
- Workflows funcionales
- Clash detection completa
- Exports validados con minor warnings
- Documentation adecuada
- Cumple todos los requisitos

### Satisfactorio (70-79%)
- Configuración básica funcional
- Workflows parcialmente implementados
- Clash detection básica
- Exports con algunos errores
- Documentation mínima
- Cumple requisitos básicos

### Insuficiente (<70%)
- Configuración incompleta
- Workflows no funcionales
- Clash detection inadecuada
- Exports no validados
- Documentation insuficiente
- No cumple requisitos mínimos

---

## Recursos de Ayuda

### Tutoriales y Documentación

**Autodesk Construction Cloud:**
- [ACC Help Documentation](https://help.autodesk.com/view/ACONST/ENU/)
- [ACC Learning Path](https://learn.autodesk.com/pathway/acc)
- [Design Collaboration Workflows](https://www.autodesk.com/bim-360/construction-cloud/)

**Navisworks:**
- [Navisworks 2026 Help](https://help.autodesk.com/view/NAV/2026/ENU/)
- [Clash Detective Guide](https://knowledge.autodesk.com/support/navisworks-products)
- [TimeLiner Tutorials](https://www.autodesk.com/navisworks)

**IFC and OpenBIM:**
- [buildingSMART Technical Documentation](https://technical.buildingsmart.org/)
- [IFC for Infrastructure](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/)
- [LandXML.org](http://www.landxml.org/)

### Archivos de Ejemplo

Disponibles en:
```
/recursos/modulo-6/
├── modelos-ejemplo/
│   ├── Highway-Civil3D.dwg
│   ├── Bridge-Revit.rvt
│   └── Drainage-Civil3D.dwg
├── templates/
│   ├── ACC-Project-Template.json
│   └── Clash-Rules-Infrastructure.xml
└── exports/
    ├── Example.ifc
    └── Example.xml
```

### Foro y Soporte

- Discord DISTMAH: Canal #modulo-6-ayuda
- Office Hours: Viernes 4-6pm
- Email: support@distmah.com

---

## Checklist de Completación

**Ejercicios Individuales:**
- [ ] Ejercicio 1: Configuración ACC
- [ ] Ejercicio 2: RFIs e Issues
- [ ] Ejercicio 3: Navisworks Coordination
- [ ] Ejercicio 4: 4D Simulation
- [ ] Ejercicio 5: OpenBIM Exports

**Proyecto Final:**
- [ ] Fase 1: Project Setup
- [ ] Fase 2: Design Collaboration
- [ ] Fase 3: Model Coordination
- [ ] Fase 4: Construction Planning
- [ ] Fase 5: BIM Exchange
- [ ] Fase 6: Documentation

**Entregables:**
- [ ] Screenshots y configuraciones
- [ ] Archivos exportados validados
- [ ] Reportes generados
- [ ] Video demo del workflow
- [ ] Presentation final
- [ ] Written report

---

## Certificación Final

Para obtener el **Certificado Civil 3D 2026 Advanced Professional** debes:

1. ✅ Completar todos los ejercicios del Módulo 6
2. ✅ Entregar proyecto final completo
3. ✅ Obtener calificación mínima de 85%
4. ✅ Presentar demo en vivo (15 minutos)
5. ✅ Haber completado Módulos 1-5 previamente

**Beneficios al obtener certificación:**
- Certificado digital oficial DISTMAH ATC
- Badge para LinkedIn
- Inclusión en directorio de Alumni
- Acceso a comunidad profesional exclusiva
- Descuentos en cursos futuros (20%)
- Job placement assistance

---

## Palabras Finales

Este es el **ejercicio final del curso más completo de Civil 3D 2026 Avanzado**.

Completar estos ejercicios demuestra que has alcanzado **nivel experto** en:
- Diseño avanzado de infraestructura
- Automatización con Dynamo y Python
- Colaboración BIM profesional
- Coordinación multidisciplinaria
- Intercambio openBIM

**Tiempo total de ejercicios Módulo 6:** 20-25 horas

**Este es tu momento de brillar.**

Demuestra todo lo aprendido. Crea workflows que impresionen. Resuelve problemas complejos. Documenta profesionalmente.

**El futuro de la infraestructura digital lo construyes tú.**

---

**DISTMAH Advanced Technical Center (ATC)**
*Formando expertos BIM en infraestructura desde 2024*

**¡Éxito en tu proyecto final!**

---
