# Leccion 4: Navegacion y Visualizacion

**Duracion:** 45 minutos
**Modulo:** 1 - Introduccion a AutoCAD 2026
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Dominar los comandos de Zoom para controlar la visualizacion
- Utilizar Pan para desplazarte por el dibujo
- Trabajar con vistas guardadas (Named Views)
- Usar el ViewCube y Navigation Bar eficientemente
- Configurar multiples Viewports en Model Space

---

## Introduccion

La navegacion eficiente es esencial para trabajar productivamente en AutoCAD. Un dibujo puede contener miles de objetos en un area extensa, y necesitas poder moverte rapidamente entre diferentes zonas y niveles de detalle.

---

## 1. Comandos de Zoom

### 1.1 Acceso al Comando ZOOM

- **Command Line:** `ZOOM` o `Z`
- **Mouse:** Rueda del raton (scroll)
- **Navigation Bar:** Iconos de Zoom
- **View Tab:** Ribbon

### 1.2 Opciones de ZOOM

```
Command: ZOOM
Specify corner of window, enter a scale factor (nX or nXP), or
[All/Center/Dynamic/Extents/Previous/Scale/Window/Object] <real time>:
```

### 1.3 ZOOM Window (Ventana)

El mas usado. Dibuja un rectangulo alrededor del area deseada.

```
Command: ZOOM
Specify corner of window: (click esquina 1)
Specify opposite corner: (click esquina 2)
```

**Atajo:** Z + Enter, luego W + Enter

### 1.4 ZOOM Extents

Muestra todos los objetos del dibujo ajustados a la pantalla.

```
Command: ZOOM
[...] : E
```

**Atajo:** Z + Enter, E + Enter
**Doble-click:** Rueda del raton

### 1.5 ZOOM All

Muestra los limites del dibujo O todos los objetos (lo que sea mayor).

```
Command: ZOOM
[...] : A
```

### 1.6 ZOOM Previous

Regresa a la vista anterior. Muy util para navegar.

```
Command: ZOOM
[...] : P
```

**Atajo:** Z + Enter, P + Enter

### 1.7 ZOOM Scale

Escala la vista por un factor especifico.

| Formato | Efecto |
|---------|--------|
| 2 | Zoom 2x respecto a limites |
| 2X | Zoom 2x respecto a vista actual |
| 2XP | Zoom 2x en Paper Space |
| 0.5 | Zoom 50% respecto a limites |
| 0.5X | Zoom 50% respecto a vista actual |

```
Command: ZOOM
[...] : 2X (duplica el zoom actual)
```

### 1.8 ZOOM Center

Centra la vista en un punto especifico con magnificacion opcional.

```
Command: ZOOM
[...] : C
Specify center point: 500,500
Enter magnification or height <100>: 200 (altura de vista)
```

### 1.9 ZOOM Object

Hace zoom a los objetos seleccionados.

```
Command: ZOOM
[...] : O
Select objects: (seleccionar objetos)
```

### 1.10 ZOOM Real Time

Zoom interactivo con el mouse. Click y arrastra arriba/abajo.

```
Command: ZOOM
[...] : (Enter para Real Time)
Press ESC or ENTER to exit, or right-click to display shortcut menu.
```

### 1.11 Tabla Resumen de Zoom

| Opcion | Atajo | Funcion |
|--------|-------|---------|
| Window | Z, W | Zoom a rectangulo |
| Extents | Z, E | Ver todos los objetos |
| All | Z, A | Ver limites o todo |
| Previous | Z, P | Vista anterior |
| Scale | Z, 2X | Factor de escala |
| Center | Z, C | Centrar en punto |
| Object | Z, O | Zoom a seleccion |

![Opciones de Zoom AutoCAD](../imagenes/leccion-4-zoom-options.png)

---

## 2. Comando PAN

### 2.1 Que es Pan

Pan desplaza la vista sin cambiar el nivel de zoom. Es como mover un papel sobre la mesa.

### 2.2 Acceso al Comando PAN

- **Command Line:** `PAN` o `P`
- **Mouse:** Mantener presionada la rueda y arrastrar
- **Navigation Bar:** Icono de mano
- **Atajo alternativo:** Ctrl + rueda del mouse

### 2.3 PAN Real Time

```
Command: PAN
Press ESC or ENTER to exit, or right-click to display shortcut menu.
(arrastra el mouse para mover la vista)
```

### 2.4 Pan con Rueda del Raton

**Metodo mas eficiente:**
1. Presiona y mantiene la rueda del raton
2. Arrastra en cualquier direccion
3. Suelta para terminar

### 2.5 Pan Transparente

Puedes usar Pan mientras otro comando esta activo:

```
Command: LINE
Specify first point: (click)
Specify next point: 'PAN (pan transparente con apostrofe)
(arrastra para mover vista)
Resuming LINE command.
Specify next point: (continua el comando)
```

---

## 3. Navigation Bar

### 3.1 Ubicacion

La Navigation Bar aparece a la derecha del area de dibujo. Contiene herramientas de navegacion agrupadas.

### 3.2 Herramientas Disponibles

| Herramienta | Funcion |
|-------------|---------|
| Pan | Desplazar vista |
| Zoom Extents | Ver todo |
| Zoom Window | Zoom a rectangulo |
| Zoom Previous | Vista anterior |
| Orbit | Rotacion 3D |
| ViewCube | Navegacion 3D |
| SteeringWheels | Navegacion avanzada |
| ShowMotion | Animaciones |

### 3.3 Mostrar/Ocultar Navigation Bar

- **Command Line:** `NAVBAR` (ON/OFF)
- **View Tab > Windows panel > Navigation Bar**

---

## 4. ViewCube

### 4.1 Que es el ViewCube

El ViewCube es un control 3D interactivo en la esquina superior derecha que permite:

- Cambiar a vistas predefinidas (Top, Front, Right, etc.)
- Rotar la vista libremente
- Regresar a la vista Home
- Ver la orientacion del modelo

### 4.2 Vistas Predefinidas

| Vista | Descripcion |
|-------|-------------|
| Top | Vista superior (planta) |
| Bottom | Vista inferior |
| Front | Vista frontal (elevacion) |
| Back | Vista posterior |
| Left | Vista lateral izquierda |
| Right | Vista lateral derecha |
| Corners | Vistas isometricas |

### 4.3 Uso del ViewCube

- **Click en cara:** Cambiar a esa vista
- **Click en esquina:** Vista isometrica
- **Click en borde:** Vista a 45°
- **Arrastrar:** Rotacion libre
- **Click en casa:** Regresar a Home view

### 4.4 Configurar ViewCube

Click derecho en ViewCube > ViewCube Settings:

- Tamano y posicion
- Comportamiento al arrastrar
- Compass display
- Home view

### 4.5 En Dibujos 2D

Para trabajo 2D, el ViewCube es menos util. Puedes:

- Ocultarlo: `NAVVCUBE` OFF
- Usarlo solo para confirmar vista Top
- Dejarlo para referencia de orientacion

---

## 5. Vistas Guardadas (Named Views)

### 5.1 Concepto

Las Named Views permiten guardar configuraciones de vista (posicion, zoom, angulo) para acceso rapido.

### 5.2 Crear una Vista Guardada

```
Command: VIEW
```

O desde Ribbon: View Tab > Named Views

**Pasos:**
1. Posiciona la vista como deseas guardarla
2. View > Named Views > New
3. Asigna un nombre descriptivo
4. OK

### 5.3 Restaurar una Vista

```
Command: VIEW
[...] : R (Restore)
Enter view name to restore: NombreVista
```

O doble-click en la vista del View Manager.

### 5.4 Usos Practicos

| Vista Guardada | Contenido |
|----------------|-----------|
| GENERAL | Vista completa del proyecto |
| DETALLE-A | Zoom a detalle especifico |
| PLANTA-BAJA | Nivel de planta baja |
| CORTE-AA | Area del corte A-A |
| FACHADA | Vista de elevacion |

### 5.5 View Manager

El View Manager permite:

- Crear, renombrar, eliminar vistas
- Establecer vista actual como vista por defecto
- Organizar vistas por categorias
- Ver propiedades de cada vista

---

## 6. Viewports en Model Space

### 6.1 Que son los Viewports

Los Viewports dividen el area de dibujo en multiples ventanas, cada una mostrando una vista diferente del mismo modelo.

### 6.2 Crear Viewports

```
Command: VPORTS
```

O desde Ribbon: View Tab > Model Viewports

### 6.3 Configuraciones Predefinidas

| Configuracion | Descripcion |
|---------------|-------------|
| Single | Una sola vista (default) |
| Two: Vertical | Dos vistas lado a lado |
| Two: Horizontal | Dos vistas arriba/abajo |
| Three: Right | Una grande, dos pequenas |
| Three: Left | Dos pequenas, una grande |
| Four: Equal | Cuatro vistas iguales |

### 6.4 Trabajar con Multiples Viewports

- **Click en viewport:** Activa ese viewport
- **Zoom/Pan:** Afecta solo el viewport activo
- **Dibujar:** Se refleja en todos los viewports
- **Bordes verdes:** Indican viewport activo

### 6.5 Volver a Vista Unica

```
Command: VPORTS
[...] : SI (Single)
```

### 6.6 Usos Practicos

- Ver planta y elevacion simultaneamente
- Trabajar en detalle mientras ves el conjunto
- Comparar diferentes areas del proyecto
- Vista general + zoom de trabajo

![Viewports en Model Space](../imagenes/leccion-4-viewports.png)

---

## 7. Atajos de Navegacion Esenciales

### 7.1 Con el Mouse

| Accion | Resultado |
|--------|-----------|
| Scroll arriba | Zoom in |
| Scroll abajo | Zoom out |
| Doble-click rueda | Zoom Extents |
| Mantener rueda + arrastrar | Pan |
| Shift + rueda + arrastrar | Orbit (3D) |

### 7.2 Con Teclado

| Atajo | Comando |
|-------|---------|
| Z, E | Zoom Extents |
| Z, W | Zoom Window |
| Z, P | Zoom Previous |
| P | Pan |
| V | View Manager |

### 7.3 Comandos Transparentes

Usa apostrofe (') para ejecutar durante otro comando:

- `'ZOOM` - Zoom transparente
- `'PAN` - Pan transparente
- `'VIEW` - Cambiar vista

---

## Ejercicio Practico 4

**Objetivo:** Dominar la navegacion en un dibujo complejo.

**Preparacion:**
1. Abre el archivo del ejercicio anterior o crea varias figuras distribuidas en el area de dibujo
2. Asegurate de tener objetos en diferentes zonas

**Tareas:**

1. **Zoom Extents:**
   - Presiona Z, E para ver todo
   - Observa como se ajusta la vista

2. **Zoom Window:**
   - Selecciona una figura con Zoom Window
   - Repite con otra figura

3. **Zoom Previous:**
   - Usa Z, P para regresar vistas
   - Navega hacia adelante y atras

4. **Pan con rueda:**
   - Practica Pan manteniendo la rueda
   - Combina con scroll para zoom

5. **Crear Vistas Guardadas:**
   - Guarda 3 vistas con nombres descriptivos
   - Practica restaurarlas

6. **Viewports:**
   - Crea configuracion de 2 viewports
   - En uno muestra vista general
   - En otro zoom a detalle
   - Regresa a vista unica

**Entregable:** Lista de 3 vistas guardadas con sus propositos.

---

## Evaluacion

**Pregunta 1:** Cual es el atajo para Zoom Extents?

**Pregunta 2:** Como se hace Pan con el mouse?

**Pregunta 3:** Para que sirven las Named Views?

**Pregunta 4:** Que son los Viewports en Model Space?

**Pregunta 5:** Que comando se usa de forma transparente con apostrofe?

---

## Resumen

En esta leccion aprendiste:

- Todas las opciones del comando ZOOM
- Como usar PAN para desplazarte
- El uso del ViewCube y Navigation Bar
- Como guardar y restaurar vistas
- Trabajar con multiples Viewports

**Proxima Leccion:** Gestion de Archivos (Abrir, Guardar, Templates)

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos navegando en un dibujo complejo
