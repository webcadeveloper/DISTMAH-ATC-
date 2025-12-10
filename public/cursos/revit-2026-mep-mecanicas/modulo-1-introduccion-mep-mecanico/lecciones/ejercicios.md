# Ejercicios Prácticos - Módulo 1: Introducción a Revit MEP Mecánico

## Ejercicio 1: Exploración de Interface MEP y Navegación 3D

### Descripción
Familiarízate con la interfaz especializada de Revit MEP para sistemas mecánicos. Explora las herramientas principales del ribbon, vistas especializadas y navegación 3D optimizada para ductos y equipos HVAC.

### Tareas
1. **Exploración del Ribbon MEP Systems:**
   - Identifica la ubicación de herramientas de ductos
   - Localiza las herramientas de equipos mecánicos
   - Encuentra las herramientas de tuberías (pipe)
   - Captura de pantalla del ribbon con anotaciones

2. **Creación de vistas especializadas:**
   - Crear vista de planta para ductos (Duct Plan)
   - Crear vista de planta para tuberías (Pipe Plan)
   - Crear vista 3D especializada para sistemas mecánicos
   - Configurar visual styles para mostrar sistemas por color

3. **Navegación en Browser de Sistemas:**
   - Abrir el System Browser
   - Identificar tipos de sistemas mecánicos disponibles
   - Explorar propiedades de un sistema HVAC
   - Documentar la jerarquía de sistemas

4. **Navegación 3D para ductos:**
   - Activar modo Section Box
   - Navegar dentro de un sistema de ductos
   - Usar la herramienta ViewCube
   - Crear isométrica de un ramal de ductos

### Entregables
- Documento PDF con capturas de pantalla anotadas
- Lista de mínimo 10 herramientas MEP identificadas
- 3 vistas guardadas (Planta ductos, Planta tuberías, 3D mecánico)
- Reporte de navegación del System Browser

### Criterios de Aprobación
- Identificación correcta de herramientas principales MEP
- Vistas especializadas creadas correctamente
- Navegación fluida en 3D demostrada
- Documento profesional y organizado

---

## Ejercicio 2: Configuración de Proyecto Mecánico Completo

### Descripción
Crear y configurar un proyecto MEP mecánico desde cero utilizando plantillas profesionales. Configurar parámetros de proyecto, unidades, niveles y grids específicos para instalaciones HVAC.

### Datos de Proyecto
```
Tipo: Edificio administrativo de 3 pisos
Altura piso típico: 4.00 m
Altura planta baja: 5.00 m
Grid spacing: 7.00 m × 7.00 m
Sistema de unidades: Métrico
Precisión: 0.01 m para ductos
Disciplina: Mechanical (HVAC)
```

### Tareas
1. **Crear proyecto desde plantilla:**
   - Iniciar proyecto con plantilla MEP Mechanical
   - Verificar configuración de disciplina
   - Guardar proyecto con nombre descriptivo
   - Configurar ubicación del proyecto

2. **Configuración de unidades:**
   - Establecer sistema métrico
   - Configurar precisión para ductos (0.01 m)
   - Configurar precisión para tuberías (0.01 m)
   - Configurar unidades de caudal (L/s)
   - Configurar unidades de presión (Pa)

3. **Configuración de niveles:**
   - Crear nivel Planta Baja (0.00 m)
   - Crear nivel Piso 1 (+5.00 m)
   - Crear nivel Piso 2 (+9.00 m)
   - Crear nivel Piso 3 (+13.00 m)
   - Crear nivel Techo (+17.00 m)

4. **Configuración de grids:**
   - Crear grids estructurales 7m × 7m
   - Nombrar grids con sistema alfanumérico (A, B, C / 1, 2, 3)
   - Verificar alineación en todas las vistas

5. **Project Parameters para HVAC:**
   - Crear parámetro personalizado: "Sistema HVAC" (texto)
   - Crear parámetro: "Zona Térmica" (texto)
   - Crear parámetro: "Caudal Diseño L/s" (número)
   - Asignar parámetros a categoría correcta

### Entregables
- Archivo Revit (.rvt) con configuración completa
- Documento PDF mostrando:
  - Settings de unidades configurados
  - Niveles creados en elevación
  - Grids en planta
  - Project Parameters creados
- Checklist de configuración completado

### Criterios de Aprobación
- Proyecto inicia correctamente desde plantilla MEP
- Unidades métricas configuradas correctamente
- 5 niveles creados con alturas exactas
- Grids alineados y nombrados profesionalmente
- Mínimo 3 Project Parameters personalizados
- Archivo organizado y guardado correctamente

---

## Ejercicio 3: Carga y Gestión de Familias MEP Básicas

### Descripción
Cargar, organizar y gestionar familias MEP esenciales para sistemas mecánicos. Explorar familias de difusores, rejillas, ductos, accesorios y equipos mecánicos.

### Categorías de Familias Requeridas
```
- Difusores: Mínimo 3 tipos (circular, cuadrado, lineal)
- Rejillas de retorno: Mínimo 2 tipos
- Ductos rectangulares: Varios tamaños
- Ductos circulares: Varios diámetros
- Codos de ducto: 90°, 45°
- Bifurcaciones: T simple, Y
- Equipos: UMA (Unidad Manejadora de Aire)
- Cajas VAV: Variable Air Volume box
```

### Tareas
1. **Carga de familias de difusores:**
   - Cargar difusores circulares (150mm, 200mm, 250mm)
   - Cargar difusores cuadrados (300×300, 400×400)
   - Cargar difusores lineales
   - Verificar conectores MEP

2. **Carga de familias de rejillas:**
   - Cargar rejillas de retorno rectangulares
   - Cargar rejillas de extracción
   - Verificar parámetros de caudal

3. **Carga de familias de ductos y accesorios:**
   - Verificar tipos de ductos rectangular disponibles
   - Verificar tipos de ductos circulares
   - Cargar codos radio largo (R = 1.5D)
   - Cargar bifurcaciones simétricas y asimétricas

4. **Carga de equipos mecánicos:**
   - Cargar familia de UMA (Air Handling Unit)
   - Cargar caja VAV con damper
   - Cargar ventilador de extracción
   - Verificar conectores de entrada/salida

5. **Organización de familias:**
   - Crear categorías en Project Browser
   - Renombrar tipos con nomenclatura consistente
   - Verificar que todas las familias sean MEP (no genéricas)
   - Duplicar tipos y modificar parámetros

6. **Colocación de prueba:**
   - Colocar 1 difusores en planta
   - Colocar 1 rejilla de retorno
   - Colocar 1 UMA
   - Conectar difusor a ducto de prueba

### Entregables
- Archivo Revit con familias cargadas organizadas
- Tabla Excel listando todas las familias:
  - Nombre de familia
  - Categoría MEP
  - Tipos disponibles
  - Tamaños/dimensiones
  - Conectores (cantidad y tipo)
- Vista 3D mostrando familias colocadas
- Reporte de Project Browser organizado

### Criterios de Aprobación
- Mínimo 15 familias MEP cargadas
- Todas las familias con conectores MEP verificados
- Organización profesional en Project Browser
- Tabla de familias completa y precisa
- Colocación de prueba exitosa
- Conexiones MEP funcionando correctamente

---

## Ejercicio 4: Configuración de Mechanical Settings Globales

### Descripción
Configurar los Mechanical Settings globales del proyecto para optimizar el diseño de sistemas HVAC. Incluye configuración de duct settings, pipe settings, sizing methods y visual styles.

### Configuraciones Requeridas

#### Duct Settings
```
Material ducto principal: Galvanized Steel
Roughness: 0.09 mm (chapa galvanizada)
Sizing method: Friction
Friction loss: 1.0 Pa/m (diseño estándar)
Velocidad máxima: 8 m/s
Velocidad recomendada: 3-6 m/s
```

#### Pipe Settings (Hidronic)
```
Material tubería: Steel (agua fría/caliente)
Sizing method: Pressure loss
Pérdida presión: 250 Pa/m
Velocidad máxima: 2.5 m/s
```

#### Visual Styles
```
Color ductos suministro: Azul
Color ductos retorno: Rojo
Color ductos extracción: Gris
Color tuberías agua fría: Cyan
Color tuberías agua caliente: Magenta
```

### Tareas

1. **Configurar Duct Settings:**
   - Abrir Mechanical Settings > Duct Settings
   - Establecer material principal (Galvanized Steel)
   - Configurar roughness coefficient (0.09 mm)
   - Seleccionar método sizing: Friction
   - Establecer pérdida fricción: 1.0 Pa/m
   - Configurar velocidades máximas y recomendadas
   - Captura de pantalla de configuración

2. **Configurar segmentos de ductos:**
   - Definir tamaños estándar rectangulares (increments 50mm)
   - Definir diámetros circulares estándar (increments 25mm)
   - Establecer range de tamaños: 100mm - 1200mm
   - Verificar availability de tamaños

3. **Configurar Pipe Settings:**
   - Abrir Mechanical Settings > Pipe Settings
   - Establecer material (Steel)
   - Método sizing: Pressure Loss
   - Pérdida presión: 250 Pa/m
   - Velocidad máxima: 2.5 m/s
   - Captura de pantalla

4. **Configurar diámetros de tubería:**
   - Definir diámetros nominales estándar
   - Range: DN15 (1/2") hasta DN150 (6")
   - Verificar schedules de tubería (Sch 40)

5. **Configurar Visual Styles:**
   - Abrir Object Styles
   - Configurar colores por tipo de sistema:
     - Supply Air: Azul (RGB 0,0,255)
     - Return Air: Rojo (RGB 255,0,0)
     - Exhaust Air: Gris (RGB 128,128,128)
     - Hydronic Supply: Cyan (RGB 0,255,255)
     - Hydronic Return: Magenta (RGB 255,0,255)
   - Configurar line weights
   - Verificar en vista 3D

6. **Configurar Mechanical Equipment:**
   - Definir categorías de equipos
   - Configurar símbolos en planta
   - Establecer tag styles
   - Configurar schedules templates

### Entregables
- Archivo Revit con Mechanical Settings configurados
- Documento PDF con capturas de pantalla de:
  - Duct Settings completo
  - Pipe Settings completo
  - Object Styles (colores configurados)
  - Tamaños estándar definidos
- Tabla comparativa de configuración:
  - Before/After settings
  - Justificación de cada parámetro
- Vista 3D mostrando color coding funcionando

### Criterios de Aprobación
- Duct Settings configurado según especificaciones
- Pipe Settings configurado correctamente
- Sizing methods apropiados seleccionados
- Visual styles implementados (colores verificables en 3D)
- Tamaños estándar definidos profesionalmente
- Documentación completa de configuraciones
- Justificación técnica de parámetros seleccionados

---

## Ejercicio 5: Setup de Proyecto HVAC Completo desde Cero

### Descripción
Integrar todos los conocimientos del módulo 1 para configurar un proyecto HVAC profesional desde cero. Este ejercicio integrador combina configuración de proyecto, carga de familias, settings mecánicos y preparación para diseño.

### Proyecto: Oficinas Administrativas "Edificio Central"

#### Especificaciones
```
Ubicación: Ciudad templada
Tipo: Edificio administrativo
Pisos: 3 niveles + azotea técnica
Área por piso: 600 m² (20m × 30m)
Altura piso: 4.00 m
Ocupación: 120 personas total (40 por piso)
Sistema HVAC: VAV con UMA central en azotea
Distribución: Ductos rectangulares principales, circulares ramales
Norma: ASHRAE 62.1
```

#### Zonas Térmicas
```
Piso 1:
  - Zona Norte (fachada vidrio): 300 m², 20 personas
  - Zona Sur (interior): 300 m², 20 personas

Piso 2:
  - Zona Este (fachada vidrio): 300 m², 20 personas
  - Zona Oeste (interior): 300 m², 20 personas

Piso 3:
  - Zona Norte (fachada vidrio): 300 m², 20 personas
  - Zona Sur (interior): 300 m², 20 personas

Azotea:
  - Cuarto de máquinas (UMA, equipos)
```

### Tareas Completas

#### FASE 1: Configuración Base
1. Crear proyecto desde plantilla MEP Mechanical
2. Configurar unidades métricas con precisiones correctas
3. Crear 5 niveles (PB, P1, P2, P3, Azotea)
4. Crear grids 5m × 5m (4×6 grids)
5. Configurar ubicación geográfica del proyecto

#### FASE 2: Mechanical Settings
6. Configurar Duct Settings (fricción, velocidades)
7. Configurar Pipe Settings (hidronic)
8. Definir tamaños estándar de ductos
9. Configurar visual styles por sistema
10. Establecer nomenclatura de sistemas

#### FASE 3: Familias MEP
11. Cargar familias de difusores (circulares, cuadrados)
12. Cargar rejillas de retorno
13. Cargar UMA (Air Handling Unit)
14. Cargar cajas VAV
15. Cargar accesorios de ductos (codos, bifurcaciones)
16. Organizar familias en Project Browser

#### FASE 4: Project Parameters
17. Crear parámetro: "Sistema HVAC" (texto)
18. Crear parámetro: "Zona Térmica" (texto)
19. Crear parámetro: "Caudal Diseño L/s" (número)
20. Crear parámetro: "Carga Térmica kW" (número)
21. Asignar parámetros a categorías correctas

#### FASE 5: Vistas y Organización
22. Crear vistas de planta para cada nivel
23. Crear vistas especializadas: Duct Plan, Pipe Plan
24. Crear vista 3D mecánico
25. Configurar templates de vistas
26. Crear sheets preliminares para documentación

#### FASE 6: Preparación para Diseño
27. Crear espacios (Rooms) en cada zona térmica
28. Asignar nombres y números a espacios
29. Configurar Room Schedules básicos
30. Preparar System Browser para futuros sistemas

### Entregables

1. **Archivo Revit completo (.rvt)**
   - Proyecto configurado profesionalmente
   - Todas las fases completadas

2. **Documento PDF de configuración (mínimo 8 páginas):**
   - Página 1: Carátula con datos del proyecto
   - Página 2: Settings de unidades y precisiones
   - Página 3: Levels y grids en elevación y planta
   - Página 4: Mechanical Settings (Duct y Pipe)
   - Página 5: Familias cargadas (tabla completa)
   - Página 6: Project Parameters creados
   - Página 7: Vistas especializadas creadas
   - Página 8: Espacios (Rooms) con nomenclatura

3. **Checklist de proyecto completado**

4. **Tabla de familias MEP** (Excel):
   - Nombre, categoría, tipos, tamaños, conectores

5. **Plano preliminar** mostrando:
   - Planta típica con grids
   - Zonas térmicas identificadas
   - Espacios con nombres
   - Leyendas básicas

### Criterios de Aprobación

#### Configuración (30%)
- Proyecto MEP correctamente iniciado
- Unidades métricas configuradas
- 5 niveles con alturas correctas
- Grids alineados profesionalmente

#### Mechanical Settings (25%)
- Duct Settings completo y correcto
- Pipe Settings completo
- Sizing methods apropiados
- Visual styles implementados

#### Familias y Organización (20%)
- Mínimo 20 familias MEP cargadas
- Organización profesional en Browser
- Todas familias con conectores verificados

#### Parameters y Preparación (15%)
- 4+ Project Parameters creados
- Asignación correcta a categorías
- Espacios (Rooms) creados y nombrados

#### Documentación (10%)
- PDF profesional y completo
- Todas las capturas de pantalla necesarias
- Tablas completas y precisas
- Checklist completado

### Tiempo Estimado
**6-8 horas de trabajo profesional**

---

## Ejercicio 6: Navegación Avanzada y Vistas Especializadas MEP

### Descripción
Dominar la navegación 3D optimizada para sistemas mecánicos y crear vistas especializadas que faciliten el diseño y coordinación de instalaciones HVAC.

### Proyecto Base
Usar el proyecto creado en Ejercicio 5 o cualquier proyecto MEP con sistemas básicos modelados.

### Tareas

#### Parte A: Navegación 3D Avanzada

1. **Section Box para sistemas:**
   - Activar Section Box en vista 3D
   - Aislar un piso específico
   - Aislar un sistema de ductos completo
   - Aislar zona técnica (cuarto de máquinas)
   - Capturar cada configuración

2. **Navegación con ViewCube:**
   - Usar ViewCube para vistas isométricas estándar
   - Crear vista inferior (Bottom) para ver ductos en cielo
   - Guardar orientaciones personalizadas
   - Configurar Home view

3. **Temporary Hide/Isolate:**
   - Aislar solo categoría "Air Terminals" (difusores)
   - Aislar solo categoría "Ducts"
   - Aislar solo categoría "Mechanical Equipment"
   - Ocultar temporalmente arquitectura
   - Documentar cada uso

4. **Reveal Hidden Elements:**
   - Ocultar elementos
   - Usar Reveal Hidden para restaurar
   - Documentar workflow

#### Parte B: Vistas Especializadas MEP

5. **Crear vista "Duct Plan":**
   - Duplicar planta como "Mechanical Plan"
   - Configurar Visibility/Graphics:
     - Mostrar solo ductos y difusores
     - Ocultar arquitectura decorativa
     - Mostrar grids y niveles
   - Configurar View Range para ver ductos en cielo
   - Aplicar View Template

6. **Crear vista "Equipment Plan":**
   - Duplicar planta
   - Mostrar solo equipos mecánicos
   - Configurar símbolos en planta
   - Agregar tags automáticos
   - Aplicar color scheme por tipo equipo

7. **Crear vista "System 3D":**
   - Duplicar vista 3D
   - Aislar un sistema HVAC completo
   - Configurar Graphic Display Options:
     - System color scheme
     - Show flow direction
   - Orientar isométricamente
   - Guardar como vista nombrada

8. **Crear vista "Coordination 3D":**
   - Duplicar vista 3D
   - Mostrar MEP + Arquitectura + Estructura
   - Configurar transparencias
   - Activar clash detection visual
   - Guardar orientación

9. **Crear secciones especializadas:**
   - Sección longitudinal mostrando ductos verticales
   - Sección transversal por cuarto de máquinas
   - Configurar Far Clip Offset
   - Anotar alturas libres

10. **Crear elevaciones de equipos:**
    - Elevación interior de cuarto de máquinas
    - Mostrar UMA y conexiones
    - Configurar Detail Level: Fine
    - Dimensionar alturas

#### Parte C: View Templates y Organización

11. **Crear View Templates:**
    - Template "MEP - Duct Plan"
    - Template "MEP - Equipment Only"
    - Template "MEP - 3D Systems"
    - Template "MEP - Coordination"
    - Configurar cada template con V/G correcto

12. **Aplicar templates a vistas existentes:**
    - Aplicar a todas las plantas
    - Verificar consistencia
    - Documentar diferencias

13. **Organizar Browser:**
    - Agrupar vistas por disciplina
    - Crear carpetas: Mechanical Plans, Mechanical 3D, Sections
    - Renombrar vistas profesionalmente
    - Aplicar numbering scheme

#### Parte D: Navegación con Filters

14. **Crear filtros MEP:**
    - Filter "Supply Ducts" (solo suministro)
    - Filter "Return Ducts" (solo retorno)
    - Filter "Large Ducts" (área > 0.5 m²)
    - Filter "High Velocity" (velocidad > 6 m/s)
    - Aplicar color overrides

15. **Aplicar filtros a vistas:**
    - Aplicar en plantas mecánicas
    - Verificar visualización por color
    - Crear leyenda de colores

### Entregables

1. **Archivo Revit con vistas especializadas:**
   - Mínimo 10 vistas diferentes creadas
   - View Templates aplicados
   - Browser organizado profesionalmente

2. **Documento PDF "Navegación MEP" (mínimo 10 páginas):**
   - Página 1: Carátula
   - Páginas 2-4: Navegación 3D (Section Box, ViewCube, Hide/Isolate)
   - Páginas 5-8: Vistas especializadas creadas (capturas + descripción)
   - Páginas 9-10: View Templates y filtros

3. **Video screencast (3-5 minutos):**
   - Demostración de navegación fluida
   - Cambio entre vistas especializadas
   - Uso de Section Box y Hide/Isolate
   - Aplicación de View Templates

4. **Checklist de vistas:**
   - Tabla listando todas las vistas creadas
   - View Template aplicado a cada una
   - Propósito de cada vista

### Criterios de Aprobación

- Mínimo 10 vistas especializadas creadas
- Navegación 3D fluida demostrada en video
- View Templates correctamente configurados
- Browser organizado profesionalmente
- Filtros MEP funcionando con color overrides
- Documentación completa y profesional
- Vistas tienen propósito claro (no redundantes)

### Tiempo Estimado
**4-5 horas**

---

## Rúbrica de Evaluación General - Módulo 1

### Criterios de Evaluación

| ASPECTO | EXCELENTE (5) | BUENO (4) | ACEPTABLE (3) |
|---------|---------------|-----------|---------------|
| **Configuración** | Proyecto configurado perfectamente, todas settings correctas, unidades precisas | Proyecto configurado bien, algunos ajustes menores necesarios | Proyecto funcional pero configuración incompleta |
| **Familias MEP** | 20+ familias cargadas, organizadas profesionalmente, todas verificadas | 15+ familias, organización aceptable | 10+ familias, organización básica |
| **Mechanical Settings** | Todos settings optimizados, justificados técnicamente | Settings correctos, justificación básica | Settings funcionales |
| **Navegación** | Dominio completo de navegación 3D, vistas especializadas profesionales | Navegación competente, vistas adecuadas | Navegación básica funcional |
| **Documentación** | Documentación excepcional, profesional, completa | Documentación buena, algunos detalles faltan | Documentación básica |
| **Profesionalismo** | Nomenclatura, organización, limpieza excepcional | Organización profesional | Organización aceptable |

### Ponderación por Ejercicio

- Ejercicio 1 (Interface): 10%
- Ejercicio 2 (Configuración): 15%
- Ejercicio 3 (Familias): 15%
- Ejercicio 4 (Settings): 20%
- Ejercicio 5 (Proyecto completo): 30%
- Ejercicio 6 (Navegación): 10%

### Nota Mínima Aprobatoria
**80/100** para avanzar a Módulo 2

---

**Tiempo total estimado módulo 1:** 25-35 horas (incluyendo ejercicios)
**Formato de entrega:** Archivos Revit + PDF + Videos según ejercicio
**Soporte:** Foro de estudiantes + instructor
**Recursos:** Familias MEP incluidas, plantillas, guías de referencia
