# Lección 4: Atributos y Block Attribute Manager

## Introducción

Los atributos transforman bloques simples en elementos inteligentes que almacenan información. Mientras que la geometría de un bloque define su apariencia visual, los atributos definen su contenido informativo: especificaciones técnicas, números de parte, fabricantes, costos, o cualquier dato relevante para el proyecto. Esta capacidad convierte bloques en una base de datos distribuida dentro del dibujo, permitiendo generar reportes automáticos, listas de materiales, y documentación sincronizada con el diseño.

Un bloque de puerta puede contener atributos de ancho, altura, material, fabricante, número de catálogo y costo. Un bloque de equipo eléctrico puede almacenar voltaje, amperaje, modelo y ubicación. Esta información puede luego extraerse automáticamente para crear tablas, schedules y reportes sin necesidad de mantener listas separadas que podrían desactualizarse. En esta lección dominarás la creación, edición y gestión de atributos para construir bloques verdaderamente inteligentes.

## Fundamentos de Atributos

### ¿Qué es un Atributo?

Un atributo es un campo de texto variable dentro de un bloque que puede almacenar información específica de cada instancia del bloque. A diferencia del texto normal dentro de un bloque (que es igual en todas las instancias), cada inserción de bloque puede tener valores de atributos diferentes.

**Componentes de un atributo:**
- **Tag:** Identificador único del atributo (como nombre de campo en base de datos)
- **Prompt:** Pregunta que aparece al insertar el bloque (opcional)
- **Default Value:** Valor predeterminado sugerido
- **Value:** Valor actual del atributo en cada instancia
- **Mode:** Comportamiento del atributo (visible, invisible, constante, etc.)

**Ejemplo práctico:**
```
Bloque: PUERTA
Atributo 1:
  Tag: ANCHO
  Prompt: "Ancho de puerta en mm:"
  Default: "900"
  Value: "800" (en una instancia específica)

Atributo 2:
  Tag: MATERIAL
  Prompt: "Material de puerta:"
  Default: "Madera"
  Value: "Vidrio templado" (en esta instancia)
```

### Modos de Atributo

AutoCAD ofrece cuatro modos principales que controlan el comportamiento de atributos:

**1. Invisible**
- El atributo existe pero no se visualiza en el dibujo
- Se puede extraer y reportar
- Útil para datos técnicos que no necesitan mostrarse visualmente
- Ejemplo: Número de parte interno, código de proveedor

**2. Constant**
- El valor es fijo y no puede cambiarse por instancia
- No solicita valor al insertar
- Útil para información que es igual para todas las instancias del bloque
- Ejemplo: Tipo de bloque, categoría, versión del símbolo

**3. Verify**
- Solicita verificación del valor al insertar
- Pide confirmación antes de aceptar el valor
- Útil para atributos críticos donde errores son costosos
- Ejemplo: Cantidad, voltaje en equipos eléctricos

**4. Preset**
- Usa valor por defecto sin preguntar al insertar
- Puede editarse después con ATTEDIT
- Útil para agilizar inserción cuando valor predeterminado es común
- Ejemplo: Fabricante preferido, especificación estándar

**Checkbox "Lock position":**
- Fija la posición del atributo respecto al bloque
- Previene movimiento accidental del texto
- Recomendado para mayoría de atributos

**Checkbox "Multiple lines":**
- Permite atributos de múltiples líneas (como MTEXT)
- Útil para notas, descripciones largas, especificaciones detalladas

![Modos de Atributo](../imagenes/leccion-4-attribute-modes.png)

## Creando Atributos: ATTDEF

### Comando ATTDEF (ATTribute DEFinition)

**Acceso:**
- Comando: `ATTDEF`
- Ribbon: Insert tab > Block Definition panel > Define Attributes
- También disponible dentro del Block Editor

### Attribute Definition Dialog

**Sección Mode:**
- Checkboxes para Invisible, Constant, Verify, Preset
- Lock position (recomendado activar)
- Multiple lines (si necesitas texto multi-línea)

**Sección Attribute:**
- **Tag:** Nombre del atributo (sin espacios, MAYÚSCULAS recomendado)
  - Válido: ANCHO, NUM_PARTE, FABRICANTE
  - Inválido: Ancho Puerta (tiene espacio), 1ANCHO (empieza con número)
- **Prompt:** Texto que aparece al insertar bloque
  - Claro y específico: "Ancho de puerta en milímetros:"
  - No aparece si el modo es Constant o Preset
- **Default:** Valor predeterminado sugerido
  - Puede dejarse vacío
  - Sugerencia: Usa valores más comunes para agilizar trabajo
- **Value:** Solo aparece cuando modo es Constant

**Sección Text Settings:**
- **Justification:** Alineación del texto (Left, Center, Right, etc.)
- **Text Style:** Estilo de texto a usar
- **Text Height:** Altura del texto (0 = usa altura del estilo)
- **Rotation:** Rotación del texto en grados
- **Annotative:** Si el atributo es anotativo (veremos en Módulo 3)
- **Boundary width:** Ancho de texto para atributos multi-línea

**Sección Insertion Point:**
- **Specify On-screen:** Define posición al insertar
- **X, Y, Z:** Coordenadas exactas si no es on-screen

**Sección Align below previous attribute:**
- Alinea automáticamente debajo del atributo anterior
- Útil para crear listas verticales de atributos

### Ejemplo Paso a Paso: Bloque de Equipo con Atributos

Crearemos un bloque de equipo eléctrico con múltiples atributos.

**Paso 1: Dibujar geometría base**
1. Dibuja un rectángulo 300x200 (representación del equipo)
2. Agrega símbolo o detalle interno
3. Deja espacio abajo para atributos de texto

**Paso 2: Definir primer atributo (Código)**
1. Comando: `ATTDEF`
2. Mode: Ninguno marcado
3. Tag: CODIGO
4. Prompt: "Código de equipo:"
5. Default: EQ-001
6. Text Height: 50
7. Insertion Point: Especificar debajo del rectángulo
8. OK

**Paso 3: Definir segundo atributo (Descripción)**
1. `ATTDEF`
2. Mode: Multiple lines activado
3. Tag: DESCRIPCION
4. Prompt: "Descripción del equipo:"
5. Default: Motor eléctrico
6. Align below previous attribute: Activado
7. OK (se alinea automáticamente debajo de CODIGO)

**Paso 4: Definir tercer atributo (Voltaje)**
1. `ATTDEF`
2. Mode: Verify activado (dato crítico)
3. Tag: VOLTAJE
4. Prompt: "Voltaje nominal (V):"
5. Default: 220
6. Align below previous: Activado
7. OK

**Paso 5: Definir cuarto atributo (Fabricante)**
1. `ATTDEF`
2. Mode: Preset activado (usa default sin preguntar)
3. Tag: FABRICANTE
4. Default: ACME Industrial
5. Align below previous: Activado
6. OK

**Paso 6: Definir quinto atributo (Número interno)**
1. `ATTDEF`
2. Mode: Invisible activado (no se muestra visualmente)
3. Tag: NUM_INTERNO
4. Prompt: "Número interno de inventario:"
5. Default: (vacío)
6. Align below previous: Activado
7. OK

**Paso 7: Crear el bloque**
1. Comando: `BLOCK`
2. Nombre: EQUIPO_ELECTRICO
3. Base point: Centro del rectángulo
4. Selecciona: Geometría + todos los atributos
5. OK

**Paso 8: Probar el bloque**
1. Comando: `INSERT`
2. Nombre: EQUIPO_ELECTRICO
3. AutoCAD solicitará valores:
   - "Código de equipo:" → [Enter para aceptar EQ-001 o ingresar otro]
   - "Descripción del equipo:" → [Texto multi-línea]
   - "Voltaje nominal (V):" → [Valor y luego pide verificación]
   - (FABRICANTE no pregunta, usa preset)
   - "Número interno de inventario:" → [Valor pero no se mostrará]
4. Especifica punto de inserción
5. El bloque se inserta con atributos visibles (excepto NUM_INTERNO)

![Bloque de Equipo con Atributos](../imagenes/leccion-4-equipo-atributos.png)

## Editando Atributos en Bloques Insertados

### ATTEDIT: Edición Individual

**ATTEDIT** permite editar atributos de bloques ya insertados.

**Acceso:**
- Comando: `ATTEDIT`
- Ribbon: Insert tab > Block Definition panel > Edit Attributes
- Doble clic en bloque con atributos
- Click derecho en bloque > Edit Attributes

**Enhanced Attribute Editor Dialog:**

Muestra todos los atributos del bloque seleccionado en tres tabs:

**Tab 1: Attribute**
- Lista de todos los atributos con sus valores actuales
- Permite editar valores directamente
- Checkbox para aplicar a todos los atributos seleccionados

**Tab 2: Text Options**
- Estilo de texto
- Justificación
- Altura
- Rotación
- Ancho de boundary
- Backwards, Upside down

**Tab 3: Properties**
- Layer
- Linetype
- Color
- Lineweight
- Plot style

**Workflow de edición:**
1. Doble clic en bloque con atributos
2. Enhanced Attribute Editor se abre
3. Modifica valores necesarios
4. Click Apply para ver cambios sin cerrar
5. OK cuando termines

### EATTEDIT: Edición Avanzada

**EATTEDIT** (Enhanced ATTribute EDIT) es una versión más completa que permite:
- Editar múltiples bloques simultáneamente
- Buscar y reemplazar valores
- Edición por lotes

**Acceso:** Solo mediante comando `EATTEDIT`

**Opciones del comando:**
```
Select a block reference: [Selecciona bloque]
¿O usar opción de selección múltiple?
Enter an option [Settings/Select]:
```

**Settings:** Configura qué atributos mostrar y editar
**Select:** Selecciona múltiples bloques para edición

## Block Attribute Manager (BATTMAN)

### Concepto y Propósito

BATTMAN es la herramienta profesional para gestionar atributos a nivel de definición de bloque (no instancias individuales). Permite:
- Modificar propiedades de atributos en la definición del bloque
- Agregar nuevos atributos a bloques existentes
- Eliminar atributos obsoletos
- Reordenar atributos
- Cambiar tags, prompts, defaults
- Sincronizar cambios a todas las instancias del bloque

**Diferencia clave:**
- **ATTEDIT:** Edita valores en instancias individuales
- **BATTMAN:** Edita definiciones de atributos (afecta todas las instancias)

### Usando Block Attribute Manager

**Acceso:**
- Comando: `BATTMAN`
- Ribbon: Insert tab > Block Definition panel > Manage Attributes

**Proceso:**
1. `BATTMAN`
2. Selecciona bloque de la lista
3. Block Attribute Manager dialog se abre

**Interfaz:**

**Lista de atributos:**
- Muestra todos los atributos del bloque seleccionado
- Orden determina orden de solicitud al insertar
- Permite selección múltiple para operaciones

**Botones principales:**

**Edit:**
- Abre Edit Attribute dialog
- Permite modificar todas las propiedades del atributo:
  - Tag (cambiará en todas las instancias)
  - Prompt
  - Default value
  - Modes (Invisible, Constant, Verify, Preset)
  - Text settings (estilo, altura, rotación)
  - Lock position, Multiple lines

**Remove:**
- Elimina atributo de la definición del bloque
- Advertencia: Valores existentes en instancias se perderán
- Útil para limpiar atributos obsoletos

**Move Up / Move Down:**
- Cambia orden de atributos
- Afecta orden de solicitud al insertar bloque
- Útil para organizar lógicamente (datos generales primero, detalles después)

**Settings:**
- **Display in list:** Qué propiedades mostrar en la lista (Tag, Prompt, Default, etc.)
- **Select block:** Cambiar a otro bloque
- **Sync:** Fuerza actualización de propiedades en todas las instancias

**Sync button (crítico):**
- Aplica cambios de definición a todas las instancias existentes en el dibujo
- Actualiza posición, estilo, modos
- NO cambia valores (solo propiedades)
- Siempre ejecutar después de modificar definiciones

![Block Attribute Manager Interface](../imagenes/leccion-4-battman.png)

### Ejemplo Práctico: Actualización Masiva de Atributos

**Escenario:** Tienes 50 bloques "PUERTA" insertados, pero olvidaste agregar atributo de fabricante.

**Solución con BATTMAN:**

**Paso 1: Agregar atributo a la definición**
1. Comando: `BEDIT`
2. Selecciona bloque PUERTA
3. En Block Editor: `ATTDEF`
4. Crea atributo FABRICANTE
5. Close Block Editor (guardar)

**Paso 2: Sincronizar con BATTMAN**
1. Comando: `BATTMAN`
2. Selecciona bloque PUERTA
3. Verifica que FABRICANTE aparece en lista
4. Click en Settings > Sync
5. OK

**Resultado:** Las 50 instancias ahora tienen el atributo FABRICANTE con valor default.

**Paso 3: Editar valores individuales (opcional)**
1. Usa ATTEDIT en cada instancia para personalizar fabricante según corresponda

### Modificando Propiedades de Atributos

**Cambiar Tag de atributo:**
```
Precaución: Cambiar Tags puede afectar Data Extraction y rutinas de extracción
```
1. BATTMAN > Selecciona bloque > Selecciona atributo
2. Edit
3. Attribute tab > Tag: Nuevo nombre
4. OK
5. Sync para aplicar

**Cambiar de Visible a Invisible:**
1. BATTMAN > Selecciona atributo
2. Edit > Mode > Marcar Invisible
3. OK > Sync

**Cambiar Default Value:**
1. BATTMAN > Selecciona atributo
2. Edit > Attribute tab > Default: Nuevo valor
3. OK
4. Sync (no cambia valores existentes, solo afecta nuevas inserciones)

**Cambiar orden de solicitud:**
1. BATTMAN > Selecciona atributo
2. Move Up o Move Down
3. Sync

## ATTSYNC: Sincronización de Atributos

### Concepto de Sincronización

Cuando modificas la definición de un bloque en Block Editor (agregando, eliminando o modificando atributos), las instancias ya insertadas no se actualizan automáticamente. ATTSYNC fuerza la actualización.

**ATTSYNC vs BATTMAN Sync:**
- **BATTMAN Sync:** Sincroniza propiedades (posición, estilo, modos) pero mantiene valores
- **ATTSYNC:** Sincronización completa, útil para cambios estructurales

**Acceso:**
- Comando: `ATTSYNC`
- Ribbon: Insert tab > Block Definition panel > Synchronize Attributes

**Proceso:**
```
Enter an option [?/Name/Select] <Select>:
Name: Escribe nombre del bloque
Select: Selecciona instancia del bloque
?: Lista todos los bloques con atributos en el dibujo
```

**Cuándo usar ATTSYNC:**
- Después de modificar atributos en Block Editor
- Cuando agregaste nuevos atributos a definición
- Cuando eliminaste atributos obsoletos
- Cuando cambiaste propiedades de texto significativamente
- Antes de Data Extraction (para garantizar consistencia)

### Ejemplo: Agregar Atributo a Bloque Existente

**Situación:** Bloque VENTANA tiene 100 instancias, necesitas agregar atributo ESPESOR_VIDRIO

**Paso 1: Editar definición**
1. `BEDIT` > Selecciona VENTANA
2. `ATTDEF` > Crea atributo ESPESOR_VIDRIO
3. Close Block Editor (guardar)

**Paso 2: Sincronizar**
1. `ATTSYNC`
2. Enter option: N (Name)
3. Enter name of block: VENTANA
4. AutoCAD actualiza todas las 100 instancias

**Resultado:** Todas las ventanas ahora tienen atributo ESPESOR_VIDRIO con valor default.

## Atributos en Bloques Dinámicos

### Combinando Atributos con Parámetros Dinámicos

Los atributos y las características dinámicas (parámetros, acciones, visibility states) son completamente compatibles y se potencian mutuamente.

**Aplicaciones comunes:**

**1. Atributos que cambian según Visibility State**
- Bloque de puerta: Estado "Madera" muestra atributo MATERIAL="Madera"
- Estado "Vidrio" actualiza atributo automáticamente

**Implementación:**
- Usa Multiple instances del mismo atributo Tag en diferentes Visibility States
- Cada estado muestra diferentes valores o atributos

**2. Atributos de posición dinámica**
- El atributo se mueve con parámetros dinámicos
- Útil para etiquetas que siguen elementos móviles

**Implementación:**
- Incluye atributos en Selection Set de Move o Stretch Actions

**3. Atributos en Lookup Tables**
- Lookup Table controla valores de atributos
- Seleccionar opción actualiza atributos automáticamente

**Limitación:** Atributos no pueden ser Output Properties directamente en Lookup Tables, pero puede lograrse mediante workarounds con Visibility States.

### Ejemplo: Puerta con Material Dinámico

**Paso 1: Crear bloque base con Visibility States**
1. Geometría de puerta
2. Dos Visibility States: "Madera", "Metal"
3. Geometría diferente para cada material

**Paso 2: Agregar atributos por estado**
1. Cambiar a Visibility State "Madera"
2. `ATTDEF`: Tag=MATERIAL, Constant mode, Value="Madera"
3. Cambiar a Visibility State "Metal"
4. `ATTDEF`: Tag=MATERIAL, Constant mode, Value="Metal"

**Resultado:** Al cambiar Visibility State, el valor de MATERIAL cambia automáticamente.

## Troubleshooting de Atributos

**Problema: Atributos no solicitan valores al insertar**
- Verificar: ATTREQ system variable = 1 (comando: `ATTREQ`)
- Si ATTREQ=0, usa valores default sin preguntar

**Problema: Atributos desaparecieron visualmente**
- Verificar: ATTMODE system variable = 1
- ATTMODE=0 oculta todos los atributos (incluso visibles)
- Comando: `ATTMODE` > 1

**Problema: No puedo editar atributos con doble clic**
- Verificar: ATTDIA system variable = 1
- ATTDIA=0 usa edición en línea de comandos

**Problema: Cambios en BATTMAN no se reflejan en instancias**
- Solución: Ejecutar ATTSYNC después de modificar con BATTMAN
- Verificar que seleccionaste el bloque correcto

**Problema: Tag duplicados en diferentes atributos**
- Tags deben ser únicos dentro del mismo bloque
- Solución: Renombra uno de los tags en BATTMAN

**Problema: Atributos multi-línea no muestran todo el texto**
- Verifica Boundary Width en propiedades del atributo
- Aumenta ancho de boundary en BATTMAN > Edit

## Mejores Prácticas para Atributos

**Nomenclatura de Tags:**
- MAYÚSCULAS para Tags (convención estándar)
- Sin espacios ni caracteres especiales
- Descriptivos pero concisos: ANCHO en lugar de ANCH o A
- Consistencia entre bloques: siempre usa FABRICANTE, no FAB en unos y FABRICANTE en otros

**Organización:**
- Orden lógico: Datos generales primero, detalles después
- Agrupa atributos relacionados visualmente
- Considera usar prefijos para categorizar: MAT_TIPO, MAT_ESPESOR, MAT_ACABADO

**Defaults inteligentes:**
- Usa valores más comunes como defaults para agilizar inserción
- Defaults vacíos para datos que siempre varían

**Visibilidad:**
- Invisible para datos técnicos/administrativos (códigos internos, precios)
- Visible para información que debe mostrarse en planos (dimensiones, materiales)

**Modos:**
- Preset para atributos que rara vez cambian (agiliza inserción)
- Verify para datos críticos (voltajes, cargas, dimensiones estructurales)
- Constant para información que nunca varía por instancia (tipo de símbolo, categoría)

**Sincronización:**
- Ejecuta ATTSYNC antes de Data Extraction
- Sincroniza después de cualquier cambio en definiciones
- Verifica que todas las instancias tienen mismos atributos

## Conclusión

Los atributos convierten bloques en contenedores de información inteligente, creando una base de datos distribuida dentro del dibujo. La combinación de ATTDEF para creación, ATTEDIT para edición individual, BATTMAN para gestión de definiciones, y ATTSYNC para sincronización, proporciona un sistema completo para administrar información asociada a elementos gráficos.

Un bloque bien diseñado con atributos apropiados no solo representa un elemento visualmente, sino que también almacena toda la información técnica, administrativa y de especificaciones necesaria para documentación completa del proyecto. Esta información puede luego extraerse automáticamente, tema que exploraremos en profundidad en la próxima lección sobre Data Extraction.

## Resumen de Conceptos Clave

- Atributos almacenan información variable dentro de bloques
- Componentes: Tag, Prompt, Default, Value, Mode
- Modos: Invisible, Constant, Verify, Preset
- ATTDEF crea definiciones de atributos
- ATTEDIT edita valores en instancias individuales
- BATTMAN gestiona atributos a nivel de definición de bloque
- ATTSYNC sincroniza cambios de definición a todas las instancias
- Atributos compatibles con bloques dinámicos y Visibility States
- Nomenclatura consistente y organización lógica son críticas
- Sincronización regular garantiza consistencia de datos
- Atributos son base para Data Extraction y reportes automáticos
