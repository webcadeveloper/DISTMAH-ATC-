# Lección 2: Mass Haul Diagrams

## Introducción

El Mass Haul Diagram (Diagrama de Masa) es una herramienta gráfica fundamental para la planificación y optimización del movimiento de tierras en proyectos de infraestructura lineal. Este diagrama permite visualizar el balance entre corte y relleno, identificar distancias económicas de acarreo y determinar la necesidad de préstamos o desperdicios de material.

Desarrollado originalmente en el siglo XIX para ferrocarriles, el diagrama de masa sigue siendo la herramienta estándar en la industria para análisis económico de movimiento de tierras. Civil 3D 2026 automatiza su generación y proporciona herramientas interactivas de análisis, facilitando decisiones informadas sobre estrategias de construcción.

## Objetivos de Aprendizaje

- Comprender los fundamentos teóricos del diagrama de masa
- Generar Mass Haul Views en Civil 3D 2026
- Interpretar ordenadas de masa y pendientes del diagrama
- Analizar free haul distance y overhaul limits
- Determinar balance points y estrategias de acarreo óptimas

## 1. Fundamentos del Diagrama de Masa

### 1.1 Conceptos Básicos

El diagrama de masa es un gráfico que representa la acumulación algebraica de volúmenes de corte y relleno a lo largo de un alineamiento. Sus componentes principales son:

**Eje Horizontal (X):**
- Estacionamiento del proyecto
- Escala horizontal = escala del perfil longitudinal

**Eje Vertical (Y):**
- Ordenada de masa (volumen acumulado)
- Unidades: m³, yd³, m³ compactados
- Escala vertical exagerada para claridad

**Curva de Masa:**
- Línea continua que representa volumen acumulado
- Pendiente ascendente = Zona de corte (exceso de material)
- Pendiente descendente = Zona de relleno (déficit de material)
- Puntos de inflexión = Transición corte/relleno

### 1.2 Interpretación Gráfica

**A. Segmentos Ascendentes (Corte):**
- La curva sube cuando hay excavación
- Pendiente = tasa de volumen de corte
- Material disponible para acarreo hacia adelante

**B. Segmentos Descendentes (Relleno):**
- La curva baja cuando hay relleno requerido
- Pendiente = tasa de volumen de relleno
- Demanda de material desde atrás o préstamo

**C. Puntos Máximos y Mínimos:**
- Máximos locales = Fin de zona de corte
- Mínimos locales = Fin de zona de relleno
- Indican cambios en dirección de acarreo

**D. Línea Balanceadora (Balance Line):**
- Línea horizontal que cruza la curva de masa
- Intersecciones delimitan secciones balanceadas
- Área bajo línea = Volumen a acarrear dentro de límite

### 1.3 Principios de Balance

El diagrama permite determinar:

1. **Volumen entre dos puntos:**
   - Diferencia vertical entre ordenadas de masa
   - Distancia horizontal = longitud de acarreo

2. **Balance en sección:**
   - Línea horizontal entre dos intersecciones de curva
   - Área encerrada = trabajo de acarreo (volumen × distancia)

3. **Dirección de acarreo:**
   - Si curva sube entonces baja: Acarreo hacia adelante
   - Si curva baja entonces sube: Acarreo hacia atrás

## 2. Generación de Mass Haul View en Civil 3D

### 2.1 Prerequisitos

Antes de crear el diagrama de masa:

1. **Corredor completo:** Con superficies EG y datum correctas
2. **Compute Materials:** Ejecutado con QTO Criteria apropiado
3. **Alignment y Profile:** Referencias válidas
4. **Material List:** Con factores de conversión aplicados

### 2.2 Proceso de Creación

**Paso 1: Acceder al comando**
```
Ribbon > Analyze Tab > Volumes and Materials Panel > Mass Haul
```

**Paso 2: Mass Haul View Wizard**

1. **Create Mass Haul View Dialog:**
   - **Select Alignment:** Elegir alineamiento del proyecto
   - **Select Material List:** Especificar lista de materiales calculada
   - **Station Range:** Definir inicio y fin (usualmente todo el proyecto)

2. **View Configuration:**
   - **View Name:** "MH-Highway-Mainline-km0-5"
   - **Style:** Standard Mass Haul (personalizable)
   - **Insertion Point:** Click para ubicar en layout

**Paso 3: Configurar Mass Haul Line**

1. En el wizard, pestaña **Mass Haul Lines:**
   - **Add Line** para cada material a analizar
   - **Material:** Seleccionar (ej: "Total Earthwork")
   - **Style:** Line style para visualización

2. **Cumulative Volumes:**
   - Opción: **Use Existing Ground** como datum
   - Aplicar factores de shrinkage/swell si no están en QTO

**Paso 4: Balance Lines y Free Haul**

1. Pestaña **Balance Lines:**
   - **Add Balance Line**
   - **Free Haul Distance:** Ingresar valor contractual (ej: 500m)
   - **Style:** Línea discontinua diferenciada

2. **Purpose:**
   - Visualizar límites económicos de acarreo
   - Identificar zonas de overhaul automáticamente

### 2.3 Mass Haul View Styles

Personalizar estilos para presentación profesional:

1. **Toolspace > Settings > Alignment > Mass Haul View Styles**
2. Nuevo estilo: "Professional-MassHaul"
3. Configurar **Graph Settings:**
   - **Vertical Scale:** Auto o fijo (ej: 1:500)
   - **Grid:** Activar cuadrícula cada 100m horizontal, cada 5000m³ vertical
   - **Axis Labels:** Formatear con unidades

4. **Display Properties:**
   - **Mass Haul Line:** Color azul, grosor 0.5mm
   - **Balance Lines:** Color rojo, línea discontinua
   - **Grid:** Gris claro, línea fina
   - **Background:** Transparente o blanco

## 3. Análisis de Free Haul Distance

### 3.1 Concepto de Free Haul

**Definición:**
El free haul distance es la distancia máxima que el material excavado puede ser acarreado sin costo adicional según las especificaciones del contrato.

**Típico en contratos:**
- **EE.UU.:** 500 ft (152m) a 1000 ft (305m)
- **México:** 20m a 100m según normativa SCT
- **Proyectos privados:** Variable según negociación

**Implicaciones:**
- Dentro de free haul: Incluido en precio unitario de excavación
- Más allá de free haul: Se paga "overhaul" por m³-estación o m³-km

### 3.2 Configuración en Civil 3D

Para analizar free haul distance:

1. **En Mass Haul View creado, editar propiedades:**
   - Click derecho > **Mass Haul View Properties**
   - Pestaña **Balance Lines**

2. **Configurar Free Haul Line:**
   - **Type:** Free Haul
   - **Distance:** 500m (o según especificación)
   - **Display:** Línea horizontal discontinua verde

3. Civil 3D dibuja línea paralela al eje X a distancia = free haul
4. Intersecciones con curva de masa indican:
   - Inicio de zona de overhaul
   - Volumen que requiere pago adicional

### 3.3 Interpretación de Overhaul

**Zona de Overhaul:**
- Área entre curva de masa y balance line que excede free haul
- Representa trabajo adicional de acarreo

**Cálculo:**
```
Overhaul = Volumen × (Distancia Real - Free Haul Distance)
Unidades: m³-estación, yd³-ft, etc.
```

**Ejemplo:**
- Volumen: 10,000 m³
- Distancia real: 1,200m
- Free haul: 500m
- Overhaul: 10,000 × (1,200 - 500) = 7,000,000 m³-m = 7,000 m³-km

**Costo:**
- Si tarifa overhaul = $2.50 USD por m³-km
- Costo overhaul = 7,000 × $2.50 = $17,500 USD

## 4. Balance Points y Estrategias

### 4.1 Identificación de Balance Points

**Balance Point:**
Punto donde la curva de masa cruza una balance line, indicando que el volumen acumulado se equilibra en ese tramo.

**Método en Civil 3D:**

1. **Dibujar Balance Lines:**
   - Click derecho en Mass Haul View > **Add Balance Line**
   - **Manual:** Click inicio y fin en curva de masa
   - **Automatic:** Civil 3D calcula óptimos para minimizar overhaul

2. **Visualizar Intersecciones:**
   - Civil 3D marca automáticamente con símbolos
   - Cada par de intersecciones define una sección balanceada

3. **Extraer Datos:**
   - Click derecho en balance line > **Properties**
   - Tabla muestra:
     - Estación inicio y fin
     - Volumen balanceado
     - Distancia promedio de acarreo

### 4.2 Estrategias de Balance

**A. Balance Óptimo (Minimizar Overhaul):**
- Objetivo: Reducir distancias de acarreo
- Método: Ajustar balance lines para maximizar zonas dentro de free haul
- Herramienta: **Optimize Balance Lines** en Civil 3D

**B. Balance Longitudinal:**
- Acarreo mayormente hacia adelante (downhill)
- Preferible por facilidad constructiva
- Configurar: Balance lines con sesgo hacia adelante

**C. Balance con Préstamos:**
- Cuando déficit neto requiere material importado
- Marcar estaciones de préstamo en diagrama
- Volumen de préstamo = ordenada mínima global

**D. Balance con Desperdicios:**
- Cuando exceso neto requiere sitio de desperdicio
- Marcar estaciones de desperdicio
- Volumen de waste = ordenada máxima global

### 4.3 Optimización Asistida

Civil 3D 2026 incluye herramienta de optimización:

1. **Ribbon > Mass Haul View Contextual Tab**
2. Click **Optimize Balance**
3. Configurar parámetros:
   - **Free Haul Distance:** 500m
   - **Overhaul Limit:** 3000m (distancia máxima económica)
   - **Objective:** Minimize Total Overhaul

4. Civil 3D calcula:
   - Balance lines óptimos
   - Estaciones de préstamo/desperdicio recomendadas
   - Overhaul total minimizado

5. Reporta:
   - Total overhaul (m³-km)
   - Volumen de préstamo necesario
   - Volumen de desperdicio

## 5. Análisis Avanzado

### 5.1 Mass Haul con Múltiples Materiales

Para proyectos con materiales diferenciados:

1. **Crear Mass Haul Lines separadas:**
   - Línea 1: Material reutilizable (topsoil, material común)
   - Línea 2: Material no reutilizable (roca, inadecuado)

2. **Análisis independiente:**
   - Cada material tiene su curva de masa
   - Balance lines específicas por material
   - Optimización individual

3. **Ejemplo práctico:**
   - Topsoil: Free haul 200m, reutilizar al 100%
   - Material común: Free haul 500m, para rellenos estructurales
   - Roca: Todo a desperdicio, no acarreo interno

### 5.2 Consideraciones de Shrinkage/Swell

El diagrama de masa debe reflejar volúmenes en estado correcto:

**Opción A: Volúmenes Bank (In-Situ)**
- Curva de masa representa volumen natural
- Más común en prácticas estadounidenses
- Factores aplicados después para transporte

**Opción B: Volúmenes Compactados**
- Curva ajustada por shrinkage
- Refleja volumen final en obra
- Preferido en normativas mexicanas (SCT)

**Configuración en Civil 3D:**
- En QTO Criteria, especificar si factores ya están aplicados
- Notas en diagrama indicando base de cálculo
- Consistencia crítica para evitar errores de estimación

### 5.3 Integración con Secciones Transversales

Para validar el diagrama de masa:

1. **Identificar estación de balance point:** ej: 2+350
2. **Abrir Sample Line en esa estación**
3. **Verificar:** Debe mostrar transición corte/relleno
4. **Confirmar volúmenes:**
   - Área de corte acumulada hasta ese punto
   - Debe coincidir con ordenada de masa

**Discrepancias comunes:**
- Errores en Surface references
- QTO Criteria mal configurado
- Factores de conversión inconsistentes

## 6. Reportes y Presentación

### 6.1 Tablas de Balance

Generar tabla complementaria al diagrama:

1. **Add Table > Mass Haul Table**
2. Configurar columnas:
   - Station Begin / End
   - Balance Volume
   - Haul Direction (Forward/Backward)
   - Average Haul Distance
   - Overhaul (m³-km)

3. Insertar junto al diagrama para referencia

### 6.2 Anotaciones Profesionales

Elementos a incluir en layout de diagrama de masa:

- **Título:** "DIAGRAMA DE MASAS - [Nombre Proyecto]"
- **Escalas:** Horizontal y vertical claramente indicadas
- **Leyenda:**
  - Curva de masa (descripción)
  - Balance lines y free haul
  - Símbolos de préstamo/desperdicio
- **Notas:**
  - Factores de conversión aplicados
  - Base de volúmenes (bank, loose, compacted)
  - Fecha de cálculo y revisión
- **Datos clave:**
  - Volumen total de corte
  - Volumen total de relleno
  - Balance neto
  - Préstamo/desperdicio requerido
  - Total overhaul

### 6.3 Export para Análisis Externo

Exportar datos del diagrama:

1. **Click derecho en Mass Haul View > Export Data**
2. Formato CSV con columnas:
   - Station, Cumulative Cut, Cumulative Fill, Mass Ordinate
3. Importar a Excel para:
   - Gráficos personalizados
   - Análisis "what-if" de diferentes estrategias
   - Integración con modelos de costos

## 7. Casos de Aplicación

### 7.1 Carretera en Terreno Montañoso

**Características:**
- Cortes profundos en laderas
- Rellenos en cruces de cañadas
- Distancias largas entre corte y relleno

**Estrategia:**
- Identificar secciones con overhaul excesivo
- Evaluar préstamos locales vs. acarreo largo
- Considerar bancos de préstamo cercanos a rellenos grandes

**Análisis con Mass Haul:**
- Diagrama mostrará grandes fluctuaciones
- Balance lines revelarán necesidad de múltiples préstamos
- Optimización puede sugerir ajustes de perfil

### 7.2 Autopista en Llanura

**Características:**
- Terreno relativamente plano
- Cortes y rellenos moderados
- Oportunidad de balance cercano

**Estrategia:**
- Maximizar balance longitudinal
- Minimizar préstamos y desperdicios
- Aprovechar free haul distance completo

**Análisis con Mass Haul:**
- Curva de masa con ondulaciones moderadas
- Múltiples secciones balanceadas posibles
- Ajustes menores de perfil pueden eliminar préstamos

### 7.3 Proyecto Urbano

**Características:**
- Restricciones de acarreo por tráfico
- Limitaciones de sitios de desperdicio
- Costos de overhaul muy altos

**Estrategia:**
- Minimizar volúmenes totales (ajustar rasante)
- Identificar reutilización en sitio
- Coordinar con otros proyectos cercanos (intercambio de materiales)

**Análisis con Mass Haul:**
- Free haul distance reducido (ej: 100m)
- Overhaul puede ser prohibitivo
- Diagrama justifica préstamos de canteras comerciales

## Conclusión

El Mass Haul Diagram es una herramienta indispensable para la planificación económica de movimiento de tierras. Civil 3D 2026 facilita su generación y análisis, permitiendo a ingenieros tomar decisiones informadas sobre estrategias de balance, identificar necesidades de préstamo o desperdicio, y optimizar costos de construcción.

La correcta interpretación del diagrama de masa, combinada con análisis de free haul distance y optimización de balance points, resulta en estimaciones precisas de costos de acarreo y estrategias constructivas eficientes.

---

**Tiempo estimado de estudio:** 75 minutos
**Práctica recomendada:** 3-4 horas con proyectos de diferentes tipologías

**Siguiente:** [Lección 3 - Pay Items y Cost Estimation](leccion-3.md)
