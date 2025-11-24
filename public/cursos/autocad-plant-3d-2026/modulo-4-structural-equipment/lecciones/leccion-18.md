# Lección 18: Barandas y Sistemas de Seguridad

## Información General

**Duración estimada:** 60 minutos
**Nivel:** Intermedio
**Módulo:** 4 - Acero Estructural y Equipos
**Prerequisitos:** Lecciones 16-17

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Implementar sistemas completos de barandas (handrails) conforme a estándares OSHA y NOM
2. Configurar estilos de barandas tubulares, estructurales y de cable
3. Aplicar requisitos de altura, espaciamiento y resistencia según normativa
4. Colocar barandas automáticamente en plataformas y escaleras
5. Gestionar tratamientos de esquinas, extremos e intersecciones
6. Añadir toe boards (zócalos protectores) y kick plates
7. Crear estilos de barandas personalizados para aplicaciones específicas
8. Validar cumplimiento normativo de sistemas de protección contra caídas

## Introducción

Los sistemas de barandas (handrails, guardrails) y protecciones contra caídas son componentes críticos de seguridad en plantas industriales. No son elementos opcionales ni decorativos: son requerimientos legales establecidos por OSHA (Occupational Safety and Health Administration) en Estados Unidos, la NOM-001-STPS en México, y estándares API (American Petroleum Institute) para instalaciones de proceso. Un diseño inadecuado de barandas puede resultar en accidentes graves, demandas laborales, multas regulatorias, y responsabilidad legal para la empresa y el diseñador.

Las estadísticas de la Secretaría del Trabajo y Previsión Social (STPS) de México muestran que las caídas desde altura representan aproximadamente el 15% de todos los accidentes laborales mortales en construcción e industria. La mayoría de estas caídas ocurren en situaciones donde las barandas estaban ausentes, mal diseñadas, o instaladas incorrectamente. Por esta razón, tanto OSHA como la NOM-001-STPS establecen requisitos muy específicos sobre altura de barandas, espaciamiento de postes intermedios, resistencia a cargas laterales, y configuración de componentes.

AutoCAD Plant 3D 2026 incorpora herramientas especializadas para diseñar sistemas de barandas que cumplen automáticamente con estos estándares. El software permite configurar estilos de barandas predefinidos (OSHA-compliant, API-compliant) o crear estilos personalizados según necesidades específicas del proyecto. Las barandas pueden colocarse manualmente o generarse automáticamente al crear plataformas y escaleras. El sistema es completamente paramétrico: si se modifica la geometría de una plataforma, las barandas se ajustan automáticamente.

Los sistemas de barandas típicos incluyen varios componentes: (1) poste de baranda (handrail post) que proporciona soporte estructural, (2) riel superior (top rail) a altura mínima de 42 pulgadas (1067 mm) según OSHA, (3) riel intermedio (midrail) ubicado a punto medio entre superficie de piso y riel superior, (4) plinto o zócalo protector (toe board) de mínimo 4 pulgadas (102 mm) de altura para evitar caída de objetos, y (5) en algunos casos, protección intermedia adicional con malla, cables o barrotes.

Las barandas deben resistir cargas específicas según normativa. OSHA 1910.29 requiere que el riel superior soporte una carga concentrada de 200 libras (890 N) aplicada en cualquier dirección en cualquier punto del riel. El sistema completo debe soportar cargas distribuidas y no presentar deflexión excesiva bajo carga de diseño. Estos requisitos afectan la selección de perfiles (típicamente tubería schedule 40 de 1.5" a 2" de diámetro), el espaciamiento máximo de postes (típicamente 6-8 pies, o 1800-2400 mm), y el tipo de conexiones (soldadas vs atornilladas).

En esta lección exhaustiva, exploraremos todos los aspectos del diseño de sistemas de barandas usando AutoCAD Plant 3D 2026. Aprenderá a configurar estilos conformes con OSHA y NOM, a colocar barandas automáticamente en plataformas y escaleras creadas previamente, a gestionar situaciones especiales como esquinas, aberturas y cambios de elevación, y a personalizar barandas para aplicaciones específicas como áreas clasificadas (zonas peligrosas) donde se requieren materiales y configuraciones especiales. Este conocimiento es esencial para cualquier diseñador de plantas industriales que busque crear instalaciones seguras, conformes con normativa, y que protejan efectivamente a los trabajadores.

## 1. Normativa y Estándares de Barandas

### 1.1 Estándares OSHA (Estados Unidos)

**OSHA 1910.29 - Walking-Working Surfaces: Fall Protection Systems and Falling Object Protection**

Este estándar establece los requisitos mínimos para sistemas de barandas en lugares de trabajo industriales:

**Requisitos de altura:**
- Riel superior (top rail): 42 pulgadas ± 3 pulgadas (1067 mm ± 76 mm) sobre superficie de piso
- Altura estándar recomendada: 42 pulgadas exactas (1067 mm)
- Medición desde superficie de piso/plataforma hasta parte superior del riel
- No se permite reducción de altura en ninguna sección

**Requisitos de rieles intermedios:**
- Midrail (riel intermedio): ubicado a punto medio entre superficie y top rail
- Típicamente a 21 pulgadas (533 mm) cuando top rail está a 42"
- Debe soportar carga mínima de 150 libras (667 N) en cualquier dirección
- Puede sustituirse por barrotes verticales, paneles o malla

**Requisitos de resistencia estructural:**
- Top rail: soportar carga puntual de 200 libras (890 N) en cualquier dirección
- Sistema completo: resistir carga sin falla catastrófica
- Deflexión máxima: no exceder 3 pulgadas (76 mm) bajo carga de diseño
- Factor de seguridad: típicamente 2.0 sobre cargas de diseño

**Espaciamiento de postes (posts):**
- Espaciamiento máximo: 8 pies (2438 mm) entre centros de postes
- Espaciamiento típico de diseño: 6 pies (1829 mm) para optimizar resistencia
- Postes en esquinas: siempre requeridos en cambios de dirección >15°
- Material típico: tubería schedule 40 de 1.5" o 2" diámetro

**Toe boards (zócalos protectores):**
- Altura mínima: 3.5 pulgadas (89 mm), típicamente 4" (102 mm)
- Distancia máxima de piso: 0.25 pulgadas (6 mm)
- Proyección máxima hacia área de trabajo: 1 pulgada (25 mm)
- Material: placa de acero, angular, o perfil especial
- Requerido cuando: existe riesgo de caída de objetos a nivel inferior

**Aberturas y puertas:**
- Barandas removibles: permitidas con cadena y señalización
- Puertas de acceso: deben tener barandas en ambos lados
- Aberturas para escaleras: barandas a 42" en bordes expuestos
- Aberturas temporales: protección temporal requerida

### 1.2 Normativa Mexicana NOM-001-STPS

**NOM-001-STPS-2008: Edificios, locales, instalaciones y áreas en los centros de trabajo - Condiciones de seguridad**

Esta norma oficial mexicana establece requisitos específicos para instalaciones industriales en México:

**Altura de barandas:**
- Altura mínima de baranda: 90 centímetros (900 mm)
- Nota: inferior a OSHA, por lo que proyectos típicamente usan OSHA (más conservador)
- Medición desde superficie de trabajo hasta parte superior
- Debe mantenerse en toda la longitud sin reducciones

**Componentes requeridos:**
- Pasamanos superior (equivalente a top rail)
- Barandal intermedio ubicado a altura media
- Rodapié o zócalo cuando existe riesgo de caída de objetos
- Todos los componentes deben ser resistentes a corrosión

**Resistencia y materiales:**
- Materiales: acero, acero inoxidable, o aluminio estructural
- Resistencia: soportar peso de trabajadores apoyados
- Anclajes: fijación segura a estructura principal
- Inspección: revisión anual de integridad estructural

**Aplicabilidad:**
- Obligatoria en plataformas >2 metros de altura
- Requerida en escaleras con >4 escalones
- Necesaria en aberturas de piso >25 cm de dimensión
- Obligatoria en rampas con pendiente >6%

**Diferencias clave OSHA vs NOM-001-STPS:**

| Aspecto | OSHA 1910.29 | NOM-001-STPS |
|---------|-------------|--------------|
| Altura top rail | 42" (1067 mm) | 90 cm (900 mm) |
| Carga de diseño | 200 lbf (890 N) | No especificada cuantitativamente |
| Espaciamiento posts | Máx 8' (2438 mm) | No especificado |
| Toe board altura | Min 3.5" (89 mm) | No especificado |
| Midrail | Requerido | Requerido |

**Recomendación práctica para México:**
- Usar estándar OSHA por ser más estricto y detallado
- Cumplir OSHA garantiza cumplimiento automático con NOM
- Corporaciones multinacionales típicamente requieren OSHA globalmente
- Documentar cumplimiento con ambos estándares en planos

### 1.3 Estándares API para Plantas de Proceso

**API RP 505: Recommended Practice for Classification of Locations for Electrical Installations at Petroleum Facilities Classified as Class I, Zone 0, Zone 1, and Zone 2**

Aunque principalmente sobre clasificación eléctrica, API 505 afecta diseño de barandas en áreas clasificadas:

**Requisitos especiales en áreas clasificadas:**
- Materiales no-chispa en Zona 0 y Zona 1
- Acero inoxidable 316L o aluminio en ambientes corrosivos
- Uniones atornilladas preferidas sobre soldadas (inspección)
- Puesta a tierra (grounding) de sistemas metálicos

**API RP 2001: Fire Protection in Refineries**

Establece requisitos de acceso y escape que afectan barandas:

**Rutas de escape:**
- Barandas en rutas de evacuación: altura OSHA más resistencia mejorada
- Aberturas de escape: mínimo 600 mm ancho libre entre postes
- Señalización: marcas reflectivas en áreas de bajo nivel de luz
- Puertas de escape: apertura hacia dirección de escape

**Plataformas de combate de incendios:**
- Barandas reforzadas para soportar mangueras y personal con equipo
- Espaciamiento de postes reducido: 1500 mm máximo
- Toe boards obligatorios de mayor altura: 150 mm
- Accesos despejados mínimo 900 mm ancho

### 1.4 Consideraciones Especiales de Diseño

**Ambientes corrosivos:**
- Plantas químicas: acero inoxidable 304L o 316L
- Refinerías con H2S: materiales resistentes a sulfuros
- Ambientes marinos (offshore): aluminio marino o acero galvanizado
- Recubrimientos: pintura epóxica, galvanizado por inmersión

**Temperaturas extremas:**
- Altas temperaturas (>150°C): expansión térmica, espaciamiento mayor
- Bajas temperaturas (<-20°C): aceros con tenacidad a baja temperatura
- Ciclos térmicos: conexiones que permitan expansión/contracción

**Cargas adicionales:**
- Plantas con puentes grúa: protección contra impacto de cargas
- Áreas de tráfico de montacargas: barandas reforzadas o protectores
- Zonas con nieve/hielo: cargas gravitacionales adicionales

**Accesibilidad y mantenimiento:**
- Secciones removibles para paso de equipos grandes
- Puertas de acceso con seguro tipo "panic bar"
- Espacios para instalación futura de tuberías o cables
- Consideraciones para limpieza y pintura

## 2. Tipos de Sistemas de Barandas en Plant 3D

### 2.1 Barandas Tubulares (Pipe Rail)

Las barandas tubulares son el tipo más común en plantas industriales debido a su facilidad de fabricación, bajo costo y excelente relación resistencia/peso.

**Componentes del sistema tubular:**

**Postes (Posts):**
- Material típico: tubería Schedule 40, diámetro 1.5" o 2"
- Designación ASME: 1.5" NPS Sch 40 (diámetro exterior 1.900", espesor 0.145")
- Designación ASME: 2" NPS Sch 40 (diámetro exterior 2.375", espesor 0.154")
- Altura total: elevación de plataforma + 42" (1067 mm) + longitud de empotramiento
- Espaciamiento: 6 pies (1829 mm) típico, máximo 8 pies (2438 mm)
- Fijación: soldados o atornillados (con placa base) a estructura de plataforma

**Top Rail (riel superior):**
- Material: misma tubería que postes (1.5" o 2" Schedule 40)
- Configuración: tubería continua soldada a postes
- Altura: 42" (1067 mm) desde superficie de piso
- Acabados en extremos: tapón soldado o roscado
- Curvas en esquinas: radio mínimo 4D (4× diámetro de tubería)

**Midrail (riel intermedio):**
- Material: tubería de diámetro igual o menor que top rail
- Típicamente: 1.25" o 1.5" Schedule 40 para economía
- Posición: punto medio entre piso y top rail (21" típico)
- Configuración: continua o segmentada entre postes
- Fijación: soldada a postes o con abrazaderas

**Ventajas de barandas tubulares:**
- Bajo costo de materiales (tubería comercial estándar)
- Fabricación simple (soldadura básica o roscado)
- Excelente resistencia estructural
- Fácil inspección visual (corrosión, daños)
- Disponibilidad global de materiales de reemplazo

**Desventajas:**
- Acumulación de agua en tubería horizontal (corrosión interna)
- Requiere soldadura o roscado (mano de obra calificada)
- Menos estético que sistemas estructurales

**Configuración en Plant 3D:**

```
Handrail Style: "OSHA_Pipe_Rail_1.5in"
├── Post
│   ├── Profile: Pipe_1.5_Sch40
│   ├── Spacing: 1829 mm (6 ft)
│   └── Height: 1067 mm (42 in)
├── Top Rail
│   ├── Profile: Pipe_1.5_Sch40
│   └── Elevation: 1067 mm
├── Midrail
│   ├── Profile: Pipe_1.25_Sch40
│   └── Elevation: 533 mm
└── Toe Board
    ├── Profile: L_3x3x0.25 (angular)
    └── Height: 102 mm (4 in)
```

### 2.2 Barandas Estructurales (Structural Rail)

Las barandas estructurales utilizan perfiles de acero estructural (ángulos, canales) en lugar de tubería.

**Perfiles típicos:**

**Postes de ángulo:**
- AISC L3×3×1/4 (ángulo de 3"×3" espesor 1/4")
- AISC L2.5×2.5×3/16
- Ventaja: mayor rigidez en dirección débil
- Orientación: una ala paralela a plataforma, otra perpendicular

**Top rail de canal:**
- AISC C3×4.1 (canal de 3" de altura, 4.1 lb/ft)
- AISC C4×5.4
- Ventaja: mayor momento de inercia que tubería de peso equivalente
- Orientación: canal con apertura hacia abajo (no acumula agua)

**Midrail de barra plana:**
- Barra plana de 2"×1/4" (50mm×6mm)
- Barra plana de 1.5"×3/16"
- Ventaja: bajo costo, fácil soldadura
- Desventaja: menor rigidez, puede pandear

**Ventajas de barandas estructurales:**
- Mayor rigidez que tubería de peso equivalente
- Perfiles tipo canal no acumulan agua
- Fácil soldadura de conexiones
- Estética más limpia en algunos diseños

**Desventajas:**
- Más costoso que tubería estándar
- Mayor área superficial (más pintura, más corrosión)
- Inspección de corrosión más compleja (ángulos internos)

**Aplicaciones típicas:**
- Plantas petroquímicas con ambientes corrosivos (menos acumulación de agua)
- Áreas con requisitos estéticos (plantas farmacéuticas, alimentos)
- Secciones con altas cargas (plataformas de equipos pesados)

**Configuración en Plant 3D:**

```
Handrail Style: "Industrial_Structural_Rail"
├── Post
│   ├── Profile: AISC_L_3x3x0.25
│   ├── Spacing: 1800 mm
│   └── Rotation: 45° (diagonal orientation)
├── Top Rail
│   ├── Profile: AISC_C_3x4.1
│   └── Elevation: 1067 mm
├── Midrail
│   ├── Profile: Flat_Bar_2x0.25
│   └── Elevation: 533 mm
└── Toe Board
    ├── Profile: Flat_Bar_4x0.25
    └── Height: 102 mm
```

### 2.3 Barandas de Cable (Cable Rail)

Sistemas modernos que utilizan cables de acero inoxidable tensados en lugar de rieles sólidos.

**Componentes:**

**Postes:**
- Acero inoxidable 316L típico (resistencia corrosión)
- Tubería de 2" Schedule 40 o 2.5" Schedule 40
- Espaciamiento: 4-5 pies (1200-1500 mm) máximo
- Requieren mayor rigidez (cables ejercen tensión)

**Cables:**
- Cable de acero inoxidable 316 de 1/4" (6 mm) o 3/16" (5 mm)
- Construcción: 7×19 (7 hilos de 19 alambres cada uno)
- Configuración: 4-5 cables horizontales espaciados uniformemente
- Tensión: 200-400 libras (890-1780 N) por cable
- Terminales: swaged terminals o turnbuckles para ajuste de tensión

**Espaciamiento de cables:**
- Espaciamiento vertical máximo: 4 pulgadas (102 mm) según OSHA
- Típicamente: 5 cables cuando top rail a 42" (espaciamiento ~8")
- Cable superior puede ser tubería para servir como top rail

**Ventajas:**
- Estética moderna, apariencia limpia
- Mínima obstrucción visual (importante en áreas de control)
- Resistencia a corrosión (acero inoxidable)
- Bajo mantenimiento

**Desventajas:**
- Costo significativamente mayor que tubería
- Requiere tensado periódico (alargamiento del cable)
- Postes requieren mayor rigidez (fuerzas de tensión)
- No cumple códigos en algunas jurisdicciones (espaciamiento >4")

**Aplicaciones:**
- Salas de control con vistas a proceso
- Plantas farmacéuticas/alimentos (higiene, fácil limpieza)
- Instalaciones offshore (corrosión marina)
- Áreas arquitectónicas de alto nivel

**Configuración en Plant 3D:**

```
Handrail Style: "Stainless_Cable_Rail"
├── Post
│   ├── Profile: Pipe_2.5_Sch40_SS316L
│   ├── Spacing: 1500 mm
│   └── End Treatment: Tension plate
├── Top Rail
│   ├── Profile: Pipe_2_Sch40_SS316L
│   └── Elevation: 1067 mm
├── Cable Infill
│   ├── Cable Size: 6mm (1/4") 7×19 SS316
│   ├── Quantity: 4 cables
│   ├── Spacing: 203 mm (8")
│   └── Tension: 1335 N (300 lbf)
└── Toe Board
    ├── Profile: SS_Plate_100x6mm
    └── Height: 100 mm
```

### 2.4 Barandas de Malla (Mesh Infill Rail)

Sistemas que utilizan malla metálica expandida o tejida entre postes.

**Tipos de malla:**

**Expanded Metal (metal expandido):**
- Malla creada cortando y estirando lámina de acero
- Designación típica: 3/4" #13 (abertura 3/4", calibre 13)
- Ventaja: fuerte, rígido, bajo costo
- Aplicación: protección contra caídas + protección de objetos

**Wire Mesh (malla tejida):**
- Alambre soldado formando cuadrícula
- Designación típica: 2"×2" calibre 10
- Ventaja: muy resistente, fácil instalación
- Aplicación: áreas de alta seguridad

**Perforated Plate (placa perforada):**
- Lámina de acero con perforaciones regulares
- Designación típica: 1/4" holes @ 3/8" centers
- Ventaja: estética, protección contra viento
- Aplicación: áreas con requisitos estéticos

**Configuración típica:**

**Postes:**
- AISC L3×3×1/4 o tubería 2" Schedule 40
- Espaciamiento: 6-8 pies (diseño estructural según tamaño de panel)

**Marco superior e inferior:**
- Top rail: tubería 1.5" Schedule 40 a 42"
- Bottom rail: tubería o angular a 4" del piso

**Panel de malla:**
- Malla expandida 3/4" #13 galvanizada
- Altura: desde bottom rail hasta top rail (~38")
- Fijación: soldada a marco o clips removibles

**Ventajas:**
- Protección total contra caída de objetos
- Reduce entrada de viento (estabilidad en altura)
- Seguridad mejorada (difícil escalar)
- Puede actuar como barrera visual (privacidad)

**Desventajas:**
- Mayor costo que rieles simples
- Más peso (mayor carga estructural)
- Acumulación de suciedad en malla
- Mayor área expuesta a corrosión

**Aplicaciones:**
- Áreas con manipulación de objetos pequeños
- Plataformas sobre áreas de tráfico peatonal
- Zonas de alta seguridad (sin acceso no autorizado)
- Protección contra viento en plataformas altas

## 3. Colocación de Barandas en Plant 3D

### 3.1 Colocación Automática en Plataformas

Plant 3D puede generar barandas automáticamente al crear plataformas.

**Método 1: Durante creación de plataforma**

Procedimiento:
1. Ejecutar comando `PLANTPLATFORM`
2. Definir geometría de plataforma (esquinas, elevación)
3. En cuadro de diálogo **Platform Properties**:
   - Pestaña **Handrail**
   - Marcar: **Add Handrails Automatically**
   - Seleccionar: **Handrail Style** (ej: "OSHA_Standard_Pipe_Rail")
   - Configurar: **Handrail Sides** (seleccionar lados que llevan baranda)
     - All Sides (todos los lados)
     - Select Sides (seleccionar manualmente)
     - No Handrails (sin barandas)
4. Confirmar y completar plataforma

**Configuración de lados:**

Cuando se selecciona "Select Sides":
- Aparece vista en planta de plataforma
- Click en cada lado que requiere baranda
- Lados seleccionados se resaltan en color
- Confirmar selección

**Casos típicos:**
- Plataforma contra pared: barandas solo en 3 lados (abierto al equipo)
- Plataforma con escalera: sin baranda en punto de acceso
- Plataforma rodeada por tuberías: barandas en perímetro completo

**Método 2: Añadir barandas a plataforma existente**

Procedimiento:
1. Seleccionar plataforma existente sin barandas
2. Click derecho → **Properties** (o comando `PROPERTIES`)
3. En paleta de propiedades:
   - Sección **Handrail**
   - Cambiar **Has Handrails**: de "No" a "Yes"
   - Seleccionar **Handrail Style**
   - Configurar **Handrail Sides**
4. Barandas se generan automáticamente

**Ventajas de colocación automática:**
- Garantiza cumplimiento con espaciamiento de postes
- Altura automática según estilo seleccionado
- Tratamiento de esquinas apropiado
- Actualización dinámica si cambia geometría de plataforma

**Limitaciones:**
- Geometrías complejas pueden requerir edición manual
- Aberturas (puertas, accesos) requieren manipulación posterior
- Barandas removibles no soportadas automáticamente

### 3.2 Colocación Automática en Escaleras

Las escaleras en Plant 3D pueden incluir barandas laterales automáticas.

**Durante creación de escalera:**

Procedimiento:
1. Comando `PLANTSTAIR` (escalera)
2. Definir geometría: punto inicio, punto final, ancho, número de escalones
3. En cuadro **Stair Properties**:
   - Pestaña **Handrail**
   - Marcar: **Add Handrails**
   - Seleccionar **Handrail Style**
   - Configurar **Handrail Location**:
     - Both Sides (ambos lados)
     - Left Side Only (solo izquierdo)
     - Right Side Only (solo derecho)
     - None (sin barandas)
4. Configurar **Top Extension** y **Bottom Extension**

**Extensiones de barandas:**

**Top Extension (extensión superior):**
- Longitud de baranda que se extiende más allá del último escalón
- OSHA requiere: mínimo 12 pulgadas (305 mm) horizontalmente
- Configuración típica: 12-18 pulgadas (305-457 mm)
- Propósito: agarre al subir último escalón

**Bottom Extension (extensión inferior):**
- Longitud de baranda que se extiende antes del primer escalón
- OSHA requiere: mínimo 12 pulgadas (305 mm) horizontalmente
- Configuración típica: 12 pulgadas (305 mm)
- Propósito: agarre antes de descender primer escalón

**Altura de baranda en escalera:**
- Medición: vertical desde línea de nariz de escalones (nosing line)
- Altura requerida: 42 pulgadas (1067 mm) vertical
- Nota: NO es paralela a escalera, es vertical
- Top rail sigue ángulo de escalera pero mantiene altura vertical constante

**Consideraciones especiales escaleras:**

**Escaleras con descansos:**
- Baranda continua a través de descansos
- Cambio de ángulo en intersección escalera-descanso
- Altura constante 42" en todas las secciones

**Escaleras tipo marinero (ladder):**
- Requisitos diferentes: OSHA 1910.27
- Barandas laterales opcionales
- Sistemas de protección contra caídas requeridos >24 pies (7.3 m)

### 3.3 Colocación Manual de Barandas

Para situaciones que requieren control preciso, barandas pueden colocarse manualmente.

**Comando de colocación manual:**

```
Comando: PLANTHANDRAIL
```

**Procedimiento:**

1. Ejecutar `PLANTHANDRAIL`
2. **Select Handrail Style**: elegir estilo de catálogo
3. **Start Point**: especificar punto inicial de baranda
4. **Next Point**: especificar puntos sucesivos (polilínea)
5. **Enter**: finalizar definición de ruta
6. **Elevation**: especificar elevación de base de baranda
7. Baranda se genera siguiendo ruta definida

**Opciones durante colocación:**

**Arc (arco):**
- Permite crear secciones curvas de baranda
- Útil para barandas alrededor de equipos cilíndricos
- Especificar: punto inicial, punto en arco, punto final

**Undo:**
- Deshacer último punto colocado
- Permite corregir errores sin reiniciar comando

**Close:**
- Cerrar polilínea de baranda (conectar último punto con primero)
- Útil para barandas perimetrales cerradas

**Edición de ruta después de colocación:**

Procedimiento:
1. Seleccionar baranda colocada
2. Aparecen **grips** (puntos de edición) en vértices
3. Arrastrar grips para modificar geometría
4. Baranda se actualiza dinámicamente
5. Sistema mantiene espaciamiento de postes automáticamente

**Añadir/eliminar vértices:**
- Seleccionar baranda
- Click derecho → **Edit Handrail Path**
- Usar grips estándar de polilínea de AutoCAD
- Añadir vértice: grip en punto medio de segmento
- Eliminar vértice: arrastrar grip fuera de ruta

### 3.4 Configuración de Espaciamiento de Postes

El espaciamiento de postes es crítico para cumplimiento normativo y resistencia estructural.

**Espaciamiento automático vs manual:**

**Automático (recomendado):**
- Plant 3D calcula espaciamiento óptimo según estilo
- Garantiza cumplimiento con espaciamiento máximo configurado
- Distribuye postes uniformemente a lo largo de baranda
- Siempre coloca postes en esquinas y extremos

**Manual:**
- Usuario especifica ubicación exacta de cada poste
- Útil para situaciones especiales (interferencias, conexiones)
- Requiere verificación manual de cumplimiento normativo

**Configuración en estilo de baranda:**

Acceder a configuración:
1. **Plant 3D** → **Structure** → **Handrail Styles**
2. Seleccionar estilo → **Edit**
3. Sección **Post Settings**:

```
Post Spacing Configuration:
├── Spacing Method: [Automatic | Manual]
├── Maximum Spacing: 2438 mm (8 ft)
├── Preferred Spacing: 1829 mm (6 ft)
├── Corner Posts: [Always | Optional]
└── End Posts: [Always | Optional]
```

**Lógica de espaciamiento automático:**

Algoritmo de Plant 3D:
1. Medir longitud total de segmento de baranda
2. Calcular número de postes: N = CEILING(Length / MaxSpacing) + 1
3. Calcular espaciamiento uniforme: Spacing = Length / (N - 1)
4. Colocar postes uniformemente espaciados
5. Siempre colocar postes en extremos

**Ejemplo de cálculo:**
- Longitud de baranda: 15.0 metros
- Espaciamiento máximo configurado: 2.4 metros
- Número de postes requeridos: CEILING(15.0 / 2.4) + 1 = 7 + 1 = 8 postes
- Espaciamiento real: 15.0 / (8-1) = 2.14 metros
- Resultado: 8 postes espaciados uniformemente a 2.14 m

**Tratamiento de esquinas:**

**Esquina con dos postes:**
- Post en cada lado de esquina
- Configuración conservadora (más rigidez)
- Requerido para ángulos >45°

**Esquina con un poste:**
- Post único en vértice de esquina
- Configuración económica
- Aceptable para ángulos suaves <45°

**Esquina sin poste (curva):**
- Riel superior continuo curvado
- Postes antes y después de curva
- Solo para radios grandes (R > 1.5 m)

## 4. Tratamiento de Esquinas, Extremos e Intersecciones

### 4.1 Esquinas de Barandas

Las esquinas requieren tratamiento especial para mantener resistencia estructural y cumplimiento normativo.

**Tipos de esquinas:**

**Esquina a 90° (ortogonal):**

Configuración estándar:
- Poste en vértice de esquina
- Top rail: conexión a inglete (miter) soldada
- Midrail: conexión a inglete o traslapo
- Resultado: esquina limpia, fuerte

Configuración alternativa (dos postes):
- Poste en cada lado de esquina, separados 100-150 mm
- Top rail: conecta entre postes con codo de 90°
- Ventaja: mayor rigidez, fácil fabricación
- Desventaja: más material, ocupa más espacio

**Esquina obtusa (>90°):**
- Poste único en vértice
- Top rail: miter a ángulo correspondiente
- Espaciamiento a lados de esquina: verificar que no exceda máximo

**Esquina aguda (<90°):**
- Requiere análisis especial
- Ángulos <60°: considerar dos postes
- Top rail: puede requerir placa de refuerzo en miter

**Esquina curva (radiada):**

Para radios grandes (R > 1500 mm):
- Top rail: tubería curvada a radio especificado
  - Curvado en frío: R > 5D (5× diámetro de tubería)
  - Curvado en caliente: radios menores
- Postes: espaciamiento uniforme a lo largo de curva
- Midrail: puede ser segmentado o curvado

Para radios pequeños (R < 1500 mm):
- Aproximar curva con segmentos rectos (polígono)
- Postes en cada vértice de polígono
- Longitud de segmento: típicamente 300-600 mm

**Configuración en Plant 3D:**

```
Corner Treatment Options:
├── Single Post at Corner (poste único)
│   ├── Miter Angle: Calculated automatically
│   ├── Post Rotation: Bisect corner angle
│   └── Rail Connection: Welded miter
├── Double Post at Corner (dos postes)
│   ├── Post Separation: 150 mm typical
│   ├── Rail Connection: Elbow fitting
│   └── Reinforcement: Optional gusset plate
└── Curved Corner (esquina curva)
    ├── Curve Radius: User-specified
    ├── Post Spacing Along Curve: Uniform
    └── Rail: Bent pipe or segmented
```

### 4.2 Extremos de Barandas

Los extremos de barandas requieren tratamiento para evitar enganches y proporcionar terminación adecuada.

**Tipos de terminación:**

**Extremo contra pared o estructura:**
- Top rail: terminado a ras con superficie
- Poste final: soldado o atornillado a estructura
- Placa de montaje: típicamente 150×150×10 mm
- Anclajes: 4 pernos M12 o M16

**Extremo libre (volado):**
- Top rail: doblado 90° hacia abajo (return to post)
- Longitud de retorno: mínimo 150 mm
- Propósito: evitar enganche de ropa, bolsas
- Alternativa: tapón soldado al ras

**Extremo en abertura (puerta, acceso):**
- Baranda removible con cadena y mosquetón
- Señalización: "Keep Closed" / "Mantener Cerrado"
- Alternativa: puerta batiente con baranda integrada
- OSHA requiere: protección equivalente cuando abierto

**Extremo en escalera:**
- Extensión horizontal: mínimo 12" (305 mm) según OSHA
- Altura: mantener 42" (1067 mm) vertical
- Top rail: paralelo a piso en extensión
- Conexión con baranda de plataforma: continua sin gaps

**Configuración de extremos en Plant 3D:**

Al colocar baranda, especificar tratamiento de extremos:

```
End Treatment Dialog:
├── Start End
│   ├── Type: [Wall Mount | Free End | Opening | Stair Extension]
│   ├── Return to Post: [Yes | No]
│   ├── Return Length: 150 mm
│   └── Cap Type: [Welded Cap | Threaded Cap | None]
└── Finish End
    ├── Type: [Wall Mount | Free End | Opening | Stair Extension]
    ├── Return to Post: [Yes | No]
    ├── Return Length: 150 mm
    └── Cap Type: [Welded Cap | Threaded Cap | None]
```

### 4.3 Intersecciones de Barandas

Cuando dos barandas se encuentran (intersección en T o X), requieren tratamiento especial.

**Intersección en T:**

Configuración:
- Baranda principal: continua sin interrupción
- Baranda secundaria: termina conectándose a poste de principal
- Poste en intersección: reforzado o de mayor diámetro
- Top rail: conexión soldada con refuerzo

Detalle de conexión:
- Poste en T: 2" Sch 40 (si barandas son 1.5")
- Top rail secundario: inglete a 90° soldado a top rail principal
- Midrail secundario: puede conectar a poste sin tocar midrail principal
- Gusset plate opcional: triángulo de refuerzo soldado

**Intersección en X (cruz):**

Configuración:
- Cuatro barandas confluyen en punto común
- Poste central: de mayor capacidad (2.5" o 3" Sch 40)
- Top rails: cuatro miters soldados al poste central
- Requiere análisis estructural (cargas de múltiples direcciones)

**Intersección oblicua:**
- Ángulo ≠ 90°
- Cálculo de miters más complejo
- Plant 3D calcula automáticamente ángulos correctos
- Verificar que resultado sea fabricable

**Cambios de elevación:**

**Rampa entre niveles:**
- Baranda sigue inclinación de rampa
- Altura: 42" (1067 mm) vertical desde superficie de rampa
- Top rail: paralelo a rampa
- Intersección con barandas horizontales: cambio de ángulo suave

**Escalón único:**
- Altura <7" (178 mm): baranda a nivel superior
- Altura >7": baranda sigue cambio con transición

### 4.4 Aberturas en Barandas

Las aberturas para acceso de personal o equipos requieren protección especial.

**Tipos de aberturas:**

**Puerta batiente con baranda:**
- Marco de puerta: perfiles estructurales reforzados
- Panel de puerta: incluye top rail, midrail, toe board
- Bisagras: industriales de alta resistencia
- Cerradura: tipo panic bar para escape
- Ancho libre mínimo: 24" (610 mm), típico 36" (914 mm)

**Sección removible con cadena:**
- Top rail y midrail: secciones desmontables
- Postes de conexión: con receptáculos para inserción
- Cadena de seguridad: eslabón de 6 mm con mosquetón
- Señalización: permanente en ambos lados

**Abertura temporal (construcción/mantenimiento):**
- Protección temporal: barricadas, cadenas, señalización
- Señal de advertencia: "Peligro - Abertura en Piso"
- Requiere permiso de trabajo (work permit)
- Reinstalación: inmediatamente después de trabajo

**Requisitos OSHA para aberturas:**
- Toda abertura >48 horas: requiere baranda o cobertura permanente
- Aberturas <48 horas: protección temporal aceptable
- Ancho >25" (635 mm): requiere protección en ambos lados
- Señalización: siempre requerida

## 5. Toe Boards y Kick Plates

### 5.1 Requisitos de Toe Boards

Los toe boards (zócalos protectores, rodapiés) previenen caída de objetos desde plataformas elevadas.

**Definición y propósito:**

Toe board es una barrera vertical de baja altura instalada en el perímetro de plataformas elevadas para:
- Evitar caída de herramientas, materiales, objetos pequeños
- Proteger personal en nivel inferior
- Contener derrames menores de líquidos
- Prevenir que pie de trabajador resbale bajo baranda

**Requisitos OSHA 1910.29(k):**

**Altura mínima:**
- 3.5 pulgadas (89 mm) mínimo según OSHA
- Práctica común: 4 pulgadas (102 mm)
- Medición: desde superficie de plataforma hasta borde superior

**Distancia al piso:**
- Gap máximo entre superficie y toe board: 0.25" (6 mm)
- Propósito: evitar que objetos pequeños pasen por debajo
- Consideración: permitir drenaje de agua

**Proyección:**
- Proyección hacia área de trabajo: máximo 1" (25 mm)
- Proyección hacia exterior: sin límite específico
- Típico: vertical o ligeramente inclinado hacia exterior

**Resistencia:**
- Soportar carga de 50 libras (222 N) aplicada en cualquier dirección
- Sin deflexión excesiva que permita paso de objetos

**Cuándo son requeridos:**

Toe boards son obligatorios cuando:
- Plataforma está >4 pies (1.2 m) sobre nivel inferior
- Existe tránsito de personal o ubicación de equipos en nivel inferior
- Se manipulan herramientas u objetos que pueden caer
- Normativa específica de sitio lo requiere

Toe boards NO son requeridos cuando:
- Plataforma da a área sin acceso (sobre tejado, equipo)
- Baranda tiene infill sólido (malla, panel) hasta el piso
- Ingeniería determina que riesgo es inexistente

### 5.2 Materiales y Configuraciones

**Materiales comunes:**

**Ángulo estructural:**
- AISC L3×3×1/4 (76×76×6 mm)
- AISC L4×4×1/4 (102×102×6 mm)
- Instalación: una ala horizontal sobre piso, otra vertical
- Ventaja: rigidez inherente, fácil soldadura
- Aplicación: más común en construcción de acero

**Barra plana:**
- Flat bar 4"×1/4" (102×6 mm)
- Flat bar 4"×3/8" (102×10 mm)
- Instalación: vertical, soldada a bordes de plataforma
- Ventaja: bajo costo, menos peso
- Desventaja: puede pandear si no está soportado

**Placa continua:**
- Placa de acero de 4"-6" altura, espesor 3/16"-1/4"
- Soldada a borde de plataforma o postes de baranda
- Ventaja: protección completa contra objetos pequeños
- Aplicación: áreas con materiales granulares o polvos

**Canal estructural:**
- AISC C3×4.1 invertido (apertura hacia abajo)
- Ventaja: no acumula suciedad
- Aplicación: áreas muy limpias o sanitarias

**Configuraciones de montaje:**

**Montaje sobre superficie de plataforma:**
```
Plataforma (grating)
    ↓
[Toe board vertical]
    ↓
Borde de plataforma
```
- Toe board soldado sobre grating
- Reduce ancho efectivo de plataforma
- Más común, más fácil instalación

**Montaje en borde de plataforma:**
```
Plataforma (grating)
    ↓
[Toe board vertical] ← soldado a viga de borde
    ↓
Viga de soporte
```
- Toe board soldado a viga perimetral
- No reduce ancho de plataforma
- Requiere acceso a viga perimetral

**Montaje integrado con postes de baranda:**
```
[Poste de baranda]
    ↓
[Toe board conectado a poste]
    ↓
Superficie
```
- Toe board soldado directamente a postes
- Configuración más robusta
- Usado cuando no hay viga perimetral continua

### 5.3 Configuración de Toe Boards en Plant 3D

**Añadir toe board a estilo de baranda:**

Procedimiento:
1. **Plant 3D** → **Structure** → **Handrail Styles**
2. Seleccionar estilo → **Edit Style**
3. Pestaña **Toe Board Settings**:

```
Toe Board Configuration:
├── Include Toe Board: [Yes | No]
├── Profile: [AISC_L_4x4x0.25 | Flat_Bar_4x0.25 | Custom]
├── Height: 102 mm (4 inches)
├── Mounting: [Top of Platform | Edge of Platform | Posts]
├── Gap from Surface: 6 mm (0.25 inches)
└── Material: [A36 Steel | A992 Steel | 304 Stainless]
```

4. Seleccionar perfil de biblioteca estructural
5. Configurar altura y posición
6. Aplicar a todas las barandas que usen este estilo

**Perfil personalizado para toe board:**

Si perfiles estándar no son apropiados:

1. En **Toe Board Settings** → **Profile** → **Custom**
2. Definir geometría de sección transversal:
   - Dibujar perfil en 2D usando líneas/polilíneas
   - Especificar: altura, espesor, forma
3. Guardar perfil personalizado en biblioteca
4. Asignar a estilo de baranda

**Toe boards solo en lados específicos:**

Algunas plataformas requieren toe board solo en ciertos lados:

Procedimiento:
1. Crear estilo de baranda CON toe board
2. Crear estilo de baranda SIN toe board
3. Al colocar barandas en plataforma:
   - Lados con riesgo de caída de objetos: estilo CON toe board
   - Lados sin riesgo: estilo SIN toe board
4. Alternativa: editar barandas individualmente después de colocación

**Editar propiedades de toe board existente:**

Para modificar toe board ya colocado:
1. Seleccionar baranda
2. **Properties** palette
3. Sección **Toe Board**:
   - **Visible**: [Yes | No] (mostrar/ocultar)
   - **Height**: ajustar altura
   - **Profile**: cambiar perfil
   - **Material**: cambiar material

### 5.4 Kick Plates

Los kick plates son protecciones de mayor altura que toe boards estándar, utilizados en situaciones especiales.

**Definición:**
- Placa vertical de 12"-18" (300-450 mm) de altura
- Típicamente placa sólida de acero
- Propósito: contener derrames mayores, protección adicional

**Aplicaciones:**
- Plataformas sobre áreas de proceso críticas
- Plataformas de manipulación de líquidos corrosivos
- Áreas con riesgo de derrames químicos
- Requisitos de seguridad especiales

**Diferencias con toe boards estándar:**

| Aspecto | Toe Board | Kick Plate |
|---------|-----------|-----------|
| Altura | 4" (102 mm) | 12"-18" (300-450 mm) |
| Construcción | Ángulo o barra | Placa sólida |
| Propósito | Caída de objetos | Contención de derrames |
| Aplicación | Estándar | Situaciones especiales |
| Costo | Bajo | Medio-Alto |

**Configuración en Plant 3D:**

Kick plates se configuran como toe boards de mayor altura:
1. **Handrail Style** → **Toe Board Settings**
2. **Profile**: Plate_12x0.25 (placa 12" altura, 1/4" espesor)
3. **Height**: 300 mm (12 inches)
4. **Mounting**: Edge of Platform (borde de plataforma)

**Consideraciones de diseño:**
- Mayor altura requiere mayor rigidez (mayor espesor o refuerzos)
- Análisis de carga de viento si plataforma está expuesta
- Peso adicional afecta carga total de plataforma
- Puede requerir aberturas de drenaje (evitar acumulación de agua)

## 6. Creación de Estilos de Barandas Personalizados

### 6.1 Editor de Estilos de Barandas

Plant 3D permite crear estilos completamente personalizados para cumplir requisitos específicos.

**Acceder al editor:**

Comando:
```
PLANTHANDRAILSTYLES
```

O desde cinta:
**Plant 3D** → **Structure** → **Handrail Styles** → **Manage Styles**

**Interfaz del editor:**

```
Handrail Style Manager
├── Style Library (biblioteca de estilos)
│   ├── OSHA_Standard_Pipe_Rail
│   ├── API_Pipe_Rail_Stainless
│   ├── Structural_Angle_Rail
│   └── [Custom Styles...]
├── Edit Style (editar estilo seleccionado)
├── New Style (crear nuevo estilo)
├── Delete Style (eliminar estilo)
└── Copy Style (copiar estilo existente)
```

**Crear nuevo estilo desde cero:**

Procedimiento:
1. Click en **New Style**
2. Nombre del estilo: usar nomenclatura descriptiva
   - Ejemplo: "OSHA_2in_Pipe_SS316_Offshore"
3. Se abre editor de componentes

**Copiar y modificar estilo existente:**

Método recomendado (más rápido):
1. Seleccionar estilo similar a requisitos
2. Click en **Copy Style**
3. Nombre: agregar sufijo descriptivo
   - Original: "OSHA_Standard_Pipe_Rail"
   - Copia: "OSHA_Standard_Pipe_Rail_Modified"
4. Editar componentes según necesidades

### 6.2 Configuración de Componentes

**Componentes principales de un estilo:**

```
Handrail Style Components:
├── Posts (postes)
│   ├── Profile (perfil)
│   ├── Spacing (espaciamiento)
│   ├── Height (altura)
│   └── Rotation (rotación)
├── Top Rail (riel superior)
│   ├── Profile
│   ├── Elevation
│   └── Connection Type
├── Midrail (riel intermedio)
│   ├── Profile
│   ├── Elevation
│   ├── Quantity (número de midrails)
│   └── Connection Type
├── Infill (relleno: cables, malla)
│   ├── Type [None | Cables | Mesh | Pickets]
│   ├── Spacing
│   └── Material
└── Toe Board
    ├── Profile
    ├── Height
    └── Mounting
```

**Configuración de Posts:**

1. En editor de estilo → sección **Posts**
2. **Profile**:
   - Click en botón [...] para abrir catálogo de perfiles
   - Seleccionar de:
     - Pipes (tuberías): Pipe_1.5_Sch40, Pipe_2_Sch40, etc.
     - Structural: AISC_L_3x3x0.25, AISC_C_3x4.1, etc.
     - Custom: perfiles importados o creados
3. **Spacing**:
   - Spacing Method: [Automatic | Manual]
   - Maximum Spacing: 2438 mm (8 ft OSHA máximo)
   - Preferred Spacing: 1829 mm (6 ft típico)
4. **Height**:
   - Total Height: elevación de plataforma a top de poste
   - Above Platform: 1067 mm (42" para top rail)
   - Below Platform: 0-200 mm (empotramiento si aplica)
5. **Rotation**:
   - Ángulo de rotación de perfil alrededor de eje vertical
   - Típico: 0° (alineado con baranda)
   - Para ángulos: 45° (orientación diagonal)
6. **Material**: A36, A992, SS304, SS316L, etc.

**Configuración de Top Rail:**

1. Sección **Top Rail**
2. **Profile**: seleccionar de catálogo (típicamente mismo que posts)
3. **Elevation**: 1067 mm (42" sobre superficie de plataforma)
4. **Connection Type**:
   - Welded to Posts (soldado a postes)
   - Bolted with Brackets (atornillado con abrazaderas)
   - Slip-on (deslizado sobre postes)
5. **End Treatment**:
   - Return to Post (retorno a poste)
   - Wall Mount (montaje a pared)
   - Cap (tapón)
6. **Corner Treatment**:
   - Miter (inglete soldado)
   - Elbow Fitting (codo roscado)
   - Radiused (curvado)

**Configuración de Midrail:**

1. Sección **Midrail**
2. **Quantity**: número de midrails
   - Típico: 1 midrail
   - OSHA requiere: mínimo 1 (a 21" si top rail a 42")
   - Opcional: 2 midrails (a 14" y 28" para mayor protección)
3. **Profile**: puede ser diferente a top rail (menor diámetro)
4. **Elevation** (para cada midrail):
   - Midrail único: 533 mm (21")
   - Dos midrails: 356 mm (14") y 711 mm (28")
5. **Connection**: típicamente igual que top rail

**Configuración de Infill (relleno):**

Para sistemas con cables, malla o barrotes:

1. Sección **Infill**
2. **Type**: seleccionar tipo
   - None: sin relleno (solo rails)
   - Horizontal Cables: cables horizontales tensados
   - Vertical Pickets: barrotes verticales
   - Mesh Panel: panel de malla
3. Para **Horizontal Cables**:
   - Cable Diameter: 6 mm (1/4") típico
   - Number of Cables: 4-5 cables
   - Vertical Spacing: 102-127 mm (4-5")
   - Material: SS316 (acero inoxidable)
   - Tension: 1335 N (300 lbf) por cable
4. Para **Vertical Pickets**:
   - Picket Profile: tubería 3/4" o barra 12×12 mm
   - Spacing: 102 mm (4") máximo según OSHA
   - Connection: soldado a top rail y midrail
5. Para **Mesh Panel**:
   - Mesh Type: Expanded Metal, Wire Mesh, Perforated
   - Panel Height: desde toe board hasta top rail
   - Frame: opcional marco perimetral

### 6.3 Propiedades de Materiales

Configurar propiedades de materiales para reportes y listas de materiales:

**Acceso:**
1. En editor de estilo → pestaña **Materials**
2. Configurar para cada componente (posts, rails, toe board)

**Propiedades configurables:**

**Material Grade (grado de material):**
- A36: acero estructural estándar (Fy = 36 ksi)
- A992: acero para vigas y columnas (Fy = 50 ksi)
- A500 Grade B: tubería estructural HSS
- 304L: acero inoxidable austenítico estándar
- 316L: acero inoxidable con molibdeno (corrosión mejorada)

**Finish (acabado):**
- Hot-Dip Galvanized (galvanizado por inmersión)
- Painted (pintado): especificar sistema de pintura
- Mill Finish (acabado de fábrica sin tratamiento)
- Powder Coated (recubrimiento en polvo)

**Weight (peso):**
- Plant 3D calcula automáticamente según perfil y longitud
- Verificar con tablas AISC para precisión
- Usado en reportes de peso total de estructura

**Cost Data (datos de costo):**
- Costo unitario de material (por kg o por metro lineal)
- Costo de fabricación (soldadura, corte, acabado)
- Costo de instalación
- Usado para estimaciones de proyecto

**Custom Properties (propiedades personalizadas):**
- Tag: identificación única de baranda
- Mark Number: número de marca para planos de taller
- Fabricator: fabricante responsable
- Drawing Reference: referencia a planos de detalle

### 6.4 Guardar y Compartir Estilos

**Guardar estilo creado:**

Los estilos se guardan automáticamente en base de datos del proyecto Plant 3D:
- Ubicación: carpeta del proyecto → `Data` → `Handrail.xml`
- Formato: XML editable
- Backup: crear copias periódicas de este archivo

**Exportar estilo a biblioteca corporativa:**

Para usar estilo en múltiples proyectos:

Procedimiento:
1. En **Handrail Style Manager** → seleccionar estilo
2. Click en **Export Style**
3. Guardar archivo `.xml` en ubicación compartida:
   - Ejemplo: `C:\PlantData\CorporateStandards\HandrailStyles\`
4. Nombrar archivo descriptivamente:
   - `OSHA_2in_Pipe_SS316_Offshore.xml`

**Importar estilo a nuevo proyecto:**

1. Abrir nuevo proyecto en Plant 3D
2. **Handrail Style Manager** → **Import Style**
3. Navegar a archivo `.xml` exportado
4. Estilo aparece en biblioteca del proyecto actual
5. Configurar como estilo default si es apropiado

**Establecer estilo default del proyecto:**

1. **Project Setup** → **Drawing Properties**
2. Pestaña **Handrail Defaults**
3. **Default Handrail Style**: seleccionar estilo preferido
4. Todas las barandas nuevas usarán este estilo automáticamente

## 7. Validación de Cumplimiento Normativo

### 7.1 Checklist de Cumplimiento OSHA

Antes de finalizar diseño, verificar cumplimiento con OSHA 1910.29:

**Lista de verificación:**

□ **Altura de Top Rail:**
- [ ] Top rail a 42 pulgadas ± 3" (1067 mm ± 76 mm)
- [ ] Medición desde superficie de piso/plataforma
- [ ] Altura consistente en toda la longitud

□ **Resistencia Estructural:**
- [ ] Top rail resiste 200 lbf (890 N) carga puntual en cualquier dirección
- [ ] Sistema completo sin falla catastrófica bajo carga
- [ ] Deflexión <3 pulgadas (76 mm) bajo carga de diseño
- [ ] Postes de diámetro/sección adecuado para espaciamiento

□ **Espaciamiento de Postes:**
- [ ] Espaciamiento máximo: 8 pies (2438 mm) entre centros
- [ ] Postes en todas las esquinas
- [ ] Postes en ambos lados de aberturas

□ **Midrail:**
- [ ] Midrail presente a punto medio (típicamente 21" / 533 mm)
- [ ] Resiste carga mínima de 150 lbf (667 N)
- [ ] Continuo o infill equivalente sin gaps >19" (483 mm)

□ **Toe Board (donde requerido):**
- [ ] Altura mínima: 3.5 pulgadas (89 mm)
- [ ] Gap con piso: máximo 0.25" (6 mm)
- [ ] Resiste 50 lbf (222 N) carga
- [ ] Instalado en todos los lados expuestos

□ **Aberturas:**
- [ ] Protección en aberturas >25" (635 mm) ancho
- [ ] Barandas removibles con cadena y señalización
- [ ] Puertas batientes con baranda integrada

□ **Extensiones de Escalera:**
- [ ] Extensión superior: mínimo 12" (305 mm) horizontal
- [ ] Extensión inferior: mínimo 12" (305 mm) horizontal
- [ ] Altura de baranda en escalera: 42" (1067 mm) vertical

**Documentar cumplimiento:**

Crear reporte de cumplimiento:
1. **Plant 3D** → **Reports** → **Handrail Compliance Report**
2. Seleccionar estándar: OSHA 1910.29
3. Generar reporte automático con verificaciones
4. Revisar "Non-Compliance Items" (elementos no conformes)
5. Corregir deficiencias identificadas
6. Regenerar reporte hasta cumplimiento 100%

### 7.2 Verificación de NOM-001-STPS

Para proyectos en México, verificar cumplimiento con NOM-001-STPS-2008:

**Requisitos mínimos:**

□ **Altura de baranda:**
- [ ] Mínimo 90 cm (900 mm) desde superficie de piso
- [ ] Nota: si se cumple OSHA (1067 mm), se cumple automáticamente NOM

□ **Componentes:**
- [ ] Pasamanos superior presente
- [ ] Barandal intermedio presente
- [ ] Rodapié (toe board) donde sea aplicable

□ **Resistencia:**
- [ ] Soporta peso de trabajadores apoyados (sin cuantificar específicamente)
- [ ] Fijación segura a estructura principal

□ **Inspección:**
- [ ] Programa de inspección anual documentado
- [ ] Registro de mantenimiento de barandas

**Documentación para inspección STPS:**

Preparar documentos:
1. Planos de planta mostrando ubicación de todas las barandas
2. Detalles típicos de construcción de baranda
3. Especificaciones de materiales (aceros, acabados)
4. Cálculos de resistencia estructural (si requeridos)
5. Programa de inspección y mantenimiento

### 7.3 Reportes Automáticos de Plant 3D

Plant 3D puede generar reportes automáticos de sistemas de barandas.

**Reporte de Bill of Materials (BOM):**

Generar lista de materiales:
1. **Plant 3D** → **Reports** → **Handrail BOM**
2. Configurar columnas del reporte:
   - Description (descripción: post, top rail, midrail, toe board)
   - Profile (perfil: Pipe_2_Sch40, L_3x3x0.25, etc.)
   - Material (A36, SS316L, etc.)
   - Quantity (cantidad de piezas)
   - Unit Length (longitud unitaria)
   - Total Length (longitud total)
   - Unit Weight (peso unitario kg/m)
   - Total Weight (peso total kg)
3. Exportar a Excel para análisis y procurement

**Reporte de Longitudes:**

Para estimación de fabricación:
1. **Plant 3D** → **Reports** → **Handrail Lengths**
2. Agrupa por:
   - Handrail Style (estilo de baranda)
   - Component Type (tipo de componente)
   - Profile (perfil)
3. Muestra longitud total de cada perfil
4. Útil para solicitudes de cotización

**Ejemplo de reporte:**

| Style | Component | Profile | Material | Total Length (m) | Weight (kg) |
|-------|-----------|---------|----------|------------------|-------------|
| OSHA_Pipe_2in | Post | Pipe_2_Sch40 | A36 | 145.2 | 876.5 |
| OSHA_Pipe_2in | Top Rail | Pipe_2_Sch40 | A36 | 342.8 | 2069.1 |
| OSHA_Pipe_2in | Midrail | Pipe_1.5_Sch40 | A36 | 342.8 | 1514.3 |
| OSHA_Pipe_2in | Toe Board | L_4x4x0.25 | A36 | 342.8 | 1471.2 |

### 7.4 Inspección Visual del Modelo 3D

Antes de finalizar diseño, realizar inspección visual sistemática:

**Checklist de inspección visual:**

□ **Vista en Planta:**
- [ ] Barandas presentes en todos los bordes expuestos
- [ ] Continuidad de barandas sin gaps
- [ ] Aberturas apropiadamente protegidas
- [ ] Secciones removibles identificadas

□ **Vista en Elevación:**
- [ ] Altura de baranda consistente (42" / 1067 mm)
- [ ] Midrail a altura correcta (21" / 533 mm)
- [ ] Toe board presente donde requerido
- [ ] Extensiones de escalera correctas

□ **Vista 3D Isométrica:**
- [ ] Tratamiento de esquinas apropiado
- [ ] Intersecciones correctamente modeladas
- [ ] Barandas siguen cambios de elevación
- [ ] Sin interferencias con tuberías o equipos

□ **Detalles de Conexión:**
- [ ] Postes conectados a estructura de plataforma
- [ ] Top rail continuo (no segmentado sin razón)
- [ ] Midrail conectado apropiadamente
- [ ] Toe board fijado correctamente

**Uso de secciones y cortes:**

Para verificar detalles:
1. Crear planos de sección en ubicaciones críticas
2. Verificar elevaciones exactas de componentes
3. Confirmar conexiones entre baranda y plataforma
4. Identificar posibles interferencias

**Clash Detection (detección de interferencias):**

Si proyecto tiene tuberías o equipos:
1. **Plant 3D** → **Tools** → **Interference Check**
2. Seleccionar barandas y otros elementos
3. Ejecutar análisis de interferencias
4. Revisar lista de clashes identificados
5. Resolver interferencias:
   - Mover postes de baranda
   - Ajustar ruta de baranda
   - Modificar elevación si es posible
   - Coordinar con disciplina de tuberías/equipos

## Evaluación de Conocimientos

Responda las siguientes preguntas para verificar su comprensión de los conceptos de esta lección:

**Pregunta 1:**
Según OSHA 1910.29, ¿cuál es la altura requerida del top rail de una baranda de seguridad medida desde la superficie de la plataforma?

A) 36 pulgadas (914 mm)
B) 39 pulgadas (991 mm)
C) 42 pulgadas (1067 mm)
D) 48 pulgadas (1219 mm)

**Pregunta 2:**
¿Cuál es el espaciamiento máximo permitido entre postes de baranda según estándares OSHA?

A) 6 pies (1829 mm)
B) 8 pies (2438 mm)
C) 10 pies (3048 mm)
D) 12 pies (3658 mm)

**Pregunta 3:**
Un toe board (zócalo protector) según OSHA debe tener una altura mínima de:

A) 2 pulgadas (51 mm)
B) 3.5 pulgadas (89 mm)
C) 4.5 pulgadas (114 mm)
D) 6 pulgadas (152 mm)

**Pregunta 4:**
¿A qué altura sobre la superficie de piso debe ubicarse el midrail (riel intermedio) cuando el top rail está a 42 pulgadas?

A) 14 pulgadas (356 mm)
B) 18 pulgadas (457 mm)
C) 21 pulgadas (533 mm)
D) 24 pulgadas (610 mm)

**Pregunta 5:**
Según OSHA, ¿cuál es la extensión mínima horizontal requerida de una baranda de escalera más allá del último escalón superior?

A) 6 pulgadas (152 mm)
B) 9 pulgadas (229 mm)
C) 12 pulgadas (305 mm)
D) 18 pulgadas (457 mm)

## Ejercicio Práctico

**Título:** Sistema Completo de Barandas en Plataforma Multinivel

**Tiempo estimado:** 35 minutos

**Objetivo:**
Implementar un sistema completo de barandas conforme a OSHA en plataformas existentes de una planta de proceso, incluyendo tratamiento de esquinas, aberturas para escaleras, y toe boards.

**Escenario:**
Usted es el diseñador estructural de una modernización de seguridad en una refinería. Debe añadir barandas a tres plataformas existentes a diferentes elevaciones (3.0m, 6.0m, 9.0m) que actualmente carecen de protección contra caídas. Las plataformas están interconectadas por escaleras rectas que también requieren barandas.

**Archivos base:**
- `Modulo4_Leccion18_Base.dwg` (modelo con plataformas sin barandas)

**Especificaciones del proyecto:**

**Baranda estándar:**
- Estilo: OSHA-compliant pipe rail
- Posts: tubería 2" NPS Schedule 40, acero A36
- Top rail: tubería 2" NPS Schedule 40 a 42" (1067 mm)
- Midrail: tubería 1.5" NPS Schedule 40 a 21" (533 mm)
- Toe board: ángulo L4×4×1/4 (altura 4")
- Espaciamiento de postes: máximo 6 pies (1829 mm)

**Acabado:**
- Galvanizado por inmersión en caliente
- Sistema de pintura: epóxico de alta resistencia, color amarillo seguridad

**Requisitos específicos:**

**Plataforma Nivel +3.0m (rectangular 6m × 4m):**
- Barandas en tres lados (norte, este, oeste)
- Lado sur: abertura de 1.2m ancho para acceso de escalera
- Esquinas con poste único y top rail en miter
- Toe board en los tres lados con baranda

**Plataforma Nivel +6.0m (rectangular 8m × 5m):**
- Barandas en cuatro lados completos
- Lado este: abertura de 1.2m con puerta batiente para acceso temporal
- Esquinas a 90° con configuración de dos postes
- Toe board perimetral completo

**Plataforma Nivel +9.0m (L-shape: 6m × 4m + 4m × 3m):**
- Barandas en todo el perímetro
- Esquina interna de L: tratamiento especial con baranda curva (radio 500mm)
- Lado norte: abertura de 1.5m para acceso de escalera espiral
- Toe board en todo el perímetro

**Escaleras:**
- Tres escaleras rectas conectando niveles
- Barandas en ambos lados de cada escalera
- Extensión superior: 12" (305 mm) horizontal
- Extensión inferior: 12" (305 mm) horizontal
- Continuidad de baranda entre plataforma y escalera

**Instrucciones paso a paso:**

**Parte 1: Crear Estilo de Baranda Personalizado (8 minutos)**

1. Abrir archivo base `Modulo4_Leccion18_Base.dwg`
2. Ejecutar comando `PLANTHANDRAILSTYLES`
3. Crear nuevo estilo:
   - Nombre: "Refinery_Standard_2in_Pipe_Galv"
4. Configurar Posts:
   - Profile: `Pipe_2_Sch40`
   - Maximum Spacing: 1829 mm (6 ft)
   - Height: 1067 mm (42 in above platform)
   - Material: A36 Steel
   - Finish: Hot-Dip Galvanized + Yellow Epoxy Paint
5. Configurar Top Rail:
   - Profile: `Pipe_2_Sch40`
   - Elevation: 1067 mm
   - Connection: Welded to Posts
   - Corner Treatment: Miter
6. Configurar Midrail:
   - Profile: `Pipe_1.5_Sch40`
   - Elevation: 533 mm
   - Connection: Welded to Posts
7. Configurar Toe Board:
   - Include: Yes
   - Profile: `AISC_L_4x4x0.25`
   - Height: 102 mm (4 in)
   - Mounting: Top of Platform
   - Gap: 6 mm (0.25 in)
8. Guardar estilo

**Parte 2: Aplicar Barandas a Plataforma +3.0m (7 minutos)**

1. Seleccionar plataforma a elevación +3.0m
2. Click derecho → **Properties**
3. Sección Handrail:
   - Has Handrails: Yes
   - Handrail Style: "Refinery_Standard_2in_Pipe_Galv"
   - Handrail Sides: Select Sides
4. En selector de lados:
   - Seleccionar lado norte (superior en planta)
   - Seleccionar lado este (derecha)
   - Seleccionar lado oeste (izquierda)
   - NO seleccionar lado sur (abertura para escalera)
5. Confirmar y observar generación automática de barandas
6. Verificar en vista 3D:
   - Altura de top rail: 1067 mm desde superficie de plataforma
   - Postes espaciados uniformemente <1829 mm
   - Midrail a 533 mm
   - Toe board presente
   - Esquinas con postes y miters correctos

**Parte 3: Crear Abertura con Sección Removible (5 minutos)**

1. Zoom a abertura del lado sur de plataforma +3.0m
2. Comando `PLANTHANDRAIL` (colocación manual)
3. Handrail Style: "Refinery_Standard_2in_Pipe_Galv"
4. Colocar baranda removible:
   - Start Point: esquina suroeste de abertura
   - End Point: esquina sureste de abertura (1.2m ancho)
   - Elevation: +3.0m (nivel de plataforma)
5. Seleccionar baranda recién colocada
6. Properties → Handrail Type: Removable with Chain
7. Añadir cadena de seguridad:
   - Plant 3D → Structure → Add Safety Chain
   - Especificar puntos de conexión en ambos lados
   - Chain Type: 6mm galvanized with carabiner
8. Añadir señalización (usando bloques):
   - Insertar bloque "Safety_Sign_Keep_Closed"
   - Ubicación: en poste de un lado de abertura
   - Texto: "PELIGRO - MANTENGA CERRADO"

**Parte 4: Aplicar Barandas a Plataforma +6.0m con Puerta (8 minutos)**

1. Seleccionar plataforma a +6.0m
2. Aplicar barandas en cuatro lados (método automático)
   - Configurar "All Sides"
3. Crear abertura para puerta batiente:
   - Seleccionar baranda del lado este
   - Identificar ubicación de puerta (centro del lado, 1.2m ancho)
   - Editar ruta de baranda:
     - Click derecho → Edit Handrail Path
     - Crear gap de 1.2m en ubicación de puerta
4. Insertar puerta batiente:
   - Comando: `PLANTHANDRAILGATE`
   - Gate Style: Swing Gate with Integrated Handrail
   - Width: 1.2m
   - Swing Direction: Outward (hacia exterior de plataforma)
   - Locking: Panic Bar Type
5. Configurar baranda de puerta:
   - Top rail: 1067 mm
   - Midrail: 533 mm
   - Infill: vertical pickets spacing 100mm
   - Material: mismo que barandas principales
6. Configurar esquinas con dos postes:
   - Seleccionar cada esquina de plataforma
   - Properties → Corner Treatment: Double Post
   - Post Separation: 150 mm
   - Verificar en 3D que configuración es correcta

**Parte 5: Barandas en Plataforma L-Shape +9.0m con Curva (7 minutos)**

1. Seleccionar plataforma en L a +9.0m
2. Aplicar barandas automáticas en perímetro exterior (lados rectos)
3. Esquina interna (punto de unión de L):
   - Usar colocación manual para crear baranda curva
   - Comando: `PLANTHANDRAIL`
   - Start Point: final de lado norte de sección corta
   - Opción: Arc (arco)
   - Point on Arc: punto medio con radio 500mm hacia exterior
   - End Point: inicio de lado este de sección larga
   - Elevation: +9.0m
4. Verificar que baranda curva:
   - Tiene postes espaciados uniformemente a lo largo de curva
   - Top rail sigue radio especificado (500mm)
   - Se conecta suavemente con barandas rectas adyacentes
5. Crear abertura para escalera espiral (lado norte):
   - Abertura circular de 1.5m diámetro
   - Método: editar ruta de baranda para crear gap
   - Añadir sección removible con cadena

**Parte 6: Barandas en Escaleras (5 minutos)**

1. Identificar las tres escaleras en modelo:
   - Escalera 1: +0.0m a +3.0m
   - Escalera 2: +3.0m a +6.0m
   - Escalera 3: +6.0m a +9.0m
2. Para cada escalera:
   - Seleccionar objeto de escalera
   - Properties → Handrail Section
   - Add Handrails: Yes
   - Handrail Style: "Refinery_Standard_2in_Pipe_Galv"
   - Handrail Location: Both Sides
   - Top Extension: 305 mm (12 in)
   - Bottom Extension: 305 mm (12 in)
3. Verificar en vista 3D:
   - Altura de baranda: 1067 mm vertical desde nosing line
   - Baranda sigue ángulo de escalera
   - Extensiones horizontales correctas
   - Continuidad con barandas de plataformas

**Parte 7: Verificación y Reportes (5 minutos)**

1. Generar reporte de cumplimiento:
   - Plant 3D → Reports → Handrail Compliance Report
   - Standard: OSHA 1910.29
   - Scope: All handrails in model
2. Revisar reporte generado:
   - Verificar: "Compliance: 100%"
   - Si hay items no conformes, identificar y corregir
3. Generar BOM (Bill of Materials):
   - Plant 3D → Reports → Handrail BOM
   - Exportar a Excel
   - Verificar cantidades:
     - Total de tubería 2" Sch 40 para posts y top rail
     - Total de tubería 1.5" Sch 40 para midrail
     - Total de ángulos L4×4×1/4 para toe boards
4. Crear vistas de documentación:
   - Vista en planta de cada nivel mostrando barandas
   - Vista en elevación mostrando alturas
   - Detalles típicos: esquinas, conexiones, toe board
5. Guardar archivo completado:
   - Nombre: `Modulo4_Leccion18_Completo_[SuNombre].dwg`

**Criterios de evaluación:**

- **Cumplimiento normativo (30%)**: Todas las barandas cumplen OSHA 1910.29
- **Configuración de estilo (20%)**: Estilo personalizado correctamente configurado
- **Tratamiento de esquinas (15%)**: Esquinas apropiadamente modeladas
- **Aberturas y puertas (15%)**: Aberturas protegidas correctamente
- **Barandas de escaleras (10%)**: Escaleras con barandas y extensiones correctas
- **Toe boards (10%)**: Toe boards presentes donde requeridos

**Entregables:**

1. Archivo DWG completado con sistema completo de barandas
2. Reporte de cumplimiento OSHA exportado a PDF
3. BOM (Bill of Materials) exportado a Excel
4. Capturas de pantalla:
   - Vista 3D isométrica del sistema completo
   - Detalle de esquina con tratamiento de dos postes
   - Detalle de puerta batiente con baranda integrada
   - Detalle de baranda curva en esquina de L

## Resumen de la Lección

En esta lección exhaustiva, ha dominado todos los aspectos del diseño e implementación de sistemas de barandas y protecciones contra caídas en AutoCAD Plant 3D 2026:

**Conceptos fundamentales cubiertos:**

1. **Normativa y Estándares**: Comprensión profunda de OSHA 1910.29, NOM-001-STPS, y API para sistemas de barandas, incluyendo requisitos específicos de altura, resistencia, espaciamiento y componentes.

2. **Tipos de Sistemas**: Dominio de barandas tubulares (pipe rail), estructurales (structural rail), de cable (cable rail) y de malla (mesh infill), con comprensión de ventajas, desventajas y aplicaciones de cada tipo.

3. **Colocación en Plant 3D**: Habilidad para colocar barandas automáticamente en plataformas y escaleras, así como colocación manual para situaciones especiales, con control total sobre ruta, elevación y estilo.

4. **Tratamiento de Geometrías**: Capacidad para gestionar esquinas (ortogonales, obtusas, agudas, curvas), extremos (contra pared, libres, en aberturas), e intersecciones (en T, en X, oblicuas).

5. **Toe Boards y Kick Plates**: Conocimiento de requisitos, materiales y configuración de zócalos protectores para prevención de caída de objetos.

6. **Estilos Personalizados**: Competencia en crear, configurar y gestionar estilos de barandas completamente personalizados para cumplir requisitos específicos de proyecto.

7. **Validación de Cumplimiento**: Habilidad para verificar cumplimiento normativo mediante checklists, inspección visual, y reportes automáticos de Plant 3D.

**Habilidades prácticas desarrolladas:**

- Configurar catálogos de perfiles para componentes de barandas
- Crear estilos de barandas OSHA-compliant desde cero
- Aplicar barandas automáticamente a plataformas existentes
- Gestionar aberturas con secciones removibles y puertas batientes
- Resolver situaciones especiales: esquinas curvas, cambios de elevación, intersecciones
- Generar reportes de cumplimiento y listas de materiales
- Documentar sistemas de barandas para fabricación e instalación

**Mejores prácticas aprendidas:**

- Siempre usar estándares OSHA como mínimo (más estrictos que NOM mexicana)
- Espaciamiento de postes: usar 6 pies (1829 mm) como estándar, nunca exceder 8 pies (2438 mm)
- Postes en todas las esquinas para garantizar resistencia estructural
- Toe boards siempre en plataformas sobre áreas transitadas
- Extensiones de 12" en escaleras (superior e inferior) sin excepciones
- Documentar cumplimiento normativo en todos los proyectos
- Crear biblioteca corporativa de estilos aprobados

**Integración con lecciones previas:**

Esta lección se construye sobre conocimientos de:
- Lección 16: Perfiles estructurales utilizados en posts, rails y toe boards
- Lección 17: Plataformas y escaleras que requieren barandas de protección

**Preparación para lecciones siguientes:**

Los sistemas de barandas dominados en esta lección son componentes esenciales de:
- Lección 19: Plataformas de acceso a equipos personalizados
- Lección 20: Protección en plataformas alrededor de boquillas de equipos

Los sistemas de barandas y protecciones contra caídas no son elementos opcionales o accesorios decorativos: son componentes críticos de seguridad que literalmente salvan vidas. Un diseño competente, conforme con normativa, y correctamente documentado de estos sistemas es responsabilidad profesional fundamental de todo diseñador de plantas industriales.

Con el dominio de AutoCAD Plant 3D 2026 adquirido en esta lección, usted está equipado para diseñar sistemas de barandas que no solo cumplen con todos los requisitos legales, sino que también son fabricables, instalables y mantenibles en plantas industriales reales.

## Recursos Adicionales

**Documentación técnica:**
- OSHA 1910 Subpart D - Walking-Working Surfaces (versión completa)
- NOM-001-STPS-2008 - Edificios, locales, instalaciones y áreas en los centros de trabajo
- AISC Steel Construction Manual - Capítulo sobre conexiones
- API RP 505 - Clasificación de áreas peligrosas

**Herramientas de diseño:**
- AISC Shapes Viewer - visualización de perfiles estructurales
- Structural Load Calculator - cálculo de cargas en barandas
- Plant 3D Handrail Style Library - biblioteca corporativa de estilos

**Referencias de fabricación:**
- AWS D1.1 - Structural Welding Code (código de soldadura)
- ASTM A123 - Zinc (Hot-Dip Galvanized) Coatings on Iron and Steel Products
- SSPC Paint Application Specifications

**Próxima lección:**
Lección 19: Equipos Personalizados y Modelado Paramétrico - donde aprenderá a crear recipientes a presión, tanques, intercambiadores de calor y otros equipos usando el diseñador paramétrico de Plant 3D.
