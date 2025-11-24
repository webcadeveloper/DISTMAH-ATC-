# Ejercicios del Módulo 1: Novedades AutoCAD 2026

## Introducción

Estos ejercicios están diseñados para consolidar tu comprensión de las novedades introducidas en AutoCAD 2026. A diferencia de ejercicios de cursos básicos, estos asumen que ya dominas AutoCAD y se enfocan exclusivamente en aplicar las características nuevas de la versión 2026.

Cada ejercicio está diseñado para completarse en 15-20 minutos y combina múltiples funcionalidades nuevas. El ejercicio integrador final combina todas las novedades del módulo en un proyecto realista.

---

## Ejercicio 1: Configuración de Entorno Profesional 2026

**Objetivo:** Dominar las mejoras de interfaz y configuración del tema oscuro.

**Duración:** 15 minutos

### Instrucciones

**Parte A: Tema Oscuro y Personalización**

1. Activa el tema oscuro profesional:
   - Comando: OPTIONS (OP)
   - Display → Interface Theme → Dark Professional
   - Contraste: Medium
   - Color de acento: Azul corporativo

2. Personaliza colores de visualización:
   - OPTIONS → Display → Colors
   - Model Space background: RGB(33, 33, 33)
   - Crosshair color: Cian brillante
   - Grip colors: Azul (unselected), Amarillo (hover), Rojo (selected)

3. Configura paletas optimizadas:
   - Abre: Properties, Layer Properties Manager, Tool Palettes
   - Properties: Auto-hide activado, delay 500ms, transparencia 25%
   - Layer Properties Manager: Acoplada a la derecha
   - Tool Palettes: Flotante con 50% transparencia

**Parte B: Workspace Personalizado**

4. Crea workspace optimizado:
   - Organiza ribbons: Home, Annotate, View visibles
   - Posiciona paletas según preferencia
   - Comando: WSSAVE
   - Nombre: "Mi_Workspace_2026"
   - Activa "Sync to cloud"

5. Prueba High-DPI support:
   - OPTIONS → Display → Performance
   - Hardware Acceleration 2.0: Activado
   - Frame Rate Limiter: 60 FPS

**Parte C: Opciones de Accesibilidad**

6. Configura navegación optimizada:
   - Activa keyboard navigation completo
   - Configura font sizes (Command line: 11pt, UI: 9pt)
   - Prueba navegación por teclado (Tab entre paletas)

### Entregables

- Screenshot de tu workspace configurado
- Archivo .WSX exportado de tu workspace
- Documento breve (50 palabras) explicando por qué elegiste esa configuración

### Criterios de Evaluación

- ✓ Tema oscuro activado correctamente
- ✓ Al menos 3 colores personalizados
- ✓ Workspace guardado y exportado
- ✓ Paletas organizadas funcionalmente

---

## Ejercicio 2: AI Assistant en Acción

**Objetivo:** Implementar funciones de inteligencia artificial en flujo de trabajo real.

**Duración:** 20 minutos

### Instrucciones

**Parte A: Configuración de AI Assistant**

1. Activa AI Assistant:
   - Comando: AIASSISTANT (o AA)
   - Sign in con cuenta Autodesk
   - Nivel de intervención: Balanced
   - Privacy: Local Learning Only

2. Prueba comandos en lenguaje natural:
   - "crear rectángulo de 100 por 80"
   - "copiar esto 4 veces hacia arriba con espacio de 50"
   - "rotar 45 grados desde centro"
   - Documenta qué comandos nativos ejecutó

**Parte B: Pattern Recognition**

3. Entrena reconocimiento de patrones:
   - Dibuja manualmente un símbolo de ventana 3 veces
   - Espera sugerencia de crear bloque
   - Acepta y nombra: "VENTANA_STD"
   - Verifica reemplazo de instancias anteriores

4. Layer learning:
   - Crea capas: A-WALL, A-DOOR, A-WIND
   - Dibuja muros (líneas gruesas) y colócalos en A-WALL manualmente 2 veces
   - En tercera ocasión, observa si AI sugiere capa A-WALL automáticamente

**Parte C: Predictive Commands**

5. Crea secuencia repetitiva:
   - Ejecuta: CIRCLE → OFFSET → HATCH cinco veces consecutivas
   - En sexta ocasión, observa predicciones
   - Usa Tab para aceptar comandos predichos
   - Mide tiempo ahorrado vs método tradicional

6. Smart Selection:
   - Comando: AISELECT (AS)
   - Escribe: "todos los círculos"
   - Luego: "objetos en capa A-WALL"
   - Verifica precisión de selección

### Entregables

- Dibujo con elementos creados usando IA
- Screenshot del AI Assistant Panel mostrando learning insights
- Tabla comparativa de tiempos (con IA vs sin IA) en formato:

| Tarea | Sin IA | Con IA | Ahorro |
|-------|--------|--------|--------|
| Crear array | Xs | Xs | X% |
| ... | ... | ... | ... |

### Criterios de Evaluación

- ✓ AI Assistant configurado y funcional
- ✓ Al menos 5 comandos en lenguaje natural ejecutados correctamente
- ✓ Bloque creado por sugerencia de IA
- ✓ Evidencia de predicción de comandos

---

## Ejercicio 3: Colaboración en Tiempo Real

**Objetivo:** Dominar herramientas de colaboración y control de versiones.

**Duración:** 20 minutos

**Nota:** Este ejercicio requiere compañero de colaboración o dos dispositivos.

### Instrucciones

**Parte A: Configuración de Proyecto Colaborativo**

1. Prepara proyecto:
   - Crea planta arquitectónica simple (4 ambientes)
   - Comando: CLOUDSAVE
   - Guarda en Autodesk Docs
   - Carpeta: "Ejercicio_Colaboracion_2026"

2. Activa colaboración:
   - Enable Real-Time Collaboration
   - Invita a compañero con permisos "Edit"
   - Espera conexión (observa Panel de Colaboradores)

**Parte B: Co-Edición Simultánea**

3. Trabajo simultáneo (coordina con compañero):
   - Usuario A: Trabaja en mitad izquierda del plano
   - Usuario B: Trabaja en mitad derecha del plano
   - Observa cursores y selecciones en tiempo real
   - Intenta editar mismo objeto simultáneamente (nota el lock)

4. Layer locking:
   - Usuario A: Bloquea capa "A-WALL" para trabajo exclusivo
   - Usuario B: Intenta editar objetos en A-WALL (debe estar bloqueado)
   - Usuario A: Libera lock

**Parte C: Markup y Revisión**

5. Crea markups:
   - Añade 3 tipos diferentes de markup:
     - Cloud revision en una pared señalando error dimensional
     - Text comment sobre ubicación de puerta
     - Issue flag en problema detectado
   - Asigna cada markup a usuario diferente
   - Establece prioridades (uno High, uno Medium, uno Low)

6. Workflow de revisión:
   - Compañero responde a markups con comentarios
   - Marca uno como "Resolved"
   - Verifica otro y cierra como "Verified"
   - Exporta Markup Report

**Parte D: Control de Versiones**

7. Version history:
   - Haz 3 cambios significativos guardando entre cada uno
   - Comando: VERSIONHISTORY
   - Compara versión actual con versión inicial
   - Crea named version: "Revisión_Ejercicio_3"

8. Compare versions:
   - Comando: COMPAREVERSIONS
   - Selecciona versión 1 vs versión 3
   - Identifica objetos añadidos, eliminados, modificados
   - Screenshot de visualización de diferencias

### Entregables

- Archivo DWG final guardado en Autodesk Docs
- Screenshot del Panel de Colaboradores con usuarios activos
- Markup Report exportado (PDF)
- Screenshot de COMPAREVERSIONS mostrando diferencias
- Breve descripción (100 palabras) de experiencia colaborativa

### Criterios de Evaluación

- ✓ Proyecto guardado en Autodesk Docs con colaboración activa
- ✓ Evidencia de co-edición simultánea
- ✓ Al menos 3 markups creados con diferentes tipos
- ✓ Version history con named version creada
- ✓ Comparación de versiones documentada

---

## Ejercicio 4: Nuevas Herramientas de Dibujo

**Objetivo:** Aplicar nuevos comandos de dibujo y edición en proyecto realista.

**Duración:** 20 minutos

### Instrucciones

**Parte A: SmartOffset**

1. Dibuja contorno de edificio con polilínea (forma L)
2. Usa SMARTOFFSET:
   - Activa Multi-Distance Preview
   - Prueba distancias: 15, 30, 45 (muros de diferentes espesores)
   - Selecciona offset de 30
   - Gap handling: Fillet con radio 5

3. Compara con OFFSET tradicional:
   - Usa OFFSET normal en otra sección
   - Documenta diferencias en pasos requeridos

**Parte B: Trim/Extend Modernos**

4. Crea cuadrícula estructural (5x5 líneas):
   - Dibuja usando LINE o GRID

5. Prueba TRIM mejorado:
   - Quick Mode: Corta sin seleccionar cutting edges
   - Fence Mode: Usa fence para cortar múltiples líneas
   - Smart Recognition: Double-click para eliminar segmentos

6. Prueba EXTEND mejorado:
   - Auto-Target en 3 líneas diferentes
   - Multiple Extensions en una sola línea

**Parte C: HATCH con IA**

7. Dibuja 3 ambientes cerrados:
   - Uno con contorno perfecto
   - Uno con gap pequeño (~2mm)
   - Uno con geometría compleja (isla interna)

8. Aplica HATCH con AI:
   - Ambiente 1: Observa detección normal
   - Ambiente 2: Acepta sugerencia de cerrar gap
   - Ambiente 3: Verifica detección automática de islas

9. Pattern suggestions:
   - Usa Multiple Pattern Preview
   - Prueba 4 patrones diferentes simultáneamente
   - Selecciona el más apropiado

**Parte D: MeasureGeom Avanzado**

10. Mediciones inteligentes:
    - MEASUREGEOM → Area en los 3 ambientes
    - Usa Accumulate Multiple para área total
    - Export to Excel
    - Compara con área target de 150m²

11. Quick Measure:
    - Atajo: QM
    - Mide perímetro de cada ambiente
    - Documenta resultados

**Parte E: OVERKILL Inteligente**

12. Crea duplicados intencionales:
    - Copia líneas sobre sí mismas (3-4 duplicados)
    - Dibuja líneas fragmentadas que deberían ser una

13. Ejecuta OVERKILL:
    - Tolerance: 0.001
    - Combine partial overlaps: YES
    - Optimize polylines: YES
    - Review cleanup report

### Entregables

- Archivo DWG con ejercicios completados
- Screenshots de:
  - SmartOffset Multi-Distance Preview
  - TRIM Fence Mode en acción
  - HATCH AI boundary detection con gap
  - MeasureGeom accumulated areas
- Archivo Excel exportado con mediciones
- OVERKILL cleanup report

### Criterios de Evaluación

- ✓ SMARTOFFSET usado correctamente con preview
- ✓ TRIM/EXTEND en modos nuevos demostrados
- ✓ HATCH con AI detectando y cerrando gap
- ✓ Áreas medidas y acumuladas correctamente
- ✓ OVERKILL ejecutado con reporte generado

---

## Ejercicio Integrador: Proyecto Completo con Novedades 2026

**Objetivo:** Combinar todas las novedades del Módulo 1 en proyecto realista profesional.

**Duración:** 45-60 minutos

### Descripción del Proyecto

Diseñarás una planta arquitectónica de oficina pequeña (100m²) utilizando EXCLUSIVAMENTE las novedades de AutoCAD 2026 aprendidas en este módulo. El proyecto incluye configuración de entorno, uso de IA, colaboración, y nuevas herramientas de dibujo.

### Especificaciones Técnicas

**Planta de Oficina:**
- Área total: 100m² ± 5%
- 4 espacios: Recepción (30m²), Sala de reuniones (25m²), Área de trabajo (35m²), Servicios (10m²)
- Muros exteriores: 20cm
- Muros interiores: 10cm
- 2 puertas de 90cm
- 3 ventanas de 120cm

### Instrucciones Paso a Paso

**Fase 1: Configuración (10 min)**

1. Entorno optimizado:
   - Tema oscuro profesional activado
   - Workspace personalizado creado y guardado
   - AI Assistant configurado en modo Balanced

2. Configuración de proyecto:
   - Archivo nuevo desde template
   - Guarda en Autodesk Docs: "Proyecto_Integrador_2026"
   - Activa Real-Time Collaboration
   - Invita a instructor/compañero como revisor

3. Setup de capas:
   - A-WALL-EXTERIOR (rojo, lineweight 0.50mm)
   - A-WALL-INTERIOR (blanco, lineweight 0.25mm)
   - A-DOOR (verde, lineweight 0.18mm)
   - A-WIND (azul, lineweight 0.18mm)
   - A-FURNITURE (cian, lineweight 0.13mm)
   - A-DIMENSIONS (magenta, lineweight 0.09mm)

**Fase 2: Dibujo con Herramientas Nuevas (20 min)**

4. Contorno exterior con SMARTOFFSET:
   - Dibuja rectángulo base 10m x 10m (100m²)
   - SMARTOFFSET hacia interior 20cm (espesor muro)
   - Usa Multi-Distance Preview
   - Gap handling: Fillet R=0

5. Muros interiores:
   - Dibuja líneas de ejes de muros interiores
   - SMARTOFFSET ±5cm (muro de 10cm total)
   - Usa AI Assistant para optimizar:
     - Comando natural: "crear muro de 10cm en estas líneas"

6. Vanos (puertas y ventanas):
   - Usa TRIM mejorado en Quick Mode
   - Fence Mode para abrir múltiples vanos simultáneamente
   - MEASUREGEOM para verificar anchos (90cm y 120cm)

7. Símbolos con Pattern Recognition:
   - Dibuja puerta manualmente (línea + arco)
   - Al dibujar segunda, acepta sugerencia de crear bloque "PUERTA_90"
   - Inserta en todos los vanos de 90cm
   - Repite con ventanas: bloque "VENTANA_120"

**Fase 3: Anotación y Acabados (10 min)**

8. Hatching con IA:
   - Selecciona muros (polígono cerrado)
   - HATCH con AI Boundary Detection
   - Pattern: ANSI31, escala 50
   - Si hay gaps pequeños, acepta sugerencia de cerrar

9. Acotación:
   - Acota muros exteriores
   - Dimensiones de ambientes
   - Anchos de vanos

10. Mobiliario básico (opcional):
    - Mesa de reuniones (círculo + rectángulo)
    - Escritorios en área de trabajo
    - Usa ARRAYCIRCULAR3D para sillas alrededor de mesa

**Fase 4: Colaboración y Revisión (10 min)**

11. Markups de auto-revisión:
    - Añade 2-3 markups señalando verificaciones necesarias
    - "Verificar área total = 100m²"
    - "Confirmar anchos de puertas"
    - "Revisar circulación entre ambientes"

12. Verificaciones con MeasureGeom:
    - Mide área de cada ambiente
    - Accumulate total
    - Export to Excel
    - Compara con especificaciones

13. Version control:
    - VERSIONHISTORY
    - Crea named version: "Versión_Final_Ejercicio_Integrador"
    - Si trabajaste con compañero, COMPAREVERSIONS con su versión

**Fase 5: Limpieza y Optimización (5 min)**

14. OVERKILL inteligente:
    - Ejecuta en todo el dibujo
    - Tolerance: 0.001
    - Optimize polylines: YES
    - Revisa cleanup report

15. Properties verification:
    - Verifica todas las capas correctamente asignadas
    - Lineweights apropiados
    - Sin objetos en layer 0

### Entregables Finales

**Archivos:**
1. Archivo DWG final en Autodesk Docs
2. Workspace .WSX exportado
3. Excel con mediciones de áreas
4. PDF con markup report

**Documentación:**
5. Documento (300-500 palabras) que incluya:
   - Novedades de 2026 utilizadas (lista con descripción breve)
   - Tiempo ahorrado estimado vs métodos tradicionales
   - Desafíos encontrados al usar nuevas herramientas
   - Qué novedad te resultó más útil y por qué

**Screenshots:**
6. Workspace configurado
7. AI Assistant panel mostrando learning insights
8. Panel de colaboradores (si trabajaste con compañero)
9. COMPAREVERSIONS mostrando diferencias
10. MeasureGeom con áreas acumuladas

### Criterios de Evaluación

**Configuración (20 puntos)**
- ✓ Tema oscuro y workspace personalizados (5 pts)
- ✓ AI Assistant configurado y funcional (5 pts)
- ✓ Proyecto en Autodesk Docs con colaboración activa (5 pts)
- ✓ Capas correctamente configuradas (5 pts)

**Uso de Herramientas Nuevas (40 puntos)**
- ✓ SMARTOFFSET con Multi-Distance Preview (10 pts)
- ✓ TRIM/EXTEND en modos nuevos (10 pts)
- ✓ HATCH con AI boundary detection (10 pts)
- ✓ Pattern recognition para bloques (10 pts)

**Colaboración y Control (20 puntos)**
- ✓ Markups creados y gestionados (7 pts)
- ✓ Version history con named version (7 pts)
- ✓ Compare versions documentado (6 pts)

**Precisión Técnica (20 puntos)**
- ✓ Especificaciones cumplidas (área, dimensiones) (10 pts)
- ✓ OVERKILL ejecutado correctamente (5 pts)
- ✓ Limpieza y organización del dibujo (5 pts)

**Total: 100 puntos**

### Rúbrica de Calificación

- **90-100 pts:** Excelente - Dominio completo de novedades 2026
- **80-89 pts:** Muy Bueno - Uso efectivo de la mayoría de herramientas
- **70-79 pts:** Bueno - Uso básico de herramientas principales
- **60-69 pts:** Suficiente - Comprensión básica pero implementación incompleta
- **< 60 pts:** Insuficiente - Necesita repaso del módulo

---

## Notas Finales

### Recursos de Apoyo

- Archivos de plantilla disponibles en carpeta del curso
- Videos demostrativos de cada ejercicio
- Foro de discusión para dudas
- Office hours con instructor

### Tiempo Total Estimado

- Ejercicio 1: 15 min
- Ejercicio 2: 20 min
- Ejercicio 3: 20 min
- Ejercicio 4: 20 min
- Ejercicio Integrador: 60 min
- **Total: 2 horas 15 minutos**

### Consejos para Éxito

1. **No te saltes ejercicios:** Cada uno construye sobre el anterior
2. **Usa Preview modes:** Todas las herramientas nuevas tienen previews, úsalos
3. **Documenta mientras trabajas:** Toma screenshots en el momento, no al final
4. **Experimenta:** Si algo no funciona como esperas, prueba diferentes opciones
5. **Aprovecha IA:** Deja que el AI Assistant aprenda de tu trabajo

### Entrega

**Formato:**
- Carpeta comprimida (.zip) con todos los entregables
- Nombre: `Apellido_Nombre_Modulo1_Ejercicios.zip`

**Plazo:**
- Consulta plataforma del curso para fecha límite

**Dónde:**
- Sube a plataforma del curso en sección "Módulo 1 - Ejercicios"

---

**¡Éxito con los ejercicios! Estás dominando AutoCAD 2026.**
