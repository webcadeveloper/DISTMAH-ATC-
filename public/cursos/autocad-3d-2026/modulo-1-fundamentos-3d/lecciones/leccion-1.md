# Lección 1: Workspace 3D y Sistema UCS

## Introducción

El entorno tridimensional de AutoCAD 2026 representa un cambio significativo respecto al trabajo bidimensional. Esta lección introduce los conceptos fundamentales del workspace 3D Modeling y el sistema de coordenadas UCS (User Coordinate System), pilares esenciales para cualquier trabajo de modelado tridimensional profesional.

Comprender y dominar el UCS es absolutamente crítico para el éxito en modelado 3D, ya que define el plano de trabajo sobre el cual construirás tus modelos. Un uso incorrecto del UCS es la causa principal de errores en profesionales que inician en 3D.

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Activar y configurar el workspace 3D Modeling en AutoCAD 2026
- Comprender la diferencia entre workspaces 2D y 3D
- Entender el concepto de UCS y su importancia en modelado 3D
- Manipular el UCS mediante comandos y métodos gráficos
- Crear, guardar y recuperar sistemas de coordenadas personalizados
- Configurar el icono UCS para máxima visibilidad y utilidad

## 1. Workspace 3D Modeling

### 1.1 ¿Qué es un Workspace?

Un workspace en AutoCAD es una configuración de interfaz que organiza menús, paletas, ribbons y toolbars según el tipo de trabajo a realizar. AutoCAD 2026 incluye workspaces predefinidos optimizados para diferentes disciplinas.

### 1.2 Activación del Workspace 3D Modeling

**Método 1: Desde el Quick Access Toolbar**
1. Localiza el menú desplegable de workspaces en la barra superior izquierda
2. Haz clic en el selector actual (probablemente dice "Drafting & Annotation")
3. Selecciona **"3D Modeling"**

**Método 2: Desde el Application Menu**
1. Haz clic en el botón "A" (Application Menu) en la esquina superior izquierda
2. Hover sobre "Tools" y selecciona "Workspaces"
3. Elige **"3D Modeling"**

![Activación de Workspace 3D Modeling](../imagenes/workspace-3d-activation.png)

### 1.3 Características del Workspace 3D Modeling

Una vez activado, observarás cambios significativos en la interfaz:

**Ribbon 3D Modeling:**
- Tab "Home" con herramientas de modelado 3D
- Tab "Solid" para operaciones de sólidos
- Tab "Surface" para modelado de superficies
- Tab "Mesh" para objetos mesh
- Tab "Visualize" para renderizado y materiales

**Paletas adicionales:**
- Materials Browser (navegador de materiales)
- Tool Palettes con bloques 3D
- Properties Palette adaptada a objetos 3D

**Viewport Configuration:**
- Por defecto, una vista única con ViewCube visible
- Posibilidad de configurar múltiples viewports 3D

### 1.4 Personalización del Workspace 3D

Puedes personalizar el workspace según tus preferencias:

1. Organiza paletas arrastrándolas a posiciones convenientes
2. Guarda tu configuración personalizada:
   - Haz clic en el selector de workspace
   - Selecciona "Save Current As..."
   - Nombra tu workspace personalizado (ej: "Mi 3D Workspace")

## 2. Sistema de Coordenadas UCS

### 2.1 Concepto Fundamental del UCS

El **UCS (User Coordinate System)** es un sistema de coordenadas definido por el usuario que establece:
- El origen del sistema de coordenadas (punto 0,0,0)
- La orientación de los ejes X, Y, Z
- El plano de trabajo sobre el cual dibujas

A diferencia del **WCS (World Coordinate System)**, que es fijo e inmutable, el UCS puede reposicionarse y reorientarse libremente para facilitar el modelado en diferentes planos de trabajo.

### 2.2 ¿Por Qué es Importante el UCS?

Imagina que necesitas modelar una ventana en la pared lateral de un edificio. Sin cambiar el UCS, estarías trabajando en el plano XY del suelo, haciendo extremadamente difícil el modelado preciso de la ventana vertical. Al rotar el UCS para alinearlo con la pared, el modelado se vuelve tan simple como trabajar en 2D.

**Regla de oro:** El UCS define tu plano de dibujo en 3D. Dominarlo es dominar el 50% del modelado 3D.

### 2.3 Icono UCS

El icono UCS muestra visualmente:
- Origen del sistema de coordenadas (donde se cruzan los ejes)
- Dirección del eje X (línea roja)
- Dirección del eje Y (línea verde)
- Dirección del eje Z (línea azul, perpendicular al plano XY)

![Icono UCS con ejes XYZ](../imagenes/ucs-icon-ejes.png)

**Configuración del icono UCS:**

Comando: `UCSICON`

Opciones:
- **ON/OFF**: Muestra u oculta el icono
- **Origin**: Coloca el icono en el origen del UCS (recomendado)
- **NOOrigin**: Coloca el icono en la esquina inferior izquierda
- **Properties**: Abre el diálogo de propiedades del icono

Configuración recomendada para principiantes:
```
Command: UCSICON
Enter an option [ON/OFF/All/Noorigin/ORigin/Properties] <ON>: OR
```

## 3. Comando UCS

### 3.1 Sintaxis Básica

Comando: `UCS`

El comando UCS permite manipular el sistema de coordenadas de múltiples formas.

### 3.2 Opciones Principales del Comando UCS

**World:**
Regresa al sistema de coordenadas mundial (WCS).
```
Command: UCS
Enter an option: W
```
Útil para volver al sistema de referencia principal.

**3Point:**
Define un nuevo UCS especificando tres puntos:
1. Nuevo origen
2. Punto sobre el eje X positivo
3. Punto sobre el eje Y positivo

```
Command: UCS
Enter an option: 3
Specify new origin point <0,0,0>: (selecciona punto)
Specify point on X-axis: (selecciona punto en dirección X)
Specify point on XY plane: (selecciona punto en plano XY)
```

**Object:**
Alinea el UCS con un objeto seleccionado (línea, cara de sólido, arco, etc.).
```
Command: UCS
Enter an option: OB
Select object to align UCS: (selecciona objeto)
```

**Face:**
Alinea el UCS con una cara de un sólido 3D (muy útil).
```
Command: UCS
Enter an option: F
Select face of solid object: (selecciona cara)
```

**View:**
Alinea el UCS perpendicular a la vista actual (el plano XY queda paralelo a la pantalla).
```
Command: UCS
Enter an option: V
```

**Origin:**
Mueve el origen del UCS sin cambiar la orientación de los ejes.
```
Command: UCS
Enter an option: O
Specify new origin point <0,0,0>: (especifica punto)
```

**X/Y/Z:**
Rota el UCS alrededor del eje especificado.
```
Command: UCS
Enter an option: X
Specify rotation angle about X axis <90>: 90
```

### 3.3 Ejercicio Práctico de UCS

**Ejercicio: Rotar UCS 90° alrededor del eje X**

1. Inicia AutoCAD con workspace 3D Modeling activo
2. Comando: `UCS` → Enter
3. Enter an option: `X` → Enter
4. Specify rotation angle: `90` → Enter
5. Observa cómo el icono UCS ha rotado
6. El antiguo plano XY ahora es vertical
7. Prueba dibujar una línea: ahora dibujas en un plano vertical
8. Para regresar al UCS mundial: `UCS` → `W` → Enter

## 4. UCS Named (Sistemas de Coordenadas Guardados)

### 4.1 ¿Por Qué Guardar UCS?

En proyectos complejos, frecuentemente trabajas en los mismos planos de trabajo. En lugar de reconfigurar el UCS cada vez, puedes guardarlo con un nombre y recuperarlo instantáneamente.

### 4.2 Guardar un UCS

**Método 1: Comando UCS Save**
```
Command: UCS
Enter an option: Save
Enter name to save current UCS or [?]: PARED_FRONTAL
```

**Método 2: UCS Manager**
1. Comando: `UCSMAN` o ribbon "Visualize" → "Coordinates" → "Named UCS"
2. En el diálogo UCS Manager, haz clic derecho sobre "Unnamed"
3. Selecciona "Rename"
4. Escribe el nombre: "PARED_FRONTAL"

![UCS Manager Dialog](../imagenes/ucs-manager-dialog.png)

### 4.3 Recuperar un UCS Guardado

**Método 1: Comando UCS Restore**
```
Command: UCS
Enter an option: Restore (o simplemente R)
Enter name of UCS to restore: PARED_FRONTAL
```

**Método 2: UCS Manager**
1. Comando: `UCSMAN`
2. Doble clic sobre el UCS guardado deseado

**Método 3: Ribbon**
1. Tab "Visualize" → Panel "Coordinates"
2. Desplegable "Named UCS"
3. Selecciona el UCS guardado

### 4.4 Nomenclatura Recomendada para UCS

Usa nombres descriptivos que indiquen el plano de trabajo:
- `PISO_PLANTA_BAJA`
- `PARED_NORTE`
- `TECHO_INCLINADO`
- `FACHADA_PRINCIPAL`
- `PLANO_LATERAL_DERECHO`

Evita nombres genéricos como "UCS1", "UCS2", que no transmiten información útil.

## 5. Comando PLAN

### 5.1 Funcionalidad del Comando PLAN

El comando PLAN cambia la vista para mostrar el plano XY del UCS actual desde arriba (vista en planta).

Comando: `PLAN`

Opciones:
- **Current UCS**: Vista en planta del UCS actual
- **World UCS**: Vista en planta del WCS
- **Named UCS**: Vista en planta de un UCS guardado

### 5.2 Uso Típico

Después de manipular el UCS, usar PLAN te permite ver el nuevo plano de trabajo "desde arriba", facilitando el dibujo de elementos en ese plano.

```
Command: PLAN
Enter an option [Current ucs/Ucs/World] <Current>: (Enter para UCS actual)
```

## 6. Workflow Recomendado para Principiantes

### Secuencia de trabajo básica:

1. **Iniciar con WCS**: Siempre comienza en el sistema de coordenadas mundial
2. **Planificar planos de trabajo**: Identifica qué planos necesitarás para tu modelo
3. **Crear y guardar UCS**: Configura y guarda UCS para cada plano importante
4. **Cambiar entre UCS**: Usa UCS guardados para trabajar eficientemente
5. **Verificar con vistas**: Usa ViewCube y PLAN para verificar orientación
6. **Regresar a WCS**: Al terminar, vuelve al WCS para mantener consistencia

## 7. Errores Comunes y Soluciones

### Error 1: Dibujar en el plano incorrecto
**Síntoma:** Los objetos aparecen en lugares inesperados.
**Solución:** Verifica siempre el UCS activo antes de dibujar. Usa PLAN para confirmar el plano de trabajo.

### Error 2: Perder el origen del UCS
**Síntoma:** El icono UCS no está en el origen esperado.
**Solución:** `UCSICON` → `OR` para colocar el icono en el origen.

### Error 3: UCS rotado accidentalmente
**Síntoma:** Los ejes X e Y no están donde los esperas.
**Solución:** `UCS` → `W` para regresar al WCS y reiniciar.

## 8. Ejercicios Prácticos

### Ejercicio 1: Configuración Inicial
1. Activa el workspace 3D Modeling
2. Configura el icono UCS en el origen
3. Verifica que los ejes X (rojo), Y (verde), Z (azul) sean visibles

### Ejercicio 2: Manipulación Básica de UCS
1. Rota el UCS 90° alrededor del eje X
2. Dibuja un rectángulo (ahora estará vertical)
3. Regresa al WCS
4. Observa el rectángulo desde una vista isométrica

### Ejercicio 3: UCS Guardados
1. Rota el UCS 90° alrededor del eje Y
2. Guarda este UCS con el nombre "PARED_LATERAL"
3. Regresa al WCS
4. Recupera el UCS "PARED_LATERAL"
5. Usa PLAN para ver el plano de trabajo desde arriba

## Resumen

En esta lección has aprendido:

- El workspace 3D Modeling organiza las herramientas para modelado tridimensional
- El UCS (User Coordinate System) define tu plano de trabajo en 3D
- Puedes manipular el UCS mediante comandos (UCS, PLAN) y métodos gráficos
- Guardar UCS con nombres descriptivos acelera significativamente el trabajo
- El icono UCS debe configurarse en el origen para máxima claridad
- Dominar el UCS es fundamental para todo el modelado 3D

## Próxima Lección

En la Lección 2, dominarás las herramientas de visualización 3D: ViewCube, diferentes tipos de Orbit, vistas predefinidas y configuración de proyecciones. Estas herramientas te permitirán navegar fluidamente por tus modelos tridimensionales.

## Recursos Adicionales

- **Comando de referencia rápida UCS:** `UCS` → `?` para ver todas las opciones
- **Atajo de teclado recomendado:** Asigna una tecla rápida a `UCS` → `W` (regresar a WCS)
- **Video demostrativo:** Ver video de manipulación de UCS en diferentes planos

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Fundamental
**Prerequisito para:** Todas las lecciones de modelado 3D
