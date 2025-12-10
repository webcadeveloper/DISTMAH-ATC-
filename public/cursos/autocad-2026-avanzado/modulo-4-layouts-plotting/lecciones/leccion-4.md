# Leccion 4: Plot y Publicacion

**Duracion:** 60 minutos
**Modulo:** 4 - Layouts y Plotting
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Usar el comando PLOT correctamente
- Configurar Plot Style Tables (CTB/STB)
- Publicar multiples layouts a PDF
- Usar eTransmit para compartir archivos
- Configurar impresion por lotes

---

## Introduccion

El proceso de plot (impresion) es el paso final para convertir el trabajo digital en documentacion fisica o archivos PDF. Dominar las opciones de plot garantiza resultados consistentes y profesionales.

---

## 1. Comando PLOT

### 1.1 Acceso

- **Command Line:** `PLOT` o `Ctrl+P`
- **Ribbon:** Output tab > Plot > Plot
- **Menu:** File > Plot
- **Quick Access Toolbar:** Icono de impresora

### 1.2 Dialogo Plot

| Seccion | Funcion |
|---------|---------|
| Page setup | Configuracion guardada |
| Printer/plotter | Dispositivo de salida |
| Paper size | Tamano de papel |
| Plot area | Area a imprimir |
| Plot offset | Posicion en papel |
| Plot scale | Escala de impresion |
| Plot style table | Tabla de estilos |
| Shaded viewport options | Renderizado |
| Plot options | Opciones adicionales |
| Drawing orientation | Horizontal/Vertical |

### 1.3 Flujo de Impresion

```
1. Seleccionar dispositivo (impresora o DWG To PDF)
2. Verificar tamano de papel
3. Confirmar area de impresion (Layout)
4. Escala 1:1 (para layouts)
5. Seleccionar Plot Style Table
6. Preview
7. OK para imprimir
```

---

## 2. Plot Style Tables

### 2.1 Tipos de Tablas

| Tipo | Extension | Caracteristica |
|------|-----------|----------------|
| CTB | Color-dependent | Estilo segun color |
| STB | Named | Estilo por nombre |

### 2.2 Tablas CTB Comunes

| Tabla | Uso |
|-------|-----|
| monochrome.ctb | Todo negro |
| grayscale.ctb | Escala de grises |
| acad.ctb | Colores estandar |
| Screening.ctb | Con porcentajes |

### 2.3 Crear/Editar Tabla CTB

```
Command: STYLESMANAGER
(abre carpeta de estilos)
Doble clic en tabla existente para editar
O New > CTB para crear nueva
```

### 2.4 Plot Style Table Editor

Para cada color (1-255):

| Propiedad | Opciones |
|-----------|----------|
| Color | Use object color, Black, Red, etc. |
| Dither | On/Off |
| Grayscale | On/Off |
| Pen # | 1-32 (para plotters) |
| Virtual pen | Auto o numero |
| Screening | 0-100% |
| Linetype | Use object linetype o especifico |
| Lineweight | Use object lineweight o especifico |
| Line end style | Butt, Square, Round, Diamond |
| Line join style | Miter, Bevel, Round, Diamond |
| Fill style | Solid, patterns |

### 2.5 Ejemplo: Crear Monochrome Personalizado

```
1. STYLESMANAGER
2. Copiar monochrome.ctb
3. Renombrar: MI-EMPRESA.ctb
4. Editar:
   - Colores 1-9: Black, lineweight por objeto
   - Color 8 (gris): Black, screening 50%
   - Color 9 (gris claro): Black, screening 25%
5. Save
```

---

## 3. Configuracion de Plot

### 3.1 Plot Area

| Opcion | Imprime |
|--------|---------|
| Layout | Area completa del layout |
| Extents | Solo donde hay objetos |
| Display | Vista actual en pantalla |
| Window | Area seleccionada |
| View | Vista guardada |

### 3.2 Plot Scale

Para layouts:
```
Scale: 1:1
☑ Scale lineweights
```

Para Model Space:
```
Scale: 1:100 (o la escala deseada)
```

### 3.3 Plot Offset

```
☑ Center the plot
O especificar X, Y manualmente
```

### 3.4 Plot Options

| Opcion | Funcion |
|--------|---------|
| Plot object lineweights | Imprimir grosores asignados |
| Plot transparency | Imprimir transparencias |
| Plot with plot styles | Usar tabla de estilos |
| Plot paperspace last | Paper Space sobre Model Space |
| Hide paperspace objects | Ocultar lineas ocultas |
| Plot stamp | Agregar informacion de impresion |
| Save changes to layout | Guardar configuracion |

---

## 4. DWG To PDF

### 4.1 Configurar PDF

```
Printer/plotter: DWG To PDF.pc3
Paper size: ISO A1 (o el deseado)
```

### 4.2 Opciones de PDF

Click en Properties junto a DWG To PDF:

| Opcion | Descripcion |
|--------|-------------|
| Resolution | DPI (150-400) |
| Vector quality | Calidad de vectores |
| Raster quality | Calidad de imagenes |
| Merge control | Lines merge / Lines overwrite |
| Layer information | Incluir capas en PDF |
| Hyperlinks | Incluir hiperlinks |
| Bookmarks | Crear marcadores |

### 4.3 PDF con Capas

```
☑ Include layer information
(crea PDF con capas que se pueden activar/desactivar)
```

---

## 5. Publicar Multiples Layouts (PUBLISH)

### 5.1 Comando PUBLISH

- **Command Line:** `PUBLISH`
- **Ribbon:** Output tab > Plot > Batch Plot

### 5.2 Dialogo Publish

| Seccion | Funcion |
|---------|---------|
| Sheet list | Lista de layouts a publicar |
| Add Sheets | Agregar layouts de otros archivos |
| Remove Sheets | Quitar layouts seleccionados |
| Move Up/Down | Reordenar |
| Preview | Vista previa |
| Publish to | Plotter/PDF/DWF |
| Publish options | Opciones adicionales |

### 5.3 Proceso

```
1. PUBLISH
2. Agregar layouts necesarios (Add Sheets)
3. Configurar orden
4. Seleccionar destino (PDF, plotter, DWF)
5. Publish
```

### 5.4 Publish Options

| Opcion | Descripcion |
|--------|-------------|
| General | Numero de copias, rango |
| DWF/PDF | Tipo de archivo, ubicacion |
| DWF data | Informacion a incluir |
| Multi-sheet | Un archivo o multiples |
| Passwords | Proteccion de PDF |

### 5.5 Guardar Sheet List

```
Save Sheet List > Nombre.dsd
(archivo de descripcion de hojas)
```

Para usar despues:
```
Load Sheet List > Seleccionar .dsd
```

---

## 6. eTransmit

### 6.1 Funcion

eTransmit empaqueta el dibujo con todas sus dependencias:
- XREFs
- Imagenes
- Fonts
- Plot styles
- Plotters

### 6.2 Comando ETRANSMIT

- **Command Line:** `ETRANSMIT`
- **Menu:** File > eTransmit

### 6.3 Dialogo Create Transmittal

| Opcion | Descripcion |
|--------|-------------|
| Current drawing | Solo dibujo actual |
| Include | Archivos a incluir |
| Files tree | Vista de dependencias |
| Transmittal Setups | Configuraciones guardadas |

### 6.4 Transmittal Setup

```
Transmittal Setups > Modify

Opciones:
- Transmittal package type: Folder, ZIP, Self-extracting
- File format: AutoCAD 2018, 2013, etc.
- Transmittal file folder: Ubicacion
- Path options: Preserve/Remove paths
- Actions: Bind XREFs, include fonts, etc.
```

### 6.5 Mejor Practica

```
1. ETRANSMIT
2. New Setup > "ENVIO-CLIENTE"
3. Package type: ZIP
4. Format: AutoCAD 2018 (compatibilidad)
5. ☑ Bind external references
6. ☑ Include fonts
7. ☑ Include plot styles
8. Save Setup
9. Create Transmittal
```

---

## 7. Plot Stamp

### 7.1 Configurar Plot Stamp

```
PLOT > Plot options > Plot stamp settings
```

### 7.2 Elementos del Stamp

| Elemento | Informacion |
|----------|-------------|
| Drawing name | Nombre del archivo |
| Layout name | Nombre del layout |
| Date and time | Fecha y hora de impresion |
| Login name | Usuario |
| Device name | Impresora/plotter |
| Paper size | Tamano de papel |
| Plot scale | Escala |

### 7.3 Posicion y Formato

```
Location: Bottom left, Bottom right, Top left, Top right
Orientation: Horizontal, Vertical
Font: Arial, 3mm
```

---

## 8. Batch Plot desde Script

### 8.1 Crear Script

Archivo BATCH.scr:
```
-PLOT
Y
Layout1
DWG To PDF.pc3
ISO A1
Millimeters
Landscape
N
Layout
1:1
0,0
Y
monochrome.ctb
Y
Y
N
N
N
N
Y
```

### 8.2 Ejecutar Script

```
Command: SCRIPT
Seleccionar BATCH.scr
```

---

## 9. Troubleshooting de Plot

### 9.1 Problemas Comunes

| Problema | Solucion |
|----------|----------|
| Lineweights no se imprimen | Verificar Plot object lineweights |
| Colores incorrectos | Verificar Plot Style Table |
| Escala incorrecta | Verificar Plot Scale (1:1 para layouts) |
| Contenido cortado | Verificar Plot Area y offset |
| PDF pesado | Reducir resolucion |
| Viewports vacios | Verificar que no esten OFF |

### 9.2 Vista Previa

**SIEMPRE** usar Preview antes de imprimir:
```
Boton Preview en dialogo Plot
O Ctrl+Shift+P
```

---

## 10. Mejores Practicas

### 10.1 Configuracion

- Crear Page Setups estandar
- Usar misma Plot Style Table en proyecto
- Guardar configuraciones por tipo de salida

### 10.2 Consistencia

- Estandarizar formato de PDF
- Usar nomenclatura de archivos consistente
- Documentar configuraciones

### 10.3 Eficiencia

- Usar PUBLISH para multiples layouts
- Guardar Sheet Lists (.dsd)
- Crear scripts para procesos repetitivos

---

## Ejercicio Practico 4

**Objetivo:** Dominar plot y publicacion.

**Tarea 1: Plot Individual**
- Imprimir layout a PDF
- Usar monochrome.ctb
- Verificar con Preview

**Tarea 2: Plot Style Table**
- Crear CTB personalizada
- Configurar colores especificos
- Aplicar a impresion

**Tarea 3: PUBLISH**
- Crear proyecto con 4 layouts
- Publicar todos a PDF multi-pagina
- Guardar Sheet List

**Tarea 4: eTransmit**
- Crear transmittal ZIP
- Incluir XREFs y fonts
- Verificar contenido

**Tarea 5: Configuracion Completa**
- Crear Page Setup para plotter
- Crear Page Setup para PDF
- Crear Plot Style Table personalizada
- Publicar proyecto completo

**Entregable:** PDF multi-pagina y transmittal ZIP.

---

## Evaluacion

**Pregunta 1:** Que escala debe usarse para imprimir layouts?

**Pregunta 2:** Cual es la diferencia entre CTB y STB?

**Pregunta 3:** Que comando publica multiples layouts a la vez?

**Pregunta 4:** Que incluye eTransmit ademas del dibujo?

**Pregunta 5:** Como se crea un PDF con capas editables?

---

## Resumen

En esta leccion aprendiste:

- Usar el comando PLOT correctamente
- Configurar Plot Style Tables
- Crear PDFs de alta calidad
- Publicar multiples layouts
- Usar eTransmit para compartir
- Configurar Plot Stamp
- Troubleshooting de impresion

**Proxima Leccion:** Modulo 5 - Features IA de AutoCAD 2026

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos publicando proyecto completo
