# Leccion 5: Herramientas de Modelado Basico

![Basic Tools](../imagenes/leccion5-herramientas.png)

**Duracion:** 0.5 horas
**Dificultad:** Principiante

---

## Introduccion

Las herramientas de modificacion son fundamentales en Revit. A diferencia de CAD, Revit trabaja con **elementos parametricos** que mantienen sus relaciones y propiedades al ser modificados. Dominar estas herramientas es esencial para modelado eficiente.

---

## Panel Modify

Cuando seleccionas cualquier elemento, aparece la pestana **Modify | [Categoria]** con herramientas contextuales.

![Modify Panel](../imagenes/leccion5-modify-panel.png)

---

## Herramientas de Transformacion

### Move (Mover)

**Atajo:** `MV`

![Move](../imagenes/leccion5-move.png)

**Uso:**
1. Seleccionar elemento(s)
2. `MV`
3. Click punto base
4. Mover a nueva ubicacion
5. Click destino (o escribir distancia exacta)

**Opciones:**
- **Constrain:** Restringir movimiento (horizontal/vertical)
- **Disjoin:** Separar de elementos unidos
- **Multiple:** Copiar multiples veces mientras mueves

**Ejemplo practico:**
Mover puerta 500mm a la derecha:
1. Seleccionar puerta
2. `MV`
3. Click en puerta
4. Mover a derecha
5. Escribir `500` + Enter

---

### Copy (Copiar)

**Atajo:** `CO`

![Copy](../imagenes/leccion5-copy.png)

**Uso:**
1. Seleccionar elemento(s)
2. `CO`
3. Click punto base
4. Click destino
5. Enter (o continuar copiando)

**Opciones:**
- **Constrain:** ✓ Restringir direccion
- **Multiple:** ✓ Copiar multiples veces

**Copias multiples:**
1. Activar "Multiple"
2. Copiar primera vez
3. Continuar copiando
4. Esc cuando termines

**Ejemplo:**
Copiar ventana cada 3 metros:
1. `CO`
2. Multiple ✓
3. Copiar escribiendo `3000` + Enter
4. Repetir hasta completar

---

### Rotate (Rotar)

**Atajo:** `RO`

![Rotate](../imagenes/leccion5-rotate.png)

**Uso:**
1. Seleccionar elemento(s)
2. `RO`
3. Click centro de rotacion
4. Click punto inicial (direccion base)
5. Rotar a nueva direccion (o escribir angulo)

**Opciones:**
- **Copy:** Copiar mientras rota
- **Angle:** Angulo numerico exacto

**Ejemplo:**
Rotar mobiliario 90°:
1. Seleccionar silla
2. `RO`
3. Click centro
4. Click direccion actual
5. Escribir `90` + Enter

---

### Mirror (Simetria)

**Atajo:** `MI` (Mirror - Pick Axis)

![Mirror](../imagenes/leccion5-mirror.png)

**Tipos:**

**Mirror - Pick Axis:**
1. Seleccionar elemento(s)
2. `MI`
3. Click punto 1 del eje
4. Click punto 2 del eje
5. Elemento se refleja

**Mirror - Draw Axis:**
Similar pero dibujando eje de simetria.

**Opciones:**
- **Copy:** ✓ Mantener original (simetria con copia)

**Ejemplo:**
Reflejar habitacion completa:
1. Seleccionar todos los elementos
2. `MI`
3. Click eje de simetria (ej: grilla central)
4. Copy ✓
5. Enter

---

### Array (Matriz)

**Atajo:** `AR`

![Array](../imagenes/leccion5-array.png)

**Tipos:**

**Linear Array (Lineal):**
Copias en linea recta.

**Pasos:**
1. Seleccionar elemento
2. `AR`
3. Seleccionar "Linear"
4. Number: cantidad total de elementos
5. **Move To:**
   - "2nd": Distancia al segundo elemento
   - "Last": Distancia al ultimo elemento
6. Mover y definir direccion
7. Ingresar distancia
8. Enter

**Radial Array (Radial):**
Copias en circulo.

**Pasos:**
1. Seleccionar elemento
2. `AR`
3. Seleccionar "Radial"
4. Number: cantidad
5. Click centro de rotacion
6. Definir angulo total o entre elementos

**Ejemplo Linear:**
10 columnas cada 6 metros:
1. Seleccionar columna
2. `AR` > Linear
3. Number: 10
4. Move To: 2nd
5. Distancia: 6000
6. Enter

**Ejemplo Radial:**
12 columnas en circulo (cada 30°):
1. Seleccionar columna
2. `AR` > Radial
3. Number: 12
4. Angle: 360°
5. Click centro

---

## Herramientas de Edicion

### Align (Alinear)

**Atajo:** `AL`

![Align](../imagenes/leccion5-align.png)

**Uso:**
Alinear un elemento con referencia a otro.

**Pasos:**
1. `AL`
2. Click en referencia (elemento fijo)
3. Click en elemento a alinear
4. Elemento se mueve a alineacion

**Opciones:**
- **Multiple Alignment:** ✓ Alinear multiples elementos
- **Lock:** 🔒 Bloquear alineacion (se mantiene siempre)

**Ejemplo:**
Alinear ventanas con cara de muro:
1. `AL`
2. Click cara de muro
3. Click centro de ventana
4. Ventana se centra en muro

---

### Trim/Extend (Recortar/Extender)

**Atajo:** `TR`

![Trim Extend](../imagenes/leccion5-trim.png)

**Uso:**
Recortar o extender elementos hasta interseccion.

**Pasos:**
1. `TR`
2. Click en elemento limite (donde cortar)
3. Click en elemento a recortar (lado a eliminar)

**Ejemplo:**
Recortar muro hasta otro muro:
1. `TR`
2. Click muro limite
3. Click en lado del muro a eliminar

---

### Split Element (Dividir)

**Atajo:** `SL`

![Split](../imagenes/leccion5-split.png)

**Uso:**
Dividir elemento en punto especifico.

**Pasos:**
1. Seleccionar elemento (muro, linea, etc.)
2. `SL`
3. Click donde dividir
4. Elemento se separa en dos

**Opciones:**
- **Delete Inner Segment:** Eliminar segmento interior (entre dos puntos)

**Ejemplo:**
Dividir muro para insertar vano:
1. Seleccionar muro
2. `SL`
3. Click inicio de vano
4. Click fin de vano
5. Delete Inner Segment ✓

---

### Offset (Equidistancia)

**Atajo:** `OF`

![Offset](../imagenes/leccion5-offset.png)

**Uso:**
Crear copia paralela a distancia especifica.

**Pasos:**
1. `OF`
2. Ingresar distancia (ej: 500mm)
3. Seleccionar elemento
4. Click lado donde crear offset
5. Elemento paralelo se crea

**Opciones:**
- **Numerical:** Distancia numerica exacta
- **Graphical:** Distancia grafica

**Ejemplo:**
Crear muro paralelo a 3 metros:
1. `OF`
2. Distancia: 3000
3. Seleccionar muro original
4. Click lado exterior
5. Muro paralelo creado

---

## Herramientas de Seleccion

### Selection Tools

![Selection](../imagenes/leccion5-selection.png)

**Modify | Select:**
- **Select All Instances:** Seleccionar todas las instancias del tipo
- **Select All Instances > Visible in View:** Solo visibles
- **Select All Instances > In Entire Project:** Todo el proyecto

**Ejemplo:**
Seleccionar todas las puertas tipo "0.90 x 2.10":
1. Seleccionar una puerta de ese tipo
2. Modify > Select All Instances > In Entire Project
3. Todas seleccionadas

### Filter Selection

**Atajo:** `FF` (con elementos seleccionados)

![Filter](../imagenes/leccion5-filter.png)

**Uso:**
Filtrar seleccion multiple por categoria.

**Ejemplo:**
Has seleccionado muros, puertas y ventanas, pero solo quieres muros:
1. Seleccionar todo
2. `FF`
3. Desmarcar Doors y Windows
4. OK
5. Solo muros quedan seleccionados

---

## Referencias y Snaps

### Object Snaps

![Snaps](../imagenes/leccion5-snaps.png)

Revit detecta automaticamente puntos de referencia:

**Snaps principales:**
- **Endpoint:** Extremos de lineas/muros
- **Midpoint:** Punto medio
- **Center:** Centro (circulos, arcos)
- **Intersection:** Interseccion de elementos
- **Perpendicular:** Perpendicular a elemento
- **Tangent:** Tangente a curva
- **Nearest:** Punto mas cercano
- **Work Plane Grid:** Grilla de plano de trabajo

**Indicadores visuales:**
- Triangulo: Endpoint
- Circulo: Midpoint
- X: Intersection
- Perpendicular: Simbolo ⊥

### Temporary Dimensions

![Temp Dimensions](../imagenes/leccion5-temp-dim.png)

**Que son:**
Cotas temporales que aparecen al colocar/mover elementos.

**Uso:**
1. Colocar elemento (ej: puerta)
2. Aparecen cotas temporales
3. Click en cota
4. Escribir nuevo valor
5. Enter
6. Elemento se ajusta

**Ejemplo:**
Colocar puerta a 1.5m de esquina:
1. Colocar puerta aproximadamente
2. Click en cota temporal que muestra distancia a esquina
3. Escribir `1500`
4. Enter
5. Puerta se posiciona exactamente

---

## Propiedades: Type vs Instance

### Concepto Fundamental

En Revit, cada elemento tiene DOS niveles de propiedades:

**Type Properties (Propiedades de Tipo):**
Afectan TODAS las instancias de ese tipo.

**Instance Properties (Propiedades de Instancia):**
Afectan SOLO el elemento seleccionado.

### Ejemplo: Puerta

**Type Properties:**
- Ancho (900mm)
- Altura (2100mm)
- Material del marco
- Configuracion de panel

Si cambias ancho de tipo a 1000mm, TODAS las puertas de ese tipo cambian.

**Instance Properties:**
- Level (nivel)
- Offset (desplazamiento)
- Phase Created (fase)
- Mark (marca unica: P-01, P-02)

Si cambias Mark a "P-15", solo ESA puerta tiene esa marca.

### Acceso

**Instance Properties:**
Seleccionar elemento > Properties Panel

**Type Properties:**
Seleccionar elemento > Properties > Edit Type

---

## Ejercicios Practicos

### Ejercicio 5.1: Herramientas de Transformacion (15 min)

**Objetivo:** Practicar Move, Copy, Rotate, Mirror

1. Crear 4 muros formando habitacion
2. **Move:** Mover un muro 500mm
3. **Copy:** Copiar habitacion completa 5m a la derecha
4. **Rotate:** Rotar habitacion 45°
5. **Mirror:** Reflejar habitacion sobre eje central

### Ejercicio 5.2: Array (10 min)

**Objetivo:** Dominar arrays lineales y radiales

**Linear:**
1. Crear columna
2. Array 8 columnas cada 6 metros horizontalmente
3. Array 4 filas cada 6 metros verticalmente

**Radial:**
1. Crear columna circular
2. Array radial 12 columnas (360°)
3. Radio: 10 metros

### Ejercicio 5.3: Align y Trim (10 min)

1. Crear 3 muros no alineados
2. **Align:** Alinear extremos
3. **Trim:** Recortar hasta intersecciones
4. Crear esquinas perfectas

### Ejercicio 5.4: Propiedades Type vs Instance (5 min)

1. Crear 3 puertas del mismo tipo
2. Cambiar **Instance:** Mark de cada una (P-01, P-02, P-03)
3. Cambiar **Type:** Ancho a 1000mm
4. **Observar:** Todas cambian de ancho, pero mantienen Marks diferentes

---

## Atajos de Teclado Esenciales

| Atajo | Herramienta |
|-------|-------------|
| `MV` | Move |
| `CO` | Copy |
| `RO` | Rotate |
| `MI` | Mirror - Pick Axis |
| `AR` | Array |
| `AL` | Align |
| `TR` | Trim/Extend |
| `SL` | Split Element |
| `OF` | Offset |
| `FF` | Filter |
| `Delete` | Delete |
| `Esc` | Cancel |
| `Enter` | Finish |

---

## Tips y Mejores Practicas

### Precision

✅ **Siempre ingresar valores exactos** en lugar de aproximar graficamente
✅ **Usar snaps** para referencias precisas
✅ **Aprovechar temporary dimensions** para ajustes rapidos

### Eficiencia

✅ **Dominar atajos de teclado:** MV, CO, RO, MI, AR, AL, TR
✅ **Usar Copy + Multiple** para copias repetidas
✅ **Array en lugar de Copy manual** para patrones
✅ **Select All Instances** para modificaciones masivas

### Organizacion

✅ **Entender Type vs Instance** antes de modificar
✅ **Lock** elementos criticos con Align para mantener relaciones
✅ **Usar Filter** en selecciones complejas

---

## Navegacion

[← Leccion 4](./leccion-4-niveles-grillas.md) | [Volver al Modulo](../README.md) | [Ejercicios →](../ejercicios.md)

---

## Resumen

✅ Dominas herramientas de transformacion (Move, Copy, Rotate, Mirror)
✅ Sabes usar Array lineal y radial
✅ Conoces herramientas de edicion (Align, Trim, Split, Offset)
✅ Comprendes snaps y temporary dimensions
✅ Entiendes diferencia entre Type y Instance Properties

**Siguiente:** Ejercicios del Modulo 1

---

**Tiempo:** 30 minutos
**Dificultad:** ⭐ Principiante
**Importancia:** ⭐⭐⭐⭐⭐ Fundamental
