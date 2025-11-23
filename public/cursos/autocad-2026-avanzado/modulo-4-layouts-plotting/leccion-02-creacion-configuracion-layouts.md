# Lección 2: Creación y Configuración de Layouts

## Introducción

Los **layouts** son configuraciones de presentación en Paper Space que representan hojas de papel donde organizas vistas de tu modelo para impresión. Dominar la creación y configuración de layouts es fundamental para producir documentación técnica profesional y eficiente.

En esta lección aprenderás a crear layouts desde cero, configurar propiedades de página, gestionar múltiples layouts y establecer plantillas reutilizables.

## Objetivos de la Lección

- Crear nuevos layouts mediante comando LAYOUT y otros métodos
- Configurar Page Setup Manager para tamaños de papel y dispositivos
- Establecer orientación, escalas y áreas de impresión
- Gestionar múltiples layouts en un mismo archivo
- Copiar layouts entre dibujos
- Crear plantillas de layout para reutilización

---

## 1. Creación de Layouts

### 1.1 Métodos de Creación

Existen varias formas de crear layouts en AutoCAD:

#### Método 1: Comando LAYOUT

```
Command: LAYOUT
Enter layout option [Copy/Delete/New/Template/Rename/SAveas/Set/?] <set>: N
Enter new Layout name <Layout3>: PLANTA-BAJA
```

**Opciones del comando LAYOUT:**

| Opción | Función |
|--------|---------|
| **New** | Crear nuevo layout vacío |
| **Copy** | Copiar layout existente |
| **Delete** | Eliminar layout |
| **Template** | Crear desde archivo plantilla (.dwt) |
| **Rename** | Renombrar layout existente |
| **SAveAs** | Guardar layout como plantilla |
| **Set** | Establecer layout activo |
| **?** | Listar layouts existentes |

![Comando LAYOUT opciones](./imagenes/layout-comando-opciones.png)

#### Método 2: Clic Derecho en Pestañas

1. Clic derecho en cualquier pestaña de layout
2. Selecciona "New layout"
3. AutoCAD crea "LayoutX" automáticamente

![Menú contextual de pestañas](./imagenes/layout-menu-contextual.png)

#### Método 3: Desde Plantilla (Template)

```
Command: LAYOUT
Enter layout option: T (Template)
Select template file: [seleccionar archivo .dwt]
Enter layout(s) to copy: [seleccionar layout de plantilla]
Enter layout name: PLANTA-ARQUITECTONICA
```

**Ventaja:** Importa layouts preconfigurados con cajetines, viewports y configuraciones.

![Layout desde plantilla](./imagenes/layout-desde-plantilla.png)

### 1.2 Layouts por Defecto

Cada archivo nuevo de AutoCAD incluye:

- **Model** - Pestaña de Model Space (no es layout)
- **Layout1** - Layout predeterminado en tamaño carta/A4
- **Layout2** - Layout predeterminado en tamaño carta/A4

Puedes personalizar estos defaults en tus plantillas .dwt.

---

## 2. Page Setup Manager

El **Page Setup Manager** (Administrador de Configuración de Página) es la herramienta central para configurar propiedades de impresión de cada layout.

### 2.1 Acceder a Page Setup Manager

**Métodos:**

```
Command: PAGESETUP
```

O bien:

- Clic derecho en pestaña de layout → "Page Setup Manager"
- Menú: Output → Page Setup Manager

![Page Setup Manager - Interfaz](./imagenes/pagesetup-manager-interfaz.png)

### 2.2 Crear Nueva Configuración de Página

**Pasos:**

1. Abre Page Setup Manager
2. Clic en botón "New..."
3. Asigna nombre descriptivo (ej: "A1-Plotter-Color")
4. Selecciona configuración base (opcional)
5. Clic "OK"

![Crear nuevo Page Setup](./imagenes/pagesetup-nuevo.png)

### 2.3 Componentes del Cuadro de Diálogo

El diálogo de Page Setup contiene varias secciones críticas:

#### A) Printer/Plotter Section

**Configuraciones:**

- **Name:** Selección de impresora/plotter o PDF
- **Plotter:** Dispositivos físicos configurados (.pc3)
- **Plot to file:** Guardar como archivo de plot

![Sección Printer/Plotter](./imagenes/pagesetup-printer.png)

**Impresoras comunes:**

| Dispositivo | Uso Típico |
|-------------|------------|
| DWG To PDF.pc3 | Crear PDFs vectoriales |
| PublishToWeb JPG.pc3 | Imágenes para web |
| Adobe PDF | PDFs de alta calidad |
| [Plotter físico] | Impresión en plotter real |

#### B) Paper Size Section

**Tamaños de papel:**

Selecciona el tamaño de hoja apropiado para tu plano.

**Tamaños estándar ISO (mm):**

| Serie A | Dimensiones | Uso |
|---------|-------------|-----|
| A0 | 841 × 1189 | Planos grandes de arquitectura/ingeniería |
| A1 | 594 × 841 | Plantas generales, planos principales |
| A2 | 420 × 594 | Plantas específicas, detalles grandes |
| A3 | 297 × 420 | Detalles, planos secundarios |
| A4 | 210 × 297 | Documentos, detalles pequeños |

**Tamaños estándar ANSI (pulgadas):**

| Tamaño | Dimensiones | Equivalente |
|--------|-------------|-------------|
| ANSI A | 8.5 × 11 | Carta (Letter) |
| ANSI B | 11 × 17 | Tabloide |
| ANSI C | 17 × 22 | - |
| ANSI D | 22 × 34 | - |
| ANSI E | 34 × 44 | - |

![Selección de tamaño de papel](./imagenes/pagesetup-paper-size.png)

#### C) Plot Area Section

Define qué parte del layout se imprimirá:

| Opción | Descripción |
|--------|-------------|
| **Display** | Área actualmente visible en pantalla |
| **Extents** | Todos los objetos del layout |
| **Layout** | Todo el layout incluyendo márgenes |
| **Window** | Área definida por ventana (selección manual) |

**Recomendación:** Usar "Layout" para imprimir todo el layout configurado.

![Plot Area opciones](./imagenes/pagesetup-plot-area.png)

#### D) Plot Offset Section

Desplazamiento de la impresión en la hoja:

- **X offset:** Desplazamiento horizontal
- **Y offset:** Desplazamiento vertical
- **Center the plot:** Centra automáticamente en el papel

**Tip:** Usa "Center the plot" para layouts estándar.

#### E) Plot Scale Section

**Opciones críticas:**

- **Fit to paper:** Ajusta automáticamente para que quepa (NO recomendado)
- **Scale:** Define escala específica (1:1 para layouts)
- **Scale lineweights:** Escala grosores de línea proporcionalmente

**Configuración recomendada para layouts:**
```
Scale: 1:1 (1 mm = 1 units)
Scale lineweights: DESACTIVADO
```

**Razón:** En Paper Space ya configuraste todo a tamaño de papel real; las escalas se manejan en viewports.

![Plot Scale configuración](./imagenes/pagesetup-plot-scale.png)

#### F) Plot Style Table Section

Asignación de tabla de estilos de impresión (.ctb o .stb):

- **None:** Sin estilos aplicados
- **monochrome.ctb:** Impresión en blanco y negro
- **grayscale.ctb:** Impresión en escala de grises
- **[Custom].ctb:** Estilos personalizados

**Nota:** Los plot styles se cubrirán en detalle en la Lección 4.

![Plot Style Table selección](./imagenes/pagesetup-plot-style.png)

#### G) Drawing Orientation Section

Orientación de la hoja:

- **Portrait:** Vertical (alto > ancho)
- **Landscape:** Horizontal (ancho > alto)
- **Plot upside-down:** Invertir 180 grados

![Drawing Orientation](./imagenes/pagesetup-orientation.png)

---

## 3. Configuración de Dispositivos de Impresión

### 3.1 Configuración de Plotter (.PC3)

Los archivos **.pc3** (Plotter Configuration) almacenan configuraciones específicas de dispositivos.

**Acceder a Plotter Manager:**

```
Command: PLOTTERMANAGER
```

O bien: Control Panel → Plotters and Printers

![Plotter Manager](./imagenes/plotter-manager.png)

### 3.2 Crear Configuración de Plotter Personalizada

**Pasos:**

1. Ejecuta `PLOTTERMANAGER`
2. Doble clic en "Add-A-Plotter Wizard"
3. Sigue el asistente:
   - Tipo de plotter (My Computer, Network, System Printer)
   - Fabricante y modelo
   - Puertos de conexión
   - Nombre del archivo .pc3
4. Finaliza y guarda

**Resultado:** Archivo .pc3 disponible en Page Setup Manager.

### 3.3 Configurar DWG to PDF

Para generar PDFs de alta calidad:

**Configuración recomendada:**

1. Printer/plotter: "DWG To PDF.pc3"
2. Paper size: Según proyecto (A1, A3, etc.)
3. Plot scale: 1:1
4. Plot style: monochrome.ctb o personalizado
5. Activar "Plot object lineweights"

![Configuración DWG to PDF](./imagenes/pagesetup-dwg-to-pdf.png)

---

## 4. Gestión de Múltiples Layouts

### 4.1 Naming Conventions (Convenciones de Nombres)

Usa nombres descriptivos y sistemáticos para layouts:

**Ejemplos profesionales:**

```
P01-PLANTA-BAJA
P02-PLANTA-ALTA
E01-ELEVACION-NORTE
E02-ELEVACION-SUR
D01-DETALLE-ESCALERA
D02-DETALLE-BAÑO
S01-SECCION-A-A
S02-SECCION-B-B
```

**Estructura sugerida:**
```
[Tipo][Número]-[Descripción]

Donde:
- Tipo: P=Planta, E=Elevación, D=Detalle, S=Sección
- Número: 01, 02, 03...
- Descripción: Texto descriptivo corto
```

### 4.2 Renombrar Layouts

**Método 1: Comando LAYOUT**

```
Command: LAYOUT
Enter layout option: Rename
Enter layout to rename <current>: Layout1
Enter new layout name: P01-PLANTA-BAJA
```

**Método 2: Clic Derecho**

1. Clic derecho en pestaña del layout
2. Selecciona "Rename"
3. Escribe nuevo nombre
4. Presiona Enter

![Renombrar layout](./imagenes/layout-renombrar.png)

### 4.3 Reordenar Layouts

Arrastra y suelta pestañas de layouts para reordenarlas:

1. Clic sostenido en pestaña de layout
2. Arrastra a nueva posición
3. Suelta

**Tip:** Ordena layouts según numeración lógica del proyecto.

### 4.4 Copiar Layouts en el Mismo Archivo

**Método 1: Comando LAYOUT**

```
Command: LAYOUT
Enter layout option: Copy
Enter layout to copy <current>: P01-PLANTA-BAJA
Enter layout name for copy: P02-PLANTA-ALTA
```

**Método 2: Clic Derecho**

1. Clic derecho en layout a copiar
2. Selecciona "Move or Copy..."
3. Selecciona posición
4. Activa "Create a copy"
5. OK

**Ventaja:** Mantiene configuraciones de página, viewports y elementos de presentación.

![Copiar layout](./imagenes/layout-copiar.png)

### 4.5 Eliminar Layouts

**Comando:**

```
Command: LAYOUT
Enter layout option: Delete
Enter name of layout to delete: Layout2
```

**O bien:** Clic derecho → Delete

**Advertencia:** No puedes eliminar el último layout ni el layout activo.

---

## 5. Copiar Layouts entre Archivos

### 5.1 Método Design Center

**Pasos:**

1. Abre archivo destino
2. Command: `ADCENTER` (o Ctrl+2)
3. Navega al archivo fuente
4. Expande sección "Layouts"
5. Clic derecho en layout → "Add Layout(s)"

![Design Center - Copiar layouts](./imagenes/design-center-layouts.png)

**Ventaja:** Copia configuraciones completas incluyendo viewports y elementos.

### 5.2 Método Template (desde archivo .dwt)

```
Command: LAYOUT
Enter layout option: Template
Select template file: C:\Templates\Proyecto-A1.dwt
Enter layout(s) to copy <*>: PLANTA-TIPO
Enter layout name <PLANTA-TIPO>: P01-PLANTA-BAJA
```

### 5.3 Copy/Paste entre Archivos

**Limitación:** No puedes copiar layouts directamente con Ctrl+C/Ctrl+V.

**Alternativa:** Usa Design Center o comando LAYOUT con Template.

---

## 6. Plantillas de Layout

### 6.1 Crear Plantilla de Layout

Las plantillas de layout estandarizan configuraciones para proyectos futuros.

**Pasos para crear plantilla:**

1. Configura layout perfecto:
   - Page setup apropiado
   - Cajetín/title block
   - Viewports base
   - Layers organizadas
   - Plot styles asignados

2. Guarda como plantilla:

```
Command: LAYOUT
Enter layout option: SAveAs
Enter layout to save as template: P01-PLANTA-BAJA
Enter new layout name <P01-PLANTA-BAJA>: PLANTILLA-A1-ARQUITECTURA
```

**Ubicación:** Archivos .dwt en carpetas de plantillas de AutoCAD.

![Plantilla de layout](./imagenes/layout-plantilla.png)

### 6.2 Usar Plantillas Organizacionales

Muchas empresas mantienen bibliotecas de plantillas corporativas:

**Estructura típica:**
```
C:\Empresa\Templates\
  ├── Arquitectura\
  │   ├── A1-Plantas.dwt
  │   ├── A2-Detalles.dwt
  │   └── A3-Planos-Generales.dwt
  ├── Estructural\
  │   ├── A1-Plantas-Estructurales.dwt
  │   └── A2-Detalles-Refuerzo.dwt
  └── MEP\
      ├── A1-Instalaciones-Electricas.dwt
      └── A1-Instalaciones-Hidraulicas.dwt
```

### 6.3 Configurar Rutas de Plantillas

**Configuración de AutoCAD:**

1. Command: `OPTIONS`
2. Pestaña "Files"
3. Expande "Template Settings"
4. "Drawing Template File Location"
5. Agrega rutas personalizadas
6. OK

![Configurar rutas de plantillas](./imagenes/options-template-paths.png)

---

## 7. Configuraciones Avanzadas

### 7.1 Shaded Viewport Options

Controla calidad visual de viewports con objetos 3D:

**Opciones:**

- **As displayed:** Como se ve en pantalla
- **Wireframe:** Estructura de alambre
- **Hidden:** Líneas ocultas removidas
- **Rendered:** Renderizado (puede ser lento)

**Configuración:** Page Setup Manager → Shaded viewport options

### 7.2 Plot Options

**Opciones adicionales:**

| Opción | Función |
|--------|---------|
| **Plot in background** | Permite seguir trabajando mientras plotea |
| **Plot object lineweights** | Imprime grosores de línea asignados |
| **Plot with plot styles** | Aplica tablas de estilos de plot |
| **Plot paperspace last** | Imprime Paper Space al final (sobre viewports) |
| **Hide paperspace objects** | Oculta objetos 3D en Paper Space |

![Plot Options](./imagenes/pagesetup-plot-options.png)

### 7.3 Variables de Sistema Relacionadas

**Variables importantes:**

```
BACKGROUNDPLOT - Habilita plotting en segundo plano (recomendado: 2)
PLOTLEGACY - Usa motor de plot antiguo (recomendado: 0)
PSQUALITY - Calidad de impresión de objetos (recomendado: 75)
PSTYLEMODE - Tipo de plot style (0=Named, 1=Color-dependent)
```

**Verificar configuración:**

```
Command: BACKGROUNDPLOT
Enter new value for BACKGROUNDPLOT <2>: 2

Command: PSQUALITY
Enter new value for PSQUALITY <75>: 75
```

---

## 8. Mejores Prácticas

### Recomendaciones Profesionales

1. **Estandariza configuraciones de página**
   - Crea plantillas para tamaños comunes (A1, A2, A3)
   - Mantén consistencia entre proyectos

2. **Usa naming conventions sistemáticas**
   - Nombres descriptivos y ordenados
   - Prefijos para categorías (P-, E-, D-, S-)

3. **Configura Page Setup antes de agregar contenido**
   - Define tamaño de papel primero
   - Evita reconfigurar layouts completos

4. **Mantén bibliotecas de plantillas**
   - Por disciplina (arquitectura, estructura, MEP)
   - Por tamaño de papel
   - Por cliente/proyecto tipo

5. **Documenta configuraciones especiales**
   - Plot styles personalizados
   - Configuraciones de plotter específicas
   - Escalas no estándar

6. **Verifica configuraciones antes de plotear**
   - Preview antes de imprimir
   - Valida escalas y tamaños
   - Revisa plot styles aplicados

### Errores Comunes a Evitar

- Cambiar tamaño de papel con viewports ya configurados
- No bloquear viewports (se cubren en Lección 3)
- Inconsistencia en configuraciones entre layouts
- No usar plantillas (repetir configuración manual)
- Nombres de layouts genéricos (Layout1, Layout2)
- Escala "Fit to paper" en layouts profesionales

---

## 9. Ejercicios Prácticos

### Ejercicio 1: Crear Layout desde Cero

1. Abre nuevo dibujo
2. Crea layout llamado "A1-PLANTA-GENERAL"
3. Configura Page Setup:
   - Papel: ISO A1 (594 × 841 mm)
   - Orientación: Landscape
   - Plot device: DWG to PDF.pc3
   - Plot scale: 1:1
4. Centra el plot
5. Asigna plot style: monochrome.ctb

### Ejercicio 2: Múltiples Layouts

1. Crea 4 layouts con naming convention:
   - P01-PLANTA-BAJA
   - P02-PLANTA-ALTA
   - E01-ELEVACION-PRINCIPAL
   - D01-DETALLE-ESCALERA

2. Configura cada uno:
   - P01 y P02: A1 horizontal
   - E01: A2 vertical
   - D01: A3 horizontal

3. Reordena pestañas en orden lógico

### Ejercicio 3: Plantilla de Layout

1. Configura layout perfecto con:
   - Tamaño A1
   - Plot to PDF
   - Escala 1:1
   - Orientación landscape
   - Plot style monochrome.ctb

2. Guarda como plantilla:
   - Nombre: MI-PLANTILLA-A1-ARQ
   - Ubicación: Carpeta de plantillas

3. Crea nuevo layout desde tu plantilla

### Ejercicio 4: Copiar Layout entre Archivos

1. Usa Design Center (ADCENTER)
2. Navega a archivo con layouts configurados
3. Copia layout a archivo actual
4. Renombra apropiadamente

---

## Resumen de Comandos

| Comando | Función | Atajo |
|---------|---------|-------|
| LAYOUT | Gestionar layouts (New/Copy/Delete/Rename) | - |
| PAGESETUP | Configurar página de layout | - |
| PLOTTERMANAGER | Gestionar configuraciones de plotter | - |
| ADCENTER | Design Center (copiar layouts) | Ctrl+2 |
| OPTIONS | Configuraciones de AutoCAD | - |

---

## Recursos Adicionales

### Tamaños de Papel de Referencia

**Serie ISO A (mm):**

| Tamaño | Ancho × Alto | Área (m²) |
|--------|--------------|-----------|
| A0 | 841 × 1189 | 1.00 |
| A1 | 594 × 841 | 0.50 |
| A2 | 420 × 594 | 0.25 |
| A3 | 297 × 420 | 0.125 |
| A4 | 210 × 297 | 0.0625 |

**Serie ANSI (pulgadas):**

| Tamaño | Ancho × Alto |
|--------|--------------|
| A (Letter) | 8.5 × 11 |
| B (Tabloid) | 11 × 17 |
| C | 17 × 22 |
| D | 22 × 34 |
| E | 34 × 44 |

### Variables de Sistema

- `BACKGROUNDPLOT` - Plot en segundo plano (0=off, 1=plot, 2=plot+publish)
- `PSTYLEMODE` - Tipo de plot style (0=named, 1=color-dependent)
- `PSQUALITY` - Calidad de impresión (0-100)
- `PLOTLEGACY` - Motor de plot legacy (0=nuevo, 1=antiguo)

---

## Navegación

**Anterior:** [Lección 1: Model Space vs Paper Space ←](./leccion-01-model-space-vs-paper-space.md)

**Siguiente:** [Lección 3: Viewports Flotantes →](./leccion-03-viewports-flotantes.md)

---

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre un layout y un page setup?
2. ¿Qué escala de plot debes usar en Paper Space? ¿Por qué?
3. ¿Cuáles son los tamaños de papel más comunes en arquitectura?
4. ¿Cómo copias un layout de un archivo a otro?
5. ¿Qué opción de Plot Area es más común para layouts profesionales?
6. ¿Por qué es importante usar naming conventions para layouts?
7. ¿Qué archivo de configuración almacena configuraciones de plotter?

---

**Tiempo estimado de la lección:** 50-55 minutos

**Continuar con:** [Lección 3: Viewports Flotantes →](./leccion-03-viewports-flotantes.md)
