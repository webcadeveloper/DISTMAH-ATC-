# Lección 1: Espacios y Configuración Térmica

![Espacios y Configuración Térmica](../imagenes/leccion-01-espacios.png)

## Introducción

Los **espacios (Spaces)** en Revit MEP son elementos fundamentales para el análisis de cargas térmicas y diseño de sistemas HVAC. A diferencia de las habitaciones (Rooms) que son principalmente arquitectónicas, los espacios MEP contienen propiedades térmicas, parámetros de diseño y condiciones ambientales necesarias para calcular cargas de enfriamiento y calefacción.

En esta lección aprenderás a configurar espacios correctamente, asignar propiedades térmicas, establecer condiciones de diseño y preparar el modelo para análisis de cargas.

**Duración estimada:** 50 minutos

---

## 1. Conceptos de Espacios en Revit MEP

### ¿Qué es un Espacio MEP?

Un **Space** en Revit MEP es un volumen 3D delimitado que representa un área específica del edificio para análisis mecánico. Los espacios contienen:

- **Propiedades geométricas:** Área, volumen, altura
- **Propiedades térmicas:** Cargas de enfriamiento/calefacción, ocupación, iluminación
- **Condiciones de diseño:** Temperatura de diseño, humedad relativa, ventilación
- **Información de zona:** Asignación a HVAC Zones

### Diferencias entre Rooms y Spaces

| Aspecto | Rooms (Arquitectura) | Spaces (MEP) |
|---------|---------------------|--------------|
| Disciplina | Architecture | Mechanical |
| Propósito | Documentación arquitectónica | Análisis térmico HVAC |
| Propiedades térmicas | Limitadas | Completas (cargas, ocupación, iluminación) |
| Análisis energético | No | Sí |
| Asignación a sistemas | No | Sí (HVAC Zones) |
| Cálculo de cargas | No | Sí |

### Importancia de los Espacios

Los espacios son esenciales para:

1. **Cálculo de cargas térmicas** - Determinar necesidades de enfriamiento/calefacción
2. **Dimensionamiento de equipos** - Seleccionar UMAs, chillers, calderas
3. **Diseño de ductos** - Calcular caudales de aire por zona
4. **Análisis energético** - Evaluar eficiencia del edificio
5. **Creación de HVAC Zones** - Agrupar espacios con características similares

---

## 2. Creación de Espacios MEP

### Método 1: Creación Manual

**Paso a paso:**

1. **Abrir vista de planta MEP:**
   - Cambiar a vista "Mechanical Plan" o "HVAC Plan"
   - Verificar que View Range muestra el nivel correcto

2. **Activar herramienta Space:**
   - Ribbon: `Analyze` tab → `Spaces & Zones` panel → `Space`
   - Atajo: `SP` (Space)

3. **Colocar espacios:**
   - Hacer clic dentro de cada área delimitada por muros
   - Revit detecta automáticamente límites (muros, cortinas de humo)
   - El espacio se crea con boundaries automáticos

4. **Verificar creación:**
   - El espacio aparece con tag (etiqueta) mostrando nombre y número
   - Color fill opcional para visualizar espacios

### Método 2: Crear desde Rooms (Arquitectura)

**Ventaja:** Aprovechar espacios ya definidos por arquitectos

**Paso a paso:**

1. **Vincular modelo arquitectónico:**
   - Insert tab → Link Revit
   - Seleccionar archivo .rvt de arquitectura
   - Positioning: Auto - Origin to Origin

2. **Generar Spaces desde Rooms:**
   - Analyze tab → Spaces & Zones panel → `Space Separator`
   - Opción: "Generate Spaces from Rooms"
   - Revit crea automáticamente un Space por cada Room

3. **Verificar correspondencia:**
   - Cada Space hereda nombre y número del Room
   - Ajustar manualmente si necesario

### Método 3: Importar desde archivos externos

**Para proyectos grandes:**

- Importar desde Excel con plugin (Room Scheduler add-in)
- Usar Dynamo para automatización
- API de Revit para creación masiva

---

## 3. Propiedades Térmicas de Espacios

### Acceso a Propiedades

1. **Seleccionar un espacio** en planta o 3D
2. **Abrir Properties palette** (Properties)
3. **Revisar parámetros de instancia**

### Parámetros Fundamentales

#### Información Básica

- **Name:** Nombre descriptivo (ej: "Oficina 101")
- **Number:** Número único (ej: "101")
- **Department:** Departamento o área funcional (Administrativo, Producción)
- **Building Type:** Tipo de edificio (Office, Hospital, School)

#### Propiedades Geométricas

- **Area:** Área en planta (m²) - calculado automáticamente
- **Volume:** Volumen 3D (m³) - calculado automáticamente
- **Perimeter:** Perímetro del espacio (m)
- **Unbounded Height:** Altura del espacio (m)

#### Condiciones de Diseño

- **Cooling Design Temperature:** Temperatura de diseño enfriamiento (típico 24°C)
- **Heating Design Temperature:** Temperatura de diseño calefacción (típico 20°C)
- **Design Option:** Opción de diseño activa

#### Cargas Térmicas (editable)

- **Occupancy:** Densidad de ocupación (personas/m²)
- **Lighting Load Density:** Carga de iluminación (W/m²)
- **Power Load Density:** Carga de equipos/enchufes (W/m²)
- **Calculated Supply Airflow:** Caudal de aire calculado (L/s)
- **Outdoor Air Per Person:** Aire exterior por persona (L/s/persona)

### Valores Típicos por Tipo de Espacio

#### Oficinas Administrativas
```
Occupancy: 0.10 personas/m² (10 m² por persona)
Lighting: 10-12 W/m²
Power: 10-15 W/m²
Cooling Temp: 24°C
Heating Temp: 20°C
Outdoor Air: 10 L/s/persona (ASHRAE 62.1)
```

#### Salas de Conferencias
```
Occupancy: 0.50 personas/m² (2 m² por persona)
Lighting: 15 W/m²
Power: 20 W/m²
Cooling Temp: 23°C
Outdoor Air: 7 L/s/persona
```

#### Espacios de Servidor/Data Center
```
Occupancy: 0.01 personas/m²
Lighting: 8 W/m²
Power: 200-500 W/m² (alta carga eléctrica)
Cooling Temp: 20°C (temperatura baja constante)
Heating: No aplica
```

---

## 4. Configuración de Parámetros de Diseño

### Building Information Settings

**Acceso:**
- Analyze tab → Energy & Analytical Model Settings → `Building Information`

**Parámetros clave:**

#### Ubicación del Proyecto
- **Location:** Ciudad/región (afecta clima)
- **Latitude/Longitude:** Coordenadas geográficas
- **Elevation:** Altura sobre nivel del mar (m)
- **Time Zone:** Zona horaria

#### Tipo de Edificio
- **Building Type:** Oficina, Hospital, Educativo, Residencial
- **Operating Schedule:** Horario de operación (24/7, 8-18h, etc.)

#### Condiciones Climáticas
- **Weather Data:** Archivo climático (.epw) de ubicación
- **Design Conditions:** Temperaturas de diseño exterior
- **Summer Design Day:** Día típico de verano (máxima carga enfriamiento)
- **Winter Design Day:** Día típico de invierno (máxima carga calefacción)

### Mechanical Settings para Espacios

**Acceso:**
- Analyze tab → Spaces & Zones panel → `Mechanical Settings`

**Configuraciones importantes:**

#### Space Calculation
- **Method:** Método de cálculo (ASHRAE, DOE-2, etc.)
- **Use Actual Values:** Usar valores reales vs. tabulados
- **Include Occupancy Loads:** Incluir cargas de personas

#### Load Calculations
- **Cooling Load Method:** Método CLTD, RTS, etc.
- **Heating Load Method:** Método pérdidas de calor
- **Safety Factor:** Factor de seguridad (típico 10-15%)

---

## 5. Condiciones Ambientales Exteriores

### Temperaturas de Diseño Exterior

Las condiciones exteriores son críticas para cálculo de cargas:

#### Verano (Cooling)
- **Dry Bulb Temperature:** Temperatura de bulbo seco exterior (típico 30-38°C)
- **Wet Bulb Temperature:** Temperatura de bulbo húmedo (25-28°C)
- **Daily Range:** Rango diario de temperatura (10-15°C)
- **Solar Radiation:** Radiación solar máxima (W/m²)

#### Invierno (Heating)
- **Design Temperature:** Temperatura exterior de diseño (0 a -10°C según clima)
- **Wind Speed:** Velocidad del viento (m/s)
- **Infiltration Rate:** Tasa de infiltración de aire (ACH - cambios aire/hora)

### Fuentes de Datos Climáticos

1. **ASHRAE Handbook - Fundamentals**
   - Tablas de temperaturas de diseño por ciudad
   - Percentil 0.4%, 1%, 2% (probabilidad de excedencia)

2. **Archivos Weather (.epw)**
   - EnergyPlus Weather Data
   - Descarga gratuita desde DOE/ASHRAE
   - Contiene datos horarios completos del año

3. **Normas locales**
   - Códigos de construcción locales
   - Reglamentos energéticos nacionales

### Configurar en Revit

**Método 1: Manual**
1. Edit Type → Energy Analysis Settings
2. Ingresar temperaturas de diseño manualmente
3. Basarse en tablas ASHRAE

**Método 2: Archivo Weather**
1. Analyze tab → Energy & Analytical Model Settings
2. Location → Import weather file (.epw)
3. Revit extrae automáticamente condiciones de diseño

---

## 6. Visualización de Espacios

### Color Fills para Espacios

**Activar Color Scheme:**

1. **En vista de planta:**
   - Annotate tab → Color Fill Legend → `Space`

2. **Seleccionar esquema:**
   - By Department (por departamento)
   - By Design Temperature (por temperatura)
   - By Occupancy (por ocupación)
   - By HVAC Zone (por zona térmica)

3. **Personalizar colores:**
   - Edit Scheme → Modificar rangos de color
   - Asignar colores significativos

**Ejemplo:** Color fill por temperatura de diseño
- Azul intenso: Espacios fríos (Data Center, 18-20°C)
- Verde: Espacios confort (Oficinas, 22-24°C)
- Amarillo/Naranja: Espacios cálidos (Bodegas, 26-28°C)

### Etiquetas de Espacios (Space Tags)

**Personalizar Space Tags:**

1. **Seleccionar tag** existente
2. **Edit Type → Duplicate**
3. **Edit Label:**
   - Mostrar: Name, Number, Area, Design Temperature
   - Formato: Tamaño de texto, alineación

**Crear tag personalizado:**
- Annotate tab → Tag panel → Loaded Tags → Space Tag
- Edit Family → Agregar parámetros deseados
- Load into Project

### Vistas 3D de Espacios

**Mostrar volúmenes 3D:**

1. **Vista 3D → Visual Style:** Shaded
2. **Visibility/Graphics:**
   - Spaces: Marcar visible
   - Space Interiors: Checked
   - Space Reference: Checked

3. **Transparencia:**
   - Halftone para ver espacios superpuestos
   - Override color por zona

---

## 7. Validación de Espacios

### Verificar Espacios Correctamente Delimitados

**Problemas comunes:**

1. **Espacios no delimitados (unbounded):**
   - Falta muro perimetral
   - Room Separator no colocado
   - **Solución:** Agregar Space Separator en gaps

2. **Espacios superpuestos:**
   - Dos espacios ocupan misma área
   - **Solución:** Revisar boundaries, eliminar duplicados

3. **Espacios sin altura:**
   - Unbounded Height = 0
   - **Solución:** Verificar Upper Limit del espacio

### Herramientas de Verificación

**Space Verification Report:**
- Analyze tab → Reports & Schedules → `Space Report`
- Muestra: Espacios sin nombre, sin zona, sin área

**Schedule de Espacios:**
- View tab → Create Schedule → `Spaces`
- Campos: Name, Number, Area, Volume, HVAC Zone
- Filtrar: Espacios con problemas (Area = 0, etc.)

---

## 8. Ejercicio Práctico

### Configurar Espacios en Edificio de Oficinas (1 Piso)

**Datos del proyecto:**
```
Edificio: Oficinas administrativas
Área total: 500 m² (25m × 20m)
Altura piso: 3.50 m
Ubicación: Clima templado (Ciudad de México, DF)
Espacios requeridos:
  - 6 Oficinas privadas (15 m² cada una)
  - 1 Sala de conferencias (40 m²)
  - 1 Área abierta (open office) (250 m²)
  - 1 Recepción (30 m²)
  - 2 Baños (10 m² cada uno)
  - 1 Cocineta/Break room (20 m²)
  - Circulaciones (pasillos, 85 m²)
```

**Tareas:**

1. **Crear espacios manualmente** en vista de planta
2. **Asignar nombres y números** a cada espacio
3. **Configurar propiedades térmicas:**
   - Oficinas: 0.10 personas/m², 12 W/m² iluminación, 15 W/m² equipos
   - Sala conferencias: 0.50 personas/m², 15 W/m² iluminación
   - Open office: 0.15 personas/m², 12 W/m² iluminación
4. **Establecer temperaturas de diseño:**
   - Cooling: 24°C
   - Heating: 20°C
5. **Configurar Building Information:**
   - Location: Ciudad de México
   - Weather data: Importar archivo .epw
6. **Crear Color Fill Legend** por Department
7. **Generar Space Schedule** mostrando:
   - Name, Number, Area, Occupancy, Lighting Load, Design Temp
8. **Validar:** Ningún espacio unbounded, todos con propiedades correctas

**Entregables:**
- Planta con espacios creados y etiquetados
- Color fill por Department
- Space Schedule completo
- Captura de propiedades de 3 espacios diferentes

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Conceptos de espacios MEP** y diferencias con Rooms arquitectónicos
✅ **Creación de espacios** mediante métodos manuales y desde Rooms
✅ **Propiedades térmicas** esenciales: ocupación, iluminación, equipos
✅ **Configuración de parámetros de diseño** y Building Information
✅ **Condiciones ambientales exteriores** para cálculo de cargas
✅ **Visualización** mediante color fills y space tags
✅ **Validación** de espacios correctamente configurados

---

## Recursos Adicionales

- 📄 **ASHRAE 62.1** - Ventilation for Acceptable Indoor Air Quality
- 📄 **ASHRAE Handbook - Fundamentals** - Tablas de cargas térmicas
- 🌐 **EnergyPlus Weather Data** - https://energyplus.net/weather
- 📘 **Autodesk Knowledge Network** - Space Properties en Revit MEP

---

## Próxima Lección

**Lección 2: HVAC Zones Mejoradas (Revit 2026)**

Aprenderás a agrupar espacios en zonas térmicas utilizando las nuevas funcionalidades de HVAC Zones 2026, incluyendo fusión con System Zones y mejoras en gestión de zonas múltiples.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
