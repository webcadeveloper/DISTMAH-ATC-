# Lección 1: Estilos de Dimensión Avanzados

## Introducción

Los estilos de dimensión son fundamentales para crear documentación técnica profesional y consistente. Esta lección profundiza en la gestión avanzada de estilos de dimensión, incluyendo familias de estilos, dimensiones anotativas, estándares internacionales y técnicas especiales como cortes, pliegues e inspecciones de dimensión.

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Crear y gestionar familias de estilos de dimensión (padres e hijos)
- Aplicar y comparar sustituciones de estilos
- Configurar estilos según estándares internacionales (ISO, ANSI, DIN, JIS, GB, GOST)
- Implementar dimensiones anotativas vs escala tradicional (DIMSCALE)
- Utilizar cortes, pliegues e inspecciones de dimensión
- Desarrollar flujos de trabajo profesionales para documentación técnica

## Duración Estimada

60-75 minutos

---

## 1. Gestión Avanzada de Estilos de Dimensión

### 1.1 El Administrador de Estilos de Dimensión

El **Dimension Style Manager** es el centro de control para todos los aspectos del dimensionamiento.

**Acceso al comando:**
```
Comando: DIMSTYLE
Atajo: D
Cinta: Annotate > Dimensions > Dimension Style
```

![Administrador de Estilos de Dimensión](./imagenes/01-dimension-style-manager.png)

### 1.2 Anatomía de un Estilo de Dimensión

Un estilo de dimensión controla más de 70 variables que afectan la apariencia de las dimensiones:

| Categoría | Variables Controladas |
|-----------|----------------------|
| **Líneas** | Color, tipo de línea, grosor, extensión, desplazamiento |
| **Símbolos y Flechas** | Tipo de flecha, tamaño, símbolos de centro |
| **Texto** | Fuente, altura, color, alineación, posición |
| **Ajuste** | Ubicación de texto y flechas, escala |
| **Unidades Primarias** | Formato, precisión, prefijos, sufijos |
| **Unidades Alternativas** | Unidades secundarias (ej: mm y pulgadas) |
| **Tolerancias** | Formato, precisión, alineación |

![Anatomía de una Dimensión](./imagenes/02-dimension-anatomy.png)

---

## 2. Familias de Estilos de Dimensión

### 2.1 Concepto de Familias de Estilos

Una **familia de estilos** consiste en:

- **Estilo padre**: Estilo base con configuración general
- **Estilos hijos**: Variaciones especializadas para tipos específicos de dimensión

**Nomenclatura estándar:**
```
Estilo Padre: ARQUITECTONICO
Estilos Hijos:
  - ARQUITECTONICO$0 (Linear)
  - ARQUITECTONICO$2 (Angular)
  - ARQUITECTONICO$3 (Diameter)
  - ARQUITECTONICO$4 (Radial)
  - ARQUITECTONICO$6 (Ordinate)
```

### 2.2 Crear una Familia de Estilos

**Procedimiento:**

1. Crear el estilo padre con configuración general
2. Dentro del Dimension Style Manager, hacer clic en cada tipo de dimensión
3. Modificar configuraciones específicas para cada tipo
4. AutoCAD crea automáticamente estilos hijos

![Creación de Familia de Estilos](./imagenes/03-style-family-creation.png)

**Ejemplo práctico: Familia de estilos mecánicos**

```
Estilo Padre: MECANICO
Configuración general:
- Texto: Arial, 2.5mm
- Flechas: Closed filled, 2.5mm
- Unidades: Decimales, precisión 0.00

Estilo Hijo - Diameter ($3):
- Prefijo: Ø
- Tolerancia: ±0.05

Estilo Hijo - Angular ($2):
- Unidades: Grados decimales
- Precisión: 0.0°
```

![Ejemplo Familia Mecánica](./imagenes/04-mechanical-family-example.png)

### 2.3 Ventajas de las Familias de Estilos

- **Consistencia**: Cambios en el padre afectan a todos los hijos
- **Eficiencia**: No necesitas crear estilos separados para cada tipo
- **Mantenimiento**: Fácil actualización de estándares
- **Organización**: Menos estilos en la lista

---

## 3. Sustituciones de Estilos de Dimensión

### 3.1 ¿Qué son las Sustituciones?

Las **overrides** (sustituciones) son cambios temporales a dimensiones individuales sin modificar el estilo base.

**Aplicar sustitución:**
```
1. Seleccionar dimensión(es)
2. Panel Properties > Dimension Style Override
3. Modificar propiedades específicas
```

![Sustituciones de Estilo](./imagenes/05-style-overrides.png)

### 3.2 Comparar Estilos con Sustituciones

**Comando DIMSTYLE > Compare:**

```
Comando: DIMSTYLE
Botón: Compare
Seleccionar: Estilo base vs Dimensión con override
```

Muestra todas las diferencias entre el estilo y la dimensión seleccionada.

![Comparación de Estilos](./imagenes/06-compare-styles.png)

### 3.3 Gestionar Sustituciones

**Opciones:**

1. **Guardar override como nuevo estilo**
   - Clic derecho en dimensión > Save as New Style

2. **Aplicar override a estilo existente**
   - Seleccionar dimensiones con override
   - Panel Properties > Apply to Style

3. **Eliminar overrides**
   - Seleccionar dimensión
   - Panel Properties > Clear Overrides

**Buenas prácticas:**
- Usar overrides solo para casos excepcionales
- Documentar overrides en notas de revisión
- Convertir overrides recurrentes en estilos formales

---

## 4. Estándares Internacionales de Dimensionamiento

### 4.1 Principales Estándares

AutoCAD 2026 incluye plantillas predefinidas para estándares internacionales:

| Estándar | Nombre Completo | Región | Características |
|----------|----------------|---------|----------------|
| **ISO** | International Organization for Standardization | Internacional | Unidades métricas, flechas sólidas |
| **ANSI** | American National Standards Institute | EE.UU. | Pulgadas/decimal, flechas cerradas |
| **DIN** | Deutsches Institut für Normung | Alemania | Similar a ISO, formato europeo |
| **JIS** | Japanese Industrial Standards | Japón | Basado en ISO con variaciones |
| **GB** | Guobiao Standards | China | Sistema métrico chino |
| **GOST** | State Standard (Russia) | Rusia/CEI | Formato soviético/ruso |

![Comparación de Estándares](./imagenes/07-international-standards.png)

### 4.2 Configuración ISO 25 (Métrico)

**Características principales:**

```
Unidades: Milímetros
Flechas: Oblique (líneas oblicuas)
Texto: ISO font, 2.5mm
Líneas de extensión: Desplazamiento 0.625mm
Precisión: 0.00 para lineal, 0° para angular
```

**Crear estilo ISO:**

1. DIMSTYLE > New > "ISO-25"
2. **Lines tab:**
   - Extend beyond dim lines: 1.25
   - Offset from origin: 0.625

3. **Symbols and Arrows tab:**
   - Arrowheads: Oblique
   - Arrow size: 2.5

4. **Text tab:**
   - Text style: ISO (crear si no existe)
   - Text height: 2.5
   - Vertical: Centered

5. **Primary Units tab:**
   - Unit format: Decimal
   - Precision: 0.00
   - Decimal separator: Period

![Configuración ISO-25](./imagenes/08-iso-25-configuration.png)

### 4.3 Configuración ANSI (Imperial)

**Características principales:**

```
Unidades: Pulgadas decimales
Flechas: Closed filled
Texto: Romans, 0.12"
Líneas de extensión: Desplazamiento 0.0625"
Precisión: 0.0000 para tolerancias estrechas
```

**Crear estilo ANSI:**

1. DIMSTYLE > New > "ANSI-MECANICO"
2. **Lines tab:**
   - Extend beyond dim lines: 0.125
   - Offset from origin: 0.0625

3. **Symbols and Arrows tab:**
   - Arrowheads: Closed filled
   - Arrow size: 0.12

4. **Text tab:**
   - Text style: Romans
   - Text height: 0.12
   - Vertical: Centered

5. **Primary Units tab:**
   - Unit format: Decimal
   - Precision: 0.0000
   - Zero suppression: Leading

![Configuración ANSI](./imagenes/09-ansi-configuration.png)

### 4.4 Tabla Comparativa de Configuraciones

| Parámetro | ISO | ANSI | DIN | JIS |
|-----------|-----|------|-----|-----|
| **Unidad base** | mm | in | mm | mm |
| **Tipo de flecha** | Oblique | Closed | Oblique | Closed |
| **Tamaño flecha** | 2.5mm | 0.12" | 3mm | 3mm |
| **Altura texto** | 2.5mm | 0.12" | 3.5mm | 3.5mm |
| **Fuente** | ISO | Romans | ISO | Gothic |
| **Offset extensión** | 0.625mm | 0.0625" | 1mm | 1mm |
| **Precisión decimal** | 0.00 | 0.0000 | 0.0 | 0.00 |

---

## 5. Dimensiones Anotativas vs DIMSCALE

### 5.1 Método Tradicional: DIMSCALE

**DIMSCALE** es un factor de escala global para todos los tamaños de dimensión.

**Fórmula:**
```
DIMSCALE = Escala de viewport

Ejemplo:
Plano a escala 1:50
DIMSCALE = 50

Texto de 2.5mm aparecerá como 2.5 x 50 = 125 unidades de modelo
```

**Limitaciones:**
- Requiere múltiples estilos para diferentes escalas
- Difícil gestión en layouts con múltiples viewports
- Cambios de escala requieren actualización manual

![DIMSCALE Tradicional](./imagenes/10-dimscale-traditional.png)

### 5.2 Método Moderno: Dimensiones Anotativas

Las **dimensiones anotativas** se escalan automáticamente según la escala de anotación.

**Ventajas:**
- Un solo estilo funciona para todas las escalas
- Cambio automático de tamaño en viewports
- Sincronización con otras anotaciones anotativas
- Gestión centralizada

**Activar dimensiones anotativas:**

1. **En estilo de dimensión:**
   ```
   DIMSTYLE > Modify > Fit tab
   ☑ Annotative
   ```

2. **Configurar escala de anotación:**
   ```
   Barra de estado > Annotation Scale
   Seleccionar: 1:50, 1:100, etc.
   ```

![Dimensiones Anotativas](./imagenes/11-annotative-dimensions.png)

### 5.3 Comparación DIMSCALE vs Anotativo

| Aspecto | DIMSCALE | Anotativo |
|---------|----------|-----------|
| **Configuración** | Manual por escala | Automático |
| **Estilos necesarios** | Múltiples | Uno solo |
| **Cambio de escala** | Recrear dimensiones | Automático |
| **Viewports múltiples** | Complejo | Sencillo |
| **Mantenimiento** | Alto | Bajo |
| **Aprendizaje** | Simple | Requiere comprensión |
| **Recomendado para** | Planos simples | Producción profesional |

**Recomendación:** Usar dimensiones anotativas en todos los proyectos nuevos.

---

## 6. Técnicas Especiales de Dimensionamiento

### 6.1 Cortes de Dimensión (DIMBREAK)

Los **dimension breaks** crean espacios donde líneas de dimensión se cruzan.

**Comando:**
```
DIMBREAK
Opciones:
- Auto: Detecta automáticamente cruces
- Manual: Seleccionar objeto que cruza
- Remove: Eliminar corte existente
```

**Procedimiento:**
```
1. Comando: DIMBREAK
2. Select dimension to add/remove break: [Seleccionar dimensión]
3. Select object to break dimension: [Seleccionar línea/dimensión que cruza]
   O
   Enter "Auto" para detección automática
```

![Cortes de Dimensión](./imagenes/12-dimension-breaks.png)

**Aplicaciones:**
- Dimensiones que cruzan líneas de objeto
- Múltiples dimensiones paralelas
- Mejora legibilidad en áreas congestionadas

### 6.2 Pliegues de Dimensión (DIMJOGLINE)

Los **jog lines** (pliegues) indican que el punto dimensionado está fuera de la ubicación real.

**Comando:**
```
DIMJOGLINE
```

**Procedimiento:**
```
1. Comando: DIMJOGLINE
2. Select dimension: [Seleccionar dimensión lineal]
3. Specify jog location: [Clic en ubicación del pliegue]
```

**Configuración:**
```
Dimension Style > Symbols and Arrows
Jog height factor: 1.5 (predeterminado)
```

![Pliegues de Dimensión](./imagenes/13-dimension-jog-lines.png)

**Usos comunes:**
- Vistas interrumpidas
- Dimensiones de características lejanas
- Ahorro de espacio en plano

### 6.3 Inspecciones de Dimensión (DIMINSPECT)

Las **dimension inspections** añaden información de control de calidad a dimensiones.

**Comando:**
```
DIMINSPECT
```

**Procedimiento:**
```
1. Comando: DIMINSPECT
2. Select dimensions: [Seleccionar dimensión(es)]
3. Enter dimension inspection dialog
4. Configurar:
   - Shape: Round, Angular, None
   - Label/Inspection rate: Ej. "A" o "25%"
```

![Inspección de Dimensión](./imagenes/14-dimension-inspection.png)

**Opciones de inspección:**

| Opción | Descripción | Uso |
|--------|-------------|-----|
| **Shape: Round** | Marco circular | Dimensiones críticas |
| **Shape: Angular** | Marco angular | Dimensiones de verificación |
| **Shape: None** | Solo texto | Inspección informal |
| **Label** | Identificador (A, B, C) | Referencia a tabla de inspección |
| **Inspection rate** | Frecuencia (25%, 50%, 100%) | Porcentaje de piezas a inspeccionar |

**Aplicaciones en manufactura:**
- Control de calidad
- Tolerancias críticas
- Cumplimiento de estándares ISO 9001
- Trazabilidad de inspección

---

## 7. Mejores Prácticas para Estilos de Dimensión

### 7.1 Nombrado de Estilos

**Convenciones recomendadas:**

```
[DISCIPLINA]-[ESTANDAR]-[ESCALA]

Ejemplos:
ARQT-ISO-50     (Arquitectura, ISO, 1:50)
MEC-ANSI-1      (Mecánica, ANSI, 1:1)
CIVIL-DIN-100   (Civil, DIN, 1:100)
ELEC-ISO-25     (Eléctrica, ISO, 1:25)
```

**Para dimensiones anotativas:**
```
[DISCIPLINA]-[ESTANDAR]-ANOT

Ejemplos:
ARQT-ISO-ANOT
MEC-ANSI-ANOT
```

### 7.2 Organización de Estilos

**Estructura de empresa:**

```
ESTILOS BASE (nunca modificar):
├── ISO-TEMPLATE
├── ANSI-TEMPLATE
├── DIN-TEMPLATE
└── JIS-TEMPLATE

ESTILOS DE PROYECTO (derivados de templates):
├── PROYECTO-A-ISO-ANOT
├── PROYECTO-A-DETALLE
└── PROYECTO-A-GENERAL

ESTILOS ESPECIALES:
├── VERIFICACION (para revisión)
└── CONSTRUCCION (para obra)
```

### 7.3 Documentación de Estilos

**Crear tabla de referencia en cada proyecto:**

| Estilo | Uso | Altura Texto | Flechas | Precisión |
|--------|-----|--------------|---------|-----------|
| ARQ-ISO-ANOT | General | 2.5mm | Oblique | 0.00 |
| ARQ-DETALLE | Detalles | 3.5mm | Closed | 0.0 |
| ARQ-GENERAL | Planos generales | 2.0mm | Oblique | 0 |

### 7.4 Control de Calidad

**Checklist de revisión de estilos:**

- [ ] Nombres de estilos siguen convención
- [ ] Dimensiones anotativas para múltiples escalas
- [ ] Texto legible a escala de impresión (mínimo 2mm)
- [ ] Flechas proporcionales al texto
- [ ] Cumplimiento de estándar internacional aplicable
- [ ] Colores por capa (ByLayer)
- [ ] Tolerancias configuradas correctamente
- [ ] Sin overrides innecesarios
- [ ] Documentación de estilos actualizada

### 7.5 Flujo de Trabajo Profesional

**Proceso recomendado:**

```
1. PLANIFICACIÓN
   - Identificar estándar aplicable (ISO, ANSI, etc.)
   - Determinar escalas necesarias
   - Definir convenciones de nombrado

2. CONFIGURACIÓN
   - Crear estilos base desde templates
   - Configurar dimensiones anotativas
   - Establecer familias de estilos

3. IMPLEMENTACIÓN
   - Aplicar estilos consistentemente
   - Documentar excepciones
   - Evitar overrides

4. VALIDACIÓN
   - Revisar cumplimiento de estándar
   - Verificar legibilidad a escala de impresión
   - Confirmar precisión de unidades

5. MANTENIMIENTO
   - Actualizar estilos según feedback
   - Sincronizar con templates corporativos
   - Documentar cambios
```

---

## 8. Variables de Dimensión Clave

### 8.1 Variables Esenciales

| Variable | Descripción | Valor Típico ISO | Valor Típico ANSI |
|----------|-------------|------------------|-------------------|
| **DIMSCALE** | Factor de escala global | 1 (si anotativo) | 1 (si anotativo) |
| **DIMASZ** | Tamaño de flecha | 2.5 | 0.12 |
| **DIMTXT** | Altura de texto | 2.5 | 0.12 |
| **DIMEXO** | Offset de línea extensión | 0.625 | 0.0625 |
| **DIMEXE** | Extensión más allá de línea | 1.25 | 0.125 |
| **DIMDEC** | Precisión decimal | 2 | 4 |
| **DIMLFAC** | Factor de escala lineal | 1.0 | 1.0 |
| **DIMRND** | Redondeo | 0 | 0 |

### 8.2 Modificar Variables Directamente

**Desde línea de comandos:**
```
Comando: DIMTXT
Enter new value for DIMTXT <2.5000>: 3.5

Comando: DIMASZ
Enter new value for DIMASZ <2.5000>: 3.0
```

**Aplicar a estilo actual:**
Los cambios se aplican al estilo de dimensión actual.

**Verificar valor:**
```
Comando: DIMTXT
Muestra: Current value: 2.5000
```

---

## 9. Ejercicios Prácticos

### Ejercicio 1: Crear Familia de Estilos ISO
**Objetivo:** Crear una familia completa de estilos ISO-25

1. [ ] Crear estilo padre "ISO-25-GENERAL"
2. [ ] Configurar texto 2.5mm, fuente ISO
3. [ ] Configurar flechas oblicuas, 2.5mm
4. [ ] Crear variación para diameter (prefijo Ø)
5. [ ] Crear variación para radius (prefijo R)
6. [ ] Verificar que se crearon estilos hijos automáticamente

**Resultado esperado:**
- ISO-25-GENERAL (padre)
- ISO-25-GENERAL$3 (diameter)
- ISO-25-GENERAL$4 (radial)

### Ejercicio 2: Configurar Dimensiones Anotativas
**Objetivo:** Convertir estilo existente a anotativo

1. [ ] Abrir estilo "Standard"
2. [ ] Activar opción "Annotative" en pestaña Fit
3. [ ] Configurar "Match text and arrow orientation to layout"
4. [ ] Probar en viewport a escala 1:50 y 1:100
5. [ ] Verificar que dimensión cambia tamaño automáticamente

### Ejercicio 3: Aplicar Estándar ANSI
**Objetivo:** Crear estilo mecánico ANSI completo

1. [ ] Crear nuevo estilo "MECANICO-ANSI"
2. [ ] Configurar unidades: Decimal, precisión 0.0000
3. [ ] Configurar flechas: Closed filled, 0.12"
4. [ ] Configurar texto: Romans, 0.12"
5. [ ] Añadir tolerancias: ±0.005 bilateral
6. [ ] Probar en pieza mecánica

### Ejercicio 4: Gestionar Overrides
**Objetivo:** Trabajar con sustituciones de estilo

1. [ ] Dimensionar objeto con estilo standard
2. [ ] Modificar color de texto a rojo en una dimensión
3. [ ] Usar DIMSTYLE > Compare para ver diferencias
4. [ ] Guardar override como nuevo estilo "REVISION"
5. [ ] Aplicar estilo REVISION a otras dimensiones

### Ejercicio 5: Técnicas Especiales
**Objetivo:** Aplicar breaks, jogs e inspections

1. [ ] Crear dimensiones que se cruzan
2. [ ] Aplicar DIMBREAK automático
3. [ ] Añadir jog line a dimensión lineal
4. [ ] Aplicar inspection con marco circular al 100%
5. [ ] Documentar criterios de inspección

---

## Resumen de la Lección

### Conceptos Clave

1. **Familias de Estilos**: Estilo padre + estilos hijos especializados
2. **Overrides**: Cambios temporales sin modificar estilo base
3. **Estándares**: ISO, ANSI, DIN, JIS, GB, GOST
4. **Anotativo vs DIMSCALE**: Moderno vs tradicional
5. **Técnicas Especiales**: Breaks, jogs, inspections

### Comandos Aprendidos

| Comando | Función |
|---------|---------|
| `DIMSTYLE` | Administrador de estilos de dimensión |
| `DIMBREAK` | Crear cortes en dimensiones |
| `DIMJOGLINE` | Añadir pliegues a dimensiones |
| `DIMINSPECT` | Añadir información de inspección |

### Mejores Prácticas

- Usar dimensiones anotativas para proyectos profesionales
- Seguir estándar internacional aplicable
- Crear familias de estilos en lugar de estilos independientes
- Documentar y nombrar estilos consistentemente
- Minimizar uso de overrides

### Atajos de Teclado

| Atajo | Comando |
|-------|---------|
| `D` | DIMSTYLE |
| `DLI` | DIMLINEAR |
| `DAL` | DIMALIGNED |

---

## Siguientes Pasos

En la próxima lección aprenderás sobre **Dimensiones Especiales**, incluyendo:
- Dimensiones angulares, radiales y de diámetro
- Dimensiones de longitud de arco
- Dimensiones ordenadas
- Técnicas de dimensionamiento en cadena y paralelo

---

## Recursos Adicionales

### Referencias de Estándares
- ISO 129-1:2018 - Technical drawings - Indication of dimensions and tolerances
- ASME Y14.5-2018 - Dimensioning and Tolerancing
- DIN 406 - Linear and angular dimensioning
- JIS Z 8317 - Dimensioning and tolerancing

### Variables de Sistema Relacionadas
- Lista completa: [Autodesk Help - Dimension Variables](https://help.autodesk.com)
- DIMVAR - Listar todas las variables de dimensión
- SETVAR - Establecer variables de sistema

---

[← Volver al Módulo 3](./README.md) | [Siguiente: Lección 2 - Dimensiones Especiales →](./leccion-02-dimensiones-especiales.md)
