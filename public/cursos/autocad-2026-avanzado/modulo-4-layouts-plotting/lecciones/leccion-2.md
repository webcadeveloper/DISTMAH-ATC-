# Leccion 2: Creacion y Configuracion de Layouts

**Duracion:** 60 minutos
**Modulo:** 4 - Layouts y Plotting
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear y gestionar layouts
- Configurar Page Setup para diferentes tamanos de papel
- Usar plantillas de layout profesionales
- Importar layouts de otros dibujos
- Organizar layouts eficientemente

---

## Introduccion

Los layouts son la base de la presentacion profesional en AutoCAD. Cada layout representa una hoja de papel con su propia configuracion de impresion, tamano y contenido. Un proyecto puede tener multiples layouts para diferentes planos.

---

## 1. Crear Layouts

### 1.1 Metodos de Creacion

**Metodo 1: Click derecho en pestana**
```
Click derecho en pestana Layout > New Layout
```

**Metodo 2: Comando LAYOUT**
```
Command: LAYOUT
Enter layout option [Copy/Delete/New/Template/Rename/SAve/Set/?] <set>: N
Enter new Layout name <Layout3>: PLANTA-ARQUITECTONICA
```

**Metodo 3: Ribbon**
```
Layout tab > Layout panel > New
```

### 1.2 Opciones del Comando LAYOUT

| Opcion | Funcion |
|--------|---------|
| Copy | Copiar layout existente |
| Delete | Eliminar layout |
| New | Crear nuevo layout |
| Template | Crear desde plantilla |
| Rename | Renombrar layout |
| SAve | Guardar como plantilla |
| Set | Activar layout |
| ? | Listar layouts |

### 1.3 Copiar Layout Existente

```
Command: LAYOUT
Enter layout option: C
Enter layout to copy <Layout1>: PLANTA-ARQUITECTONICA
Enter layout name for copy <PLANTA-ARQUITECTONICA (2)>: PLANTA-ELECTRICA
```

---

## 2. Page Setup (Configuracion de Pagina)

### 2.1 Acceso al Page Setup Manager

- **Command Line:** `PAGESETUP`
- **Click derecho en pestana Layout:** Page Setup Manager
- **Ribbon:** Output tab > Plot > Page Setup Manager

### 2.2 Dialogo Page Setup Manager

| Seccion | Funcion |
|---------|---------|
| Current layout | Layout activo |
| Page setups | Lista de configuraciones guardadas |
| Set Current | Aplicar configuracion seleccionada |
| New | Crear nueva configuracion |
| Modify | Modificar configuracion |
| Import | Importar de otro archivo |

### 2.3 Crear Nueva Configuracion

```
Page Setup Manager > New
Name: A1-HORIZONTAL
Start with: <None>
OK
(se abre dialogo de configuracion)
```

### 2.4 Opciones de Configuracion

**Printer/Plotter:**
- Nombre de impresora/plotter
- DWG To PDF para exportar PDF

**Paper size:**
- ISO A1 (841 x 594mm)
- ANSI D (34 x 22 inches)
- Personalizado

**Plot area:**
| Opcion | Que imprime |
|--------|-------------|
| Layout | Todo el layout |
| Extents | Limites del contenido |
| Display | Vista actual |
| Window | Area seleccionada |

**Plot offset:**
- Centrar en papel
- Especificar X, Y

**Plot scale:**
- 1:1 para layouts (recomendado)
- Fit to paper
- Escala personalizada

**Plot style table:**
- monochrome.ctb (blanco y negro)
- acad.ctb (colores estandar)
- Personalizada

**Shaded viewport options:**
- As displayed
- Wireframe
- Hidden
- Rendered

**Plot options:**
- Plot object lineweights
- Plot transparency
- Plot with plot styles
- Plot paperspace last

---

## 3. Tamanos de Papel Estandar

### 3.1 Serie ISO (Metrico)

| Tamano | Dimensiones (mm) | Uso Comun |
|--------|------------------|-----------|
| A0 | 1189 x 841 | Planos generales grandes |
| A1 | 841 x 594 | Planos de planta |
| A2 | 594 x 420 | Detalles grandes |
| A3 | 420 x 297 | Detalles, diagramas |
| A4 | 297 x 210 | Documentos, notas |

### 3.2 Serie ANSI (Imperial)

| Tamano | Dimensiones (in) | Equivalente |
|--------|------------------|-------------|
| ANSI A | 11 x 8.5 | Carta |
| ANSI B | 17 x 11 | Doble carta |
| ANSI C | 22 x 17 | - |
| ANSI D | 34 x 22 | Similar A1 |
| ANSI E | 44 x 34 | Similar A0 |

### 3.3 Serie Arquitectonica

| Tamano | Dimensiones (in) |
|--------|------------------|
| ARCH A | 12 x 9 |
| ARCH B | 18 x 12 |
| ARCH C | 24 x 18 |
| ARCH D | 36 x 24 |
| ARCH E | 48 x 36 |

---

## 4. Plantillas de Layout

### 4.1 Usar Plantilla Existente

```
Command: LAYOUT
Enter layout option: T
Enter layout template filename: (navegar a .dwt o .dwg)
Select template: A1-HORIZONTAL
```

### 4.2 Crear Plantilla Propia

**Paso 1: Configurar layout**
- Crear layout con configuracion deseada
- Insertar title block
- Configurar Page Setup
- Crear viewport(s)

**Paso 2: Guardar como plantilla**
```
Command: LAYOUT
Enter layout option: SA
Enter layout to save to template <current>: Enter
Enter layout template filename: C:\Templates\MI-PLANTILLA.dwt
```

### 4.3 Guardar como DWT

Para plantilla completa del dibujo:
```
File > Save As
File type: AutoCAD Drawing Template (*.dwt)
Template options: Configurar descripcion
Save
```

---

## 5. Importar Layouts

### 5.1 Desde Page Setup Manager

```
Page Setup Manager > Import
Seleccionar archivo .dwg
Seleccionar configuracion(es)
OK
```

### 5.2 Usando DesignCenter

```
1. Abrir DesignCenter (Ctrl+2)
2. Navegar a archivo con layouts
3. Expandir > Layouts
4. Arrastrar layout al area de pestanas
```

### 5.3 Comando ADCCLOSE

Para cerrar DesignCenter despues de importar:
```
Command: ADCCLOSE
```

---

## 6. Gestionar Layouts

### 6.1 Renombrar Layout

**Metodo 1: Doble clic en pestana**
```
Doble clic > Escribir nuevo nombre > Enter
```

**Metodo 2: Comando**
```
Command: LAYOUT
Enter layout option: R
Enter layout to rename <Layout1>: Layout1
Enter new layout name: PLANTA-BAJA
```

### 6.2 Eliminar Layout

```
Click derecho en pestana > Delete
```

O comando:
```
Command: LAYOUT
Enter layout option: D
Enter layout to delete <Layout1>: LAYOUT-OBSOLETO
```

### 6.3 Reordenar Layouts

```
Click y arrastrar pestana a nueva posicion
```

### 6.4 Mover/Copiar a Nuevo Dibujo

```
Click derecho en pestana > Move or Copy
Seleccionar destino
OK
```

---

## 7. Nomenclatura de Layouts

### 7.1 Sistema Recomendado

```
[SECUENCIA]-[TIPO]-[DESCRIPCION]

Ejemplos:
A01-PLANTA-BAJA
A02-PLANTA-ALTA
A03-ELEVACION-NORTE
A04-ELEVACION-SUR
A05-CORTE-AA
S01-CIMENTACION
S02-ESTRUCTURA-NIVEL1
E01-ILUMINACION
E02-TOMACORRIENTES
```

### 7.2 Prefijos Comunes

| Prefijo | Disciplina |
|---------|------------|
| A | Arquitectura |
| S | Estructural |
| E | Electrico |
| M | Mecanico/HVAC |
| P | Plomeria |
| C | Civil |
| D | Detalles |
| G | General |

---

## 8. Configuracion Avanzada

### 8.1 Layout Margins

Configurar margenes del papel:
```
Page Setup > Plot offset
Margenes tipicos: 10-25mm desde bordes
```

### 8.2 Multiples Page Setups

Un layout puede tener diferentes configuraciones guardadas:
- A1-IMPRESION (para plotter)
- A1-PDF (para PDF)
- A1-REVISION (con marca de agua)

```
Page Setup Manager > New
Crear configuraciones alternativas
Cambiar entre ellas segun necesidad
```

### 8.3 Variables de Layout

| Variable | Funcion |
|----------|---------|
| LAYOUTREGENCTL | Control de regeneracion de layouts |
| MAXACTVP | Maximo de viewports activos |
| TILEMODE | Model Space (1) o Paper Space (0) |

---

## 9. Title Blocks (Cajetines)

### 9.1 Insertar Title Block

```
Command: INSERT
Block name: A1-CAJETIN
Insertion point: 0,0
Scale: 1
```

### 9.2 Atributos Tipicos

| Atributo | Contenido |
|----------|-----------|
| PROYECTO | Nombre del proyecto |
| CLIENTE | Nombre del cliente |
| DIBUJO | Titulo del plano |
| NUMERO | Numero de plano |
| FECHA | Fecha de emision |
| ESCALA | Escala principal |
| DIBUJADO | Nombre del dibujante |
| REVISADO | Nombre del revisor |
| REVISION | Numero de revision |

### 9.3 Editar Atributos

```
Doble clic en title block
O comando: EATTEDIT
Modificar valores
OK
```

---

## 10. Mejores Practicas

### 10.1 Organizacion

- Nombrar layouts descriptivamente
- Mantener orden logico de planos
- Crear layouts vacios para planificacion
- Usar plantillas estandarizadas

### 10.2 Eficiencia

- Copiar layouts similares
- Importar configuraciones probadas
- Guardar Page Setups reutilizables
- Crear biblioteca de title blocks

### 10.3 Consistencia

- Usar mismo Page Setup por tipo
- Mantener escala 1:1 en layouts
- Estandarizar margenes
- Unificar title blocks del proyecto

---

## Ejercicio Practico 2

**Objetivo:** Dominar creacion de layouts.

**Tarea 1: Crear Layouts**
- Crear 4 layouts con diferentes nombres
- Renombrar usando nomenclatura profesional
- Reordenar en secuencia logica

**Tarea 2: Page Setup**
- Configurar A1 horizontal
- Configurar A3 horizontal
- Guardar configuraciones
- Aplicar a diferentes layouts

**Tarea 3: Plantilla**
- Crear layout con title block
- Configurar Page Setup completo
- Guardar como plantilla
- Probar en nuevo dibujo

**Tarea 4: Importar**
- Importar layout de otro archivo
- Importar Page Setup
- Verificar configuracion

**Tarea 5: Title Block**
- Insertar cajetin predefinido
- Editar atributos con datos del proyecto
- Verificar en vista previa de impresion

**Entregable:** Archivo con 6 layouts configurados profesionalmente.

---

## Evaluacion

**Pregunta 1:** Que comando crea un nuevo layout?

**Pregunta 2:** Que escala debe tener Plot Scale en un layout?

**Pregunta 3:** Como se importan Page Setups de otro archivo?

**Pregunta 4:** Cual es la diferencia entre guardar layout como template y guardar archivo como DWT?

**Pregunta 5:** Que nomenclatura se recomienda para layouts?

---

## Resumen

En esta leccion aprendiste:

- Crear layouts con diferentes metodos
- Configurar Page Setup completo
- Tamanos de papel estandar
- Usar y crear plantillas de layout
- Importar layouts y configuraciones
- Gestionar y organizar layouts
- Nomenclatura profesional
- Insertar y editar title blocks

**Proxima Leccion:** Viewports Flotantes

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos configurando layouts para proyecto
