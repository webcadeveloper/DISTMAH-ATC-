# Leccion 3: FILLET, CHAMFER y BLEND

**Duracion:** 45 minutos
**Modulo:** 1 - Edicion Avanzada de Objetos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Crear redondeos con FILLET en diferentes objetos
- Aplicar chaflanes con CHAMFER
- Usar BLEND para transiciones suaves
- Configurar modos y opciones avanzadas
- Aplicar estos comandos en polylines completas

---

## Introduccion

FILLET, CHAMFER y BLEND modifican esquinas y transiciones entre objetos. Son esenciales para el acabado de dibujos mecanicos, arquitectonicos y de cualquier disciplina donde las esquinas requieran tratamiento especial.

---

## 1. Comando FILLET

### 1.1 Acceso al Comando

- **Command Line:** `FILLET` o `F`
- **Ribbon:** Home Tab > Modify Panel > Fillet
- **Menu:** Modify > Fillet

### 1.2 Sintaxis

```
Command: FILLET
Current settings: Mode = TRIM, Radius = 10.0000
Select first object or [Undo/Polyline/Radius/Trim/Multiple]: (click linea 1)
Select second object or shift-select to apply corner: (click linea 2)
```

### 1.3 Establecer Radio

```
Select first object or [...Radius...]: R
Specify fillet radius <10.0000>: 15
(nuevo radio establecido)
```

### 1.4 Proceso Basico

1. Establecer radio (R)
2. Click en primer objeto
3. Click en segundo objeto
4. Fillet creado

![Fillet Basics](../imagenes/leccion-3-m1-fillet-basic.png)

---

## 2. Opciones de FILLET

### 2.1 Trim Mode

Controla si los objetos se recortan:

```
Select first object or [...Trim...]: T
Enter Trim mode option [Trim/No trim] <Trim>: T
```

| Modo | Efecto |
|------|--------|
| Trim | Recorta objetos al arco |
| No trim | Mantiene objetos completos |

### 2.2 Multiple

Crear varios fillets consecutivos:

```
Select first object or [...Multiple...]: M
Select first object: (click)
Select second object: (click)
Select first object: (click siguiente par)
...
```

### 2.3 Polyline

Aplica fillet a todas las esquinas de una polyline:

```
Select first object or [...Polyline...]: P
Select 2D polyline: (click en polyline)
4 lines were filleted
```

### 2.4 Undo

Deshace el ultimo fillet sin salir:

```
Select first object or [...Undo...]: U
```

---

## 3. FILLET Especiales

### 3.1 Radio Cero (Esquina Limpia)

```
Specify fillet radius: 0
Select first object: (click)
Select second object: (click)
(extiende/recorta para crear esquina perfecta)
```

### 3.2 Shift para Esquina

Durante FILLET, Shift+click crea esquina sin radio:

```
Select first object: (click)
Select second object or shift-select: (Shift+click)
(esquina sin fillet)
```

### 3.3 FILLET en Lineas Paralelas

Conecta lineas paralelas con semicirculo:

```
Radius: 50 (cualquier valor)
Select first object: (linea 1)
Select second object: (linea 2 paralela)
(crea semicirculo conectando)
```

### 3.4 FILLET en 3D

Funciona en objetos 3D con opciones adicionales:
- Chain: Fillets encadenados
- Loop: Todas las aristas de una cara

---

## 4. Comando CHAMFER

### 4.1 Acceso al Comando

- **Command Line:** `CHAMFER` o `CHA`
- **Ribbon:** Home Tab > Modify Panel > Chamfer
- **Menu:** Modify > Chamfer

### 4.2 Sintaxis

```
Command: CHAMFER
(TRIM mode) Current chamfer Dist1 = 10.0000, Dist2 = 10.0000
Select first line or [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]:
```

### 4.3 Metodo Distance

Especifica dos distancias desde la esquina:

```
Select first line or [...Distance...]: D
Specify first chamfer distance <10.0000>: 15
Specify second chamfer distance <15.0000>: 15
```

### 4.4 Metodo Angle

Especifica distancia y angulo:

```
Select first line or [...Angle...]: A
Specify chamfer length on the first line <10.0000>: 20
Specify chamfer angle from the first line <45>: 30
```

### 4.5 Cambiar Metodo

```
Select first line or [...mEthod...]: E
Enter trim method [Distance/Angle] <Distance>: A
```

![Chamfer Methods](../imagenes/leccion-3-m1-chamfer-methods.png)

---

## 5. Opciones de CHAMFER

### 5.1 Trim Mode

Igual que FILLET:

```
Select first line or [...Trim...]: T
Enter Trim mode option [Trim/No trim] <Trim>:
```

### 5.2 Polyline

Aplica chamfer a toda la polyline:

```
Select first line or [...Polyline...]: P
Select 2D polyline: (click)
```

### 5.3 Multiple

Chaflanes consecutivos:

```
Select first line or [...Multiple...]: M
```

### 5.4 Chamfer Cero

Con ambas distancias en cero, crea esquina limpia (como FILLET con R=0).

---

## 6. Comando BLEND

### 6.1 Acceso al Comando

- **Command Line:** `BLEND`
- **Ribbon:** Home Tab > Modify Panel > Blend Curves
- **Menu:** Modify > Blend Curves

### 6.2 Funcion

BLEND crea una spline suave que conecta dos curvas, manteniendo continuidad tangente.

### 6.3 Sintaxis

```
Command: BLEND
Continuity = Tangent
Select first object or [CONtinuity]: (click curva 1)
Select second object: (click curva 2)
```

### 6.4 Tipos de Continuidad

```
Select first object or [CONtinuity]: CON
Enter continuity [Tangent/Smooth] <Tangent>:
```

| Tipo | Descripcion |
|------|-------------|
| Tangent (G1) | Curva tangente a los extremos |
| Smooth (G2) | Curva con curvatura continua |

### 6.5 Diferencia con FILLET

| FILLET | BLEND |
|--------|-------|
| Crea arco | Crea spline |
| Radio constante | Curvatura variable |
| Esquinas | Transiciones suaves |

![Blend vs Fillet](../imagenes/leccion-3-m1-blend-vs-fillet.png)

---

## 7. Aplicaciones Profesionales

### 7.1 Mecanico - Pieza con Redondeos

```
1. Dibujar perfil con esquinas vivas
2. FILLET R=5 en esquinas internas (concentradores de stress)
3. FILLET R=2 en esquinas externas (acabado)
4. CHAMFER 3x3 en bordes de montaje
```

### 7.2 Arquitectonico - Mueble

```
1. Dibujar rectangulo de mesa
2. FILLET > Polyline > R=50 (esquinas redondeadas)
3. OFFSET para crear grosor
```

### 7.3 Civil - Interseccion

```
1. Dibujar ejes de calles
2. FILLET en cada esquina para radio de giro
3. R=12m para vehiculos
```

### 7.4 Organico - Producto

```
1. Dibujar curvas de forma
2. BLEND para conectar secciones
3. Resultado: perfil fluido
```

---

## 8. Tips y Mejores Practicas

### 8.1 Radio Persistente

FILLET y CHAMFER recuerdan los valores. Verifica antes de usar:

```
Current settings: Mode = TRIM, Radius = 10.0000
```

### 8.2 Fillet en Esquinas que No Se Tocan

FILLET extiende automaticamente las lineas si no se tocan.

### 8.3 Orden de Seleccion en CHAMFER

La primera distancia se aplica al primer objeto seleccionado.

### 8.4 Undo Selectivo

Usa U dentro del comando para deshacer sin salir.

### 8.5 No Trim para Construccion

Usa No Trim cuando necesites mantener geometria original para referencia.

---

## Ejercicio Practico 3

**Objetivo:** Dominar FILLET, CHAMFER y BLEND.

**Tarea 1: FILLET Basico**
- Dibujar L con lineas
- Aplicar FILLET R=20
- Aplicar FILLET R=0 para esquina limpia

**Tarea 2: FILLET en Polyline**
- Dibujar rectangulo con PLINE
- Aplicar FILLET Polyline R=15
- Todas las esquinas redondeadas

**Tarea 3: CHAMFER Distance**
- Dibujar cuadrado con lineas
- CHAMFER D1=10, D2=10 (simetrico)
- CHAMFER D1=15, D2=5 (asimetrico)

**Tarea 4: CHAMFER Angle**
- Dibujar triangulo
- CHAMFER Length=20, Angle=45
- CHAMFER Length=20, Angle=30

**Tarea 5: BLEND**
- Dibujar dos arcos no conectados
- Usar BLEND para conectar
- Probar Tangent vs Smooth

**Tarea 6: Pieza Mecanica**
- Dibujar perfil de pieza
- Aplicar FILLET en esquinas internas R=5
- Aplicar CHAMFER en esquinas de montaje 3x3
- Resultado: pieza lista para fabricacion

**Entregable:** Archivo con todos los ejercicios.

---

## Evaluacion

**Pregunta 1:** Que hace FILLET con radio cero?

**Pregunta 2:** Cual es la diferencia entre los metodos Distance y Angle de CHAMFER?

**Pregunta 3:** Que tipo de curva crea BLEND?

**Pregunta 4:** Como se aplica FILLET a todas las esquinas de una polyline?

**Pregunta 5:** Que hace Shift+click durante FILLET?

---

## Resumen

En esta leccion aprendiste:

- FILLET para redondear esquinas con arcos
- CHAMFER para crear biseles con distancias o angulos
- BLEND para transiciones suaves con splines
- Opciones: Trim, Multiple, Polyline
- Aplicaciones en diferentes disciplinas

**Proxima Leccion:** STRETCH, LENGTHEN, JOIN y BREAK

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos aplicando acabados a piezas
