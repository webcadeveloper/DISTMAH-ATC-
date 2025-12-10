# Lección 1.4: Electrical Settings y Configuración de Proyecto

## Importancia Crítica de los Electrical Settings

Los Electrical Settings en Revit MEP 2026 son probablemente los parámetros más importantes que configuramos al iniciar un proyecto de diseño eléctrico. Estos settings definen literalmente cómo se comportará el proyecto, qué convenciones eléctricas se usarán, cómo se nombrarán automáticamente los circuitos, cómo se calcularán las cargas, y cómo se generarán automáticamente valores en schedules y reportes.

Accedemos a estos settings desde el menú Manage tab → Electrical Settings. Una vez aquí, nos encontramos con múltiples pestañas que controlan diferentes aspectos del proyecto eléctrico: Naming and Numbering, Electrical Panel Defaults, Load Calculations, Conductor Properties, Voltage Definitions, y Amperage Calculations.

## Configuración de Nomenclatura y Numeración

La pestaña "Naming and Numbering" es donde definimos cómo Revit denominará automáticamente los elementos eléctricos. Por ejemplo, podemos definir que los circuitos de iluminación se llamen "IL-" seguido de un número secuencial, mientras que los circuitos de fuerza se llamen "CF-" seguido de su número. Los panelboards pueden tener convenciones de nombre como "PANEL-" seguido del piso y el área donde se ubica.

Esta configuración es crítica para mantener consistencia en proyectos grandes y para asegurar que se cumplen estándares de nombre usados en cada empresa o jurisdicción. Además, Revit puede generar automáticamente números de circuitos basados en ubicación, y pueden definirse prefijos y sufijos que se apliquen automáticamente a todos los nuevos elementos creados. Esto ahorra tiempo significativo en proyectos con cientos de circuitos que de otra forma requeriría nombrado manual de cada uno.

## Panel Defaults - Configuración de Tableros

En la pestaña "Electrical Panel Defaults" configuramos los parámetros que se aplicarán por defecto a todos los panelboards que creemos en el proyecto. Aquí especificamos: el voltaje nominal del panel (típicamente 120/208V, 120/240V, 277/480V), la cantidad de espacios disponibles en el panel (típicamente 24 o 42 espacios), el tipo de alimentación (monofásica, trifásica), y si el panel es para circuitos de iluminación, fuerza, o mixto.

También configuramos la capacidad de voltaje y amperaje del panel principal. Por ejemplo, un panel típico en edificios comerciales puede ser de 480V, 3 fases, 200 amperios. Un panel de distribución secundaria puede ser 120/208V, 3 fases, con 100 amperios. Estos valores por defecto se aplican automáticamente cuando creamos nuevos panelboards, y pueden ser sobrescritos individualmente para cada panel cuando sea necesario.

## Cálculo de Cargas (Load Calculations)

La pestaña "Load Calculations" en Electrical Settings es donde configuramos cómo Revit calculará automáticamente las cargas en el proyecto. Esto incluye: factor de demanda por tipo de circuito, factor de diversidad para múltiples circuitos, métodos de cálculo según código de construcción aplicable (National Electrical Code NEC para Estados Unidos, o regulaciones locales en otros países).

Para cada tipo de elemento (luminaria, contacto, equipo), podemos especificar su carga estándar en vatios. Por ejemplo, una luminaria LED típica puede consumir 40W, un contacto convencional se calcula a 180W (según NEC), un equipo de HVAC puede consumir varios kilovatios. Revit usa estos valores para calcular automáticamente la carga total en cada circuito y en el panel general.

Además, podemos configurar factores de demanda que refleja la realidad: no todos los circuitos se usan al mismo tiempo al máximo de su capacidad. Si una planta tiene 100 contactos, raramente el 100% estarán con carga máxima simultáneamente. Los factores de demanda (típicamente entre 40% y 80%) se aplican para calcular una carga demandada más realista que se usa para dimensionar panelboards y alimentadores.

## Definición de Sistemas de Voltaje

Los Voltage Definitions controlan qué voltajes están disponibles en el proyecto y cómo se denominan. Podemos definir sistemas como: 120V (monofásico), 208V (trifásico), 240V (monofásico), 277V (trifásico), 480V (trifásico), y otros sistemas especiales. Cada voltaje definido puede tener colores de conductor estándar asociados (rojo para fase, negro para neutro, verde para tierra).

Esta configuración es particularmente importante en proyectos internacionales donde diferentes países usan diferentes estándares de voltaje. Latinoamérica típicamente usa 120/240V o 208V, mientras que algunos países europeos usan 230/400V. Configurar esto correctamente asegura que todos los documentos generados muestren el voltaje correcto, y que los cálculos de capacidad y ampacidad sean correctos.

## Propiedades de Conductores

La pestaña "Conductor Properties" es nueva y mejorada en Revit MEP 2026. Aquí configuramos las propiedades estándar de todos los tipos de conductores que se usarán en el proyecto. Para cada tipo de conductor, especificamos: calibre (AWG o MM2), tipo de aislamiento (THHN, XHHW, etc.), ampacidad según código, resistencia eléctrica, y factor de caída de voltaje.

Por ejemplo, un conductor calibre 12 AWG con aislamiento THHN típicamente tiene una ampacidad de 25A en condiciones normales, pero puede reducirse dependiendo de temperatura ambiente y cantidad de conductores en la tubería. Revit puede usar esta información para validar automáticamente que los conductores seleccionados para cada circuito tienen ampacidad suficiente para la carga que transmiten.

## Configuración de Cálculo de Ampacity

El cálculo automático de ampacity (ampacidad) es una característica poderosa en Revit MEP 2026. Podemos configurar que se consideren automáticamente: la temperatura ambiente, la cantidad de conductores en la conduit, el tipo de instalación (en bandeja, en tubería, a la vista), y otros factores que afectan la ampacidad final.

Cuando todas estas configuraciones están correctas, Revit puede verificar automáticamente en el proyecto si cada circuito tiene los conductores adecuados para transmitir su carga sin exceder los límites de ampacidad permitidos. Este tipo de validación automática reduce errores y asegura cumplimiento con códigos eléctricos.

## Parámetros Eléctricos de Proyecto

Existe también una sección "Project Electrical Parameters" donde podemos configurar parámetros globales del proyecto: la disposición de neutro y tierra (si son separados o combinados), el tipo de sistema de tierra (TN-C, TT, IT según normativa IEC), y si el proyecto requiere sistemas de emergencia adicionales.

Estos parámetros afectan cómo se calcula la protección contra cortocircuitos, cómo se dimensionan los dispositivos de protección térmica, y cómo se generan reportes de coordinación de protecciones en el sistema.

## Estándares Internacionales de Código

Revit MEP 2026 permite seleccionar qué código o estándar eléctrico se usará en el proyecto: NEC (National Electrical Code de Estados Unidos), IEC (International Electrotechnical Commission), códigos locales de diferentes países, o configuraciones personalizadas. El código seleccionado afecta los factores de demanda por defecto, los límites de caída de voltaje permitida, y otros cálculos.

Por ejemplo, el NEC permite caída de voltaje máxima de 3% en circuitos individuales y 5% en circuito combinado, mientras que algunos estándares internacionales tienen límites diferentes. Seleccionar el código correcto asegura que todos los cálculos automáticos de Revit cumplan con la regulación aplicable al proyecto.

## Templates y Reutilización de Configuración

Una vez que hemos configurado todos estos Electrical Settings correctamente para un tipo de proyecto, podemos guardar esta configuración como Template (plantilla). Si siempre trabajamos en edificios comerciales con ciertos estándares, podemos crear una plantilla de proyecto que tenga todos estos settings pre-configurados. Nuevos proyectos pueden iniciarse desde esta plantilla, ahorrando horas de configuración.

## Validación y Testing de Configuración

Después de configurar Electrical Settings, es prudente crear algunos elementos de prueba para validar que todo funciona como se espera. Crear un panel de prueba con algunos circuitos de ejemplo y revisar que: los nombres se generen correctamente, los factores de demanda se apliquen como se espera, los colores de conductores sean los correctos, y los cálculos de carga sean precisos.

## Conclusión

Los Electrical Settings de Revit MEP 2026 son la base sobre la cual se construye todo un proyecto eléctrico. Invertir tiempo en configurarlos correctamente desde el inicio ahorra horas de trabajo posterior, previene errores de cálculo, asegura consistencia en nomenclatura, y facilita la generación automática de documentación. Cada parámetro en estos settings tiene implicaciones en el resultado final del proyecto, por lo que es crítico comprenderlos a fondo.

## Puntos Clave

- Los Electrical Settings son la configuración fundamental del proyecto
- Nomenclatura y numeración deben ser configuradas según estándares de la empresa
- Los defaults de paneles aplican automáticamente a nuevos elementos
- Los cálculos de carga deben configurarse según código eléctrico aplicable
- Las propiedades de conductores deben definir ampacidad y características
- Los estándares internacionales afectan cálculos y validaciones
- Las plantillas de proyecto reutilizan configuración en múltiples proyectos
