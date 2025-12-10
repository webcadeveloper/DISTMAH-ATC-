# Leccion 3: ROTATE, SCALE y MIRROR

**Duracion:** 60 minutos
**Modulo:** 4 - Edicion Basica de Objetos
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Rotar objetos con angulos precisos
- Escalar objetos manteniendo proporciones
- Crear reflejos con MIRROR
- Usar la opcion Reference para transformaciones relativas
- Combinar transformaciones eficientemente

---

## Introduccion

ROTATE, SCALE y MIRROR son comandos de transformacion que modifican la orientacion, tamano y simetria de los objetos. Son esenciales para adaptar elementos a diferentes situaciones sin redibujarlos.

---

## 1. Comando ROTATE

### 1.1 Acceso al Comando

- **Command Line:** `ROTATE` o `RO`
- **Ribbon:** Home Tab > Modify Panel > Rotate
- **Grips:** Activar grip + Spacebar

### 1.2 Sintaxis Basica

```
Command: ROTATE
Select objects: (seleccionar)
Select objects: (Enter)
Specify base point: (punto de rotacion)
Specify rotation angle or [Copy/Reference] <0>: 45
```

### 1.3 Punto Base (Centro de Rotacion)

El punto base es el centro alrededor del cual gira el objeto.

**Ejemplos de punto base:**
- Centro del objeto para rotar en su sitio
- Esquina para rotar como puerta
- Punto externo para orbitar alrededor

### 1.4 Angulo de Rotacion

**Positivo:** Sentido anti-horario
**Negativo:** Sentido horario

```
Specify rotation angle: 90 (gira 90° anti-horario)
Specify rotation angle: -45 (gira 45° horario)
```

### 1.5 Opcion Copy

Crea copia rotada, original permanece:

```
Command: ROTATE
Select objects: (seleccionar)
Specify base point: (click)
Specify rotation angle or [Copy/Reference]: C
Specify rotation angle: 30
(original intacto + copia rotada 30°)
```

### 1.6 Opcion Reference

Rota desde un angulo actual a un angulo deseado:

```
Command: ROTATE
Select objects: (seleccionar linea inclinada)
Specify base point: END (inicio de linea)
Specify rotation angle or [Copy/Reference]: R
Specify the reference angle <0>: (click inicio) (click final de linea)
Specify the new angle or [Points]: 0
(linea ahora esta horizontal)
```

**Uso tipico:** Alinear objeto inclinado a horizontal/vertical.

![Rotate Reference](../imagenes/leccion-3-m4-rotate-reference.png)

### 1.7 Rotate con Grips

1. Seleccionar objeto
2. Click en grip
3. Spacebar hasta "ROTATE"
4. Mover cursor o escribir angulo

---

## 2. Comando SCALE

### 2.1 Acceso al Comando

- **Command Line:** `SCALE` o `SC`
- **Ribbon:** Home Tab > Modify Panel > Scale
- **Grips:** Activar grip + Spacebar

### 2.2 Sintaxis Basica

```
Command: SCALE
Select objects: (seleccionar)
Select objects: (Enter)
Specify base point: (punto fijo)
Specify scale factor or [Copy/Reference] <1.0000>: 2
```

### 2.3 Factor de Escala

| Factor | Efecto |
|--------|--------|
| 2 | Doble tamano |
| 0.5 | Mitad del tamano |
| 1 | Sin cambio |
| 10 | 10 veces mas grande |
| 0.1 | 10 veces mas pequeno |

### 2.4 Punto Base (Punto Fijo)

El punto base permanece en su posicion mientras el objeto escala.

**Ejemplos:**
- Centro: Escala uniformemente en todas direcciones
- Esquina: Esquina fija, objeto crece hacia lado opuesto
- Punto externo: Objeto se acerca o aleja del punto

### 2.5 Opcion Copy

```
Command: SCALE
Select objects: (seleccionar)
Specify base point: (click)
Specify scale factor or [Copy/Reference]: C
Specify scale factor: 0.5
(original + copia al 50%)
```

### 2.6 Opcion Reference

Escala basandose en medida actual vs. medida deseada:

```
Command: SCALE
Select objects: (seleccionar rectangulo)
Specify base point: (esquina)
Specify scale factor or [Copy/Reference]: R
Specify reference length <1.0000>: (click punto 1) (click punto 2)
Specify new length or [Points]: 100
(lado ahora mide 100)
```

**Uso tipico:**
- Escalar imagen a dimension conocida
- Ajustar plano a escala correcta

### 2.7 Escalar con Grips

1. Seleccionar objeto
2. Click en grip
3. Spacebar hasta "SCALE"
4. Arrastrar o escribir factor

---

## 3. Comando MIRROR

### 3.1 Acceso al Comando

- **Command Line:** `MIRROR` o `MI`
- **Ribbon:** Home Tab > Modify Panel > Mirror
- **Grips:** Activar grip + Spacebar

### 3.2 Sintaxis Basica

```
Command: MIRROR
Select objects: (seleccionar)
Select objects: (Enter)
Specify first point of mirror line: (punto 1 del eje)
Specify second point of mirror line: (punto 2 del eje)
Erase source objects? [Yes/No] <N>: N
```

### 3.3 Linea de Espejo

La linea de espejo es el eje de simetria:

- **Vertical:** Refleja horizontalmente
- **Horizontal:** Refleja verticalmente
- **Diagonal:** Refleja en angulo

### 3.4 Conservar o Eliminar Original

```
Erase source objects? [Yes/No] <N>: N (conservar - default)
Erase source objects? [Yes/No] <N>: Y (eliminar original)
```

### 3.5 Ejemplo: Simetria de Plano

```
Command: MIRROR
Select objects: (seleccionar mitad del plano)
Specify first point of mirror line: MID (de linea central)
Specify second point of mirror line: @0,100 (vertical)
Erase source objects? <N>: N
(plano completo simetrico)
```

### 3.6 MIRRTEXT Variable

Controla si el texto se refleja:

```
Command: MIRRTEXT
Enter new value for MIRRTEXT <1>: 0
```

| Valor | Efecto |
|-------|--------|
| 0 | Texto NO se refleja (legible) |
| 1 | Texto se refleja (espejo) |

**Recomendacion:** MIRRTEXT = 0 para planos arquitectonicos.

![Mirror Text](../imagenes/leccion-3-m4-mirror-text.png)

### 3.7 Mirror con Grips

1. Seleccionar objeto
2. Click en grip
3. Spacebar hasta "MIRROR"
4. Especificar segundo punto del eje

---

## 4. Combinaciones de Transformaciones

### 4.1 Rotar y Escalar

Para ajustar bloque importado:

```
1. ROTATE para orientar correctamente
2. SCALE con Reference para ajustar tamano
```

### 4.2 Mirror Multiple

Para crear patron simetrico:

```
1. Dibujar 1/4 del diseno
2. MIRROR vertical (1/2)
3. MIRROR horizontal (completo)
```

### 4.3 Copy + Rotate

Crear elementos radiales:

```
Command: COPY
Select objects: (elemento)
Specify base point: (centro de rotacion)
Specify second point: @0,0 (copia en mismo lugar)

Command: ROTATE
Select objects: L (la copia)
Specify base point: (mismo centro)
Specify rotation angle: 45

(repetir para mas copias a diferentes angulos)
```

---

## 5. ARRAYPOLAR (Alternativa)

Para multiples copias rotadas, usar ARRAYPOLAR:

```
Command: ARRAYPOLAR
Select objects: (seleccionar)
Specify center point of array: (centro)
Enter number of items or [Angle/Fill/ROW/Levels/ROTate]: 8
Specify the angle to fill: 360
```

---

## 6. Ejemplos Practicos

### 6.1 Puerta Abierta

```
Command: ROTATE
Select objects: (seleccionar puerta)
Specify base point: END (bisagra)
Specify rotation angle: 90
(puerta abierta a 90°)
```

### 6.2 Escalar Imagen de Referencia

```
(insertar imagen)
Command: SCALE
Select objects: (imagen)
Specify base point: (esquina conocida)
Reference: (medir linea de referencia en imagen)
New length: (medida real)
(imagen a escala correcta)
```

### 6.3 Fachada Simetrica

```
(dibujar mitad izquierda de fachada)
Command: MIRROR
Select objects: (toda la mitad)
First point of mirror line: MID (de linea central)
Second point: PER (perpendicular)
Erase source? N
(fachada completa)
```

### 6.4 Engranaje

```
(dibujar un diente)
Command: ARRAYPOLAR
Select objects: (diente)
Center point: (centro del engranaje)
Number of items: 24
Fill angle: 360
(engranaje completo)
```

---

## Ejercicio Practico 3

**Objetivo:** Dominar ROTATE, SCALE y MIRROR.

**Tarea 1: ROTATE Basico**
- Dibujar rectangulo 100x50
- Rotar 45° alrededor de su centro
- Rotar copia 30° con opcion Copy

**Tarea 2: ROTATE Reference**
- Dibujar linea inclinada arbitraria
- Usar Reference para hacerla horizontal

**Tarea 3: SCALE Basico**
- Dibujar cuadrado 50x50
- Escalar al doble (factor 2)
- Escalar copia a mitad (factor 0.5)

**Tarea 4: SCALE Reference**
- Dibujar rectangulo de cualquier tamano
- Usar Reference para que el lado mida exactamente 100

**Tarea 5: MIRROR**
- Dibujar mitad de una flecha
- Reflejar para completar
- Configurar MIRRTEXT = 0
- Agregar texto y reflejar el conjunto

**Tarea 6: Patron Simetrico**
- Dibujar 1/4 de un marco decorativo
- Usar MIRROR dos veces para completar

**Entregable:** Archivo con todas las transformaciones.

---

## Evaluacion

**Pregunta 1:** Que opcion de ROTATE permite mantener el original?

**Pregunta 2:** Que hace la opcion Reference en SCALE?

**Pregunta 3:** Que variable controla si el texto se refleja con MIRROR?

**Pregunta 4:** Un factor de escala de 0.5 hace el objeto _____?

**Pregunta 5:** Los angulos positivos rotan en que sentido?

---

## Resumen

En esta leccion aprendiste:

- Rotar objetos con angulos y opcion Reference
- Escalar con factores y medidas de referencia
- Crear reflejos con MIRROR
- Controlar MIRRTEXT para texto legible
- Combinar transformaciones para patrones complejos

**Proxima Leccion:** TRIM y EXTEND

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando patrones simetricos
