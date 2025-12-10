# Lección 4: Selection Sets y Search Sets

**Duración:** 60 minutos
**Nivel:** Intermedio/Avanzado
**Módulo:** 1 - Introducción a Navisworks 2026
**Prerequisitos:** Lecciones 1-3 completadas, comprensión de Selection Tree

## Objetivos de Aprendizaje

✅ Navegar eficientemente el Selection Tree en todos sus modos de organización (Compact, Standard, Properties, Sets) para identificar elementos en modelos federados complejos

✅ Crear search sets avanzados con criterios múltiples, operadores booleanos, y expresiones regulares para encontrar objetos específicos basados en propiedades

✅ Guardar selection sets para workflows repetitivos de coordinación, clash detection, y análisis por disciplina o sistema

✅ Utilizar Quick Properties y Properties palette para inspeccionar propiedades detalladas de objetos y extraer información de coordinación

✅ Aplicar Appearance Profiler para control visual avanzado, colorización por propiedades, y comunicación visual de estados en el modelo federado

## Introducción

En modelos federados de proyectos reales, no es inusual tener 500,000 a 5,000,000 de elementos individuales: cada tubería, válvula, duct, fitting, beam, column, wall, window, equipment. Navegar manualmente este universo de objetos para encontrar "todos los ducts de 18x24 en el piso 3" o "todas las válvulas no etiquetadas" sería imposible. Las herramientas de búsqueda, selección y filtrado de Navisworks transforman esta complejidad en control preciso.

Los Search Sets y Selection Sets son fundamentales para coordinación BIM efectiva. Un coordinador profesional típicamente crea 20-50 sets permanentes en un proyecto: sets por disciplina (arquitectura, estructura, MEP), por sistema (ductwork, piping, electrical), por piso, por estado de construcción, por responsable. Estos sets se reutilizan constantemente en clash detection (Módulo 2), 4D simulation (Módulo 3), quantification, y reportes.

El Appearance Profiler permite comunicación visual instantánea: colorizar todos los elementos MEP según disciplina (azul=mecánico, rojo=plomería, amarillo=eléctrico), resaltar con transparencia objetos que no cumplen requisitos, o visualizar fases constructivas por color. Esta capacidad transforma modelos técnicos en herramientas de comunicación intuitivas para stakeholders no técnicos.

Esta lección es preparación directa para clash detection: los clash tests se configuran usando sets de objetos, y la eficiencia de coordinación depende de sets bien diseñados y organizados.

## 1. Selection Tree: Navegación Avanzada

El Selection Tree es la vista jerárquica completa de todos los objetos del modelo federado. Dominarlo es esencial para trabajo eficiente.

![Selection Tree modes](../imagenes/leccion-4-selection-tree-modes.png)

### 1.1 Modos de Visualización del Selection Tree

**Cambiar modo:**
- Clic en dropdown en la parte superior del Selection Tree panel
- Seleccionar modo deseado

**Compact Mode (Default):**
```
📁 Project
  📁 ARQ-Edificio.rvt
    📁 Walls
      ⬜ Basic Wall: Exterior - 300mm [ID 12345]
      ⬜ Basic Wall: Interior - 150mm [ID 12346]
    📁 Floors
    📁 Doors
  📁 EST-Edificio.rvt
  📁 MEP-Edificio.rvt
```

- **Estructura:** Organizado por archivo > categoría > tipo > instancias
- **Ventaja:** Vista condensada, fácil de navegar
- **Uso:** Navegación general, selección rápida

**Standard Mode:**
- Similar a Compact pero con más detalles expandidos por default
- Muestra propiedades adicionales en el árbol
- **Uso:** Cuando necesita ver más información sin expandir manualmente

**Properties Mode:**
```
📁 Category
  📁 Walls
    📁 Family
      📁 Basic Wall
        📁 Type
          📁 Exterior - 300mm
            ⬜ Instance [ID 12345]
  📁 Floors
  📁 Ducts
    📁 Rectangular Duct
      📁 18x24
        ⬜ Instance [ID 54321]
```

- **Estructura:** Organizado por Property > Value jerárquico
- **Ventaja:** Agrupa elementos por propiedades comunes
- **Uso:** Análisis de tipos, verificación de consistencia, identificación de variaciones

**Sets Mode:**
- Muestra Search Sets y Selection Sets como nodos en el árbol
- Útil para navegar entre sets guardados
- **Uso:** Trabajo con sets pre-definidos

### 1.2 Operaciones en el Selection Tree

**Expandir/Colapsar:**
- **+/-** : Expandir/colapsar nodo individual
- **Ctrl + Click en +**: Expandir nodo + todos los sub-nodos
- **Shift + Click en -**: Colapsar nodo + todos los sub-nodos

**Selección:**
- **Click simple**: Seleccionar objeto (se resalta en scene view)
- **Ctrl + Click**: Agregar a selección (multi-select)
- **Shift + Click**: Selección de rango (desde último seleccionado hasta click actual)
- **Ctrl + A** (con nodo seleccionado): Seleccionar todo dentro del nodo

**Navegación a objeto:**
- **Doble click** en objeto: Zoom y centra en ese objeto en scene view
- Muy útil para encontrar ubicación espacial de elementos identificados en búsqueda

**Menú contextual (clic derecho):**
- **Hide**: Ocultar objeto(s) seleccionado(s)
- **Hide Unselected**: Ocultar todo EXCEPTO selección (aísla selección)
- **Required**: Marcar como requerido (siempre visible)
- **Zoom**: Zoom a objeto(s)
- **Find Items**: Buscar en el árbol
- **Properties**: Ver propiedades completas
- **Add Selection Set**: Crear set desde selección actual

### 1.3 Find Items (Búsqueda Rápida)

**Función:**
Filtrar el Selection Tree para mostrar solo elementos que coinciden con término de búsqueda.

**Activar:**
- Clic en ícono de lupa 🔍 en Selection Tree
- O: Ctrl+F con Selection Tree activo

**Uso:**
1. Ingresar término de búsqueda (ej: "18x24")
2. Selection Tree filtra instantáneamente, mostrando solo nodos/objetos que contienen "18x24"
3. Expandir para ver contexto
4. Limpiar búsqueda para volver a vista completa

**Aplicaciones:**
- Buscar por ID de elemento (ej: Revit Element ID)
- Buscar por nombre de tipo (ej: "Rectangular Duct")
- Buscar por dimensión (ej: "300mm")
- Identificación rápida en modelos grandes

**Limitaciones:**
- Solo busca en NOMBRES/IDs visibles en el árbol
- NO busca en propiedades internas (para eso use Search Sets)

### 1.4 Quick Properties vs Properties Palette

**Quick Properties (vista condensada):**
- Ubicación: Properties panel (derecha superior)
- Muestra: Información clave resumida del objeto seleccionado
  - Display Name
  - Category
  - File Source
  - Layer
  - Type/Family
  - Bounding Box dimensions

**Properties Palette (vista completa):**
- Ubicación: Clic en tab "Properties" en Properties panel
- Muestra: TODAS las propiedades del objeto
- Organizadas en categorías expandibles:
  - **Element**: Propiedades básicas
  - **Item**: Información de archivo origen
  - **Geometry**: Dimensiones, volumen, área
  - **Material**: Materiales asignados
  - **Revit Properties** (si es archivo RVT): Todas las propiedades nativas de Revit
    - Type Properties
    - Instance Properties
    - Shared Parameters
    - Project Parameters

**Uso estratégico:**
- **Quick Properties**: Verificación rápida durante navegación
- **Properties Palette**: Análisis detallado, extracción de información para RFIs, validación de especificaciones

## 2. Search Sets: Búsqueda Avanzada de Objetos

Los **Search Sets** permiten buscar objetos basados en propiedades con criterios complejos, guardando la búsqueda para reutilizar.

![Search Sets](../imagenes/leccion-4-search-sets.png)

### 2.1 Crear Search Set Básico

**Escenario ejemplo:**
Encontrar todos los ducts rectangulares de dimensión 18x24 en el piso 3.

**Procedimiento:**

1. **Abrir Find Items:**
   - Home tab > Select & Search panel > Find Items
   - O: Ctrl+F (con scene view activo)

2. **Define Criteria:**
   - **Category**: Seleccionar "All" (o específico si conoce)
   - **Property**: Seleccionar "Category" (primera condición)
   - **Condition**: "Equals"
   - **Value**: "Ducts" (o como aparezca en su modelo)

3. **Add más criterios:**
   - Clic en "Add" (para AND condition)
   - **Property**: "Type" (o "Name")
   - **Condition**: "Contains"
   - **Value**: "18x24"

4. **Add criterio de nivel:**
   - Add
   - **Property**: "Level" (o "Layer" o "Reference Level")
   - **Condition**: "Equals"
   - **Value**: "Level 3" (o nombre en su modelo)

5. **Execute Search:**
   - Clic en "Find All"
   - Navisworks busca y SELECCIONA todos los objetos que cumplen criterios
   - Selection Tree filtra para mostrar solo resultados
   - Objetos se resaltan en scene view

6. **Save Search Set:**
   - En Find Items dialog, clic en "Save Search"
   - Nombre: "Ducts-18x24-Level3"
   - OK
   - Search set aparece en Sets palette

**Resultado:**
Search set guardado que puede ejecutar en cualquier momento para seleccionar esos objetos.

### 2.2 Propiedades Comunes para Búsqueda

**Propiedades universales (todos los objetos):**
- **Category**: Walls, Floors, Ducts, Pipes, Cable Trays, Structural Framing, etc.
- **Layer**: De archivos DWG
- **Item > Internal Name**: Nombre interno del objeto
- **Element > Name**: Display name

**Propiedades de Revit (archivos RVT):**
- **Category**: Categoría de Revit
- **Family**: Nombre de familia
- **Type**: Nombre de tipo
- **Level**: Nivel de Revit
- **Workset**: Workset de origen (si modelo workshared)
- Todos los parámetros: Type parameters, Instance parameters, Shared parameters

**Propiedades MEP:**
- **System Type**: Type of mechanical/plumbing/electrical system
- **System Name**: Nombre específico del sistema
- **Size/Diameter**: Para ducts, pipes
- **Flow/Pressure**: Parámetros de diseño
- **Voltage/Circuit** (electrical)

**Propiedades geométricas:**
- **Bounding Box**: Dimensiones de caja contenedora
- **Volume**: Volumen del elemento
- **Area**: Área de superficie
- **Length**: Longitud (para elementos lineales)

### 2.3 Operadores de Condición

**Equals (Igual a):**
- Coincidencia exacta
- Ejemplo: Level Equals "Level 2"

**Not Equals (No igual a):**
- Todo excepto valor especificado
- Ejemplo: Category Not Equals "Furniture"

**Contains (Contiene):**
- Valor CONTIENE substring
- Ejemplo: Type Contains "Rectangular" (encuentra "Rectangular Duct - 18x24", "Rectangular Duct - 24x36", etc.)
- Case insensitive (no distingue mayúsculas)

**Does Not Contain:**
- Valor NO contiene substring
- Ejemplo: Name Does Not Contain "Demo" (excluye elementos de demolición)

**Starts With:**
- Valor INICIA con substring
- Ejemplo: Type Starts With "Basic Wall" (encuentra todos los tipos de Basic Wall)

**Ends With:**
- Valor TERMINA con substring
- Ejemplo: Name Ends With "300mm"

**Greater Than / Less Than:**
- Para valores numéricos
- Ejemplo: Diameter Greater Than 100mm

**Between:**
- Rango numérico
- Ejemplo: Length Between 1000mm AND 5000mm

**Is Present / Is Not Present:**
- Propiedad existe o no existe
- Ejemplo: Comments Is Present (encuentra elementos con comments), útil para tracking

### 2.4 Operadores Booleanos (AND / OR)

**AND (Y):**
- Todos los criterios deben cumplirse
- Ejemplo: Category=Ducts AND Level=3 AND Size=18x24
- Resultado: Solo ducts que cumplen las TRES condiciones

**OR (O):**
- Al menos UN criterio debe cumplirse
- Ejemplo: Category=Ducts OR Category=Pipes
- Resultado: Todos los ducts MÁS todos los pipes

**Combinación AND/OR:**
- Criterios complejos
- Ejemplo:
  ```
  (Category=Ducts AND Level=3)
  OR
  (Category=Pipes AND Level=3)
  ```
- Resultado: Todos los ducts del piso 3 MÁS todos los pipes del piso 3

**Configurar en Navisworks:**
- Por default, múltiples criterios usan AND
- Para OR: Find Items > Clic en dropdown antes del criterio > Cambiar a "OR"

### 2.5 Search Sets Avanzados: Ejemplos Profesionales

**Ejemplo 1 - Todos los elementos MEP de un subcontratista:**
```
File Source Contains "MEP-Mechanical.rvt"
AND
System Type Equals "Supply Air"
```
Útil para: Aislar trabajo de subcontratista específico para revisión

**Ejemplo 2 - Equipos grandes que requieren análisis de izaje:**
```
Category Equals "Mechanical Equipment"
AND
Weight Greater Than 5000 kg
```
Útil para: Planificación de logística de construcción

**Ejemplo 3 - Elementos sin información de fabricante (QC check):**
```
Category Equals "Mechanical Equipment"
AND
Manufacturer Is Not Present
```
Útil para: Quality control, verificación de submittals

**Ejemplo 4 - Todos los elementos de fases futuras (exclusión de clash detection):**
```
Phase Created Equals "Phase 2"
```
Útil para: Excluir elementos no aplicables a fase actual de coordinación

**Ejemplo 5 - Tuberías de alta presión (requieren inspección especial):**
```
Category Equals "Pipes"
AND
Pressure Rating Greater Than 150 PSI
```
Útil para: Identificar sistemas críticos

### 2.6 Expresiones Regulares (Regex) en Search

Navisworks soporta expresiones regulares básicas para búsquedas complejas de texto.

**Ejemplo - Buscar ducts de rango de tamaños:**
```
Property: Type
Condition: Matches Regular Expression
Value: Rectangular Duct - (18|24|30)x(18|24|30)
```
Encuentra: Todos los ducts rectangulares con width y height de 18, 24, o 30 pulgadas.

**Ejemplo - Buscar elementos con IDs en rango:**
```
Property: Element ID
Condition: Matches Regular Expression
Value: ^12[0-9]{4}$
```
Encuentra: Elementos con IDs de 120000 a 129999.

**Nota:** Expresiones regulares son avanzadas. Para mayoría de casos, operadores estándar son suficientes.

## 3. Selection Sets: Guardar Selecciones

Los **Selection Sets** guardan una SELECCIÓN ACTUAL de objetos (no un criterio de búsqueda).

### 3.1 Diferencia: Search Sets vs Selection Sets

**Search Sets:**
- Guardan CRITERIOS de búsqueda
- Son DINÁMICOS: Si agrega elementos al modelo que cumplen criterios, aparecen automáticamente en el set al refresh
- Basados en propiedades
- Ejemplo: "Todos los ducts de 18x24" - si agrega más ducts 18x24, aparecen en el set

**Selection Sets:**
- Guardan LISTA ESPECÍFICA de objetos seleccionados
- Son ESTÁTICOS: Solo contienen los objetos que estaban seleccionados al crear el set
- Basados en IDs únicos de objetos
- Ejemplo: "Ducts-con-clashes-resueltos" - lista específica de 47 ducts, no cambia si agrega más ducts

**Cuándo usar cada uno:**
- **Search Sets**: Cuando el criterio es consistente (ej: disciplina, sistema, piso) y quiere incluir automáticamente elementos nuevos
- **Selection Sets**: Cuando la selección es ad-hoc (ej: objetos con clashes específicos, elementos de un RFI particular, items para revisión con arquitecto)

### 3.2 Crear Selection Set

**Procedimiento:**

1. **Seleccionar objetos:**
   - Use cualquier método: Click, window selection, search, selection tree
   - Ejemplo: Selecciona 25 ducts específicos con interferencias identificadas

2. **Crear Selection Set:**
   - Home tab > Select & Search panel > Save Selection
   - O: Clic derecho en scene view > Save Selection
   - O: Selection Tree > Clic derecho en objeto(s) seleccionado > Add Selection Set

3. **Nombrar:**
   - Nombre: "MEP-Ducts-Clash-Group-A"
   - Comments: "Ducts con clashes pendientes de resolver - Reunión 2024-11-25"

4. **Guardar:**
   - OK
   - Selection set aparece en Sets palette

**Usar Selection Set:**
- Sets palette > Doble click en selection set
- Navisworks selecciona esos objetos automáticamente
- Útil para: Regresar rápidamente a conjunto de objetos de interés

### 3.3 Editar Selection Sets

**Agregar objetos a Selection Set existente:**
1. Activar selection set (doble click en Sets palette)
2. Seleccionar objetos adicionales (Ctrl+Click)
3. Clic derecho en selection set > Update Selection Set

**Remover objetos:**
1. Activar selection set
2. Ctrl+Click en objetos a remover (deseleccionar)
3. Update Selection Set

**Rename/Delete:**
- Clic derecho en Sets palette > Rename / Delete

### 3.4 Combinar Sets

**Union (Unión):**
- Sets palette > Clic derecho > Combine Sets > Union
- Seleccionar dos o más sets
- Resultado: Nuevo set con TODOS los objetos de ambos sets (A + B)

**Intersection (Intersección):**
- Combine Sets > Intersection
- Resultado: Nuevo set con solo objetos que están en AMBOS sets (A ∩ B)
- Útil para: Encontrar objetos que cumplen múltiples criterios

**Difference (Diferencia):**
- Combine Sets > Difference
- Resultado: Objetos en A que NO están en B (A - B)
- Útil para: Excluir subconjuntos

**Ejemplo práctico:**
- Set A: "All-Ducts-Level-3" (search set)
- Set B: "Ducts-Already-Coordinated" (selection set)
- Operación: Difference (A - B)
- Resultado: "Ducts-Level-3-Pending-Coordination" (ducts que aún necesitan coordinación)

## 4. Appearance Profiler: Control Visual Avanzado

El **Appearance Profiler** permite controlar la apariencia visual de objetos basándose en propiedades, transformando modelos en herramientas de comunicación visual.

![Appearance Profiler](../imagenes/leccion-4-appearance-profiler.png)

### 4.1 Concepto de Appearance Profiler

**Función:**
Definir REGLAS de apariencia: "Si un objeto cumple X condición, aplicar Y apariencia (color, transparencia)".

**Casos de uso:**
- Colorizar por disciplina (azul=mecánico, rojo=plomería, amarillo=eléctrico)
- Transparentar elementos no críticos para enfocar en sistemas de interés
- Resaltar elementos con problemas (ej: sin información de fabricante = rojo)
- Visualizar fases constructivas por color
- Diferenciar sistemas por presión/voltaje/función

### 4.2 Crear Appearance Profile

**Procedimiento:**

1. **Abrir Appearance Profiler:**
   - Viewpoint tab > Appearance panel > Appearance Profiler
   - O: View menu > Appearance Profiler

2. **Crear nuevo Profile:**
   - Clic en "New" (nuevo profile)
   - Nombre: "Colorizar-por-Disciplina-MEP"

3. **Add Definition (regla):**
   - Clic en "Add" para crear primera regla
   - **Name**: "Mechanical - Azul"

4. **Define Selection (criterio):**
   - Clic en "Edit" junto a Selection
   - Define criterios (igual que Search Set):
     - Category Equals "Ducts"
     - OR Category Equals "Mechanical Equipment"
   - OK

5. **Define Appearance:**
   - **Color**: Seleccionar azul (ej: RGB 0, 120, 215)
   - **Transparency**: 0% (opaco) o ajustar si necesita
   - **Line Color/Weight**: Opcional

6. **Add más definiciones:**
   - Repetir para otras disciplinas:
     - "Plumbing - Rojo": Category=Pipes OR Category=Plumbing Fixtures, Color=Rojo
     - "Electrical - Amarillo": Category=Cable Trays OR Category=Conduits, Color=Amarillo
     - "Arquitectura - Gris claro": File Source Contains "ARQ", Color=Gris, Transparency=70%

7. **Apply Profile:**
   - Clic en "Apply"
   - Modelo se coloriza según reglas definidas

8. **Save Profile:**
   - Clic en "Save"
   - Profile guardado para reutilizar

### 4.3 Appearance Properties

**Color:**
- RGB selector
- Rango: 0-255 por canal
- Define color sólido de objetos

**Transparency:**
- Rango: 0% (opaco) a 100% (invisible)
- Útil para: "Ghost" elementos secundarios, enfocar en sistemas críticos

**Original Color:**
- Mantiene color original del archivo nativo
- Útil cuando combinado con transparencia

**Line Color:**
- Color de aristas/líneas del objeto
- Para display styles con edges visible

**Line Weight:**
- Grosor de líneas
- Útil para resaltar contornos

**Textures:**
- Aplicar/remover texturas
- Generalmente OFF para análisis técnico

### 4.4 Appearance Profiler: Ejemplos Profesionales

**Ejemplo 1 - Colorizar por Sistema MEP:**
```
Definición 1: Supply Air (Azul claro)
  - System Type = "Supply Air"
  - Color: RGB(135, 206, 250)

Definición 2: Return Air (Azul oscuro)
  - System Type = "Return Air"
  - Color: RGB(0, 0, 139)

Definición 3: Hot Water (Rojo)
  - System Type = "Domestic Hot Water"
  - Color: RGB(220, 20, 60)

Definición 4: Cold Water (Azul)
  - System Type = "Domestic Cold Water"
  - Color: RGB(30, 144, 255)

Definición 5: Electrical (Amarillo)
  - Category = "Conduits" OR "Cable Trays"
  - Color: RGB(255, 215, 0)
```

**Ejemplo 2 - Transparentar Arquitectura, Enfocar MEP:**
```
Definición 1: Arquitectura - Transparente
  - File Source Contains "ARQ"
  - Transparency: 80%
  - Color: Gris claro

Definición 2: Estructura - Semi-transparente
  - File Source Contains "EST"
  - Transparency: 60%
  - Color: Gris

Definición 3: MEP - Opaco
  - File Source Contains "MEP"
  - Transparency: 0%
  - Original Color
```
Resultado: ARQ/EST como contexto "ghost", MEP completamente visible.

**Ejemplo 3 - QC Visual: Elementos Sin Fabricante:**
```
Definición 1: Equipos SIN fabricante - ROJO (alerta)
  - Category = "Mechanical Equipment"
  - Manufacturer Is Not Present
  - Color: RGB(255, 0, 0)
  - Transparency: 0%

Definición 2: Equipos CON fabricante - Verde
  - Category = "Mechanical Equipment"
  - Manufacturer Is Present
  - Color: RGB(0, 255, 0)
  - Transparency: 50%
```
Resultado: Visual instant QC check.

**Ejemplo 4 - Fases de Construcción:**
```
Definición 1: Fase 1 - Verde
  - Phase Created = "Phase 1"
  - Color: Verde

Definición 2: Fase 2 - Amarillo
  - Phase Created = "Phase 2"
  - Color: Amarillo

Definición 3: Fase 3 - Rojo
  - Phase Created = "Phase 3"
  - Color: Rojo
```
Útil para: Visualizar qué se construye cuándo.

### 4.5 Aplicar, Desactivar, y Gestionar Profiles

**Aplicar Profile:**
- Appearance Profiler > Seleccionar profile > Apply
- O: Viewpoint tab > Appearance panel > Select profile de dropdown

**Desactivar (volver a colores originales):**
- Appearance Profiler > Clic en "Clear Override"
- O: Viewpoint tab > Appearance panel > Clear All

**Guardar Profile con Viewpoint:**
- Al crear Saved Viewpoint, si tiene Appearance Profile activo, se guarda con el viewpoint
- Al abrir viewpoint, appearance profile se aplica automáticamente

**Exportar/Importar Profiles:**
- Appearance Profiler > Export > Guardar .xml
- En otro proyecto: Import > Cargar .xml
- Útil para: Estándares de empresa, reutilización entre proyectos

## 5. Hide, Required, Override: Gestión de Visibilidad

Navisworks ofrece tres estados de visibilidad que permiten control preciso de qué se muestra.

### 5.1 Estados de Visibilidad

**Normal (Default):**
- Objeto visible normalmente
- Puede ocultarse temporalmente

**Hidden:**
- Objeto oculto
- No se renderiza
- No aparece en selecciones

**Required:**
- Objeto SIEMPRE visible
- No puede ocultarse incluso si se ejecuta "Hide All"
- Útil para: Grids, reference elements que deben permanecer visibles

**Override (con Appearance Override):**
- Objeto tiene apariencia custom (del Appearance Profiler)
- Sobrescribe color original

### 5.2 Ocultar Objetos (Hide)

**Hide Selection:**
1. Seleccionar objeto(s) a ocultar
2. Home tab > Visibility panel > Hide
3. O: Clic derecho > Hide
4. O: Presionar H

**Hide Unselected (Aíslar selección):**
1. Seleccionar objeto(s) que desea VER
2. Home tab > Visibility panel > Hide Unselected
3. Todo excepto selección se oculta
4. Útil para: Análisis de sistema específico sin distracciones

**Hide Category:**
- Selection Tree > Clic derecho en categoría (ej: "Furniture")
- Hide
- Toda la categoría se oculta

**Unhide All:**
- Home tab > Visibility panel > Unhide All
- O: Ctrl+Shift+U
- Restaura visibilidad de todo

### 5.3 Required Objects

**Marcar como Required:**
1. Seleccionar objetos que deben permanecer SIEMPRE visibles (ej: Grids, Site)
2. Home tab > Visibility panel > Required
3. Objetos marcados con ícono especial en Selection Tree

**Uso típico:**
- **Grids**: Para orientación espacial constante
- **Levels**: Referencia de pisos
- **Site context**: Terreno, edificios adyacentes
- **Key reference objects**: Ejes de coordenadas, benchmarks

**Clear Required:**
- Seleccionar objetos Required
- Home tab > Visibility panel > Clear Required
- Vuelven a estado Normal

### 5.4 Workflow de Visibilidad para Coordinación

**Escenario típico: Análisis de MEP en cielo raso piso 3**

1. **Ocultar disciplinas no relevantes:**
   - Selection Tree > Clic derecho en "ARQ-Edificio.rvt" > Hide
   - Clic derecho en "EST-Edificio.rvt" > Hide

2. **Marcar grids como Required (antes de ocultar):**
   - Buscar grids en Selection Tree
   - Seleccionar todos
   - Required
   - Ahora grids permanecen visibles incluso si oculta arquitectura

3. **Aislar piso 3:**
   - Search Set: Level Equals "Level 3"
   - Seleccionar resultados
   - Hide Unselected
   - Solo piso 3 visible

4. **Enfocar en Mechanical:**
   - Search Set: Category = Ducts OR Mechanical Equipment
   - Hide Unselected (dentro del piso 3)

5. **Guardar como Viewpoint:**
   - Save Viewpoint: "MEP-Mechanical-Level3-Isolated"
   - Visibilidad se guarda con el viewpoint

**Resultado:**
Vista limpia de solo sistemas mecánicos del piso 3, con grids para referencia, sin distracción de otras disciplinas.

## Ejercicio Práctico

**Duración:** 20 minutos

**Escenario:**
Usted es coordinador MEP de un edificio de oficinas. Necesita preparar search sets y appearance profiles para el proceso de coordinación semanal.

**Pasos:**

1. **Crear Search Set - Todos los Ducts Rectangulares:**
   - Home tab > Find Items
   - Criterios:
     - Category Equals "Ducts"
     - Type Contains "Rectangular"
   - Find All
   - Save Search: "MEP-All-Rectangular-Ducts"

2. **Crear Search Set - Pipes de Agua Fría > 4 pulgadas:**
   - Find Items (nuevo)
   - Criterios:
     - Category Equals "Pipes"
     - System Type Equals "Domestic Cold Water" (o equivalente)
     - Size Greater Than 100mm (o 4")
   - Save Search: "Plumbing-CW-Pipes-Large"

3. **Crear Search Set - Equipos Mecánicos Sin Manufacturer:**
   - Find Items
   - Criterios:
     - Category Equals "Mechanical Equipment"
     - Property "Manufacturer" Is Not Present
   - Save Search: "QC-Equip-No-Manufacturer"

4. **Crear Selection Set Ad-hoc:**
   - Navegar por el modelo y seleccionar manualmente 5-10 objetos de interés (cualquier tipo)
   - Home tab > Save Selection
   - Nombre: "Items-for-RFI-025"
   - Comments: "Elementos que requieren aclaración de arquitecto"

5. **Crear Appearance Profile - Colorizar por Disciplina:**
   - Viewpoint tab > Appearance Profiler
   - New Profile: "Disciplinas-MEP-Color"
   - Add Definition:
     - Name: "Mechanical-Azul"
     - Selection: Category=Ducts OR Category=Mechanical Equipment
     - Color: Azul (RGB 0, 120, 215)
   - Add Definition:
     - Name: "Plumbing-Rojo"
     - Selection: Category=Pipes OR Category=Plumbing Fixtures
     - Color: Rojo (RGB 220, 20, 60)
   - Add Definition:
     - Name: "Electrical-Amarillo"
     - Selection: Category=Conduits OR Category=Cable Trays
     - Color: Amarillo (RGB 255, 215, 0)
   - Add Definition:
     - Name: "Arquitectura-Transparente"
     - Selection: File Source Contains "ARQ"
     - Transparency: 80%
     - Color: Gris claro
   - Apply Profile
   - Observar modelo colorizado
   - Save Profile

6. **Crear Viewpoint con Appearance Profile:**
   - Con profile activo, navegar a vista isométrica del modelo
   - Save Viewpoint: "OVERVIEW-Color-By-Discipline"
   - Confirmar que appearance profile se guarda con viewpoint

7. **Usar Hide/Required:**
   - Identificar grids en Selection Tree
   - Seleccionar todos los grids
   - Home tab > Required
   - Selection Tree > Clic derecho en "EST-Edificio.rvt" > Hide
   - Confirmar que estructura está oculta pero grids permanecen visibles
   - Unhide All para restaurar

**Resultado esperado:**
- 3 Search Sets guardados y funcionales en Sets palette
- 1 Selection Set ad-hoc guardado
- 1 Appearance Profile completo con 4 definiciones
- 1 Viewpoint con appearance profile aplicado
- Comprensión de Required para mantener objetos de referencia visibles

## Evaluación

1. **Pregunta 1:** Explique la diferencia fundamental entre Search Sets y Selection Sets, y proporcione un ejemplo de cuándo usar cada uno en coordinación BIM.

   **Respuesta:** Search Sets guardan CRITERIOS de búsqueda basados en propiedades y son DINÁMICOS (si se agregan elementos que cumplen criterios, aparecen automáticamente en el set al refresh). Selection Sets guardan una LISTA ESPECÍFICA de objetos seleccionados por sus IDs únicos y son ESTÁTICOS (solo contienen los objetos que estaban seleccionados al crear el set, no cambia con refresh). Ejemplo Search Set: "Todos-Ducts-18x24" - criterio basado en category y size, cualquier duct 18x24 agregado posteriormente aparece automáticamente, útil para clash tests por sistema. Ejemplo Selection Set: "Ducts-Clash-Group-A-Resolved" - lista específica de 25 ducts con clashes particulares ya resueltos, no debe cambiar, útil para tracking de resolución de interferencias específicas o elementos de RFIs particulares.

2. **Pregunta 2:** Describa cómo configurar un Search Set avanzado para encontrar todos los equipos mecánicos mayores a 2000 kg en pisos 3 y 4 que NO tienen información de fabricante.

   **Respuesta:** Procedimiento: (1) Home tab > Find Items; (2) Configurar criterios: Criterio 1: Category Equals "Mechanical Equipment" (AND); Criterio 2: Weight Greater Than 2000 kg (AND); Criterio 3: Level Equals "Level 3" (OR - cambiar dropdown); Criterio 4: Level Equals "Level 4" (AND - vuelve a AND después del grupo OR); Criterio 5: Property "Manufacturer" Is Not Present; (3) Find All para ejecutar búsqueda; (4) Save Search con nombre descriptivo "QC-Heavy-Equip-L3-L4-No-Manufacturer". Este search set es útil para quality control pre-submittal, identificando equipos críticos (pesados, requieren logística especial) que faltan información de fabricante. Los operadores booleanos permiten buscar en múltiples niveles (3 OR 4) mientras aplican condiciones complejas (peso AND ausencia de manufacturer).

3. **Pregunta 3:** ¿Qué es el Appearance Profiler y cómo se utiliza para comunicación visual efectiva en coordinación BIM? Proporcione un ejemplo de perfil útil.

   **Respuesta:** Appearance Profiler permite definir REGLAS de apariencia basadas en propiedades: "Si objeto cumple X condición, aplicar Y apariencia (color, transparencia)". Transforma modelos técnicos en herramientas de comunicación visual intuitivas. Ejemplo perfil útil "MEP-Systems-Visual-Coordination": Definición 1: Supply Air ducts = Azul claro (System Type = Supply Air); Definición 2: Return Air ducts = Azul oscuro; Definición 3: Hot Water pipes = Rojo; Definición 4: Cold Water pipes = Azul; Definición 5: Electrical conduits = Amarillo; Definición 6: Arquitectura = Gris 80% transparente (File Source Contains ARQ); Definición 7: Estructura = Gris 60% transparente. Resultado: Disciplinas de soporte son contexto "ghost", sistemas MEP claramente diferenciados por función usando color coding intuitivo (rojo=caliente, azul=frío, amarillo=eléctrico), facilitando identificación instantánea de sistemas en revisiones con stakeholders no técnicos.

4. **Pregunta 4:** Explique el concepto de "Required" objects en Navisworks y proporcione un workflow típico usando Hide, Required y Hide Unselected para análisis MEP.

   **Respuesta:** "Required" objects son elementos marcados como SIEMPRE visibles que no pueden ocultarse incluso con "Hide All", útil para mantener referencias críticas (grids, levels, site) visibles durante análisis. Workflow típico análisis MEP cielo raso: (1) ANTES de ocultar nada, identificar y seleccionar grids/levels en Selection Tree; (2) Home tab > Required (marca estos como siempre visibles); (3) Ocultar disciplinas no relevantes: clic derecho en ARQ/EST en Project Browser > Hide; (4) Crear Search Set para aislar piso específico: Level Equals "Level 3"; (5) Seleccionar resultados > Hide Unselected (solo piso 3 visible); (6) Crear Search Set MEP: Category=Ducts OR Pipes OR Cable Trays; (7) Hide Unselected (solo MEP visible); (8) Resultado: Vista limpia de solo sistemas MEP piso 3, CON grids/levels permaneciendo visibles para orientación espacial; (9) Save Viewpoint con configuración de visibilidad. Required previene accidental ocultamiento de referencias críticas.

5. **Pregunta 5:** ¿Cómo combinaría Search Sets y Selection Sets usando operaciones booleanas para identificar elementos que requieren atención inmediata en coordinación?

   **Respuesta:** Usar operaciones Union, Intersection y Difference en Sets palette. Ejemplo workflow: (1) Crear Search Set A "All-MEP-Level-3": Category=Ducts OR Pipes OR Conduits AND Level=3 (búsqueda dinámica de todo MEP piso 3); (2) Crear Selection Set B "MEP-Already-Coordinated-Level-3": selección manual de 150 elementos MEP ya coordinados en reuniones previas (estático); (3) Sets palette > Combine Sets > Difference (A - B); (4) Resultado: Nuevo set "MEP-Level-3-Pending-Coordination" = elementos MEP piso 3 que AÚN NO han sido coordinados; (5) Alternativamente, crear Search Set C "High-Priority-Systems": System Type=Fire Protection OR System Type=Emergency Power; (6) Combine Sets > Intersection (Set-Pending ∩ Set-High-Priority); (7) Resultado: Elementos pendientes de coordinación que son sistemas de alta prioridad, requieren atención inmediata. Estas operaciones permiten análisis complejo combinando criterios dinámicos (search) con tracking manual (selection).

## Resumen

En esta lección hemos dominado las herramientas de búsqueda, selección y control visual en Navisworks 2026:

- Exploramos el Selection Tree en todos sus modos (Compact, Standard, Properties, Sets) y aprendimos a navegar eficientemente modelos con millones de elementos usando Find Items, expansión/colapso estratégico, y acceso a propiedades mediante Quick Properties y Properties palette completa.

- Creamos Search Sets avanzados con criterios múltiples, operadores de condición (Equals, Contains, Greater Than, Is Present), operadores booleanos (AND/OR), y búsquedas complejas para identificar objetos específicos basándose en propiedades. Comprendimos que Search Sets son dinámicos y se actualizan automáticamente al refresh del modelo.

- Creamos Selection Sets para guardar listas específicas de objetos seleccionados, útiles para tracking de resolución de clashes, elementos de RFIs, o cualquier agrupación ad-hoc que no se basa en propiedades consistentes. Aprendimos operaciones booleanas (Union, Intersection, Difference) para combinar sets.

- Aplicamos Appearance Profiler para crear reglas de visualización basadas en propiedades, transformando modelos técnicos en herramientas de comunicación visual mediante colorización por disciplina/sistema, transparentación de contexto, y resaltado de elementos críticos o problemáticos.

- Gestionamos visibilidad con Hide, Required, y Override, creando workflows de análisis enfocado donde disciplinas no relevantes se ocultan, referencias críticas (grids) permanecen visibles mediante Required, y sistemas de interés se aíslan con Hide Unselected.

Estas habilidades son preparación directa para Clash Detection (Módulo 2) donde configuraremos tests usando search sets, gestionaremos visibilidad para análisis de interferencias, y comunicaremos hallazgos con appearance profiles.

## Próxima Lección

En la **Lección 5: Visualización y Apariencia** profundizaremos en display styles (shaded, realistic, presentation), configuración avanzada de iluminación (scene lights, shadows), aplicación de materiales y texturas fotorrealísticos con Presenter library, render settings para calidad óptima, configuración de backgrounds (gradient, HDRI), y técnicas de real-time rendering para presentaciones de alta calidad a clientes y stakeholders.
