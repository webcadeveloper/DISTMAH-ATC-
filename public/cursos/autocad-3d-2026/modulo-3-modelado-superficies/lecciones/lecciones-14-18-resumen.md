# Lecciones 14-18: Modelado de Superficies - Resumen Técnico

## Lección 14: Planar Surface y Network Surface

### Comandos Clave

**SURFNETWORK:**
```
Command: SURFNETWORK
Select curves or surface edges in first direction: (selecciona curvas U)
Select curves or surface edges in second direction: (selecciona curvas V)
```

Interpola red de curvas creando superficie suave.

**Aplicación:** Superficies complejas desde esqueletos de curvas (carrocerías, cascos).

### Conceptos
- **Curvas U:** Dirección 1 (ej: longitudinal)
- **Curvas V:** Dirección 2 (ej: transversal)
- **Continuidad:** G0 (contacto), G1 (tangente), G2 (curvatura)

---

## Lección 15: Patch y Blend

### SURFPATCH (Parche)

Cierra aberturas en redes de superficies.

```
Command: SURFPATCH
Select surface edges to patch: (selecciona bordes del agujero)
```

**Opciones:**
- Continuity: G0, G1, G2
- Guides: Curvas de control adicionales

### SURFBLEND (Transición)

Crea transición suave entre dos superficies.

```
Command: SURFBLEND
Continuity: [G0/G1/G2] <G1>: G2 (curvatura continua)
Select first surface edge: (borde superficie 1)
Select second surface edge: (borde superficie 2)
```

**Aplicación:** Unir paneles de carrocería sin costuras visibles.

---

## Lección 16: Offset Surface y Extend Surface

### SURFOFFSET

Crea superficie paralela a distancia especificada.

```
Command: SURFOFFSET
Select surfaces or regions to offset: (selecciona superficie)
Specify offset distance: 5 (distancia de offset)
```

**Usos:**
- Crear espesores en superficies
- Cascarones paralelos
- Preparación para THICKEN

### SURFEXTEND

Extiende bordes de superficie.

```
Command: SURFEXTEND
Select surface edges to extend: (selecciona borde)
Specify extend distance: 20
Extension mode [Extend/Stretch]: E
```

**Modos:**
- **Extend:** Continúa curvatura existente
- **Stretch:** Extiende linealmente

---

## Lección 17: Trim y Fillet Surface

### SURFTRIM

Recorta superficies con curvas o intersecciones.

```
Command: SURFTRIM
Select surfaces or regions to trim: (superficie a recortar)
Select cutting curves, surfaces or regions: (elemento de corte)
Select area to trim [Undo]: (clic en área a eliminar)
```

### SURFUNTRIM

Restaura áreas recortadas.

```
Command: SURFUNTRIM
Select edges on untrimmed surface: (selecciona bordes recortados)
```

### SURFFILLET

Redondeo entre superficies.

```
Command: SURFFILLET
Select first surface or region: (superficie 1)
Select second surface or region: (superficie 2)
Specify fillet radius: 10
```

**Continuidad:** Usualmente G2 para fillets suaves.

---

## Lección 18: Thicken y Convert to Solid

### THICKEN

Agrega grosor a superficie abierta → sólido.

```
Command: THICKEN
Select surfaces to thicken: (selecciona superficie)
Specify thickness: 3 (grosor en ambas direcciones)
```

**Resultado:** Sólido con grosor especificado.

### SURFSCULPT

Convierte red cerrada de superficies a sólido.

```
Command: SURFSCULPT
Select surfaces or regions to sculpt into solid: (selecciona todas las superficies cerradas)
```

**Requisito:** Superficies deben formar volumen completamente cerrado (watertight).

### CONVTOSURFACE / CONVTOSOLID

**Sólido → Superficie:**
```
CONVTOSURFACE
Select objects: (selecciona sólido)
```

**Superficie cerrada → Sólido:**
```
CONVTOSOLID
Select objects: (selecciona superficies cerradas)
```

### Análisis de Conversión

**Comando:** `ANALYZE` → verifica si superficies son válidas para conversión a sólido.

---

## Workflow de Modelado de Superficies

### Caso: Carrocería de Vehículo

1. **Esqueleto de curvas:**
   - Dibuja SPLINE longitudinales (líneas de carácter)
   - Dibuja SPLINE transversales (secciones)

2. **SURFNETWORK:**
   - Interpola red de curvas
   - Ajusta continuidad (G2 preferido)

3. **Refinar bordes:**
   - SURFEXTEND donde necesario
   - SURFTRIM para ajustar límites

4. **Transiciones:**
   - SURFBLEND entre paneles
   - SURFFILLET en esquinas

5. **Conversión a sólido:**
   - SURFSCULPT si red está cerrada
   - O THICKEN para agregar grosor

---

## Ejercicios Rápidos por Lección

### Ejercicio Lección 14
Crear superficie de capó de automóvil usando SURFNETWORK con 4 curvas longitudinales y 5 transversales.

### Ejercicio Lección 15
Usar SURFBLEND para conectar dos superficies cilíndricas con continuidad G2.

### Ejercicio Lección 16
Crear superficie offset de un ala de avión (offset: 2mm) y THICKEN para obtener sólido.

### Ejercicio Lección 17
Recortar superficie esférica con plano inclinado usando SURFTRIM.

### Ejercicio Lección 18
Modelar casco de botella:
1. REVOLVE perfil abierto → superficie
2. THICKEN grosor 2mm → sólido de botella

---

## Errores Comunes

### Error 1: SURFNETWORK falla
**Causa:** Curvas U y V no se intersectan correctamente.
**Solución:** Verifica que curvas formen malla coherente.

### Error 2: SURFSCULPT no crea sólido
**Causa:** Red de superficies no está completamente cerrada (gaps).
**Solución:** Usa SURFPATCH para cerrar aberturas. Verifica con ANALYZE.

### Error 3: Continuidad incorrecta en SURFBLEND
**Causa:** G2 seleccionado pero superficies no lo soportan.
**Solución:** Reduce a G1 o ajusta curvaturas de bordes primero.

---

## Comandos de Referencia Rápida - Superficies

| Comando | Función | Resultado |
|---|---|---|
| PLANESURF | Superficie plana desde contorno | Superficie 2D plana |
| SURFNETWORK | Interpolar curvas U-V | Superficie NURBS |
| SURFPATCH | Parche para cerrar agujero | Superficie de cierre |
| SURFBLEND | Transición entre superficies | Superficie de blend |
| SURFOFFSET | Superficie paralela | Superficie offseted |
| SURFEXTEND | Extender borde | Superficie extendida |
| SURFTRIM | Recortar superficie | Superficie recortada |
| SURFUNTRIM | Restaurar recorte | Superficie completa |
| SURFFILLET | Redondeo entre superficies | Superficie de fillet |
| THICKEN | Agregar grosor | Sólido con grosor |
| SURFSCULPT | Red cerrada → sólido | Sólido esculpido |
| CONVTOSURFACE | Sólido → superficie | Superficies |
| CONVTOSOLID | Superficies cerradas → sólido | Sólido |

---

**Tiempo total lecciones 14-18:** 5 horas
**Dificultad:** Avanzada
**Aplicación:** Diseño industrial, automotriz, naval

## Próximo Módulo

Módulo 4: Visualización y Renderizado aplicará materiales, luces y cámaras a las geometrías complejas creadas en módulos 1-3.
