# Ejercicios Prácticos - Módulo 1: Introducción a Navisworks 2026

## Descripción General

Este documento contiene 6 ejercicios prácticos integrales, uno por cada lección del Módulo 1. Cada ejercicio simula tareas reales de coordinación BIM que un profesional enfrentaría en proyectos de construcción. Los ejercicios están diseñados para ser completados en orden secuencial, construyendo sobre habilidades desarrolladas en ejercicios anteriores.

**Calificación:** Cada ejercicio vale 100 puntos, con rúbrica detallada que evalúa precisión técnica, eficiencia de workflow, y calidad de entregables.

**Modelos requeridos:**
- Edificio Comercial 4 pisos (ARQ, EST, MEP - Revit)
- Proyecto disponible en biblioteca de archivos del curso

**Tiempo total estimado:** 3.5 horas (todos los ejercicios)

---

## Ejercicio 1: Navegación Básica en Modelo BIM Federado

**Lección asociada:** Lección 1 - Interfaz de Navisworks 2026 y Fundamentos

**Duración:** 30 minutos

**Nivel de dificultad:** Básico

**Puntuación:** 100 puntos

### Escenario

Usted ha sido contratado como nuevo coordinador BIM junior en un proyecto de edificio comercial de 4 pisos. Su primera tarea es familiarizarse con el modelo federado del proyecto navegando por diferentes áreas, identificando elementos clave, y creando viewpoints para uso futuro del equipo.

El gerente de proyecto requiere que demuestre competencia navegando el modelo antes de asignarle tareas de coordinación más complejas.

### Objetivos

- Dominar controles de navegación básicos (orbit, pan, zoom, walk)
- Utilizar ViewCube y Steering Wheels eficientemente
- Identificar elementos usando Selection Tree
- Crear viewpoints guardados organizados
- Configurar preferencias de interfaz

### Archivos Requeridos

- `Edificio-Comercial-ARQ.rvt` (modelo Revit arquitectura)
- Abrir directamente en Navisworks Manage 2026

### Procedimiento Detallado

**PARTE A - Familiarización con Interfaz (15 minutos)**

1. **Abrir modelo en Navisworks:**
   - Launch Navisworks Manage 2026
   - File > Open > Seleccionar `Edificio-Comercial-ARQ.rvt`
   - Esperar carga completa del modelo (barra de progreso)

2. **Configurar interfaz inicial:**
   - Verificar que Scene View muestra modelo completo
   - Home tab > Project panel > confirmar Properties, Selection Tree y Project Browser visibles
   - Si algún panel falta: View tab > Workspace > Windows > activar panel faltante
   - Organizar paneles: Dock Selection Tree a izquierda, Properties a derecha

3. **Explorar Ribbon:**
   - Navegar por cada tab (Home, Viewpoint, Review, Output, View) sin hacer cambios
   - Identificar ubicación de herramientas principales:
     - Home tab: Navigation tools, Selection, Visibility
     - Viewpoint tab: Saved Viewpoints, Camera, Display Style
     - Review tab: Measure, Redline, Clash Detection (si disponible)
   - **Entregable:** Screenshot de interfaz completa (pantalla completa) guardado como `E1-Interface.png`

4. **Configurar unidades:**
   - Options > Interface > Display Units
   - Seleccionar: Meters (m) con 2 decimales
   - Apply > OK

5. **Configurar selección:**
   - Options > Selection & Snapping
   - Verificar "Enable Snapping" = ON
   - Apply > OK

**PARTE B - Navegación Básica (10 minutos)**

6. **Orbit (vista 3D libre):**
   - Activar Orbit: Home tab > Navigate panel > Orbit (o presionar F4)
   - Click y drag para rotar vista alrededor del modelo
   - Orbitar completamente alrededor del edificio (360°)
   - Practicar órbit suave y controlado

7. **Pan (desplazamiento lateral):**
   - Activar Pan: Home tab > Navigate panel > Pan (o presionar F3)
   - Click y drag para mover lateralmente
   - Desplazar vista para centrar diferentes áreas del edificio

8. **Zoom (acercamiento):**
   - Activar Zoom: Home tab > Navigate panel > Zoom (o scroll del mouse)
   - Zoom in a detalle específico (ventana, puerta)
   - Zoom out para vista completa del edificio
   - Practicar Zoom Window: Click y drag para definir área a zoom

9. **ViewCube:**
   - Ubicar ViewCube (esquina superior derecha de Scene View)
   - Click en caras del ViewCube:
     - Front (vista frontal)
     - Back (vista posterior)
     - Left / Right (vistas laterales)
     - Top (vista superior - planta)
     - Bottom (vista inferior)
   - Click en esquinas para vistas isométricas
   - Practicar home view: Click en "house" icon del ViewCube

10. **Walk Mode (recorrido interior):**
    - Navegar a vista interior (usar Section Plane si necesario para "entrar" al edificio)
    - Activar Walk: Home tab > Navigate panel > Walk (o presionar F2)
    - WASD keys: W (adelante), A (izquierda), S (atrás), D (derecha)
    - Mouse: Drag para cambiar dirección de vista
    - Practicar recorrido por pasillo principal del Piso 1

**PARTE C - Selection y Exploración (10 minutos)**

11. **Selección de objetos:**
    - Orbit a vista 3D cómoda
    - Click en diferentes elementos:
      - Muro exterior (wall)
      - Ventana (window)
      - Puerta (door)
      - Columna (column)
    - Observar que elemento seleccionado se resalta
    - Properties palette muestra información del elemento seleccionado

12. **Selection Tree navigation:**
    - Selection Tree panel (izquierda)
    - Expandir árbol:
      - Edificio-Comercial-ARQ.rvt
      - Levels (niveles)
      - Level 1
      - Walls (muros)
    - Click en un muro específico en el árbol
    - Doble-click: Zoom automático a ese muro en Scene View

13. **Quick Find:**
    - Selection Tree > Click en ícono de lupa 🔍
    - Buscar: "Window" (ventanas)
    - Árbol filtra mostrando solo ventanas
    - Expandir para explorar tipos de ventanas
    - Clear search para volver a vista completa

14. **Quick Properties:**
    - Seleccionar una ventana en el modelo
    - Properties palette > Quick Properties muestra:
      - Display Name
      - Category: Windows
      - Family: [Nombre de familia]
      - Type: [Tipo específico]
      - Level: [Nivel]
    - **Entregable:** Screenshot de Properties palette con ventana seleccionada: `E1-Properties.png`

**PARTE D - Crear Viewpoints (15 minutos)**

15. **Viewpoint 1 - Vista General Exterior:**
    - Navegar a vista isométrica que muestre fachada principal
    - Orbit para ángulo atractivo (45° aprox)
    - Viewpoint tab > Save Viewpoint panel > Save Viewpoint
    - Nombre: "01-Exterior-Fachada-Principal"
    - Comments: "Vista general exterior del edificio desde fachada principal"
    - OK

16. **Viewpoint 2 - Planta Nivel 1:**
    - ViewCube > Top (vista superior)
    - Zoom para que Nivel 1 llene pantalla
    - Save Viewpoint: "02-Planta-Nivel-1"
    - Comments: "Vista en planta del primer nivel completo"

17. **Viewpoint 3 - Planta Nivel 2:**
    - Navegar a vista superior del Nivel 2 (puede usar Section Plane para aislar nivel)
    - Save Viewpoint: "03-Planta-Nivel-2"

18. **Viewpoint 4 - Corte Longitudinal:**
    - ViewCube > Front view
    - Zoom apropiado
    - Save Viewpoint: "04-Corte-Longitudinal"

19. **Viewpoint 5 - Detalle Entrada Principal:**
    - Navegar y zoom a entrada principal del edificio
    - Vista 3D cercana mostrando puertas, ventanas adyacentes
    - Save Viewpoint: "05-Detalle-Entrada-Principal"

20. **Viewpoint 6 - Recorrido Interior Pasillo:**
    - Usar Walk mode para posicionarse en pasillo principal Nivel 1
    - Vista "primera persona" mirando hacia adelante en pasillo
    - Save Viewpoint: "06-Interior-Pasillo-Nivel-1"

21. **Organizar Viewpoints:**
    - Viewpoint tab > Saved Viewpoints panel
    - Verificar que los 6 viewpoints aparecen en lista
    - Probar cada viewpoint: Double-click para activar
    - Confirmar que cada viewpoint restaura vista correcta

**PARTE E - Entregables Finales**

22. **Capturar screenshots de cada viewpoint:**
    - Para cada uno de los 6 viewpoints:
      - Activar viewpoint (double-click)
      - Output tab > Visuals panel > Screenshot
      - Resolution: 1920x1080
      - Save: `E1-VP01-Exterior.png`, `E1-VP02-Planta-N1.png`, etc.

23. **Guardar archivo Navisworks:**
    - File > Save As
    - Nombre: `Edificio-Comercial-Ejercicio-1.nwd`
    - Formato: .nwd (Navisworks Document - incluye viewpoints guardados)
    - Save

### Entregables

1. **Screenshots (8 archivos PNG):**
   - `E1-Interface.png` - Interfaz completa de Navisworks
   - `E1-Properties.png` - Properties palette con elemento seleccionado
   - `E1-VP01-Exterior.png` - Viewpoint 1
   - `E1-VP02-Planta-N1.png` - Viewpoint 2
   - `E1-VP03-Planta-N2.png` - Viewpoint 3
   - `E1-VP04-Corte.png` - Viewpoint 4
   - `E1-VP05-Entrada.png` - Viewpoint 5
   - `E1-VP06-Pasillo.png` - Viewpoint 6

2. **Archivo Navisworks:**
   - `Edificio-Comercial-Ejercicio-1.nwd` - Modelo con 6 viewpoints guardados

3. **Documento de respuestas:**
   - `E1-Respuestas.pdf` - Responder preguntas de evaluación (ver abajo)

### Evaluación

**Preguntas a responder en `E1-Respuestas.pdf`:**

1. **Navegación (10 puntos):** Describa la diferencia entre Orbit, Pan y Walk modes. ¿Cuándo usaría cada uno en coordinación BIM?

2. **ViewCube (10 puntos):** Explique cómo usar ViewCube para cambiar rápidamente entre vistas ortogonales (Top, Front, Right) y por qué estas vistas son útiles en análisis técnico.

3. **Selection Tree (10 puntos):** ¿Qué ventaja ofrece seleccionar elementos desde Selection Tree vs selección directa en Scene View? Proporcione un ejemplo.

4. **Viewpoints (10 puntos):** Explique la utilidad de Saved Viewpoints en workflow de coordinación. ¿Qué información se guarda con un viewpoint?

**Rúbrica de calificación:**

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Screenshots de Interfaz (10 pts)** | 0-10 | Interfaz completa, Properties visible correctamente |
| **Viewpoints Creados (30 pts)** | 0-30 | 6 viewpoints con nombres descriptivos y vistas correctas (5 pts c/u) |
| **Screenshots de Viewpoints (30 pts)** | 0-30 | 6 screenshots de alta resolución con encuadres correctos (5 pts c/u) |
| **Archivo NWD Guardado (10 pts)** | 0-10 | Archivo .nwd funcional con viewpoints guardados |
| **Respuestas a Preguntas (40 pts)** | 0-40 | Respuestas completas, técnicamente correctas (10 pts c/u) |
| **TOTAL** | **100** | |

**Criterios de éxito:**
- Mínimo 80/100 para aprobar ejercicio
- Viewpoints deben restaurar vistas exactas al activarlos
- Screenshots alta resolución (1920x1080 mínimo)
- Respuestas demuestran comprensión conceptual

---

## Ejercicio 2: Agregación de Modelos Multi-disciplina y Federación

**Lección asociada:** Lección 2 - Importación y Agregación de Modelos

**Duración:** 35 minutos

**Nivel de dificultad:** Intermedio

**Puntuación:** 100 puntos

### Escenario

Como coordinador BIM del proyecto Edificio Comercial, debe crear el modelo federado completo combinando modelos de tres disciplinas (Arquitectura, Estructura, MEP) que fueron desarrollados independientemente por diferentes consultores. El gerente de proyecto necesita el modelo federado para inicio de revisiones de coordinación semanales.

Debe asegurar que los modelos se alinean correctamente (mismo sistema de coordenadas), configurar unidades apropiadas, y establecer workflow de actualización para cuando los modelos cambien.

### Objetivos

- Importar y agregar múltiples modelos de diferentes disciplinas
- Verificar alineación y sistemas de coordenadas
- Configurar File Units correctamente
- Entender diferencia entre Append y Merge
- Establecer workflow de refresh/update de modelos
- Organizar modelo federado con File Options

### Archivos Requeridos

- `Edificio-Comercial-ARQ.rvt` (Arquitectura - Revit)
- `Edificio-Comercial-EST.rvt` (Estructura - Revit)
- `Edificio-Comercial-MEP.rvt` (MEP - Revit)

### Procedimiento Detallado

**PARTE A - Preparación e Importación del Primer Modelo (5 minutos)**

1. **Iniciar Navisworks:**
   - Launch Navisworks Manage 2026
   - Iniciar con proyecto en blanco (no abrir archivo todavía)

2. **Configurar unidades del proyecto:**
   - Options > Interface > Display Units
   - Length: Meters (m), 2 decimals
   - Area: Square Meters (m²), 2 decimals
   - Volume: Cubic Meters (m³), 2 decimals
   - Apply > OK

3. **Abrir modelo de Arquitectura (base):**
   - File > Open
   - Seleccionar `Edificio-Comercial-ARQ.rvt`
   - Esperar carga completa
   - Este será el modelo BASE del modelo federado

4. **Verificar carga correcta:**
   - Navegar por el modelo (orbit, zoom)
   - Selection Tree > Verificar estructura:
     - Edificio-Comercial-ARQ.rvt
     - Levels > Level 1, 2, 3, 4
     - Categories > Walls, Floors, Doors, Windows, etc.
   - **Entregable:** Screenshot: `E2-ARQ-Solo.png` (solo modelo arquitectura)

**PARTE B - Agregar Modelo de Estructura (Append) (10 minutos)**

5. **Append modelo estructural:**
   - File > Append
   - Seleccionar `Edificio-Comercial-EST.rvt`
   - Wait for load

6. **Verificar append exitoso:**
   - Selection Tree ahora debe mostrar:
     - Edificio-Comercial-ARQ.rvt
     - Edificio-Comercial-EST.rvt
   - Expandir EST.rvt:
     - Structural Columns
     - Structural Framing (Beams)
     - Structural Foundations
     - Floor Slabs

7. **Verificar alineación de modelos:**
   - Navegar a vista que muestre claramente ARQ + EST
   - Verificar visualmente:
     - ¿Columnas estructurales están en posición correcta respecto a arquitectura?
     - ¿Floor slabs estructurales se alinean con floors arquitectónicos?
     - ¿Grids de ambos modelos coinciden?
   - Si NO están alineados: Problema de coordenadas compartidas en archivos origen (reportar al equipo de modelado)

8. **Aislar visualización de estructura:**
   - Selection Tree > Clic derecho en "Edificio-Comercial-ARQ.rvt" > Hide
   - Ahora solo estructura visible
   - Observar sistema estructural aislado
   - **Entregable:** Screenshot: `E2-EST-Solo.png`

9. **Restaurar visibilidad de arquitectura:**
   - Home tab > Visibility panel > Unhide All
   - Ambos modelos ahora visibles

10. **Crear viewpoint de ARQ+EST:**
    - Navegar a vista isométrica que muestre ambas disciplinas claramente
    - Viewpoint tab > Save Viewpoint: "ARQ-EST-Federado"
    - Comments: "Modelo federado arquitectura + estructura"
    - **Entregable:** Screenshot: `E2-ARQ-EST-Combined.png`

**PARTE C - Agregar Modelo MEP (10 minutos)**

11. **Append modelo MEP:**
    - File > Append
    - Seleccionar `Edificio-Comercial-MEP.rvt`
    - Wait for load (MEP models suelen ser más pesados por cantidad de elementos)

12. **Verificar append:**
    - Selection Tree ahora muestra 3 modelos:
      - ARQ.rvt
      - EST.rvt
      - MEP.rvt
    - Expandir MEP.rvt:
      - Ducts (ductos HVAC)
      - Pipes (tuberías plomería)
      - Cable Trays / Conduits (eléctrico)
      - Mechanical Equipment
      - Plumbing Fixtures
      - Electrical Fixtures

13. **Verificar alineación completa:**
    - Navegar a área con densa presencia MEP (ej: cielo raso con ducts, pipes, cable trays)
    - Zoom in para verificar detalle
    - Confirmar:
      - ¿MEP está en posición correcta respecto a ARQ?
      - ¿Ducts/pipes pasan a través de arquitectura o se posicionan en espacios adecuados?
      - ¿MEP respeta estructura (no penetra beams/columns)?

14. **Visualización por disciplinas:**
    - **Solo MEP:**
      - Hide ARQ.rvt y EST.rvt (Selection Tree > clic derecho > Hide)
      - **Entregable:** Screenshot: `E2-MEP-Solo.png`
      - Unhide All

    - **ARQ + MEP (sin estructura):**
      - Hide EST.rvt
      - Vista que muestre relación MEP con arquitectura
      - **Entregable:** Screenshot: `E2-ARQ-MEP.png`
      - Unhide All

    - **EST + MEP (sin arquitectura):**
      - Hide ARQ.rvt
      - Vista que muestre relación MEP con estructura (crítico para clash detection)
      - **Entregable:** Screenshot: `E2-EST-MEP.png`
      - Unhide All

15. **Modelo federado completo:**
    - Unhide All (todas las disciplinas visibles)
    - Navegar a vista compleja que muestre interacción de las 3 disciplinas
    - Viewpoint tab > Save Viewpoint: "Modelo-Federado-Completo"
    - **Entregable:** Screenshot: `E2-Federado-Completo.png`

**PARTE D - File Options y Properties (5 minutos)**

16. **Explorar File Options:**
    - Project Browser panel (o View > Project Browser)
    - Clic derecho en "Edificio-Comercial-ARQ.rvt" > File Options

17. **Configurar opciones de ARQ:**
    - **Enabled**: ON (archivo visible)
    - **Transformation**: Verificar que sea "None" o coordenadas correctas
    - **Units**: Confirmar Meters
    - OK

18. **Repetir para EST y MEP:**
    - Verificar File Options de cada archivo
    - Asegurar consistencia de unidades
    - **Entregable:** Screenshot de File Options de MEP: `E2-MEP-FileOptions.png`

19. **Properties del modelo federado:**
    - View tab > Project Browser
    - Properties del proyecto (sin seleccionar archivo específico)
    - Observar:
      - Total Object Count (cantidad total de elementos federados)
      - Bounding Box (dimensiones del proyecto)
      - Number of Files (3 archivos)

**PARTE E - Guardar y Workflow de Actualización (5 minutos)**

20. **Guardar modelo federado NWF:**
    - File > Save As
    - Nombre: `Edificio-Comercial-Federado.nwf`
    - Tipo: .nwf (Navisworks File Set - mantiene links a archivos origen)
    - Save
    - **Nota:** .nwf NO embebe los modelos, solo guarda referencias. Si archivos origen cambian de ubicación, links se rompen.

21. **Guardar también como NWD (backup):**
    - File > Save As
    - Nombre: `Edificio-Comercial-Federado.nwd`
    - Tipo: .nwd (Navisworks Document - embebe todo)
    - Save
    - **Nota:** .nwd es archivo standalone, útil para distribución a stakeholders sin acceso a archivos origen.

22. **Simular actualización de modelo:**
    - Cerrar Navisworks (File > Close)
    - Re-abrir: File > Open > `Edificio-Comercial-Federado.nwf`
    - Si archivos origen hubieran cambiado, Navisworks detectaría cambios automáticamente
    - Home tab > Project panel > Refresh
    - Navisworks re-carga archivos origen, actualizando modelo federado

23. **Documentar workflow de actualización:**
    - **Entregable:** En `E2-Respuestas.pdf`, describir procedimiento completo de actualización cuando consultor envía nuevo modelo revisado.

### Entregables

1. **Screenshots (8 archivos PNG):**
   - `E2-ARQ-Solo.png` - Solo arquitectura
   - `E2-EST-Solo.png` - Solo estructura
   - `E2-MEP-Solo.png` - Solo MEP
   - `E2-ARQ-EST-Combined.png` - ARQ + EST
   - `E2-ARQ-MEP.png` - ARQ + MEP
   - `E2-EST-MEP.png` - EST + MEP
   - `E2-Federado-Completo.png` - Las 3 disciplinas
   - `E2-MEP-FileOptions.png` - File Options del modelo MEP

2. **Archivos Navisworks:**
   - `Edificio-Comercial-Federado.nwf` - File set con links
   - `Edificio-Comercial-Federado.nwd` - Document embebido

3. **Documento de respuestas:**
   - `E2-Respuestas.pdf` - Responder preguntas de evaluación

### Evaluación

**Preguntas a responder en `E2-Respuestas.pdf`:**

1. **Append vs Merge (15 puntos):** Explique la diferencia entre Append y Merge en Navisworks. ¿Cuándo usaría cada uno? ¿Por qué Append es preferido para modelos multi-disciplina?

2. **File Units (10 puntos):** ¿Por qué es crítico configurar unidades consistentes al federar modelos? ¿Qué problemas pueden surgir si archivos tienen unidades diferentes?

3. **NWF vs NWD (15 puntos):** Compare .nwf y .nwd. ¿Cuáles son ventajas/desventajas de cada formato? ¿Cuándo usar cada uno en proyectos reales?

4. **Workflow de Actualización (10 puntos):** Describa el procedimiento completo cuando un consultor envía modelo MEP actualizado (revisión 02) y debe reemplazar la versión anterior (revisión 01) en el modelo federado.

**Rúbrica de calificación:**

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Screenshots por Disciplina (21 pts)** | 0-21 | 7 screenshots correctos mostrando combinaciones apropiadas (3 pts c/u) |
| **Screenshot FileOptions (4 pts)** | 0-4 | FileOptions de MEP visible y correcto |
| **Archivos NWF y NWD (10 pts)** | 0-10 | Ambos archivos funcionales y guardados correctamente (5 pts c/u) |
| **Respuestas a Preguntas (50 pts)** | 0-50 | 4 preguntas respondidas completamente (según puntos asignados) |
| **Viewpoints Guardados (5 pts)** | 0-5 | 2 viewpoints guardados en archivos NWF/NWD |
| **Organización y Nomenclatura (10 pts)** | 0-10 | Archivos nombrados correctamente, organizados profesionalmente |
| **TOTAL** | **100** | |

**Criterios de éxito:**
- Mínimo 80/100 para aprobar
- Modelos deben estar alineados correctamente (coordenadas)
- Archivos NWF y NWD deben abrir sin errores
- Screenshots demuestran federación exitosa

---

## Ejercicio 3: Sistema de Viewpoints y Presentación Animada

**Lección asociada:** Lección 3 - Navegación y Viewpoints

**Duración:** 30 minutos

**Nivel de dificultad:** Intermedio

**Puntuación:** 100 puntos

### Escenario

El gerente de proyecto programó reunión con inversionistas y requiere presentación visual impactante del Edificio Comercial. Debe crear un conjunto de viewpoints estratégicos que cuenten la "historia" del proyecto: contexto exterior, recorrido por niveles, detalles arquitectónicos clave, y sistemas MEP. También debe crear animación entre viewpoints para presentación fluida.

La presentación debe ser profesional, con transiciones suaves y timing apropiado (2-3 segundos por viewpoint).

### Objetivos

- Crear conjunto coherente de viewpoints que narren el proyecto
- Utilizar Section Planes para vistas de corte
- Aplicar diferentes display styles según propósito de vista
- Configurar animaciones entre viewpoints
- Organizar viewpoints en folders lógicos
- Exportar presentación

### Archivos Requeridos

- `Edificio-Comercial-Federado.nwf` (del Ejercicio 2)
- O usar archivos individuales ARQ, EST, MEP

### Procedimiento Detallado

**PARTE A - Viewpoints de Contexto Exterior (10 minutos)**

1. **Abrir modelo federado:**
   - File > Open > `Edificio-Comercial-Federado.nwf`
   - Wait for load completo

2. **Configurar display style:**
   - Viewpoint tab > Display Style > Realistic
   - Lighting > Headlamp 100%
   - Background > Gradient: Azul cielo arriba, azul claro abajo

3. **Viewpoint 1 - Hero Shot (vista principal):**
   - Navegar a vista isométrica dramática del edificio completo
   - Ángulo: 45° aproximadamente, mostrando 2 fachadas
   - Altura: Ligeramente elevada (simular vista aérea desde drone)
   - Zoom: Edificio completo visible con contexto
   - Save Viewpoint: "01-Exterior-Hero-Shot"
   - Comments: "Vista principal del edificio - Presentación a inversionistas"

4. **Viewpoint 2 - Fachada Principal Frontal:**
   - ViewCube > Front
   - Zoom apropiado a fachada principal
   - Centrar entrada principal
   - Save Viewpoint: "02-Exterior-Fachada-Principal"

5. **Viewpoint 3 - Vista Aérea (Top):**
   - ViewCube > Top
   - Zoom para mostrar footprint completo del edificio + contexto
   - Save Viewpoint: "03-Exterior-Vista-Aerea"

6. **Screenshot de viewpoints exteriores:**
   - **Entregable:** Capturar screenshot de cada viewpoint (01, 02, 03) en alta resolución

**PARTE B - Viewpoints por Niveles con Section Planes (10 minutos)**

7. **Viewpoint 4 - Planta Nivel 1:**
   - Navegar a vista Top
   - Home tab > Navigate panel > Section Plane
   - Crear section plane horizontal cortando a altura de 1.5m sobre piso Nivel 1
   - Adjust section plane para mostrar layout Nivel 1
   - Zoom para que nivel llene pantalla
   - Save Viewpoint: "04-Planta-Nivel-1-Seccionado"
   - **Nota:** Section plane se guarda con viewpoint

8. **Viewpoint 5 - Planta Nivel 2:**
   - Ajustar section plane a 1.5m sobre piso Nivel 2
   - Save Viewpoint: "05-Planta-Nivel-2-Seccionado"

9. **Viewpoint 6 - Planta Nivel 3:**
   - Ajustar section plane a Nivel 3
   - Save Viewpoint: "06-Planta-Nivel-3-Seccionado"

10. **Viewpoint 7 - Planta Nivel 4 (Roof):**
    - Ajustar section plane a Nivel 4 / roof
    - Save Viewpoint: "07-Planta-Nivel-4-Roof"

11. **Viewpoint 8 - Corte Longitudinal:**
    - Home tab > Section Plane > Crear nuevo section plane VERTICAL
    - Orientar section plane para cortar edificio longitudinalmente (a lo largo)
    - Vista desde lado (perpendicular al corte)
    - Mostrar todos los niveles en corte
    - Display Style: Shaded with Edges (para claridad de sección)
    - Save Viewpoint: "08-Corte-Longitudinal"

12. **Viewpoint 9 - Corte Transversal:**
    - Ajustar section plane para corte transversal (perpendicular al anterior)
    - Save Viewpoint: "09-Corte-Transversal"

**PARTE C - Viewpoints de Detalles y Sistemas (10 minutos)**

13. **Viewpoint 10 - Detalle Escalera Principal:**
    - Desactivar section planes (Home tab > Section Plane > Disable All)
    - Navegar y zoom a escalera principal del edificio
    - Vista 3D que muestre detalle arquitectónico de escalera
    - Display Style: Realistic
    - Save Viewpoint: "10-Detalle-Escalera"

14. **Viewpoint 11 - Sistema MEP Cielo Raso Típico:**
    - Navegar a área de cielo raso con sistemas MEP visibles (ducts, pipes, cable trays)
    - Hide arquitectura (solo mostrar EST y MEP):
      - Selection Tree > ARQ.rvt > Hide
    - Appearance Profiler (opcional):
      - EST: Transparente 70%
      - MEP: Colores por disciplina (azul=mecánico, rojo=plomería, amarillo=eléctrico)
    - Save Viewpoint: "11-Sistemas-MEP-Cielo-Raso"

15. **Viewpoint 12 - Core MEP (Shafts verticales):**
    - Navegar a core del edificio donde están shafts verticales MEP
    - Section plane vertical para "abrir" el core
    - Vista que muestre risers verticales (pipes, ducts, conduits subiendo por niveles)
    - Save Viewpoint: "12-Core-MEP-Vertical"

16. **Viewpoint 13 - Lobby Interior (Walk mode):**
    - Unhide All (arquitectura visible)
    - Usar Walk mode para posicionarse en lobby principal Nivel 1
    - Vista "primera persona" mostrando arquitectura interior
    - Display Style: Realistic con lighting
    - Save Viewpoint: "13-Interior-Lobby"

17. **Viewpoint 14 - Oficina Típica Interior:**
    - Walk mode a oficina típica en Nivel 2 o 3
    - Vista mostrando ventanas, acabados, distribución espacial
    - Save Viewpoint: "14-Interior-Oficina-Tipo"

18. **Viewpoint 15 - Vista Nocturna Exterior (opcional - si tiempo permite):**
    - Volver a vista exterior isométrica (similar a VP01)
    - Background: Solid color negro (simular noche)
    - Lighting: Desactivar Headlamp, agregar Scene Lights simulando iluminación de fixtures
    - Display Style: Realistic
    - Save Viewpoint: "15-Exterior-Vista-Nocturna"

**PARTE D - Organizar Viewpoints en Folders (5 minutos)**

19. **Crear folders para organización:**
    - Saved Viewpoints palette
    - Clic derecho en espacio blanco > New Folder
    - Nombre: "A-EXTERIORES"
    - Repetir:
      - "B-PLANTAS-POR-NIVEL"
      - "C-CORTES"
      - "D-DETALLES"
      - "E-SISTEMAS-MEP"

20. **Mover viewpoints a folders:**
    - Drag viewpoints a folders apropiados:
      - A-EXTERIORES: VP 01, 02, 03, (15 si creado)
      - B-PLANTAS: VP 04, 05, 06, 07
      - C-CORTES: VP 08, 09
      - D-DETALLES: VP 10, 13, 14
      - E-SISTEMAS: VP 11, 12

21. **Verificar organización:**
    - Expandir/colapsar folders
    - **Entregable:** Screenshot de Saved Viewpoints palette organizado: `E3-Viewpoints-Organized.png`

**PARTE E - Crear Animación entre Viewpoints (5 minutos)**

22. **Configurar animación de presentación:**
    - Viewpoint tab > Playback panel > Animation
    - Add Animation > Viewpoint Animation

23. **Agregar viewpoints a animación:**
    - Animation Editor abre
    - En orden secuencial, agregar viewpoints:
      - 01-Hero → 02-Fachada → 03-Aerea → 04-N1 → 05-N2 → 06-N3 → 07-N4 → 08-Corte-Long → 09-Corte-Trans → 10-Escalera → 11-MEP → 12-Core → 13-Lobby → 14-Oficina
    - Configurar duración de cada viewpoint: 3 segundos
    - Transición entre viewpoints: 2 segundos (smooth transition)

24. **Preview animación:**
    - Animation Editor > Play
    - Observar transición fluida entre viewpoints
    - Ajustar timing si necesario (puede acelerar/desacelerar según preferencia)

25. **Export animación:**
    - Animation Editor > Export > Video
    - Format: MP4
    - Resolution: 1920x1080 (Full HD)
    - Frame Rate: 30 fps
    - Nombre: `E3-Presentacion-Edificio-Comercial.mp4`
    - Export (nota: puede tomar varios minutos según duración y calidad)
    - **Entregable:** Video de animación

**PARTE F - Guardar Proyecto Final**

26. **Save proyecto:**
    - File > Save (actualizar `Edificio-Comercial-Federado.nwf`)
    - File > Save As > `Ejercicio-3-Presentacion.nwd` (embedded document con todos los viewpoints)

### Entregables

1. **Screenshots de Viewpoints (mínimo 10 archivos PNG):**
   - `E3-VP01-Hero.png` a `E3-VP14-Oficina.png` (según viewpoints creados)

2. **Screenshot de Organización:**
   - `E3-Viewpoints-Organized.png` - Saved Viewpoints palette con folders

3. **Video de Animación:**
   - `E3-Presentacion-Edificio-Comercial.mp4` - Animación de viewpoints (1-2 minutos)

4. **Archivo Navisworks:**
   - `Ejercicio-3-Presentacion.nwd` - Con 10-15 viewpoints guardados y organizados

5. **Documento de respuestas:**
   - `E3-Respuestas.pdf`

### Evaluación

**Preguntas a responder en `E3-Respuestas.pdf`:**

1. **Section Planes (15 puntos):** Explique cómo Section Planes mejoran presentaciones arquitectónicas. Proporcione 3 ejemplos de uso efectivo en coordinación BIM.

2. **Organización de Viewpoints (10 puntos):** ¿Por qué es importante organizar viewpoints en folders en proyectos grandes? ¿Qué convención de nomenclatura recomienda?

3. **Display Styles en Presentaciones (10 puntos):** Compare Realistic vs Shaded with Edges para presentaciones. ¿Cuándo usar cada uno según la audiencia?

4. **Animaciones (15 puntos):** Describa el valor de animaciones de viewpoints en reuniones de coordinación vs presentaciones a clientes. ¿Qué diferencias de timing/contenido aplicaría?

**Rúbrica de calificación:**

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Cantidad de Viewpoints (20 pts)** | 0-20 | 10-15 viewpoints creados (2 pts por cada viewpoint válido) |
| **Calidad de Viewpoints (15 pts)** | 0-15 | Encuadres profesionales, display styles apropiados, iluminación correcta |
| **Uso de Section Planes (10 pts)** | 0-10 | Section planes aplicados correctamente en viewpoints de planta/corte |
| **Organización en Folders (10 pts)** | 0-10 | Viewpoints organizados lógicamente en folders con nomenclatura clara |
| **Screenshots (15 pts)** | 0-15 | Screenshots de alta calidad de viewpoints clave |
| **Animación de Video (15 pts)** | 0-15 | Video fluido, timing apropiado, transiciones suaves, calidad alta |
| **Respuestas a Preguntas (50 pts)** | 0-50 | 4 preguntas respondidas (según puntos asignados) |
| **Profesionalismo General (5 pts)** | 0-5 | Presentación coherente que "cuenta historia" del proyecto |
| **TOTAL** | **100** | |

**Criterios de éxito:**
- Mínimo 80/100 para aprobar
- Video de animación debe reproducir sin errores
- Viewpoints deben seguir secuencia lógica de presentación
- Display styles y lighting apropiados para cada vista

---

## Ejercicio 4: Selection Sets Avanzados por Disciplina y Sistema

**Lección asociada:** Lección 4 - Selection Sets y Search Sets

**Duración:** 35 minutos

**Nivel de dificultad:** Avanzado

**Puntuación:** 100 puntos

### Escenario

El equipo de coordinación MEP requiere sets organizados de elementos por disciplina y sistema para configurar clash tests (que se harán en Módulo 2). Como coordinador BIM, debe crear search sets dinámicos y selection sets específicos que serán usados repetitivamente en coordinación semanal.

También debe crear appearance profiles para comunicación visual durante reuniones de coordinación (colorización por disciplina/sistema).

### Objetivos

- Crear search sets con criterios múltiples y operadores booleanos
- Guardar selection sets para tracking de elementos específicos
- Aplicar appearance profiler para colorización por propiedades
- Gestionar visibilidad con Hide/Required/Override
- Documentar sets para uso del equipo

### Archivos Requeridos

- `Edificio-Comercial-Federado.nwf`

### Procedimiento Detallado

**PARTE A - Search Sets por Disciplina (15 minutos)**

1. **Abrir modelo:**
   - File > Open > `Edificio-Comercial-Federado.nwf`

2. **Search Set 1 - Toda la Arquitectura:**
   - Home tab > Select & Search panel > Find Items
   - Configurar criterio:
     - Property: "File > Internal Name"
     - Condition: Contains
     - Value: "ARQ"
   - Find All (todos los elementos del archivo ARQ se seleccionan)
   - Save Search
   - Name: "SS-01-Arquitectura-Completa"
   - Comments: "Todos los elementos arquitectónicos del proyecto"
   - OK

3. **Search Set 2 - Toda la Estructura:**
   - Find Items
   - Property: File > Internal Name
   - Condition: Contains
   - Value: "EST"
   - Save Search: "SS-02-Estructura-Completa"

4. **Search Set 3 - Todo MEP:**
   - Property: File > Internal Name
   - Condition: Contains
   - Value: "MEP"
   - Save Search: "SS-03-MEP-Completo"

5. **Search Set 4 - Muros Exteriores:**
   - Find Items
   - Criterio 1:
     - Property: Category > Category
     - Condition: Equals
     - Value: Walls
   - Criterio 2 (AND):
     - Property: Element > Layer (o Function si está disponible)
     - Condition: Contains
     - Value: "Exterior" (o buscar walls con función exterior)
   - Si no funciona Layer, alternativa:
     - Usar Properties palette de muros exteriores para identificar propiedad distintiva
   - Save Search: "SS-04-Muros-Exteriores"

6. **Search Set 5 - Vigas Estructurales (Beams):**
   - Property: Category > Category
   - Condition: Equals
   - Value: Structural Framing (o Beams)
   - Save Search: "SS-05-Vigas-Estructurales"

7. **Search Set 6 - Columnas Estructurales:**
   - Property: Category
   - Condition: Equals
   - Value: Structural Columns
   - Save Search: "SS-06-Columnas-Estructurales"

8. **Search Set 7 - Todos los Ducts (Ductwork):**
   - Property: Category
   - Condition: Equals
   - Value: Ducts
   - Save Search: "SS-07-Ducts-Completo"

9. **Search Set 8 - Ducts de Supply Air (específico):**
   - Criterio 1:
     - Property: Category
     - Condition: Equals
     - Value: Ducts
   - Criterio 2 (AND):
     - Property: Element > System Type (o System Name)
     - Condition: Equals (o Contains)
     - Value: "Supply Air" (ajustar según nomenclatura del modelo)
   - Save Search: "SS-08-Ducts-Supply-Air"

10. **Search Set 9 - Tuberías (Pipes Completas):**
    - Property: Category
    - Condition: Equals
    - Value: Pipes
    - Save Search: "SS-09-Pipes-Completo"

11. **Search Set 10 - Cable Trays y Conduits (Eléctrico):**
    - Criterio 1:
      - Property: Category
      - Condition: Equals
      - Value: Cable Trays
    - Cambiar a OR (dropdown antes del criterio)
    - Criterio 2 (OR):
      - Property: Category
      - Condition: Equals
      - Value: Conduits
    - Save Search: "SS-10-Electrico-CableTrays-Conduits"

12. **Verificar todos los Search Sets:**
    - Sets palette (View > Workspace > Windows > Sets)
    - Verificar que 10 search sets aparecen listados
    - Probar cada set: Double-click > Objetos correspondientes se seleccionan
    - **Entregable:** Screenshot de Sets palette: `E4-Search-Sets-List.png`

**PARTE B - Selection Sets Específicos (10 minutos)**

13. **Selection Set 1 - Elementos de Entrada Principal (Ad-hoc):**
    - Navegar a entrada principal del edificio
    - Seleccionar manualmente (Ctrl+Click):
      - Puerta principal
      - Ventanas adyacentes a entrada
      - Columnas de la entrada
      - Canopy/cubierta de entrada (si existe)
      - Landscaping de entrada (si existe)
    - Total: 5-10 elementos seleccionados
    - Home tab > Select & Search > Save Selection
    - Name: "SEL-01-Elementos-Entrada-Principal"
    - Comments: "Elementos arquitectónicos de entrada principal - Para RFI de acabados"
    - OK

14. **Selection Set 2 - Equipos MEP Críticos Nivel 1:**
    - Navegar por Nivel 1 e identificar equipos MEP principales (chillers, boilers, air handlers, panels)
    - Seleccionar manualmente 5-8 equipos críticos
    - Save Selection: "SEL-02-Equipos-Criticos-N1"
    - Comments: "Equipos MEP críticos Nivel 1 - Requieren coordinación de acceso/mantenimiento"

15. **Selection Set 3 - Elementos para Revisión Arquitecto (Simulación):**
    - Seleccionar aleatoriamente 10-15 elementos diversos (walls, doors, windows)
    - Save Selection: "SEL-03-Revision-Arquitecto-RFI-025"
    - Comments: "Elementos que requieren aclaración de arquitecto - RFI 025 - Fecha límite 2024-12-01"

**PARTE C - Combinar Sets (5 minutos)**

16. **Operación Union - Toda la Estructura + Todo MEP:**
    - Sets palette
    - Clic derecho en espacio blanco > Combine Sets
    - Operation: Union
    - Select Sets:
      - SS-02-Estructura-Completa
      - SS-03-MEP-Completo
    - Combine
    - Name: "COMBINED-EST-MEP"
    - Comments: "Estructura + MEP combinados - Para clash detection EST/MEP"
    - OK
    - Resultado: Set contiene TODOS los elementos de EST + TODOS los elementos de MEP

17. **Operación Intersection - Ducts en Nivel 2 (Simulación):**
    - Primero crear Search Set auxiliar "Nivel-2":
      - Find Items > Property: Level > Equals: "Level 2"
      - Save Search: "AUX-Nivel-2"
    - Combine Sets > Intersection
    - Select:
      - SS-07-Ducts-Completo
      - AUX-Nivel-2
    - Name: "COMBINED-Ducts-Nivel-2"
    - Resultado: Solo ducts QUE ESTÁN en Nivel 2

**PARTE D - Appearance Profiler: Colorización por Disciplina (10 minutos)**

18. **Crear Appearance Profile - Disciplinas:**
    - Viewpoint tab > Appearance panel > Appearance Profiler
    - New Profile
    - Name: "PROFILE-Colores-Disciplinas"

19. **Definición 1 - Arquitectura Gris Transparente:**
    - Add Definition
    - Name: "Arquitectura-Gris-70%"
    - Edit Selection:
      - Property: File > Internal Name
      - Condition: Contains
      - Value: "ARQ"
      - OK
    - Appearance:
      - Color: Gris claro (RGB 200, 200, 200)
      - Transparency: 70%
    - OK

20. **Definición 2 - Estructura Gris Sólido:**
    - Add Definition
    - Name: "Estructura-Gris-Solido"
    - Selection: File Contains "EST"
    - Appearance:
      - Color: Gris medio (RGB 150, 150, 150)
      - Transparency: 0%

21. **Definición 3 - Ducts Azul:**
    - Add Definition
    - Name: "MEP-Ducts-Azul"
    - Selection: Category Equals "Ducts"
    - Appearance:
      - Color: Azul (RGB 0, 120, 215)
      - Transparency: 0%

22. **Definición 4 - Pipes Rojo:**
    - Name: "MEP-Pipes-Rojo"
    - Selection: Category Equals "Pipes"
    - Color: Rojo (RGB 220, 20, 60)

23. **Definición 5 - Eléctrico Amarillo:**
    - Name: "MEP-Electrico-Amarillo"
    - Selection: Category Equals "Cable Trays" OR Category Equals "Conduits"
    - Color: Amarillo (RGB 255, 215, 0)

24. **Apply Profile:**
    - Appearance Profiler > Apply
    - Modelo se coloriza según disciplinas/sistemas
    - Navegar por modelo para verificar colorización
    - **Entregable:** Screenshot con profile aplicado: `E4-Appearance-Profile-Applied.png`

25. **Save Profile:**
    - Appearance Profiler > Save
    - Profile guardado para reutilizar

**PARTE E - Hide/Required/Override (5 minutos)**

26. **Marcar Grids como Required:**
    - Selection Tree > Buscar "Grids" (puede estar en ARQ o EST)
    - Expandir categoría Grids
    - Seleccionar todos los grids (Ctrl+A dentro de categoría)
    - Home tab > Visibility panel > Required
    - Grids ahora marcados como Always Visible

27. **Test Hide con Required:**
    - Selection Tree > Clic derecho en "Edificio-Comercial-ARQ.rvt" > Hide
    - Arquitectura oculta PERO grids permanecen visibles (porque son Required)
    - **Entregable:** Screenshot mostrando arquitectura oculta con grids visibles: `E4-Required-Grids.png`

28. **Restore:**
    - Unhide All

**PARTE F - Documentación de Sets (5 minutos)**

29. **Exportar lista de sets:**
    - Sets palette > Clic derecho > Select All
    - No hay función directa de export, así que documentar manualmente:
    - **Entregable:** En `E4-Respuestas.pdf`, crear tabla:

| ID | Nombre | Tipo | Descripción | Uso Principal |
|----|--------|------|-------------|---------------|
| SS-01 | Arquitectura-Completa | Search Set | Todos los elementos ARQ | Clash detection ARQ vs MEP |
| SS-02 | Estructura-Completa | Search Set | Todos los elementos EST | Clash detection EST vs MEP |
| ... | ... | ... | ... | ... |

30. **Guardar proyecto:**
    - File > Save (actualizar .nwf)
    - File > Save As > `Ejercicio-4-Selection-Sets.nwd`

### Entregables

1. **Screenshots (3 archivos PNG):**
   - `E4-Search-Sets-List.png` - Sets palette con 10+ search sets
   - `E4-Appearance-Profile-Applied.png` - Modelo con colorización por disciplina
   - `E4-Required-Grids.png` - Grids visibles con arquitectura oculta

2. **Archivo Navisworks:**
   - `Ejercicio-4-Selection-Sets.nwd` - Con 10+ search sets, 3 selection sets, 1 appearance profile

3. **Documento de respuestas:**
   - `E4-Respuestas.pdf` - Incluye tabla de documentación de sets

### Evaluación

**Preguntas a responder en `E4-Respuestas.pdf`:**

1. **Search Sets Dinámicos (15 puntos):** Explique por qué search sets son "dinámicos" y proporcione ejemplo donde esta característica es ventajosa vs selection sets estáticos en proyecto BIM que se actualiza semanalmente.

2. **Operadores Booleanos (15 puntos):** Describa cómo usar operaciones Union, Intersection y Difference para crear set complejo: "Todos los ducts del Nivel 3 que NO han sido coordinados aún" (asuma que tiene set "Ducts-Nivel-3" y selection set "Ducts-Coordinados").

3. **Appearance Profiler en Coordinación (10 puntos):** ¿Cómo mejora appearance profiler la comunicación en reuniones de coordinación con stakeholders no técnicos? Proporcione ejemplo concreto.

4. **Required Objects (10 puntos):** Explique el concepto de Required objects y 3 casos de uso en coordinación BIM donde marcar elementos como Required previene problemas.

**Tabla de documentación de sets (incluir en PDF):**

Crear tabla completa documentando TODOS los sets creados (10 search sets + 3 selection sets + 2 combined sets) con columnas: ID, Nombre, Tipo, Criterios/Descripción, Uso Principal.

**Rúbrica de calificación:**

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Search Sets Creados (30 pts)** | 0-30 | 10 search sets funcionales con criterios correctos (3 pts c/u) |
| **Selection Sets Creados (9 pts)** | 0-9 | 3 selection sets ad-hoc (3 pts c/u) |
| **Combined Sets (6 pts)** | 0-6 | 2 combined sets con operaciones booleanas correctas (3 pts c/u) |
| **Appearance Profile (10 pts)** | 0-10 | Profile con 5 definiciones, colorización correcta |
| **Required Objects (5 pts)** | 0-5 | Grids marcados como Required, test exitoso |
| **Screenshots (10 pts)** | 0-10 | 3 screenshots de alta calidad demostrando funciones |
| **Documentación de Sets (10 pts)** | 0-10 | Tabla completa con todos los sets documentados profesionalmente |
| **Respuestas a Preguntas (50 pts)** | 0-50 | 4 preguntas respondidas (según puntos asignados) |
| **TOTAL** | **100** | |

**Criterios de éxito:**
- Mínimo 80/100 para aprobar
- Search sets deben seleccionar elementos correctos al ejecutar
- Appearance profile debe colorizar disciplinas correctamente
- Documentación debe ser clara y útil para otros miembros del equipo

---

## Ejercicio 5: Configuración de Visualización Profesional para Presentación

**Lección asociada:** Lección 5 - Visualización y Apariencia

**Duración:** 40 minutos

**Nivel de dificultad:** Avanzado

**Puntuación:** 100 puntos

### Escenario

El cliente del proyecto (inversionista internacional) visitará la oficina en 3 días y requiere presentación de alta calidad del diseño arquitectónico. El arquitecto principal solicita que prepare viewpoint de rendering fotorrealístico de la fachada principal con iluminación natural, materiales aplicados, y background profesional.

Adicionalmente, el equipo MEP requiere viewpoint técnico de sistemas en cielo raso con colorización por disciplina para revisión interna.

Debe demostrar dominio de display styles, iluminación, materiales y render settings.

### Objetivos

- Aplicar display styles apropiados según propósito (Realistic para cliente, Shaded para coordinación)
- Configurar sunlight geolocalizado para iluminación natural
- Aplicar materiales Presenter a elementos arquitectónicos
- Optimizar render settings para balance calidad/performance
- Configurar backgrounds profesionales
- Crear viewpoints de presentación de alta calidad

### Archivos Requeridos

- `Edificio-Comercial-Federado.nwf`

### Procedimiento Detallado

**PARTE A - Viewpoint de Presentación Arquitectónica (25 minutos)**

1. **Abrir modelo y preparación:**
   - File > Open > `Edificio-Comercial-Federado.nwf`
   - Navegar a vista exterior isométrica de fachada principal
   - Ángulo óptimo: 45° mostrando dos fachadas

2. **Configurar Display Style Realistic:**
   - Viewpoint tab > Display Style > Realistic
   - Display Style Options:
     - Render Quality: High
     - Texture Resolution: 2048px
     - Anti-aliasing: 4x MSAA
     - Ambient Occlusion: Medium
     - Shadows: High
     - Reflections: Medium
   - Apply

3. **Configurar Sunlight (Iluminación Natural):**
   - Lighting panel > Headlamp: Disable (OFF)
   - Sunlight: Enable (ON)
   - Location Settings:
     - Método 1: Si modelo Revit tiene Project Location, se importa automáticamente
     - Método 2: Manual (ejemplo genérico):
       - Latitude: -12.04° (Lima, Perú - ajustar según su proyecto)
       - Longitude: -77.04°
       - Time Zone: UTC-5
   - Date/Time:
     - Date: 21 Diciembre (verano, máxima luz solar)
     - Time: 4:00 PM (Golden Hour - luz cálida)
   - Sunlight Properties:
     - Intensity: 100%
     - Color: Blanco ligeramente amarillo (RGB 255, 253, 208)
     - Shadows: Enable, High quality
   - Apply

4. **Observar iluminación:**
   - Modelo ahora iluminado con luz solar direccional
   - Sombras visibles proyectadas según posición del sol
   - Luz cálida de golden hour

5. **Aplicar Materiales Presenter - Muros Exteriores:**
   - Navegar a lista de materiales: Viewpoint tab > Materials panel > Presenter
   - Seleccionar muros exteriores:
     - Método A: Selection Tree > Buscar categoría Walls (exteriores)
     - Método B: Activar search set "SS-04-Muros-Exteriores" (si creado en Ejercicio 4)
   - Drag material desde Presenter library > Drop sobre muros seleccionados:
     - Material sugerido: "Concrete - Architectural" o "Stone - Granite"
   - Verificar aplicación: Muros ahora muestran textura fotorrealística

6. **Aplicar Materiales - Ventanas:**
   - Seleccionar todas las ventanas:
     - Find Items > Category Equals "Windows" > Select All
   - Aplicar material: "Glass - Clear"
   - Edit material properties (si necesario):
     - Transparency: 85%
     - Reflectivity: 25%
     - Refraction Index: 1.52
   - Ventanas ahora transparentes con reflejos realistas

7. **Aplicar Materiales - Estructura Metálica (si visible):**
   - Si hay elementos de acero expuestos (columns, beams decorativos)
   - Seleccionar elementos
   - Material: "Metal - Steel Brushed" o "Metal - Aluminum"

8. **Aplicar Materiales - Pisos/Pavimentos (si visibles):**
   - Seleccionar surfaces de pisos exteriores (plazas, terrazas)
   - Material: "Stone - Granite Gray" o "Concrete - Polished"

9. **Verificar escala de texturas:**
   - Zoom in a muro con textura
   - Verificar que textura tiene escala realista (no demasiado grande o pequeña)
   - Si escala incorrecta:
     - Seleccionar objeto > Properties > Materials > Edit Material > Scale
     - Ajustar scale (ej: 1.0, 2.0, 0.5) hasta que textura se vea realista
   - Zoom out

10. **Configurar Background - Gradient de Cielo:**
    - Viewpoint tab > Background panel
    - Type: Gradient
    - Top Color: Azul cielo claro (RGB 135, 206, 250)
    - Bottom Color: Naranja-rosado suave (RGB 255, 200, 150) - simula golden hour
    - Orientation: Vertical
    - Apply
    - Background ahora simula cielo de atardecer

11. **Ajustar vista final:**
    - Orbit ligeramente para ángulo más dramático
    - Zoom óptimo: Edificio principal llena 70-80% del frame, contexto visible
    - Centrar composición

12. **Guardar Viewpoint de Presentación:**
    - Viewpoint tab > Save Viewpoint
    - Name: "PRESENTATION-Fachada-Principal-Golden-Hour"
    - Comments: "Rendering fotorrealístico para presentación a cliente - Iluminación natural golden hour - Materiales aplicados"
    - OK

13. **Capturar imagen de alta resolución:**
    - Output tab > Visuals panel > Screenshot
    - Resolution: 3840x2160 (4K) o máxima disponible
    - Format: PNG (sin compresión)
    - Filename: `E5-Presentation-Facade-4K.png`
    - Save
    - **Entregable:** Esta imagen es entregable principal

**PARTE B - Viewpoint Técnico MEP con Colorización (15 minutos)**

14. **Nuevo viewpoint - Sistemas MEP Cielo Raso:**
    - Navegar a vista de sistemas MEP en cielo raso (ducts, pipes, cable trays densamente distribuidos)
    - Sección horizontal para "ver dentro" del cielo raso (section plane si necesario)

15. **Cambiar Display Style a Shaded with Edges:**
    - Display Style > Shaded
    - Enable "Display Edges"
    - Propósito: Claridad técnica, performance óptima

16. **Lighting técnico:**
    - Lighting > Disable Sunlight
    - Lighting > Enable Headlamp, Intensity 100%
    - Iluminación uniforme para análisis técnico

17. **Hide Arquitectura y Estructura:**
    - Selection Tree > ARQ.rvt > Hide
    - EST.rvt > Transparencia 70% (o Hide si prefiere)
    - Solo MEP claramente visible

18. **Aplicar Appearance Profile de Ejercicio 4:**
    - Si tiene profile "PROFILE-Colores-Disciplinas" del Ejercicio 4:
      - Viewpoint tab > Appearance panel > Select profile > Apply
    - Si NO tiene, crear rápido:
      - Appearance Profiler > New Profile: "MEP-Colores-Sistemas"
      - Definición 1: Ducts = Azul
      - Definición 2: Pipes = Rojo
      - Definición 3: Cable Trays/Conduits = Amarillo
      - Apply

19. **Background sólido para claridad:**
    - Background > Type: Solid Color
    - Color: Negro (para contraste máximo con sistemas colorizados)
    - Apply

20. **Save Viewpoint técnico:**
    - Save Viewpoint: "TECHNICAL-MEP-Cielo-Raso-Colores"
    - Comments: "Vista técnica sistemas MEP con colorización por disciplina - Para coordinación interna"

21. **Screenshot:**
    - Screenshot: 1920x1080
    - Filename: `E5-Technical-MEP-Colored.png`
    - **Entregable**

**PARTE C - Comparación de Display Styles (10 minutos)**

22. **Crear serie de screenshots del MISMO viewpoint con diferentes display styles:**
    - Volver al viewpoint "PRESENTATION-Fachada-Principal-Golden-Hour"
    - Unhide All primero si algo está oculto

23. **Screenshot 1 - Shaded:**
    - Display Style > Shaded
    - Screenshot: `E5-Comparison-Shaded.png`

24. **Screenshot 2 - Shaded with Edges:**
    - Display Style > Shaded, Enable Edges
    - Screenshot: `E5-Comparison-Shaded-Edges.png`

25. **Screenshot 3 - Realistic (ya capturado):**
    - Display Style > Realistic
    - (Ya tenemos `E5-Presentation-Facade-4K.png`)

26. **Screenshot 4 - Wireframe:**
    - Display Style > Wireframe
    - Screenshot: `E5-Comparison-Wireframe.png`

27. **Screenshot 5 - Hidden Line:**
    - Display Style > Hidden Line
    - Background > Solid White (para look de plano técnico)
    - Screenshot: `E5-Comparison-Hidden-Line.png`

**PARTE D - Render Settings Performance Test (5 minutos)**

28. **Comparación de Render Quality:**
    - Volver a Display Style Realistic
    - Restaurar background gradient

29. **Test 1 - Low Quality:**
    - Display Style Options > Render Quality: Low
    - Observar:
      - Texturas de baja resolución
      - Sin anti-aliasing (aristas dentadas)
      - Sin sombras suaves
      - Sin ambient occlusion
    - Screenshot: `E5-Quality-Low.png`
    - Anotar FPS (si Display muestra) o sensación de fluidez

30. **Test 2 - Medium Quality:**
    - Render Quality: Medium
    - Screenshot: `E5-Quality-Medium.png`

31. **Test 3 - High Quality (default para presentación):**
    - Render Quality: High
    - Screenshot: `E5-Quality-High.png`

32. **Análisis:**
    - **Entregable:** En `E5-Respuestas.pdf`, crear tabla comparando Low/Medium/High:
      - Calidad visual (1-10)
      - Performance percibida (Excelente/Buena/Media/Baja)
      - Uso recomendado (Coordinación/Revisión/Presentación)

**PARTE E - Guardar Proyecto**

33. **Save:**
    - File > Save (actualizar .nwf)
    - File > Save As > `Ejercicio-5-Visualization.nwd`

### Entregables

1. **Screenshot Principal de Presentación:**
   - `E5-Presentation-Facade-4K.png` - Rendering fotorrealístico 4K con materiales, sunlight, background gradient

2. **Screenshot Técnico MEP:**
   - `E5-Technical-MEP-Colored.png` - Vista técnica colorizada por disciplina

3. **Serie de Comparación Display Styles (5 archivos):**
   - `E5-Comparison-Shaded.png`
   - `E5-Comparison-Shaded-Edges.png`
   - `E5-Comparison-Wireframe.png`
   - `E5-Comparison-Hidden-Line.png`
   - (Realistic ya incluido en principal)

4. **Serie de Comparación Render Quality (3 archivos):**
   - `E5-Quality-Low.png`
   - `E5-Quality-Medium.png`
   - `E5-Quality-High.png`

5. **Archivo Navisworks:**
   - `Ejercicio-5-Visualization.nwd` - Con viewpoints de presentación y técnico

6. **Documento de respuestas:**
   - `E5-Respuestas.pdf`

### Evaluación

**Preguntas a responder en `E5-Respuestas.pdf`:**

1. **Sunlight Geolocalizado (15 puntos):** Explique cómo configurar sunlight para análisis de asoleamiento de plaza exterior en proyecto en Ciudad de México (Lat: 19.43°N, Lon: -99.13°W) en solsticio de invierno (21 Diciembre) a diferentes horas (8AM, 12PM, 4PM). ¿Qué información crítica provee este análisis para diseño de espacios exteriores?

2. **Materiales Fotorrealísticos (15 puntos):** Describa configuración completa de material de vidrio realista incluyendo diffuse color, transparency, reflectivity, refraction index. ¿Por qué cada propiedad es importante para rendering convincente?

3. **Display Styles por Audiencia (10 puntos):** Compare display styles apropiados para: (a) Presentación a cliente no técnico, (b) Revisión técnica con ingeniero estructural, (c) Clash detection con equipo MEP. Justifique cada selección.

4. **Performance Optimization (10 puntos):** En modelo federado de 3 millones de elementos, describa estrategia de optimización para mantener productividad en coordinación diaria mientras preserva capacidad de generar renders de alta calidad cuando sea necesario.

**Tabla de comparación Render Quality (incluir en PDF):**

| Render Quality | Calidad Visual (1-10) | Performance | Texturas | Shadows | AA | AO | Uso Recomendado |
|----------------|----------------------|-------------|----------|---------|----|----|-----------------|
| Low | | | | | | | |
| Medium | | | | | | | |
| High | | | | | | | |

**Rúbrica de calificación:**

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Screenshot Presentación 4K (25 pts)** | 0-25 | Rendering fotorrealístico de alta calidad con materiales, sunlight, background correcto |
| **Calidad de Iluminación (10 pts)** | 0-10 | Sunlight configurado correctamente, sombras realistas, golden hour visible |
| **Materiales Aplicados (10 pts)** | 0-10 | Mínimo 3 tipos de materiales (concrete/stone, glass, metal) aplicados correctamente |
| **Screenshot Técnico MEP (10 pts)** | 0-10 | Vista técnica clara con colorización por disciplina |
| **Serie Display Styles (10 pts)** | 0-10 | 5 screenshots comparando display styles (2 pts c/u) |
| **Serie Render Quality (10 pts)** | 0-10 | 3 screenshots comparando quality settings (3.3 pts c/u) |
| **Viewpoints Guardados (5 pts)** | 0-5 | 2 viewpoints (presentación + técnico) funcionales |
| **Respuestas a Preguntas (50 pts)** | 0-50 | 4 preguntas + tabla comparación (según puntos asignados) |
| **Profesionalismo Visual (5 pts)** | 0-5 | Composición, encuadre, balance de imagen de presentación |
| **TOTAL** | **100** | |

**Criterios de éxito:**
- Mínimo 80/100 para aprobar
- Screenshot de presentación debe ser "client-ready" (calidad profesional)
- Materiales deben verse realistas (escala correcta, propiedades apropiadas)
- Iluminación debe simular condiciones naturales convincentemente

---

## Ejercicio 6: Mediciones, Redline Markup y Documentación de Issues

**Lección asociada:** Lección 6 - Measure y Redline Tools

**Duración:** 35 minutos

**Nivel de dificultad:** Avanzado

**Puntuación:** 100 puntos

### Escenario

Durante revisión de coordinación, el equipo identificó 3 issues críticos que requieren documentación formal:

1. **Issue de clearance:** Duct principal tiene clearance insuficiente bajo beam estructural (código requiere 100mm mínimo)
2. **Issue dimensional:** Altura libre en pasillo crítico no cumple 2.40m requerido para tránsito de personal/equipos
3. **Issue de área:** Se requiere verificar área de piso de oficina tipo para cálculo de materiales de acabado

Debe medir, documentar con redline markup, crear viewpoints, y generar reporte profesional de cada issue para RFI (Request for Information).

### Objetivos

- Realizar mediciones precisas (Point to Point, Shortest Distance, Area)
- Aplicar redline markup (Text, Arrows, Tags, Clouds) para documentación visual
- Crear viewpoints documentados de issues
- Exportar measurements a Excel
- Generar reporte profesional de issues
- Demostrar workflow completo de documentación

### Archivos Requeridos

- `Edificio-Comercial-Federado.nwf`

### Procedimiento Detallado

**PARTE A - Issue 1: Clearance Insuficiente Duct/Beam (15 minutos)**

1. **Abrir modelo:**
   - File > Open > `Edificio-Comercial-Federado.nwf`

2. **Navegar a área problemática:**
   - Identificar área con duct principal cerca de beam estructural
   - Zoom in para vista clara de ambos elementos
   - Display Style: Shaded with Edges (claridad técnica)

3. **Medir Shortest Distance:**
   - Review tab > Measure > Shortest Distance
   - Click en duct principal (elemento 1)
   - Click en beam estructural adyacente (elemento 2)
   - Navisworks calcula y muestra distancia mínima
   - **Ejemplo resultado:** "0.078 m" (78mm)
   - **Verificar código:** Requiere 100mm mínimo
   - **Análisis:** Deficiencia de 22mm (78mm - 100mm)

4. **Anotar medición:**
   - Measure Tools palette: Measurement aparece listada
   - Properties: Verificar coordenadas XYZ de puntos

5. **Redline Markup - Text Comment:**
   - Review tab > Redline > Text
   - Click cerca de la interferencia
   - Escribir:
   ```
   ISSUE #001 - CLEARANCE INSUFICIENTE

   Ubicación: Grid B-3, Level 2, Cielo Raso
   Elementos:
   - Duct: 24"x48" Supply Air
   - Beam: W16x31 Structural Steel

   Clearance actual: 78mm
   Clearance requerido: 100mm (código + tolerancias)
   Deficiencia: 22mm

   Criticidad: ALTA - Violación de código

   Solución propuesta:
   Opción A: Bajar beam 30mm (clearance resultante 108mm)
   Opción B: Re-route duct por pasillo adyacente

   Responsable: Coordinador MEP
   Fecha límite: 2024-12-05
   ```
   - Formatear texto:
     - Font: Arial Bold 11pt
     - Color: Blanco
     - Background: Rojo semi-transparente (alerta crítica)

6. **Redline - Arrow:**
   - Review tab > Redline > Arrow
   - Drag desde text comment hasta punto exacto de clearance mínimo (donde línea de Shortest Distance toca los objetos)
   - Arrow properties:
     - Color: Rojo
     - Line Weight: 3 pixels
     - Arrowhead: Filled

7. **Redline - Tag:**
   - Review tab > Redline > Tag
   - Click en el duct
   - Tag automático aparece con número "1"
   - Edit tag: Double-click > Cambiar a "#001"
   - Tag properties:
     - Symbol: Circle
     - Color: Rojo
     - Size: 30px

8. **Redline - Cloud:**
   - Review tab > Redline > Cloud
   - Click y drag para rodear área completa del clash (duct + beam + zona circundante)
   - Cloud properties:
     - Color: Amarillo (alerta)
     - Line Weight: 2 pixels

9. **Save Viewpoint con markups:**
   - Ajustar vista para encuadre óptimo del issue
   - Viewpoint tab > Save Viewpoint
   - Name: "ISSUE-001-Clearance-Duct-Beam-B3"
   - Comments: "Clearance insuficiente 22mm entre duct 24x48 y beam W16x31. Ver redline markup para detalles y solución propuesta."
   - OK
   - **Nota:** Redlines se guardan con viewpoint

10. **Screenshot Issue 1:**
    - Output tab > Screenshot
    - Resolution: 1920x1080
    - Filename: `E6-Issue-001-Clearance.png`
    - **Entregable**

**PARTE B - Issue 2: Altura Libre Insuficiente en Pasillo (10 minutos)**

11. **Navegar a pasillo crítico:**
    - Identificar pasillo con duct/pipe bajo que reduce altura libre
    - Vista lateral que muestre claramente piso terminado hasta elemento más bajo del cielo raso

12. **Medir Point to Point (Altura Libre):**
    - Review tab > Measure > Point to Point
    - Punto 1: Click en top surface de piso terminado (Nivel 2)
    - Punto 2: Click en bottom surface de elemento más bajo en cielo raso (duct, pipe, o cable tray)
    - **Ejemplo resultado:** "2.32 m"
    - **Verificar requisito:** 2.40m mínimo para paso de personal/equipos
    - **Análisis:** Deficiencia de 80mm (2.32m vs 2.40m requerido)

13. **Redline Text Comment:**
   ```
   ISSUE #002 - ALTURA LIBRE INSUFICIENTE

   Ubicación: Pasillo Principal, Grid C-D entre 3-4, Level 2

   Altura libre actual: 2.32m
   Altura libre requerida: 2.40m (código accesibilidad + logística)
   Deficiencia: 8cm

   Criticidad: MEDIA - Afecta logística de construcción

   Impacto:
   - Paso de equipos altos puede ser restringido
   - Personal alto puede requerir precaución

   Solución propuesta:
   Opción A: Subir cielo raso 10cm (resultaría en 2.42m)
   Opción B: Re-route duct más alto 15cm (clearance 2.47m)

   Responsable: Coordinador Arquitectura + MEP
   ```
   - Format: Arial Bold, Negro sobre fondo Amarillo

14. **Redline - Arrow + Tag #002:**
    - Arrow desde text hasta medición
    - Tag #002 en elemento bajo del cielo raso

15. **Save Viewpoint:**
    - Name: "ISSUE-002-Altura-Libre-Pasillo-C-Level2"
    - Screenshot: `E6-Issue-002-Altura.png`

**PARTE C - Issue 3: Verificación de Área de Piso (10 minutos)**

16. **Navegar a oficina tipo:**
    - Vista Top (planta)
    - Zoom a oficina tipo en Nivel 2 o 3

17. **Medir Area:**
    - Review tab > Measure > Area
    - Click en top surface de floor slab de la oficina
    - Navisworks detecta face completa y calcula área
    - **Ejemplo resultado:** "42.80 m²"

18. **Cálculo de materiales (anotar para reporte):**
   ```
   Área neta: 42.80 m²
   Desperdicio 10%: 4.28 m²
   Área total a ordenar: 47.08 m² ≈ 48 m²

   Material: Porcelanato 60x60cm (0.36 m²/pieza)
   Cantidad: 48 / 0.36 = 133.33 ≈ 134 piezas

   Precio referencial: $18.50/pieza
   Costo estimado: 134 × $18.50 = $2,479.00
   ```

19. **Redline Text (anotación simple):**
   ```
   VERIFICACIÓN ÁREA - OFICINA TIPO

   Ubicación: Oficina 201, Level 2

   Área medida: 42.80 m²
   Área con desperdicio 10%: 48 m²

   Material especificado: Porcelanato 60x60cm
   Cantidad requerida: 134 piezas

   Status: ✓ VERIFICADO
   Fecha: 2024-11-24
   ```
   - Format: Negro sobre fondo Verde claro (verificación OK)

20. **Tag + Border:**
    - Tag "VERIFIED" en el floor
    - Line tool: Dibujar rectángulo bordeando el área medida (línea verde)

21. **Save Viewpoint:**
    - Name: "VERIFICATION-Area-Oficina-Tipo-201"
    - Screenshot: `E6-Issue-003-Area.png`

**PARTE D - Export Measurements y Reporte (10 minutos)**

22. **Export Measurements a Excel:**
    - Measure Tools palette
    - Clic derecho > Select All (las 3 mediciones)
    - Clic derecho > Export > Excel
    - Filename: `E6-Measurements-Report.xlsx`
    - Save
    - **Entregable**

23. **Abrir Excel y verificar:**
    - Verificar que las 3 mediciones están listadas:
      - Shortest Distance: 0.078 m
      - Point to Point: 2.32 m
      - Area: 42.80 m²
    - Columns incluyen: Measurement Type, Value, Units, Comments

24. **Crear Issues Report en Word/PDF:**
    - **Entregable:** Documento `E6-Issues-Report.pdf` con siguiente estructura:

```
===================================================
REPORTE DE ISSUES DE COORDINACIÓN
Proyecto: Edificio Comercial 4 Pisos
Fecha: 2024-11-24
Elaborado por: [Su Nombre]
===================================================

ISSUE #001: CLEARANCE INSUFICIENTE DUCT/BEAM
Criticidad: ALTA
Ubicación: Grid B-3, Level 2, Cielo Raso

Descripción:
Duct de supply air 24"x48" tiene clearance insuficiente respecto a beam estructural W16x31.

Medición:
- Clearance actual: 78mm (Shortest Distance measurement)
- Clearance requerido: 100mm (código + tolerancias construcción)
- Deficiencia: 22mm

Impacto:
- Violación de código de construcción
- Riesgo de interferencia física durante instalación
- Potencial clash en campo si no se resuelve

Soluciones Propuestas:
Opción A: Bajar beam estructural 30mm (clearance resultante 108mm)
  - Pros: Solución definitiva, mantiene ruta de duct
  - Contras: Requiere coordinación con ingeniero estructural, posible re-diseño de conexiones
Opción B: Re-route duct por pasillo adyacente
  - Pros: No afecta estructura
  - Contras: Mayor longitud de ductwork, posible aumento de pressure drop

Recomendación: Opción B (menor impacto en diseño estructural)

Responsables:
- Coordinador MEP (propuesta de re-route)
- Ingeniero Estructural (verificar si Opción A es viable)

Fecha límite de resolución: 2024-12-05

Evidencia visual: Ver Viewpoint "ISSUE-001-Clearance-Duct-Beam-B3" y Screenshot E6-Issue-001-Clearance.png

---

ISSUE #002: ALTURA LIBRE INSUFICIENTE PASILLO
[Similar estructura para Issue 2]

---

ISSUE #003: VERIFICACIÓN ÁREA OFICINA TIPO
[Similar estructura para Issue 3]

===================================================
ANEXOS:
- E6-Measurements-Report.xlsx (Excel con mediciones detalladas)
- Screenshots de cada issue con redline markups
- Modelo Navisworks: Ejercicio-6-Issues.nwd con viewpoints documentados
===================================================
```

**PARTE E - Guardar Proyecto**

25. **Save:**
    - File > Save (actualizar .nwf)
    - File > Save As > `Ejercicio-6-Issues.nwd`

### Entregables

1. **Screenshots de Issues (3 archivos PNG):**
   - `E6-Issue-001-Clearance.png` - Clearance insuficiente con redline markups
   - `E6-Issue-002-Altura.png` - Altura libre insuficiente con markups
   - `E6-Issue-003-Area.png` - Verificación de área con markups

2. **Export de Mediciones:**
   - `E6-Measurements-Report.xlsx` - Excel con las 3 mediciones

3. **Reporte de Issues:**
   - `E6-Issues-Report.pdf` - Documento profesional con estructura completa (usar template arriba)

4. **Archivo Navisworks:**
   - `Ejercicio-6-Issues.nwd` - Con 3 viewpoints documentados con redline markups

5. **Documento de respuestas:**
   - `E6-Respuestas.pdf`

### Evaluación

**Preguntas a responder en `E6-Respuestas.pdf`:**

1. **Shortest Distance en Coordinación (15 puntos):** Explique por qué Shortest Distance es herramienta crítica para validación de clearances vs medición manual Point to Point. Proporcione ejemplo donde diferencia entre ambos métodos podría causar que issue no sea detectado con Point to Point.

2. **Redline Markup Profesional (15 puntos):** Describa elementos de redline markup efectivo para comunicación de issues a equipos de diseño: uso de colores según criticidad, información esencial que debe incluir text comment, posicionamiento de arrows/tags/clouds. Proporcione ejemplo de markup mal ejecutado y cómo mejorarlo.

3. **Workflow de Documentación (10 puntos):** Describa workflow completo desde descubrimiento de issue en modelo hasta cierre después de resolución por equipo de diseño: medición > markup > viewpoint > screenshot > export > RFI > modelo actualizado > verificación > cierre.

4. **Mediciones y Códigos de Construcción (10 puntos):** Explique cómo Navisworks Measure tools permiten validación de cumplimiento de códigos antes de construcción. Proporcione 3 ejemplos de verificaciones críticas de código que pueden hacerse con mediciones (clearances, alturas, pendientes, distancias de seguridad).

**Rúbrica de calificación:**

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Mediciones Correctas (15 pts)** | 0-15 | 3 tipos de mediciones realizadas correctamente (5 pts c/u) |
| **Redline Markups (15 pts)** | 0-15 | Text comments, arrows, tags, clouds aplicados profesionalmente (5 pts por issue) |
| **Screenshots de Issues (15 pts)** | 0-15 | 3 screenshots de alta calidad con markups visibles (5 pts c/u) |
| **Excel Export (5 pts)** | 0-5 | Measurements exportadas correctamente a Excel |
| **Reporte de Issues (20 pts)** | 0-20 | Documento profesional completo con estructura, análisis y soluciones propuestas |
| **Viewpoints Documentados (10 pts)** | 0-10 | 3 viewpoints con redlines guardados funcionalmente |
| **Respuestas a Preguntas (50 pts)** | 0-50 | 4 preguntas respondidas (según puntos asignados) |
| **Profesionalismo y Claridad (5 pts)** | 0-5 | Documentación clara, organizada, "RFI-ready" |
| **TOTAL** | **100** | |

**Criterios de éxito:**
- Mínimo 80/100 para aprobar
- Mediciones deben ser precisas y verificables
- Redline markups deben comunicar issues claramente
- Reporte debe ser nivel profesional, listo para enviar a equipos de diseño
- Viewpoints deben restaurar vistas exactas con markups visibles

---

## Resumen Final del Módulo

Al completar estos 6 ejercicios, habrá demostrado dominio de:

✅ **Navegación y creación de viewpoints** organizados para coordinación y presentaciones

✅ **Federación de modelos multi-disciplina** con workflow de actualización

✅ **Sistema de viewpoints con animaciones** para presentaciones profesionales

✅ **Search sets y selection sets avanzados** con appearance profiler para comunicación visual

✅ **Visualización de alta calidad** con materiales, iluminación, y render settings optimizados

✅ **Medición y documentación** de issues con redline markups y reportes profesionales

**Calificación del módulo:**
- Promedio de los 6 ejercicios
- Mínimo 80% para aprobar Módulo 1
- Certificado de competencia en Fundamentos de Navisworks 2026

**Próximo paso:**
**Módulo 2: Clash Detection y Coordinación** donde aplicará estas habilidades fundamentales para configurar clash tests, gestionar workflows de resolución, y coordinar proyectos complejos multi-disciplina.

---

**Instrucciones de Entrega:**

Todos los entregables deben organizarse en carpeta única con estructura:

```
Ejercicios-Modulo-1-[Su-Nombre]/
├── Ejercicio-1/
│   ├── Screenshots/ (E1-*.png)
│   ├── Edificio-Comercial-Ejercicio-1.nwd
│   └── E1-Respuestas.pdf
├── Ejercicio-2/
│   ├── Screenshots/
│   ├── Edificio-Comercial-Federado.nwf
│   ├── Edificio-Comercial-Federado.nwd
│   └── E2-Respuestas.pdf
├── Ejercicio-3/
│   ├── Screenshots/
│   ├── E3-Presentacion-Edificio-Comercial.mp4
│   ├── Ejercicio-3-Presentacion.nwd
│   └── E3-Respuestas.pdf
├── Ejercicio-4/
│   ├── Screenshots/
│   ├── Ejercicio-4-Selection-Sets.nwd
│   └── E4-Respuestas.pdf
├── Ejercicio-5/
│   ├── Screenshots/
│   ├── Ejercicio-5-Visualization.nwd
│   └── E5-Respuestas.pdf
└── Ejercicio-6/
    ├── Screenshots/
    ├── E6-Measurements-Report.xlsx
    ├── E6-Issues-Report.pdf
    ├── Ejercicio-6-Issues.nwd
    └── E6-Respuestas.pdf
```

Comprimir carpeta completa en .zip y entregar según instrucciones del instructor.

**¡Éxito en sus ejercicios!**
