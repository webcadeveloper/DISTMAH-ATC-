# Leccion 1: Trabajo con Capas (Layers)

**Duracion:** 60 minutos
**Modulo:** 2 - Construccion Basica
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Comprender el concepto y beneficios de las capas
- Crear, renombrar y eliminar capas
- Asignar propiedades a las capas (color, linetype, lineweight)
- Controlar la visibilidad y estado de las capas
- Organizar dibujos profesionalmente con capas

---

## Introduccion

Las capas (Layers) son uno de los conceptos mas importantes en AutoCAD. Funcionan como hojas transparentes superpuestas que permiten organizar diferentes tipos de informacion en un dibujo.

Piensa en las capas como los acetatos que se usaban en proyectores: cada uno contiene informacion diferente, pero al superponerlos ves el dibujo completo.

---

## 1. Conceptos Fundamentales

### 1.1 Que es una Capa

Una capa es un contenedor logico para objetos que comparten:

- Tipo de informacion (muros, cotas, texto, etc.)
- Propiedades visuales (color, tipo de linea, grosor)
- Comportamiento de impresion

### 1.2 Beneficios de Usar Capas

| Beneficio | Descripcion |
|-----------|-------------|
| Organizacion | Agrupa objetos por tipo o sistema |
| Control visual | Muestra/oculta grupos de objetos |
| Edicion masiva | Cambia propiedades de grupos completos |
| Impresion | Controla que se imprime y como |
| Estandarizacion | Facilita colaboracion entre equipos |

### 1.3 Capa 0 (Cero)

AutoCAD incluye una capa predeterminada llamada "0":

- No se puede eliminar ni renombrar
- Sirve como capa por defecto
- Objetos en capa 0 heredan propiedades de bloques
- Recomendacion: No dibujar directamente en capa 0

---

## 2. Layer Properties Manager

### 2.1 Acceder al Administrador de Capas

- **Atajo:** `LA` + Enter
- **Command Line:** `LAYER`
- **Ribbon:** Home Tab > Layers Panel > Layer Properties
- **Icono:** Click en icono de capas

### 2.2 Interfaz del Layer Properties Manager

![Layer Properties Manager](../imagenes/leccion-1-m2-layer-manager.png)

**Columnas principales:**

| Columna | Funcion |
|---------|---------|
| Status | Indica capa actual |
| Name | Nombre de la capa |
| On | Visible (bombilla) |
| Freeze | Congelada (sol/copo) |
| Lock | Bloqueada (candado) |
| Color | Color de la capa |
| Linetype | Tipo de linea |
| Lineweight | Grosor de linea |
| Plot | Se imprime o no |

### 2.3 Crear Nueva Capa

1. Click en icono "New Layer" (hoja con estrella)
2. Escribe el nombre de la capa
3. Presiona Enter
4. Configura propiedades (color, linetype, etc.)

**Atajo:** Alt+N en Layer Properties Manager

### 2.4 Nombrar Capas Correctamente

**Convencion profesional:**

```
PREFIJO-SISTEMA-DESCRIPCION

Ejemplos:
A-MUROS-EXTERIORES (Arquitectura - Muros - Exteriores)
E-LUMINARIAS (Electrico - Luminarias)
S-VIGAS (Estructural - Vigas)
P-TUBERIA-AGUA (Plomeria - Tuberia - Agua)
```

**Estandares comunes:**

| Prefijo | Disciplina |
|---------|------------|
| A- | Arquitectura |
| S- | Estructural |
| E- | Electrico |
| P- | Plomeria/Mecanico |
| C- | Civil |
| G- | General |

---

## 3. Propiedades de Capas

### 3.1 Color

Cada capa puede tener un color asignado. Los objetos "ByLayer" heredan este color.

**Colores ACI (AutoCAD Color Index):**

| Numero | Color |
|--------|-------|
| 1 | Rojo |
| 2 | Amarillo |
| 3 | Verde |
| 4 | Cyan |
| 5 | Azul |
| 6 | Magenta |
| 7 | Blanco/Negro |
| 8-255 | Colores adicionales |

**True Color:** RGB completo (16 millones de colores)

**Color Books:** Pantone, RAL, DIC

### 3.2 Linetype (Tipo de Linea)

Define el patron de la linea:

| Linetype | Uso Tipico |
|----------|------------|
| Continuous | Lineas visibles, contornos |
| Hidden | Lineas ocultas |
| Center | Lineas de centro |
| Phantom | Lineas fantasma, trayectorias |
| Dashed | Lineas a trazos |
| Dot | Lineas punteadas |

**Cargar Linetypes:**
1. En Layer Properties > Linetype
2. Click en "Load..."
3. Seleccionar del archivo acadiso.lin (metrico) o acad.lin (imperial)

### 3.3 Lineweight (Grosor de Linea)

Define el grosor de impresion:

| Grosor (mm) | Uso Tipico |
|-------------|------------|
| 0.00 | Default (0.25mm) |
| 0.13 | Lineas muy finas, cotas |
| 0.25 | Lineas normales |
| 0.35 | Lineas medias |
| 0.50 | Lineas de contorno |
| 0.70 | Lineas gruesas |
| 1.00+ | Bordes, marcos |

**Ver Lineweight en pantalla:**
- Status Bar > LWT (toggle)
- O comando `LWDISPLAY`

### 3.4 Plot (Impresion)

- **Si (icono de impresora):** La capa se imprime
- **No (icono tachado):** La capa no se imprime

Uso: Capas de construccion, notas internas, viewport frames.

---

## 4. Estados de Capas

### 4.1 On/Off (Encendido/Apagado)

- **On (bombilla amarilla):** Capa visible y editable
- **Off (bombilla gris):** Capa invisible pero se regenera

**Comando:** `LAYER` > On/Off columna

### 4.2 Freeze/Thaw (Congelar/Descongelar)

- **Thaw (sol):** Capa visible y se procesa
- **Freeze (copo de nieve):** Capa invisible, no se procesa

**Diferencia con Off:**
Freeze mejora rendimiento porque AutoCAD ignora completamente los objetos.

### 4.3 Lock/Unlock (Bloquear/Desbloquear)

- **Unlock (candado abierto):** Edicion normal
- **Lock (candado cerrado):** Visible pero no editable

**Uso:** Proteger capas de referencia mientras trabajas.

### 4.4 Comparacion de Estados

| Estado | Visible | Editable | Regenera | Seleccionable |
|--------|---------|----------|----------|---------------|
| On | Si | Si | Si | Si |
| Off | No | No | Si | No |
| Thaw | Si | Si | Si | Si |
| Freeze | No | No | No | No |
| Unlock | Si | Si | Si | Si |
| Lock | Si | No | Si | No (fade) |

---

## 5. Trabajar con Capas

### 5.1 Establecer Capa Actual

El objeto que dibujes se creara en la capa actual.

**Metodos:**
1. Layer dropdown en Ribbon > Click en capa
2. Layer Properties Manager > Doble-click en capa
3. `CLAYER` comando > Nombre de capa

### 5.2 Cambiar Objetos de Capa

1. Selecciona los objetos
2. En Layer dropdown, selecciona la nueva capa
3. Los objetos cambian automaticamente

**O usando Properties (Ctrl+1):**
1. Selecciona objetos
2. Properties > Layer > Cambiar

### 5.3 Aislar Capa (LAYISO)

Oculta todas las capas excepto la seleccionada:

```
Command: LAYISO
Select object on layer to be isolated: (click en objeto)
```

### 5.4 Desaislar Capas (LAYUNISO)

Restaura las capas ocultas por LAYISO:

```
Command: LAYUNISO
```

### 5.5 Congelar Capa de Objeto (LAYFRZ)

```
Command: LAYFRZ
Select object on layer to freeze: (click en objeto)
```

### 5.6 Apagar Capa de Objeto (LAYOFF)

```
Command: LAYOFF
Select object on layer to turn off: (click en objeto)
```

### 5.7 Encender Todas las Capas (LAYON)

```
Command: LAYON
All layers have been turned on.
```

---

## 6. Propiedades ByLayer

### 6.1 Concepto ByLayer

"ByLayer" significa que el objeto hereda la propiedad de su capa.

**Ventaja:** Cambias la capa y todos los objetos cambian automaticamente.

### 6.2 Configurar Objeto como ByLayer

En Properties panel:

- Color: ByLayer
- Linetype: ByLayer
- Lineweight: ByLayer

### 6.3 Override (Anulacion)

Puedes asignar propiedades individuales a objetos:

- Color: Rojo (en lugar de ByLayer)
- El objeto sera rojo sin importar el color de su capa

**Recomendacion:** Evitar overrides. Usar capas para control.

---

## 7. Organizacion Profesional

### 7.1 Ejemplo: Plano Arquitectonico

| Capa | Color | Linetype | Lineweight | Contenido |
|------|-------|----------|------------|-----------|
| A-MUROS | 7 | Continuous | 0.50 | Muros principales |
| A-MUROS-BAJOS | 4 | Continuous | 0.35 | Muros bajos, antepechos |
| A-PUERTAS | 3 | Continuous | 0.25 | Simbolos de puertas |
| A-VENTANAS | 5 | Continuous | 0.25 | Simbolos de ventanas |
| A-COTAS | 2 | Continuous | 0.13 | Dimensiones |
| A-TEXTO | 7 | Continuous | 0.18 | Textos y etiquetas |
| A-EJES | 1 | Center | 0.18 | Ejes de construccion |
| A-MOBILIARIO | 8 | Continuous | 0.18 | Muebles |

### 7.2 Ejemplo: Plano Mecanico

| Capa | Color | Linetype | Lineweight | Contenido |
|------|-------|----------|------------|-----------|
| M-CONTORNO | 7 | Continuous | 0.50 | Perfiles visibles |
| M-OCULTAS | 1 | Hidden | 0.25 | Lineas ocultas |
| M-CENTROS | 3 | Center | 0.18 | Lineas de centro |
| M-COTAS | 2 | Continuous | 0.13 | Dimensiones |
| M-CORTE | 4 | Phantom | 0.25 | Lineas de corte |
| M-NOTAS | 7 | Continuous | 0.18 | Notas y textos |

---

## Ejercicio Practico 1

**Objetivo:** Crear estructura de capas profesional.

**Tareas:**

1. **Crear nuevas capas:**
   - MUROS (Color 7, Continuous, 0.50)
   - PUERTAS (Color 3, Continuous, 0.25)
   - VENTANAS (Color 5, Continuous, 0.25)
   - COTAS (Color 2, Continuous, 0.13)
   - EJES (Color 1, Center, 0.18)
   - TEXTO (Color 7, Continuous, 0.18)

2. **Configurar capa actual:**
   - Establecer MUROS como capa actual
   - Dibujar un rectangulo de 10x8 metros

3. **Practicar estados:**
   - Apagar capa COTAS
   - Congelar capa EJES
   - Bloquear capa MUROS
   - Observar efectos

4. **Aislar y restaurar:**
   - Usar LAYISO en MUROS
   - Usar LAYUNISO para restaurar

**Entregable:** Screenshot del Layer Properties Manager con todas las capas creadas.

---

## Evaluacion

**Pregunta 1:** Cual es el comando rapido para abrir Layer Properties Manager?

**Pregunta 2:** Cual es la diferencia entre Off y Freeze?

**Pregunta 3:** Que significa "ByLayer"?

**Pregunta 4:** Como se llama la capa predeterminada que no se puede eliminar?

**Pregunta 5:** Que comando aisla una capa ocultando las demas?

---

## Resumen

En esta leccion aprendiste:

- El concepto y beneficios de las capas
- Como crear y configurar capas
- Los diferentes estados de capas (On/Off, Freeze/Thaw, Lock/Unlock)
- Como organizar un dibujo profesionalmente
- El concepto de propiedades ByLayer

**Proxima Leccion:** Comandos Circle y Arc

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos creando estructura de capas para proyecto real
