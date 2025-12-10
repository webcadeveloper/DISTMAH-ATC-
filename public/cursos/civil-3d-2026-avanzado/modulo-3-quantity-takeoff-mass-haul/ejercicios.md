# Ejercicios Prácticos - Módulo 3: Quantity Takeoff y Mass Haul

## Información General

Estos ejercicios están diseñados para aplicar los conceptos aprendidos en las lecciones del Módulo 3. Cada ejercicio representa un escenario profesional real que encontrarás en proyectos de infraestructura.

**Archivos requeridos:**
- Los archivos de práctica se encuentran en: `Modulo-3-Ejercicios.zip`
- Incluye archivos DWG con corredores, superficies y alineamientos configurados
- Templates de Excel para reportes
- Archivos de pay items de ejemplo

**Tiempo estimado total:** 12-15 horas

**Evaluación:**
- Cada ejercicio vale 20 puntos
- Total del módulo: 100 puntos
- Puntuación mínima para aprobar: 80 puntos

---

## Ejercicio 1: Análisis de Materiales Multi-Zona

**Objetivo:** Configurar Quantity Takeoff Criteria con múltiples zonas de material y generar tablas profesionales.

**Escenario:**
Estás trabajando en un proyecto de carretera de 3.5 km que atraviesa diferentes tipos de terreno geológico. Los estudios de suelos han identificado tres tipos de material en las zonas de corte:

- **Topsoil (0-0.3m):** Material orgánico, reutilizable para jardinería
- **Material Común (0.3-2.5m):** Apto para rellenos estructurales
- **Roca (>2.5m):** Requiere voladura, no reutilizable

**Especificaciones del proyecto:**
- Swell factor para material común: 1.20
- Swell factor para roca: 1.40
- Shrinkage factor para rellenos compactados: 0.88
- El topsoil se almacena separadamente (100% reutilización)

**Tareas:**

### Parte A: Configuración de QTO Criteria (8 puntos)

1. Abrir archivo: `Ejercicio1-Highway-Corridor.dwg`
2. Crear nuevo Quantity Takeoff Criteria: "QTO-MultiMaterial-Ex1"
3. Configurar las siguientes zonas de material:

   **Zona 1: Topsoil Stripping**
   - Tipo: Cut Zone
   - Profundidad: 0.00 a -0.30m desde EG Surface
   - Cut Factor: 1.00 (sin swell, se maneja suelto)
   - Nombre: "Topsoil-Stockpile"

   **Zona 2: Common Excavation**
   - Tipo: Cut Zone
   - Profundidad: -0.30 a -2.50m desde EG Surface
   - Cut Factor: 1.20 (swell)
   - Nombre: "Cut-Common"

   **Zona 3: Rock Excavation**
   - Tipo: Cut Zone
   - Profundidad: > -2.50m desde EG Surface
   - Cut Factor: 1.40 (mayor swell por fragmentación)
   - Nombre: "Cut-Rock"

   **Zona 4: Embankment Fill**
   - Tipo: Fill Zone
   - Todo el relleno
   - Fill Factor: 0.88 (shrinkage por compactación)
   - Nombre: "Fill-Compacted"

4. Guardar QTO Criteria

### Parte B: Cálculo de Cantidades (4 puntos)

5. Ejecutar **Compute Materials** en el corredor con el QTO Criteria configurado
6. Verificar resultados en Toolspace > Prospector > Quantities
7. Documentar en reporte:
   - Volumen total de topsoil
   - Volumen total de excavación común (sin ajustar y con swell)
   - Volumen total de roca (sin ajustar y con swell)
   - Volumen total de relleno (compactado)
   - Balance neto del proyecto

### Parte C: Tablas de Materiales (8 puntos)

8. Crear **Table Style** personalizado: "Professional-Material-Table"
   - Configurar columnas: Material, Cut Volume, Fill Volume, Net Volume
   - Precisión: 1 decimal para volúmenes
   - Formato: Separadores de miles, bordes profesionales
   - Sombreado alternado gris 10%

9. Insertar **Total Volume Table** en layout usando el estilo creado
10. Insertar **Sectional Volume Table**:
    - Incremento: 100m
    - Mostrar volúmenes acumulados
    - Incluir todas las zonas de material

11. Ajustar escalas y posición para presentación profesional

**Entregables:**
- Archivo DWG con QTO Criteria configurado
- Screenshot de resultados de Compute Materials
- Layout con tablas de materiales (PDF)
- Reporte escrito (1 página) con análisis de balance

**Criterios de evaluación:**
- QTO Criteria correctamente configurado (8 pts)
- Cálculos precisos con factores aplicados (4 pts)
- Tablas profesionales y completas (8 pts)

---

## Ejercicio 2: Diagrama de Masa Completo

**Objetivo:** Generar y analizar Mass Haul Diagram para optimizar estrategias de acarreo.

**Escenario:**
Proyecto de ampliación de autopista de 6.2 km. Las especificaciones del contrato establecen:
- Free haul distance: 500m
- Overhaul limit (máximo económico): 2,500m
- Costo de overhaul: $22.50 MXN por m³-km

El proyecto presenta zonas de corte profundo alternadas con rellenos, creando oportunidades de balance interno pero también riesgo de overhaul costoso.

**Tareas:**

### Parte A: Generación del Diagrama de Masa (6 puntos)

1. Abrir archivo: `Ejercicio2-Highway-Expansion.dwg`
2. Verificar que Compute Materials está ejecutado
3. Generar **Mass Haul View**:
   - Alignment: "Mainline-Centerline"
   - Material List: "Total-Earthwork"
   - Station Range: 0+000 a 6+200
   - Style: Configurar estilo profesional con cuadrícula

4. Configurar escalas:
   - Horizontal: Misma que Profile View (1:1000)
   - Vertical: Ajustar para claridad (sugerido 1:500 o 1:1000)

### Parte B: Análisis de Free Haul (6 puntos)

5. Agregar **Balance Line** para free haul:
   - Type: Free Haul
   - Distance: 500m
   - Style: Línea discontinua verde

6. Identificar zonas de overhaul:
   - Marcar áreas donde curva de masa excede límites de free haul
   - Calcular volumen en overhaul para cada zona

7. Calcular costo total de overhaul:
   - Extraer datos de overhaul (m³-estación)
   - Convertir a m³-km
   - Multiplicar por tarifa ($22.50 MXN/m³-km)
   - Documentar cálculo completo

### Parte C: Estrategias de Balance (8 puntos)

8. Dibujar **Balance Lines** óptimas manualmente:
   - Objetivo: Minimizar overhaul
   - Trazar líneas horizontales entre intersecciones de curva de masa
   - Identificar mínimo 3 secciones balanceadas

9. Para cada sección balanceada:
   - Estación inicio y fin
   - Volumen balanceado
   - Distancia promedio de acarreo
   - Dirección de acarreo (forward/backward)

10. Identificar necesidad de préstamos o desperdicios:
    - Analizar ordenada final del diagrama
    - Si positiva: Volumen de desperdicio = ordenada máxima
    - Si negativa: Volumen de préstamo = |ordenada mínima|

11. Proponer ubicación de:
    - Sitios de préstamo (si aplica)
    - Sitios de desperdicio (si aplica)
    - Justificar selección con base en diagrama de masa

**Entregables:**
- Mass Haul View en layout profesional (PDF)
- Tabla de secciones balanceadas (Excel o tabla en DWG)
- Cálculo detallado de overhaul y costos
- Reporte de estrategia de acarreo (2 páginas) con recomendaciones

**Criterios de evaluación:**
- Diagrama de masa correctamente generado y presentado (6 pts)
- Análisis preciso de free haul y overhaul (6 pts)
- Estrategia de balance bien fundamentada (8 pts)

---

## Ejercicio 3: Presupuesto de Terracerías con Pay Items

**Objetivo:** Configurar pay items según especificaciones estatales y generar estimación de costos completa.

**Escenario:**
Proyecto de carretera estatal en México, debe cumplir especificaciones SCT (Secretaría de Comunicaciones y Transportes). Debes preparar el presupuesto de terracerías para licitación pública.

**Especificaciones del contrato:**
- Normas: N-CMT-1-02 (Materiales para Terracerías)
- Catálogo: SCT 2024
- Precios: Tabulador estatal vigente

**Tareas:**

### Parte A: Configuración de Pay Item File (6 puntos)

1. Abrir archivo: `Ejercicio3-State-Highway.dwg`
2. Crear **Pay Item File**: "SCT-Earthwork-2024"
3. Agregar los siguientes pay items con códigos SCT:

   **CAR-2-01-003: Excavación en Terreno Tipo A**
   - Descripción: Excavación por medios mecánicos, material suelto
   - Unidad: Metro cúbico (m³)
   - Precio Unitario: $95.00 MXN
   - Especificación: N-CMT-2-02-002/02
   - Notas: Incluye acarreo libre 20m

   **CAR-2-01-004: Excavación en Terreno Tipo B**
   - Descripción: Excavación por medios mecánicos, material semiduro
   - Unidad: Metro cúbico (m³)
   - Precio Unitario: $145.00 MXN
   - Especificación: N-CMT-2-02-002/02

   **CAR-2-01-005: Excavación en Roca**
   - Descripción: Excavación en roca fija, incluye voladura
   - Unidad: Metro cúbico (m³)
   - Precio Unitario: $485.00 MXN
   - Especificación: N-CMT-2-02-003/02

   **CAR-2-02-002: Formación de Terraplenes**
   - Descripción: Relleno compactado en capas, 90% Proctor
   - Unidad: Metro cúbico (m³)
   - Precio Unitario: $78.50 MXN
   - Especificación: N-CMT-2-02-001/02

   **CAR-2-03-001: Sobreacarreo**
   - Descripción: Acarreo en kilómetro subsecuente
   - Unidad: m³-kilómetro
   - Precio Unitario: $18.50 MXN
   - Especificación: N-CMT-2-03-001/02

4. Guardar Pay Item File

### Parte B: Asignación de Pay Items a Materiales (4 puntos)

5. Editar **QTO Criteria** del corredor
6. Asignar pay items a cada zona de material:
   - Material "Cut-TerrainA" → CAR-2-01-003
   - Material "Cut-TerrainB" → CAR-2-01-004
   - Material "Cut-Rock" → CAR-2-01-005
   - Material "Fill-Compacted" → CAR-2-02-002

7. Verificar que conversiones de unidades están correctas
8. Re-ejecutar Compute Materials para actualizar con pay items

### Parte C: Generación de Presupuesto (10 puntos)

9. Generar **Pay Item Report**:
   - Format: Excel (XLSX)
   - Incluir todas las columnas estándar
   - Style: Formato de licitación pública

10. En Excel, agregar:
    - Cálculo de sobreacarreo (basado en Mass Haul Diagram)
    - Subtotal de terracerías
    - Costos indirectos (12%)
    - Utilidad (8%)
    - IVA (16%)
    - Total del presupuesto

11. Crear tabla resumen ejecutiva:
```
CONCEPTO                        | CANTIDAD    | UNIDAD | P.U.      | IMPORTE
--------------------------------|-------------|--------|-----------|-------------
Excavación Terreno A            | [calcular]  | m³     | $95.00    | [calcular]
Excavación Terreno B            | [calcular]  | m³     | $145.00   | [calcular]
Excavación en Roca              | [calcular]  | m³     | $485.00   | [calcular]
Formación de Terraplenes        | [calcular]  | m³     | $78.50    | [calcular]
Sobreacarreo                    | [calcular]  | m³-km  | $18.50    | [calcular]
--------------------------------|-------------|--------|-----------|-------------
SUBTOTAL TERRACERÍAS            |             |        |           | [calcular]
Costos Indirectos (12%)         |             |        |           | [calcular]
Utilidad (8%)                   |             |        |           | [calcular]
SUBTOTAL                        |             |        |           | [calcular]
IVA (16%)                       |             |        |           | [calcular]
--------------------------------|-------------|--------|-----------|-------------
TOTAL PRESUPUESTO TERRACERÍAS   |             |        |           | [TOTAL]
```

12. Aplicar formato profesional:
    - Logo de empresa (ficticio)
    - Encabezado con datos del proyecto
    - Firmas (Ingeniero, Gerente de Proyecto)
    - Fecha y número de revisión

**Entregables:**
- Pay Item File configurado (export XML o screenshot)
- QTO Criteria con pay items asignados
- Presupuesto completo en Excel (formato profesional)
- PDF del presupuesto para licitación

**Criterios de evaluación:**
- Pay items correctamente configurados según catálogo SCT (6 pts)
- Asignación precisa a materiales (4 pts)
- Presupuesto completo, preciso y profesional (10 pts)

---

## Ejercicio 4: Optimización de Balance de Tierras

**Objetivo:** Aplicar técnicas de optimización para minimizar costos de movimiento de tierras.

**Escenario:**
Tienes un diseño inicial de carretera de 4.8 km con desbalance significativo. El director de proyecto solicita optimización para reducir costos antes de licitación.

**Datos del diseño inicial:**
- Balance neto: +28,500 m³ (exceso de corte)
- Overhaul: 245,000 m³-estación (24,500 m³-km)
- Costo estimado de terracerías: $12,850,000 MXN

**Restricciones de diseño:**
- Pendiente máxima: 6%
- Pendiente mínima: 0.5%
- K values mínimos según velocidad de diseño (80 km/h)
- Clearance vertical mínimo en puentes: 5.50m

**Tareas:**

### Parte A: Análisis de Diseño Inicial (4 puntos)

1. Abrir archivo: `Ejercicio4-Highway-Initial.dwg`
2. Ejecutar Compute Materials
3. Generar Mass Haul Diagram
4. Documentar condiciones iniciales:
   - Balance neto total
   - Volumen total de corte y relleno
   - Overhaul total (m³-km)
   - Identificar 3 zonas críticas con mayor overhaul

5. Calcular costos iniciales:
   - Costo de excavación
   - Costo de relleno
   - Costo de overhaul
   - Costo de desperdicio (exceso)
   - TOTAL

### Parte B: Estrategia de Optimización (6 puntos)

6. Desarrollar estrategia de optimización documentada:
   - Identificar oportunidades de ajuste de perfil
   - Evaluar posibilidad de bancos de préstamo internos
   - Analizar relocalización de sitios de desperdicio

7. Proponer ajustes específicos:
   - **Zona 1 (ej: STA 1+200 a 2+000):**
     - Acción: Subir rasante +0.15m
     - Justificación: Reducir corte excesivo
     - Impacto estimado en volúmenes

   - **Zona 2 (ej: STA 3+500 a 4+200):**
     - Acción: Bajar rasante -0.10m
     - Justificación: Incrementar relleno, usar material de corte excedente
     - Impacto estimado

   - **Zona 3:** [Definir según análisis]

8. Verificar cumplimiento de restricciones geométricas

### Parte C: Implementación y Resultados (10 puntos)

9. Implementar ajustes propuestos en Civil 3D:
   - Modificar perfil vertical según estrategia
   - Re-ejecutar Compute Materials
   - Generar nuevo Mass Haul Diagram

10. Documentar resultados optimizados:
    - Nuevo balance neto
    - Nuevo overhaul total
    - Comparación antes/después

11. Calcular ahorros:
```
CONCEPTO                  | INICIAL        | OPTIMIZADO     | AHORRO
--------------------------|----------------|----------------|------------
Volumen de Corte          | [calcular] m³  | [calcular] m³  | [diferencia]
Volumen de Relleno        | [calcular] m³  | [calcular] m³  | [diferencia]
Balance Neto              | +28,500 m³     | [calcular]     | [mejora %]
Overhaul (m³-km)          | 24,500         | [calcular]     | [reducción]
Costo Overhaul            | $XXX,XXX       | $XXX,XXX       | $XXX,XXX
Costo Desperdicio         | $XXX,XXX       | $XXX,XXX       | $XXX,XXX
--------------------------|----------------|----------------|------------
COSTO TOTAL TERRACERÍAS   | $12,850,000    | [calcular]     | $XXX,XXX
AHORRO TOTAL              |                |                | [% y monto]
```

12. Validar que ajustes cumplen todas las restricciones geométricas

**Entregables:**
- Reporte de análisis inicial (1 página)
- Estrategia de optimización documentada (2 páginas)
- Archivo DWG con diseño optimizado
- Comparación antes/después (tabla y gráficos)
- Mass Haul Diagrams inicial y optimizado (PDF)
- Cálculo de ahorros detallado

**Criterios de evaluación:**
- Análisis inicial completo y preciso (4 pts)
- Estrategia de optimización bien fundamentada (6 pts)
- Implementación correcta con resultados verificables (10 pts)

---

## Ejercicio 5: Exportación Profesional para Licitación

**Objetivo:** Generar paquete completo de exportación de cantidades para diferentes stakeholders.

**Escenario:**
Proyecto de carretera de 7.5 km en fase de licitación. Debes preparar diferentes formatos de exportación para:
- Agencia gubernamental (formato oficial)
- Contratistas (para preparar propuestas)
- Software de estimación interno (Presto)
- Software de planificación (Primavera P6)

**Tareas:**

### Parte A: Export para Agencia Gubernamental (5 puntos)

1. Abrir archivo: `Ejercicio5-Highway-BidPackage.dwg`
2. Generar **Official Quantity Report** en formato PDF:
   - Template: Formato oficial de agencia
   - Incluir:
     - Encabezado con datos del proyecto
     - Tabla de cantidades por pay item
     - Notas técnicas (factores, especificaciones)
     - Firmas de ingeniero responsable

3. Configurar **Material Table** en layout:
   - Escala apropiada para impresión tamaño carta
   - Logo de agencia
   - Leyenda completa

4. Generar **Mass Haul Diagram** para documentación:
   - Formato profesional
   - Anotaciones de balance lines
   - Notas de free haul distance

5. Compilar en PDF multi-página con índice

### Parte B: Export CSV para Contratistas (5 puntos)

6. Generar **Material Quantity Report** en CSV:
   - Configurar columnas:
     - Station Begin / End
     - Pay Item Number
     - Pay Item Description
     - Quantity
     - Unit
     - (Dejar Unit Price en blanco para que contratistas llenen)

7. Export a CSV limpio:
   - Sin caracteres especiales
   - Separador: coma
   - Encoding: UTF-8
   - Headers claros

8. Crear archivo README.txt acompañante:
```
PROYECTO: [Nombre]
FECHA: [Fecha]
ARCHIVO: Quantities_Bid_Package.csv

COLUMNAS:
- Station_Begin: Estación inicial del segmento
- Station_End: Estación final del segmento
- PayItem_Number: Código de pay item según catálogo
- PayItem_Description: Descripción completa del concepto
- Quantity: Cantidad calculada
- Unit: Unidad de medida

NOTAS:
- Cantidades incluyen factores de conversión especificados
- Free haul distance: 500m
- Especificaciones completas en documentos del contrato
```

### Parte C: Export para Presto (Presupuestos) (5 puntos)

9. Preparar export compatible con Presto:
   - Format: Excel con estructura específica
   - Columnas requeridas por Presto:
     - Código (Pay Item Number)
     - Resumen (Description)
     - Cantidad (Quantity)
     - Unidad (Unit)

10. Agregar hoja de metadata:
    - Proyecto
    - Fecha
    - Versión
    - Ingeniero responsable
    - Archivo Civil 3D fuente

11. Crear macro de importación para Presto (VBA):
```vba
' Código simplificado de ejemplo
Sub ImportToPresto()
    ' Leer datos de Excel
    ' Formatear según estructura Presto
    ' Exportar a formato BC3 o XML
    ' (Pseudocódigo, adaptar según versión de Presto)
End Sub
```

### Parte D: Export para Primavera P6 (Planificación) (5 puntos)

12. Generar export para integración con cronograma:
    - Format: Excel con estructura WBS
    - Columnas:
      - WBS Code
      - Activity ID
      - Activity Name
      - Quantity
      - Unit
      - Duration (estimado según productividad)

13. Estructura de ejemplo:
```
WBS   | Activity ID | Activity Name              | Quantity | Unit | Duration
------|-------------|----------------------------|----------|------|----------
1     |             | EARTHWORK                  |          |      |
1.1   |             | Clearing and Grubbing      |          |      |
1.1.1 | CG-001      | Clear & Grub STA 0-500     | 12.5     | acre | 3d
1.2   |             | Excavation                 |          |      |
1.2.1 | EX-001      | Common Excavation STA 0-500| 15,200   | m³   | 8d
1.2.2 | EX-002      | Common Excavation STA 500-1000| 18,900| m³   | 10d
...
```

14. Calcular duraciones estimadas:
    - Usar tasas de producción estándar
    - Ej: Excavación común: 1,500 m³/día
    - Documentar asunciones

15. Export a XML compatible con Primavera P6

**Entregables:**
- PDF oficial para agencia (multi-página, profesional)
- CSV para contratistas con README
- Excel para Presto con macro de importación
- Excel/XML para Primavera P6 con WBS completo
- Documento resumen (2 páginas) explicando cada export

**Criterios de evaluación:**
- Export para agencia completo y profesional (5 pts)
- CSV limpio y bien documentado (5 pts)
- Export Presto funcional (5 pts)
- Export P6 con estructura WBS lógica (5 pts)

---

## Instrucciones de Entrega

**Formato de entrega:**
Crear carpeta con tu nombre: `Apellido_Nombre_Modulo3`

**Estructura de carpeta:**
```
Apellido_Nombre_Modulo3/
├── Ejercicio1/
│   ├── Ejercicio1.dwg
│   ├── Ejercicio1_Layout.pdf
│   ├── Ejercicio1_Reporte.pdf
│   └── Screenshots/
├── Ejercicio2/
│   ├── Ejercicio2.dwg
│   ├── MassHaul_Diagram.pdf
│   ├── Balance_Analysis.xlsx
│   └── Ejercicio2_Reporte.pdf
├── Ejercicio3/
│   ├── Ejercicio3.dwg
│   ├── PayItems_SCT.xml
│   ├── Presupuesto.xlsx
│   └── Presupuesto_Licitacion.pdf
├── Ejercicio4/
│   ├── Ejercicio4_Initial.dwg
│   ├── Ejercicio4_Optimized.dwg
│   ├── Optimization_Report.pdf
│   ├── Cost_Comparison.xlsx
│   └── MassHaul_Comparison.pdf
└── Ejercicio5/
    ├── Ejercicio5.dwg
    ├── Official_Report.pdf
    ├── Quantities_Contractors.csv
    ├── Export_Presto.xlsx
    ├── Export_P6.xml
    └── Export_Documentation.pdf
```

**Comprimir en ZIP:**
`Apellido_Nombre_Modulo3.zip`

**Subir a plataforma del curso antes de la fecha límite.**

---

## Rúbrica de Evaluación

### Criterios Generales (Aplican a todos los ejercicios)

**Precisión Técnica (40%):**
- Cálculos correctos de volúmenes
- Factores de conversión aplicados apropiadamente
- Configuraciones según especificaciones

**Presentación Profesional (30%):**
- Layouts limpios y organizados
- Reportes con formato profesional
- Documentación completa y clara

**Aplicación de Conceptos (20%):**
- Uso correcto de herramientas de Civil 3D
- Workflows eficientes
- Solución a problemas planteados

**Documentación (10%):**
- Reportes escritos claros
- Justificaciones fundamentadas
- Referencias a especificaciones

---

## Recursos de Apoyo

**Archivos de práctica:**
- Descargar de plataforma del curso: `Modulo-3-Ejercicios.zip`

**Templates:**
- Excel templates para reportes
- DWG templates con estilos configurados
- Pay Item Files de ejemplo (DOT y SCT)

**Referencias:**
- Lecciones 1-5 del Módulo 3
- Autodesk Civil 3D Help Documentation
- Especificaciones AASHTO y SCT (proporcionadas)

**Soporte:**
- Foro de discusión del curso
- Horario de oficina virtual: Martes y Jueves 18:00-20:00
- Email instructor: instructor@distmah-atc.edu

---

**¡Éxito en los ejercicios! Estos representan casos reales que encontrarás en tu carrera profesional.**
