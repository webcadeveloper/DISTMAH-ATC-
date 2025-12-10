# Lección 6: Mesh Básico

## Introducción

El modelado mesh (mallas) representa una alternativa al modelado de sólidos 3D, especialmente útil para formas orgánicas, terrenos irregulares y geometría compleja que no se adapta bien a sólidos booleanos. AutoCAD 2026 incluye potentes herramientas de mesh modeling que complementan las capacidades de modelado de sólidos.

Un mesh es una superficie tridimensional compuesta por facetas (caras planas) y vértices. A diferencia de los sólidos, los meshes son superficies subdivididas que pueden suavizarse incrementando su nivel de smoothness (suavidad). Esta flexibilidad los hace ideales para modelado artístico, terrenos topográficos y formas complejas.

Esta lección introduce los conceptos fundamentales de mesh modeling: primitivas mesh, niveles de suavizado, diferencias con sólidos 3D, y técnicas de conversión entre mesh y sólidos.

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Comprender la diferencia entre mesh y sólidos 3D
- Crear primitivas mesh (Box, Cylinder, Sphere, Cone, Pyramid, Wedge, Torus)
- Configurar niveles de suavizado (smoothness) de meshes
- Convertir sólidos 3D a meshes
- Convertir meshes suaves a sólidos
- Editar meshes básicamente mediante grips y subobjetos
- Aplicar mesh modeling en terrenos y formas orgánicas
- Decidir cuándo usar mesh vs sólidos

## 1. ¿Qué es un Mesh?

### 1.1 Definición Técnica

Un **mesh** (malla) es un objeto 3D compuesto por:
- **Vértices:** Puntos en el espacio 3D
- **Aristas:** Líneas que conectan vértices
- **Facetas (Faces):** Superficies planas definidas por vértices y aristas

A diferencia de los sólidos ACIS (Box, Cylinder, Sphere), que tienen definición matemática exacta, los meshes son aproximaciones poligonales de superficies.

![Comparación Solid vs Mesh](../imagenes/solid-vs-mesh-comparison.png)

### 1.2 Ventajas de Meshes

**Flexibilidad:**
- Suavizado variable sin cambiar geometría base
- Edición de vértices, aristas y facetas individuales
- Formas orgánicas complejas

**Rendimiento:**
- Menor consumo de recursos que sólidos muy complejos
- Visualización rápida con niveles de detalle ajustables

**Interoperabilidad:**
- Formato común en modelado 3D (compatible con software de animación y gaming)
- Exportación a formatos STL, OBJ para impresión 3D

### 1.3 Desventajas de Meshes

**Precisión:**
- Aproximaciones poligonales, no superficies matemáticas exactas
- Acotación y medición menos precisa

**Edición:**
- Operaciones booleanas limitadas
- Más complejo modificar formas básicas

**Compatibilidad:**
- Algunos comandos de AutoCAD no funcionan con meshes
- Conversión a sólidos puede perder detalle

### 1.4 Cuándo Usar Mesh vs Sólidos

**Usar Sólidos para:**
- Modelado arquitectónico de precisión
- Diseño mecánico con tolerancias exactas
- Operaciones booleanas frecuentes (Union, Subtract, Intersect)
- Cuando necesitas mediciones exactas

**Usar Mesh para:**
- Terrenos topográficos irregulares
- Formas orgánicas (paisajismo, esculturas)
- Modelos con muchos vértices editables
- Exportación a software de rendering/animación
- Impresión 3D (conversión final a mesh)

## 2. Primitivas Mesh

### 2.1 Comandos de Primitivas Mesh

AutoCAD 2026 proporciona primitivas mesh equivalentes a las primitivas de sólidos:

**Comandos:**
- `MESH` → Crea mesh genérica
- `3DMESH` → Crea mesh poligonal
- Primitivas específicas están en Ribbon: Mesh tab → Primitives panel

**Primitivas mesh disponibles:**
- Mesh Box
- Mesh Cone
- Mesh Cylinder
- Mesh Pyramid
- Mesh Sphere
- Mesh Wedge
- Mesh Torus

### 2.2 Activar Mesh Modeling Workspace

Para acceso completo a herramientas mesh:

1. Cambia workspace a "3D Modeling" (si no está activo)
2. Ribbon → Tab "Mesh" aparece con todas las herramientas

**Alternativa:** Usa comandos directamente sin depender del ribbon.

### 2.3 Crear Mesh Box

**Comando:** `MESHBOX`

**Procedimiento:**
```
Command: MESHBOX
Specify first corner or [Center]: 0,0,0
Specify other corner or [Cube/Length]: 100,80,0
Specify height or [2Point]: 60
```

Resultado: Mesh box de 100×80×60 unidades.

**Comparación con BOX:**
- Procedimiento idéntico
- Resultado es mesh, no sólido
- Puedes ajustar smoothness después

![Mesh Box con facetas visibles](../imagenes/meshbox-facetas.png)

### 2.4 Crear Mesh Sphere

**Comando:** `MESHSPHERE`

**Procedimiento:**
```
Command: MESHSPHERE
Specify center point or [3P/2P/Ttr]: 0,0,0
Specify radius or [Diameter]: 50
```

Resultado: Mesh sphere de radio 50.

**Nota:** La esfera mesh tiene facetas visibles (polígonos). El suavizado (smoothing) la hará parecer más redonda.

### 2.5 Crear Mesh Cylinder

**Comando:** `MESHCYLINDER`

**Procedimiento:**
```
Command: MESHCYLINDER
Specify center point of base or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 40
Specify height or [2Point/Axis endpoint]: 100
```

### 2.6 Crear Mesh Cone

**Comando:** `MESHCONE`

**Procedimiento:**
```
Command: MESHCONE
Specify center point of base or [3P/2P/Ttr/Elliptical]: 0,0,0
Specify base radius or [Diameter]: 60
Specify height or [2Point/Axis endpoint/Top radius]: 120
```

### 2.7 Crear Mesh Pyramid

**Comando:** `MESHPYRAMID`

**Procedimiento:**
```
Command: MESHPYRAMID
Specify center point of base or [Edge/Sides]: 0,0,0
Specify base radius or [Inscribed]: 50
Specify height or [2Point/Axis endpoint/Top radius]: 80
```

### 2.8 Crear Mesh Torus

**Comando:** `MESHTORUS`

**Procedimiento:**
```
Command: MESHTORUS
Specify center point or [3P/2P/Ttr]: 0,0,0
Specify radius or [Diameter]: 80
Specify tube radius or [2Point/Diameter]: 20
```

### 2.9 Crear Mesh Wedge (Cuña)

**Comando:** `MESHWEDGE`

Crea una cuña (mitad de un box dividido diagonalmente).

**Procedimiento:**
```
Command: MESHWEDGE
Specify first corner or [Center]: 0,0,0
Specify other corner or [Cube/Length]: 100,80,0
Specify height or [2Point]: 50
```

Resultado: Cuña mesh con rampa inclinada.

## 3. Niveles de Suavizado (Smoothness)

### 3.1 Concepto de Smoothness

El **smoothness level** controla cuántas subdivisiones tiene el mesh. Niveles más altos crean superficies más suaves pero aumentan el número de facetas.

**Valores de smoothness:** 0 (sin suavizar) a 4 (máximo suavizado)

### 3.2 Variable SMOOTHMESHGRID

Controla la visualización de la malla subyacente cuando el mesh está suavizado.

**Valores:**
- `0`: Oculta la malla original (solo muestra superficie suave)
- `1`: Muestra la malla original (wireframe de control)

**Configuración:**
```
Command: SMOOTHMESHGRID
Enter new value for SMOOTHMESHGRID <0>: 1 (mostrar malla de control)
```

### 3.3 Variable SMOOTHMESHMAXLEV

Define el nivel máximo de suavizado permitido.

**Valores:** 0 a 4
**Recomendado:** 4 (máxima flexibilidad)

```
Command: SMOOTHMESHMAXLEV
Enter new value for SMOOTHMESHMAXLEV <4>: 4
```

### 3.4 Variable SMOOTHMESHMAXFACE

Controla el número máximo de facetas permitidas después de suavizado.

**Valor predeterminado:** 1,000,000
**Propósito:** Prevenir que modelos excesivamente complejos cuelguen el sistema

```
Command: SMOOTHMESHMAXFACE
Enter new value for SMOOTHMESHMAXFACE <1000000>: 500000 (para sistemas con menos RAM)
```

### 3.5 Aplicar Smoothness a Mesh

**Método 1: Durante creación**

Las primitivas mesh se crean con smoothness = 0 por defecto.

**Método 2: Después de creación con MESHSMOOTH**

**Comando:** `MESHSMOOTH`

**Procedimiento:**
```
Command: MESHSMOOTH
Select mesh objects to smooth: (selecciona mesh)
Select mesh objects to smooth: (Enter)
```

El mesh incrementa su nivel de smoothness en 1. Repite el comando para aumentar más.

**Método 3: Propiedades**

1. Selecciona mesh
2. Ctrl+1 (Properties palette)
3. Sección "Mesh":
   - **Smoothness level:** Cambia de 0 a 4

![Mesh con diferentes niveles de smoothness](../imagenes/mesh-smoothness-levels.png)

### 3.6 Reducir Smoothness (MESHUNSMOOTH)

**Comando:** `MESHUNSMOOTH`

Reduce el nivel de smoothness en 1.

**Procedimiento:**
```
Command: MESHUNSMOOTH
Select mesh objects: (selecciona mesh)
```

**Nota:** No se puede reducir por debajo de smoothness = 0.

## 4. Conversión entre Mesh y Sólidos

### 4.1 Convertir Sólido a Mesh

**Comando:** `MESHSMOOTH` aplicado a sólido

**Procedimiento:**
```
Command: BOX (crear sólido box)
Specify first corner: 0,0,0
Specify other corner: 100,80,0
Specify height: 60

Command: MESHSMOOTH
Select mesh objects to smooth: (selecciona el box sólido)
```

AutoCAD pregunta si deseas convertir el sólido a mesh:
```
Convert to smooth mesh [Yes/No] <Yes>: Y
```

Resultado: El sólido se convierte a mesh con smoothness level = 1.

### 4.2 Convertir Mesh a Sólido

**Comando:** `CONVTOSURFACE` o `CONVTOSOLID`

**CONVTOSURFACE:** Convierte a superficie 3D
**CONVTOSOLID:** Convierte a sólido 3D (solo si el mesh es cerrado/watertight)

**Procedimiento:**
```
Command: CONVTOSOLID
Select objects: (selecciona mesh cerrado)
```

Si el mesh está cerrado (sin huecos), se convierte a sólido 3D.

**Condiciones para conversión exitosa:**
- El mesh debe ser cerrado (sin aberturas)
- Geometría debe ser válida para sólido
- No debe tener auto-intersecciones

### 4.3 Mesh Abierto vs Cerrado

**Mesh cerrado (watertight):**
- Superficie completamente cerrada sin huecos
- Puede convertirse a sólido
- Ejemplo: Sphere, Box, Cylinder completos

**Mesh abierto:**
- Tiene aberturas o bordes abiertos
- Solo puede convertirse a superficie
- Ejemplo: Medio cilindro, esfera cortada

### 4.4 Verificar si Mesh es Cerrado

**Método visual:**
1. Selecciona mesh
2. Si tiene bordes abiertos, se muestran como aristas resaltadas

**Método por propiedades:**
1. Selecciona mesh
2. Ctrl+1 (Properties)
3. Verifica "Closed" en sección Geometry

## 5. Edición Básica de Meshes

### 5.1 Grips de Mesh

Selecciona un mesh para ver grips de edición:

**Grips de vértices:**
- Arrastra vértices para deformar el mesh
- Disponible en smoothness level = 0

**Grips de facetas:**
- Selecciona cara completa
- Disponible en todos los niveles

**Grips de aristas:**
- Edita aristas específicas

### 5.2 Selección de Subobjetos

**Activar selección de subobjetos:**
1. Mantén presionado `Ctrl`
2. Haz clic sobre vértice, arista o faceta del mesh
3. Suelta `Ctrl`
4. El subobjeto queda seleccionado
5. Arrastra grip para editar

**Tipos de subobjetos:**
- **Vertex (Vértice):** Punto individual
- **Edge (Arista):** Línea entre dos vértices
- **Face (Faceta):** Superficie plana

### 5.3 Comando MESHSMOOTHMORE

Incrementa smoothness de áreas específicas del mesh.

**Procedimiento:**
```
Command: MESHSMOOTHMORE
Select mesh face or [Object]: (selecciona faceta específica)
```

Solo la faceta seleccionada incrementa su nivel de suavizado.

### 5.4 Comando MESHSMOOTHLESS

Reduce smoothness de áreas específicas.

**Procedimiento:**
```
Command: MESHSMOOTHLESS
Select mesh face or [Object]: (selecciona faceta)
```

### 5.5 Comando MESHREFINE

Aumenta la densidad de facetas en el mesh (subdivide).

**Procedimiento:**
```
Command: MESHREFINE
Select mesh objects or faces: (selecciona mesh completo o facetas)
```

Resultado: Mesh tiene más facetas (más detalle, pero también más complejo).

## 6. Aplicaciones Prácticas de Mesh

### 6.1 Terrenos Topográficos

**Workflow:**
1. Importa puntos topográficos (X,Y,Z)
2. Crea mesh desde nube de puntos
3. Aplica smoothness para terreno suave
4. Edita vértices para ajustes finos

**Comando:** `3DMESH` con matriz de puntos

### 6.2 Formas Orgánicas

**Workflow:**
1. Inicia con primitiva mesh (Sphere, Box)
2. Incrementa smoothness
3. Edita vértices para crear forma deseada
4. Refina áreas específicas con MESHREFINE

**Aplicación:** Esculturas digitales, paisajismo, elementos decorativos

### 6.3 Preparación para Impresión 3D

**Workflow:**
1. Modela objeto como sólido 3D
2. Convierte a mesh con MESHSMOOTH
3. Ajusta densidad de facetas
4. Exporta a STL con comando STLOUT

```
Command: STLOUT
Select objects: (selecciona mesh)
```

### 6.4 Modelado de Personajes (Básico)

**Workflow:**
1. Primitivas mesh como bloques constructivos (Sphere para cabeza, Cylinder para cuerpo)
2. Incrementa smoothness
3. Edita vértices para anatomía básica
4. Refina detalles con MESHREFINE

**Nota:** Para modelado de personajes avanzado, software especializado (Blender, Maya, ZBrush) es más apropiado.

## 7. Diferencias Técnicas: Mesh vs Sólidos

### Comparación Detallada

| Aspecto | Sólidos 3D | Meshes |
|---|---|---|
| Definición matemática | ACIS (exacta) | Poligonal (aproximada) |
| Operaciones booleanas | Completas (Union, Subtract, Intersect) | Limitadas |
| Edición de vértices | No directa | Sí (directa) |
| Suavizado | No aplicable | Smoothness levels 0-4 |
| Precisión de medición | Exacta | Aproximada |
| Exportación STL | Requiere conversión | Directa |
| Modificación paramétrica | Sí (Properties) | Limitada |
| Uso de memoria | Medio | Variable (según facetas) |
| Velocidad de visualización | Rápida | Variable |
| Aplicación principal | Arquitectura/Mecánica | Orgánico/Artístico |

## 8. Variables de Sistema Relacionadas

### Variables Importantes

**SMOOTHMESHGRID:** Muestra/oculta malla de control
```
0 = Oculta
1 = Muestra
```

**SMOOTHMESHMAXLEV:** Nivel máximo de smoothness
```
Rango: 0-4
Recomendado: 4
```

**SMOOTHMESHMAXFACE:** Máximo de facetas permitidas
```
Default: 1,000,000
Ajustar según capacidad del sistema
```

**MESHTYPE:** Tipo de mesh creado por primitivas
```
0 = Mesh optimizado
1 = Mesh suavizado
```

**DIVMESHBOXLENGTH, WIDTH, HEIGHT:** Divisiones de Mesh Box
```
Control de densidad inicial de facetas
```

## 9. Ejercicios Prácticos

### Ejercicio 1: Comparación Solid vs Mesh
1. Crea BOX sólido (100×80×60)
2. Crea MESHBOX con mismas dimensiones
3. Aplica MESHSMOOTH al mesh (3 veces)
4. Compara visualmente ambos objetos
5. Selecciona cada uno y observa propiedades

### Ejercicio 2: Mesh con Smoothness Variable
1. Crea MESHSPHERE (radio 50)
2. Incrementa smoothness a nivel 2 con MESHSMOOTH
3. Selecciona una faceta (Ctrl+clic)
4. Usa MESHSMOOTHMORE en esa faceta
5. Observa cómo solo esa área se suaviza más

### Ejercicio 3: Conversión Solid → Mesh → Solid
1. Crea CYLINDER sólido (radio 40, altura 100)
2. Usa MESHSMOOTH para convertir a mesh
3. Incrementa smoothness a nivel 1
4. Usa CONVTOSOLID para convertir de nuevo a sólido
5. Compara con el cilindro original

### Ejercicio 4: Edición de Vértices
1. Crea MESHBOX simple (smoothness 0)
2. Activa selección de subobjetos (Ctrl+clic)
3. Selecciona vértice superior central
4. Arrastra hacia arriba 30 unidades
5. Observa deformación del mesh

### Ejercicio 5: Terreno Simple
1. Crea MESHBOX muy plano (200×200×10)
2. Incrementa smoothness a nivel 1
3. Edita vértices aleatorios hacia arriba/abajo
4. Crea topografía irregular básica
5. Incrementa smoothness para suavizar

## 10. Errores Comunes y Soluciones

### Error 1: Mesh no se convierte a sólido
**Síntoma:** CONVTOSOLID falla o crea superficie en lugar de sólido.
**Solución:** Verifica que el mesh sea completamente cerrado (no tenga aberturas).

### Error 2: Demasiadas facetas, sistema lento
**Síntoma:** Rendimiento degradado con mesh muy suavizado.
**Solución:** Reduce smoothness level o ajusta SMOOTHMESHMAXFACE a valor menor.

### Error 3: No puedo editar vértices
**Síntoma:** Grips no aparecen en vértices.
**Solución:** Reduce smoothness a 0, o usa Ctrl+clic para selección de subobjetos.

### Error 4: Mesh se ve muy facetado
**Síntoma:** Primitiva mesh no se ve suave.
**Solución:** Incrementa smoothness con MESHSMOOTH o ajusta en Properties.

### Error 5: Malla de control interfiere con visualización
**Síntoma:** Wireframe de control confunde la vista.
**Solución:** SMOOTHMESHGRID = 0 para ocultar malla de control.

## Resumen

En esta lección has aprendido:

- Meshes son superficies poligonales, alternativa a sólidos ACIS
- Primitivas mesh equivalentes a sólidos: Box, Sphere, Cylinder, Cone, Pyramid, Torus, Wedge
- Smoothness levels (0-4) controlan suavizado del mesh
- Conversión solid→mesh con MESHSMOOTH
- Conversión mesh→solid con CONVTOSOLID (si mesh está cerrado)
- Edición de vértices, aristas y facetas mediante grips y subobjetos
- Meshes ideales para terrenos, formas orgánicas y exportación a impresión 3D
- Sólidos ideales para modelado arquitectónico y mecánico de precisión

## Conclusión del Módulo 1

Has completado el Módulo 1: Fundamentos de Modelado 3D. Ahora dominas:
- Workspace 3D y sistema UCS
- Navegación y visualización 3D
- Entrada de coordenadas tridimensionales
- Primitivas 3D (sólidos y mesh)
- Polysolid para muros arquitectónicos
- 3D Polyline para rutas tridimensionales
- Modelado mesh básico

## Próximo Módulo

El Módulo 2: Modelado de Sólidos 3D cubrirá operaciones avanzadas:
- Extrude y Presspull
- Revolve y Sweep
- Loft y operaciones booleanas (Union, Subtract, Intersect)
- Shell, Fillet 3D, Chamfer 3D
- 3D Array y 3D Mirror
- Sección y Slice

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Intermedia
**Prerequisito para:** Módulo 2 - Modelado Avanzado de Sólidos
