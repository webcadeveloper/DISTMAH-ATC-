# Leccion 1: Comando LINE

**Duracion:** 45 minutos
**Modulo:** 3 - Comandos de Dibujo Fundamentales
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Dominar el comando LINE con todas sus opciones
- Dibujar lineas usando diferentes sistemas de coordenadas
- Utilizar las opciones Undo y Close
- Combinar LINE con herramientas de precision
- Crear figuras geometricas basadas en lineas

---

## Introduccion

El comando LINE es el mas fundamental de AutoCAD. Aunque parece simple, dominarlo completamente es esencial para cualquier trabajo de dibujo. Las lineas son la base de casi todos los dibujos tecnicos.

---

## 1. Acceso al Comando LINE

### 1.1 Metodos de Acceso

- **Command Line:** `LINE` o `L`
- **Ribbon:** Home Tab > Draw Panel > Line
- **Toolbar:** Draw toolbar > Line
- **Menu:** Draw > Line

### 1.2 Sintaxis del Comando

```
Command: LINE
Specify first point: (punto inicial)
Specify next point or [Undo]: (siguiente punto)
Specify next point or [Undo]: (continuar o Enter para terminar)
```

---

## 2. Metodos de Entrada de Puntos

### 2.1 Click Directo

Simplemente haz click en la ubicacion deseada.

```
Command: LINE
Specify first point: (click)
Specify next point: (click)
```

### 2.2 Coordenadas Absolutas

Especifica la posicion exacta desde el origen (0,0).

```
Command: LINE
Specify first point: 100,50
Specify next point: 200,50
Specify next point: 200,150
```

### 2.3 Coordenadas Relativas

Especifica desplazamiento desde el punto anterior.

```
Command: LINE
Specify first point: 100,50
Specify next point: @100,0 (100 a la derecha)
Specify next point: @0,100 (100 arriba)
```

### 2.4 Coordenadas Polares

Especifica distancia y angulo desde el punto anterior.

```
Command: LINE
Specify first point: 100,50
Specify next point: @100<0 (100 unidades a 0 grados)
Specify next point: @100<90 (100 unidades a 90 grados)
```

### 2.5 Direct Distance Entry

Indica direccion con el cursor y escribe solo la distancia.

```
Command: LINE
Specify first point: (click)
(mueve cursor hacia la derecha)
Specify next point: 100 (Enter)
```

---

## 3. Opciones del Comando LINE

### 3.1 Undo (U)

Deshace el ultimo segmento sin salir del comando.

```
Command: LINE
Specify first point: (click)
Specify next point: (click)
Specify next point or [Undo]: U
(el ultimo segmento se elimina)
Specify next point or [Undo]: (continuar)
```

### 3.2 Close (C)

Cierra la figura conectando el ultimo punto con el primero.

```
Command: LINE
Specify first point: 0,0
Specify next point: @100,0
Specify next point: @0,100
Specify next point or [Close/Undo]: C
(linea se cierra al punto inicial)
```

**Requisito:** Close solo aparece despues del tercer punto (necesitas al menos 3 segmentos para cerrar).

### 3.3 Enter (Terminar)

Presiona Enter para finalizar el comando.

```
Command: LINE
Specify first point: (click)
Specify next point: (click)
Specify next point or [Undo]: (Enter)
(comando termina)
```

---

## 4. Continuar desde Ultimo Punto

### 4.1 Repetir LINE

Si presionas Enter con el comando terminado, LINE inicia desde el ultimo punto.

```
Command: LINE
Specify first point: (click)
Specify next point: (click)
Specify next point: (Enter para terminar)

Command: (Enter para repetir LINE)
LINE Specify first point: (Enter para continuar)
(inicia desde el ultimo punto dibujado)
```

### 4.2 Continuar desde Arco

Si el ultimo objeto fue un arco, LINE puede continuar tangente:

```
(despues de dibujar un arco)
Command: LINE
Specify first point: (Enter)
(inicia tangente al arco)
```

---

## 5. LINE con Herramientas de Precision

### 5.1 Con ORTHO (F8)

```
Command: LINE
Specify first point: (click)
(F8 para activar ORTHO)
Specify next point: 150 (solo horizontal o vertical)
```

### 5.2 Con POLAR (F10)

```
Command: LINE
Specify first point: (click)
(F10 activo, configurado a 45°)
Specify next point: 100 (en angulo de 45°)
```

### 5.3 Con OSNAP (F3)

```
Command: LINE
Specify first point: (click en Endpoint de linea existente)
Specify next point: (click en Midpoint de otra linea)
Specify next point: (click en Center de circulo)
```

### 5.4 Con OTRACK (F11)

```
Command: LINE
Specify first point: (click)
(pasar sobre midpoint de linea - adquirir tracking)
Specify next point: (click en interseccion de tracking)
```

---

## 6. Ejemplos Practicos

### 6.1 Cuadrado 100x100

**Metodo Coordenadas Relativas:**
```
Command: LINE
Specify first point: 50,50
Specify next point: @100,0
Specify next point: @0,100
Specify next point: @-100,0
Specify next point: C
```

**Metodo Direct Distance + ORTHO:**
```
Command: LINE
Specify first point: 50,50
(F8 activo)
Specify next point: (derecha) 100
Specify next point: (arriba) 100
Specify next point: (izquierda) 100
Specify next point: C
```

### 6.2 Triangulo Equilatero (Lado 100)

**Metodo Coordenadas Polares:**
```
Command: LINE
Specify first point: 100,50
Specify next point: @100<0
Specify next point: @100<120
Specify next point: C
```

### 6.3 Escalera (5 peldanos)

```
Command: LINE
Specify first point: 0,0
Specify next point: @30,0 (huella)
Specify next point: @0,20 (contrahuella)
Specify next point: @30,0
Specify next point: @0,20
Specify next point: @30,0
Specify next point: @0,20
Specify next point: @30,0
Specify next point: @0,20
Specify next point: @30,0
Specify next point: (Enter)
```

### 6.4 Estrella de 5 Puntas

```
Command: LINE
Specify first point: 200,50
Specify next point: @100<72
Specify next point: @100<144
Specify next point: @100<216
Specify next point: @100<288
Specify next point: C
```

---

## 7. Propiedades de las Lineas

### 7.1 Propiedades Basicas

| Propiedad | Descripcion |
|-----------|-------------|
| Layer | Capa donde reside |
| Color | Color de la linea |
| Linetype | Patron (Continuous, Dashed, etc.) |
| Lineweight | Grosor de impresion |
| Length | Longitud (solo lectura) |
| Angle | Angulo (solo lectura) |
| Start X, Y | Coordenadas del inicio |
| End X, Y | Coordenadas del final |

### 7.2 Ver Propiedades

- **Quick Properties:** Seleccionar linea, aparece panel
- **Properties Palette:** Ctrl+1
- **LIST command:** `LIST` + seleccionar

### 7.3 Modificar Propiedades

1. Selecciona la linea
2. Abre Properties (Ctrl+1)
3. Modifica los valores deseados

---

## 8. Diferencia entre LINE y PLINE

| Caracteristica | LINE | POLYLINE |
|----------------|------|----------|
| Segmentos | Objetos individuales | Un solo objeto |
| Edicion | Cada segmento separado | Todo junto |
| Grosor variable | No | Si |
| Arcos | No | Si (en misma entidad) |
| Area | No calculable | Calculable |

**Recomendacion:** Usa LINE para construccion rapida, PLINE para contornos que necesites como unidad.

---

## 9. Trucos y Tips

### 9.1 Ultimo Punto (@)

El simbolo @ solo representa "desde aqui". En Dynamic Input, las coordenadas son relativas por defecto.

### 9.2 Cancelar sin Perder

Si necesitas cancelar y no perder lo dibujado:
- Enter (termina y guarda)
- ESC (cancela ultimo segmento en progreso)

### 9.3 Repetir Comando

- **Spacebar:** Repite ultimo comando
- **Enter:** Repite ultimo comando
- **Flecha Arriba:** Accede a historial

### 9.4 Lineas de Construccion

Dibuja lineas de construccion en una capa dedicada (ej: CONSTRUCCION) para referencias que luego eliminaras.

---

## Ejercicio Practico 1

**Objetivo:** Dominar LINE con diferentes metodos de entrada.

**Tarea 1: Cuadrado con Absolutas**
- Vertices: (50,50), (150,50), (150,150), (50,150)
- Usar Close para cerrar

**Tarea 2: Rectangulo con Relativas**
- Inicio: (200,50)
- Dimensiones: 120 x 80
- Usar @X,Y

**Tarea 3: Triangulo con Polares**
- Inicio: (350,50)
- Lado: 100
- Angulos: 0°, 120°, 240°

**Tarea 4: Forma L**
- Inicio: (50,200)
- Usar Direct Distance con ORTHO
- Crear forma de L (80x120, grosor 20)

**Tarea 5: Hexagono Regular**
- Centro aproximado: (250,250)
- Lado: 50
- Usar coordenadas polares con angulos de 60°

**Entregable:** Archivo con todas las figuras etiquetadas.

---

## Evaluacion

**Pregunta 1:** Cual es el atajo de una letra para el comando LINE?

**Pregunta 2:** Que opcion se usa para cerrar una figura en LINE?

**Pregunta 3:** Como se indica una coordenada relativa?

**Pregunta 4:** Que hace la opcion Undo (U) dentro del comando LINE?

**Pregunta 5:** Que tecla activa ORTHO para dibujar lineas ortogonales?

---

## Resumen

En esta leccion aprendiste:

- Todas las formas de acceder y usar el comando LINE
- Sistemas de coordenadas: absolutas, relativas, polares
- Opciones Undo y Close
- Combinacion con herramientas de precision
- Diferencia entre LINE y PLINE

**Proxima Leccion:** Comando POLYLINE

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos dibujando figuras variadas
