# Ejercicios Prácticos - Módulo 1: Bloques y Atributos Avanzados

## Instrucciones Generales

Los siguientes ejercicios están diseñados para aplicar todos los conceptos aprendidos en el Módulo 1. Cada ejercicio debe completarse en el orden presentado, ya que algunos ejercicios construyen sobre los anteriores. Guarda tus archivos con nomenclatura clara y organiza tu carpeta de trabajo.

**Estructura de carpeta recomendada:**
```
AutoCAD_Intermedio_M1/
├── Ejercicio_01_Mesa_Dinamica/
├── Ejercicio_02_Silla_Visibilidad/
├── Ejercicio_03_Puerta_Avanzada/
├── Ejercicio_04_Equipo_Atributos/
├── Ejercicio_05_Schedule_Mobiliario/
├── Ejercicio_06_Biblioteca_Paletas/
└── Proyecto_Integrador/
```

**Criterios de evaluación:**
- Funcionalidad correcta (50%)
- Organización y nomenclatura (20%)
- Uso de mejores prácticas (20%)
- Testing y validación (10%)

---

## Ejercicio 1: Mesa de Conferencias Dinámica

**Objetivos:**
- Crear bloque dinámico con parámetros Linear
- Implementar Stretch Actions
- Configurar Value Sets para dimensiones estándar
- Probar grips y comportamiento

**Especificaciones:**

Crea un bloque dinámico de mesa de conferencias rectangular con las siguientes características:

**Geometría base:**
- Rectángulo que representa el tablero de la mesa
- Dimensiones iniciales: 2400mm x 1200mm
- Espesor de borde: 20mm (líneas internas)
- Patas en las cuatro esquinas (círculos de 50mm de diámetro)

**Parámetros y acciones:**

1. **Ancho de mesa (Linear Parameter + Stretch Action):**
   - Parámetro horizontal controlando ancho
   - Stretch action que estira tablero manteniendo patas en esquinas
   - Value Set tipo List: 1800, 2000, 2400, 2800, 3200, 4000 (mm)
   - Grips visibles en ambos extremos

2. **Largo de mesa (Linear Parameter + Stretch Action):**
   - Parámetro vertical controlando largo
   - Stretch action independiente del ancho
   - Value Set tipo List: 800, 1000, 1200, 1400, 1600 (mm)
   - Grip visible en centro del lado

3. **Optimización:**
   - Base point en esquina inferior izquierda
   - Lock position para consistencia
   - Grips con tooltips descriptivos ("Ancho Mesa", "Largo Mesa")

**Entregables:**
- Archivo: `Mesa_Conferencias_Dinamica.dwg`
- El bloque debe estar guardado dentro del archivo
- Inserta 3 instancias con diferentes combinaciones de dimensiones
- Screenshot mostrando grips y un caso de uso

**Prueba de validación:**
1. Inserta el bloque
2. Arrastra grip de ancho: debe estirar horizontalmente sin distorsionar patas
3. Arrastra grip de largo: debe estirar verticalmente
4. Verifica que solo acepta valores de la lista (debe snapear a dimensiones estándar)

---

## Ejercicio 2: Silla de Oficina con Visibility States

**Objetivos:**
- Implementar Visibility States
- Crear múltiples representaciones visuales
- Combinar con parámetros de rotación
- Configurar Visibility Parameter

**Especificaciones:**

Crea un bloque dinámico de silla de oficina que puede mostrar tres vistas diferentes:

**Vista 1: Planta (default)**
- Círculo de 450mm diámetro (asiento)
- Pequeño rectángulo indicando respaldo (100x50mm)
- Cinco líneas radiales representando base de 5 patas

**Vista 2: Frontal**
- Rectángulo de asiento (450x400mm)
- Respaldo vertical (450x600mm)
- Pata central (línea vertical)
- Ruedas (pequeños círculos en base)

**Vista 3: Lateral**
- Perfil de asiento (rectángulo 400x450mm)
- Perfil de respaldo inclinado
- Pata y mecanismo de altura (geometría simplificada)

**Parámetros:**

1. **Visibility Parameter:**
   - Tres estados: "Planta", "Frontal", "Lateral"
   - Grip de visibilidad en esquina superior derecha
   - Cada estado muestra solo geometría correspondiente

2. **Rotation Parameter (opcional):**
   - Solo activo en Vista Planta
   - Permite rotar orientación de la silla
   - Incrementos de 45°

**Organización:**
- Todos los elementos de cada vista en la misma posición base
- Visibility States configurados correctamente
- Transición suave entre vistas (sin saltos de posición)

**Entregables:**
- Archivo: `Silla_Oficina_Vistas.dwg`
- Inserta 6 instancias: 2 de cada vista
- Screenshot mostrando cambio entre vistas
- Breve descripción de uso (en MTEXT en el dibujo)

**Prueba de validación:**
1. Selecciona bloque insertado
2. Click en grip de visibilidad
3. Menú debe mostrar tres opciones claras
4. Cambiar a cada vista y verificar geometría correcta
5. En vista Planta, rotar con grip de rotación

---

## Ejercicio 3: Puerta Avanzada con Constraints y Lookup Table

**Objetivos:**
- Aplicar constraints geométricos y dimensionales
- Crear Lookup Table con configuraciones predefinidas
- Implementar Flip Parameter
- Combinar múltiples características dinámicas

**Especificaciones:**

Crea un bloque dinámico profesional de puerta con las siguientes características:

**Geometría base:**
- Marco de puerta (rectángulo exterior)
- Hoja de puerta (rectángulo interior, offset 20mm del marco)
- Arco de apertura de 90° (indica swing)
- Línea de bisagra

**Constraints:**
1. Marco y hoja paralelos (BCPARALLEL)
2. Marco y hoja perpendiculares en esquinas (BCPERPENDICULAR)
3. Hoja centrada en marco (BCCONCENTRIC o dimensional constraints)
4. Ancho de hoja = Ancho de marco - 40mm (expresión dimensional)
5. Alto de hoja = Alto de marco - 40mm (expresión dimensional)

**Parámetros dinámicos:**

1. **Flip Parameter Horizontal:**
   - Controla dirección de apertura (izquierda/derecha)
   - Flip Action en hoja, arco y bisagra

2. **Flip Parameter Vertical:**
   - Controla si puerta abre hacia adentro o afuera
   - Flip Action en arco de apertura

3. **Linear Parameters con constraints:**
   - Ancho de marco (d1): Controla ancho total
   - Alto de marco (d2): Controla alto total
   - Las constraints automáticamente ajustan la hoja

**Lookup Table:**

Configuraciones predefinidas:

| Configuración        | Ancho (mm) | Alto (mm) | Flip H | Flip V |
|---------------------|-----------|----------|--------|--------|
| Puerta Simple 80    | 800       | 2100     | No     | No     |
| Puerta Simple 90    | 900       | 2100     | No     | No     |
| Puerta Simple 100   | 1000      | 2100     | No     | No     |
| Puerta Doble 160    | 1600      | 2100     | No     | No     |

**Entregables:**
- Archivo: `Puerta_Profesional.dwg`
- Inserta 5 instancias:
  - 1 de cada configuración de Lookup Table
  - 1 personalizada (editando parámetros manualmente)
- Screenshot del Block Editor mostrando constraints
- Screenshot de Property Lookup Table configurada

**Prueba de validación:**
1. Selecciona bloque insertado
2. Usa Lookup Parameter para seleccionar "Puerta Simple 90"
3. Verifica que ancho y alto cambian automáticamente
4. Usa Flip grips para cambiar dirección
5. Verifica que constraints mantienen relación marco-hoja

---

## Ejercicio 4: Bloque de Equipo Eléctrico con Atributos Completos

**Objetivos:**
- Definir múltiples atributos con diferentes modos
- Usar Block Attribute Manager (BATTMAN)
- Configurar atributos invisible y preset
- Preparar bloque para Data Extraction

**Especificaciones:**

Crea un bloque de equipo eléctrico (motor, transformador, o panel) con sistema completo de atributos:

**Geometría:**
- Rectángulo representando equipo (dimensiones a elección)
- Símbolo interno indicando tipo de equipo
- Espacio reservado para texto de atributos

**Atributos requeridos (8 total):**

1. **CODIGO** (Visible)
   - Tag: CODIGO
   - Prompt: "Código de identificación del equipo:"
   - Default: EQ-001
   - Modo: Normal (ninguno)
   - Altura texto: 50mm

2. **DESCRIPCION** (Visible, Multi-línea)
   - Tag: DESCRIPCION
   - Prompt: "Descripción detallada:"
   - Default: Motor trifásico
   - Modo: Multiple lines activado
   - Altura texto: 35mm

3. **POTENCIA** (Visible)
   - Tag: POTENCIA
   - Prompt: "Potencia nominal (kW):"
   - Default: 5.5
   - Modo: Verify (crítico)
   - Altura texto: 40mm

4. **VOLTAJE** (Visible)
   - Tag: VOLTAJE
   - Prompt: "Voltaje nominal (V):"
   - Default: 220
   - Modo: Verify (crítico)
   - Altura texto: 40mm

5. **FABRICANTE** (Visible)
   - Tag: FABRICANTE
   - Prompt: "Fabricante del equipo:"
   - Default: ACME Industrial
   - Modo: Preset (usa default sin preguntar)
   - Altura texto: 30mm

6. **MODELO** (Visible)
   - Tag: MODELO
   - Prompt: "Número de modelo:"
   - Default: (vacío)
   - Modo: Normal
   - Altura texto: 30mm

7. **NUM_SERIE** (Invisible)
   - Tag: NUM_SERIE
   - Prompt: "Número de serie:"
   - Default: (vacío)
   - Modo: Invisible
   - Altura texto: 25mm

8. **PRECIO_UNIT** (Invisible)
   - Tag: PRECIO_UNIT
   - Prompt: "Precio unitario (USD):"
   - Default: 0.00
   - Modo: Invisible
   - Altura texto: 25mm

**Organización de atributos:**
- Alineados verticalmente debajo del símbolo
- Orden lógico: CODIGO, DESCRIPCION, POTENCIA, VOLTAJE, FABRICANTE, MODELO
- Lock position activado en todos
- Justificación: Left

**Entregables:**
- Archivo: `Equipo_Electrico_Atributos.dwg`
- Inserta 4 instancias con datos diferentes:
  1. Motor 5.5kW, 220V
  2. Motor 15kW, 440V
  3. Transformador 25kVA, 220/110V
  4. Panel de distribución 100A, 220V
- Screenshot de Enhanced Attribute Editor mostrando todos los atributos
- Screenshot de BATTMAN mostrando lista de atributos

**Prueba de validación:**
1. Comando INSERT para insertar nuevo equipo
2. Verificar que solicita valores en orden correcto
3. Verificar que FABRICANTE no pregunta (preset)
4. Verificar que POTENCIA y VOLTAJE piden verificación
5. Doble-click en bloque insertado: ATTEDI T debe mostrar todos los atributos
6. NUM_SERIE y PRECIO_UNIT no deben ser visibles en dibujo

---

## Ejercicio 5: Schedule de Mobiliario con Data Extraction

**Objetivos:**
- Ejecutar Data Extraction completo
- Configurar refinamiento de datos
- Generar tabla en AutoCAD y archivo Excel
- Crear plantilla .dxe reutilizable

**Especificaciones:**

Usando los bloques de mesa y silla creados en ejercicios anteriores (o bloques de mobiliario proporcionados), crea un schedule completo.

**Preparación:**
1. Crea archivo nuevo: `Planta_Oficina.dwg`
2. Dibuja layout simple de oficina (rectángulos representando espacios)
3. Inserta múltiples instancias de bloques de mobiliario:
   - 8 Mesas de diferentes tamaños
   - 24 Sillas
   - Agrega atributos a estos bloques si no los tienen:
     - CODIGO (ej: MES-01, SIL-A)
     - DESCRIPCION
     - FABRICANTE
     - MODELO
     - PRECIO_UNIT (invisible)

**Data Extraction:**

1. **Configuración de extracción:**
   - Fuente: Current drawing
   - Objetos: Solo bloques de mobiliario (excluir otros bloques)
   - Propiedades:
     - Count
     - Name (nombre del bloque)
     - CODIGO
     - DESCRIPCION
     - FABRICANTE
     - MODELO
     - PRECIO_UNIT

2. **Refinamiento:**
   - Combinar filas idénticas (consolidar repeticiones)
   - Ordenar por CODIGO
   - Renombrar columnas:
     - Count → Cantidad
     - Name → Tipo
     - CODIGO → Código
     - Etc. (nombres en español y profesionales)
   - Agregar columna calculada:
     - Nombre: "Precio Total"
     - Fórmula: `PRECIO_UNIT * Cantidad`

3. **Salida:**
   - Tabla en dibujo (en layout dedicado "SCHEDULES")
   - Archivo Excel: `Schedule_Mobiliario.xlsx`
   - Guardar template: `Schedule_Mobiliario_Template.dxe`

4. **Formato de tabla:**
   - Título: "SCHEDULE DE MOBILIARIO - OFICINAS PISO 3"
   - Table style: Standard o personalizado
   - Altura título: 5.0mm
   - Altura datos: 2.5mm

**Entregables:**
- Archivo: `Planta_Oficina.dwg` (con bloques insertados y tabla de schedule)
- Archivo: `Schedule_Mobiliario.xlsx` (generado por Data Extraction)
- Archivo: `Schedule_Mobiliario_Template.dxe` (template)
- Screenshot de tabla insertada en layout
- Screenshot de archivo Excel abierto

**Prueba de validación:**
1. Después de crear schedule, agrega 2 mesas más a la planta
2. Click derecho en tabla > Update Table Data Links
3. Verifica que cantidad de mesas aumenta automáticamente
4. Verifica que Precio Total se recalcula correctamente

---

## Ejercicio 6: Biblioteca de Bloques con Tool Palettes

**Objetivos:**
- Organizar bloques en Tool Palettes
- Configurar propiedades de herramientas
- Crear grupos de paletas
- Exportar paletas para compartir

**Especificaciones:**

Organiza todos los bloques creados en ejercicios anteriores en una biblioteca estructurada de Tool Palettes.

**Paletas a crear:**

1. **Paleta "Mobiliario":**
   - Mesa de conferencias dinámica
   - Silla de oficina con vistas
   - (Opcionalmente otros bloques de mobiliario)
   - Configurar propiedades:
     - Layer: MOBILIARIO
     - Color: ByLayer
     - Scale: 1.0

2. **Paleta "Puertas y Ventanas":**
   - Puerta profesional dinámica
   - (Opcionalmente crear ventana simple)
   - Configurar propiedades:
     - Layer: ABERTURAS
     - Color: ByLayer

3. **Paleta "Equipos":**
   - Equipo eléctrico con atributos
   - (Opcionalmente otros equipos)
   - Configurar propiedades:
     - Layer: EQUIPOS
     - Color: Red (para destacar)

**Organización:**
- Agregar iconos/previews claros a cada herramienta
- Renombrar herramientas con nombres descriptivos
- Ordenar herramientas por frecuencia de uso

**Grupo de paletas:**
- Crear grupo: "Oficinas 2026"
- Incluir las tres paletas creadas
- Configurar como grupo activo

**Propiedades personalizadas (en cada herramienta):**
- Click derecho > Properties
- Agregar descripción en tooltip
- Configurar Scale adecuado si es necesario

**Exportación:**
- Exportar cada paleta individualmente (.xtp)
- Carpeta de destino: `AutoCAD_Intermedio_M1/Ejercicio_06_Biblioteca_Paletas/Export/`

**Entregables:**
- Archivos: `Mobiliario.xtp`, `Puertas_Ventanas.xtp`, `Equipos.xtp`
- Screenshot de Tool Palettes mostrando las tres paletas
- Screenshot de propiedades de al menos una herramienta configurada
- Archivo de texto: `Instrucciones_Importacion.txt` explicando cómo importar las paletas

**Prueba de validación:**
1. Cierra AutoCAD
2. Elimina paletas personalizadas (resetear a default)
3. Reabre AutoCAD
4. Importa las paletas exportadas
5. Verifica que todas las herramientas funcionan
6. Verifica que propiedades (layer, color) se aplican al insertar

---

## Proyecto Integrador: Sistema Completo de Bloques para Oficina

**Objetivos:**
- Integrar todos los conceptos del módulo
- Crear sistema completo de bloques dinámicos con atributos
- Generar documentación automática
- Entregar biblioteca organizada y lista para producción

**Descripción del proyecto:**

Diseñarás un sistema completo de bloques para diseño de oficinas, incluyendo bloques dinámicos, atributos, extracción de datos, y Tool Palettes profesionales.

**Componentes requeridos:**

### Parte 1: Bloques Dinámicos (5 bloques mínimo)

1. **Estación de Trabajo Modular:**
   - Linear parameters para ancho (1200-1800mm) y profundidad (600-800mm)
   - Visibility States: Con pantalla monitor / Sin pantalla
   - Lookup Table: Configuraciones estándar (Individual, Doble, Gerencial)
   - Atributos: CODIGO, TIPO, USUARIO_ASIGNADO

2. **Sala de Reuniones:**
   - Mesa central dinámica (según cantidad de personas: 4, 6, 8, 10)
   - Sillas automáticas (Array Action basado en tamaño de mesa)
   - Visibility State: Con proyector / Sin proyector
   - Atributos: CODIGO_SALA, CAPACIDAD, EQUIPAMIENTO

3. **Divisiones/Mamparas:**
   - Linear parameter para longitud (modular en incrementos de 1000mm)
   - Flip parameter para orientación
   - Visibility States: Altura completa / Media altura / Con vidrio
   - Atributos: TIPO_MAMPARA, LONGITUD_TOTAL, MATERIAL

4. **Punto de Red/Eléctrico:**
   - Símbolo técnico con Visibility States (Red / Eléctrico / Ambos)
   - Rotation parameter con incrementos de 90°
   - Atributos: TIPO, CIRCUITO, IP_ASIGNADO (para red), VOLTAJE (para eléctrico)

5. **Zona de Almacenamiento:**
   - Archiveros/Gabinetes con dimensiones dinámicas
   - Visibility States: Tipo de mobiliario (Archivero vertical / Horizontal / Estantería)
   - Atributos: CODIGO, TIPO, CAPACIDAD_CARPETAS, USUARIO

### Parte 2: Plano de Oficina Completo

1. **Crea plano de oficina corporativa:**
   - Área mínima: 200 m²
   - Incluir:
     - 12-15 estaciones de trabajo
     - 2 salas de reuniones (diferentes capacidades)
     - Área de recepción
     - Zona de almacenamiento
     - Puntos de red y eléctricos
   - Usar layers organizados: MUROS, MOBILIARIO, EQUIPOS, INSTALACIONES

2. **Todos los elementos deben ser bloques con atributos completos**

### Parte 3: Documentación Automática (Data Extraction)

Genera los siguientes schedules:

1. **Schedule de Estaciones de Trabajo:**
   - Columnas: Código, Tipo, Dimensiones, Usuario Asignado, Cantidad
   - Ordenado por Código
   - Incluir total de estaciones

2. **Schedule de Salas de Reuniones:**
   - Columnas: Código Sala, Capacidad, Equipamiento, Cantidad
   - Incluir área calculada si es posible

3. **Lista de Puntos de Instalaciones:**
   - Columnas: Tipo (Red/Eléctrico), Circuito/IP, Ubicación (coordenadas), Cantidad
   - Separado por tipo

4. **Inventario de Mobiliario:**
   - Consolidado de todos los elementos
   - Columnas: Tipo, Código, Descripción, Cantidad, Precio Unitario, Precio Total
   - Total general al final

### Parte 4: Tool Palettes Profesionales

1. **Crea conjunto de paletas organizadas:**
   - "Estaciones de Trabajo"
   - "Salas y Reuniones"
   - "Instalaciones"
   - "Almacenamiento"
   - "Símbolos y Anotación"

2. **Configura propiedades de inserción:**
   - Layers apropiados por categoría
   - Escalas correctas
   - Tooltips descriptivos

3. **Crea grupo de paletas "Oficinas Corporativas 2026"**

4. **Exporta para distribución**

### Parte 5: Documentación del Sistema

1. **Manual de Usuario (PDF o documento de texto):**
   - Descripción de cada bloque
   - Instrucciones de uso de parámetros dinámicos
   - Guía de atributos (qué Tag significa qué)
   - Cómo actualizar schedules

2. **Catálogo de Bloques:**
   - Imagen/preview de cada bloque
   - Nombre y código
   - Atributos incluidos
   - Ubicación en Tool Palettes

3. **Estándares y Convenciones:**
   - Nomenclatura de códigos
   - Layers utilizados
   - Escalas de impresión
   - Formato de atributos

### Entregables del Proyecto Integrador

**Archivos DWG:**
- Todos los bloques individuales (archivos fuente)
- `Oficina_Corporativa_Planta.dwg` (plano completo con bloques insertados)

**Layouts:**
- Layout "PLANTA" con el diseño completo
- Layout "SCHEDULES" con todas las tablas de extracción

**Data Extraction:**
- Archivos Excel de cada schedule
- Templates .dxe de cada extracción

**Tool Palettes:**
- Archivos .xtp de cada paleta
- Instrucciones de importación

**Documentación:**
- Manual_Usuario_Sistema_Oficinas.pdf (o .docx)
- Catalogo_Bloques.pdf (con imágenes)
- Estandares_Convencion es.txt

**Presentación:**
- Screenshots clave mostrando:
  - Bloques dinámicos con grips activos
  - Visibility States en acción
  - Tablas de schedules actualizadas
  - Tool Palettes organizadas

### Criterios de Evaluación del Proyecto Integrador

**Funcionalidad de Bloques (30%):**
- Todos los parámetros dinámicos funcionan correctamente
- Atributos completos y consistentes
- No hay errores o comportamientos inesperados

**Calidad del Diseño (20%):**
- Plano de oficina lógico y funcional
- Distribución eficiente de espacios
- Uso apropiado de layers y organización

**Extracción de Datos (20%):**
- Schedules completos y precisos
- Formato profesional de tablas
- Actualización funcional

**Organización y Documentación (20%):**
- Tool Palettes bien estructuradas
- Manual de usuario claro y completo
- Nomenclatura consistente en todos los archivos

**Profesionalismo (10%):**
- Presentación general
- Atención al detalle
- Aplicación de mejores prácticas aprendidas

---

## Notas Finales

**Tiempo estimado:**
- Ejercicios 1-6: 6-8 horas total (1-1.5 horas cada uno)
- Proyecto Integrador: 8-12 horas

**Recursos de apoyo:**
- Revisa las lecciones del módulo según necesites
- Usa Help de AutoCAD (F1) para comandos específicos
- Experimenta y prueba diferentes configuraciones

**Consejos:**
- Guarda frecuentemente
- Usa Test Block extensivamente antes de finalizar bloques
- Prueba Data Extraction varias veces hasta dominar el workflow
- Documenta tus decisiones de diseño

**Entrega:**
- Comprime toda la carpeta `AutoCAD_Intermedio_M1/` en archivo ZIP
- Nomenclatura: `Apellido_Nombre_M1_Bloques.zip`
- Incluye archivo `README.txt` con notas sobre tu entrega

¡Éxito en tus ejercicios! Estos proyectos formarán la base de tu biblioteca personal de bloques profesionales.
