# Lección 3: Navegación y Visualización (Zoom, Pan)

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Navegar eficientemente en dibujos desde microescala hasta macroescala
2. Dominar todas las opciones del comando ZOOM
3. Utilizar PAN para reposicionar la vista sin cambiar zoom
4. Aprovechar el scroll del mouse para navegación rápida
5. Crear y gestionar vistas guardadas (Named Views)
6. Usar el ViewCube para orientación visual
7. Optimizar la visualización con regeneración y redespliegue

## Introducción

La navegación efectiva es fundamental en AutoCAD porque, a diferencia del papel, el área de dibujo es virtualmente infinita y trabajas con escalas extremadamente variables. Puedes estar diseñando un circuito integrado con dimensiones de micras y luego un plano urbanístico de kilómetros cuadrados, todo en el mismo software.

AutoCAD 2026 incluye mejoras significativas en performance de navegación:
- **Zoom 40% más rápido** en archivos grandes (>100MB)
- **Pan suavizado** con interpolación mejorada
- **Regeneración optimizada** mediante GPU acceleration
- **Transiciones suaves** entre vistas para reducir desorientación

La navegación profesional permite:
- Trabajar en detalles microscópicos sin perder contexto general
- Moverse entre áreas distantes del dibujo instantáneamente
- Verificar precisión de conexiones zoom extremo
- Presentar diseños a clientes con navegación fluida

Estudios de Autodesk demuestran que usuarios que dominan navegación con teclado/mouse son 60% más productivos que quienes usan solo menús.

## Contenido

### 1. El Comando ZOOM

ZOOM controla la magnificación de la vista sin cambiar el tamaño real de los objetos. Es puramente visual.

**Activación del comando**:
- Teclado: `ZOOM` o `Z`
- Ribbon: View tab > Navigate panel > Zoom dropdown
- Mouse: Scroll wheel (realtime zoom)
- Menú: View > Zoom

#### ZOOM Window (Ventana)

La opción más utilizada. Define un área rectangular para llenar la pantalla.

**Procedimiento**:
```
Command: ZOOM
Specify corner of window, enter a scale factor (nX or nXP), or
[All/Center/Dynamic/Extents/Previous/Scale/Window/Object] <real time>: W
Specify first corner: [clic en esquina superior izquierda del área]
Specify opposite corner: [clic en esquina inferior derecha]
```

**Atajo rápido**: `Z` + `Enter` + `W` + `Enter` + [dos clics]

**Uso profesional**:
- Ampliar área específica para trabajo detallado
- Verificar intersecciones precisas
- Capturar región para plotting

![ZOOM Window ejemplo](../imagenes/leccion-3-zoom-window.png)

**Tip**: No necesitas ser preciso con la ventana. AutoCAD ajusta proporcionalmente al viewport.

#### ZOOM Extents (Extensión)

Amplía la vista para mostrar todos los objetos dibujados en pantalla, ignorando límites del dibujo.

**Procedimiento**:
```
Command: ZOOM
[opciones]: E
```

**Atajo más rápido**: `Z` + `Enter` + `E` + `Enter`

**Cuándo usar**:
- Después de abrir un dibujo para ver todo el contenido
- Cuando te "pierdes" en el dibujo
- Antes de imprimir para verificar contenido total
- Después de importar bloques o referencias externas

**Diferencia con ZOOM All**: Extents ignora los límites (LIMITS) y solo considera objetos reales.

#### ZOOM All (Todo)

Muestra el área de Drawing Limits o todos los objetos, lo que sea mayor.

**Procedimiento**:
```
Command: ZOOM
[opciones]: A
```

**Comportamiento**:
- Si hay objetos fuera de límites: Muestra como Extents
- Si todos objetos dentro de límites: Muestra área de límites completa
- Si no hay límites definidos: Funciona como Extents

**Uso típico**:
- Proyectos con límites de hoja definidos (A4, A3, etc.)
- Verificar que todo el dibujo está dentro del área planificada

#### ZOOM Previous (Anterior)

Regresa a la vista inmediatamente anterior. AutoCAD guarda un historial de 10 vistas.

**Procedimiento**:
```
Command: ZOOM
[opciones]: P
```

**Atajo**: `Z` + `P` + `Enter`

**Uso esencial**:
- Regresar después de zoom detalle
- Navegar historial de vistas (hasta 10 niveles)
- Deshacer navegación no deseada

**Ejemplo de flujo**:
```
1. ZOOM Extents (ver todo)
2. ZOOM Window en área específica (detalle)
3. [Trabajas en detalle]
4. ZOOM Previous (regresar a Extents)
```

**Importante**: ZOOM Previous no afecta objetos, solo navegación. No confundir con UNDO (U).

#### ZOOM Realtime (Tiempo Real)

Zoom interactivo controlado con el mouse.

**Procedimiento**:
```
Command: ZOOM
[opciones]: [Enter sin opción]
[Cursor cambia a lupa con +/-]
[Clic y arrastra]:
  - Arriba: Acerca (zoom in)
  - Abajo: Aleja (zoom out)
[Clic derecho]: Menú contextual con otras opciones
[Enter o Esc]: Termina zoom realtime
```

**Atajo más usado**: Girar scroll wheel del mouse
- Scroll hacia arriba: Zoom in
- Scroll hacia abajo: Zoom out

**Novedad 2026**: Zoom realtime ahora centra en posición del cursor (zoom to cursor), más intuitivo.

#### ZOOM Center (Centro)

Centra la vista en un punto específico con altura definida.

**Procedimiento**:
```
Command: ZOOM
[opciones]: C
Specify center point: [clic en punto o coordenadas]
Enter magnification or height <current>: 100 [altura en unidades de dibujo]
```

**Uso**:
- Centrar vista en punto de interés específico
- Establecer altura de vista precisa para plotting

**Ejemplo**:
```
ZOOM > C > 500,300 (centra en ese punto) > 200 (altura de vista 200 unidades)
```

#### ZOOM Scale (Escala)

Aplica un factor de escala a la vista actual.

**Procedimiento**:
```
Command: ZOOM
[opciones]: S
Enter a scale factor (nX or nXP): 2X
```

**Factores de escala**:
- `2X`: Duplica magnificación (zoom in 2x)
- `0.5X`: Reduce a la mitad (zoom out 2x)
- `2`: Muestra dibujo a 2 unidades de altura (absoluto, no relativo)
- `2XP`: Escala relativa a Paper space (layouts)

**Diferencia crítica**:
- Con `X`: Relativo a vista actual (2X = duplica actual)
- Sin `X`: Absoluto (2 = 2 unidades de alto total)

**Uso profesional**:
- Matching zoom entre viewports
- Escala precisa para verificaciones
- Zoom uniforme en múltiples dibujos

#### ZOOM Object (Objeto)

Amplía para mostrar objetos seleccionados.

**Procedimiento**:
```
Command: ZOOM
[opciones]: O
Select objects: [selecciona objetos]
Select objects: [Enter]
```

**Uso**:
- Enfocarse en conjunto de objetos específicos
- Aislar visualmente elementos para revisión
- Presentaciones de áreas específicas

**Novedad 2026**: Comando disponible directamente.

#### ZOOM Dynamic (Dinámico)

Vista interactiva con rectángulo móvil mostrando área completa y vista actual.

**Procedimiento**:
```
Command: ZOOM
[opciones]: D
[Aparece vista completa con rectángulo de vista actual]
[Mueve mouse para posicionar]
[Clic para cambiar a modo resize]
[Clic nuevamente para aceptar]
```

**Uso moderno**: Menos usado, reemplazado por navegación con mouse wheel y Pan. Útil en archivos muy complejos para orientarse.

### 2. El Comando PAN

PAN mueve la vista sin cambiar el nivel de zoom. Equivalente a mover una hoja de papel debajo de una lupa.

**Activación**:
- Comando: `PAN` o `P`
- Mouse: Mantén presionado botón scroll wheel + arrastra
- Ribbon: View tab > Navigate panel > Pan
- Realtime: `PAN` + `Enter`

**Procedimiento PAN Realtime**:
```
Command: PAN
[Cursor cambia a mano]
[Clic y arrastra en cualquier dirección]
[Enter o Esc para terminar]
```

**Método profesional (más rápido)**:
```
[Mantén presionado botón central/scroll del mouse]
[Arrastra en cualquier dirección]
[Suelta para terminar]
```

**Combinación ZOOM + PAN con mouse**:
```
1. Scroll wheel arriba/abajo: ZOOM
2. Presiona y arrastra scroll wheel: PAN
3. Puedes combinar fluidamente sin comandos
```

**Uso típico**:
- Moverte a área adyacente sin cambiar detalle
- Posicionar dibujo en pantalla antes de plotear
- Navegar en archivos muy grandes

**Límites de PAN**: No hay límites. Puedes panear infinitamente en cualquier dirección.

### 3. Navegación con Mouse Wheel (Método Profesional)

La navegación moderna de AutoCAD se centra en el mouse wheel:

**Técnicas esenciales**:

1. **Zoom to Cursor**:
   - Coloca cursor sobre área de interés
   - Scroll arriba: Acerca centrando en cursor
   - Scroll abajo: Aleja centrando en cursor

2. **Pan fluido**:
   - Presiona botón scroll
   - Arrastra suavemente
   - Suelta cuando llegues al área deseada

3. **Zoom Extents rápido**:
   - Doble-clic en botón scroll (en algunos mouses configurados)
   - O usa atajo: `Z` + `E` + `Enter`

4. **Navegación combinada**:
   ```
   [Zoom in con scroll sobre área]
   [Pan con scroll presionado]
   [Zoom in adicional]
   [Pan a detalle específico]
   [Todo sin soltar el mouse]
   ```

**Configuración de Mouse Wheel**:
```
Command: OPTIONS (o Ctrl+)
Tab: User Preferences
Button: Right-click Customization
Time-sensitive right-click: Ajustar duración
Default Mode: Configura comportamiento de clic derecho
```

**Novedad 2026**: Soporte mejorado para mouses gaming con botones laterales programables.

### 4. Vistas Guardadas (Named Views)

Las Named Views guardan posiciones y configuraciones de vista para acceso rápido.

**Comando VIEW**:
```
Command: VIEW (o V o DDVIEW)
```

Abre el "View Manager":

![View Manager dialog](../imagenes/leccion-3-view-manager.png)

#### Crear Vista Guardada

**Procedimiento**:
```
1. Navega a la vista que quieres guardar (ZOOM, PAN)
2. Command: VIEW
3. Clic en "New" button
4. New View dialog:
   - View name: "Detalle_Conexion_A"
   - Category: "Detalles" (opcional, para organizar)
   - View type: Current display
   - Boundary: [Define si quieres vista exacta o nueva ventana]
   - Settings: Guarda UCS, Layer states, Visual style
5. OK
```

**Opciones de View Boundary**:
- **Current display**: Guarda vista actual exactamente
- **Define window**: Dibuja ventana para nueva vista específica

**Settings a guardar con vista**:
- ✓ Save layer snapshot: Estado de capas (on/off, frozen/thawed)
- ✓ UCS: Sistema de coordenadas
- ✓ Live section: Secciones en vivo (3D)
- ✓ Visual style: Estilo visual (2D Wireframe, Hidden, etc.)

#### Restaurar Vista Guardada

**Método 1: View Manager**:
```
Command: VIEW
[Selecciona vista de la lista]
[Clic en "Set Current"]
[Apply]
[OK]
```

**Método 2: Comando directo**:
```
Command: -VIEW (note el guión)
Enter an option [?/Categorize/lAyer state/Restore/Save/Ucs/Delete]: R
Enter view name to restore: Detalle_Conexion_A
```

**Método 3: Viewport Controls** (esquina superior izquierda del viewport):
```
[Clic en dropdown de vistas]
[Selecciona vista guardada]
```

![Viewport Controls](../imagenes/leccion-3-viewport-controls.png)

#### Organización con Categories

Para proyectos grandes con muchas vistas:

```
Categories para vistas:
- Planta_General
- Detalles_Planta
- Elevaciones
- Secciones
- Perspectivas
- Revisiones
```

#### Exportar/Importar Vistas

Las vistas se guardan con el archivo DWG, pero puedes exportarlas:

**Export View**:
```
View Manager > [Selecciona vista] > Export (icono de save)
Archivo: MisVistas.vew
```

**Import View**:
```
View Manager > Import (icono de folder)
Selecciona archivo .vew
```

**Uso profesional**:
- Compartir vistas estándar entre equipo
- Transferir vistas entre proyectos similares
- Backup de configuraciones de vistas complejas

### 5. ViewCube y Navigation Bar

#### ViewCube

El ViewCube (cubo en esquina superior derecha) es principalmente para 3D, pero tiene funciones 2D:

**En 2D**:
- **Top**: Vista superior 2D (la vista normal de trabajo)
- **Compass ring**: Muestra orientación Norte (configurable)
- **Home icon**: Regresa a vista home configurada

**Configurar Home View**:
```
1. Navega a tu vista principal deseada
2. Clic derecho en ViewCube
3. "Set Current View as Home"
4. Ahora clic en Home icon regresa a esta vista
```

**Mostrar/Ocultar ViewCube**:
```
Clic derecho en ViewCube > ViewCube Settings
✓ Display the ViewCube
Position: Top-Right
Size: Automatic
```

#### Navigation Bar

Barra vertical en el lado derecho con herramientas de navegación:

![Navigation Bar](../imagenes/leccion-3-navigation-bar.png)

**Herramientas incluidas**:
- **SteeringWheels**: Menú radial con opciones de navegación
- **Pan**: Activar Pan realtime
- **Zoom Extents**: Un clic para extents
- **Orbit**: Navegación 3D (no útil en 2D)
- **ShowMotion**: Animaciones entre vistas guardadas

**Mostrar/Ocultar**:
```
View tab > Viewport Tools panel > Navigation Bar
O: Clic derecho en Navigation Bar > Options > Display
```

**Novedad 2026**: Navigation Bar ahora es contextual, muestra herramientas relevantes al tipo de objeto seleccionado.

### 6. SteeringWheels (Ruedas de Dirección)

Menú radial interactivo para navegación.

**Activar**:
```
Command: NAVSWHEEL
[Aparece rueda radial siguiendo el cursor]
```

**Opciones disponibles** (Full Navigation Wheel):
- **Zoom**: Zoom dinámico
- **Pan**: Pan en tiempo real
- **Orbit**: Rotación 3D (no útil en 2D)
- **Rewind**: Navegación por historial de vistas
- **Center**: Centrar en punto
- **Walk**: Recorrido (3D)
- **Look**: Mirar alrededor (3D)
- **Up/Down**: Movimiento vertical (3D)

**Wheels disponibles**:
- Full Navigation Wheel
- Basic View Object Wheel
- 2D Steering Wheel (optimizado para 2D)

**Cambiar wheel**:
```
[Wheel activo] > Clic derecho > [Selecciona tipo de wheel]
```

**2D Steering Wheel** (recomendado para 2D):
- Zoom
- Pan
- Rewind

**Rewind** (característica única):
Navega visualmente por historial de vistas con thumbnails:
```
[Activa SteeringWheel]
[Selecciona Rewind]
[Aparece filmstrip con historial de vistas]
[Arrastra slider o clic en thumbnail para saltar a esa vista]
```

![Rewind feature](../imagenes/leccion-3-rewind.png)

**Configuración**:
```
Clic derecho en SteeringWheel > SteeringWheel Settings
- Wheel size: Small/Medium/Large
- Opacity: Transparencia del wheel
- Enable tooltips
- Message display duration
```

**Uso moderno**: Menos popular que mouse wheel navigation, pero útil en presentaciones o con dispositivos touch.

### 7. Regeneración y Redespliegue

AutoCAD optimiza performance usando representaciones simplificadas de objetos complejos.

#### REDRAW vs REGEN

**REDRAW** (rápido):
```
Command: REDRAW o R
```
- Refresca la pantalla limpiando marcas temporales
- No recalcula geometría
- Instantáneo incluso en archivos grandes
- Útil para limpiar "blips" o cursores residuales

**REGEN** (lento):
```
Command: REGEN o RE
```
- Regenera completamente la base de datos de visualización
- Recalcula curvas, sombreados, viewports
- Puede tomar segundos/minutos en archivos complejos
- Necesario después de cambios en linetypes, text styles, hatches

**REGENALL** (muy lento):
```
Command: REGENALL
```
- Regenera todos los viewports simultáneamente
- Usa en layouts con múltiples viewports
- Solo necesario al modificar templates o standards

#### REGENAUTO

Controla si AutoCAD regenera automáticamente cuando es necesario.

**Toggle**:
```
Command: REGENAUTO
Enter mode [ON/OFF] <ON>: ON
```

**Recomendación**: Mantener en ON. En AutoCAD moderno con GPU acceleration, REGEN es mucho más rápido que en versiones antiguas.

#### VIEWRES (View Resolution)

Controla suavidad de curvas y arcos en zoom.

**Configuración**:
```
Command: VIEWRES
Do you want fast zooms? [Yes/No] <Y>: Y
Enter circle zoom percent (1-20000) <1000>: 10000
```

**Valores**:
- Bajo (100-1000): Círculos con segmentos visibles, zoom más rápido
- Medio (1000-5000): Balance
- Alto (5000-20000): Círculos perfectamente suaves, zoom más lento

**Configuración recomendada**: 10000 (en sistemas modernos no hay penalización de performance)

**Novedad 2026**: VIEWRES menos relevante gracias a smoothing por GPU. Curvas siempre se ven suaves.

### 8. Aerial View (Vista Aérea) - Removido en 2026

**Nota histórica**: Versiones antiguas de AutoCAD tenían "Aerial View", una ventana flotante mostrando vista completa del dibujo con rectángulo de vista actual.

**En AutoCAD 2026**: Reemplazado por:
- SteeringWheels Rewind
- Navigation Bar
- Viewport Controls con vistas guardadas

### 9. Técnicas de Navegación Profesional

**Flujo de trabajo experto**:

```
Inicio de sesión:
1. ZOOM Extents (orientarse)
2. Crear vistas clave guardadas
3. Navegar con mouse wheel + vistas guardadas

Durante trabajo detallado:
1. ZOOM Window al área de trabajo
2. Trabajar con zoom constante
3. Pan menor con scroll wheel presionado
4. ZOOM Previous para verificar contexto
5. Regresar a detalle

Antes de entregar:
1. ZOOM Extents (verificar todo incluido)
2. Limpiar con REDRAW
3. REGEN si necesario
```

**Atajos de navegación esenciales**:
- `Z` `E` `Enter`: ZOOM Extents
- `Z` `P` `Enter`: ZOOM Previous
- `Z` `W` `Enter`: ZOOM Window
- `P` `Enter`: PAN realtime
- Scroll wheel: ZOOM realtime
- Presiona scroll: PAN realtime

**Configuración óptima para máxima productividad**:
```
OPTIONS > Display:
✓ Display scroll bars in drawing window: OFF (usa mouse wheel)
✓ Zoom cursor (2026): ON

OPTIONS > User Preferences:
Right-click customization: "Repeat Last Command" (Enter-equivalent)
```

## Ejercicio Práctico

**Ejercicio 3.1: Práctica de ZOOM Options**

Tiempo: 20 minutos

1. Crea un dibujo con varios objetos dispersos (usa ejercicios anteriores)
2. Practica cada opción de ZOOM:
   - ZOOM Extents
   - ZOOM Window en área específica
   - ZOOM Previous (varias veces)
   - ZOOM Center en un punto
   - ZOOM Scale 2X y 0.5X
   - ZOOM Object seleccionando objetos
3. Familiarízate con las diferencias

**Ejercicio 3.2: Navegación con Mouse**

Tiempo: 15 minutos

1. Abre archivo con geometría compleja
2. Práctica flujo completo solo con mouse:
   - Scroll para zoom in/out
   - Presiona scroll + arrastra para pan
   - Combina ambos fluidamente
   - Intenta no usar teclado en 5 minutos
3. Mide tu velocidad de navegación

**Ejercicio 3.3: Vistas Guardadas**

Tiempo: 25 minutos

1. Crea un dibujo de planta arquitectónica simple
2. Guarda 5 vistas nombradas:
   - "Vista_General" (ZOOM Extents)
   - "Detalle_Cocina" (ZOOM Window en cocina)
   - "Detalle_Baño" (ZOOM Window en baño)
   - "Detalle_Escalera" (ZOOM Window en escalera)
   - "Entrada_Principal" (ZOOM en entrada)
3. Practica saltar entre vistas rápidamente
4. Exporta las vistas a archivo .vew

**Ejercicio 3.4: Navegación en Dibujo Grande**

Tiempo: 30 minutos

1. Abre archivo de ejemplo grande (>5MB) o crea uno complejo
2. Simula flujo de trabajo real:
   - ZOOM Extents para orientación
   - ZOOM Window en área de trabajo
   - Realiza modificaciones (agregar/editar objetos)
   - Pan a áreas adyacentes
   - ZOOM Previous para verificar
   - Crear vista guardada del trabajo actual
3. Practica hasta navegar sin desorientación

## Resumen

En esta lección dominaste:

✓ **ZOOM command** con 8 opciones principales
✓ **PAN command** para reposicionamiento sin zoom
✓ **Mouse wheel navigation** (técnica profesional)
✓ **Named Views** para acceso rápido a vistas clave
✓ **ViewCube y Navigation Bar** para orientación
✓ **SteeringWheels** con función Rewind
✓ **REDRAW/REGEN** para refrescar pantalla
✓ **Flujos de trabajo** de navegación profesional

**Comandos clave**:
- `ZOOM` / `Z`: Todas las opciones de zoom
- `PAN` / `P`: Mover vista
- `VIEW` / `V`: Gestión de vistas guardadas
- `REDRAW` / `R`: Refrescar pantalla
- `REGEN` / `RE`: Regenerar visualización

**Atajos esenciales**:
- Mouse scroll: Zoom in/out
- Presiona scroll + arrastra: Pan
- Doble-clic scroll: Zoom Extents (algunos mouses)
- `Z` `E`: ZOOM Extents
- `Z` `P`: ZOOM Previous
- `Z` `W`: ZOOM Window

**Regla profesional**:
> "Si navegas más de 5 segundos para llegar a una vista, créala como Named View"

**Próxima lección**: Métodos de Selección de Objetos - aprenderás las 10+ formas de seleccionar objetos en AutoCAD, fundamental para edición eficiente.

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre ZOOM Extents y ZOOM All?
2. ¿Qué hace ZOOM Previous?
3. ¿Cómo usas el mouse wheel para Pan?
4. ¿Cuántas vistas guarda ZOOM Previous?
5. ¿Qué información puedes guardar con una Named View?
6. ¿Cuál es la diferencia entre REDRAW y REGEN?
7. ¿Qué opción de ZOOM usas para ver todos los objetos del dibujo?
8. ¿Cómo centras la vista en un punto específico?

---

**Práctica diaria recomendada**: 10 minutos de navegación pura en archivos complejos hasta que sea segunda naturaleza. La navegación fluida es la base de productividad en AutoCAD.
