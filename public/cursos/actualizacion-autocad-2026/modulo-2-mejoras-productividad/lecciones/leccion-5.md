# Lección 5: Optimizaciones de Rendimiento

## Introducción

AutoCAD 2026 introduce optimizaciones de rendimiento significativas que aprovechan hardware moderno de maneras antes imposibles. Estas mejoras no son automáticas; requieren configuración apropiada para extraer su máximo potencial. Un AutoCAD 2026 correctamente configurado puede abrir archivos grandes 2-3 veces más rápido, renderizar viewports complejos instantáneamente y manejar operaciones de edición masivas sin lag.

Las mejoras incluyen soporte completo para GPUs de última generación (incluyendo RTX 40-series y AMD RX 7000), aprovechamiento real de procesadores multi-core para operaciones que antes solo usaban un núcleo, y algoritmos optimizados para archivos grandes que reducen uso de memoria hasta 40%. Esta lección te guiará por cada configuración crítica, explicará qué hace exactamente, y te mostrará cómo medir mejoras reales en tu hardware específico.

## Objetivos de la Lección

- Configurar aceleración GPU óptima para tu tarjeta gráfica
- Aprovechar procesamiento multi-core en operaciones pesadas
- Optimizar manejo de archivos grandes (>50 MB)
- Realizar benchmarking antes/después para medir mejoras
- Troubleshoot problemas comunes de rendimiento
- Configurar ajustes específicos según tipo de trabajo (2D/3D)

## Duración
1 hora

## Contenido

### 1. Aprovechamiento de Hardware Moderno

**Requisitos de Sistema Recomendados 2026**

AutoCAD 2026 puede correr en hardware antiguo, pero para aprovechar optimizaciones necesitas:

**Mínimo para Mejoras:**
- CPU: Intel Core i5 gen 10+ o AMD Ryzen 5 3000+
- RAM: 16 GB
- GPU: NVIDIA GTX 1650 / AMD RX 5500 con 4 GB VRAM
- Storage: SSD NVMe (crucial para archivos grandes)

**Recomendado para Máximo Rendimiento:**
- CPU: Intel Core i7 gen 12+ o AMD Ryzen 7 5000+ (multi-core)
- RAM: 32 GB (64 GB para proyectos enormes)
- GPU: NVIDIA RTX 3060 / AMD RX 6700 con 8+ GB VRAM
- Storage: SSD NVMe Gen 4 (7000 MB/s read)

**Verificar Tu Hardware:**
```
Windows:
- Win + R → dxdiag → Display (GPU info)
- Task Manager → Performance (CPU, RAM, GPU)
- Settings → System → About (Specs generales)

Dentro de AutoCAD:
Comando: SYSINFO
Muestra:
- CPU model y cores
- RAM total y disponible
- GPU model y driver version
- DirectX version
```

![System Info](../imagenes/leccion-5-sysinfo.png)

### 2. Aceleración GPU Mejorada

**Graphics Performance Settings**

AutoCAD 2026 utiliza GPU de manera mucho más agresiva que versiones anteriores:

**Configuración Básica:**
```
OPTIONS → Display → Performance

Graphics Performance Settings:
1. Hardware Acceleration: ON (crítico)
2. Level of Smoothness: 5 (máximo)
3. Adaptive degradation: ON
4. Smooth line display: ON
```

**Configuración Avanzada - GPU Specific:**

**Para NVIDIA (RTX 20/30/40 series):**
```
OPTIONS → Display → Performance → Manual Tune

Activar:
✓ DirectX 11 Mode (mejor que 12 para AutoCAD actualmente)
✓ Anti-aliasing: 8x (si GPU >6GB VRAM)
✓ Texture Compression: ON
✓ Use GPU for 2D wireframe: ON (NUEVO en 2026)
✓ Viewport Render Cache: GPU (antes era CPU-only)

GPU Memory Allocation:
- AutoCAD puede usar hasta 75% VRAM disponible
- Configura: Maximum GPU Memory: 6 GB (si tienes 8 GB VRAM)
```

**Para AMD (RX 6000/7000 series):**
```
Mismas opciones base, pero:
✓ Prefer AMD-optimized path: ON (nuevo driver 2024+)
✓ FreeSync support: ON (reduce screen tearing)
✓ DirectX 11 también recomendado
```

**Actualizar Drivers GPU:**
Crítico para rendimiento máximo:
- NVIDIA: GeForce Experience o descarga manual nvidia.com
- AMD: Adrenalin Software o descarga manual amd.com
- AutoCAD 2026 requiere drivers 2023+ para mejoras completas

**Verificar Aceleración GPU Activa:**
```
Comando: GRAPHICSCONFIG

Status panel muestra:
- GPU being used (debe ser tu dedicada, no integrada)
- DirectX version active
- VRAM usage current/maximum
- Features enabled (lista de optimizaciones activas)
```

![Graphics Config](../imagenes/leccion-5-graphicsconfig.png)

### 3. Procesamiento Multi-Core

**Multi-Threading en AutoCAD 2026**

Finalmente, AutoCAD aprovecha múltiples cores de CPU para operaciones que antes bloqueaban:

**Operaciones Multi-Thread (Nuevo 2026):**
- HATCH generation (hasta 8 cores)
- REGEN en múltiples viewports (todos los cores disponibles)
- Xref loading (carga paralela de múltiples xrefs)
- File saving (compresión paralela)
- AUDIT y RECOVER (scan multi-threaded)

**Configuración:**
```
OPTIONS → System → General Performance Settings

Multi-Processor Support:
✓ Enable multi-core processing (debe estar ON)

Number of cores to use:
- Automatic (recomendado) - usa cores disponibles dinámicamente
- Manual: Especifica cantidad
  - 4-core CPU: usa 3 (deja 1 para sistema)
  - 8-core CPU: usa 6-7
  - 16-core CPU: usa 12-14

Background processing:
✓ Allow background operations
  - SAVE puede ocurrir en background mientras sigues trabajando
  - REGEN de viewports inactivos en background
```

**Monitoreo de Uso Multi-Core:**

Durante operaciones pesadas:
```
1. Abre Task Manager (Ctrl+Shift+Esc)
2. Performance → CPU → Change graph to "Logical processors"
3. Ejecuta REGEN en dibujo complejo
4. Observa: Todos los cores deben activarse (antes solo 1-2)
```

**Operaciones que MÁS se benefician:**
- Archivos con 50+ xrefs
- Dibujos con 100+ layouts
- Hatches complejos en áreas grandes
- AUDIT de archivos >100 MB

### 4. Optimización de Archivos Grandes

**File Handling Improvements**

AutoCAD 2026 maneja archivos grandes (>50 MB) dramáticamente mejor:

**Demand Loading Mejorado:**
```
OPTIONS → Open and Save → Demand Load Xrefs

Options:
○ Disabled (carga completa, lento)
○ Enabled (carga solo visible)
● Enabled with copy (recomendado 2026 - carga inteligente con cache)

Index type:
● Layer and Spatial (óptimo para archivos grandes)

Retain changes to Xref layers: Según necesidad
```

**Incremental Save Optimization:**
```
OPTIONS → Open and Save

Save Options:
Incremental save percentage: 25 (default 50)
  - Más bajo = saves más lentos pero archivos más pequeños
  - Recomendado: 25 para archivos >100 MB

Create backup with each save: Según preferencia
  - OFF para SSD rápidos (ahorra tiempo)
  - ON para HDDs o archivos críticos
```

**Partial Open para Archivos Enormes:**

Nuevo workflow para archivos >200 MB:
```
FILE → Open → Browse file

Botón "Partial Open" (esquina inferior derecha)

Opciones:
- Select geometry: Solo capas/áreas necesarias
- Layer filters: Carga solo capas específicas
- View to load: Carga solo área visible en view específico

Beneficio: Archivo de 500 MB puede abrir en 10 seg vs 3 min completo
```

**PURGE Inteligente:**
```
Comando: PURGE

Nuevo modo: PURGEALL
- Analiza archivo completo con IA
- Detecta objetos huérfanos, blocks no usados, estilos duplicados
- Genera reporte de qué puede eliminarse
- Estimate: Muestra reducción de tamaño antes de ejecutar

PURGEALL con confirmación elimina todo lo innecesario
Reducción típica: 15-40% en archivos legacy
```

![Purge All Report](../imagenes/leccion-5-purgeall.png)

### 5. Configuraciones Específicas 2D vs 3D

**Perfiles de Rendimiento**

AutoCAD 2026 permite perfiles optimizados según tipo de trabajo:

**Perfil 2D Optimizado:**
```
OPTIONS (configurar todo lo siguiente):

Display:
- Visual Style: 2D Wireframe (más rápido)
- Quality: Medium (suficiente para 2D)
- Shadows: OFF
- Full Shadow Display: OFF

Performance:
- Hardware Acceleration: ON pero conservativo
- Anti-aliasing: 2x (no necesitas 8x en 2D)
- Viewport Render Cache: Small (256 MB suficiente)

System:
- Large datasets: Optimized for drafting
- Regen auto mode: Manual (tú controlas cuando regenerar)
```

**Perfil 3D Optimizado:**
```
Display:
- Visual Style: Shaded with Edges
- Quality: High (aprovecha GPU)
- Shadows: ON
- Full Shadow Display: ON
- Ambient Occlusion: ON (nuevo 2026, muy realista)

Performance:
- Hardware Acceleration: Aggressive
- Anti-aliasing: 8x (aprovecha GPU moderna)
- Viewport Render Cache: Large (2-4 GB si tienes VRAM)
- GPU Tessellation: ON (suaviza curvas)

System:
- Large datasets: Optimized for visualization
- Regen auto mode: Auto (regenera automáticamente para visual correcto)
```

**Cambio Rápido entre Perfiles:**
```
Comando: WSCURRENT → Selecciona workspace
AutoCAD 2026 puede vincular profiles a workspaces

Setup:
1. Crea profile "2D_Fast": OPTIONS → Profiles → Add to list
2. Configura todas las opciones 2D
3. Exporta como 2D_Fast.arg

4. Crea profile "3D_Quality"
5. Configura opciones 3D
6. Exporta como 3D_Quality.arg

Cambio: Comando PROFILES → Set current
```

### 6. Benchmarking y Medición

**Medir Mejoras Reales**

Es crítico medir mejoras objetivamente:

**Benchmark Básico:**
```
Descarga: Sample_Complex_Drawing.dwg (proporcionado en curso)

Pruebas a realizar:
1. Open time: Tiempo desde doble-click hasta editable
2. Regen time: Comando REGEN, mide duración (comando line muestra)
3. Save time: QSAVE, mide duración
4. Zoom/Pan smoothness: Subjetivo pero notable

Ejecuta benchmark:
- ANTES de optimizar (settings default)
- DESPUÉS de optimizar (con todas las mejoras)

Documenta en tabla:
| Operación | Antes | Después | Mejora |
|-----------|-------|---------|--------|
| Open      | 45s   | 18s     | 60%    |
| Regen     | 12s   | 4s      | 67%    |
| Save      | 8s    | 3s      | 63%    |
```

**TIME Command:**
```
Comando: TIME

Muestra:
- Current time
- Time drawing created
- Last update time
- Total editing time
- Elapsed time (stopwatch)

Usa "Elapsed time" para medir operaciones:
1. TIME → Reset
2. Ejecuta operación (ej: múltiples hatches)
3. TIME → Lee elapsed time
```

**Performance Monitor (Nuevo 2026):**
```
Comando: PERFMON

Panel que muestra en tiempo real:
- FPS (frames per second) durante zoom/pan
- GPU usage %
- CPU usage %
- RAM usage (MB)
- Draw calls per frame
- Objects rendered

Deja abierto mientras trabajas para monitorear performance
Identifica operaciones que causan spikes
```

![Performance Monitor](../imagenes/leccion-5-perfmon.png)

### 7. Troubleshooting Común

**Problemas y Soluciones:**

**Problema: GPU no se está usando**
```
Verificar:
1. GRAPHICSCONFIG → GPU should be dedicated (NVIDIA/AMD), not "Intel HD Graphics"

Si muestra GPU integrada:
- NVIDIA Control Panel → Manage 3D Settings → Program Settings
- Add AutoCAD (acad.exe)
- Preferred graphics processor: High-performance NVIDIA

- AMD equivalente: Radeon Software → Gaming → Add → AutoCAD
```

**Problema: Lag en archivos grandes**
```
Diagnóstico:
- AUDIT → Revisa errores
- PURGEALL → Elimina basura
- Verifica: Múltiples xrefs nested (evitar más de 3 niveles)
- Layer count: >500 capas puede causar lag (consolida)

Si persiste:
- Partial Open workflow
- Divide drawing en múltiples archivos vinculados
```

**Problema: Crashes frecuentes**
```
Causas comunes en 2026:
- Drivers GPU desactualizados (actualiza)
- Conflicto con plugins viejos (desactiva en APPLOAD)
- Corrupt drawing (RECOVER)
- RAM insuficiente (cierra otros programas, upgrade RAM)

AutoCAD 2026 Error Reporting mejorado:
- Crashes generan reporte detallado
- Enviarlo a Autodesk ayuda a fix bugs
```

**Problema: Saves muy lentos**
```
Soluciones:
1. Reduce Incremental save %: 50 → 25
2. Desactiva backup: Create backup = NO
3. Verifica antivirus no está scanning archivos .dwg en tiempo real
4. SSD: Asegura TRIM está activado (optimization)
5. PURGEALL antes de save final
```

## Ejercicio Práctico

**Ejercicio 1: Configuración GPU Óptima**

1. Ejecuta GRAPHICSCONFIG y documenta settings actuales
2. Verifica drivers GPU están actualizados (versión y fecha)
3. Configura OPTIONS → Display → Performance para tu GPU específica
4. Activa todas las optimizaciones compatibles
5. Ejecuta REGEN en dibujo complejo y observa smoothness

**Ejercicio 2: Benchmark Completo**

1. Descarga Sample_Complex_Drawing.dwg
2. CON SETTINGS DEFAULT:
   - Mide open time (cronómetro)
   - Ejecuta TIME → Reset
   - Ejecuta REGEN
   - Ejecuta TIME → Documenta elapsed
3. Aplica TODAS las optimizaciones de la lección
4. Reinicia AutoCAD
5. REPITE mediciones
6. Calcula % de mejora

**Ejercicio 3: Multi-Core Verification**

1. Abre Task Manager → Performance → CPU
2. Carga dibujo con 20+ xrefs
3. Observa cores usage durante load
4. Crea 10 hatches complejos simultáneos
5. Verifica que múltiples cores se activan (>50% usage)
6. Screenshot de Task Manager mostrando multi-core usage

**Ejercicio 4: File Optimization**

1. Abre archivo legacy grande (>50 MB)
2. Ejecuta AUDIT → Documenta errores encontrados
3. Ejecuta PURGEALL → Documenta KB eliminados
4. Configura Demand Loading optimizado
5. SAVEAS con nuevo nombre
6. Compara tamaños: Original vs Optimizado

## Consejos Profesionales

- **Actualiza drivers GPU cada 3 meses:** Autodesk y fabricantes mejoran rendimiento constantemente
- **SSD es la mejora #1:** Más impacto que GPU para open/save speeds
- **32 GB RAM es sweet spot:** 16 GB limitante en archivos grandes, 64 GB overkill salvo proyectos enormes
- **Benchmark regularmente:** Performance puede degradarse con tiempo (reinstalar limpio)
- **Perfiles por proyecto:** Crea perfiles específicos para clientes/proyectos diferentes

## Preguntas Frecuentes

**P: ¿Debo usar DirectX 11 o 12?**
R: DirectX 11 para AutoCAD 2026. DX12 teóricamente mejor pero AutoCAD aún no aprovecha completamente, DX11 más estable.

**P: ¿Mi GPU integrada (Intel HD) puede aprovechar mejoras?**
R: Parcialmente. Aceleración básica sí, pero features avanzadas (anti-aliasing 8x, viewport cache grande) requieren GPU dedicada.

**P: ¿Más RAM mejora performance?**
R: Hasta cierto punto. 16→32 GB mejora significativo para archivos grandes. 32→64 GB solo si trabajas con archivos >500 MB.

**P: ¿Laptop vs Desktop para AutoCAD 2026?**
R: Desktop mejor por thermal management (GPUs laptop throttle). Si laptop, asegura cooling pad y modo "Performance" en power settings.

## Recursos Adicionales

- Autodesk Performance Tuning Guide for AutoCAD 2026 (PDF)
- Video: "GPU Acceleration Deep Dive" (20 min)
- Benchmark files pack (descargable)
- GPU compatibility matrix (NVIDIA/AMD específico)

## Resumen

Optimizar AutoCAD 2026 para tu hardware específico puede resultar en mejoras de rendimiento de 2-3x en operaciones cotidianas. Configuración correcta de GPU, aprovechamiento multi-core, y optimización de archivos grandes son los tres pilares. Benchmarking antes/después documenta mejoras objetivamente. Inversión de 1-2 horas en configuración inicial paga dividendos cada día de trabajo.

## Próxima Lección

En la Lección 6, exploraremos las integraciones en la nube mejoradas, incluyendo sincronización inteligente, trabajo offline, y Desktop Connector optimizado para flujos de trabajo híbridos local/nube.
