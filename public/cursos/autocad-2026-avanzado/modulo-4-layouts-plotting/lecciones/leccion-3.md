# Leccion 3: Viewports Flotantes

**Duracion:** 60 minutos
**Modulo:** 4 - Layouts y Plotting
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear viewports flotantes con diferentes metodos
- Configurar escala de viewports
- Bloquear viewports para proteger configuracion
- Controlar visibilidad de capas por viewport
- Crear viewports con formas irregulares

---

## Introduccion

Los viewports flotantes son ventanas en Paper Space que muestran vistas del Model Space. Son la herramienta fundamental para presentar el modelo a diferentes escalas y desde diferentes angulos en un plano profesional.

---

## 1. Crear Viewports

### 1.1 Comando MVIEW

- **Command Line:** `MVIEW` o `MV`
- **Ribbon:** Layout tab > Layout Viewports > Rectangular
- **Menu:** View > Viewports > New Viewports

### 1.2 Viewport Rectangular

```
Command: MVIEW
Specify corner of viewport or [ON/OFF/Fit/Shadeplot/Lock/Object/Polygonal/Restore/LAyer/2/3/4] <Fit>:
Specify first corner: (click esquina 1)
Specify opposite corner: (click esquina 2)
```

### 1.3 Opciones de MVIEW

| Opcion | Funcion |
|--------|---------|
| Fit | Viewport que ocupa todo el papel |
| 2 | Dos viewports (horizontal o vertical) |
| 3 | Tres viewports (varias configuraciones) |
| 4 | Cuatro viewports |
| Polygonal | Viewport con forma poligonal |
| Object | Convertir objeto cerrado en viewport |
| Restore | Restaurar configuracion guardada |
| Lock | Bloquear escala del viewport |
| ON/OFF | Activar/desactivar viewport |
| Shadeplot | Modo de sombreado para plot |
| LAyer | Crear viewport en capa especifica |

### 1.4 Multiples Viewports Predefinidos

```
Command: MVIEW
Enter option: 4
Specify first corner: (click)
Specify opposite corner: (click)
(crea 4 viewports en cuadricula)
```

---

## 2. Escala de Viewports

### 2.1 Configurar Escala

**Metodo 1: Barra de estado**
```
1. Doble clic dentro del viewport (MSPACE)
2. Click en escala de viewport en barra de estado
3. Seleccionar escala (1:50, 1:100, etc.)
```

**Metodo 2: Properties**
```
1. Seleccionar borde del viewport (desde PSPACE)
2. Properties (Ctrl+1)
3. Standard scale: 1:100
   O Custom scale: 0.01 (para 1:100)
```

**Metodo 3: Comando ZOOM**
```
1. Doble clic dentro del viewport
Command: ZOOM
Specify corner of window or [Scale/Center/...]: S
Enter a scale factor: 1/100XP
```

**Nota:** XP significa "times paper" (relativo al papel).

### 2.2 Escalas Comunes

| Escala | Factor XP | Custom Scale |
|--------|-----------|--------------|
| 1:1 | 1XP | 1.0 |
| 1:2 | 0.5XP | 0.5 |
| 1:5 | 0.2XP | 0.2 |
| 1:10 | 0.1XP | 0.1 |
| 1:20 | 0.05XP | 0.05 |
| 1:50 | 0.02XP | 0.02 |
| 1:100 | 0.01XP | 0.01 |
| 1:200 | 0.005XP | 0.005 |
| 2:1 | 2XP | 2.0 |

### 2.3 Agregar Escalas Personalizadas

```
Command: SCALELISTEDIT
(dialogo para agregar/eliminar escalas)
Add > Name: 1:75, Paper units: 1, Drawing units: 75
```

---

## 3. Bloquear Viewports

### 3.1 Importancia del Bloqueo

Bloquear viewports previene cambios accidentales de:
- Escala
- Posicion de la vista
- Nivel de zoom

### 3.2 Metodos de Bloqueo

**Metodo 1: Barra de estado**
```
1. Seleccionar viewport o estar dentro (MSPACE)
2. Click en icono de candado en barra de estado
```

**Metodo 2: Properties**
```
1. Seleccionar viewport (desde PSPACE)
2. Properties > Display locked: Yes
```

**Metodo 3: Comando MVIEW**
```
Command: MVIEW
Enter option: Lock
Select objects: (seleccionar viewport)
ON/OFF: ON
```

### 3.3 Trabajar con Viewport Bloqueado

Cuando el viewport esta bloqueado:
- PAN y ZOOM afectan todo el layout (no el viewport)
- Puedes seguir editando objetos en Model Space
- Puedes modificar visibilidad de capas

Para desbloquear temporalmente:
```
Properties > Display locked: No
(hacer cambios)
Properties > Display locked: Yes
```

---

## 4. Viewports con Formas Irregulares

### 4.1 Viewport Poligonal

```
Command: MVIEW
Enter option: Polygonal
Specify start point: (click)
Specify next point or [Arc/Length/Undo]: (click vertices)
Specify next point or [Arc/Close/Length/Undo]: C
```

### 4.2 Viewport desde Objeto

Puedes convertir cualquier objeto cerrado en viewport:
- Circulo
- Elipse
- Polilinea cerrada
- Spline cerrada

```
Command: MVIEW
Enter option: Object
Select object to clip viewport: (seleccionar objeto cerrado)
```

### 4.3 Modificar Forma de Viewport Existente

```
Command: VPCLIP
Select viewport to clip: (seleccionar)
Select clipping object or [Polygonal/Delete] <Polygonal>:
(seleccionar nuevo objeto de recorte o dibujar poligono)
```

---

## 5. Visibilidad de Capas por Viewport

### 5.1 Concepto VP Freeze

Puedes congelar capas solo en viewports especificos sin afectar otros viewports o Model Space.

### 5.2 Desde Layer Properties Manager

```
1. Entrar al viewport (MSPACE)
2. Command: LAYER
3. En columna "VP Freeze" (icono de sol/nieve con viewport)
4. Click para congelar en viewport actual
```

### 5.3 Comando VPLAYER

```
Command: VPLAYER
Enter an option [?/Freeze/Thaw/Reset/Newfrz/Vpvisdflt]: F
Enter layer name(s) to freeze or <select objects>: CAPA-MOBILIARIO
Enter an option [All/Select/Current] <Current>: C
(congela en viewport actual)
```

### 5.4 Opciones de VPLAYER

| Opcion | Funcion |
|--------|---------|
| Freeze | Congelar capa en viewport(s) |
| Thaw | Descongelar capa en viewport(s) |
| Reset | Restaurar visibilidad default |
| Newfrz | Crear capa congelada en todos los viewports |
| Vpvisdflt | Establecer visibilidad default para nuevos viewports |

### 5.5 Ejemplo Practico

**Escenario:** Plano arquitectonico con capa de mobiliario que solo debe verse en ciertos viewports.

```
1. Layout con 3 viewports: planta general, planta amueblada, detalle
2. En viewport "planta general":
   - Entrar al viewport (doble clic)
   - LAYER > VP Freeze en MOBILIARIO
3. En viewport "planta amueblada":
   - Mantener MOBILIARIO visible
4. En viewport "detalle":
   - VP Freeze en capas no relevantes
```

---

## 6. Propiedades de Viewport

### 6.1 Panel Properties

Seleccionar viewport y abrir Properties:

| Categoria | Propiedades |
|-----------|-------------|
| General | Color, Layer, Linetype |
| Misc | Display locked, Standard scale, Custom scale |
| Misc | UCS per viewport, Annotation scale |

### 6.2 Escala de Anotacion

Sincronizar escala de anotacion con escala de viewport:

```
Properties > Annotation scale: (mismo que viewport scale)
```

O automaticamente:
```
Variable: ANNOAUTOSCALE = 4
(sincroniza automaticamente)
```

---

## 7. Activar/Desactivar Viewports

### 7.1 Viewport OFF

Desactivar viewport sin eliminarlo:

```
Command: MVIEW
Enter option: OFF
Select objects: (seleccionar viewport)
```

### 7.2 Viewport ON

Reactivar viewport:

```
Command: MVIEW
Enter option: ON
Select objects: (seleccionar viewport)
```

### 7.3 Uso Practico

- Desactivar viewports complejos mejora rendimiento
- Desactivar para edicion de layout mas rapida
- Reactivar antes de plotear

---

## 8. Viewports en Capas

### 8.1 Capa para Viewports

Crear capa especifica:
```
Nombre: VIEWPORT o VP-BORDE
Color: 8 (gris)
Plot: No (no imprime)
```

### 8.2 Asignar Viewport a Capa

```
1. Seleccionar viewport(s)
2. Asignar a capa VIEWPORT
```

### 8.3 Beneficios

- Bordes de viewport no se imprimen
- Facil seleccion de todos los viewports
- Control centralizado de visibilidad

---

## 9. Maximizar Viewport

### 9.1 Comando VPMAX

Maximizar viewport para edicion detallada:

```
Command: VPMAX
(viewport se expande a pantalla completa)
```

### 9.2 Restaurar Vista

```
Command: VPMIN
(restaura vista de layout)
```

### 9.3 Atajo

Doble clic en borde del viewport para maximizar/minimizar.

---

## 10. Mejores Practicas

### 10.1 Organizacion

- Usar capa no imprimible para viewports
- Nombrar viewports con QUICKSELECT
- Mantener viewports alineados
- Evitar viewports sobrepuestos

### 10.2 Rendimiento

- Desactivar viewports no necesarios
- Limitar numero de viewports por layout
- Bloquear viewports despues de configurar

### 10.3 Consistencia

- Usar escalas estandar
- Aplicar misma configuracion VP Freeze
- Documentar configuracion en notas

---

## Ejercicio Practico 3

**Objetivo:** Dominar viewports flotantes.

**Tarea 1: Viewports Basicos**
- Crear viewport rectangular
- Configurar escala 1:100
- Bloquear viewport

**Tarea 2: Multiples Viewports**
- Crear layout con 4 viewports
- Configurar diferentes escalas (1:200, 1:100, 1:50, 1:20)
- Diferentes vistas del mismo modelo

**Tarea 3: Viewport Irregular**
- Crear viewport poligonal
- Crear viewport desde circulo
- Usar VPCLIP para modificar forma

**Tarea 4: VP Freeze**
- Crear 3 viewports del mismo modelo
- Congelar diferentes capas en cada uno
- Verificar independencia de visibilidad

**Tarea 5: Configuracion Completa**
- Crear layout profesional
- Viewport principal a 1:100
- 2 viewports de detalle a 1:20
- Bloquear todos
- Asignar a capa no imprimible

**Entregable:** Layout con sistema de viewports profesional.

---

## Evaluacion

**Pregunta 1:** Que comando crea viewports flotantes?

**Pregunta 2:** Como se expresa escala 1:50 en formato XP?

**Pregunta 3:** Que sucede cuando un viewport esta bloqueado?

**Pregunta 4:** Como se congela una capa solo en un viewport especifico?

**Pregunta 5:** Que tipo de capa se recomienda para los bordes de viewport?

---

## Resumen

En esta leccion aprendiste:

- Crear viewports con MVIEW
- Configurar escala de viewports
- Bloquear viewports
- Crear viewports irregulares
- Controlar visibilidad de capas por viewport
- Activar/desactivar viewports
- Organizar viewports en capas
- Maximizar viewport para edicion

**Proxima Leccion:** Plot y Publicacion

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos configurando viewports complejos
