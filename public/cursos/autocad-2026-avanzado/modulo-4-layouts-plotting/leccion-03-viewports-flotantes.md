# Lección 3: Viewports Flotantes

## Introducción

Los **viewports flotantes** (floating viewports) son ventanas en Paper Space que muestran vistas específicas de tu modelo desde Model Space. Son fundamentales para crear presentaciones profesionales con múltiples vistas a diferentes escalas en una misma hoja.

Esta lección cubre la creación, configuración y gestión avanzada de viewports, incluyendo control de escalas, capas por viewport y técnicas de alineación.

## Objetivos de la Lección

- Crear viewports flotantes usando comando MVIEW y métodos alternativos
- Configurar escalas estándar y personalizadas
- Bloquear viewports para prevenir cambios accidentales
- Controlar visibilidad de capas por viewport (VPLAYER y VP Freeze)
- Alinear múltiples viewports precisamente
- Aplicar propiedades específicas de viewport
- Maximizar viewports para edición eficiente

---

## 1. Comando MVIEW - Crear Viewports

### 1.1 Sintaxis Básica del Comando

```
Command: MVIEW
Specify corner of viewport or [ON/OFF/Fit/Shadeplot/Lock/Object/Polygonal/Restore/LAyer/2/3/4] <Fit>:
```

**MVIEW** (Make VIEW) es el comando principal para crear viewports flotantes en Paper Space.

![Comando MVIEW opciones](./imagenes/mview-comando-opciones.png)

### 1.2 Crear Viewport Rectangular

**Método por puntos de esquina (más común):**

```
Command: MVIEW
Specify corner of viewport: [clic en punto 1]
Specify opposite corner: [clic en punto 2]
```

**Pasos:**

1. Cambia a Paper Space (pestaña Layout)
2. Ejecuta MVIEW
3. Define primera esquina
4. Define esquina opuesta
5. Viewport se crea automáticamente

![Viewport rectangular](./imagenes/viewport-rectangular.png)

**Tip:** Usa referencias a objetos (OSNAP) para alinear con marcos o cajetines.

### 1.3 Crear Viewport Poligonal

Para viewports con formas irregulares:

```
Command: MVIEW
Specify corner of viewport or [.../Polygonal/...]: P (Polygonal)
Specify start point: [punto 1]
Specify next point or [Arc/Length/Undo]: [punto 2]
Specify next point or [Arc/Length/Undo]: [punto 3]
...
Specify next point or [Arc/Close/Undo]: C (Close)
```

**Uso:** Viewports circulares, con esquinas redondeadas, formas orgánicas.

![Viewport poligonal](./imagenes/viewport-poligonal.png)

### 1.4 Crear Viewport desde Objeto

Convierte cualquier objeto cerrado (círculo, polilínea cerrada, región) en viewport:

```
Command: MVIEW
Specify corner of viewport or [.../Object/...]: O (Object)
Select object to clip viewport: [seleccionar objeto cerrado]
```

**Ventaja:** Formas complejas previamente dibujadas.

![Viewport desde objeto](./imagenes/viewport-desde-objeto.png)

### 1.5 Opciones de Creación Múltiple

#### Opción 2 - Dos viewports

```
Command: MVIEW
Specify corner of viewport or [.../2/...]: 2
Specify first corner or [Fit] <Fit>: [punto 1]
Specify opposite corner: [punto 2]
Enter viewport arrangement [Horizontal/Vertical]: H (o V)
```

Crea dos viewports divididos horizontal o verticalmente.

![Dos viewports horizontales](./imagenes/viewport-2-horizontal.png)

#### Opción 3 - Tres viewports

```
Command: MVIEW
Specify corner of viewport or [.../3/...]: 3
Specify first corner or [Fit] <Fit>: [punto 1]
Specify opposite corner: [punto 2]
Enter viewport arrangement [Horizontal/Vertical/Above/Below/Left/Right]: L
```

**Arreglos disponibles:**
- Horizontal
- Vertical
- Above (grande arriba, dos abajo)
- Below (dos arriba, grande abajo)
- Left (grande izquierda, dos derecha)
- Right (dos izquierda, grande derecha)

![Tres viewports - Left](./imagenes/viewport-3-left.png)

#### Opción 4 - Cuatro viewports

```
Command: MVIEW
Specify corner of viewport or [.../4/...]: 4
Specify first corner or [Fit] <Fit>: [punto 1]
Specify opposite corner: [punto 2]
```

Crea cuatro viewports iguales en distribución 2×2.

![Cuatro viewports](./imagenes/viewport-4-grid.png)

---

## 2. Escalas de Viewport

### 2.1 Concepto de Escala de Viewport

La **escala de viewport** determina la relación entre el tamaño del modelo en Model Space y su representación visual en el viewport.

**Fórmula:**
```
Escala = Unidades en Paper Space : Unidades en Model Space

Ejemplo: 1:100
1 mm en papel representa 100 mm en el modelo
```

### 2.2 Establecer Escala de Viewport

**Método 1: Barra de Estado**

1. Activa viewport (doble clic dentro)
2. Busca control de escala en barra de estado (esquina inferior derecha)
3. Clic en escala actual
4. Selecciona escala de la lista

![Escala en barra de estado](./imagenes/viewport-escala-barra-estado.png)

**Método 2: Properties Palette**

1. Selecciona borde del viewport (desde Paper Space)
2. Abre Properties (Ctrl+1)
3. Busca "Standard scale"
4. Selecciona escala de la lista

![Escala en Properties](./imagenes/viewport-escala-properties.png)

**Método 3: Comando ZOOM**

```
Command: [doble clic en viewport para activarlo]
Command: ZOOM
Specify corner of window [.../Scale]: [escala]XP

Ejemplo para escala 1:100:
Command: ZOOM
Specify corner of window [.../Scale]: 1/100XP
```

**Nota:** El sufijo "XP" significa "times Paper Space".

### 2.3 Escalas Estándar

#### Escalas Arquitectónicas (Sistema Métrico)

| Escala | Ratio | Uso Típico |
|--------|-------|------------|
| 1:1 | 1:1 | Detalles constructivos reales |
| 1:5 | 1:5 | Detalles grandes |
| 1:10 | 1:10 | Detalles de construcción |
| 1:20 | 1:20 | Detalles arquitectónicos |
| 1:25 | 1:25 | Planos de detalle |
| 1:50 | 1:50 | Plantas arquitectónicas |
| 1:75 | 1:75 | Plantas medias |
| 1:100 | 1:100 | Plantas generales |
| 1:200 | 1:200 | Plantas de conjunto |
| 1:500 | 1:500 | Planos de ubicación |

#### Escalas de Ingeniería Civil

| Escala | Ratio | Uso Típico |
|--------|-------|------------|
| 1:100 | 1:100 | Planos de obra |
| 1:200 | 1:200 | Planos generales |
| 1:500 | 1:500 | Trazos urbanos |
| 1:1000 | 1:1000 | Planos topográficos |
| 1:2000 | 1:2000 | Planos regionales |
| 1:5000 | 1:5000 | Planos de ciudad |

#### Escalas de Ingeniería Mecánica

| Escala | Ratio | Uso Típico |
|--------|-------|------------|
| 2:1 | 2:1 | Piezas muy pequeñas ampliadas |
| 1:1 | 1:1 | Piezas a tamaño real |
| 1:2 | 1:2 | Piezas medianas |
| 1:5 | 1:5 | Ensambles pequeños |
| 1:10 | 1:10 | Ensambles medianos |
| 1:20 | 1:20 | Maquinaria general |

### 2.4 Escalas Personalizadas

**Agregar escalas no estándar:**

```
Command: SCALELISTEDIT
```

**Pasos:**

1. Ejecuta SCALELISTEDIT
2. Clic en "Add..."
3. Define:
   - Name appearing in scale list: "1:75"
   - Paper units: 1
   - Drawing units: 75
4. OK
5. La escala aparece en listas de viewports

![Scale List Edit](./imagenes/scalelistedit-dialog.png)

---

## 3. Bloqueo de Viewports

### 3.1 ¿Por Qué Bloquear Viewports?

**Problema:** Al trabajar dentro de un viewport (MSPACE), es fácil accidentalmente hacer zoom/pan y cambiar la escala configurada.

**Solución:** **Bloquear el viewport** previene cambios de escala y encuadre.

### 3.2 Bloquear Viewport

**Método 1: Properties Palette**

1. Selecciona borde del viewport (en Paper Space)
2. Abre Properties (Ctrl+1)
3. Busca "Display locked"
4. Cambia a "Yes"

![Display locked en Properties](./imagenes/viewport-display-locked.png)

**Método 2: Comando MVIEW**

```
Command: MVIEW
Specify corner of viewport or [.../Lock/...]: L (Lock)
Select objects: [seleccionar viewports]
Enter an option [ON/OFF] <ON>: ON
```

**Método 3: Barra de Estado**

1. Activa viewport (doble clic dentro)
2. Clic en icono de candado en barra de estado
3. El candado cambia de abierto a cerrado

![Bloqueo en barra de estado](./imagenes/viewport-lock-statusbar.png)

### 3.3 Trabajar con Viewports Bloqueados

**Cuando el viewport está bloqueado:**

- **SÍ puedes:** Editar objetos dentro del viewport (mover, copiar, dibujar)
- **NO puedes:** Zoom, Pan, cambiar escala
- **Alternativa:** Usa VPMAX para editar cómodamente (ver sección 7)

**Desbloquear temporalmente:**

1. Clic en candado de barra de estado
2. Realiza zoom/pan necesario
3. Re-bloquea inmediatamente

---

## 4. Control de Capas por Viewport

### 4.1 Concepto de VP Freeze

**VP Freeze** (Viewport Freeze) permite congelar capas específicas en viewports individuales sin afectar otros viewports ni Model Space.

**Casos de uso:**

- Ocultar dimensiones en viewport de planta general
- Mostrar mobiliario solo en viewport de detalle
- Ocultar anotaciones en viewports de contexto

![VP Freeze concepto](./imagenes/vp-freeze-concepto.png)

### 4.2 Congelar Capas en Viewport Actual

**Método 1: Layer Properties Manager**

1. Activa viewport (doble clic dentro)
2. Abre Layer Properties Manager (comando `LAYER`)
3. Localiza columna "VP Freeze" (icono de sol/copo de nieve)
4. Clic en icono para congelar/descongelar

![VP Freeze en Layer Manager](./imagenes/layer-manager-vp-freeze.png)

**Método 2: Quick Properties**

1. Selecciona objeto en viewport activo
2. Clic derecho → Quick Properties
3. Layer → VP Freeze

**Método 3: Comando VPLAYER**

```
Command: VPLAYER
Enter an option [?/Color/Freeze/Layer/LType/LWeight/Newfrz/Plot/PStyle/Shade/TRansparency/Vpvisdflt]:
```

El comando VPLAYER ofrece control avanzado (ver sección 4.4).

### 4.3 VP Freeze vs Freeze Global

**Diferencias críticas:**

| Aspecto | Freeze Global | VP Freeze |
|---------|---------------|-----------|
| **Alcance** | Todo el dibujo | Viewport específico |
| **Model Space** | Afecta | NO afecta |
| **Otros viewports** | Afecta todos | NO afecta |
| **Columna en Layer Manager** | "Freeze" (sol/copo) | "VP Freeze" (ventana+copo) |
| **Regeneración** | Mejora performance | Mejora menos |

**Regla práctica:**

- Usa **Freeze global** para capas nunca visibles en planos (construcción, referencias)
- Usa **VP Freeze** para control selectivo por viewport

### 4.4 Comando VPLAYER Avanzado

**Opciones principales:**

#### Freeze - Congelar capas en viewports específicos

```
Command: VPLAYER
Enter an option: Freeze
Enter layer name(s) to freeze: DIMENSIONES,MOBILIARIO
Enter an option [All/Select/Current]: S (Select)
Select objects: [seleccionar viewports]
```

#### Thaw - Descongelar capas

```
Command: VPLAYER
Enter an option: Thaw
Enter layer name(s) to thaw: DIMENSIONES
Enter an option [All/Select/Current]: C (Current)
```

#### Newfrz - Crear capa congelada por defecto en nuevos viewports

```
Command: VPLAYER
Enter an option: Newfrz
Enter name(s) of new frozen layer(s): TEMP-CONSTRUCCION
```

**Ventaja:** Nuevos viewports no mostrarán esta capa automáticamente.

#### Vpvisdflt - Visibilidad por defecto

```
Command: VPLAYER
Enter an option: Vpvisdflt
Enter layer name(s) to change default viewport visibility: NOTAS-GENERALES
Enter a viewport visibility option [Frozen/Thawed]: F
```

Establece si la capa estará congelada o descongelada en nuevos viewports.

### 4.5 Layer Overrides en Viewports

**Nuevas capacidades:** AutoCAD permite override (sobrescribir) propiedades de capa por viewport:

- Color
- Linetype
- Lineweight
- Transparency
- Plot style

**Método:**

1. Activa viewport
2. Abre Layer Properties Manager
3. Localiza columnas "VP Color", "VP Linetype", etc.
4. Clic en propiedad para cambiar

![Layer overrides por viewport](./imagenes/layer-overrides-viewport.png)

**Indicador:** Icono de viewport aparece en columna cuando hay override activo.

**Uso típico:** Mostrar estructura en gris en plantas arquitectónicas pero en negro en plantas estructurales.

---

## 5. Alineación de Viewports

### 5.1 Importancia de la Alineación

Viewports alineados crean presentaciones profesionales y facilitan lectura de planos.

**Ejemplos:**
- Planta y elevación alineadas verticalmente
- Secciones alineadas con plantas
- Detalles alineados en grilla

![Viewports alineados](./imagenes/viewports-alineados.png)

### 5.2 Alineación Manual con MOVE

**Técnica básica:**

1. Bloquea escala de viewports
2. Usa MOVE para reposicionar viewport completo
3. Usa referencias a objetos para alineación precisa

```
Command: MOVE
Select objects: [seleccionar viewport]
Specify base point: [punto de referencia]
Specify second point: [punto alineado]
```

### 5.3 Alineación con PAN dentro de Viewport

**Para alinear contenido sin mover viewport:**

1. Activa primer viewport (doble clic)
2. Nota punto de referencia en modelo (ej: esquina de edificio)
3. Activa segundo viewport
4. Usa PAN para alinear mismo punto de referencia
5. Bloquea viewports

**Tip:** Usa OSNAP para alinear precisamente puntos específicos.

### 5.4 Alineación Vertical/Horizontal

**Técnica profesional:**

1. Crea líneas guía temporales en Paper Space
2. Usa líneas para alinear bordes de viewports
3. Elimina líneas guía después

O mejor:

1. Usa layer "GUIAS-VIEWPORT" (no ploteable)
2. Mantén guías para futuras referencias
3. Capa congelada o apagada para plotting

![Líneas guía para alineación](./imagenes/viewport-guias-alineacion.png)

### 5.5 Grilla de Viewports

Para layouts con múltiples viewports uniformes:

**Pasos:**

1. Dibuja rectángulo base en Paper Space
2. Usa ARRAY rectangular para distribuir
3. Usa cada rectángulo como guía para MVIEW con Object option
4. O directamente crea viewports con espacing uniforme

---

## 6. Edición de Viewports

### 6.1 Modificar Tamaño de Viewport

**Método: Grips**

1. Selecciona viewport (en Paper Space)
2. Aparecen grips en esquinas y puntos medios
3. Arrastra grips para redimensionar
4. Mantén Shift para proporcionalidad

![Grips de viewport](./imagenes/viewport-grips.png)

**Advertencia:** Redimensionar puede cambiar escala si no está bloqueada.

### 6.2 Clip Viewport (Recortar)

Recorta viewport existente a nueva forma:

```
Command: VPCLIP
Select viewport to clip: [seleccionar viewport]
Select clipping object or [Polygonal] <Polygonal>: [objeto cerrado o P]
```

**Opciones:**

- **Objeto existente:** Selecciona polilínea, círculo, etc.
- **Polygonal:** Dibuja forma de recorte interactivamente

![Viewport recortado](./imagenes/viewport-clip.png)

### 6.3 Eliminar Clip de Viewport

```
Command: VPCLIP
Select viewport to clip: [viewport con clip]
Select clipping object or [Polygonal/Delete] <Polygonal>: D (Delete)
```

### 6.4 ON/OFF de Viewports

**Apagar viewport (liberar recursos):**

```
Command: MVIEW
Specify corner of viewport or [.../ON/OFF/...]: OFF
Select objects: [seleccionar viewports]
```

**Encender viewport:**

```
Command: MVIEW
Specify corner of viewport or [.../ON/OFF/...]: ON
Select objects: [seleccionar viewports]
```

**Uso:** Apagar viewports complejos 3D para mejorar performance.

---

## 7. Maximizar Viewports (VPMAX)

### 7.1 Concepto de VPMAX

**VPMAX** (Viewport Maximize) expande el viewport activo a pantalla completa para edición cómoda, manteniendo escala bloqueada.

**Ventaja:** Trabajas como en Model Space pero respetando configuración del viewport.

### 7.2 Maximizar Viewport

**Comando:**

```
Command: VPMAX
```

O simplemente: Doble clic en borde del viewport (si está configurado).

**Indicadores visuales:**

- Borde rojo grueso alrededor de pantalla
- Icono especial en barra de estado
- Mensaje: "Viewport maximized"

![Viewport maximizado](./imagenes/viewport-maximizado.png)

### 7.3 Minimizar Viewport

**Comando:**

```
Command: VPMIN
```

O: Doble clic nuevamente en borde.

### 7.4 Configurar Doble Clic

**Personalizar comportamiento de doble clic:**

1. Command: `OPTIONS`
2. Pestaña "User Preferences"
3. Sección "Windows Standard Behavior"
4. "Double click editing"
5. Configura doble clic en viewport

**Opciones:**

- Maximize viewport
- Edit viewport (MSPACE/PSPACE)
- Properties palette

---

## 8. Propiedades Avanzadas de Viewports

### 8.1 Propiedades en Properties Palette

Selecciona viewport y abre Properties (Ctrl+1):

| Propiedad | Función |
|-----------|---------|
| **Layer** | Capa del viewport (recomendado: VIEWPORTS) |
| **Linetype** | Tipo de línea del borde |
| **Lineweight** | Grosor del borde |
| **Color** | Color del borde |
| **Standard scale** | Escala del viewport |
| **Display locked** | Bloqueo de escala/pan |
| **On** | Viewport encendido/apagado |
| **Shade plot** | Estilo de sombreado en plot |
| **Visual style** | Estilo visual 3D |
| **Annotation scale** | Escala de anotaciones |

![Properties de viewport](./imagenes/viewport-properties-palette.png)

### 8.2 Shade Plot

Controla cómo se plotean objetos 3D en el viewport:

**Opciones:**

- **As displayed:** Como aparece en pantalla
- **Wireframe:** Estructura de alambre
- **Hidden:** Líneas ocultas removidas
- **3D Hidden:** Ocultar 3D avanzado
- **3D Wireframe:** Alambre 3D
- **Conceptual, Realistic, etc.:** Estilos visuales

**Configuración:**

1. Selecciona viewport
2. Properties → Shade plot
3. Selecciona opción

### 8.3 Annotation Scale

Controla qué escala de objetos anotativos se muestra en el viewport:

1. Properties → Annotation scale
2. Selecciona escala de la lista
3. Objetos anotativos se ajustan automáticamente

**Sincronización:** Puedes sincronizar Annotation scale con Standard scale.

---

## 9. Mejores Prácticas

### Recomendaciones Profesionales

1. **Siempre bloquea viewports** después de configurar escala
2. **Usa capa dedicada para viewports** (ej: "VIEWPORTS", no ploteable)
3. **Nombra viewports descriptivamente** en Properties → Name
4. **Mantén consistencia en escalas** dentro del mismo layout
5. **Alinea viewports** para presentación profesional
6. **Usa VP Freeze** en lugar de apagar capas globalmente
7. **Configura Shade plot** apropiadamente para 3D
8. **Verifica escalas antes de plotear**

### Organización de Capas de Viewports

**Configuración recomendada:**

```
Layer: VIEWPORTS
  - Color: 7 (White/Black)
  - Linetype: Continuous
  - Lineweight: 0.25 mm
  - Plot: No (No ploteable)
  - Freeze en Model Space: Yes
```

**Razón:** Los bordes de viewports no deben aparecer en planos finales.

### Errores Comunes a Evitar

- No bloquear viewports → cambios accidentales de escala
- Usar Freeze global en lugar de VP Freeze → afecta todos los viewports
- Escalar viewports con grips → distorsiona escala
- No verificar escalas antes de plotear → planos incorrectos
- Viewports en capa ploteable → bordes visibles en impresión
- Demasiados viewports activos → performance lento

---

## 10. Ejercicios Prácticos

### Ejercicio 1: Viewport Básico

1. Abre dibujo con geometría en Model Space
2. Cambia a Layout1
3. Crea viewport rectangular centrado
4. Configura escala 1:100
5. Bloquea viewport
6. Verifica con zoom que escala no cambia

### Ejercicio 2: Múltiples Escalas

1. Crea layout A1 horizontal
2. Crea 3 viewports:
   - Viewport 1: Planta general a 1:100
   - Viewport 2: Detalle a 1:20
   - Viewport 3: Vista 3D isométrica
3. Bloquea todos
4. Configura encuadres apropiados

### Ejercicio 3: VP Freeze

1. En layout con 2 viewports:
2. Congela capa "DIMENSIONES" solo en viewport 1
3. Congela capa "MOBILIARIO" solo en viewport 2
4. Verifica que cada viewport muestra capas diferentes

### Ejercicio 4: Alineación

1. Crea layout con 2 viewports verticales
2. Muestra planta en viewport superior
3. Muestra elevación en viewport inferior
4. Alinea verticalmente para que muros coincidan
5. Usa líneas guía para precisión

### Ejercicio 5: Viewports Poligonales

1. Dibuja círculo en Paper Space
2. Crea viewport circular usando Object option
3. Configura vista isométrica del modelo
4. Escala 1:50
5. Bloquea viewport

### Ejercicio 6: VPMAX

1. Crea viewport pequeño con escala 1:20
2. Bloquea viewport
3. Maximiza con VPMAX
4. Edita objetos dentro
5. Minimiza con VPMIN
6. Verifica que escala se mantuvo

---

## Resumen de Comandos

| Comando | Función | Atajo |
|---------|---------|-------|
| MVIEW | Crear/gestionar viewports flotantes | MV |
| VPLAYER | Control de capas por viewport | - |
| VPCLIP | Recortar viewport | - |
| VPMAX | Maximizar viewport | - |
| VPMIN | Minimizar viewport | - |
| SCALELISTEDIT | Editar lista de escalas | - |

---

## Recursos Adicionales

### Variables de Sistema

- `VPMAXIMIZEDSTATE` - Estado de maximización (0=normal, 1=maximizado)
- `VPSCALEASSOC` - Asociación de escala anotativa con viewport
- `LAYERVPMODE` - Modo de visibilidad de capas por viewport

### Atajos de Teclado

- **Doble clic dentro de viewport:** Activar MSPACE
- **Doble clic fuera de viewport:** Activar PSPACE
- **Doble clic en borde:** Maximizar viewport (según configuración)

### Escalas Comunes - Referencia Rápida

```
Arquitectura:
  Generales → 1:100, 1:200
  Detalles → 1:10, 1:20, 1:50

Ingeniería Civil:
  Topográficos → 1:500, 1:1000
  Obras → 1:100, 1:200

Mecánica:
  Piezas → 1:1, 1:2, 2:1
  Ensambles → 1:5, 1:10
```

---

## Navegación

**Anterior:** [Lección 2: Creación y Configuración de Layouts ←](./leccion-02-creacion-configuracion-layouts.md)

**Siguiente:** [Lección 4: Estilos de Plot (CTB/STB) →](./leccion-04-estilos-plot-ctb-stb.md)

---

## Preguntas de Autoevaluación

1. ¿Qué significa "XP" en el comando ZOOM para escalas?
2. ¿Cuál es la diferencia entre Freeze global y VP Freeze?
3. ¿Por qué es crítico bloquear viewports?
4. ¿Cómo alineas viewports precisamente?
5. ¿Qué comando usas para recortar un viewport?
6. ¿Para qué sirve VPMAX?
7. ¿En qué capa deben estar los viewports y por qué?
8. ¿Cómo agregas una escala personalizada a la lista?

---

**Tiempo estimado de la lección:** 60-70 minutos

**Continuar con:** [Lección 4: Estilos de Plot (CTB/STB) →](./leccion-04-estilos-plot-ctb-stb.md)
