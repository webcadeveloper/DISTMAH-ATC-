# Lección 1: Model Space vs Paper Space

## Introducción

Uno de los conceptos fundamentales más importantes en AutoCAD profesional es comprender la diferencia entre **Model Space** y **Paper Space**, y cuándo usar cada uno. Esta distinción es crítica para organizar proyectos de manera eficiente y producir documentación técnica de calidad profesional.

En esta lección aprenderás los conceptos fundamentales, comandos asociados y las mejores prácticas para trabajar con estos dos espacios de trabajo.

## Objetivos de la Lección

- Comprender las diferencias conceptuales entre Model Space y Paper Space
- Dominar los comandos de navegación entre espacios (MSPACE, PSPACE, TILEMODE)
- Establecer workflow profesional para organización de proyectos
- Aplicar objetos anotativos correctamente en layouts
- Conocer cuándo usar cada espacio según el tipo de trabajo

---

## 1. Conceptos Fundamentales

### 1.1 ¿Qué es Model Space?

**Model Space** es el espacio tridimensional (o bidimensional) donde creas tu modelo o dibujo a **escala real (1:1)**. Es el ambiente de trabajo principal donde construyes la geometría de tu proyecto.

**Características de Model Space:**

- Espacio de coordenadas ilimitado
- Dibujo a escala real (1:1)
- Sistema de coordenadas UCS (User Coordinate System)
- Vista única o múltiples viewports en mosaico (tiled viewports)
- Entorno de modelado 3D y dibujo 2D
- Accesible desde la pestaña "Model"

![Model Space - Ambiente de trabajo](./imagenes/model-space-ambiente.png)

**Ejemplo práctico:**
```
Si diseñas un edificio de 20 metros de largo, dibujas 20,000 unidades
(si trabajas en milímetros) en Model Space. NO dibujas a escala reducida.
```

### 1.2 ¿Qué es Paper Space?

**Paper Space** es el espacio de presentación donde organizas vistas de tu modelo para impresión. Representa la hoja de papel física o digital donde se imprimirá tu plano.

**Características de Paper Space:**

- Representa hoja de papel a escala 1:1
- Contiene viewports flotantes hacia Model Space
- Múltiples layouts posibles (Layout1, Layout2, etc.)
- Elementos de presentación (cajetín, notas generales, leyendas)
- Configuración de página e impresión
- Accesible desde pestañas "Layout"

![Paper Space - Presentación](./imagenes/paper-space-presentacion.png)

**Ejemplo práctico:**
```
En Paper Space configuras una hoja A1 (594×841mm) y creas viewports que
muestran tu edificio a escalas específicas: planta 1:100, detalles 1:20.
```

---

## 2. Diferencias Clave

### Tabla Comparativa

| Aspecto | Model Space | Paper Space |
|---------|-------------|-------------|
| **Propósito** | Modelado y dibujo | Presentación e impresión |
| **Escala de dibujo** | 1:1 (escala real) | 1:1 (tamaño de papel) |
| **Escala de visualización** | Variable (zoom) | Fija por viewport |
| **Unidades** | Unidades del proyecto | Unidades de papel (mm/in) |
| **Viewports** | Tiled (mosaico) | Floating (flotantes) |
| **Impresión** | Requiere escala manual | Escala por viewport |
| **Anotaciones** | Objetos anotativos | Texto/cotas fijas |
| **Límites** | Ilimitado | Limitado al papel |

### Visualización de Conceptos

![Model Space vs Paper Space - Diagrama conceptual](./imagenes/model-vs-paper-concepto.png)

---

## 3. Navegación Entre Espacios

### 3.1 Usando las Pestañas

La forma más visual de cambiar entre espacios es mediante las pestañas en la parte inferior de la pantalla:

- **Pestaña "Model"** - Activa Model Space
- **Pestañas "Layout1", "Layout2", etc.** - Activan Paper Space

![Pestañas Model y Layout](./imagenes/pestanas-model-layout.png)

**Tip:** Puedes renombrar layouts haciendo clic derecho en la pestaña.

### 3.2 Comandos MSPACE y PSPACE

Cuando estás en un layout, puedes alternar entre Paper Space y Model Space dentro de viewports:

#### Comando PSPACE (o PS)

```
Command: PSPACE
```

**Función:** Activa Paper Space para editar elementos de presentación (títulos, cajetines, crear viewports).

**Indicador visual:** El cursor UCS aparece en la esquina del layout.

![PSPACE activo](./imagenes/pspace-activo.png)

#### Comando MSPACE (o MS)

```
Command: MSPACE
```

**Función:** Activa Model Space dentro de un viewport flotante para editar el modelo.

**Indicador visual:** El borde del viewport activo se resalta con línea gruesa.

![MSPACE activo dentro de viewport](./imagenes/mspace-activo-viewport.png)

**Atajo rápido:** Doble clic dentro/fuera de un viewport alterna entre MSPACE y PSPACE.

### 3.3 Variable TILEMODE

`TILEMODE` es la variable de sistema que controla el espacio activo:

| Valor | Estado | Descripción |
|-------|--------|-------------|
| **1** | Model Space | Viewports en mosaico (tiled) |
| **0** | Paper Space | Viewports flotantes habilitados |

```
Command: TILEMODE
Enter new value for TILEMODE <0>: 1
```

**Nota:** Generalmente no necesitas cambiar TILEMODE manualmente; usar las pestañas es más intuitivo.

---

## 4. Workflow Profesional

### 4.1 Regla de Oro

```
┌─────────────────────────────────────────────────┐
│  SIEMPRE DIBUJA A ESCALA REAL (1:1)             │
│  EN MODEL SPACE                                 │
│                                                 │
│  APLICA ESCALAS DE PRESENTACIÓN                 │
│  EN PAPER SPACE (VIEWPORTS)                     │
└─────────────────────────────────────────────────┘
```

### 4.2 Proceso Típico de Trabajo

**Paso 1: Modelado en Model Space**

1. Configura unidades del proyecto
2. Dibuja geometría a escala real 1:1
3. Organiza por capas apropiadamente
4. Completa todo el modelado antes de layouts

![Proceso - Modelado](./imagenes/workflow-modelado.png)

**Paso 2: Creación de Layouts**

5. Cambia a Paper Space (pestaña Layout)
6. Configura tamaño de papel (PAGESETUP)
7. Inserta cajetín/title block
8. Crea viewports flotantes (MVIEW)

![Proceso - Layouts](./imagenes/workflow-layouts.png)

**Paso 3: Configuración de Viewports**

9. Entra a cada viewport (MSPACE)
10. Configura vista y encuadre
11. Establece escala apropiada
12. Bloquea viewport para evitar cambios

![Proceso - Viewports](./imagenes/workflow-viewports.png)

**Paso 4: Anotaciones y Finalización**

13. Agrega notas generales en Paper Space
14. Verifica escalas y visibilidad
15. Configura plot styles
16. Plot o publicación final

---

## 5. Escalas y Consideraciones

### 5.1 Escala en Model Space

En Model Space **NO aplicas escala al dibujar**. Siempre dibujas a tamaño real.

**Ejemplo:**
- Muro de 3 metros = 3000 mm en el dibujo
- Tornillo de 8 mm = 8 mm en el dibujo

### 5.2 Escala en Paper Space

La escala se aplica mediante viewports. Cada viewport puede mostrar el mismo modelo a diferentes escalas.

**Escalas comunes:**

| Disciplina | Escalas Típicas |
|------------|-----------------|
| **Arquitectura** | 1:100, 1:50, 1:20, 1:10, 1:5 |
| **Ingeniería Civil** | 1:1000, 1:500, 1:200, 1:100 |
| **Ingeniería Mecánica** | 1:1, 2:1, 5:1, 1:2, 1:5 |
| **Detalles** | 1:10, 1:5, 1:2, 1:1, 2:1 |

![Múltiples escalas en un layout](./imagenes/multiples-escalas-layout.png)

### 5.3 Variables de Escala de Línea

**PSLTSCALE (Paper Space Linetype Scale):**
- Controla escala de tipos de línea en Paper Space
- Valor recomendado: 1

**MSLTSCALE (Model Space Linetype Scale):**
- Controla escala de tipos de línea en Model Space
- Valor recomendado: 1

**LTSCALE (Linetype Scale Global):**
- Escala global de tipos de línea
- Ajustar según necesidades del proyecto

```
Command: PSLTSCALE
Enter new value for PSLTSCALE <1>: 1

Command: MSLTSCALE
Enter new value for MSLTSCALE <1>: 1
```

---

## 6. Objetos Anotativos en Layouts

### 6.1 ¿Qué son los Objetos Anotativos?

Los **objetos anotativos** (textos, cotas, símbolos) ajustan automáticamente su tamaño visual según la escala del viewport.

**Ventaja:** Un texto anotativo de 2.5mm se verá a 2.5mm impresos independientemente de la escala del viewport (1:100, 1:50, etc.).

![Objetos anotativos en diferentes escalas](./imagenes/objetos-anotativos-escalas.png)

### 6.2 Activar Propiedad Anotativa

**En estilos de texto:**
1. Command: `STYLE`
2. Selecciona estilo
3. Activa checkbox "Annotative"

**En estilos de dimensiones:**
1. Command: `DIMSTYLE`
2. Selecciona estilo
3. Pestaña "Fit" → Activa "Annotative"

**En objetos existentes:**
1. Selecciona objeto
2. Properties (Ctrl+1)
3. Annotative: Yes

### 6.3 Escalas de Anotación

Configura las escalas soportadas para objetos anotativos:

```
Command: OBJECTSCALE
Select annotative objects: [seleccionar]
```

**Tip:** Usa `ANNOALLVISIBLE` = 1 para ver representaciones de todas las escalas simultáneamente.

---

## 7. Cuándo Usar Cada Espacio

### 7.1 Usar Model Space Para:

- Dibujar geometría del proyecto
- Modelado 3D
- Cálculos dimensionales
- Referencias y mediciones
- Trabajo colaborativo en modelo central
- Edición de bloques y referencias

### 7.2 Usar Paper Space Para:

- Presentación final de planos
- Múltiples vistas del mismo modelo
- Cajetines y marcos
- Notas generales del proyecto
- Leyendas y tablas
- Configuración de impresión
- Documentación formal

### 7.3 Casos Especiales

**Dibujos simples de una sola vista:**
- Puedes imprimir directamente desde Model Space
- Menos eficiente para proyectos profesionales

**Proyectos complejos con múltiples planos:**
- SIEMPRE usa layouts en Paper Space
- Organización profesional y eficiencia

---

## 8. Mejores Prácticas

### Recomendaciones Profesionales

1. **Nunca escales objetos en Model Space** para ajustar a impresión
2. **Mantén Model Space limpio** - solo geometría del proyecto
3. **Crea layouts específicos** para cada tipo de plano (plantas, elevaciones, detalles)
4. **Usa nombres descriptivos** para layouts (P01-Planta-Baja, D01-Detalle-Escalera)
5. **Bloquea viewports** después de configurar escala
6. **Usa objetos anotativos** para textos y cotas que aparecen en múltiples escalas
7. **Mantén consistencia** en configuraciones entre layouts del mismo proyecto

### Errores Comunes a Evitar

- Dibujar a escala reducida en Model Space
- Cambiar escala de viewports después de bloquear
- Mezclar elementos de presentación en Model Space
- No bloquear viewports (causan cambios accidentales)
- Imprimir desde Model Space en proyectos complejos

![Comparación de flujos correctos e incorrectos](./imagenes/flujo-correcto-incorrecto.png)

---

## 9. Ejercicios Prácticos

### Ejercicio 1: Exploración de Espacios

1. Abre un dibujo existente
2. Alterna entre pestaña Model y Layout1
3. Practica MSPACE y PSPACE con doble clic
4. Observa el comportamiento del cursor UCS

### Ejercicio 2: Configuración de Variables

1. Verifica valores de PSLTSCALE y MSLTSCALE
2. Experimenta con TILEMODE (1 y 0)
3. Observa diferencias visuales

### Ejercicio 3: Workflow Básico

1. Dibuja un rectángulo de 10000×8000 mm en Model Space
2. Cambia a Layout1
3. Crea un viewport y muéstralo a escala 1:100
4. Bloquea el viewport

---

## Resumen de Comandos

| Comando | Función | Atajo |
|---------|---------|-------|
| MSPACE | Activar Model Space en viewport | MS |
| PSPACE | Activar Paper Space | PS |
| TILEMODE | Cambiar entre Model/Paper Space | - |
| LAYOUT | Gestionar layouts | - |
| MVIEW | Crear viewports flotantes | MV |

---

## Recursos Adicionales

### Variables de Sistema

- `TILEMODE` - Controla espacio activo (0=Paper, 1=Model)
- `PSLTSCALE` - Escala de linetype en Paper Space
- `MSLTSCALE` - Escala de linetype en Model Space
- `ANNOALLVISIBLE` - Visibilidad de todas las escalas anotativas

### Términos Clave

- **Model Space** - Espacio de modelado a escala real
- **Paper Space** - Espacio de presentación (hoja de papel)
- **Viewport** - Ventana hacia Model Space desde Paper Space
- **Layout** - Configuración de presentación en Paper Space
- **Anotativo** - Objetos que escalan automáticamente por viewport
- **Tilemode** - Modo de visualización de viewports

---

## Navegación

**Anterior:** [README - Módulo 4](./README.md)

**Siguiente:** [Lección 2: Creación y Configuración de Layouts →](./leccion-02-creacion-configuracion-layouts.md)

---

## Preguntas de Autoevaluación

1. ¿A qué escala debes dibujar siempre en Model Space?
2. ¿Qué representa Paper Space?
3. ¿Cuál es la diferencia entre MSPACE y PSPACE?
4. ¿Qué valor debe tener TILEMODE para trabajar con viewports flotantes?
5. ¿Para qué sirven los objetos anotativos?
6. ¿En qué espacio se aplican las escalas de presentación?
7. ¿Cuándo es apropiado imprimir directamente desde Model Space?

---

**Tiempo estimado de la lección:** 45-50 minutos

**Continuar con:** [Lección 2: Creación y Configuración de Layouts →](./leccion-02-creacion-configuracion-layouts.md)
