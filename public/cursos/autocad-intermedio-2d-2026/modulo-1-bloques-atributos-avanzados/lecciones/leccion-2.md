# Lección 2: Visibility States y Lookup Tables

## Introducción

Mientras que los parámetros y acciones permiten modificar la geometría de un bloque, los Visibility States (Estados de Visibilidad) y Lookup Tables (Tablas de Búsqueda) agregan un nivel completamente nuevo de funcionalidad: la capacidad de tener múltiples representaciones dentro de un solo bloque. Estas características permiten crear bloques que pueden cambiar completamente su apariencia, mostrando u ocultando elementos según el contexto o la selección del usuario.

Imagina un bloque de silla que puede mostrar versiones de vista en planta, frontal o lateral con solo seleccionar una opción. O un bloque de puerta que puede mostrar diferentes estilos (simple, doble, vidrio) sin necesidad de insertar bloques diferentes. Esta versatilidad reduce drásticamente la cantidad de bloques en tu biblioteca mientras aumenta la flexibilidad del diseño. En esta lección dominarás estas poderosas herramientas que llevan los bloques dinámicos al siguiente nivel.

## Visibility States: Múltiples Representaciones en Un Bloque

### Concepto de Estados de Visibilidad

Un Visibility State (Estado de Visibilidad) es una configuración dentro de un bloque dinámico que controla qué objetos son visibles y cuáles están ocultos. Cada bloque dinámico puede tener múltiples estados de visibilidad, y el usuario puede cambiar entre ellos mediante un grip especial que despliega un menú.

**Analogía práctica:** Piensa en los estados de visibilidad como "capas" dentro de un bloque, pero en lugar de activar/desactivar capas, activas/desactivas estados completos que muestran diferentes conjuntos de objetos.

**Aplicaciones comunes:**
- Mobiliario con vistas alternativas (planta, elevación, 3D simplificado)
- Símbolos eléctricos con variantes (switch simple, doble, triple)
- Puertas con diferentes materiales (madera, metal, vidrio)
- Equipos con configuraciones opcionales (con/sin accesorios)
- Vegetación en diferentes estaciones (con/sin follaje)
- Títulos de planos con logos alternativos

### Visibility Parameter

Para trabajar con estados de visibilidad, primero debes agregar un Visibility Parameter al bloque.

**Características del Visibility Parameter:**
- Solo puede haber UN Visibility Parameter por bloque
- Crea automáticamente un estado de visibilidad inicial (VisibilityState0)
- Genera un grip triangular con menú desplegable
- No requiere acciones asociadas (funciona por sí solo)

**Proceso de inserción:**
1. Abre el bloque en Block Editor (`BEDIT`)
2. Block Editor tab > Action Parameters panel > Visibility
3. Especifica ubicación del parámetro (donde aparecerá el grip)
4. El grip de visibilidad aparece como un triángulo amarillo

![Visibility Parameter Grip](../imagenes/leccion-2-visibility-parameter.png)

### Visibility States Manager

El Visibility States Manager es la herramienta central para crear y gestionar estados de visibilidad.

**Acceso:**
- Comando: `BVSTATE`
- Block Editor tab > Visibility panel > Visibility States Manager
- Doble clic en el Visibility Parameter

**Interfaz del Visibility States Manager:**

La ventana muestra:
- Lista de estados de visibilidad existentes
- Estado actual marcado con icono
- Botones de gestión: New, Rename, Delete, Move Up/Down

**Operaciones principales:**

**Crear nuevo estado:**
1. Click en "New"
2. Nombre descriptivo (ej: "Vista_Planta", "Opcion_Vidrio")
3. Opciones de visibilidad inicial:
   - "Hide all existing objects": Oculta todo (partir de cero)
   - "Show all existing objects": Muestra todo (ocultar selectivamente)
   - "Leave visibility of existing objects unchanged": Mantener estado actual
4. OK

**Cambiar entre estados:**
- Selecciona el estado deseado en la lista
- Click en "Set Current"
- O usa la lista desplegable en el Visibility panel del Ribbon

**Eliminar estado:**
- Selecciona el estado
- Click en "Delete"
- (No puedes eliminar el último estado)

**Renombrar estado:**
- Selecciona el estado
- Click en "Rename"
- Nuevo nombre descriptivo

### Configurando Visibilidad de Objetos

Una vez creados los estados, debes definir qué objetos son visibles en cada uno.

**Método 1: Visibility Mode (Recomendado)**
1. En Block Editor, asegúrate de estar en el estado correcto
2. Block Editor tab > Visibility panel > Visibility Mode
3. Esto ingresa a un modo especial donde puedes hacer visible/invisible objetos
4. Selecciona objetos y usa los botones:
   - **Make Visible:** Hace visible el objeto en este estado
   - **Make Invisible:** Oculta el objeto en este estado
5. Click en Visibility Mode nuevamente para salir

**Método 2: Desde Properties**
1. Selecciona los objetos en el Block Editor
2. Properties palette
3. Sección "Misc"
4. Propiedad "Visibility": Selecciona estado(s) donde debe ser visible

**Método 3: Visibility panel del Ribbon**
- **Make Visible:** Botón para hacer objetos visibles
- **Make Invisible:** Botón para ocultar objetos
- **Visibility States:** Lista desplegable para cambiar estado actual

![Visibility Mode Interface](../imagenes/leccion-2-visibility-mode.png)

### Ejemplo Paso a Paso: Bloque de Silla con Vistas Múltiples

Crearemos un bloque de silla que puede mostrar vista en planta, frontal o lateral.

**Paso 1: Preparar geometría**
1. Dibuja tres representaciones de silla:
   - Vista planta (círculo con respaldo)
   - Vista frontal (rectángulo con patas)
   - Vista lateral (perfil de silla)
2. Colócalas en la misma posición base
3. Crea el bloque "Silla_Vistas"
4. Abre en Block Editor

**Paso 2: Agregar Visibility Parameter**
1. Action Parameters panel > Visibility Parameter
2. Ubica el grip en la esquina superior derecha

**Paso 3: Crear estados de visibilidad**
1. Abre Visibility States Manager
2. Renombra "VisibilityState0" a "Planta"
3. New > "Frontal" > Hide all existing objects
4. New > "Lateral" > Hide all existing objects

**Paso 4: Configurar estado "Planta"**
1. Cambiar a estado "Planta"
2. Visibility Mode ON
3. Selecciona solo la geometría de vista planta
4. Make Visible
5. Visibility Mode OFF

**Paso 5: Configurar estado "Frontal"**
1. Cambiar a estado "Frontal"
2. Visibility Mode ON
3. Selecciona solo la geometría frontal
4. Make Visible
5. Visibility Mode OFF

**Paso 6: Configurar estado "Lateral"**
1. Cambiar a estado "Lateral"
2. Visibility Mode ON
3. Selecciona solo la geometría lateral
4. Make Visible
5. Visibility Mode OFF

**Paso 7: Probar y guardar**
1. Test Block
2. Selecciona el bloque
3. Click en el grip de visibilidad (triángulo)
4. Prueba cambiar entre estados
5. Verifica que solo la geometría correcta es visible
6. Close Test Block
7. Close Block Editor (guardar)

![Silla con Estados de Visibilidad](../imagenes/leccion-2-silla-estados.png)

## Lookup Tables: Opciones Predefinidas Inteligentes

### Concepto de Lookup Tables

Una Lookup Table (Tabla de Búsqueda) es una base de datos dentro de un bloque dinámico que relaciona valores de parámetros con opciones predefinidas. Permite crear listas desplegables donde el usuario selecciona una opción, y el bloque automáticamente ajusta múltiples parámetros simultáneamente a valores específicos.

**Analogía práctica:** Imagina un formulario web donde seleccionas "Tamaño: Grande" y automáticamente se configuran ancho=2m, alto=1.5m, precio=$500. La Lookup Table hace exactamente eso dentro del bloque.

**Ventajas:**
- Simplifica la selección para usuarios finales
- Garantiza combinaciones válidas de parámetros
- Previene errores de configuración
- Centraliza opciones predefinidas
- Facilita estandarización

**Aplicaciones comunes:**
- Bloques de muebles con tamaños estándar
- Símbolos con configuraciones típicas
- Equipos con modelos predefinidos
- Elementos estructurales con dimensiones normalizadas

### Lookup Parameter

El Lookup Parameter es el parámetro especial que controla la tabla de búsqueda.

**Características:**
- Crea un grip con menú desplegable de opciones
- Puede controlar múltiples parámetros simultáneamente
- Puede combinarse con Visibility States
- Las opciones se definen en la Lookup Table

**Inserción:**
1. En Block Editor > Action Parameters panel > Lookup
2. Especifica ubicación del grip
3. Define etiqueta (ej: "Configuracion", "Modelo")

### Property Lookup Table

La Property Lookup Table es donde defines las opciones y sus valores correspondientes.

**Acceso:**
1. Selecciona el Lookup Parameter
2. Click derecho > Display Lookup Table
3. O: Block Editor tab > Manage panel > Property Lookup Table

**Estructura de la tabla:**

La tabla tiene columnas:
- **Input Properties:** Parámetros de entrada (read-only para el usuario)
- **Lookup Properties:** El parámetro Lookup (columna central)
- **Output Properties:** Parámetros que se modificarán automáticamente

**Anatomía de una fila:**
Cada fila representa una opción seleccionable:
- Nombre de la opción (en columna Lookup)
- Valores que se asignarán a cada parámetro de salida

![Property Lookup Table Interface](../imagenes/leccion-2-lookup-table.png)

### Configurando una Lookup Table

**Paso 1: Agregar propiedades de entrada (Input)**
1. En la tabla, click en "Add Properties" (columna izquierda)
2. Selecciona parámetros que influyen en la selección (opcional)
3. Estos parámetros se leen pero no se modifican

**Paso 2: Agregar propiedades de salida (Output)**
1. Click en "Add Properties" (columna derecha)
2. Selecciona todos los parámetros que quieres controlar
3. Estos parámetros se modificarán según la opción seleccionada

**Paso 3: Agregar opciones (filas)**
1. Click en "Add row" en la parte inferior
2. Se agrega una nueva fila vacía
3. Edita cada celda:
   - Columna Lookup: Nombre de la opción (ej: "Pequeño", "Mediano", "Grande")
   - Columnas de parámetros: Valores específicos para esta opción

**Paso 4: Configurar opciones avanzadas**
- **Allow reverse lookup:** Permite que cambios manuales en parámetros actualicen la opción
- **Read-only:** Hace que la Lookup Table sea solo lectura (parámetros no editables manualmente)

**Paso 5: Guardar tabla**
- Click en OK
- La tabla queda asociada al Lookup Parameter

### Ejemplo Paso a Paso: Mesa con Tamaños Estándar

Crearemos una mesa que puede seleccionarse en tamaños Pequeño, Mediano o Grande, ajustando automáticamente ancho, largo y mostrando/ocultando sillas.

**Paso 1: Crear mesa con parámetros**
1. Dibuja rectángulo 1000x600 (mesa pequeña base)
2. Crea bloque "Mesa_Estandar"
3. Abre en Block Editor
4. Agrega Linear Parameter "Ancho" (horizontal)
5. Agrega Stretch Action asociada a "Ancho"
6. Agrega Linear Parameter "Largo" (vertical)
7. Agrega Stretch Action asociada a "Largo"

**Paso 2: Agregar elementos opcionales (sillas)**
1. Dibuja 4 círculos pequeños representando sillas alrededor de la mesa
2. Agrega Visibility Parameter
3. Crea dos estados: "Con_Sillas" y "Sin_Sillas"
4. Configura visibilidad de los círculos

**Paso 3: Agregar Lookup Parameter**
1. Action Parameters panel > Lookup
2. Ubica grip arriba de la mesa
3. Etiqueta: "Tamaño"

**Paso 4: Configurar Property Lookup Table**
1. Selecciona el Lookup Parameter
2. Click derecho > Display Lookup Table
3. Add Properties (derecha): Selecciona "Ancho", "Largo", y el Visibility Parameter
4. Click en "Add row" tres veces (para tres tamaños)

**Paso 5: Definir opciones**

Fila 1:
- Lookup: "Pequeño (4 personas)"
- Ancho: 1000
- Largo: 600
- Visibility: Con_Sillas

Fila 2:
- Lookup: "Mediano (6 personas)"
- Ancho: 1400
- Largo: 800
- Visibility: Con_Sillas

Fila 3:
- Lookup: "Grande (8 personas)"
- Ancho: 2000
- Largo: 1000
- Visibility: Con_Sillas

Fila 4:
- Lookup: "Sin sillas"
- Ancho: <Read Only>
- Largo: <Read Only>
- Visibility: Sin_Sillas

**Paso 6: Configurar opciones**
- Desmarca "Allow reverse lookup" (para forzar uso de opciones predefinidas)
- OK

**Paso 7: Probar**
1. Test Block
2. Selecciona el bloque
3. Click en grip "Tamaño"
4. Selecciona "Mediano (6 personas)"
5. Verifica que ancho, largo y sillas se ajustan automáticamente
6. Prueba todas las opciones
7. Close Test Block y guarda

![Mesa con Lookup Table](../imagenes/leccion-2-mesa-lookup.png)

## Combinando Visibility States con Lookup Tables

La verdadera potencia surge al combinar ambas características. La Lookup Table puede controlar qué Visibility State está activo, junto con otros parámetros.

**Caso de uso: Puerta con Estilos**

Imagina un bloque de puerta donde seleccionas:
- "Madera Estándar 80cm"
- "Vidrio Doble 160cm"
- "Metal Seguridad 90cm"

Cada opción configura:
- Ancho de puerta (parámetro Linear)
- Material visual (Visibility State)
- Tipo de marco (otro Visibility State)

**Implementación:**
1. Crea geometría para cada material (madera, vidrio, metal)
2. Configura Visibility States para materiales
3. Agrega Linear Parameter para ancho
4. Agrega Lookup Parameter
5. En Lookup Table, agrega el Visibility Parameter como Output Property
6. Define opciones que combinan ancho y visibilidad

**Resultado:** Un solo bloque que reemplaza 9 bloques estáticos (3 materiales × 3 anchos).

## Mejores Prácticas

**Nomenclatura de estados:**
- Usa nombres descriptivos: "Vista_Planta" en lugar de "State1"
- Mantén consistencia en toda la biblioteca de bloques
- Usa prefijos para categorizar: "Mat_Madera", "Mat_Vidrio", "Mat_Metal"

**Organización de geometría:**
- Agrupa objetos relacionados en un mismo estado
- Utiliza capas para facilitar selección masiva
- Mantén geometría alineada entre estados (mismo punto de inserción)

**Optimización de Lookup Tables:**
- No incluyas opciones redundantes
- Ordena opciones lógicamente (por tamaño, por frecuencia de uso)
- Usa nombres de opciones auto-explicativos
- Considera incluir dimensiones en el nombre: "Mesa 1.2m x 0.8m"

**Testing exhaustivo:**
- Prueba cada estado de visibilidad
- Verifica cada opción de Lookup Table
- Prueba combinaciones de parámetros manuales con Lookup (si Allow reverse lookup está activo)
- Verifica que grips no se superpongan o confundan

**Documentación:**
- Incluye descripción del bloque explicando opciones disponibles
- Considera crear un archivo PDF de referencia para bloques complejos
- Estandariza nombres de estados entre bloques similares

## Limitaciones y Consideraciones

**Visibility States:**
- Todos los objetos en todos los estados se almacenan en el bloque (aumenta tamaño de archivo)
- Cambios en geometría común deben replicarse en todos los estados
- Máximo recomendado: 10-15 estados por bloque (más genera confusión)

**Lookup Tables:**
- Solo controlan parámetros del mismo bloque
- No pueden ejecutar acciones complejas o scripts
- Valores deben ser definidos explícitamente (no soportan fórmulas)
- Allow reverse lookup puede generar confusión si valores no coinciden exactamente

**Performance:**
- Bloques con muchos estados pueden cargar lentamente en dibujos grandes
- Considera dividir bloques muy complejos en varios bloques especializados

## Troubleshooting Común

**Problema: Estado de visibilidad no muestra objetos esperados**
- Solución: Verifica que estás en el estado correcto al hacer objetos visibles
- Usa Visibility Mode para ver claramente qué objetos están visibles/invisibles

**Problema: Lookup Table no actualiza parámetros**
- Solución: Verifica que parámetros están agregados como Output Properties
- Asegúrate de que valores en la tabla coinciden con el tipo de parámetro

**Problema: Grips se superponen y confunden**
- Solución: Reposiciona grips en Block Editor
- Considera ocultar grips de parámetros controlados por Lookup (Grip display = Hide)

**Problema: Cambios manuales anulan selección de Lookup**
- Solución: Si quieres forzar uso de Lookup, desmarca "Allow reverse lookup"
- Alternativamente, establece parámetros como Read-only en la tabla

## Conclusión

Visibility States y Lookup Tables transforman bloques dinámicos simples en herramientas verdaderamente inteligentes y versátiles. Los Visibility States permiten múltiples representaciones visuales dentro de un solo bloque, mientras que las Lookup Tables simplifican la configuración mediante opciones predefinidas que ajustan múltiples parámetros simultáneamente.

La combinación de ambas características te permite crear bloques que antes requerirían docenas de definiciones separadas. Un solo bloque de puerta puede ahora representar todas las variaciones de ancho, material, tipo de apertura y configuraciones especiales que tu proyecto requiera.

En la próxima lección profundizaremos en el Block Editor Avanzado, explorando técnicas como constraints, chain actions, parameter sets y block properties tables que llevarán tus bloques dinámicos a un nivel de sofisticación profesional. Estas herramientas avanzadas te permitirán crear bloques que se comportan como verdaderas aplicaciones inteligentes dentro de AutoCAD.

## Resumen de Conceptos Clave

- Visibility States permiten múltiples representaciones visuales en un bloque
- Visibility Parameter crea un grip con menú de estados
- Visibility States Manager gestiona creación y organización de estados
- Visibility Mode facilita configuración de visibilidad por estado
- Lookup Tables relacionan opciones con valores de múltiples parámetros
- Lookup Parameter crea listas desplegables de opciones predefinidas
- Property Lookup Table define input/output properties y opciones
- Combinar Visibility States con Lookup Tables maximiza flexibilidad
- Un bloque bien diseñado puede reemplazar decenas de bloques estáticos
- Nomenclatura clara y testing exhaustivo son fundamentales para éxito
