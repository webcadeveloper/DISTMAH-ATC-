# Leccion 3: Tolerancias y GD&T

**Duracion:** 75 minutos
**Modulo:** 3 - Dimensionamiento Avanzado
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender los conceptos de tolerancias dimensionales
- Aplicar tolerancias en estilos de dimension
- Usar el comando TOLERANCE para GD&T
- Crear marcos de control de caracteristicas
- Implementar datums y modificadores

---

## Introduccion

Las tolerancias son fundamentales en dibujos de ingenieria para especificar variaciones aceptables en dimensiones. GD&T (Geometric Dimensioning and Tolerancing) es el sistema estandarizado para comunicar tolerancias geometricas en documentacion tecnica.

---

## 1. Conceptos de Tolerancias

### 1.1 Que es una Tolerancia

La tolerancia es la variacion total permitida en una dimension:

```
Tolerancia = Limite Superior - Limite Inferior

Ejemplo:
Dimension nominal: 50.00
Limite superior: 50.05
Limite inferior: 49.95
Tolerancia: 0.10
```

### 1.2 Tipos de Tolerancias Dimensionales

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Simetrica | ±valor | 50.00 ±0.05 |
| Desviacion | +valor/-valor | 50.00 +0.10/-0.05 |
| Limites | valor-valor | 50.05-49.95 |
| Basica | [valor] | [50.00] |

### 1.3 Importancia en Manufactura

- Define intercambiabilidad de piezas
- Establece criterios de aceptacion/rechazo
- Afecta costo de fabricacion
- Determina metodos de inspeccion

---

## 2. Tolerancias en Dimension Style

### 2.1 Configurar Tolerancias

```
Command: DIMSTYLE
Modify > Tolerances tab
```

### 2.2 Opciones de Formato

| Metodo | Descripcion | Visualizacion |
|--------|-------------|---------------|
| None | Sin tolerancia | 50.00 |
| Symmetrical | ±valor | 50.00±0.05 |
| Deviation | +superior/-inferior | 50.00+0.10/-0.05 |
| Limits | Limites alto/bajo | 50.10/49.90 |
| Basic | Valor teorico | [50.00] |

### 2.3 Parametros de Tolerancia

| Parametro | Funcion |
|-----------|---------|
| Upper value | Desviacion superior |
| Lower value | Desviacion inferior |
| Scaling for height | Tamano relativo al texto |
| Vertical position | Top/Middle/Bottom |
| Precision | Decimales de tolerancia |
| Zero suppression | Suprimir ceros |

### 2.4 Ejemplo: Configurar Simetrica

```
Tolerances tab:
Method: Symmetrical
Upper value: 0.05
Scaling for height: 0.7
Vertical position: Middle
Precision: 0.00
```

### 2.5 Ejemplo: Configurar Desviacion

```
Tolerances tab:
Method: Deviation
Upper value: 0.10
Lower value: 0.05
Scaling for height: 0.7
Vertical position: Bottom
```

---

## 3. Introduccion a GD&T

### 3.1 Que es GD&T

Geometric Dimensioning and Tolerancing es un sistema simbolico para definir y comunicar tolerancias de ingenieria.

### 3.2 Estandares

- **ASME Y14.5:** Estandar americano (mas usado)
- **ISO 1101:** Estandar internacional
- AutoCAD 2026 soporta ambos

### 3.3 Componentes de GD&T

| Componente | Funcion |
|------------|---------|
| Simbolo geometrico | Tipo de control |
| Zona de tolerancia | Variacion permitida |
| Modificadores | Condiciones de material |
| Datums | Referencias |

---

## 4. Simbolos Geometricos

### 4.1 Categorias de Simbolos

**Forma (Form):**
| Simbolo | Nombre | Descripcion |
|---------|--------|-------------|
| ─ | Straightness | Rectitud |
| ○ | Flatness | Planitud |
| ○ | Circularity | Circularidad |
| ⌭ | Cylindricity | Cilindricidad |

**Orientacion (Orientation):**
| Simbolo | Nombre | Descripcion |
|---------|--------|-------------|
| ⊥ | Perpendicularity | Perpendicularidad |
| ∥ | Parallelism | Paralelismo |
| ∠ | Angularity | Angularidad |

**Ubicacion (Location):**
| Simbolo | Nombre | Descripcion |
|---------|--------|-------------|
| ⊕ | Position | Posicion |
| ◎ | Concentricity | Concentricidad |
| ═ | Symmetry | Simetria |

**Runout:**
| Simbolo | Nombre | Descripcion |
|---------|--------|-------------|
| ↗ | Circular Runout | Descentramiento circular |
| ↗↗ | Total Runout | Descentramiento total |

**Perfil (Profile):**
| Simbolo | Nombre | Descripcion |
|---------|--------|-------------|
| ⌓ | Profile of a Line | Perfil de linea |
| ⌔ | Profile of a Surface | Perfil de superficie |

---

## 5. Comando TOLERANCE

### 5.1 Acceso

- **Command Line:** `TOLERANCE` o `TOL`
- **Ribbon:** Annotate Tab > Dimensions > Tolerance
- **Menu:** Dimension > Tolerance

### 5.2 Dialogo Geometric Tolerance

Al ejecutar TOLERANCE se abre un dialogo para configurar:

| Seccion | Elementos |
|---------|-----------|
| Sym | Simbolo geometrico |
| Tolerance 1 | Zona de tolerancia primaria |
| Tolerance 2 | Zona de tolerancia secundaria |
| Datum 1 | Referencia primaria |
| Datum 2 | Referencia secundaria |
| Datum 3 | Referencia terciaria |
| Height | Altura de proyeccion |
| Projected Tolerance Zone | Zona proyectada |
| Datum Identifier | Identificador de datum |

### 5.3 Crear Marco de Control

```
Command: TOLERANCE
(dialogo se abre)
1. Click en Sym > seleccionar simbolo (ej: Position ⊕)
2. En Tolerance 1: escribir 0.05
3. Click en modificador si aplica (ej: Ⓜ MMC)
4. En Datum 1: escribir A
5. En Datum 2: escribir B
6. En Datum 3: escribir C
7. OK
8. Specify location: (click para ubicar)
```

---

## 6. Datums

### 6.1 Que es un Datum

Un datum es una referencia teorica exacta desde la cual se miden tolerancias geometricas.

### 6.2 Crear Simbolo de Datum

```
Command: TOLERANCE
Datum Identifier: A
(OK para crear solo identificador de datum)
```

O usar el boton "Datum Identifier" en el dialogo.

### 6.3 Feature Control Frame con Datums

```
|⊕|Ø0.05Ⓜ|A|B|C|
```

Significa: Posicion con tolerancia de Ø0.05 en MMC referenciada a datums A, B, C.

### 6.4 Orden de Datums

- **Primario (A):** Contacto con 3 puntos minimo
- **Secundario (B):** Contacto con 2 puntos minimo
- **Terciario (C):** Contacto con 1 punto minimo

---

## 7. Modificadores de Material

### 7.1 Tipos de Modificadores

| Simbolo | Nombre | Significado |
|---------|--------|-------------|
| Ⓜ | MMC | Maximum Material Condition |
| Ⓛ | LMC | Least Material Condition |
| Ⓢ | RFS | Regardless of Feature Size |

### 7.2 MMC (Condicion de Maximo Material)

- **Agujero:** Dimension minima (mas material)
- **Eje:** Dimension maxima (mas material)
- Permite **tolerancia bonus**

### 7.3 LMC (Condicion de Minimo Material)

- **Agujero:** Dimension maxima
- **Eje:** Dimension minima
- Usado para garantizar espesor de pared

### 7.4 Tolerancia Bonus

Cuando la caracteristica se desvia de MMC, se gana tolerancia adicional igual a la desviacion.

```
Ejemplo:
Tolerancia posicional: Ø0.05 @ MMC
Agujero nominal: Ø10.00 +0.10/-0.00
MMC del agujero: Ø10.00

Si agujero mide Ø10.08:
Desviacion de MMC: 0.08
Tolerancia bonus: 0.08
Tolerancia total: 0.05 + 0.08 = 0.13
```

---

## 8. Caracteristicas Comunes de GD&T

### 8.1 Posicion (Position)

La tolerancia mas usada. Controla la ubicacion de caracteristicas.

```
Feature Control Frame:
|⊕|Ø0.25Ⓜ|A|B|C|

Interpretacion:
El eje del agujero debe estar dentro de una zona cilindrica
de Ø0.25 en MMC, referenciada a datums A, B, C.
```

### 8.2 Perpendicularidad (Perpendicularity)

Controla que una superficie o eje sea perpendicular a un datum.

```
|⊥|0.05|A|

El eje debe estar entre dos planos paralelos
separados 0.05, perpendiculares al datum A.
```

### 8.3 Planitud (Flatness)

Controla la planicie de una superficie.

```
|─|0.02|

La superficie debe estar entre dos planos paralelos
separados 0.02.
```

### 8.4 Circularidad (Circularity)

Controla la redondez de un elemento circular.

```
|○|0.01|

Cada seccion circular debe estar entre dos circulos
concentricos con diferencia radial de 0.01.
```

---

## 9. Crear GD&T Completo

### 9.1 Ejemplo: Placa con Agujeros

**Paso 1: Dibujar geometria**
```
Rectangulo 100x50
4 agujeros Ø10 en patron 80x30
```

**Paso 2: Crear datums**
```
Command: TOLERANCE
- Datum Identifier: A (en superficie inferior)
- Datum Identifier: B (en borde izquierdo)
- Datum Identifier: C (en borde inferior)
```

**Paso 3: Dimensionar con tolerancias**
```
Dimension Style con tolerancias:
- Agujeros: Ø10.00 +0.10/-0.00
- Ubicacion: 40.00 ±0.05, 25.00 ±0.05
```

**Paso 4: Agregar control de posicion**
```
Command: TOLERANCE
Sym: Position (⊕)
Tolerance 1: 0.25, Ø, Ⓜ
Datum 1: A
Datum 2: B
Datum 3: C
```

---

## 10. Variables Relacionadas

### 10.1 Variables de Tolerancia

| Variable | Funcion | Default |
|----------|---------|---------|
| DIMTOL | Activar tolerancias | 0 (Off) |
| DIMTP | Tolerancia positiva | 0.0000 |
| DIMTM | Tolerancia negativa | 0.0000 |
| DIMTDEC | Precision de tolerancia | 4 |
| DIMTZIN | Supresion de ceros | 0 |
| DIMTFAC | Factor de escala | 1.0 |

### 10.2 Modificar Variables

```
Command: DIMTOL
Enter new value for DIMTOL <0>: 1

Command: DIMTP
Enter new value for DIMTP <0.0000>: 0.05

Command: DIMTM
Enter new value for DIMTM <0.0000>: 0.05
```

---

## 11. Mejores Practicas GD&T

### 11.1 Seleccion de Datums

- Elegir superficies funcionales
- Considerar proceso de manufactura
- Usar datums accesibles para inspeccion
- Mantener consistencia en el proyecto

### 11.2 Especificacion de Tolerancias

- Usar tolerancias mas amplias posibles
- Aplicar MMC cuando la funcion lo permita
- Considerar capacidad de proceso
- Evaluar costo vs precision

### 11.3 Documentacion

- Incluir notas generales de GD&T
- Especificar estandar usado (ASME o ISO)
- Documentar excepciones

---

## Ejercicio Practico 3

**Objetivo:** Dominar tolerancias y GD&T.

**Tarea 1: Tolerancias Dimensionales**
- Crear estilo con tolerancia simetrica ±0.05
- Crear estilo con desviacion +0.10/-0.00
- Crear estilo con limites
- Aplicar a dimensiones

**Tarea 2: Datums**
- Dibujar pieza simple
- Identificar superficies de referencia
- Crear simbolos de datum A, B, C
- Ubicar correctamente

**Tarea 3: Feature Control Frame Basico**
- Crear tolerancia de planitud |─|0.02|
- Crear tolerancia de perpendicularidad |⊥|0.05|A|
- Ubicar en el dibujo

**Tarea 4: Tolerancia Posicional**
- Crear patron de 4 agujeros
- Establecer datums
- Aplicar |⊕|Ø0.25Ⓜ|A|B|C|
- Dimensionar agujeros con tolerancia

**Tarea 5: GD&T Completo**
- Crear plano de pieza mecanica
- Aplicar todos los tipos de tolerancia
- Verificar correcta aplicacion de GD&T

**Entregable:** Plano con GD&T completo segun ASME Y14.5.

---

## Evaluacion

**Pregunta 1:** Que significa el simbolo Ⓜ en GD&T?

**Pregunta 2:** Cual es la diferencia entre tolerancia simetrica y desviacion?

**Pregunta 3:** Que comando crea marcos de control geometrico?

**Pregunta 4:** Cuantos datums puede tener un feature control frame?

**Pregunta 5:** Que es tolerancia bonus?

---

## Resumen

En esta leccion aprendiste:

- Conceptos de tolerancias dimensionales
- Configurar tolerancias en dimension style
- Simbolos geometricos de GD&T
- Usar el comando TOLERANCE
- Crear datums y modificadores
- Aplicar GD&T profesionalmente

**Proxima Leccion:** Leaders y Multileaders

---

**Tiempo de estudio recomendado:** 75 minutos
**Practica adicional:** 60 minutos aplicando GD&T a plano mecanico
