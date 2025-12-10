# Ejercicios Prácticos - Módulo 1: Fundamentos de Modelado 3D

## Introducción

Este archivo contiene 6 ejercicios prácticos diseñados para reforzar los conceptos aprendidos en el Módulo 1, más un proyecto integrador final. Cada ejercicio está vinculado a una lección específica y aumenta gradualmente en complejidad.

**Instrucciones generales:**
- Completa los ejercicios en orden secuencial
- Guarda cada ejercicio con el nombre indicado
- Verifica resultados en múltiples vistas (Top, Front, Right, SW Isometric)
- Usa herramientas de medición para confirmar dimensiones exactas
- Documenta cualquier dificultad o pregunta para discusión con el instructor

**Criterios de evaluación:**
- Precisión dimensional (30%)
- Correcta aplicación de técnicas (30%)
- Limpieza del modelo (20%)
- Organización del archivo (20%)

---

## Ejercicio 1: Configuración de Workspace y Manipulación de UCS

**Lección relacionada:** Lección 1 - Workspace 3D y Sistema UCS
**Tiempo estimado:** 15 minutos
**Dificultad:** Básica

### Objetivos
- Configurar correctamente el entorno 3D
- Dominar la manipulación básica del UCS
- Crear y guardar sistemas de coordenadas personalizados

### Instrucciones

1. **Configuración inicial:**
   - Abre un nuevo dibujo
   - Activa el workspace "3D Modeling"
   - Configura el icono UCS para mostrarse en el origen (`UCSICON` → `ORigin`)

2. **Crear UCS personalizados:**
   - Rota el UCS 90° alrededor del eje X
   - Guarda este UCS con el nombre "PARED_FRONTAL"
   - Regresa al WCS (World Coordinate System)
   - Rota el UCS 90° alrededor del eje Y
   - Guarda este UCS con el nombre "PARED_LATERAL"
   - Regresa al WCS

3. **Práctica de cambio entre UCS:**
   - Activa el UCS "PARED_FRONTAL"
   - Dibuja un rectángulo de 200×100 unidades (usa comando RECTANG)
   - Activa el UCS "PARED_LATERAL"
   - Dibuja otro rectángulo de 150×100 unidades
   - Regresa al WCS

4. **Verificación:**
   - Cambia a vista SW Isometric
   - Verifica que los rectángulos están en planos perpendiculares
   - Captura screenshot de la vista isométrica

### Entregables
- Archivo: `Ejercicio_01_UCS.dwg`
- Screenshot de vista isométrica mostrando ambos rectángulos

### Puntos clave a verificar
- [ ] Workspace 3D Modeling activo
- [ ] Icono UCS en el origen
- [ ] Dos UCS guardados con nombres descriptivos
- [ ] Rectángulos en planos correctos (perpendiculares)

---

## Ejercicio 2: Navegación 3D y Vistas Predefinidas

**Lección relacionada:** Lección 2 - Visualización 3D (ViewCube, Orbit, Views)
**Tiempo estimado:** 15 minutos
**Dificultad:** Básica

### Objetivos
- Dominar herramientas de navegación 3D
- Usar vistas predefinidas eficientemente
- Guardar vistas personalizadas

### Instrucciones

1. **Crear modelo simple:**
   - Dibuja un BOX de 100×80×60 unidades en el origen
   - Dibuja un CYLINDER de radio 30, altura 80 en posición (150,0,0)
   - Dibuja una SPHERE de radio 40 en posición (0,120,0)

2. **Práctica de ViewCube:**
   - Usa ViewCube para cambiar a vista Top (superior)
   - Cambia a vista Front (frontal)
   - Cambia a vista Right (lateral derecha)
   - Cambia a vista SW Isometric
   - Usa la brújula del ViewCube para rotar horizontalmente

3. **Práctica de 3D Orbit:**
   - Activa comando `3DORBIT`
   - Practica rotación arrastrando dentro del arcball
   - Practica rotación usando círculos pequeños (restricciones verticales/horizontales)
   - Presiona Esc para salir

4. **Guardar vistas personalizadas:**
   - Posiciona una vista interesante de los tres objetos
   - Comando `VIEW` → New → Nombre: "Vista_Conjunto"
   - Cambia a otra vista diferente
   - Recupera "Vista_Conjunto" desde View Manager

5. **Proyección paralela vs perspectiva:**
   - Activa vista SW Isometric
   - Clic derecho en ViewCube → "Perspective"
   - Observa el efecto de perspectiva
   - Clic derecho en ViewCube → "Parallel" (regresar a paralela)

### Entregables
- Archivo: `Ejercicio_02_Navegacion.dwg`
- Vista guardada llamada "Vista_Conjunto"
- Screenshot de vista en perspectiva

### Puntos clave a verificar
- [ ] Tres primitivas correctamente posicionadas
- [ ] Vista "Vista_Conjunto" guardada correctamente
- [ ] Comprensión de diferencia paralela vs perspectiva

---

## Ejercicio 3: Modelado con Coordenadas 3D Precisas

**Lección relacionada:** Lección 3 - Coordenadas 3D y Métodos de Entrada
**Tiempo estimado:** 20 minutos
**Dificultad:** Intermedia

### Objetivos
- Dominar métodos de entrada de coordenadas 3D
- Aplicar coordenadas absolutas, relativas, cilíndricas y esféricas
- Usar filtros de coordenadas para alineación precisa

### Instrucciones

**Parte A: Coordenadas Absolutas y Relativas**

1. **Dibujar escalera con coordenadas relativas:**
   - Comando `LINE`
   - Punto inicial: `0,0,0` (absoluto)
   - Siguiente punto: `@30,0,0` (30 unidades en X)
   - Siguiente punto: `@0,0,20` (20 unidades en Z - altura de escalón)
   - Siguiente punto: `@30,0,0` (otro escalón)
   - Siguiente punto: `@0,0,20`
   - Repetir para crear 5 escalones totales
   - Enter para terminar

2. **Verificar resultado:**
   - La escalera debe tener 5 escalones
   - Cada escalón: 30 unidades de huella, 20 unidades de contrahuella
   - Altura total: 100 unidades (5 × 20)

**Parte B: Coordenadas Cilíndricas**

3. **Crear patrón circular con POINT:**
   - Comando `POINT` (configura PDMODE=3, PDSIZE=5 si es necesario)
   - Punto: `50<0,0` (radio 50, ángulo 0°, elevación 0)
   - Comando `POINT`
   - Punto: `50<45,10` (radio 50, ángulo 45°, elevación 10)
   - Comando `POINT`
   - Punto: `50<90,20`
   - Continuar: `50<135,30`, `50<180,40`, `50<225,50`, `50<270,60`, `50<315,70`

4. **Verificar resultado:**
   - 8 puntos en círculo de radio 50
   - Elevaciones incrementales (0, 10, 20...70)
   - Patrón tipo espiral

**Parte C: Filtros de Coordenadas**

5. **Crear columna verticalmente alineada:**
   - Dibuja un BOX base de 20×20×5 en posición (100,100,0)
   - Comando `CYLINDER`
   - Center point: `.XY` → (selecciona punto del centro del box) → `(need Z): 5` (top del box)
   - Radius: `10`
   - Height: `100`
   - Resultado: Cilindro perfectamente centrado sobre el box

### Entregables
- Archivo: `Ejercicio_03_Coordenadas.dwg`
- Tres elementos: escalera, espiral de puntos, columna

### Puntos clave a verificar
- [ ] Escalera con 5 escalones, dimensiones correctas
- [ ] 8 puntos en patrón circular con elevaciones incrementales
- [ ] Cilindro perfectamente centrado sobre box
- [ ] Uso correcto de coordenadas relativas (@)
- [ ] Uso correcto de filtros de coordenadas (.XY)

---

## Ejercicio 4: Modelado con Primitivas 3D

**Lección relacionada:** Lección 4 - Objetos 3D Básicos (Box, Cylinder, Sphere)
**Tiempo estimado:** 25 minutos
**Dificultad:** Intermedia

### Objetivos
- Crear primitivas 3D con precisión
- Combinar múltiples primitivas en modelos funcionales
- Aplicar opciones avanzadas de primitivas

### Instrucciones

**Proyecto: Tanque de Almacenamiento Industrial**

1. **Base cónica:**
   - Comando `CONE`
   - Center point: `0,0,0`
   - Base radius: `80`
   - Height → Top radius: `T`
   - Top radius: `60`
   - Height: `40`
   - Resultado: Cono truncado invertido (base del tanque)

2. **Cuerpo cilíndrico:**
   - Comando `CYLINDER`
   - Center point: `.XY` → (selecciona centro del cone en 0,0) → `(need Z): 40`
   - Radius: `60`
   - Height: `200`

3. **Techo hemisférico:**
   - Comando `SPHERE`
   - Center: `.XY` → (selecciona centro del cylinder top) → `(need Z): 240`
   - Radius: `60`

4. **Escalera de acceso (opcional - desafío):**
   - Dibuja BOX pequeño (10×3×200) como viga vertical
   - Posiciónalo adyacente al cilindro usando filtros de coordenadas
   - Dibuja varios BOX pequeños (10×3×2) como peldaños espaciados verticalmente cada 25 unidades

5. **Plataforma superior:**
   - Dibuja CYLINDER delgado (radius 70, height 3) en Z=240
   - Representa plataforma de acceso al techo

### Verificación de dimensiones
- Altura total del tanque: 280 unidades (40+200+40 del hemisferio)
- Diámetro cuerpo: 120 unidades (radio 60)
- Todas las partes correctamente alineadas verticalmente

### Entregables
- Archivo: `Ejercicio_04_Tanque.dwg`
- Vista isométrica renderizada (comando RENDER básico)

### Puntos clave a verificar
- [ ] Cono truncado con dimensiones correctas
- [ ] Cilindro centrado sobre cono
- [ ] Esfera centrada sobre cilindro
- [ ] Alineación vertical perfecta de todos los componentes
- [ ] Uso correcto de filtros .XY para centrado

---

## Ejercicio 5: Modelado Arquitectónico con Polysolid

**Lección relacionada:** Lección 5 - Polysolid y 3D Polyline
**Tiempo estimado:** 30 minutos
**Dificultad:** Intermedia-Avanzada

### Objetivos
- Aplicar POLYSOLID en modelado arquitectónico
- Convertir plantas 2D a muros 3D
- Configurar dimensiones de muros correctamente

### Instrucciones

**Proyecto: Habitación en L con Muros 3D**

**Fase 1: Dibujar planta 2D**

1. **Configuración:**
   - Activa vista Top (planta)
   - Asegúrate que UCS sea WCS

2. **Dibujar planta con PLINE:**
   - Comando `PLINE`
   - Punto inicial: `0,0`
   - Siguiente: `@600,0` (muro largo)
   - Siguiente: `@0,400` (muro perpendicular)
   - Siguiente: `@-300,0` (mitad hacia la izquierda)
   - Siguiente: `@0,300` (muro hacia arriba - forma L)
   - Siguiente: `@-300,0` (completar L)
   - Siguiente: `C` (Close - cerrar polilínea)

3. **Verificar planta:**
   - Forma de L cerrada
   - Dimensiones exteriores: 600×700 unidades

**Fase 2: Convertir a muros 3D**

4. **Configurar dimensiones de muro:**
   - Comando `PSOLHEIGHT`
   - Valor: `270` (altura de muro 2.70m)
   - Comando `PSOLWIDTH`
   - Valor: `15` (grosor de muro 15cm)

5. **Convertir PLINE a POLYSOLID:**
   - Comando `POLYSOLID`
   - Opción: `J` (Justify)
   - Justification: `C` (Center - la polilínea es eje del muro)
   - Opción: `O` (Object)
   - Select object: (selecciona la polilínea dibujada)

6. **Verificar resultado:**
   - Cambia a vista SW Isometric
   - Verifica que muros tienen altura 270 y grosor 15
   - Muros deben formar habitación en L cerrada

**Fase 3: Agregar aberturas (Puertas/Ventanas)**

7. **Crear abertura de puerta:**
   - Comando `BOX`
   - Corner: (posición en muro largo, aprox. 100,0,0)
   - Other corner: `@90,20,0` (ancho 90, profundidad atraviesa muro)
   - Height: `210` (altura de puerta)

8. **Restar abertura del muro:**
   - Comando `SUBTRACT`
   - Select solids to subtract from: (selecciona POLYSOLID)
   - Select solids to subtract: (selecciona BOX de puerta)

9. **Crear abertura de ventana:**
   - Comando `BOX`
   - Corner: (posición en otro muro, aprox. 0,200,100) - elevación Z=100
   - Other corner: `@20,120,0` (ancho 120)
   - Height: `100` (altura de ventana)
   - Comando `SUBTRACT` para restar del muro

### Entregables
- Archivo: `Ejercicio_05_Habitacion_L.dwg`
- Screenshots: vista Top (planta), vista SW Isometric (3D)

### Puntos clave a verificar
- [ ] Planta en forma de L con dimensiones correctas
- [ ] Muros con altura 270 y grosor 15
- [ ] Muros correctamente cerrados (sin huecos en esquinas)
- [ ] Abertura de puerta (90×210) correctamente restada
- [ ] Abertura de ventana (120×100) a elevación 100 correctamente restada

---

## Ejercicio 6: Modelado Mesh y Terreno Topográfico

**Lección relacionada:** Lección 6 - Mesh Básico
**Tiempo estimado:** 25 minutos
**Dificultad:** Intermedia

### Objetivos
- Crear y manipular objetos mesh
- Aplicar niveles de suavizado
- Simular terreno topográfico mediante edición de vértices

### Instrucciones

**Proyecto: Terreno Irregular con Montículo**

**Parte A: Comparación Solid vs Mesh**

1. **Crear primitiva sólida:**
   - Comando `SPHERE`
   - Center: `0,0,0`
   - Radius: `50`

2. **Crear primitiva mesh equivalente:**
   - Comando `MESHSPHERE`
   - Center: `100,0,0` (separado del sólido)
   - Radius: `50`

3. **Aplicar smoothness al mesh:**
   - Selecciona mesh sphere
   - Comando `MESHSMOOTH` (repetir 3 veces para smoothness level 3)
   - Alternativamente: Properties → Smoothness level: 3

4. **Comparar visualmente:**
   - Vista SW Isometric
   - Observa diferencias entre sólido y mesh suavizado
   - Captura screenshot comparativo

**Parte B: Terreno Topográfico**

5. **Crear base de terreno:**
   - Comando `MESHBOX`
   - First corner: `0,0,0`
   - Other corner: `500,500,0`
   - Height: `20`
   - Resultado: Mesh box muy plano (500×500×20)

6. **Preparar para edición:**
   - Selecciona mesh box
   - Properties → Smoothness level: 0 (sin suavizar para edición de vértices)

7. **Editar vértices para crear topografía:**
   - Selecciona mesh box
   - Mantén presionado `Ctrl` y haz clic en vértices superiores (aparecen grips rojos)
   - Arrastra vértices hacia arriba/abajo aleatoriamente:
     - Algunos vértices: Z = +30 (montículos)
     - Algunos vértices: Z = -10 (depresiones)
     - Otros vértices: Z = +10, +15, +20 (variación)
   - Crea al menos un "montículo" central elevando varios vértices adyacentes a Z=+50

8. **Suavizar terreno:**
   - Selecciona mesh
   - Properties → Smoothness level: 2
   - El terreno se suaviza, eliminando aristas duras

9. **Refinar áreas específicas (opcional):**
   - Comando `MESHREFINE`
   - Select faces: (selecciona facetas en área del montículo)
   - Esto incrementa densidad de vértices en esa área para más detalle

**Parte C: Conversión Mesh → Solid**

10. **Duplicar terreno mesh:**
    - Comando `COPY`
    - Select objects: (selecciona terreno mesh)
    - Base point: `0,0,0`
    - Second point: `600,0,0` (copia al lado)

11. **Intentar convertir a sólido:**
    - Comando `CONVTOSOLID`
    - Select objects: (selecciona la copia del mesh)
    - Observa resultado: Si el mesh está completamente cerrado (sin aberturas), se convierte a sólido

### Entregables
- Archivo: `Ejercicio_06_Mesh_Terreno.dwg`
- Screenshots:
  - Comparación sphere sólido vs mesh
  - Terreno topográfico con smoothness aplicado

### Puntos clave a verificar
- [ ] Sphere sólido y mesh sphere visualmente diferenciables
- [ ] Mesh sphere con smoothness level 3 aplicado
- [ ] Terreno mesh (500×500) con vértices editados
- [ ] Terreno con al menos un montículo central elevado
- [ ] Smoothness level 2 aplicado al terreno para suavizado
- [ ] Comprensión de edición de vértices con Ctrl+clic

---

## Proyecto Integrador Final: Edificio Simple con Torre

**Objetivo:** Integrar todos los conceptos del Módulo 1 en un proyecto completo
**Tiempo estimado:** 60-90 minutos
**Dificultad:** Avanzada

### Descripción del Proyecto

Modelar un edificio simple que incluye:
- Base rectangular de 2 pisos
- Torre cilíndrica lateral
- Techo cónico en la torre
- Muros con aberturas (puertas y ventanas)
- Terreno base

### Requisitos Técnicos

**Dimensiones generales:**
- Base del edificio: 30m × 20m
- Altura por piso: 3.5m (total base: 7m)
- Torre: diámetro 8m, altura 12m
- Techo cónico: altura 4m
- Terreno: 60m × 60m

**Especificaciones de construcción:**

1. **Terreno:**
   - MESHBOX de 60×60×0.5m
   - Editar vértices para ligera irregularidad
   - Smoothness level 1

2. **Muros base (Planta Baja + Piso 1):**
   - POLYSOLID con grosor 0.25m
   - Planta rectangular 30×20m
   - Altura total 7m (2 pisos)
   - Justificación: Center

3. **Losa intermedia entre pisos:**
   - BOX de 30×20×0.25m en elevación Z=3.5m

4. **Torre circular:**
   - CYLINDER de radio 4m, altura 12m
   - Posición: adyacente a la base, centro en (35, 10, 0)
   - Debe tocar o intersectar ligeramente con muros base

5. **Techo de torre:**
   - CONE de base radius 4m, top radius 0.5m, altura 4m
   - Posicionado sobre torre en Z=12m

6. **Aberturas:**
   - 2 puertas (1.0m × 2.2m) en planta baja
   - 6 ventanas (1.5m × 1.2m) distribuidas en ambos pisos, elevación inicial 1m del piso
   - Usar BOX para cada abertura y SUBTRACT de muros

7. **Elementos adicionales (opcional):**
   - Escalera interior (POLYSOLID o BOX)
   - Torus como elemento decorativo en entrada
   - 3DPOLY representando cables o tuberías

### Workflow Recomendado

**Fase 1: Planificación (5 min)**
- Configurar workspace 3D Modeling
- Crear UCS guardados: "PLANTA_BAJA", "PISO_1"
- Verificar unidades del dibujo (metros)

**Fase 2: Terreno (10 min)**
- Crear meshbox para terreno
- Editar vértices ligeramente
- Aplicar smoothness

**Fase 3: Estructura Base (20 min)**
- Dibujar planta 2D con PLINE
- Convertir a POLYSOLID (altura 7m)
- Crear losa intermedia con BOX

**Fase 4: Torre (15 min)**
- Crear CYLINDER para torre
- Posicionar correctamente adyacente a base
- Crear CONE para techo de torre
- Alinear verticalmente con filtros .XY

**Fase 5: Aberturas (20 min)**
- Crear BOX para cada puerta
- Crear BOX para cada ventana
- Usar SUBTRACT para restar de muros

**Fase 6: Detalles (10 min)**
- Agregar elementos opcionales
- Verificar alineaciones
- Limpiar geometría

**Fase 7: Presentación (10 min)**
- Crear vistas guardadas:
  - "FACHADA_FRONTAL"
  - "FACHADA_LATERAL"
  - "ISOMETRICA_GENERAL"
- Activar proyección perspectiva para vista isométrica
- Aplicar Visual Style "Realistic" (ribbon Visualize)

### Entregables Finales

1. **Archivo CAD:** `Proyecto_Integrador_Edificio.dwg`
2. **Vistas guardadas:** FACHADA_FRONTAL, FACHADA_LATERAL, ISOMETRICA_GENERAL
3. **Screenshots (PNG o JPG):**
   - Vista isométrica en proyección perspectiva
   - Vista de planta (Top)
   - Vista frontal (Front)
4. **Documento breve (PDF):**
   - Descripción del proyecto
   - Técnicas aplicadas de cada lección
   - Dificultades encontradas y soluciones
   - Tiempo total invertido

### Criterios de Evaluación del Proyecto

| Criterio | Puntos | Descripción |
|---|---|---|
| Dimensiones precisas | 20 | Todas las medidas coinciden con especificaciones |
| UCS y organización | 15 | UCS guardados, workspace configurado |
| Calidad de muros | 20 | Polysolid correctamente aplicado, grosor uniforme |
| Aberturas correctas | 15 | Puertas y ventanas correctamente restadas |
| Alineación de torre | 15 | Torre y techo perfectamente alineados verticalmente |
| Terreno mesh | 10 | Mesh con edición de vértices y smoothness |
| Presentación | 5 | Vistas guardadas, screenshots profesionales |
| **Total** | **100** | |

### Puntos Adicionales (Bonus - hasta 20 puntos)

- **+5:** Escalera interior modelada con precisión
- **+5:** Elementos decorativos adicionales (Torus, Spheres, etc.)
- **+5:** Aplicación de materiales básicos (Módulo 4 adelantado)
- **+5:** Documentación técnica excepcional con acotaciones

### Consejos para el Éxito

1. **Planifica antes de modelar:** Dibuja esquema en papel con dimensiones
2. **Trabaja en vistas apropiadas:** Top para planta, Front/Right para elevaciones
3. **Usa filtros de coordenadas:** Fundamentales para alineación precisa
4. **Guarda frecuentemente:** Ctrl+S cada 10 minutos
5. **Verifica en múltiples vistas:** Alterna entre Top, Front, Right, Isometric
6. **Usa UNDO sin miedo:** Ctrl+Z si algo sale mal
7. **Mantén organización:** Nombres claros para UCS guardados y vistas

---

## Conclusión del Módulo 1

Al completar estos ejercicios y el proyecto integrador, habrás demostrado dominio de:

- Configuración y navegación en entorno 3D
- Sistemas de coordenadas UCS
- Entrada precisa de coordenadas tridimensionales
- Creación y manipulación de primitivas 3D
- Modelado arquitectónico con Polysolid
- Fundamentos de mesh modeling

**Próximo paso:** Módulo 2 - Modelado de Sólidos 3D, donde aprenderás operaciones avanzadas como Extrude, Revolve, Sweep, Loft y operaciones booleanas.

---

**Nota para el instructor:**
Los archivos de solución de estos ejercicios están disponibles en la carpeta `/soluciones/modulo-1/` del repositorio del curso. Úsalos como referencia para evaluación.

**Recursos adicionales:**
- Videos demostrativos de cada ejercicio
- Plantillas de dibujo con configuración predeterminada
- Checklist de verificación para cada ejercicio

---

**¡Éxito en tus ejercicios!**
