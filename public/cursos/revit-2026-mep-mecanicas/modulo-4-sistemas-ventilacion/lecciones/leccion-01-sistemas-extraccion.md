# Lección 1: Sistemas de Extracción

![Sistemas de Extracción](../imagenes/leccion-01-extraccion.png)

## Introducción

Los **sistemas de extracción** son esenciales para mantener la calidad del aire interior en edificios comerciales, industriales y residenciales. Estos sistemas remueven aire contaminado, humedad, olores y calor generado por procesos específicos, asegurando ambientes saludables y cumpliendo con normativas de salud y seguridad.

En esta lección aprenderás a diseñar sistemas de extracción localizada y general, modelar campanas extractoras, rejillas de extracción, ductos de escape y seleccionar equipos apropiados para diferentes aplicaciones.

**Duración estimada:** 60 minutos

---

## 1. Fundamentos de Extracción

### ¿Qué es un Sistema de Extracción?

Un **sistema de extracción** es un conjunto de componentes que remueven aire contaminado de un espacio y lo descargan al exterior o lo filtran para recirculación.

**Componentes principales:**
- 🌬️ **Puntos de captura** - Campanas, rejillas, ranuras de extracción
- 🚰 **Ductos de extracción** - Conductos que transportan aire contaminado
- 💨 **Ventilador de extracción** - Mueve el aire a través del sistema
- 🔌 **Filtros (opcionales)** - Remueven partículas antes de descarga
- 🏭 **Punto de descarga** - Salida al exterior (chimenea, roof cap)

### Tipos de Sistemas de Extracción

#### 1. Extracción Localizada (Local Exhaust)

**Definición:** Captura contaminantes en el punto de generación.

**Características:**
- Alta efectividad (captura en fuente)
- Menor caudal requerido que extracción general
- Diseño específico para proceso/contaminante

**Aplicaciones típicas:**
```
- Campanas de cocina (vapores, grasa)
- Extractores de baño (humedad)
- Campanas de laboratorio (químicos peligrosos)
- Extractores de soldadura (humos metálicos)
- Cabinas de pintura (vapores solventes)
```

#### 2. Extracción General (General Exhaust/Dilution Ventilation)

**Definición:** Diluye contaminantes en todo el espacio mediante extracción general.

**Características:**
- Menor efectividad que localizada
- Mayor caudal requerido
- Control de contaminantes de baja toxicidad

**Aplicaciones típicas:**
```
- Estacionamientos (monóxido de carbono)
- Bodegas (control de humedad)
- Oficinas (aire viciado general)
- Talleres (polvo, olores leves)
```

---

## 2. Campanas Extractoras

### Campanas de Cocina Comercial

**Tipos:**

#### Type I - Grease Hood (Campana de grasa)

**Uso:** Equipos que producen grasa (freidoras, parrillas, estufas)

**Características:**
```
Material: Acero inoxidable calibre 18-20
Filtros: Grease filters (tipo baffle)
Sistema de supresión: Fire suppression (Ansul)
Pendiente: 1:4 mínimo (drenaje de grasa)
Iluminación: Integrada, resistente a grasa
Ductos: Acero soldado, sin aislamiento interno
Velocidad ducto: 12-15 m/s (prevenir deposición grasa)
```

**Caudal de extracción:**
```
CFM por ft lineal (NFPA 96):

Campana tipo Wall (pared):
  - Duty Light: 200 CFM/ft (984 L/s/m)
  - Duty Medium: 300 CFM/ft (1476 L/s/m)
  - Duty Heavy: 400 CFM/ft (1968 L/s/m)

Campana tipo Island (isla):
  - Duty Light: 300 CFM/ft (1476 L/s/m)
  - Duty Medium: 400 CFM/ft (1968 L/s/m)
  - Duty Heavy: 500 CFM/ft (2460 L/s/m)

Duty: Según intensidad de cocción
```

**Ejemplo de cálculo:**
```
Cocina comercial con campana de pared
Longitud campana: 3.0 m (10 ft)
Equipos: Parrilla (heavy duty) + freidora (heavy duty)
Clasificación: Heavy duty

Caudal requerido:
400 CFM/ft × 10 ft = 4000 CFM
Conversión: 4000 CFM × 0.4719 = 1888 L/s ~ 1900 L/s

Ventilador necesario: ~2000 L/s (margen 5%)
```

#### Type II - Heat/Steam Hood (Campana de calor/vapor)

**Uso:** Equipos que producen vapor/calor sin grasa (hornos, marmitas, lavavajillas)

**Características:**
```
Material: Acero galvanizado o inoxidable
Filtros: No requeridos (solo vapor)
Fire suppression: No requerido típicamente
Ductos: Acero galvanizado permitido
Velocidad ducto: 8-10 m/s
```

### Campanas de Laboratorio (Fume Hoods)

**Tipos:**

#### Constant Air Volume (CAV)

**Funcionamiento:** Caudal constante independiente de posición de sash

**Características:**
```
Face velocity: 0.4-0.5 m/s (80-100 fpm)
Caudal típico: 600-1200 L/s por campana (4 ft)
Control: Damper manual o bypass automático
Eficiencia energética: Baja (extracción constante)
```

#### Variable Air Volume (VAV)

**Funcionamiento:** Caudal varía según posición de sash

**Características:**
```
Face velocity: Constante (0.5 m/s) cuando sash abierto
Caudal: Variable (reduce cuando sash baja)
Control: Sensor de posición + VAV damper
Eficiencia energética: Alta (ahorro 50-70%)
Costo: Mayor inicial, ahorro operativo significativo
```

**Cálculo de caudal:**
```
Q (L/s) = A_apertura (m²) × Face Velocity (m/s) × 1000

Ejemplo:
Campana 1.2m ancho × 0.8m alto apertura
Face velocity: 0.5 m/s

Q = 1.2 × 0.8 × 0.5 × 1000 = 480 L/s
```

---

## 3. Rejillas de Extracción

### Rejillas de Baño

**Aplicaciones:** Baños, toilets, vestidores

**Caudales típicos (ASHRAE 62.1):**
```
Baño privado residencial: 25 L/s (50 CFM) continuo o intermitente
Baño público comercial: 50 L/s (100 CFM) por inodoro/urinario
Regadera/ducha: 25 L/s (50 CFM)
Vestidor: 12 L/s (25 CFM) por casillero
```

**Ubicación:**
- Techo o pared alta (aire caliente sube)
- Lejos de puerta de entrada (evitar cortocircuito)
- Sobre inodoro o regadera (capturar humedad en fuente)

**Materiales:**
- Plástico ABS (residencial, bajo costo)
- Aluminio pintado (comercial ligero)
- Acero inoxidable (ambientes corrosivos, alta humedad)

### Rejillas de Cocina Residencial

**Caudal mínimo (códigos):**
```
Estufa eléctrica: 150 L/s (300 CFM)
Estufa de gas: 200 L/s (400 CFM)
Campana profesional: 400+ L/s (800+ CFM)
```

**Tipos:**

#### Campana bajo gabinete
```
Instalación: Debajo de gabinetes superiores
Captura: Frontal (no sides)
Efectividad: Media
Aplicación: Residencial básica
```

#### Campana de isla
```
Instalación: Suspendida desde techo
Captura: 360° (todos lados)
Efectividad: Alta (requiere mayor CFM)
Aplicación: Cocinas abiertas
```

#### Downdraft (extracción hacia abajo)
```
Instalación: Detrás o lado de estufa
Captura: Aire baja antes de subir
Efectividad: Baja-media
Aplicación: Islas sin campana visible
```

---

## 4. Ductos de Extracción

### Materiales de Ductos

#### Acero Galvanizado

**Uso:** Extracción general, aire no corrosivo

**Características:**
```
Aplicaciones: Baños, oficinas, extracción general
Ventajas: Económico, fácil instalación
Limitaciones: No para grasa, no para químicos corrosivos
Calibre típico: 24-26 (gauge)
```

#### Acero Inoxidable

**Uso:** Campanas de cocina, laboratorios químicos

**Características:**
```
Aplicaciones: Grease ducts (cocinas), fume hoods (químicos)
Ventajas: Resistente corrosión, limpieza fácil
Tipo: 304 (general), 316 (alta corrosividad)
Calibre típico: 18-20
Soldadura: Requerida para grease ducts (sin filtraciones)
```

#### PVC/CPVC

**Uso:** Extracción de vapores químicos ácidos

**Características:**
```
Aplicaciones: Laboratorios (ácidos), procesos químicos
Ventajas: Excelente resistencia química, ligero
Limitaciones: Baja resistencia térmica (<60°C típico)
Uniones: Soldadura química (cemento PVC)
```

#### Fibra de Vidrio (FRP - Fiberglass Reinforced Plastic)

**Uso:** Extracción ambientes corrosivos

**Características:**
```
Aplicaciones: Industria química, plantas tratamiento
Ventajas: Resistencia química excelente, ligero
Limitaciones: Costo alto, instalación especializada
```

### Configuraciones de Ductos

**Ductos verticales (Risers):**
- Mínimo: 1 riser por 10 pisos (según código)
- Ubicación: Shaft dedicado, sin cambios de dirección
- Acceso: Puertas de inspección cada 3 pisos

**Ductos horizontales:**
- Pendiente: Mínimo 2% hacia punto bajo (drenaje condensación)
- Soportes: Cada 3m máximo
- Expansión térmica: Juntas de expansión cada 15m (ductos calientes)

---

## 5. Sistemas de Escape Especializados

### Escape de Estacionamientos

**Objetivo:** Remover monóxido de carbono (CO)

**Normativa típica:**
```
Renovación de aire: 6-8 ACH (Air Changes per Hour)
Nivel CO máximo: 25 ppm (8 horas), 50 ppm (1 hora)
Sensores CO: Cada 200-300 m² de estacionamiento
Control: Ventiladores modulan según nivel CO
```

**Caudal de cálculo:**
```
Q (L/s) = Volumen estacionamiento (m³) × ACH / 3600

Ejemplo:
Estacionamiento: 50m × 30m × 3m altura = 4500 m³
ACH requerido: 6 renovaciones/hora

Q = 4500 × 6 / 3600 = 7.5 m³/s = 7500 L/s

Ventiladores: 2 × 4000 L/s (redundancia)
```

**Estrategias:**
- Extracción nivel inferior (CO más denso que aire en frío)
- Suministro nivel superior (aire fresco baja)
- Extractores con VFD (variar según sensores CO)

### Escape de Cuartos de Basura

**Objetivo:** Control de olores

**Caudales típicos:**
```
Cuarto basura pequeño (<20 m²): 100 L/s
Cuarto basura mediano (20-50 m²): 200 L/s
Cuarto basura grande (>50 m²): 10 ACH
```

**Características:**
- Extracción continua 24/7
- Presión negativa (evitar migración olores)
- Ducto independiente (no compartir con otros sistemas)
- Descarga: Alejada de tomas de aire exterior

---

## 6. Modelado en Revit MEP 2026

### Colocar Campanas de Cocina

**Paso a paso:**

1. **Cargar familia de campana:**
   - Insert tab → Load Family
   - Buscar: "Exhaust Hood" o "Range Hood"
   - Cargar familia comercial apropiada

2. **Colocar campana en planta:**
   - Systems tab → Mechanical → Air Terminal
   - Seleccionar familia cargada
   - Colocar sobre equipos de cocina

3. **Configurar propiedades:**
   - Flow: 1900 L/s (ejemplo calculado antes)
   - Height Above Floor: 2.0m típico (7 ft)
   - System Classification: Exhaust

4. **Conectar a ducto de extracción:**
   - Duct tool → Routing desde conector de campana
   - Material: Stainless Steel
   - Shape: Rectangular o Round
   - Size: Según velocidad 12-15 m/s

### Colocar Rejillas de Extracción de Baño

1. **Cargar familia:**
   - Load Family → "Exhaust Grille" o similar

2. **Colocar en techo de baño:**
   - Ceiling-based family
   - Ubicación: Centro de baño o sobre inodoro

3. **Configurar caudal:**
   - Flow: 50 L/s (100 CFM) típico baño público

4. **Conectar a ducto:**
   - Duct desde rejilla a riser vertical
   - Material: Galvanized Steel
   - Diámetro: 150mm (6") típico para 50 L/s

### Crear Sistema de Extracción

1. **Seleccionar componentes:**
   - Ctrl+Click: Campanas, rejillas, ductos relacionados

2. **Create System:**
   - Modify tab → Create System
   - System Type: Exhaust
   - System Name: "EXH-Kitchen-01" (nomenclatura consistente)

3. **Assign Equipment:**
   - Seleccionar ventilador de extracción (exhaust fan)
   - Assign to System

4. **Verificar flow:**
   - System Browser → Ver caudal total agregado
   - Comparar con capacidad de ventilador

---

## 7. Normativas y Códigos

### NFPA 96 - Ventilación de Cocinas Comerciales

**Requisitos clave:**
- Type I hoods: Acero soldado, grease filters, fire suppression
- Duct velocidad mínima: 1500 fpm (7.6 m/s)
- Limpieza de ductos: Cada 3-6 meses (alta producción)
- Clearances: 18" mínimo entre campana y equipos

### ASHRAE 62.1 - Ventilación y Calidad de Aire

**Caudales de extracción mínimos:**

```
Espacio                    | Caudal
─────────────────────────────────────────────
Baño público              | 50 L/s (25 L/s/inodoro)
Vestidor                  | 12 L/s por área
Kitchenette (no comercial)| 7.5 L/s
Cuarto de fotocopias      | 25 L/s
Cuarto eléctrico          | 15 L/s
Laboratorio               | Variable (fume hood)
```

### IMC (International Mechanical Code)

**Extracción de estacionamientos:**
- Opción 1: 6 ACH continuo
- Opción 2: Control por sensores CO (más eficiente)
- Descarga: Mínimo 3m de propiedad vecina

---

## 8. Ejercicio Práctico

### Diseñar Sistema de Extracción de Cocina Comercial

**Proyecto:**
```
Restaurante: Cocina comercial
Equipos de cocción:
  - 1 Parrilla (grill): 1.2m ancho
  - 2 Freidoras: 0.6m c/u
  - 1 Estufa 6 quemadores: 1.0m ancho

Total longitud: 3.4m (11.15 ft)
Clasificación: Heavy duty (alto uso)
Tipo campana: Wall-mounted (pared)
```

**Tareas:**

1. **Calcular caudal de extracción:**
   - Usar NFPA 96: 400 CFM/ft (heavy duty wall)
   - Calcular CFM total
   - Convertir a L/s

2. **Dimensionar ducto:**
   - Velocidad objetivo: 13 m/s
   - Calcular área requerida: A = Q / V
   - Seleccionar ducto rectangular estándar

3. **Especificar componentes:**
   - Campana Type I con fire suppression
   - Grease filters (número y tamaño)
   - Material ducto: Acero inoxidable 304
   - Ventilador: Upblast roof (capacidad requerida)

4. **Modelar en Revit:**
   - Colocar campana sobre equipos
   - Routing de ducto hacia techo
   - Colocar roof exhaust fan
   - Create Exhaust System

5. **Documentar:**
   - Schedule de componentes
   - Elevación mostrando campana y ducto
   - Especificación de fire suppression

**Entregables:**
- Cálculos de caudal documentados
- Plano de planta con campana y ducto
- Elevación de cocina
- Especificación de equipos

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Fundamentos** de sistemas de extracción (localizada vs. general)
✅ **Campanas extractoras** de cocina (Type I y II) y laboratorio (fume hoods)
✅ **Rejillas de extracción** para baños, cocinas residenciales
✅ **Ductos de extracción** - materiales, configuraciones, normativas
✅ **Sistemas especializados** - estacionamientos, cuartos basura
✅ **Modelado en Revit** de campanas, rejillas y sistemas de extracción
✅ **Normativas** NFPA 96, ASHRAE 62.1, IMC

---

## Próxima Lección

**Lección 2: Aire Fresco y Ventilación**

Aprenderás sobre ventilación natural vs. mecánica, tomas de aire exterior, filtración, sistemas de ventilación balanceada (HRV/ERV) y requisitos de aire fresco según diferentes usos y normativas.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 4:** Sistemas de Ventilación
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
