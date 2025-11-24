# Lección 3: Pay Items y Cost Estimation

## Introducción

Los Pay Items (Conceptos de Pago) son elementos fundamentales en la estimación de costos de proyectos de infraestructura. Representan las unidades de trabajo medibles que se pagan al contratista según las cantidades ejecutadas y precios unitarios establecidos en el contrato. Civil 3D 2026 permite vincular cantidades calculadas con pay items específicos, facilitando la generación de estimaciones de costos precisas y reportes de licitación profesionales.

Esta lección aborda la configuración de pay item files, asignación de costos unitarios, integración con especificaciones de agencias gubernamentales (DOT, SCT, etc.) y generación de reportes de estimación que cumplen estándares de la industria.

## Objetivos de Aprendizaje

- Configurar Pay Item Files con catálogos de especificaciones
- Asignar pay items a materiales y cantidades calculadas
- Calcular estimaciones de costos con precios unitarios
- Generar reportes de licitación profesionales
- Integrar especificaciones de agencias (DOT, AASHTO, SCT)

## 1. Fundamentos de Pay Items

### 1.1 Conceptos Básicos

**Pay Item:**
Concepto de trabajo o material con las siguientes características:
- **Código único:** Identificador según catálogo (ej: 203.01, SCT-CAR-2-01-003)
- **Descripción:** Nombre completo del concepto
- **Unidad de medida:** m³, ton, m², m, pza, etc.
- **Precio unitario:** Costo por unidad de medida
- **Especificación:** Referencia a normas técnicas

**Tipos de Pay Items en Infraestructura:**

**A. Earthwork Pay Items:**
- Excavación común
- Excavación en roca
- Relleno compactado
- Préstamo de banco
- Acarreo y sobreacarreo
- Desperdicio de materiales

**B. Pavement Pay Items:**
- Base hidráulica
- Sub-base
- Carpeta asfáltica (por espesor y tipo)
- Riego de impregnación
- Riego de liga

**C. Drainage Pay Items:**
- Tubería de concreto (por diámetro)
- Pozos de visita
- Cabezales de alcantarilla
- Cunetas y contracunetas

**D. Ancillary Items:**
- Señalización vertical
- Señalamiento horizontal
- Barreras de seguridad
- Iluminación

### 1.2 Estructura de Catálogos de Pay Items

**Catálogos Estándar:**

**EE.UU. - State DOTs:**
```
Item No.   Description                           Unit
203.01     Common Excavation                     CY
203.02     Rock Excavation                       CY
204.01     Structure Excavation                  CY
206.01     Embankment Compaction                 CY
209.01     Topsoil Borrow                        CY
212.01     Free Haul                             (included)
212.02     Overhaul                              STA-CY
```

**México - SCT (Secretaría de Comunicaciones y Transportes):**
```
Código              Descripción                      Unidad
CAR-2-01-003       Excavación en Terreno A          m³
CAR-2-01-004       Excavación en Terreno B          m³
CAR-2-01-005       Excavación en Roca               m³
CAR-2-02-002       Formación de Terraplenes         m³
CAR-2-03-001       Acarreo en Kilómetro Subsecuente m³-km
```

**Internacional - AASHTO:**
- Estandarización para proyectos regionales
- Compatible con especificaciones ASTM
- Adoptado por múltiples países

### 1.3 Relación Pay Items - Cantidades Civil 3D

La integración ocurre en tres niveles:

1. **Material Lists:** Cantidades calculadas por Compute Materials
2. **Pay Item Mapping:** Asociación material → pay item
3. **Cost Calculation:** Cantidad × precio unitario = subtotal

## 2. Configuración de Pay Item Files

### 2.1 Creación de Pay Item File

Civil 3D utiliza archivos XML para almacenar catálogos de pay items:

**Paso 1: Acceso a Pay Item Files**
```
Toolspace > Settings Tab
Corridor > Pay Item Files
Click derecho > New
```

**Paso 2: Pay Item File Editor**

1. **General Tab:**
   - **Name:** "DOT-Standard-2026" o "SCT-Normas-Vigentes"
   - **Description:** "Catálogo oficial TXDOT 2026" (ejemplo)
   - **Source:** Agencia o especificación base

2. **Pay Items Tab:**
   - Click **Add** para nuevo pay item
   - Ingresar datos:

**Ejemplo 1 - Excavación Común (EE.UU.):**
```
Item Number: 203.01
Description: Common Excavation, Unclassified
Unit: Cubic Yard (CY)
Unit Price: $12.50
Specification: AASHTO M-147, TXDOT Spec 203
Notes: Includes haul up to 500 ft
```

**Ejemplo 2 - Excavación Terreno A (México):**
```
Código: CAR-2-01-003
Descripción: Excavación por medios mecánicos en zona de corte,
             Terreno Tipo A (material suelto)
Unidad: Metro cúbico (m³)
Precio Unitario: $95.00 MXN
Norma: N-CMT-2-02-002/02 SCT
Notas: Incluye acarreo libre hasta 20m
```

### 2.2 Importación de Catálogos Estándar

Para proyectos con agencias específicas:

**Opción A: Importar XML Oficial**
1. Obtener archivo de pay items de agencia (ej: TXDOT, CDOT, SCT)
2. **Pay Item Files > Import**
3. Seleccionar archivo XML
4. Civil 3D carga catálogo completo

**Opción B: Actualizar desde Base de Datos**
1. Conectar a base de datos corporativa
2. **Settings > Drawing Settings > Object Layers**
3. Configurar conexión ODBC
4. Sincronizar pay items automáticamente

**Ventajas:**
- Estandarización entre proyectos
- Actualizaciones centralizadas de precios
- Cumplimiento con especificaciones oficiales

### 2.3 Personalización de Precios Unitarios

Los precios unitarios pueden venir de:

**A. Precios Oficiales (Obras Públicas):**
- Tabuladores de agencias gubernamentales
- Actualizados periódicamente (trimestral, anual)
- Obligatorios en licitaciones públicas

**B. Análisis de Precios Unitarios (APU):**
- Calculados por empresa constructora
- Incluyen: materiales, mano de obra, equipo, indirectos, utilidad
- Variables según región y condiciones de mercado

**C. Precios Históricos:**
- Basados en proyectos previos similares
- Ajustados por inflación y ubicación
- Útiles para estimaciones preliminares

**Configuración en Civil 3D:**
1. Seleccionar pay item en lista
2. Editar **Unit Price** field
3. **Price Source:** Indicar origen (ej: "TXDOT Jan 2026 Tabulation")
4. **Effective Date:** Fecha de vigencia del precio

## 3. Asignación de Pay Items a Materiales

### 3.1 Material-to-Pay Item Mapping

El proceso de mapeo conecta cantidades calculadas con conceptos de pago:

**Paso 1: Abrir Quantity Takeoff Criteria**
```
Settings > Corridor > Quantity Takeoff Criteria
Editar criterio existente
```

**Paso 2: Material List - Pay Item Assignment**

1. En QTO Criteria, pestaña **Pay Items:**
2. Para cada material en lista:
   - Seleccionar material (ej: "Cut-Common")
   - Click **Assign Pay Item**
   - Buscar en catálogo: "203.01 Common Excavation"
   - Confirmar asignación

**Paso 3: Configurar Conversion Factors**

Si unidades difieren entre cantidad y pay item:
- **Cantidad en Civil 3D:** m³
- **Pay Item Unit:** Cubic Yard (CY)
- **Conversion Factor:** 0.765 (m³ to CY) o 1.308 (CY to m³)

Civil 3D aplica automáticamente conversión en cálculos.

### 3.2 Pay Items para Overhaul

El sobreacarreo requiere configuración especial:

**Creación de Pay Item de Overhaul:**
```
Item: 212.02
Description: Overhaul
Unit: Station-Cubic Yard (STA-CY) o m³-km
Price: $0.85 per STA-CY
```

**Cálculo en Civil 3D:**
1. Mass Haul Diagram calcula overhaul automáticamente
2. Civil 3D reporta: Volumen × (Distancia - Free Haul)
3. Resultado en unidades compuestas (m³-km)
4. Multiplica por precio unitario

**Ejemplo:**
- Overhaul calculado: 15,000 m³-estación
- Convertir a km: 15,000 / 10 = 1,500 m³-km
- Precio: $18.50 MXN por m³-km
- Costo: 1,500 × $18.50 = $27,750 MXN

### 3.3 Pay Items para Materiales Estructurales

Pavimentos y capas requieren pay items diferenciados:

**Ejemplo - Estructura de Pavimento:**

**Pay Item 1: Base Hidráulica**
```
Código: CAR-4-02-001
Unidad: m³
Material en Assembly: "Base-Layer" (Shape Code)
Espesor: 15cm
Precio Unitario: $285.00 MXN/m³
```

**Pay Item 2: Carpeta Asfáltica**
```
Código: CAR-4-05-003
Unidad: Tonelada métrica
Material en Assembly: "Asphalt-Layer"
Espesor: 5cm
Densidad: 2.35 ton/m³ (para conversión)
Precio Unitario: $1,850.00 MXN/ton
```

**Configuración:**
1. QTO Criteria con Shape-Based zones
2. Asignar cada capa a su pay item correspondiente
3. Aplicar densidades para conversión volumen → masa

## 4. Generación de Estimaciones de Costos

### 4.1 Cost Report Generation

Civil 3D genera reportes de costos vinculados a cantidades:

**Paso 1: Compute Materials con Pay Items**
```
Ribbon > Analyze > Compute Materials
Verificar que QTO Criteria tenga pay items asignados
Ejecutar cálculo
```

**Paso 2: Generate Cost Report**
```
Ribbon > Analyze > Reports > Pay Item Report
Configurar:
- Corridor(s): Seleccionar proyecto
- Pay Item File: Catálogo activo
- Report Style: "Bid Tabulation" o "Cost Estimate"
```

**Paso 3: Configurar Report Content**

Columnas típicas en reporte:
- Item Number
- Description
- Quantity (calculada)
- Unit
- Unit Price
- Amount (Quantity × Unit Price)

**Formato de salida:**
- HTML para visualización rápida
- Excel para análisis y edición
- PDF para documentación oficial

### 4.2 Bid Tabulation Format

Formato estándar para licitaciones:

**Encabezado:**
```
PROJECT: Highway 281 Reconstruction, STA 100+00 to 150+00
LOCATION: Travis County, Texas
DATE: January 15, 2026
ENGINEER'S ESTIMATE
```

**Cuerpo de tabla:**
```
Item | Description              | Qty      | Unit | Unit Price | Amount
-----|--------------------------|----------|------|------------|------------
203.01| Common Excavation       | 45,250   | CY   | $12.50     | $565,625.00
203.02| Rock Excavation         | 3,180    | CY   | $38.00     | $120,840.00
204.01| Structure Excavation    | 850      | CY   | $22.00     | $18,700.00
206.01| Embankment Compaction   | 38,900   | CY   | $8.75      | $340,375.00
212.02| Overhaul                | 125,000  | STA-CY| $0.85     | $106,250.00
-----|--------------------------|----------|------|------------|------------
      | SUBTOTAL EARTHWORK      |          |      |            | $1,151,790.00
```

**Pie de tabla:**
```
TOTAL ESTIMATED COST (EARTHWORK): $1,151,790.00
CONTINGENCY (10%): $115,179.00
TOTAL PROJECT EARTHWORK: $1,267,969.00
```

### 4.3 Formato SCT (México)

Las estimaciones para SCT siguen formato específico:

**Generador de Obra:**
```
Clave         | Descripción                  | Unidad | Cantidad | P.U.    | Importe
--------------|------------------------------|--------|----------|---------|-------------
CAR-2-01-003  | Excavación Terreno A         | m³     | 125,300  | $95.00  | $11,903,500
CAR-2-01-005  | Excavación en Roca          | m³     | 8,950    | $385.00 | $3,445,750
CAR-2-02-002  | Formación de Terraplenes    | m³     | 108,200  | $78.50  | $8,493,700
CAR-2-03-001  | Sobreacarreo                | m³-km  | 2,850    | $18.50  | $52,725
--------------|------------------------------|--------|----------|---------|-------------
              | SUBTOTAL                     |        |          |         | $23,895,675
              | IVA (16%)                    |        |          |         | $3,823,308
              | TOTAL                        |        |          |         | $27,718,983
```

**Configuración en Civil 3D:**
1. Report Style personalizado para formato SCT
2. Incluir campos de IVA y subtotales
3. Numeración de partidas según catálogo SCT

## 5. Integración con Especificaciones

### 5.1 Especificaciones Técnicas en Pay Items

Cada pay item debe referenciar especificaciones aplicables:

**Ejemplo - Excavación Común:**
```
Pay Item: 203.01 Common Excavation
Specifications:
- AASHTO M-147: Standard Specifications for Classification of Soils
- TXDOT Item 203: Excavation and Embankment
- ASTM D2487: Classification of Soils for Engineering Purposes

Technical Requirements:
- Moisture content: Within ±2% of optimum
- Compaction: 95% Standard Proctor (AASHTO T-99)
- Lift thickness: Maximum 8 inches loose
```

**Beneficios:**
- Contratista conoce requisitos exactos
- Inspectores tienen criterios claros de aceptación
- Evita disputas sobre calidad de trabajo

### 5.2 Special Provisions

Proyectos específicos pueden tener provisiones especiales:

**En Civil 3D:**
1. Pay Item Properties > **Special Provisions** tab
2. Agregar notas específicas del proyecto:

```
SPECIAL PROVISION FOR ITEM 203.01:
Due to environmental constraints, excavated material
within stations 120+00 to 125+00 must be stockpiled
separately and tested for contamination prior to
reuse. Additional testing cost: $2.50/CY.

Adjusted Unit Price: $15.00/CY (includes testing)
```

3. Civil 3D refleja precio ajustado en cálculos
4. Notas aparecen en reportes generados

### 5.3 Unit Price Adjustments

Ajustes de precios por condiciones variables:

**A. Escalation Clauses:**
- Ajuste por inflación en proyectos largos
- Fórmulas de ajuste por combustible/asfalto
- Configurar en pay item como "Base Price + Adjustment"

**B. Quantity Breaks:**
- Precios diferenciados por volumen
- Ej: 0-10,000 CY @ $12.50; >10,000 CY @ $11.75
- Civil 3D puede manejar con pay items múltiples

**C. Time-Based Adjustments:**
- Precios por turno (diurno vs. nocturno)
- Sobrecostos por restricciones de horario
- Configurar como pay items separados

## 6. Reportes Avanzados

### 6.1 Customización de Report Styles

Crear estilos de reporte corporativos:

**Paso 1: Report Style Manager**
```
Toolspace > Settings > Corridor > Report Styles
Click derecho > New > Pay Item Report Style
```

**Paso 2: Configurar Layout**

1. **Header Section:**
   - Logo de empresa
   - Información de proyecto (nombre, ubicación, fecha)
   - Título del reporte

2. **Body Section:**
   - Columnas requeridas
   - Formato de números (decimales, separadores)
   - Subtotales por categoría (earthwork, pavement, drainage)

3. **Footer Section:**
   - Totales generales
   - Firmas de aprobación
   - Notas y disclaimers

**Paso 3: Styling**
- Fuentes: Arial 10pt para datos, 12pt bold para headers
- Colores: Escala de grises profesional (blanco/negro/gris claro)
- Bordes: Líneas negras, grosor 0.5pt
- Alternancia de filas: Gris 5% cada 2 filas

### 6.2 Reportes Comparativos

Para análisis de alternativas de diseño:

**Scenario Comparison Report:**
```
Item   | Description         | Alt A Qty | Alt B Qty | Difference | Cost Impact
-------|---------------------|-----------|-----------|------------|-------------
203.01 | Common Excavation   | 45,250 CY | 38,900 CY | -6,350 CY  | -$79,375
206.01 | Embankment          | 38,900 CY | 42,100 CY | +3,200 CY  | +$28,000
212.02 | Overhaul            | 125k STA-CY| 85k STA-CY| -40k STA-CY| -$34,000
-------|---------------------|-----------|-----------|------------|-------------
TOTAL EARTHWORK COST     |           |           |            | -$85,375
```

**Generación:**
1. Compute Materials para cada alternativa
2. Export data a Excel
3. Crear tabla comparativa con fórmulas
4. Destacar diferencias significativas

### 6.3 Integration con Project Management

Exportar para software de gestión:

**Formatos compatibles:**
- **Primavera P6:** XML export con estructura WBS
- **Microsoft Project:** Excel con tareas y duraciones
- **Procore:** CSV con estructura de pay items
- **SAP:** EDI format para integración ERP

**Proceso:**
1. Civil 3D genera pay item report
2. Script de conversión adapta formato
3. Importar a PM software
4. Vincular cantidades con cronograma y costos

## 7. Mejores Prácticas

### 7.1 Control de Versiones de Precios

- **Fechar archivos de pay items:** "DOT-Prices-2026-01-15.xml"
- **Documentar cambios:** Log de actualizaciones de precios
- **Congelar precios para bid:** No modificar después de publicar licitación
- **Archivar:** Mantener versiones históricas para auditorías

### 7.2 Validación de Cantidades

Antes de publicar estimación:

1. **Spot-check manual:** Calcular a mano una sección típica
2. **Comparar con proyectos similares:** Ratio de costos por km, m², etc.
3. **Peer review:** Ingeniero senior revisa cantidades y precios
4. **QA/QC checklist:** Verificar todos los pay items tienen asignación

### 7.3 Documentación de Asunciones

Incluir en reportes:

- **Factores de conversión aplicados:** Shrinkage, swell, densidades
- **Límites de free haul:** Distancia asumida
- **Exclusiones:** Conceptos no incluidos en estimación
- **Contingencias:** Porcentaje y justificación
- **Base de datos de precios:** Fuente y fecha

## Conclusión

La integración de pay items con cantidades calculadas en Civil 3D 2026 permite generar estimaciones de costos precisas y profesionales que cumplen estándares de la industria. La correcta configuración de catálogos de pay items, asignación a materiales y generación de reportes son habilidades críticas para ingenieros de estimación y gerentes de proyectos.

El uso de catálogos estándar de agencias garantiza cumplimiento con especificaciones oficiales, mientras que la personalización permite adaptar estimaciones a condiciones específicas de cada proyecto. La automatización del proceso reduce errores y facilita actualizaciones cuando el diseño evoluciona.

---

**Tiempo estimado de estudio:** 75 minutos
**Práctica recomendada:** 3-4 horas configurando catálogos y generando estimaciones

**Siguiente:** [Lección 4 - Earthwork Optimization](leccion-4.md)
