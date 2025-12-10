# Ejercicios Practicos - Modulo 1

![Ejercicios Modulo 1](./imagenes/ejercicios-modulo1.png)

**Modulo:** Introduccion a Revit Architecture 2026
**Total de Ejercicios:** 8
**Tiempo estimado:** 3-4 horas

---

## Indice de Ejercicios

1. [Ejercicio 1: Configuracion Inicial y Accelerated Graphics](#ejercicio-1)
2. [Ejercicio 2: Creacion de Plantilla Corporativa](#ejercicio-2)
3. [Ejercicio 3: Sistema Completo de Vistas](#ejercicio-3)
4. [Ejercicio 4: View Templates y Visibility Graphics](#ejercicio-4)
5. [Ejercicio 5: Sistema de Niveles y Grillas](#ejercicio-5)
6. [Ejercicio 6: Herramientas de Modificacion](#ejercicio-6)
7. [Ejercicio 7: Proyecto Integrador - Configuracion Completa](#ejercicio-7)
8. [Ejercicio 8: Evaluacion Final del Modulo](#ejercicio-8)

---

<a name="ejercicio-1"></a>
## Ejercicio 1: Configuracion Inicial y Accelerated Graphics

**Tiempo:** 30 minutos
**Dificultad:** ⭐ Principiante
**Archivo base:** Nuevo proyecto

### Objetivos

- Configurar Revit 2026 para uso optimo
- Activar y probar Accelerated Graphics
- Personalizar espacio de trabajo
- Dominar navegacion 3D

### Instrucciones

#### Parte A: Configuracion Inicial (15 min)

1. **Abrir Revit 2026**
   - Crear nuevo proyecto (Architectural Template)

2. **Configurar Preferencias**
   - `File > Options`
   - Ir a **Graphics**:
     - Use hardware acceleration: ✓
     - Use Accelerated Graphics (Tech Preview): ✓
     - Anti-aliasing: 4x
     - Colors: Ajustar colores de fondo (blanco o negro segun preferencia)
   - Ir a **User Interface**:
     - Tooltips: ✓ Enable
     - ViewCube: Configurar a gusto
   - Ir a **File Locations**:
     - Default path: Configurar carpeta de proyectos
     - Templates: Configurar carpeta de plantillas

3. **Personalizar Quick Access Toolbar**
   - Agregar herramientas frecuentes:
     - Zoom to Fit
     - 3D View
     - Visibility/Graphics
     - Measure
     - Thin Lines
   - Orden logico de izquierda a derecha

4. **Reiniciar Revit** para aplicar Accelerated Graphics

#### Parte B: Prueba de Accelerated Graphics (10 min)

1. **Cargar modelo de prueba**
   - Archivo: `M1E1_Modelo-Grande.rvt` (descargable)
   - O crear modelo basico con multiples elementos

2. **Prueba de rendimiento**
   - Abrir vista 3D
   - Navegacion con Shift + Rueda del mouse
   - Rotar 360° observando fluidez
   - Zoom in/out multiple veces
   - Usar ViewCube para cambios rapidos

3. **Comparacion (opcional)**
   - Desactivar Accelerated Graphics
   - Repetir navegacion
   - Notar diferencia de rendimiento
   - Reactivar Accelerated Graphics

#### Parte C: Personalizacion de Atajos (5 min)

1. **Configurar atajos personalizados**
   - `View > User Interface > Keyboard Shortcuts`
   - Revisar atajos principales:
     - ZF, ZA, ZR (Zoom)
     - VV/VG (Visibility)
     - MV, CO, RO, MI (Modificacion)
   - Crear 2 atajos personalizados adicionales

### Entregables

- Screenshot de Options > Graphics mostrando configuracion
- Screenshot de Quick Access Toolbar personalizado
- Reporte breve (2-3 lineas) sobre mejora con Accelerated Graphics

### Criterios de Evaluacion

- ✓ Accelerated Graphics activado correctamente
- ✓ Quick Access Toolbar personalizado
- ✓ Navegacion fluida en 3D
- ✓ Comprension de beneficios de optimizacion

---

<a name="ejercicio-2"></a>
## Ejercicio 2: Creacion de Plantilla Corporativa

**Tiempo:** 45 minutos
**Dificultad:** ⭐⭐ Intermedio
**Archivo base:** Nuevo proyecto

### Objetivos

- Crear plantilla profesional completa
- Configurar parametros estandar
- Establecer vistas y configuraciones base
- Guardar como archivo .rte

### Instrucciones

#### Parte A: Configuracion Base (10 min)

1. **Crear nuevo proyecto**
   - Template: Architectural Template

2. **Configurar unidades**
   - `Manage > Project Units`
   - Sistema metrico:
     - Length: Meters (m) - Rounding: 0.01m
     - Area: Square Meters (m²) - Rounding: 0.01m²
     - Volume: Cubic Meters (m³) - Rounding: 0.01m³
     - Angle: Decimal degrees - Rounding: 0.01°

3. **Project Information**
   - `Manage > Project Information`
   - Organization Name: [Tu empresa/nombre]
   - Author: [Tu nombre]
   - Project Status: Template

#### Parte B: Sistema de Niveles (10 min)

**Crear niveles estandar:**

```
Level RF  +12.00m  (Techo)
Level 3   +9.00m   (Piso 3)
Level 2   +6.00m   (Piso 2)
Level 1   +3.00m   (Piso 1)
Level 0   +0.00m   (Planta Baja)
Level -1  -3.00m   (Sotano)
```

**Metodo:**
1. Abrir elevacion
2. Crear Level 0 a 0.00m
3. Array 4 niveles hacia arriba, cada 3000mm (Levels 1, 2, 3, RF)
4. Copiar Level 0 hacia abajo 3000mm (Level -1)
5. Renombrar todos correctamente
6. Configurar propiedades:
   - Levels 0,1,2,3: Building Story ✓, Structural ✓
   - Level -1: Structural ✓
   - Level RF: (solo techo)

#### Parte C: Vistas Preconfiguradas (15 min)

**Crear vistas estandar:**

**Plantas:**
- Level -1 - Floor Plan
- Level 0 - Floor Plan
- Level 1 - Floor Plan
- Level 2 - Floor Plan
- Level 3 - Floor Plan
- Level RF - Roof Plan

**Elevaciones:**
- North Elevation
- South Elevation
- East Elevation
- West Elevation

**Cortes:**
- Section AA (longitudinal)
- Section BB (transversal)

**Vistas 3D:**
- 3D Isometric SW
- 3D Isometric NE

**Organizacion en Browser:**
- Crear carpetas por tipo
- Nomenclatura consistente

#### Parte D: Object Styles (5 min)

1. **Configurar Object Styles**
   - `Manage > Object Styles`

2. **Ajustar categorias principales:**

| Categoria | Line Weight | Color | Notas |
|-----------|-------------|-------|-------|
| Walls | 5 | Black | Muros |
| Doors | 3 | Black | Puertas |
| Windows | 3 | Black | Ventanas |
| Floors | 4 | Black | Pisos |
| Roofs | 6 | Black | Techos |
| Grids | 1 | Blue | Grillas |
| Levels | 2 | Blue | Niveles |
| Furniture | 2 | Gray | Mobiliario |

#### Parte E: Line Styles (5 min)

**Crear Line Styles personalizados:**

`Manage > Additional Settings > Line Styles`

1. **DEMOLICION**
   - Weight: 3
   - Color: Red
   - Pattern: Dash

2. **PROPIEDAD**
   - Weight: 2
   - Color: Yellow
   - Pattern: Dash-Dot

3. **OCULTO**
   - Weight: 1
   - Color: Gray
   - Pattern: Dot

#### Parte F: Guardar Plantilla (5 min)

1. **Purge Unused**
   - `Manage > Purge Unused`
   - Eliminar elementos no utilizados

2. **Save as Template**
   - `File > Save As > Template`
   - Nombre: `[TuNombre]_Arquitectura_2026.rte`
   - Ubicacion: Carpeta de plantillas

### Entregables

- Archivo .rte de plantilla
- Screenshot de Browser Organization mostrando todas las vistas
- Screenshot de Object Styles configurados
- Documento breve (5 lineas) explicando configuraciones aplicadas

### Criterios de Evaluacion

- ✓ Unidades metricas correctas
- ✓ Sistema de niveles completo
- ✓ Todas las vistas creadas
- ✓ Object Styles y Line Styles configurados
- ✓ Archivo guardado como .rte

---

<a name="ejercicio-3"></a>
## Ejercicio 3: Sistema Completo de Vistas

**Tiempo:** 40 minutos
**Dificultad:** ⭐⭐ Intermedio
**Archivo base:** Plantilla del Ejercicio 2

### Objetivos

- Dominar creacion de vistas
- Configurar View Range
- Trabajar con duplicacion de vistas
- Usar Crop Region y Section Box

### Instrucciones

#### Parte A: Floor Plans con View Range (15 min)

**Para Level 1:**

1. **Abrir Level 1 Floor Plan**

2. **Configurar View Range**
   - Properties > View Range > Edit
   - Top:
     - Level: Level 2
     - Offset: 0mm
   - Cut Plane:
     - Level: Level 1
     - Offset: 1200mm
   - Bottom:
     - Level: Level 1
     - Offset: 0mm
   - View Depth:
     - Level: Level 0
     - Offset: 0mm

3. **Crear elementos de prueba**
   - Crear muro de 3m altura (Level 1 a Level 2)
   - Colocar puerta a 0mm altura (se debe ver en planta)
   - Colocar ventana a 1000mm altura (se debe ver en planta)
   - Colocar ventana a 1500mm altura (NO se debe ver - arriba de cut plane)
   - Verificar visualizacion correcta

4. **Replicar para otros niveles**
   - Configurar View Range similar para Level 0, 2, 3

#### Parte B: Elevations y Sections (10 min)

**Crear elevaciones adicionales:**

1. **Interior Elevations**
   - Colocar 4 elevaciones interiores en habitacion
   - Nomenclatura: "INT - Room 01 - North", etc.

2. **Building Sections**
   - Section AA: Longitudinal (atravesando edificio completo)
   - Section BB: Transversal
   - Ajustar Far Clip para mostrar profundidad adecuada

**Configurar secciones:**
- Detail Level: Medium
- Ajustar Crop Region para enmarcar bien
- Extender lineas de seccion en plantas

#### Parte C: Duplicacion de Vistas (15 min)

**Para Level 1:**

1. **Duplicate (sin anotaciones)**
   - Click derecho > Duplicate View
   - Renombrar: "Level 1 - ESTRUCTURA"
   - Configurar para mostrar solo elementos estructurales

2. **Duplicate with Detailing**
   - Agregar cotas y anotaciones a Level 1 original
   - Click derecho > Duplicate View > Duplicate with Detailing
   - Renombrar: "Level 1 - PRESENTACION"
   - Verificar que cotas se copiaron

3. **Duplicate as Dependent**
   - Click derecho > Duplicate View > Duplicate as Dependent
   - Crear 2 vistas dependientes:
     - "Level 1 - Sector Norte"
     - "Level 1 - Sector Sur"
   - Ajustar Crop Region de cada una para mostrar solo su sector
   - Verificar que cambios en padre afectan hijas

### Entregables

- Archivo .rvt con todas las vistas creadas
- Screenshot de View Range configurado
- Screenshot de Browser mostrando vistas duplicadas (padre e hijas)
- Explicacion breve (3 lineas) de diferencias entre tipos de duplicacion

### Criterios de Evaluacion

- ✓ View Range configurado correctamente
- ✓ Elevaciones y secciones creadas
- ✓ 3 tipos de duplicacion realizados y comprendidos
- ✓ Vistas dependientes funcionando correctamente

---

<a name="ejercicio-4"></a>
## Ejercicio 4: View Templates y Visibility Graphics

**Tiempo:** 40 minutos
**Dificultad:** ⭐⭐ Intermedio
**Archivo base:** Continuar Ejercicio 3

### Objetivos

- Crear View Templates profesionales
- Dominar Visibility/Graphics Overrides
- Aplicar templates a multiples vistas
- Usar filtros visuales

### Instrucciones

#### Parte A: Crear View Templates (20 min)

**Template 1: Working Plan**

1. **Configurar vista base**
   - Abrir Level 1
   - Visual Style: Hidden Line
   - Detail Level: Medium
   - Scale: 1:100
   - VG: Ocultar todas las anotaciones (Dimensions, Text, Tags)

2. **Crear template**
   - Click derecho en vista > Create View Template from View
   - Nombre: "WORKING PLAN - 1:100"
   - Seleccionar parametros:
     - ✓ View Scale
     - ✓ Detail Level
     - ✓ Visual Style
     - ✓ Visibility
     - ✓ Model Display

**Template 2: Presentation Plan**

1. **Configurar vista**
   - Duplicar Level 1
   - Visual Style: Shaded
   - Detail Level: Fine
   - Scale: 1:50
   - VG: Mostrar todas las anotaciones
   - Graphics Display Options:
     - Ambient Shadows: ON
     - Smooth lines: ON

2. **Crear template**
   - Nombre: "PRESENTATION PLAN - 1:50"

**Template 3: Coordination 3D**

1. **Configurar vista 3D**
   - Visual Style: Shaded
   - Detail Level: Coarse
   - Section Box: ON (ajustado para mostrar interior)
   - VG: Ocultar anotaciones

2. **Crear template**
   - Nombre: "COORDINATION 3D"

#### Parte B: Visibility/Graphics Overrides (15 min)

**En vista Level 1:**

1. **Override de categoria**
   - `VG`
   - Walls > Projection Lines > Override
     - Color: Blue
     - Weight: 6
   - Aplicar

2. **Halftone de mobiliario**
   - VG > Furniture
   - Halftone: ✓
   - Aplicar
   - Mobiliario aparece en gris tenue

3. **Ocultar categorias**
   - VG > Plumbing Fixtures: Ocultar ☐
   - VG > Electrical Fixtures: Ocultar ☐

4. **Override de elementos especificos**
   - Seleccionar un muro especifico
   - View > Graphics > Override by Element
   - Projection Lines > Color: Red
   - Solo ese muro en rojo

#### Parte C: Aplicar Templates (5 min)

**Aplicar templates a vistas:**

1. **Working Plan template:**
   - Aplicar a: Level 0, Level 2, Level 3

2. **Presentation Plan template:**
   - Aplicar a: Level 1 - PRESENTACION

3. **Coordination 3D template:**
   - Aplicar a: 3D Isometric SW

**Verificar que todas las vistas adoptan configuraciones del template**

### Entregables

- 3 View Templates creados
- Screenshot de Visibility/Graphics mostrando overrides
- Screenshot de Browser mostrando templates aplicados
- Comparacion visual (screenshots) de vista con Working vs Presentation template

### Criterios de Evaluacion

- ✓ 3 templates creados correctamente
- ✓ VG overrides aplicados
- ✓ Templates aplicados a multiples vistas
- ✓ Comprension de diferencias visuales entre templates

---

<a name="ejercicio-5"></a>
## Ejercicio 5: Sistema de Niveles y Grillas

**Tiempo:** 40 minutos
**Dificultad:** ⭐⭐ Intermedio
**Archivo base:** Nuevo proyecto

### Objetivos

- Crear sistema profesional de niveles
- Implementar grillas estructurales
- Comprender vinculos de elementos con niveles
- Usar Scope Box para organizacion

### Instrucciones

#### Parte A: Sistema de Niveles Complejo (20 min)

**Edificio de usos mixtos:**

**Sotanos:**
- Level -2 (Estacionamiento): -6.00m
- Level -1 (Estacionamiento): -3.00m

**Comercial:**
- Level 0 (Comercio): +0.00m
- Level 1 (Comercio): +4.50m (altura mayor por local comercial)

**Residencial:**
- Level 2 (Residencial): +9.00m
- Level 3: +12.00m
- Level 4: +15.00m
- Level 5: +18.00m
- Level 6: +21.00m

**Tecnico:**
- Level Mech (Cuarto de maquinas): +24.00m
- Level RF (Techo): +27.00m

**Configurar propiedades:**
1. Todos los niveles excepto Mech y RF: Building Story ✓
2. Level -2 a Level 6: Structural ✓
3. Level Mech: Solo structural

**Crear vistas:**
- Floor Plans para todos los niveles habitables
- NO crear plan para Level Mech (usar 3D para ese nivel)

#### Parte B: Sistema de Grillas (15 min)

**Grillas estructurales:**

**Horizontales (cada 7 metros):**
- A, B, C, D, E (5 grillas)

**Verticales (cada 6 metros):**
- 1, 2, 3, 4 (4 grillas)

**Metodo:**
1. Crear grilla A horizontal
2. Array 5 grillas, 7000mm
3. Renombrar A, B, C, D, E
4. Crear grilla 1 vertical
5. Array 4 grillas, 6000mm
6. Renombrar 1, 2, 3, 4

**Subgrillas (opcionales):**
- Entre A y B: A.1 (a 3.5m de A)
- Entre 1 y 2: 1.1 (a 3m de 1)

**Propagacion:**
- Extender grillas en todas las plantas
- Extend grillas 2m mas alla de intersecciones exteriores
- Burbujas visibles en extremos opuestos

#### Parte C: Prueba de Vinculos (5 min)

**Crear elementos vinculados:**

1. **Muro vinculado a niveles**
   - Crear muro en Level 0
   - Properties:
     - Base Constraint: Level 0
     - Top Constraint: Level 1

2. **Modificar nivel**
   - Cambiar Level 1 de +4.50m a +5.00m
   - Verificar que muro crece automaticamente

3. **Restablecer**
   - Volver Level 1 a +4.50m

### Entregables

- Archivo .rvt con sistema completo
- Screenshot de elevacion mostrando todos los niveles
- Screenshot de planta mostrando grillas completas
- Tabla de niveles con alturas y propiedades

### Criterios de Evaluacion

- ✓ Todos los niveles creados con alturas correctas
- ✓ Sistema de grillas completo
- ✓ Nomenclatura correcta
- ✓ Comprension de vinculos demostrada

---

<a name="ejercicio-6"></a>
## Ejercicio 6: Herramientas de Modificacion

**Tiempo:** 30 minutos
**Dificultad:** ⭐ Principiante
**Archivo base:** Archivo con elementos basicos

### Objetivos

- Dominar herramientas de transformacion
- Practicar herramientas de edicion
- Usar arrays lineales y radiales
- Comprender Type vs Instance properties

### Instrucciones

#### Parte A: Transformaciones Basicas (10 min)

**Crear escenario base:**
1. Crear habitacion rectangular (4 muros)
2. Colocar puerta
3. Colocar 2 ventanas

**Practicar:**

1. **Move (MV)**
   - Mover puerta 500mm a la derecha
   - Mover ventana exactamente a centro de muro (usar snaps)

2. **Copy (CO)**
   - Copiar habitacion completa 8m a la derecha
   - Usar Multiple para copiar ventana 3 veces cada 1.5m

3. **Rotate (RO)**
   - Rotar habitacion derecha 45°
   - Copiar y rotar 90° simultaneamente

4. **Mirror (MI)**
   - Reflejar habitacion sobre eje de grilla central
   - Usar Copy para mantener original

#### Parte B: Arrays (10 min)

**Linear Array:**

1. **Columnas en linea**
   - Crear columna en A-1
   - Array 5 columnas cada 6m horizontalmente
   - Array resultante hacia arriba 4 filas cada 6m

2. **Ventanas uniformes**
   - Crear ventana
   - Array 8 ventanas cada 1.5m

**Radial Array:**

1. **Columnas circulares**
   - Crear columna
   - Array radial 16 columnas en 360°
   - Radio: 10m

2. **Mobiliario en mesa redonda**
   - Crear silla
   - Array radial 8 sillas alrededor de punto central
   - Radio: 2m

#### Parte C: Edicion Avanzada (10 min)

**Align (AL):**
1. Crear 5 ventanas desalineadas
2. Alinear todas con primera ventana
3. Lock la alineacion (candado)
4. Mover ventana maestra, verificar que otras siguen

**Trim/Extend (TR):**
1. Crear 2 muros que no se intersectan
2. Trim ambos hasta interseccion
3. Crear esquina perfecta

**Offset (OF):**
1. Crear muro perimetral
2. Offset 200mm hacia interior (muro de tabiqueria)
3. Offset grilla 3m para crear subgrilla

### Entregables

- Archivo .rvt con ejercicios completados
- Screenshot de array lineal de columnas
- Screenshot de array radial
- Breve explicacion (2-3 lineas) de uso de cada herramienta

### Criterios de Evaluacion

- ✓ Todas las herramientas utilizadas correctamente
- ✓ Arrays lineales y radiales funcionales
- ✓ Precision en movimientos y copias
- ✓ Uso de Lock en Align

---

<a name="ejercicio-7"></a>
## Ejercicio 7: Proyecto Integrador - Configuracion Completa

**Tiempo:** 60 minutos
**Dificultad:** ⭐⭐⭐ Avanzado
**Archivo base:** Nuevo proyecto desde tu plantilla

### Objetivos

- Integrar todos los conocimientos del modulo
- Crear proyecto completo desde configuracion
- Aplicar mejores practicas
- Preparar base para modelado (Modulo 2)

### Proyecto

**Edificio de Oficinas - 4 pisos**

**Descripcion:**
- Sotano: Estacionamiento
- Planta Baja: Lobby y comercio
- Pisos 1-2: Oficinas
- Piso 3: Area administrativa
- Roof: Equipos

**Dimensiones:**
- Planta: 24m x 18m
- Grillas: 6m x 6m
- Altura entrepiso: 3.50m

### Instrucciones

#### Fase 1: Configuracion de Proyecto (15 min)

1. **Crear proyecto desde plantilla**
   - Usar plantilla del Ejercicio 2

2. **Project Information**
   - Building Name: "Edificio Corporativo XYZ"
   - Project Number: "2026-001"
   - Client Name: [Inventar cliente]
   - Project Address: [Tu ciudad]
   - Author: [Tu nombre]
   - Project Issue Date: Fecha actual

3. **Ubicacion geografica**
   - Configurar ciudad real
   - Establecer True North (rotar 15° respecto a Project North)

4. **Starting View**
   - Configurar: Level 0 - Floor Plan

#### Fase 2: Niveles (10 min)

**Crear niveles:**
```
Level RF   +14.00m  (Techo)
Level 3    +10.50m  (Piso 3 - Admin)
Level 2    +7.00m   (Piso 2 - Oficinas)
Level 1    +3.50m   (Piso 1 - Oficinas)
Level 0    +0.00m   (Lobby)
Level -1   -3.50m   (Estacionamiento)
```

**Configurar:**
- Building Story: -1, 0, 1, 2, 3
- Structural: -1, 0, 1, 2, 3

#### Fase 3: Grillas (10 min)

**Sistema 4x3:**

**Horizontales:**
- A, B, C, D (cada 6m)

**Verticales:**
- 1, 2, 3, 4 (cada 6m)

**Verificar:**
- Dimensiones totales: 24m x 18m
- Grillas centradas
- Burbujas visibles en plantas

#### Fase 4: Vistas (15 min)

**Crear y configurar:**

**Floor Plans:**
- Todos los niveles (-1 a 3, RF)
- Configurar View Range apropiado

**Elevations:**
- North, South, East, West
- Renombrar segun orientacion real (considerando True North)

**Sections:**
- Section AA (longitudinal, atravesando grillas 2-3)
- Section BB (transversal, atravesando grillas B-C)

**3D Views:**
- 3D - Exterior SW
- 3D - Exterior NE
- 3D - Interior (con Section Box mostrando corte)

#### Fase 5: View Templates (10 min)

**Crear y aplicar 3 templates:**

1. **WORKING - Oficinas**
   - Para modelado diario
   - Hidden Line, Medium, 1:100
   - Sin anotaciones

2. **COORDINATION - Plantas**
   - Para coordinacion
   - Shaded, Coarse, 1:200
   - Mostrar grillas y niveles

3. **PRESENTATION - 3D**
   - Para presentacion cliente
   - Realistic, Fine
   - Shadows ON
   - Ambient shadows ON

**Aplicar a vistas correspondientes**

### Entregables

- Archivo .rvt completo
- PDF con:
  - Portada (Project Information)
  - Planta Level 0 con grillas
  - Elevacion mostrando niveles
  - Seccion AA
  - Vista 3D isometrica
- Reporte de configuraciones aplicadas (1 pagina)

### Criterios de Evaluacion

- ✓ Project Information completa (20 pts)
- ✓ Sistema de niveles correcto (20 pts)
- ✓ Sistema de grillas correcto (20 pts)
- ✓ Todas las vistas creadas (20 pts)
- ✓ View Templates aplicados (10 pts)
- ✓ Calidad de documentacion (10 pts)

**Total: 100 puntos - Aprobar con 70+**

---

<a name="ejercicio-8"></a>
## Ejercicio 8: Evaluacion Final del Modulo

**Tiempo:** 30 minutos
**Dificultad:** ⭐⭐ Evaluacion
**Formato:** Quiz + Practica

### Parte A: Quiz Teorico (15 min - 50 puntos)

**Responder:**

1. **Accelerated Graphics** (10 pts)
   - Que es y que beneficios aporta?
   - Requisitos para usarlo?
   - Como se activa?

2. **Vistas en Revit** (10 pts)
   - Diferencia entre Floor Plan y Ceiling Plan
   - Que es View Range y sus 4 parametros principales
   - Explicar 3 tipos de duplicacion de vistas

3. **Niveles y Grillas** (10 pts)
   - Que es un nivel en Revit?
   - Diferencia entre Base Constraint y Top Constraint
   - Nomenclatura estandar de grillas

4. **View Templates** (10 pts)
   - Para que sirven?
   - Que configuraciones guardan?
   - Ventajas de usar templates

5. **Type vs Instance** (10 pts)
   - Explicar diferencia con ejemplo
   - Que sucede al modificar Type Property?
   - Que sucede al modificar Instance Property?

### Parte B: Ejercicio Practico (15 min - 50 puntos)

**Tarea:**
Configurar proyecto completo en 15 minutos

**Requisitos:**
1. Crear 5 niveles (0, 1, 2, 3, RF) cada 3m
2. Crear grillas 3x3 (A,B,C / 1,2,3) cada 6m
3. Crear Floor Plans para niveles 0,1,2,3
4. Crear 4 elevaciones
5. Crear 1 seccion
6. Crear 1 View Template "WORKING"
7. Aplicar template a Level 0
8. Configurar View Range de Level 0

**Puntuacion:**
- Niveles correctos: 10 pts
- Grillas correctas: 10 pts
- Vistas creadas: 10 pts
- View Template: 10 pts
- View Range: 10 pts

### Criterios de Aprobacion

**Puntuacion total: 100 puntos**
- **Excelente:** 90-100 pts
- **Muy Bien:** 80-89 pts
- **Bien (Aprobar):** 70-79 pts
- **Insuficiente:** <70 pts (repasar modulo)

---

## Recursos Adicionales

### Archivos de Practica

Todos disponibles en carpeta del curso:

- `M1E1_Modelo-Grande.rvt` - Para prueba Accelerated Graphics
- `M1E3_Base-Vistas.rvt` - Base para ejercicio vistas
- `M1E6_Elementos-Basicos.rvt` - Elementos para practicar modificacion
- `M1E7_Referencia.pdf` - Planos de referencia edificio oficinas

### Checklist de Aprendizaje

Antes de pasar al Modulo 2, verificar:

- [ ] Revit 2026 configurado y optimizado
- [ ] Accelerated Graphics activado y probado
- [ ] Dominio de navegacion 3D
- [ ] Creacion de plantillas .rte
- [ ] Comprension de tipos de vistas
- [ ] Configuracion de View Range
- [ ] Uso de View Templates
- [ ] Creacion de niveles y grillas
- [ ] Dominio de herramientas de modificacion
- [ ] Comprension de Type vs Instance

---

## Soporte

**Dudas o problemas:**
- Foro del curso
- Email instructor
- Sesion de consultas grupal (semanal)

**Entrega de ejercicios:**
- Plataforma del curso
- Fecha limite: [Definir]

---

**Felicitaciones por completar el Modulo 1!**

Ahora estas listo para comenzar el modelado arquitectonico en el **Modulo 2: Modelado de Elementos Arquitectonicos Basicos**.

[← Volver al Modulo 1](./README.md) | [Siguiente: Modulo 2 →](../modulo-2-elementos-basicos/README.md)
