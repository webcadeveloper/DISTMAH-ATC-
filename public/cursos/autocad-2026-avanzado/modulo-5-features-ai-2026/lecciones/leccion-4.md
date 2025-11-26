# Leccion 4: Mejoras de Rendimiento y Productividad

**Duracion:** 60 minutos
**Modulo:** 5 - Features IA de AutoCAD 2026
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Aprovechar las mejoras de rendimiento de AutoCAD 2026
- Usar nuevas herramientas de productividad
- Configurar opciones para maximo rendimiento
- Aplicar atajos y workflows eficientes
- Personalizar la interfaz para productividad

---

## Introduccion

AutoCAD 2026 incluye numerosas mejoras de rendimiento y nuevas herramientas de productividad. Esta leccion cubre las optimizaciones del software, nuevas funcionalidades y tecnicas para maximizar tu eficiencia al trabajar.

---

## 1. Mejoras de Rendimiento en 2026

### 1.1 Motor Grafico Mejorado

AutoCAD 2026 incluye un motor grafico optimizado:

| Mejora | Beneficio |
|--------|-----------|
| GPU Acceleration | Renderizado mas rapido |
| Multi-threading | Uso eficiente de CPU |
| Memory Management | Mejor manejo de RAM |
| Display Performance | Pan/Zoom mas suave |

### 1.2 Apertura de Archivos

Mejoras en carga de archivos:
- Carga parcial mejorada
- Indexacion de XREFs optimizada
- Lectura de disco mas eficiente
- Reduccion de tiempo de apertura 20-40%

### 1.3 Guardado Incrementa

```
Variable: SAVETIME
Recomendado: 10-15 minutos

Guardado automatico ahora:
- Es mas rapido
- Menos intrusivo
- Mejor manejo de archivos grandes
```

---

## 2. Quick Measure

### 2.1 Funcion

Quick Measure muestra dimensiones automaticamente al pasar el cursor:

- Distancias entre objetos
- Angulos
- Areas
- Sin necesidad de comandos

### 2.2 Activar Quick Measure

```
Barra de estado > Quick Measure (icono regla)
O variable: MEASUREGEOM
```

### 2.3 Uso

```
1. Activar Quick Measure
2. Pasar cursor cerca de objetos
3. Dimensiones aparecen automaticamente
4. Hover sobre esquinas para angulos
5. Hover dentro de areas cerradas para area
```

### 2.4 Configuracion

```
Right-click en icono Quick Measure:
- Show distances: Yes
- Show angles: Yes
- Show areas: Yes
- Units: Decimal/Architectural
```

---

## 3. Count (Conteo)

### 3.1 Comando COUNT

Cuenta automaticamente bloques u objetos similares:

```
Command: COUNT
Select objects or [Block/Settings]: B
Select block reference: (click en bloque)
Counting "SILLA-OFICINA"...
Found: 47 instances
```

### 3.2 Opciones

| Opcion | Funcion |
|--------|---------|
| Block | Contar bloque especifico |
| Similar | Contar objetos similares |
| Settings | Configurar opciones |

### 3.3 Count Palette

Panel persistente que muestra conteos:

```
View > Palettes > Count
(panel con lista de bloques y cantidades)
```

### 3.4 Crear Tabla de Conteo

```
Count palette > Create Table
(inserta tabla con conteo en dibujo)
```

---

## 4. My Insights

### 4.1 Que es My Insights

Panel que muestra estadisticas personales de uso:
- Comandos mas usados
- Tiempo de uso
- Patrones de trabajo
- Sugerencias de mejora

### 4.2 Acceso

```
Ribbon: Manage Tab > My Insights
O comando: MYINSIGHTS
```

### 4.3 Informacion Disponible

| Seccion | Datos |
|---------|-------|
| Commands | Top 10 comandos usados |
| Time | Horas por dia/semana |
| Efficiency | Sugerencias de atajos |
| Learning | Tutoriales recomendados |

### 4.4 Sugerencias de Eficiencia

```
My Insights puede sugerir:
"You frequently use COPY. Consider using:
- Array for multiple copies
- Ctrl+C/V for quick copy/paste
- COPYBASE for precise copying"
```

---

## 5. Floating Command Bar

### 5.1 Funcion

La barra de comandos flotante aparece cerca del cursor:

- Menos movimiento de ojos
- Entrada mas rapida
- Configurable

### 5.2 Activar

```
Variable: INPUTSEARCHOPTIONS
Bit 3 (8): Enable floating command bar

O: Click derecho en Command Line > Floating
```

### 5.3 Configuracion

```
Right-click en barra flotante:
- Size: Small/Medium/Large
- Transparency: 0-100%
- Auto-hide: Yes/No
```

---

## 6. Markup Assist

### 6.1 Funcion

Markup Assist usa AI para reconocer anotaciones manuscritas:
- Convierte markups a geometria
- Reconoce texto escrito
- Interpreta simbolos comunes

### 6.2 Uso

```
1. Importar PDF con markups manuscritos
2. Command: MARKUPASSIST
3. Select markup area: (seleccionar)
4. AutoCAD interpreta y sugiere conversion
5. Accept/Modify/Reject
```

### 6.3 Tipos Reconocidos

| Markup | Conversion |
|--------|------------|
| Lineas | Polylines |
| Circulos | Circles |
| Rectangulos | Rectangles |
| Flechas | Leaders |
| Texto | Text objects |
| Nubes de revision | Revision clouds |

---

## 7. Enhanced Layer Properties

### 7.1 Mejoras en Layer Manager

AutoCAD 2026 incluye mejoras:
- Busqueda mejorada
- Filtros avanzados
- Previsualizacion de capa
- Drag and drop mejorado

### 7.2 Layer Walk

Comando mejorado para revisar capas:

```
Command: LAYWALK
(panel muestra lista de capas)
Click en capa: Solo esa capa visible
Ctrl+click: Agregar capa a vista
```

### 7.3 Layer Isolate Improvements

```
Command: LAYISO
Select objects on layer(s) to isolate: (click)
(otras capas se atenuan u ocultan)

Settings:
- Lock and fade: Capas bloqueadas y atenuadas
- Off: Capas apagadas completamente
```

---

## 8. Push to Autodesk Docs

### 8.1 Funcion

Publicar directamente a Autodesk Docs (BIM 360):

```
Command: PUBLISHTOAUTODESKDOCS
1. Seleccionar layouts
2. Elegir proyecto destino
3. Configurar opciones
4. Publicar
```

### 8.2 Ventajas

- Publicacion directa sin exportar primero
- Mantiene organizacion de proyecto
- Control de acceso integrado
- Notificaciones automaticas

---

## 9. Optimizacion de Sistema

### 9.1 Variables de Rendimiento

| Variable | Recomendacion | Efecto |
|----------|---------------|--------|
| WHIPTHREAD | 3 | Multi-threading para display |
| HPQUICKPREVIEW | 0 | Deshabilita preview de hatch |
| INDEXCTL | 3 | Indexacion de layer y spatial |
| VTENABLE | 3 | Transiciones suaves |
| SELECTIONPREVIEW | 3 | Preview de seleccion |

### 9.2 Graphics Performance

```
OPTIONS > System > Graphics Performance
- Hardware acceleration: ON
- Smooth line display: ON
- High quality geometry: Medium
```

### 9.3 Archivos Grandes

Para archivos >50MB:
```
- LAYEREVAL: 0 (no evaluar capas nuevas)
- XREFNOTIFY: 0 (no notificar XREFs)
- SAVETIME: 15 (guardar cada 15 min)
- Usar Partial Open si posible
```

---

## 10. Personalizacion de Productividad

### 10.1 Custom Tool Palettes

Crear palettes con comandos frecuentes:

```
1. TOOLPALETTES (Ctrl+3)
2. Right-click > New Palette
3. Arrastrar comandos/bloques
4. Organizar por workflow
```

### 10.2 Quick Access Toolbar

Agregar comandos frecuentes:

```
Right-click en QAT > Customize
Agregar comandos mas usados
```

### 10.3 Workspace Personalizado

```
1. Configurar interface deseada
2. Workspace Switching > Save Current As
3. Nombrar workspace
4. Usar para tipos de trabajo especificos
```

---

## 11. Atajos de Productividad

### 11.1 Nuevos Atajos 2026

| Atajo | Funcion |
|-------|---------|
| Ctrl+Shift+C | Copy with base point |
| Ctrl+Shift+V | Paste as block |
| Ctrl+0 | Clean Screen toggle |
| Ctrl+8 | Quick Calculator |
| Ctrl+9 | Command line toggle |

### 11.2 Mouse Shortcuts

```
Shift+Middle click: Snap override menu
Middle click drag: Pan
Scroll: Zoom
Double-click: Edit (varies by object)
```

### 11.3 Crear Alias Personalizados

```
ALIASEDIT
Crear nuevos alias:
- BR: BREAK (por ejemplo)
- SS: SSEARCH
- QB: QBLOCK
```

---

## Ejercicio Practico 4

**Objetivo:** Maximizar productividad en AutoCAD 2026.

**Tarea 1: Quick Measure**
- Activar Quick Measure
- Medir distancias sin comandos
- Verificar angulos y areas

**Tarea 2: Count**
- Crear dibujo con bloques repetidos
- Usar COUNT para contar
- Crear tabla de conteo

**Tarea 3: My Insights**
- Revisar estadisticas de uso
- Identificar comandos frecuentes
- Aplicar sugerencia de eficiencia

**Tarea 4: Optimizacion**
- Verificar Graphics Performance
- Ajustar variables de rendimiento
- Comparar velocidad antes/despues

**Tarea 5: Personalizacion**
- Crear Tool Palette personal
- Personalizar Quick Access Toolbar
- Guardar workspace personalizado

**Entregable:** Configuracion optimizada documentada.

---

## Evaluacion

**Pregunta 1:** Que muestra Quick Measure?

**Pregunta 2:** Que comando cuenta bloques automaticamente?

**Pregunta 3:** Que informacion proporciona My Insights?

**Pregunta 4:** Que hace Markup Assist?

**Pregunta 5:** Cual variable activa multi-threading para display?

---

## Resumen

En esta leccion aprendiste:

- Mejoras de rendimiento de AutoCAD 2026
- Usar Quick Measure y Count
- Analizar productividad con My Insights
- Usar Markup Assist para conversiones
- Optimizar configuracion del sistema
- Personalizar interface para productividad

**Fin del Modulo 5 - Features IA de AutoCAD 2026**

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos optimizando configuracion personal

---

## Conclusion del Curso

Felicitaciones por completar el curso **AutoCAD 2026 Avanzado**.

Has aprendido:
- Edicion avanzada y comandos complejos
- Bloques dinamicos y atributos
- Dimensionamiento profesional y GD&T
- Layouts, viewports y publicacion
- Nuevas funcionalidades de IA de AutoCAD 2026

**Siguiente paso:** Practicar lo aprendido en proyectos reales y explorar certificacion Autodesk.
