# Leccion 4: Niveles y Grillas

![Levels and Grids](../imagenes/leccion4-niveles-grillas.png)

**Duracion:** 1 hora
**Dificultad:** Principiante

---

## Introduccion

Los **niveles** y **grillas** son elementos fundamentales de referencia en Revit. Los niveles definen planos horizontales donde se alojan pisos, techos y otros elementos, mientras que las grillas crean un sistema de coordenadas para organizar el edificio y facilitar la ubicacion de elementos estructurales y arquitectonicos.

---

## Niveles (Levels)

### Que es un Nivel?

Un **nivel** es un **plano de referencia horizontal** infinito que:
- Define alturas en el edificio
- Aloja plantas arquitectonicas
- Vincula elementos (muros, pisos, techos)
- Organiza el proyecto verticalmente

### Concepto Clave

```
Level RF +12.00m  ← Techo
Level 3  +9.00m   ← Piso 3
Level 2  +6.00m   ← Piso 2
Level 1  +3.00m   ← Piso 1
Level 0  +0.00m   ← Planta Baja (Datum)
Level -1 -3.00m   ← Sotano
```

**Punto de referencia:** Level 0 generalmente es nivel de calle o planta baja (+0.00m).

---

## Crear Niveles

### Metodo 1: Comando Level

`Architecture > Datum > Level` (Atajo: `LL`)

![Create Level](../imagenes/leccion4-crear-nivel.png)

**Pasos:**
1. Abrir vista de Elevacion o Corte
2. Activar comando `Level`
3. Click punto inicial (izquierda)
4. Mover a derecha
5. Click punto final
6. Nombre automatico: "Level X"
7. Enter para finalizar

**Opciones en barra de opciones:**
- **Make Plan View:** ✓ Crea vista de planta automaticamente
- **Offset:** Distancia del ultimo nivel

### Metodo 2: Copy Existing Level

1. Seleccionar nivel existente
2. `CO` (Copy)
3. Click punto base
4. Mover hacia arriba/abajo
5. Escribir distancia exacta (ej: 3000 para 3m)
6. Enter

### Metodo 3: Array Levels

Para crear multiples niveles equidistantes:

1. Seleccionar nivel base
2. `AR` (Array)
3. Seleccionar "Linear"
4. Number: cantidad de niveles
5. Move To: 2nd (distancia al segundo)
6. Ingresar distancia (ej: 3000)
7. Enter

**Ejemplo:** Crear 5 pisos a 3m de altura
- Array: 5 niveles
- Distancia: 3000mm

---

## Propiedades de Niveles

Seleccionar nivel > Properties

![Level Properties](../imagenes/leccion4-prop-nivel.png)

### Parametros Principales

**Name:** Nombre del nivel
- Ejemplos: "Level 0", "Planta Baja", "PB", "Ground Floor"

**Elevation:** Altura absoluta
- Base: Level 0 = 0.00m
- Level 1 = +3.00m
- Level -1 = -3.00m

**Computation Height:** Altura para calculos (energeticos, volumenes)

**Structural:** ✓ Si es nivel estructural
- Usado en analisis estructural
- Vincula elementos estructurales

**Building Story:** ✓ Si es piso habitable
- Para calculos de areas
- Excluye entrepisos tecnicos

**Scope Box:** Asignar a grupo de niveles

---

## Modificar Niveles

### Cambiar Altura de Nivel

**Metodo 1: Editar valor**
1. Seleccionar nivel
2. Click en cota de elevacion
3. Escribir nueva altura
4. Enter

**Metodo 2: Mover graficamente**
1. Seleccionar nivel
2. Arrastrar con mouse
3. O usar grips (puntos azules)

⚠️ **IMPORTANTE:**
Al cambiar altura de nivel, todos los elementos vinculados se mueven automaticamente.

### Renombrar Nivel

1. Seleccionar nivel
2. Properties > Name
3. Escribir nuevo nombre
4. OK

⚠️ **Vistas vinculadas tambien cambian de nombre**

### Propagar Niveles en Vistas

**Bubble (Burbuja del nivel):**
- Click derecho en burbuja
- "Maximize 3D Extents": Extiende linea a todo el modelo

**Extremos:**
Los niveles tienen extremos (grips) que se pueden extender en elevaciones y cortes.

---

## Vinculos de Elementos con Niveles

### Elementos que se Vinculan a Niveles

**Base Constraint (Restriccion de base):**
- Walls (Muros)
- Columns (Columnas)
- Floors (Pisos)
- Ceilings (Cielos)
- Roofs (Techos)

**Top Constraint (Restriccion superior):**
- Walls (altura)
- Columns (altura)

### Ejemplo: Muro Vinculado

```
Properties de Muro:
- Base Constraint: Level 0
- Base Offset: 0mm
- Top Constraint: Level 1
- Top Offset: 0mm
- Unconnected Height: 3000mm
```

**Significado:**
El muro va desde Level 0 hasta Level 1 (3 metros de altura).

Si cambias Level 1 a +3.50m, el muro crece automaticamente a 3.5m.

---

## Grillas (Grids)

### Que es una Grilla?

Una **grilla** es un **plano de referencia vertical** infinito que:
- Crea sistema de coordenadas
- Organiza estructura
- Facilita ubicacion de elementos
- Sistema de nomenclatura (A-1, A-2, B-1, etc.)

### Sistema Tipico de Grillas

```
    1       2       3       4
  ╎       ╎       ╎       ╎
A ═══════════════════════════ A
  ╎       ╎       ╎       ╎
B ═══════════════════════════ B
  ╎       ╎       ╎       ╎
C ═══════════════════════════ C
  ╎       ╎       ╎       ╎
    1       2       3       4
```

**Nomenclatura:**
- **Horizontal:** Letras (A, B, C...)
- **Vertical:** Numeros (1, 2, 3...)
- **Intersecciones:** A-1, B-2, C-3 (ubicacion de columnas)

---

## Crear Grillas

### Grilla Lineal

`Architecture > Datum > Grid` (Atajo: `GR`)

![Create Grid](../imagenes/leccion4-crear-grilla.png)

**Pasos:**
1. Abrir vista de planta
2. Activar comando `Grid`
3. Click punto inicial
4. Click punto final
5. Nombre automatico: "1", "2", etc.
6. Enter para finalizar

**Opciones:**
- **Offset:** Distancia entre grillas en array

### Grilla Radial

Para edificios circulares o con geometria radial.

`Grid > Draw panel > Radial Grid`

**Pasos:**
1. Activar Grid Radial
2. Click centro
3. Click radio inicial
4. Definir angulos

---

## Propiedades de Grillas

Seleccionar grilla > Properties

### Parametros Principales

**Name:** Nombre de grilla
- Horizontal: A, B, C, D...
- Vertical: 1, 2, 3, 4...
- Alternativo: A.1, A.2 (subgrillas)

**Center (Scope Box):** Asociar a Scope Box

**Subcategory:** Tipo de grilla

---

## Modificar Grillas

### Extender Grilla

1. Seleccionar grilla
2. Usar grips (puntos azules) en extremos
3. Arrastrar para extender/acortar

### Propagar Grilla a Otras Vistas

**Bubble (Burbujas):**
Las grillas tienen burbujas en extremos que se pueden activar/desactivar por vista.

**Click derecho en burbuja:**
- 3D Extents: Mostrar en todas las vistas
- Maximize 3D Extents: Extender completamente

### Copiar Grillas

**Metodo 1: Copy**
1. Seleccionar grilla
2. `CO`
3. Definir distancia

**Metodo 2: Array**
1. Seleccionar grilla
2. `AR` (Array)
3. Linear
4. Number: cantidad
5. Distance: espaciamiento (ej: 6000mm para 6m)

**Ejemplo:** Crear grillas A, B, C, D cada 6 metros
1. Crear grilla A
2. Array: 4 grillas, 6000mm
3. Renombrar: A, B, C, D

---

## Nomenclatura de Grillas

### Sistema Estandar

**Grillas Horizontales (paralelas al eje Y):**
- Letras: A, B, C, D...
- Si pasan de Z: AA, AB, AC...

**Grillas Verticales (paralelas al eje X):**
- Numeros: 1, 2, 3, 4...

### Subgrillas (Grillas Secundarias)

Para estructuras complejas:
- A.1, A.2 (entre A y B)
- 1.1, 1.2 (entre 1 y 2)

### Renombrar Grillas

1. Seleccionar grilla
2. Click en etiqueta (burbuja)
3. Escribir nuevo nombre
4. Enter

---

## Scope Box

![Scope Box](../imagenes/leccion4-scope-box.png)

### Que es un Scope Box?

Contenedor 3D que agrupa niveles, grillas y vistas relacionadas.

**Beneficios:**
- Organizar proyecto grande en sectores
- Controlar extension de niveles/grillas por zona
- Facilitar trabajo en proyectos complejos

### Crear Scope Box

`View > Scope Box`

**Pasos:**
1. Activar comando Scope Box
2. Dibujar rectangulo en planta
3. Nombrar Scope Box
4. Asignar niveles y grillas al Scope Box

**Ejemplo de uso:**
Proyecto con 3 torres:
- Scope Box "Torre A"
- Scope Box "Torre B"
- Scope Box "Torre C"

Cada torre con sus propios niveles y grillas independientes.

---

## Mejores Practicas

### Niveles

✅ **Nomenclatura clara y consistente**
```
BIEN:
- Level 0 (Planta Baja)
- Level 1 (Piso 1)
- Level 2 (Piso 2)
- Level RF (Roof/Techo)

MAL:
- sdfsdf
- nivel nuevo
- Copy of Level 1
```

✅ **Usar altura entrepiso estandar:** 3.00m residencial, 3.50-4.00m comercial

✅ **Marcar niveles estructurales:** Activar parametro "Structural"

✅ **No eliminar niveles con elementos vinculados:** Revit no lo permite

✅ **Extender niveles en todas las vistas:** Para visibilidad completa

### Grillas

✅ **Sistema consistente:** Letras horizontales, numeros verticales

✅ **Espaciamiento estructural:** 6m, 7.5m, 8m (modulos estructurales)

✅ **Extender grillas mas alla del edificio:** Para claridad en planos

✅ **Usar burbujas en extremos opuestos:** Norte/Sur para horizontales, Este/Oeste para verticales

✅ **Grillas continuas cuando sea posible:** No fragmentar innecesariamente

---

## Sistemas de Referencia Adicionales

### Reference Planes

`Architecture > Work Plane > Ref Plane`

![Reference Planes](../imagenes/leccion4-ref-plane.png)

**Uso:**
- Referencias temporales
- Guias de modelado
- Simetrias
- Crear familias

**Diferencia con Grids:**
- Ref Planes: Temporales, no aparecen en planos
- Grids: Permanentes, aparecen en documentacion

---

## Ejercicios Practicos

### Ejercicio 4.1: Sistema de Niveles (20 min)

**Objetivo:** Crear sistema completo de niveles

**Edificio residencial de 5 pisos:**
1. Level -1 (Sotano): -3.00m
2. Level 0 (PB): 0.00m
3. Level 1: +3.00m
4. Level 2: +6.00m
5. Level 3: +9.00m
6. Level 4: +12.00m
7. Level RF (Techo): +15.00m

**Metodo:**
- Usar Array para niveles repetitivos
- Configurar "Make Plan View" ✓
- Marcar Level 0, 1, 2, 3, 4 como "Building Story"
- Marcar Level -1, 0, 1, 2, 3, 4 como "Structural"

### Ejercicio 4.2: Sistema de Grillas (20 min)

**Objetivo:** Crear grillas para edificio estructurado

**Sistema 4x3:**
```
Grillas Horizontales (cada 6m):
- A, B, C, D

Grillas Verticales (cada 7m):
- 1, 2, 3
```

**Pasos:**
1. Crear grilla A horizontal
2. Array 4 grillas cada 6000mm
3. Renombrar A, B, C, D
4. Crear grilla 1 vertical
5. Array 3 grillas cada 7000mm
6. Renombrar 1, 2, 3
7. Extender grillas 2m mas alla de intersecciones

### Ejercicio 4.3: Modificacion de Niveles (10 min)

**Objetivo:** Comprender vinculos de niveles

1. Crear muro desde Level 0 a Level 1
2. Cambiar Level 1 de +3.00m a +3.50m
3. **Observar:** Muro crece automaticamente
4. Cambiar de vuelta a +3.00m
5. Crear piso en Level 1
6. Cambiar altura Level 1
7. **Observar:** Piso tambien se mueve

### Ejercicio 4.4: Scope Box (10 min)

**Objetivo:** Organizar con Scope Box

**Proyecto con 2 bloques:**
1. Crear Scope Box "Bloque A"
2. Crear Scope Box "Bloque B"
3. Asignar grillas A-D al Bloque A
4. Asignar grillas E-H al Bloque B
5. Asignar niveles correspondientes

---

## Tips Avanzados

### Ajuste Fino de Niveles

**Offset desde nivel:**
Si necesitas un elemento ligeramente arriba/abajo del nivel:
- No crear nivel nuevo
- Usar "Base Offset" o "Top Offset"

**Ejemplo:**
Dintel de puerta a 2.10m en nivel de 3.00m:
- Top Offset: -900mm (3.00m - 2.10m = 0.90m abajo)

### Niveles No Habitables

Para entrepisos tecnicos o niveles sin plantas:
- Crear nivel
- NO marcar "Building Story"
- NO crear "Make Plan View"

**Ejemplo:** Nivel de instalaciones entre pisos

### Grillas Arquitectonicas vs Estructurales

En proyectos complejos:
- **Grillas estructurales:** Ejes de columnas (nombre con numeros/letras)
- **Grillas arquitectonicas:** Referencias de fachada (nombre con prefijo "ARQ-")

---

## Atajos de Teclado

| Atajo | Comando |
|-------|---------|
| `LL` | Level |
| `GR` | Grid |
| `RP` | Reference Plane |
| `CO` | Copy |
| `AR` | Array |

---

## Recursos

### Archivos de Practica

- `M1L4_Niveles-Base.rvt`
- `M1L4_Grillas-Ejercicio.rvt`
- `M1L4_Sistema-Completo.rvt`

---

## Navegacion

[← Leccion 3](./leccion-3-vistas-visualizacion.md) | [Volver al Modulo](../README.md) | [Leccion 5 →](./leccion-5-herramientas-basicas.md)

---

## Resumen

✅ Comprendes concepto de niveles en BIM
✅ Sabes crear y modificar niveles
✅ Entiendes vinculos de elementos con niveles
✅ Puedes crear sistemas de grillas
✅ Conoces nomenclatura estandar de grillas
✅ Sabes usar Scope Box para organizacion

**Proxima leccion:** Herramientas de Modelado Basico

---

**Tiempo:** 1 hora
**Dificultad:** ⭐⭐ Principiante-Intermedio
**Importancia:** ⭐⭐⭐⭐⭐ Fundamental
