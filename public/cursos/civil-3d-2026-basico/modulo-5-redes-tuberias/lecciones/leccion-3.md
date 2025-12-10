# Lección 3: Layout de Redes por Alineamiento

**Duración:** 60 minutos
**Módulo:** 5 - Redes de Tuberías y Utilities
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Utilizar Pipe Network Layout Tools para diseño eficiente
✅ Crear redes automáticamente siguiendo alineamientos de calles
✅ Aplicar Layout by Depth para profundidades consistentes
✅ Dibujar pipes y structures directamente en Profile View
✅ Usar Drawing Parts en Plan y Profile simultáneamente
✅ Editar redes con herramientas de modificación (Move, Connect, Disconnect)
✅ Aplicar best practices para spacing de structures
✅ Resolver errores comunes de conectividad y pendientes

---

## Introducción

El diseño manual de redes de tuberías, colocando una por una cada estructura y tubería, es extremadamente lento y propenso a errores. **Civil 3D ofrece herramientas automáticas de layout** que pueden crear redes completas en minutos, siguiendo alineamientos de calles, respetando pendientes mínimas, y aplicando reglas de diseño automáticamente.

En esta lección dominarás las **Pipe Network Layout Tools**: una barra de herramientas especializada que transforma el diseño de redes de días de trabajo a minutos.

**Caso de uso real:**
Una urbanización de 50 lotes con 8 calles requiere una red de alcantarillado sanitario. Con layout tools, puedes:
1. Crear alineamientos de calles (Módulo 3) - 30 minutos
2. Layout automático de red siguiendo alineamientos - 15 minutos
3. Ajustes y sizing - 45 minutos
4. **Total: ~1.5 horas** (vs 8-12 horas manualmente)

![Layout Tools Overview](../../imagenes/modulo-5/leccion-3-layout-tools-overview.png)

---

## 1. Pipe Network Layout Tools - Barra de Herramientas

### 1.1 Activar Layout Tools

**Pasos:**
1. **Home Tab → Create Design Panel**
2. Click dropdown **"Pipe Network"**
3. Selecciona **"Pipe Network Creation Tools"**

**Resultado:** Se abre la paleta flotante "Pipe Network Layout Tools"

![Layout Tools Palette](../../imagenes/modulo-5/leccion-3-layout-tools-palette.png)

### 1.2 Componentes de Layout Tools

**Network Selector:**
- Dropdown para seleccionar qué Pipe Network estás editando
- Puedes tener múltiples redes en un drawing (ej: sanitario, pluvial, agua potable)
- Cambiar aquí determina en qué red se añaden nuevas partes

**Parts Lists Section:**
- **Pipes dropdown:** Selecciona tipo y diámetro de tubería
  - Ejemplo: `Concrete Pipe 18 in`
- **Structures dropdown:** Selecciona tipo de estructura
  - Ejemplo: `Concentric Manhole 48 in`

**Layout Mode Buttons:**
Botones para diferentes métodos de creación:

| Icono | Nombre | Atajo | Función |
|-------|--------|-------|---------|
| Structure Only | SO | Coloca solo estructura (sin tubería) |
| Pipe and Structure | PS | Dibuja tubería y coloca estructura al final |
| Pipe Run | PR | Dibuja múltiples tuberías conectadas en secuencia |
| Pipe Only | PO | Dibuja tubería sin estructuras (conecta existentes) |

**Surface & Alignment Section:**
- **Surface:** Superficie de referencia para elevaciones automáticas de rim
- **Alignment:** Alineamiento para layout automático por estación
- **Cover:** Profundidad de cobertura sobre tubería (importante!)

**Editing Tools:**
- **Delete Network Object** - Elimina pipe o structure
- **Swap Parts** - Cambia tipo/tamaño de parte existente
- **Connect/Disconnect Pipes** - Modifica conectividad

### 1.3 Flujo de Trabajo Típico

**Método recomendado:**

1. **Preparación:**
   - Asegúrate de tener alineamientos de calles creados
   - Superficie existente lista
   - Parts List configurada

2. **Selección de red:**
   - En Layout Tools, dropdown "Network": Selecciona tu red

3. **Colocar structures primero:**
   - Tool: "Structure Only"
   - Coloca manholes/catch basins en ubicaciones estratégicas

4. **Conectar con pipes:**
   - Tool: "Pipe Only"
   - Conecta las structures existentes

5. **Ajustar:**
   - Editar elevaciones, diámetros, pendientes

**Ventaja:** Visualizas el layout completo antes de finalizar.

---

## 2. Layout Automático por Alineamiento

### 2.1 Concepto: Pipe Network from Alignment

Civil 3D puede crear una red completa siguiendo un alineamiento de calle, colocando structures a intervalos regulares y conectándolas automáticamente.

**Escenario ideal:**
- Calle con alineamiento horizontal ya creado
- Alcantarillado sanitario o pluvial en el eje de la calle
- Manholes cada 100-150 m
- Pipes conectando los manholes

### 2.2 Pasos: Layout from Alignment

**Preparación:**
- Crea un alineamiento de calle (Módulo 3: Alignments)
- Ejemplo: `Alineamiento_Calle_Principal`

**Pasos:**

1. **Layout Tools → Network:** Selecciona tu Pipe Network

2. **Configure Surface y Alignment:**
   - **Surface:** `EG-Existente`
   - **Alignment:** `Alineamiento_Calle_Principal`

3. **Configurar Cover (profundidad):**
   - **Cover to use:** `3.0 ft` (0.90 m)
   - Esto define la profundidad desde superficie a crown de tubería

4. **Selecciona partes:**
   - **Structure:** `Concentric Manhole 48 in`
   - **Pipe:** `PVC Sewer Pipe 12 in`

5. **Tool: "Pipe and Structure"** (PS)

6. **Click en el drawing:**
   - Civil 3D pregunta: `Pick first point on alignment`
   - **Snap al alignment** cerca del inicio
   - Click

7. **Especificar estaciones:**
   - Command line: `Specify station interval or [Manual]: 400`
   - (Colocará structures cada 400 ft de estación)
   - Enter

8. **Pick end point:**
   - Snap al alignment cerca del final
   - Click

9. **Finalizar:**
   - Enter para completar

**Resultado:** Civil 3D crea:
- Structures cada 400 ft de estación a lo largo del alignment
- Pipes conectando las structures
- Rim elevations desde superficie + offset
- Inverts automáticos con pendiente mínima configurada en rules

![Layout from Alignment](../../imagenes/modulo-5/leccion-3-layout-from-alignment.png)

### 2.3 Configuración Avanzada: Alignment Settings

**Para control más fino:**

1. **Antes de layout, configura:**
   - Layout Tools → **Settings** (icono de engranaje)

2. **Alignment Layout Settings:**
   - **Station Range:**
     - Start Station: `0+00`
     - End Station: `10+00` (o específica)
   - **Incremental Station:** `400 ft`
   - **Structure at Start/End:** ✅ Enabled
   - **Structure at Horizontal Curves:** ✅ Enabled (añade manhole en cada curva)
   - **Structure at Vertical Curves:** ✅ Enabled (si hay perfil)

3. **Pipe Slope:**
   - **Automatic** (usa pendiente mínima de rules)
   - **Manual:** Especifica pendiente fija (ej: 0.5%)

**Ejemplo completo:**
```
Alineamiento: Calle Residencial Norte
Longitud: 800 m
Configuración:
- Structures cada 100 m (estación)
- Structures adicionales en curvas horizontales
- Cover: 1.0 m
- Pipe: PVC 300 mm
- Slope automática (mínima: 0.4%)

Resultado:
- 9 manholes (8 intervalos + curva)
- 8 pipes conectando
- Red completa en <2 minutos
```

---

## 3. Layout by Depth (Profundidad Constante)

### 3.1 ¿Qué es Cover?

**Cover** es la profundidad de cobertura sobre la tubería:

```
Cover = Ground Elevation - Crown Elevation
```

**Importancia del cover:**
- **Mínimo:** Protege tubería de tráfico vehicular (típico: 3 ft / 0.90 m)
- **Máximo:** Evita excavaciones muy profundas (típico: 15 ft / 4.5 m)
- **Consistente:** Simplifica construcción

### 3.2 Configurar Cover en Layout Tools

**Ubicación:**
Layout Tools palette → **Cover to use:** `[valor]`

**Opciones:**

**Cover Mode:**
- **Cover:** Profundidad sobre crown de tubería
- **Depth:** Profundidad total del invert (menos común)

**Valor típico:**
```
Cover = 3.0 ft (calles con tráfico vehicular)
Cover = 2.5 ft (calles peatonales)
Cover = 4.0 ft (carreteras de alto tráfico)
```

### 3.3 Workflow: Mantener Cover Constante

**Escenario:** Quieres que todas las tuberías tengan exactamente 3.0 ft de cover.

**Pasos:**

1. **Layout Tools → Cover to use:** `3.0 ft`

2. **Surface:** Selecciona superficie existente

3. **Al colocar structures:**
   - Civil 3D calcula automáticamente:
   ```
   Rim Elevation = Surface Elevation (en ese punto)
   Crown Elevation = Rim - Cover
   Invert Elevation = Crown - Pipe Diameter
   ```

4. **Resultado:** Conforme la superficie sube/baja, los inverts se ajustan automáticamente manteniendo cover constante.

**Ejemplo numérico:**

```
Punto A (inicio):
  Surface Elevation: 100.00 m
  Cover: 1.00 m
  Pipe Diameter: 0.30 m (300 mm)

  Cálculo:
  Crown = 100.00 - 1.00 = 99.00 m
  Invert = 99.00 - 0.30 = 98.70 m

Punto B (200 m downstream):
  Surface Elevation: 95.00 m (bajó 5 m)
  Cover: 1.00 m (constante)
  Pipe Diameter: 0.30 m

  Cálculo:
  Crown = 95.00 - 1.00 = 94.00 m
  Invert = 94.00 - 0.30 = 93.70 m

Pipe Slope = (98.70 - 93.70) / 200 = 0.025 = 2.5%
```

**Ventaja:** El slope natural del terreno se transfiere a la tubería.

**Desventaja:** En terrenos muy planos, la pendiente puede ser insuficiente. En terrenos muy inclinados, puede ser excesiva.

![Cover Diagram](../../imagenes/modulo-5/leccion-3-cover-diagram.png)

---

## 4. Drawing Parts in Profile View

### 4.1 ¿Por qué diseñar en perfil?

Diseñar directamente en **Profile View** te permite:
- Ver elevaciones en tiempo real
- Controlar pendientes visualmente
- Evitar pendientes inversas (flujo hacia arriba)
- Ajustar inverts con precisión

**Workflow profesional:**
1. Layout inicial en planta (plan view)
2. Crear perfil de la red
3. Refinamiento en perfil (ajustar elevaciones)
4. Volver a planta para finalizar

### 4.2 Crear Profile View de Pipe Network

**Pasos:**

1. **Selecciona un pipe** de tu red (en plan view)

2. **Click derecho → Create Profile View**

3. **Create Profile View Dialog:**
   - **Profile View Name:** `Perfil_Red_Pluvial_Principal`
   - **Profile View Style:** `Profile View - Standard`
   - **Station Range:** Automatic (toma inicio y fin de la red)
   - Click **Create Profile View**

4. **Click en el drawing** para ubicar el profile view

**Resultado:** Se crea una vista de perfil mostrando:
- Terreno existente (superficie de referencia)
- Pipes como líneas inclinadas
- Structures como rectángulos/círculos
- Grid de estaciones y elevaciones

![Profile View of Pipe Network](../../imagenes/modulo-5/leccion-3-profile-view-network.png)

### 4.3 Dibujar Parts en Profile View

**Activar Layout Tools en Profile View:**

1. **Layout Tools** debe estar abierta

2. **En Profile View, click dentro del grid**

3. **Layout Tools cambia automáticamente a "Profile Mode"**

**Añadir Structure en Profile:**

1. **Tool: "Structure Only"**

2. **Click en el perfil** en la ubicación deseada
   - Civil 3D snap a la grid
   - Especificas elevación visualmente

3. **Aparece structure en profile Y en plan automáticamente**

**Conectar con Pipe:**

1. **Tool: "Pipe Only"**

2. **Click en structure de inicio**

3. **Click en structure de fin**

4. **Civil 3D dibuja pipe** con la pendiente resultante entre ambos puntos

### 4.4 Editar Elevaciones en Profile

**Método de grips en Profile:**

1. **Selecciona structure en profile view**

2. **Aparece grip (cuadro azul) en el centro**

3. **Click y arrastra verticalmente**
   - Cambia elevación de rim E invert simultáneamente
   - Mantiene cover constante

4. **Release click** para fijar nueva elevación

**Ventaja:** Cambios en profile se reflejan automáticamente en plan y viceversa. Todo está vinculado.

**Para ajuste fino:**
- Properties (Ctrl+1) → Edita Invert Elevation con valor numérico exacto

---

## 5. Pipe Run (Dibuja Red Continua)

### 5.1 Herramienta "Pipe Run"

**Pipe Run** permite dibujar una secuencia de pipes y structures en un solo comando continuo.

**Ideal para:**
- Crear ramales domiciliarios rápidamente
- Trazar colectores principales con múltiples manholes
- Diseño preliminar rápido

### 5.2 Usar Pipe Run

**Pasos:**

1. **Layout Tools → Tool: "Pipe Run" (PR)**

2. **Selecciona partes:**
   - **Pipe:** `PVC 8 in`
   - **Structure:** `Manhole 48 in`

3. **Click punto inicial:**
   - Primera structure se coloca aquí

4. **Click puntos siguientes:**
   - Cada click coloca: Pipe → Structure
   - Continúa clickeando para extender la red

5. **Enter para finalizar**

**Resultado:** Una red conectada completamente, creada en segundos.

![Pipe Run Example](../../imagenes/modulo-5/leccion-3-pipe-run.png)

### 5.3 Opciones durante Pipe Run

**Command line muestra opciones:**

```
Specify next point or [Undo/Surface/Alignment/Cover]:
```

**Undo:** Deshace el último pipe/structure colocado (sin salir del comando)

**Surface:** Cambia superficie de referencia mid-command

**Cover:** Cambia profundidad de cover mid-command

**Ejemplo de uso:**
```
Click punto 1 (structure)
Click punto 2 (pipe + structure)
Command: c (Cover)
Nuevo cover: 4.0 ft
Click punto 3 (ahora con 4 ft de cover)
Enter (finalizar)
```

---

## 6. Herramientas de Edición

### 6.1 Delete Pipe Network Object

**Eliminar Pipe:**
1. Selecciona pipe
2. Delete (o Layout Tools → Delete icon)
3. **Cuidado:** Las structures conectadas NO se eliminan (quedan huérfanas)

**Eliminar Structure:**
1. Selecciona structure
2. Delete
3. **Importante:** Pipes conectados quedan "sueltos" (sin conexión en ese extremo)

### 6.2 Connect/Disconnect Pipes

**Disconnect:**
1. Selecciona pipe
2. Click grip en extremo conectado
3. Menú contextual → **"Disconnect from Structure"**
4. El extremo queda suelto (movible)

**Connect:**
1. Click grip en extremo suelto
2. Arrastra hacia structure deseada
3. Cuando snap aparece, click para conectar
4. Civil 3D recalcula invert elevation en la conexión

### 6.3 Swap Part (Cambiar Parte)

**Cambiar diámetro de pipe:**
1. Selecciona pipe
2. Click grip central
3. Menú → **"Swap Part"**
4. Selecciona nuevo diámetro: `18 in`
5. Enter
6. **Inverts se ajustan automáticamente** (si cambió diámetro)

**Cambiar tipo de structure:**
1. Selecciona structure
2. Click grip central
3. Swap Part → Selecciona nuevo tipo/tamaño
4. Conexiones se mantienen

### 6.4 Move Structure (Mover Estructura)

**Mover en planta:**
1. Selecciona structure
2. Command: `MOVE` (o grip de movimiento)
3. Especifica nuevo punto
4. **Pipes conectados se "estiran"** para seguir conectados
5. Lengths se recalculan automáticamente

**Mover en elevación:**
- Ya vimos: Editar en Profile View con grips
- O Properties → Editar Rim/Invert manualmente

![Edit Operations](../../imagenes/modulo-5/leccion-3-edit-operations.png)

---

## 7. Best Practices de Layout

### 7.1 Spacing de Structures

**Manholes (Alcantarillado Sanitario):**
```
Recomendación estándar:
- Máximo: 120 m (400 ft)
- Típico: 90-100 m (300-330 ft)
- Mínimo: No hay límite, pero spacing muy corto es antieconómico
```

**Manholes (Alcantarillado Pluvial):**
```
Similar a sanitario, pero considerar:
- Cambios de dirección: Siempre manhole
- Confluencias: Siempre manhole
- Tuberías grandes (>36"): Spacing puede aumentar a 150 m
```

**Catch Basins (Alcantarillado Pluvial):**
```
Spacing función de:
- Pendiente de calle (más plana = más catch basins)
- Intensidad de lluvia
- Ancho de calle

Típico:
- Calles planas (<2%): Cada 60 m
- Calles con pendiente (2-5%): Cada 75-90 m
- Calles inclinadas (>5%): Cada 100-120 m
- SIEMPRE en puntos bajos antes de subir
```

### 7.2 Cover (Profundidad)

**Mínimos según tipo de calle:**
```
Calles residenciales: 0.90 m (3.0 ft)
Calles colectoras: 1.00 m (3.3 ft)
Avenidas/carreteras: 1.20 m (4.0 ft)
Autopistas: 1.50 m (5.0 ft)
```

**Razón:** Mayor tráfico = mayor carga = mayor protección requerida.

### 7.3 Slopes (Pendientes)

**Mínimos para auto-limpieza:**

**Sanitario:**
```
Diámetro    Pendiente Mínima
8"          0.40%
10"         0.35%
12"         0.30%
15"         0.25%
18"         0.22%
```

**Pluvial:**
```
Generalmente: 0.50% mínimo (cualquier diámetro)
Razón: Limpieza de sedimentos es más crítica
```

**Máximos (para evitar erosión):**
```
Cualquier tipo: 10% máximo
Si >10%, considerar:
- Drop manholes (pozos con caída vertical interna)
- Tuberías de mayor resistencia
- Protección contra erosión
```

### 7.4 Workflow Óptimo

**Orden recomendado:**

1. **Diseño preliminar en planta:**
   - Layout from alignment (automático)
   - Ajustes de ubicación de structures

2. **Revisión en perfil:**
   - Crear profile view
   - Verificar pendientes
   - Ajustar inverts si es necesario

3. **Sizing (Lección 4):**
   - Asignar caudales
   - Calcular diámetros requeridos
   - Swap parts según capacidad

4. **Análisis hidráulico (Lección 5):**
   - Verificar capacidad
   - Confirmar velocidades adecuadas

5. **Documentación:**
   - Etiquetas, tablas, planos

---

## 8. Troubleshooting Común

### 8.1 Error: "Slope is too flat"

**Causa:** Pipe no cumple pendiente mínima de rules.

**Solución:**
1. Selecciona el pipe → Properties
2. Verifica "Slope" actual
3. Opciones:
   - **Aumentar slope:** Baja invert de extremo downstream
   - **Override rule:** Settings → Pipe Rules → Reduce minimum slope
   - **Aumentar diámetro:** Tuberías grandes permiten slopes menores

### 8.2 Error: "Insufficient cover"

**Causa:** Crown de tubería está muy cerca de superficie.

**Solución:**
1. Aumenta profundidad de inverts
2. O ajusta cover en Layout Tools
3. O cambia a diámetro menor (si hidráulicamente aceptable)

### 8.3 Pipes no se conectan automáticamente

**Causa:** Snap no está activo o tolerancia muy pequeña.

**Solución:**
1. Verifica que OSNAP esté ON (F3)
2. Settings → Pipe Network → Connection Tolerance
3. Aumenta "Proximity Distance": 0.5 → 1.0 ft

### 8.4 Structures "flotan" sobre superficie

**Causa:** Rim elevation no está vinculada a superficie.

**Solución:**
1. Selecciona structure → Properties
2. Rim Elevation → Cambia a "Surface"
3. Selecciona superficie de referencia

---

## Ejercicio Práctico 3

**Objetivo:** Crear una red completa de alcantarillado pluvial usando layout automático por alineamiento.

**Preparación:**
- Asegúrate de tener un alineamiento de calle creado (Módulo 3)
- Superficie existente
- Parts List configurada con Catch Basins y Concrete Pipes

**Tareas:**

**Parte A: Layout Automático**

1. **Abrir Layout Tools**
2. **Configuración:**
   - Network: `Red_Pluvial_Calle_Principal`
   - Surface: Tu superficie existente
   - Alignment: Tu alineamiento de calle
   - Cover: `3.0 ft`
   - Pipe: `Concrete Pipe 18 in`
   - Structure: `Catch Basin Type 1`

3. **Layout from Alignment:**
   - Tool: "Pipe and Structure"
   - Start point: Snap a inicio de alignment
   - Station interval: `300 ft` (o 90 m si métrico)
   - End point: Snap a final de alignment
   - Enter

4. **Añadir Outlet:**
   - Tool: "Structure Only"
   - Structure: `Manhole Concentric 48 in`
   - Coloca al final de la red (downstream)
   - Tool: "Pipe Only"
   - Conecta último catch basin al manhole

**Parte B: Crear Profile View**

1. **Selecciona cualquier pipe de la red**
2. **Click derecho → Create Profile View**
3. Click en ubicación para colocar perfil

**Parte C: Editar en Profile**

1. **En profile view, selecciona la última structure (manhole)**
2. **Drag grip hacia abajo** para bajar invert
3. **Objetivo:** Asegura que el slope del último pipe sea >0.5%
4. **Verifica:** Selecciona último pipe → Properties → Slope = ?

**Parte D: Swap Parts**

1. **En plan view, selecciona el primer pipe** (upstream)
2. **Swap Part** → Cambia a `Concrete Pipe 24 in` (más grande)
3. **Razón:** Primer pipe recibe todo el caudal acumulado

**Parte E: Verificación**

1. **Prospector → Pipe Networks → [Tu Red]**
2. **Expande "Pipes":**
   - Cuenta cuántos pipes hay
   - Verifica nombres
3. **Expande "Structures":**
   - Cuenta cuántos catch basins
   - Verifica que hay 1 manhole

**Entregable:**
- Screenshot de plan view mostrando red completa
- Screenshot de profile view mostrando pipes y structures
- Tabla manual:
  ```
  Total Pipes: X
  Total Structures: Y
  Spacing promedio: Z ft
  Slope mínimo encontrado: W %
  Slope máximo encontrado: V %
  ```

![Ejercicio 3 Resultado](../../imagenes/modulo-5/leccion-3-ejercicio-red-completa.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la ventaja principal de usar "Layout from Alignment" en lugar de colocar structures manualmente una por una?

**Pregunta 2:** Define "Cover" en el contexto de tuberías. ¿Cuál es el cover mínimo típico en calles residenciales?

**Pregunta 3:** ¿Qué herramienta de Layout Tools usarías para dibujar una secuencia continua de pipes y structures en un solo comando?

**Pregunta 4:** Si un pipe muestra error "Slope too flat", menciona 2 soluciones posibles.

**Pregunta 5:** ¿Por qué es útil diseñar/editar redes en Profile View en lugar de solo en Plan View?

---

## Recursos Adicionales

**Documentación oficial:**
- Civil 3D 2026 Help - "Pipe Network Layout Tools"
- Autodesk Knowledge Network - "Best Practices for Pipe Networks"

**Videos recomendados:**
- Civil 3D Pipe Network Layout from Alignment (YouTube Autodesk)
- Designing in Profile View - Advanced Techniques

**Templates descargables:**
- `Pipe_Network_Layout_Settings.dwt` (settings preconfigurados)

---

## Resumen

En esta lección aprendiste:

✅ **Pipe Network Layout Tools:** Barra de herramientas especializada para diseño eficiente
✅ **Layout from Alignment:** Creación automática de redes siguiendo calles
✅ **Cover Control:** Mantener profundidad consistente sobre tuberías
✅ **Profile View Design:** Dibujar y editar directamente en perfiles longitudinales
✅ **Pipe Run:** Herramienta para redes continuas en un solo comando
✅ **Edit Tools:** Swap parts, connect/disconnect, move structures
✅ **Best Practices:** Spacing, cover, slopes según tipo de red y normativas
✅ **Troubleshooting:** Resolver errores comunes de pendiente y conectividad

**Próxima Lección:** Sizing de Tuberías según Caudal (dimensionamiento hidráulico con cálculos de flujo)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 60 minutos creando redes en diferentes escenarios (terreno plano vs inclinado, sanitario vs pluvial)
