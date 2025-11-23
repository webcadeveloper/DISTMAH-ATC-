# Leccion 2: Configuracion de Proyecto y Plantillas

![Project Setup](../imagenes/leccion2-setup.png)

**Duracion:** 1 hora
**Dificultad:** Principiante

---

## Introduccion

La configuracion correcta de un proyecto en Revit es fundamental para el exito del modelado BIM. En esta leccion aprenderemos a crear proyectos nuevos, configurar unidades, trabajar con plantillas, y establecer los parametros esenciales que afectaran todo el ciclo de vida del proyecto.

---

## Crear Nuevo Proyecto

### Metodo 1: Proyecto en Blanco

`File > New > Project`

![New Project](../imagenes/leccion2-new-project.png)

**Opciones:**
- **Template file:** Seleccionar plantilla base
- **Create new:** Project / Template
- **OK:** Crear proyecto

**Plantillas predeterminadas:**
- `Architectural Template.rte` - Plantilla arquitectonica
- `Construction Template.rte` - Plantilla de construccion
- `Structural Analysis Template.rte` - Plantilla estructural

### Metodo 2: Desde Plantilla Personalizada

**Ubicacion de plantillas:**
```
C:\ProgramData\Autodesk\RVT 2026\Templates\
```

**Tipos de archivo:**
- `.rte` - Template (Plantilla)
- `.rvt` - Project (Proyecto)
- `.rfa` - Family (Familia)

---

## Configuracion de Unidades

`Manage > Settings > Project Units`

![Project Units](../imagenes/leccion2-units.png)

### Sistema Metrico (Recomendado para Latinoamerica)

**Longitud:**
- Format: Meters `m`
- Rounding: 0.01 m (centimetros)
- Unit symbol: m

**Area:**
- Format: Square Meters `m²`
- Rounding: 0.01 m²

**Volumen:**
- Format: Cubic Meters `m³`
- Rounding: 0.01 m³

**Angulos:**
- Format: Decimal degrees
- Rounding: 0.01°

### Sistema Imperial (USA)

**Longitud:**
- Format: Feet and fractional inches
- Rounding: 1/16"

**Area:**
- Format: Square Feet `ft²`

**Volumen:**
- Format: Cubic Feet `ft³`

### Configuracion Avanzada

**Click en "Format" para cada disciplina:**

| Disciplina | Unidades Comunes |
|------------|------------------|
| Length | m, mm, cm, ft, in |
| Area | m², ft² |
| Volume | m³, ft³ |
| Angle | Decimal degrees, Degrees/Minutes/Seconds |
| Slope | Percentage, Ratio |

---

## Informacion del Proyecto

`Manage > Settings > Project Information`

![Project Information](../imagenes/leccion2-info.png)

### Parametros Principales

**Datos del Proyecto:**
- **Organization Name:** Nombre de la empresa
- **Organization Description:** Descripcion
- **Building Name:** Nombre del edificio
- **Author:** Arquitecto/Disenador
- **Project Issue Date:** Fecha de emision
- **Project Status:** Estado (Preliminary, Construction, etc.)
- **Client Name:** Cliente
- **Project Address:** Direccion fisica
- **Project Name:** Nombre del proyecto
- **Project Number:** Numero de proyecto

### Parametros Personalizados

**Crear parametros adicionales:**
1. Click en "Edit" en Project Properties
2. Click "Add Parameter"
3. Definir nombre y tipo
4. Usar en caratulas y etiquetas

**Ejemplo de parametros utiles:**
- Numero de expediente
- Fase del proyecto
- Presupuesto
- Codigo catastral
- Zonificacion

---

## Ubicacion Geografica

`Manage > Project Location > Location`

![Location](../imagenes/leccion2-location.png)

### Configurar Ubicacion

**Opcion 1: Por ciudad**
1. Click en "Search" tab
2. Escribir ciudad (ej: "Buenos Aires, Argentina")
3. Seleccionar ubicacion
4. Click "OK"

**Opcion 2: Coordenadas exactas**
1. Tab "Site"
2. Ingresar Latitude (Latitud)
3. Ingresar Longitude (Longitud)
4. Time Zone: Seleccionar huso horario

**Importancia:**
- Analisis de soleamiento preciso
- Calculos energeticos correctos
- Orientacion solar para renders
- Cumplimiento de codigos locales

---

## True North vs Project North

![North](../imagenes/leccion2-north.png)

### Conceptos

**Project North:**
- Norte "virtual" del proyecto
- Usado para dibujar ortogonalmente
- Facilita modelado rectangular

**True North:**
- Norte geografico real
- Importante para analisis solar
- Necesario para cumplimiento normativo

### Configurar True North

`Manage > Project Location > Rotate True North`

**Pasos:**
1. Abrir vista de planta
2. Activar comando Rotate True North
3. Click en punto base
4. Rotar segun orientacion real
5. Ingresar angulo si se conoce

**Ejemplo:**
Si el edificio esta rotado 30° respecto al norte real, rotar True North 30°.

---

## Starting View

`Manage > Settings > Starting View`

![Starting View](../imagenes/leccion2-starting-view.png)

Define que vista se abre al cargar el proyecto:

**Opciones comunes:**
- Level 1 (planta baja)
- Vista 3D isometrica
- Sheet con portada
- Vista de conjunto

**Cambiar:**
1. Ir a `Manage > Starting View`
2. Seleccionar vista de lista desplegable
3. Click OK

---

## Crear Plantilla Personalizada

### Por que crear plantillas?

✅ **Estandarizacion:** Todos los proyectos con misma configuracion
✅ **Eficiencia:** No configurar cada proyecto desde cero
✅ **Calidad:** Parametros corporativos pre-establecidos
✅ **BIM Management:** Cumplir BEP (BIM Execution Plan)

### Elementos de una Buena Plantilla

**1. Configuraciones basicas:**
- Unidades correctas
- Informacion de proyecto
- Ubicacion predeterminada
- Niveles estandar

**2. Vistas preconfiguradas:**
- Plantas tipo
- Elevaciones
- Cortes
- Vistas 3D isometricas
- Sheets template

**3. Familias cargadas:**
- Puertas estandar
- Ventanas estandar
- Mobiliario basico
- Anotaciones

**4. Estilos configurados:**
- Line Styles
- Text Styles
- Dimension Styles
- Object Styles

**5. Parametros compartidos:**
- Parametros corporativos
- Clasificaciones
- Codigos de proyecto

---

## Paso a Paso: Crear Plantilla Corporativa

### Paso 1: Crear Proyecto Base

1. `File > New > Project`
2. Usar plantilla Architectural Template
3. Configurar todo segun estandares

### Paso 2: Configurar Unidades

1. `Manage > Project Units`
2. Configurar sistema metrico
3. Ajustar precision (0.01 m)

### Paso 3: Crear Niveles Estandar

```
Level RF +12.00 m    (Roof)
Level 3  +9.00 m
Level 2  +6.00 m
Level 1  +3.00 m
Level 0  +0.00 m     (Ground)
Level -1 -3.00 m     (Basement)
```

### Paso 4: Crear Vistas Tipo

**Plantas:**
- Level 0 - Floor Plan
- Level 1 - Floor Plan
- Level 2 - Floor Plan
- Level RF - Roof Plan

**Elevaciones:**
- North Elevation
- South Elevation
- East Elevation
- West Elevation

**Cortes:**
- Section AA
- Section BB

**3D:**
- 3D Isometric SW
- 3D Isometric NE

### Paso 5: Configurar View Templates

`View > View Templates`

Crear templates para:
- Working Plans (sin anotaciones)
- Presentation Plans (con anotaciones)
- Construction Documents
- Coordination Views

### Paso 6: Cargar Familias Estandar

`Insert > Load Family`

**Cargar:**
- Puertas corporativas
- Ventanas estandar
- Mobiliario basico
- Anotaciones personalizadas

### Paso 7: Configurar Dimension Styles

`Annotate > Dimension Styles`

**Crear estilos:**
- Cota arquitectonica
- Cota estructural
- Cota de detalle

### Paso 8: Guardar como Template

1. `File > Save As > Template`
2. Nombre: `Empresa_Arquitectura_2026.rte`
3. Guardar en:
```
C:\ProgramData\Autodesk\RVT 2026\Templates\[Empresa]\
```

### Paso 9: Establecer como Default

`File > Options > File Locations > Templates`

Definir ruta de plantilla predeterminada.

---

## Configuraciones de Rendimiento

`Manage > Settings > Performance`

![Performance](../imagenes/leccion2-performance.png)

### Hardware Acceleration

✅ **Enable hardware acceleration**
- Mejora rendimiento grafico
- Requiere GPU compatible

### Worksharing Display Modes

**Opciones:**
- Differentiate by worksets
- Differentiate by owners
- Differentiate by ownership status

### Graphics Settings

`File > Options > Graphics`

**Ajustes recomendados:**

| Setting | Valor Recomendado | Nota |
|---------|-------------------|------|
| Anti-aliasing | 4x | Balance calidad/rendimiento |
| Use hardware acceleration | ON | Si GPU compatible |
| Accelerated Graphics | ON | NUEVO 2026 |
| Ambient Shadows | ON | Mejor visualizacion |
| Beyond (clipping) | OFF | Mejor rendimiento |

---

## Browser Organization

`View > User Interface > Browser Organization`

![Browser](../imagenes/leccion2-browser.png)

### Organizar Project Browser

**Crear filtros por:**
- Disciplina (Arquitectura, Estructura, MEP)
- Fase (Existente, Demolicion, Nueva)
- Nivel
- Vista tipo

**Ejemplo de organizacion:**

```
📁 ARQUITECTURA
  📁 PLANTAS
    📄 Level 0 - Arquitectura
    📄 Level 1 - Arquitectura
  📁 ELEVACIONES
  📁 CORTES
📁 ESTRUCTURA
  📁 PLANTAS
    📄 Level 0 - Estructura
📁 COORDINACION
  📁 VISTAS 3D
```

---

## Object Styles

`Manage > Settings > Object Styles`

![Object Styles](../imagenes/leccion2-object-styles.png)

Define apariencia predeterminada de elementos:

**Pestanas:**
- **Model Objects:** Elementos del modelo
- **Annotation Objects:** Elementos de anotacion
- **Imported Objects:** CAD importado

**Propiedades configurables:**
- Line Weight (grosor de linea)
- Line Color (color)
- Line Pattern (patron: solido, punteado, etc.)
- Material (para renderizado)

**Elementos comunes:**

| Categoria | Line Weight | Color |
|-----------|-------------|-------|
| Walls | 5 | Black |
| Doors | 3 | Black |
| Windows | 3 | Black |
| Floors | 4 | Black |
| Roofs | 6 | Black |
| Grids | 1 | Blue |
| Levels | 2 | Blue |

---

## Line Styles

`Manage > Settings > Additional Settings > Line Styles`

![Line Styles](../imagenes/leccion2-linestyles.png)

Crear estilos de linea personalizados:

**Estilos utiles:**
- Demolicion (roja, punteada)
- Propiedad (amarilla)
- Limite de terreno (verde)
- Centro de muro (dash-dot)
- Oculto (gris, punteada)

**Crear nuevo:**
1. Click "New"
2. Nombre: ej. "DEMOLICION"
3. Weight: 3
4. Color: Red
5. Pattern: Dash

---

## Ejercicios Practicos

### Ejercicio 2.1: Proyecto desde Cero (20 min)

**Objetivo:** Configurar proyecto completo

**Pasos:**
1. Crear nuevo proyecto
2. Configurar unidades metricas
3. Establecer informacion de proyecto:
   - Nombre: "Edificio Residencial Villa Nueva"
   - Cliente: "Constructora XYZ"
   - Direccion: Tu ciudad
4. Configurar ubicacion geografica
5. Configurar True North (30° respecto a Project North)
6. Establecer Starting View (Level 1)

### Ejercicio 2.2: Plantilla Corporativa (30 min)

**Objetivo:** Crear plantilla personalizada completa

**Incluir:**
1. Unidades metricas (m, m², m³)
2. Niveles: -1, 0, 1, 2, RF (3m entre niveles)
3. Vistas: Plantas, Elevaciones 4 lados, 2 Cortes, 2 vistas 3D
4. Cargar 3 familias de puertas
5. Cargar 3 familias de ventanas
6. Configurar Object Styles
7. Crear 2 Line Styles personalizados
8. Guardar como `.rte`

### Ejercicio 2.3: Configuracion de Rendimiento (10 min)

**Objetivo:** Optimizar Revit para tu hardware

**Tareas:**
1. Activar Hardware Acceleration
2. Activar Accelerated Graphics (si compatible)
3. Configurar Anti-aliasing 4x
4. Probar rendimiento con modelo grande
5. Ajustar segun resultados

---

## Tips y Mejores Practicas

### Plantillas

✅ **Crear plantillas por tipo de proyecto:** Residencial, Comercial, Industrial
✅ **Mantener plantillas actualizadas:** Revisar anualmente
✅ **Versionar plantillas:** Empresa_Arq_2026_v1.0.rte
✅ **Documentar plantillas:** README con contenido y configuracion
✅ **Compartir en servidor:** Acceso centralizado para todo el equipo

### Configuracion de Proyecto

✅ **Definir unidades ANTES de modelar:** Cambiar despues es problematico
✅ **Establecer ubicacion geografica temprano:** Afecta analisis
✅ **Usar Project Information completa:** Automatiza caratulas
✅ **Configurar True North correctamente:** Esencial para soleamiento

### Rendimiento

✅ **Activar Accelerated Graphics** si tu GPU lo soporta
✅ **Cerrar vistas no utilizadas** para liberar RAM
✅ **Usar View Templates** para estandarizar configuraciones
✅ **Purge unused** regularmente

---

## Atajos de Teclado

| Atajo | Comando |
|-------|---------|
| `Ctrl + N` | New Project |
| `Ctrl + S` | Save |
| `Ctrl + Shift + S` | Save As |
| `F1` | Help |

---

## Recursos Complementarios

### Archivos de Practica

- `M1L2_Proyecto-Base.rvt`
- `M1L2_Plantilla-Ejemplo.rte`
- `M1L2_Configuracion-Corporativa.txt`

### Plantillas de Ejemplo

- Autodesk Architectural Template
- Plantilla Metrica Basica
- Plantilla con View Templates

---

## Evaluacion

### Preguntas

1. Cual es la diferencia entre archivo .rvt y .rte?
2. Como se configura True North?
3. Para que sirve Project Information?
4. Que ventajas tiene usar plantillas?
5. Como se activa Hardware Acceleration?

### Tarea

**Crear plantilla corporativa completa** con:
- Configuracion de unidades
- Niveles estandar
- Vistas preconfiguradas
- Object Styles personalizados
- Line Styles corporativos

---

## Navegacion

[← Leccion 1](./leccion-1-interfaz-navegacion.md) | [Volver al Modulo](../README.md) | [Leccion 3 →](./leccion-3-vistas-visualizacion.md)

---

## Resumen

✅ Sabes crear proyectos nuevos y desde plantillas
✅ Comprendes configuracion de unidades
✅ Conoces Project Information y su importancia
✅ Puedes configurar ubicacion geografica
✅ Entiendes True North vs Project North
✅ Sabes crear plantillas personalizadas completas

**Proxima leccion:** Sistema de Vistas y Visualizacion

---

**Tiempo:** 1 hora
**Dificultad:** ⭐⭐ Principiante-Intermedio
**Importancia:** ⭐⭐⭐⭐⭐ Fundamental
