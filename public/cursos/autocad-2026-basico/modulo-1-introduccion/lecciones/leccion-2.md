# Leccion 2: Configuracion Inicial de AutoCAD 2026

**Duracion:** 45 minutos
**Modulo:** 1 - Introduccion a AutoCAD 2026
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Configurar las unidades de dibujo (Units)
- Establecer los limites del dibujo (Limits)
- Configurar el Grid y Snap
- Personalizar las opciones del programa (Options)
- Crear y guardar archivos de dibujo correctamente

---

## Introduccion

Antes de comenzar cualquier proyecto en AutoCAD 2026, es fundamental configurar correctamente el entorno de trabajo. Una configuracion adecuada garantiza precision en tus dibujos y evita problemas de escala y compatibilidad.

---

## 1. Configuracion de Unidades (UNITS)

### 1.1 Acceder al Comando UNITS

Hay varias formas de acceder:

- **Command Line:** Escribir `UNITS` y presionar Enter
- **Application Menu:** A > Drawing Utilities > Units
- **Ribbon:** No disponible directamente (usar Command Line)

### 1.2 Tipos de Unidades Lineales

| Tipo | Descripcion | Ejemplo |
|------|-------------|---------|
| Decimal | Sistema metrico decimal | 25.4000 |
| Engineering | Pies y pulgadas decimales | 2'-1.4000" |
| Architectural | Pies, pulgadas y fracciones | 2'-1 3/8" |
| Fractional | Fracciones de pulgada | 25 3/8 |
| Scientific | Notacion cientifica | 2.5400E+01 |

### 1.3 Configuracion Recomendada para Mexico/Latinoamerica

```
Type: Decimal
Precision: 0.0000 (4 decimales)
Insertion scale: Millimeters
Lighting: International
```

### 1.4 Unidades Angulares

| Tipo | Descripcion | Ejemplo |
|------|-------------|---------|
| Decimal Degrees | Grados decimales | 45.0000° |
| Deg/Min/Sec | Grados, minutos, segundos | 45°0'0" |
| Grads | Gradianes (400 = circulo) | 50.0000g |
| Radians | Radianes | 0.7854r |
| Surveyor's Units | Rumbo topografico | N 45°0'0" E |

**Configuracion tipica:**
- Type: Decimal Degrees
- Precision: 0.0000
- Clockwise: Desactivado (angulos anti-horario positivos)

![Dialogo Units AutoCAD 2026](../imagenes/leccion-2-units-dialog.png)

---

## 2. Limites del Dibujo (LIMITS)

### 2.1 Que son los Limites

Los limites definen el area de trabajo rectangular. Aunque no son restrictivos (puedes dibujar fuera de ellos), ayudan a:

- Definir el area de impresion
- Controlar la extension del Grid
- Organizar el espacio de trabajo

### 2.2 Comando LIMITS

```
Command: LIMITS
Reset Model space limits:
Specify lower left corner or [ON/OFF] <0.0000,0.0000>: (Enter para aceptar)
Specify upper right corner <420.0000,297.0000>: 1000,700 (nuevo limite)
```

### 2.3 Limites Recomendados por Escala

| Escala | Tamano Papel A1 (mm) | Limites Sugeridos |
|--------|---------------------|-------------------|
| 1:1 | 841 x 594 | 841,594 |
| 1:50 | 841 x 594 | 42050,29700 |
| 1:100 | 841 x 594 | 84100,59400 |
| 1:200 | 841 x 594 | 168200,118800 |

### 2.4 Ver Todo el Area de Limites

Despues de establecer limites, usa:

```
Command: ZOOM
Specify corner of window, enter a scale factor (nX or nXP), or
[All/Center/Dynamic/Extents/Previous/Scale/Window/Object] <real time>: A
```

---

## 3. Configuracion del Grid

### 3.1 Que es el Grid

El Grid es una matriz de puntos o lineas que sirve como referencia visual. No se imprime.

### 3.2 Activar/Desactivar Grid

- **Atajo:** F7
- **Status Bar:** Click en icono GRID
- **Command Line:** `GRIDMODE` (0 = off, 1 = on)

### 3.3 Configurar Espaciado del Grid

```
Command: GRID
Specify grid spacing(X) or [ON/OFF/Snap/Major/aDaptive/Limits/Follow/Aspect] <10.0000>: 5
```

**Opciones importantes:**

| Opcion | Funcion |
|--------|---------|
| Major | Lineas principales cada N lineas |
| aDaptive | Grid se adapta al nivel de zoom |
| Limits | Grid solo dentro de limites |
| Aspect | Espaciado diferente X/Y |

### 3.4 Estilo del Grid (2D vs 3D)

En AutoCAD 2026, el Grid puede mostrarse como:

- **Dotted:** Puntos (clasico 2D)
- **Lines:** Lineas (estilo moderno)

Configuracion: Options > Drafting > Grid style

---

## 4. Configuracion del Snap

### 4.1 Que es el Snap

Snap restringe el cursor a intervalos especificos, facilitando el dibujo preciso.

### 4.2 Activar/Desactivar Snap

- **Atajo:** F9
- **Status Bar:** Click en icono SNAP
- **Command Line:** `SNAPMODE`

### 4.3 Configurar Espaciado del Snap

```
Command: SNAP
Specify snap spacing or [ON/OFF/Aspect/Style/Type] <10.0000>: 5
```

### 4.4 Relacion Grid-Snap

**Recomendacion:** Mantener el Snap igual o multiplo del Grid.

| Grid | Snap | Resultado |
|------|------|-----------|
| 10 | 10 | Cursor salta a cada punto del grid |
| 10 | 5 | Cursor salta entre puntos del grid |
| 10 | 2.5 | Mayor precision entre puntos |

---

## 5. Dialogo Options

### 5.1 Acceder a Options

- **Command Line:** `OPTIONS` o `OP`
- **Application Menu:** A > Options
- **Click derecho:** En area de dibujo > Options

### 5.2 Pestanas Principales

#### Files Tab
- Rutas de busqueda de archivos
- Ubicacion de templates
- Carpetas de fuentes

#### Display Tab
- Colores de interfaz (fondo, cursor)
- Crosshair size (5-100%)
- Display resolution

#### Open and Save Tab
- Formato de guardado por defecto
- Automatic save (cada N minutos)
- File safety precautions

#### User Preferences Tab
- Comportamiento del click derecho
- Unidades de insercion
- Configuracion de Hyperlinks

#### Drafting Tab
- Tamano del AutoSnap marker
- Configuracion de Object Snap
- Opciones de Dynamic Input

#### 3D Modeling Tab
- Opciones de visualizacion 3D
- Crosshair labels
- Dynamic UCS

#### Selection Tab
- Tamano del pickbox
- Metodos de seleccion
- Grip options

#### Profiles Tab
- Guardar configuraciones personalizadas
- Exportar/Importar perfiles

![Options Dialog AutoCAD 2026](../imagenes/leccion-2-options-dialog.png)

---

## 6. Creacion y Guardado de Archivos

### 6.1 Crear Nuevo Dibujo

**Metodo 1: Quick Access Toolbar**
- Click en icono New

**Metodo 2: Command Line**
```
Command: NEW
```

**Metodo 3: Atajo**
- Ctrl+N

### 6.2 Templates (Plantillas)

AutoCAD 2026 incluye templates predefinidas:

| Template | Uso |
|----------|-----|
| acad.dwt | Unidades imperiales |
| acadiso.dwt | Unidades metricas (ISO) |
| Tutorial-iArch.dwt | Arquitectura imperial |
| Tutorial-mMfg.dwt | Manufactura metrica |

### 6.3 Guardar Dibujo

**Guardar (Save):** Ctrl+S
```
Command: SAVE
```

**Guardar Como (Save As):** Ctrl+Shift+S
```
Command: SAVEAS
```

### 6.4 Formatos de Archivo

| Formato | Extension | Uso |
|---------|-----------|-----|
| AutoCAD 2018 Drawing | .dwg | Maxima compatibilidad |
| AutoCAD 2026 Drawing | .dwg | Formato nativo actual |
| Drawing Exchange Format | .dxf | Intercambio universal |
| Drawing Template | .dwt | Plantillas reutilizables |

### 6.5 Automatic Save

Configurar guardado automatico:

1. Options > Open and Save
2. Automatic save: Activado
3. Minutes between saves: 10 (recomendado)
4. Ubicacion: Automatic Save File Location

---

## Ejercicio Practico 2

**Objetivo:** Configurar un nuevo dibujo con especificaciones profesionales.

**Tareas:**

1. **Crear nuevo dibujo:**
   - Usar template acadiso.dwt
   - Guardar como "Ejercicio-Config.dwg"

2. **Configurar unidades:**
   - Tipo: Decimal
   - Precision: 0.00 (2 decimales)
   - Unidades de insercion: Millimeters
   - Angulos: Decimal Degrees

3. **Establecer limites:**
   - Esquina inferior izquierda: 0,0
   - Esquina superior derecha: 420,297 (tamano A3)
   - Hacer Zoom All

4. **Configurar Grid y Snap:**
   - Grid spacing: 10mm
   - Snap spacing: 5mm
   - Activar ambos (F7 y F9)

5. **Personalizar Options:**
   - Cambiar color de fondo a gris oscuro
   - Crosshair size: 15%
   - Automatic save: 5 minutos

**Entregable:** Screenshot de tu dibujo con Grid visible y dialogo Units abierto.

---

## Evaluacion

**Pregunta 1:** Cual es el comando para configurar las unidades de dibujo?

**Pregunta 2:** Que atajo de teclado activa/desactiva el Grid?

**Pregunta 3:** Para que sirven los Limites del dibujo (LIMITS)?

**Pregunta 4:** Cual es la diferencia entre Grid y Snap?

**Pregunta 5:** Que template usarias para un proyecto en sistema metrico?

---

## Resumen

En esta leccion aprendiste:

- Como configurar las unidades lineales y angulares
- El proposito y configuracion de los limites del dibujo
- La diferencia entre Grid (visual) y Snap (precision)
- Las opciones principales del dialogo Options
- Como crear, guardar y usar templates

**Proxima Leccion:** Sistemas de Coordenadas (Absolutas, Relativas, Polares)

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos configurando diferentes escenarios
