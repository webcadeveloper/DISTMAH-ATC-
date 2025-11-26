# Leccion 2: Atributos de Bloques

**Duracion:** 60 minutos
**Modulo:** 2 - Bloques y Atributos
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender el concepto y uso de atributos
- Definir atributos con ATTDEF
- Crear bloques con atributos
- Editar valores de atributos
- Extraer datos de atributos a tablas

---

## Introduccion

Los atributos son datos de texto variables asociados a bloques. Permiten almacenar informacion como numeros de parte, descripciones, precios, etc. que puede diferir en cada insercion del bloque.

---

## 1. Concepto de Atributos

### 1.1 Que es un Atributo

Un atributo es un campo de texto en un bloque que:
- Tiene un valor por defecto (puede estar vacio)
- Puede modificarse en cada insercion
- Puede ser visible u oculto
- Puede extraerse a tablas

### 1.2 Componentes del Atributo

| Componente | Descripcion |
|------------|-------------|
| Tag | Identificador interno (sin espacios) |
| Prompt | Pregunta al insertar |
| Value | Valor por defecto |
| Modes | Invisible, Constant, Verify, etc. |

### 1.3 Usos Comunes

- Numeros de cuarto/espacio
- Informacion de equipos
- Datos de materiales
- Etiquetas de tuberias
- Cuadros de titulo (title blocks)

---

## 2. Comando ATTDEF

### 2.1 Acceso al Comando

- **Command Line:** `ATTDEF` o `ATT`
- **Ribbon:** Home Tab > Block Panel > Define Attributes
- **Menu:** Draw > Block > Define Attributes

### 2.2 Dialogo Attribute Definition

![Attribute Definition Dialog](../imagenes/leccion-2-m2-attdef-dialog.png)

### 2.3 Campos Principales

**Mode:**
| Modo | Efecto |
|------|--------|
| Invisible | No se muestra en dibujo |
| Constant | Mismo valor en todas las inserciones |
| Verify | Solicita verificacion al insertar |
| Preset | Usa valor default sin preguntar |
| Lock position | Bloquea posicion en bloque dinamico |
| Multiple lines | Permite multiples lineas |

**Attribute:**
- **Tag:** Nombre interno (ej: NUMERO_CUARTO)
- **Prompt:** Texto mostrado (ej: "Ingrese numero de cuarto")
- **Default:** Valor predeterminado (ej: "100")

**Insertion Point:**
- Specify on-screen o coordenadas

**Text Settings:**
- Justification, Style, Height, Rotation

### 2.4 Ejemplo: Crear Atributo

```
Command: ATTDEF
Dialogo:
- Tag: NUM_CUARTO
- Prompt: Numero de cuarto?
- Default: 000
- Height: 15
- OK
(click para ubicar)
```

---

## 3. Crear Bloque con Atributos

### 3.1 Proceso

1. Dibujar geometria del bloque
2. Crear atributos con ATTDEF
3. Posicionar atributos en la geometria
4. BLOCK incluyendo geometria y atributos

### 3.2 Orden de Atributos

El orden de seleccion determina el orden de prompts al insertar.

```
Command: BLOCK
Select objects: (seleccionar en orden deseado)
1. Geometria
2. Primer atributo (se pregunta primero)
3. Segundo atributo
...
```

### 3.3 Ejemplo Completo: Etiqueta de Cuarto

```
1. Dibujar rectangulo de etiqueta
2. ATTDEF: NUM_CUARTO (visible)
3. ATTDEF: NOMBRE_CUARTO (visible)
4. ATTDEF: AREA_M2 (visible)
5. BLOCK: ETIQUETA_CUARTO
   - Base point: centro
   - Select: rectangulo, luego atributos en orden
```

---

## 4. Insertar Bloques con Atributos

### 4.1 Proceso Normal

```
Command: INSERT
Name: ETIQUETA_CUARTO
Insertion point: (click)
Enter attribute values
Numero de cuarto? <000>: 101
Nombre del cuarto?: OFICINA
Area m2?: 25.5
```

### 4.2 Dialogo de Atributos

Si ATTDIA=1, aparece dialogo en lugar de prompts:

```
Command: ATTDIA
Enter new value for ATTDIA <0>: 1
```

### 4.3 Insercion con Preset

Atributos con modo Preset usan valor default sin preguntar.

---

## 5. Editar Atributos

### 5.1 DDEDIT (Edicion Simple)

```
Command: DDEDIT (o doble-click)
Select an annotation object: (click en bloque)
(editar en dialogo)
```

### 5.2 EATTEDIT (Editor Mejorado)

- **Command:** `EATTEDIT`
- **Ribbon:** Home Tab > Block Panel > Edit Attributes

```
Command: EATTEDIT
Select block: (click)
(dialogo con todos los atributos)
```

### 5.3 ATTEDIT (Edicion Global)

Editar atributos de multiples bloques:

```
Command: ATTEDIT
Edit attributes one at a time? [Yes/No] <Y>: N
Performing global editing of attribute values.
Edit only attributes visible on screen? [Yes/No] <Y>: Y
Enter block name specification <*>: ETIQUETA_CUARTO
Enter attribute tag specification <*>: NUM_CUARTO
Enter attribute value specification <*>: 1*
Enter new attribute value: 2*
(cambia 101 a 201, 102 a 202, etc.)
```

### 5.4 Cambiar en Properties

1. Seleccionar bloque
2. Ctrl+1 (Properties)
3. Expandir Attributes
4. Modificar valores

---

## 6. Propiedades de Atributos

### 6.1 BATTMAN (Block Attribute Manager)

- **Command:** `BATTMAN`
- **Ribbon:** Home Tab > Block Panel > Manage Attributes

Permite:
- Cambiar orden de atributos
- Modificar propiedades
- Sincronizar bloques

### 6.2 Sincronizar Atributos

Despues de modificar definicion, actualizar referencias:

```
Command: ATTSYNC
Enter an option [?/Name/Select] <Select>: S
Select a block: (click)
(todas las referencias se actualizan)
```

---

## 7. Extraer Datos (DATAEXTRACTION)

### 7.1 Acceso

- **Command:** `DATAEXTRACTION`
- **Ribbon:** Insert Tab > Linking & Extraction > Extract Data

### 7.2 Wizard

![Data Extraction Wizard](../imagenes/leccion-2-m2-dataextraction.png)

### 7.3 Pasos

1. **Create/Edit Data Extraction:** Nuevo o existente
2. **Define Data Source:** Dibujos a analizar
3. **Select Objects:** Bloques a incluir
4. **Select Properties:** Atributos a extraer
5. **Refine Data:** Filtrar y ordenar
6. **Output:** Tabla en dibujo o archivo externo

### 7.4 Formatos de Salida

| Formato | Uso |
|---------|-----|
| Table | Tabla en el dibujo |
| CSV | Excel, bases de datos |
| XLS | Excel directo |
| MDB | Access |
| TXT | Texto plano |

---

## 8. Ejemplo Practico: Lista de Equipos

### 8.1 Crear Bloque de Equipo

```
Geometria: Rectangulo con simbolo
Atributos:
- TAG: Identificador
- DESCRIPCION: Nombre del equipo
- FABRICANTE: Marca
- MODELO: Numero de modelo
- UBICACION: Donde esta instalado
```

### 8.2 Insertar Multiples

```
Equipo 1: E-001, Bomba centrifuga, Grundfos, CR-5, Cuarto de maquinas
Equipo 2: E-002, Compresor, Atlas Copco, GA-15, Azotea
Equipo 3: E-003, Chiller, Carrier, 30XA, Cuarto de maquinas
```

### 8.3 Extraer Lista

```
Data Extraction:
- Source: Dibujo actual
- Objects: EQUIPO
- Properties: TAG, DESCRIPCION, FABRICANTE, MODELO, UBICACION
- Output: Tabla en dibujo
```

**Resultado:** Lista de equipos automatica que se actualiza.

---

## 9. Tips y Mejores Practicas

### 9.1 Tags Descriptivos

```
Bien: NUM_PARTE, PRECIO_UNITARIO
Mal: A1, CAMPO1
```

### 9.2 Prompts Claros

```
Bien: "Ingrese el numero de parte del equipo"
Mal: "Parte?"
```

### 9.3 Valores Default Utiles

Si un valor se repite frecuentemente, usarlo como default.

### 9.4 Invisible vs Visible

- Visible: Informacion que debe verse en plano
- Invisible: Datos para reportes/listas

---

## Ejercicio Practico 2

**Objetivo:** Dominar atributos de bloques.

**Tarea 1: Crear Atributos**
- Crear 3 atributos con ATTDEF
- TAG: CODIGO, NOMBRE, CANTIDAD
- Diferentes modos (visible, invisible)

**Tarea 2: Bloque con Atributos**
- Dibujar simbolo de inventario
- Agregar los 3 atributos
- Crear bloque "INVENTARIO"

**Tarea 3: Insertar con Valores**
- Insertar 5 veces con diferentes valores
- Verificar prompts en orden correcto

**Tarea 4: Editar Atributos**
- Usar DDEDIT para editar uno
- Usar EATTEDIT para editar otro
- Usar Properties para modificar tercero

**Tarea 5: Extraccion de Datos**
- Usar DATAEXTRACTION
- Crear tabla con CODIGO, NOMBRE, CANTIDAD
- Insertar tabla en dibujo

**Tarea 6: Cuadro de Titulo**
- Crear bloque de title block
- Atributos: PROYECTO, FECHA, ESCALA, DIBUJO_NO
- Insertar en layout

**Entregable:** Archivo con bloques y tabla de datos.

---

## Evaluacion

**Pregunta 1:** Que componentes tiene una definicion de atributo?

**Pregunta 2:** Que modo hace que el atributo no se muestre en pantalla?

**Pregunta 3:** Que comando extrae datos de atributos?

**Pregunta 4:** Como se editan atributos de multiples bloques a la vez?

**Pregunta 5:** Que hace ATTSYNC?

---

## Resumen

En esta leccion aprendiste:

- Concepto y componentes de atributos
- Crear atributos con ATTDEF
- Diferentes modos de atributos
- Editar atributos: DDEDIT, EATTEDIT, ATTEDIT
- Extraer datos con DATAEXTRACTION
- Mejores practicas para atributos

**Proxima Leccion:** Bloques Dinamicos

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando sistema de inventario
