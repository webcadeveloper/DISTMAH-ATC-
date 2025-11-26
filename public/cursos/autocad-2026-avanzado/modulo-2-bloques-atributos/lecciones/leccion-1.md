# Leccion 1: Creacion e Insercion de Bloques

**Duracion:** 60 minutos
**Modulo:** 2 - Bloques y Atributos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender el concepto y beneficios de los bloques
- Crear bloques internos con BLOCK
- Insertar bloques con diferentes escalas y rotaciones
- Usar el DesignCenter para gestionar bloques
- Crear bloques externos (WBLOCK)

---

## Introduccion

Los bloques son colecciones de objetos agrupados como una sola entidad. Son fundamentales para la productividad en AutoCAD: reducen el tamano de archivos, garantizan consistencia y facilitan modificaciones globales.

---

## 1. Concepto de Bloque

### 1.1 Que es un Bloque

Un bloque es una definicion que contiene:
- Geometria (lineas, circulos, etc.)
- Propiedades (color, capa, etc.)
- Punto de insercion
- Opcionalmente: atributos

### 1.2 Beneficios

| Beneficio | Descripcion |
|-----------|-------------|
| Eficiencia | Dibujar una vez, usar multiples veces |
| Consistencia | Todos los simbolos identicos |
| Tamano | Archivo mas pequeno |
| Actualizacion | Modificar uno, actualizar todos |
| Biblioteca | Crear libreria reutilizable |

### 1.3 Definicion vs Referencia

- **Definicion:** El bloque almacenado en memoria
- **Referencia:** Cada insercion del bloque en el dibujo

Multiples referencias = Una sola definicion.

---

## 2. Comando BLOCK (Crear Bloque)

### 2.1 Acceso al Comando

- **Command Line:** `BLOCK` o `B`
- **Ribbon:** Home Tab > Block Panel > Create Block
- **Menu:** Draw > Block > Make

### 2.2 Dialogo Block Definition

![Block Definition Dialog](../imagenes/leccion-1-m2-block-dialog.png)

### 2.3 Campos del Dialogo

| Campo | Funcion |
|-------|---------|
| Name | Nombre unico del bloque |
| Base point | Punto de insercion |
| Objects | Objetos que forman el bloque |
| Behavior | Anotativo, escala uniforme, etc. |
| Settings | Unidades, descripcion |

### 2.4 Proceso de Creacion

```
1. Dibujar los objetos
2. Command: BLOCK
3. Name: SILLA_OFICINA
4. Pick point: (click en punto de insercion)
5. Select objects: (seleccionar geometria)
6. OK
```

### 2.5 Opciones de Objetos

| Opcion | Resultado |
|--------|-----------|
| Retain | Objetos permanecen como objetos |
| Convert to block | Objetos se convierten en referencia |
| Delete | Objetos se eliminan |

### 2.6 Behavior

- **Annotative:** Escala automatica segun viewport
- **Scale uniformly:** Forzar misma escala X,Y,Z
- **Allow exploding:** Permitir explotar el bloque

---

## 3. Punto Base (Base Point)

### 3.1 Importancia

El punto base determina como se inserta el bloque:
- Es el "agarre" del bloque
- Generalmente: centro, esquina o punto logico

### 3.2 Ejemplos de Punto Base

| Objeto | Punto Base Recomendado |
|--------|------------------------|
| Puerta | Bisagra |
| Silla | Centro |
| Arbol | Centro del tronco |
| Computadora | Centro o esquina |
| Simbolo | Centro geometrico |

### 3.3 Especificar Punto Base

**En dialogo:**
- Pick point: Click en dibujo
- O Specify coordinates: X, Y, Z

---

## 4. Comando INSERT

### 4.1 Acceso al Comando

- **Command Line:** `INSERT` o `I`
- **Ribbon:** Home Tab > Block Panel > Insert
- **Menu:** Insert > Block

### 4.2 Dialogo Insert

![Insert Dialog](../imagenes/leccion-1-m2-insert-dialog.png)

### 4.3 Opciones de Insercion

| Opcion | Funcion |
|--------|---------|
| Name | Bloque a insertar |
| Insertion point | Ubicacion |
| Scale | Escala X, Y, Z |
| Rotation | Angulo de rotacion |
| Explode | Insertar explotado |

### 4.4 Insercion Rapida

```
Command: INSERT
Specify insertion point or [Basepoint/Scale/X/Y/Z/Rotate]: (click)
Enter X scale factor, opposite corner, or [Corner/XYZ] <1>: 1
Enter Y scale factor <use X scale factor>: (Enter)
Specify rotation angle <0>: 0
```

### 4.5 Escala y Rotacion en Linea

```
Specify insertion point or [...Scale...]: S
Specify scale factor <1>: 2
Specify insertion point or [...Rotate...]: R
Specify rotation angle <0>: 45
Specify insertion point: (click)
```

### 4.6 Escala Negativa

- **X negativo:** Refleja horizontalmente
- **Y negativo:** Refleja verticalmente

```
Enter X scale factor: -1 (espejo horizontal)
```

---

## 5. DesignCenter

### 5.1 Acceso

- **Command:** `ADCENTER` o `DC`
- **Atajo:** Ctrl+2
- **Ribbon:** View Tab > Palettes > DesignCenter

### 5.2 Funcion

DesignCenter permite:
- Explorar bloques de otros archivos
- Arrastrar bloques al dibujo
- Copiar capas, estilos, layouts
- Buscar contenido

### 5.3 Interfaz

| Panel | Contenido |
|-------|-----------|
| Tree View | Navegacion de carpetas |
| Content | Bloques del archivo seleccionado |
| Preview | Vista previa |
| Description | Informacion |

### 5.4 Usar Bloques de Otros Archivos

```
1. Abrir DesignCenter (Ctrl+2)
2. Navegar a archivo .dwg
3. Expandir > Blocks
4. Arrastrar bloque al dibujo
```

### 5.5 Open Drawings Tab

Muestra bloques del dibujo actual y otros abiertos.

---

## 6. Comando WBLOCK (Write Block)

### 6.1 Funcion

WBLOCK exporta objetos o bloques a un archivo .dwg externo.

### 6.2 Acceso

```
Command: WBLOCK
```

### 6.3 Dialogo Write Block

![Write Block Dialog](../imagenes/leccion-1-m2-wblock-dialog.png)

### 6.4 Opciones de Source

| Source | Funcion |
|--------|---------|
| Block | Exportar bloque existente |
| Entire drawing | Todo el dibujo |
| Objects | Seleccion de objetos |

### 6.5 Crear Bloque Externo

```
1. Dibujar objetos
2. Command: WBLOCK
3. Source: Objects
4. Select objects: (seleccionar)
5. Base point: (click)
6. Destination: C:\Bloques\MiBloque.dwg
7. OK
```

### 6.6 Bloque Interno vs Externo

| Interno | Externo (WBLOCK) |
|---------|------------------|
| Vive en el dibujo | Archivo independiente |
| No compartible | Reutilizable |
| Un solo archivo | Biblioteca separada |

---

## 7. Tool Palettes

### 7.1 Acceso

- **Command:** `TOOLPALETTES` o `TP`
- **Atajo:** Ctrl+3
- **Ribbon:** View Tab > Palettes > Tool Palettes

### 7.2 Crear Palette con Bloques

```
1. Abrir Tool Palettes
2. Click derecho > New Palette
3. Nombrar palette
4. Arrastrar bloques desde DesignCenter
```

### 7.3 Uso

Click en bloque de palette > Click en dibujo = Bloque insertado.

---

## 8. Mejores Practicas

### 8.1 Nomenclatura

```
TIPO_NOMBRE_TAMAÑO
Ejemplos:
FURNITURE_CHAIR_OFFICE
ELEC_OUTLET_DUPLEX
ARCH_DOOR_0900
```

### 8.2 Punto Base Consistente

Definir convencion de punto base para bloques similares.

### 8.3 Capa 0 para Geometria

Dibujar geometria en capa 0 con propiedades ByBlock para maxima flexibilidad.

### 8.4 Descripcion

Siempre agregar descripcion para facilitar busqueda.

---

## Ejercicio Practico 1

**Objetivo:** Crear e insertar bloques.

**Tarea 1: Crear Bloque de Silla**
- Dibujar silla en planta (vista superior)
- Crear bloque "SILLA_OFICINA"
- Punto base: centro

**Tarea 2: Crear Bloque de Puerta**
- Dibujar puerta con arco de apertura
- Crear bloque "PUERTA_0900"
- Punto base: bisagra

**Tarea 3: Insertar Bloques**
- Insertar 4 sillas alrededor de mesa
- Insertar puerta en muro
- Probar diferentes rotaciones

**Tarea 4: Escala de Insercion**
- Insertar silla a escala 1.5
- Insertar silla con X=-1 (espejo)

**Tarea 5: WBLOCK**
- Exportar bloque SILLA_OFICINA a archivo externo
- Verificar archivo creado

**Tarea 6: DesignCenter**
- Abrir archivo externo con DesignCenter
- Arrastrar bloque a nuevo dibujo

**Entregable:** Archivo con bloques creados y oficina amueblada.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre definicion y referencia de bloque?

**Pregunta 2:** Que comando crea un archivo externo desde un bloque?

**Pregunta 3:** Que sucede si insertas con escala X negativa?

**Pregunta 4:** Cual es el atajo para abrir DesignCenter?

**Pregunta 5:** Por que es recomendable dibujar bloques en capa 0?

---

## Resumen

En esta leccion aprendiste:

- Concepto y beneficios de bloques
- Crear bloques con BLOCK
- Insertar bloques con escala y rotacion
- Usar DesignCenter para gestionar bloques
- Crear bloques externos con WBLOCK
- Tool Palettes para acceso rapido

**Proxima Leccion:** Atributos de Bloques

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando biblioteca de bloques
