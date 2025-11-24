# Lección 5: Data Extraction de Atributos

## Introducción

La verdadera potencia de los atributos en bloques se revela cuando extraes esa información para generar reportes, tablas y listas automáticas. Data Extraction (Extracción de Datos) es el proceso mediante el cual AutoCAD recorre el dibujo, identifica bloques con atributos, recopila los valores, y genera salidas en formato de tabla dentro de AutoCAD, archivo Excel, base de datos, o archivos de texto. Esta capacidad transforma AutoCAD de una herramienta de dibujo en un sistema integrado de diseño y documentación.

Imagina actualizar un plano arquitectónico modificando puertas y ventanas, y que automáticamente las tablas de schedules se actualicen reflejando los cambios. O generar listas de materiales completas con cantidades, especificaciones y costos extraídos directamente de los bloques insertados. Data Extraction elimina el trabajo manual de contar elementos y transcribir especificaciones, reduciendo errores y garantizando que la documentación siempre esté sincronizada con el diseño. En esta lección dominarás el Data Extraction Wizard y crearás sistemas de reportes automáticos profesionales.

## Fundamentos de Data Extraction

### ¿Qué Datos se Pueden Extraer?

AutoCAD puede extraer dos tipos principales de datos:

**1. Block Properties (Propiedades de Bloque):**
- Name (nombre del bloque)
- Layer (capa)
- Color, Linetype, Lineweight
- Position (coordenadas X, Y, Z)
- Rotation (ángulo de rotación)
- Scale (escalas X, Y, Z)
- Count (cantidad de instancias)

**2. Attribute Values (Valores de Atributos):**
- Todos los atributos definidos en el bloque
- Tags y sus valores correspondientes
- Tanto atributos visibles como invisibles

**3. Drawing Properties:**
- Nombre de archivo
- Ruta del archivo
- Autor, título, subject (de Drawing Properties)
- Fecha de creación/modificación

### Aplicaciones Comunes

**Arquitectura:**
- Schedule de puertas (ancho, altura, material, fabricante)
- Schedule de ventanas (dimensiones, tipo de vidrio, herrajes)
- Lista de acabados (pisos, muros, cielorrasos por ambiente)
- Inventario de mobiliario (cantidad, modelo, costo)

**Ingeniería Eléctrica:**
- Lista de equipos (voltaje, amperaje, modelo, ubicación)
- Cuadro de cargas (circuitos, potencia, protecciones)
- Inventario de luminarias (tipo, cantidad por zona, potencia)

**Ingeniería Mecánica:**
- Bill of Materials (BOM) completo
- Lista de tuberías (diámetro, longitud, material)
- Inventario de válvulas (tipo, tamaño, presión nominal)

**General:**
- Conteo de símbolos (cantidad de cada tipo)
- Listados para presupuestos (items con cantidades y precios)
- Reportes de cumplimiento normativo

## Data Extraction Wizard

### Iniciando el Wizard

**Acceso:**
- Comando: `DATAEXTRACTION` (o `EATTEXT`)
- Ribbon: Insert tab > Linking & Extraction panel > Extract Data
- Application Menu > Drawing Utilities > Extract Data

El Data Extraction Wizard guía el proceso en 8 páginas secuenciales.

![Data Extraction Wizard Start](../imagenes/leccion-5-dataextraction-wizard.png)

### Página 1: Begin (Inicio)

**Dos opciones:**

**Create a new data extraction:**
- Empezar proceso desde cero
- Seleccionarás dibujo(s), objetos, propiedades, formato de salida

**Use previous extraction as a template:**
- Reutiliza configuración de extracción previa
- Útil para reportes recurrentes
- Selecciona archivo .dxe existente como plantilla

**Recomendación:** Primera vez usa "Create new", luego guarda como plantilla para futuros usos.

**Next** para continuar.

### Página 2: Define Data Source (Definir Fuente de Datos)

Selecciona de dónde extraer datos:

**Drawings/Sheet set:**
- **Current drawing:** Solo el dibujo actual
- **Select objects in the current drawing:** Subset de objetos seleccionados manualmente
- **Drawings/Sheet set:** Múltiples archivos DWG o un Sheet Set completo

**Settings button:**
Opciones avanzadas:
- **Include xrefs:** Incluir bloques en referencias externas
- **Include nested blocks:** Incluir bloques anidados
- **Extract from blocks in model space only:** Solo Model Space (no layouts)

**Ejemplo: Schedule de puertas de todo un proyecto**
- Select "Drawings/Sheet set"
- Add Folder: Selecciona carpeta del proyecto
- Todos los DWG se agregan a la lista

**Next** para continuar.

### Página 3: Select Objects (Seleccionar Objetos)

Lista de todos los objetos disponibles para extracción.

**Interfaz:**
- Lista de tipos de objetos encontrados
- Checkbox para incluir/excluir cada tipo
- **Display options:**
  - Display all object types
  - Display blocks only
  - Display non-blocks only
  - Display blocks with attributes only (más útil)

**Columnas:**
- **Display Name:** Nombre del objeto/bloque
- **Type:** Block Reference, Circle, Line, etc.
- **Count:** Cantidad de instancias encontradas

**Filtrado:**
- Desmarca objetos que no necesitas extraer
- Para schedules, típicamente solo seleccionas bloques específicos
- Usa "Display blocks with attributes only" para reducir lista

**Ejemplo: Solo puertas**
1. Display: "Display blocks with attributes only"
2. Desmarca todos (botón en header)
3. Marca solo: PUERTA, PUERTA_DOBLE, PUERTA_CORREDIZA

**Next** para continuar.

### Página 4: Select Properties (Seleccionar Propiedades)

Define qué información extraer de los objetos seleccionados.

**Interfaz:**
- Lista de propiedades disponibles
- Checkboxes para incluir/excluir
- Organizadas en categorías expandibles

**Categorías principales:**

**General:**
- Count (cantidad)
- Layer
- Color, Linetype, Lineweight

**Geometry:**
- Position X, Y, Z
- Rotation
- Normal (vector normal)

**Attribute:**
- Un item por cada Tag de atributo encontrado
- Nombres corresponden a Tags (ANCHO, ALTO, MATERIAL, etc.)

**Drawing:**
- Drawing Name
- Path (ruta del archivo)
- Author, Title, Subject

**Ejemplo: Schedule de puertas**
Selecciona:
- Count (para saber cuántas puertas hay)
- Name (nombre del bloque)
- ANCHO (atributo)
- ALTO (atributo)
- MATERIAL (atributo)
- FABRICANTE (atributo)
- Drawing Name (para reporte multi-archivo)

**Category filter:**
- Usa filtros para mostrar solo categorías relevantes
- Simplifica selección cuando hay muchas propiedades

**Botones:**
- **Check All / Uncheck All:** Marcar/desmarcar todas
- **Refresh:** Actualizar lista si archivos cambiaron

**Next** para continuar.

### Página 5: Refine Data (Refinar Datos)

Aquí visualizas los datos extraídos y puedes refinarlos.

**Vista de tabla:**
- Filas: Una por cada instancia de objeto
- Columnas: Propiedades seleccionadas
- Datos actualizados en tiempo real

**Operaciones disponibles:**

**Sort columns:**
- Click en header de columna para ordenar ascendente/descendente
- Útil para agrupar elementos similares

**Combine identical rows:**
- **Checkbox crítico:** "Combine identical rows"
- Agrupa filas con valores idénticos
- Suma Count automáticamente
- Esencial para schedules (consolidar repeticiones)

**Ejemplo:**
```
Sin combinar:
PUERTA, 900, 2100, Madera, Count=1
PUERTA, 900, 2100, Madera, Count=1
PUERTA, 800, 2100, Madera, Count=1

Con combinar:
PUERTA, 900, 2100, Madera, Count=2
PUERTA, 800, 2100, Madera, Count=1
```

**Link External Data:**
- Vincula datos externos de Excel o Access
- Agrega columnas de precios, proveedores, etc.
- Avanzado: requiere campos de coincidencia (keys)

**Full Preview button:**
- Muestra vista previa completa en ventana separada
- Útil para verificar antes de exportar

**Column actions (botones a la derecha):**
- **Rename column:** Cambiar nombre de columna (ej: "ANCHO" → "Ancho (mm)")
- **Hide column:** Ocultar sin eliminar
- **Sort column:** Ordenar por esta columna
- **Combine identical:** Ya mencionado
- **Filter:** Filtrar filas por criterios
- **Add formula column:** Agregar columna calculada

**Fórmulas calculadas:**
- Click derecho en header > Insert Formula Column
- Operaciones: SUM, COUNT, AVG, MIN, MAX
- Ejemplo: Columna "Área Total" = ANCHO * ALTO

**Next** para continuar.

![Refine Data Page](../imagenes/leccion-5-refine-data.png)

### Página 6: Choose Output (Elegir Salida)

Define formato de salida para los datos extraídos.

**Opciones:**

**Insert data extraction table into drawing:**
- Crea tabla de AutoCAD en el dibujo actual
- Tabla nativa que se puede editar con comandos de tabla
- Vinculada a extracción (se puede actualizar)

**Output data to external file:**
- **Excel (XLS/XLSX):** Archivo de Microsoft Excel
- **CSV (Comma Separated):** Archivo de texto separado por comas
- **MDB (Access Database):** Base de datos de Microsoft Access
- **TXT (Tab Separated):** Archivo de texto separado por tabs

**Puedes marcar ambas opciones:**
- Tabla en dibujo + archivo Excel
- Útil para documentación interna y procesamiento externo

**Ejemplo típico:**
- Marcar ambas opciones
- Tabla en layout para impresión
- Excel para análisis adicional o presupuestos

**Next** para continuar.

### Página 7: Table Style (Estilo de Tabla)

Solo aparece si elegiste insertar tabla en dibujo.

**Opciones:**

**Use table in drawing as starting point:**
- Copia formato de tabla existente en el dibujo
- Click en botón para seleccionar tabla de ejemplo

**Manually setup table:**
- Table style: Selecciona estilo de tabla predefinido
- Title text: Título de la tabla (ej: "SCHEDULE DE PUERTAS")
- Data text: Altura de texto de datos

**Formatting:**
- **Use property names as column headers:** Usa tags como headers
- **Merge cells on row creation:** Fusiona celdas idénticas

**Ejemplo:**
```
Title: SCHEDULE DE PUERTAS - PLANTA PRIMER NIVEL
Table style: Standard
Title height: 5.0
Data height: 2.5
```

**Next** para continuar.

### Página 8: Finish (Finalizar)

Página de resumen y finalización.

**Información mostrada:**
- Cantidad de objetos extraídos
- Propiedades incluidas
- Formato de salida seleccionado

**Save data extraction template:**
- **Crítico:** Nombre de archivo .dxe para guardar configuración
- Ubicación: Junto con el archivo DWG o en carpeta de templates
- Permite reutilizar configuración exacta en futuros updates

**Ejemplo de naming:**
```
Schedule_Puertas_2026.dxe
BOM_Equipos_Electricos.dxe
Inventario_Mobiliario.dxe
```

**Finish button:**
- Ejecuta la extracción
- Si elegiste tabla en dibujo: AutoCAD solicita punto de inserción
- Si elegiste archivo externo: Se guarda en ubicación especificada

**Insertar tabla:**
1. Click Finish
2. Command line: "Specify insertion point:"
3. Click en ubicación deseada (típicamente en layout)
4. Tabla se inserta con todos los datos

![Tabla Extraída Insertada](../imagenes/leccion-5-tabla-insertada.png)

## Trabajando con Tablas de Data Extraction

### Propiedades de la Tabla Extraída

Las tablas insertadas mediante Data Extraction tienen propiedades especiales:

**Vínculo a fuente de datos:**
- La tabla está vinculada al archivo .dxe
- Cambios en bloques pueden reflejarse actualizando la tabla
- Icono de notificación aparece cuando datos cambiaron

**Actualización:**
- Click derecho en tabla > Update Table Data Links
- O: Data Extraction panel > Update Data
- AutoCAD re-ejecuta extracción y actualiza valores

**Edición:**
- Celdas de datos son read-only (no editables manualmente)
- Títulos y headers sí son editables
- Formato de celdas (color, texto, bordes) es editable

### Modificando Data Extraction Existente

**Editar configuración de extracción:**
1. Comando: `DATAEXTRACTION`
2. Opción: "Edit an existing data extraction"
3. Selecciona archivo .dxe
4. Wizard se abre con configuración actual
5. Modifica páginas necesarias
6. Finish para guardar cambios
7. Tablas vinculadas se actualizan automáticamente

**Ejemplo: Agregar columna de precio**
1. Edit existing extraction
2. Página 4: Marcar atributo PRECIO
3. Finish
4. Tabla se actualiza mostrando nueva columna

### Data Links con Excel

Data Extraction puede generar archivos Excel que luego se vinculan de regreso a AutoCAD como Data Links.

**Ventaja:** Edición bidireccional
- Modificas en Excel → Se refleja en AutoCAD
- Actualizas extracción → Excel se actualiza

**Proceso:**
1. Data Extraction genera archivo Excel
2. Comando: `DATALINK`
3. Create new Data Link
4. Link to Excel file generado
5. Insert table from Data Link
6. Tabla vinculada a Excel

**Aplicación:** Presupuestos donde precios se editan en Excel pero cantidades vienen de AutoCAD.

## Plantillas de Extracción (.dxe)

### Guardando Plantillas

Los archivos .dxe almacenan toda la configuración del Data Extraction:
- Fuente de datos (qué archivos)
- Objetos seleccionados
- Propiedades a extraer
- Refinamiento (columnas, orden, fórmulas)
- Formato de salida

**Best practices:**
- Guarda plantillas en carpeta de proyecto o templates central
- Nomenclatura descriptiva
- Versiona si configuración cambia (Schedule_Puertas_v2.dxe)

### Reutilizando Plantillas

**Método 1: Use as template (en Page 1)**
1. `DATAEXTRACTION`
2. "Use previous extraction as a template"
3. Selecciona .dxe
4. Modifica solo lo necesario
5. Save as nuevo .dxe

**Método 2: Edit existing (para update)**
1. `DATAEXTRACTION`
2. "Edit an existing data extraction"
3. Modifica
4. Finish (sobrescribe .dxe)

**Método 3: From file explorer**
- Doble click en archivo .dxe abre Data Extraction Wizard

### Estandarización con Templates

Para proyectos recurrentes, crea biblioteca de templates .dxe:

```
C:\CAD_Templates\Data_Extraction\
  ├── Schedule_Puertas.dxe
  ├── Schedule_Ventanas.dxe
  ├── BOM_Electrico.dxe
  ├── Inventario_Mobiliario.dxe
  └── Listado_Luminarias.dxe
```

**Ventaja:** Consistencia en formato de reportes entre proyectos y usuarios.

## Técnicas Avanzadas

### Extracción Multi-Archivo

Para proyectos con múltiples archivos DWG:

**Página 2: Add Drawings**
1. Add Folder: Selecciona carpeta con todos los DWG del proyecto
2. O: Add Drawings: Selecciona archivos específicos
3. Include subdirectories: Si proyecto tiene subcarpetas

**Resultado:** Una tabla consolidada de todos los archivos.

**Recomendación:** Incluye columna "Drawing Name" para identificar de qué plano viene cada item.

### Filtrado de Datos

En Página 5 (Refine Data):

**Filtrar filas:**
1. Click derecho en header de columna
2. Sort Ascending/Descending
3. O: Filter > Custom Filter
4. Define criterio (Equals, Contains, Greater than, etc.)

**Ejemplo:**
```
Filtrar solo puertas de madera:
Column: MATERIAL
Criteria: Equals
Value: Madera
```

### Fórmulas en Columnas

**Agregar columna calculada:**
1. En Refine Data, click derecho en header
2. Insert Formula Column
3. Column Name: "Área Total"
4. Formula: `ANCHO * ALTO / 1000000` (si medidas en mm, resultado en m²)
5. OK

**Funciones disponibles:**
- Aritméticas: +, -, *, /
- Agregación: SUM(), COUNT(), AVG()
- Referencia a otras columnas por nombre

### Extracción de Nested Blocks

**Settings en Página 2:**
- Marca "Include nested blocks"
- Útil cuando bloques complejos contienen sub-bloques con atributos

**Ejemplo:** Bloque de oficina contiene bloques de escritorios, sillas, computadoras (cada uno con atributos).

## Ejemplo Completo: Schedule de Ventanas

Crearemos un schedule profesional de ventanas extrayendo datos de bloques.

**Preparación:**
1. Bloque VENTANA con atributos:
   - CODIGO (V-01, V-02, etc.)
   - ANCHO (mm)
   - ALTO (mm)
   - TIPO_VIDRIO (Simple, Doble, Templado)
   - FABRICANTE
2. Múltiples instancias insertadas en plano

**Proceso de extracción:**

**Paso 1: Iniciar**
1. `DATAEXTRACTION`
2. Create new data extraction
3. Next

**Paso 2: Data Source**
1. Current drawing
2. Next

**Paso 3: Select Objects**
1. Display blocks with attributes only
2. Marca solo "VENTANA"
3. Next

**Paso 4: Select Properties**
Marca:
- Count
- Name
- CODIGO
- ANCHO
- ALTO
- TIPO_VIDRIO
- FABRICANTE
4. Next

**Paso 5: Refine Data**
1. Marca "Combine identical rows"
2. Ordena por CODIGO (click en header)
3. Rename columns:
   - CODIGO → Código
   - ANCHO → Ancho (mm)
   - ALTO → Alto (mm)
   - TIPO_VIDRIO → Tipo de Vidrio
   - FABRICANTE → Fabricante
4. Insert Formula Column:
   - Name: Área (m²)
   - Formula: `ANCHO * ALTO / 1000000`
5. Next

**Paso 6: Output**
1. Marca: Insert data extraction table into drawing
2. Marca: Output data to external file → Excel (.xlsx)
3. Browse: Especifica ubicación y nombre del archivo Excel
4. Next

**Paso 7: Table Style**
1. Manually setup table
2. Title text: SCHEDULE DE VENTANAS
3. Table style: Standard
4. Next

**Paso 8: Finish**
1. Save template as: Schedule_Ventanas_2026.dxe
2. Finish
3. Specify insertion point: Click en layout
4. Tabla se inserta

**Resultado:**
```
╔═════════════════════════════════════════════════════════════╗
║            SCHEDULE DE VENTANAS                              ║
╠════════╦══════════╦═══════════╦══════════════╦═══════════╦════════╣
║ Código ║ Ancho(mm)║ Alto (mm) ║ Tipo Vidrio  ║ Fabricante║ Cant.  ║
╠════════╬══════════╬═══════════╬══════════════╬═══════════╬════════╣
║ V-01   ║ 1200     ║ 1500      ║ Doble        ║ VentaCorp ║ 4      ║
║ V-02   ║ 1000     ║ 1200      ║ Simple       ║ VentaCorp ║ 8      ║
║ V-03   ║ 800      ║ 600       ║ Templado     ║ SafeGlass ║ 2      ║
╚════════╩══════════╩═══════════╩══════════════╩═══════════╩════════╝
```

**Actualización posterior:**
1. Agregas 3 ventanas V-01 más al plano
2. Click derecho en tabla > Update Table Data Links
3. Count de V-01 cambia de 4 a 7 automáticamente

## Troubleshooting

**Problema: No aparecen atributos en lista de propiedades**
- Verifica que bloques tienen atributos definidos
- Ejecuta ATTSYNC para sincronizar
- Marca "Include nested blocks" si atributos están en sub-bloques

**Problema: Valores de atributos están vacíos**
- Atributos existen pero valores no fueron completados al insertar
- Edita instancias con ATTEDIT para agregar valores
- Verifica que no son atributos Constant sin valor

**Problema: Tabla no se actualiza después de cambios**
- Verifica que tabla está vinculada (debe tener icono de link)
- Click derecho > Update Table Data Links
- Regenera tabla si archivo .dxe fue modificado

**Problema: "Combine identical rows" no funciona**
- Asegura que valores son EXACTAMENTE idénticos (case-sensitive)
- Espacios extra causan que filas no combinen
- Estandariza entrada de datos

## Mejores Prácticas

**Estandarización:**
- Tags de atributos consistentes en todos los bloques similares
- Valores con formato uniforme (ej: siempre mm, nunca mezclar con cm)
- Nomenclatura de bloques sistemática

**Plantillas:**
- Crea biblioteca de .dxe templates para tipos de reportes comunes
- Documenta qué bloques/atributos requiere cada template
- Versiona templates cuando cambian estructuras de datos

**Organización:**
- Guarda .dxe junto con archivos de proyecto
- Incluye fecha en nombre de archivos Excel generados
- Mantén carpeta de Data Extraction organizada

**Validación:**
- Siempre revisa Full Preview antes de Finish
- Verifica totales manualmente en primeras ejecuciones
- Compara con conteos visuales para validar exactitud

**Mantenimiento:**
- Actualiza tablas antes de emitir planos
- Re-ejecuta extracción después de cambios significativos
- Mantén sincronizados Excel y tablas en dibujo

## Conclusión

Data Extraction transforma bloques con atributos en un sistema de información integrado. La capacidad de generar reportes automáticos, schedules actualizables y listas de materiales sincronizadas elimina tareas manuales propensas a errores y garantiza que la documentación siempre refleje el estado actual del diseño.

Dominar Data Extraction requiere comprender no solo el wizard, sino también cómo diseñar bloques y atributos pensando en la extracción futura. Los bloques bien estructurados con atributos consistentes y completos son la base de un sistema de reportes eficiente.

En la próxima lección exploraremos cómo organizar y gestionar bibliotecas de bloques mediante Tool Palettes, Design Center y Content Explorer, completando el ciclo de creación, documentación y reutilización de bloques inteligentes.

## Resumen de Conceptos Clave

- Data Extraction genera reportes automáticos de bloques y atributos
- Data Extraction Wizard guía proceso en 8 páginas
- Puede extraer propiedades de bloques y valores de atributos
- Salida: Tablas en AutoCAD, archivos Excel, CSV, Access
- "Combine identical rows" consolida repeticiones
- Tablas extraídas son actualizables (vinculadas a .dxe)
- Plantillas .dxe permiten reutilizar configuraciones
- Fórmulas en columnas permiten cálculos automáticos
- Extracción multi-archivo para proyectos complejos
- Estandarización de atributos crítica para extracciones exitosas
- Data Links permiten integración bidireccional con Excel
- Actualización regular mantiene sincronización entre diseño y documentación
