# Lección 4: Dimensionamiento de Ductos

![Dimensionamiento de Ductos](../imagenes/leccion-04-dimensionamiento.png)

## Introducción

El **dimensionamiento correcto de ductos** es fundamental para garantizar el rendimiento eficiente de sistemas HVAC. Ductos subdimensionados causan altas velocidades, ruido excesivo y pérdidas de presión elevadas. Ductos sobredimensionados incrementan costos de instalación y ocupan espacio valioso.

En esta lección aprenderás métodos profesionales de dimensionamiento (equal friction, static regain), cálculo de pérdidas de presión, velocidades recomendadas, selección de accesorios y equilibrado de sistemas.

**Duración estimada:** 65 minutos

---

## 1. Fundamentos de Flujo en Ductos

### Ecuación de Continuidad

```
Q = V × A

Donde:
Q = Caudal volumétrico (m³/s o L/s)
V = Velocidad media (m/s)
A = Área sección transversal (m²)

Conversión:
1 m³/s = 1000 L/s
A (m²) = Largo (m) × Ancho (m)  [rectangular]
A (m²) = π × D² / 4  [circular]
```

**Ejemplo:**
```
Ducto rectangular: 600mm × 400mm
Caudal: 2000 L/s = 2.0 m³/s
Área: 0.6 × 0.4 = 0.24 m²
Velocidad: V = 2.0 / 0.24 = 8.33 m/s ✓ (rango aceptable)
```

### Velocidades Recomendadas

#### Por Aplicación

| Aplicación | Ducto Principal | Ramales | Difusores |
|------------|-----------------|---------|-----------|
| Residencial | 3-5 m/s | 2-4 m/s | 1-2 m/s |
| Oficinas | 4-7 m/s | 3-5 m/s | 2-3 m/s |
| Comercial | 6-10 m/s | 4-7 m/s | 2-4 m/s |
| Industrial | 8-15 m/s | 6-12 m/s | 3-6 m/s |

#### Por Función

```
Supply air (suministro): 4-8 m/s (típico 6 m/s)
Return air (retorno): 3-6 m/s (típico 4-5 m/s)
Exhaust air (extracción): 6-12 m/s (típico 8-10 m/s)
Outside air (aire exterior): 3-5 m/s (filtros, dampers)
```

#### Limitaciones por Ruido

```
Nivel ruido NC (Noise Criteria):
  - NC 25-30: Oficinas privadas, salas reuniones → V ≤ 5 m/s
  - NC 30-35: Oficinas abiertas → V ≤ 6-7 m/s
  - NC 35-40: Retail, restaurantes → V ≤ 8-10 m/s
  - NC 40-50: Industrial → V ≤ 12-15 m/s

Regla general: Velocidad < 6 m/s para evitar ruido en espacios ocupados
```

---

## 2. Métodos de Dimensionamiento

### Método 1: Equal Friction (Fricción Constante)

**Principio:** Mantener pérdida de fricción constante por metro lineal

**Ventaja:** Simplificación de cálculos, balanceo natural del sistema

**Procedimiento:**

1. **Seleccionar fricción objetivo:**
   ```
   Baja presión: 0.8-1.0 Pa/m (mayor diámetro, silencioso)
   Media presión: 1.0-1.5 Pa/m (típico oficinas)
   Alta presión: 1.5-2.5 Pa/m (industrial, compacto)
   ```

2. **Dimensionar ducto principal:**
   ```
   Usar carta de fricción (friction chart) o ecuación Darcy-Weisbach
   Para Q = 2000 L/s, fricción = 1.0 Pa/m:
     → Diámetro ≈ 710mm o rectangular 800×500mm
   ```

3. **Dimensionar ramales:**
   ```
   Mantener fricción 1.0 Pa/m en todos los tramos
   Ramal Q = 500 L/s:
     → Diámetro ≈ 400mm o rectangular 500×300mm
   ```

**Limitación:** No considera static regain (recuperación presión estática)

### Método 2: Static Regain (Recuperación Estática)

**Principio:** Recuperar presión estática en cada reducción de velocidad

**Concepto:**
```
Al reducir tamaño ducto → Velocidad aumenta → Presión estática disminuye
Al bifurcar (caudal menor) → Velocidad puede reducirse → Presión estática recuperada

Diseño óptimo:
  - Dimensionar tramos para que presión estática al final de cada tramo
    sea igual a presión estática al inicio (compensando pérdidas fricción)
  - Resultado: Presión disponible constante en cada toma
```

**Procedimiento:**

1. **Calcular presión disponible en punto inicial:**
   ```
   P_static_0 = P_fan - Pérdidas_accesorios_iniciales
   ```

2. **Dimensionar primer tramo:**
   ```
   Seleccionar tamaño que:
   Pérdida_fricción = Recuperación_estática (por reducción V)
   ```

3. **Iterar para cada tramo subsecuente**

**Ventaja:** Sistema auto-balanceado (sin necesidad de dampers regulación extensos)

**Aplicación:** Sistemas grandes, múltiples ramales

### Método 3: Velocity Reduction (Reducción de Velocidad)

**Principio:** Reducir velocidad progresivamente

**Procedimiento:**
```
Ducto principal: 8 m/s
Primera bifurcación: 7 m/s
Segunda bifurcación: 6 m/s
Ramales finales: 4-5 m/s
Conexión difusores: 2-3 m/s

Objetivo: Ruido mínimo cerca de espacios ocupados
```

---

## 3. Cálculo de Pérdidas de Presión

### Pérdida por Fricción (Darcy-Weisbach)

**Ecuación:**

```
ΔP_friction = f × (L / D_h) × (ρ × V² / 2)

Donde:
f = Factor fricción (función roughness y Reynolds)
L = Longitud ducto (m)
D_h = Diámetro hidráulico (m)
ρ = Densidad aire (1.2 kg/m³ típico)
V = Velocidad (m/s)

Para ductos rectangulares:
D_h = (2 × a × b) / (a + b)
Donde a, b = dimensiones (m)
```

**Ejemplo:**
```
Ducto: 600×400mm, L=50m, V=8m/s
D_h = (2 × 0.6 × 0.4) / (0.6 + 0.4) = 0.48m
f = 0.02 (chapa galvanizada, Re alto)

ΔP = 0.02 × (50 / 0.48) × (1.2 × 8² / 2)
ΔP = 0.02 × 104.2 × 38.4 = 80 Pa
```

### Pérdida en Accesorios (Método Coeficiente K)

**Ecuación:**

```
ΔP_accesorio = K × (ρ × V² / 2)

Donde K = Coeficiente de pérdida (sin dimensión)
```

**Coeficientes K típicos:**

| Accesorio | K |
|-----------|---|
| Codo 90° radio largo (R=1.5D) | 0.20-0.30 |
| Codo 90° radio corto (R=1.0D) | 0.40-0.60 |
| Codo 45° | 0.15-0.20 |
| Bifurcación T simétrica (ramal) | 0.50-0.80 |
| Bifurcación T simétrica (principal) | 0.10-0.20 |
| Reducción gradual (15° ángulo) | 0.05-0.10 |
| Reducción abrupta | 0.30-0.50 |
| Expansión gradual | 0.10-0.15 |
| Expansión abrupta | 0.50-1.00 |
| Damper (totalmente abierto) | 0.15-0.30 |
| Rejilla/Difusor | 0.50-2.00 |

**Ejemplo:**
```
Codo 90° radio largo, V=8m/s, K=0.25

ΔP = 0.25 × (1.2 × 8² / 2)
ΔP = 0.25 × 38.4 = 9.6 Pa ≈ 10 Pa
```

### Pérdida Total del Sistema

```
ΔP_total = Σ(ΔP_fricción tramos) + Σ(ΔP_accesorios)

Típicamente:
  - Ducto recto: 60-70% pérdida total
  - Accesorios: 30-40% pérdida total

Safety factor: 10-15% adicional (incertidumbre, envejecimiento)

Presión estática disponible ventilador ≥ ΔP_total × 1.15
```

---

## 4. Dimensionamiento en Revit MEP 2026

### Duct Sizing

Settings (Automatic)

**Configurar método:**

1. **Mechanical Settings → Duct Settings:**
   ```
   Sizing Method: Friction
   Friction: 1.0 Pa/m (ajustar según aplicación)
   Max Velocity: 8 m/s (límite superior)
   ```

2. **Routing de ductos:**
   - Revit calcula automáticamente tamaño según Q y fricción
   - Usa tamaños estándar más cercanos (increments 50mm o 25mm)

3. **Verificar resultados:**
   - Duct Schedule: Q, Size, Velocity, Friction
   - Filtrar velocidades >8m/s (ajustar manualmente si necesario)

### Sizing Manual

**Para control total:**

1. **Calculate Sizes Manually** (Excel, tabla fricción)

2. **Override en Revit:**
   - Seleccionar ducto → Properties → Size: [valor calculado]
   - Lock: ✓ (prevenir resize automático)

3. **Verificar pressure drop:**
   - Revit calcula ΔP por tramo (si sizing method activo)
   - Schedule mostrando Pressure Drop per segment

---

## 5. Equilibrado de Sistemas

### Necesidad de Equilibrado

**Problema:**
```
Sistema con múltiples ramales:
  - Ramal A: 20m longitud (baja resistencia)
  - Ramal B: 60m longitud (alta resistencia)

Sin balanceo:
  - Ramal A recibe más caudal (menos resistencia)
  - Ramal B recibe menos caudal
  - Caudales no coinciden con diseño

Resultado: Algunos espacios sobre-ventilados, otros sub-ventilados
```

### Métodos de Equilibrado

#### 1. Dampers de Balanceo (Manual)

**Procedimiento:**

1. **Install balancing dampers** en cada ramal

2. **Comisionamiento:**
   - Medir caudal en cada difusor (anemómetro)
   - Ajustar dampers para lograr caudal diseño
   - Iterar (ajuste en un ramal afecta otros)

3. **Documentar:**
   - Posición final dampers (% apertura)
   - Caudales medidos vs. diseño

**Limitación:** Trabajo intensivo, requiere técnico especializado

#### 2. Self-Balancing (Static Regain Method)

**Concepto:**
```
Dimensionar ductos con método static regain
→ Presión disponible igual en cada toma
→ Sistema auto-balanceado (teoría)

Práctica: Aún requiere ajuste fino con dampers
Ventaja: Ajustes mínimos (1-2 vueltas damper)
```

#### 3. Constant Pressure Control

**Para sistemas VAV:**

```
Control presión estática ducto principal constante
  - Sensor presión: 2/3 distancia del ventilador
  - Setpoint: 150-250 Pa (típico)
  - Ventilador VFD modula para mantener presión

Resultado: Presión disponible constante en todas las VAV boxes
```

---

## 6. Accesorios y Transitions

### Codos (Elbows)

**Tipos:**

#### Segmented Elbow (Codo Segmentado)
```
Construcción: Múltiples segmentos rectos (3, 4 o 5 gores)
Número de gores: Más gores → menor K → menor pérdida
  - 3 gores: K = 0.40
  - 4 gores: K = 0.30
  - 5 gores: K = 0.25
Aplicación: Estándar en ductos rectangulares
```

#### Radiused Elbow (Codo con Radio)
```
Radio de curvatura:
  - R = 0.75D: K = 0.50 (no recomendado)
  - R = 1.0D: K = 0.35
  - R = 1.5D: K = 0.25 (recomendado)
  - R = 2.0D: K = 0.20 (óptimo, mayor espacio)

Regla: Usar R ≥ 1.5D siempre que espacio permita
```

### Bifurcaciones (Tees/Wyes)

**Diseño óptimo:**

```
Bifurcación "Wye" (Y):
  - Ángulo ramal: 30-45° (vs. 90° en T)
  - K ramal: 0.30-0.40 (vs. 0.60-0.80 en T)
  - Ventaja: Menor pérdida, menor ruido

Aplicación: Usar Wye siempre que espacio permita (horizontal)
```

### Reducciones (Transitions)

**Ángulo óptimo:**

```
Reducción gradual (reducer):
  - Ángulo: 15-20° máximo
  - K = 0.05-0.10 (pérdida mínima)
  - Longitud: Mayor (L = ΔD / 2 × tan(15°))

Reducción abrupta:
  - Ángulo: >30°
  - K = 0.30-0.50 (alta pérdida, ruido)
  - Longitud: Compacta

Diseño: Usar reducción gradual en ductos principales
```

---

## 7. Normas de Renovación de Aire

### ASHRAE 62.1 - Requisitos Mínimos

| Espacio | ACH Mínimo | Comentario |
|---------|------------|------------|
| Oficinas | 0.5-1 ACH | + aire exterior por persona |
| Aulas | 3-4 ACH | Alta ocupación |
| Retail | 1-2 ACH | Variable según densidad |
| Restaurantes | 6-8 ACH | Cocina: 15-20 ACH |
| Gimnasios | 6-10 ACH | Alta actividad metabólica |
| Estacionamientos | 6-8 ACH | Control CO |
| Salas limpias | 20-600 ACH | Según ISO class |

**Cálculo ACH:**

```
ACH = (Caudal ventilación [m³/h]) / (Volumen espacio [m³])

Ejemplo:
Oficina: 500 m² × 3m altura = 1500 m³
Caudal: 3000 m³/h (diseño)
ACH = 3000 / 1500 = 2 ACH ✓
```

---

## 8. Ejercicio Práctico

### Dimensionar Sistema de Ductos - Oficinas 3 Pisos

**Datos:**
```
Sistema VAV:
  - UMA roof: 10,000 L/s total
  - Ducto vertical (riser): Suministra 3 pisos
  - Piso 1: 3500 L/s (3 VAV boxes)
  - Piso 2: 3500 L/s (3 VAV boxes)
  - Piso 3: 3000 L/s (3 VAV boxes)

Método: Equal friction 1.0 Pa/m
Velocidad máxima: 8 m/s
Material: Galvanized steel
```

**Tareas:**

1. **Dimensionar riser vertical:**
   ```
   Tramo 1 (UMA → Piso 3): Q=10,000 L/s
   Tramo 2 (Piso 3 → Piso 2): Q=7,000 L/s
   Tramo 3 (Piso 2 → Piso 1): Q=3,500 L/s
   Usar fricción 1.0 Pa/m, calcular tamaños
   ```

2. **Dimensionar ductos horizontales Piso 2:**
   ```
   Principal: 3500 L/s → 3 ramales
   Ramal A: 1200 L/s (VAV box 1)
   Ramal B: 1300 L/s (VAV box 2)
   Ramal C: 1000 L/s (VAV box 3)
   ```

3. **Calcular pérdidas presión:**
   ```
   Riser vertical: Fricción + accesorios (codos, bifurcaciones)
   Longitud estimada: 40m + 5 codos 90° + 2 bifurcaciones

   Ducto horizontal P2: Fricción + accesorios
   Longitud: 30m + 3 codos + 2 bifurcaciones
   ```

4. **Verificar velocidades:**
   ```
   Todos los tramos V ≤ 8 m/s?
   Tramos cerca difusores V ≤ 5 m/s? (ruido)
   ```

5. **Modelar en Revit:**
   - Routing sistema completo
   - Apply sizing method (friction 1.0 Pa/m)
   - Generate Duct Schedule: Verify sizes, velocities
   - Adjust manually si velocidades exceden límites

**Entregables:**
- Tabla dimensionamiento (Q, Size, V, Friction)
- Cálculo de pérdidas totales
- Isométrica del sistema
- Duct Schedule desde Revit

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Velocidades recomendadas** por aplicación y función
✅ **Métodos de dimensionamiento** - equal friction, static regain, velocity reduction
✅ **Cálculo de pérdidas** - fricción (Darcy-Weisbach), accesorios (coeficiente K)
✅ **Equilibrado** - dampers, static regain, control presión constante
✅ **Accesorios óptimos** - codos radio largo, wyes, reducciones graduales
✅ **Normas ACH** según tipo de espacio
✅ **Dimensionamiento en Revit** - settings, sizing automático/manual

---

## Próxima Lección

**Lección 5: Selección de Ventiladores**

Aprenderás tipos de ventiladores (centrífugos, axiales, mixtos), curvas características, selección según caudal y presión, motores eléctricos, control de vibraciones, aislamiento acústico y especificaciones técnicas.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 4:** Sistemas de Ventilación
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
