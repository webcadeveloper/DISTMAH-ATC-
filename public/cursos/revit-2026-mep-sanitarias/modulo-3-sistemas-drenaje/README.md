# Módulo 3: Sistemas de Drenaje

## Descripción del Módulo

El **Módulo 3** aborda el diseño completo de sistemas de drenaje sanitario y pluvial en Revit MEP 2026. Aprenderás a modelar sistemas de aguas residuales, tuberías con pendiente correcta, ventilación sanitaria (vents), drenaje de aguas pluviales, y dimensionamiento según códigos IPC/UPC usando drainage fixture units (DFU).

Los sistemas de drenaje son críticos para remover eficientemente aguas residuales y pluviales del edificio, protegiendo la salud pública y evitando daños estructurales. Este módulo cubre desde tuberías de waste y vent hasta sistemas completos de storm drainage con bajadas pluviales.

**Duración:** 4 horas
**Lecciones:** 4

---

## Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

✅ Diseñar sistemas de drenaje sanitario con tuberías waste y vent
✅ Aplicar pendientes correctas según códigos (1/4" por pie mínimo)
✅ Calcular drainage fixture units (DFU) y dimensionar tuberías
✅ Modelar traps, cleanouts, y accesorios de drenaje en Revit
✅ Crear sistemas de ventilación sanitaria (vent stacks, branch vents)
✅ Diseñar sistemas de drenaje pluvial con bajadas y sizing correcto
✅ Utilizar las mejoras de Revit 2026 para slopes automáticos
✅ Generar schedules de sanitary piping y pluvial systems
✅ Cumplir con códigos IPC/UPC para drainage y venting

---

## Contenido del Módulo

### [Lección 1: Drenaje Sanitario y Aguas Negras](./lecciones/leccion-1.md)
- Conceptos fundamentales de drainage
- Diferencia entre waste, soil, y vent piping
- Fixture traps (P-trap, S-trap, bottle trap)
- Tuberías de drenaje con pendiente (slope settings)
- Drainage fixture units (DFU) - IPC Table 703.2
- Branch drains, soil stacks, building drains
- Cleanouts y accesibilidad
- Modelado en Revit con automatic slopes
- Revit 2026: Mejoras en slope management

**Duración:** 60 minutos

---

### [Lección 2: Sistemas de Ventilación Sanitaria](./lecciones/leccion-2.md)
- ¿Por qué se requiere ventilación? (evitar siphoning de traps)
- Tipos de venting systems:
  - Individual vent
  - Common vent
  - Wet vent
  - Circuit vent
  - Stack vent
- Vent sizing según IPC Table 916.1
- Vent termination (roof penetrations)
- Air admittance valves (AAV) - cuando usar
- Modelado de vent stacks en Revit
- Conectar vent pipes a drainage fixtures
- Best practices para routing de vents

**Duración:** 60 minutos

---

### [Lección 3: Drenaje Pluvial (Aguas de Lluvia)](./lecciones/leccion-3.md)
- Storm water drainage fundamentals
- Rainfall intensity y cálculo de caudal (IPC formula)
- Roof drains, scuppers, overflow drains
- Bajadas pluviales (rainwater leaders)
- Horizontal storm drains con pendiente
- Sizing de storm drainage piping
- Separación de sistemas (sanitary vs storm)
- Combined drains (permitido en algunas jurisdicciones)
- Modelado de roof drainage en Revit
- Revit 2026: Storm analysis tools
- Sustainable drainage (rain gardens, permeable pavement)

**Duración:** 60 minutos

---

### [Lección 4: Dimensionamiento y Documentación de Drenaje](./lecciones/leccion-4.md)
- Métodos de dimensionamiento completo
- Drainage fixture units method (DFU)
- Tablas IPC/UPC para sizing
- Cálculos de capacity de stacks y branches
- Máxima carga permitida por pipe size
- Slopes mínimas y máximas
- Materiales de tubería (PVC, cast iron, ABS)
- Schedules de sanitary piping
- Schedules de pluvial systems
- Coordination con structural (penetraciones)
- Clash detection drainage vs otros sistemas
- Documentación final y submittal

**Duración:** 60 minutos

---

## Proyecto Aplicado del Módulo

**Sistema de Drenaje Completo - Edificio Comercial**

Diseñarás un sistema integrado de drenaje sanitario y pluvial para un edificio comercial de 3 pisos con:
- Restrooms en cada piso (múltiples fixtures)
- Kitchen con grease interceptor
- Roof drainage con múltiples roof drains
- Sanitary soil stacks y vent stacks
- Storm drainage leaders
- Building drain con pendiente hacia property line
- Cumplimiento completo de IPC Chapters 7 (Sanitary Drainage) y 11 (Storm Drainage)

---

## Ejercicios Prácticos

El archivo [ejercicios.md](./ejercicios.md) contiene ejercicios detallados para cada lección:

1. **Ejercicio 1:** Drenaje sanitario de restroom - Waste pipes, traps, cleanouts
2. **Ejercicio 2:** Sistema de ventilación completo - Vent stacks, circuit vents
3. **Ejercicio 3:** Drenaje pluvial de techo - Roof drains, leaders, sizing por rainfall
4. **Ejercicio 4:** Dimensionamiento completo de building drain - DFU method
5. **Ejercicio Integrador:** Sistema completo sanitario + pluvial para edificio mixto

---

## Herramientas de Revit 2026 Utilizadas

- **Pipe (Sanitary)** - Routing de drainage pipes con slopes
- **Pipe (Storm Drainage)** - Sistemas pluvialesindependientes
- **Plumbing Fixtures** - Con drainage connectors
- **Slope Settings** - Configurar pendientes automáticas (mejoras 2026)
- **Sanitary Pipe Schedule** - Tablas de waste/vent piping
- **Storm Drainage Schedule** - Tablas de pluvial systems
- **Coordination Review** - Clash detection vs structural
- **Isometric Views** - Documentación de stacks

---

## Códigos y Normas Aplicados

- **IPC 2021 Chapter 7:** Sanitary Drainage
- **IPC 2021 Chapter 9:** Vents
- **IPC 2021 Chapter 11:** Storm Drainage
- **IPC Table 703.2:** Drainage Fixture Units (DFU)
- **IPC Table 710.1(2):** Size of Building Drains and Sewers
- **IPC Table 916.1:** Vent Sizing
- **UPC Chapter 7:** Sanitary Drainage (alternativa a IPC)
- **ASPE Data Book:** Plumbing Engineering Design Tables

---

## Requisitos Previos

- Haber completado Módulo 1 (Fundamentos de Plomería)
- Haber completado Módulo 2 (Sistemas de Agua Potable)
- Conocimiento de pipe routing en Revit
- Familiaridad con plumbing fixtures
- Comprensión básica de sistemas MEP

---

## Materiales Complementarios

**Families de Revit necesarias:**
- Floor drains (.rfa)
- Cleanout fittings (.rfa)
- Roof drains (.rfa)
- Air admittance valves (.rfa)
- P-traps, S-traps (.rfa)

**Documentos de referencia:**
- IPC 2021 (capítulos 7, 9, 11) - PDF
- Tablas de sizing de drainage - Excel
- Rainfall intensity maps por región
- Material specification sheets (PVC, cast iron)

**Templates:**
- Plumbing template con sanitary systems preconfigurados
- Pipe types para waste, vent, storm drainage

---

## Evaluación del Módulo

- **Ejercicios prácticos:** 40%
- **Proyecto aplicado:** 40%
- **Quiz de códigos IPC/UPC:** 20%

**Criterios:**
- Cumplimiento de slopes correctas
- Sizing correcto según DFU
- Venting adecuado (sin siphoning)
- Cleanouts en ubicaciones requeridas
- Documentación completa

---

## Siguientes Pasos

Después de completar este módulo, continuarás con:

**Módulo 4: Sistemas Especiales y Documentación**
- Fire protection systems (sprinklers)
- Gas piping
- Medical gas systems
- Diagramas isométricos
- Coordinación multidisciplinaria MEP
- Exportación para fabricación

---

## Soporte y Recursos

- **Instructor:** Disponible para consultas sobre drainage design
- **Foros del curso:** Discusión de casos complejos de venting
- **Revisión de proyectos:** Feedback personalizado en ejercicios

**¡Comencemos con la Lección 1!**
