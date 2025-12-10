# Ejercicios del Módulo 2: Mejoras de Productividad 2026

## Introducción

Los ejercicios del Módulo 2 se enfocan en implementar mejoras de productividad reales y medibles. A diferencia del Módulo 1 que exploraba novedades, estos ejercicios demuestran cómo esas novedades se traducen en ahorro de tiempo, reducción de errores y mejor colaboración. Cada ejercicio incluye medición de resultados para documentar mejoras objetivamente.

Estos ejercicios están diseñados para profesionales que buscan justificar la inversión en AutoCAD 2026 con datos concretos.

---

## Ejercicio 1: Optimización Completa de Rendimiento

**Objetivo:** Configurar AutoCAD 2026 para máximo rendimiento en tu hardware específico y medir mejoras.

**Duración:** 30 minutos

### Instrucciones

**Parte A: Benchmark Inicial (10 min)**

1. Descarga archivo de prueba: `Performance_Test_Drawing.dwg` (proporcionado)
   - Archivo complejo: 85 MB, 50+ xrefs, 500+ layouts

2. ANTES de optimizar, mide tiempos baseline:
```
Operación 1 - Abrir archivo:
- Cierra AutoCAD completamente
- Cronómetro: Inicia
- Doble-click en Performance_Test_Drawing.dwg
- Cronómetro: Detén cuando puedas editar
- Tiempo: _______ segundos

Operación 2 - Regenerar todo:
- Comando: REGENALL
- Comando: TIME → Reset
- Ejecuta REGENALL
- Comando: TIME
- Tiempo elapsed: _______ segundos

Operación 3 - Guardar archivo:
- Comando: TIME → Reset
- Comando: QSAVE
- Comando: TIME
- Tiempo elapsed: _______ segundos

Operación 4 - Zoom/Pan smoothness:
- Comando: PERFMON (deja abierto)
- Zoom/Pan agresivamente por 30 segundos
- Observa FPS (frames per second)
- FPS promedio: _______ fps
```

**Parte B: Verificar Hardware (5 min)**

3. Documenta tu hardware:
```
Comando: SYSINFO

CPU: _______________________
RAM: _______________________
GPU: _______________________
VRAM: _______________________
Storage type: _______________________
```

4. Verifica drivers GPU actualizados:
   - NVIDIA: GeForce Experience → Drivers → Check for updates
   - AMD: Radeon Software → Updates
   - Versión actual: _________________
   - ¿Actualización disponible?: Sí / No

**Parte C: Optimizaciones (10 min)**

5. GPU Configuration:
```
OPTIONS → Display → Performance

Configura según tu GPU:

Si GPU dedicada (NVIDIA/AMD 4+ GB VRAM):
☑ Hardware Acceleration: ON
☑ Anti-aliasing: 8x
☑ Use GPU for 2D wireframe: ON
☑ Viewport Render Cache: GPU
  Maximum GPU Memory: 75% de tu VRAM

Si GPU integrada (Intel HD):
☑ Hardware Acceleration: ON
☑ Anti-aliasing: 2x
☑ Viewport Render Cache: CPU
```

6. Multi-Core Configuration:
```
OPTIONS → System → General Performance

☑ Enable multi-core processing: ON
Number of cores: Automatic
☑ Allow background operations: ON
```

7. File Handling:
```
OPTIONS → Open and Save

Incremental save percentage: 25
☑ Demand load Xrefs: Enabled with copy
Index type: Layer and Spatial
```

8. Graphics Config Verify:
```
Comando: GRAPHICSCONFIG

Verifica:
- GPU in use = Tu GPU dedicada (no integrada)
- DirectX 11 activo
- Features enabled (lista completa)

Screenshot y guarda
```

**Parte D: Benchmark Post-Optimización (5 min)**

9. Reinicia AutoCAD completamente

10. Repite EXACTAMENTE las mismas 4 mediciones:
```
Operación 1 - Abrir:    _______ seg (antes: _______ seg)
Operación 2 - Regen:    _______ seg (antes: _______ seg)
Operación 3 - Guardar:  _______ seg (antes: _______ seg)
Operación 4 - FPS:      _______ fps (antes: _______ fps)
```

11. Calcula mejoras:
```
Abrir:     Mejora = _______ %
Regen:     Mejora = _______ %
Guardar:   Mejora = _______ %
FPS:       Mejora = _______ %
```

### Entregables

- Tabla de resultados antes/después
- Screenshots de configuraciones aplicadas
- Análisis breve (100 palabras): ¿Qué optimización tuvo mayor impacto?

### Criterios de Evaluación

- ✓ Benchmark inicial documentado correctamente
- ✓ Optimizaciones aplicadas según tipo de hardware
- ✓ Benchmark post-optimización realizado
- ✓ Mejoras calculadas y documentadas
- ✓ Mejora mínima esperada: 20% en al menos 2 operaciones

---

## Ejercicio 2: Workflow Cloud Híbrido

**Objetivo:** Configurar flujo de trabajo híbrido local/cloud con sincronización inteligente.

**Duración:** 30 minutos

### Instrucciones

**Parte A: Setup Inicial (10 min)**

1. Autodesk Docs Configuration:
```
Sign in a AutoCAD 2026
Comando: ONLINE
Verifica: Connected to Autodesk Account

FILE → Open → Autodesk Docs
Crea nuevo proyecto: "Ejercicio_Cloud_Workflow"
```

2. Desktop Connector:
```
Verifica instalado: Taskbar → Icono Autodesk
Si no instalado: Autodesk Desktop App → Install Desktop Connector

Settings:
☑ Files on-demand: ON
Cache location: [Tu SSD más rápido]
```

3. Sync Configuration:
```
OPTIONS → Online and Cloud → Sync Settings

Sync Mode: ● Automatic
☑ Enable delta synchronization: ON
☑ Compress deltas: ON

Bandwidth:
- Max upload: 80% de tu velocidad
- Max download: 80% de tu velocidad

Test velocidad: speedtest.net
Upload: _______ Mbps
Download: _______ Mbps
```

**Parte B: Test de Sincronización (10 min)**

4. Upload inicial:
```
Crea dibujo nuevo: Test_Sync.dwg
- Dibuja planta simple (4 ambientes)
- Añade texto: "Versión 1.0"

CLOUDSAVE
Project: Ejercicio_Cloud_Workflow
Folder: Root
Watch SYNCPANEL:
- Upload size: _______ MB
- Upload time: _______ segundos
- Upload speed: _______ Mbps
```

5. Delta Sync Test:
```
Edita archivo:
- Mueve 2 paredes
- Añade 1 puerta
- Cambia texto: "Versión 1.1"

QSAVE
Watch SYNCPANEL:
- Delta size: _______ KB (debería ser <<1 MB)
- Delta upload time: _______ segundos
- Mejora vs upload completo: _______ %
```

6. Multi-Device Sync:
```
En otro dispositivo (o navegador web):
- Accede: web.autocad.com
- Abre proyecto: Ejercicio_Cloud_Workflow
- Abre: Test_Sync.dwg
- Verifica cambios visibles (Versión 1.1)

En dispositivo original:
- Haz cambio adicional (añadir ventana)
- Guarda

En web/otro dispositivo:
- Observa notificación de update
- Reload
- Verifica cambio visible
- Tiempo de sincronización: _______ segundos
```

**Parte C: Offline Workflow (5 min)**

7. Preparar Offline:
```
Selecciona Test_Sync.dwg en Autodesk Docs
Right-click → Pin for offline access
Wait for full download
Icon cambia a 📌
```

8. Test Offline:
```
Desactiva WiFi/Ethernet
Abre Test_Sync.dwg (debe abrir sin internet)
Haz cambios significativos:
- Añade mobiliario
- Modifica dimensiones

SAVE (funciona normal)
Status bar muestra: ☁️❌ Offline
```

9. Reconexión Auto-Sync:
```
Reactiva internet
Observa status bar: ☁️❌ → ☁️↑ (uploading)
Tiempo hasta sync completo: _______ segundos

Verifica en web.autocad.com:
- Cambios offline ahora visibles
```

**Parte D: Desktop Connector Workflow (5 min)**

10. Access vía Explorer:
```
Windows Explorer → Drive "Autodesk Docs (X:)"
Navega: Ejercicio_Cloud_Workflow
Verifica Test_Sync.dwg visible

Drag & Drop test:
- Copia otro DWG cualquiera al folder
- Observa upload automático
- Verifica en AutoCAD FILE → Open → Autodesk Docs
  (archivo nuevo debe aparecer)
```

### Entregables

- Screenshots de:
  - SYNCPANEL mostrando delta sync pequeño
  - Desktop Connector en Explorer
  - Offline mode funcionando
- Tabla de tiempos de sincronización
- Análisis: ¿Delta sync funcionó como esperado?

### Criterios de Evaluación

- ✓ Autodesk Docs configurado correctamente
- ✓ Delta sync < 10% tamaño archivo original
- ✓ Offline mode funcional
- ✓ Auto-sync al reconectar exitoso
- ✓ Desktop Connector integrado

---

## Ejercicio 3: Automatización con Python

**Objetivo:** Crear script Python funcional que automatice tarea repetitiva real.

**Duración:** 40 minutos

### Instrucciones

**Parte A: Setup Python (5 min)**

1. Verifica Python disponible:
```
Comando: PYINFO

Debe mostrar:
Python version: 3.11.x
PyAutoCAD module: v2026.x.x

Si error, reinstala componente Python de AutoCAD 2026
```

2. Test básico:
```
Comando: PYEXEC print("Hola AutoCAD 2026")

Debe mostrar en command line: Hola AutoCAD 2026
```

**Parte B: Script Simple - Numerar Objetos (15 min)**

3. Crea archivo: `numerar_objetos.py`

```python
# numerar_objetos.py
from autocad import *

def numerar_circulos():
    """Numera todos los círculos en el dibujo"""
    doc = acad.ActiveDocument
    model = doc.ModelSpace

    # Recolectar círculos
    circulos = []
    for obj in model:
        if obj.ObjectName == "AcDbCircle":
            circulos.append(obj)

    if len(circulos) == 0:
        print("No se encontraron círculos")
        return

    # Ordenar por coordenada X (izquierda a derecha)
    circulos.sort(key=lambda c: c.Center[0])

    # Numerar
    for i, circulo in enumerate(circulos, start=1):
        # Texto en centro
        center = circulo.Center
        text_point = APoint(center[0], center[1], 0)
        text_height = circulo.Radius * 0.4

        text_obj = model.AddText(str(i), text_point, text_height)
        text_obj.Alignment = acad.acAlignmentMiddleCenter
        text_obj.TextAlignmentPoint = text_point
        text_obj.Color = acad.acRed

    print(f"✓ Numerados {len(circulos)} círculos")

# Ejecutar
numerar_circulos()
```

4. Test script:
```
Dibuja 10 círculos en posiciones aleatorias
Comando: PYLOAD
Select: numerar_objetos.py
Verifica: Círculos numerados 1-10 de izquierda a derecha
```

**Parte C: Script Avanzado - Exportar a Excel (20 min)**

5. Instala openpyxl:
```
Command Prompt (Administrator):
cd "C:\Program Files\Autodesk\AutoCAD 2026\Python311"
python.exe -m pip install openpyxl

Verifica instalación:
python.exe -m pip list | findstr openpyxl
```

6. Crea archivo: `exportar_bloques_excel.py`

```python
# exportar_bloques_excel.py
import openpyxl
from autocad import *
import math

def exportar_bloques_a_excel():
    """Exporta información de bloques a Excel"""
    doc = acad.ActiveDocument
    model = doc.ModelSpace

    # Crear workbook
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Bloques AutoCAD"

    # Headers
    headers = ["Nombre", "X", "Y", "Rotación (°)", "Escala X", "Escala Y", "Capa"]
    for col, header in enumerate(headers, start=1):
        cell = ws.cell(row=1, column=col)
        cell.value = header
        cell.font = openpyxl.styles.Font(bold=True)

    # Recopilar bloques
    row = 2
    block_count = 0

    for obj in model:
        if obj.ObjectName == "AcDbBlockReference":
            # Nombre
            ws.cell(row=row, column=1).value = obj.Name

            # Posición
            insertion = obj.InsertionPoint
            ws.cell(row=row, column=2).value = round(insertion[0], 2)
            ws.cell(row=row, column=3).value = round(insertion[1], 2)

            # Rotación (radianes a grados)
            rotation_deg = round(obj.Rotation * 180 / math.pi, 2)
            ws.cell(row=row, column=4).value = rotation_deg

            # Escala
            ws.cell(row=row, column=5).value = round(obj.XScaleFactor, 2)
            ws.cell(row=row, column=6).value = round(obj.YScaleFactor, 2)

            # Capa
            ws.cell(row=row, column=7).value = obj.Layer

            row += 1
            block_count += 1

    # Auto-ajustar anchos
    for column in ws.columns:
        max_length = 0
        column_letter = column[0].column_letter
        for cell in column:
            if cell.value:
                max_length = max(max_length, len(str(cell.value)))
        ws.column_dimensions[column_letter].width = max_length + 2

    # Guardar
    filename = "bloques_autocad.xlsx"
    wb.save(filename)

    print(f"✓ Exportados {block_count} bloques a {filename}")
    print(f"  Ubicación: {acad.ActiveDocument.Path}\\{filename}")

# Ejecutar
exportar_bloques_a_excel()
```

7. Test script:
```
Inserta 5-10 bloques diferentes en el dibujo
Comando: PYLOAD
Select: exportar_bloques_excel.py

Verifica:
- Archivo bloques_autocad.xlsx creado
- Abre en Excel
- Verifica datos correctos (nombre, posición, rotación, etc.)
```

**Parte D: Medir Ahorro de Tiempo (5 min)**

8. Benchmark manual vs automatizado:

```
Tarea: Numerar 50 círculos

MANUAL:
- Cronómetro: Inicia
- TEXT, escribe número, posiciona, repite 50 veces
- Cronómetro: Detén
- Tiempo manual: _______ minutos

AUTOMATIZADO:
- Cronómetro: Inicia
- PYLOAD numerar_objetos.py
- Cronómetro: Detén
- Tiempo auto: _______ segundos

Mejora: _______ % más rápido
```

### Entregables

- Archivos: `numerar_objetos.py` y `exportar_bloques_excel.py`
- Dibujo de prueba con círculos numerados
- Archivo Excel exportado
- Tabla comparativa: Tiempo manual vs automatizado
- Análisis (150 palabras): ¿Qué tareas de tu trabajo podrías automatizar?

### Criterios de Evaluación

- ✓ Scripts Python ejecutan sin errores
- ✓ Numeración funciona correctamente
- ✓ Export a Excel contiene datos precisos
- ✓ Medición de tiempo documentada
- ✓ Mejora mínima: 80% reducción de tiempo

---

## Ejercicio 4: Plan de Migración Realista

**Objetivo:** Crear plan de migración ejecutable para tu situación real o hipotética.

**Duración:** 60 minutos

### Instrucciones

**Parte A: Assessment (15 min)**

1. Define tu escenario (real o hipotético):
```
Empresa/Situación: _______________________
Versión actual AutoCAD: _______________________
Número de usuarios: _______________________
Tipos de proyectos: _______________________
Presupuesto disponible: _______________________
```

2. Completa checklist:
```
[ ] Versión actual: AutoCAD 20__
[ ] Cantidad licencias: ___
[ ] Hardware promedio:
    CPU: _______________________
    RAM: _______________________
    GPU: _______________________
[ ] Archivos DWG promedio:
    Cantidad: ~___
    Tamaño típico: ___ MB
    Más grande: ___ MB
[ ] Templates personalizados: Sí / No
[ ] Plugins terceros: Lista: _______________________
[ ] Xrefs usage: Bajo / Medio / Alto
[ ] Cloud usage actual: Ninguno / Algo / Extenso
[ ] Nivel expertise equipo: Junior / Mid / Senior
```

3. Identifica pain points actuales:
```
Lista 5 problemas principales con versión actual:
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________
```

**Parte B: Análisis ROI (15 min)**

4. Estima tiempo ahorrado por features 2026:

```
Feature: Mejoras de rendimiento (archivos grandes más rápidos)
Tiempo ahorrado: ___ horas/semana por usuario

Feature: Cloud collaboration (menos email de archivos)
Tiempo ahorrado: ___ horas/semana por usuario

Feature: AI Assistant
Tiempo ahorrado: ___ horas/semana por usuario

Feature: Automatización (macros/scripts)
Tiempo ahorrado: ___ horas/semana por usuario

TOTAL tiempo ahorrado: ___ horas/semana por usuario
```

5. Calcula costos:

```
Licencias AutoCAD 2026:
___ usuarios × $1,875/año = $________

Training:
___ usuarios × 8 horas × $__/hora salario = $________

Migración (CAD Manager time):
40 horas × $__/hora = $________

TOTAL INVERSIÓN: $________
```

6. Ejecuta calculadora ROI:

```python
# Usa script calculate_roi.py de Lección 8
# Modifica con tus números

Resultado:
ROI Año 1: _______ %
Payback period: _______ semanas

Justificable: Sí / No / Marginal
```

**Parte C: Plan Técnico (15 min)**

7. Timeline de migración:

```
Organización: Pequeña / Mediana / Grande

Fase 1: Evaluación y Planning
Duración: ___ semanas
Actividades:
- _______________________
- _______________________

Fase 2: Piloto
Usuarios piloto: ___ (nombres/roles)
Duración: ___ semanas
Éxito criterios:
- _______________________
- _______________________

Fase 3: Rollout
Grupos: Lista grupos/departamentos
Duración: ___ semanas
Secuencia:
1. _______________________
2. _______________________

Fase 4: Training y Soporte
Duración: ___ semanas
Métodos:
- _______________________
- _______________________

TOTAL DURACIÓN: ___ semanas/meses
```

8. Migración técnica:

```
Archivos a migrar:
Ubicación: _______________________
Cantidad: ~___ archivos DWG
Método: Batch script / Manual / Gradual

Xrefs update:
Paths absolutos: Sí / No
Si sí, strategy: _______________________

Bibliotecas bloques:
Ubicación actual: _______________________
Actualizar a 2026: Método _______________________

Templates:
Cantidad: ___
Convertir: Método _______________________

Standards/CUI:
Export de 20__ e import a 2026
Customizations a preservar: _______________________
```

**Parte D: Plan de Training (10 min)**

9. Diseña programa training:

```
Rol: Dibujantes Junior
Cantidad: ___
Training duration: ___ horas
Topics prioritarios:
1. _______________________
2. _______________________
3. _______________________
Método: Presencial / Virtual / Híbrido

Rol: Dibujantes Senior
Cantidad: ___
Training duration: ___ horas
Topics prioritarios:
1. _______________________
2. _______________________
3. _______________________

Rol: Project Managers
Cantidad: ___
Training duration: ___ horas
Topics prioritarios:
1. _______________________
2. _______________________

Training materials:
[ ] Quick Start Guide (2-4 páginas)
[ ] Video tutorials (5-10 min cada uno)
[ ] Cheat sheets
[ ] FAQ document

Champions program:
Champions identificados: _______________________
Rol: _______________________
Incentivos: _______________________
```

**Parte E: Business Case (10 min)**

10. Crea executive summary:

```markdown
# Business Case: Migración a AutoCAD 2026

## Executive Summary
[3 párrafos resumiendo: situación actual, propuesta, beneficios]

## Problema
[Pain points identificados en Parte A]

## Solución Propuesta
Migrar ___ licencias a AutoCAD 2026 en ___ semanas/meses

## Inversión Requerida
Total: $________
Breakdown:
- Licencias: $________
- Training: $________
- Migración: $________

## Beneficios Cuantificables
- Ahorro tiempo: ___ horas/semana
- Valor anual: $________
- ROI año 1: ____%
- Payback: ___ semanas

## Beneficios No Cuantificables
- [Lista 3-5 beneficios soft]

## Riesgos
| Riesgo | Mitigación |
|--------|------------|
| [Riesgo 1] | [Cómo mitigar] |
| [Riesgo 2] | [Cómo mitigar] |

## Recomendación
[Proceder / No proceder] porque [razón]

## Timeline
[Resumen de Parte C]
```

### Entregables

- Documento completo de plan (todas las partes A-E)
- Análisis ROI con cálculos
- Business case (formato profesional)
- Timeline visual (Gantt o similar)
- Presentation deck (5-10 slides) para management

### Criterios de Evaluación

- ✓ Assessment completo y realista
- ✓ ROI calculado correctamente
- ✓ Timeline detallado y viable
- ✓ Plan técnico completo (migración + training)
- ✓ Business case convincente y profesional

---

## Ejercicio Integrador Final: Implementación Real

**Objetivo:** Implementar mejoras de AutoCAD 2026 en proyecto real y medir resultados.

**Duración:** 2-3 horas (puede extenderse varios días)

### Descripción

Toma un proyecto real actual (o uno complejo pasado) e impleméntalo usando TODAS las mejoras de AutoCAD 2026 aprendidas en el curso completo. Este ejercicio combina Módulo 1 y Módulo 2.

### Especificaciones

**Proyecto Sugerido: Planta Arquitectónica de Edificio de Oficinas**

- 5 pisos × 500 m² = 2,500 m² total
- 4 disciplinas: Arquitectura, Estructural, MEP, Interiorismo
- Múltiples colaboradores (si es posible trabajar con compañeros)
- Duración estimada: 2-3 días de trabajo (6-8 horas/día)

### Instrucciones Detalladas

**Día 1: Setup y Arquitectura (2-3 horas)**

1. Configuración óptima de entorno:
```
[ ] Tema oscuro profesional configurado
[ ] GPU optimization según tu hardware
[ ] Workspace personalizado creado y guardado
[ ] AI Assistant activado (modo Balanced)
[ ] Autodesk Docs project creado: "Edificio_Oficinas_2026"
[ ] Desktop Connector configurado
[ ] Real-time collaboration activado
```

2. Templates y Standards:
```
[ ] Crear template arquitectura con capas standard:
    A-WALL, A-DOOR, A-WIND, A-STAIR, A-ELEV, A-FURN, etc.
[ ] Text styles configurados (Arial, Tahoma)
[ ] Dimension styles (Arquitectura, con mm)
[ ] Layer standards establecidos
[ ] Guardar como template (.dwt)
```

3. Planta Típica (usando herramientas nuevas):
```
[ ] Usar SMARTOFFSET para muros (20cm espesor)
[ ] TRIM mejorado en Quick Mode para vanos
[ ] Crear bloques de puertas con pattern recognition AI
[ ] Crear bloques de ventanas
[ ] HATCH con AI boundary detection para muros
[ ] MEASUREGEOM para verificar áreas (target: 500 m²/piso)
[ ] Numerar ambientes con script Python
```

4. Cloud Save:
```
[ ] CLOUDSAVE del proyecto
[ ] Verificar sync automático funcional
[ ] Invitar a compañero/revisor con permisos Edit
```

**Benchmark Día 1:**
```
Tiempo dibujando planta típica: _______ horas
(Estima tiempo en AutoCAD versión vieja: _______ horas)
Mejora: _______ %
```

**Día 2: Pisos Adicionales y Xrefs (2-3 horas)**

5. Multiplicar pisos:
```
[ ] Crear 5 archivos: Piso_1.dwg hasta Piso_5.dwg
[ ] Cada piso usa template del Día 1
[ ] Variaciones por piso (diferentes layouts interiores)
```

6. Archivo maestro con Xrefs:
```
[ ] Crear: Edificio_Master.dwg
[ ] XREF attach cada piso en ubicación vertical correcta
[ ] Paths en cloud (autodesk://...)
[ ] Verificar Xref Manager muestra cloud status
```

7. Colaboración en tiempo real:
```
[ ] Compañero edita Piso_3 mientras tú editas Piso_1
[ ] Observar cursores en tiempo real
[ ] Test object locking
[ ] Crear 3 markups señalando verificaciones necesarias
[ ] Compañero responde a markups
```

8. Version control:
```
[ ] Hacer 3 cambios significativos con saves entre cada uno
[ ] VERSIONHISTORY
[ ] Crear named version: "Diseño_Preliminar_V1"
[ ] COMPAREVERSIONS entre versión 1 y 3
```

**Benchmark Día 2:**
```
Tiempo configurando xrefs y colaboración: _______ horas
Conflicts/problemas encontrados: _______
Tiempo resolviendo vs método tradicional: -_____ %
```

**Día 3: Automatización y Finalización (2-3 horas)**

9. Automatizaciones:
```
[ ] Script Python: Exportar lista de ambientes a Excel
    (nombre, área, perímetro, piso)
[ ] Action Macro: Secuencia de insertar puerta → numerar → dimensionar
[ ] Batch process: PURGEALL en todos los pisos
[ ] Custom command: "AMB" para crear ambiente standard
    (rectángulo + hatch + text con área)
```

10. Optimización final:
```
[ ] Ejecutar OVERKILL en cada archivo
[ ] AUDIT para verificar integridad
[ ] Reducción tamaño archivos: _______ %
```

11. Exportación y documentación:
```
[ ] PUBLISH a PDF (todos los pisos)
[ ] Generar markup report
[ ] Exportar datos a Excel (script Python)
[ ] Screenshots de:
    - Workspace configurado
    - Colaboración en tiempo real
    - Version history
    - Automation scripts funcionando
```

12. Medición ROI:
```
[ ] Documentar tiempos totales
[ ] Comparar con tiempo estimado en versión vieja
[ ] Calcular ahorro
[ ] Identificar features que más ayudaron
```

### Métricas a Documentar

**Rendimiento:**
```
Open time archivo master (con xrefs): _______ seg
Regen time all viewports: _______ seg
Save time: _______ seg
FPS promedio durante trabajo: _______ fps
```

**Colaboración:**
```
Usuarios simultáneos: _______
Conflictos ocurridos: _______
Tiempo resolviendo conflictos: _______ min
Markups creados/resueltos: _______
```

**Automatización:**
```
Tareas automatizadas: _______ (lista)
Tiempo ahorrado por automatización: _______ horas
Errores evitados: _______
```

**ROI General:**
```
Tiempo total proyecto: _______ horas

Estimación en AutoCAD 20XX: _______ horas
Ahorro tiempo: _______ horas (_______ %)

Features más valiosas (top 5):
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

Features menos útiles:
1. _______________________
2. _______________________
```

### Entregables Finales

**Archivos Técnicos:**
1. Proyecto completo en Autodesk Docs (compartir acceso a instructor)
2. Templates creados (.dwt)
3. Scripts Python desarrollados (.py)
4. Action Macros (.actm)
5. Excel exports

**Documentación:**
6. Reporte completo (10-15 páginas):
   - Executive summary
   - Configuraciones aplicadas
   - Workflow implementado
   - Automatizaciones creadas
   - Métricas y benchmarks
   - Lecciones aprendidas
   - Recomendaciones

7. Presentation (10-15 slides):
   - Overview del proyecto
   - Features de 2026 utilizadas
   - Métricas de mejora
   - ROI calculado
   - Conclusiones

8. Video demo (5-10 min):
   - Screen recording mostrando:
     - Workspace optimizado
     - Colaboración en tiempo real
     - Automatización funcionando
     - Resultados finales

### Criterios de Evaluación (Total: 100 puntos)

**Configuración y Setup (20 pts)**
- [ ] Optimización completa de rendimiento (5 pts)
- [ ] Workspace personalizado profesional (5 pts)
- [ ] Templates y standards bien definidos (5 pts)
- [ ] Cloud configuration correcta (5 pts)

**Uso de Novedades 2026 (30 pts)**
- [ ] Nuevas herramientas de dibujo utilizadas efectivamente (10 pts)
- [ ] AI Assistant aprovechado (5 pts)
- [ ] Colaboración en tiempo real demostrada (10 pts)
- [ ] Version control implementado (5 pts)

**Automatización (20 pts)**
- [ ] Al menos 2 scripts Python funcionales (10 pts)
- [ ] Action macros creados (5 pts)
- [ ] Tiempo ahorrado documentado (5 pts)

**Medición y ROI (15 pts)**
- [ ] Benchmarks antes/después (7 pts)
- [ ] ROI calculado correctamente (8 pts)

**Documentación (15 pts)**
- [ ] Reporte completo y profesional (8 pts)
- [ ] Presentation clara y convincente (7 pts)

### Rúbrica de Calificación

- **90-100 pts:** Excelente - Implementación completa, ROI >50%, documentación profesional
- **80-89 pts:** Muy Bueno - Mayoría de features implementadas, ROI >30%
- **70-79 pts:** Bueno - Features principales utilizadas, ROI positivo
- **60-69 pts:** Suficiente - Implementación básica, algunos beneficios documentados
- **< 60 pts:** Insuficiente - Necesita rehacer con mayor profundidad

---

## Notas Finales

### Tiempo Total Estimado

- Ejercicio 1: 30 min
- Ejercicio 2: 30 min
- Ejercicio 3: 40 min
- Ejercicio 4: 60 min
- Ejercicio Integrador: 6-8 horas
- **Total: ~9-10 horas**

### Consejos para Éxito

1. **No te saltes los benchmarks:** Son críticos para justificar actualización
2. **Documenta mientras trabajas:** No dejes documentación para el final
3. **Sé realista con ROI:** Es mejor ser conservador que exagerar
4. **Comparte con equipo:** Estos ejercicios son excelentes training materials
5. **Aplica a proyectos reales:** El valor real viene de implementación en producción

### Recursos de Soporte

- Archivos de ejemplo disponibles en carpeta del curso
- Videos demostrativos de cada ejercicio
- Templates de reportes y presentations
- Scripts Python starter pack
- Foro de discusión para preguntas

### Entrega

**Formato:**
- Carpeta comprimida: `Apellido_Nombre_Modulo2_Ejercicios.zip`
- Incluir TODOS los entregables listados

**Plazo:**
- Ejercicios 1-4: [Consultar plataforma]
- Ejercicio Integrador: [Consultar plataforma] (más tiempo)

**Dónde:**
- Plataforma del curso → Módulo 2 - Ejercicios

---

**¡Has completado el curso Actualización a AutoCAD 2026!**

Estos ejercicios te han preparado para:
- Configurar AutoCAD 2026 óptimamente
- Implementar workflows cloud híbridos
- Automatizar tareas repetitivas
- Planificar migraciones exitosas
- Medir y documentar ROI

**Próximos pasos:**
1. Implementa aprendido en tu trabajo diario
2. Comparte conocimiento con tu equipo
3. Continúa explorando features avanzadas
4. Mantente actualizado con futuras mejoras

**¡Éxito en tus proyectos con AutoCAD 2026!**
