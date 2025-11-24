# Lección 1: Interface y Configuración Inicial

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Identificar y navegar por todos los componentes de la interfaz de AutoCAD 2026
2. Personalizar la barra de herramientas de acceso rápido (Quick Access Toolbar)
3. Configurar espacios de trabajo (Workspaces) según el tipo de proyecto
4. Utilizar eficientemente el sistema de ribbons y tabs
5. Interpretar información en la línea de comandos y barra de estado
6. Establecer preferencias iniciales del sistema

## Introducción

La interfaz de AutoCAD 2026 representa la culminación de décadas de desarrollo en software CAD, combinando potencia profesional con usabilidad moderna. A diferencia de versiones anteriores, AutoCAD 2026 presenta una interfaz optimizada con mejor contraste visual, iconos rediseñados y flujos de trabajo más intuitivos.

Dominar la interfaz es fundamental porque AutoCAD ofrece múltiples caminos para ejecutar la misma tarea: menús, ribbons, línea de comandos, atajos de teclado y menús contextuales. Los usuarios profesionales desarrollan su propio flujo de trabajo combinando estos métodos según la tarea específica.

AutoCAD 2026 introduce mejoras significativas en la interfaz:

- **Performance optimizado**: Interfaz más responsiva con renderizado acelerado por GPU
- **Iconos rediseñados**: Mayor claridad visual y consistencia en 4K/5K displays
- **Dark theme mejorado**: Reducción de fatiga visual en sesiones prolongadas
- **Tooltips inteligentes**: Información contextual expandida con ejemplos visuales
- **Acceso rápido a AutoCAD Web**: Integración cloud directa desde la interfaz

La configuración inicial correcta de tu entorno de trabajo puede mejorar tu productividad hasta en un 40%, según estudios de Autodesk sobre usuarios profesionales.

## Contenido

### 1. Anatomía de la Interfaz de AutoCAD 2026

Cuando inicias AutoCAD 2026, te encuentras con una interfaz organizada en zonas funcionales específicas:

![Interfaz principal de AutoCAD 2026](../imagenes/leccion-1-interfaz-principal.png)

#### Application Menu (Menú A)

Ubicado en la esquina superior izquierda, el botón con la letra "A" roja abre el Application Menu, que reemplaza al menú File tradicional. Aquí encuentras:

- **Comandos de archivo**: New, Open, Save, Save As, Export, Publish
- **Historial de archivos recientes**: Acceso rápido a proyectos anteriores
- **Utilidades de dibujo**: Drawing Utilities, Publish, Print
- **Opciones globales**: Options, Application Settings

**Atajo profesional**: La mayoría de usuarios experimentados rara vez usa este menú, prefiriendo atajos de teclado (Ctrl+N, Ctrl+O, Ctrl+S).

#### Quick Access Toolbar (QAT)

La barra horizontal en la parte superior contiene comandos de uso frecuente. Por defecto incluye:

- New (Nuevo)
- Open (Abrir)
- Save (Guardar)
- Undo (Deshacer)
- Redo (Rehacer)

**Personalización esencial**:
```
1. Clic derecho en QAT
2. "Customize Quick Access Toolbar"
3. Agregar comandos frecuentes:
   - QSAVE (Guardar rápido)
   - PLOT (Imprimir)
   - LAYER (Capas)
   - PROPERTIES (Propiedades)
   - MATCHPROP (Igualar propiedades)
```

**Novedad 2026**: El QAT ahora permite agrupación de comandos relacionados en flyouts personalizados.

#### Ribbon Interface

El Ribbon es la barra de herramientas principal organizada en tabs (pestañas) contextuales:

**Tabs principales**:

1. **Home**: Comandos de dibujo y modificación más comunes
   - Draw panel: Line, Circle, Arc, Rectangle, etc.
   - Modify panel: Move, Copy, Rotate, Trim, etc.
   - Annotation panel: Text, Dimension
   - Layers panel: Gestión de capas
   - Properties panel: Propiedades de objetos

2. **Insert**: Inserción de bloques, referencias y contenido externo
   - Block panel: Insert, Create Block
   - Reference panel: Attach (DWG, PDF, images)
   - Import panel: Importar desde otros formatos

3. **Annotate**: Herramientas de anotación y dimensionamiento
   - Text panel: Single Line Text, Multiline Text
   - Dimensions panel: Linear, Angular, Radial
   - Leaders panel: Multileader, Quick Leader
   - Tables panel: Table

4. **Parametric**: Restricciones geométricas y dimensionales (2D constraints)

5. **View**: Control de visualización del dibujo
   - Views panel: Named views, Camera
   - Navigate panel: Zoom, Pan
   - Viewports panel: Configuración de viewports
   - Visual Styles: 2D Wireframe, Hidden, etc.

6. **Manage**: Gestión de estándares, customization y CAD standards
   - Customization panel
   - CAD Standards panel
   - Action Recorder

7. **Output**: Impresión y exportación
   - Plot panel
   - Export panel: PDF, DWF, DWG

8. **Collaborate**: Nuevas funciones de colaboración cloud de 2026
   - Share panel
   - Autodesk Docs integration
   - Markup Import/Export

**Contextual Ribbons**: Algunos ribbons aparecen automáticamente al seleccionar ciertos objetos:
- **Text Editor**: Al editar Mtext
- **Hatch Editor**: Al seleccionar un hatch
- **Table**: Al editar tablas

**Estados del Ribbon**:
- **Full Ribbon**: Muestra todos los paneles expandidos
- **Minimize to Panel Titles**: Solo títulos de paneles
- **Minimize to Panel Buttons**: Solo botones de paneles
- **Minimize to Tabs**: Solo tabs visibles

Cambia entre estados con clic derecho en cualquier tab > Display options.

![Estados del Ribbon](../imagenes/leccion-1-ribbon-estados.png)

#### Command Line / Command Window

La línea de comandos es el corazón de AutoCAD desde su creación en 1982. A pesar de la interfaz gráfica moderna, sigue siendo la forma más rápida de trabajar.

**Características**:
- **Ubicación**: Por defecto en la parte inferior
- **Altura ajustable**: Arrastra el borde superior para mostrar 1-10 líneas
- **Transparencia**: Configurable en Options
- **Autocompletar**: Comienza a escribir y AutoCAD sugiere comandos
- **Historial**: F2 abre ventana expandida con todo el historial de sesión

**Anatomía del prompt**:
```
Command: LINE
Specify first point: [entrada usuario]
Specify next point or [Undo]: [entrada usuario]
Specify next point or [Undo]: [Enter para terminar]
Command:
```

**Tipos de entrada en Command Line**:
1. **Comandos**: Palabras completas o abreviadas (LINE o L)
2. **Opciones**: Letras mayúsculas entre corchetes [Close] → escribe C
3. **Coordenadas**: Numéricas (100,50) o relativas (@50,25)
4. **Valores**: Distancias, ángulos, radios

**Novedad 2026**: La Command Line ahora incluye sugerencias de comandos inteligentes basadas en tu contexto de trabajo y patrones de uso.

#### Drawing Area (Área de Dibujo)

El espacio en blanco (o negro en dark theme) donde creas tus dibujos. Características importantes:

- **Fondo personalizable**: Options > Display > Colors
- **Crosshair cursor**: El cursor en forma de cruz
- **UCS Icon**: Icono del sistema de coordenadas (X,Y) en la esquina inferior izquierda
- **ViewCube**: Cubo de navegación 3D (esquina superior derecha, útil en 3D)
- **Navigation Bar**: Barra lateral derecha con herramientas de navegación
- **Grid**: Cuadrícula de referencia visual (F7 para toggle)

**Tamaño del área de dibujo**:
El área de dibujo en AutoCAD es prácticamente infinita. Puedes dibujar desde objetos microscópicos (0.001mm) hasta escalas astronómicas (kilómetros).

#### Status Bar (Barra de Estado)

La barra inferior contiene información vital y toggles de herramientas de dibujo:

**Información mostrada**:
- **Coordenadas del cursor**: Actualización en tiempo real (X, Y, Z)
- **Workspace switcher**: Cambiar entre espacios de trabajo
- **Annotation Scale**: Escala de anotación actual
- **Viewport Scale**: Escala del viewport en layouts

**Herramientas de dibujo (toggles)**:
Estos botones activan/desactivan ayudas de dibujo (también con teclas F):

1. **Model/Layout tabs**: Cambio entre Model space y Paper space
2. **Grid Display (F7)**: Muestra/oculta cuadrícula
3. **Snap Mode (F9)**: Cursor salta a incrementos definidos
4. **Ortho Mode (F8)**: Restringe movimiento a horizontal/vertical
5. **Polar Tracking (F10)**: Rastreo angular incremental
6. **Object Snap (F3)**: Snap a puntos geométricos (endpoints, midpoint, center)
7. **Object Snap Tracking (F11)**: Rastreo desde osnaps
8. **Dynamic Input (F12)**: Entrada de datos junto al cursor
9. **Show/Hide Lineweight**: Visualización de grosor de líneas
10. **Transparency**: Control de transparencia de objetos
11. **Quick Properties**: Panel flotante con propiedades de selección
12. **Selection Cycling**: Ciclo entre objetos superpuestos
13. **Annotation Monitor**: Monitor de escalas de anotación
14. **AutoScale**: Escala automática de anotaciones
15. **Annotation Visibility**: Visibilidad de anotaciones

**Customización de la Status Bar**:
Clic en el icono de customización (tres líneas) en el extremo derecho para mostrar/ocultar toggles.

![Status Bar completa](../imagenes/leccion-1-status-bar.png)

#### Paletas Flotantes

AutoCAD incluye paletas (palettes) que flotan sobre el área de dibujo o se anclan a los lados:

**Paletas principales**:

1. **Properties Palette (Ctrl+1)**:
   - Muestra propiedades del objeto seleccionado
   - Permite edición directa de valores
   - Organizada por categorías (General, Geometry, etc.)

2. **Tool Palettes (Ctrl+3)**:
   - Biblioteca de bloques y herramientas reutilizables
   - Organizada en tabs personalizables
   - Drag & drop para insertar

3. **DesignCenter (Ctrl+2)**:
   - Navegador de contenido de otros dibujos
   - Importa bloques, capas, estilos de texto de otros DWG
   - Acceso a bibliotecas de símbolos

4. **Layer Properties Manager**:
   - Gestión completa de capas
   - Creación, eliminación, propiedades
   - Filtros y estados de capas

5. **External References (Ctrl+7)**:
   - Gestión de DWG, PDF, imágenes referenciadas

**Comportamiento de paletas**:
- **Auto-hide**: Se oculta cuando no está en uso
- **Anchor left/right**: Se ancla al borde de la ventana
- **Floating**: Flota libremente
- **Resize**: Redimensionable arrastrando bordes
- **Transparent**: Configurable en propiedades

### 2. Workspaces (Espacios de Trabajo)

Los Workspaces son configuraciones guardadas de la interfaz optimizadas para diferentes tipos de trabajo.

**Workspaces predefinidos**:

1. **Drafting & Annotation** (Predeterminado para 2D):
   - Ribbon completo con enfoque en 2D
   - Paletas: Properties, Layers
   - Óptimo para dibujo arquitectónico y mecánico

2. **3D Basics**:
   - Herramientas 3D en el ribbon
   - Visual Styles panel
   - Navigation tools expandido

3. **3D Modeling**:
   - Workspace completo para modelado 3D
   - Herramientas avanzadas de sólidos y superficies
   - Materiales y renderizado

4. **AutoCAD Classic** (para usuarios de versiones antiguas):
   - Simula interfaz pre-Ribbon
   - Menús pull-down tradicionales
   - Toolbars flotantes

**Cambiar Workspace**:
```
Método 1: Status bar > Workspace switcher dropdown
Método 2: Comando WSCURRENT
Método 3: Quick Access Toolbar > Workspace dropdown
```

**Crear Workspace personalizado**:
```
1. Configura interfaz como deseas (ribbons, paletas, toolbars)
2. Status bar > Workspace switcher > "Save Current As"
3. Nombre: "Mi Workspace Mecánico"
4. Save
```

Tu workspace personalizado ahora aparece en la lista y guarda:
- Posiciones de paletas
- Ribbons visibles
- Toolbars mostradas
- Estado de Command Line
- Configuración de menús

**Novedad 2026**: Workspaces ahora sincronizan automáticamente con la nube si tienes cuenta Autodesk, permitiendo mismo entorno en diferentes computadoras.

### 3. Configuración de Opciones del Sistema

El diálogo Options (comando OPTIONS o Ctrl+) controla cientos de configuraciones de AutoCAD.

#### Tab Files

- **Support File Search Path**: Directorios donde AutoCAD busca archivos de soporte (fonts, templates, linetypes)
- **Working Support File Search Path**: Similar pero con prioridad
- **Trusted Locations**: Carpetas confiables para ejecutar scripts (seguridad)
- **Automatic Save File Location**: Dónde guarda archivos de recuperación automática

**Configuración recomendada**:
```
Automatic Save: Activado
Minutes between saves: 10 minutos
```

#### Tab Display

- **Window Elements**: Tamaño de crosshair, mostrar scroll bars, colores de pantalla
- **Layout Elements**: Mostrar tabs de layouts, márgenes de impresión
- **Display Performance**: Aceleración de hardware, anti-aliasing

**Configuración esencial**:
```
Color Scheme: Dark (reduce fatiga visual) o Light
Crosshair size: 15-25 (porcentaje de pantalla)
Display resolution: Arc and circle smoothness: 10000 (círculos suaves)
```

**Cambiar color de fondo**:
```
Display tab > Colors button
Context: 2D model space
Interface element: Uniform background
Color: Elige tu preferencia (negro, gris oscuro, blanco)
```

#### Tab Open and Save

- **File Save**: Formato de guardado predeterminado
- **File Safety Precautions**: Automatic save, backup, CRC validation
- **Security Options**: Firmas digitales, encriptación

**Configuración profesional**:
```
Save as: AutoCAD 2018 Drawing (*.dwg) - máxima compatibilidad
Automatic save: Activado a 10 minutos
Create backup copy: Activado (crea archivo .BAK)
Maintain visual fidelity for annotative objects: Activado
```

#### Tab Plot and Publish

- **Default plot settings**: Configuración de impresión predeterminada
- **Plot to file**: Ubicación de archivos plotteados
- **Background processing**: Plot mientras continúas trabajando

#### Tab System

- **3D Performance**: Configuración de tarjeta gráfica
- **dbConnect Options**: Conexiones a bases de datos
- **General Options**: Single-drawing interface, Help settings

**Importante - Aceleración de hardware**:
```
System tab > Graphics Performance button
Hardware Acceleration: Activado (crucial para performance)
Smooth line display: Activado
```

#### Tab User Preferences

- **Windows Standard Behavior**: Comportamiento de atajos de Windows
- **Insertion scale**: Unidades predeterminadas para bloques insertados
- **Fields**: Actualización de campos
- **Priority for Coordinate Data Entry**: Keyboard entry vs Running OSNAP

**Configuración recomendada**:
```
Insertion scale: Millimeters (o tu unidad de trabajo principal)
Source content units: Millimeters
Target drawing units: Millimeters
```

#### Tab Drafting

- **AutoSnap Settings**: Configuración visual de Object Snaps
- **AutoTrack Settings**: Configuración de tracking
- **Alignment Point Acquisition**: Cómo se adquieren puntos de tracking
- **Aperture Size**: Tamaño del cuadro de selección de osnap

**AutoSnap Settings importantes**:
```
✓ Marker (muestra icono geométrico en osnap)
✓ Magnet (atrae cursor al punto de osnap)
✓ Display AutoSnap tooltip
✓ Display AutoSnap aperture box
```

#### Tab 3D Modeling

Configuraciones específicas para trabajo 3D (no relevante en curso básico 2D).

#### Tab Selection

- **Pickbox Size**: Tamaño del cuadro de selección
- **Selection Modes**: Window/Crossing behavior, Noun/Verb selection
- **Grips**: Tamaño, color de grips (cuadros azules en objetos seleccionados)

**Configuración óptima**:
```
Pickbox size: Mediano (balance entre precisión y facilidad)
✓ Noun/Verb selection (seleccionar primero, luego comando)
✓ Use Shift to add to selection
✓ Press and drag (Window/Crossing arrastrando)
Grip size: Mediano
```

#### Tab Profiles

Los Profiles guardan toda la configuración de Options como un perfil nombrado.

**Crear perfil personalizado**:
```
1. Configura todas las tabs de Options según tus preferencias
2. Tab Profiles > Add to List
3. Nombre: "Mi Perfil Arquitectónico"
4. Description: "Configuración optimizada para proyectos arquitectónicos"
5. Apply & Close
```

**Exportar/Importar perfil**:
Útil para transferir configuración entre computadoras o compartir con equipo.

### 4. Configuración Inicial Recomendada para Principiantes

Para nuevos usuarios, recomendamos esta configuración inicial:

```
WORKSPACE: Drafting & Annotation

OPTIONS:
  Display:
    - Color scheme: Dark
    - Crosshair size: 20
    - Background: Gris oscuro (33,40,48)

  Open and Save:
    - Save as: AutoCAD 2018 Drawing
    - Automatic save: 10 minutos
    - Create backup: Activado

  User Preferences:
    - Insertion scale: Millimeters

  Drafting:
    - AutoSnap: Todas activadas
    - Aperture size: Mediano

  Selection:
    - Pickbox: Mediano
    - Noun/Verb selection: Activado
    - Grip size: Mediano

STATUS BAR:
  Activar inicialmente:
    - Grid Display (F7): ON
    - Snap Mode (F9): ON
    - Ortho (F8): OFF (activar según necesidad)
    - Polar Tracking (F10): OFF
    - Osnap (F3): ON
    - Dynamic Input (F12): ON

QUICK ACCESS TOOLBAR:
  Agregar: QSAVE, PLOT, UNDO, REDO, LAYER
```

### 5. Navegación por Teclado vs Mouse vs Ribbons

AutoCAD ofrece tres paradigmas de trabajo:

**1. Command Line Purist** (Más rápido para expertos):
```
Escribe comandos completos o abreviados
Ejemplo: L [Enter] = LINE
         C [Enter] = CIRCLE
         M [Enter] = MOVE
```

**2. Ribbon User** (Mejor para principiantes):
```
Navega visualmente por ribbons
Clic en iconos
Tooltips explican cada herramienta
```

**3. Hybrid Approach** (Recomendado - profesionales):
```
Comandos frecuentes: Teclado (L, C, E, M, CO, TR, EX)
Comandos ocasionales: Ribbons
Configuración: Paletas y menús
```

**Filosofía profesional**:
> "Si usas un comando más de 5 veces al día, aprende su atajo de teclado"

### 6. Interfaz de AutoCAD 2026 en Dispositivos Táctiles

AutoCAD 2026 incluye mejoras para tablets y monitores táctiles:

- **Gestures**: Pan (dos dedos), Zoom (pinch), Rotate (dos dedos girando)
- **Touch Mode**: Aumenta tamaño de botones automáticamente
- **Sketching Tools**: Herramientas de dibujo a mano alzada optimizadas para stylus

Activa Touch Mode: Status bar > Customization > Touch Mode

## Ejercicio Práctico

**Ejercicio 1.1: Exploración Guiada de la Interfaz**

**Tiempo**: 20 minutos

**Instrucciones**:

1. Inicia AutoCAD 2026
2. Identifica cada elemento de la interfaz mencionado en esta lección
3. Localiza el comando LINE en:
   - Application Menu
   - Ribbon (Home tab > Draw panel)
   - Command Line (escribe LINE o L)
4. Ejecuta LINE desde los tres métodos y compara velocidad
5. Cambia entre workspaces: Drafting & Annotation → 3D Modeling → regresar
6. Personaliza QAT agregando QSAVE, PLOT, LAYER
7. Cambia tamaño del crosshair a 50 (Options > Display)
8. Cambia color de fondo a tu preferencia
9. Guarda configuración como Perfil: "Mi Primera Configuración"

**Ejercicio 1.2: Command Line vs Ribbon Speed Test**

**Tiempo**: 10 minutos

**Objetivo**: Comparar velocidad entre métodos de acceso

**Tarea**:
Dibuja 5 líneas utilizando:
- Método 1: Ribbon (Home > Draw > Line) - mide tiempo
- Método 2: Command Line (L + Enter) - mide tiempo

Notarás que el método de teclado es 3-4 veces más rápido.

**Ejercicio 1.3: Personalización de Workspace**

**Tiempo**: 15 minutos

**Objetivo**: Crear workspace personalizado

**Instrucciones**:
1. Configura interfaz con:
   - Ribbon minimizado a Panel Titles
   - Properties palette anclada a la derecha
   - Command Line con 3 líneas de altura
   - Tool Palettes visible
2. Guarda como "Mi Workspace 2D"
3. Cambia a otro workspace
4. Regresa a "Mi Workspace 2D" y verifica que restaura configuración

## Resumen

En esta primera lección has aprendido:

✓ **Anatomía completa** de la interfaz de AutoCAD 2026
✓ **Componentes principales**: Application Menu, QAT, Ribbon, Command Line, Status Bar
✓ **Workspaces**: Predefinidos y personalización
✓ **Options dialog**: Configuración del sistema en 9 tabs
✓ **Tres paradigmas** de trabajo: Teclado, Ribbons, Híbrido
✓ **Perfiles**: Guardar y compartir configuraciones

**Puntos clave para recordar**:

1. La **Command Line** es el método más rápido una vez dominas los atajos
2. Los **Workspaces** guardan configuraciones de interfaz completas
3. El **Options dialog** controla cientos de configuraciones - explóralo gradualmente
4. **F1-F12** son teclas de función vitales - memorízalas
5. **Personaliza** tu entorno desde el inicio para máxima eficiencia

**Atajos de teclado aprendidos**:
- `Ctrl+N`: Nuevo dibujo
- `Ctrl+O`: Abrir
- `Ctrl+S`: Guardar
- `Ctrl+1`: Properties palette
- `Ctrl+2`: DesignCenter
- `Ctrl+3`: Tool Palettes
- `F1`: Help
- `F2`: Expanded command line

**Próxima lección**: Sistema de Coordenadas y Unidades - aprenderás los tres métodos de entrada de coordenadas que AutoCAD utiliza para dibujo preciso.

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre QAT y Ribbon?
2. ¿Qué tecla abre el historial expandido de la Command Line?
3. Nombra tres workspaces predefinidos de AutoCAD 2026
4. ¿Dónde configuras el color de fondo del área de dibujo?
5. ¿Cuál es el método más rápido de ejecutar comandos frecuentes?
6. ¿Qué guarda un Profile de AutoCAD?
7. ¿Qué tecla de función activa/desactiva OSNAP?
8. ¿Dónde se encuentra la configuración de Automatic Save?

**Respuestas**: Al final del módulo.

## Recursos Adicionales

- **Autodesk Knowledge Network**: Artículo "AutoCAD 2026 Interface Overview"
- **Video**: "Getting Started with AutoCAD 2026" (YouTube oficial Autodesk)
- **Help**: Presiona F1 > "User Interface Overview"
- **Forum**: forums.autodesk.com - sección AutoCAD Interface Customization

---

**Nota del instructor**: Dedica tiempo suficiente a esta lección. Una interfaz bien configurada desde el inicio previene malos hábitos y acelera el aprendizaje en módulos posteriores. Permite que los estudiantes experimenten libremente - AutoCAD es resiliente y todo es reversible.
