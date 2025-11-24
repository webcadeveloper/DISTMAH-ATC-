# Ejercicios Prácticos - Módulo 3: Modelado de Superficies

## Ejercicios Resumidos

### Ejercicio 1: Superficie de Ala de Avión (Lección 13)
**Tiempo:** 20 min

1. Dibuja perfil aerodinámico (SPLINE cerrada)
2. EXTRUDE con path curvo (envergadura del ala)
3. Resultado: Superficie curva de ala

**Entregable:** `Ejercicio_01_Superficie_Ala.dwg`

---

### Ejercicio 2: Capó de Automóvil con SURFNETWORK (Lección 14)
**Tiempo:** 35 min

1. Dibuja 4 SPLINE longitudinales (líneas de carácter del capó)
2. Dibuja 5 SPLINE transversales (secciones)
3. SURFNETWORK → selecciona longitudinales como U, transversales como V
4. Ajusta continuidad a G2

**Entregable:** `Ejercicio_02_Capo_Surfnetwork.dwg`

---

### Ejercicio 3: Transición con SURFBLEND (Lección 15)
**Tiempo:** 25 min

1. Crea dos CYLINDER (diferentes radios y orientaciones)
2. Posiciónalos cerca sin tocar
3. SURFBLEND → continuidad G2
4. Resultado: Transición suave entre cilindros

**Entregable:** `Ejercicio_03_Blend_Cilindros.dwg`

---

### Ejercicio 4: Superficie con Grosor (Lección 16-18)
**Tiempo:** 25 min

1. REVOLVE perfil de jarrón (SPLINE abierta) → superficie
2. SURFOFFSET 2mm (superficie paralela interna)
3. THICKEN superficie original con grosor 2mm
4. Compara resultados

**Entregable:** `Ejercicio_04_Jarron_Thicken.dwg`

---

### Ejercicio 5: Recorte de Superficies (Lección 17)
**Tiempo:** 20 min

1. Crea SPHERE como superficie
2. Dibuja PLINE cerrada sobre la esfera (patrón de recorte)
3. SURFTRIM → recorta patrón de la esfera
4. SURFUNTRIM → restaura

**Entregable:** `Ejercicio_05_Trim_Esfera.dwg`

---

### Ejercicio 6: Conversión Surface→Solid (Lección 18)
**Tiempo:** 25 min

1. Modela mitad de botella con REVOLVE (perfil abierto) → superficie
2. Crea tapón superior (superficie plana)
3. Crea base (superficie plana)
4. SURFSCULPT → convierte red cerrada a sólido

**Entregable:** `Ejercicio_06_Botella_Sculpt.dwg`

---

## Proyecto Integrador: Casco de Barco Simplificado

**Tiempo:** 90 min | **Dificultad:** Avanzada

### Especificaciones

- Longitud: 12 metros
- Manga (ancho): 3 metros
- Forma: Casco en V con proa afilada

### Procedimiento

**Fase 1: Curvas de Control (25 min)**

1. Dibuja 5 SPLINE longitudinales (quilla, líneas de agua):
   - Quilla central (Z=0)
   - Líneas de agua a Z=0.5, 1.0, 1.5, 2.0

2. Dibuja 7 SPLINE transversales (cuadernas):
   - Espaciadas cada 2 metros
   - Forma de V en popa, más plana en proa

**Fase 2: Superficie del Casco (20 min)**

3. SURFNETWORK:
   - U direction: longitudinales
   - V direction: transversales
   - Continuity: G2

4. SURFEXTEND en proa y popa si necesario

**Fase 3: Cubierta (15 min)**

5. PLANESURF para cubierta superior

6. SURFBLEND entre casco y cubierta (G1 continuity)

**Fase 4: Detalles (15 min)**

7. SURFTRIM para crear aberturas (escotillas)

8. SURFFILLET en transiciones críticas

**Fase 5: Conversión a Sólido (15 min)**

9. Cierra todas las aberturas con SURFPATCH

10. SURFSCULPT → convierte a sólido

11. SHELL grosor 50mm (casco hueco)

### Entregables

1. Archivo: `Proyecto_Casco_Barco.dwg`
2. Vistas: Isométrica, Lateral, Superior, Sección transversal
3. Screenshot: Render básico con materiales

### Evaluación

| Criterio | Puntos |
|---|---|
| Curvas de control correctas (forma hidrodinámica) | 25 |
| SURFNETWORK con continuidad G2 | 25 |
| Transiciones suaves (SURFBLEND) | 20 |
| Conversión exitosa a sólido | 20 |
| Documentación (vistas, sección) | 10 |
| **Total** | **100** |

---

## Conclusión Módulo 3

Dominio de:
- Creación de superficies básicas y complejas
- SURFNETWORK para formas orgánicas
- Modificadores de superficies (offset, extend, trim, fillet)
- Conversión bidireccional superficie ↔ sólido

**Próximo:** Módulo 4 - Visualización y Renderizado
