# Lección 5: Polysolid y 3D Polyline

## Introducción

Mientras que las primitivas 3D (Box, Cylinder, Sphere) son ideales para formas volumétricas compactas, el modelado arquitectónico frecuentemente requiere crear estructuras lineales como muros, cercas, vigas y conductos. AutoCAD 2026 proporciona dos herramientas especializadas para este propósito: **POLYSOLID** y **3D POLYLINE**.

POLYSOLID crea sólidos tridimensionales con sección transversal rectangular siguiendo una trayectoria, ideal para muros arquitectónicos. 3D POLYLINE genera polilíneas que existen en el espacio tridimensional, útiles para representar rutas, tuberías, cables y elementos lineales sin volumen.

Esta lección cubre ambas herramientas en profundidad, con énfasis especial en aplicaciones arquitectónicas y técnicas de conversión entre objetos 2D y 3D.

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Crear muros 3D usando el comando POLYSOLID
- Configurar altura y ancho de Polysolids
- Convertir líneas 2D, arcos y polilíneas a Polysolids
- Dibujar polilíneas tridimensionales con 3D POLYLINE
- Editar vértices de 3D Polylines
- Aplicar Polysolid en modelado arquitectónico de interiores y exteriores
- Comprender diferencias entre POLYSOLID, EXTRUDE y modelado tradicional
- Optimizar workflow de modelado de muros

## 1. Comando POLYSOLID

### 1.1 Descripción General

El comando **POLYSOLID** crea sólidos tridimensionales con sección transversal rectangular constante que sigue una trayectoria dibujada. Piensa en POLYSOLID como dibujar una polilínea 2D, pero el resultado es un muro 3D sólido.

**Comando:** `POLYSOLID`
**Ribbon:** Home tab → Modeling panel → Polysolid
**Aplicación principal:** Modelado de muros arquitectónicos

### 1.2 Configuración Inicial: Altura y Ancho

Antes de dibujar un Polysolid, debes establecer sus dimensiones de sección transversal.

**Variables de sistema:**
- `PSOLHEIGHT`: Altura del Polysolid (dimensión vertical)
- `PSOLWIDTH`: Ancho del Polysolid (grosor del muro)

**Configuración recomendada para muros residenciales:**
```
Command: PSOLHEIGHT
Enter new value for PSOLHEIGHT <240.0000>: 240 (altura de muro en cm)

Command: PSOLWIDTH
Enter new value for PSOLWIDTH <15.0000>: 15 (grosor de muro en cm)
```

**Nota:** Las unidades dependen de tu configuración de dibujo. Ajusta valores según tu sistema (milímetros, centímetros, pulgadas).

### 1.3 Método Estándar: Dibujar Polysolid

**Procedimiento:**
```
Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify] <Object>: (punto inicial)
Specify next point or [Arc/Undo]: (punto siguiente)
Specify next point or [Arc/Close/Undo]: (punto siguiente)
Specify next point or [Arc/Close/Undo]: (continuar o Enter para terminar)
```

El Polysolid se dibuja de manera similar a una PLINE, pero el resultado es un sólido 3D con altura y ancho configurados.

![Polysolid dibujando muro](../imagenes/polysolid-dibujo-muro.png)

**Ejemplo: Habitación Rectangular**
```
Command: PSOLHEIGHT
Enter new value: 270

Command: PSOLWIDTH
Enter new value: 15

Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify]: 0,0,0
Specify next point or [Arc/Undo]: 500,0,0
Specify next point or [Arc/Close/Undo]: 500,400,0
Specify next point or [Arc/Close/Undo]: 0,400,0
Specify next point or [Arc/Close/Undo]: C (Close para cerrar)
```

Resultado: Muros de habitación de 5×4 metros, altura 2.70m, grosor 15cm.

### 1.4 Opción Height (Durante el Comando)

Cambia la altura del Polysolid durante su creación.

**Procedimiento:**
```
Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify]: H
Specify height <240.0000>: 300 (nueva altura)
Specify start point or [Object/Height/Width/Justify]: (continuar dibujando)
```

### 1.5 Opción Width (Durante el Comando)

Cambia el ancho del Polysolid durante su creación.

**Procedimiento:**
```
Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify]: W
Specify width <15.0000>: 20 (nuevo ancho)
Specify start point or [Object/Height/Width/Justify]: (continuar dibujando)
```

### 1.6 Opción Justify (Justificación)

Determina cómo se alinea el Polysolid respecto a la trayectoria dibujada.

**Opciones de justificación:**
- **Left:** Trayectoria está en el lado izquierdo del muro (muro se extiende a la derecha)
- **Center:** Trayectoria está en el centro del muro (muro se extiende igual a ambos lados)
- **Right:** Trayectoria está en el lado derecho del muro (muro se extiende a la izquierda)

**Configuración:**
```
Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify]: J
Enter justification [Left/Center/Right] <Center>: L (Left)
Specify start point or [Object/Height/Width/Justify]: (continuar)
```

**Aplicación práctica:**

- **Left:** Útil cuando dibujas el lado interior de un muro exterior
- **Center:** Útil para muros divisorios (línea central es la trayectoria)
- **Right:** Útil cuando dibujas el lado exterior de un muro interior

![Justificación Left-Center-Right](../imagenes/polysolid-justificacion.png)

### 1.7 Opción Arc (Arcos en Polysolid)

Permite agregar segmentos curvos al Polysolid.

**Procedimiento:**
```
Command: POLYSOLID
Specify start point: 0,0,0
Specify next point or [Arc/Undo]: 200,0,0
Specify next point or [Arc/Close/Undo]: A (Arc)
Specify endpoint of arc or [Close/Direction/Line/Second pt/Undo]: 300,100,0
Specify endpoint of arc or [Close/Direction/Line/Second pt/Undo]: L (regresar a líneas)
Specify next point or [Arc/Close/Undo]: 500,100,0
```

**Aplicación:** Muros curvos, paredes circulares, diseños orgánicos.

### 1.8 Opción Object (Convertir Objetos 2D)

La opción más poderosa de POLYSOLID: convierte objetos 2D existentes (LINE, ARC, PLINE, CIRCLE) en muros 3D.

**Procedimiento:**
```
Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify] <Object>: O (Object)
Select object: (selecciona línea, arco, polilínea o círculo)
```

AutoCAD convierte instantáneamente el objeto 2D en un Polysolid con la altura y ancho configurados.

**Objetos convertibles:**
- LINE → Muro recto
- ARC → Muro curvo
- PLINE (polyline) → Muros siguiendo toda la trayectoria
- CIRCLE → Muro circular cerrado
- SPLINE → Muro siguiendo curva spline

**Workflow arquitectónico recomendado:**
1. Dibuja planta arquitectónica en 2D con PLINE
2. Configura altura y ancho de muros (PSOLHEIGHT, PSOLWIDTH)
3. Usa POLYSOLID → Object para convertir cada muro a 3D
4. Resultado: Modelo 3D completo de muros en minutos

![Conversión de PLINE a Polysolid](../imagenes/polysolid-conversion.png)

## 2. Edición de Polysolids

### 2.1 Properties Palette

Selecciona un Polysolid y abre Properties (Ctrl+1):

**Propiedades editables:**
- **Height:** Altura del muro
- **Width:** Ancho/grosor del muro
- **Justification:** Left/Center/Right

Modificar estos valores actualiza el sólido dinámicamente.

### 2.2 Grips de Edición

Selecciona un Polysolid para ver grips:
- **Grips de vértices:** Mover esquinas del muro
- **Grips de segmentos:** Desplazar segmentos completos
- **Grips de altura:** Cambiar altura arrastrando verticalmente

### 2.3 Operaciones Booleanas

Los Polysolids son sólidos 3D completos, por lo que puedes aplicar operaciones booleanas:
- **UNION:** Unir múltiples Polysolids
- **SUBTRACT:** Restar aberturas (puertas, ventanas)
- **INTERSECT:** Intersección de muros

(Operaciones booleanas se cubren en detalle en Módulo 2)

## 3. Comando 3DPOLY (3D Polyline)

### 3.1 Descripción General

El comando **3DPOLY** crea polilíneas tridimensionales. A diferencia de PLINE (que es 2D en el plano XY), 3DPOLY puede tener vértices a diferentes elevaciones Z.

**Comando:** `3DPOLY`
**Ribbon:** Home tab → Draw panel → 3D Polyline
**Diferencia clave:** 3D Polylines NO tienen ancho ni pueden contener arcos (solo líneas rectas)

### 3.2 Creación Básica

**Procedimiento:**
```
Command: 3DPOLY
Specify start point of polyline: 0,0,0
Specify endpoint of line or [Undo]: 100,0,0
Specify endpoint of line or [Close/Undo]: 100,100,50 (elevación Z cambia)
Specify endpoint of line or [Close/Undo]: 0,100,100 (elevación Z sigue cambiando)
Specify endpoint of line or [Close/Undo]: C (Close)
```

Resultado: Polilínea 3D con vértices a diferentes elevaciones.

![3D Polyline con elevaciones variables](../imagenes/3dpoly-elevaciones.png)

### 3.3 Uso de Coordenadas 3D

3DPOLY acepta todos los métodos de entrada de coordenadas:
- **Absolutas:** `100,50,75`
- **Relativas:** `@50,0,25`
- **Cilíndricas:** `@100<45,30`
- **Esféricas:** `@150<45<60`
- **Filtros:** `.Z`, `.XY`, etc.

**Ejemplo con filtros:**
```
Command: 3DPOLY
Specify start point of polyline: 0,0,0
Specify endpoint of line or [Undo]: .XY
of (selecciona punto para XY)
(need Z): 50 (elevación específica)
Specify endpoint of line or [Close/Undo]: (continuar)
```

### 3.4 Aplicaciones de 3D Polyline

**Arquitectura:**
- Rutas de tuberías con cambios de elevación
- Cables eléctricos en 3D
- Rutas de circulación vertical
- Barandas en escaleras

**Ingeniería Civil:**
- Trazado de carreteras con pendientes
- Líneas de drenaje con gradientes
- Cables de transmisión eléctrica
- Perfiles topográficos

**Diseño Mecánico:**
- Trayectorias de mangueras y cables
- Rutas de ensamblaje
- Guías de movimiento

### 3.5 Limitaciones de 3D Polyline

**NO soporta:**
- Anchos variables (Width)
- Segmentos de arco (solo líneas rectas)
- Propiedades de grosor

**Para arcos en 3D:** Usa SPLINE o combina múltiples 3D Polylines.

## 4. Edición de 3D Polylines

### 4.1 Comando PEDIT para 3D Polylines

**Comando:** `PEDIT`
**Selecciona:** 3D Polyline

**Opciones disponibles:**
```
Command: PEDIT
Select polyline or [Multiple]: (selecciona 3D polyline)
Enter an option [Close/Open/Edit vertex/Spline curve/Decurve/Undo]:
```

### 4.2 Opción Edit Vertex

Permite editar vértices individuales de la 3D Polyline.

**Procedimiento:**
```
Command: PEDIT
Select polyline: (selecciona 3DPOLY)
Enter an option: E (Edit vertex)
Enter a vertex editing option [Next/Previous/Break/Insert/Move/Regen/Straighten/eXit]:
```

**Sub-opciones:**
- **Next/Previous:** Navegar entre vértices
- **Move:** Mover el vértice actual
- **Insert:** Insertar nuevo vértice
- **Break:** Romper la polilínea en el vértice
- **Straighten:** Eliminar vértices entre dos puntos

### 4.3 Conversión a Spline

Convierte la 3D Polyline en una curva suave (spline).

**Procedimiento:**
```
Command: PEDIT
Select polyline: (selecciona 3DPOLY)
Enter an option: S (Spline curve)
```

Resultado: La polilínea se suaviza creando curva spline ajustada a los vértices.

**Para revertir:**
```
Enter an option: D (Decurve)
```

## 5. Diferencias: POLYSOLID vs EXTRUDE vs 3DPOLY

### Comparación de Herramientas

| Característica | POLYSOLID | EXTRUDE | 3DPOLY |
|---|---|---|---|
| Resultado | Sólido 3D | Sólido 3D | Wireframe (línea) |
| Ancho/grosor | Sí | No (usa perfil) | No |
| Arcos | Sí | Sí (en perfil) | No |
| Sección transversal | Rectangular fija | Cualquier perfil | N/A |
| Edición de altura | Dinámica | Por parámetro | N/A |
| Convertir de 2D | Sí (directo) | Sí (2 pasos) | No (solo dibujo 3D) |
| Velocidad | Rápido | Medio | Muy rápido |
| Aplicación principal | Muros arquitectónicos | Formas complejas | Rutas y guías 3D |

### Cuándo Usar Cada Herramienta

**POLYSOLID:**
- Muros arquitectónicos con grosor constante
- Modelado rápido de plantas arquitectónicas
- Conversión de planos 2D a 3D
- Cuando necesitas cambiar dimensiones posteriormente

**EXTRUDE:**
- Perfiles complejos (molduras, vigas I, canales)
- Secciones transversales no rectangulares
- Cuando necesitas control total sobre el perfil
- Modelado mecánico

**3DPOLY:**
- Representación de tuberías sin modelar el volumen
- Rutas de cables
- Guías de construcción
- Cuando no necesitas sólidos, solo trayectorias

## 6. Workflow Arquitectónico con Polysolid

### Método Recomendado: Del 2D al 3D

**Paso 1: Dibujar Planta 2D**
```
Command: PLINE (dibujar muros como polilíneas 2D)
```

**Paso 2: Configurar Dimensiones**
```
Command: PSOLHEIGHT
Enter new value: 270

Command: PSOLWIDTH
Enter new value: 15
```

**Paso 3: Configurar Justificación**
```
(Antes de convertir, decide si tus líneas 2D representan el centro, lado izquierdo o derecho del muro)
```

**Paso 4: Convertir a Polysolid**
```
Command: POLYSOLID
Specify start point or [Object/Height/Width/Justify]: J
Enter justification: C (Center, si tus líneas son ejes de muros)
Specify start point or [Object/Height/Width/Justify]: O
Select object: (selecciona primera polilínea)

(Repetir para cada muro)
```

**Paso 5: Unir Muros (Opcional)**
```
Command: UNION
Select objects: (selecciona todos los Polysolids que deben unirse)
```

**Paso 6: Restar Aberturas (Puertas/Ventanas)**
```
Command: BOX (crear box para abertura de puerta)
Command: SUBTRACT
Select solids, surfaces, and regions to subtract from: (selecciona muro)
Select solids, surfaces, and regions to subtract: (selecciona box de puerta)
```

Resultado: Modelo 3D arquitectónico completo con muros, aberturas y dimensiones profesionales.

## 7. Ejercicios Prácticos

### Ejercicio 1: Habitación Simple con Polysolid
1. Configura PSOLHEIGHT = 240, PSOLWIDTH = 15
2. Dibuja Polysolid rectangular de 400×300 unidades (cerrado)
3. Cambia a vista isométrica para verificar

### Ejercicio 2: Conversión de Planta 2D
1. Dibuja planta 2D de habitación en forma de L con PLINE
2. Configura dimensiones de Polysolid
3. Convierte PLINE a Polysolid usando opción Object
4. Verifica altura y grosor en vista 3D

### Ejercicio 3: Muro Curvo
1. Dibuja Polysolid con segmento recto inicial
2. Usa opción Arc para agregar segmento curvo
3. Termina con segmento recto
4. Experimenta con diferentes justificaciones

### Ejercicio 4: 3D Polyline con Elevaciones
1. Dibuja 3DPOLY con 4 vértices a elevaciones 0, 25, 50, 75
2. Usa PEDIT para convertir a Spline curve
3. Observa el resultado suavizado

### Ejercicio 5: Tubería con Cambios de Elevación
1. Dibuja 3DPOLY representando ruta de tubería
2. Inicia en Z=0, eleva a Z=50, baja a Z=20
3. Usa coordenadas relativas para precisión
4. En proyecto posterior: convierte a sólido con SWEEP (Módulo 2)

## 8. Errores Comunes y Soluciones

### Error 1: Polysolid con altura incorrecta
**Síntoma:** Muros muy bajos o muy altos.
**Solución:** Verifica PSOLHEIGHT antes de dibujar. Modifica en Properties si ya está creado.

### Error 2: Ancho de muro incorrecto
**Síntoma:** Muros muy delgados o muy gruesos.
**Solución:** Verifica PSOLWIDTH. Ajusta en Properties después si es necesario.

### Error 3: Justificación equivocada
**Síntoma:** Muros no alineados correctamente con planta 2D.
**Solución:** Usa opción Justify antes de dibujar, o modifica en Properties.

### Error 4: 3DPOLY no permite arcos
**Síntoma:** Al intentar agregar arcos, no funciona.
**Solución:** 3DPOLY solo soporta líneas rectas. Usa múltiples segmentos o SPLINE para curvas.

### Error 5: Objeto 2D no se convierte
**Síntoma:** Al usar POLYSOLID → Object, no convierte.
**Solución:** Verifica que el objeto sea LINE, ARC, PLINE, CIRCLE o SPLINE. Otros objetos no son compatibles.

## Resumen

En esta lección has aprendido:

- POLYSOLID crea muros 3D con sección rectangular constante
- Configuración de altura (PSOLHEIGHT) y ancho (PSOLWIDTH)
- Justificación (Left/Center/Right) controla alineación del muro
- Opción Object convierte objetos 2D a Polysolids instantáneamente
- 3DPOLY crea polilíneas con vértices a diferentes elevaciones Z
- 3D Polylines son ideales para rutas, tuberías y guías 3D
- PEDIT permite editar vértices de 3D Polylines
- Workflow 2D→3D optimiza modelado arquitectónico

## Próxima Lección

En la Lección 6, aprenderás los fundamentos del modelado Mesh: primitivas mesh, diferencias con sólidos, niveles de suavizado y técnicas de conversión entre mesh y sólidos.

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Intermedia
**Aplicación principal:** Modelado arquitectónico de muros
