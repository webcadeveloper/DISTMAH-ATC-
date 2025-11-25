# Lección 2: HVAC Zones Mejoradas (Revit 2026)

![HVAC Zones Mejoradas](../imagenes/leccion-02-hvac-zones.png)

## Introducción

Las **HVAC Zones** en Revit MEP 2026 han experimentado mejoras significativas, fusionándose conceptualmente con las **System Zones** para proporcionar un flujo de trabajo más integrado. Una HVAC Zone agrupa múltiples espacios (Spaces) que comparten características térmicas similares o que son servidos por un mismo sistema de climatización.

En Revit 2026, las HVAC Zones ofrecen mejores capacidades de visualización mediante color schemes, scheduling avanzado y controles mejorados para gestión de zonas múltiples en proyectos complejos.

**Duración estimada:** 55 minutos

---

## 1. ¿Qué son las HVAC Zones?

### Definición

Una **HVAC Zone** es una agrupación lógica de uno o más espacios (Spaces) que:

- Comparten condiciones de diseño térmico similares
- Son servidos por un mismo sistema HVAC (UMA, VAV box, etc.)
- Tienen requisitos de control de temperatura comunes
- Permiten calcular cargas térmicas agregadas

### Propósito de las HVAC Zones

1. **Análisis de cargas por zona** - Calcular demanda total de enfriamiento/calefacción
2. **Dimensionamiento de equipos** - Seleccionar UMAs y cajas VAV apropiadas
3. **Control térmico** - Asignar termostatos y controles por zona
4. **Optimización energética** - Identificar áreas de alta/baja demanda
5. **Documentación** - Generar reportes y tablas por zona

### Ejemplos de Criterios de Zonificación

#### Por Orientación Solar
```
Zona Norte: Espacios con fachada norte (menor ganancia solar)
Zona Sur: Espacios con fachada sur (máxima ganancia solar)
Zona Este: Espacios con fachada este (ganancia matutina)
Zona Oeste: Espacios con fachada oeste (ganancia vespertina)
Zona Interior: Espacios sin fachada (carga estable)
```

#### Por Uso/Ocupación
```
Zona Oficinas: Áreas administrativas (ocupación 8-18h)
Zona Salas Conferencias: Salas de reuniones (alta ocupación intermitente)
Zona Servidores: Data centers (carga 24/7, temperatura baja)
Zona Servicios: Baños, cocinas (extracción, no climatización)
```

#### Por Sistema Mecánico
```
Zona VAV-1: Espacios servidos por VAV box #1
Zona VAV-2: Espacios servidos por VAV box #2
Zona FCU-A: Espacios servidos por Fan Coil Unit A
Zona Perimetral: Sistemas perimetrales (reheat)
```

---

## 2. Novedades en HVAC Zones - Revit 2026

### Fusión con System Zones

**Antes (Revit 2025 y anteriores):**
- HVAC Zones y System Zones eran entidades separadas
- Workflow duplicado para crear ambos tipos
- Sincronización manual requerida

**Ahora (Revit 2026):**
- **Integración conceptual** entre HVAC Zones y System Zones
- Crear HVAC Zone automáticamente genera System Zone correspondiente
- Modificaciones sincronizadas entre ambos
- Workflow único simplificado

### Color Schemes Nativos para Zonas

**Novedad 2026:**
- Color schemes específicos para HVAC Zones
- Visualización directa en plantas sin configuración externa
- Scheduling de zonas con color coding automático
- Leyendas de color personalizables

### Gestión Mejorada de Zonas Múltiples

**Mejoras 2026:**
- Interface reorganizada para grandes proyectos
- Bulk editing de zonas múltiples
- Filtros avanzados por propiedades de zona
- Copy/paste de configuraciones entre zonas

---

## 3. Creación de HVAC Zones

### Método 1: Crear Zona y Asignar Espacios

**Paso a paso:**

1. **Abrir vista de planta HVAC:**
   - Vista especializada "Mechanical Plan" o "HVAC Plan"

2. **Crear nueva HVAC Zone:**
   - Analyze tab → Spaces & Zones panel → `Zone`
   - Clic en "Create HVAC Zone"

3. **Configurar propiedades de zona:**
   - Name: Nombre descriptivo (ej: "Zona Norte - Piso 1")
   - Service Type: Heating and Cooling, Cooling Only, etc.
   - Zone Type: Occupied, Unoccupied

4. **Asignar espacios a la zona:**
   - Seleccionar espacios en planta
   - Properties palette → HVAC Zone: Seleccionar zona creada
   - O: Usar "Add Spaces to Zone" desde menu contextual

5. **Verificar asignación:**
   - Color fill por HVAC Zone para visualizar
   - Schedule de espacios mostrando zona asignada

### Método 2: Seleccionar Espacios y Crear Zona

**Más rápido para múltiples espacios:**

1. **Seleccionar espacios** que pertenecerán a la misma zona
   - Ctrl+Click para selección múltiple
   - O: Usar Filter de selección

2. **Crear zona desde selección:**
   - Clic derecho → "Create HVAC Zone from Selection"
   - Revit crea automáticamente zona con espacios seleccionados

3. **Configurar propiedades:**
   - Name, Service Type, etc.

### Método 3: Importar desde Architectural Zones

**Para coordinación con arquitectos:**

1. **Vincular modelo arquitectónico**
2. **Analyze tab → Import Zones**
3. **Mapeo de zonas arquitectónicas a HVAC Zones**

---

## 4. Propiedades de HVAC Zones

### Parámetros de Identidad

- **Name:** Nombre único de zona (ej: "HVAC-Zone-1N")
- **Number:** Número de zona (opcional, alfanumérico)
- **Service Type:**
  - Heating and Cooling (mayoría)
  - Cooling Only
  - Heating Only
  - Exhaust
  - No Service

### Parámetros de Diseño

- **Zone Type:**
  - Occupied (ocupada, requiere ventilación)
  - Unoccupied (no ocupada, requisitos reducidos)

- **Outdoor Air Method:**
  - Per Person (L/s por persona)
  - Per Area (L/s por m²)
  - Air Changes (cambios de aire por hora)

- **Calculated Cooling Load:** Carga total de enfriamiento (kW) - calculado
- **Calculated Heating Load:** Carga total de calefacción (kW) - calculado
- **Calculated Supply Airflow:** Caudal total de aire (L/s) - calculado

### Parámetros Calculados (Agregados de Espacios)

- **Total Area:** Suma de áreas de todos los espacios (m²)
- **Total Volume:** Suma de volúmenes (m³)
- **Total Occupancy:** Suma de ocupantes (personas)
- **Peak Cooling Load:** Carga máxima de enfriamiento (kW)
- **Peak Heating Load:** Carga máxima de calefacción (kW)

---

## 5. Visualización de HVAC Zones

### Color Schemes para HVAC Zones (Nuevo 2026)

**Activar color scheme:**

1. **En vista de planta:**
   - Annotate tab → Color Fill Legend → `HVAC Zone`

2. **Opciones de esquema:**
   - **By Zone Name:** Color diferente por cada zona
   - **By Service Type:** Colores según tipo de servicio
   - **By Cooling Load:** Gradiente de color según magnitud de carga
   - **By Heating Load:** Gradiente según carga de calefacción

3. **Personalizar esquema:**
   - Edit Scheme → Modify color assignments
   - Asignar colores corporativos o estándar de proyecto

**Ejemplo de color scheme profesional:**
```
Zona Norte (baja ganancia solar): Azul claro
Zona Sur (alta ganancia solar): Rojo/Naranja
Zona Este: Amarillo
Zona Oeste: Naranja claro
Zona Interior (estable): Verde
Servicios/Extracción: Gris
```

### Zone Tags y Anotaciones

**Etiquetar zonas en planta:**

1. **Annotate tab → Tag panel → Tag by Category**
2. **Seleccionar HVAC Zone**
3. **Colocar tag** en ubicación representativa

**Personalizar HVAC Zone Tag:**
- Mostrar: Zone Name, Total Area, Cooling Load
- Formato: Tamaño texto, estilo, símbolo

---

## 6. Gestión de Zonas Múltiples

### Organización de Zonas en Proyecto Grande

**Nomenclatura profesional:**

```
Formato recomendado: [Sistema]-[Piso]-[Orientación/Función]

Ejemplos:
VAV-P1-Norte
VAV-P1-Sur
VAV-P2-Norte
VAV-P2-Interior
FCU-PB-Recepción
Exhaust-P3-Baños
```

### Edición Masiva de Zonas

**Nuevo en 2026:**

1. **Crear Schedule de HVAC Zones:**
   - View tab → Create Schedule → `HVAC Zones`

2. **Seleccionar múltiples zonas** en schedule

3. **Edit Type → Bulk Edit:**
   - Modificar Service Type de todas simultáneamente
   - Cambiar Outdoor Air Method
   - Ajustar parámetros compartidos

### Copiar Configuración entre Zonas

**Para estandarización:**

1. **Seleccionar zona modelo** (bien configurada)
2. **Copy Properties**
3. **Paste Properties** a zonas similares
4. **Ajustar valores específicos** (Name, Number)

---

## 7. Relación entre HVAC Zones y Sistemas MEP

### Asignar Sistemas a Zonas

**Workflow integrado:**

1. **Crear HVAC Zone** con espacios
2. **Diseñar sistema HVAC** (ductos, difusores, VAV)
3. **Asignar zona a sistema:**
   - Seleccionar componentes del sistema (difusores, VAV box)
   - Properties → Zone Served: Seleccionar HVAC Zone

4. **Verificar asignación:**
   - System Browser → Ver jerarquía Sistema → Zona → Espacios

### Cálculo de Caudales por Zona

**Revit calcula automáticamente:**

```
Caudal total zona (L/s) = Σ(Caudales espacios individuales)

Donde caudal por espacio se calcula basado en:
- Carga térmica (sensible + latente)
- ΔT de suministro (típico 10-12°C)
- Ventilación exterior requerida
- Factor de seguridad
```

**Verificar en propiedades de zona:**
- Calculated Supply Airflow (L/s)
- Comparar con capacidad de VAV box seleccionado

### Dimensionar Equipos por Zona

**Ejemplo:**

```
HVAC Zone: "VAV-P2-Norte"
  - Total Area: 300 m²
  - Calculated Cooling Load: 35 kW
  - Calculated Supply Airflow: 3500 L/s

Selección de equipo:
  - VAV Box: Tamaño nominal 3600 L/s (próximo estándar)
  - Capacidad enfriamiento (con reheat): 40 kW
  - Control: DDC con sensor temperatura/presión
```

---

## 8. Schedules de HVAC Zones

### Crear Schedule de Zonas

**Paso a paso:**

1. **View tab → Create Schedule → Schedules dropdown → `HVAC Zone`**

2. **Seleccionar campos:**
   - Name
   - Number
   - Service Type
   - Total Area
   - Calculated Cooling Load
   - Calculated Heating Load
   - Calculated Supply Airflow
   - Zone Type

3. **Configurar sorting:**
   - Sort by: Name (alfabético) o Number

4. **Aplicar formatting:**
   - Calculated Cooling Load: Format → Units → kW, 2 decimales
   - Calculated Supply Airflow: Format → Units → L/s, 0 decimales

5. **Conditional formatting (opcional):**
   - Resaltar zonas con carga > 50 kW (background color)

### Schedule con Espacios Agrupados por Zona

**Multi-category schedule:**

1. **Create Schedule → Multi-Category**
2. **Filter:** Category equals Spaces OR HVAC Zones
3. **Group by:** HVAC Zone Name
4. **Mostrar subtotales** por zona

---

## 9. Ejercicio Práctico

### Crear HVAC Zones para Edificio de 3 Pisos

**Datos del proyecto:**
```
Edificio: Oficinas corporativas
Pisos: 3 niveles
Área por piso: 800 m² (40m × 20m)
Espacios por piso:
  - Zona Norte (fachada vidrio): 300 m², 30 personas
  - Zona Sur (fachada vidrio): 300 m², 30 personas
  - Zona Interior (sin fachada): 200 m², 20 personas

Sistemas propuestos:
  - 2 VAV boxes por piso (Norte, Sur)
  - 1 pequeño sistema para zona interior
Total: 6 VAV boxes (3 pisos × 2 zonas principales)
```

**Tareas:**

1. **Crear 9 HVAC Zones totales:**
   - Piso 1: Zona Norte, Zona Sur, Zona Interior
   - Piso 2: Zona Norte, Zona Sur, Zona Interior
   - Piso 3: Zona Norte, Zona Sur, Zona Interior

2. **Nomenclatura consistente:**
   - VAV-P1-Norte, VAV-P1-Sur, INT-P1
   - VAV-P2-Norte, VAV-P2-Sur, INT-P2
   - VAV-P3-Norte, VAV-P3-Sur, INT-P3

3. **Asignar espacios a cada zona:**
   - Usar método de selección múltiple
   - Verificar todos los espacios tienen zona asignada

4. **Configurar propiedades de zonas:**
   - Service Type: Heating and Cooling
   - Zone Type: Occupied
   - Outdoor Air Method: Per Person (10 L/s/persona)

5. **Crear color scheme por HVAC Zone:**
   - Zonas Norte: Azul
   - Zonas Sur: Rojo/Naranja
   - Zonas Interior: Verde

6. **Generar HVAC Zone Schedule mostrando:**
   - Name, Total Area, Calculated Cooling Load, Calculated Airflow

7. **Colocar Zone Tags** en cada zona

8. **Documentar cálculos:**
   - Verificar que suma de cargas por piso es consistente
   - Exportar schedule a Excel

**Entregables:**
- Plantas de 3 pisos con color scheme de zonas
- HVAC Zone Schedule completo
- Captura de propiedades de 3 zonas diferentes
- Reporte mostrando nomenclatura y organización

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Concepto y propósito** de las HVAC Zones para análisis térmico
✅ **Novedades de Revit 2026:** Fusión con System Zones, color schemes nativos
✅ **Creación de zonas** mediante métodos manual y desde selección
✅ **Propiedades de zonas** y parámetros calculados agregados
✅ **Visualización mejorada** con color schemes y zone tags
✅ **Gestión de zonas múltiples** con nomenclatura profesional
✅ **Relación con sistemas MEP** para dimensionamiento de equipos
✅ **Schedules de zonas** para documentación y análisis

---

## Próxima Lección

**Lección 3: Enhanced System Zones**

Aprenderás a utilizar las nuevas **Enhanced System Zones** de Revit 2026, que permiten definir límites por sketch personalizado o basados en espacios existentes, ofreciendo mayor flexibilidad para proyectos complejos y mejores controles de zonas analíticas.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
