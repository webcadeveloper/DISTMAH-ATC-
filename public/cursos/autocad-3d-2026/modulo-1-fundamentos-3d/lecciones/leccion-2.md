# Lección 2: Visualización 3D (ViewCube, Orbit, Views)

## Introducción

La capacidad de visualizar y navegar fluidamente en el espacio tridimensional es esencial para el modelado 3D efectivo. AutoCAD 2026 proporciona herramientas sofisticadas de navegación que permiten explorar modelos desde cualquier ángulo, verificar geometría compleja y presentar diseños de manera profesional.

Esta lección cubre las herramientas de visualización más importantes: ViewCube (navegación intuitiva), familia de comandos Orbit (rotación de vista), vistas predefinidas (isométricas y ortogonales), y configuración de proyecciones paralelas versus perspectivas. Dominar estas herramientas transformará tu capacidad de trabajar eficientemente en 3D.

## Objetivos de Aprendizaje

Al completar esta lección, podrás:

- Navegar modelos 3D utilizando el ViewCube de forma intuitiva
- Aplicar diferentes comandos Orbit para rotar la vista
- Acceder rápidamente a vistas predefinidas estándar
- Configurar vistas isométricas y ortogonales personalizadas
- Alternar entre proyección paralela y perspectiva
- Crear y guardar vistas personalizadas con el View Manager
- Utilizar atajos de teclado para navegación 3D eficiente

## 1. ViewCube: Navegación Intuitiva

### 1.1 ¿Qué es el ViewCube?

El **ViewCube** es una herramienta de navegación visual que aparece en la esquina superior derecha del viewport cuando el workspace 3D Modeling está activo. Representa un cubo tridimensional que muestra la orientación actual de la vista y permite cambiarla mediante clics directos.

![ViewCube en la esquina del viewport](../imagenes/viewcube-interface.png)

### 1.2 Elementos del ViewCube

**Caras del cubo:**
- **Top**: Vista superior (planta)
- **Bottom**: Vista inferior
- **Front**: Vista frontal
- **Back**: Vista posterior
- **Left**: Vista lateral izquierda
- **Right**: Vista lateral derecha

**Esquinas del cubo:**
- Representan vistas isométricas combinadas (ej: Front-Top-Right)

**Aristas del cubo:**
- Representan vistas combinadas de dos caras (ej: Front-Top)

**Brújula circular:**
- Permite rotar la vista manteniendo el ángulo vertical
- Las marcas N, S, E, W indican direcciones cardinales

### 1.3 Uso del ViewCube

**Cambiar a vista ortogonal:**
1. Haz clic sobre cualquier cara del cubo (Top, Front, Right, etc.)
2. La vista cambia instantáneamente a esa orientación ortogonal

**Cambiar a vista isométrica:**
1. Haz clic sobre cualquier esquina del cubo
2. La vista cambia a la isométrica correspondiente
3. Ejemplo: Esquina superior-frontal-derecha = Vista isométrica SW

**Rotar vista con la brújula:**
1. Haz clic y arrastra sobre la brújula circular
2. La vista rota horizontalmente manteniendo el ángulo de elevación

**Menú contextual del ViewCube:**
1. Haz clic derecho sobre el ViewCube
2. Opciones disponibles:
   - **Home**: Regresa a la vista inicial guardada
   - **Parallel/Perspective**: Alterna proyección
   - **ViewCube Settings**: Configuración avanzada
   - **Help**: Ayuda del ViewCube

### 1.4 Configuración del ViewCube

**Acceso a configuración:**
1. Clic derecho sobre ViewCube → "ViewCube Settings"
2. O comando: `NAVVCUBEDISPLAY`

**Opciones importantes:**
- **Display the ViewCube**: Mostrar/ocultar el ViewCube
- **ViewCube size**: Tamaño (Tiny, Small, Normal, Large)
- **Opacity**: Transparencia cuando inactivo
- **When dragging on the ViewCube**: Comportamiento al arrastrar
  - Snap to closest view (recomendado para principiantes)
  - Free dragging
- **Show the compass below the ViewCube**: Mostrar brújula

### 1.5 Definir Vista "Home"

La vista "Home" es la vista por defecto a la cual regresas con el comando HOME del ViewCube.

**Establecer vista Home actual:**
1. Posiciona la vista como desees
2. Clic derecho sobre ViewCube → "Set Current View as Home"
3. Ahora clic derecho → "Home" regresará a esta vista

## 2. Comandos Orbit

### 2.1 3D Orbit (Comando Principal)

El comando **3DORBIT** permite rotar la vista alrededor del centro del modelo de forma interactiva.

**Activación:**
- Comando: `3DORBIT` o `3DO`
- Ribbon: View tab → Navigate panel → Orbit
- Atajo: Mantener presionado el botón central del mouse (rueda)

**Uso:**
1. Activa el comando 3DORBIT
2. Aparece un círculo con cuatro círculos pequeños (arcball)
3. Haz clic y arrastra para rotar la vista:
   - **Dentro del círculo grande**: Rotación libre
   - **Círculo pequeño izquierdo/derecho**: Rotación alrededor del eje vertical
   - **Círculo pequeño superior/inferior**: Rotación alrededor del eje horizontal
   - **Fuera del círculo grande**: Rotación tipo "roll" (giro sobre el eje de visión)

![Arcball de 3D Orbit](../imagenes/3dorbit-arcball.png)

**Opciones durante 3D Orbit:**
- Clic derecho para menú contextual:
  - **Exit**: Salir de Orbit
  - **Pan**: Cambiar a modo Pan
  - **Zoom**: Cambiar a modo Zoom
  - **Orbit**: Subtipos de Orbit
  - **Projection**: Parallel/Perspective
  - **Visual Styles**: Cambiar estilo visual

### 2.2 Free Orbit

**Comando:** `3DFORBIT`

Similar a 3D Orbit, pero sin restricciones en el arcball. Permite rotación completamente libre sin las ayudas visuales de los círculos pequeños.

**Cuándo usar:**
- Cuando necesitas exploración rápida sin restricciones
- Para verificar geometría desde ángulos inusuales
- Usuarios experimentados que no necesitan las guías del arcball

### 2.3 Continuous Orbit

**Comando:** `3DCORBIT`

Crea una rotación continua de la vista que persiste después de soltar el mouse.

**Uso:**
1. Ejecuta `3DCORBIT`
2. Haz clic y arrastra en la dirección de rotación deseada
3. Suelta el mouse: la rotación continúa indefinidamente
4. Haz clic nuevamente para detener

**Aplicación:**
- Presentaciones dinámicas de modelos
- Verificación visual de geometría en movimiento
- Detectar errores que solo son visibles en movimiento

### 2.4 Orbit Constrained (Órbita Restringida)

**Comando:** `3DORBIT` con restricciones automáticas

AutoCAD 2026 incluye restricciones automáticas en 3D Orbit:
- No permite invertir completamente la vista (evita desorientación)
- Mantiene "arriba" como arriba (no permite vistas invertidas)

**Desactivar restricciones:**
1. Durante 3D Orbit, clic derecho
2. Deselecciona "Maintain Up Direction"

## 3. Vistas Predefinidas

### 3.1 Vistas Ortogonales Estándar

AutoCAD proporciona 6 vistas ortogonales estándar que muestran el modelo directamente desde cada dirección cardinal.

**Acceso:**
- Ribbon: View tab → Views panel → Named Views dropdown
- Comando: `VIEW` → Tab "Preset Views"
- ViewCube: Clic sobre caras

**Vistas ortogonales:**

1. **Top (Superior):** Mira hacia abajo en el eje Z
   - Comando rápido: `PLAN` o `-VIEW` → `TOP`

2. **Bottom (Inferior):** Mira hacia arriba desde abajo
   - Comando: `-VIEW` → `BOTTOM`

3. **Front (Frontal):** Vista desde el frente del modelo
   - Comando: `-VIEW` → `FRONT`

4. **Back (Posterior):** Vista desde atrás
   - Comando: `-VIEW` → `BACK`

5. **Left (Lateral Izquierda):** Vista desde la izquierda
   - Comando: `-VIEW` → `LEFT`

6. **Right (Lateral Derecha):** Vista desde la derecha
   - Comando: `-VIEW` → `RIGHT`

### 3.2 Vistas Isométricas Estándar

Las vistas isométricas muestran el modelo desde un ángulo que revela tres caras simultáneamente, proporcionando mejor percepción espacial.

**Vistas isométricas estándar:**

1. **SW Isometric (Suroeste Isométrica):**
   - Comando: `-VIEW` → `SWISO`
   - Vista más común en dibujo técnico
   - Muestra frente, lado izquierdo, y superior

2. **SE Isometric (Sureste Isométrica):**
   - Comando: `-VIEW` → `SEISO`
   - Muestra frente, lado derecho, y superior

3. **NE Isometric (Noreste Isométrica):**
   - Comando: `-VIEW` → `NEISO`
   - Muestra atrás, lado derecho, y superior

4. **NW Isometric (Noroeste Isométrica):**
   - Comando: `-VIEW` → `NWISO`
   - Muestra atrás, lado izquierdo, y superior

![Cuatro vistas isométricas estándar](../imagenes/vistas-isometricas-estandar.png)

### 3.3 Comando VIEW y View Manager

**Comando VIEW:**
Abre el cuadro de diálogo View Manager para gestión completa de vistas.

**Funciones del View Manager:**

1. **Guardar vista actual:**
   - Click en "New..."
   - Nombre: "Vista_Fachada_Principal"
   - Configurar propiedades:
     - Camera position (posición de cámara)
     - View category (categoría)
     - Layer snapshot (captura de estado de capas)
     - UCS saved with view (guardar UCS)

2. **Restaurar vista guardada:**
   - Doble clic sobre el nombre de la vista
   - O seleccionar y clic en "Set Current"

3. **Propiedades de vistas:**
   - **Camera position**: Ubicación de la cámara
   - **Target**: Punto hacia donde mira la cámara
   - **Lens length**: Longitud focal (para perspectiva)
   - **Clipping planes**: Planos de recorte frontal/trasero
   - **Visual style**: Estilo visual asociado

![View Manager Dialog](../imagenes/view-manager-dialog.png)

### 3.4 Vistas con Comando VPOINT

**Comando:** `VPOINT` (método clásico, menos usado en 2026)

Define la vista especificando un punto de vista en coordenadas 3D.

**Sintaxis:**
```
Command: VPOINT
Specify a view point or [Rotate] <display compass>: 1,1,1
```

El vector (1,1,1) crea una vista isométrica mirando desde el primer octante.

**Vistas comunes con VPOINT:**
- Isométrica: `1,1,1` o `1,-1,1`
- Superior: `0,0,1`
- Frontal: `0,-1,0`

**Nota:** ViewCube y comandos VIEW son más intuitivos y preferibles para usuarios modernos.

## 4. Proyección Paralela vs Perspectiva

### 4.1 Proyección Paralela

En **proyección paralela**, las líneas paralelas en el modelo permanecen paralelas en la vista. No hay punto de fuga ni distorsión de perspectiva.

**Características:**
- Mantiene proporciones reales en toda la vista
- Ideal para medición y dibujo técnico
- Objetos distantes tienen el mismo tamaño que objetos cercanos

**Activar proyección paralela:**
- Clic derecho sobre ViewCube → "Parallel"
- O comando: `PERSPECTIVE` → Off
- Variable de sistema: `PERSPECTIVE = 0`

### 4.2 Proyección en Perspectiva

En **proyección perspectiva**, las líneas paralelas convergen hacia puntos de fuga, simulando la visión humana natural.

**Características:**
- Objetos distantes aparecen más pequeños
- Proporciona percepción de profundidad realista
- Ideal para presentaciones y renders
- No apto para medición precisa

**Activar proyección perspectiva:**
- Clic derecho sobre ViewCube → "Perspective"
- O comando: `PERSPECTIVE` → On
- Variable de sistema: `PERSPECTIVE = 1`

**Ajustar intensidad de perspectiva:**
- Comando: `CAMERA` para crear cámara con lens length específico
- Lens length corto (ej: 35mm) = perspectiva dramática
- Lens length largo (ej: 100mm) = perspectiva suave

![Comparación Paralela vs Perspectiva](../imagenes/paralela-vs-perspectiva.png)

### 4.3 Cuándo Usar Cada Proyección

**Usar Proyección Paralela para:**
- Modelado y edición de precisión
- Mediciones y acotaciones
- Dibujos técnicos y constructivos
- Verificación de alineaciones

**Usar Proyección Perspectiva para:**
- Presentaciones a clientes
- Visualización arquitectónica
- Renders fotorrealistas
- Comunicación de diseño conceptual

## 5. Navegación con Mouse y Teclado

### 5.1 Navegación con Mouse

**Rueda del mouse:**
- **Scroll arriba/abajo**: Zoom in/out
- **Clic y arrastre rueda**: 3D Orbit (configurable)
- **Doble clic rueda**: Zoom Extents
- **Shift + clic y arrastre rueda**: Pan

### 5.2 Atajos de Teclado para Vistas

Configura estos atajos para máxima eficiencia:

- **F3**: Orbit mode toggle (personalizable)
- **Shift + Rueda mouse**: Pan temporalmente
- **Ctrl + Shift + Rueda**: Zoom in/out (alternativo)

**Vistas rápidas con comandos cortos:**
- `PLAN` → Enter: Vista superior del UCS actual
- `-VIEW` → `SWISO`: Vista isométrica SW
- `ZOOM` → `E`: Zoom extents

## 6. SteeringWheels (Ruedas de Navegación)

### 6.1 ¿Qué son las SteeringWheels?

Las **SteeringWheels** son menús circulares interactivos que consolidan herramientas de navegación en una sola interfaz.

**Activación:**
- Comando: `NAVSWHEEL`
- Ribbon: View tab → Navigate panel → SteeringWheels

**Tipos de SteeringWheels:**
- **Full Navigation Wheel**: Todas las herramientas
- **View Object Wheel**: Enfocada en visualización de objeto
- **Tour Building Wheel**: Para recorridos arquitectónicos

### 6.2 Herramientas en la Full Navigation Wheel

- **Zoom**: Acercamiento/alejamiento
- **Pan**: Desplazamiento lateral
- **Orbit**: Rotación de vista
- **Rewind**: Retrocede a vistas anteriores
- **Center**: Re-centra el punto de rotación
- **Walk**: Modo caminata (primera persona)
- **Look**: Modo mirada (rotar cámara sin moverse)
- **Up/Down**: Elevar/bajar cámara verticalmente

## 7. Workflow de Visualización Recomendado

### Para Modelado de Precisión:

1. **Usar proyección paralela** (desactivar perspectiva)
2. **Trabajar en vistas ortogonales** (Top, Front, Right) para edición
3. **Verificar en vista isométrica** (SW Isometric) regularmente
4. **Usar ViewCube** para cambios rápidos entre vistas
5. **Guardar vistas clave** con el View Manager

### Para Presentaciones:

1. **Activar proyección perspectiva**
2. **Configurar vista con 3D Orbit** hasta encontrar ángulo ideal
3. **Guardar vista** con View Manager
4. **Ajustar lens length** de la cámara si necesario
5. **Aplicar Visual Style** apropiado (siguiente módulo)

## 8. Ejercicios Prácticos

### Ejercicio 1: Dominio del ViewCube
1. Abre un modelo 3D simple (o dibuja un Box)
2. Usa el ViewCube para cambiar a las 6 vistas ortogonales
3. Cambia a las 4 vistas isométricas estándar
4. Usa la brújula para rotar la vista horizontalmente
5. Define la vista SW Isometric como Home

### Ejercicio 2: Práctica de Orbit
1. Con el mismo modelo, activa 3DORBIT
2. Practica rotación arrastrando dentro del arcball
3. Prueba rotación usando los círculos pequeños (restricciones)
4. Prueba rotación fuera del arcball (roll)
5. Activa Continuous Orbit y observa el modelo rotar

### Ejercicio 3: Vistas Guardadas
1. Posiciona una vista interesante de tu modelo
2. Abre View Manager (comando VIEW)
3. Crea nueva vista llamada "Vista_Presentacion"
4. Cambia a vista Top
5. Restaura "Vista_Presentacion" desde View Manager

### Ejercicio 4: Paralela vs Perspectiva
1. Activa vista isométrica SW
2. Asegúrate que proyección paralela está activa
3. Observa el modelo
4. Cambia a proyección perspectiva (clic derecho ViewCube)
5. Compara las diferencias visuales
6. Regresa a proyección paralela

## 9. Errores Comunes y Soluciones

### Error 1: Vista desorientada después de Orbit
**Síntoma:** No sabes dónde está "arriba" o la orientación del modelo.
**Solución:** Usa ViewCube para regresar a vista conocida (Top, Front, o SW Isometric).

### Error 2: No puedo seleccionar objetos durante Orbit
**Síntoma:** Orbit está activo y no puedes hacer otra cosa.
**Solución:** Presiona `Esc` o `Enter` para salir del comando Orbit.

### Error 3: Perspectiva distorsiona mediciones
**Síntoma:** Dimensiones parecen incorrectas en vista perspectiva.
**Solución:** Cambia a proyección paralela para trabajo de precisión.

### Error 4: ViewCube no visible
**Síntoma:** ViewCube no aparece en la pantalla.
**Solución:** Comando `NAVVCUBE` → `ON`, o verifica que workspace 3D Modeling está activo.

## Resumen

En esta lección has aprendido:

- ViewCube proporciona navegación intuitiva mediante clics en caras, esquinas y aristas
- Familia de comandos Orbit (3DORBIT, Free, Continuous) para rotación de vista
- Vistas predefinidas ortogonales (6) e isométricas (4) para orientación estándar
- View Manager permite guardar y recuperar vistas personalizadas
- Proyección paralela es ideal para modelado de precisión
- Proyección perspectiva es ideal para presentaciones realistas
- SteeringWheels consolidan herramientas de navegación en interfaz única

## Próxima Lección

En la Lección 3, aprenderás los métodos de entrada de coordenadas 3D: absolutas, relativas, cilíndricas, esféricas, y filtros de coordenadas. Estas técnicas te permitirán modelar con precisión milimétrica en el espacio tridimensional.

## Recursos Adicionales

- **Práctica recomendada:** Dedica 30 minutos diarios a navegar modelos 3D hasta que sea intuitivo
- **Atajo personalizado:** Considera asignar `3DORBIT` a una tecla de acceso rápido
- **Video tutorial:** Navegación 3D avanzada con ViewCube y Orbit

---

**Tiempo estimado de práctica:** 1 hora
**Dificultad:** Fundamental
**Prerequisito para:** Todas las lecciones de modelado y visualización
