# Lección 3: Navegación y Viewpoints

**Duración:** 60 minutos
**Nivel:** Intermedio/Avanzado
**Módulo:** 1 - Introducción a Navisworks 2026
**Prerequisitos:** Lecciones 1-2 completadas, modelo federado básico cargado

## Objetivos de Aprendizaje

✅ Dominar todos los modos de navegación 3D (walk, fly, orbit, look) y seleccionar el modo apropiado según el contexto del proyecto y tipo de espacio

✅ Utilizar Steering Wheels y ViewCube avanzado para navegación eficiente en modelos desde edificios residenciales hasta mega-proyectos industriales

✅ Crear, organizar y gestionar saved viewpoints para revisiones de coordinación, presentaciones a clientes, y documentación de RFIs

✅ Configurar animations entre viewpoints para crear recorridos virtuales profesionales y presentaciones dinámicas de secuencias constructivas

✅ Aplicar section planes y boxing para visualizar áreas específicas del modelo, aislar interferencias, y analizar detalles complejos de coordinación MEP

## Introducción

La navegación eficiente y la creación de viewpoints estratégicos son habilidades fundamentales que separan a coordinadores BIM junior de profesionales senior. En un proyecto típico, un coordinador puede crear 50-200 viewpoints durante el ciclo de vida del proyecto: vistas de interferencias específicas, ángulos para presentaciones, cortes de secciones para análisis de sistemas MEP, y recorridos para revisiones con clientes.

La capacidad de navegar rápidamente a cualquier ubicación en modelos de miles de millones de elementos, capturar vistas exactas de problemas de coordinación, y comunicar hallazgos mediante viewpoints bien nombrados y organizados es crítica para la productividad. Estudios demuestran que equipos que implementan convenciones de viewpoints consistentes resuelven interferencias 30-40% más rápido porque eliminan el tiempo desperdiciado en "¿dónde está este problema?".

Esta lección cubre técnicas avanzadas de navegación adaptadas a diferentes tipos de espacios (interiores compactos vs exteriores expansivos), creación de bibliotecas de viewpoints organizadas por disciplina y tipo, animaciones fluidas para presentaciones, y section tools que revelan detalles internos de sistemas complejos. Estas habilidades se aplicarán inmediatamente en clash detection (Módulo 2) y presentaciones 4D (Módulo 3).

## 1. Modos de Navegación Avanzados

Navisworks ofrece múltiples modos de navegación, cada uno optimizado para diferentes contextos. Dominarlos todos permite adaptarse instantáneamente a cualquier situación.

![Modos de navegación](../imagenes/leccion-3-modos-navegacion.png)

### 1.1 Walk Mode (Caminar)

**Concepto:**
Walk mode simula caminar en primera persona por el modelo con restricción de gravedad (no puede atravesar pisos verticalmente).

**Activación:**
- Presionar W, o
- View tab > Navigate panel > Walk, o
- Steering Wheels > Walk

**Controles:**

**Con mouse:**
- Clic izquierdo y arrastrar mouse: Controla dirección de vista
- Hacia adelante/atrás: Camina en dirección de vista
- Velocidad: Controlada por distancia del cursor al centro

**Con teclado:**
- **W o ↑**: Caminar adelante
- **S o ↓**: Caminar atrás
- **A**: Desplazar izquierda (strafe)
- **D**: Desplazar derecha (strafe)
- **Q**: Girar izquierda (yaw)
- **E**: Girar derecha (yaw)
- **Spacebar**: Pausar/reanudar movimiento
- **Shift**: Aumentar velocidad temporalmente
- **Ctrl**: Disminuir velocidad temporalmente

**Cuándo usar Walk:**
✅ **Recorridos arquitectónicos interiores** (oficinas, hospitales, hoteles)
✅ **Simulación de experiencia de usuario final**
✅ **Verificación de alturas de circulación** (clearances peatonales)
✅ **Presentaciones para clientes** que necesitan "sentir" el espacio
✅ **Validación de accesibilidad** (rutas ADA)

**Ajustes de Walk:**

**Velocidad:**
- Options > Interface > Navigation > Walk Speed
- Rango: 0.1x a 10x
- Recomendaciones:
  - Residencial: 1x-2x
  - Comercial: 2x-4x
  - Industrial: 4x-8x

**Altura de ojo (Eye Height):**
- Options > Interface > Navigation > Eye Height
- Default: 1.7m (5'7") - altura promedio de ojo humano
- Ajustar según:
  - Análisis peatonal: 1.7m
  - Equipos sobre plataformas: Ajustar a altura de plataforma
  - Niños/wheelchair: 1.2m

**Collision Detection:**
- Options > Interface > Navigation > Collision
- ON: No puede atravesar paredes/objetos (realista)
- OFF: Puede atravesar geometría (útil para exploración)
- Recomendación: ON para presentaciones, OFF para coordinación

**Gravity:**
- ON: Camina sobre pisos, sube escaleras
- OFF: Puede flotar verticalmente
- Recomendación: ON para Walk realista

### 1.2 Fly Mode (Volar)

**Concepto:**
Fly mode ofrece libertad total de movimiento en todos los ejes, como volar un dron o helicóptero.

**Activación:**
- Presionar F, o
- View tab > Navigate panel > Fly

**Controles:**

**Con mouse:**
- Clic izquierdo y arrastrar: Controla dirección
- Hacia adelante: Vuela en dirección de vista
- Hacia arriba/abajo en pantalla: Cambia elevación

**Con teclado:**
- **W o ↑**: Volar adelante
- **S o ↓**: Volar atrás
- **A / D**: Strafe izquierda/derecha
- **R**: Elevarse (subir)
- **F**: Descender (bajar)
- **Q / E**: Yaw (girar)
- **Shift**: Acelerar
- **Spacebar**: Pausar

**Cuándo usar Fly:**
✅ **Proyectos de gran escala** (plantas industriales, aeropuertos, infraestructura)
✅ **Exteriores y contexto urbano**
✅ **Navegación rápida entre niveles** (planta baja a azotea)
✅ **Vistas aéreas** para presentaciones
✅ **Proyectos verticales** (torres altas, puentes)

**Ajustes de Fly:**
- Options > Interface > Navigation > Fly Speed
- Aumentar para proyectos expansivos (10x+)
- Recomendación infraestructura: 15x-20x

**Técnicas profesionales:**

**"Fly-to-Walk" transition:**
1. Use Fly para navegar rápidamente a área de interés
2. Posicionarse cerca de la ubicación objetivo
3. Cambiar a Walk (presionar W) para exploración detallada
4. Workflow eficiente: Fly para transporte, Walk para análisis

### 1.3 Orbit Mode (Orbitar)

**Concepto:**
Orbit rota la cámara alrededor de un punto de interés fijo, manteniendo distancia constante.

**Activación:**
- Presionar O, o
- Shift + Botón central del mouse, o
- Steering Wheels > Orbit

**Comportamiento:**
- Define "punto de interés" (centro de rotación)
- Cámara orbita alrededor de ese punto
- Distancia permanece constante

**Definir punto de interés:**
1. Clic en objeto de interés
2. Navisworks establece ese punto como centro de órbita
3. O: Steering Wheels > Center > Clic en nuevo punto

**Cuándo usar Orbit:**
✅ **Inspección detallada de equipos** (bombas, transformadores, válvulas)
✅ **Análisis de conexiones MEP complejas**
✅ **Presentaciones de componentes específicos**
✅ **Verificación de accesibilidad** alrededor de equipos
✅ **Revisión de detalles constructivos**

**Variaciones de Orbit:**

**Free Orbit:**
- Rotación libre sin restricción de ejes
- Puede girar completamente alrededor (360°)

**Constrained Orbit:**
- Mantiene "up" (arriba) constante
- No permite voltear completamente
- Más intuitivo para usuarios nuevos

**Configurar:**
- Options > Interface > Navigation > Orbit Mode
- Seleccionar: Free o Constrained

### 1.4 Look Around Mode (Mirar Alrededor)

**Concepto:**
Look mode permite mirar en cualquier dirección sin mover la posición de la cámara.

**Activación:**
- Presionar L, o
- Steering Wheels > Look

**Comportamiento:**
- Posición de cámara FIJA
- Solo cambia dirección de vista
- Como girar la cabeza sin mover el cuerpo

**Cuándo usar Look:**
✅ **Escanear 360° desde un punto fijo**
✅ **Revisión de interferencias desde ubicación específica**
✅ **Verificación de clearances visuales** (líneas de vista)
✅ **Orientación espacial** ("¿qué hay a mi alrededor?")

**Técnica profesional:**
1. Walk/Fly a ubicación estratégica
2. Activar Look (presionar L)
3. Escanear 360° el entorno
4. Identificar todos los sistemas visibles desde ese punto

### 1.5 Zoom y Pan

**Zoom:**
- **Scroll wheel**: Zoom in/out
- **Z + dibujar rectángulo**: Zoom ventana (preciso)
- **Shift+Z**: Zoom extents (ver todo)
- **Shift+W**: Zoom selección (zoom a objetos seleccionados)

**Pan (Desplazar):**
- **Botón central mouse** (sin Shift): Pan
- **Arrastra** en dirección deseada
- Útil para ajustes finos de encuadre

**Zoom Extents inteligente:**
- Si nada seleccionado: Zoom a todo el modelo
- Si objetos seleccionados: Zoom solo a selección
- Muy útil tras buscar elementos específicos

## 2. Steering Wheels Avanzado

El Steering Wheel es la herramienta de navegación más versátil, combinando todos los modos en una interfaz unificada.

![Steering Wheels tipos](../imagenes/leccion-3-steering-wheels.png)

### 2.1 Tipos de Steering Wheels

**Full Navigation Wheel:**
- 8 opciones: Zoom, Pan, Orbit, Rewind, Center, Walk, Look, Up/Down
- Más completa pero más grande en pantalla
- Uso: Coordinadores experimentados que usan todas las herramientas

**Basic Wheels:**
- 4 opciones: Zoom, Pan, Orbit, Rewind
- Más compacta
- Uso: Tareas simples de revisión

**2D Wheel:**
- Para navegación en planos 2D
- Zoom, Pan, Fit (no rotación)

**Tour Building Wheel:**
- Especializada en recorridos arquitectónicos
- Walk, Look, Up/Down, Rewind
- Optimizada para interiores

**View Object Wheel:**
- Enfocada en inspección de objetos
- Orbit, Zoom, Center, Rewind

**Cambiar tipo de wheel:**
- Clic derecho sobre wheel > Select Wheel > Elegir tipo
- O: Settings > Pick de la lista

### 2.2 Rewind Tool (Historial de Navegación)

**Función:**
Rewind permite regresar a vistas previas, navegando por el historial de cámara.

**Uso:**
1. Activar Steering Wheels
2. Clic en segmento "Rewind"
3. Aparece tira de thumbnails de vistas previas
4. Clic en thumbnail para saltar a esa vista

**Aplicaciones:**
- Recuperar vista perdida tras navegación errática
- Comparar vista actual con vista previa
- Regresar rápidamente a clash previo tras revisar otro

**Configuración:**
- Options > Interface > Navigation > Rewind
- **Number of rewind views**: 10-50 (según necesidad)
- Más vistas = más memoria RAM usada

### 2.3 Center Tool (Re-centrar)

**Función:**
Define nuevo punto de interés para Orbit y navegación.

**Uso:**
1. Steering Wheels > Clic en "Center"
2. Clic en objeto/punto en el modelo
3. Ese punto se convierte en centro para Orbit

**Escenario típico:**
- Orbitando alrededor de bomba A
- Necesita cambiar a inspeccionar válvula B
- Center > Clic en válvula B
- Ahora orbita alrededor de válvula B

### 2.4 Up/Down Tool

**Función:**
Mueve cámara verticalmente (eje Z) sin cambiar posición X-Y.

**Uso:**
- Útil en Walk mode para subir/bajar pisos
- Mantiene posición horizontal

**Alternativa:**
- Fly mode ofrece más control vertical

## 3. Saved Viewpoints: Creación y Gestión

Los **Saved Viewpoints** son la herramienta de comunicación más poderosa en Navisworks. Capturan posición de cámara, visibilidad de objetos, section planes, redlines, y más.

![Saved Viewpoints](../imagenes/leccion-3-saved-viewpoints.png)

### 3.1 Anatomía de un Viewpoint

Un viewpoint guarda:
- **Camera position y orientation**
- **Visibility** (objetos hidden/visible)
- **Display style** (shaded, wireframe, etc.)
- **Section planes** activos
- **Selection** (objetos seleccionados)
- **Redlines** asociados
- **Comments** (opcional)
- **Lighting** (opcional)

**NO guarda:**
- Geometría del modelo (solo referencia)
- Clash tests (están en nivel de archivo)

### 3.2 Crear Saved Viewpoint

**Método 1 - Quick Save:**
1. Navegar a vista deseada
2. Viewpoint tab > Save > Save Viewpoint
3. O: Ctrl+1
4. Ingresar nombre descriptivo
5. Enter

**Método 2 - Save con configuración avanzada:**
1. Navegar a vista deseada
2. Viewpoint tab > Save > Save Viewpoint (ícono)
3. Dialog aparece:
   - **Name**: Nombre descriptivo
   - **Folder**: Organizar en carpetas (ej: "Clashes MEP")
   - **Comments**: Descripción detallada
   - **Appearance**: Hidden objects, Required/Override
   - **Camera**: Posición actual
   - **Redlines**: Incluir redlines activos
4. OK

**Convención de nombres profesional:**

Establecer estándar de empresa, ejemplo:

```
[DISCIPLINA]-[TIPO]-[UBICACION]-[NUMERO]

Ejemplos:
MEP-CLASH-L3-MECROOM-001
ARQ-PRESENTATION-LOBBY-ENTRANCE
EST-REVIEW-GRIDLINE-A5-B7
GENERAL-OVERVIEW-ISOMETRIC-NE
```

**Ventajas de convención:**
- Búsqueda rápida
- Organización clara
- Comunicación sin ambigüedad
- Sorting alfabético útil

### 3.3 Organizar Viewpoints en Carpetas

Para proyectos grandes con 100+ viewpoints, organización es crítica.

**Crear carpetas:**
1. Viewpoints palette (panel derecho)
2. Clic derecho en espacio vacío
3. Add Folder
4. Nombre de carpeta

**Estructura típica:**

```
📁 CLASH DETECTION
  📁 MEP-Mechanical
  📁 MEP-Electrical
  📁 MEP-Plumbing
  📁 Structural-Arch
📁 PRESENTATIONS
  📁 Client Meeting 2024-11-15
  📁 Design Review
📁 RFIs
  📁 RFI-001 to RFI-050
  📁 RFI-051 to RFI-100
📁 4D SIMULATION
  📁 Phase 1
  📁 Phase 2
```

**Mover viewpoints:**
- Drag & drop viewpoint a carpeta deseada

**Exportar/Importar viewpoints:**
- Viewpoints palette > Clic derecho > Export
- Guardar archivo .xml
- En otro proyecto: Import > Cargar .xml
- Útil para reutilizar viewpoints estándar

### 3.4 Editar y Actualizar Viewpoints

**Update existing viewpoint:**
1. Navegar con viewpoint activo
2. Hacer ajustes (cambiar camera, hide objetos, etc.)
3. Clic derecho en viewpoint (en palette)
4. Update Saved Viewpoint
5. Viewpoint actualizado con nueva configuración

**Rename viewpoint:**
- Clic derecho > Rename
- O presionar F2 con viewpoint seleccionado

**Delete viewpoint:**
- Seleccionar viewpoint
- Presionar Delete
- O clic derecho > Delete

### 3.5 Viewpoints para Clash Detection

Workflow típico de coordinación:

1. **Ejecutar clash test** (Módulo 2)
2. **Identificar clash** en Clash Detective
3. **Navegar a clash** (Zoom to clash)
4. **Ajustar vista** para mostrar contexto (no solo los dos objetos)
5. **Add redline** markup explicando el problema
6. **Save viewpoint**: "MEP-CLASH-L2-DUCTPIPE-047"
7. **Add comment**: "Duct 18x24 interfiere con pipe 6" HW supply. Resolver: bajar duct 300mm"
8. **Guardar**

**Resultado:**
Viewpoint completo que puede:
- Abrir en Navisworks y ver exactamente el problema
- Exportar imagen para RFI
- Compartir con subcontratista responsable
- Referenciar en reportes de clash

## 4. Animations entre Viewpoints

Navisworks puede crear animaciones fluidas entre viewpoints para recorridos virtuales y presentaciones dinámicas.

![Animaciones viewpoints](../imagenes/leccion-3-animaciones.png)

### 4.1 Crear Animation de Viewpoints

**Concepto:**
Una **Animation** es una secuencia de viewpoints reproducidos en orden con transiciones suaves.

**Procedimiento:**

1. **Crear viewpoints de la secuencia:**
   - Viewpoint 1: Exterior frontal
   - Viewpoint 2: Entrada al lobby
   - Viewpoint 3: Recepción
   - Viewpoint 4: Corredor principal
   - Viewpoint 5: Oficina ejecutiva
   - Etc.

2. **Crear Animation:**
   - Viewpoint tab > Animation panel > Add Animation
   - Nombre: "Tour-Oficinas-Ejecutivas"

3. **Agregar viewpoints a Animation:**
   - Viewpoints palette > Seleccionar viewpoint 1
   - Drag & drop a la Animation en Animator
   - Repetir para viewpoints 2, 3, 4, 5...

4. **Ajustar duración de cada viewpoint:**
   - En Animator: Clic en viewpoint
   - Properties: Duration = 5 seconds (o tiempo deseado)
   - Adjust según necesidad:
     - Vistas complejas: 6-8 segundos
     - Vistas simples de transición: 2-3 segundos

5. **Configurar tipo de transición:**
   - Por defecto: Smooth transition (transición suave)
   - Opciones:
     - **Linear**: Velocidad constante
     - **Ease In-Out**: Acelera al inicio, desacelera al final (más natural)
     - **Custom**: Control completo con curvas

6. **Preview Animation:**
   - Animator > Play
   - Observar fluidez y timing
   - Ajustar duraciones según necesidad

7. **Guardar Animation:**
   - La Animation se guarda como parte del archivo NWF/NWD

### 4.2 Configuración Avanzada de Animations

**Speed control:**
- Animator > Settings > Playback Speed
- 0.5x (slow motion) a 2x (fast)
- Útil para demos vs presentaciones rápidas

**Looping:**
- Settings > Loop Animation: ON
- Animation se repite continuamente
- Útil para kioscos o displays en eventos

**Pause points:**
- Agregar viewpoint con duración larga (10-15 sec)
- Camera permanece estática, audiencia tiene tiempo de absorber
- Útil en vistas complejas con muchos detalles

### 4.3 Export Animation a Video

Navisworks puede exportar animations a archivos de video para compartir sin necesidad de tener Navisworks instalado.

**Procedimiento:**

1. Animation tab > Export > Animation
2. Configurar parámetros:
   - **Format**: AVI, WMV, o MP4
     - MP4: Recomendado (mejor compresión, compatible)
   - **Resolution**:
     - 1920x1080 (Full HD): Estándar profesional
     - 3840x2160 (4K): Para presentaciones de alta calidad
   - **Frame rate**: 30 FPS (standard), 60 FPS (ultra smooth)
   - **Codec**: H.264 (excelente balance calidad/tamaño)
   - **Quality**: High (para presentaciones finales)
3. **Render settings:**
   - Display style: Shaded with Edges, Realistic, etc.
   - Lighting: Scene lights ON, Shadows ON (si GPU soporta)
   - Background: Gradient o image según preferencia
4. Save As > Nombre archivo
5. Render (puede tardar minutos u horas según duración y resolution)

**Tiempo de render estimado:**
- Animation de 2 minutos a 1080p: 15-30 minutos
- Animation de 2 minutos a 4K: 1-2 horas
- Depende de complejidad del modelo y hardware (GPU)

**Uso del video:**
- Presentaciones PowerPoint embebidas
- Upload a YouTube/Vimeo para clientes
- Reproducción en tablets en campo
- Marketing y propuestas

## 5. Section Planes y Boxing

Section planes y boxing son herramientas críticas para visualizar áreas específicas del modelo, especialmente útiles para análisis MEP y resolución de clashes.

![Section planes](../imagenes/leccion-3-section-planes.png)

### 5.1 Section Planes (Planos de Corte)

**Concepto:**
Un section plane corta el modelo en un plano invisible, revelando el interior.

**Activar Section Plane:**

**Método 1 - Quick Section:**
1. Viewpoint tab > Sectioning panel > Section Plane
2. O presionar F7
3. Aparece plano de sección perpendicular a la vista actual
4. Drag las flechas para mover el plano
5. Todo "detrás" del plano se oculta

**Método 2 - Section Tools:**
1. Home tab > Visibility panel > Sectioning > Planes
2. Opciones:
   - **New Plane**: Crear nuevo
   - **X, Y, Z planes**: Planos alineados a ejes globales
   - **View-aligned**: Plano perpendicular a vista actual

**Manipular Section Plane:**

**Mover:**
- Drag flecha del plano (una dirección)
- Drag centro del plano (libre movimiento)

**Rotar:**
- Rotar el plano requiere:
  1. Clic derecho en plane > Properties
  2. Ingresar ángulos de rotación X, Y, Z manualmente
- O: Alinear vista a dirección deseada, crear View-aligned plane

**Flip direction:**
- Clic en ícono de flip (flecha circular) en el plane
- Invierte qué lado es visible

**Cuándo usar Section Planes:**
✅ **Análisis de sistemas MEP** ocultos en cielo raso/pisos
✅ **Visualización de interferencias** en áreas congestionadas
✅ **Validación de clearances** en espacios compactos
✅ **Inspección de estructura interna** de equipos
✅ **Presentaciones de detalles constructivos**

**Ejemplo práctico:**
**Problema:** Clash entre duct y pipe en cielo raso sobre corredor.
**Solución con section plane:**
1. Navegar a área del clash
2. Crear section plane horizontal (plano XY) a nivel del cielo raso
3. Ajustar altura del plane para que corte justo en la zona del clash
4. Ahora se ve claramente el duct, el pipe, y el conflicto, sin el piso superior bloqueando la vista
5. Save viewpoint con el section plane activo

### 5.2 Multiple Section Planes

Navisworks permite múltiples section planes simultáneos para análisis complejos.

**Crear múltiples planes:**
1. Section Tools > New Plane (primer plano)
2. Ajustar posición
3. Section Tools > New Plane (segundo plano)
4. Ajustar posición
5. Repetir según necesidad

**Ejemplo - Sección "caja":**
- Plane 1: Corte vertical norte-sur
- Plane 2: Corte vertical este-oeste
- Plane 3: Corte horizontal superior
- Plane 4: Corte horizontal inferior
- Resultado: Solo se ve el "cubo" central donde todos los planes intersectan

**Enable/Disable planes:**
- Sectioning Tools > Lista de planes
- Check/uncheck para activar/desactivar individualmente

### 5.3 Boxing (Delimitación de Área)

**Concepto:**
Boxing crea una "caja" (box) invisible que muestra solo objetos dentro de la caja, ocultando todo lo externo.

**Activar Boxing:**
1. Home tab > Visibility panel > Sectioning > Box
2. O: Viewpoint tab > Sectioning > Section Box
3. Aparece box con handles en todas las caras

**Manipular Box:**
- **Drag caras**: Expandir/contraer en esa dirección
- **Drag aristas**: Mover dos caras simultáneamente
- **Drag esquinas**: Mover tres caras simultáneamente

**Cuándo usar Boxing:**
✅ **Aislar área específica del proyecto** (ej: solo cuarto de máquinas)
✅ **Reducir complejidad visual** al analizar subsistema
✅ **Performance** en modelos grandes (menos objetos renderizados)
✅ **Presentaciones de áreas específicas**
✅ **Clash detection enfocado** (módulo 2)

**Ejemplo práctico:**
**Proyecto:** Hospital de 500 camas, modelo federado de 8GB.
**Necesidad:** Analizar solo el cuarto de máquinas en sótano (MEP complex).
**Solución con boxing:**
1. Navegar al cuarto de máquinas
2. Activar Section Box
3. Ajustar box para que contenga solo el cuarto de máquinas
4. Resto del hospital se oculta
5. Rendering más rápido, análisis más claro
6. Save viewpoint con box activo

### 5.4 Section Planes vs Boxing: Cuándo Usar Cada Uno

**Section Planes:**
- Necesita corte limpio en un eje
- Presentaciones de cortes arquitectónicos
- Análisis de un piso específico
- Visualización de detalles internos

**Boxing:**
- Necesita aislar área tridimensional completa
- Reducir complejidad en modelos grandes
- Enfoque en zona específica (sala de equipos, intersección de grids)
- Performance optimization

**Combinación:**
Puede usar Section Planes Y Boxing simultáneamente:
- Box aisla área general (ej: torre este)
- Section plane corta verticalmente dentro del box
- Resultado: Corte específico de área específica

## 6. Measure Tools Básicos

Las herramientas de medición permiten verificar dimensiones, clearances y relaciones geométricas.

![Measure tools](../imagenes/leccion-3-measure-tools.png)

### 6.1 Point to Point Measurement

**Función:**
Mide distancia en línea recta entre dos puntos.

**Procedimiento:**
1. Home tab > Measure panel > Point to Point
2. O presionar P
3. Clic en primer punto (snap a geometría)
4. Clic en segundo punto
5. Dimensión aparece en pantalla con distancia

**Información mostrada:**
- **Distancia total** (ej: 3.456 m)
- **Delta X, Y, Z** (cambio en cada eje)
- Útil para verificar componentes

**Aplicaciones:**
- Verificar clearance entre equipos
- Validar dimensiones de espacios
- Confirmar altura libre mínima

### 6.2 Shortest Distance

**Función:**
Encuentra la distancia MÍNIMA entre dos elementos (no necesariamente en línea recta).

**Procedimiento:**
1. Measure > Shortest Distance
2. Clic en primer objeto
3. Clic en segundo objeto
4. Navisworks calcula distancia mínima (puede ser perpendicular)

**Útil para:**
- Verificar clearances reales entre sistemas
- Clash detection manual
- Validar requisitos de código (ej: 600mm clearance mínimo)

### 6.3 Accumulated Measurement

**Función:**
Medir múltiples segmentos acumulando distancia total.

**Procedimiento:**
1. Measure > Accumulated
2. Clic punto 1
3. Clic punto 2 (muestra distancia parcial)
4. Clic punto 3 (acumula distancia)
5. Continuar...
6. Enter para finalizar

**Aplicaciones:**
- Medir longitud de ductwork con codos
- Calcular distancia de recorrido de cable
- Verificar longitud total de pipe run

### 6.4 Conversión de Unidades en Mediciones

**Configuración:**
- Options > Interface > Display Units
- Seleccionar: Meters, Feet, etc.
- Precision: 0.000 (3 decimales)

**Durante medición:**
Navisworks muestra en unidades configuradas, pero puede:
- Clic derecho en dimensión > Properties
- Ver valores en todas las unidades disponibles

## Ejercicio Práctico

**Duración:** 20 minutos

**Escenario:**
Usted es coordinador BIM de un edificio de oficinas de 6 pisos. Debe crear una biblioteca de viewpoints para presentación al cliente y para coordinación interna del equipo MEP.

**Pasos:**

1. **Crear estructura de carpetas en Viewpoints:**
   - Carpeta: "PRESENTACION CLIENTE"
   - Carpeta: "COORDINACION MEP"
   - Carpeta: "RFIs"

2. **Crear viewpoint de presentación - Exterior:**
   - Fly mode para alejarse del edificio
   - Posición: Isométrica NE (noreste), mostrando fachada principal
   - Display Style: Realistic with Edges
   - Save Viewpoint: "PRESENT-EXTERIOR-ISO-NE"
   - Carpeta: PRESENTACION CLIENTE

3. **Crear viewpoint de presentación - Lobby:**
   - Walk mode para entrar al edificio
   - Navegar al lobby principal
   - Posición: Entrada, mirando hacia recepción
   - Altura de ojo: 1.7m (realista)
   - Save Viewpoint: "PRESENT-LOBBY-ENTRANCE"
   - Carpeta: PRESENTACION CLIENTE

4. **Crear viewpoint de coordinación MEP - Cuarto de máquinas:**
   - Navegar al cuarto de máquinas (nivel sótano o azotea)
   - Activar Section Box
   - Ajustar box para aislar solo cuarto de máquinas
   - Orbit para vista clara de todos los sistemas
   - Save Viewpoint: "MEP-COORD-MECHROOM-OVERVIEW"
   - Carpeta: COORDINACION MEP

5. **Crear viewpoint con section plane - Cielo raso:**
   - Navegar a piso típico
   - Crear section plane horizontal a nivel de cielo raso (cutting floor slab)
   - Ajustar para ver ductwork, piping, cable trays
   - Save Viewpoint: "MEP-COORD-L2-CEILING-SECTION"
   - Carpeta: COORDINACION MEP

6. **Crear animation simple:**
   - Animation tab > Add Animation > Nombre: "Tour-Basico"
   - Agregar viewpoints en orden:
     1. PRESENT-EXTERIOR-ISO-NE (5 sec)
     2. PRESENT-LOBBY-ENTRANCE (6 sec)
     3. MEP-COORD-MECHROOM-OVERVIEW (6 sec)
   - Play animation para preview
   - Ajustar timing si necesario

7. **Realizar medición básica:**
   - Navegar a área con equipos MEP
   - Measure > Point to Point
   - Medir clearance entre duct y pipe (o dos equipos)
   - Tomar screenshot de la medición
   - Verificar que clearance cumple requisitos (ej: >300mm)

**Resultado esperado:**
- Estructura de carpetas organizada en Viewpoints palette
- Mínimo 5 viewpoints creados con nombres descriptivos
- Animation de 3 viewpoints funcional
- Comprensión de uso de section planes y boxing
- Capacidad de realizar mediciones básicas

## Evaluación

1. **Pregunta 1:** Explique las diferencias entre los modos de navegación Walk y Fly, y proporcione escenarios específicos donde cada uno es más apropiado.

   **Respuesta:** Walk mode simula caminar en primera persona con restricción de gravedad (no puede atravesar pisos verticalmente) y es apropiado para recorridos arquitectónicos interiores (oficinas, hospitales), simulación de experiencia de usuario, verificación de alturas de circulación peatonal, y presentaciones a clientes que necesitan "sentir" el espacio. La velocidad recomendada es 1x-4x y se puede configurar collision detection y gravity. Fly mode ofrece libertad total de movimiento en todos los ejes sin restricciones y es apropiado para proyectos de gran escala (plantas industriales, aeropuertos), exteriores, navegación rápida entre niveles verticales, vistas aéreas, y proyectos verticales como torres altas. La velocidad es ajustable hasta 20x para infraestructura expansiva. Workflow eficiente: usar Fly para transporte rápido entre áreas, luego cambiar a Walk para exploración detallada.

2. **Pregunta 2:** ¿Qué información guarda un saved viewpoint y por qué es crítico establecer convenciones de nombres en proyectos de coordinación BIM?

   **Respuesta:** Un saved viewpoint guarda: posición y orientación de cámara, visibilidad de objetos (hidden/visible), display style (shaded, wireframe, etc.), section planes activos, selection de objetos, redlines asociados, comments, y lighting. NO guarda la geometría del modelo (solo referencia). Establecer convenciones de nombres es crítico porque facilita búsqueda rápida de viewpoints específicos, permite organización clara por disciplina/tipo/ubicación, elimina ambigüedad en comunicación con el equipo, permite sorting alfabético útil, y previene pérdida de tiempo buscando "¿dónde estaba ese problema?". Ejemplo de convención: [DISCIPLINA]-[TIPO]-[UBICACION]-[NUMERO] como "MEP-CLASH-L3-MECROOM-001" o "ARQ-PRESENTATION-LOBBY-ENTRANCE". Estudios demuestran que equipos con convenciones consistentes resuelven interferencias 30-40% más rápido.

3. **Pregunta 3:** Describa el proceso completo para crear una animation de viewpoints para presentación a cliente, desde la planificación hasta el export a video.

   **Respuesta:** Proceso: (1) Planificación: determinar secuencia lógica de vistas (ej: exterior > lobby > corredor > oficina); (2) Crear viewpoints individuales navegando a cada ubicación y guardando con nombres descriptivos ("PRESENT-EXTERIOR-ISO-NE", "PRESENT-LOBBY", etc.); (3) Animation tab > Add Animation > nombre descriptivo; (4) Drag & drop viewpoints a la animation en orden deseado; (5) Configurar duración de cada viewpoint (vistas complejas 6-8 sec, vistas simples 2-3 sec); (6) Seleccionar tipo de transición (Ease In-Out recomendado por naturalidad); (7) Preview animation con Play para verificar fluidez y timing; (8) Ajustar duraciones según necesidad; (9) Export: Animation tab > Export Animation; (10) Configurar: formato MP4, resolution 1920x1080 (o 4K), frame rate 30 FPS, codec H.264, quality High; (11) Configurar render settings: display style Realistic, lighting ON, shadows si GPU soporta; (12) Render (15-30 min para 2 min a 1080p). Resultado: Video MP4 para PowerPoint, YouTube, o tablets en campo.

4. **Pregunta 4:** ¿Cuál es la diferencia entre Section Planes y Boxing, y proporcione un ejemplo práctico de cuándo usar cada herramienta?

   **Respuesta:** Section Planes crean un plano de corte que oculta toda geometría "detrás" del plano, revelando el interior del modelo - ideal para cortes limpios en un eje, presentaciones de secciones arquitectónicas, análisis de un piso específico, y visualización de detalles internos. Boxing crea una "caja" invisible que muestra solo objetos dentro de la caja, ocultando todo lo externo - ideal para aislar área tridimensional completa, reducir complejidad en modelos grandes, enfoque en zona específica, y performance optimization. Ejemplo práctico Section Plane: clash entre duct y pipe en cielo raso - crear section plane horizontal a nivel del cielo raso para ver claramente ambos sistemas sin el piso superior bloqueando la vista. Ejemplo práctico Boxing: hospital de 8GB, necesita analizar solo cuarto de máquinas - activar section box ajustado al cuarto para ocultar resto del hospital, mejorando rendering y claridad. Pueden combinarse: box aisla torre este, section plane corta verticalmente dentro del box, resultando en corte específico de área específica.

5. **Pregunta 5:** ¿Qué herramienta de medición usaría para verificar el clearance mínimo requerido entre un ductwork y una pipe, y por qué?

   **Respuesta:** Use la herramienta "Shortest Distance" (no Point to Point). Razón: Shortest Distance calcula automáticamente la distancia MÍNIMA entre dos elementos, que puede no ser en línea recta sino perpendicular o en ángulo según la geometría. Point to Point solo mide en línea recta entre dos puntos específicos que usted selecciona, y es fácil no seleccionar los puntos más cercanos en geometría compleja. Procedimiento: Measure > Shortest Distance > clic en duct > clic en pipe > Navisworks calcula y muestra distancia mínima real. Esto es crítico para verificar clearances según código o requisitos de constructibilidad (ej: clearance mínimo 300mm entre sistemas para acceso de mantenimiento). En clash detection (Módulo 2), Shortest Distance también es la base para configurar tests de clearance entre disciplinas.

## Resumen

En esta lección hemos dominado las técnicas esenciales de navegación y viewpoints en Navisworks 2026:

- Comprendimos todos los modos de navegación (Walk, Fly, Orbit, Look) y aprendimos a seleccionar el modo apropiado según el contexto: Walk para interiores arquitectónicos, Fly para proyectos expansivos y navegación vertical, Orbit para inspección de equipos, y Look para escaneo 360° desde punto fijo.

- Dominamos el Steering Wheels avanzado con sus múltiples tipos (Full Navigation, Basic, Tour Building, View Object) y herramientas especializadas como Rewind para historial de navegación y Center para definir puntos de interés para órbita.

- Aprendimos a crear, organizar y gestionar saved viewpoints con convenciones de nombres profesionales, estructuras de carpetas por disciplina/tipo, y capacidad de capturar posición de cámara, visibilidad, section planes, redlines y comments para comunicación efectiva.

- Creamos animations fluidas entre viewpoints para recorridos virtuales y presentaciones dinámicas, configurando duraciones, transiciones, y exportando a video MP4 para compartir con stakeholders sin necesidad de Navisworks.

- Aplicamos section planes y boxing para visualizar áreas específicas, aislar interferencias, analizar sistemas MEP ocultos, y optimizar performance en modelos grandes mediante reducción de complejidad visual.

- Utilizamos measure tools básicos (Point to Point, Shortest Distance, Accumulated) para verificar dimensiones, clearances y validar requisitos de código.

Estas habilidades de navegación y viewpoints son fundamentales para todos los workflows avanzados: comunicar hallazgos de clash detection (Módulo 2), presentar simulaciones 4D (Módulo 3), y crear presentaciones profesionales (Módulo 4).

## Próxima Lección

En la **Lección 4: Selection Sets y Search Sets** aprenderemos a navegar el Selection Tree eficientemente, crear search sets con criterios múltiples para identificar objetos específicos en modelos complejos, guardar selection sets para workflows repetitivos, utilizar Appearance Profiler para control visual avanzado, y aplicar operaciones Hide/Required/Override para gestionar visibilidad de miles de elementos simultáneamente. Estas técnicas son esenciales para preparar clash detection tests efectivos en el Módulo 2.
