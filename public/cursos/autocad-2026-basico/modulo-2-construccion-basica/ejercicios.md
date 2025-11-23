# Ejercicios Prácticos - Módulo 2: Construcción Básica

## Introducción

Esta serie de ejercicios está diseñada para reforzar los conceptos fundamentales del Módulo 2, incluyendo la creación de arcos, círculos, elipses, el uso de referencias a objetos (Object Snap) y las herramientas de visualización (Zoom y Pan).

Trabajaremos con el dibujo de subdivisión que iniciamos en el Tutorial 2, aplicando técnicas progresivas que te permitirán dominar las herramientas básicas de construcción en AutoCAD 2026.

**Tiempo estimado:** 2-3 horas
**Nivel:** Básico
**Requisitos previos:** Haber completado las lecciones del Módulo 2

---

## Ejercicio 2.1M: Abrir y Guardar el Dibujo de Trabajo

**Objetivo:** Aprender a abrir archivos existentes y guardarlos con un nuevo nombre para preservar el original.

### Pasos a seguir:

1. ✅ Inicia AutoCAD 2026
2. ✅ Haz clic en el botón **Open** (Abrir) en la Quick Access Toolbar
3. ✅ Navega hasta la carpeta de archivos de práctica del curso
4. ✅ Selecciona el archivo `subdivis.dwg`
5. ✅ Haz clic en **Open**
6. ✅ Inmediatamente, selecciona **File > Save As** del menú de aplicación
7. ✅ En el cuadro de diálogo, cambia el nombre a `subdivis2.dwg`
8. ✅ Verifica que la ubicación sea la carpeta de tu proyecto
9. ✅ Haz clic en **Save**

### Resultado esperado:

Ahora tienes una copia del dibujo original con el nombre `subdivis2.dwg`. El archivo original `subdivis.dwg` permanece intacto. La barra de título de AutoCAD debe mostrar "subdivis2.dwg".

### Consejo:

Siempre es una buena práctica guardar versiones incrementales de tus dibujos (v1, v2, v3) para poder regresar a versiones anteriores si es necesario.

---

## Ejercicio 2.2: Crear la Capa EASEMENTS

**Objetivo:** Practicar la creación de capas con propiedades específicas, incluyendo color y tipo de línea.

### Pasos a seguir:

1. ✅ Abre el **Layer Properties Manager** haciendo clic en el icono de capas o escribiendo `LAYER` + Enter
2. ✅ Haz clic en el botón **New Layer** (icono de estrella con +)
3. ✅ Nombra la nueva capa como `EASEMENTS`
4. ✅ Haz clic en el cuadro de color de la capa EASEMENTS
5. ✅ Selecciona el color **Cyan (cian)** del selector de colores
6. ✅ Haz clic en **OK** para confirmar el color
7. ✅ Ahora haz clic en el tipo de línea de EASEMENTS (donde dice "Continuous")
8. ✅ En el cuadro de diálogo, haz clic en **Load** (Cargar)
9. ✅ Desplázate y selecciona el tipo de línea **HIDDEN**
10. ✅ Haz clic en **OK** dos veces para aplicar
11. ✅ Haz doble clic en la capa EASEMENTS para establecerla como capa actual
12. ✅ Cierra el Layer Properties Manager

### Resultado esperado:

La capa EASEMENTS está creada con color cyan y tipo de línea HIDDEN. Esta capa está ahora activa (Current), lo que significa que todos los objetos nuevos se dibujarán en esta capa.

### Advertencia:

Asegúrate de que la capa EASEMENTS esté establecida como actual antes de comenzar a dibujar. Verifica esto en el Layer Control de la Ribbon.

---

## Ejercicio 2.3: Dibujar Arcos con 3 Puntos

**Objetivo:** Dominar el método Arc 3 Points para crear arcos definidos por tres puntos.

### Pasos a seguir:

1. ✅ Verifica que la capa EASEMENTS esté activa (actual)
2. ✅ Activa la Ribbon pestaña **Home > Draw panel**
3. ✅ Haz clic en el desplegable **Arc** y selecciona **3-Point**
4. ✅ En la esquina inferior izquierda de la intersección del camino, especifica el primer punto
5. ✅ Mueve el cursor a la esquina superior derecha de la misma intersección y haz clic para el segundo punto
6. ✅ Mueve el cursor hacia el centro de la intersección para formar la curva
7. ✅ Haz clic cuando el arco tenga la curvatura deseada (tercer punto)
8. ✅ Presiona **Enter** o **Esc** para terminar el comando
9. ✅ Repite el proceso para crear arcos en las otras tres esquinas de las intersecciones de caminos

### Resultado esperado:

Deberías tener cuatro arcos de color cyan con línea discontinua (HIDDEN) en las esquinas de las intersecciones de los caminos, simulando los bordes curvos típicos de las servidumbres de paso.

### Consejo:

El tercer punto determina la curvatura del arco. Cuanto más lejos del segmento entre los dos primeros puntos, más pronunciada será la curva.

---

## Ejercicio 2.4: Congelar la Capa ROADS

**Objetivo:** Aprender a controlar la visibilidad de capas usando la función Freeze (congelar).

### Pasos a seguir:

1. ✅ Abre el **Layer Properties Manager** (comando `LAYER` o clic en el icono)
2. ✅ Localiza la capa **ROADS** en la lista
3. ✅ Haz clic en el icono del sol en la columna **Freeze** de la capa ROADS
4. ✅ El icono cambiará a un copo de nieve, indicando que la capa está congelada
5. ✅ Haz clic en **OK** o cierra el Layer Properties Manager
6. ✅ Observa cómo los caminos desaparecen de la vista

### Resultado esperado:

Los caminos ya no son visibles en el dibujo. Esto te permite concentrarte en trabajar con las servidumbres de paso sin distracciones visuales.

### Diferencia importante:

**Freeze vs Off:** Congelar (Freeze) es más eficiente que apagar (Off) porque AutoCAD no procesa los objetos congelados, mejorando el rendimiento en dibujos grandes.

---

## Ejercicio 2.5: Arcos con Start, Center, End

**Objetivo:** Practicar el método Arc Start, Center, End para crear arcos con control preciso del centro.

### Pasos a seguir:

1. ✅ Verifica que EASEMENTS siga siendo la capa actual
2. ✅ Haz clic en **Arc** desplegable > **Start, Center, End**
3. ✅ Especifica el punto inicial del arco en una ubicación apropiada de la servidumbre
4. ✅ El comando solicita "Specify center point of arc:" (Especificar punto central del arco)
5. ✅ Haz clic para definir el centro del arco
6. ✅ Mueve el cursor y observa cómo el arco se forma alrededor del centro
7. ✅ Especifica el punto final del arco
8. ✅ Crea al menos 3 arcos diferentes usando este método en diferentes ubicaciones

### Resultado esperado:

Has creado varios arcos donde el control del punto central te permite una precisión mayor en la geometría de las curvas. Este método es ideal cuando conoces el centro de rotación del arco.

### Aplicación práctica:

Este método es especialmente útil para dibujar elementos arquitectónicos como arcos estructurales, esquinas redondeadas con radio específico, y elementos circulares parciales.

---

## Ejercicio 2.6: Arcos con Start, End, Angle

**Objetivo:** Crear arcos definiendo el ángulo incluido, practicando específicamente con un ángulo de 45°.

### Pasos a seguir:

1. ✅ Haz clic en **Arc** desplegable > **Start, End, Angle**
2. ✅ Especifica el punto inicial del arco en una servidumbre
3. ✅ Especifica el punto final del arco
4. ✅ El comando solicita "Specify included angle:" (Especificar ángulo incluido)
5. ✅ Escribe `45` y presiona **Enter** para crear un arco de 45 grados
6. ✅ Observa cómo el arco se crea automáticamente con ese ángulo específico
7. ✅ Repite el proceso creando arcos con diferentes ángulos:
   - ✅ Un arco de 90 grados
   - ✅ Un arco de 120 grados
   - ✅ Un arco de 180 grados (semicírculo)

### Resultado esperado:

Has creado múltiples arcos con ángulos precisos. Observa cómo el mismo punto inicial y final puede producir arcos diferentes dependiendo del ángulo incluido.

### Nota técnica:

Los ángulos positivos crean arcos en sentido antihorario (CCW - Counter-ClockWise), mientras que los ángulos negativos crean arcos en sentido horario (CW - ClockWise).

---

## Ejercicio 2.7: Descongelar ROADS y Congelar EASEMENTS

**Objetivo:** Practicar la alternancia de visibilidad de capas para trabajar con diferentes elementos.

### Pasos a seguir:

1. ✅ Abre el **Layer Properties Manager**
2. ✅ Localiza la capa **ROADS**
3. ✅ Haz clic en el icono del copo de nieve en la columna Freeze
4. ✅ El icono cambiará a un sol, descongelando la capa ROADS
5. ✅ Los caminos volverán a ser visibles
6. ✅ Ahora localiza la capa **EASEMENTS**
7. ✅ Haz clic en el icono del sol en la columna Freeze de EASEMENTS
8. ✅ El icono cambiará a copo de nieve, congelando las servidumbres
9. ✅ Cierra el Layer Properties Manager
10. ✅ Observa cómo ahora solo ves los caminos, sin las servidumbres

### Resultado esperado:

Has alternado la visibilidad entre capas. Ahora ves los caminos pero no las servidumbres de paso. Esta técnica es fundamental para trabajar eficientemente en dibujos complejos.

### Consejo profesional:

Aprende los atajos de teclado para congelar capas rápidamente. Puedes hacer clic derecho en cualquier objeto y seleccionar "Isolate > Isolate Layer" para trabajar solo con esa capa.

---

## Ejercicio 2.8: Práctica Intensiva con Círculos

**Objetivo:** Dominar los diferentes métodos de creación de círculos en AutoCAD.

### Parte A: Círculo de 2 Puntos

1. ✅ Crea una nueva capa llamada **CIRCLES** con color amarillo (Yellow)
2. ✅ Establece CIRCLES como capa actual
3. ✅ Haz clic en **Circle** desplegable > **2-Point**
4. ✅ Especifica el primer punto del diámetro en una ubicación libre
5. ✅ Especifica el segundo punto del diámetro
6. ✅ Observa cómo el círculo se crea usando esos dos puntos como diámetro

### Parte B: Círculo de 3 Puntos

1. ✅ Haz clic en **Circle** desplegable > **3-Point**
2. ✅ Especifica tres puntos no colineales en el dibujo
3. ✅ AutoCAD crea un círculo que pasa exactamente por los tres puntos
4. ✅ Crea al menos 3 círculos más usando este método

### Parte C: Círculo Tangente a 2 Objetos

1. ✅ Descongela la capa ROADS si está congelada
2. ✅ Haz clic en **Circle** desplegable > **Tan, Tan, Radius**
3. ✅ El comando solicita el primer objeto tangente
4. ✅ Haz clic cerca de uno de los caminos
5. ✅ El comando solicita el segundo objeto tangente
6. ✅ Haz clic cerca de otro camino
7. ✅ Escribe un valor de radio, por ejemplo `50`, y presiona Enter
8. ✅ AutoCAD crea un círculo tangente a ambos caminos con el radio especificado

### Parte D: Círculo Tangente a 3 Objetos

1. ✅ Haz clic en **Circle** desplegable > **Tan, Tan, Tan**
2. ✅ Selecciona tres objetos diferentes (caminos, líneas de lotes, etc.)
3. ✅ AutoCAD crea un círculo tangente a los tres objetos simultáneamente

### Resultado esperado:

Has creado múltiples círculos usando cuatro métodos diferentes. Cada método tiene aplicaciones específicas en el dibujo técnico. Deberías tener al menos 8-10 círculos de práctica en tu dibujo.

### Aplicaciones prácticas:

- **2-Point:** Definir círculos por diámetro conocido
- **3-Point:** Círculos que deben pasar por puntos específicos
- **Tan, Tan, Radius:** Redondeos y filetes con radio específico
- **Tan, Tan, Tan:** Círculos inscritos en figuras triangulares

---

## Ejercicio 2.9: Configuración y Práctica de Object Snap

**Objetivo:** Configurar y dominar el uso de referencias a objetos para dibujo preciso.

### Parte A: Configurar Object Snap

1. ✅ Haz clic derecho en el botón **OSNAP** en la barra de estado
2. ✅ Selecciona **Object Snap Settings**
3. ✅ Verifica que estén activadas estas referencias:
   - ✅ Endpoint (Punto final)
   - ✅ Midpoint (Punto medio)
   - ✅ Center (Centro)
   - ✅ Node (Nodo)
   - ✅ Quadrant (Cuadrante)
   - ✅ Intersection (Intersección)
   - ✅ Extension (Extensión)
   - ✅ Perpendicular (Perpendicular)
   - ✅ Tangent (Tangente)
4. ✅ Asegúrate de que **Object Snap On (F3)** esté marcado
5. ✅ Haz clic en **OK**
6. ✅ Verifica que el botón OSNAP en la barra de estado esté activado (azul)

### Parte B: Practicar con Line y Object Snap

1. ✅ Activa el comando **LINE**
2. ✅ Acerca el cursor al extremo de uno de los caminos
3. ✅ Observa el marcador de **Endpoint** (cuadrado) y el tooltip
4. ✅ Haz clic cuando aparezca el marcador
5. ✅ Mueve el cursor al punto medio de otro camino
6. ✅ Observa el marcador de **Midpoint** (triángulo)
7. ✅ Haz clic en el punto medio
8. ✅ Presiona Enter para terminar

### Parte C: Practicar con Center y Quadrant

1. ✅ Inicia el comando **LINE** nuevamente
2. ✅ Acerca el cursor al centro de uno de los círculos que creaste
3. ✅ Espera a que aparezca el marcador **Center** (círculo pequeño)
4. ✅ Haz clic para iniciar la línea desde el centro
5. ✅ Mueve el cursor a uno de los cuadrantes del círculo (90°, 180°, 270°, 360°)
6. ✅ Observa el marcador **Quadrant** (rombo)
7. ✅ Haz clic en el cuadrante
8. ✅ Presiona Enter

### Parte D: Practicar Intersecciones y Tangencias

1. ✅ Usa el comando **LINE**
2. ✅ Encuentra la intersección entre dos caminos usando el snap **Intersection** (X)
3. ✅ Desde esa intersección, traza una línea tangente a uno de los círculos
4. ✅ Observa cómo el marcador **Tangent** (círculo con línea) aparece automáticamente
5. ✅ Completa varias líneas usando diferentes combinaciones de snaps

### Resultado esperado:

Has configurado correctamente Object Snap y practicado su uso con diferentes tipos de referencias. Ahora puedes dibujar con precisión absoluta sin necesidad de introducir coordenadas manualmente.

### Consejo profesional:

Puedes usar Object Snap Override (sobrescribir temporalmente) manteniendo presionada la tecla **Shift** y haciendo clic derecho durante un comando, lo que te permite seleccionar un snap específico solo para ese punto.

---

## Ejercicio 2.10: Dominar Zoom y Pan

**Objetivo:** Practicar las herramientas de navegación para visualizar eficientemente el dibujo.

### Parte A: Zoom Window (Ventana)

1. ✅ Haz clic en **Zoom** > **Window** en la barra de navegación
2. ✅ Haz clic en una esquina para definir el primer punto de la ventana
3. ✅ Arrastra el cursor en diagonal
4. ✅ Haz clic para definir el segundo punto
5. ✅ El área seleccionada se amplía para llenar la pantalla
6. ✅ Practica haciendo zoom a diferentes secciones del dibujo

### Parte B: Zoom Previous (Anterior)

1. ✅ Después de hacer varios zooms, haz clic en **Zoom** > **Previous**
2. ✅ Observa cómo regresas a la vista anterior
3. ✅ Haz clic en Previous varias veces
4. ✅ AutoCAD guarda las últimas 10 vistas

### Parte C: Zoom Extents (Extensión)

1. ✅ Haz clic en **Zoom** > **Extents**
2. ✅ Todos los objetos del dibujo se muestran ajustados a la ventana
3. ✅ Esta es la forma más rápida de ver todo el dibujo

### Parte D: Zoom Realtime (Tiempo Real)

1. ✅ Haz clic en **Zoom** > **Realtime** (o simplemente escribe `Z` + Enter)
2. ✅ El cursor cambia a una lupa con + y -
3. ✅ Haz clic y arrastra hacia arriba para acercar (zoom in)
4. ✅ Haz clic y arrastra hacia abajo para alejar (zoom out)
5. ✅ Presiona Enter o Esc para salir
6. ✅ Alternativamente, usa la rueda del mouse para hacer zoom

### Parte E: Pan (Encuadre)

1. ✅ Haz clic en **Pan** en la barra de navegación (o presiona la rueda del mouse)
2. ✅ El cursor cambia a una mano
3. ✅ Haz clic y arrastra para mover la vista
4. ✅ Presiona Esc para salir
5. ✅ Practica combinando Pan con Zoom para navegar eficientemente

### Parte F: Zoom All (Todo)

1. ✅ Escribe `Z` + Enter para activar Zoom
2. ✅ Escribe `A` + Enter para Zoom All
3. ✅ Esto muestra todo el dibujo incluyendo los límites establecidos

### Parte G: Zoom Object (Objeto)

1. ✅ Haz clic en **Zoom** > **Object**
2. ✅ Selecciona uno de los círculos que creaste
3. ✅ Presiona Enter
4. ✅ El círculo se amplía para llenar la pantalla

### Resultado esperado:

Has practicado todas las herramientas principales de navegación. Deberías sentirte cómodo moviéndote por el dibujo, acercando y alejando áreas específicas rápidamente.

### Atajos de teclado importantes:

- **Z + Enter:** Zoom (luego elige opción)
- **Rueda del mouse:** Zoom in/out
- **Clic en rueda del mouse:** Pan
- **Doble clic rueda del mouse:** Zoom Extents

---

## Ejercicio 2.11: Dibujar Elipses con Diferentes Métodos

**Objetivo:** Practicar la creación de elipses usando los métodos Center y Axis, End.

### Parte A: Crear Capa para Elipses

1. ✅ Crea una nueva capa llamada **ELLIPSES**
2. ✅ Asigna el color **Green (verde)**
3. ✅ Establece ELLIPSES como capa actual

### Parte B: Elipse por Centro

1. ✅ Haz clic en **Ellipse** desplegable > **Center**
2. ✅ Especifica el punto central de la elipse en una ubicación libre
3. ✅ El comando solicita "Specify endpoint of axis:" (Especificar punto final del eje)
4. ✅ Mueve el cursor y haz clic para definir la longitud del primer eje
5. ✅ El comando solicita "Specify distance to other axis:" (Especificar distancia al otro eje)
6. ✅ Mueve el cursor perpendicular y haz clic para definir el segundo eje
7. ✅ Crea al menos 3 elipses usando este método con diferentes proporciones

### Parte C: Elipse por Ejes

1. ✅ Haz clic en **Ellipse** (método por defecto es Axis, End)
2. ✅ Especifica el primer punto del primer eje
3. ✅ Especifica el segundo punto del primer eje
4. ✅ AutoCAD calcula automáticamente el centro entre estos dos puntos
5. ✅ Mueve el cursor perpendicular al primer eje
6. ✅ Haz clic para definir la distancia al segundo eje
7. ✅ Crea varias elipses con diferentes orientaciones

### Parte D: Elipses Rotadas

1. ✅ Usa el método Ellipse Axis, End
2. ✅ Especifica el primer eje en diagonal (no horizontal ni vertical)
3. ✅ Observa cómo la elipse se orienta según el primer eje
4. ✅ Crea elipses en ángulos de 30°, 45° y 60° aproximadamente

### Parte E: Elipses con Valores Precisos

1. ✅ Inicia el comando **ELLIPSE**
2. ✅ Especifica el primer punto
3. ✅ En lugar de hacer clic, escribe `@100,0` y presiona Enter (eje horizontal de 100 unidades)
4. ✅ Escribe `50` y presiona Enter (distancia al otro eje de 50 unidades)
5. ✅ Observa la elipse precisa creada

### Parte F: Arcos Elípticos

1. ✅ Haz clic en **Ellipse** desplegable > **Elliptical Arc**
2. ✅ Define el primer eje de la elipse (dos puntos)
3. ✅ Define la distancia al segundo eje
4. ✅ El comando ahora solicita "Specify start angle:" (Especificar ángulo inicial)
5. ✅ Escribe `0` y presiona Enter
6. ✅ El comando solicita "Specify end angle:" (Especificar ángulo final)
7. ✅ Escribe `180` y presiona Enter
8. ✅ Observa cómo se crea un arco elíptico (media elipse)
9. ✅ Crea arcos elípticos con diferentes rangos angulares (90°, 270°, etc.)

### Resultado esperado:

Has creado múltiples elipses usando diferentes métodos y orientaciones. También has practicado la creación de arcos elípticos. Deberías tener al menos 10 elipses o arcos elípticos en tu dibujo.

### Aplicaciones prácticas:

Las elipses son fundamentales para:
- Dibujo isométrico (círculos en perspectiva)
- Diseño arquitectónico (ventanas ovaladas, cúpulas)
- Ingeniería mecánica (secciones de conos, engranajes especiales)
- Diseño de paisajismo (estanques, jardines)

---

## Ejercicio 2.12: Revisión Final - Integración de Técnicas

**Objetivo:** Combinar todas las técnicas aprendidas en un ejercicio integrador completo.

### Proyecto: Diseño de un Parque Central para la Subdivisión

Vas a diseñar un parque central en el área libre de la subdivisión, integrando todas las herramientas aprendidas.

### Parte A: Preparación

1. ✅ Abre el dibujo `subdivis2.dwg` si no está abierto
2. ✅ Descongela todas las capas para tener visibilidad completa
3. ✅ Crea una nueva capa llamada **PARK** con color verde (Green)
4. ✅ Establece PARK como capa actual
5. ✅ Usa Zoom Extents para ver todo el dibujo

### Parte B: Diseño del Perímetro del Parque

1. ✅ Usa Object Snap para ubicar el centro del área libre del lote
2. ✅ Usa el comando **ELLIPSE** método Center
3. ✅ Crea una elipse grande que represente el perímetro principal del parque
4. ✅ Asegúrate de que la elipse tenga aproximadamente 200 unidades en el eje mayor

### Parte C: Añadir Caminos Curvos Internos

1. ✅ Usa el comando **ARC** con el método Start, Center, End
2. ✅ Crea al menos 3 caminos curvos que atraviesen el parque
3. ✅ Usa Object Snap (Quadrant y Endpoint) para conectar los arcos a la elipse del perímetro
4. ✅ Los caminos deben intersectarse en el centro del parque

### Parte D: Añadir Áreas Circulares (Fuentes, Jardines)

1. ✅ Cambia a la capa CIRCLES (o créala si no existe)
2. ✅ Usa el comando **CIRCLE** método Center, Radius
3. ✅ Crea un círculo grande en el centro del parque (radio aproximado: 30 unidades) - esta será una fuente
4. ✅ Crea 4 círculos más pequeños (radio: 15 unidades) distribuidos simétricamente - estos serán jardines
5. ✅ Usa Object Snap Quadrant para posicionar los círculos en los cuadrantes de la elipse

### Parte E: Añadir Áreas de Descanso (Elipses Pequeñas)

1. ✅ Regresa a la capa PARK
2. ✅ Crea 6 elipses pequeñas (eje mayor: 40, eje menor: 25) distribuidas alrededor del perímetro
3. ✅ Estas representarán áreas de descanso con bancas
4. ✅ Usa rotación variada (diferentes ángulos) para darle dinamismo al diseño

### Parte F: Conectar con Tangencias

1. ✅ Usa el comando **LINE**
2. ✅ Con Object Snap Tangent activado, conecta algunos de los círculos con líneas tangentes
3. ✅ Estas líneas representarán caminos peatonales secundarios
4. ✅ Crea al menos 5 conexiones tangentes

### Parte G: Detalles Finales con Arcos

1. ✅ Usa el comando **ARC** método Start, End, Angle
2. ✅ Crea arcos decorativos de 45° conectando las áreas de descanso
3. ✅ Añade al menos 4 arcos decorativos

### Parte H: Organización de Capas

1. ✅ Abre el Layer Properties Manager
2. ✅ Verifica que todos los elementos estén en las capas correctas
3. ✅ Congela la capa CIRCLES temporalmente para ver solo el diseño principal
4. ✅ Descongélala nuevamente
5. ✅ Congela la capa EASEMENTS para limpiar la vista

### Parte I: Navegación y Visualización

1. ✅ Usa Zoom Window para acercarte a la fuente central
2. ✅ Usa Pan para moverte a cada área de descanso
3. ✅ Usa Zoom Previous para regresar a vistas anteriores
4. ✅ Finalmente usa Zoom Extents para ver el diseño completo

### Parte J: Guardar el Trabajo

1. ✅ Usa **File > Save** (o Ctrl+S) para guardar todos los cambios
2. ✅ Adicionalmente, usa **File > Save As** y guarda una copia como `subdivis2-parque.dwg`

### Resultado esperado:

Has creado un diseño completo de parque que integra:
- Elipses para el perímetro y áreas de descanso
- Círculos para fuentes y jardines
- Arcos con diferentes métodos para caminos curvos
- Líneas con tangencias para caminos secundarios
- Uso efectivo de capas y Object Snap
- Navegación eficiente con Zoom y Pan

El diseño debe verse profesional, organizado y geométricamente preciso.

### Desafío adicional:

Si completaste todo exitosamente, intenta añadir:
- ✅ Arcos elípticos para representar pérgolas o estructuras curvas
- ✅ Círculos tangentes a tres objetos para elementos decorativos
- ✅ Más detalles usando combinaciones creativas de las herramientas aprendidas

---

## Resumen

### Habilidades Practicadas

A lo largo de estos 12 ejercicios, has desarrollado competencias fundamentales en:

#### 1. Gestión de Archivos
- Abrir y guardar dibujos con diferentes nombres
- Crear copias de seguridad y versiones incrementales
- Organización de archivos de proyecto

#### 2. Administración de Capas
- Crear capas con propiedades específicas (color, tipo de línea)
- Cargar y asignar tipos de línea
- Controlar visibilidad con Freeze/Thaw
- Establecer capas actuales
- Organizar elementos por capas

#### 3. Comandos de Dibujo - Arcos
- Arc 3 Points: Definición por tres puntos
- Arc Start, Center, End: Control por centro
- Arc Start, End, Angle: Control angular preciso
- Aplicaciones prácticas de cada método

#### 4. Comandos de Dibujo - Círculos
- Circle Center, Radius: Método básico
- Circle 2-Point: Definición por diámetro
- Circle 3-Point: Círculos por puntos específicos
- Circle Tan, Tan, Radius: Tangencias con radio
- Circle Tan, Tan, Tan: Tangencias a tres objetos

#### 5. Comandos de Dibujo - Elipses
- Ellipse Axis, End: Método por ejes
- Ellipse Center: Método por centro
- Elliptical Arc: Arcos elípticos
- Elipses rotadas y con valores precisos

#### 6. Object Snap (Referencias a Objetos)
- Configuración de modos de referencia
- Endpoint, Midpoint, Center
- Quadrant, Intersection
- Perpendicular, Tangent, Extension
- Object Snap Override
- Aplicación práctica en dibujo preciso

#### 7. Navegación y Visualización
- Zoom Window: Ampliar áreas específicas
- Zoom Previous: Regresar a vistas anteriores
- Zoom Extents: Ver todo el dibujo
- Zoom Realtime: Zoom interactivo
- Zoom All: Incluir límites
- Zoom Object: Enfocarse en objetos
- Pan: Desplazamiento de vista
- Uso de la rueda del mouse

#### 8. Flujo de Trabajo Profesional
- Planificación de diseños complejos
- Combinación de múltiples herramientas
- Organización metódica por capas
- Verificación y revisión del trabajo
- Guardado incremental

### Conceptos Clave Aprendidos

**Precisión:** El uso de Object Snap garantiza precisión absoluta sin cálculos manuales.

**Eficiencia:** La organización por capas y el control de visibilidad optimiza el trabajo en dibujos complejos.

**Versatilidad:** Cada herramienta de dibujo tiene múltiples métodos adaptados a diferentes situaciones.

**Navegación:** El dominio de Zoom y Pan es fundamental para trabajar eficientemente en cualquier escala.

**Geometría:** Comprensión profunda de arcos, círculos y elipses como elementos fundamentales del diseño técnico.

### Próximos Pasos

Has completado exitosamente el Módulo 2. Estás preparado para:

1. Avanzar al **Módulo 3: Edición y Modificación de Objetos**
2. Practicar estos ejercicios con variaciones propias
3. Aplicar estas técnicas en proyectos personales
4. Explorar combinaciones más complejas de las herramientas aprendidas

### Tiempo de Práctica Recomendado

Para dominar completamente estas técnicas, se recomienda:
- **Mínimo:** 5 horas de práctica adicional
- **Óptimo:** 10-15 horas de práctica variada
- **Excelencia:** Aplicación en 3-5 proyectos reales

### Evaluación Personal

Marca con ✅ las habilidades que dominas completamente:

- ✅ Puedo crear arcos con cualquier método sin consultar instrucciones
- ✅ Domino la creación de círculos tangentes
- ✅ Puedo crear elipses y arcos elípticos con precisión
- ✅ Uso Object Snap de forma natural y automática
- ✅ Navego eficientemente por dibujos grandes
- ✅ Organizo mi trabajo en capas de forma lógica
- ✅ Combino múltiples herramientas en diseños complejos

Si marcaste todos los puntos anteriores, estás listo para el siguiente módulo.

Si algunos puntos aún presentan dificultad, repasa los ejercicios correspondientes antes de avanzar.

---

## Recursos Adicionales

### Archivos de Práctica
- `subdivis.dwg` - Archivo original del tutorial
- `subdivis2.dwg` - Tu archivo de trabajo principal
- `subdivis2-parque.dwg` - Proyecto final del Ejercicio 2.12

### Comandos Rápidos Aprendidos
- `ARC` - Comando de arcos
- `CIRCLE` - Comando de círculos
- `ELLIPSE` - Comando de elipses
- `LAYER` o `LA` - Gestor de capas
- `Z` - Zoom
- `PAN` o `P` - Encuadre
- `F3` - Toggle Object Snap

### Videos de Referencia
Busca en la plataforma de la Universidad Autodesk:
- "Técnicas avanzadas con arcos"
- "Círculos tangentes en la práctica"
- "Object Snap: Guía completa"
- "Navegación eficiente en AutoCAD"

---

**Volver a:** [Lección 2.1 - Introducción a Arcos](./leccion-2.1-introduccion-arcos.md) | [Lección 2.2 - Círculos y Elipses](./leccion-2.2-circulos-elipses.md) | [Lección 2.3 - Object Snap](./leccion-2.3-object-snap.md) | [Lección 2.4 - Zoom y Pan](./leccion-2.4-zoom-pan.md) | [README del Módulo](./README.md)

---

**Universidad Autodesk - AutoCAD 2026**
Módulo 2: Construcción Básica - Ejercicios Prácticos
Última actualización: 2025-11-22