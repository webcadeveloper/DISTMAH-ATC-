# Lección 10: Shell, Fillet 3D, Chamfer 3D

## Introducción

Las modificaciones de sólidos (SHELL, FILLET3D, CHAMFER3D) transforman modelos básicos en piezas funcionales. SHELL ahúeca sólidos creando paredes de grosor especificado, fundamental para carcasas y recipientes. FILLET3D redondea aristas eliminando esquinas agudas (seguridad, aerodinámica, estética). CHAMFER3D crea chaflanes angulares para facilitar ensamblaje y eliminar bordes cortantes.

## Objetivos

- Ahuec ar sólidos con SHELL especificando grosor de pared
- Redondear aristas con FILLET3D (radios constantes y variables)
- Crear chaflanes con CHAMFER3D (distancia y ángulo)
- Aplicar modificadores en diseño mecánico e industrial
- Editar fillets y chamfers existentes

## 1. Comando SHELL

### 1.1 Fundamentos

**Comando:** `SHELL`

Ahúeca un sólido eliminando material interno y dejando paredes de grosor especificado.

**Aplicaciones:**
- Carcasas de dispositivos electrónicos
- Recipientes y envases
- Piezas inyectadas en plástico
- Moldes

### 1.2 Sintaxis Básica

```
Command: SHELL
Select a 3D solid: (selecciona sólido)
Remove faces or [Undo/Add/ALL]: (selecciona cara(s) a eliminar, opcional)
Remove faces or [Undo/Add/ALL]: (Enter si no quieres eliminar caras)
Enter the shell offset distance: 3 (grosor de pared en unidades)
```

![Shell con cara superior eliminada](../imagenes/shell-caja-abierta.png)

**Comportamiento:**
- **Sin caras eliminadas:** Sólido se ahúeca sin aberturas (bola hueca)
- **Con caras eliminadas:** Sólido ahuecado con aberturas en caras seleccionadas (caja abierta)

### 1.3 Ejemplo: Carcasa de Dispositivo

```
1. Crea BOX de 100×80×50
2. Comando: SHELL
3. Select solid: (selecciona box)
4. Remove faces: (selecciona cara superior)
5. Shell offset: 2.5 (pared de 2.5mm)
```

Resultado: Caja abierta arriba con paredes de 2.5mm de grosor.

### 1.4 Opción ALL

Elimina todas las caras externas, dejando solo estructura interna (uso muy específico).

```
Remove faces: ALL
```

### 1.5 Grosor de Pared

**Positivo:** Paredes crecen hacia adentro (reduce volumen interno)
**Negativo:** Paredes crecen hacia afuera (aumenta volumen externo, menos común)

**Típico:** Valores positivos (2-5mm para plástico, 3-10mm para metal fundido).

## 2. Comando FILLET3D

### 2.1 Fundamentos

**Comando:** `FILLET` o `FILLETEDGE` (AutoCAD 2026 usa FILLETEDGE para sólidos)

Redondea aristas de sólidos con radio especificado.

**Aplicaciones:**
- Seguridad (eliminar bordes cortantes)
- Aerodinámica (reducir resistencia al aire)
- Estética (suavizar apariencia)
- Reducir concentración de esfuerzos (ingeniería)

### 2.2 Sintaxis Básica

```
Command: FILLETEDGE
Select an edge or [Chain/Radius]: (selecciona arista)
Select an edge or [Chain/Radius]: (selecciona más aristas, Enter cuando termines)
Specify radius or [Expression] <5.0>: 10 (radio del fillet)
```

![Fillet en aristas de box](../imagenes/fillet-box-aristas.png)

### 2.3 Opción Radius

Cambia radio de fillet.

```
Select edge or [Radius]: R
Specify radius: 15
```

### 2.4 Opción Chain

Selecciona cadena de aristas tangentes automáticamente.

```
Select edge or [Chain/Radius]: C (Chain)
Select edge chain or [Edge/Radius]: (selecciona una arista, AutoCAD selecciona cadena completa)
```

**Útil para:** Redondear todas las aristas de un box de una vez.

### 2.5 Radios Variables

AutoCAD permite diferentes radios en diferentes aristas del mismo sólido.

```
1. FILLETEDGE → selecciona arista 1 → Radius: 5
2. FILLETEDGE → selecciona arista 2 → Radius: 10
```

Cada arista puede tener radio independiente.

### 2.6 Ejemplo: Pieza Mecánica

```
1. Crea BOX de 100×80×50
2. FILLETEDGE
3. Select edge: (selecciona las 4 aristas verticales)
4. Radius: 5
```

Resultado: Box con esquinas redondeadas verticalmente.

## 3. Comando CHAMFER3D

### 3.1 Fundamentos

**Comando:** `CHAMFEREDGE`

Crea chaflán (bisel angular) en aristas de sólidos.

**Aplicaciones:**
- Facilitar ensamblaje de piezas
- Eliminar bordes agudos peligrosos
- Preparar aristas para soldadura
- Estética de diseño industrial

### 3.2 Sintaxis con Dos Distancias

```
Command: CHAMFEREDGE
Select an edge or [Loop/Distance]: (selecciona arista)
Select an edge or [Loop/Distance]: (Enter)
Specify Distance1 or [Expression] <10.0>: 5 (distancia en primera superficie)
Specify Distance2 or [Expression] <5.0>: 5 (distancia en segunda superficie)
```

**Distancias iguales:** Chaflán a 45°
**Distancias diferentes:** Chaflán asimétrico

![Chamfer simétrico y asimétrico](../imagenes/chamfer-simetrico-asimetrico.png)

### 3.3 Método Distancia y Ángulo

```
Select edge: (selecciona arista)
Distance: D
Specify distance: 10
Angle: A
Specify angle: 30
```

Chaflán de 10mm a 30° desde la primera superficie.

### 3.4 Opción Loop

Chaflanea todas las aristas de una cara (bucle).

```
Select edge or [Loop]: L
Select edge loop: (selecciona cualquier arista de la cara)
```

Todas las aristas perimetrales de esa cara se chaflanean.

### 3.5 Ejemplo: Agujero con Chaflán

```
1. Crea BOX de 100×100×50
2. Crea CYLINDER de radio 10, altura 60 (atraviesa el box)
3. SUBTRACT cilindro del box (agujero pasante)
4. CHAMFEREDGE
5. Select edge: (selecciona arista superior circular del agujero)
6. Distance1: 2, Distance2: 2
```

Resultado: Agujero con bisel de entrada (facilita inserción de perno).

## 4. Diferencias Fillet vs Chamfer

| Aspecto | FILLET3D | CHAMFER3D |
|---|---|---|
| Geometría | Curva (arco) | Plana (ángulo) |
| Parámetro principal | Radio | Distancia/Ángulo |
| Manufactura | Más complejo mecanizar | Más simple mecanizar |
| Estética | Suave, orgánico | Angular, industrial |
| Aplicación típica | Productos de consumo | Piezas mecánicas |

**Cuándo usar cada uno:**
- **Fillet:** Productos que tocan humanos, diseño estético, reducir esfuerzos
- **Chamfer:** Piezas mecánicas industriales, facilitar ensamblaje, preparar soldadura

## 5. Edición de Fillets y Chamfers

### 5.1 Modificar Fillets Existentes

Selecciona sólido → Properties (Ctrl+1) → busca "Fillet" en lista → modifica radio.

**Alternativa:** Eliminar fillet y recrear.

```
1. Comando: SOLIDHISTORY (activar si no está activo)
2. Selecciona sólido con fillet
3. Properties → encuentra feature de fillet
4. Delete feature
5. Recrea con nuevo radio
```

### 5.2 History de Construcción

**Variable SOLIDHIST:**
```
SOLIDHIST = 1 (mantiene historia paramétrica, permite editar features)
SOLIDHIST = 0 (sin historia, sólido "plano")
```

Con historia activa, puedes editar extrusiones, fillets, chamfers después de creación.

## 6. Aplicaciones por Industria

### 6.1 Diseño Mecánico

**Ejes con Fillets:**
```
1. REVOLVE perfil de eje con cambios de diámetro
2. FILLETEDGE en transiciones de diámetro (reduce concentración de esfuerzos)
```

**Agujeros con Chamfers:**
```
Todos los agujeros roscados con chamfer de entrada (facilita inserción de tornillos)
```

### 6.2 Diseño Industrial

**Carcasa de Teléfono:**
```
1. LOFT o EXTRUDE forma básica
2. SHELL grosor 1.5mm
3. FILLETEDGE todas las aristas externas (radio 3-5mm) para ergonomía
```

### 6.3 Diseño Arquitectónico

**Mobiliario:**
```
1. Mesas, estantes con FILLET en aristas (seguridad)
2. Radio típico: 5-10mm en muebles domésticos
```

## 7. Errores Comunes

### Error 1: Fillet falla "Unable to fillet"
**Causa:** Radio demasiado grande para geometría.
**Solución:** Reduce radio. Máximo = mitad de la dimensión más pequeña.

### Error 2: Shell falla o crea geometría inválida
**Causa:** Grosor de pared demasiado grande respecto a tamaño del sólido.
**Solución:** Reduce grosor. Típicamente < 20% de la dimensión mínima.

### Error 3: Chamfer en dirección incorrecta
**Causa:** Distancias aplicadas a superficies equivocadas.
**Solución:** Invierte Distance1 y Distance2, o usa opción Angle para mayor control.

## Resumen

- SHELL ahúeca sólidos con grosor de pared especificado
- FILLETEDGE redondea aristas con radios constantes o variables
- CHAMFEREDGE crea chaflanes con distancias o ángulos
- Fillets para estética y seguridad, chamfers para manufactura y ensamblaje
- Historia de construcción (SOLIDHIST) permite editar features después

## Próxima Lección

Lección 11 cubre 3DARRAY (patrones rectangulares y polares 3D) y MIRROR3D (simetría en planos 3D), herramientas para duplicación eficiente de geometría.

---

**Tiempo estimado:** 1 hora
**Dificultad:** Intermedia-Avanzada
