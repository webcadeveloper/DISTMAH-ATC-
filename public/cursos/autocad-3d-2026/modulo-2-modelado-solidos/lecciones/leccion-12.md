# Lección 12: Sección y Slice

## Introducción

El análisis interno de modelos 3D y la generación de documentación técnica requieren cortes seccionales. SECTION crea regiones 2D en planos de corte (para vistas de sección en planos). SLICE divide sólidos en partes cortadas (para análisis de geometría interna o crear mitades). SECTIONPLANE (AutoCAD 2026) proporciona planos de corte dinámicos e interactivos.

## Objetivos

- Crear secciones 2D con SECTION en planos especificados
- Cortar sólidos en partes con SLICE
- Definir planos de sección mediante múltiples métodos
- Usar SECTIONPLANE para cortes dinámicos
- Generar vistas de sección para documentación técnica

## 1. Comando SECTION

### 1.1 Fundamentos

**Comando:** `SECTION`

Crea región 2D en la intersección de un plano con el sólido (no modifica el sólido original).

**Resultado:** Objeto REGION 2D que representa el perfil de corte.

### 1.2 Sintaxis Básica

```
Command: SECTION
Select objects: (selecciona sólido(s))
Specify first point on Section plane or [Object/Zaxis/View/XY/YZ/ZX/3points] <3points>:
```

![SECTION creando región 2D](../imagenes/section-region-2d.png)

### 1.3 Opción 3 Points

Define plano mediante tres puntos.

```
SECTION
Specify first point: (punto 1)
Specify second point: (punto 2)
Specify third point: (punto 3)
```

Región 2D se crea en el plano definido por los tres puntos.

### 1.4 Opción Object

Usa objeto plano existente como plano de sección.

```
SECTION → Object
Select a circle, arc, 2D-polyline, or planar 3D object: (selecciona objeto plano)
```

### 1.5 Opciones XY, YZ, ZX

Sección en planos principales del UCS.

```
SECTION → XY (plano XY del UCS actual)
SECTION → YZ (plano YZ)
SECTION → ZX (plano ZX)
```

**Más común:** Alinear UCS con plano de corte deseado, luego usar opción XY.

### 1.6 Ejemplo: Sección de Pieza Mecánica

```
1. Modela pieza mecánica compleja (con cavidades internas)
2. Rota UCS para alinear con plano de corte deseado
3. Comando: SECTION
4. Select objects: (selecciona pieza)
5. Specify plane: XY (plano XY del UCS actual)
```

Resultado: Región 2D que muestra perfil interno de la pieza en ese plano.

**Uso típico:**
1. Crea sección con SECTION
2. Mueve región 2D a un lado
3. Agrega achurado (HATCH) al perfil de sección
4. Crea vista de sección para plano técnico

### 1.7 Opción View

Crea sección perpendicular a la vista actual (plano paralelo a la pantalla).

```
SECTION → View
```

Útil para generar sección "de frente" rápidamente.

## 2. Comando SLICE

### 2.1 Fundamentos

**Comando:** `SLICE`

Divide sólido en dos partes cortadas por un plano. A diferencia de SECTION, SLICE modifica (divide) el sólido original.

**Opciones de retención:**
- Mantener ambas partes
- Mantener solo un lado del corte

### 2.2 Sintaxis Básica

```
Command: SLICE
Select objects to slice: (selecciona sólido)
Specify start point of slicing plane or [planar Object/Surface/Zaxis/View/XY/YZ/ZX/3points] <3points>:
Specify a point on desired side or [keep Both sides] <Both>: B (mantener ambas partes)
```

![SLICE dividiendo sólido](../imagenes/slice-division-solido.png)

### 2.3 Mantener Ambas Partes

```
SLICE → Both sides: B
```

Resultado: Dos sólidos independientes (mitades del original).

**Aplicación:**
- Análisis de geometría interna
- Crear mitades para moldeo
- Visualización de cortes

### 2.4 Mantener Solo un Lado

```
SLICE
(define plano)
Specify a point on desired side: (clic en el lado que deseas conservar)
```

El lado donde haces clic se conserva, el otro se elimina.

**Aplicación:**
- Recortar sólidos
- Eliminar porciones no deseadas
- Crear cortes parciales

### 2.5 Ejemplo: Mitades de Molde

```
1. Modela pieza completa (ej: botella)
2. Comando: SLICE
3. Select objects: (selecciona botella)
4. Slicing plane: YZ (plano YZ, asumiendo simetría)
5. Keep: Both
```

Resultado: Dos mitades de la botella (mitad izquierda y derecha), útiles para diseño de molde de inyección.

### 2.6 Ejemplo: Corte de Edificio

```
1. Modela edificio completo 3D
2. SLICE
3. Select objects: (selecciona edificio)
4. Slicing plane: 3points → (define plano de corte vertical)
5. Specify point on desired side: (clic en la parte frontal del edificio)
```

Resultado: Solo la parte frontal del edificio conservada, mostrando interiores en el corte.

## 3. Comando SECTIONPLANE

### 3.1 Fundamentos (AutoCAD 2026)

**Comando:** `SECTIONPLANE`

Crea plano de sección dinámico e interactivo que puede moverse, rotarse, y ajustarse en tiempo real.

**Ventajas sobre SECTION:**
- Visualización en vivo del corte
- Ajustable con grips
- No crea objetos 2D adicionales (solo visualización)
- Ideal para análisis, no para documentación final

### 3.2 Crear Section Plane

```
Command: SECTIONPLANE
Select face or any point to locate section line or [Draw section/Orthographic]: (selecciona cara de sólido)
```

AutoCAD crea plano de sección alineado con la cara seleccionada.

**Alternativa - Draw Section:**
```
SECTIONPLANE → Draw section
Specify start point: (punto 1)
Specify next point: (punto 2)
Specify next point or ENTER to complete: (Enter)
```

### 3.3 Editar Section Plane

Selecciona section plane → aparecen grips:
- **Grips de esquina:** Mueven el plano
- **Grip central:** Mueve todo el plano
- **Grips de dirección:** Invierten dirección del corte
- **Grips de extensión:** Ajustan tamaño del plano de sección

### 3.4 Section Plane Settings

Selecciona section plane → clic derecho → Properties:
- **Live Section:** On/Off (activar corte en vivo)
- **Color:** Color del plano de sección
- **Transparency:** Transparencia
- **Show Section Plane:** Mostrar/ocultar plano

### 3.5 Generar Sección 2D desde Section Plane

```
1. Crea SECTIONPLANE
2. Ajusta posición con grips
3. Selecciona section plane → clic derecho → "Generate 2D/3D Section..."
4. Diálogo: opciones de exportación (2D section/elevation, 3D section)
5. Insert → coloca sección en el dibujo
```

Resultado: Vista de sección 2D lista para achurado y anotación.

## 4. Aplicaciones Prácticas

### 4.1 Documentación Arquitectónica

**Secciones de Edificio:**
```
1. Modelo 3D completo del edificio
2. SECTIONPLANE en plano vertical atravesando edificio
3. Generate 2D Section
4. Añade HATCH a muros cortados
5. Añade MTEXT con anotaciones
6. Coloca en layout para plano técnico
```

### 4.2 Análisis Mecánico

**Verificar Cavidades Internas:**
```
1. Pieza mecánica con cavidades internas
2. SLICE → Both sides
3. Separa mitades para inspeccionar geometría interna
4. Verifica espesores de pared, cavidades, etc.
5. (Opcional) UNION para re-ensamblar si solo fue análisis
```

### 4.3 Presentaciones de Diseño

**Vista Seccionada Isométrica:**
```
1. Modelo arquitectónico (casa, edificio)
2. SLICE cortando 1/4 del modelo (dos cortes perpendiculares)
3. Elimina 1/4 frontal
4. Vista isométrica del modelo con interiores visibles
```

## 5. Diferencias: SECTION vs SLICE vs SECTIONPLANE

| Aspecto | SECTION | SLICE | SECTIONPLANE |
|---|---|---|---|
| Modifica sólido | No | Sí (divide) | No (visual) |
| Resultado | Región 2D | Sólido(s) cortado(s) | Plano dinámico |
| Interactivo | No | No | Sí |
| Documentación | Sí (directo) | No (indirecto) | Sí (genera 2D) |
| Análisis | Limitado | Excelente | Excelente |
| Reversible | N/A | No (destructivo) | Sí (On/Off) |

**Cuándo usar cada uno:**
- **SECTION:** Generar vistas de sección 2D para planos técnicos rápidamente
- **SLICE:** Dividir sólidos permanentemente, análisis que requiere separación física
- **SECTIONPLANE:** Análisis interactivo, ajuste fino de planos, generar múltiples vistas de sección

## 6. Workflow para Vistas de Sección

### Método Tradicional (SECTION):

1. Alinea UCS con plano de corte deseado
2. `SECTION` → XY
3. `MOVE` región 2D a ubicación apropiada
4. `HATCH` la región (patrón ANSI31 típico)
5. Agrega anotaciones y dimensiones
6. Coloca en layout para impresión

### Método Moderno (SECTIONPLANE):

1. `SECTIONPLANE` → crea plano de sección
2. Ajusta con grips hasta posición correcta
3. Selecciona → Generate 2D/3D Section
4. Insert en ubicación deseada
5. `HATCH` y anotaciones
6. Layout para impresión

**Ventaja del método moderno:** Ajustas el plano visualmente antes de generar, asegurando corte correcto.

## 7. Errores Comunes

### Error 1: SECTION no crea región visible
**Causa:** Plano no intersecta el sólido.
**Solución:** Verifica que plano atraviese el sólido. Usa vista isométrica para confirmar.

### Error 2: SLICE elimina lado incorrecto
**Causa:** Clic en lado equivocado al especificar qué mantener.
**Solución:** Usa UNDO y repite, haciendo clic en el lado correcto. O usa Both y elimina parte no deseada manualmente.

### Error 3: SECTIONPLANE no muestra corte
**Causa:** Live Section desactivado.
**Solución:** Selecciona section plane → Properties → Live Section: Yes

## Resumen

- SECTION crea regiones 2D en planos de corte (no modifica sólido)
- SLICE divide sólidos en partes cortadas (modifica sólido)
- Opciones de plano: 3 puntos, Object, XY/YZ/ZX, View
- SECTIONPLANE proporciona planos de corte dinámicos e interactivos
- Generate 2D Section desde SECTIONPLANE para documentación
- SECTION para vistas técnicas, SLICE para análisis físico, SECTIONPLANE para análisis interactivo

## Conclusión del Módulo 2

Has completado el Módulo 2: Modelado de Sólidos 3D. Ahora dominas:
- EXTRUDE y PRESSPULL para convertir perfiles 2D en sólidos
- REVOLVE y SWEEP para geometría compleja
- LOFT para transiciones orgánicas
- Operaciones booleanas (UNION, SUBTRACT, INTERSECT)
- Modificadores (SHELL, FILLET3D, CHAMFER3D)
- Duplicación (3DARRAY, MIRROR3D)
- Análisis y documentación (SECTION, SLICE, SECTIONPLANE)

## Próximo Módulo

Módulo 3: Modelado de Superficies cubre creación de superficies NURBS, patches, blends, y técnicas para geometría que no requiere ser sólido cerrado.

---

**Tiempo estimado:** 1 hora
**Dificultad:** Intermedia-Avanzada
