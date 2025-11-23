# Lección 4: Comando Circle - Opciones Avanzadas

## Introducción

En el Tutorial 1 aprendiste a usar la opción **Center, Radius** del comando Circle, que es el método más común para dibujar círculos. Sin embargo, AutoCAD ofrece opciones adicionales que te permiten crear círculos de diferentes maneras según tus necesidades de diseño:

- **2-Point** - Define el círculo por los endpoints del diámetro
- **3-Point** - Especifica tres puntos en la circunferencia
- **Tan Tan Radius** - Círculo tangente a dos objetos con radio específico
- **Tan Tan Tan** - Círculo tangente a tres objetos

Estas opciones están disponibles en el **Home tab**, **Draw panel**, y son especialmente útiles cuando necesitas crear círculos que se relacionen geométricamente con otros objetos existentes.

## Acceso al Comando Circle

### Ubicación en la Interfaz
- **Ribbon:** Home tab → Draw panel → Circle (dropdown)
- **Teclado:** `CIRCLE` o `C`
- **Menu Bar:** Draw → Circle

### Opciones del Comando

Al iniciar el comando Circle, verás el prompt:

```
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]:
```

## Circle 2-Point

### Descripción
La opción **2-Point** define un círculo especificando dos puntos que se convierten en los **endpoints del diámetro**. AutoCAD automáticamente calcula el centro y el radio.

### Cuándo Usar
- Cuando conoces el diámetro exacto del círculo
- Cuando necesitas alinear el círculo con puntos específicos
- Para crear círculos entre dos puntos conocidos

### Procedimiento Paso a Paso

1. **Iniciar el comando:**
   ```
   Command: CIRCLE
   ```

2. **Seleccionar opción 2-Point:**
   ```
   Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: 2P
   ```

3. **Especificar primer endpoint del diámetro:**
   ```
   Specify first end point of circle's diameter:
   ```
   - Usa **Endpoint Object Snap** para precisión
   - Click en el primer punto

4. **Especificar segundo endpoint del diámetro:**
   ```
   Specify second end point of circle's diameter:
   ```
   - Click en el segundo punto
   - El círculo se dibuja automáticamente

### Ejemplo Práctico

```
Command: C
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: 2P
Specify first end point of circle's diameter: [Pick Point 1]
Specify second end point of circle's diameter: [Pick Point 2]
```

> **Tip:** Activa Endpoint Object Snap (F3) para asegurar que los puntos se capturen exactamente en los endpoints de líneas existentes.

## Circle 3-Point

### Descripción
La opción **3-Point** crea un círculo especificando **tres puntos en la circunferencia**. AutoCAD calcula automáticamente el centro y el radio que pasan por los tres puntos.

### Cuándo Usar
- Cuando conoces tres puntos por donde debe pasar el círculo
- Para crear círculos que conecten tres puntos específicos
- En diseños geométricos complejos

### Procedimiento Paso a Paso

1. **Iniciar el comando:**
   ```
   Command: CIRCLE
   ```

2. **Seleccionar opción 3-Point:**
   ```
   Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: 3P
   ```

3. **Especificar primer punto:**
   ```
   Specify first point on circle:
   ```
   - Click en el primer punto

4. **Especificar segundo punto:**
   ```
   Specify second point on circle:
   ```
   - Click en el segundo punto
   - Entra en **drag mode** - puedes ver el círculo formándose

5. **Especificar tercer punto:**
   ```
   Specify third point on circle:
   ```
   - Click en el tercer punto
   - El círculo se completa

### Ejemplo Práctico

```
Command: C
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: 3P
Specify first point on circle: [Pick Point 3]
Specify second point on circle: [Pick Point 4]
Specify third point on circle: [Pick Point 5]
```

> **Nota:** Después del segundo punto, verás el círculo en modo preview mientras mueves el cursor para seleccionar el tercer punto.

## Circle Tangent, Tangent, Radius (Ttr)

### Descripción
La opción **Tan Tan Radius** dibuja un círculo **tangente a dos objetos** existentes con un **radio específico**. Esta opción es extremadamente útil para crear círculos que se ajusten perfectamente a otros elementos geométricos.

### Cuándo Usar
- Para crear filetes circulares
- Para diseñar círculos que toquen exactamente dos objetos
- En diseños mecánicos y arquitectónicos precisos

### Configuración Importante

> **Warning:** Para que esta opción funcione correctamente, **Object Snap debe estar OFF** (F3). Si está activado, puede interferir con la selección de objetos tangentes.

### Procedimiento Paso a Paso

1. **Desactivar Object Snap:**
   - Presiona `F3` o click en el icono OSNAP en la barra de estado
   - Asegúrate que esté OFF

2. **Iniciar el comando:**
   ```
   Command: CIRCLE
   ```

3. **Seleccionar opción Ttr:**
   ```
   Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: T
   ```

4. **Seleccionar primer objeto tangente:**
   ```
   Specify point on object for first tangent of circle:
   ```
   - Click cerca del objeto donde quieres la tangencia

5. **Seleccionar segundo objeto tangente:**
   ```
   Specify point on object for second tangent of circle:
   ```
   - Click cerca del segundo objeto

6. **Especificar radio:**
   ```
   Specify radius of circle <default>:
   ```
   - Ingresa el valor del radio
   - Presiona Enter

### Ejemplo Práctico 1: Tangente a Dos Centerlines

```
Command: C
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: T
Specify point on object for first tangent of circle: [Click on first centerline]
Specify point on object for second tangent of circle: [Click on second centerline]
Specify radius of circle <100.0000>: 267.3098
```

### Ejemplo Práctico 2: Tangente a Dos Círculos

```
Command: C
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: T
Specify point on object for first tangent of circle: [Click on first circle]
Specify point on object for second tangent of circle: [Click on second circle]
Specify radius of circle <267.3098>: 150
```

### Mensajes de Error

Si recibes el mensaje:
```
Circle does not exist with the specified radius.
```

**Causas:**
- El radio es **demasiado pequeño** para tocar ambos objetos
- El radio es **demasiado grande** y no puede ajustarse entre los objetos
- Los objetos están demasiado lejos o demasiado cerca

**Solución:**
- Ajusta el valor del radio
- Verifica la distancia entre los objetos
- Usa la opción 3-Point si necesitas más flexibilidad

### Configuración de Capas

Antes de dibujar círculos tangentes, asegúrate de estar en la capa correcta:

**Para círculos en centerlines:**
```
Command: LA (Layer)
[Set current layer to: CENTERLINE]
```

**Para círculos en lot lines:**
```
Command: LA (Layer)
[Set current layer to: LOTLINES]
```

## Circle Tangent, Tangent, Tangent (3T)

### Descripción
La opción **Tan Tan Tan** crea un círculo tangente a **tres objetos** existentes. AutoCAD calcula automáticamente el radio y la posición necesarios.

### Cuándo Usar
- Para crear círculos inscritos en triángulos
- Para diseños que requieren tangencia a tres elementos
- En proyectos de diseño urbano y planificación

### Procedimiento Paso a Paso

1. **Iniciar el comando:**
   ```
   Command: CIRCLE
   ```

2. **Seleccionar opción 3-Point, luego Tan:**
   ```
   Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: 3P
   Specify first point on circle or [Tan]: T
   ```

3. **Seleccionar primer objeto tangente:**
   ```
   Specify point on object for first tangent of circle:
   ```
   - Click en la primera línea de lote

4. **Seleccionar segundo objeto tangente:**
   ```
   Specify point on object for second tangent of circle:
   ```
   - Click en la segunda línea de lote

5. **Seleccionar tercer objeto tangente:**
   ```
   Specify point on object for third tangent of circle:
   ```
   - Click en la tercera línea de lote
   - El círculo se crea automáticamente

### Ejemplo Práctico

```
Command: C
Specify center point for circle or [3P/2P/Ttr (tan tan radius)]: 3P
Specify first point on circle or [Tan]: T
Specify point on object for first tangent of circle: [Click on lot line 1]
Specify point on object for second tangent of circle: [Click on lot line 2]
Specify point on object for third tangent of circle: [Click on lot line 3]
```

> **Tip:** Esta opción es perfecta para diseños de planificación urbana donde necesitas ajustar círculos (como rotondas o áreas circulares) dentro de límites de lotes.

## Configuración de Object Snap

### Activar Endpoint Object Snap

Para trabajar con precisión en las opciones 2-Point y 3-Point:

1. **Right-click** en el icono OSNAP en la barra de estado
2. Selecciona **Object Snap Settings...**
3. **Check** la opción **Endpoint**
4. Asegúrate que **Node** también esté activado
5. Click **OK**

### Modo Running Object Snap

Cuando Endpoint y Node están en **running mode**:
- El **AutoSnap marker** aparece automáticamente en endpoints
- Se muestra un tooltip con el tipo de snap
- Obtienes precisión absoluta sin especificar manualmente

### Cuándo Desactivar Object Snap

**Desactiva Object Snap (F3) cuando uses:**
- Tan Tan Radius (Ttr)
- Tan Tan Tan
- Cualquier opción de tangencia

**Reactiva Object Snap (F3) cuando uses:**
- 2-Point
- 3-Point
- Center, Radius con puntos precisos

## Tabla Comparativa de Opciones Circle

| Opción | Puntos Requeridos | Dato Adicional | Object Snap | Mejor Uso |
|--------|-------------------|----------------|-------------|-----------|
| **Center, Radius** | 1 (centro) | Radio | ON | Círculos con centro conocido |
| **Center, Diameter** | 1 (centro) | Diámetro | ON | Cuando conoces el diámetro |
| **2-Point** | 2 (endpoints diámetro) | Ninguno | ON | Círculo entre dos puntos |
| **3-Point** | 3 (en circunferencia) | Ninguno | ON | Círculo por tres puntos |
| **Tan Tan Radius** | 2 objetos tangentes | Radio | OFF | Filetes, círculos tangentes |
| **Tan Tan Tan** | 3 objetos tangentes | Ninguno | OFF | Círculos inscritos |

## Atajos de Teclado

| Comando | Atajo | Descripción |
|---------|-------|-------------|
| CIRCLE | `C` | Inicia comando Circle |
| 2-Point | `2P` | Opción dos puntos |
| 3-Point | `3P` | Opción tres puntos |
| Tangent Tangent Radius | `T` o `TTR` | Tangente a dos objetos |
| Object Snap Toggle | `F3` | Activa/desactiva OSNAP |
| Endpoint Snap | `END` | Snap temporal a endpoint |
| Node Snap | `NOD` | Snap temporal a node |

## Mejores Prácticas

### 1. Planificación Previa
- Decide qué opción usar antes de iniciar el comando
- Verifica que estás en la capa correcta
- Activa o desactiva Object Snap según la opción

### 2. Uso de Capas
```
CENTERLINE → Para círculos en centerlines
LOTLINES → Para círculos en lot lines
CONSTRUCTION → Para círculos auxiliares
```

### 3. Precisión
- Usa **Endpoint** para 2-Point y 3-Point
- **Desactiva OSNAP** para opciones de tangencia
- Verifica coordenadas en la línea de comando

### 4. Eficiencia
- Aprende los atajos de teclado
- Usa la opción correcta para cada situación
- Revisa el preview antes de completar el círculo

## Troubleshooting

### Problema: "Circle does not exist with the specified radius"

**Causas:**
- Radio muy pequeño o muy grande
- Objetos mal posicionados
- Geometría incompatible

**Soluciones:**
1. Ajusta el valor del radio
2. Verifica distancia entre objetos
3. Usa opción diferente (3-Point)
4. Revisa la geometría de los objetos

### Problema: No aparece el AutoSnap marker

**Causas:**
- Object Snap desactivado
- Endpoint no está en running mode
- Cursor demasiado lejos del punto

**Soluciones:**
1. Presiona F3 para activar OSNAP
2. Verifica configuración en Object Snap Settings
3. Acerca el cursor al endpoint

### Problema: El círculo no es tangente

**Causas:**
- Object Snap interfiriendo (está ON)
- Punto de selección incorrecto
- Radio incompatible

**Soluciones:**
1. Desactiva Object Snap (F3)
2. Click más cerca del punto de tangencia deseado
3. Ajusta el radio

### Problema: No puedo acceder a Tan Tan Tan

**Causas:**
- No iniciaste con opción 3P
- Secuencia incorrecta

**Solución:**
```
Command: C
[3P] → [T] → [Select 3 objects]
```

## Ejercicio Práctico

### Ejercicio 1: Círculos con Diferentes Opciones

**Objetivo:** Practicar las cinco opciones del comando Circle

**Pasos:**

1. **Circle 2-Point:**
   - Dibuja dos líneas perpendiculares
   - Crea círculo usando endpoints como diámetro

2. **Circle 3-Point:**
   - Dibuja un triángulo
   - Crea círculo circunscrito por los tres vértices

3. **Circle Tan Tan Radius:**
   - Dibuja dos líneas que se intersectan
   - Crea círculo tangente con radio 50

4. **Circle Tan Tan Tan:**
   - Usa el triángulo anterior
   - Crea círculo inscrito tangente a los tres lados

5. **Verificación:**
   - Usa DIST para verificar radios
   - Verifica tangencias visualmente

### Ejercicio 2: Diseño de Lote Urbano

**Objetivo:** Aplicar opciones Circle en diseño real

**Pasos:**

1. Configura capa LOTLINES
2. Dibuja tres lot lines formando esquina
3. Usa Circle Tan Tan Tan para crear rotonda
4. Verifica que sea tangente a las tres líneas
5. Añade dimensiones

## Resumen

En esta lección aprendiste:

- Las **cinco opciones** del comando Circle y cuándo usar cada una
- Cómo dibujar círculos con **2-Point** (endpoints del diámetro)
- Cómo crear círculos con **3-Point** (puntos en circunferencia)
- Cómo usar **Tan Tan Radius** para círculos tangentes con radio específico
- Cómo aplicar **Tan Tan Tan** para círculos tangentes a tres objetos
- La importancia de **activar/desactivar Object Snap** según la opción
- Configuración de **Endpoint y Node** en running mode
- Solución de errores comunes como "Circle does not exist"

### Puntos Clave

1. **2-Point** define el diámetro con dos endpoints
2. **3-Point** pasa por tres puntos en la circunferencia
3. **Tan Tan Radius** requiere Object Snap OFF
4. **Tan Tan Tan** es perfecto para círculos inscritos
5. Siempre verifica la capa actual antes de dibujar

## Recursos Adicionales

### Videos Recomendados
- AutoCAD 2026: Circle Command Overview
- Advanced Circle Techniques in AutoCAD
- Object Snap and Circle Options

### Documentación Oficial
- [Autodesk Help: CIRCLE Command](https://help.autodesk.com/view/ACD/2026/ENU/?guid=GUID-4F0E5E26-C9ED-4F56-A9B4-1E617D70FC38)
- [Object Snap Settings](https://help.autodesk.com/view/ACD/2026/ENU/?guid=GUID-260F2239-96F2-4544-BB64-F91FA9C9D32C)

### Práctica Adicional
- AutoCAD Exercises: Circle Command
- CAD Tutorial: Tangent Circles
- Practice Drawings: Geometric Constructions

## Próximos Pasos

En la **Lección 5** aprenderás sobre el **Comando Arc**, que te permitirá crear arcos usando diferentes métodos y opciones similares a Circle.

---

## Navegación del Curso

- [← Lección 3: Comando Line - Técnicas Avanzadas](leccion-03-comando-line-avanzado.md)
- [Lección 5: Comando Arc →](leccion-05-comando-arc.md)
- [↑ Volver al Módulo 2](../modulo-2-construccion-basica/README.md)
- [↑ Volver al Índice del Curso](../README.md)

---

**Curso:** AutoCAD 2026 - De Principiante a Experto
**Módulo:** 2 - Construcción Básica
**Lección:** 4 - Comando Circle - Opciones Avanzadas
**Duración estimada:** 45 minutos
**Nivel:** Principiante-Intermedio

---

*Documento creado para Universidad Autodesk - Nolivos Law*
*Actualizado: 2025*
