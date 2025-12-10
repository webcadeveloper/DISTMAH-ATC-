# Lección 13: Surface Creation Básica

## Objetivos
- Crear superficies planas con PLANESURF
- Extruir y revolucionar perfiles abiertos para generar superficies
- Comprender diferencias entre superficies y sólidos

## 1. PLANESURF (Superficie Plana)

**Comando:** `PLANESURF`

Crea superficie plana desde contorno cerrado o región.

```
Command: PLANESURF
Specify first corner or [Object] <Object>: O
Select objects: (selecciona contorno cerrado)
```

**Diferencia con REGION:** PLANESURF crea superficie 3D, REGION crea objeto 2D.

## 2. EXTRUDE de Perfiles Abiertos

Perfil abierto (LINE, ARC, PLINE abierta) → EXTRUDE → **Superficie** (no sólido).

```
1. Dibuja ARC (perfil abierto)
2. EXTRUDE → selecciona arc → height: 100
```

Resultado: Superficie curva, no sólido.

## 3. REVOLVE de Perfiles Abiertos

Perfil abierto → REVOLVE → **Superficie de revolución**.

```
1. Dibuja SPLINE abierta (perfil de superficie)
2. LINE como eje
3. REVOLVE → perfil → axis → 360°
```

Resultado: Superficie suave de revolución.

## Ejercicio Práctico

Crear superficie de ala de avión:
1. Dibuja perfil aerodinámico (SPLINE abierta)
2. EXTRUDE a lo largo de envergadura
3. Resultado: Superficie de ala (no sólido)

---

**Tiempo:** 1 hora | **Dificultad:** Intermedia
