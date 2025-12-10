# Leccion 1: Model Space vs Paper Space

**Duracion:** 45 minutos
**Modulo:** 4 - Layouts y Plotting
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender las diferencias entre Model Space y Paper Space
- Navegar entre espacios usando comandos y pestanas
- Establecer workflow profesional de dibujo
- Aplicar escalas correctamente en cada espacio
- Usar objetos anotativos en layouts

---

## Introduccion

Uno de los conceptos fundamentales mas importantes en AutoCAD profesional es comprender la diferencia entre Model Space y Paper Space. Esta distincion es critica para organizar proyectos eficientemente y producir documentacion tecnica de calidad profesional.

---

## 1. Conceptos Fundamentales

### 1.1 Que es Model Space

Model Space es el espacio tridimensional (o bidimensional) donde creas tu modelo a **escala real (1:1)**.

**Caracteristicas:**
- Espacio de coordenadas ilimitado
- Dibujo a escala real (1:1)
- Sistema de coordenadas UCS
- Vista unica o multiples viewports en mosaico
- Entorno de modelado 3D y dibujo 2D
- Accesible desde la pestana "Model"

**Ejemplo:**
```
Si disenas un edificio de 20 metros de largo,
dibujas 20,000 unidades (en mm) en Model Space.
NO dibujas a escala reducida.
```

### 1.2 Que es Paper Space

Paper Space es el espacio de presentacion donde organizas vistas de tu modelo para impresion.

**Caracteristicas:**
- Representa hoja de papel a escala 1:1
- Contiene viewports flotantes hacia Model Space
- Multiples layouts posibles (Layout1, Layout2, etc.)
- Elementos de presentacion (cajetin, notas, leyendas)
- Configuracion de pagina e impresion
- Accesible desde pestanas "Layout"

**Ejemplo:**
```
En Paper Space configuras una hoja A1 (594x841mm)
y creas viewports que muestran tu edificio a escalas
especificas: planta 1:100, detalles 1:20.
```

---

## 2. Diferencias Clave

### 2.1 Tabla Comparativa

| Aspecto | Model Space | Paper Space |
|---------|-------------|-------------|
| Proposito | Modelado y dibujo | Presentacion e impresion |
| Escala de dibujo | 1:1 (escala real) | 1:1 (tamano de papel) |
| Escala visual | Variable (zoom) | Fija por viewport |
| Unidades | Unidades del proyecto | Unidades de papel (mm/in) |
| Viewports | Tiled (mosaico) | Floating (flotantes) |
| Impresion | Requiere escala manual | Escala por viewport |
| Anotaciones | Objetos anotativos | Texto/cotas fijas |
| Limites | Ilimitado | Limitado al papel |

### 2.2 Regla de Oro

```
┌─────────────────────────────────────────────────┐
│  SIEMPRE DIBUJA A ESCALA REAL (1:1)             │
│  EN MODEL SPACE                                 │
│                                                 │
│  APLICA ESCALAS DE PRESENTACION                 │
│  EN PAPER SPACE (VIEWPORTS)                     │
└─────────────────────────────────────────────────┘
```

---

## 3. Navegacion Entre Espacios

### 3.1 Usando Pestanas

La forma mas visual de cambiar entre espacios es mediante las pestanas en la parte inferior:

- **Pestana "Model":** Activa Model Space
- **Pestanas "Layout1", "Layout2", etc.:** Activan Paper Space

**Tip:** Renombrar layouts haciendo clic derecho en la pestana.

### 3.2 Comandos MSPACE y PSPACE

Cuando estas en un layout, puedes alternar entre Paper Space y Model Space dentro de viewports.

**PSPACE (o PS):**
```
Command: PSPACE
```
Activa Paper Space para editar elementos de presentacion.

**MSPACE (o MS):**
```
Command: MSPACE
```
Activa Model Space dentro de un viewport flotante.

**Atajo rapido:** Doble clic dentro/fuera de un viewport alterna entre MSPACE y PSPACE.

### 3.3 Variable TILEMODE

TILEMODE controla el espacio activo:

| Valor | Estado | Descripcion |
|-------|--------|-------------|
| 1 | Model Space | Viewports en mosaico (tiled) |
| 0 | Paper Space | Viewports flotantes habilitados |

```
Command: TILEMODE
Enter new value for TILEMODE <0>: 1
```

---

## 4. Workflow Profesional

### 4.1 Proceso Tipico de Trabajo

**Paso 1: Modelado en Model Space**
1. Configurar unidades del proyecto
2. Dibujar geometria a escala real 1:1
3. Organizar por capas apropiadamente
4. Completar todo el modelado antes de layouts

**Paso 2: Creacion de Layouts**
5. Cambiar a Paper Space (pestana Layout)
6. Configurar tamano de papel (PAGESETUP)
7. Insertar cajetin/title block
8. Crear viewports flotantes (MVIEW)

**Paso 3: Configuracion de Viewports**
9. Entrar a cada viewport (MSPACE)
10. Configurar vista y encuadre
11. Establecer escala apropiada
12. Bloquear viewport para evitar cambios

**Paso 4: Anotaciones y Finalizacion**
13. Agregar notas generales en Paper Space
14. Verificar escalas y visibilidad
15. Configurar plot styles
16. Plot o publicacion final

---

## 5. Escalas en Cada Espacio

### 5.1 Escala en Model Space

En Model Space **NO aplicas escala al dibujar**. Siempre dibujas a tamano real.

**Ejemplo:**
- Muro de 3 metros = 3000 mm en el dibujo
- Tornillo de 8 mm = 8 mm en el dibujo

### 5.2 Escala en Paper Space

La escala se aplica mediante viewports. Cada viewport puede mostrar el mismo modelo a diferentes escalas.

**Escalas comunes:**

| Disciplina | Escalas Tipicas |
|------------|-----------------|
| Arquitectura | 1:100, 1:50, 1:20, 1:10, 1:5 |
| Ingenieria Civil | 1:1000, 1:500, 1:200, 1:100 |
| Ingenieria Mecanica | 1:1, 2:1, 5:1, 1:2, 1:5 |
| Detalles | 1:10, 1:5, 1:2, 1:1, 2:1 |

### 5.3 Variables de Escala de Linea

**PSLTSCALE (Paper Space Linetype Scale):**
- Controla escala de tipos de linea en Paper Space
- Valor recomendado: 1

**MSLTSCALE (Model Space Linetype Scale):**
- Controla escala de tipos de linea en Model Space
- Valor recomendado: 1

**LTSCALE (Linetype Scale Global):**
- Escala global de tipos de linea
- Ajustar segun necesidades del proyecto

```
Command: PSLTSCALE
Enter new value for PSLTSCALE <1>: 1

Command: MSLTSCALE
Enter new value for MSLTSCALE <1>: 1
```

---

## 6. Objetos Anotativos

### 6.1 Que son los Objetos Anotativos

Los objetos anotativos (textos, cotas, simbolos) ajustan automaticamente su tamano visual segun la escala del viewport.

**Ventaja:** Un texto anotativo de 2.5mm se vera a 2.5mm impresos independientemente de la escala del viewport.

### 6.2 Activar Propiedad Anotativa

**En estilos de texto:**
```
Command: STYLE
Seleccionar estilo > Activar "Annotative"
```

**En estilos de dimensiones:**
```
Command: DIMSTYLE
Modify > Fit tab > Activar "Annotative"
```

**En objetos existentes:**
```
Seleccionar objeto > Properties (Ctrl+1)
Annotative: Yes
```

### 6.3 Escalas de Anotacion

Configurar las escalas soportadas para objetos anotativos:

```
Command: OBJECTSCALE
Select annotative objects: (seleccionar)
```

**Tip:** Usar ANNOALLVISIBLE = 1 para ver representaciones de todas las escalas.

---

## 7. Cuando Usar Cada Espacio

### 7.1 Usar Model Space Para:

- Dibujar geometria del proyecto
- Modelado 3D
- Calculos dimensionales
- Referencias y mediciones
- Trabajo colaborativo en modelo central
- Edicion de bloques y referencias

### 7.2 Usar Paper Space Para:

- Presentacion final de planos
- Multiples vistas del mismo modelo
- Cajetines y marcos
- Notas generales del proyecto
- Leyendas y tablas
- Configuracion de impresion
- Documentacion formal

### 7.3 Casos Especiales

**Dibujos simples de una sola vista:**
- Puedes imprimir directamente desde Model Space
- Menos eficiente para proyectos profesionales

**Proyectos complejos con multiples planos:**
- SIEMPRE usa layouts en Paper Space
- Organizacion profesional y eficiencia

---

## 8. Mejores Practicas

### 8.1 Recomendaciones

1. **Nunca escales objetos en Model Space** para ajustar a impresion
2. **Manten Model Space limpio** - solo geometria del proyecto
3. **Crea layouts especificos** para cada tipo de plano
4. **Usa nombres descriptivos** para layouts (P01-Planta-Baja)
5. **Bloquea viewports** despues de configurar escala
6. **Usa objetos anotativos** para textos y cotas
7. **Manten consistencia** en configuraciones entre layouts

### 8.2 Errores Comunes a Evitar

- Dibujar a escala reducida en Model Space
- Cambiar escala de viewports despues de bloquear
- Mezclar elementos de presentacion en Model Space
- No bloquear viewports (causan cambios accidentales)
- Imprimir desde Model Space en proyectos complejos

---

## Ejercicio Practico 1

**Objetivo:** Dominar navegacion entre espacios.

**Tarea 1: Exploracion**
- Abrir dibujo existente
- Alternar entre pestana Model y Layout1
- Practicar MSPACE y PSPACE con doble clic
- Observar comportamiento del cursor UCS

**Tarea 2: Variables**
- Verificar valores de PSLTSCALE y MSLTSCALE
- Experimentar con TILEMODE (1 y 0)
- Observar diferencias visuales

**Tarea 3: Workflow Basico**
- Dibujar rectangulo de 10000x8000 mm en Model Space
- Cambiar a Layout1
- Observar viewport predeterminado
- Entrar al viewport (MSPACE)
- Salir del viewport (PSPACE)

**Tarea 4: Escalas**
- En Model Space, agregar texto de 250 unidades
- Verificar como se ve en Paper Space
- Crear texto anotativo de 2.5mm
- Comparar comportamiento

**Entregable:** Comprension de diferencias entre espacios.

---

## Evaluacion

**Pregunta 1:** A que escala debes dibujar siempre en Model Space?

**Pregunta 2:** Que comando activa Paper Space dentro de un layout?

**Pregunta 3:** Que valor debe tener TILEMODE para viewports flotantes?

**Pregunta 4:** Para que sirven los objetos anotativos?

**Pregunta 5:** Cuando es apropiado imprimir desde Model Space?

---

## Resumen

En esta leccion aprendiste:

- Diferencias entre Model Space y Paper Space
- Navegacion con MSPACE, PSPACE y TILEMODE
- Workflow profesional de dibujo
- Manejo de escalas en cada espacio
- Uso de objetos anotativos
- Mejores practicas

**Proxima Leccion:** Creacion y Configuracion de Layouts

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos explorando espacios
