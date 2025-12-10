# Lección 3: Enhanced System Zones (Revit 2026)

![Enhanced System Zones](../imagenes/leccion-03-system-zones.png)

## Introducción

**Enhanced System Zones** es una de las novedades más significativas de Revit MEP 2026 para diseño de sistemas mecánicos. Esta nueva funcionalidad permite definir límites de zonas de forma flexible mediante **sketch personalizado** o **basados en espacios existentes**, superando las limitaciones de versiones anteriores.

Las Enhanced System Zones ofrecen controles mejorados, mejor integración con el modelo analítico y capacidades avanzadas de visualización y scheduling, convirtiendo el análisis térmico y diseño HVAC en un proceso más eficiente y preciso.

**Duración estimada:** 60 minutos

---

## 1. ¿Qué son las System Zones?

### Definición Tradicional (Pre-2026)

En versiones anteriores, las **System Zones** eran agrupaciones rígidas de espacios para análisis de sistemas MEP, con límites definidos exclusivamente por los boundaries de espacios existentes.

**Limitaciones anteriores:**
- Límites fijos basados solo en muros/separadores
- No permitían áreas irregulares sin espacios definidos
- Difícil modelar zonas abiertas o conceptuales
- Sincronización manual con HVAC Zones

### Enhanced System Zones (Revit 2026)

**Nueva funcionalidad:**

Las **Enhanced System Zones** en Revit 2026 introducen dos métodos flexibles de definición:

1. **Límites por Sketch (Sketch Boundary):**
   - Dibujar límite personalizado de zona con herramientas de sketch
   - Independiente de muros o espacios existentes
   - Ideal para zonas abiertas, conceptuales o de planificación

2. **Límites por Espacios (Space Boundary):**
   - Basado en espacios existentes (método tradicional mejorado)
   - Sincronización automática con cambios en espacios
   - Controles mejorados de inclusión/exclusión

### Beneficios de Enhanced System Zones

✅ **Flexibilidad de diseño** - Zonas de cualquier forma o configuración
✅ **Análisis conceptual** - Modelar zonas antes de definir espacios
✅ **Áreas abiertas** - Zonas en plantas libres sin subdivisión
✅ **Mejor visualización** - Color schemes mejorados
✅ **Integración analítica** - Conexión directa con modelo analítico
✅ **Workflow simplificado** - Fusión conceptual con HVAC Zones

---

## 2. Límites por Sketch (Sketch Boundary)

### ¿Cuándo Usar Sketch Boundary?

**Casos de uso ideales:**

1. **Plantas abiertas (open floor):**
   - Oficinas sin divisiones físicas
   - Zonas conceptuales en fase de diseño

2. **Áreas irregulares:**
   - Zonas con forma no rectangular
   - Límites que no coinciden con muros

3. **Análisis de orientación solar:**
   - Zonificar por exposición solar
   - Crear zonas Norte, Sur, Este, Oeste independientemente de arquitectura

4. **Estudios preliminares:**
   - Análisis térmico antes de diseño arquitectónico detallado
   - Estimaciones de cargas en fase conceptual

### Crear System Zone con Sketch Boundary

**Paso a paso:**

1. **Abrir vista de planta HVAC:**
   - Vista "Mechanical Plan" del nivel deseado

2. **Iniciar creación de System Zone:**
   - Analyze tab → Spaces & Zones panel → `System Zone`
   - O: Ribbon MEP → Systems tab → System Zone

3. **Seleccionar método Sketch:**
   - En Options Bar: **Boundary Type: Sketch**
   - Activar modo sketch

4. **Dibujar límite de zona:**
   - Usar herramientas de sketch: Line, Rectangle, Arc, etc.
   - Dibujar contorno cerrado (boundary loop)
   - Trim/Extend para ajustar geometría

5. **Finalizar sketch:**
   - ✓ (Green checkmark) para terminar sketch
   - Revit crea System Zone con límite personalizado

6. **Configurar propiedades:**
   - Name: Nombre descriptivo (ej: "Zone-Sketch-North")
   - Service Type, Zone Type, etc.

**Ejemplo práctico:**

```
Proyecto: Planta abierta de oficinas (500 m²)
Objetivo: Dividir en 4 zonas por orientación solar

Zonas a crear con Sketch:
1. Zona Norte (150 m²) - Sketch irregular siguiendo orientación
2. Zona Sur (150 m²) - Sketch irregular
3. Zona Este (100 m²) - Sketch siguiendo fachada curva
4. Zona Oeste (100 m²) - Sketch libre

Ventaja: No necesitas muros o separadores físicos
```

### Editar Sketch de System Zone

**Modificar límites:**

1. **Seleccionar System Zone** en planta
2. **Edit Boundary** (botón en ribbon cuando zone seleccionado)
3. **Modificar sketch:**
   - Agregar/eliminar líneas
   - Mover vértices
   - Ajustar forma
4. **Finish Edit Boundary**

---

## 3. Límites por Espacios (Space Boundary)

### ¿Cuándo Usar Space Boundary?

**Casos de uso ideales:**

1. **Coordinación con arquitectura:**
   - Espacios ya definidos por arquitectos
   - Sincronización automática con cambios arquitectónicos

2. **Análisis detallado:**
   - Proyecto en fase de diseño detallado
   - Espacios con propiedades térmicas específicas

3. **Proyectos con compartimentación:**
   - Edificios con múltiples habitaciones delimitadas
   - Hospitales, hoteles, escuelas (muchos espacios)

### Crear System Zone con Space Boundary

**Paso a paso:**

1. **Verificar que existen Spaces** en el proyecto
   - Los espacios deben estar previamente creados

2. **Iniciar creación de System Zone:**
   - Analyze tab → Spaces & Zones panel → `System Zone`

3. **Seleccionar método Space:**
   - En Options Bar: **Boundary Type: Space**

4. **Seleccionar espacios a incluir:**
   - Hacer clic en cada espacio que pertenece a la zona
   - O: Usar window selection para múltiples espacios
   - Los espacios seleccionados se resaltan

5. **Finalizar selección:**
   - ✓ (Green checkmark) para completar
   - Revit crea System Zone agrupando espacios seleccionados

6. **Configurar propiedades:**
   - Name, Service Type, etc.

**Sincronización automática:**

- Si modificas un espacio (tamaño, propiedades), la System Zone se actualiza automáticamente
- Si eliminas un espacio, se remueve de la zone
- Si agregas espacio, puedes incluirlo en zone existente

### Agregar/Remover Espacios de System Zone

**Modificar composición:**

1. **Seleccionar System Zone**
2. **Edit Zone** (ribbon)
3. **Add Spaces:**
   - Clic en espacios adicionales a incluir
4. **Remove Spaces:**
   - Clic en espacios a excluir
5. **Finish Edit**

---

## 4. Propiedades de Enhanced System Zones

### Parámetros de Identidad

- **Name:** Nombre único de System Zone
- **Comments:** Comentarios descriptivos
- **Boundary Type:** Sketch o Space (read-only después de creación)

### Parámetros de Diseño

- **Service Type:**
  - Heating and Cooling
  - Cooling Only
  - Heating Only
  - Exhaust
  - Ventilation

- **Zone Type:**
  - Occupied
  - Unoccupied

### Parámetros Calculados (Agregados)

- **Actual Supply Airflow:** Caudal real suministrado (L/s)
- **Actual Exhaust Airflow:** Caudal real de extracción (L/s)
- **Calculated Supply Airflow:** Caudal calculado necesario (L/s)
- **Calculated Cooling Load:** Carga de enfriamiento (kW)
- **Calculated Heating Load:** Carga de calefacción (kW)
- **Area:** Área total de zona (m²)
- **Volume:** Volumen total (m³)

### Parámetros de Analytical Model

**Nuevo en 2026:**

- **Analytical Zone:** Asignación a zona analítica
- **Energy Model:** Conexión con modelo energético
- **Space Count:** Número de espacios incluidos (si Space Boundary)

---

## 5. Visualización de System Zones

### Color Schemes para System Zones

**Activar visualización:**

1. **En vista de planta:**
   - Annotate tab → Color Fill Legend → `System Zone`

2. **Esquemas disponibles:**
   - **By Zone Name:** Color único por zona
   - **By Service Type:** Colores según tipo de servicio
   - **By Calculated Cooling Load:** Gradiente según magnitud
   - **By Calculated Heating Load:** Gradiente según magnitud
   - **By Actual vs Calculated Airflow:** Comparación

3. **Personalizar:**
   - Edit Scheme → Ajustar rangos y colores
   - Crear esquema custom basado en parámetro personalizado

### Leyendas de Color Personalizadas

**Crear leyenda profesional:**

1. **Definir rangos de carga:**
   ```
   Rango 1: 0-20 kW (Verde - Carga baja)
   Rango 2: 20-50 kW (Amarillo - Carga media)
   Rango 3: 50-100 kW (Naranja - Carga alta)
   Rango 4: >100 kW (Rojo - Carga muy alta)
   ```

2. **Aplicar color scheme** en planta
3. **Colocar leyenda** en sheet

**Utilidad:**
- Identificar rápidamente zonas críticas
- Presentaciones a clientes/stakeholders
- Optimización de zonificación

### System Zone Tags

**Etiquetar zonas:**

1. **Annotate tab → Tag by Category**
2. **Seleccionar System Zone**
3. **Tag muestra:** Name, Area, Cooling Load

**Personalizar tag:**
- Editar familia de tag para mostrar parámetros adicionales
- Incluir: Service Type, Calculated Airflow

---

## 6. Integración con Analytical Model

### Analytical Model Enhancements (2026)

**Conexión mejorada:**

Las Enhanced System Zones se conectan directamente con el **modelo analítico** de Revit para:

- Cálculos de cargas más precisos
- Exportación a software de simulación energética (EnergyPlus, IES VE, DesignBuilder)
- Análisis de rendimiento del edificio

### Configurar Analytical Model

**Activar modelo analítico:**

1. **Analyze tab → Energy & Analytical Model Settings**
2. **Analytical Model:**
   - Enable: ✓
   - Type: Conceptual Mass o Building Elements

3. **Energy Model Settings:**
   - Building Type: Office, Hospital, etc.
   - Operating Schedule
   - HVAC System Type

### Exportar Analytical Surfaces

**Para análisis externo:**

1. **Analyze tab → Export**
2. **Format:** gbXML (Green Building XML)
3. **Include:** Analytical Surfaces, System Zones, Spaces
4. **Export location**

**Uso:**
- Importar en software de simulación energética
- Análisis de cargas horarias
- Optimización de sistemas HVAC

---

## 7. Workflow Integrado: Sketch + Space Boundaries

### Estrategia Híbrida

**En proyectos reales, combinar ambos métodos:**

**Fase 1: Diseño Conceptual**
- Usar **Sketch Boundary** para zonas preliminares
- Análisis de orientación solar
- Estimaciones de carga inicial

**Fase 2: Diseño Detallado**
- Crear Spaces cuando arquitectura esté definida
- Convertir o crear nuevas System Zones con **Space Boundary**
- Refinar cálculos con datos precisos

### Convertir de Sketch a Space Boundary

**Proceso:**

1. **Eliminar System Zone sketch** (si ya no necesaria)
2. **Crear Spaces** en áreas correspondientes
3. **Crear nueva System Zone con Space Boundary**
4. **Transferir configuraciones** de zona anterior

**O mantener ambas:**
- Sketch Zone para análisis global
- Space Zones para análisis detallado
- Comparar resultados

---

## 8. Comparación: HVAC Zones vs System Zones

### Diferencias Clave (Revit 2026)

| Aspecto | HVAC Zones | System Zones |
|---------|------------|--------------|
| **Propósito** | Agrupación térmica/control | Análisis y diseño de sistemas |
| **Límites** | Solo basados en Spaces | Sketch o Spaces |
| **Flexibilidad** | Media | Alta (Sketch) |
| **Analytical Model** | Integración básica | Integración completa |
| **Visualización** | Color schemes nativos | Color schemes + Analytical |
| **Workflow** | Asociado a control | Asociado a análisis |

### ¿Cuándo Usar Cada Una?

**Usar HVAC Zones cuando:**
- Necesitas agrupar espacios para control térmico
- Asignas sistemas HVAC (VAV boxes, FCUs)
- Documentas zonas servidas por equipos específicos

**Usar System Zones cuando:**
- Realizas análisis de cargas térmicas
- Necesitas flexibilidad de límites (Sketch)
- Exportas a software de simulación energética
- Analizas rendimiento del edificio

**Usar ambas:**
- Proyectos complejos donde HVAC Zones = control y System Zones = análisis
- Fusión conceptual en 2026 permite sincronización

---

## 9. Ejercicio Práctico

### Crear System Zones con Ambos Métodos

**Proyecto: Edificio de Oficinas con Planta Abierta**

```
Piso 1: Planta abierta sin subdivisiones (600 m²)
  - Fase conceptual, sin espacios definidos aún
  - 4 orientaciones solares a analizar

Piso 2: Oficinas delimitadas con espacios (600 m²)
  - 15 espacios ya creados (oficinas privadas)
  - Agrupar en 3 zonas funcionales
```

**Tareas:**

#### Parte A: Piso 1 - Sketch Boundary

1. **Crear 4 System Zones con Sketch:**
   - Zone-P1-Norte (150 m²) - Sketch irregular
   - Zone-P1-Sur (150 m²) - Sketch irregular
   - Zone-P1-Este (150 m²) - Sketch siguiendo fachada
   - Zone-P1-Oeste (150 m²) - Sketch libre

2. **Configurar propiedades:**
   - Service Type: Heating and Cooling
   - Estimar cargas preliminares (manual o tabla)

3. **Aplicar color scheme:**
   - By Zone Name
   - Colores según orientación

4. **Colocar Zone Tags**

#### Parte B: Piso 2 - Space Boundary

5. **Verificar 15 Spaces existentes** en Piso 2

6. **Crear 3 System Zones con Space Boundary:**
   - Zone-P2-Admin (5 espacios, 200 m²)
   - Zone-P2-Técnica (5 espacios, 200 m²)
   - Zone-P2-Gerencial (5 espacios, 200 m²)

7. **Asignar espacios** a cada zona

8. **Verificar cálculos automáticos:**
   - Calculated Cooling Load por zona
   - Calculated Supply Airflow

#### Parte C: Visualización y Documentación

9. **Crear color scheme combinado:**
   - Mostrar ambos pisos en misma vista
   - Scheme: By Calculated Cooling Load

10. **Generar System Zone Schedule:**
    - Name, Boundary Type, Area, Cooling Load, Airflow
    - Sort by: Cooling Load (descendente)

11. **Exportar a gbXML** (Piso 2 con Spaces)

**Entregables:**
- Planta Piso 1 con 4 zones (Sketch), color scheme, tags
- Planta Piso 2 con 3 zones (Space), color scheme, tags
- System Zone Schedule comparativo
- Documento analizando diferencias entre métodos
- Archivo gbXML exportado

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Enhanced System Zones** - Principal novedad de Revit 2026 para análisis térmico
✅ **Límites por Sketch** - Flexibilidad total para zonas irregulares y conceptuales
✅ **Límites por Spaces** - Método tradicional mejorado con sincronización automática
✅ **Propiedades y parámetros** calculados de System Zones
✅ **Visualización avanzada** con color schemes y analytical model
✅ **Integración analítica** para exportación y simulación energética
✅ **Workflow híbrido** combinando sketch y space boundaries
✅ **Diferencias** entre HVAC Zones y System Zones

---

## Próxima Lección

**Lección 4: Cálculo de Cargas Térmicas**

Aprenderás los fundamentos del cálculo de cargas térmicas de enfriamiento y calefacción, metodologías ASHRAE, factores que afectan las cargas y cómo interpretar reportes de cálculo en Revit MEP 2026.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
