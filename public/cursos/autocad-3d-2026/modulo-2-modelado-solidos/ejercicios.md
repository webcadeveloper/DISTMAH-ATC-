# Ejercicios Prácticos - Módulo 2: Modelado de Sólidos 3D

## Introducción

Este archivo contiene 6 ejercicios prácticos del Módulo 2, más un proyecto integrador final que combina todas las técnicas de modelado avanzado de sólidos. Cada ejercicio refuerza las operaciones cubiertas en las lecciones 7-12.

**Tiempo total estimado:** 4-5 horas (ejercicios + proyecto)

---

## Ejercicio 1: Extrusión y Presspull - Placa con Salientes

**Lección:** 7 - Extrude y Presspull
**Tiempo:** 20 min
**Dificultad:** Básica

### Objetivo
Dominar EXTRUDE con diferentes opciones y PRESSPULL para modelado directo.

### Instrucciones

1. **Crear placa base:**
   - Dibuja RECTANG de 200×150
   - EXTRUDE altura 10 (placa base)

2. **Salientes con taper:**
   - Dibuja CIRCLE de radio 30 sobre la placa
   - EXTRUDE → Taper angle: 15 → Height: 40

3. **Nervios de refuerzo con PRESSPULL:**
   - Dibuja 3 LINE atravesando la placa (patrón de nervios)
   - PRESSPULL → clic entre líneas → altura: 5

4. **Agujero con PRESSPULL:**
   - Dibuja CIRCLE de radio 8 sobre saliente cónico
   - PRESSPULL → clic dentro del círculo → arrastra hacia abajo: -45

### Entregables
- Archivo: `Ejercicio_01_Extrude_Presspull.dwg`
- Vista isométrica mostrando placa, saliente cónico, nervios y agujero

---

## Ejercicio 2: Revolve - Vaso Decorativo

**Lección:** 8 - Revolve y Sweep
**Tiempo:** 25 min
**Dificultad:** Intermedia

### Objetivo
Crear sólido de revolución con perfil complejo.

### Instrucciones

1. **Dibujar perfil del vaso (mitad derecha):**
   - Usa PLINE para dibujar contorno del vaso:
     - Base: radio 30, altura 5
     - Cuerpo: curva suave hasta radio 40 en altura 80
     - Borde: radio 42 en altura 100
   - Cierra PLINE conectando al eje vertical

2. **Dibujar eje de revolución:**
   - LINE vertical desde (0,0,0) hasta (0,0,120)

3. **Revolucionar:**
   - REVOLVE → selecciona perfil
   - Axis by Object → selecciona línea vertical
   - Angle: 360

4. **Crear anillos decorativos (opcional):**
   - Dibuja TORUS pequeño (torus radius: 38, tube radius: 2) en altura 25
   - ARRAYRECT vertically (3 niveles, spacing: 25)
   - UNION toros con vaso

### Entregables
- Archivo: `Ejercicio_02_Revolve_Vaso.dwg`
- Render básico del vaso en vista isométrica

---

## Ejercicio 3: Sweep y Loft - Barandilla Curva

**Lección:** 8 y 9 - Sweep / Loft
**Tiempo:** 30 min
**Dificultad:** Intermedia-Avanzada

### Objetivo
Modelar barandilla arquitectónica usando SWEEP para pasamanos y LOFT para balaustres.

### Instrucciones

1. **Trayectoria de escalera:**
   - Dibuja 3DPOLY con 5 puntos:
     - (0,0,0), (200,0,50), (400,0,100), (600,0,150), (800,0,200)

2. **Pasamanos con SWEEP:**
   - Dibuja CIRCLE de radio 15 en punto inicial perpendicular a trayectoria
   - SWEEP → selecciona círculo → selecciona 3DPOLY

3. **Balaustre con LOFT:**
   - Dibuja 3 círculos a diferentes alturas para un balaustre:
     - Z=0: radio 8
     - Z=40: radio 5
     - Z=80: radio 8
   - LOFT → selecciona los 3 círculos en orden

4. **Array de balaustres:**
   - ARRAYRECT el balaustre:
     - Columns: 5
     - Column spacing: 200 (siguiendo la trayectoria horizontalmente)
   - Posiciona balaustres bajo el pasamanos

### Entregables
- Archivo: `Ejercicio_03_Sweep_Loft_Barandilla.dwg`

---

## Ejercicio 4: Operaciones Booleanas - Bloque de Motor Simplificado

**Lección:** 9 - Loft y Operaciones Booleanas
**Tiempo:** 35 min
**Dificultad:** Avanzada

### Objetivo
Aplicar UNION y SUBTRACT en modelo mecánico complejo.

### Instrucciones

1. **Bloque base:**
   - BOX de 300×200×150

2. **Cilindros de motor:**
   - CYLINDER (radio 40, altura 160) posicionado atravesando el bloque
   - COPY para crear 4 cilindros en línea (spacing: 70)
   - UNION los 4 cilindros con el bloque base

3. **Carter inferior:**
   - BOX de 300×200×40 debajo del bloque principal
   - UNION con bloque

4. **Agujeros de tornillos:**
   - CYLINDER pequeños (radio 6, altura 50) en 8 posiciones de esquinas
   - SUBTRACT todos los cilindros del bloque

5. **Cavidad interna (carter):**
   - BOX de 280×180×25 dentro del carter
   - SUBTRACT del bloque

6. **Redondeos:**
   - FILLETEDGE en aristas externas (radius: 5)

### Entregables
- Archivo: `Ejercicio_04_Booleanas_Motor.dwg`
- Vista de sección mostrando cavidad interna

---

## Ejercicio 5: Shell y Fillet - Carcasa de Dispositivo

**Lección:** 10 - Shell, Fillet 3D, Chamfer 3D
**Tiempo:** 30 min
**Dificultad:** Intermedia-Avanzada

### Objetivo
Crear carcasa plástica con SHELL y acabados con FILLET3D.

### Instrucciones

1. **Forma básica:**
   - BOX de 120×80×40

2. **Redondear esquinas:**
   - FILLETEDGE todas las aristas verticales (radius: 8)
   - FILLETEDGE aristas superiores e inferiores (radius: 5)

3. **Ahuecado:**
   - SHELL
   - Remove faces: cara superior
   - Offset distance: 2 (grosor de pared)

4. **Aberturas laterales:**
   - Dibuja rectangulos pequeños en caras laterales (para ventilación)
   - EXTRUDE atravesando la pared
   - SUBTRACT del sólido principal

5. **Postes internos (para tornillos):**
   - CYLINDER (radio 5, altura 36) en 4 esquinas internas
   - UNION con carcasa
   - CHAMFEREDGE en top de cada poste (distance: 1×1)

### Entregables
- Archivo: `Ejercicio_05_Shell_Fillet_Carcasa.dwg`
- Vista isométrica y sección transversal

---

## Ejercicio 6: Array 3D y Mirror 3D - Estructura de Puente

**Lección:** 11 - 3D Array y 3D Mirror
**Tiempo:** 35 min
**Dificultad:** Avanzada

### Objetivo
Modelar estructura de puente usando arrays y simetría.

### Instrucciones

1. **Viga principal:**
   - BOX de 1000×50×80 (viga longitudinal)

2. **Vigas transversales:**
   - BOX de 400×40×60 (viga transversal)
   - ARRAYRECT:
     - Columns: 6
     - Column spacing: 200

3. **Columnas de soporte:**
   - CYLINDER (radio 20, altura 150)
   - Posicionar bajo una viga transversal
   - COPY para columnas en ambos extremos de la viga
   - ARRAYRECT estas columnas:
     - Columns: 6
     - Spacing: 200

4. **Barandilla lateral:**
   - Polysolid o SWEEP creando barandilla a lo largo de un lado
   - Altura sobre viga: 100

5. **Duplicar por simetría:**
   - MIRROR3D toda la estructura del lado derecho:
     - Plano de espejo: ZX (centro del puente)
   - UNION toda la estructura

### Entregables
- Archivo: `Ejercicio_06_Array_Mirror_Puente.dwg`
- Vistas: Top, Front, Isométrica

---

## Proyecto Integrador: Pieza Mecánica Compleja - Reductor de Velocidad

**Objetivo:** Integrar todas las técnicas del Módulo 2
**Tiempo estimado:** 90-120 minutos
**Dificultad:** Avanzada

### Descripción

Modelar carcasa de reductor de velocidad (gearbox) que incluye:
- Cuerpo principal (LOFT + SHELL)
- Bridas de entrada/salida (REVOLVE)
- Agujeros de tornillos (ARRAYPOLAR + SUBTRACT)
- Nervios internos de refuerzo (EXTRUDE + UNION)
- Acabados (FILLET3D, CHAMFER3D)
- Simetría (MIRROR3D)

### Especificaciones Técnicas

**Dimensiones generales:**
- Longitud total: 400mm
- Diámetro cuerpo principal: 200mm
- Brida de entrada: diámetro 150mm, grosor 20mm
- Brida de salida: diámetro 120mm, grosor 15mm

**Detalles constructivos:**
- Grosor de pared (shell): 8mm
- Agujeros de tornillos brida entrada: 6 agujeros M10 (radio 5mm) en círculo de radio 120mm
- Agujeros de tornillos brida salida: 4 agujeros M8 (radio 4mm) en círculo de radio 90mm
- Nervios internos: 4 nervios radiales, grosor 10mm, altura 80mm
- Fillets externos: radio 5mm
- Chamfers en agujeros: 1×45°

### Procedimiento Recomendado

**Fase 1: Cuerpo Principal (30 min)**

1. Dibuja 3 secciones transversales circulares:
   - Entrada (Z=0): diámetro 150mm
   - Centro (Z=200): diámetro 200mm
   - Salida (Z=400): diámetro 120mm

2. LOFT entre las 3 secciones (transición suave)

3. SHELL el sólido resultante:
   - Remove face: cara de entrada (Z=0)
   - Offset: 8mm

**Fase 2: Bridas (25 min)**

4. Brida de entrada:
   - Dibuja perfil de brida (sección en L)
   - REVOLVE alrededor del eje central
   - Posiciona en Z=0
   - UNION con cuerpo principal

5. Brida de salida:
   - Similar proceso
   - Posiciona en Z=400
   - UNION con cuerpo

**Fase 3: Agujeros de Tornillos (20 min)**

6. Agujeros brida entrada:
   - CYLINDER (radio 5, altura 25) en radio 120mm desde centro
   - ARRAYPOLAR: 6 items, 360°, center: eje central
   - SUBTRACT todos los cilindros

7. Agujeros brida salida:
   - CYLINDER (radio 4, altura 20) en radio 90mm
   - ARRAYPOLAR: 4 items, 360°
   - SUBTRACT

8. Chamfers en agujeros:
   - CHAMFEREDGE en cada agujero (distance: 1×1)

**Fase 4: Nervios Internos (15 min)**

9. Dibuja perfil de nervio (plano radial, grosor 10mm, altura 80mm)

10. EXTRUDE el perfil

11. ARRAYPOLAR: 4 nervios, 90° spacing

12. UNION nervios con cuerpo principal

**Fase 5: Acabados (15 min)**

13. FILLETEDGE todas las aristas externas principales (radius: 5mm)

14. Fillets en transiciones internas (radius: 3mm)

**Fase 6: Verificación (15 min)**

15. SECTIONPLANE para verificar cavidad interna

16. MASSPROP para verificar volumen y propiedades

17. Generate 2D Section para documentación

### Entregables Finales

1. **Archivo CAD:** `Proyecto_Reductor_Velocidad.dwg`

2. **Vistas guardadas:**
   - "ISOMETRICA_GENERAL"
   - "SECCION_LONGITUDINAL"
   - "BRIDA_ENTRADA"
   - "BRIDA_SALIDA"

3. **Screenshots:**
   - Vista isométrica renderizada (Visual Style: Realistic)
   - Vista de sección longitudinal con HATCH
   - Vista explosionada (opcional - separar bridas del cuerpo)

4. **Documento técnico (PDF - 1 página):**
   - Especificaciones dimensionales
   - Lista de operaciones utilizadas
   - Tiempo invertido
   - Dificultades encontradas y soluciones

### Criterios de Evaluación

| Criterio | Puntos |
|---|---|
| Dimensiones precisas según especificaciones | 20 |
| LOFT suave del cuerpo principal | 15 |
| SHELL correcto (grosor 8mm, sin errores) | 15 |
| Bridas correctamente revolucionadas y unidas | 15 |
| Arrays polares de agujeros precisos | 10 |
| Nervios internos correctamente posicionados | 10 |
| Fillets y chamfers aplicados correctamente | 10 |
| Documentación (vistas, sección, reporte) | 5 |
| **Total** | **100** |

### Consejos

1. **Dibuja perfiles 2D completos** antes de operaciones 3D
2. **Guarda frecuentemente** (Ctrl+S cada 10 min)
3. **Usa UCS Named** para bridas (facilita alineación)
4. **Verifica cada UNION/SUBTRACT** en vista isométrica
5. **COPY sólidos antes de SHELL** (backup si algo falla)
6. **Usa MASSPROP** para verificar volumen esperado

---

## Conclusión del Módulo 2

Al completar estos ejercicios, habrás demostrado dominio de:
- Extrusión con taper y path
- Revolución de perfiles complejos
- Sweep y Loft para geometría orgánica
- Operaciones booleanas (CSG)
- Modificadores (Shell, Fillet, Chamfer)
- Arrays y simetrías 3D
- Análisis con secciones

**Próximo Módulo:** Módulo 3 - Modelado de Superficies, donde aprenderás a crear superficies NURBS que no requieren ser sólidos cerrados.

---

**Archivos de solución disponibles en:** `/soluciones/modulo-2/`
