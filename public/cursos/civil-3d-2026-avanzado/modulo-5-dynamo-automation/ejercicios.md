# Ejercicios Prácticos - Módulo 5: Dynamo for Civil 3D y Automation

## Instrucciones Generales

Estos ejercicios están diseñados para reforzar los conceptos aprendidos en cada lección del Módulo 5. Completa los ejercicios en orden y documenta tus resultados.

**Formato de Entrega:**
- Scripts Dynamo (.dyn)
- Scripts Python (.py)
- Capturas de pantalla de resultados
- Documento PDF con explicaciones

**Criterios de Evaluación:**
- Funcionalidad correcta (40%)
- Código limpio y documentado (30%)
- Creatividad y optimización (20%)
- Documentación y presentación (10%)

---

## Ejercicio 1: Dynamo Basics (Lección 1)

### 1.1 Importador de Puntos Topográficos Mejorado

**Objetivo:** Crear script Dynamo que importa puntos desde Excel con validación y filtrado.

**Requisitos:**
1. Importar datos desde Excel (Punto, X, Y, Z, Código)
2. Validar que las coordenadas sean numéricas válidas
3. Filtrar puntos por código (ej: solo "GND" o "BUILD")
4. Crear puntos COGO en Civil 3D
5. Generar reporte de puntos importados vs rechazados

**Datos de Prueba (Excel):**
```
| Point | X        | Y        | Z      | Code  |
|-------|----------|----------|--------|-------|
| 1     | 1000.00  | 2000.00  | 100.50 | GND   |
| 2     | 1050.00  | 2100.00  | 102.30 | GND   |
| 3     | invalid  | 2050.00  | 98.75  | GND   |
| 4     | 1150.00  | 2150.00  | 105.20 | BUILD |
| 5     | 1200.00  | 2200.00  | 110.40 | TREE  |
```

**Entregable:**
- Script Dynamo: `Ejercicio_1.1_ImportadorPuntos.dyn`
- Reporte CSV: `puntos_importados.csv`
- Screenshot del resultado

**Tiempo estimado:** 45 minutos

---

### 1.2 Calculadora Geométrica Avanzada

**Objetivo:** Crear custom node que calcula múltiples propiedades geométricas.

**Inputs:**
- Dos puntos (Point A, Point B)

**Outputs:**
- Distancia horizontal
- Distancia 3D
- Azimut (ángulo desde norte)
- Pendiente (%)
- Diferencia de elevación

**Requisitos:**
1. Crear como custom node reutilizable
2. Incluir validación de inputs
3. Documentar completamente el nodo
4. Probar con al menos 5 pares de puntos

**Entregable:**
- Custom Node: `GeometricCalculator.dyf`
- Script de prueba: `Test_GeometricCalculator.dyn`
- Documento con resultados verificados

**Tiempo estimado:** 30 minutos

---

## Ejercicio 2: Automated Design Workflows (Lección 2)

### 2.1 Generador de Alineamiento desde Polilínea

**Objetivo:** Crear script que convierte polilíneas AutoCAD en alineamientos Civil 3D.

**Requisitos:**
1. Seleccionar polilínea del dibujo
2. Analizar geometría (segmentos rectos y arcos)
3. Crear alineamiento con mismo trazado
4. Configurar estación inicial = 0+000
5. Aplicar estilo "Design"

**Parámetros configurables:**
- Nombre del alineamiento
- Site de destino
- Estilo de alineamiento

**Entregable:**
- Script Dynamo: `Ejercicio_2.1_PolylineToAlignment.dyn`
- DWG de prueba con polilínea
- Screenshot del alineamiento creado

**Tiempo estimado:** 1 hora

---

### 2.2 Optimizador de Perfil Vertical

**Objetivo:** Crear script que optimiza perfil vertical para minimizar movimiento de tierras.

**Requisitos:**
1. Leer perfil de superficie existente
2. Definir restricciones:
   - Pendiente máxima: 8%
   - Pendiente mínima: 0.5%
   - Radio mínimo de curva vertical: 2500m
3. Calcular perfil optimizado (balance corte/relleno)
4. Crear perfil de diseño en Civil 3D
5. Generar reporte con volúmenes estimados

**Algoritmo:**
- Usar promedio móvil para suavizar terreno
- Aplicar restricciones de pendiente
- Minimizar diferencia absoluta con terreno

**Entregable:**
- Script Dynamo/Python: `Ejercicio_2.2_ProfileOptimizer.dyn`
- Reporte de volúmenes: `volumenes_optimizados.xlsx`
- Comparación antes/después

**Tiempo estimado:** 2 horas

---

## Ejercicio 3: Python Scripting (Lección 3)

### 3.1 Batch Processor de Archivos DWG

**Objetivo:** Crear script Python que procesa múltiples archivos Civil 3D.

**Requisitos:**
1. Procesar todos los DWG en una carpeta
2. Para cada archivo:
   - Abrir sin mostrar interfaz
   - Extraer lista de alineamientos
   - Calcular longitud total
   - Contar número de curvas
   - Exportar datos a CSV
3. Generar reporte consolidado Excel

**Estructura del Reporte:**
```
| Archivo          | Alineamientos | Long. Total | Curvas | Superficies |
|------------------|---------------|-------------|--------|-------------|
| Proyecto_A.dwg   | 3             | 5,234.50    | 12     | 2           |
| Proyecto_B.dwg   | 2             | 3,456.78    | 8      | 1           |
```

**Entregable:**
- Script Python: `batch_processor.py`
- Carpeta con 5+ archivos DWG de prueba
- Reporte Excel consolidado: `batch_report.xlsx`

**Tiempo estimado:** 2 horas

---

### 3.2 Validador de Estándares de Diseño

**Objetivo:** Crear script Python que valida cumplimiento de estándares.

**Estándares a validar:**
1. **Alineamientos:**
   - Radio mínimo de curvas: 50m
   - Longitud mínima de tangentes: 20m
   - Nomenclatura correcta: "HWY-XXX"

2. **Perfiles:**
   - Pendiente máxima: 8%
   - Pendiente mínima: 0.5%
   - Radio mínimo curva vertical: 2500m

3. **Superficies:**
   - Mínimo 100 puntos
   - Rango de elevaciones razonable (< 500m)

**Entregable:**
- Script Python: `design_standards_validator.py`
- Reporte HTML: `validation_report.html`
- DWG de prueba con errores intencionales

**Tiempo estimado:** 2.5 horas

---

## Ejercicio 4: Custom Tools Development (Lección 4)

### 4.1 Package Dynamo Completo

**Objetivo:** Crear package de Dynamo con múltiples custom nodes útiles.

**Custom Nodes a incluir:**
1. **StationOffsetCalculator** - Calcula station/offset desde XY
2. **CoordinateConverter** - Convierte entre sistemas de coordenadas
3. **AlignmentAnalyzer** - Analiza geometría de alineamiento
4. **SurfaceSampler** - Muestrea elevaciones en grid

**Requisitos del Package:**
- Nombre: "Tu_Nombre_Civil3D_Toolkit"
- Categoría: "Civil3D.Utilities"
- Todos los nodos documentados
- README.md completo
- Ejemplos de uso para cada nodo

**Entregable:**
- Package completo: `NombrePackage.zip`
- Documentación: `README.md`
- Scripts de ejemplo para cada nodo

**Tiempo estimado:** 3 horas

---

### 4.2 Add-in .NET Básico

**Objetivo:** Crear add-in .NET para Civil 3D con comando personalizado.

**Comando a implementar:**
- **EXPORTALIGNMENTDATA** - Exporta datos de alineamiento a CSV

**Funcionalidad:**
1. Solicitar al usuario seleccionar alineamiento
2. Pedir ubicación de archivo CSV
3. Exportar datos:
   - Nombre del alineamiento
   - Longitud total
   - Listado de elementos (tangentes, curvas)
   - Coordenadas cada 10m

**Requisitos adicionales:**
- Manejo de errores robusto
- Mensajes informativos al usuario
- Logging de operaciones

**Entregable:**
- Proyecto Visual Studio completo
- DLL compilada
- Instrucciones de instalación
- Video demo (2-3 minutos)

**Tiempo estimado:** 4 horas

---

## Ejercicio 5: BIM Automation (Lección 5)

### 5.1 Sistema de Validación BIM Personalizado

**Objetivo:** Extender el BIM Validator con checks específicos de tu empresa/región.

**Checks adicionales a implementar:**
1. **Nomenclatura local:**
   - Prefijos según normativa de tu país
   - Validar códigos de clasificación

2. **Estándares regionales:**
   - Radios de curva según normativa local
   - Pendientes según tipo de vía

3. **Completitud de datos:**
   - Todas las superficies tienen descripción
   - Todos los alineamientos tienen perfil

4. **Compliance específico:**
   - Implementar al menos 3 checks de tu región

**Entregable:**
- Script Python extendido: `custom_bim_validator.py`
- Documento de estándares: `estandares_locales.md`
- Reporte HTML de validación
- DWG de prueba con errores

**Tiempo estimado:** 3 horas

---

### 5.2 Sistema de Nomenclatura Automática Inteligente

**Objetivo:** Crear sistema que renombra objetos automáticamente según patrones inteligentes.

**Funcionalidad:**
1. Analizar contenido del dibujo
2. Detectar tipo de proyecto (carretera, urbano, etc.)
3. Aplicar nomenclatura apropiada automáticamente
4. Generar reporte de cambios realizados

**Patrones de nomenclatura:**
```
Carreteras:
- Alineamientos: HWY-{número}-{ubicación}
- Superficies: EG|FG-{descripción}
- Corredores: CORR-HWY-{número}

Urbano:
- Alineamientos: ST-{nombre calle}-{número}
- Superficies: {zona}-EG|FG
- Corredores: CORR-ST-{nombre}
```

**Entregable:**
- Script Python: `intelligent_naming_system.py`
- Configuración JSON: `naming_patterns.json`
- Reporte de cambios: `renaming_report.html`

**Tiempo estimado:** 2.5 horas

---

## Proyecto Final del Módulo

### Sistema Completo de Automatización de Carreteras

**Objetivo:** Integrar todo lo aprendido en un sistema completo end-to-end.

**Descripción:**
Crear sistema que toma datos crudos y produce diseño completo de carretera validado.

**Workflow completo:**

```
1. INPUT DATA (Excel):
   - Datos de alineamiento (PI's, curvas)
   - Datos topográficos (puntos)
   - Parámetros de diseño

2. PROCESSING (Dynamo + Python):
   - Crear superficie de terreno
   - Generar alineamiento horizontal
   - Optimizar perfil vertical
   - Construir corredor con assembly parametrico
   - Generar secciones transversales

3. VALIDATION (Python):
   - Validar todos los estándares
   - Verificar cumplimiento normativo
   - Generar reporte de errores/warnings

4. OUTPUT:
   - Modelo Civil 3D completo
   - Planos PDF automáticos
   - Reportes de cantidades
   - Reporte de validación
   - Documentación BIM
```

**Requisitos Técnicos:**

1. **Módulo de Importación:**
   - Lee Excel con datos de entrada
   - Valida completitud de datos
   - Crea puntos COGO

2. **Módulo de Diseño:**
   - Crea superficie TIN
   - Genera alineamiento horizontal
   - Optimiza perfil vertical
   - Crea assembly parametrico
   - Construye corredor completo

3. **Módulo de Validación:**
   - Ejecuta todos los checks BIM
   - Valida estándares de diseño
   - Genera reporte HTML profesional

4. **Módulo de Output:**
   - Exporta cantidades a Excel
   - Genera planos en PDF
   - Crea documentación markdown

**Datos de Entrada Proporcionados:**
```
proyecto_carretera/
├── input/
│   ├── alignment_data.xlsx (datos de alineamiento)
│   ├── topo_points.xlsx (5000 puntos topográficos)
│   └── design_parameters.json (parámetros de diseño)
├── templates/
│   ├── assembly_template.dwg
│   └── sheet_template.dwt
└── standards/
    └── design_standards.json
```

**Entregables del Proyecto Final:**

1. **Scripts:**
   - `main_workflow.dyn` (workflow principal Dynamo)
   - `profile_optimizer.py` (optimizador de perfil)
   - `bim_validator.py` (validador completo)
   - `report_generator.py` (generador de reportes)

2. **Documentación:**
   - `README.md` (instrucciones de uso)
   - `ARCHITECTURE.md` (arquitectura del sistema)
   - `USER_GUIDE.md` (guía de usuario)

3. **Outputs:**
   - `Highway_Project.dwg` (modelo completado)
   - `Sheets.pdf` (planos generados)
   - `Quantities.xlsx` (cantidades de obra)
   - `Validation_Report.html` (reporte de validación)
   - `BIM_Documentation.pdf` (documentación completa)

4. **Presentación:**
   - Video demo (5-10 minutos)
   - Presentación PowerPoint (10 slides)
   - Análisis de ROI y beneficios

**Criterios de Evaluación:**

| Criterio | Peso | Descripción |
|----------|------|-------------|
| Funcionalidad completa | 30% | Sistema funciona end-to-end |
| Calidad del código | 20% | Código limpio, documentado, modular |
| Validación BIM | 20% | Checks comprehensivos y efectivos |
| Outputs profesionales | 15% | Reportes y planos de calidad |
| Documentación | 10% | Instrucciones claras y completas |
| Innovación | 5% | Características adicionales creativas |

**Tiempo estimado:** 15-20 horas

---

## Recursos de Ayuda

### Documentación Oficial
- [Dynamo Primer](https://primer.dynamobim.org/)
- [Civil 3D API Documentation](https://help.autodesk.com/view/CIV3D/2026/ENU/)
- [Python.NET Documentation](http://pythonnet.github.io/)

### Ejemplos de Código
Todos los ejemplos de las lecciones están disponibles en:
```
/recursos/modulo-5/codigo-ejemplo/
```

### Datos de Prueba
Datos para ejercicios disponibles en:
```
/recursos/modulo-5/datos-prueba/
```

### Foro de Ayuda
- Discord DISTMAH: Canal #modulo-5-ayuda
- Email: support@distmah.com

---

## Checklist de Completación

Marca cada ejercicio al completarlo:

**Lección 1 - Dynamo Basics:**
- [ ] 1.1 Importador de Puntos Mejorado
- [ ] 1.2 Calculadora Geométrica Avanzada

**Lección 2 - Automated Workflows:**
- [ ] 2.1 Generador de Alineamiento desde Polilínea
- [ ] 2.2 Optimizador de Perfil Vertical

**Lección 3 - Python Scripting:**
- [ ] 3.1 Batch Processor de Archivos
- [ ] 3.2 Validador de Estándares

**Lección 4 - Custom Tools:**
- [ ] 4.1 Package Dynamo Completo
- [ ] 4.2 Add-in .NET Básico

**Lección 5 - BIM Automation:**
- [ ] 5.1 Sistema de Validación BIM Personalizado
- [ ] 5.2 Sistema de Nomenclatura Inteligente

**Proyecto Final:**
- [ ] Sistema Completo de Automatización

---

## Certificación

Para obtener el **Certificado de Dynamo & Automation Specialist** debes:

1. ✅ Completar todos los ejercicios de las lecciones (8 ejercicios)
2. ✅ Entregar proyecto final completo y funcional
3. ✅ Obtener calificación mínima de 85%
4. ✅ Presentar demo en vivo del proyecto final (15 minutos)

**Beneficios del certificado:**
- Reconocimiento oficial DISTMAH ATC
- Badge digital para LinkedIn
- Acceso a comunidad de Alumni
- Descuentos en cursos futuros

---

**DISTMAH Advanced Technical Center (ATC)**
*Formando expertos en automatización BIM desde 2024*

---

## Notas Finales

**Consejos para éxito:**
1. No intentes completar todo de una vez - distribuye en varias sesiones
2. Documenta tu proceso - te ayudará en el proyecto final
3. Experimenta y sé creativo - los mejores proyectos innovan
4. Pide ayuda cuando te bloquees - estamos aquí para apoyarte
5. Guarda versiones de tu trabajo - versionado es importante

**Fechas de entrega sugeridas:**
- Ejercicios Lección 1-2: Semana 1
- Ejercicios Lección 3-4: Semana 2
- Ejercicio Lección 5: Semana 3
- Proyecto Final: Semana 4

**Éxito en tus ejercicios!**
