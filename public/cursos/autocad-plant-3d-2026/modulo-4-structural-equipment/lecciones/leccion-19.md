# Lección 19: Equipos Personalizados y Modelado Paramétrico

## Información General

**Duración estimada:** 60 minutos
**Nivel:** Intermedio-Avanzado
**Módulo:** 4 - Acero Estructural y Equipos
**Prerequisitos:** Lecciones 16-18

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Utilizar el Equipment Designer paramétrico de AutoCAD Plant 3D
2. Crear recipientes a presión (pressure vessels) verticales y horizontales
3. Modelar tanques atmosféricos y a presión según API 650 y ASME BPVC
4. Configurar cabezales (heads) de diversos tipos: elípticos, hemisféricos, planos
5. Diseñar intercambiadores de calor personalizados
6. Añadir equipos rotativos desde catálogos (bombas, compresores)
7. Convertir bloques de AutoCAD a equipos inteligentes de Plant 3D
8. Configurar parámetros geométricos y propiedades de datos
9. Gestionar bibliotecas de equipos personalizados para reutilización

## Introducción

Los equipos industriales son el corazón de cualquier planta de proceso. Recipientes a presión, tanques de almacenamiento, intercambiadores de calor, bombas, compresores y reactores definen la capacidad productiva de una instalación. En el diseño de plantas, estos equipos no son simplemente objetos estáticos: son elementos inteligentes con geometría precisa, propiedades termodinámicas, conexiones de proceso (boquillas), y requisitos estructurales específicos.

AutoCAD Plant 3D 2026 incorpora un potente sistema de modelado paramétrico de equipos que permite crear representaciones tridimensionales precisas de equipos complejos sin necesidad de modelado sólido avanzado. El Equipment Designer (diseñador de equipos) utiliza parámetros geométricos estándar de la industria para generar automáticamente formas de recipientes, cabezales, boquillas, soportes y accesorios conforme a códigos internacionales como ASME BPVC (Boiler and Pressure Vessel Code), API 650 (tanques atmosféricos), y TEMA (intercambiadores tubulares).

La industria mexicana de proceso (petróleo y gas, petroquímica, química, farmacéutica, alimentos) depende extensamente de equipos diseñados según estos estándares. Un diseñador competente debe comprender no solo cómo modelar estos equipos en 3D, sino también los fundamentos de ingeniería que determinan sus dimensiones: presión de diseño, temperatura, materiales de construcción, corrosión admisible, cargas de viento y sismo. Plant 3D facilita esta tarea proporcionando plantillas paramétricas que automatizan cálculos geométricos complejos.

El modelado paramétrico ofrece ventajas sustanciales sobre bloques CAD tradicionales: (1) actualización automática cuando cambian parámetros (si diámetro de vessel cambia, todo se ajusta), (2) extracción de propiedades para hojas de datos, (3) validación de interferencias precisa, (4) generación de listas de materiales con pesos calculados, y (5) integración directa con P&IDs (Piping & Instrumentation Diagrams) mediante tags.

En esta lección exhaustiva, exploraremos todas las capacidades del Equipment Designer de Plant 3D 2026. Aprenderá a crear recipientes verticales y horizontales con especificaciones ASME, tanques de almacenamiento API 650, intercambiadores de calor TEMA, y a incorporar equipos de catálogo como bombas y compresores. También aprenderá técnicas avanzadas como conversión de bloques existentes a equipos inteligentes, creación de bibliotecas corporativas de equipos, y gestión de propiedades personalizadas. Este conocimiento es fundamental para cualquier ingeniero de diseño que trabaje en proyectos de plantas de proceso en México o Latinoamérica.

## 1. Fundamentos del Equipment Designer

### 1.1 Concepto de Equipos Paramétricos

**Definición:**

Un equipo paramétrico es un objeto inteligente cuya geometría se define mediante parámetros (dimensiones, tipos de componentes) en lugar de geometría fija. Cambiar un parámetro actualiza automáticamente toda la geometría relacionada.

**Ejemplo conceptual:**

Recipiente vertical tradicional (bloque CAD):
- Geometría fija: cilindro 2m diámetro × 6m altura
- Para cambiar diámetro: redibujar completamente
- Propiedades: solo texto descriptivo
- Boquillas: bloques separados sin relación

Recipiente vertical paramétrico (Plant 3D):
```
Vessel Parameters:
├── Shell Diameter: 2000 mm [EDITABLE]
├── Tangent Height: 6000 mm [EDITABLE]
├── Top Head Type: Elliptical 2:1 [SELECTABLE]
├── Bottom Head Type: Elliptical 2:1 [SELECTABLE]
├── Material: SA-516 Grade 70 [SELECTABLE]
├── Design Pressure: 150 psig [EDITABLE]
└── Nozzles: [COLLECTION - MANAGED]

Cambiar "Shell Diameter" a 2500 mm:
→ Geometría del cilindro se actualiza automáticamente
→ Cabezales se redimensionan a 2500 mm diámetro
→ Altura total se recalcula
→ Peso se actualiza
→ Ubicación de boquillas se mantiene relativa a geometría
```

**Ventajas del enfoque paramétrico:**

1. **Flexibilidad de diseño:**
   - Evaluar rápidamente alternativas de dimensionamiento
   - Cambios propagados automáticamente
   - Optimización iterativa sin remodelado

2. **Consistencia:**
   - Geometría siempre conforme a estándares (ej: elipsoide 2:1 automático)
   - Relaciones geométricas mantenidas (tangent lines correctas)
   - Imposible crear geometría inválida

3. **Datos integrados:**
   - Propiedades de ingeniería embebidas (presión, temperatura, material)
   - Extracción directa a datasheets
   - Integración con P&IDs mediante tags

4. **Cálculos automáticos:**
   - Volumen de recipiente calculado automáticamente
   - Peso estimado según geometría y material
   - Cargas estructurales para diseño de soportes

### 1.2 Acceso al Equipment Designer

**Ubicación en interfaz:**

Cinta **Plant 3D** → Panel **Equipment** → Herramientas de equipo:

```
Equipment Panel:
├── Pressure Vessel (recipiente a presión)
├── Tank (tanque atmosférico)
├── Heat Exchanger (intercambiador de calor)
├── Rotating Equipment (equipos rotativos)
├── Custom Equipment (equipos personalizados)
├── Equipment Catalog (catálogo de equipos)
└── Equipment Manager (gestor de equipos)
```

**Comando directo:**

```
Comando: PLANTEQUIPMENT
Opciones:
- Vessel: crear recipiente a presión
- Tank: crear tanque
- Exchanger: crear intercambiador
- Pump: añadir bomba desde catálogo
- Compressor: añadir compresor desde catálogo
- Custom: equipo de forma arbitraria
```

**Flujo de trabajo típico:**

1. Ejecutar comando de tipo de equipo (ej: PLANTVESSEL)
2. Especificar punto de inserción y orientación
3. Cuadro de diálogo: configurar parámetros geométricos
4. Confirmar: equipo se genera automáticamente
5. Post-creación: editar propiedades según necesidad

### 1.3 Categorías de Equipos en Plant 3D

**Recipientes a Presión (Pressure Vessels):**

Equipos diseñados para contener fluidos a presión superior a atmosférica, gobernados por ASME BPVC Section VIII.

Tipos:
- Verticales: torres de destilación, reactores, separadores verticales
- Horizontales: separadores bifásicos/trifásicos, acumuladores
- Esféricos: almacenamiento de gases licuados (GLP, amoniaco)

Parámetros clave:
- Diámetro interno (ID)
- Altura tangente a tangente (T-T height)
- Tipo de cabezales (heads): elíptico, hemisférico, toriesférico, plano
- Presión y temperatura de diseño
- Material de construcción y espesor nominal

**Tanques Atmosféricos (Atmospheric Storage Tanks):**

Equipos de almacenamiento a presión atmosférica o muy baja presión, típicamente API 650 o API 620.

Tipos:
- Techo fijo (fixed roof): cono, domo, plano
- Techo flotante (floating roof): externo o interno
- Sin techo (open top): poco común, aplicaciones especiales

Parámetros clave:
- Diámetro nominal (típicamente en pies o metros)
- Altura del cuerpo cilíndrico (shell height)
- Número de cursos (shell courses)
- Tipo de techo y ángulo
- Tipo de fondo (flat, cono invertido)
- Capacidad nominal en barriles o metros cúbicos

**Intercambiadores de Calor (Heat Exchangers):**

Equipos para transferencia de calor entre fluidos, regidos por estándares TEMA.

Tipos:
- Shell & Tube (casco y tubos): más común en proceso
- Plate (placas): compactos, alta eficiencia
- Air Cooler (enfriado por aire): para condensación o enfriamiento
- Double Pipe (doble tubo): pequeña capacidad

Parámetros clave (Shell & Tube):
- Diámetro del casco (shell diameter)
- Longitud de tubos (tube length)
- Configuración TEMA (tipo de cabezales, casco, extremo posterior)
- Número de pasos (passes) en casco y tubos
- Orientación: horizontal, vertical

**Equipos Rotativos (Rotating Equipment):**

Bombas, compresores, turbinas, típicamente de catálogos de fabricantes.

Tipos:
- Bombas centrífugas: proceso, agua, químicos
- Bombas de desplazamiento positivo: gear, screw, diaphragm
- Compresores centrífugas: aire, gas
- Compresores reciprocantes: alta presión
- Turbinas: expansión de gas, generación de potencia

Parámetros clave:
- Modelo de fabricante
- Capacidad (flow rate)
- Cabeza o presión de descarga
- Potencia nominal
- Dimensiones de envolvente (envelope dimensions)
- Ubicación de boquillas de succión/descarga

### 1.4 Estructura de Datos de Equipos

Cada equipo en Plant 3D contiene múltiples categorías de datos:

**Datos Geométricos:**
- Dimensiones principales (diámetros, alturas, longitudes)
- Tipos de componentes (cabezales, soportes)
- Ubicación y orientación en modelo 3D

**Datos de Proceso:**
- Tag (identificador único): V-101, T-202, E-301
- Service (servicio): "Propane Separator", "Crude Oil Storage"
- Presión y temperatura de diseño/operación
- Fluido contenido y propiedades

**Datos de Materiales y Construcción:**
- Material de casco/shell: SA-516 Gr.70, SA-240 SS304, etc.
- Espesor nominal de pared
- Material de cabezales
- Código de diseño: ASME VIII Div 1, API 650, etc.

**Datos de Fabricante:**
- Vendor (fabricante)
- Model Number (número de modelo)
- Serial Number (número de serie)
- Año de fabricación

**Propiedades Calculadas:**
- Volumen total
- Volumen útil (working volume)
- Peso vacío (empty weight)
- Peso operando (operating weight)
- Peso de prueba hidrostática (hydro test weight)

**Datos de P&ID:**
- P&ID Drawing Reference
- Symbol Type
- Connection Data (líneas conectadas)

**Datos Personalizados (Custom Properties):**
- Cualquier propiedad adicional definida por usuario
- Ejemplos: número de requisición, proveedor preferido, lead time

**Acceso a propiedades:**

Método 1: Paleta de Properties
1. Seleccionar equipo en modelo
2. Paleta Properties se actualiza automáticamente
3. Secciones organizadas por categoría (Geometry, Process Data, etc.)

Método 2: Equipment Data Manager
1. Plant 3D → Equipment → Equipment Manager
2. Lista tabular de todos los equipos del proyecto
3. Edición masiva de propiedades múltiples equipos

Método 3: Exportación a base de datos
1. Exportar propiedades a Excel/Access
2. Edición externa
3. Re-importar datos actualizados

## 2. Recipientes a Presión (Pressure Vessels)

### 2.1 Fundamentos de Recipientes según ASME BPVC

**ASME Boiler and Pressure Vessel Code Section VIII:**

Es el estándar internacional para diseño, fabricación e inspección de recipientes a presión. Tiene tres divisiones:

**Division 1 - Pressure Vessels:**
- Recipientes estándar de presión moderada
- Mayoría de aplicaciones industriales
- Presiones típicas: hasta 3,000 psig (200 bar)
- Diseño por fórmulas prescriptivas

**Division 2 - Alternative Rules:**
- Diseño mediante análisis de esfuerzos (stress analysis)
- Permite optimización (menores espesores con análisis riguroso)
- Típicamente presiones medias-altas o geometrías complejas

**Division 3 - Alternative Rules for Construction of High Pressure Vessels:**
- Recipientes de muy alta presión (>10,000 psig / 690 bar)
- Aplicaciones especiales (síntesis química, reactores de polimerización)

**Componentes principales de recipiente ASME:**

**Shell (casco o cuerpo cilíndrico):**
- Sección cilíndrica principal del recipiente
- Dimensionado por diámetro interno (ID) o diámetro externo (OD)
- Espesor determinado por presión, material, diámetro
- Puede tener múltiples cursos (courses) soldados

**Heads (cabezales):**
- Cierran los extremos del casco cilíndrico
- Tipos estandarizados con fórmulas de diseño específicas
- Geometría define eficiencia de esfuerzos y volumen

**Nozzles (boquillas):**
- Aberturas para conexiones de tuberías
- Requieren refuerzo (reinforcement) según tamaño
- Tipos: integrales, set-on, set-in
- Se cubrirán en detalle en Lección 20

**Supports (soportes):**
- Sostienen peso del recipiente (vacío, operando, prueba)
- Tipos: skirt (falda), saddles (sillas), legs (patas), lugs (orejas)
- Diseñados según ASME Section VIII División 1 Appendix 13

**Internals (internos):**
- Componentes internos: bandejas, empaques, distribuidores
- No modelados típicamente en Plant 3D (representación conceptual)

### 2.2 Creación de Recipientes Verticales

Los recipientes verticales son el tipo más común en plantas de proceso.

**Procedimiento básico:**

1. **Comando:** `PLANTVESSEL` o Plant 3D → Equipment → Pressure Vessel
2. **Orientation:** Vertical
3. **Insertion Point:** especificar punto base (típicamente en fondo)
4. Cuadro de diálogo **Vertical Vessel Properties** se abre

**Parámetros principales:**

```
Vertical Vessel Configuration:
├── Identification
│   ├── Tag: V-101
│   ├── Service: "Propane Flash Separator"
│   └── Description: "Two-phase separator"
├── Shell Dimensions
│   ├── Inside Diameter (ID): 2000 mm
│   ├── Tangent-to-Tangent Height: 6000 mm
│   ├── Shell Thickness: 12 mm (nominal)
│   └── Number of Courses: 2 (opcional, para visualización)
├── Top Head
│   ├── Head Type: [Elliptical 2:1 | Hemispherical | Torispherical | Flat]
│   ├── Thickness: 12 mm (puede diferir del shell)
│   └── Straight Flange Height: 50 mm (típico)
├── Bottom Head
│   ├── Head Type: [Elliptical 2:1 | Hemispherical | Torispherical | Flat]
│   ├── Thickness: 12 mm
│   └── Straight Flange Height: 50 mm
├── Material
│   ├── Shell Material: SA-516 Grade 70 (carbon steel)
│   ├── Head Material: SA-516 Grade 70 (típicamente igual)
│   └── Corrosion Allowance: 3 mm
├── Design Conditions
│   ├── Design Pressure: 150 psig (10.3 bar)
│   ├── Design Temperature: 200°F (93°C)
│   └── MAWP (Max Allowable Working Pressure): [calculated]
└── Support
    ├── Support Type: Skirt (falda)
    ├── Skirt Height: 1500 mm
    └── Skirt Diameter: 1800 mm (típicamente < shell ID)
```

**Tipos de cabezales (heads) disponibles:**

**Elliptical 2:1 (Elipsoidal 2:1):**
- Más común en industria de proceso
- Relación: altura de cabezal = 1/4 del diámetro (radio mayor:radio menor = 2:1)
- Ventajas: buen balance costo/eficiencia estructural
- Cálculo: h = 0.25 × D (h=altura, D=diámetro)
- Uso: 90% de recipientes a presión estándar

**Hemispherical (Hemisférico):**
- Cabezal en forma de semi-esfera
- Más eficiente estructuralmente (menores esfuerzos)
- Menor espesor requerido para misma presión
- Desventajas: más costoso de fabricar, mayor altura total
- Uso: presiones altas (>300 psig), cuando altura no es restricción

**Torispherical (Torisférico o ASME Flanged & Dished):**
- Geometría: combinación de radio en corona y nudillo (knuckle)
- Típico: radio de corona = diámetro, radio de nudillo = 6% diámetro
- Menos profundo que elipsoidal 2:1
- Ventajas: menor altura total
- Desventajas: mayores esfuerzos locales (requiere más espesor)
- Uso: cuando altura es crítica, presiones bajas-medias

**Flat (Plano):**
- Cabezal plano con solo espesor estructural
- Estructuralmente ineficiente (altos esfuerzos de flexión)
- Requiere espesor muy grande o refuerzos/stays
- Uso: presiones muy bajas (<15 psig), tanques atmosféricos

**Conical (Cónico):**
- Cabezal en forma de cono
- Ángulo típico: 60° con vertical (120° ápice)
- Uso: fondos de recipientes para facilitar drenaje, torres con demisters
- Consideración: mayor espesor que elipsoidal para misma presión

**Visualización en modelo 3D:**

Al confirmar parámetros:
- Plant 3D genera sólido 3D del recipiente completo
- Incluye: shell, top head, bottom head, straight flanges
- Soporte (skirt/saddles) se añade automáticamente
- Objeto es un único elemento inteligente (no geometría primitiva)

**Edición posterior:**

Para modificar después de creación:
1. Seleccionar recipiente
2. Click derecho → **Edit Equipment** o **Properties**
3. Modificar cualquier parámetro
4. Aplicar: geometría se regenera automáticamente

### 2.3 Creación de Recipientes Horizontales

Los recipientes horizontales se usan cuando:
- Limitaciones de altura
- Aplicaciones de separación bifásica (gas-líquido) requieren superficie de interfase
- Acumuladores (surge drums) con tiempo de residencia corto

**Procedimiento:**

1. Comando: `PLANTVESSEL`
2. **Orientation:** Horizontal
3. **Insertion Point:** especificar (típicamente en centro o en proyección de soportes)
4. Cuadro de diálogo **Horizontal Vessel Properties**

**Parámetros principales:**

```
Horizontal Vessel Configuration:
├── Identification
│   ├── Tag: V-201
│   ├── Service: "Oil/Water Separator"
│   └── Description: "Three-phase separator"
├── Shell Dimensions
│   ├── Inside Diameter (ID): 1500 mm
│   ├── Tangent-to-Tangent Length: 5000 mm (largo, no altura)
│   ├── Shell Thickness: 10 mm
│   └── Orientation: [Horizontal | Vertical]
├── Left Head (head izquierdo, mirando desde frente)
│   ├── Head Type: Elliptical 2:1
│   ├── Thickness: 10 mm
│   └── Straight Flange Length: 50 mm
├── Right Head
│   ├── Head Type: Elliptical 2:1
│   ├── Thickness: 10 mm
│   └── Straight Flange Length: 50 mm
├── Material & Design
│   ├── Shell Material: SA-516 Grade 70
│   ├── Design Pressure: 100 psig
│   └── Design Temperature: 150°F
└── Support
    ├── Support Type: Saddles (sillas)
    ├── Number of Saddles: 2
    ├── Saddle Width: 300 mm
    ├── Distance from Tangent Line: [calculated per ASME]
    └── Saddle Material: A36 structural steel
```

**Tipos de soportes para recipientes horizontales:**

**Saddles (Sillas):**
- Más común para recipientes horizontales
- Número: 2 saddles típico (largo <6m), 3+ para recipientes largos
- Diseño: Zick Analysis (método estándar ASME)
- Ubicación óptima: entre 0.2L y 0.5L desde tangent lines (L=longitud T-T)
- Configuración en Plant 3D:
  ```
  Saddle Configuration:
  ├── Number of Saddles: 2
  ├── Saddle Type: [Standard | Ring | Strap]
  ├── Saddle Width: 300 mm
  ├── Saddle Angle: 120° (contact angle)
  ├── Location from Left Head: 1000 mm (0.2L)
  └── Location from Right Head: 1000 mm (0.2L)
  ```

**Legs (Patas):**
- Alternativa a saddles, menos común
- Típicamente 4 patas (una en cada cuadrante)
- Ventajas: despeja espacio bajo recipiente (tuberías, drenajes)
- Desventajas: cargas puntuales concentradas

**Lugs (Orejas de soporte):**
- Para recipientes suspendidos o montados en estructura
- Soldados al shell o a anillo de refuerzo
- Típicamente: 2, 3 o 4 lugs distribuidos uniformemente

**Consideraciones especiales recipientes horizontales:**

**Orientación de boquillas:**
- Boquillas superiores (vapor, gas): en posición 12 o'clock (TOS: top of shell)
- Boquillas inferiores (líquido, drenaje): en posición 6 o'clock (BOS: bottom of shell)
- Boquillas laterales: posiciones intermedias según nivel de líquido

**Acceso para mantenimiento:**
- Manholes: típicamente en cabezales (heads) para acceso interno
- Handhole: aberturas pequeñas para inspección

**Drenaje:**
- Pendiente ligera (1-2%) si es necesario para drenaje completo
- Representado en Plant 3D inclinando ligeramente el recipiente

### 2.4 Tipos de Soportes de Recipientes

Los soportes transfieren peso del recipiente a fundación o estructura.

**Skirt (Falda) - Recipientes Verticales:**

Soporte más común para recipientes verticales.

Características:
- Cilindro metálico soldado a fondo del recipiente
- Diámetro: típicamente menor que ID del shell (0.8-0.9 × ID)
- Espesor: determinado por cargas (peso, viento, sismo)
- Altura: suficiente para elevar boquillas inferiores sobre nivel de piso

Ventajas:
- Distribución uniforme de cargas
- No introduce esfuerzos localizados en shell
- Permite aislamiento térmico completo del vessel
- Espacio interior para bombas, instrumentos

Configuración en Plant 3D:
```
Skirt Support Configuration:
├── Skirt Diameter: 1800 mm (< shell ID)
├── Skirt Height: 1500 mm
├── Skirt Thickness: 8 mm (nominal)
├── Skirt Material: SA-516 Gr.70
├── Base Ring: [Yes | No]
├── Base Ring Width: 200 mm (si aplicable)
├── Anchor Bolts: [Yes | No]
└── Number of Anchor Bolts: 16 (typical)
```

Diseño según ASME VIII-1 Appendix 13:
- Esfuerzos de compresión (peso + presión)
- Esfuerzos de tensión (viento + sismo)
- Esfuerzos de corte en soldadura shell-to-skirt
- Pandeo (buckling) bajo compresión

**Legs (Patas) - Recipientes Verticales:**

Alternativa a skirt, típicamente 3, 4 o 6 patas.

Características:
- Perfiles estructurales (AISC W, channels, HSS)
- Soldados al shell mediante clips o gusset plates
- Altura: suficiente para acceso bajo recipiente

Ventajas:
- Menor costo que skirt (menos material)
- Acceso libre bajo recipiente
- Facilita instalación de tuberías inferiores

Desventajas:
- Cargas puntuales en shell (requiere refuerzo local)
- Menos estabilidad a cargas laterales
- Aislamiento térmico más complejo

Aplicación típica:
- Recipientes pequeños (D < 1.5m)
- Presiones bajas-medias
- Ambiente no sísmico

Configuración en Plant 3D:
```
Leg Support Configuration:
├── Number of Legs: 4
├── Leg Profile: AISC W8x18 (viga W)
├── Leg Height: 2000 mm
├── Radial Distance from Center: 1200 mm
├── Leg Orientation: Radial (perpendicular a shell)
├── Top Attachment: [Clip | Gusset Plate | Bracket]
└── Bottom Attachment: [Base Plate | Anchor Bolts]
```

**Lugs (Orejas) - Recipientes Verticales u Horizontales:**

Soportes para recipientes suspendidos o montados en estructura.

Características:
- Placas de acero soldadas al shell
- Típicamente: 2 lugs (opuestos) para verticales pequeños
- 3-4 lugs: distribución más uniforme de cargas

Ventajas:
- Mínimo espacio requerido
- Permite montaje en estructura existente
- Útil en espacios confinados

Desventajas:
- Altas cargas localizadas (análisis de esfuerzos requerido)
- Accesibilidad limitada para aislamiento

Aplicación:
- Recipientes pequeños (<2m diámetro)
- Montaje en vigas de pipe racks
- Recipientes auxiliares (filtros, coalescers)

**Configuración de soportes en Plant 3D:**

Durante creación del recipiente:
1. En cuadro de diálogo de vessel properties
2. Pestaña **Support**
3. Seleccionar tipo: Skirt, Legs, Saddles, Lugs, None
4. Configurar parámetros específicos del tipo seleccionado
5. Soporte se genera automáticamente integrado al modelo 3D

Edición posterior:
1. Seleccionar vessel
2. Properties → sección Support
3. Cambiar tipo o parámetros
4. Geometría se actualiza automáticamente

## 3. Tanques de Almacenamiento

### 3.1 Estándar API 650 - Tanques Atmosféricos

**API Standard 650: Welded Tanks for Oil Storage**

Es el estándar de la American Petroleum Institute para diseño, fabricación, inspección y reparación de tanques de almacenamiento atmosféricos soldados.

**Alcance de API 650:**
- Presión de diseño: 2.5 psig máximo (atmosférico)
- Temperatura: -40°F a 260°F (-40°C a 127°C) para servicios no refrigerados
- Materiales: aceros al carbono, chapas laminadas
- Tamaños: desde 15 ft hasta >250 ft de diámetro
- Aplicación: almacenamiento de crudo, productos refinados, químicos

**Componentes de tanque API 650:**

**Shell (Casco):**
- Cilindro vertical formado por chapas soldadas
- Múltiples cursos (courses): 1.8m - 2.4m de altura cada uno
- Espesor variable: mayor en fondo, menor en tope (presión hidrostática)
- Soldaduras horizontales y verticales inspeccionadas

**Bottom (Fondo):**
- Placa plana de acero apoyada en fundación
- Configuración típica: placas de 6ft × 20ft (1.8m × 6m) solapadas
- Pendiente hacia sump para drenaje completo
- Protección catódica en contacto con suelo

**Roof (Techo):**
- Tipos: cono (cone roof), domo (dome roof), techo flotante
- Techo fijo cónico: ángulo típico 9.5° (2:12 slope)
- Soportado por estructura interna de vigas radiales y columnas
- Venteo atmosférico requerido

**Appurtenances (Accesorios):**
- Manholes (boca de hombre) para acceso
- Nozzles (boquillas) para entrada/salida de producto
- Vents (venteos) de presión/vacío
- Escaleras y plataformas de acceso
- Mixers (agitadores) si requeridos

### 3.2 Creación de Tanques en Plant 3D

**Comando:**

```
PLANTTANK
```

O desde cinta: Plant 3D → Equipment → Tank

**Cuadro de diálogo Tank Properties:**

```
API 650 Tank Configuration:
├── Identification
│   ├── Tag: T-401
│   ├── Service: "Crude Oil Storage"
│   ├── Description: "100,000 barrel tank"
│   └── API 650 Edition: 13th Edition (2020)
├── Shell Dimensions
│   ├── Nominal Diameter: 42000 mm (42 m / 137.8 ft)
│   ├── Shell Height: 14400 mm (14.4 m / 47.2 ft)
│   ├── Number of Shell Courses: 8
│   ├── Course Heights: 1800 mm each (uniform)
│   └── Shell Plate Thickness: [variable by course]
│       ├── Course 1 (bottom): 16 mm
│       ├── Course 2: 14 mm
│       ├── Course 3-4: 12 mm
│       ├── Course 5-6: 10 mm
│       └── Course 7-8 (top): 8 mm
├── Bottom Configuration
│   ├── Bottom Type: Flat
│   ├── Bottom Plate Thickness: 8 mm (nominal)
│   ├── Slope to Sump: 1:120 (API 650 minimum)
│   └── Sump: [Yes | No] - Yes
├── Roof Configuration
│   ├── Roof Type: [Cone | Dome | Floating | Open Top]
│   ├── Cone Roof Angle: 9.5° (2:12 slope standard)
│   ├── Roof Plate Thickness: 6 mm (nominal)
│   ├── Roof Supports: [Rafter Girders | Columns]
│   └── Roof Structure: Internal (show in model: optional)
├── Material
│   ├── Shell Material: ASTM A-283 Grade C (carbon steel)
│   ├── Bottom Material: ASTM A-283 Grade C
│   ├── Roof Material: ASTM A-283 Grade C
│   └── Corrosion Allowance: 1.5 mm (bottom), 0 (shell interior)
├── Design Conditions
│   ├── Design Pressure: 0.0 psig (atmospheric)
│   ├── Liquid Specific Gravity: 0.85 (crude oil)
│   ├── Design Fill Height: 14000 mm (allow freeboard)
│   └── Wind Speed: 160 km/h (per location)
└── Capacity
    ├── Gross Capacity: 19,800 m³ (calculated)
    ├── Working Capacity: 19,000 m³ (with freeboard)
    └── Equivalent Barrels: 119,500 bbl (@ 1 m³ = 6.29 bbl)
```

**Configuración de shell courses:**

Los tanques API 650 típicamente tienen espesor variable por curso debido a presión hidrostática creciente hacia el fondo.

Procedimiento en Plant 3D:
1. En **Tank Properties** → pestaña **Shell Courses**
2. Especificar número de cursos (typical: 6-10 para tanques grandes)
3. Para cada curso, configurar:
   - Height (altura): típicamente 1.8m (6 ft) o 2.4m (8 ft)
   - Thickness (espesor): calculado según API 650 fórmulas
   - Material: típicamente uniforme (A-283 Gr.C)
4. Plant 3D dibuja cada curso como cilindro con espesor correcto

**Cálculo simplificado de espesor (API 650):**

Fórmula básica:
```
t = (4.9 × D × H × G) / (σ × E) + CA

Donde:
t = espesor requerido (mm)
D = diámetro nominal (m)
H = altura de diseño desde fondo hasta punto considerado (m)
G = gravedad específica del líquido
σ = esfuerzo admisible del material (N/mm²)
E = eficiencia de junta (0.85 para spot RT, 1.0 para full RT)
CA = corrosion allowance (mm)
```

**Nota:** Plant 3D NO realiza cálculo automático de espesores según API 650. El diseñador debe:
1. Calcular espesores usando software especializado (PVElite, TANK, etc.) o manualmente
2. Introducir espesores calculados en modelo de Plant 3D
3. Modelo es representación precisa, no herramienta de diseño

### 3.3 Tipos de Techos de Tanques

**Cone Roof (Techo Cónico):**

Configuración:
- Techo cónico autosoportado o soportado
- Ángulo estándar: 9.5° (pendiente 2:12)
- Estructura: vigas radiales (rafters) y anillo de compresión (compression ring)
- Venteo: normal vent y emergency vent en tope de cono

Ventajas:
- Bajo costo de construcción
- Fácil mantenimiento
- Aplicable a amplia gama de productos

Desventajas:
- Pérdidas por evaporación (breathing losses)
- No adecuado para productos volátiles (gasolina, solventes)

Aplicación:
- Crudo, diesel, aceites, productos de baja volatilidad

Configuración en Plant 3D:
```
Cone Roof Configuration:
├── Roof Type: Cone
├── Cone Angle: 9.5° (standard)
├── Apex Height: 2.0 m (calculated from diameter and angle)
├── Plate Thickness: 6 mm (typical)
├── Structural Support: [Self-Supporting | Rafter-Supported | Column-Supported]
└── Show Internal Structure: [Yes | No]
```

**Dome Roof (Techo Domo):**

Configuración:
- Techo en forma de segmento esférico
- Radio de curvatura: típicamente 0.8-1.2× diámetro del tanque
- Autosoportado (no requiere columnas internas)

Ventajas:
- Mayor resistencia a presión/vacío que cono
- Permite operar a presiones ligeramente superiores (hasta ~5 psig)
- Estéticamente más atractivo

Desventajas:
- Mayor costo que techo cónico
- Fabricación más compleja

Aplicación:
- Tanques presurizados (API 620 low pressure)
- Productos que requieren inertización
- Cuando presión/vacío significativo

Configuración en Plant 3D:
```
Dome Roof Configuration:
├── Roof Type: Dome
├── Dome Radius: 50 m (radius of spherical segment)
├── Dome Height: 4.5 m (calculated from radius and tank diameter)
├── Plate Thickness: 8 mm (higher than cone due to pressure)
└── Design Pressure: 5 psig (per API 620)
```

**Floating Roof (Techo Flotante):**

Configuración:
- Techo que flota directamente sobre superficie del líquido almacenado
- Sube y baja con nivel de líquido
- Tipos: externo (open top tank) o interno (dentro de fixed roof)

Componentes:
- Pontoons (pontones) o double deck para flotación
- Seal system (sistema de sellos) entre techo y pared
- Roof drains (drenajes) para agua de lluvia
- Roof legs (patas) para soportar techo cuando tanque vacío

Ventajas:
- Mínimas pérdidas por evaporación
- Cumplimiento con regulaciones ambientales estrictas
- Prevención de formación de mezclas explosivas

Desventajas:
- Alto costo inicial y de mantenimiento
- Sistema de sellos requiere inspección y reemplazo periódico
- Problemas en climas fríos (congelamiento)

Aplicación:
- Gasolina, nafta, condensados, productos volátiles
- Tanques grandes (>30m diámetro) de refinerías

Configuración en Plant 3D:
```
Floating Roof Configuration:
├── Roof Type: [External Floating | Internal Floating]
├── Float Type: [Pontoon | Double Deck]
├── Seal Type: [Primary: Mechanical | Secondary: Rim-Mounted]
├── Roof Elevation: Variable (linked to liquid level)
├── Roof Legs: [Yes | No]
├── Leg Height (extended): 500 mm (when tank empty)
└── Show in Model: At mid-height position (typical)
```

**Nota sobre representación en Plant 3D:**

Los techos flotantes presentan desafío de modelado porque su elevación varía. Práctica común:
- Modelar techo a elevación intermedia (50% de llenado)
- O crear múltiples configuraciones (vacío, normal, lleno)
- Documentar elevación asumida en propiedades

### 3.4 Tanques a Presión (API 620)

**API Standard 620: Design and Construction of Large, Welded, Low-Pressure Storage Tanks**

Para tanques que operan a presiones superiores a API 650 pero inferiores a ASME VIII:
- Rango de presión: 2.5 psig a 15 psig típicamente
- Temperaturas desde -270°F (criogénico) hasta 500°F
- Aplicaciones: LNG, LPG refrigerado, gases industriales

Diferencias clave con API 650:
- Diseño por análisis de esfuerzos (más riguroso)
- Techos estructuralmente integrados (no simplemente apoyados)
- Pruebas más estrictas (prueba neumática además de hidrostática)
- Materiales especiales para bajas temperaturas (aceros 9% Ni, Al 5083)

**Configuración en Plant 3D:**

Plant 3D puede modelar tanques API 620 usando configuración similar a API 650 pero con:
- Design Pressure: 2.5-15 psig (especificar)
- Roof Type: Dome (estructuralmente más robusto)
- Shell Thickness: mayor que API 650 equivalente (presión interna)
- Material: potencialmente aceros especiales (documentar en propiedades)

## 4. Intercambiadores de Calor

### 4.1 Tipos de Intercambiadores

**Shell & Tube (Casco y Tubos):**

Tipo más común en plantas de proceso. Configuración TEMA (Tubular Exchanger Manufacturers Association) estandariza diseño.

Componentes principales:
- Shell (casco): contiene bundle de tubos, fluido circula por exterior de tubos
- Tube Bundle (haz de tubos): tubos por donde circula otro fluido
- Headers (cabezales): distribuyen fluido en tubos
- Baffles (deflectores): dirigen flujo en casco, soportan tubos

Nomenclatura TEMA (3 letras):
- **1ª letra - Front Head Type** (tipo de cabezal frontal):
  - A: Channel and removable cover
  - B: Bonnet (integral cover)
  - C: Channel integral with tubesheet and removable cover
- **2ª letra - Shell Type** (tipo de casco):
  - E: One-pass shell
  - F: Two-pass shell with longitudinal baffle
  - G: Split flow
  - H: Double split flow
  - J: Divided flow
  - K: Kettle reboiler
  - X: Crossflow
- **3ª letra - Rear Head Type** (tipo de cabezal posterior):
  - L: Fixed tubesheet (like A)
  - M: Fixed tubesheet (like B)
  - N: Fixed tubesheet (like C)
  - P: Outside packed floating head
  - S: Floating head with backing device
  - T: Pull-through floating head
  - U: U-tube bundle
  - W: Externally sealed floating tubesheet

**Ejemplo:** AEL = Channel with removable cover, One-pass shell, Fixed tubesheet

**Configuraciones comunes:**

- **BEM**: calentadores/enfriadores simples
- **AES**: intercambiadores con floating head (mantenimiento más fácil)
- **AEU**: U-tube bundle (expansión térmica sin esfuerzos)
- **AKT**: kettle reboiler (hervidor)

**Plate Heat Exchanger (Intercambiador de Placas):**

Configuración:
- Placas corrugadas de acero o titanio apiladas
- Fluidos circulan en canales alternados entre placas
- Gaskets (empaques) sellan perímetro de cada placa
- Marco sujeta placas comprimidas

Ventajas:
- Compacto (alta área superficial/volumen)
- Alta eficiencia térmica
- Fácil limpieza (desmontar placas)

Desventajas:
- Limitado a presiones moderadas (<300 psig)
- Gaskets requieren reemplazo periódico
- No adecuado para fluidos con sólidos suspendidos

Aplicación:
- HVAC, refrigeración, pasteurización
- Servicio líquido-líquido limpio

**Air Cooler (Enfriador de Aire):**

Configuración:
- Bundle de tubos aleteados (finned tubes)
- Ventiladores fuerzan aire a través del bundle
- Tipos: tiro forzado (forced draft) o tiro inducido (induced draft)

Componentes:
- Tube bundle con aletas
- Plenum (cámara de distribución de aire)
- Fans (ventiladores) con motores
- Estructura de soporte elevada

Ventajas:
- No requiere agua de enfriamiento (crítico en zonas áridas)
- Operación simple
- Bajo mantenimiento

Desventajas:
- Ocupa gran área horizontal
- Eficiencia reducida en clima cálido
- Ruido de ventiladores

Aplicación:
- Condensadores de overhead en torres de destilación
- Enfriamiento de productos en refinerías

### 4.2 Creación de Intercambiadores Shell & Tube

**Comando:**

```
PLANTHEATEXCHANGER
```

O: Plant 3D → Equipment → Heat Exchanger

**Cuadro de diálogo Heat Exchanger Properties:**

```
Shell & Tube Heat Exchanger Configuration:
├── Identification
│   ├── Tag: E-301
│   ├── Service: "Crude Preheat"
│   ├── Description: "Shell & Tube, TEMA AEL"
│   └── Duty: 15.5 MMBtu/hr (thermal load)
├── TEMA Configuration
│   ├── TEMA Type: AEL (3-letter designation)
│   ├── Front Head: A (Channel with removable cover)
│   ├── Shell Type: E (One-pass shell)
│   └── Rear Head: L (Fixed tubesheet)
├── Shell Side
│   ├── Shell Diameter: 800 mm (31.5 inches)
│   ├── Shell Length: 6000 mm (19.7 ft)
│   ├── Shell Thickness: 10 mm
│   ├── Design Pressure: 150 psig
│   ├── Design Temperature: 250°F (121°C)
│   ├── Fluid: Crude oil (hot side)
│   └── Flow Rate: 500 m³/hr
├── Tube Side
│   ├── Tube OD: 19.05 mm (3/4 inch)
│   ├── Tube Thickness: 2.11 mm (14 BWG)
│   ├── Tube Length: 6000 mm (same as shell)
│   ├── Number of Tubes: 420
│   ├── Tube Layout: 30° triangular pitch
│   ├── Tube Pitch: 25.4 mm (1 inch)
│   ├── Number of Passes: 2 (two-pass on tube side)
│   ├── Design Pressure: 300 psig
│   ├── Design Temperature: 180°F (82°C)
│   ├── Fluid: Process water (cold side)
│   └── Flow Rate: 180 m³/hr
├── Headers
│   ├── Front Header Length: 800 mm
│   ├── Front Header Diameter: 600 mm
│   ├── Rear Header Length: 800 mm (if applicable)
│   └── Rear Header Diameter: 600 mm
├── Materials
│   ├── Shell Material: SA-516 Gr.70 (carbon steel)
│   ├── Tube Material: SA-179 (carbon steel seamless)
│   ├── Tubesheet Material: SA-516 Gr.70
│   ├── Channel Material: SA-516 Gr.70
│   └── Baffle Material: SA-516 Gr.70
├── Support
│   ├── Support Type: Saddles
│   ├── Number of Saddles: 2
│   └── Saddle Locations: Per TEMA recommendations
└── Performance Data
    ├── Heat Transfer Area: 155 m² (calculated)
    ├── Overall U: 850 W/m²K (heat transfer coefficient)
    ├── LMTD: 45°C (log mean temperature difference)
    └── Effectiveness: 78% (thermal effectiveness)
```

**Orientación del intercambiador:**

- **Horizontal:** configuración estándar (95% de instalaciones)
- **Vertical:** cuando espacio horizontal limitado o aplicaciones especiales (thermosyphon reboilers)

Especificar en Plant 3D:
1. Durante creación: opción **Orientation** → Horizontal o Vertical
2. Punto de inserción: típicamente en centro de longitud, elevación de línea central

**Representación 3D en Plant 3D:**

Plant 3D genera modelo 3D simplificado:
- Shell: cilindro con diámetro y longitud especificados
- Headers: cabezales en ambos extremos (geometría según TEMA type)
- Nozzles: boquillas shell-side (inlet/outlet) y tube-side (inlet/outlet)
- Support saddles: si configurados

**Nivel de detalle:**

Plant 3D NO modela:
- Tubos individuales dentro del bundle
- Baffles internos
- Tubesheet perforations

Estos detalles son para diseño térmico/mecánico detallado, no necesarios para layout de planta.

### 4.3 Air Coolers (Enfriadores de Aire)

**Configuración:**

Air coolers tienen geometría distintiva: bundles horizontales elevados con ventiladores debajo o encima.

**Comando:** `PLANTAIRCOOLER`

**Parámetros principales:**

```
Air Cooler Configuration:
├── Identification
│   ├── Tag: E-401
│   ├── Service: "Overhead Condenser"
│   └── Type: [Forced Draft | Induced Draft]
├── Bundle Configuration
│   ├── Bundle Width: 3000 mm (perpendicular a tubos)
│   ├── Bundle Length: 9000 mm (dirección de tubos)
│   ├── Number of Bundles: 2 (side by side)
│   ├── Bundle Height: 600 mm (altura del haz de tubos)
│   └── Tube Rows: 4 (profundidad de bundle)
├── Tubes
│   ├── Tube OD: 25.4 mm (1 inch)
│   ├── Tube Length: 9000 mm
│   ├── Fin Type: Extruded aluminum
│   ├── Fin Density: 433 fins/m (11 fins/inch)
│   └── Number of Tubes: 240 per bundle
├── Plenum (Cámara de Aire)
│   ├── Plenum Height: 1200 mm
│   ├── Plenum Type: [Common | Individual per bundle]
│   └── Louvers: [Yes | No] - for weather protection
├── Fans
│   ├── Number of Fans: 2 (one per bundle)
│   ├── Fan Diameter: 2400 mm (8 ft)
│   ├── Fan Type: Axial flow
│   ├── Motor Power: 15 HP each
│   └── Fan Location: [Below Bundle | Above Bundle]
│       - Forced Draft: fans below, push air up
│       - Induced Draft: fans above, pull air up
├── Structure
│   ├── Structure Height: 6000 mm (elevation of bundle centerline)
│   ├── Structure Type: Pipe rack mounted or self-supported
│   ├── Framing: Structural steel (W-beams, channels)
│   └── Access: Ladder and platform for maintenance
└── Performance
    ├── Heat Duty: 8.5 MMBtu/hr
    ├── Air Flow Rate: 180,000 kg/hr per fan
    ├── Process Inlet Temperature: 140°F
    ├── Process Outlet Temperature: 110°F
    └── Design Ambient: 95°F (air inlet temperature)
```

**Forced Draft vs Induced Draft:**

**Forced Draft:**
- Ventiladores ubicados debajo del bundle
- Empujan (push) aire hacia arriba a través de tubos
- Ventajas: mejor distribución de aire, menor recirculación
- Desventajas: ventiladores expuestos a aire caliente de salida (menor eficiencia motores)

**Induced Draft:**
- Ventiladores ubicados encima del bundle
- Succionan (pull) aire hacia arriba
- Ventajas: motores en corriente de aire caliente protegidos por plenum
- Desventajas: posible recirculación de aire caliente

**Configuración mayoritaria en industria:** Induced draft (60-70% de instalaciones)

**Modelado en Plant 3D:**

Modelo 3D incluye:
- Bundle(s): representados como cajas rectangulares
- Plenum: cámara debajo o encima
- Fans: cilindros representando ventiladores
- Structure: marco estructural simplificado
- Piping connections: nozzles para inlet/outlet de proceso

## 5. Equipos Rotativos desde Catálogo

### 5.1 Bombas Centrífugas

Las bombas son equipos de catálogo: se seleccionan modelos de fabricantes específicos.

**Tipos de bombas en plantas de proceso:**

**Centrifugal Pumps (Bombas Centrífugas):**
- Tipo más común (80% de bombas en refinerías)
- Tipos de carcasa: end suction, inline, between bearings
- Rangos: desde 10 gpm hasta 10,000+ gpm

**Positive Displacement Pumps:**
- Gear pumps (engranajes): líquidos viscosos, lubricación
- Screw pumps (tornillo): alto caudal, baja presión
- Diaphragm pumps (diafragma): químicos corrosivos, dosificación

**Procedimiento para añadir bomba:**

1. **Comando:** `PLANTPUMP`
2. **Select from Catalog:**
   - Plant 3D incluye catálogos de fabricantes principales
   - Ejemplos: Flowserve, Sulzer, KSB, Grundfos
3. **Specify Service Conditions:**
   - Flow rate (caudal): 250 m³/hr
   - Differential head (cabeza): 80 meters
   - Fluid: water, oil, chemical
4. **Catalog suggests models** que cumplen requisitos
5. **Select specific model:**
   - Ejemplo: Flowserve 4x3-10 ANSI pump
6. **Specify location and orientation** en modelo 3D
7. Bomba se inserta con geometría precisa del modelo seleccionado

**Propiedades de bomba en Plant 3D:**

```
Pump Properties:
├── Identification
│   ├── Tag: P-201A
│   ├── Service: "Crude Transfer"
│   └── Description: "Centrifugal pump with API 610 compliance"
├── Manufacturer Data
│   ├── Vendor: Flowserve
│   ├── Model: 4x3-10
│   ├── Serial Number: [to be assigned]
│   └── Drawing Reference: Vendor drawing 12345-GA
├── Hydraulic Data
│   ├── Rated Flow: 250 m³/hr (1,100 gpm)
│   ├── Rated Head: 80 m (262 ft)
│   ├── Efficiency: 78% (at rated point)
│   ├── BEP: 275 m³/hr (best efficiency point)
│   └── NPSH Required: 3.5 m (11.5 ft)
├── Mechanical Data
│   ├── Impeller Diameter: 254 mm (10 inches)
│   ├── Impeller Material: 316 SS
│   ├── Casing Material: Cast iron ASTM A-48
│   ├── Shaft Material: 416 SS
│   └── Seal Type: Mechanical seal, single
├── Driver
│   ├── Driver Type: Electric motor
│   ├── Power Required: 75 HP (56 kW)
│   ├── Motor Frame: 180M
│   ├── RPM: 1750 (4-pole motor)
│   └── Voltage: 460V, 3-phase, 60 Hz
├── Nozzle Data
│   ├── Suction Nozzle: 4" 150# RF (raised face flange)
│   ├── Suction Orientation: Horizontal, side inlet
│   ├── Discharge Nozzle: 3" 300# RF
│   └── Discharge Orientation: Vertical up (typical)
├── Mounting
│   ├── Baseplate: Common baseplate with motor
│   ├── Baseplate Dimensions: 1500 mm × 800 mm
│   ├── Foundation Bolts: 8× M20
│   └── Elevation: +0.5 m (above grade)
└── Installation Data
    ├── Weight (Dry): 450 kg
    ├── Weight (Wet): 520 kg
    ├── Center of Gravity: Specified by vendor
    └── Required Clearances: Per API 610
```

**Representación 3D:**

Plant 3D utiliza geometría detallada de catálogo:
- Casing (carcasa) con forma precisa
- Motor con frame correcto
- Baseplate común
- Nozzles (succión y descarga) en ubicaciones exactas
- Auxiliares: coolers, pulsation dampeners si aplicables

### 5.2 Compresores

Compresores siguen lógica similar a bombas: selección de catálogo.

**Tipos de compresores:**

**Centrifugal Compressor:**
- Alto caudal, presión moderada
- Aplicación: aire de planta, gas de proceso
- Multi-stage para altas relaciones de compresión

**Reciprocating Compressor:**
- Presiones muy altas
- Caudales bajos-medios
- Aplicación: gas de síntesis, recarga de refrigerante

**Screw Compressor:**
- Compacto, eficiente
- Aplicación: aire comprimido industrial

**Procedimiento:**

1. Comando: `PLANTCOMPRESSOR`
2. Seleccionar tipo: Centrifugal, Reciprocating, Screw, etc.
3. Catalog selection: fabricante y modelo
   - Ejemplos: Atlas Copco, Ingersoll Rand, Siemens, GE
4. Configurar parámetros:
   - Inlet pressure: 15 psig
   - Discharge pressure: 150 psig
   - Flow rate: 5,000 ACFM (actual cubic feet per minute)
   - Gas composition: natural gas, air, etc.
5. Insertar en modelo con orientación correcta

**Propiedades de compresor:**

Similar a bombas, incluye:
- Tag e identificación
- Datos del fabricante y modelo
- Condiciones de operación (presiones, temperaturas, caudales)
- Driver (motor eléctrico, turbina de gas, motor de combustión)
- Nozzles (succión, descarga, reciclo si aplica)
- Sistemas auxiliares (coolers, separadores de succión, anti-surge)

### 5.3 Gestión de Catálogos de Equipos

**Equipment Catalog Manager:**

Plant 3D permite gestionar catálogos de equipos corporativos.

Acceso:
```
Plant 3D → Equipment → Equipment Catalog → Manage Catalog
```

**Estructura del catálogo:**

```
Equipment Catalog:
├── Pumps
│   ├── Centrifugal
│   │   ├── Flowserve (vendor)
│   │   │   ├── ANSI Process Pumps
│   │   │   ├── API 610 Pumps
│   │   │   └── Slurry Pumps
│   │   └── Sulzer (vendor)
│   │       └── [models...]
│   └── Positive Displacement
│       └── [vendors and models...]
├── Compressors
│   ├── Centrifugal
│   ├── Reciprocating
│   └── Screw
├── Heat Exchangers
│   ├── Shell & Tube (custom designed, not catalog)
│   └── Plate Heat Exchangers (vendor catalog items)
├── Vessels (typically custom designed)
└── Specialty Equipment
    ├── Filters
    ├── Coalescers
    ├── Mixers
    └── Dryers
```

**Añadir equipos al catálogo:**

Procedimiento:
1. Obtener modelos 3D de fabricante
   - Formato: STEP, IGES, o DWG
2. Importar a Plant 3D:
   - Catalog Manager → Import Equipment
   - Seleccionar archivo 3D
3. Configurar propiedades:
   - Definir connection points (nozzles)
   - Establecer punto de inserción (insertion point)
   - Configurar propiedades de datos
4. Asignar a categoría en catálogo
5. Guardar en biblioteca corporativa

**Biblioteca corporativa:**

Para compartir catálogos entre proyectos:
1. Exportar catálogo: Catalog Manager → Export
2. Ubicación compartida: servidor de red o SharePoint
   - Ejemplo: `\\Server\PlantData\EquipmentCatalogs\Pumps_Flowserve_2024.xml`
3. En nuevos proyectos: Import catalog from shared location
4. Equipos disponibles instantáneamente

## 6. Conversión de Bloques a Equipos Inteligentes

### 6.1 Bloques CAD vs Equipos Paramétricos

**Situación común:**

Muchas empresas tienen bibliotecas extensas de bloques de AutoCAD representando equipos, pero carecen de inteligencia de Plant 3D.

**Limitaciones de bloques simples:**

- Sin propiedades de proceso (presión, temperatura, tag)
- Sin conexiones inteligentes a tuberías
- Sin extracción automática a datasheets
- Sin integración con P&IDs
- Modificación requiere edición de bloque completo

**Conversión a equipo Plant 3D:**

Plant 3D permite convertir bloques existentes a equipos inteligentes.

### 6.2 Procedimiento de Conversión

**Método 1: Convert to Equipment (simple)**

Para geometría simple que no requiere parametrización:

1. Insertar bloque de AutoCAD en modelo Plant 3D
2. Seleccionar bloque
3. Click derecho → **Convert to Plant Equipment**
4. Cuadro de diálogo **Equipment Properties**:
   - Tag: V-105
   - Service: [especificar]
   - Equipment Type: seleccionar categoría (Vessel, Tank, etc.)
5. Definir **Connection Points** (nozzles):
   - Click en ubicación de cada conexión en bloque
   - Especificar dirección (vector normal)
   - Asignar tamaño y rating de boquilla
6. Confirmar conversión

Resultado:
- Bloque se convierte a objeto de equipo Plant 3D
- Propiedades de proceso pueden añadirse
- Nozzles definidos permiten conexión inteligente de tuberías
- Geometría sigue siendo fija (no paramétrica)

**Método 2: Create Custom Parametric Equipment**

Para equipos que requieren parametrización:

1. Crear plantilla base en AutoCAD:
   - Dibujar geometría con dimensiones variables
   - Usar constraints dimensionales
   - Definir parámetros como atributos de bloque
2. Importar a Equipment Designer de Plant 3D:
   - Equipment → Custom Equipment → From Template
3. Mapear parámetros:
   - Asociar atributos de bloque con parámetros de Plant 3D
   - Ejemplo: atributo "DIAMETER" → parámetro "ShellDiameter"
4. Definir reglas de actualización:
   - Cómo geometría cambia cuando parámetros varían
5. Guardar como equipo paramétrico personalizado

Resultado:
- Equipo completamente paramétrico
- Cambiar parámetro actualiza geometría automáticamente
- Reutilizable en múltiples proyectos

### 6.3 Definición de Connection Points

Los connection points (puntos de conexión / nozzles) son críticos para integración con tuberías.

**Procedimiento:**

1. Durante conversión o después (Edit Equipment → Add Connection Point)
2. Para cada nozzle:
   - **Location:** click en punto exacto en geometría 3D
   - **Direction:** especificar vector normal (dirección de tubería que conectará)
     - Horizontal: X, Y, -X, -Y
     - Vertical: Z (up), -Z (down)
     - Angular: especificar ángulos
   - **Size:** nominal pipe size (NPS)
     - Ejemplo: 6" (DN150)
   - **Rating:** presión rating de brida
     - Ejemplo: 150#, 300#, 600# (ASME B16.5)
   - **Connection Type:**
     - Flanged (bridada): más común
     - Threaded (roscada): pequeñas conexiones
     - Welded (soldada): sin brida
   - **Service:** identificación de boquilla
     - Ejemplos: "Inlet", "Outlet", "Vent", "Drain", "Level Gauge"

**Visualización de nozzles:**

Plant 3D muestra nozzles como:
- Símbolos circulares en ubicación
- Vectores indicando dirección
- Etiquetas con service y tamaño

**Conexión de tuberías:**

Una vez nozzles definidos:
1. Comando de ruteo de tubería
2. Snap to nozzle automáticamente
3. Tubería asume tamaño y spec del nozzle
4. Conexión queda registrada (para P&ID, reports)

## 7. Propiedades de Datos y Custom Properties

### 7.1 Propiedades Estándar de Plant 3D

Cada equipo tiene conjunto estándar de propiedades:

**Identification:**
- Tag (obligatorio): identificador único (V-101, E-203, P-304)
- Service: descripción funcional ("Propane Separator")
- Description: descripción extendida
- Drawing Reference: plano donde aparece

**Geometric:**
- Dimensiones principales (autopopuladas si paramétrico)
- Volume (calculado)
- Weight (calculado o especificado)

**Process:**
- Design Pressure
- Design Temperature
- Operating Pressure
- Operating Temperature
- Fluid/Service

**Material:**
- Shell Material
- Internal Material (si diferente)
- Insulation Type y Thickness

**Vendor:**
- Manufacturer
- Model Number
- Serial Number
- Purchase Order

### 7.2 Creación de Custom Properties

Para datos específicos de organización no cubiertos por propiedades estándar.

**Ejemplos de custom properties:**

- Número de Requisición (Req. No.)
- Código de Área de Planta (Plant Area)
- Responsible Engineer
- Criticality Level (critical, non-critical)
- Spare Equipment Available (Yes/No)
- Lead Time (semanas)
- Budget Code

**Procedimiento para añadir custom properties:**

1. **Project Properties Setup** → **Custom Properties**
2. Click **Add Custom Property**
3. Configurar:
   - **Property Name:** "RequisitionNumber"
   - **Display Name:** "Req. No."
   - **Data Type:** String, Integer, Float, Boolean, Date
   - **Default Value:** [optional]
   - **Required:** [Yes | No]
   - **Applies To:** Equipment, Piping, Structural (seleccionar)
4. Guardar: propiedad disponible para todos los equipos

**Asignar valores:**

1. Seleccionar equipo
2. Properties palette → sección **Custom Properties**
3. Introducir valor para cada custom property
4. Valores se guardan con equipo

**Extracción a reportes:**

Custom properties pueden incluirse en reportes:
1. Report Generator → Equipment List
2. Configurar columnas: añadir custom properties
3. Exportar a Excel: incluye columnas personalizadas

### 7.3 Data Manager para Edición Masiva

**Equipment Data Manager:**

Herramienta para editar propiedades de múltiples equipos simultáneamente.

Acceso:
```
Plant 3D → Equipment → Equipment Data Manager
```

**Interfaz:**

Tabla con:
- Filas: cada equipo del proyecto
- Columnas: propiedades (estándar y custom)
- Celdas editables directamente

**Funcionalidad:**

**Filtrado:**
- Filtrar por tipo de equipo: solo vessels, solo pumps, etc.
- Filtrar por área: equipos en Unit 100, Unit 200, etc.
- Filtrar por propiedad: equipos sin tag asignado, presión >300 psig

**Edición masiva:**
- Seleccionar múltiples filas
- Cambiar valor en una columna
- Aplica a todas las seleccionadas
- Ejemplo: cambiar material de 10 vessels simultáneamente

**Importación/Exportación:**
- Exportar tabla a Excel
- Editar en Excel (usando herramientas de hoja de cálculo)
- Importar de vuelta a Plant 3D
- Cambios se reflejan en modelo 3D

**Validación:**
- Data Manager valida tipos de datos (no permite texto en campo numérico)
- Detecta tags duplicados
- Identifica propiedades faltantes requeridas

## 8. Bibliotecas de Equipos Personalizados

### 8.1 Creación de Biblioteca Corporativa

Para estandarizar equipos en organización:

**Pasos:**

1. **Diseñar equipos estándar:**
   - Recipientes típicos de la empresa (diámetros, alturas estándar)
   - Tanques según especificaciones corporativas
   - Configuraciones preferidas de intercambiadores

2. **Crear templates:**
   - Definir cada equipo estándar con parámetros
   - Ejemplo: "Recipiente Vertical 2m × 6m, Elipsoidal, 150#"
   - Guardar como template con nombre descriptivo

3. **Organizar en biblioteca:**
   ```
   Corporate Equipment Library:
   ├── Vessels
   │   ├── Vertical_1m_x_3m_150psi.xml
   │   ├── Vertical_2m_x_6m_150psi.xml
   │   ├── Horizontal_1.5m_x_5m_100psi.xml
   │   └── [more standards...]
   ├── Tanks
   │   ├── API650_42m_x_14m_Cone_Roof.xml
   │   ├── API650_30m_x_12m_Floating_Roof.xml
   │   └── [more standards...]
   ├── Heat_Exchangers
   │   ├── TEMA_AEL_600mm_x_6m.xml
   │   └── [more standards...]
   └── Rotating_Equipment
       ├── Pumps (catalog items)
       └── Compressors (catalog items)
   ```

4. **Ubicación compartida:**
   - Servidor de red: `\\CompanyServer\Engineering\PlantData\EquipmentLibrary\`
   - Todos los proyectos apuntan a esta ubicación

5. **Documentación:**
   - Crear guía de uso de biblioteca
   - Especificar cuándo usar cada template
   - Procedimiento para solicitar nuevos estándares

### 8.2 Uso de Biblioteca en Proyectos

**Importar biblioteca a proyecto:**

1. **Project Setup** → **Equipment Library Settings**
2. **Add Library Path:** especificar ubicación de biblioteca corporativa
3. Library aparece en Equipment Catalog de Plant 3D

**Insertar equipo de biblioteca:**

1. Comando equipo (PLANTVESSEL, PLANTTANK, etc.)
2. Opción: **From Library**
3. Seleccionar template de biblioteca corporativa
4. Especificar ubicación en modelo
5. Equipo se inserta con propiedades estándar
6. Ajustar parámetros si necesario (conservando estándar base)

**Ventajas de biblioteca corporativa:**

- **Consistencia:** todos los proyectos usan mismos estándares
- **Velocidad:** no configurar cada equipo desde cero
- **Control de calidad:** templates pre-validados por ingeniería
- **Licitaciones:** especificaciones uniformes facilitan procurement
- **Fabricación:** diseños repetitivos reducen costos de fabricación

### 8.3 Actualización y Mantenimiento

**Responsabilidad:**

Designar responsable de biblioteca (típicamente Lead Piping/Equipment Engineer).

**Proceso de actualización:**

1. **Solicitud de nuevo estándar:**
   - Ingeniero de proyecto identifica necesidad
   - Solicitud formal a responsable de biblioteca

2. **Evaluación:**
   - Verificar si estándar existente puede adaptarse
   - Si nuevo estándar es necesario, diseñar según mejores prácticas

3. **Creación y validación:**
   - Crear template de equipo
   - Validar geometría, propiedades, nozzles
   - Prueba en proyecto piloto

4. **Publicación:**
   - Añadir a biblioteca corporativa
   - Notificación a equipo de ingeniería
   - Actualizar documentación de biblioteca

5. **Revisión periódica:**
   - Anual: revisar templates para actualizaciones de código (ASME, API)
   - Eliminar templates obsoletos
   - Incorporar lecciones aprendidas de proyectos

## Evaluación de Conocimientos

Responda las siguientes preguntas para verificar su comprensión:

**Pregunta 1:**
¿Cuál es el tipo de cabezal (head) más común en recipientes a presión de plantas de proceso y por qué?

A) Hemisférico - porque ofrece la máxima eficiencia estructural
B) Elipsoidal 2:1 - por balance óptimo entre costo y eficiencia estructural
C) Toriesférico - porque es el más fácil de fabricar
D) Plano - por simplicidad de diseño

**Pregunta 2:**
Un tanque de almacenamiento API 650 con múltiples cursos (shell courses) típicamente tiene:

A) Espesor uniforme en todos los cursos
B) Espesor creciente de arriba hacia abajo debido a presión hidrostática
C) Espesor mayor en el tope para resistir presión de vapor
D) Espesor variable aleatoriamente según disponibilidad de placas

**Pregunta 3:**
En la nomenclatura TEMA para intercambiadores de calor shell & tube, ¿qué representa la configuración "AEU"?

A) A=Channel with removable cover, E=One-pass shell, U=U-tube bundle
B) A=Fixed tubesheet, E=Two-pass shell, U=Uniform tubes
C) A=ASME design, E=Electric heating, U=Utility service
D) A=API standard, E=Economizer, U=Utility

**Pregunta 4:**
¿Cuál es la ventaja principal de un soporte tipo "skirt" para recipientes verticales comparado con soportes de "legs"?

A) Menor costo de fabricación
B) Distribución uniforme de cargas sin esfuerzos localizados en el shell
C) Facilita acceso para mantenimiento bajo el recipiente
D) Requiere menos espacio de instalación

**Pregunta 5:**
Al convertir un bloque de AutoCAD a equipo inteligente de Plant 3D, ¿cuál es el elemento más crítico que debe definirse para permitir conexiones inteligentes de tuberías?

A) El peso del equipo
B) Los connection points (nozzles) con ubicación y dirección
C) El color del equipo en el modelo 3D
D) El material de construcción

## Ejercicio Práctico

**Título:** Modelado Completo de Recipiente a Presión con Especificaciones ASME

**Tiempo estimado:** 50 minutos

**Objetivo:**
Crear un recipiente vertical de separación bifásica (gas-líquido) con especificaciones completas según ASME Section VIII División 1, incluyendo geometría precisa, materiales, condiciones de diseño, y preparación para adición de boquillas (Lección 20).

**Escenario:**
Usted es el ingeniero de equipos en un proyecto de modernización de refinería. Debe modelar el recipiente de separación de propano V-101 que formará parte de la unidad de recuperación de GLP. El recipiente ha sido diseñado por un fabricante (datos de diseño proporcionados abajo) y usted debe crear el modelo 3D preciso para integración en layout de planta.

**Especificaciones de diseño proporcionadas:**

```
VESSEL DATA SHEET - V-101
=====================================
Tag: V-101
Service: Propane Flash Separator
Description: Two-phase vertical separator for propane/condensate separation

DESIGN CONDITIONS:
- Design Pressure: 250 psig (17.2 bar)
- Design Temperature: 150°F (66°C)
- Operating Pressure: 200 psig (13.8 bar)
- Operating Temperature: 120°F (49°C)
- Corrosion Allowance: 3 mm (1/8 inch)
- MAWP: 265 psig (calculated)

SHELL DIMENSIONS:
- Inside Diameter (ID): 2000 mm (78.74 inches)
- Tangent-to-Tangent Height: 6000 mm (236.2 inches)
- Shell Thickness: 14 mm (nominal, includes CA)
- Number of Shell Courses: 2 (3000 mm each)
- Shell Material: SA-516 Grade 70 (carbon steel plate)

TOP HEAD:
- Head Type: ASME F&D (2:1 Elliptical)
- Head Thickness: 14 mm (nominal, includes CA)
- Straight Flange: 50 mm (2 inches)
- Head Material: SA-516 Grade 70

BOTTOM HEAD:
- Head Type: ASME F&D (2:1 Elliptical)
- Head Thickness: 14 mm (nominal, includes CA)
- Straight Flange: 50 mm (2 inches)
- Head Material: SA-516 Grade 70

SUPPORT:
- Support Type: Skirt (carbon steel)
- Skirt Inside Diameter: 1800 mm
- Skirt Height: 2000 mm (to clear nozzles and provide access)
- Skirt Thickness: 10 mm (nominal)
- Skirt Material: SA-516 Grade 70
- Base Ring: Yes, 250 mm wide × 12 mm thick
- Anchor Bolts: 16× M24, BC 2100 mm

NOZZLES (to be added in Lesson 20):
- N1: Vapor Outlet, 8" 150# RF, TOS (top of shell), 0°
- N2: Feed Inlet, 6" 300# RF, Side, elevation +4500mm, 90°
- N3: Liquid Outlet, 4" 150# RF, Side, elevation +500mm, 180°
- N4: Drain, 2" 150# RF, BOS (bottom of shell), 270°
- N5: Level Gauge, 2" 150# RF, Side, elevation +2000mm, 0°
- N6: PSV (Pressure Safety Valve), 4" 150# RF, TOS, 180°
- N7: Pressure Gauge, 1" 150# NPT, Side, elevation +5000mm, 90°
- N8: Temperature, 1" 150# NPT, Side, elevation +4000mm, 270°

WEIGHT SUMMARY (estimated):
- Empty Weight: 8,500 kg
- Operating Weight: 14,200 kg
- Hydrostatic Test Weight: 38,500 kg

CODE OF CONSTRUCTION:
- ASME Boiler and Pressure Vessel Code, Section VIII, Division 1
- Latest Edition with Addenda
- ASME U-Stamp required

FABRICATOR: To Be Determined (TBD)
VESSEL DRAWING: V-101-GA-001 (General Arrangement)
P&ID REFERENCE: Drawing 1001-P-001
```

**Instrucciones paso a paso:**

**Parte 1: Configuración Inicial y Creación de Recipiente (15 minutos)**

1. Abrir nuevo proyecto de Plant 3D o archivo existente de Módulo 4
2. Establecer unidades: métricas (mm)
3. Crear layer para equipos: "EQUIPMENT" (color: cyan)
4. Establecer vista: isométrico SW (southwest)

5. Ejecutar comando: `PLANTVESSEL`
6. Seleccionar **Orientation: Vertical**
7. **Insertion Point:** especificar coordenadas base
   - Sugerencia: X=0, Y=0, Z=0 (fondo de skirt en origen)
   - Método: type coordinates o click en origen WCS

8. Cuadro **Vertical Vessel Properties** se abre:

**Pestaña Identification:**
- Tag: `V-101`
- Service: `Propane Flash Separator`
- Description: `Two-phase vertical separator for propane/condensate separation`
- Drawing Reference: `V-101-GA-001`

**Pestaña Shell:**
- Inside Diameter: `2000` mm
- Tangent-to-Tangent Height: `6000` mm
- Shell Thickness: `14` mm
- Number of Courses: `2`
  - Course 1 Height: `3000` mm
  - Course 2 Height: `3000` mm
- Shell Material: `SA-516 Gr.70` (seleccionar de lista o custom)

9. Confirmar y observar generación de shell

**Parte 2: Configuración de Cabezales (8 minutos)**

10. Continuar en **Vessel Properties** (o editar vessel ya creado):

**Pestaña Top Head:**
- Head Type: `Elliptical 2:1` (ASME F&D)
- Head Thickness: `14` mm
- Straight Flange Height: `50` mm
- Head Material: `SA-516 Gr.70`

**Verificación de geometría de cabezal elipsoidal:**
- Para diámetro 2000 mm, altura de cabezal = 2000/4 = 500 mm (automático)
- Straight flange añade 50 mm adicionales
- Altura total desde tangent line a apex: 550 mm

**Pestaña Bottom Head:**
- Head Type: `Elliptical 2:1`
- Head Thickness: `14` mm
- Straight Flange Height: `50` mm
- Head Material: `SA-516 Gr.70`

11. Aplicar cambios y verificar en modelo 3D:
    - Vista de elevación: verificar altura total
    - Altura total desde base de bottom head: ~6000 + 500 + 500 = 7000 mm (aprox.)

**Parte 3: Configuración de Soporte Tipo Skirt (10 minutos)**

12. Editar vessel → **Pestaña Support:**

**Support Configuration:**
- Support Type: `Skirt`
- Skirt Inside Diameter: `1800` mm
- Skirt Height: `2000` mm
- Skirt Thickness: `10` mm
- Skirt Material: `SA-516 Gr.70`

**Base Ring:**
- Include Base Ring: `Yes`
- Base Ring Width: `250` mm (extends outward from skirt OD)
- Base Ring Thickness: `12` mm

**Anchor Bolts:**
- Include Anchor Bolts: `Yes`
- Number of Anchor Bolts: `16`
- Bolt Size: `M24`
- Bolt Circle Diameter: `2100` mm
- Bolt Material: `ASTM A-193 B7` (high-strength bolt)

13. Aplicar y verificar:
    - Vista de planta: verificar círculo de bolt circle con 16 bolts uniformemente espaciados
    - Vista de elevación: verificar que skirt eleva recipiente 2000 mm sobre base

**Parte 4: Condiciones de Diseño y Materiales (7 minutos)**

14. **Pestaña Design Conditions:**

**Pressures:**
- Design Pressure: `250` psig (convertir: 17.2 bar = 1.72 MPa)
- Operating Pressure: `200` psig (13.8 bar = 1.38 MPa)
- MAWP (Maximum Allowable Working Pressure): `265` psig (calculado por fabricante)
- External Pressure: `15` psia (vacuum consideration)

**Temperatures:**
- Design Temperature: `150` °F (convertir: 66°C)
- Operating Temperature: `120` °F (49°C)
- Minimum Design Metal Temperature: `-20` °F (para SA-516 Gr.70)

**Allowances:**
- Corrosion Allowance: `3` mm (0.118 inches)
  - Aplicado a: Shell Interior, Heads Interior
- Weld Joint Efficiency: `0.85` (spot radiography per ASME VIII-1 UW-12)
  - Si full radiography: 1.0

**Code:**
- Design Code: `ASME Section VIII Division 1`
- Code Year: `2021` (latest edition)
- Code Case: [none]
- Stamp Required: `U-Stamp` (ASME)

15. **Pestaña Materials - Detalle:**

**Shell:**
- Material Specification: `SA-516`
- Grade: `70`
- Type: `Carbon Steel Plate`
- Allowable Stress: `138 MPa` @ 66°C (from ASME Section II Part D)

**Heads:**
- Same as shell: `SA-516 Grade 70`

**Skirt:**
- Material: `SA-516 Grade 70` (same for consistency)

**Parte 5: Propiedades de Proceso y Custom Properties (5 minutos)**

16. **Pestaña Process Data:**

**Fluid Service:**
- Fluid: `Propane (C3H8) with condensate`
- Phase: `Two-phase (Gas-Liquid)`
- Liquid Specific Gravity: `0.51` (propane liquid)
- Gas Molecular Weight: `44` (propane)

**Operating Conditions:**
- Operating Level (Normal): `50%` of tangent height = 3000 mm from bottom tangent
- High Level Alarm: `75%` = 4500 mm
- Low Level Alarm: `25%` = 1500 mm
- Residence Time: `3` minutes (at normal flow)

17. **Custom Properties** (definir si no existen):

Añadir custom properties:
- **Requisition Number:** `REQ-2024-0156`
- **Plant Area:** `LPG Recovery Unit 100`
- **Criticality:** `Critical` (dropdown: Critical, Non-Critical)
- **Spare Available:** `No`
- **Lead Time:** `24` weeks
- **Budget Code:** `CAPEX-2024-LPG-001`

**Parte 6: Cálculo de Volumen y Pesos (5 minutos)**

18. Verificar cálculos automáticos de Plant 3D:

**Volume:**
- Plant 3D calcula volumen total del recipiente
- Volumen de cilindro: V = π × r² × h = π × (1.0)² × 6.0 = 18.85 m³
- Volumen de 2 cabezales elipsoidales: V_head = (π/12) × D³ = (π/12) × (2.0)³ = 2.09 m³ (ambos)
- Volumen total: ~18.85 + 2.09 = ~21 m³
- Verificar: Properties → Calculated Volume

**Weight:**
- Si Plant 3D no calcula automáticamente, introducir manualmente:
- Empty Weight: `8500` kg (from data sheet)
- Operating Weight: `14200` kg
- Hydro Test Weight: `38500` kg
- Estos valores serán usados para diseño de fundación

**Parte 7: Visualización y Verificación (5 minutos)**

19. Generar vistas de documentación:

**Vista Isométrica:**
- Comando: `3DORBIT`
- Orientación: SW Isometric
- Zoom extents: verificar modelo completo visible
- Screenshot para documentación

**Vista en Elevación:**
- Comando: `VIEW` → `Right`
- Verificar:
  - Altura total desde base de skirt a apex de top head
  - Cálculo manual: 2000 (skirt) + 550 (bottom head) + 6000 (shell) + 550 (top head) = 9100 mm
  - Debe coincidir con modelo

**Vista en Planta:**
- Comando: `VIEW` → `Top`
- Verificar:
  - Diámetro externo de shell: 2000 + 2×14 = 2028 mm
  - Diámetro de skirt (exterior): 1800 + 2×10 = 1820 mm
  - Bolt circle: 2100 mm con 16 bolts

**Sección Transversal:**
- Crear plano de sección vertical a través del centro
- Verificar espesores de pared son correctos (14 mm)
- Verificar geometría de cabezales elipsoidal

20. Realizar inspección de propiedades:

**Properties Palette:**
- Seleccionar vessel V-101
- Verificar todas las secciones completadas:
  - Identification ✓
  - Geometry ✓
  - Materials ✓
  - Design Conditions ✓
  - Process Data ✓
  - Support ✓
  - Custom Properties ✓

**Parte 8: Documentación y Reporte (5 minutos)**

21. Generar reporte de equipo:

- Plant 3D → Reports → Equipment Data Sheet
- Seleccionar V-101
- Generar reporte en formato:
  - PDF para revisión
  - Excel para base de datos

22. Verificar reporte contiene:
- Todas las dimensiones especificadas
- Materiales correctos
- Condiciones de diseño
- Pesos calculados
- Código de construcción

23. Crear layout drawing:
- Generar plano de planta y elevación del vessel
- Incluir:
  - Dimensiones principales
  - Ubicación de nozzles (marcadores para Lección 20)
  - Tabla de datos del vessel
- Título de plano: "VESSEL V-101 - GENERAL ARRANGEMENT"
- Número de dibujo: V-101-GA-001

24. Guardar archivo:
- Nombre: `Modulo4_Leccion19_V101_[SuNombre].dwg`
- Backup en ubicación segura

**Criterios de Evaluación:**

- **Dimensiones geométricas (25%)**: ID, T-T height, head types correctos
- **Materiales y espesores (20%)**: SA-516 Gr.70, espesores nominales 14mm
- **Condiciones de diseño (20%)**: Presión 250 psig, temperatura 150°F, CA 3mm
- **Soporte (15%)**: Skirt correctamente dimensionado, base ring, anchor bolts
- **Propiedades de proceso (10%)**: Fluid service, operating conditions
- **Documentación (10%)**: Reportes generados, vistas de verificación

**Entregables:**

1. Archivo DWG con vessel V-101 completamente configurado
2. Reporte de data sheet exportado (PDF)
3. Capturas de pantalla:
   - Vista isométrica del vessel completo
   - Vista de elevación con dimensiones anotadas
   - Vista en planta mostrando bolt circle
   - Sección transversal mostrando espesores
4. Plano de layout (DWG o PDF) con general arrangement

**Nota:** Este ejercicio prepara el vessel para Lección 20, donde añadiremos el programa completo de 8 nozzles especificados en el data sheet.

## Resumen de la Lección

En esta lección exhaustiva, ha dominado el modelado paramétrico de equipos industriales en AutoCAD Plant 3D 2026:

**Conceptos fundamentales cubiertos:**

1. **Equipment Designer Paramétrico**: Comprensión de ventajas del modelado paramétrico vs bloques CAD tradicionales, con geometría que se actualiza automáticamente al cambiar parámetros.

2. **Recipientes a Presión ASME**: Dominio completo de creación de vessels verticales y horizontales según ASME BPVC Section VIII, incluyendo configuración de shells, heads (elipsoidal, hemisférico, toriesférico), y soportes (skirt, saddles, legs).

3. **Tanques de Almacenamiento API 650**: Habilidad para modelar tanques atmosféricos con múltiples shell courses, techos (cone, dome, floating), y fundamentos de diseño según estándar API.

4. **Intercambiadores de Calor**: Conocimiento de tipos (shell & tube, air cooler) y configuración TEMA para intercambiadores, con parámetros térmicos y mecánicos.

5. **Equipos Rotativos de Catálogo**: Procedimiento para añadir bombas y compresores desde catálogos de fabricantes con especificaciones precisas.

6. **Conversión de Bloques CAD**: Técnicas para convertir bloques existentes a equipos inteligentes de Plant 3D con connection points y propiedades.

7. **Gestión de Datos**: Configuración de propiedades estándar y custom properties, uso de Equipment Data Manager para edición masiva, y extracción a reportes.

8. **Bibliotecas Corporativas**: Creación y mantenimiento de bibliotecas de equipos estándar para consistencia entre proyectos.

**Habilidades prácticas desarrolladas:**

- Crear recipientes verticales y horizontales con especificaciones completas ASME
- Configurar tipos de cabezales apropiados para cada aplicación
- Diseñar sistemas de soporte (skirt, saddles, legs) según requisitos estructurales
- Modelar tanques API 650 con shell courses y techos de diversos tipos
- Configurar intercambiadores shell & tube según nomenclatura TEMA
- Seleccionar y colocar bombas y compresores de catálogos
- Convertir bloques CAD legacy a equipos inteligentes
- Definir connection points precisos para integración con tuberías
- Gestionar propiedades de datos y custom properties
- Generar reportes y datasheets de equipos
- Crear y mantener bibliotecas corporativas de equipos estándar

**Mejores prácticas aprendidas:**

- Usar templates paramétricos para velocidad y consistencia
- Verificar cálculos de volumen y peso con métodos manuales
- Documentar código de diseño (ASME, API) en propiedades
- Establecer bibliotecas corporativas antes de proyectos grandes
- Validar geometría con vistas de sección y elevación
- Mantener nomenclatura consistente de tags (V-101, E-202, etc.)
- Incluir información de fabricante y procurement en custom properties
- Generar datasheets desde modelo 3D (single source of truth)

**Estándares aplicados:**

- ASME BPVC Section VIII Division 1 (recipientes a presión)
- API Standard 650 (tanques atmosféricos soldados)
- API Standard 620 (tanques de baja presión)
- TEMA Standards (intercambiadores shell & tube)
- API 610 (bombas centrífugas)
- API 617 (compresores centrífugos)

**Integración con lecciones previas:**

Esta lección se construye sobre:
- Lección 16-17: Estructura que soporta equipos y plataformas de acceso
- Lección 18: Barandas alrededor de plataformas de equipos

**Preparación para lecciones siguientes:**

Los equipos modelados en esta lección son base para:
- **Lección 20**: Configuración completa de nozzles y conexiones de equipos, donde añadiremos boquillas al recipiente V-101 creado en el ejercicio práctico.

El modelado preciso de equipos es fundamental para el diseño integral de plantas de proceso. Los equipos no son elementos aislados: definen el layout de la planta, determinan requisitos estructurales, establecen elevaciones de tuberías, y representan la mayor inversión de capital en proyectos industriales. Un modelo 3D preciso de equipos con propiedades completas permite optimización de diseño, coordinación entre disciplinas, y generación de documentación de construcción de alta calidad.

Con el dominio de AutoCAD Plant 3D 2026 adquirido en esta lección, usted está preparado para modelar equipos industriales complejos que cumplen con estándares internacionales y satisfacen requisitos de proyectos reales en México y Latinoamérica.

## Recursos Adicionales

**Códigos y estándares:**
- ASME Boiler & Pressure Vessel Code Section VIII Division 1 (última edición)
- API Standard 650: Welded Tanks for Oil Storage (12th Edition)
- API Standard 620: Design and Construction of Large, Welded, Low-Pressure Storage Tanks
- TEMA Standards of the Tubular Exchanger Manufacturers Association (10th Edition)
- API Standard 610: Centrifugal Pumps for Petroleum, Petrochemical and Natural Gas Industries

**Software de diseño de equipos:**
- PVElite (Intergraph/Hexagon) - software de diseño de recipientes a presión
- TANK (Intergraph) - software de diseño de tanques API 650/620
- HTRI Xchanger Suite - diseño térmico de intercambiadores
- Compress (Codeware) - diseño de recipientes y tanques

**Catálogos de fabricantes:**
- Flowserve - bombas centrífugas y equipos rotativos
- Sulzer - bombas y agitadores industriales
- Alfa Laval - intercambiadores de placas
- API Heat Transfer - air coolers y intercambiadores

**Referencias técnicas:**
- "Pressure Vessel Design Manual" - Dennis R. Moss (4th Edition)
- "Process Equipment Design: Vessel Design" - Lloyd E. Brownell
- "Heat Exchanger Design Handbook" - T. Kuppan
- "Pump Handbook" - Igor J. Karassik (4th Edition)

**Próxima lección:**
Lección 20: Boquillas y Conexiones de Equipos - donde completaremos el diseño del vessel V-101 añadiendo el programa completo de nozzles, configurando orientaciones precisas, y validando interferencias con tuberías.
