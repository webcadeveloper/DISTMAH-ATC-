# Lección 6: Corridor Optimization y Troubleshooting Avanzado

**Duración:** 80 minutos
**Módulo:** 1 - Corridors y Assemblies
**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Dividir corridors en múltiples regions con split region
✅ Aplicar assemblies diferentes por región (sección urbana vs rural)
✅ Configurar transitions entre assemblies (graduales vs abruptas)
✅ Optimizar frequency para balance entre detalle y performance
✅ Aplicar estrategias de rebuild (automático vs manual) en proyectos grandes
✅ Resolver errores comunes: Assembly not assigned, Target not found, No solution, Corridor out of date
✅ Identificar y corregir gaps en corridors
✅ Renombrar, copiar, y mirror corridors
✅ Exportar corridors a Infraworks y Navisworks
✅ Implementar best practices para proyectos colaborativos

---

## Introducción

En proyectos reales, los corridors raramente son uniformes de inicio a fin. Enfrentas:
- **Cambios de sección típica:** De rural (cunetas) a urbano (bordillos y aceras)
- **Intersecciones complejas:** Múltiples baselines, targets variables
- **Performance issues:** Corridors de 50+ km que tardan minutos en rebuild
- **Errores crípticos:** "No solution for subassembly" sin indicación clara de causa

Esta lección te equipa con técnicas de **optimización** y **troubleshooting** para manejar corridors complejos de manera profesional y eficiente.

---

## 1. Corridor Regions - Dividir y Conquista

### 1.1 ¿Por qué Múltiples Regions?

**Región:** Segmento del corridor con:
- Assembly específico
- Targets específicos
- Frequency específica
- Start/End station definidos

**Casos de uso:**

**1. Cambio de sección típica:**
- Km 0+000 a 5+000: Carretera rural (2 carriles, bermas, cunetas)
- Km 5+000 a 8+000: Zona urbana (2 carriles, bordillos, aceras)
- **Solución:** 2 regiones, cada una con assembly diferente

**2. Intersección en medio de corridor:**
- Km 0+000 a 2+450: Sección estándar
- Km 2+450 a 2+650: Sección de intersección (ensanchamiento, carriles de giro)
- Km 2+650 a 5+000: Sección estándar
- **Solución:** 3 regiones

**3. Performance optimization:**
- Km 0+000 a 10+000: Frequency normal (25 m tangentes)
- Km 10+000 a 50+000: Frequency reducida (50 m tangentes) para velocidad
- **Solución:** 2 regiones con frequencies diferentes

### 1.2 Split Region

**Comando:**

1. **Corridor Properties → Parameters tab**
2. **Expand baseline → Right-click en región existente → Split Region**

**Split Region dialog:**

**Split Station:**
- Especifica estación donde dividir
- Ejemplo: `5+000` (divide en Km 5+000)

**OK:**
- Región se divide en 2:
  - **Region 1:** Start original → 5+000
  - **Region 2:** 5+000 → End original

**Nombres auto-generados:**
- Region 1: `RG - [Assembly Name] (1)`
- Region 2: `RG - [Assembly Name] (2)`

**Renombrar regions (recomendado):**
1. Right-click en región → **Rename**
2. Names descriptivos:
   - Region 1: `Rural Section 0+000 to 5+000`
   - Region 2: `Urban Section 5+000 to 8+000`

![Split Region](../imagenes/leccion-6-split-region.png)

### 1.3 Assign Different Assembly per Region

**Paso 1: Create assemblies diferenciados**

**Rural Assembly (ya existe):**
- `Carretera-2C-Rural-Cuneta`
- 2 carriles 3.00 m, bermas 1.50 m, BasicSideSlopeCutDitch

**Urban Assembly (crear):**
1. **Create Assembly:**
   - Name: `Carretera-2C-Urban-Curb-Sidewalk`
   - Description: "2 carriles urbano, bordillo, acera 1.50m"

2. **Subassemblies:**
   - BasicLane: 3.00 m (carril)
   - BasicShoulder: 0.50 m (berma reducida urbana)
   - **UrbanCurb:** Bordillo vertical (15 cm altura)
   - **UrbanSidewalk:** Acera 1.50 m ancho
   - **LinkToSurface:** Talud desde borde de acera

**Paso 2: Assign assembly a región urbana**

1. **Corridor Properties → Parameters → Region 2** (urbana)
2. **Right-click → Edit Region**
3. **Assembly:** Dropdown → Selecciona `Carretera-2C-Urban-Curb-Sidewalk`
4. **OK**

**Rebuild:**
- Corridor ahora tiene:
  - 0+000 a 5+000: Sección rural (cuneta)
  - 5+000 a 8+000: Sección urbana (bordillo + acera)

![Different Assemblies per Region](../imagenes/leccion-6-assemblies-per-region.png)

---

## 2. Transitions entre Assemblies

### 2.1 Problema de Transiciones Abruptas

Cuando cambias de assembly en una estación específica (ej: 5+000), la transición es **abrupta**:
- Sección en 4+999: Cuneta (rural)
- Sección en 5+001: Bordillo (urbano)
- **Gap visual:** Discontinuidad geométrica

**Solución profesional:**
Crear **transition region** con assembly gradual o usar subassemblies adaptativos.

### 2.2 Transition Region Method

**Concepto:**
Añadir región intermedia (ej: 4+900 a 5+100) con assembly que **blends** entre rural y urbano.

**Paso 1: Split regions adicionales**

1. Split region rural en 4+900
2. Split region urbana en 5+100

**Resultado:**
- Region 1: 0+000 a 4+900 (rural)
- **Region 2: 4+900 a 5+100 (transition)**
- Region 3: 5+100 a 8+000 (urbano)

**Paso 2: Create Transition Assembly**

**Opción A - Assembly intermedio:**
- `Carretera-2C-Transition`
- Mezcla elementos: Berma rural (1.50 m) → Berma urbana (0.50 m) gradualmente
- Complicado de diseñar manualmente

**Opción B - Use conditional subassemblies:**
- Subassembly que detecta proximidad a target y ajusta geometría
- **ConditionalHorizontalTarget** - cambia ancho según target
- Requiere offset alignment como target en zona de transición

**Recomendación práctica:**
Para la mayoría de proyectos, transición abrupta es aceptable si ocurre en:
- Inicio/fin de puentes
- Cambios de jurisdicción (límite urbano/rural claro)
- Intersecciones (donde geometría cambia naturalmente)

### 2.3 Gradual Transition con Subassemblies Adaptativos

**Advanced technique:**

Usa **BasicLaneTransition** con width target variable:
1. Offset alignment que cambia distancia gradualmente de 4+900 a 5+100
2. Assembly con BasicLaneTransition sigue offset alignment
3. Transición suave

**NOTA:** Este método es avanzado - requiere dominio de targets (Lección 3). Para curso inicial, entender el concepto es suficiente.

---

## 3. Frequency Optimization - Balance Detalle/Performance

### 3.1 Problema de Performance

**Scenario:**
- Corridor de 25 km
- Frequency: 10 m en tangentes, 5 m en curvas
- **Result:** 5,000+ secciones transversales
- **Rebuild time:** 5-10 minutos por cambio
- **Workflow:** Inviable para diseño iterativo

### 3.2 Frequency Guidelines por Tipo de Proyecto

**Highway design (carreteras):**
| Elemento | Frequency Recomendada |
|----------|----------------------|
| Tangentes | 25-50 m |
| Curvas circulares | 15-25 m |
| Espirales | 10-15 m |
| Horizontal geometry points | ✓ Always ON |
| Profile geometry points | ✓ Always ON |

**Urban streets (vialidad urbana):**
- Tangentes: 15-25 m (más detalle, corridors cortos)
- Curvas: 10-15 m
- Intersecciones: 5-10 m (máximo detalle)

**Sitework (estacionamientos, plataformas):**
- Tangentes: 10-15 m
- Curvas: 5-10 m
- Grading areas: 5 m (alta densidad para análisis de drenaje)

**Long-distance highways (>50 km):**
- Tangentes: 50-100 m
- Curvas: 25-50 m
- **Trade-off:** Menos precisión, mucho más rápido

### 3.3 Optimizar Frequency por Region

**Estrategia:**
Reduce frequency en zonas simples, mantiene detalle en zonas críticas.

**Ejemplo:**

**Region 1 (tangente larga, Km 0-10):**
- Along Tangents: **50 m** (reducido)
- Along Curves: 25 m
- Geometry Points: ✓

**Region 2 (intersección compleja, Km 10-12):**
- Along Tangents: **10 m** (detallado)
- Along Curves: **5 m** (máximo detalle)
- Geometry Points: ✓

**Region 3 (tangente larga, Km 12-25):**
- Along Tangents: **50 m** (reducido nuevamente)

**Resultado:**
- Total sections reducidas de 5,000 a 1,500
- Rebuild time: 5 minutos → 90 segundos
- **Precisión mantenida** en zona crítica (intersección)

![Frequency Optimization](../imagenes/leccion-6-frequency-optimization.png)

---

## 4. Rebuild Strategies - Automático vs Manual

### 4.1 Automatic Rebuild

**Configuración:**
- Corridor Properties → Parameters tab → **☑ Rebuild - Automatic**

**Ventajas:**
- Cambios instantáneos (modifícas profile → corridor se actualiza)
- Workflow fluido para diseño iterativo
- No olvidas rebuild (siempre actualizado)

**Desventajas:**
- **Performance lento** con corridors grandes (>10 km)
- Cada pequeño cambio (mover 1 PVI de profile) recalcula TODO el corridor
- Civil 3D puede "congelarse" durante rebuild (especialmente con targets complejos)

**Cuándo usar:**
- Corridors <5 km
- Fase de diseño inicial (muchos cambios frecuentes)
- Computer potente (32GB+ RAM, CPU rápido)

### 4.2 Manual Rebuild

**Configuración:**
- Corridor Properties → Parameters tab → **☐ Rebuild - Automatic** (unchecked)

**Ventajas:**
- **Performance rápido** - haces 10 cambios, rebuild una sola vez al final
- Control total sobre cuándo recalcular
- Permite trabajo en drawings grandes sin lags

**Desventajas:**
- **Olvido de rebuild** - puedes olvidar rebuild y trabajar con corridor desactualizado
- Visualización desactualizada (corridor no refleja cambios hasta rebuild manual)

**Cuándo usar:**
- Corridors >10 km
- Proyectos con múltiples targets complejos
- Fase de documentación (pocos cambios, necesitas velocidad)

**Comando rebuild manual:**
```
Select corridor → Corridor tab → Modify panel → Rebuild Corridor
```
O:
```
Corridor Properties → Parameters tab → Rebuild button (bottom)
```

### 4.3 Hybrid Approach (Profesional)

**Estrategia:**
- **Automatic ON** durante diseño activo (sesión de 1-2 horas modificando alignment/profile)
- **Automatic OFF** cuando terminas sesión de diseño
- **Manual rebuild** antes de:
  - Crear corridor surfaces
  - Generar quantity takeoff reports
  - Export a LandXML

**Verificar Out-of-Date Status:**
- Prospector → Corridors → [Corridor]
- **Ícono amarillo ⚠** = Out of date, necesita rebuild

---

## 5. Common Errors y Soluciones

### 5.1 Error: "Assembly is not assigned to baseline"

**Síntoma:**
- Corridor no se genera
- Error message: "The assembly [name] is not assigned to the baseline [name]"

**Causa:**
- Región existe pero NO tiene assembly asignado (celda vacía)
- Común tras split region (nueva región sin assembly)

**Solución:**

1. **Corridor Properties → Parameters → Expand baseline**
2. **Locate region sin assembly** (celda "Assembly" vacía)
3. **Right-click → Edit Region**
4. **Assembly:** Dropdown → Selecciona assembly apropiado
5. **OK → Rebuild**

![Assembly Not Assigned Error](../imagenes/leccion-6-error-assembly.png)

### 5.2 Error: "Target surface not found"

**Síntoma:**
- Corridor se genera parcialmente
- Warning: "Target surface [name] not found at station X+XXX"

**Causa:**
- Surface target no cubre todo el rango de estaciones del corridor
- Surface fue eliminada o renombrada

**Solución:**

**Verificar cobertura de superficie:**
1. **Zoom to corridor**
2. **Verify surface boundaries** - superficie debe cubrir área corridor + offset para taludes
3. **Extend surface:**
   - Add boundary más grande
   - Add puntos en bordes (fake data para extender TIN si es necesario)

**Verificar target assignment:**
1. **Corridor Properties → Region → Targets tab**
2. **Surfaces:** Debe mostrar nombre correcto de superficie (ej: "EG")
3. **Si surface fue renombrada:**
   - Remove target incorrecto
   - Add target correcto (nuevo nombre de surface)

### 5.3 Error: "No solution for subassembly"

**Síntoma:**
- Corridor tiene gaps (espacios sin geometría) en ciertas estaciones
- Warning: "No solution for subassembly [name] at station X+XXX"

**Causas posibles:**

**1. Target surface fuera de alcance:**
- LinkToSurface no encuentra intersección con EG (surface muy lejos o inexistente)
- **Solución:** Extend surface o increase Maximum Offset en subassembly

**2. Conflicto geométrico en assembly:**
- Subassemblies se superponen o tienen lógica contradictoria
- **Solución:** Review assembly - verifica orden de subassemblies, attachment points

**3. Alignment/Profile discontinuo:**
- Gap en profile (elevación no definida en rango de estaciones)
- **Solución:** Extend profile para cubrir todo el alignment

**4. Subassembly con parámetros inválidos:**
- Ej: Slope 0:1 (imposible), Width negativo
- **Solución:** Edit subassembly properties, corrige parámetros

**Debug workflow:**

1. **Identify station con error:** Command line output muestra "Station X+XXX"
2. **Section Editor:**
   - Open Section Editor
   - Navigate to station X+XXX
   - **Observa:** ¿Qué parte del assembly falta? ¿Talud? ¿Carril?
3. **Focus en subassembly problemático:**
   - Si falta talud → Problema con LinkToSurface o surface target
   - Si falta carril → Problema con assembly logic o width target
4. **Fix específico según observación**

![No Solution Error](../imagenes/leccion-6-error-no-solution.png)

### 5.4 Error: "Corridor out of date"

**Síntoma:**
- Ícono amarillo ⚠ en Prospector junto al corridor
- Corridor no refleja cambios en alignment, profile, o assembly

**Causa:**
- Rebuild mode = Manual
- Modificaste objetos fuente (alignment, profile, assembly, surface target) sin rebuild

**Solución:**
- **Rebuild corridor:**
  - Select corridor → Right-click → **Rebuild Corridor**
  - O: Corridor Properties → Parameters → **Rebuild** button

**Prevención:**
- Si estás en modo manual, **rebuild al finalizar cada sesión de diseño**
- Check for out-of-date icon antes de crear surfaces o reports

### 5.5 Gaps en Corridor (Estaciones sin Solución)

**Síntoma:**
- Corridor tiene "huecos" - zonas donde no hay geometría generada
- Visualmente: Líneas discontinuas, secciones faltantes

**Causa:**
- Múltiples causas posibles (target not found, no solution, frequency issue)

**Solución sistemática:**

**1. Identify gap range:**
- Visual: Zoom to gap, nota estaciones aproximadas (ej: 2+350 a 2+400)

**2. Section Editor:**
- Navigate a estación dentro del gap (ej: 2+375)
- **Observa error message** en section view

**3. Fix según error:**
- "No solution" → Ver sección 5.3
- "Target not found" → Ver sección 5.2
- Sin error pero sin geometría → Frequency issue (ver siguiente)

**4. Frequency issue:**
- Posible que frequency no generó sección en ese rango
- **Solución:**
  - Add **Horizontal Geometry Point** manualmente:
    - Corridor Properties → Region → Frequency tab
    - **Add Station** (manual override): 2+375
  - O: Reduce frequency interval (25m → 10m) en esa región

---

## 6. Corridor Rename, Copy, Mirror

### 6.1 Rename Corridor

**Por qué:**
- Proyecto evoluciona, nombres originales ya no son descriptivos
- Estándares de oficina requieren nomenclatura específica

**Pasos:**

1. **Corridor Properties → Information tab**
2. **Name:** Cambiar a nuevo nombre (ej: `Highway-MainLine-Corridor-v2`)
3. **Description:** Actualizar descripción
4. **OK**

**IMPORTANTE:** Renombrar corridor NO rompe data shortcuts (si estás usando).

### 6.2 Copy Corridor

**Caso de uso:**
- Tienes corridor de "Alternate 1" (alternativa de diseño 1)
- Quieres crear "Alternate 2" basado en el mismo alignment pero con profile diferente

**Método: No hay comando "Copy Corridor" directo**

**Workaround:**

1. **Create nuevo corridor:**
   - Name: `Highway-Alternate2-Corridor`
   - Alignment: Mismo alignment (Centerline-Highway)
   - Profile: Diferente profile (`FG-Alternate2`)
   - Assembly: Mismo assembly o diferente

2. **Copy regions configuration:**
   - Manualmente replica regions del corridor original
   - Targets, frequency - copy settings

**Alternativa avanzada:**
- Export corridor a XML (custom script)
- Modify XML, re-import
- **Complejo, no recomendado para usuarios estándar**

### 6.3 Mirror Corridor

**Caso de uso:**
- Carretera con 2 calzadas separadas (divided highway)
- Corridor de calzada derecha creado
- Necesitas mirror para calzada izquierda

**Método: Mirror Assembly, luego create nuevo corridor**

**Paso 1: Mirror Assembly**

1. **Select assembly original**
2. **Assembly tab → Modify panel → Mirror**
3. **Specify mirror line:** Generalmente centerline (mediana)
4. **New assembly creado** (mirrored)

**Paso 2: Create Corridor con mirrored assembly**

1. **Create Corridor:**
   - Alignment: Offset alignment de calzada izquierda (o mismo centerline con assembly adjusted)
   - Profile: Profile de calzada izquierda
   - Assembly: **Mirrored assembly**

**Resultado:**
- 2 corridors (derecha e izquierda) simétricos

---

## 7. Export Corridors a Infraworks y Navisworks

### 7.1 Export a Infraworks

**Propósito:**
- Infraworks = Herramienta de visualización y contextualización urbana 3D
- Importar corridor de Civil 3D para visualización en contexto de ciudad

**Pasos:**

1. **File → Export → Export to Infraworks**
2. **Select corridor** (si no pre-seleccionado)
3. **Export settings:**
   - ☑ Include surfaces (corridor surfaces)
   - ☑ Include alignments
4. **File location:** Selecciona carpeta
5. **Export**

**Resultado:**
- Archivo `.sqlite` generado
- Importar en Infraworks → Corridor aparece en modelo 3D urbano

### 7.2 Export a Navisworks

**Propósito:**
- Navisworks = Herramienta BIM de coordinación 4D/5D (construcción)
- Detectar conflictos entre corridor y otros elementos (utilities, structures)

**Pasos:**

1. **Output tab → Export panel → Navisworks**
2. **NWC Export Settings:**
   - ☑ Corridors
   - ☑ Surfaces
   - ☑ Convert to solids (para detección de conflictos)
3. **File name:** `Highway-Corridor-Design.nwc`
4. **Export**

**Uso en Navisworks:**
1. Open Navisworks Manage
2. **File → Append → Select `Highway-Corridor-Design.nwc`**
3. **Clash Detection:**
   - Run clash tests entre corridor y utility networks (agua, alcantarillado, electricidad)
   - Identifica conflictos antes de construcción

![Export to Navisworks](../imagenes/leccion-6-export-navisworks.png)

---

## 8. Best Practices - Proyectos Colaborativos

### 8.1 Data Shortcuts para Corridors

**Problema:**
- Equipo de 5 ingenieros trabajando en mismo proyecto
- Cada uno necesita acceso al corridor principal
- Editar mismo .dwg causa conflictos

**Solución: Data Shortcuts**

**Workflow:**

1. **Ingeniero A - Corridor Master:**
   - Crea corridor principal (`Highway-MainLine-Corridor`)
   - **Publish data shortcut:**
     - Prospector → Corridors → Right-click corridor → **Create Data Shortcut**

2. **Ingeniero B - Ramp Design:**
   - Abre su drawing de diseño de rampa
   - **Create reference:**
     - Prospector → Data Shortcuts → Corridors → Highway-MainLine-Corridor
     - Right-click → **Create Reference**
   - Corridor principal aparece en su drawing (read-only)
   - Diseña rampa usando corridor principal como referencia visual

3. **Ingeniero A modifica corridor:**
   - Changes alignment, profile
   - Corridor se actualiza
   - **Data shortcut se sincroniza automáticamente**

4. **Ingeniero B sincroniza:**
   - Prospector → Corridors → Highway-MainLine-Corridor (reference)
   - Ícono ⚠ si out-of-sync
   - Right-click → **Synchronize**

**Ventaja:**
- Trabajo simultáneo sin conflictos
- Corridor master controlado por 1 ingeniero (evita ediciones conflictivas)
- Todos ven versión actualizada

### 8.2 Layer Standards

**Convención recomendada:**

| Objeto | Layer | Color | Linetype |
|--------|-------|-------|----------|
| Corridor object | C-ROAD-CORR | Cyan (4) | Continuous |
| Corridor surfaces | C-ROAD-SRFC | Magenta (6) | Continuous |
| Feature lines - ETW | C-ROAD-ETW | Yellow (2) | Continuous |
| Feature lines - Daylight | C-ROAD-DAYL | Green (3) | Dashed |
| Assemblies | C-ROAD-ASSY | White (7) | Continuous |

**Crear layer template:**
- Save layers en template `.dwt`
- Todo el equipo usa mismo template → Consistencia visual

### 8.3 Naming Conventions

**Corridors:**
```
[Project]-[Alignment]-Corridor-[Version]
Ejemplos:
  Highway95-MainLine-Corridor-v1
  UrbanStreet-AveA-Corridor-Final
  Ramp-Interchange-NB-Corridor-v3
```

**Assemblies:**
```
[Type]-[Lanes]-[Features]-[Variant]
Ejemplos:
  Highway-4L-Median-Barrier
  Urban-2L-Curb-Sidewalk
  Rural-2L-Ditch-3to1Slope
```

**Regions:**
```
[Description] [Station Range]
Ejemplos:
  Rural Section 0+000 to 5+000
  Urban Curb Section 5+000 to 8+000
  Intersection Widening 2+450 to 2+650
```

---

## Ejercicio Práctico 6

**Objetivo:** Optimizar corridor complejo con regiones, transitions, troubleshooting.

**Requisitos:**
- Corridor: `Corridor-Exercise2-Rural` (de ejercicios previos)
- Extendido a 5 km (asume que extendiste alignment y profile)

**Tareas:**

1. **Split Corridor en 3 Regions:**
   - Region 1: 0+000 a 2+000 (rural)
   - Region 2: 2+000 a 3+000 (transición/zona especial)
   - Region 3: 3+000 a 5+000 (rural)

2. **Assign Different Assembly a Region 2:**
   - Create assembly: `Rural-Widened-3.5m-Lanes`
     - Carriles: 3.50 m (ensanchados, vs 3.00 m original)
     - Bermas: 2.00 m (vs 1.00 m original)
   - Assign a Region 2

3. **Optimize Frequency:**
   - Region 1: Tangents 50 m (reducido), Curves 25 m
   - Region 2: Tangents 15 m (detallado), Curves 10 m
   - Region 3: Tangents 50 m (reducido), Curves 25 m

4. **Introduce Error (simulación):**
   - Region 2 → Targets tab → **Remove surface target** (delete EG)
   - **Rebuild corridor**
   - **Observa error:** "Target surface not found" en Region 2

5. **Fix Error:**
   - Region 2 → Targets tab → **Add surface: EG**
   - **Rebuild**
   - Verifica que error desaparece

6. **Manual Rebuild Test:**
   - Corridor Properties → **☐ Automatic Rebuild** (uncheck)
   - Modify profile: Mover 1 PVI verticalmente +0.50 m
   - **Observa:** Corridor NO se actualiza (ícono ⚠)
   - **Manual Rebuild:** Corridor tab → Rebuild Corridor
   - Verifica actualización

7. **Rename Regions:**
   - Region 1: `Rural Standard 0+000-2+000`
   - Region 2: `Widened Transition 2+000-3+000`
   - Region 3: `Rural Standard 3+000-5+000`

**Entregables:**
- Drawing: `Ejercicio6-Corridor-Optimization.dwg`
- Screenshot 1: Corridor Properties - Parameters mostrando 3 regiones con nombres descriptivos
- Screenshot 2: Frequency configuración de Region 2 (detallada) vs Region 1 (optimizada)
- Screenshot 3: Corridor 3D view mostrando sección widened en Region 2 (carriles 3.50m)
- Reporte breve:
  - Número total de secciones generadas (antes y después de optimización de frequency)
  - Tiempo estimado de rebuild (observación subjetiva: rápido/medio/lento)

![Ejercicio 6 Result](../imagenes/leccion-6-ejercicio6-result.png)

---

## Evaluación

**Pregunta 1:**
¿Para qué sirve "Split Region" en un corridor?

**Pregunta 2:**
¿Cuál es la principal ventaja de usar Rebuild Manual (vs Automático) en corridors grandes (>10 km)?

**Pregunta 3:**
Si recibes error "Assembly is not assigned to baseline", ¿dónde debes verificar y qué debes corregir?

**Pregunta 4:**
¿Qué significa el ícono amarillo ⚠ junto a un corridor en Prospector?

**Pregunta 5:**
Menciona 2 estrategias para optimizar frequency y mejorar performance de corridors largos.

**Pregunta 6:**
Si un corridor tiene gaps (espacios sin geometría), ¿qué herramienta usas para identificar la causa del gap en una estación específica?

**Pregunta 7:**
¿Para qué exportarías un corridor a Navisworks?

**Pregunta 8:**
En un proyecto colaborativo con 5 ingenieros, ¿por qué usarías Data Shortcuts para compartir un corridor en vez de que todos editen el mismo .dwg?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Managing Corridor Regions"
- Autodesk Civil 3D 2026 - Performance Optimization Guide
- Troubleshooting Corridors - Common Errors

**Videos tutoriales:**
- Autodesk Civil 3D - Corridor Optimization Best Practices
- Advanced Troubleshooting for Complex Corridors
- Collaborative Workflows with Data Shortcuts

**Autodesk Community:**
- Civil 3D Forums - Corridor section (casos reales de troubleshooting)

---

## Resumen

En esta lección aprendiste:

✅ **Corridor regions:** Split regions para asignar assemblies diferentes por zona (urbano vs rural)
✅ **Transitions:** Gestionar transiciones entre assemblies (abruptas vs graduales)
✅ **Frequency optimization:** Balance entre detalle (frecuencia alta) y performance (frecuencia reducida)
  - Tangentes: 25-50 m (standard), 50-100 m (proyectos grandes)
  - Curvas: 15-25 m (standard)
  - Intersecciones: 5-10 m (máximo detalle)
✅ **Rebuild strategies:**
  - **Automatic:** Diseño iterativo, corridors <5 km
  - **Manual:** Performance, corridors >10 km, fase de documentación
✅ **Common errors y soluciones:**
  - "Assembly not assigned" → Assign assembly a región
  - "Target surface not found" → Extend surface, verify target assignment
  - "No solution for subassembly" → Check surface coverage, subassembly parameters, assembly logic
  - "Corridor out of date" → Rebuild corridor
  - **Gaps:** Use Section Editor para identificar, fix según causa específica
✅ **Corridor management:** Rename, copy (workaround), mirror (via assembly)
✅ **Export:** Infraworks (visualización urbana), Navisworks (coordinación BIM, clash detection)
✅ **Best practices colaborativas:** Data shortcuts, layer standards, naming conventions

**Conclusión del Módulo 1:**
Has completado el módulo de **Corridors y Assemblies** - el núcleo del diseño paramétrico en Civil 3D. Dominas:
- Creación de assemblies complejos (Lección 1)
- Corridor modeling básico (Lección 2)
- Targets avanzados (Lección 3)
- Corridor surfaces (Lección 4)
- Feature lines (Lección 5)
- Optimization y troubleshooting (Lección 6)

**Próximo Módulo:** Intersections y Roundabouts Avanzados - Aplicarás todo lo aprendido a casos complejos: intersecciones en X, rotondas, intercambios viales con múltiples baselines y targets sofisticados.

---

**Tiempo de estudio recomendado:** 80 minutos
**Práctica adicional:** 90 minutos aplicando optimization y troubleshooting a corridors reales de proyectos
