# Lección 2: Smart Blocks - Search and Convert

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Utilizar el comando SMARTBLOCKSSEARCH para búsqueda inteligente
2. Buscar objetos similares a uno seleccionado en el dibujo
3. Convertir objetos encontrados a bloques nuevos o existentes
4. Aprovechar sugerencias de IA de bibliotecas de bloques
5. Realizar conversión en lote de objetos similares
6. Comprender criterios de similitud de objetos
7. Optimizar workflows de búsqueda y conversión

**Duración estimada:** 50-60 minutos

---

## 1. Introducción a SMARTBLOCKSSEARCH

### Diferencia con SMARTBLOCKSDETECT

Mientras que **SMARTBLOCKSDETECT** busca automáticamente *todos* los objetos repetitivos en un dibujo, **SMARTBLOCKSSEARCH** te permite:

- ✅ **Buscar objetos similares a uno específico** que tú seleccionas
- ✅ **Convertir a bloques existentes** de tu biblioteca
- ✅ **Recibir sugerencias de IA** de bloques relevantes
- ✅ **Control preciso** sobre qué buscar y convertir
- ✅ **Workflow dirigido por el usuario** en lugar de automático

![Comparación SMARTBLOCKSDETECT vs SMARTBLOCKSSEARCH](./imagenes/smartblockssearch-vs-detect.png)

### Casos de Uso Principales

**1. Estandarización Específica**
- Tienes un objeto bien diseñado
- Quieres encontrar versiones similares pero inconsistentes
- Convertir todas las instancias al estándar

**2. Integración con Bibliotecas**
- Objetos en el dibujo que ya existen en tu biblioteca
- Reemplazar con versiones de la biblioteca
- Mantener consistencia con estándares corporativos

**3. Búsqueda y Reemplazo Inteligente**
- Encontrar objetos que "se parecen" a uno de referencia
- No necesariamente idénticos
- IA determina similitud contextual

![Casos de uso de SMARTBLOCKSSEARCH](./imagenes/smartblockssearch-casos-uso.png)

---

## 2. El Comando SMARTBLOCKSSEARCH

### Acceso al Comando

**Métodos de activación:**

1. **Línea de comandos:**
   ```
   SMARTBLOCKSSEARCH
   ```

2. **Ribbon:**
   - Pestaña **Insert** (Insertar)
   - Grupo **Block Definition**
   - Botón **Smart Blocks Search**

3. **Menú contextual:**
   - Seleccionar un objeto
   - Clic derecho
   - **Smart Blocks** > **Search and Convert**

![Acceso a SMARTBLOCKSSEARCH desde Ribbon](./imagenes/smartblockssearch-ribbon.png)

### Flujo del Comando

```
Command: SMARTBLOCKSSEARCH
Select reference object: [Seleccionar objeto]
Searching for similar objects...
Found 24 similar objects
[Panel de resultados se abre]
```

---

## 3. Selección del Objeto de Referencia

### Elegir el Objeto Correcto

El **objeto de referencia** es el modelo que AutoCAD usará para buscar objetos similares. Elegir correctamente es crucial:

**Características del objeto ideal:**
- ✅ Representa el estándar deseado
- ✅ Dimensiones correctas
- ✅ Propiedades apropiadas (capa, color, etc.)
- ✅ Geometría completa y precisa

![Selección de objeto de referencia](./imagenes/smartblockssearch-objeto-referencia.png)

### Tipos de Objetos Soportados

| Tipo de Objeto | Soportado | Notas |
|----------------|-----------|-------|
| Líneas | ✅ Sí | Individual o en grupo |
| Polilíneas | ✅ Sí | Forma completa analizada |
| Círculos | ✅ Sí | Radio y posición relativa |
| Arcos | ✅ Sí | Ángulo y radio considerados |
| Texto | ✅ Sí | Contenido puede variar |
| Splines | ✅ Sí | Forma general comparada |
| Bloques | ✅ Sí | Busca instancias similares |
| 3D Sólidos | ⚠️ Limitado | Solo formas básicas |
| Referencias Externas | ❌ No | No soportadas |

### Selección Múltiple

Puedes seleccionar **múltiples objetos** como referencia si forman un conjunto:

```
Command: SMARTBLOCKSSEARCH
Select reference object(s): [Seleccionar primer objeto]
Select reference object(s): [Seleccionar segundo objeto]
Select reference object(s): [Seleccionar tercer objeto]
Select reference object(s): ENTER
Analyzing selection as a group...
Searching for similar groups...
```

**Ejemplo:** Seleccionar todos los objetos que forman una puerta (marco + hoja + manija) para buscar puertas similares completas.

![Selección múltiple como grupo de referencia](./imagenes/smartblockssearch-seleccion-multiple.png)

---

## 4. Panel de Resultados de Búsqueda

### Interfaz del Panel

El panel lateral muestra:

**1. Reference Object Preview (Vista Previa de Referencia)**
- Miniatura del objeto seleccionado
- Dimensiones principales
- Propiedades clave

**2. Search Results (Resultados de Búsqueda)**
- Lista de objetos similares encontrados
- Grado de similitud (porcentaje)
- Ubicación en el dibujo

**3. Conversion Options (Opciones de Conversión)**
- Convertir a bloque nuevo
- Convertir a bloque existente
- Sugerencias de IA de bibliotecas

![Panel de resultados de SMARTBLOCKSSEARCH](./imagenes/smartblockssearch-panel-resultados.png)

### Interpretación de Resultados

Cada objeto encontrado muestra:

**Similarity Score (Puntuación de Similitud):**
- **95-100%:** Prácticamente idénticos
- **85-94%:** Muy similares, pequeñas variaciones
- **70-84%:** Similares, variaciones notables
- **<70%:** Similitud cuestionable, revisar manualmente

**Visual Indicators (Indicadores Visuales):**
- 🟢 Verde: Alta confianza (>90%)
- 🟡 Amarillo: Confianza media (75-90%)
- 🔴 Rojo: Baja confianza (<75%)

![Interpretación de puntuaciones de similitud](./imagenes/smartblockssearch-similarity-scores.png)

---

## 5. Criterios de Similitud de Objetos

### Algoritmo de Comparación

Autodesk AI evalúa múltiples factores para determinar similitud:

**1. Geometría (40% del peso)**
- Forma general del objeto
- Tipo de primitivas geométricas
- Relaciones espaciales internas

**2. Dimensiones (30% del peso)**
- Tamaño absoluto
- Proporciones relativas
- Tolerancia: ±5% por defecto

**3. Topología (20% del peso)**
- Número de elementos
- Conexiones entre elementos
- Estructura del objeto

**4. Propiedades (10% del peso)**
- Capa asignada
- Color y tipo de línea
- Estilo de visualización

![Factores de evaluación de similitud](./imagenes/smartblockssearch-factores-similitud.png)

### Ajuste de Tolerancia

Puedes ajustar la tolerancia de búsqueda:

**Strict (Estricta):**
- Solo objetos muy similares (>90%)
- Menos resultados, mayor precisión
- Recomendada para dibujos de precisión

**Standard (Estándar):**
- Balance entre cantidad y calidad (>75%)
- Configuración por defecto
- Adecuada para la mayoría de casos

**Relaxed (Relajada):**
- Incluye objetos con similitud moderada (>60%)
- Más resultados, menor precisión
- Útil para búsquedas exploratorias

![Configuración de tolerancia de búsqueda](./imagenes/smartblockssearch-tolerancia.png)

---

## 6. Conversión a Bloque Nuevo

### Proceso de Creación

**Paso 1: Revisar Objetos Encontrados**
1. Examinar lista de resultados
2. Marcar/desmarcar objetos a incluir
3. Verificar puntuaciones de similitud

**Paso 2: Configurar Bloque Nuevo**
1. Ingresar nombre del bloque
2. Definir punto base
3. Elegir comportamiento (mantener o eliminar objetos)

![Configuración de bloque nuevo](./imagenes/smartblockssearch-nuevo-bloque-config.png)

**Paso 3: Ejecutar Conversión**
```
Creating block: "Door-Type-A"
Converting 24 objects to block instances...
  Object 1... Done
  Object 2... Done
  ...
  Object 24... Done

Conversion complete!
Block "Door-Type-A" created with 24 instances
Original objects: [Retained/Deleted based on settings]
```

### Opciones Avanzadas de Bloque Nuevo

**1. Block Name Suggestions (Sugerencias de Nombre)**
- IA sugiere nombres basados en contenido
- Ejemplos: "Window-Standard", "Chair-Office", "Valve-Gate"
- Editables antes de confirmar

**2. Base Point Options (Opciones de Punto Base)**
- **Automatic:** IA calcula punto óptimo (centro, esquina, etc.)
- **Manual:** Especificar punto exacto
- **Centroid:** Centro geométrico
- **Corner:** Esquina más apropiada

**3. Object Handling (Manejo de Objetos)**
- **Replace with block:** Objetos originales → instancias de bloque
- **Keep originals:** Crear bloque pero mantener objetos originales
- **Delete originals:** Eliminar objetos, solo queda definición de bloque

![Opciones avanzadas de creación de bloque](./imagenes/smartblockssearch-opciones-avanzadas.png)

---

## 7. Conversión a Bloque Existente

### Usar Bloques de la Biblioteca

Una de las capacidades más potentes de SMARTBLOCKSSEARCH es convertir objetos encontrados a bloques **ya existentes** en:

- 📁 Dibujo actual (bloques ya definidos)
- 📚 Bibliotecas de bloques corporativas
- 🌐 Autodesk Content Library
- 📂 Carpetas de recursos locales

![Fuentes de bloques existentes](./imagenes/smartblockssearch-bloques-existentes.png)

### Proceso de Conversión a Existente

**Paso 1: Seleccionar Bloque Destino**

El panel muestra tres secciones:

**A. Recently Used (Usados Recientemente)**
- Bloques insertados en sesión actual
- Ordenados por frecuencia de uso
- Acceso rápido a bloques comunes

**B. Current Drawing (Dibujo Actual)**
- Todos los bloques definidos en el archivo
- Organizados alfabéticamente
- Miniaturas de vista previa

**C. AI Suggestions (Sugerencias de IA)**
- Bloques de bibliotecas que coinciden con el objeto
- Clasificados por relevancia
- Autodesk AI analiza similitud

![Opciones de bloques existentes](./imagenes/smartblockssearch-bloques-destino.png)

**Paso 2: Revisar Compatibilidad**

El sistema muestra:
- ✅ **Compatibility Score:** Qué tan bien encaja el bloque (85%+)
- ⚠️ **Dimension Differences:** Diferencias de tamaño
- 🔧 **Scaling Required:** Si necesita escalado automático

**Paso 3: Configurar Opciones de Reemplazo**

**Scale Options (Opciones de Escala):**
- **No scaling:** Mantener escala del bloque
- **Auto-scale to match:** Escalar para igualar dimensiones
- **Custom scale:** Factor de escala manual

**Rotation Options (Opciones de Rotación):**
- **Match original rotation:** Preservar rotación de cada objeto
- **Normalize to 0°:** Rotar todos a ángulo estándar
- **Custom rotation:** Aplicar rotación específica

![Configuración de reemplazo con bloque existente](./imagenes/smartblockssearch-config-reemplazo.png)

**Paso 4: Ejecutar Reemplazo**

```
Replacing objects with block: "ANSI-Door-36x84"
Processing 24 objects...
  Analyzing dimensions...
  Applying auto-scale: 1.05x
  Matching rotation...
  Replacing objects... Done

Replacement complete!
24 objects replaced with instances of "ANSI-Door-36x84"
Average dimension match: 98%
```

---

## 8. Sugerencias de IA de Bibliotecas

### Autodesk AI Block Suggestions

Una de las características más innovadoras es la capacidad de **sugerir bloques de bibliotecas masivas** basándose en:

**Análisis del Objeto:**
- Forma y geometría
- Dimensiones y proporciones
- Contexto de uso en el dibujo
- Tipo de industria/disciplina

**Fuentes de Sugerencias:**
- 🏢 **Autodesk Content Library:** 750,000+ símbolos y componentes
- 📁 **Bibliotecas Corporativas:** Si están configuradas y conectadas
- 🌍 **Comunidad de Autodesk:** Bloques compartidos públicamente
- 📚 **Estándares de Industria:** ANSI, ISO, DIN, etc.

![Sugerencias de IA de bibliotecas](./imagenes/smartblockssearch-ai-suggestions.png)

### Panel de Sugerencias

**Información mostrada por sugerencia:**

1. **Block Preview (Vista Previa)**
   - Thumbnail del bloque sugerido
   - Vista en múltiples ángulos si es 3D

2. **Relevance Score (Puntuación de Relevancia)**
   - 95-100%: Altamente relevante
   - 85-94%: Relevante
   - 70-84%: Posiblemente relevante

3. **Source Information (Información de Fuente)**
   - Biblioteca de origen
   - Autor/organización
   - Estándar que cumple (si aplica)

4. **Metadata (Metadatos)**
   - Dimensiones
   - Categoría (Architecture, Mechanical, etc.)
   - Tags y descriptores

![Detalle de sugerencia de bloque](./imagenes/smartblockssearch-suggestion-detail.png)

### Uso de Sugerencias

**Workflow recomendado:**

1. **Revisar las top 3 sugerencias**
   - Usualmente las más precisas
   - Verificar dimensiones

2. **Previsualizar en contexto**
   - Botón "Preview in Drawing"
   - Ver cómo se vería el bloque en ubicación real

3. **Comparar con objeto original**
   - Vista lado a lado
   - Verificar que cumple requisitos

4. **Seleccionar y aplicar**
   - Confirmar bloque elegido
   - Configurar opciones de reemplazo
   - Ejecutar conversión

---

## 9. Integración con Bibliotecas de Bloques

### Configurar Bibliotecas Conectadas

Para maximizar las sugerencias de IA, configura tus bibliotecas:

**Paso 1: Design Center Paths**
```
Command: OPTIONS
Tab: Files
  → Support File Search Path
    → Add: C:\Company\CAD Standards\Blocks\
    → Add: C:\Projects\Common\Symbols\
```

**Paso 2: Autodesk Content Library**
- Iniciar sesión con Autodesk ID
- Preferences → Content
- Enable: "Search Autodesk Content Library"

**Paso 3: Connected Support Files (si aplica)**
- Configurar proyecto en Autodesk Docs
- Establecer carpetas de bloques compartidos
- Sincronización automática con equipo

![Configuración de bibliotecas de bloques](./imagenes/smartblockssearch-config-bibliotecas.png)

### Organización de Bibliotecas

**Mejores prácticas:**

1. **Estructura de carpetas clara**
   ```
   Blocks/
   ├── Architecture/
   │   ├── Doors/
   │   ├── Windows/
   │   └── Furniture/
   ├── Mechanical/
   │   ├── Fasteners/
   │   ├── Bearings/
   │   └── Valves/
   └── Electrical/
       ├── Symbols/
       └── Panels/
   ```

2. **Naming conventions consistentes**
   - Prefijos por categoría: ARCH_, MECH_, ELEC_
   - Dimensiones en el nombre: DOOR_36X84
   - Estándar si aplica: ANSI_BOLT_M12

3. **Metadata completo**
   - Description en propiedades de bloque
   - Tags relevantes
   - Autor y fecha de creación

---

## 10. Conversión en Lote (Batch Conversion)

### Procesar Múltiples Búsquedas

SMARTBLOCKSSEARCH puede ejecutarse en **modo batch** para procesar múltiples tipos de objetos:

**Workflow:**

1. **Crear lista de objetos de referencia**
   - Identificar todos los tipos a convertir
   - Marcar uno de cada tipo

2. **Ejecutar búsquedas secuenciales**
   ```
   SMARTBLOCKSSEARCH → Puertas → Convertir
   SMARTBLOCKSSEARCH → Ventanas → Convertir
   SMARTBLOCKSSEARCH → Sillas → Convertir
   ```

3. **Revisar resultados consolidados**
   - Verificar no hay solapamientos
   - Confirmar todas las conversiones

![Proceso de conversión en lote](./imagenes/smartblockssearch-batch-conversion.png)

### Script para Automatización

Para proyectos muy grandes, considera crear un script:

```lisp
; Ejemplo de script AutoLISP para batch conversion
(defun c:BatchSmartSearch ()
  (setq refObjects (list
    "HANDLE1"  ; Door reference
    "HANDLE2"  ; Window reference
    "HANDLE3"  ; Chair reference
  ))
  (foreach handle refObjects
    (command "SMARTBLOCKSSEARCH" handle)
    ; Configurar opciones y ejecutar
  )
  (princ "\nBatch conversion complete!")
)
```

**Nota:** Verificar disponibilidad de API para SMARTBLOCKSSEARCH en AutoCAD 2026.

---

## 11. Casos de Uso Prácticos

### Caso 1: Estandarización de Puertas

**Situación:**
- Plano arquitectónico con 50 puertas
- Dibujadas por diferentes personas
- Variaciones en tamaño (±2 pulgadas)
- Necesidad de estandarizar a catálogo

**Solución:**
1. Seleccionar puerta estándar del catálogo
2. Ejecutar SMARTBLOCKSSEARCH
3. Encontradas 47 puertas similares (3 son diferentes)
4. Convertir a bloque "DOOR-36X80-ANSI" de biblioteca
5. Aplicar auto-scale para ajustar pequeñas diferencias

**Resultado:**
- 47 puertas estandarizadas
- Consistencia con estándares corporativos
- Facilidad de generar especificaciones

![Caso: estandarización de puertas](./imagenes/smartblockssearch-caso-puertas.png)

### Caso 2: Integración con Biblioteca Mecánica

**Situación:**
- Ensamblaje mecánico con tornillos dibujados
- Tornillos deben ser de biblioteca ISO
- 120 tornillos en total, 5 tipos diferentes

**Solución:**
1. Para cada tipo de tornillo:
   - Seleccionar uno como referencia
   - SMARTBLOCKSSEARCH encuentra similares
   - IA sugiere tornillo ISO equivalente
   - Convertir todos a bloque ISO
2. Resultado: Todos los tornillos ahora son estándar ISO

**Beneficios:**
- BOM (Bill of Materials) automático y preciso
- Compatibilidad con sistemas ERP
- Tornillos con metadata completa (peso, material, etc.)

### Caso 3: Actualización de Símbolos Eléctricos

**Situación:**
- Diagrama eléctrico con símbolos antiguos
- Nuevos estándares corporativos disponibles
- 200+ símbolos a actualizar

**Solución:**
1. Por cada tipo de símbolo:
   - Seleccionar símbolo antiguo
   - SMARTBLOCKSSEARCH encuentra todos los similares
   - Seleccionar símbolo nuevo de biblioteca corporativa
   - Reemplazar en lote
2. Verificar todas las conversiones

**Resultado:**
- Dibujo actualizado a nuevos estándares
- Proceso de 2 días reducido a 30 minutos
- Cero errores de conversión

![Caso: actualización de símbolos eléctricos](./imagenes/smartblockssearch-caso-electrico.png)

---

## 12. Mejores Prácticas

### ✅ DO (Hacer)

1. **Elegir objeto de referencia de calidad**
   - Usar el objeto más preciso como referencia
   - Verificar que representa el estándar deseado

2. **Revisar sugerencias de IA**
   - Top 3 sugerencias usualmente son las mejores
   - Verificar dimensiones antes de aplicar

3. **Usar auto-scale con precaución**
   - Solo para diferencias menores (<10%)
   - Verificar que el escalado es aceptable

4. **Documentar conversiones**
   - Mantener registro de qué se convirtió
   - Útil para auditorías y troubleshooting

5. **Probar en área pequeña primero**
   - Convertir algunos objetos como prueba
   - Verificar resultados antes de conversión masiva

### ❌ DON'T (No Hacer)

1. **No ignorar warnings de baja similitud**
   - <70% similitud requiere revisión manual
   - Puede indicar objetos funcionalmente diferentes

2. **No sobre-escalar objetos**
   - Escalado >20% puede indicar bloque incorrecto
   - Buscar alternativa más apropiada

3. **No asumir que IA siempre acierta**
   - Siempre revisar sugerencias
   - Verificar que el bloque cumple requisitos

4. **No olvidar propiedades específicas**
   - Algunos bloques tienen atributos
   - Verificar que atributos se preservan o configuran

5. **No mezclar estándares**
   - ANSI vs ISO vs DIN
   - Mantener consistencia en todo el proyecto

---

## 13. Comparación: Search vs Detect vs Replace

### Matriz de Decisión

| Característica | DETECT | SEARCH | REPLACE |
|----------------|--------|--------|---------|
| **Iniciativa** | Automática | Usuario | Usuario |
| **Alcance** | Todo el dibujo | Búsqueda dirigida | Bloques existentes |
| **Uso principal** | Descubrimiento | Estandarización | Actualización |
| **Control** | Bajo | Alto | Alto |
| **Velocidad** | Rápida | Media | Rápida |
| **Precisión** | Media | Alta | Alta |

### Cuándo Usar Cada Comando

**Usar SMARTBLOCKSDETECT cuando:**
- ❓ No sabes qué objetos están repetidos
- 🎯 Quieres optimizar un dibujo completo
- ⚡ Necesitas resultados rápidos
- 📊 Estás explorando oportunidades de optimización

**Usar SMARTBLOCKSSEARCH cuando:**
- 🎯 Sabes exactamente qué buscar
- 📚 Quieres usar bloques de biblioteca
- 🔍 Necesitas precisión en la conversión
- 🏢 Estás estandarizando a catálogo corporativo

**Usar SMARTBLOCKSREPLACE cuando:** (Lección 3)
- 🔄 Quieres reemplazar bloques existentes
- 🆙 Estás actualizando versiones de bloques
- 🎨 Cambias diseño de componentes

---

## Ejercicios Prácticos

### Ejercicio 1: Búsqueda Básica
**Objetivo:** Familiarizarse con SMARTBLOCKSSEARCH

1. Abrir `ejercicio-02-oficina-variaciones.dwg`
2. Seleccionar una silla como referencia
3. Ejecutar SMARTBLOCKSSEARCH
4. Identificar cuántas sillas similares encuentra
5. Anotar puntuaciones de similitud

### Ejercicio 2: Conversión a Bloque Nuevo
**Objetivo:** Crear bloque nuevo desde búsqueda

1. Usar archivo del Ejercicio 1
2. Buscar mesas similares
3. Convertir todas a bloque nuevo "DESK-STANDARD"
4. Configurar punto base en esquina inferior izquierda
5. Verificar que todas las instancias son correctas

### Ejercicio 3: Uso de Bloques Existentes
**Objetivo:** Convertir a bloque de biblioteca

1. Abrir `ejercicio-03-mecanico-tornillos.dwg`
2. Seleccionar un tornillo dibujado
3. Ejecutar SMARTBLOCKSSEARCH
4. Revisar sugerencias de IA (bloques ISO)
5. Convertir a bloque ISO apropiado
6. Aplicar auto-scale si es necesario

### Ejercicio 4: Estandarización Completa
**Objetivo:** Estandarizar múltiples tipos de objetos

1. Abrir `ejercicio-04-arquitectura-mixto.dwg`
2. Identificar 3 tipos de objetos a estandarizar
3. Para cada tipo:
   - Ejecutar SMARTBLOCKSSEARCH
   - Convertir a bloque de biblioteca o nuevo
4. Documentar mejoras obtenidas

### Ejercicio 5: Comparación de Tolerancias
**Objetivo:** Comprender impacto de tolerancia

1. Usar archivo con objetos con variaciones
2. Buscar con tolerancia Strict, anotar resultados
3. Buscar con tolerancia Relaxed, anotar resultados
4. Comparar diferencias
5. Determinar tolerancia óptima para el caso

---

## Recursos Adicionales

### Documentación Oficial
- [SMARTBLOCKSSEARCH Command Reference](https://help.autodesk.com/) (Actualizar URL)
- [AI Block Suggestions Guide](https://help.autodesk.com/) (Actualizar URL)
- [Working with Block Libraries](https://help.autodesk.com/) (Actualizar URL)

### Video Tutoriales
- **Placeholder:** SMARTBLOCKSSEARCH Walkthrough (12 min)
- **Placeholder:** AI Block Suggestions Deep Dive (18 min)
- **Placeholder:** Batch Conversion Strategies (15 min)

### Artículos
- "Smart Search vs Manual Block Replacement"
- "Building Effective Block Libraries for AI"
- "Case Studies: Standardization Projects"

---

## Resumen de la Lección

### Puntos Clave

1. ✅ **SMARTBLOCKSSEARCH** permite búsqueda dirigida de objetos similares
2. ✅ **Sugerencias de IA** conectan con bibliotecas de 750,000+ bloques
3. ✅ **Conversión flexible** a bloques nuevos o existentes
4. ✅ **Control preciso** sobre similitud y opciones de conversión
5. ✅ **Ideal para estandarización** a catálogos corporativos
6. ✅ **Integración con bibliotecas** maximiza valor

### Próximos Pasos

En la siguiente lección aprenderás:
- **SMARTBLOCKSREPLACE:** Reemplazar bloques existentes
- **SMARTBLOCKSPLACEMENT:** Colocación automática basada en patrones
- **Workflows de actualización** de diseños
- **Aprendizaje de patrones** de ubicación

---

## Navegación

**Anterior:** [Lección 1 - Smart Blocks Detect and Convert](./leccion-01-smart-blocks-detect-convert.md)
**Siguiente:** [Lección 3 - Smart Blocks Replacement y Placement](./leccion-03-smart-blocks-replacement-placement.md)

**Volver al módulo:** [Módulo 5](./README.md)
**Volver al curso:** [AutoCAD 2026 Avanzado](../README.md)

---

**Duración de la lección:** 50-60 minutos
**Última actualización:** Noviembre 2025
**Versión:** 1.0
