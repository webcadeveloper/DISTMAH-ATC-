# Lección 2: Aire Fresco y Ventilación

![Aire Fresco y Ventilación](../imagenes/leccion-02-aire-fresco.png)

## Introducción

La **ventilación** es el proceso de suministrar aire exterior fresco a espacios interiores y remover aire viciado. Una ventilación adecuada es esencial para mantener la calidad del aire interior (IAQ - Indoor Air Quality), controlar humedad, diluir contaminantes y asegurar el confort y salud de los ocupantes.

En esta lección aprenderás sobre ventilación natural vs. mecánica, diseño de tomas de aire exterior, sistemas de filtración, ventilación balanceada con recuperación de energía (HRV/ERV) y requisitos de caudales según normativas ASHRAE.

**Duración estimada:** 55 minutos

---

## 1. Ventilación Natural vs. Mecánica

### Ventilación Natural

**Definición:** Movimiento de aire mediante diferencias de presión natural (viento, efecto stack).

**Mecanismos:**

#### 1. Ventilación Cruzada (Cross Ventilation)
```
Principio: Viento entra por un lado, sale por otro
Requisitos:
  - Aberturas en lados opuestos
  - Mínimo 5% área de piso en aberturas (códigos)
  - Sin obstáculos internos bloqueando flujo
Efectividad: Alta (con viento constante)
```

#### 2. Efecto Stack (Stack Effect)
```
Principio: Aire caliente sube, aire frío entra abajo
Requisitos:
  - Aberturas bajas (entrada aire fresco)
  - Aberturas altas (salida aire caliente)
  - Diferencia altura mínima 2-3m
Efectividad: Media-alta (climas con ΔT significativo)
```

**Ventajas:**
- ✅ Cero consumo energético
- ✅ Mantenimiento mínimo
- ✅ Conexión con exterior

**Desventajas:**
- ❌ No controlable (depende de clima)
- ❌ No filtra aire exterior
- ❌ Pérdidas térmicas significativas (invierno/verano)
- ❌ No cumple normas en edificios comerciales modernos

### Ventilación Mecánica

**Definición:** Uso de ventiladores para forzar movimiento de aire.

**Tipos:**

#### 1. Sistema de Suministro (Supply-Only)
```
Funcionamiento: Ventilador introduce aire exterior
Resultado: Presión positiva en edificio
Ventajas: Previene infiltración no deseada
Aplicaciones: Áreas que requieren presión positiva (quirófanos)
```

#### 2. Sistema de Extracción (Exhaust-Only)
```
Funcionamiento: Ventilador extrae aire interior
Resultado: Presión negativa en edificio
Ventajas: Previene migración de olores
Aplicaciones: Baños, cocinas, laboratorios
```

#### 3. Sistema Balanceado (Balanced)
```
Funcionamiento: Ventiladores de suministro y extracción
Resultado: Presión neutra
Ventajas: Control total sobre IAQ, permite recuperación energía
Aplicaciones: Edificios comerciales modernos, hospitales
```

---

## 2. Tomas de Aire Exterior

### Ubicación de Tomas (ASHRAE 62.1)

**Distancias mínimas:**

```
Desde:                           | Distancia
─────────────────────────────────────────────────
Descarga de extracción           | 3.0 m (10 ft)
Chimeneas de combustión          | 6.0 m (20 ft)
Torres de enfriamiento           | 6.0 m (20 ft)
Calles con tráfico vehicular     | 3.0 m (10 ft)
Áreas de carga (muelles)         | 7.5 m (25 ft)
Cuartos de basura                | 6.0 m (20 ft)
Estacionamientos                 | 3.0 m (10 ft)
Nivel del suelo                  | 1.8 m (6 ft) mínimo
```

**Altura recomendada:**
- Mínimo: 1.8m sobre nivel del suelo (evitar polvo, basura)
- Óptimo: 3-5m sobre nivel del suelo
- Azotea: Ubicación preferida (aire más limpio)

### Componentes de Toma de Aire

#### 1. Louver (Persiana/Rejilla Exterior)

**Función:** Proteger contra lluvia, nieve, objetos

**Características:**
```
Material: Aluminio extruido (resistencia corrosión)
Tipo: Drainable blade (drenable) o stationary
Free area: 40-50% (área efectiva vs. área frontal)
Bird screen: Malla 12.5mm (1/2") contra aves
```

#### 2. Damper Motorizado (Outside Air Damper)

**Función:** Controlar cantidad de aire exterior

**Tipos:**
```
Parallel blade: Para on/off (no modulante)
Opposed blade: Para modulación (0-100%)
Actuador: Eléctrico 24VAC, señal 0-10VDC o 4-20mA
Fail position: Normalmente cerrado (ahorro energético)
```

#### 3. Filtro de Aire Exterior

**Ubicación:** Inmediatamente después de damper

**Eficiencia mínima (ASHRAE 62.1):**
```
MERV 6: Mínimo aceptable (partículas >10 μm)
MERV 8: Recomendado oficinas (partículas >3 μm)
MERV 13: Recomendado hospitales (partículas >0.3 μm)
```

---

## 3. Cálculo de Aire Exterior Requerido

### Método ASHRAE 62.1

**Fórmula básica:**

```
V_oz = R_p × P_z + R_a × A_z

Donde:
V_oz = Aire exterior requerido zona (L/s)
R_p = Caudal por persona (L/s/persona)
P_z = Número de personas en zona
R_a = Caudal por área (L/s/m²)
A_z = Área de zona (m²)
```

**Valores típicos (ASHRAE 62.1 Tabla 6-1):**

| Espacio | R_p (L/s/persona) | R_a (L/s/m²) |
|---------|-------------------|---------------|
| Oficina | 2.5 | 0.3 |
| Sala conferencias | 2.5 | 0.3 |
| Aula escolar | 3.8 | 0.3 |
| Retail | 3.8 | 0.6 |
| Restaurante comedor | 3.8 | 0.9 |
| Gimnasio | 10 | 0.3 |
| Laboratorio | 5 | 0.9 |

**Ejemplo de cálculo:**

```
Oficina abierta:
  Área: 500 m²
  Ocupación: 50 personas (0.10 personas/m²)
  R_p: 2.5 L/s/persona
  R_a: 0.3 L/s/m²

V_oz = (2.5 × 50) + (0.3 × 500)
V_oz = 125 + 150 = 275 L/s

Aire exterior requerido: 275 L/s (mínimo)
```

### Factores de Corrección

#### Factor Z (Diversidad de Sistema)

**Para sistemas multi-zona:**

```
V_ot = Σ(V_oz) / E_z

Donde:
V_ot = Aire exterior total requerido
E_z = Eficiencia de distribución zona (típico 0.8-1.0)
```

#### Ajuste por Altura

**Para altitudes >1000m:**

```
V_oz_adjusted = V_oz × (Presión_local / 101.325)
```

---

## 4. Sistemas de Ventilación Balanceada (HRV/ERV)

### HRV - Heat Recovery Ventilator

**Función:** Recupera calor sensible del aire de extracción

**Principio:**
```
Invierno:
  - Aire exterior frío (5°C) → Precalentado por aire extracción (20°C)
  - Aire extracción caliente → Enfriado antes de descargar
  - NO intercambia humedad

Verano:
  - Aire exterior caliente (30°C) → Preenfriado por aire extracción (24°C)
  - Reducción de carga de enfriamiento
```

**Eficiencia típica:**
```
Sensible efficiency: 60-80%
Temperaturas ejemplo (invierno):
  - Aire exterior: 0°C
  - Aire extracción: 20°C
  - Aire suministro (post-HRV): 12-16°C (vs. 0°C sin HRV)
  - Ahorro calefacción: 60-80% de carga de ventilación
```

### ERV - Energy Recovery Ventilator

**Función:** Recupera calor sensible + latente (humedad)

**Principio:**
```
Intercambiador entálpico (rueda desecante o membrana)
Transferencia de:
  - Calor sensible (temperatura)
  - Calor latente (humedad)

Invierno:
  - Recupera calor + humedad del aire extracción
  - Humidifica aire exterior seco

Verano:
  - Recupera frescura + deshumidifica aire exterior húmedo
```

**Eficiencias típicas:**
```
Sensible efficiency: 60-75%
Latent efficiency: 50-65%
Total efficiency: 55-70%
```

**Comparación HRV vs ERV:**

| Característica | HRV | ERV |
|----------------|-----|-----|
| Recupera calor | ✓ | ✓ |
| Recupera humedad | ✗ | ✓ |
| Costo | Menor | Mayor (+20-30%) |
| Mantenimiento | Bajo | Medio (rueda desecante) |
| Aplicación ideal | Climas secos | Climas húmedos |

---

## 5. Filtración de Aire

### Clasificación MERV (Minimum Efficiency Reporting Value)

**Estándar ASHRAE 52.2:**

```
MERV 1-4: Filtros básicos (NO recomendados HVAC)
  - Captura: Partículas >10 μm (polen, polvo grueso)
  - Aplicación: Protección mínima equipos

MERV 5-8: Filtros estándar (Recomendado mínimo)
  - Captura: Partículas 3-10 μm (esporas moho, polvo)
  - Aplicación: Oficinas, comercial estándar
  - Caída presión inicial: 50-100 Pa

MERV 9-12: Filtros de alta eficiencia
  - Captura: Partículas 1-3 μm (bacteria, aerosoles)
  - Aplicación: Hospitales, laboratorios
  - Caída presión inicial: 100-200 Pa

MERV 13-16: Filtros HEPA-like
  - Captura: Partículas 0.3-1 μm (virus, humo)
  - Aplicación: Salas limpias, quirófanos
  - Caída presión inicial: 200-300 Pa

HEPA (H13-H14): Filtros absolutos
  - Captura: >99.97% partículas ≥0.3 μm
  - Aplicación: Salas blancas ISO 5-7
  - Caída presión inicial: 300-500 Pa
```

### Selección de Filtros

**Consideraciones:**

1. **Caída de presión:**
   - Inicial: Al instalar filtro nuevo
   - Final: Cuando filtro saturado (2× inicial típico)
   - Ventilador debe vencer presión final

2. **Frecuencia de reemplazo:**
   ```
   MERV 8: Cada 3-6 meses
   MERV 13: Cada 6-12 meses
   HEPA: Cada 12-24 meses (según ambiente)
   Indicador: Differential pressure switch (alertar saturación)
   ```

3. **Dimensionamiento:**
   ```
   Face velocity recomendada: 2-3 m/s
   Área filtro = Caudal (m³/s) / Face velocity (m/s)

   Ejemplo:
   Caudal: 5000 L/s = 5 m³/s
   Face velocity: 2.5 m/s
   Área requerida: 5 / 2.5 = 2.0 m²

   Filtro: 1.0m × 2.0m o 4 filtros de 0.6m × 0.6m
   ```

---

## 6. Humidificación y Deshumidificación

### Humidificación (Invierno)

**Objetivo:** Mantener humedad relativa 30-50% (confort + salud)

**Tipos de humidificadores:**

#### 1. Steam Humidifier (Vapor)
```
Principio: Inyecta vapor de agua en ducto
Ventajas: Rápido, higiénico (vapor estéril)
Desventajas: Alto consumo energético
Aplicación: Hospitales, laboratorios
```

#### 2. Evaporative Humidifier (Evaporativo)
```
Principio: Agua rocía sobre panel, aire evapora
Ventajas: Bajo consumo, también enfría (adiabático)
Desventajas: Requiere tratamiento agua, mantenimiento
Aplicación: HVAC comercial general
```

### Deshumidificación (Verano)

**Métodos:**

#### 1. Cooling Coil (Serpentín Enfriamiento)
```
Principio: Enfriar aire bajo punto rocío → condensación
Control: Temperatura serpentín <15°C
By-product: Enfriamiento (principal función)
Limitación: No deshumidifica sin enfriar
```

#### 2. Desiccant Dehumidifier (Desecante)
```
Principio: Rueda desecante absorbe humedad
Ventajas: Deshumidifica sin enfriar
Regeneración: Calor para secar desecante
Aplicación: Climas muy húmedos, procesos especiales
```

---

## 7. Ventilación según Uso

### Oficinas

**Requisitos:**
```
Aire exterior: 2.5 L/s/persona + 0.3 L/s/m²
Renovaciones: 1-2 ACH (complementario)
Presión: Neutra o ligeramente positiva
Estrategia: Ventilación mecánica balanceada con ERV
```

### Retail/Comercio

**Requisitos:**
```
Aire exterior: 3.8 L/s/persona + 0.6 L/s/m²
Renovaciones: 3-6 ACH (alta densidad ocupación)
Presión: Ligeramente positiva (evitar polvo exterior)
Estrategia: 100% aire exterior en horarios pico (economizer)
```

### Residencial

**Requisitos (ASHRAE 62.2):**
```
Aire exterior continuo: 0.15 L/s/m² + 3.5 L/s/dormitorio
O intermitente: Ventilador baño 50 L/s × 1h post-uso
Infiltración: 0.35 ACH (edificios bien sellados)
Estrategia: HRV/ERV para eficiencia energética
```

---

## 8. Modelado en Revit MEP

### Crear Toma de Aire Exterior

1. **Colocar Air Terminal (louver exterior):**
   - Load Family: "Outdoor Air Louver"
   - Ubicar en muro exterior o azotea
   - Height: 2-3m sobre nivel del suelo

2. **Configurar propiedades:**
   - Airflow: [valor calculado] L/s
   - System: Outside Air
   - Free Area %: 45% (típico louver)

3. **Conectar a UMA:**
   - Duct desde louver a entrada OA de UMA
   - Tamaño ducto: Velocidad 4-6 m/s

### Modelar Sistema HRV/ERV

1. **Colocar equipo HRV:**
   - Load Family: "Heat Recovery Ventilator"
   - Ubicación: Cuarto mecánico o azotea

2. **Configurar caudales:**
   - Supply Airflow: [valor] L/s
   - Exhaust Airflow: [valor] L/s (balanceado)
   - Efficiency: 70% (típico)

3. **Routing de 4 ductos:**
   - Outdoor Air → HRV
   - HRV → Supply Air (a UMA o directo a espacios)
   - Exhaust Air (desde espacios) → HRV
   - HRV → Discharge (al exterior)

4. **Create Systems:**
   - Outside Air System
   - Exhaust Air System
   - Verificar balance (supply = exhaust)

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Ventilación natural vs. mecánica** - ventajas, desventajas, aplicaciones
✅ **Tomas de aire exterior** - ubicación, componentes, distancias mínimas
✅ **Cálculo de aire exterior** según ASHRAE 62.1 (método R_p y R_a)
✅ **HRV y ERV** - recuperación de energía, eficiencias, comparación
✅ **Filtración** - clasificación MERV, selección, dimensionamiento
✅ **Humidificación/deshumidificación** - métodos y aplicaciones
✅ **Ventilación por uso** - oficinas, retail, residencial
✅ **Modelado en Revit** - tomas OA, sistemas HRV/ERV

---

## Próxima Lección

**Lección 3: Ventilación Mecánica**

Aprenderás sobre unidades de ventilación centralizada, recuperadores de calor (HRV), intercambiadores de energía (ERV), sistemas de ventilación por demanda (DCV) con sensores CO2, y presurización de espacios especiales.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 4:** Sistemas de Ventilación
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
