# Lección 2: Dimensiones Especiales

## Introducción

Las dimensiones lineales básicas son solo el inicio del dimensionamiento técnico. Esta lección cubre dimensiones especiales para geometrías complejas: angulares, radiales, de diámetro, longitud de arco, con pliegue y ordenadas. También aprenderás técnicas de dimensionamiento en cadena y paralelo, esenciales para diseño mecánico y arquitectónico profesional.

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Aplicar dimensiones angulares con diferentes formatos
- Dimensionar círculos y arcos (radius, diameter, arc length)
- Utilizar dimensiones con pliegue para radios grandes
- Implementar dimensiones ordenadas para manufactura
- Aplicar técnicas de dimensionamiento en cadena y paralelo
- Espaciar y alinear dimensiones profesionalmente
- Seleccionar el tipo de dimensión apropiado para cada geometría

## Duración Estimada

50-60 minutos

---

## 1. Dimensiones Angulares (DIMANGULAR)

### 1.1 Conceptos Básicos

Las **dimensiones angulares** miden el ángulo entre dos líneas o el arco de un círculo.

**Comando:**
```
Comando: DIMANGULAR
Atajo: DAN
Cinta: Annotate > Dimensions > Angular
```

![Dimensión Angular](./imagenes/15-angular-dimension.png)

### 1.2 Métodos de Dimensionamiento Angular

**Método 1: Entre dos líneas**
```
1. Comando: DIMANGULAR
2. Select arc, circle, line, or <specify vertex>: [Seleccionar primera línea]
3. Select second line: [Seleccionar segunda línea]
4. Specify dimension arc line location: [Posicionar arco de dimensión]
5. Dimension text = XX°
```

**Método 2: Especificando vértice**
```
1. Comando: DIMANGULAR
2. Select arc, circle, line, or <specify vertex>: [Enter para especificar vértice]
3. Specify angle vertex: [Clic en vértice del ángulo]
4. Specify first angle endpoint: [Clic en primer punto]
5. Specify second angle endpoint: [Clic en segundo punto]
6. Specify dimension arc line location: [Posicionar]
```

**Método 3: Arco de círculo**
```
1. Comando: DIMANGULAR
2. Select arc, circle, line: [Seleccionar arco]
3. Specify dimension arc line location: [Posicionar]
```

![Métodos de Dimensión Angular](./imagenes/16-angular-methods.png)

### 1.3 Formatos de Unidades Angulares

Configuración en Dimension Style > Primary Units > Angular Dimensions:

| Formato | Ejemplo | Uso |
|---------|---------|-----|
| **Decimal Degrees** | 45.5° | Topografía, arquitectura |
| **Deg/Min/Sec** | 45°30'15" | Navegación, astronomía |
| **Gradians** | 50.0g | Ingeniería civil europea |
| **Radians** | 0.7854r | Cálculos matemáticos |
| **Surveyor's Units** | N 45d30'00" E | Topografía |

**Configurar precisión:**
```
Dimension Style Manager > Modify
Primary Units > Angular dimensions
Precision: 0° / 0.0° / 0.00° / 0°00' / 0°00'00"
```

![Formatos Angulares](./imagenes/17-angular-formats.png)

### 1.4 Cuadrantes de Dimensión Angular

AutoCAD mide ángulos considerando el cuadrante seleccionado:

```
Cuadrante 1: 0° - 90°
Cuadrante 2: 90° - 180°
Cuadrante 3: 180° - 270°
Cuadrante 4: 270° - 360°
```

**Controlar cuadrante:**
- Posicionar arco de dimensión en el cuadrante deseado
- Usar opción "Text" para override manual
- Editar después con DIMEDIT > Rotate

![Cuadrantes Angulares](./imagenes/18-angular-quadrants.png)

---

## 2. Dimensiones de Radio (DIMRADIUS)

### 2.1 Dimensión de Radio Estándar

**Comando:**
```
Comando: DIMRADIUS
Atajo: DRA
Cinta: Annotate > Dimensions > Radius
```

**Procedimiento:**
```
1. Comando: DIMRADIUS
2. Select arc or circle: [Seleccionar arco o círculo]
3. Specify dimension line location: [Posicionar]
4. Dimension text = R[valor]
```

![Dimensión de Radio](./imagenes/19-radius-dimension.png)

### 2.2 Posicionamiento de Dimensión de Radio

**Opciones de ubicación:**

1. **Interior del arco**: Para radios grandes
2. **Exterior del arco**: Para radios pequeños
3. **Con leader a centro**: Para claridad

**Configuración de estilo:**
```
Dimension Style > Fit tab
- Text placement: Over dimension line, with leader
- Text Placement: Beside dimension line
```

![Posicionamiento de Radio](./imagenes/20-radius-placement.png)

### 2.3 Prefijos y Sufijos

**Configuración en estilo:**
```
Dimension Style > Primary Units
Prefix: R (predeterminado para radius)
Suffix: [vacío o "TYP" para typical]
```

**Ejemplos:**
```
R25 - Radio estándar
R25 TYP - Radio típico
4X R25 - Cuatro instancias de radio 25
```

---

## 3. Dimensiones de Diámetro (DIMDIAMETER)

### 3.1 Dimensión de Diámetro Estándar

**Comando:**
```
Comando: DIMDIAMETER
Atajo: DDI
Cinta: Annotate > Dimensions > Diameter
```

**Procedimiento:**
```
1. Comando: DIMDIAMETER
2. Select arc or circle: [Seleccionar círculo o arco]
3. Specify dimension line location: [Posicionar]
4. Dimension text = Ø[valor]
```

![Dimensión de Diámetro](./imagenes/21-diameter-dimension.png)

### 3.2 Símbolo de Diámetro (Ø)

**Prefijo automático:**
```
Dimension Style > Primary Units
Prefix: %%c (código para símbolo Ø)
```

**Códigos de texto especiales:**
```
%%c = Ø (diámetro)
%%d = ° (grados)
%%p = ± (más/menos)
%%u = Subrayado toggle
%%o = Sobrerayado toggle
```

### 3.3 Cuándo Usar Radio vs Diámetro

| Usar Radio | Usar Diámetro |
|------------|---------------|
| Arcos < 180° | Círculos completos |
| Filetes | Agujeros |
| Redondeos | Cilindros |
| Esquinas redondeadas | Ejes |
| Cuando el centro es obvio | Cuando el diámetro es la dimensión crítica |

![Radio vs Diámetro](./imagenes/22-radius-vs-diameter.png)

---

## 4. Dimensiones de Longitud de Arco (DIMARC)

### 4.1 Concepto de Longitud de Arco

La **dimensión de longitud de arco** mide la distancia a lo largo de la curva de un arco.

**Comando:**
```
Comando: DIMARC
Atajo: DAR
Cinta: Annotate > Dimensions > Arc Length
```

![Longitud de Arco](./imagenes/23-arc-length.png)

### 4.2 Procedimiento

```
1. Comando: DIMARC
2. Select arc or polyline arc segment: [Seleccionar arco]
3. Specify arc length dimension location: [Posicionar]
4. Dimension text = [longitud del arco]
```

**Opciones:**
- **Partial**: Dimensionar solo parte del arco
- **Leader**: Añadir línea guía

### 4.3 Símbolo de Longitud de Arco

**Prefijo de arco (⌢):**
```
Aparece automáticamente sobre el texto
Configuración en Dimension Style > Symbols and Arrows
Arc length symbol: Preceding text / Above text / None
```

![Símbolo de Arco](./imagenes/24-arc-symbol.png)

### 4.4 Aplicaciones

**Usos comunes:**
- Desarrollo de chapas metálicas
- Longitud de curvas en caminos
- Perímetros parciales
- Trayectorias de movimiento
- Cálculo de materiales flexibles

---

## 5. Dimensiones con Pliegue (DIMJOGGED)

### 5.1 Concepto de Radio con Pliegue

Las **dimensiones con pliegue** (jogged radius) se usan cuando el centro del radio está muy lejos o fuera del plano.

**Comando:**
```
Comando: DIMJOGGED
Atajo: JOG
Cinta: Annotate > Dimensions > Jogged
```

![Dimensión con Pliegue](./imagenes/25-jogged-dimension.png)

### 5.2 Procedimiento

```
1. Comando: DIMJOGGED
2. Select arc or circle: [Seleccionar arco]
3. Specify center location override: [Clic donde mostrar "falso" centro]
4. Specify dimension line location: [Posicionar línea]
5. Specify jog location: [Ubicación del pliegue]
```

**Resultado:**
- Muestra "R[valor]" como dimensión normal
- Indica con pliegue que el centro está desplazado
- Centro override mostrado con símbolo de origen

![Procedimiento Jogged](./imagenes/26-jogged-procedure.png)

### 5.3 Configuración de Pliegue

**Altura del pliegue:**
```
Dimension Style > Symbols and Arrows
Jog height factor: 1.5 (predeterminado)

Ejemplo:
Si texto = 2.5mm
Altura de jog = 2.5 × 1.5 = 3.75mm
```

### 5.4 Aplicaciones

**Cuándo usar dimensión con pliegue:**
- Radios muy grandes (centro fuera del papel)
- Vistas interrumpidas/cortadas
- Espacio limitado en plano
- Centro no relevante para fabricación

---

## 6. Dimensiones Ordenadas (DIMORDINATE)

### 6.1 Concepto de Dimensionamiento Ordenado

Las **dimensiones ordenadas** miden distancias X o Y desde un punto de origen común (datum).

**Comando:**
```
Comando: DIMORDINATE
Atajo: DOR
Cinta: Annotate > Dimensions > Ordinate
```

![Dimensión Ordenada](./imagenes/27-ordinate-dimension.png)

### 6.2 Configurar Origen de Coordenadas

**Establecer UCS origin:**
```
1. Comando: UCS
2. Specify origin of UCS: [Clic en punto datum]
O
1. Comando: UCS
2. Origin
3. Specify new origin point: [Clic en punto datum]
```

**Verificar origen:**
```
Comando: UCS
Current UCS name: *WORLD*
Origin: [coordenadas del origen]
```

![UCS Origin](./imagenes/28-ucs-origin.png)

### 6.3 Crear Dimensiones Ordenadas

**Procedimiento:**
```
1. Establecer UCS origin en datum
2. Comando: DIMORDINATE
3. Specify feature location: [Clic en punto a dimensionar]
4. Specify leader endpoint: [Arrastrar en dirección X o Y]
5. Dimension text = [distancia desde datum]
```

**AutoCAD determina automáticamente:**
- Si arrastras horizontalmente → dimensión Y (vertical)
- Si arrastras verticalmente → dimensión X (horizontal)

**Forzar tipo:**
```
Después de especificar feature location:
- Escribir "X" [Enter] para forzar dimensión X
- Escribir "Y" [Enter] para forzar dimensión Y
```

![Procedimiento Ordenadas](./imagenes/29-ordinate-procedure.png)

### 6.4 Estilo de Dimensiones Ordenadas

**Configuración específica:**
```
Dimension Style > Symbols and Arrows
- Arrowheads: None (sin flechas)

Dimension Style > Text
- Vertical: Centered
- Horizontal: Centered (o conforme a estándar)

Dimension Style > Lines
- Suppress Dim Line 1: ☑
- Suppress Dim Line 2: ☑
```

### 6.5 Aplicaciones en Manufactura

**Ventajas del dimensionamiento ordenado:**
- Ideal para CNC y programación
- Evita acumulación de tolerancias
- Coordenadas directas desde origen
- Rápida verificación dimensional
- Estándar en manufactura moderna

**Industrias que lo usan:**
- Mecanizado CNC
- Fabricación de PCB
- Paneles perforados
- Estructuras metálicas
- Plantillas y matrices

![Aplicación CNC](./imagenes/30-ordinate-cnc-application.png)

---

## 7. Dimensionamiento en Cadena (Chain Dimensioning)

### 7.1 Concepto

El **dimensionamiento en cadena** (también llamado point-to-point) mide cada segmento individualmente, creando una cadena de dimensiones.

![Dimensionamiento en Cadena](./imagenes/31-chain-dimensioning.png)

### 7.2 Crear Dimensionamiento en Cadena

**Método 1: Manual**
```
1. Crear primera dimensión (DIMLINEAR)
2. Enter para repetir comando
3. Seleccionar segundo punto de extensión de la dimensión anterior
4. Seleccionar nuevo punto
5. Repetir para cada segmento
```

**Método 2: DIMCONTINUE**
```
1. Crear primera dimensión base
2. Comando: DIMCONTINUE (DCO)
3. Specify second extension line origin: [Clic en cada punto consecutivo]
4. Enter para terminar
```

![DIMCONTINUE](./imagenes/32-dimcontinue.png)

### 7.3 Ventajas y Desventajas

**Ventajas:**
- Cada dimensión independiente
- Fácil de leer
- Flexible para modificaciones

**Desventajas:**
- Acumulación de tolerancias
- Más dimensiones = más espacio
- Error acumulativo en manufactura

**Fórmula de acumulación:**
```
Tolerancia total = ±(n × tolerancia individual)

Ejemplo:
4 dimensiones de 25 ±0.1
Tolerancia acumulada = ±(4 × 0.1) = ±0.4
```

---

## 8. Dimensionamiento Paralelo (Parallel/Baseline Dimensioning)

### 8.1 Concepto

El **dimensionamiento paralelo** (baseline) mide todas las dimensiones desde una línea base común.

![Dimensionamiento Paralelo](./imagenes/33-baseline-dimensioning.png)

### 8.2 Crear Dimensionamiento Paralelo

**Comando:**
```
Comando: DIMBASELINE
Atajo: DBA
Cinta: Annotate > Dimensions > Baseline
```

**Procedimiento:**
```
1. Crear primera dimensión base (DIMLINEAR)
2. Comando: DIMBASELINE
3. Specify second extension line origin: [Clic en cada punto]
4. Enter para terminar
```

![DIMBASELINE](./imagenes/34-dimbaseline.png)

### 8.3 Configurar Espaciado

**Espaciado entre líneas de dimensión:**
```
Dimension Style > Lines tab
Baseline spacing: 8mm (típico para ISO)
                 0.38" (típico para ANSI)
```

**Modificar variable directamente:**
```
Comando: DIMDLI
Enter new value for DIMDLI <8.0000>: 10
```

### 8.4 Ventajas y Desventajas

**Ventajas:**
- Sin acumulación de tolerancias
- Todas las medidas desde punto común
- Ideal para manufactura de precisión
- Fácil verificación

**Desventajas:**
- Requiere más espacio vertical/horizontal
- Puede ser congestionado
- Difícil modificar base después

### 8.5 Comparación Chain vs Baseline

| Aspecto | Chain | Baseline |
|---------|-------|----------|
| **Acumulación tolerancias** | Sí (±n×tol) | No (±tol) |
| **Espacio requerido** | Menos | Más |
| **Datum común** | No | Sí |
| **Manufactura CNC** | No ideal | Ideal |
| **Flexibilidad** | Alta | Media |
| **Precisión acumulada** | Baja | Alta |

![Chain vs Baseline](./imagenes/35-chain-vs-baseline.png)

---

## 9. Espaciado y Alineación de Dimensiones

### 9.1 Espaciado de Dimensiones (DIMSPACE)

**Comando:**
```
Comando: DIMSPACE
```

**Procedimiento:**
```
1. Comando: DIMSPACE
2. Select base dimension: [Seleccionar dimensión base]
3. Select dimensions to space: [Seleccionar dimensiones a espaciar]
4. Enter value or [Auto] <Auto>:
   - Auto: Usa valor de DIMDLI
   - Valor específico: Ej. 10
```

![DIMSPACE](./imagenes/36-dimspace.png)

**Opciones:**
- **Auto**: Espaciado automático según estilo
- **Valor numérico**: Espaciado personalizado
- **0**: Alinear sin espacio (stackear)

### 9.2 Alineación de Dimensiones (DIMALIGNED)

**No confundir con:**
- DIMALIGNED (comando de dimensión): Crea dimensión alineada a objeto
- Herramientas de alineación: Para alinear dimensiones existentes

**Alinear texto de dimensiones:**
```
Seleccionar dimensiones
Click derecho > Dim Text Position
- Above dim line
- Centered
- Home (posición original)
```

![Alineación de Texto](./imagenes/37-dim-text-alignment.png)

### 9.3 Mejores Prácticas de Espaciado

**Distancias recomendadas:**

| Ubicación | ISO (mm) | ANSI (in) |
|-----------|----------|-----------|
| Objeto a primera dimensión | 10 | 0.375 |
| Entre dimensiones paralelas | 8 | 0.25 |
| Dimensión a borde de papel | 10 | 0.375 |

**Orden de dimensiones (de objeto hacia afuera):**
```
1. Detalles pequeños
2. Dimensiones intermedias
3. Dimensión total general

Ejemplo:
[Objeto] -- 5mm -- [Detalle] -- 8mm -- [Subtotal] -- 8mm -- [Total]
```

![Orden de Dimensiones](./imagenes/38-dimension-ordering.png)

---

## 10. Selección del Tipo de Dimensión Correcto

### 10.1 Árbol de Decisión

```
¿Qué estás midiendo?

├─ Distancia entre dos puntos
│  ├─ Paralela a eje X o Y → DIMLINEAR
│  ├─ Oblicua → DIMALIGNED
│  └─ Desde punto datum → DIMORDINATE
│
├─ Ángulo
│  ├─ Entre dos líneas → DIMANGULAR
│  └─ Arco de círculo → DIMANGULAR (seleccionar arco)
│
├─ Círculo o arco
│  ├─ Círculo completo → DIMDIAMETER
│  ├─ Arco > 180° → DIMDIAMETER
│  ├─ Arco < 180° → DIMRADIUS
│  ├─ Radio muy grande → DIMJOGGED
│  └─ Longitud de arco → DIMARC
│
└─ Serie de dimensiones
   ├─ Desde base común → DIMBASELINE
   ├─ Secuencia punto a punto → DIMCONTINUE
   └─ Coordenadas CNC → DIMORDINATE
```

### 10.2 Tabla de Referencia Rápida

| Geometría | Comando | Cuándo Usar |
|-----------|---------|-------------|
| **Línea horizontal/vertical** | DIMLINEAR | Distancias ortogonales |
| **Línea oblicua** | DIMALIGNED | Distancias en ángulo |
| **Ángulo** | DIMANGULAR | Ángulos entre líneas |
| **Círculo** | DIMDIAMETER | Agujeros, ejes |
| **Arco < 180°** | DIMRADIUS | Filetes, redondeos |
| **Arco, radio grande** | DIMJOGGED | Centro fuera de vista |
| **Longitud de curva** | DIMARC | Desarrollo, perímetros |
| **Coordenadas datum** | DIMORDINATE | CNC, tablas de agujeros |
| **Serie desde base** | DIMBASELINE | Manufactura de precisión |
| **Serie consecutiva** | DIMCONTINUE | Dimensionamiento general |

---

## 11. Ejercicios Prácticos

### Ejercicio 1: Dimensiones Angulares Completas
**Objetivo:** Dominar todos los métodos de dimensionamiento angular

**Archivo:** `ejercicio-2-1-angulos.dwg`

1. [ ] Dibujar triángulo con ángulos 30°, 60°, 90°
2. [ ] Dimensionar con DIMANGULAR cada ángulo
3. [ ] Cambiar formato a Deg/Min/Sec
4. [ ] Dimensionar arco de 45° en círculo
5. [ ] Verificar que suma de ángulos = 180°

**Resultado esperado:** Triángulo completamente dimensionado con tres métodos diferentes.

### Ejercicio 2: Radio vs Diámetro
**Objetivo:** Aplicar criterios correctos para radio y diámetro

**Archivo:** Crear pieza mecánica nueva

1. [ ] Dibujar pieza con 4 agujeros (Ø10)
2. [ ] Añadir 4 filetes de esquina (R5)
3. [ ] Dimensionar agujeros con DIMDIAMETER
4. [ ] Dimensionar filetes con DIMRADIUS
5. [ ] Añadir nota "4X Ø10" para agujeros
6. [ ] Añadir nota "4X R5 TYP" para filetes

**Resultado esperado:** Dimensionamiento apropiado según tipo de característica.

### Ejercicio 3: Longitud de Arco
**Objetivo:** Calcular longitudes de arco para desarrollo

**Archivo:** `ejercicio-2-3-desarrollo.dwg`

1. [ ] Dibujar chapa con curva R50, ángulo 90°
2. [ ] Dimensionar radio con DIMRADIUS
3. [ ] Dimensionar longitud de arco con DIMARC
4. [ ] Calcular manualmente: L = R × θ (radianes)
5. [ ] Verificar: π × 50 / 2 = 78.54mm
6. [ ] Comparar resultado AutoCAD vs manual

**Resultado esperado:** Comprensión de longitud de arco y verificación.

### Ejercicio 4: Dimensión con Pliegue
**Objetivo:** Dimensionar radios grandes con pliegue

**Archivo:** Crear vista de arco grande

1. [ ] Dibujar arco R500, centro fuera de límites
2. [ ] Usar DIMJOGGED para dimensionar
3. [ ] Colocar centro override cerca del arco
4. [ ] Ajustar ubicación del pliegue
5. [ ] Verificar que jog height factor = 1.5

**Resultado esperado:** Dimensión de radio con pliegue profesional.

### Ejercicio 5: Dimensionamiento Ordenado para CNC
**Objetivo:** Crear tabla de agujeros con coordenadas

**Archivo:** `ejercicio-2-5-agujeros.dwg`

1. [ ] Establecer UCS origin en esquina inferior izquierda
2. [ ] Crear patrón de 6 agujeros en posiciones específicas
3. [ ] Dimensionar todos con DIMORDINATE
4. [ ] Crear dimensiones X para posiciones horizontales
5. [ ] Crear dimensiones Y para posiciones verticales
6. [ ] Verificar que todas miden desde datum común

**Coordenadas sugeridas:**
```
Agujero 1: X=25, Y=25
Agujero 2: X=75, Y=25
Agujero 3: X=125, Y=25
Agujero 4: X=25, Y=75
Agujero 5: X=75, Y=75
Agujero 6: X=125, Y=75
```

**Resultado esperado:** Tabla de agujeros lista para programación CNC.

### Ejercicio 6: Chain vs Baseline Comparison
**Objetivo:** Comparar métodos y entender acumulación de tolerancias

**Archivo:** Crear dos vistas idénticas

1. [ ] Dibujar rectángulo con 4 divisiones internas
2. [ ] **Vista 1**: Dimensionar con DIMCONTINUE (chain)
3. [ ] **Vista 2**: Dimensionar con DIMBASELINE (baseline)
4. [ ] Añadir tolerancias ±0.1 a cada dimensión
5. [ ] Calcular tolerancia acumulada en chain
6. [ ] Observar que baseline no acumula

**Cálculos:**
```
Chain: 5 dimensiones × ±0.1 = ±0.5 total
Baseline: Todas mantienen ±0.1 desde datum
```

**Resultado esperado:** Comprensión clara de diferencias y cuándo usar cada método.

### Ejercicio 7: Espaciado Profesional de Dimensiones
**Objetivo:** Aplicar mejores prácticas de espaciado

**Archivo:** `ejercicio-2-7-espaciado.dwg`

1. [ ] Abrir plano con dimensiones mal espaciadas
2. [ ] Usar DIMSPACE para espaciar a 8mm
3. [ ] Verificar distancia objeto-primera dimensión = 10mm
4. [ ] Ordenar dimensiones: detalles → subtotales → total
5. [ ] Alinear texto de todas las dimensiones

**Resultado esperado:** Plano con dimensionamiento profesional y legible.

---

## 12. Casos de Estudio

### Caso 1: Pieza Mecánica con Geometrías Múltiples

**Escenario:** Dimensionar brida mecánica con agujeros, filetes y centros.

**Dimensiones requeridas:**
- Diámetro exterior (DIMDIAMETER)
- 4 agujeros de montaje (DIMDIAMETER con "4X")
- Filetes de esquinas (DIMRADIUS con "TYP")
- Espaciado entre agujeros (DIMBASELINE desde centro)
- Ángulos de distribución (DIMANGULAR)

![Caso Brida Mecánica](./imagenes/39-mechanical-flange-case.png)

### Caso 2: Plano Arquitectónico con Arcos

**Escenario:** Dimensionar ventana arqueada en fachada.

**Dimensiones requeridas:**
- Ancho total (DIMLINEAR)
- Altura a inicio de arco (DIMLINEAR)
- Radio del arco (DIMRADIUS)
- Longitud de arco (DIMARC) para cálculo de vidrio

**Nota especial:** La longitud de arco es crítica para presupuesto de vidrio curvado.

### Caso 3: Panel Perforado para Control

**Escenario:** Panel con 24 agujeros en patrón de rejilla 6×4.

**Método óptimo:** Dimensionamiento ordenado (DIMORDINATE)

**Razones:**
- Coordenadas directas para taladrado CNC
- Sin acumulación de errores
- Fácil verificación durante producción
- Formato estándar en manufactura

---

## Resumen de la Lección

### Comandos Aprendidos

| Comando | Atajo | Función |
|---------|-------|---------|
| `DIMANGULAR` | DAN | Dimensión angular |
| `DIMRADIUS` | DRA | Dimensión de radio |
| `DIMDIAMETER` | DDI | Dimensión de diámetro |
| `DIMARC` | DAR | Longitud de arco |
| `DIMJOGGED` | JOG | Radio con pliegue |
| `DIMORDINATE` | DOR | Dimensión ordenada |
| `DIMCONTINUE` | DCO | Dimensión en cadena |
| `DIMBASELINE` | DBA | Dimensión paralela |
| `DIMSPACE` | - | Espaciar dimensiones |

### Conceptos Clave

1. **Dimensiones angulares**: Múltiples métodos según geometría
2. **Radio vs Diámetro**: Criterios de selección apropiados
3. **Longitud de arco**: Para desarrollos y perímetros curvos
4. **Dimensiones con pliegue**: Radios grandes o centros lejanos
5. **Dimensiones ordenadas**: Coordenadas desde datum (ideal CNC)
6. **Chain dimensioning**: Punto a punto, acumula tolerancias
7. **Baseline dimensioning**: Desde base común, sin acumulación
8. **Espaciado profesional**: DIMSPACE para organización

### Criterios de Decisión

**Radio o Diámetro:**
- Arco < 180° → Radio
- Círculo completo → Diámetro
- Agujeros/ejes → Diámetro
- Filetes/redondeos → Radio

**Chain o Baseline:**
- Fabricación general → Chain
- CNC/Precisión → Baseline
- Espacio limitado → Chain
- Sin acumulación tolerancias → Baseline

**Linear u Ordenado:**
- Dimensionamiento tradicional → Linear
- Programación CNC → Ordenado
- Tablas de agujeros → Ordenado
- Verificación rápida → Ordenado

### Mejores Prácticas

- Usar código %%c para símbolo de diámetro (Ø)
- Espaciar dimensiones paralelas a 8mm (ISO) o 0.25" (ANSI)
- Ordenar dimensiones de menor a mayor desde objeto
- Usar DIMBASELINE para evitar acumulación de tolerancias
- Añadir "TYP" o "4X" para características repetidas
- Establecer UCS origin correcto para dimensiones ordenadas

---

## Siguientes Pasos

En la próxima lección aprenderás sobre **Tolerancias de Dimensión**, incluyendo:
- Tolerancias geométricas (GD&T)
- Marcos de control de característica
- Símbolos de datum y características geométricas
- Modificadores de condición de material (MMC, LMC, RFS)
- Estándares ISO de tolerancias

---

## Recursos Adicionales

### Variables de Sistema Relacionadas

```
DIMAUNIT - Unidades angulares (0=Decimal deg, 1=Deg/min/sec, etc.)
DIMADEC - Precisión decimal angular
DIMDLI - Espaciado baseline (default 8mm)
DIMCEN - Tamaño de marca de centro
DIMATFIT - Ajuste automático de texto y flechas
```

### Estándares de Referencia

- ASME Y14.5 - Dimensioning and Tolerancing
- ISO 129-1 - Technical drawings - Indication of dimensions and tolerances
- ISO 6410-1 - Technical drawings - Screw threads and threaded parts

### Atajos de Teclado Útiles

| Atajo | Comando |
|-------|---------|
| `DAN` | DIMANGULAR |
| `DRA` | DIMRADIUS |
| `DDI` | DIMDIAMETER |
| `DAR` | DIMARC |
| `DOR` | DIMORDINATE |
| `DCO` | DIMCONTINUE |
| `DBA` | DIMBASELINE |

---

[← Lección 1: Estilos de Dimensión Avanzados](./leccion-01-estilos-dimension-avanzados.md) | [Siguiente: Lección 3 - Tolerancias de Dimensión →](./leccion-03-tolerancias-dimension.md)
