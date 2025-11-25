# Lección 3: Transformadores y Subestaciones

## Introducción

Los **transformadores** son equipos fundamentales que modifican niveles de voltaje mediante inducción electromagnética, permitiendo transmisión eficiente de energía y adaptación a diferentes requisitos de voltaje en instalaciones eléctricas. Las **subestaciones** integran transformadores con equipos de protección, medición y distribución.

Esta lección cubre tipos de transformadores, relaciones de transformación, cálculos de capacidad (kVA), modelado en Revit MEP 2026, conexiones delta/wye, y diseño de subestaciones completas.

## Fundamentos de Transformadores

### Principio de Operación

**Inducción electromagnética:**
- Bobina primaria recibe voltaje de entrada
- Campo magnético variable en núcleo ferromagnético
- Bobina secundaria induce voltaje de salida
- **NO hay conexión eléctrica directa** entre primario y secundario

**Relación de transformación:**
```
V_s / V_p = N_s / N_p

Donde:
V_s = Voltaje secundario
V_p = Voltaje primario
N_s = Número de vueltas secundario
N_p = Número de vueltas primario
```

**Conservación de potencia (ideal):**
```
V_p × I_p = V_s × I_s
kVA_p = kVA_s
```

### Tipos de Transformadores

**1. Step-Down Transformer (Reductor)**

**Uso más común** en edificios comerciales.

**Ejemplo:**
- Primario: 480V (distribución)
- Secundario: 208V o 120V (iluminación/contactos)
- Relación: 480V / 208V = 2.31:1

**2. Step-Up Transformer (Elevador)**

**Uso:** Transmisión de energía a larga distancia.

**Ejemplo:**
- Primario: 13.2 kV (subestación)
- Secundario: 138 kV (línea de transmisión)

**3. Isolation Transformer (Aislamiento)**

**Uso:** Proteger equipos sensibles, eliminar ruido eléctrico.

**Ejemplo:**
- Primario: 120V
- Secundario: 120V (mismo voltaje, pero aislado)

**4. Autotransformer**

**Uso:** Arranque de motores, ajuste de voltaje.

**Característica:** Bobina única con taps (no tiene aislamiento galvánico).

## Conexiones de Transformadores

### Delta Connection (Δ)

**Configuración:** 3 bobinas conectadas en triángulo.

**Características:**
- **NO tiene neutro**
- Voltaje línea-línea = Voltaje de bobina
- Corriente de línea = √3 × Corriente de bobina
- Uso: Distribución industrial, motores

**Ejemplo - 480V Delta:**
```
V_LL = 480V (línea a línea)
V_LN = No disponible (sin neutro)
```

### Wye Connection (Y)

**Configuración:** 3 bobinas conectadas en estrella con punto neutro común.

**Características:**
- **Tiene neutro** (grounded)
- Voltaje línea-línea = √3 × Voltaje línea-neutro
- Corriente de línea = Corriente de bobina
- Uso: Distribución comercial (permite 120V monofásico)

**Ejemplo - 208Y/120V:**
```
V_LL = 208V (línea a línea) - para cargas trifásicas
V_LN = 120V (línea a neutro) - para iluminación/contactos
Relación: 208 / 120 = √3 = 1.732
```

### Combinaciones Comunes

| Primario | Secundario | Uso Típico | Ejemplo |
|----------|-----------|-----------|---------|
| **Delta** | **Wye** | Más común en edificios | 480Δ → 208Y/120V |
| **Wye** | **Delta** | Industrial, motores | 13.2kY → 480Δ |
| **Wye** | **Wye** | Utilities, transmisión | 34.5kY → 13.2kY |
| **Delta** | **Delta** | Industrial puro | 480Δ → 240Δ |

## Modelar Transformador en Revit

### Procedimiento Completo

**Paso 1: Cargar Familia de Transformer**

1. **Insert** → **Load Family**
2. Navegar a: `Electrical\MEP\Transformers\`
3. Seleccionar: `Transformer - Pad Mounted.rfa` (exterior) o `Transformer - Dry Type.rfa` (interior)
4. **Open**

**Paso 2: Colocar Transformer**

1. **Systems** → **Electrical** → **Electrical Equipment**
2. **Type Selector:** `Transformer - 480V Delta to 208V Wye - 112.5 kVA`
3. En vista de plano, colocar en **transformer vault** o **electrical room**

**Paso 3: Configurar Type Properties**

Seleccionar transformer → **Edit Type:**

**Electrical - Winding Configuration:**
- **Primary Configuration:** `Delta`
- **Primary Voltage:** `480V`
- **Secondary Configuration:** `Wye`
- **Secondary Voltage:** `208Y/120V`
- **kVA Rating:** `112.5 kVA`

**Electrical - Impedance:**
- **Impedance (%):** `5.75%` (típico para transformadores secos)

**Mechanical:**
- **Cooling Method:** `Dry Type - Air Cooled` o `Oil Filled - ONAN`

**Paso 4: Crear Circuitos (Conexiones)**

**Primary Side (Entrada):**
1. Seleccionar transformer
2. **Power** button (ribbon)
3. Select source panel: `SWBD-MAIN` (switchboard 480V)

**Secondary Side (Salida):**
1. Los panelboards downstream se conectan al transformer como fuente
2. Ejemplo: `LP-1` se conecta a secondary del XFMR-1

![Transformer con Conexiones](../imagenes/mod2-transformer-connections.png)

## Cálculo de Capacidad de Transformador

### Método 1: Suma Directa de Cargas

**Ejemplo - Edificio de Oficinas:**

**Cargas conectadas downstream del transformer:**

| Panel | Connected Load (kVA) | Demand Factor | Demand Load (kVA) |
|-------|---------------------|---------------|-------------------|
| LP-1 (Lighting L1) | 45 kVA | 1.0 | 45 kVA |
| LP-2 (Lighting L2) | 48 kVA | 1.0 | 48 kVA |
| LP-3 (Lighting L3) | 42 kVA | 1.0 | 42 kVA |
| PP-1 (Power L1) | 60 kVA | 0.5 | 30 kVA |
| PP-2 (Power L2) | 55 kVA | 0.5 | 27.5 kVA |
| **Total** | **250 kVA** | | **192.5 kVA** |

**Demand factors aplicados:**
- Lighting: 100% (carga continua)
- Receptacles: 50% (NEC Table 220.44 - primeros 10kVA @ 100%, resto @ 50%)

**Transformer size requerido:**
```
Size = Demand Load × Safety Factor
Size = 192.5 kVA × 1.25
Size = 240.6 kVA
```

**Seleccionar tamaño estándar:** **300 kVA** (siguiente estándar arriba)

### Método 2: NEC Article 220 (Opcional)

**Cálculo detallado según NEC:**

**Paso 1: Iluminación General**
```
Área total: 3,000 m² (32,290 ft²)
VA/ft²: 3.5 VA/ft² (oficinas, NEC Table 220.12)
Lighting VA = 32,290 × 3.5 = 113,015 VA = 113 kVA
```

**Paso 2: Receptacles**
```
Número de receptacles: 180
VA/receptacle: 180 VA (NEC 220.14(I))
Total = 180 × 180 = 32,400 VA = 32.4 kVA

Demand (NEC 220.44):
  Primeros 10 kVA: 10 × 1.0 = 10 kVA
  Exceso: (32.4-10) × 0.5 = 11.2 kVA
  Demand total receptacles = 21.2 kVA
```

**Paso 3: HVAC y otros**
```
HVAC equipment: 75 kVA @ 1.0 = 75 kVA
Elevator: 25 kVA @ 0.7 = 17.5 kVA
```

**Total demand load:**
```
113 + 21.2 + 75 + 17.5 = 226.7 kVA
Safety factor: 226.7 × 1.25 = 283.4 kVA
```

**Selección:** **300 kVA**

## Caída de Voltaje en Transformador

### Regulación de Voltaje

**Voltage regulation:**
```
%Reg = [(V_no-load - V_full-load) / V_full-load] × 100
```

**Típico:** 2-3% para transformadores secos.

**Ejemplo:**
- Voltaje nominal secundario: 208V
- Voltaje en vacío (no-load): 213V
- Voltaje a carga plena: 208V

```
%Reg = [(213 - 208) / 208] × 100 = 2.4%
```

### Impedancia del Transformador

**Impedance (Z%):** Resistencia interna del transformer.

**Típico:**
- Transformadores secos pequeños (< 500 kVA): **4-6%**
- Transformadores grandes (> 1000 kVA): **6-8%**

**Efecto:** A mayor impedancia, mayor caída de voltaje bajo carga.

**Beneficio de alta impedancia:** Limita corriente de cortocircuito (protección).

## Diseñar Subestación Completa

### Componentes de Subestación

**Subestación típica 13.2kV / 480V - 1500 kVA:**

```
1. Primary Disconnect (13.2 kV) ← Utility
2. Primary Fuses (100A, 15 kV)
3. Transformer (13.2kV/480V, 1500 kVA)
4. Secondary Switchboard (480V, 3000A)
5. Protective Relays
6. Metering
```

### Modelado en Revit

**Paso 1: Crear Electrical Room Dedicado**

1. **Architecture** → **Room** → **Room Boundaries**
2. Nombre: `Substation Vault`
3. Área: Mínimo 4m × 6m para transformer 1500 kVA

**Paso 2: Modelar Equipos en Secuencia**

**Equipment 1: Service Point**
- **Electrical Equipment** → `Service Point - 13.2 kV`
- Ubicación: Entrada del vault (exterior wall)

**Equipment 2: Primary Disconnect**
- Type: `Disconnect Switch - 13.2 kV - 100A`
- Ubicar después de service point

**Equipment 3: Transformer**
- Type: `Transformer - 13200V to 480V - 1500 kVA - Padmount`
- Configurar:
  - Primary: 13.2 kV Delta
  - Secondary: 480Y/277V Wye
  - Impedance: 5.75%

**Equipment 4: Main Switchboard**
- Type: `Switchboard - 480V - 3000A`
- Conectar a secondary de transformer

**Paso 3: Crear Circuitos de Interconexión**

1. Service Point → Primary Disconnect (circuito 13.2kV)
2. Primary Disconnect → Transformer Primary (circuito 13.2kV)
3. Transformer Secondary → Main Switchboard (circuito 480V)

**Paso 4: Agregar Anotaciones**

- **Text Notes:** Identificar equipos
- **Tags:** Etiquetar ratings
- **Detail Callouts:** Crear detalles de conexiones

![Subestación Completa](../imagenes/mod2-substation-complete.png)

## Protecciones en Transformadores

### Primary Protection

**Fuses o Breakers en lado primario:**

**Cálculo de rating:**
```
I_primary = kVA / (√3 × V_primary)
I_primary = 1500 kVA / (1.732 × 13,200V)
I_primary = 65.6 A

Fuse rating = 65.6 × 1.5 = 98.4 A
```

**Selección:** **100A fuses** (15 kV clase)

### Secondary Protection

**Main breaker en secondary side:**

```
I_secondary = kVA / (√3 × V_secondary)
I_secondary = 1500 kVA / (1.732 × 480V)
I_secondary = 1804 A

Breaker rating ≥ 1804 A
```

**Selección:** **2000A main breaker**

### Ground Fault Protection

**NEC 450.3:** Transformadores requieren protección de falla a tierra.

**Opciones:**
- Ground fault relay en secondary
- Differential protection (transformadores grandes)

## Revit 2026: Transformer Improvements

**Nuevas funcionalidades:**

1. **Customizable Winding Configuration** - Configurar conexiones personalizadas más allá de templates
2. **Impedance Fields in Schedules** - Campo %Z agregable a Equipment Schedules
3. **Enhanced Voltage System Mapping** - Mapeo automático de sistemas primario/secundario

### Equipment Schedule con Transformer Data

**Campos recomendados:**

- Family and Type
- Name (ej. XFMR-1)
- Primary Voltage
- Secondary Voltage
- kVA Rating
- **Primary Configuration** (Delta/Wye)
- **Secondary Configuration** (Delta/Wye)
- **Impedance %** (nuevo 2026)
- Location

**Exportar a Excel** para cálculos de cortocircuito externos.

## Mejores Prácticas

### 1. Sizing para Futuro Crecimiento

**Regla general:** Dimensionar transformador al **80% de capacidad** en operación normal.

**Permite:**
- 20% de crecimiento futuro sin reemplazar
- Operación más eficiente (transformadores más eficientes al 50-80% carga)

### 2. Ubicación de Transformadores

**Interior (Dry-Type):**
- Requiere ventilación adecuada
- Ruido (especialmente bajo carga)
- Acceso para mantenimiento

**Exterior (Padmount/Pole):**
- Utility-owned típicamente
- Clearances según códigos locales
- Protección contra impactos vehiculares

### 3. Redundancia en Instalaciones Críticas

**N+1 Configuration:**
- 2 transformadores al 50% cada uno
- Si uno falla, el otro puede sostener carga crítica

**Parallel Operation:**
- Transformadores en paralelo
- Automatic load sharing

### 4. Eficiencia Energética

**High-Efficiency Transformers:**
- NEMA Premium Efficiency
- Reducen pérdidas en núcleo y bobinados
- ROI típico: 3-7 años (ahorro de energía)

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Diseñar subestación completa con transformer 500 kVA, calcular protecciones y modelar en Revit.

---

**Próxima Lección:** Creación de Circuitos Eléctricos - Routing automático y manual con mejoras 2026.
