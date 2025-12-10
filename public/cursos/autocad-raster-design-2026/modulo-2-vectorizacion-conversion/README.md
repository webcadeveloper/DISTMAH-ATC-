# Módulo 2: Vectorización y Conversión

## Descripción del Módulo

Este módulo se enfoca en técnicas avanzadas de **conversión raster a vector**, el proceso de transformar imágenes bitmap en geometría CAD editable. Los estudiantes aprenderán métodos automáticos y manuales de vectorización, manipulación de entidades raster (REM), reconocimiento óptico de caracteres (OCR), extracción de líneas de contorno, y workflows de conversión batch para producción a gran escala.

## Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

- Ejecutar vectorización automática de planos técnicos con configuración optimizada
- Realizar vectorización manual para áreas complejas o críticas
- Utilizar Raster Entity Manipulation (REM) para limpiar y preparar imágenes
- Aplicar OCR para convertir texto raster a texto CAD editable
- Extraer líneas de contorno y datos de elevación de mapas topográficos
- Implementar workflows de conversión batch para múltiples archivos
- Evaluar calidad de vectorización y realizar post-procesamiento

## Duración

**5 horas** (5 lecciones de 1 hora cada una)

## Requisitos Previos

- Completar Módulo 1: Fundamentos de Raster Design
- Conocimientos de AutoCAD intermedio (polylines, layers, purge, etc.)
- Comprensión de topología básica (líneas conectadas, polígonos cerrados)

## Contenido del Módulo

### Lección 7: Vectorization Methods - Manual vs Automatic
**Duración:** 1 hora

Fundamentos de vectorización, diferencias entre métodos manuales y automáticos, configuración de parámetros de vectorización, y selección de método óptimo según tipo de imagen.

**Temas clave:**
- Conceptos de vectorización
- Vectorization Settings (threshold, line width, gap tolerance)
- Manual tracing vs automatic vectorization
- Vectorization Preview
- Layer mapping y entity types

### Lección 8: Raster Entity Manipulation (REM)
**Duración:** 1 hora

Técnicas avanzadas para manipular píxeles como si fueran entidades vectoriales: seleccionar, mover, copiar, rotar, estirar líneas raster antes de vectorizar.

**Temas clave:**
- REM concept y workflow
- Select raster primitives (lines, arcs, circles)
- Move, Copy, Rotate raster entities
- Stretch y Extend raster lines
- Cleanup antes de vectorización

### Lección 9: OCR - Optical Character Recognition
**Duración:** 1 hora

Reconocimiento óptico de caracteres para convertir texto en imágenes raster a texto CAD editable (MTEXT, TEXT), configuración de OCR, training sets, y post-procesamiento.

**Temas clave:**
- OCR technology en Raster Design
- OCR Settings (font matching, confidence level)
- Training OCR para fonts personalizados
- Convertir texto raster a MTEXT
- Verificación y corrección de OCR

### Lección 10: Contour Lines y Elevation Data
**Duración:** 1 hora

Extracción de líneas de contorno de mapas topográficos, asignación de elevaciones, generación de superficies 3D, e integración con Civil 3D.

**Temas clave:**
- Vectorizar contour lines
- Asignar elevación a polylines (elevation property)
- Follow raster para tracing manual de contornos
- Generación de TIN surface
- Export a Civil 3D

### Lección 11: Batch Conversion Workflows
**Duración:** 1 hora

Automatización de conversión para múltiples archivos, batch processing, scripting básico, control de calidad automatizado, y workflows de producción profesional.

**Temas clave:**
- Batch Image Processor
- Script batch conversion (LISP/Script básico)
- Consistent settings across multiple files
- Quality control automatizado
- Production workflows

## Estructura de Cada Lección

Cada lección incluye:

1. **Objetivos de Aprendizaje** - Metas específicas y medibles
2. **Introducción** - Contexto profesional y aplicaciones
3. **Contenido Técnico** - Explicación detallada con procedimientos
4. **Ejemplos Prácticos** - Casos de uso reales
5. **Ejercicio Práctico** - Actividad hands-on
6. **Evaluación** - 5 preguntas de verificación
7. **Recursos Adicionales** - Enlaces y referencias
8. **Resumen** - Puntos clave

## Ejercicios Prácticos

Al final del módulo encontrarás **5 ejercicios integradores** más un **proyecto integrador**:

1. Vectorización automática de plano arquitectónico
2. REM avanzado para limpieza de plano mecánico
3. OCR de title block y anotaciones
4. Extracción de curvas de nivel de mapa topográfico
5. Batch conversion de 10 planos históricos
6. **Proyecto Integrador:** Digitalización completa de set de planos as-built con vectorización

## Evaluación del Módulo

- **Ejercicios prácticos:** 60%
- **Evaluaciones de lección:** 30%
- **Proyecto integrador:** 10%

**Criterio de aprobación:** 80% o superior

## Recursos Necesarios

### Software
- AutoCAD 2026 con Raster Design Toolset
- Civil 3D 2026 (para ejercicio de contornos, opcional)

### Datos de Práctica
- Planos arquitectónicos limpios listos para vectorizar (proporcionados)
- Planos mecánicos con símbolos estándar (proporcionados)
- Mapas topográficos con contour lines (proporcionados)
- Set de 10 planos históricos para batch processing (proporcionados)

### Material de Referencia
- AutoCAD Raster Design Vectorization Guide
- OCR Best Practices for Technical Drawings
- Batch Processing Workflows Documentation

## Preparación para el Módulo 3

Una vez completado este módulo, estarás preparado para el **Módulo 3: Edición Avanzada y Workflows**, donde aprenderás técnicas de post-procesamiento de geometría vectorizada, workflows híbridos raster/vector, y optimización de producción.

## Soporte

Si tienes dudas durante el módulo:
- Consulta con el instructor durante las sesiones
- Revisa los recursos adicionales en cada lección
- Utiliza el foro del curso (disponible en plataforma DISTMAH)
- Soporte técnico: soporte@distmah.com

---

**DISTMAH ATC - Authorized Training Center**
*Excelencia en capacitación Autodesk desde 2010*
