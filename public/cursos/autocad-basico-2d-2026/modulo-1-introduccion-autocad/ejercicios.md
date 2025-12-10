# Ejercicios Prácticos - Módulo 1: Introducción a AutoCAD 2026

## Instrucciones Generales

Estos ejercicios están diseñados para reforzar los conceptos aprendidos en cada lección del Módulo 1. Realiza cada ejercicio en orden, ya que cada uno construye sobre las habilidades desarrolladas en el anterior.

**Importante**:
- Guarda cada ejercicio con el nombre especificado
- Usa las unidades indicadas en cada ejercicio
- Aplica los métodos de entrada de coordenadas correctos
- Verifica tu trabajo antes de guardar

---

## Ejercicio 1: Exploración de la Interfaz

**Objetivo**: Familiarizarse con la interfaz de AutoCAD 2026 y personalizar el espacio de trabajo.

**Duración estimada**: 30 minutos

**Instrucciones**:

1. Inicia AutoCAD 2026 y crea un nuevo dibujo usando la plantilla `acad.dwt`
2. Identifica y localiza los siguientes elementos de la interfaz:
   - Application Menu (botón "A" en la esquina superior izquierda)
   - Quick Access Toolbar
   - Ribbon con sus tabs (Home, Insert, Annotate, etc.)
   - Command Line (línea de comandos)
   - Status Bar (barra inferior con coordenadas)
   - ViewCube (cubo de navegación superior derecha)
   - Navigation Bar
3. Cambia al workspace "Drafting & Annotation":
   - Clic en el menú de workspaces en la barra de estado
   - Selecciona "Drafting & Annotation"
4. Personaliza el Quick Access Toolbar:
   - Agrega los comandos: QSAVE, UNDO, REDO, PLOT
   - Clic derecho en QAT > Customize Quick Access Toolbar
5. Configura la Command Line:
   - Arrastra para cambiar su altura a 3 líneas
   - Presiona F2 para ver el historial expandido
6. Experimenta con la visualización del Ribbon:
   - Clic derecho en cualquier tab > Minimize to Panel Titles
   - Regresa a "Show Full Ribbon"
7. Guarda este archivo como `Ejercicio_01_Interface.dwg`

**Resultado esperado**: Un dibujo vacío con el espacio de trabajo personalizado según tus preferencias.

**Criterios de evaluación**:
- ✓ Workspace configurado correctamente
- ✓ QAT personalizado con comandos indicados
- ✓ Comprensión de elementos de interfaz
- ✓ Archivo guardado con nombre correcto

---

## Ejercicio 2: Práctica de Coordenadas

**Objetivo**: Dominar los tres sistemas de entrada de coordenadas de AutoCAD.

**Duración estimada**: 45 minutos

**Instrucciones**:

1. Crea un nuevo dibujo (plantilla `acad.dwt`)
2. Configura las unidades:
   - Comando: `UNITS`
   - Type: Decimal
   - Precision: 0.00
3. Asegúrate que Dynamic Input esté desactivado (F12) para este ejercicio
4. Activa ORTHO (F8) y OSNAP (F3)

**Parte A: Coordenadas Absolutas**

Dibuja un rectángulo usando el comando LINE con coordenadas absolutas:

```
Command: LINE
From point: 100,100
To point: 200,100
To point: 200,150
To point: 100,150
To point: C (cerrar)
```

**Parte B: Coordenadas Relativas Cartesianas**

Dibuja un segundo rectángulo usando coordenadas relativas (@):

```
Command: LINE
From point: 250,100
To point: @100,0
To point: @0,50
To point: @-100,0
To point: C
```

**Parte C: Coordenadas Polares**

Dibuja un triángulo equilátero usando coordenadas polares (@distancia<ángulo):

```
Command: LINE
From point: 400,100
To point: @100<0
To point: @100<120
To point: C
```

**Parte D: Combinación de Métodos**

Dibuja una forma libre combinando los tres métodos:
- Punto inicial: 100,250 (absoluta)
- Línea horizontal: @80,0 (relativa cartesiana)
- Línea diagonal: @50<45 (polar)
- Línea vertical: @0,60 (relativa cartesiana)
- Cierra con C

5. Guarda como `Ejercicio_02_Coordenadas.dwg`

**Resultado esperado**: Cuatro figuras geométricas dibujadas con precisión usando diferentes sistemas de coordenadas.

**Criterios de evaluación**:
- ✓ Unidades configuradas correctamente
- ✓ Figuras cerradas correctamente
- ✓ Dimensiones exactas según especificación
- ✓ Uso correcto de cada sistema de coordenadas

---

## Ejercicio 3: Navegación y Visualización

**Objetivo**: Practicar comandos de ZOOM y PAN para navegar eficientemente en el dibujo.

**Duración estimada**: 30 minutos

**Instrucciones**:

1. Abre el archivo `Ejercicio_02_Coordenadas.dwg` creado anteriormente
2. Practica los siguientes comandos de ZOOM:

**ZOOM Window (Z + Enter + W)**
- Dibuja una ventana alrededor del primer rectángulo
- Observa cómo se amplía el área seleccionada

**ZOOM Extents (Z + Enter + E)**
- Encuadra todos los objetos en la pantalla
- Nota cómo llena el viewport con todos los objetos

**ZOOM All (Z + Enter + A)**
- Muestra todo el área de dibujo (limits)
- Compara con ZOOM Extents

**ZOOM Previous (Z + Enter + P)**
- Regresa a la vista anterior
- Úsalo 3-4 veces para ver el historial de vistas

**ZOOM Realtime (Z + Enter o scroll del mouse)**
- Mantén presionado el botón del scroll y mueve el mouse
- Aleja y acerca dinámicamente

**PAN (P + Enter o mantén scroll presionado + arrastra)**
- Mueve la vista sin cambiar el zoom
- Practica moverte por todo el dibujo

3. Usa el ViewCube:
   - Clic en "Top" para vista superior (debe estar ya en esta vista)
   - Clic en el Home icon para regresar a vista guardada

4. Crea una vista guardada:
   - Comando: `VIEW`
   - New > Nombre: "Vista_Completa"
   - OK
   - Haz zoom a un detalle
   - Comando: `VIEW` > Selecciona "Vista_Completa" > Set Current

5. Practica la combinación de navegación:
   - ZOOM Window en el triángulo
   - PAN hacia la izquierda
   - ZOOM Previous dos veces
   - ZOOM Extents

6. No es necesario guardar cambios (este es ejercicio de navegación)

**Resultado esperado**: Fluidez en navegación sin perderse en el dibujo.

**Criterios de evaluación**:
- ✓ Ejecución correcta de todos los comandos ZOOM
- ✓ Uso efectivo de PAN
- ✓ Creación exitosa de vista guardada
- ✓ Navegación fluida sin desorientación

---

## Ejercicio 4: Métodos de Selección

**Objetivo**: Dominar todos los métodos de selección de objetos en AutoCAD.

**Duración estimada**: 40 minutos

**Instrucciones**:

1. Crea un nuevo dibujo con plantilla `acad.dwt`
2. Dibuja los siguientes objetos (puedes usar coordenadas aproximadas):
   - 5 círculos dispersos (comando CIRCLE, radio 20)
   - 4 rectángulos (comando RECTANG, tamaño aproximado 50x30)
   - 3 líneas diagonales (comando LINE)

**Practica cada método de selección**:

**Selección Individual**
- Comando: `ERASE`
- Selecciona un círculo haciendo clic sobre él
- Enter para ejecutar
- Comando: `U` (undo) para recuperarlo

**Window Selection (izquierda a derecha)**
- Comando: `ERASE`
- Primer punto: esquina superior izquierda
- Segundo punto: esquina inferior derecha (crea ventana azul)
- Solo objetos completamente dentro de la ventana son seleccionados
- Enter > U para deshacer

**Crossing Selection (derecha a izquierda)**
- Comando: `ERASE`
- Primer punto: esquina superior derecha
- Segundo punto: esquina inferior izquierda (crea ventana verde)
- Objetos tocados o dentro de la ventana son seleccionados
- Enter > U para deshacer

**Fence Selection**
- Comando: `ERASE`
- Escribe: `F` (Fence)
- Dibuja una línea que cruce varios objetos
- Enter para terminar fence
- Todos los objetos cruzados se seleccionan
- Enter > U

**All Selection**
- Comando: `ERASE`
- Escribe: `ALL`
- Todos los objetos se seleccionan
- Enter > U inmediatamente

**Previous Selection**
- Comando: `ERASE` y selecciona 3 objetos cualquiera
- Enter > U
- Comando: `ERASE`
- Escribe: `P` (Previous)
- Los mismos 3 objetos se seleccionan nuevamente
- Enter > U

**Selection Cycling (útil con objetos superpuestos)**
- Dibuja dos círculos superpuestos
- Mantén presionada la tecla `Shift`
- Clic repetidamente sobre el área superpuesta
- Observa cómo alterna la selección
- ESC para cancelar

3. Practica combinación de métodos:
   - Comando: `ERASE`
   - Selecciona 2 círculos con Window
   - Mantén Shift y deselecciona 1 círculo
   - Agrega 1 rectángulo con clic individual
   - Enter para borrar

4. Guarda como `Ejercicio_04_Seleccion.dwg`

**Resultado esperado**: Dominio completo de métodos de selección y capacidad de seleccionar exactamente los objetos deseados.

**Criterios de evaluación**:
- ✓ Diferenciación clara entre Window y Crossing
- ✓ Uso correcto de Fence
- ✓ Comprensión de Previous y All
- ✓ Habilidad para combinar métodos

---

## Ejercicio 5: Entrada Dinámica

**Objetivo**: Utilizar Dynamic Input para acelerar la entrada de datos y coordenadas.

**Duración estimada**: 35 minutos

**Instrucciones**:

1. Crea un nuevo dibujo con plantilla `acad.dwt`
2. Activa Dynamic Input presionando `F12` (debe aparecer ícono azul en barra de estado)
3. Configura Dynamic Input:
   - Comando: `DSETTINGS`
   - Tab "Dynamic Input"
   - Activa las tres opciones:
     - Enable Pointer Input
     - Enable Dimension Input where possible
     - Enable Dynamic Prompts
   - Clic en "Settings" de Pointer Input
   - Format: Polar format
   - OK

**Práctica con Pointer Input**:

4. Comando: `LINE`
   - Clic en punto inicial (observa tooltip junto al cursor)
   - Mueve el cursor y observa la dimensión dinámica
   - Escribe `100` (distancia) y presiona TAB
   - Escribe `0` (ángulo) y Enter
   - Escribe `100` TAB `90` Enter (línea vertical)
   - Escribe `100` TAB `180` Enter (línea horizontal)
   - `C` para cerrar

**Práctica con Direct Distance Entry**:

5. Comando: `LINE`
   - Clic en punto inicial
   - Apunta el cursor hacia la derecha (ORTHO activo F8)
   - Escribe `150` y Enter (no necesitas especificar ángulo)
   - Apunta hacia arriba
   - Escribe `75` Enter
   - Apunta hacia la izquierda
   - Escribe `150` Enter
   - `C` para cerrar

**Práctica con Dimension Input**:

6. Comando: `CIRCLE`
   - Clic en centro
   - Observa el tooltip dinámico solicitando radio
   - Escribe `40` Enter (sin necesidad de escribir "R" para radio)

7. Comando: `RECTANG`
   - Clic en primer punto
   - Observa los dos campos de entrada (Width y Height)
   - Escribe `80` TAB `50` Enter
   - Rectángulo creado con dimensiones exactas

**Cambio entre Coordenadas Absolutas y Relativas**:

8. Comando: `LINE`
   - Escribe `200,200` Enter (coordenadas absolutas con Dynamic Input)
   - Escribe `@50,0` Enter (relativas - el @ es necesario)
   - Escribe `#300,250` Enter (absolutas - el # anula Dynamic Input)
   - ESC para cancelar

9. Compara velocidad:
   - Dibuja un cuadrado sin Dynamic Input (F12 off)
   - Dibuja el mismo cuadrado con Dynamic Input (F12 on)
   - Nota la diferencia de velocidad

10. Guarda como `Ejercicio_05_DynamicInput.dwg`

**Resultado esperado**: Fluidez en el uso de Dynamic Input para entrada rápida y precisa de datos.

**Criterios de evaluación**:
- ✓ Dynamic Input configurado correctamente
- ✓ Uso efectivo de TAB para cambiar entre campos
- ✓ Comprensión de entrada polar vs cartesiana
- ✓ Velocidad mejorada en creación de geometría

---

## Ejercicio 6: Gestión de Archivos y Plantillas

**Objetivo**: Crear y gestionar archivos DWG y plantillas personalizadas.

**Duración estimada**: 45 minutos

**Instrucciones**:

**Parte A: Gestión de Archivos**

1. Comando: `NEW`
   - Selecciona plantilla `acad.dwt`
   - Observa que crea "Drawing1.dwg"

2. Comando: `SAVEAS`
   - Navega a tu carpeta de ejercicios
   - Nombre: `Proyecto_Base.dwg`
   - Save as type: AutoCAD 2018 Drawing (*.dwg) - formato compatible
   - Save

3. Realiza algunos cambios (dibuja 2-3 objetos)

4. Comando: `QSAVE` (o Ctrl+S)
   - Guarda rápidamente sin diálogo

5. Comando: `CLOSE`
   - Cierra el dibujo actual
   - Si hay cambios sin guardar, preguntará

6. Comando: `OPEN` (o Ctrl+O)
   - Reabre `Proyecto_Base.dwg`

**Parte B: Creación de Plantilla Personalizada**

7. Comando: `NEW` > `acad.dwt`

8. Configura unidades:
   - Comando: `UNITS`
   - Type: Architectural
   - Precision: 1/16"
   - Angle Type: Decimal Degrees
   - Angle Precision: 0
   - OK

9. Configura límites del dibujo:
   - Comando: `LIMITS`
   - Lower left corner: 0,0
   - Upper right corner: 36',24' (plano arquitectónico tamaño E)

10. Comando: `ZOOM` > `ALL` para ver límites

11. Configura Grid y Snap:
    - Comando: `DSETTINGS`
    - Tab "Snap and Grid"
    - Grid spacing X: 12" (1 pie)
    - Grid spacing Y: 12"
    - Snap spacing X: 1"
    - Snap spacing Y: 1"
    - Activa Grid On (F7) y Snap On (F9)
    - OK

12. Crea capas básicas:
    - Comando: `LAYER`
    - New layer: MUROS, Color: White, Linetype: Continuous, Lineweight: 0.50mm
    - New layer: PUERTAS, Color: Red, Linetype: Continuous, Lineweight: 0.25mm
    - New layer: VENTANAS, Color: Blue, Linetype: Continuous, Lineweight: 0.25mm
    - New layer: ANOTACIONES, Color: Green, Linetype: Continuous, Lineweight: 0.13mm
    - New layer: EJES, Color: Magenta, Linetype: CENTER, Lineweight: 0.18mm
    - OK

13. Configura estilos de texto básico:
    - Comando: `STYLE`
    - New: ARIAL_3mm
    - Font Name: Arial
    - Height: 3mm (dejar en 0.0000 para texto variable)
    - Apply > Close

14. Guarda como plantilla:
    - Comando: `SAVEAS`
    - Save as type: AutoCAD Drawing Template (*.dwt)
    - Nombre: `Plantilla_Arquitectonica_Personal.dwt`
    - Description: "Plantilla arquitectónica con unidades imperiales, capas básicas y configuración de grid"
    - Measurement: English
    - Save

**Parte C: Uso de la Plantilla**

15. Comando: `CLOSE` (cierra el dibujo actual)

16. Comando: `NEW`
    - Selecciona `Plantilla_Arquitectonica_Personal.dwt`
    - Observa que todas las configuraciones están presentes

17. Verifica:
    - Comando: `UNITS` (debe mostrar Architectural)
    - Comando: `LAYER` (deben aparecer las 5 capas)
    - F7 para ver grid configurado

18. Dibuja algo simple usando las capas creadas:
    - Activa capa MUROS
    - Dibuja un rectángulo 20' x 15'

19. Guarda como `Ejercicio_06_Plantilla_Test.dwg`

**Parte D: Exploración de Drawing Utilities**

20. Comando: `AUDIT`
    - Fix any errors: Yes
    - Verifica integridad del archivo

21. Comando: `PURGE`
    - Purge all (elimina elementos no usados)
    - Reduce tamaño de archivo

22. Comando: `RECOVER`
    - Solo para demostración (selecciona el archivo actual)
    - Recupera archivos dañados

**Resultado esperado**: Una plantilla personalizada funcional y comprensión de gestión de archivos.

**Criterios de evaluación**:
- ✓ Plantilla creada con todas las configuraciones
- ✓ Capas definidas correctamente
- ✓ Unidades y límites configurados
- ✓ Capacidad de usar la plantilla en nuevos proyectos

---

## Proyecto Integrador del Módulo 1

**Título**: Configuración de Entorno de Trabajo Profesional

**Objetivo**: Aplicar todos los conocimientos del módulo para crear un entorno de trabajo personalizado y dibujo de verificación.

**Duración estimada**: 90 minutos

**Descripción**:

Crearás una plantilla profesional completa y un dibujo de prueba que demuestre dominio de todos los conceptos del módulo.

**Instrucciones**:

1. **Crea una plantilla profesional para dibujo mecánico**:
   - Nombre: `Plantilla_Mecanica_ISO.dwt`
   - Unidades: Decimal (milímetros)
   - Precision: 0.00
   - Límites: 0,0 a 420,297 (tamaño A3)
   - Grid: 10mm
   - Snap: 1mm
   - Capas:
     - CONTORNO (Color: White, Lineweight: 0.50mm)
     - EJES (Color: Red, Linetype: CENTER2, Lineweight: 0.25mm)
     - OCULTAS (Color: Yellow, Linetype: HIDDEN, Lineweight: 0.25mm)
     - COTAS (Color: Green, Lineweight: 0.18mm)
     - TEXTO (Color: Cyan, Lineweight: 0.13mm)
     - DETALLES (Color: Blue, Lineweight: 0.35mm)

2. **Usando tu plantilla, crea un dibujo técnico de verificación**:

   En la capa CONTORNO, dibuja usando coordenadas exactas:
   - Un cuadrado de 100x100mm iniciando en 50,50
   - Usa coordenadas relativas

   En la capa EJES:
   - Líneas de eje horizontal y vertical cruzando el centro del cuadrado
   - Usa coordenadas polares y absolutas

   En la capa DETALLES:
   - Cuatro círculos de radio 15mm en las esquinas del cuadrado
   - Centros a 20mm de cada esquina
   - Usa coordenadas relativas desde las esquinas

3. **Demuestra dominio de navegación**:
   - Crea tres vistas guardadas:
     - "Vista_General": ZOOM Extents
     - "Vista_Detalle_Esquina": ZOOM Window en esquina superior derecha
     - "Vista_Centro": ZOOM Window en el área central

4. **Demuestra dominio de selección**:
   - Usa COPY para duplicar toda la pieza:
     - Selecciona todos los objetos con Window
     - Copia 200mm a la derecha

5. **Guarda el proyecto**:
   - Archivo: `Proyecto_Integrador_M1.dwg`

**Entregables**:
- Archivo de plantilla: `Plantilla_Mecanica_ISO.dwt`
- Archivo de dibujo: `Proyecto_Integrador_M1.dwg`
- Las tres vistas guardadas deben estar creadas

**Criterios de Evaluación** (100 puntos):

| Criterio | Puntos |
|----------|--------|
| Plantilla configurada correctamente (unidades, límites, grid/snap) | 20 |
| Todas las 6 capas creadas con propiedades correctas | 20 |
| Dibujo técnico con dimensiones exactas | 25 |
| Uso correcto de los tres sistemas de coordenadas | 15 |
| Tres vistas guardadas funcionando correctamente | 10 |
| Copia del dibujo usando selección correcta | 10 |
| **Total** | **100** |

**Aprobación**: 80 puntos o más

---

## Recursos Adicionales

**Videos recomendados** (Autodesk official):
- "AutoCAD 2026 - Getting Started"
- "Understanding Coordinate Systems in AutoCAD"
- "Creating Custom Templates"

**Documentación**:
- AutoCAD 2026 User's Guide - Chapter 2: Create and Save Drawings
- AutoCAD 2026 Help - Coordinate Entry Methods

**Atajos de teclado esenciales del Módulo 1**:
- `F1`: Help
- `F2`: Expanded command history
- `F3`: OSNAP toggle
- `F7`: Grid toggle
- `F8`: ORTHO toggle
- `F9`: SNAP toggle
- `F12`: Dynamic Input toggle
- `Ctrl+N`: NEW
- `Ctrl+O`: OPEN
- `Ctrl+S`: QSAVE
- `Ctrl+Z`: UNDO
- `Ctrl+Y`: REDO

**Solución de problemas comunes**:

1. **"No veo el cursor en la pantalla"**
   - Solución: ZOOM Extents (Z+E)

2. **"La línea no se cierra correctamente"**
   - Solución: Usa opción `C` (Close) en lugar de intentar volver al inicio

3. **"Dynamic Input no muestra información"**
   - Solución: Verifica F12 esté activado y configura DSETTINGS

4. **"El archivo es muy grande"**
   - Solución: Usa PURGE y AUDIT regularmente

---

**Nota para el instructor**: Estos ejercicios están diseñados para completarse en el orden presentado. Asegúrate de que todos los estudiantes completen cada ejercicio antes de avanzar al siguiente. El Proyecto Integrador debe realizarse sin ayuda para evaluar la retención real de conocimientos.
