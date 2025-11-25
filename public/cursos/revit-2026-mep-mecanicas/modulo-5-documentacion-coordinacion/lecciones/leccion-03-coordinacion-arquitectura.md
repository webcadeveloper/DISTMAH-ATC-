# Lección 3: Coordinación con Arquitectura

## Introducción

La **coordinación multidisciplinaria** es fundamental en proyectos BIM. Los sistemas MEP deben integrarse perfectamente con arquitectura y estructura, respetando espacios, niveles, rejillas y aberturas. Revit MEP 2026 ofrece herramientas especializadas para **vincular modelos**, **copiar/monitorear elementos** entre disciplinas, y **recibir notificaciones automáticas** cuando elementos coordinados cambian.

Esta lección cubre el flujo de trabajo completo de coordinación MEP-Arquitectura mediante **Manage Links**, **Copy/Monitor**, **Coordination Review** y mejores prácticas para proyectos colaborativos.

## Flujo de Trabajo de Coordinación

### Modelo Central vs. Vínculos (Links)

**Dos enfoques principales:**

#### 1. Modelo Central Único (No recomendado para MEP)

Todas las disciplinas trabajan en el **mismo archivo .rvt**.

**Desventajas:**
- Archivo extremadamente pesado (>500 MB común)
- Conflictos de worksharing (múltiples usuarios editando)
- Difícil aislar disciplinas para entrega parcial

#### 2. Modelos Vinculados (Recomendado)

Cada disciplina tiene su **propio archivo .rvt**, vinculados como **links**.

**Estructura típica:**
```
Proyecto_ARQ.rvt      (Arquitectura - modelo central)
Proyecto_MEP_M.rvt    (Mecánicas - vincula ARQ)
Proyecto_MEP_E.rvt    (Eléctricas - vincula ARQ)
Proyecto_MEP_S.rvt    (Sanitarias - vincula ARQ)
Proyecto_STR.rvt      (Estructura - vincula ARQ)
```

**Ventajas:**
- Archivos ligeros y manejables
- Equipos trabajan independientemente
- Fácil actualización de vínculos
- Control granular de visibilidad

## Vincular Modelo de Arquitectura

### Procedimiento Paso a Paso

**Paso 1: Abrir Modelo MEP**

Abrir archivo de mecánicas: `Proyecto_MEP_M.rvt`

**Paso 2: Insertar Link de Arquitectura**

1. **Insert** → **Link Revit**
2. **Link Revit** dialog:
   - Navegar a: `Proyecto_ARQ.rvt`
   - Positioning: **Auto - Origin to Origin**
   - ☑ **Room Bounding** (permitir que elementos ARQ definan espacios)
3. Click **Open**

**Resultado:** Modelo arquitectónico aparece como **referencia gris** en modelo MEP.

![Modelo Arquitectónico Vinculado](../imagenes/mod5-link-arquitectura.png)

### Opciones de Posicionamiento

**Positioning options en Link Revit:**

| Opción | Uso |
|--------|-----|
| **Auto - Origin to Origin** | Coordenadas coinciden (recomendado si modelos usan mismo survey point) |
| **Auto - Center to Center** | Centros de ambos modelos se alinean |
| **Auto - By Shared Coordinates** | Usa shared coordinates (para múltiples edificios en sitio) |
| **Manual - Origin** | Colocar manualmente el link |

**Para proyectos MEP estándar:** Usar **Origin to Origin** (asegurar que arquitectura y MEP usan mismo punto de origen).

### Gestión de Links (Manage Links)

**Paso 1: Abrir Manage Links**

1. **Insert** → **Manage Links**
2. **Manage Links** dialog - **Revit** tab

**Funciones principales:**

**Reload:**
- Actualiza link con última versión guardada del archivo
- **Usar:** Cuando arquitectura publica nuevo modelo

**Reload From:**
- Cargar desde ubicación diferente (ej. servidor BIM 360)

**Unload:**
- Oculta temporalmente el link (mejora performance)
- Link sigue en proyecto, solo invisible

**Remove:**
- Elimina el link del proyecto completamente
- **Precaución:** Perderás elementos copiados/monitoreados

**Save Positions:**
- Guardar posición actual del link como "saved position"
- Útil para múltiples ubicaciones de un mismo archivo

## Copy/Monitor - Herramienta Fundamental

**Copy/Monitor** permite:
1. **Copiar elementos** de modelo vinculado a modelo MEP (grids, levels, walls)
2. **Monitorear cambios** en elementos copiados
3. **Recibir alertas** cuando elementos arquitectónicos cambian

### Copiar Niveles (Levels)

**Por qué copiar levels:**
- Equipos MEP deben colocarse en niveles arquitectónicos
- Ductos/tuberías deben respetar alturas de pisos
- Coordinación de referencias verticales

**Procedimiento:**

**Paso 1: Activar Copy/Monitor**

1. **Collaborate** → **Copy/Monitor** → **Select Link**
2. Click en **link de arquitectura** en vista

**Paso 2: Copiar Levels**

1. En **Copy/Monitor** panel → **Copy**
2. **Copy/Monitor Options** dialog:
   - ☑ **Levels**
3. Click en **cada level** a copiar en vista de elevación
4. Levels copiados aparecen en modelo MEP (ahora locales)

**Paso 3: Finalizar**

1. **Copy/Monitor** panel → **Finish**

**Resultado:** Levels arquitectónicos ahora existen en modelo MEP y están **monitoreados**.

![Copy/Monitor Levels](../imagenes/mod5-copy-monitor-levels.png)

### Copiar Rejillas (Grids)

**Por qué copiar grids:**
- Localizar equipos según grid arquitectónico (ej. "Chiller en grid B-3")
- Coordinar risers verticales
- Referencias en schedules

**Procedimiento:**

1. **Copy/Monitor** → **Select Link** → click link
2. **Copy** → **Copy/Monitor Options** → ☑ **Grids**
3. Click en cada grid a copiar en vista de plano
4. **Finish**

**Grids copiados** aparecen en color diferente (típicamente púrpura) indicando que son monitoreados.

### Monitorear Muros (Walls) - Room Boundaries

**Uso:** Los muros arquitectónicos definen **límites de espacios** (rooms) para cálculos de cargas térmicas.

**Procedimiento:**

1. **Copy/Monitor** → **Select Link**
2. **Monitor** (NO copiar, solo monitorear)
3. Click en **muros arquitectónicos** que definen espacios HVAC
4. **Finish**

**Beneficio:** Si arquitectura mueve un muro, recibirás alerta en **Coordination Review**.

## Coordination Review - Detectar Cambios

**Coordination Review** muestra todos los **cambios** en elementos monitoreados desde última sincronización.

### Ejecutar Coordination Review

**Procedimiento:**

**Paso 1: Reload Link Actualizado**

1. **Manage Links** → **Revit** tab
2. Seleccionar `Proyecto_ARQ.rvt`
3. Click **Reload**

**Paso 2: Ejecutar Review**

1. **Collaborate** → **Coordination Review** → **Review Warnings**
2. **Coordination Review** dialog aparece mostrando **warnings**

### Tipos de Warnings

**Warnings típicos:**

| Warning | Significado | Acción Recomendada |
|---------|-------------|-------------------|
| **Level "Level 2" has moved** | Nivel arquitectónico cambió elevación | **Postpone** (revisar con arquitecto) o **Accept** (actualizar MEP) |
| **Grid "A" has been deleted** | Grid eliminado en ARQ | **Reject** si aún necesario, o **Accept** (eliminar en MEP) |
| **Wall "Basic Wall" has changed** | Muro monitoreado modificado | **Accept** (actualizar límite de espacio) |

**Opciones de respuesta:**

- **Accept:** Actualizar elemento MEP con cambio arquitectónico
- **Reject:** Mantener versión MEP (no sincronizar)
- **Postpone:** Decidir después (warning permanece)
- **Show:** Destacar elemento en modelo

**Paso 3: Resolver Warnings**

Para cada warning:
1. Leer descripción
2. Click **Show** para ver elemento en contexto
3. Decidir: **Accept** / **Reject** / **Postpone**

**Paso 4: Commit Changes**

1. Click **OK** en dialog
2. Warnings resueltos se aplican al modelo

![Coordination Review](../imagenes/mod5-coordination-review.png)

## Copy/Monitor Options - Configuración Avanzada

**Acceder:** Durante **Copy/Monitor**, click **Options** button.

### Level Copy Options

**Multiple Level Offset:**

Permite copiar múltiples levels con **offset vertical** (útil si MEP usa nomenclatura diferente).

**Ejemplo:**
- ARQ Level 1: Elevación 0.00 m
- MEP Level 1: Elevación 0.00 m
- ARQ Level 2: Elevación 4.00 m
- MEP Level 2 Ceiling: Elevación 3.80 m (offset -0.20 m para plenum)

**Configuración:**
1. **Copy/Monitor Options** → **Levels** tab
2. **Offset:** `-200 mm`
3. Copiar level → aparece 200mm abajo

### Grid Copy Options

**Prefix/Suffix:**

Agregar prefijo a grids copiados (evitar conflicto si MEP tiene sus propios grids).

**Ejemplo:**
- ARQ Grid: `A`, `B`, `C`
- MEP Grid copiado: `ARQ-A`, `ARQ-B`, `ARQ-C`

**Configuración:**
1. **Copy/Monitor Options** → **Grids** tab
2. **Prefix:** `ARQ-`

### Wall Monitoring Options

**Copy Room-Bounding Elements:**

Determina si muros copiados actúan como **límites de espacios**.

**Configuración recomendada:**
- ☑ **Copy room-bounding elements only** (solo copiar muros que definen espacios)

## Espacios (Rooms) y Coordinación

### Rooms de Arquitectura vs. Spaces de MEP

**Diferencia clave:**

| Elemento | Disciplina | Uso |
|----------|------------|-----|
| **Rooms** | Arquitectura | Programa arquitectónico, áreas, acabados |
| **Spaces** | MEP | Análisis de cargas térmicas, zonas HVAC |

**Relación:**
- Cada **Space** típicamente coincide con un **Room** arquitectónico
- Límites compartidos: muros, pisos, techos

### Sincronizar Room Names con Spaces

**Problema:** Arquitectura cambia nombre de room "Office 101" a "Conference Room 101". Space MEP sigue mostrando nombre antiguo.

**Solución: Parámetros Compartidos**

**Paso 1: Crear Shared Parameter**

1. En modelo ARQ:
   - **Manage** → **Shared Parameters** → **New**
   - Name: `Room Name ARQ`
   - Type: **Text**
2. Agregar a categoria **Rooms**

**Paso 2: Schedule de Rooms**

1. Crear schedule de Rooms con columna `Room Name ARQ`
2. Exportar a Excel
3. Compartir con MEP

**Paso 3: MEP Mapea Datos**

1. En modelo MEP, crear parámetro `Room Name ARQ` en **Spaces**
2. Importar datos de Excel
3. Usar en schedules MEP

**Alternativa automatizada:** Usar **Dynamo** para sincronizar room names → space names automáticamente.

## Coordinación de Aberturas (Openings)

### Shaft Openings - Ductos Verticales

**Necesidad:** Ductos verticales (risers) requieren **aberturas en losas** arquitectónicas.

**Flujo de trabajo:**

**Paso 1: MEP Identifica Ubicaciones**

En modelo MEP:
1. Modelar ductos verticales
2. Identificar puntos de penetración en losas

**Paso 2: MEP Coloca "Shaft"**

1. **Architecture** → **Shaft** (sí, está en model MEP también)
2. **Properties:**
   - Base Level: `Level 1`
   - Top Level: `Roof`
3. Dibujar perímetro del shaft (ej. 1.2m × 0.8m)

**Paso 3: Comunicar a Arquitectura**

1. Exportar ubicaciones de shafts a **schedule**
2. Coordinar con arquitecto para modelar opening en ARQ
3. Arquitecto modela **shaft opening** en losas estructurales

### Wall Openings - Penetraciones Horizontales

**Para ductos/tuberías que atraviesan muros:**

**Opción 1: Manual**
Arquitecto modela **wall opening** en ubicaciones coordinadas.

**Opción 2: MEP Fabrication Parts (Revit 2026)**
Genera automáticamente **penetrations** basadas en elementos MEP que intersectan muros.

**Herramienta:**
1. **Systems** → **Generate Fabrication** → **Penetrations**
2. Seleccionar ductos/tuberías
3. Revit crea **penetrations** en puntos de intersección

**Exportar a arquitectura:**
- Exportar penetrations como **links** o **IFC**
- Arquitecto modela openings basadas en penetrations

## Mejores Prácticas de Coordinación

### 1. Reuniones de Coordinación Semanales

**Agenda típica:**
- Revisar **Coordination Review warnings**
- Discutir cambios mayores (niveles, grids)
- Coordinar shaft locations
- Resolver clashes críticos

### 2. Nomenclatura Consistente

**Usar mismos nombres para:**
- Levels (ej. `Level 1`, NO `First Floor` en MEP y `Level 1` en ARQ)
- Grids (ej. `A`, `B`, `C` - mismo alfabeto/numeración)
- Rooms/Spaces (sincronizar numbers y names)

### 3. Survey Point y Project Base Point

**Verificar antes de iniciar proyecto:**

1. Ambos modelos usan **mismo Survey Point**
2. **Project Base Point** en ubicación lógica (ej. esquina edificio)
3. **True North** configurado correctamente

**Verificar:**
- **Manage** → **Coordinates** → **Acquire Coordinates**
- Seleccionar link ARQ → adquiere coordenadas compartidas

### 4. Lineweights y Visibilidad de Links

**Configurar links como "halftone":**

1. **Visibility/Graphics** → **Revit Links** tab
2. Seleccionar `Proyecto_ARQ.rvt`
3. Display Settings: **Halftone**
4. **Override** → **Projection Lines:** Color gris claro (192,192,192)

**Beneficio:** Elementos MEP destacan claramente sobre referencia arquitectónica.

### 5. Worksets para Links

**Si usas worksharing en modelo MEP:**

1. Crear workset dedicado: `Links - Architecture`
2. Asignar link ARQ a este workset
3. **Permite:** Cerrar workset para mejorar performance cuando no necesitas ver ARQ

## Revit 2026: Mejoras en Coordinación

**Nuevas funcionalidades:**

1. **Enhanced Coordination Models** (ver Lección 4) - Gestión mejorada de múltiples links disciplinarios
2. **Copy/Monitor Batch Processing** - Copiar múltiples elements simultáneamente
3. **Automatic Clash Notification** - Alertas automáticas de interferencias críticas al recargar links

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Vincular modelo arquitectónico, copiar/monitorear levels y grids, resolver coordination warnings.

---

**Próxima Lección:** Coordination Models 2026 - Gestión avanzada de modelos multidisciplinarios.
