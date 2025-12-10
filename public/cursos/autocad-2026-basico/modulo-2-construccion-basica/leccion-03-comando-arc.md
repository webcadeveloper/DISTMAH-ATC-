# Lección 3: Comando Arc (Arco)

## Índice
- [Introducción](#introducción)
- [Acceso al Comando Arc](#acceso-al-comando-arc)
- [Opciones del Comando Arc](#opciones-del-comando-arc)
- [Arc 3 Points](#arc-3-points)
- [Arc Start, Center, End](#arc-start-center-end)
- [Arc Start, End, Angle](#arc-start-end-angle)
- [Arc Start, Center, Length](#arc-start-center-length)
- [Arc Start, End, Radius](#arc-start-end-radius)
- [Arc Continue](#arc-continue)
- [Tabla Comparativa de Opciones](#tabla-comparativa-de-opciones)
- [Atajos de Teclado](#atajos-de-teclado)
- [Tips y Mejores Prácticas](#tips-y-mejores-prácticas)
- [Resumen](#resumen)

---

## Introducción

El comando **Arc** es una de las herramientas fundamentales de dibujo en AutoCAD 2026. Permite crear arcos de diferentes formas utilizando **11 opciones distintas**, cada una diseñada para situaciones específicas de diseño.

💡 **Concepto clave:** Un arco es una porción de un círculo definida por diferentes parámetros como puntos, ángulos, radios o longitudes de cuerda.

---

## Acceso al Comando Arc

### Métodos de Activación

| Método | Descripción |
|--------|-------------|
| **Ribbon** | Home tab → Draw panel → Arc (menú desplegable) |
| **Alias de teclado** | `A` + Enter |
| **Command Line** | `ARC` + Enter |
| **Menú** | Draw → Arc → [seleccionar opción] |

### Alias de Teclado

```
Comando: A [Enter]
```

⚠️ **Importante:** Al usar el alias `A`, AutoCAD activa el comando Arc con la opción por defecto (3 Points). Puedes cambiar de opción escribiendo las letras correspondientes en la línea de comandos.

---

## Opciones del Comando Arc

El comando Arc ofrece **11 opciones diferentes** para crear arcos según tus necesidades:

### Lista Completa de Opciones

1. **Arc 3 Points** - Arco por 3 puntos
2. **Arc Start, Center, End** - Inicio, Centro, Fin
3. **Arc Start, Center, Angle** - Inicio, Centro, Ángulo
4. **Arc Start, Center, Length** - Inicio, Centro, Longitud
5. **Arc Start, End, Angle** - Inicio, Fin, Ángulo
6. **Arc Start, End, Direction** - Inicio, Fin, Dirección
7. **Arc Start, End, Radius** - Inicio, Fin, Radio
8. **Arc Center, Start, End** - Centro, Inicio, Fin
9. **Arc Center, Start, Angle** - Centro, Inicio, Ángulo
10. **Arc Center, Start, Length** - Centro, Inicio, Longitud
11. **Arc Continue** - Continuar desde arco/línea anterior

---

## Arc 3 Points

### Descripción

Dibuja un arco especificando **tres puntos** por los que pasará el arco. Esta es la opción más intuitiva y la configuración por defecto.

### Procedimiento Paso a Paso

1. **Activar el comando**
   ```
   Comando: A [Enter]
   ```

2. **Especificar primer punto** (Start Point)
   ```
   Specify start point of arc or [Center]: [Click punto 1]
   ```
   💡 **Tip:** Usa **Snap to Node** (F3) para seleccionar puntos exactos en el dibujo

3. **Especificar segundo punto** (Point on Arc)
   ```
   Specify second point of arc or [Center/End]: [Click punto 2]
   ```
   ✅ **Drag Mode:** Después del segundo punto, puedes arrastrar el mouse para visualizar el arco antes de confirmarlo

4. **Especificar punto final** (End Point)
   ```
   Specify end point of arc: [Click punto 3]
   ```

### Ejemplo Práctico

**Ejercicio con subdivis.dwg:**

Dibuja un arco que pase por los puntos **1**, **2**, y **3** en el dibujo de práctica:

```
Comando: A [Enter]
Specify start point of arc: [Snap to Node - Punto 1]
Specify second point of arc: [Snap to Node - Punto 2]
Specify end point of arc: [Snap to Node - Punto 3]
```

⚠️ **Nota:** El arco siempre se dibuja en **sentido antihorario** desde el punto inicial.

---

## Arc Start, Center, End

### Descripción

Crea un arco especificando el **punto inicial**, el **centro** y el **punto final**. Esta opción es ideal cuando conoces exactamente dónde debe estar el centro del arco.

### Procedimiento Paso a Paso

1. **Activar el comando y especificar inicio**
   ```
   Comando: A [Enter]
   Specify start point of arc or [Center]: [Click punto inicial]
   ```

2. **Especificar el centro**
   ```
   Specify second point of arc or [Center/End]: C [Enter]
   Specify center point of arc: [Click centro]
   ```

3. **Especificar punto final**
   ```
   Specify end point of arc or [Angle/chord Length]: [Click punto final]
   ```

### Diferencia: Arco Cóncavo vs Convexo

El mismo conjunto de puntos puede generar dos arcos diferentes:

| Tipo | Descripción | Cuándo ocurre |
|------|-------------|---------------|
| **Cóncavo** | Arco que se curva hacia adentro | Punto final antes de completar 180° |
| **Convexo** | Arco que se curva hacia afuera | Punto final después de 180° |

💡 **Tip:** El arco SIEMPRE se dibuja en **sentido antihorario** desde el punto inicial hasta el punto final alrededor del centro.

### Ejemplo Práctico

**Ejercicio con subdivis.dwg - Puntos 4, 5, 6:**

```
Comando: A [Enter]
Specify start point: [Punto 4]
Specify second point or [Center/End]: C [Enter]
Specify center point: [Punto 5]
Specify end point: [Punto 6]
```

---

## Arc Start, End, Angle

### Descripción

Dibuja un arco especificando el **punto inicial**, **punto final** y el **ángulo incluido** (delta angle). El ángulo determina la curvatura del arco.

### Conceptos Importantes

**Delta Angle (Ángulo Incluido):**
- Es el ángulo central que abarca el arco
- **Valores positivos:** Arco en sentido antihorario ↺
- **Valores negativos:** Arco en sentido horario ↻

### Formato de Entrada de Ángulos

AutoCAD acepta múltiples formatos para ingresar ángulos:

| Formato | Ejemplo | Descripción |
|---------|---------|-------------|
| **Grados decimales** | `45` | 45 grados |
| **Grados, minutos** | `59d12'` | 59 grados, 12 minutos |
| **Grados, minutos, segundos** | `59d12'30"` | 59°12'30" |

### Procedimiento Paso a Paso

1. **Activar el comando**
   ```
   Comando: A [Enter]
   ```

2. **Especificar punto inicial**
   ```
   Specify start point: [Click punto inicial]
   ```

3. **Especificar punto final**
   ```
   Specify second point or [Center/End]: E [Enter]
   Specify end point of arc: [Click punto final]
   ```

4. **Especificar ángulo incluido**
   ```
   Specify center point or [Angle/Direction/Radius]: A [Enter]
   Specify included angle: 90 [Enter]
   ```

### Ejemplos Prácticos

**Ejemplo 1: Arco de 90° antihorario**
```
Comando: A [Enter]
Start point: [Punto 7]
End point: [Punto 8]
Included angle: 90 [Enter]
```
✅ Resultado: Arco curva hacia arriba (antihorario)

**Ejemplo 2: Arco de 90° horario**
```
Comando: A [Enter]
Start point: [Punto 7]
End point: [Punto 8]
Included angle: -90 [Enter]
```
✅ Resultado: Arco curva hacia abajo (horario)

**Ejemplo 3: Ángulo con minutos y segundos**
```
Comando: A [Enter]
Start point: [Punto inicial]
End point: [Punto final]
Included angle: 59d12'30" [Enter]
```

💡 **Tip:** Usa ángulos negativos para invertir rápidamente la dirección del arco sin cambiar los puntos inicial y final.

---

## Arc Start, Center, Length

### Descripción

Crea un arco usando el **punto inicial**, **centro** y la **longitud de cuerda** (chord length). La longitud de cuerda es la distancia en línea recta entre el punto inicial y el punto final del arco.

### Concepto: Chord Length (Longitud de Cuerda)

```
    Start Point
        ●
       /│\
      / │ \   ← Arco
     /  │  \
    ●───────● End Point
    └───┬───┘
   Chord Length
```

**Chord Length =** Distancia en línea recta desde el inicio hasta el final del arco

### Procedimiento Paso a Paso

1. **Activar el comando**
   ```
   Comando: A [Enter]
   ```

2. **Especificar punto inicial**
   ```
   Specify start point: [Click punto 9]
   ```

3. **Especificar centro**
   ```
   Specify second point or [Center/End]: C [Enter]
   Specify center point: [Click punto 10]
   ```

4. **Especificar longitud de cuerda**
   ```
   Specify end point or [Angle/chord Length]: L [Enter]
   Specify length of chord: 2 [Enter]
   ```

### Valores Positivos vs Negativos

| Valor | Dirección | Resultado |
|-------|-----------|-----------|
| **Positivo** | Menor de 180° | Arco pequeño (cóncavo) |
| **Negativo** | Mayor de 180° | Arco grande (convexo) |

### Ejemplo Práctico

**Usando puntos 9, 10 con chord length = 2:**

```
Comando: A [Enter]
Start point: [Punto 9]
Center: [Punto 10]
Length of chord: 2 [Enter]
```

**Para arco en dirección opuesta:**
```
Length of chord: -2 [Enter]
```

⚠️ **Importante:** El valor negativo dibuja el arco en la dirección opuesta alrededor del centro, creando el arco complementario.

---

## Arc Start, End, Radius

### Descripción

Dibuja un arco especificando el **punto inicial**, **punto final** y el **radio** del círculo del cual forma parte el arco.

### Procedimiento Paso a Paso

1. **Activar el comando**
   ```
   Comando: A [Enter]
   ```

2. **Especificar punto inicial**
   ```
   Specify start point: [Click punto inicial]
   ```

3. **Especificar punto final**
   ```
   Specify second point or [Center/End]: E [Enter]
   Specify end point: [Click punto final]
   ```

4. **Especificar radio**
   ```
   Specify center point or [Angle/Direction/Radius]: R [Enter]
   Specify radius of arc: [Ingresar valor de radio]
   ```

### Consideraciones del Radio

- **Valores positivos:** Arco menor (< 180°)
- **Valores negativos:** Arco mayor (> 180°)
- El radio debe ser al menos la mitad de la distancia entre los puntos inicial y final

### Ejemplo Práctico

**Arco con radio específico:**
```
Comando: A [Enter]
Start point: [Punto 11]
End point: [Punto 12]
Radius: 5 [Enter]
```

💡 **Tip:** Esta opción es útil cuando trabajas con radios estándar o necesitas que el arco coincida con otros elementos circulares de radio conocido.

---

## Arc Continue

### Descripción

Crea un arco que continúa **tangencialmente** desde el final de una línea o arco previamente dibujado. Esta opción es extremadamente útil para crear curvas suaves y continuas.

### Características Principales

✅ **Tangencia automática:** El nuevo arco es tangente al objeto anterior
✅ **Punto inicial automático:** Usa el último punto del objeto anterior
✅ **Solo requiere un clic:** Especificas únicamente el punto final

### Procedimiento Paso a Paso

1. **Dibujar línea o arco inicial**
   ```
   Comando: LINE [Enter]
   Specify first point: [Click punto 13]
   Specify next point: [Click punto 14]
   [Enter para terminar]
   ```

2. **Activar Arc Continue**
   ```
   Comando: A [Enter]
   Specify start point or [Center]: [Enter]
   ```
   ⚠️ **Importante:** Presiona Enter sin especificar punto para activar modo Continue

3. **Especificar solo el punto final**
   ```
   Specify end point of arc: [Click punto final deseado]
   ```

### Uso desde Command Line

También puedes escribir explícitamente la opción:

```
Comando: ARC [Enter]
Specify start point or [Center]: C [Enter]
Specify center point: (presionar Enter)
Specify end point: [Click punto final]
```

### Ejemplos Prácticos

**Ejemplo 1: Continuar desde una línea**
```
1. LINE: Punto 13 → Punto 14 [Enter]
2. ARC: [Enter sin click]
3. End point: [Click punto 15]
```

**Ejemplo 2: Cadena de arcos continuos**
```
1. ARC 3 Points: Dibujar primer arco
2. ARC Continue: [Enter] → End point
3. ARC Continue: [Enter] → End point
4. ARC Continue: [Enter] → End point
```

💡 **Tip Profesional:** Usa Arc Continue para crear perfiles complejos con transiciones suaves entre líneas rectas y curvas.

### Aplicaciones Comunes

- 🏗️ Diseño de caminos y carreteras
- 🏛️ Molduras arquitectónicas
- ⚙️ Perfiles mecánicos
- 🎨 Diseño de logotipos y gráficos

---

## Tabla Comparativa de Opciones

| Opción | Parámetros Requeridos | Mejor Para | Ventaja Principal |
|--------|----------------------|------------|-------------------|
| **3 Points** | 3 puntos cualesquiera | Diseño intuitivo | Fácil visualización |
| **Start, Center, End** | Inicio, Centro, Fin | Arcos con centro conocido | Control preciso del centro |
| **Start, End, Angle** | Inicio, Fin, Ángulo | Arcos con ángulo específico | Control del ángulo incluido |
| **Start, Center, Length** | Inicio, Centro, Cuerda | Diseño con medidas de cuerda | Útil en topografía |
| **Start, End, Radius** | Inicio, Fin, Radio | Arcos con radio estándar | Coincidencia con círculos |
| **Continue** | Solo punto final | Curvas continuas | Tangencia automática |

---

## Atajos de Teclado

### Atajos Principales

| Atajo | Comando/Función |
|-------|-----------------|
| `A` | Activar comando Arc |
| `C` | Opción Center (Centro) |
| `E` | Opción End (Fin) |
| `A` | Opción Angle (Ángulo) |
| `L` | Opción Length (Longitud) |
| `R` | Opción Radius (Radio) |
| `Enter` | Activar Arc Continue (después de Arc) |
| `Esc` | Cancelar comando |

### Teclas de Función Útiles

| Tecla | Función |
|-------|---------|
| `F3` | Snap to Node (activar/desactivar) |
| `F8` | Ortho Mode |
| `F10` | Polar Tracking |
| `F11` | Object Snap Tracking |

---

## Tips y Mejores Prácticas

### 💡 Tips Generales

1. **Usa Snap to Node constantemente**
   - Activa con F3
   - Asegura precisión al seleccionar puntos
   - Esencial para ejercicios de práctica

2. **Aprovecha el Drag Mode**
   - Después del segundo punto, visualiza el arco antes de confirmar
   - Te ayuda a verificar que el arco va en la dirección correcta

3. **Dirección antihorario por defecto**
   - Todos los arcos se dibujan en sentido antihorario desde el punto inicial
   - Usa ángulos negativos para invertir dirección

4. **Valores negativos = dirección opuesta**
   - Funciona en Angle, Length y Radius
   - Rápido para probar ambas direcciones

### ⚠️ Errores Comunes a Evitar

❌ **Error 1:** Olvidar que Arc dibuja en sentido antihorario
   - **Solución:** Usa ángulos o valores negativos para dirección horaria

❌ **Error 2:** No usar Snap to Node en ejercicios de práctica
   - **Solución:** Siempre activa F3 cuando trabajes con puntos específicos

❌ **Error 3:** Confundir Chord Length con Arc Length
   - **Solución:** Chord = línea recta, Arc = curva del arco

❌ **Error 4:** No presionar Enter para Arc Continue
   - **Solución:** Después de activar Arc, presiona Enter sin click

### ✅ Mejores Prácticas

1. **Selecciona la opción correcta desde el inicio**
   - Analiza qué datos tienes disponibles
   - Usa la opción que requiera menos cálculos

2. **Combina con otros comandos**
   - Line + Arc Continue = perfiles complejos
   - Circle + Trim + Arc = diseños circulares

3. **Practica con subdivis.dwg**
   - Los puntos 1-14 cubren todas las opciones principales
   - Cada ejercicio refuerza una opción diferente

4. **Usa Polar Tracking para ángulos**
   - F10 para activar
   - Facilita ángulos comunes (0°, 45°, 90°, etc.)

---

## Resumen

### Puntos Clave de la Lección

1. ✅ El comando Arc tiene **11 opciones diferentes** para crear arcos
2. ✅ Alias de teclado: **A**
3. ✅ Todos los arcos se dibujan en **sentido antihorario** por defecto
4. ✅ **Arc 3 Points** es la opción más intuitiva para principiantes
5. ✅ **Arc Continue** crea tangencias automáticas desde líneas o arcos previos
6. ✅ Valores **negativos** invierten la dirección del arco
7. ✅ **Chord Length** es la distancia en línea recta, no la longitud del arco

### Opciones Más Utilizadas

1. **Arc 3 Points** - Para diseño general
2. **Arc Continue** - Para curvas continuas
3. **Arc Start, End, Angle** - Para ángulos específicos
4. **Arc Start, Center, End** - Para control preciso del centro

### Formato de Ángulos

- Grados: `45`
- Grados y minutos: `59d12'`
- Grados, minutos y segundos: `59d12'30"`

### Próximos Pasos

En la próxima lección aprenderás sobre **comandos de modificación básica** que te permitirán editar y ajustar los arcos y líneas que has creado.

---

## Navegación del Curso

- [← Lección Anterior: Trabajando con Capas](leccion-02-trabajando-con-capas.md)
- [Volver al Índice del Módulo](README.md)
- [Siguiente Lección: Comandos de Modificación →](#)

---

## Recursos Adicionales

### Archivos de Práctica
- `subdivis.dwg` - Archivo con puntos 1-14 para practicar todas las opciones

### Videos Recomendados
- AutoCAD 2026: Arc Command Fundamentals
- Advanced Arc Techniques for Professional Design

### Ejercicios Complementarios
1. Dibuja un arco usando cada una de las 6 opciones principales
2. Crea un perfil continuo usando Line + Arc Continue
3. Practica arcos con ángulos positivos y negativos
4. Experimenta con valores de Chord Length positivos y negativos

---

**📚 Módulo 2: Construcción Básica - Lección 3**
**Universidad Autodesk - AutoCAD 2026**
**© 2024 Nolivos Law - Todos los derechos reservados**
