# Módulo 4: Visualización y Renderizado

## Descripción del Módulo

El Módulo 4 transforma modelos 3D en presentaciones fotorrealistas mediante estilos visuales, materiales, iluminación, cámaras y renderizado. AutoCAD 2026 incluye el motor de render integrado que permite generar imágenes de calidad profesional sin software adicional.

Este módulo cubre configuración de estilos visuales para modelado y presentación, aplicación de materiales realistas de la biblioteca de Autodesk, configuración de iluminación natural (sol) y artificial (point, spot, distant), creación de cámaras y walkthroughs, configuración de parámetros de render, y generación de renders finales para presentación a clientes.

## Objetivos de Aprendizaje

Al finalizar este módulo, serás capaz de:

- Configurar estilos visuales (Wireframe, Hidden, Realistic, Shaded, etc.)
- Aplicar materiales de la biblioteca Autodesk Materials a objetos 3D
- Configurar iluminación solar con control de ubicación geográfica y hora del día
- Crear luces artificiales (Point Light, Spotlight, Distant Light) con parámetros fotométricos
- Posicionar cámaras 3D y crear recorridos (walkthrough) animados
- Configurar parámetros de renderizado (calidad, resolución, antialiasing)
- Establecer fondos (backgrounds) para renders
- Generar renders de alta calidad para presentaciones profesionales

## Duración

6 horas distribuidas en 6 lecciones de 1 hora cada una.

## Requisitos Previos

- Módulos 1, 2 y 3 completados
- Modelos 3D complejos listos para visualización
- Conocimiento básico de fotografía (opcional pero útil)
- Comprensión de conceptos de iluminación

## Contenido del Módulo

### Lección 19: Visual Styles y Materiales
**Duración:** 1 hora

Configuración de estilos visuales para diferentes etapas de trabajo. Aplicación de materiales realistas desde la biblioteca Autodesk Materials Library.

**Comandos clave:**
- VSCURRENT: Cambiar estilo visual activo
- VISUALSTYLES: Administrador de estilos
- MATERIALS: Navegador de materiales
- MATERIALATTACH: Aplicar material a objeto
- MATERIALMAP: Ajustar mapeo de textura

**Estilos visuales:**
- 2D Wireframe: Modelado técnico
- Wireframe: Vista 3D sin superficies
- Hidden: Líneas ocultas removidas
- Realistic: Con materiales y texturas
- Shaded: Sombreado simple
- Conceptual: Estilo ilustrativo

### Lección 20: Luces (Point, Spot, Distant, Sun)
**Duración:** 1 hora

Iluminación de escenas 3D con luces artificiales y luz solar. Control de intensidad, color, sombras y atenuación.

**Comandos clave:**
- LIGHT: Crear luces
- POINTLIGHT: Luz omnidireccional
- SPOTLIGHT: Luz direccional cónica
- DISTANTLIGHT: Luz paralela (como sol)
- SUNPROPERTIES: Configurar luz solar
- GEOGRAPHICLOCATION: Ubicación geográfica para sol
- LIGHTLIST: Administrador de luces

### Lección 21: Cámaras y Walkthroughs
**Duración:** 1 hora

Creación de cámaras 3D para vistas específicas. Generación de recorridos animados (walkthrough) para presentaciones arquitectónicas.

**Comandos clave:**
- CAMERA: Crear cámara 3D
- ANIPATH: Crear animación de recorrido
- WALKTHROUGH: Asistente de walkthrough
- 3DCLIP: Planos de recorte delantero/trasero
- NAVSMOTION: ShowMotion para presentaciones

### Lección 22: Render Settings y Background
**Duración:** 1 hora

Configuración de parámetros de renderizado para calidad óptima. Establecimiento de fondos (cielo, imágenes, degradados).

**Comandos clave:**
- RENDERCROP: Render de región específica
- RENDERENVIRONMENT: Configurar entorno (niebla, fondo)
- RENDERPRESETS: Presets de calidad de render
- Render settings: Resolución, antialiasing, raytracing
- SAVEIMG: Guardar imagen renderizada

### Lección 23: Rendering Avanzado
**Duración:** 1 hora

Técnicas avanzadas de renderizado: global illumination, final gather, ambient occlusion, depth of field, motion blur.

**Comandos clave:**
- RPREF: Preferencias avanzadas de render
- RENDERWIN: Ventana de render
- RENDEREXPOSURE: Control de exposición
- RENDERCROP: Render de área específica
- Batch rendering para múltiples vistas

### Lección 24: Exportación y Documentación 3D
**Duración:** 1 hora

Exportación de renders a formatos de imagen. Generación de vistas para documentación. Preparación de presentaciones con imágenes renderizadas.

**Comandos clave:**
- JPGOUT, PNGOUT, TIFOUT: Exportar renders
- 3DDWF: Exportar modelo 3D navegable
- PUBLISH3D: Publicar presentación 3D
- SHOWMOTION: Crear presentación con vistas
- Layout para composición de renders + planos 2D

## Metodología

Cada lección combina:
1. Teoría de visualización (15%): Conceptos de render y fotografía
2. Configuración práctica (35%): Setup de luces, materiales, cámaras
3. Experimentación (30%): Pruebas con diferentes configuraciones
4. Producción (20%): Generación de renders finales

## Evaluación

- **Ejercicios por lección:** 6 ejercicios de configuración y render
- **Proyecto final:** Presentación arquitectónica completa con múltiples renders
- **Criterios:**
  - Calidad de iluminación (30%)
  - Realismo de materiales (25%)
  - Composición de cámaras (20%)
  - Calidad técnica del render (15%)
  - Presentación final (10%)

## Conceptos Clave de Visualización

### Iluminación de Tres Puntos

**Key Light:** Luz principal (más brillante, define forma)
**Fill Light:** Luz de relleno (suaviza sombras)
**Back Light:** Luz trasera (separa objeto del fondo)

### Tipos de Luces

**Point Light:** Bombilla omnidireccional
**Spotlight:** Foco direccional con cono de luz
**Distant Light:** Luz paralela (sol simulado)
**Sun Light:** Luz solar con ubicación geográfica real

### Materiales

**Difusos:** Superficies mates (concreto, madera sin barniz)
**Reflectantes:** Superficies brillantes (metal, vidrio)
**Transparentes:** Vidrio, plástico transparente
**Emisores:** Luces incrustadas en geometría

## Configuración de Render Recomendada

### Draft (Borrador - Pruebas Rápidas)
- Resolución: 800×600
- Sampling: Min 1/4, Max 1
- Tiempo: ~1-2 min

### Medium (Presentación Intermedia)
- Resolución: 1920×1080
- Sampling: Min 1, Max 4
- Tiempo: ~5-10 min

### High (Presentación Final)
- Resolución: 3840×2160 (4K)
- Sampling: Min 1, Max 16
- Raytracing: On
- Final Gather: On
- Tiempo: ~30-60 min

## Aplicaciones Profesionales

**Arquitectura:**
- Renders exteriores con luz solar
- Renders interiores con iluminación artificial
- Recorridos virtuales (walkthrough)
- Vistas aéreas de proyectos urbanos

**Diseño Industrial:**
- Product shots con iluminación de estudio
- Renders de múltiples ángulos
- Materiales realistas (metal, plástico, vidrio)

**Presentaciones a Clientes:**
- Fotomontajes (render + fotografía real)
- Comparativas antes/después
- Animaciones de recorrido
- Presentaciones interactivas con ShowMotion

## Workflow de Render Profesional

1. **Preparación del modelo:**
   - Verificar geometría (sin errores)
   - Limpiar objetos innecesarios
   - Organizar por capas

2. **Aplicar materiales:**
   - Materiales base desde biblioteca
   - Ajustar mapeo de texturas
   - Configurar propiedades (reflectividad, bump)

3. **Configurar iluminación:**
   - Luz principal (key light)
   - Luces de relleno (fill)
   - Luz solar si exterior
   - Ajustar intensidades

4. **Posicionar cámaras:**
   - Vistas hero (principales)
   - Vistas de detalle
   - Recorrido si arquitectónico

5. **Render de prueba (draft):**
   - Verificar composición
   - Ajustar exposición
   - Corregir sombras

6. **Render final (high):**
   - Resolución alta
   - Calidad máxima
   - Tiempo de render: esperar

7. **Post-procesamiento:**
   - Ajustes de brillo/contraste
   - Composición con fondo
   - Anotaciones si necesario

## Recursos Adicionales

- Biblioteca Autodesk Materials: 1000+ materiales
- HDRI backgrounds para iluminación realista
- Texturas adicionales: sitios como textures.com
- Templates de render preconfigurados
- Ejemplos de iluminación por tipo de escena

---

**Duración total:** 6 horas
**Lecciones:** 6
**Ejercicios:** 6 + proyecto final
**Nivel:** Avanzado
**Prerrequisito:** Módulos 1, 2, 3 completados
