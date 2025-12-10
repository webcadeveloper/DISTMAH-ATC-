# Lección 4: Métodos de Selección de Objetos

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Seleccionar objetos individuales con precisión
2. Usar Window Selection y Crossing Selection correctamente
3. Aplicar métodos avanzados: Fence, WPolygon, CPolygon
4. Utilizar filtros de selección: Previous, Last, All
5. Configurar modos de selección en Options
6. Dominar Selection Cycling para objetos superpuestos
7. Comprender selección Noun-Verb vs Verb-Noun
8. Usar Quick Select para selecciones basadas en propiedades

## Introducción

La selección de objetos es una operación fundamental que realizarás miles de veces en cada sesión de AutoCAD. La diferencia entre un usuario novato y uno experto radica en la velocidad y precisión de la selección.

AutoCAD 2026 introduce mejoras en selección:

- **Smart Selection**: Predicción inteligente de intención de selección
- **Enhanced Selection Preview**: Highlight mejorado con mejor contraste
- **Multi-object Grips**: Grips agregados para múltiples objetos simultáneamente
- **Selection Cycling mejorado**: Interfaz más clara para objetos superpuestos

Estudios de Autodesk muestran que el 35% del tiempo de trabajo en AutoCAD se invierte en seleccionar objetos. Dominar los métodos de selección puede reducir este tiempo hasta en 70%.

## Contenido

### 1. Modos de Selección: Noun-Verb vs Verb-Noun

AutoCAD soporta dos paradigmas de selección:

#### Verb-Noun (Comando primero)

El método tradicional de AutoCAD:

```
1. Ejecutas el comando: ERASE
2. AutoCAD solicita: "Select objects:"
3. Seleccionas objetos
4. Enter para confirmar
5. Comando se ejecuta
```

**Ejemplo**:
```
Command: ERASE
Select objects: [selecciona objetos]
Select objects: [Enter]
```

#### Noun-Verb (Selección primero)

El método Windows estándar:

```
1. Seleccionas objetos primero (clic sobre ellos)
2. Ejecutas comando: ERASE
3. Comando se ejecuta inmediatamente sin solicitar selección
```

**Ejemplo**:
```
[Clic en objeto - se destaca con grips]
Command: ERASE [Enter]
[Objeto eliminado inmediatamente]
```

**Configuración** (ambos métodos pueden estar activos simultáneamente):
```
Command: OPTIONS > Tab Selection
✓ Noun/verb selection (permite selección primero)
✓ Use Shift to add to selection
✓ Press and drag (para window/crossing arrastrando)
✓ Implied windowing (permite window sin escribir W)
```

**Recomendación profesional**: Activar **ambos** métodos para máxima flexibilidad.

### 2. Selección Individual (Pick)

El método más básico: clic directo sobre objetos.

**Procedimiento**:
```
Command: ERASE (o cualquier comando que requiera selección)
Select objects: [clic sobre objeto]
Select objects: [clic sobre otro objeto]
Select objects: [Enter para terminar]
```

**Pickbox**: El cuadradito que aparece en el cursor durante selección.

![Pickbox en cursor](../imagenes/leccion-4-pickbox.png)

**Configurar tamaño de Pickbox**:
```
OPTIONS > Tab Selection > Pickbox Size
[Arrastra slider: Pequeño - Mediano - Grande]
```

**Regla práctica**: Pickbox mediano (3-5 pixeles). Si muy grande, selecciona objetos no deseados. Si muy pequeño, requiere precisión excesiva.

**Comportamiento de selección individual**:
- Clic en objeto: Lo agrega a selección
- Clic en área vacía: Inicia Window/Crossing (con implied windowing activo)
- Clic en objeto ya seleccionado (con Shift): Lo remueve de selección

### 3. Window Selection (Ventana - Azul)

Selecciona solo objetos **completamente dentro** de la ventana rectangular.

**Dirección**: Izquierda a Derecha (Left to Right)

**Identificación visual**: Ventana y borde AZUL continuo

![Window Selection azul](../imagenes/leccion-4-window-selection.png)

**Procedimiento explícito**:
```
Command: ERASE
Select objects: W [Enter para Window mode explícito]
Specify first corner: [clic en esquina superior izquierda]
Specify opposite corner: [clic en esquina inferior derecha]
Select objects: [Enter]
```

**Procedimiento implícito** (con implied windowing activo):
```
Command: ERASE
Select objects: [clic en área vacía - esquina superior izquierda]
[Arrastra hacia la derecha]
[Clic en esquina inferior derecha]
[Ventana azul aparece]
Select objects: [Enter]
```

**Regla mnemotécnica**:
- **Left** to right = **L**ines = **Blue** (continuo)
- Solo objetos **completamente** dentro

**Cuándo usar Window**:
- Seleccionar grupo de objetos aislados
- Asegurar que NO se seleccionen objetos circundantes
- Precisión en selección de áreas específicas
- Trabajar en dibujos densos sin afectar objetos adyacentes

**Ejemplo práctico**: En plano arquitectónico lleno de objetos, seleccionar solo muebles de una habitación sin tocar muros circundantes.

### 4. Crossing Selection (Cruza - Verde)

Selecciona objetos **que tocan O están dentro** de la ventana.

**Dirección**: Derecha a Izquierda (Right to Left)

**Identificación visual**: Ventana semitransparente y borde VERDE discontinuo (dashed)

![Crossing Selection verde](../imagenes/leccion-4-crossing-selection.png)

**Procedimiento explícito**:
```
Command: ERASE
Select objects: C [Enter para Crossing mode explícito]
Specify first corner: [clic en esquina superior derecha]
Specify opposite corner: [clic en esquina inferior izquierda]
Select objects: [Enter]
```

**Procedimiento implícito**:
```
Command: ERASE
Select objects: [clic en área vacía - esquina superior derecha]
[Arrastra hacia la izquierda]
[Clic en esquina inferior izquierda]
[Ventana verde dashed aparece]
Select objects: [Enter]
```

**Regla mnemotécnica**:
- **Right** to left = **D**ashed = **Green**
- Objetos **tocados** o dentro

**Cuándo usar Crossing**:
- Selección rápida sin precisión extrema
- Borrar o mover grupos de objetos conectados
- Cuando objetos se extienden fuera del área
- Velocidad sobre precisión

**Ejemplo práctico**: Borrar conjunto de líneas que forman un diagrama, algunas extendiéndose fuera del área central.

**Diferencia crítica Window vs Crossing**:

```
Imagina 4 líneas formando un cuadrado:

┌─────┐
│     │
│     │
└─────┘

Window Selection (azul):
  ┌─────┐       ← Ventana exactamente del tamaño interior
  │  ┌─────┐
  │  │  │  │   ← Selecciona: NADA (líneas no completamente dentro)
  │  └─────┘
  └─────┘

  ┌──────────┐
  │ ┌─────┐  │ ← Ventana más grande que el cuadrado
  │ │     │  │
  │ └─────┘  │ ← Selecciona: TODAS las 4 líneas (completamente dentro)
  └──────────┘

Crossing Selection (verde):
  ┌─────┐       ← Ventana tocando solo línea superior
  │  ┌──┼──┐
     │  │  │   ← Selecciona: Línea superior (la tocada)
     └─────┘

  ┌──────────┐
  │ ┌─────┐  │ ← Ventana cubriendo todo
  │ │     │  │
  │ └─────┘  │ ← Selecciona: TODAS las 4 líneas (tocadas y dentro)
  └──────────┘
```

### 5. Fence Selection (Cerca)

Selecciona todos los objetos que cruzan una línea poligonal.

**Visualización**: Línea temporal que dibuja el usuario

**Procedimiento**:
```
Command: ERASE
Select objects: F [Enter]
Specify first fence point: [clic en punto 1]
Specify next fence point or [Undo]: [clic en punto 2]
Specify next fence point or [Undo]: [clic en punto 3]
Specify next fence point or [Undo]: [Enter para terminar fence]
Select objects: [Enter para ejecutar]
```

![Fence Selection ejemplo](../imagenes/leccion-4-fence-selection.png)

**Características**:
- Puede ser línea recta o poligonal
- Solo cruza, no necesita encerrar
- No se cierra automáticamente (a diferencia de polígonos)
- Útil para selecciones lineales

**Cuándo usar Fence**:
- Seleccionar objetos a lo largo de un eje
- Borrar/modificar líneas paralelas
- Seleccionar tuberías, cables, muros largos
- Cuando Window/Crossing capturan demasiado

**Ejemplo práctico**: En diagrama P&ID, seleccionar todas las tuberías que cruzan un área específica sin seleccionar equipos adyacentes.

### 6. WPolygon (Window Polygon) y CPolygon (Crossing Polygon)

Versiones poligonales de Window y Crossing.

#### WPolygon (Polígono Ventana)

**Procedimiento**:
```
Command: ERASE
Select objects: WP [Enter]
Specify first polygon point: [clic punto 1]
Specify next polygon point or [Undo]: [clic punto 2]
Specify next polygon point or [Undo]: [clic punto 3]
Specify next polygon point or [Undo]: [clic punto 4]
Specify next polygon point or [Undo]: [Enter - cierra automáticamente]
Select objects: [Enter]
```

**Características**:
- Polígono de forma libre (no rectangular)
- Solo selecciona objetos **completamente dentro**
- Cierra automáticamente al presionar Enter
- Visualización: Similar a Window (azul)

![WPolygon ejemplo](../imagenes/leccion-4-wpolygon.png)

#### CPolygon (Polígono Cruza)

**Procedimiento**: Idéntico a WPolygon pero escribe `CP` en lugar de `WP`

**Características**:
- Polígono de forma libre
- Selecciona objetos que **tocan o están dentro**
- Visualización: Similar a Crossing (verde discontinuo)

**Cuándo usar Polygons**:
- Áreas irregulares que no son rectangulares
- Selección alrededor de obstáculos
- Formas circulares o angulares
- Precisión en geometría compleja

**Ejemplo**: Seleccionar todos los muebles de una habitación en forma de L sin tocar muros.

### 7. Métodos de Selección Especiales

#### ALL (Todos)

Selecciona absolutamente todos los objetos visibles del dibujo.

**Procedimiento**:
```
Command: ERASE
Select objects: ALL [Enter]
Select objects: [Enter]
```

**Excepciones** (ALL no selecciona):
- Objetos en capas congeladas (frozen)
- Objetos en capas apagadas (off) - depende de configuración
- Objetos fuera de screen si PICKFIRST está configurado apropiadamente

**Uso práctico**:
- Borrar todo para empezar de cero
- Cambiar propiedades globales
- Mover todo el dibujo
- Copiar todo a nuevo archivo

**Tip profesional**: Combina con Shift para deseleccionar excepciones:
```
Select objects: ALL [selecciona todo]
Select objects: [Shift + clic en objetos a excluir]
Select objects: [Enter]
```

#### Last (Último)

Selecciona el último objeto creado (aún si no está visible en pantalla).

**Procedimiento**:
```
Command: LINE [dibuja línea]
Command: CIRCLE [dibuja círculo]
Command: ERASE
Select objects: L [Enter]
[Selecciona el CÍRCULO - último objeto creado]
```

**Características**:
- Solo selecciona un objeto (el más reciente)
- Útil para corregir errores inmediatos
- No afectado por zoom o pan

**Uso práctico**:
```
[Dibuja objeto]
[Te das cuenta que está en capa incorrecta]
Command: PROPERTIES
Select objects: L [Enter]
[Cambias capa en Properties palette]
```

#### Previous (Previo)

Selecciona el conjunto de selección inmediatamente anterior.

**Procedimiento**:
```
Command: MOVE
Select objects: [seleccionas 5 objetos]
Select objects: [Enter]
[Ejecutas MOVE]

Command: ROTATE
Select objects: P [Enter]
[Selecciona los mismos 5 objetos automáticamente]
```

**Uso profesional**: Realizar operaciones consecutivas en el mismo conjunto.

```
Flujo eficiente:
1. COPY > Selecciona objetos > Ejecuta
2. MOVE > P [Enter] > Ejecuta (mismos objetos)
3. ROTATE > P [Enter] > Ejecuta (mismos objetos)
4. SCALE > P [Enter] > Ejecuta (mismos objetos)
```

### 8. Selection Cycling (Ciclo de Selección)

Cuando objetos están superpuestos, Selection Cycling permite alternar entre ellos.

**Activación**:
```
Status Bar > Selection Cycling icon (toggle ON)
O: Ctrl+W (toggle)
```

**Uso**:
```
[Objetos superpuestos en mismo punto]
[Clic en el área superpuesta]
[Aparece lista de objetos disponibles]
[Clic en el objeto deseado de la lista]
```

![Selection Cycling dialog](../imagenes/leccion-4-selection-cycling.png)

**Novedad 2026**: La lista ahora muestra previews visuales de cada objeto al hacer hover.

**Método alternativo** (sin menú):
```
[Mantén Shift presionado]
[Clic repetidamente en área superpuesta]
[Alterna automáticamente entre objetos]
```

**Configuración**:
```
OPTIONS > Selection tab
✓ Allow selection cycling
```

### 9. Quick Select (Selección Rápida por Propiedades)

Selecciona objetos basándose en sus propiedades (tipo, color, capa, etc).

**Comando QSELECT**:
```
Command: QSELECT (o Ctrl+Q)
```

Abre diálogo "Quick Select":

![Quick Select dialog](../imagenes/leccion-4-qselect-dialog.png)

**Opciones del diálogo**:

**Apply to**:
- Entire drawing (todo el dibujo)
- Current selection (conjunto pre-seleccionado)

**Object type**:
- Multiple (todos los tipos)
- Line
- Circle
- Arc
- Polyline
- Text
- Dimension
- etc.

**Properties**: Propiedades disponibles según Object type
- Color
- Layer
- Linetype
- Lineweight
- Plot style
- Hyperlink
- (Propiedades geométricas específicas del tipo)

**Operator**:
- = Equals (igual a)
- <> Not Equal (diferente de)
- > Greater than (mayor que)
- < Less than (menor que)
- Select All (seleccionar todos)
- * Wildcard match (coincidencia con comodines)

**Value**: Valor a comparar

**How to apply**:
- Include in new selection set (incluir)
- Exclude from new selection set (excluir)
- Append to current selection set (agregar a selección actual)

**Ejemplo práctico 1**: Seleccionar todas las líneas rojas
```
QSELECT >
  Object type: Line
  Properties: Color
  Operator: = Equals
  Value: Red
  How to apply: Include
  OK
```

**Ejemplo práctico 2**: Seleccionar todos los círculos con radio > 50
```
QSELECT >
  Object type: Circle
  Properties: Radius
  Operator: > Greater than
  Value: 50
  How to apply: Include
  OK
```

**Ejemplo práctico 3**: Seleccionar todos los objetos EXCEPTO los de capa "ANOTACIONES"
```
QSELECT >
  Object type: Multiple
  Properties: Layer
  Operator: = Equals
  Value: ANOTACIONES
  How to apply: Exclude from new selection set
  OK
```

**Uso avanzado - Wildcards**:
```
Operator: * Wildcard match
Value: MURO* (selecciona MURO-1, MURO-2, MURO-EXTERIOR, etc.)
```

**Quick Select desde Properties Palette**:
```
[Selecciona un objeto]
[Abre Properties palette - Ctrl+1]
[Clic derecho en cualquier propiedad]
[Select Similar] ← Selecciona objetos con misma propiedad
[Add Selected] ← Agrega similares a selección actual
```

### 10. Selection Filters (Filtros Avanzados)

Para filtros más complejos que Quick Select.

**Comando FILTER**:
```
Command: FILTER
```

Abre "Object Selection Filters" dialog con opciones avanzadas:

**Crear filtro compuesto**:
```
Ejemplo: "Todas las líneas rojas en capa MUROS con lineweight 0.5mm"

FILTER dialog:
Add: Line → Apply
Add: Color = Red → Apply
Add: Layer = MUROS → Apply
Add: Lineweight = 0.50 → Apply

Operators: AND entre condiciones

Save As: "Lineas_Muros_Rojas"
Apply
```

**Uso del filtro guardado**:
```
Command: ERASE
Select objects: (invoca filtro presionando ALT+S o escribiendo SELECT)
[Selecciona filtro "Lineas_Muros_Rojas"]
[Todos los objetos matching se seleccionan]
```

**Operadores lógicos**:
- **AND**: Cumple todas las condiciones
- **OR**: Cumple al menos una condición
- **XOR**: Cumple una pero no ambas
- **NOT**: No cumple la condición

**Uso moderno**: Menos común que QSELECT. Reservado para filtros muy complejos o repetitivos.

### 11. Grips (Pinzamientos)

Cuando seleccionas objetos sin comando activo, aparecen grips (cuadros azules).

![Grips en objetos](../imagenes/leccion-4-grips.png)

**Ubicaciones de grips**:
- **Línea**: Endpoints, Midpoint
- **Círculo**: Center, Quadrants
- **Arco**: Endpoints, Midpoint, Center
- **Polilínea**: Cada vértice

**Funcionalidad de grips**:
```
[Selecciona objeto sin comando activo]
[Aparecen grips azules]
[Clic en un grip]
[Grip cambia a rojo - grip activo]
[Opciones aparecen en command line]:
  ** STRETCH **
  Specify stretch point or [Base/Copy/Undo/eXit]:
```

**Modos de grip** (presiona Space para ciclar):
1. **STRETCH**: Estira el objeto
2. **MOVE**: Mueve el objeto
3. **ROTATE**: Rota el objeto
4. **SCALE**: Escala el objeto
5. **MIRROR**: Refleja el objeto

**Configuración de grips**:
```
OPTIONS > Selection tab > Grip Size
[Slider: 1-255 pixels]
Grip Colors:
  - Unselected: Azul
  - Selected (hot): Rojo
  - Hover: Verde
```

**Novedad 2026**:
- **Multi-functional grips**: Grips con múltiples acciones (hover para ver opciones)
- **Dynamic dimensions**: Dimensiones en vivo al mover grips

**Tip profesional**: Grips son más rápidos que comandos para ajustes menores.

### 12. Configuración Avanzada de Selección

**OPTIONS > Selection tab** - Configuración completa:

**Selection Modes**:
- ✓ **Noun/verb selection**: Permite seleccionar antes de comando
- ✓ **Use Shift to add to selection**: Shift para agregar/remover
- ✓ **Press and drag**: Window/Crossing arrastrando
- ✓ **Implied windowing**: Clic en vacío inicia window
- ✓ **Object grouping**: Seleccionar grupo completo vs objetos individuales
- ✓ **Associative Hatch**: Seleccionar hatch selecciona boundary

**Pickbox Size**: 1-50 pixels (recomendado: 3-5)

**Grip Settings**:
- ✓ **Enable grips**: Activa/desactiva grips
- ✓ **Enable grips within blocks**: Grips en objetos internos de bloques
- **Grip Size**: 1-255 pixels
- **Grip Colors**: Personalizar colores

**Selection Preview**:
- ✓ **When a command is active**: Highlight al hover durante comandos
- ✓ **When no command is active**: Highlight al hover sin comando
- **Visual Effect Settings**: Dash, thick, both
- **Area Selection Effect**: Resaltar objetos durante window/crossing

**Novedad 2026**:
- **Selection Preview** mejorado con mejor contraste en fondos claros y oscuros

## Ejercicio Práctico

**Ejercicio 4.1: Window vs Crossing**

Tiempo: 15 minutos

1. Dibuja 10 líneas formando un patrón aleatorio
2. Practica Window Selection:
   - Dibuja ventana de izquierda a derecha
   - Observa selección solo de objetos completamente dentro
3. Practica Crossing Selection:
   - Dibuja ventana de derecha a izquierda
   - Observa selección de objetos tocados
4. Compara resultados

**Ejercicio 4.2: Métodos Avanzados**

Tiempo: 25 minutos

1. Crea dibujo complejo con círculos, líneas, rectángulos
2. Practica cada método:
   - Fence: Línea que cruza varios objetos
   - WPolygon: Polígono encerrando área irregular
   - CPolygon: Polígono cruzando objetos
   - All: Selecciona todo
   - Last: Crea objeto y selecciónalo con Last
   - Previous: Repite selección anterior

**Ejercicio 4.3: Quick Select**

Tiempo: 20 minutos

1. Crea dibujo con:
   - 5 líneas rojas en capa "CAPA_A"
   - 5 círculos azules en capa "CAPA_B"
   - 5 rectángulos verdes en capa "CAPA_C"
2. Usa Quick Select para:
   - Seleccionar solo líneas rojas
   - Seleccionar solo objetos en CAPA_B
   - Seleccionar todos excepto círculos
3. Verifica que selección es correcta

**Ejercicio 4.4: Selection Cycling**

Tiempo: 10 minutos

1. Dibuja 3 círculos concéntricos (mismo centro)
2. Activa Selection Cycling
3. Clic en el centro
4. Observa lista de objetos
5. Selecciona cada círculo de la lista
6. Practica con Shift+clic para alternar

## Resumen

Dominaste los métodos de selección de AutoCAD:

✓ **Selección individual**: Clic directo
✓ **Window** (azul, izq→der): Solo objetos completamente dentro
✓ **Crossing** (verde, der→izq): Objetos tocados o dentro
✓ **Fence**: Línea poligonal que cruza objetos
✓ **WPolygon/CPolygon**: Versiones poligonales de Window/Crossing
✓ **All/Last/Previous**: Filtros de selección rápidos
✓ **Selection Cycling**: Objetos superpuestos
✓ **Quick Select**: Selección por propiedades
✓ **Grips**: Edición directa con pinzamientos

**Reglas mnemotécnicas**:
- **Left to right** = **Blue** = Window (solo dentro)
- **Right to left** = **Green dashed** = Crossing (tocados)

**Atajos esenciales**:
- `W`: Window mode explícito
- `C`: Crossing mode explícito
- `F`: Fence selection
- `WP`: Window Polygon
- `CP`: Crossing Polygon
- `ALL`: Todos los objetos
- `L`: Last (último creado)
- `P`: Previous (selección anterior)

**Flujo profesional**:
1. Para objetos aislados → Window
2. Para grupos conectados → Crossing
3. Para líneas/trayectorias → Fence
4. Para áreas irregulares → WPolygon/CPolygon
5. Para propiedades específicas → Quick Select

**Próxima lección**: Sistema de Entrada Dinámica - aprenderás a usar Dynamic Input para ingresar datos y coordenadas directamente en el cursor, eliminando necesidad de mirar la línea de comandos.

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia visual entre Window y Crossing?
2. ¿Qué dirección es Window Selection?
3. ¿Cuándo usarías Fence Selection?
4. ¿Qué selecciona el filtro "Last"?
5. ¿Qué hace el filtro "Previous"?
6. ¿Para qué sirve Quick Select?
7. ¿Qué son los grips y cuándo aparecen?
8. ¿Cómo activas Selection Cycling?

---

**Práctica recomendada**: Dedica 20 minutos diarios practicando selección hasta que puedas seleccionar exactamente los objetos deseados en el primer intento sin ensayo y error.
