# Leccion 1: Estilos de Dimension Avanzados

**Duracion:** 60 minutos
**Modulo:** 3 - Dimensionamiento Avanzado
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear y gestionar familias de estilos de dimension
- Aplicar sustituciones de estilos (overrides)
- Configurar estilos segun estandares internacionales
- Implementar dimensiones anotativas
- Utilizar tecnicas especiales de dimensionamiento

---

## Introduccion

Los estilos de dimension son fundamentales para crear documentacion tecnica profesional y consistente. Esta leccion profundiza en la gestion avanzada de estilos, incluyendo familias de estilos, dimensiones anotativas y tecnicas especiales.

---

## 1. Administrador de Estilos de Dimension

### 1.1 Acceso al Comando

- **Command Line:** `DIMSTYLE` o `D`
- **Ribbon:** Annotate Tab > Dimensions > Dimension Style
- **Menu:** Format > Dimension Style

### 1.2 Dialogo Dimension Style Manager

![Dimension Style Manager](../imagenes/leccion-1-m3-dimstyle-manager.png)

| Seccion | Funcion |
|---------|---------|
| Styles | Lista de estilos disponibles |
| Preview | Vista previa del estilo |
| Set Current | Activar estilo seleccionado |
| New | Crear nuevo estilo |
| Modify | Modificar estilo existente |
| Override | Crear sustituciones temporales |
| Compare | Comparar dos estilos |

### 1.3 Anatomia de un Estilo

Un estilo de dimension controla mas de 70 variables:

| Categoria | Variables Controladas |
|-----------|----------------------|
| Lines | Color, tipo de linea, grosor, extension |
| Symbols and Arrows | Tipo de flecha, tamano, simbolos de centro |
| Text | Fuente, altura, color, alineacion |
| Fit | Ubicacion de texto y flechas, escala |
| Primary Units | Formato, precision, prefijos, sufijos |
| Alternate Units | Unidades secundarias |
| Tolerances | Formato, precision, alineacion |

---

## 2. Familias de Estilos de Dimension

### 2.1 Concepto de Familias

Una familia de estilos consiste en:
- **Estilo padre:** Configuracion base general
- **Estilos hijos:** Variaciones para tipos especificos

### 2.2 Nomenclatura de Estilos Hijos

```
Estilo Padre: ARQUITECTONICO
Estilos Hijos:
- ARQUITECTONICO$0 (Linear)
- ARQUITECTONICO$2 (Angular)
- ARQUITECTONICO$3 (Diameter)
- ARQUITECTONICO$4 (Radial)
- ARQUITECTONICO$6 (Ordinate)
```

### 2.3 Crear Familia de Estilos

```
1. Dimension Style Manager > New
2. Start With: Standard
3. New Style Name: MECANICO
4. Use for: All dimensions
5. OK
6. Modificar configuracion general
7. Continue

Para crear estilo hijo:
1. Seleccionar estilo padre
2. New
3. Use for: (tipo especifico, ej: Diameter)
4. Configurar variaciones especificas
```

### 2.4 Ejemplo: Familia Mecanica

**Estilo Padre - MECANICO:**
- Texto: Arial, 2.5mm
- Flechas: Closed filled, 2.5mm
- Unidades: Decimales, precision 0.00

**Estilo Hijo - Diameter ($3):**
- Prefijo: Ø
- Tolerancia: ±0.05

**Estilo Hijo - Angular ($2):**
- Unidades: Grados decimales
- Precision: 0.0°

---

## 3. Sustituciones de Estilos (Overrides)

### 3.1 Que son las Sustituciones

Cambios temporales a dimensiones individuales sin modificar el estilo base.

### 3.2 Aplicar Sustituciones

```
1. Seleccionar dimension(es)
2. Properties (Ctrl+1)
3. Modificar propiedad deseada
(la dimension muestra cambio sin afectar estilo)
```

### 3.3 Override vs Estilo

| Override | Estilo |
|----------|--------|
| Afecta solo dimension seleccionada | Afecta todas las dimensiones |
| Temporal | Permanente |
| Puede causar inconsistencias | Garantiza consistencia |
| Dificil de rastrear | Facil de gestionar |

### 3.4 Gestionar Overrides

**Guardar como nuevo estilo:**
```
Dimension Style Manager > Override
Modificar propiedades
Set Current (convierte a override activo)

Para guardar:
Right-click en override > Save to New Style
```

**Eliminar overrides:**
```
Seleccionar dimension
Properties > Dimension Style
Seleccionar estilo original
(elimina override)
```

### 3.5 Comparar Estilos

```
Dimension Style Manager > Compare
Compare: MECANICO
With: Standard
(muestra diferencias entre estilos)
```

---

## 4. Estandares Internacionales

### 4.1 Principales Estandares

| Estandar | Nombre Completo | Region |
|----------|----------------|--------|
| ISO | International Organization for Standardization | Internacional |
| ANSI | American National Standards Institute | EE.UU. |
| DIN | Deutsches Institut fur Normung | Alemania |
| JIS | Japanese Industrial Standards | Japon |
| GB | Guobiao Standards | China |
| GOST | State Standard | Rusia |

### 4.2 Configuracion ISO-25 (Metrico)

```
Dimension Style > New > ISO-25

Lines tab:
- Extend beyond dim lines: 1.25
- Offset from origin: 0.625

Symbols and Arrows tab:
- Arrowheads: Oblique
- Arrow size: 2.5

Text tab:
- Text style: ISO
- Text height: 2.5
- Vertical: Centered

Primary Units tab:
- Unit format: Decimal
- Precision: 0.00
```

### 4.3 Configuracion ANSI (Imperial)

```
Dimension Style > New > ANSI-MECANICO

Lines tab:
- Extend beyond dim lines: 0.125
- Offset from origin: 0.0625

Symbols and Arrows tab:
- Arrowheads: Closed filled
- Arrow size: 0.12

Text tab:
- Text style: Romans
- Text height: 0.12

Primary Units tab:
- Unit format: Decimal
- Precision: 0.0000
```

### 4.4 Comparativa de Configuraciones

| Parametro | ISO | ANSI | DIN |
|-----------|-----|------|-----|
| Unidad base | mm | in | mm |
| Tipo de flecha | Oblique | Closed | Oblique |
| Tamano flecha | 2.5mm | 0.12" | 3mm |
| Altura texto | 2.5mm | 0.12" | 3.5mm |
| Fuente | ISO | Romans | ISO |

---

## 5. Dimensiones Anotativas vs DIMSCALE

### 5.1 Metodo Tradicional: DIMSCALE

DIMSCALE es un factor de escala global:

```
DIMSCALE = Factor de escala del viewport

Ejemplo:
Plano a escala 1:50
DIMSCALE = 50

Texto de 2.5mm aparece como:
2.5 x 50 = 125 unidades de modelo
```

**Limitaciones:**
- Requiere multiples estilos para diferentes escalas
- Dificil gestion en layouts con multiples viewports
- Cambios de escala requieren actualizacion manual

### 5.2 Metodo Moderno: Dimensiones Anotativas

Las dimensiones anotativas escalan automaticamente segun la escala de anotacion.

**Activar:**
```
Dimension Style Manager > Modify
Fit tab > ☑ Annotative
```

**Ventajas:**
- Un solo estilo funciona para todas las escalas
- Cambio automatico de tamano en viewports
- Sincronizacion con otras anotaciones anotativas

### 5.3 Comparacion

| Aspecto | DIMSCALE | Anotativo |
|---------|----------|-----------|
| Configuracion | Manual por escala | Automatico |
| Estilos necesarios | Multiples | Uno solo |
| Cambio de escala | Recrear dimensiones | Automatico |
| Viewports multiples | Complejo | Sencillo |
| Recomendado | Planos simples | Produccion profesional |

---

## 6. Tecnicas Especiales

### 6.1 Cortes de Dimension (DIMBREAK)

Crea espacios donde lineas de dimension se cruzan.

```
Command: DIMBREAK
Select dimension to add/remove break: (seleccionar)
Select object to break dimension or [Auto/Manual/Remove]: A
(detecta automaticamente cruces)
```

### 6.2 Pliegues de Dimension (DIMJOGLINE)

Indica que el punto dimensionado esta fuera de la ubicacion real.

```
Command: DIMJOGLINE
Select dimension: (seleccionar dimension lineal)
Specify jog location: (click en ubicacion del pliegue)
```

**Configuracion:**
```
Dimension Style > Symbols and Arrows
Jog height factor: 1.5 (predeterminado)
```

### 6.3 Inspeccion de Dimension (DIMINSPECT)

Anade informacion de control de calidad.

```
Command: DIMINSPECT
Select dimensions: (seleccionar)
Enter dimension inspection dialog:
- Shape: Round, Angular, None
- Label: A, B, C...
- Inspection rate: 25%, 50%, 100%
```

---

## 7. Variables de Dimension Clave

### 7.1 Variables Esenciales

| Variable | Descripcion | ISO | ANSI |
|----------|-------------|-----|------|
| DIMSCALE | Factor escala global | 1 | 1 |
| DIMASZ | Tamano de flecha | 2.5 | 0.12 |
| DIMTXT | Altura de texto | 2.5 | 0.12 |
| DIMEXO | Offset linea extension | 0.625 | 0.0625 |
| DIMEXE | Extension mas alla | 1.25 | 0.125 |
| DIMDEC | Precision decimal | 2 | 4 |

### 7.2 Modificar Variables

```
Command: DIMTXT
Enter new value for DIMTXT <2.5000>: 3.5

Command: DIMASZ
Enter new value for DIMASZ <2.5000>: 3.0
```

---

## Ejercicio Practico 1

**Objetivo:** Dominar estilos de dimension avanzados.

**Tarea 1: Crear Familia ISO**
- Crear estilo padre "ISO-GENERAL"
- Configurar texto 2.5mm, flechas oblicuas
- Crear variacion para diameter (prefijo Ø)
- Crear variacion para radius (prefijo R)

**Tarea 2: Configurar ANSI**
- Crear estilo "MECANICO-ANSI"
- Unidades: Decimal, precision 0.0000
- Flechas: Closed filled, 0.12"
- Tolerancias: ±0.005 bilateral

**Tarea 3: Overrides**
- Crear dimension con estilo standard
- Aplicar override de color rojo
- Comparar con estilo original
- Guardar como nuevo estilo "REVISION"

**Tarea 4: Dimensiones Anotativas**
- Convertir estilo a anotativo
- Probar en viewports 1:50 y 1:100
- Verificar cambio automatico de tamano

**Tarea 5: Tecnicas Especiales**
- Aplicar DIMBREAK a dimensiones que cruzan
- Crear pliegue con DIMJOGLINE
- Agregar inspeccion con DIMINSPECT

**Entregable:** Archivo con todos los estilos configurados.

---

## Evaluacion

**Pregunta 1:** Que es una familia de estilos de dimension?

**Pregunta 2:** Cual es la diferencia entre override y modificar estilo?

**Pregunta 3:** Que ventaja tienen las dimensiones anotativas sobre DIMSCALE?

**Pregunta 4:** Para que sirve el comando DIMBREAK?

**Pregunta 5:** Que estandar usa flechas oblicuas por defecto?

---

## Resumen

En esta leccion aprendiste:

- Usar el Dimension Style Manager
- Crear familias de estilos de dimension
- Aplicar y gestionar sustituciones
- Configurar estandares internacionales
- Dimensiones anotativas vs DIMSCALE
- Tecnicas especiales: breaks, jogs, inspections

**Proxima Leccion:** Dimensiones Especiales

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos configurando estilos para proyecto real
