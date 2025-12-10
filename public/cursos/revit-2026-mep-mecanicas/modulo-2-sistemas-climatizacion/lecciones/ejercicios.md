# Ejercicios Prácticos - Módulo 2: Sistemas de Climatización

## Ejercicio 1: Diseño de Red de Accesorios de Ductos

### Descripción
En base a un sistema HVAC con caudal principal de 2000 L/s, diseñar la red de accesorios necesarios y calcular las pérdidas de presión totales.

### Datos de Proyecto
```
Caudal UMA: 2000 L/s
Presión disponible ventilador: 600 Pa
Ducto principal: 800 × 600 mm rectangular, longitud 50 m
Ramificaciones: 3 ramales secundarios (500 L/s cada uno)
Difusores: 12 unidades circulares de 150 mm
Altura edificio: 5 pisos
Configuración: Sistema VAV con presión constante
```

### Tareas
1. **Especificar accesorios:**
   - Codos necesarios (cantidad, tipo, ángulo)
   - Bifurcaciones (simétrica o asimétrica)
   - Reducciones/expansiones (cuantificar cambios sección)
   - Registros de acceso (ubicación)
   - Silenciadores si aplica

2. **Calcular pérdidas presión:**
   - Pérdida ducto principal (Darcy-Weisbach)
   - Pérdida accesorios (método coeficiente K)
   - Pérdida compuerta modulación
   - Pérdida difusores
   - **Pérdida TOTAL ≤ 600 Pa?**

3. **Propuesta optimización:**
   - Si suma pérdidas > 600 Pa, redimensionar ductos
   - Cambiar tipo codos (radio) si necesario
   - Ajustar velocidades

4. **Documentación:**
   - Tabla de accesorios con K, ΔP por elemento
   - Diagrama esquemático de red
   - Especificación final de cada accesorio

### Criterios de Aprobación
- Sumatoria pérdidas dentro presupuesto 600 Pa
- Velocidades dentro rango recomendado (3-6 m/s)
- Mínimo 2 registros de acceso documentados
- Cálculos verificables paso a paso

---

## Ejercicio 2: Selección y Especificación UMA

### Descripción
Seleccionar unidad manejadora de aire apropiada para un edificio administrativo de 5 pisos.

### Datos Proyecto
```
Área cada piso: 1500 m²
Número pisos climatizados: 5
Total edificio: 7500 m²
Ocupación estimada: 500 personas
Caudal aire exterior (código): 7 L/s/persona
Ubicación: Clima templado
Horario operación: 7 AM - 7 PM (12 horas)
Preocupación ambiental: Máxima eficiencia energética
```

### Tareas
1. **Cálculo de caudal:**
   - Air exterior requerido
   - Caudal por compensación
   - Caudal aire recirculado
   - Caudal TOTAL UMA

2. **Cargas térmicas:**
   - Carga enfriamiento verano (estimación por m²)
   - Carga calefacción invierno
   - ΔT serpentín enfriamiento
   - ΔT serpentín calefacción
   - Capacidades requeridas (kW)

3. **Selección de UMA:**
   - Búsqueda catálogo técnico (simulado o real)
   - Modelo específico seleccionado
   - Caudal nominal
   - Capacidades térmica
   - Dimensiones
   - Ruido NC nivel

4. **Selección ventilador:**
   - Presión total disponible requerida
   - Potencia ventilador
   - Motor eléctrico seleccionado
   - VFD sí/no

5. **Especificación filtro:**
   - Eficiencia MERV
   - Caída presión inicial
   - Ciclo reemplazo

6. **Documentación final:**
   - Ficha técnica resumida UMA
   - Parámetros principales
   - Plano ubicación en edificio
   - Conexiones agua fría/caliente
   - Conexión drenaje

### Criterios de Aprobación
- Caudal UMA ≥ máximo de (aire exterior, aire compensación)
- Capacidad térmica suficiente para cargas
- Ruido dentro especificación (<40 NC típico)
- Presión ventilador disponible > suma pérdidas
- Especificación completa y profesional

---

## Ejercicio 3: Diseño Sistema VAV Multi-Zona

### Descripción
Diseñar sistema VAV para piso administrativo con múltiples espacios y diferentes características de ganancia térmica.

### Caso de Estudio: Piso Administrativo
```
Área total: 1500 m²
Composición:
  - Zona Norte (fachada vidrio): 500 m², 50 personas
  - Zona Sur (fachada vidrio): 500 m², 50 personas
  - Zona Centro (interior, sin ganancia solar): 300 m², 30 personas
  - Servicios (baños, copa): 200 m² (extracción continua)

Cargas estimadas:
  - Zona Norte: Máximo 150 kW enfriamiento
  - Zona Sur: Máximo 120 kW enfriamiento
  - Zona Centro: Máximo 30 kW enfriamiento
  - Servicios: Extracción 500 L/s continuo

Requisitos:
  - Control independiente temperatura por zona
  - Confort acústico NC 35
  - Eficiencia energética prioritaria
```

### Tareas
1. **Cálculo de caudales:**
   - Aire exterior por zona (ocupantes + área)
   - Aire enfriamiento por zona
   - Caudal nominal VAV cada zona
   - Caudal mínimo (35% nominal)
   - Especificación tamaño estándar

2. **Selección cajas VAV:**
   - Tipo: Simple, con reheat, u otro
   - Justificación según clima
   - Capacidad recalentamiento (si aplica)
   - Ubicación en plano

3. **Distribución difusores:**
   - Número difusores por zona
   - Tipo/tamaño difusores
   - Ubicación en plano
   - Verificar caudal total

4. **Balance de presión:**
   - Presión estática conducto principal
   - Presión en cajas VAV
   - Presión en difusores
   - Consideración silenciadores

5. **Control y sensors:**
   - Ubicación termostatos
   - Sensor presión estática
   - Lógica control (en palabras)
   - Conexión a BMS

6. **Documentación:**
   - Plano de piso con VAVs, difusores, rejillas
   - Tabla de cajas VAV (caudal, capacidad, ubicación)
   - Tabla de difusores
   - Esquema de control

### Criterios de Aprobación
- Cajas VAV asignadas correctamente por zona
- Caudales suministro = demanda
- Caudales retorno ≥ suministro
- Presión constante mantenida (200 Pa típico)
- Lógica de control clara y realista
- Dibujos profesionales en Revit o AutoCAD

---

## Ejercicio 4: Cálculo Presión Dinámica y Accesorios

### Descripción
Calcular presión dinámica en diferentes puntos de un sistema HVAC y dimensionar accesorios según resultados.

### Caso Base
```
Ducto 1: 600 × 400 mm, Caudal 1200 L/s
- Codo 90° (radio 1.0 × mayor dimensión)
- Bifurcación simétrica (divide en 2 × 600 L/s)
- Reducciones a secciones menores
- Difusores 6 unidades de 200 L/s

Ducto 2: 400 × 300 mm, Caudal 600 L/s
- Conecta a caja VAV
```

### Tareas
1. **Calcular presión dinámica:**
   - En cada sección de ducto
   - Fórmula: PD = (ρ × V²) / 2
   - Verificar velocidades recomendadas

2. **Calcular pérdida accesorios:**
   - Codo 90°: K = ?
   - Bifurcación: K = ?
   - Reducciones: K = ?
   - Difusores: K = ?

3. **Seleccionar accesorios:**
   - Si codo K = 0.40, ¿qué presión pierde en sección 1?
   - Radio óptimo si presupuesto solo permite 50 Pa?
   - Cambio a radio mayor: ¿cuánto ahorra?

4. **Optimización:**
   - Propuesta rediseño minimizando pérdidas
   - Justificación decisiones
   - Ahorro energético estimado ventilador

5. **Documentación:**
   - Tabla de cálculos presión dinámmica por sección
   - Tabla de pérdidas accesorios
   - Gráfico mostrando presión decreciente a lo largo sistema

### Criterios de Aprobación
- Cálculos paso a paso verificables
- Fórmulas aplicadas correctamente
- Velocidades dentro recomendaciones
- Propuesta optimización técnicamente válida

---

## Ejercicio 5: Modelado Completo en Revit MEP

### Descripción
Crear modelo BIM completo de sistema HVAC pequeño incluyendo ductos, equipos, conexiones agua, y System Zones.

### Alcance
```
Edificio de 2 pisos, 1500 m² total
Sistema VAV simple con:
- 1 UMA central
- 2 Zonas (Piso 1, Piso 2)
- 4 Cajas VAV (2 por piso)
- 12 Difusores y 8 rejillas retorno
- Circuito agua fría, agua caliente
- Drenaje condensados
```

### Tareas en Revit MEP 2026
1. **Modelado de espacios (Rooms):**
   - Crear niveles para 2 pisos
   - Definir espacios/zonas
   - Asignar ocupación, uso

2. **Modelado de ductos:**
   - Ducto principal UMA a bifurcación
   - Ramales secundarios a VAVs
   - Dimensionamiento correcto

3. **Colocación de componentes:**
   - UMA principal
   - Cajas VAV en ubicación realista
   - Difusores distribuidos
   - Rejillas retorno

4. **Sistema Zones:**
   - Crear 2 zonas (Piso 1, Piso 2)
   - Asignar espacios
   - Asignar VAVs, difusores, rejillas
   - Verificar sumas de caudales

5. **Circuitos hidráulicos:**
   - Circuito agua fría (chiller → UMA → retorno)
   - Circuito agua caliente (caldera → UMA/VAV → retorno)
   - Tuberías drenaje condensados

6. **Generación de reportes:**
   - Sistema Zone report (caudales, cargas)
   - Equipment schedule (UMA, VAVs)
   - Conectivity analysis (verificar todas conexiones)
   - Planos con secciones

### Entregables
- Archivo Revit MEP completo
- Plano planta piso 1 y 2 (ductos, equipos)
- Plano isométrico sistema
- Reporte System Zones
- Reporte equipos
- PDF con documentación

### Criterios de Aprobación
- Modelo completo y sin errores
- Todas conexiones realizadas
- Caudales balanceados por zona
- Reportes generados correctamente
- Dibujos profesionales legibles
- Archivo bien organizado (niveles, vistas, tablas)

---

## Ejercicio 6: Integración de Conexiones Aire-Agua-Control

### Descripción
Diseñar la integración completa de un sistema HVAC mostrando cómo aire, agua y control interactúan en operación real.

### Escenario Operacional
```
Mañana soleada, invierno:
- Temperatura exterior: 5°C
- Temperatura interior piso 1 norte: 26°C (sobrecalentamiento por radiación)
- Temperatura interior piso 2 centro: 18°C (subfrío por zona sin calefacción)
- Ocupación: 80% edificio
- Hora: 10:00 AM
```

### Tareas
1. **Análisis de control:**
   - ¿Qué detectan sensores en esta situación?
   - ¿Qué acciones toma BMS para cada zona?
   - ¿Orden de actuaciones?

2. **Flujo de aire:**
   - Piso 1 norte (demanda enfriamiento): Caudal muda a X
   - Piso 2 centro (demanda calefacción): Caudal muda a Y
   - Presión ducto: Aumenta o disminuye?
   - VFD ventilador: Acelera o desacelera?

3. **Flujo de agua:**
   - Válvula agua fría: ¿Se abre, cierra, mantiene?
   - Válvula agua caliente VAV piso 2: ¿Se abre para reheat?
   - Caudal total circuitos
   - Bomba circulación: Presión necesaria

4. **Drenaje y condensado:**
   - ¿Hay condensación en UMA? ¿Cuánta (L/hora)?
   - Flujo drenaje: Hacia donde
   - ¿Se genera en VAV piso 1 norte también?

5. **Documentación:**
   - Tabla comparativa: Setpoint vs actual, acción, resultado
   - Esquema mostrando todos flujos (aire, agua, condensado) en esta operación
   - Diagrama lógica de control para este escenario
   - Curva de operación de ventilador (presión vs caudal)

6. **Comisionamiento:**
   - Puntos a verificar en comisionamiento
   - Mediciones (temperatura, presión, caudal) esperadas
   - Ajustes necesarios si mediciones no coinciden

### Criterios de Aprobación
- Análisis lógico y coherente
- Todas variables consideradas
- Interacciones aire-agua-control claras
- Documentación profesional
- Realizabilidad práctica demostrada

---

## Rúbrica de Evaluación

### Criterios Transversales
```
ASPECTO              EXCELENTE (5)          BUENO (4)           ACEPTABLE (3)
────────────────────────────────────────────────────────────────────────
Cálculos            Todos correctos,        Mayoría correctos,   Algunos errores,
                    paso a paso claro       con claridad         cálculos confusos

Especificaciones    Completas,              Completas pero       Incompletas en
                    profesionales,          algunos detalles     detalles
                    industria-estándar

Documentación       Excelentes dibujos,     Buenos dibujos,      Dibujos básicos
                    tablas precisas,        tablas adecuadas     pero funcionales
                    leyendas claras

Justificación       Explica por qué         Justifica             Menciona algunos
                    cada decisión,          decisiones            criterios
                    referencias

Coordinación        Todos sistemas          Sistemas             Sistemas parcialmente
                    integrados              coordinados           coordinados
```

---

## Soluciones Referencia (Disponibles para Docentes)

1. **Ejercicio 1:** Archivo Excel con cálculos, coeficientes K tabla
2. **Ejercicio 2:** Catálogo UMA simulado, especificación modelo actual
3. **Ejercicio 3:** Plano solución Revit MEP, reportes
4. **Ejercicio 4:** Cálculos paso a paso, gráficos presión
5. **Ejercicio 5:** Archivo Revit MEP completo, vistas, reportes
6. **Ejercicio 6:** Documento análisis control, diagramas integración

---

**Tiempo estimado total ejercicios:** 40-60 horas
**Formato entrega:** Digital (PDF, Revit, Excel según ejercicio)
**Evaluación:** Según rúbrica arriba
**Retroalimentación:** Docente proporciona comentarios en 1-2 semanas
