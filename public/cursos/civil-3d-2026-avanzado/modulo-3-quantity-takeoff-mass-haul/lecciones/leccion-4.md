# Lección 4: Earthwork Optimization

## Introducción

La optimización del movimiento de tierras es uno de los aspectos más críticos en el diseño de infraestructura lineal, con impacto directo en la viabilidad económica y ambiental de los proyectos. Un balance óptimo entre corte y relleno, minimización de distancias de acarreo y aprovechamiento eficiente de materiales puede representar ahorros de millones de dólares en proyectos de carreteras.

Esta lección aborda estrategias avanzadas de optimización utilizando Civil 3D 2026, incluyendo análisis iterativo de balances, evaluación de bancos de préstamo y sitios de desperdicio, ajustes de perfil vertical y consideraciones económico-ambientales que influyen en la toma de decisiones.

## Objetivos de Aprendizaje

- Aplicar metodologías de optimización de balance de tierras
- Evaluar y ubicar bancos de préstamo y sitios de desperdicio
- Utilizar herramientas de análisis iterativo en Civil 3D
- Implementar ajustes de perfil para mejorar balance
- Considerar factores económicos y ambientales en optimización

## 1. Fundamentos de Optimización de Movimiento de Tierras

### 1.1 Objetivos de Optimización

La optimización de earthwork busca minimizar el costo total de movimiento de tierras mediante:

**A. Balance de Volúmenes:**
- Igualar corte total y relleno total (balance neto ≈ 0)
- Reducir necesidad de préstamos costosos
- Minimizar desperdicios y costos de disposición

**B. Minimización de Distancias de Acarreo:**
- Reducir distancias promedio de acarreo
- Mantener acarreos dentro de free haul cuando sea posible
- Minimizar overhaul (acarreo > free haul distance)

**C. Aprovechamiento de Materiales:**
- Reutilizar material de corte en rellenos
- Segregar materiales de calidad para usos específicos
- Evitar desperdicio de material reutilizable

**D. Consideraciones Constructivas:**
- Secuenciamiento lógico de operaciones
- Accesibilidad de equipos
- Minimización de operaciones de doble manejo

### 1.2 Restricciones del Problema

La optimización debe considerar:

**Restricciones Geométricas:**
- Pendientes máximas/mínimas de perfil
- Curvas verticales mínimas (K values)
- Clearances verticales (puentes, servicios)
- Anchos de derecho de vía

**Restricciones de Materiales:**
- Calidad de material de corte para relleno
- Factores de compactación requeridos
- Especificaciones geotécnicas de rellenos

**Restricciones Económicas:**
- Costos de acarreo vs. préstamo
- Disponibilidad de bancos cercanos
- Costos de disposición de desperdicios

**Restricciones Ambientales:**
- Límites de explotación de bancos
- Protección de áreas sensibles
- Manejo de materiales contaminados

### 1.3 Función Objetivo

Matemáticamente, el problema de optimización busca minimizar:

```
Costo Total = Σ(V_cut × C_cut) + Σ(V_fill × C_fill) +
              Σ(V_haul × D_haul × C_haul) +
              Σ(V_overhaul × D_over × C_overhaul) +
              (V_borrow × C_borrow) + (V_waste × C_waste)

Donde:
V = Volumen
C = Costo unitario
D = Distancia
```

Civil 3D facilita iteraciones de diseño para aproximarse a este mínimo.

## 2. Análisis de Balance en Civil 3D

### 2.1 Evaluación del Balance Actual

**Paso 1: Compute Materials - Análisis Base**

1. Ejecutar **Compute Materials** con QTO Criteria configurado
2. Revisar resultados en **Toolspace > Prospector > Corridors > [Name] > Quantities**
3. Analizar totales:

```
Total Cut Volume:     125,300 m³
Total Fill Volume:    108,200 m³
Net Balance:          +17,100 m³ (excess cut)
```

**Interpretación:**
- Balance positivo = Exceso de corte (requiere desperdicio)
- Balance negativo = Déficit (requiere préstamo)
- Balance cercano a 0 = Proyecto balanceado (ideal)

**Paso 2: Análisis de Mass Haul Diagram**

1. Generar Mass Haul View
2. Observar:
   - **Ordenada final:** Indica balance neto
   - **Fluctuaciones:** Magnitud de acarreos internos
   - **Overhaul zones:** Áreas fuera de free haul

3. Identificar problemas:
   - Grandes fluctuaciones = Acarreos largos
   - Ordenada muy alta/baja = Desbalance severo
   - Múltiples cruces eje X = Oportunidades de balance local

### 2.2 Identificación de Oportunidades de Optimización

**A. Zonas Críticas de Overhaul:**

Buscar en Mass Haul Diagram:
- Secciones donde curva de masa excede líneas de free haul
- Calcular costo de overhaul:

```
Overhaul: 25,000 m³-estación (2,500 m³-km)
Costo unitario: $18.50 MXN/m³-km
Costo total overhaul: $46,250 MXN
```

**Pregunta clave:** ¿Es más barato ajustar perfil o pagar overhaul?

**B. Zonas de Desbalance Local:**

Identificar áreas donde:
- Corte profundo seguido de relleno profundo (o viceversa)
- Distancia de separación < 500m
- Oportunidad de balancear ajustando rasante

**C. Préstamos vs. Ajustes de Perfil:**

Si déficit neto:
- Costo de préstamo: Volumen × (Costo material + Acarreo desde banco)
- Costo de bajar rasante: Incremento en corte × Costo excavación

Comparar alternativas.

### 2.3 Workflow de Optimización Iterativa

**Ciclo de optimización:**

1. **Diseño inicial** → Compute Materials → Analizar balance
2. **Identificar ajustes** → Modificar perfil
3. **Re-calcular** → Compute Materials → Evaluar mejora
4. **Comparar costos** → Repetir hasta convergencia

**Herramienta en Civil 3D:**
- Utilizar **Profile Grid View** para ajustes rápidos de elevación
- Compute Materials se actualiza dinámicamente (si Automatic Rebuild activo)
- Mass Haul View refleja cambios en tiempo real

## 3. Estrategias de Optimización de Perfil

### 3.1 Ajustes de Elevación de Rasante

**Técnica: Raise/Lower Vertical Profile**

**Caso 1: Eliminar Déficit (Balance negativo)**

Si proyecto requiere 15,000 m³ de préstamo:

1. **Calcular ajuste necesario:**
   - Área promedio de sección: 250 m²
   - Longitud de proyecto: 5,000m
   - Bajada de rasante requerida: 15,000 / (250 × 5,000) ≈ 0.012m (1.2cm)

2. **Aplicar en Civil 3D:**
   - Seleccionar Profile
   - **Profile Properties > Vertical Manipulation**
   - **Raise/Lower Entire Profile:** -0.02m (conservador)

3. **Re-calcular y verificar:**
   - Nuevo balance: -2,300 m³ (casi balanceado)
   - Iterar si necesario

**Caso 2: Eliminar Exceso (Balance positivo)**

Si exceso de 20,000 m³:
- Subir rasante proporcionalmente
- Verificar clearances y pendientes máximas
- Asegurar cumplimiento de estándares de diseño

### 3.2 Optimización Segmentada

Para proyectos largos, optimizar por tramos:

**Estrategia de Segmentación:**

1. **Dividir proyecto en secciones lógicas:**
   - Por topografía (llanura, montaña)
   - Por límites de construcción (fases)
   - Por balance natural (cada 2-3 km)

2. **Optimizar cada sección independientemente:**
   - Sección A (0+000 a 2+500): Balance local
   - Sección B (2+500 a 5+000): Balance local

3. **Permitir transferencias limitadas entre secciones:**
   - Acarreo hasta límite económico
   - Minimizar acarreos entre secciones distantes

**Implementación en Civil 3D:**

1. Crear múltiples **Assembly Regions** si necesario
2. Compute Materials por segmentos
3. Generar Mass Haul Diagrams separados
4. Analizar cada sección + balance global

### 3.3 Optimización de Curvas Verticales

Ajustar geometría de curvas verticales puede mejorar balance:

**A. Alargar/Acortar Curvas:**
- Curvas más largas suavizan transiciones
- Pueden reducir cortes/rellenos máximos
- Verificar K values mínimos según velocidad de diseño

**B. Relocalizar PIVs (Points of Vertical Intersection):**
- Mover PIV hacia áreas que beneficien balance
- Analizar impacto en secciones adyacentes
- Usar **Profile Layout Tools > Move PVI**

**C. Cambiar Tipos de Curva:**
- Parabólica simétrica vs. asimétrica
- Curvas compuestas para transiciones complejas
- Evaluar impacto en comfort de manejo (G forces)

## 4. Bancos de Préstamo y Sitios de Desperdicio

### 4.1 Análisis de Necesidad de Préstamo

**Cuando es necesario préstamo:**
- Balance neto negativo no eliminable por ajustes de perfil
- Restricciones geométricas impiden bajar rasante
- Material de corte no apto para relleno (baja calidad)

**Evaluación de Opciones:**

**Opción A: Préstamo de Bancos Comerciales**
```
Costo por m³:
  Material: $85.00 MXN
  Acarreo (8km promedio): $45.00 MXN
  Total: $130.00 MXN/m³

Volumen necesario: 18,500 m³
Costo total: $2,405,000 MXN
```

**Opción B: Banco Propio en Derecho de Vía**
```
Costo por m³:
  Habilitación de banco: $25.00 MXN
  Excavación: $35.00 MXN
  Acarreo (2km promedio): $18.00 MXN
  Total: $78.00 MXN/m³

Costo total: $1,443,000 MXN
Ahorro: $962,000 MXN (40% menos)
```

### 4.2 Ubicación Óptima de Bancos de Préstamo

**Criterios de ubicación:**

1. **Proximidad a zonas de relleno:**
   - Minimizar distancia de acarreo
   - Idealmente dentro de free haul distance (raro)
   - Cerca de accesos existentes

2. **Calidad de material:**
   - Estudios geotécnicos previos
   - Material apto para compactación
   - Libre de contaminantes

3. **Permisos y disponibilidad:**
   - Dentro de derecho de vía (preferible)
   - Terrenos disponibles para compra/renta
   - Permisos ambientales factibles

**Modelado en Civil 3D:**

1. **Crear Surface de banco de préstamo:**
   - Survey de área de banco
   - Crear TIN surface
   - Definir límites de explotación

2. **Calcular volumen disponible:**
   - **Surface Properties > Analysis > Volumes**
   - Datum = Elevación de fondo de explotación
   - Volumen extraíble = Cut volume

3. **Integrar con Mass Haul:**
   - Marcar estación más cercana al banco en Mass Haul Diagram
   - Calcular acarreo desde banco a rellenos
   - Sumar a costo total de movimiento de tierras

### 4.3 Sitios de Desperdicio (Waste Areas)

**Para excesos de material:**

**Criterios de selección:**

1. **Capacidad adecuada:**
   - Volumen disponible > volumen de desperdicio
   - Considerar factor de swell (material suelto)

2. **Impacto ambiental:**
   - Áreas no protegidas
   - Estabilidad geotécnica del sitio
   - Drenaje adecuado post-disposición

3. **Costo de disposición:**
   - Distancia de acarreo
   - Tarifa de disposición (si sitio comercial)
   - Costos de restauración ambiental

**Modelado de costos:**

```
Exceso: 22,000 m³
Swell factor: 1.25 → 27,500 m³ sueltos

Opción 1: Waste area en km 3+200 (interna)
  Acarreo promedio: 1.8 km
  Costo acarreo: $18.50/m³-km × 1.8 = $33.30/m³
  Restauración: $8.00/m³
  Total: $41.30/m³ × 22,000 = $908,600 MXN

Opción 2: Sitio comercial externo (12km)
  Acarreo: $18.50/m³-km × 12 = $222.00/m³
  Tarifa disposición: $45.00/m³
  Total: $267.00/m³ × 22,000 = $5,874,000 MXN

Decisión: Utilizar waste area interna (ahorro 85%)
```

## 5. Consideraciones Económicas y Ambientales

### 5.1 Análisis Costo-Beneficio de Optimización

**Valor del esfuerzo de optimización:**

**Ejemplo de proyecto real:**

**Diseño Inicial:**
- Balance neto: +35,000 m³ (exceso)
- Overhaul: 185,000 m³-estación (18,500 m³-km)
- Costo estimado movimiento de tierras: $8,750,000 MXN

**Diseño Optimizado (20 horas ingeniería):**
- Balance neto: +2,500 m³
- Overhaul: 62,000 m³-estación (6,200 m³-km)
- Costo estimado: $6,180,000 MXN

**Resultado:**
- Ahorro: $2,570,000 MXN (29% reducción)
- Costo ingeniería: $45,000 MXN
- ROI: 5,711% (retorno de 57:1)

**Lección:** Optimización vale la pena en proyectos medianos y grandes.

### 5.2 Impacto Ambiental

**Factores a considerar:**

**A. Huella de Carbono:**
- Acarreos largos = Mayor consumo combustible
- Emisiones de CO₂ proporcionales a distancia × volumen
- Proyectos sostenibles minimizan acarreos

**Cálculo:**
```
Emisiones = Volumen (m³) × Distancia (km) × Factor de emisión

Factor típico: 0.85 kg CO₂ por m³-km (camión diésel)

Ejemplo:
Overhaul: 15,000 m³-km
Emisiones: 15,000 × 0.85 = 12,750 kg CO₂ (12.75 ton CO₂)

Optimización reduce overhaul a 5,000 m³-km:
Reducción emisiones: 8,500 kg CO₂ (66% menos)
```

**B. Impacto en Terreno:**
- Explotación de bancos = Alteración paisaje
- Sitios de desperdicio = Modificación permanente
- Balance óptimo minimiza estas intervenciones

**C. Manejo de Aguas:**
- Cortes profundos pueden interceptar acuíferos
- Rellenos mal compactados causan erosión
- Diseño optimizado considera hidrología

### 5.3 Regulaciones y Permisos

**Aspectos regulatorios:**

**A. Permisos de Explotación de Bancos:**
- Manifestación de Impacto Ambiental (MIA)
- Cambio de uso de suelo (si aplica)
- Concesión de materiales (si banco federal)

**B. Permisos de Sitios de Desperdicio:**
- Estudio de Impacto Ambiental
- Plan de restauración post-cierre
- Monitoreo de estabilidad

**C. Transporte de Materiales:**
- Rutas autorizadas para camiones
- Restricciones de horario en zonas urbanas
- Manejo de polvo y emisiones

**Integración en optimización:**
- Costos de permisos deben incluirse en análisis económico
- Tiempos de tramitación afectan cronograma
- Restricciones pueden limitar opciones de bancos/desperdicios

## 6. Herramientas Avanzadas en Civil 3D

### 6.1 Grading Optimization Tools

Civil 3D 2026 incluye herramientas de optimización:

**A. Grading Volume Tools:**
```
Ribbon > Grading > Grading Volume Tools
- Calculate cut/fill para grading objects
- Optimize elevaciones de feature lines
- Balancear cut/fill en sitios complejos
```

**Aplicación:**
- Intersecciones complejas
- Rotondas
- Áreas de estacionamiento

**B. Feature Line Elevation Editor:**
- Ajustar elevaciones gráficamente
- Ver impacto en volúmenes en tiempo real
- Iterar rápidamente hacia balance

### 6.2 Parametric Corridor Design

Usar parámetros para optimización sistemática:

**Configurar Parámetros:**
1. Definir perfil como función paramétrica
2. Variables: Offset vertical, pendientes, K values
3. Constraints: Pendientes máx/min, clearances

**Análisis:**
1. Variar parámetros sistemáticamente
2. Compute Materials para cada variante
3. Generar tabla de resultados:

```
Offset Vertical | Cut Volume | Fill Volume | Net Balance | Overhaul Cost
----------------|------------|-------------|-------------|--------------
+0.00m          | 125,300    | 108,200     | +17,100     | $315,500
-0.05m          | 131,850    | 116,900     | +14,950     | $285,000
-0.10m          | 138,200    | 125,350     | +12,850     | $245,000
-0.15m          | 144,750    | 133,950     | +10,800     | $198,000
-0.20m          | 151,100    | 142,300     | +8,800      | $165,000
```

4. Seleccionar óptimo: -0.20m (mínimo costo overhaul)

### 6.3 Scripting y Automatización

Para proyectos grandes, automatizar optimización:

**Civil 3D API (C# o Python):**

```python
# Pseudocódigo de optimización automatizada
for offset in range(-50, 50, 5):  # -0.5m a +0.5m cada 5cm
    profile.raise_lower(offset/1000)  # Ajustar perfil
    corridor.rebuild()  # Reconstruir corredor
    quantities = corridor.compute_materials()

    cost = calculate_total_cost(quantities)
    results.append({'offset': offset, 'cost': cost})

optimal = min(results, key=lambda x: x['cost'])
print(f"Optimal offset: {optimal['offset']}mm")
```

**Beneficios:**
- Explorar cientos de variantes automáticamente
- Encontrar óptimo global (no solo local)
- Documentar proceso de optimización

## 7. Casos de Estudio

### 7.1 Carretera en Montaña

**Proyecto:** 12 km en terreno montañoso

**Problema inicial:**
- Balance neto: -45,000 m³ (déficit severo)
- Overhaul: 385,000 m³-estación
- Costo inicial estimado: $22,500,000 MXN

**Estrategia de optimización:**
1. Identificar bancos de préstamo en km 3 y km 9
2. Ajustar perfil en secciones de relleno profundo (-0.30m promedio)
3. Re-balancear acarreos hacia bancos cercanos

**Resultado:**
- Balance neto: -12,000 m³ (78% mejora)
- Overhaul: 125,000 m³-estación (68% reducción)
- Costo optimizado: $14,850,000 MXN
- **Ahorro: $7,650,000 MXN (34%)**

### 7.2 Autopista Urbana

**Proyecto:** 8 km en zona urbana

**Restricciones especiales:**
- No bancos de préstamo disponibles (compra material comercial)
- Desperdicios a 25km (sitio autorizado más cercano)
- Acarreos nocturnos (sobrecosto 35%)

**Optimización intensiva:**
1. Minimizar volumen total (subir rasante +0.15m)
2. Balance casi perfecto (±500 m³)
3. Eliminar prácticamente todo overhaul

**Resultado:**
- Material de préstamo: 8,500 m³ vs. 32,000 inicial (73% menos)
- Sin desperdicios (vs. 15,000 m³ inicial)
- Overhaul nocturno evitado
- **Ahorro: $4,250,000 MXN**

## Conclusión

La optimización de earthwork es un proceso iterativo que combina análisis técnico, consideraciones económicas y restricciones ambientales. Civil 3D 2026 proporciona herramientas poderosas para evaluar alternativas y encontrar soluciones óptimas que minimizan costos de construcción mientras cumplen todos los estándares de diseño.

El dominio de técnicas de optimización, desde ajustes simples de perfil hasta análisis complejos de bancos de préstamo, es una habilidad de alto valor que puede generar ahorros significativos en proyectos de infraestructura. La inversión en tiempo de ingeniería para optimización se recupera múltiples veces en reducción de costos de construcción.

---

**Tiempo estimado de estudio:** 90 minutos
**Práctica recomendada:** 4-6 horas con proyectos de optimización iterativa

**Siguiente:** [Lección 5 - Export to Estimating Software](leccion-5.md)
