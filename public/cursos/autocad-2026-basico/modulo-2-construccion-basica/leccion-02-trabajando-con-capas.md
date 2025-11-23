# Lección 2: Trabajando con Capas (Layers)

## ¿Qué son las Capas?

Las capas (layers) en AutoCAD son como hojas transparentes que se colocan sobre el dibujo y que puedes quitar a voluntad. El sistema de coordenadas permanece igual de una capa a otra, por lo que los objetos gráficos en capas separadas permanecen alineados.

### Ventajas de Usar Capas

✅ **Organización:** Separa diferentes tipos de información
✅ **Control de visibilidad:** Muestra u oculta información específica
✅ **Control de impresión:** Elige qué capas se imprimen
✅ **Bloqueo:** Protege información de cambios accidentales
✅ **Gestión de color:** Asigna colores por capa
✅ **Tipos de línea:** Control de linetypes por capa

## Capa Actual (Current Layer)

La capa actual es la capa en la que estás trabajando. **Cualquier objeto nuevo que dibujes se agrega a la capa actual.**

- Capa predeterminada: **Layer 0**
- Solo puede haber **una capa actual** a la vez
- El nombre de la capa actual aparece en el Layer toolbar

> **Nota Especial:** Layer 0 es una capa especial proporcionada en AutoCAD. No puedes renombrarla ni eliminarla. Tiene propiedades especiales cuando se usa con los comandos Block e Insert (Tutorial 10).

## Control de Capas desde el Layer Panel

El **Layer Control** en el panel Layers del ribbon Home tab es una forma fácil de controlar la visibilidad de las capas existentes.

### Hacer una Capa Actual

1. Click en el nombre de la capa en el Layer Control drop-down
2. La capa seleccionada se convierte en actual
3. Los nuevos objetos se crearán en esta capa

![Layer Control](./imagenes/layer-control.png)

## Visibilidad de Capas

### Opciones de Visibilidad

| Ícono | Función | Descripción |
|-------|---------|-------------|
| 💡 | On/Off | Muestra u oculta la capa |
| ❄️ | Freeze/Thaw | Congela o descongela la capa |
| 🔒 | Lock/Unlock | Bloquea o desbloquea la capa |

### Turn Off (Apagar)

**Click en el ícono de bombilla** para apagar una capa.

- Las capas invisibles (off) **no se imprimen ni plotean**
- Los objetos siguen siendo parte del dibujo
- No se regeneran cuando actualizas la pantalla

### Freeze (Congelar)

**Click en el ícono de copo de nieve** para congelar una capa.

Congelar una capa es similar a apagarla, pero:
- Se salta cuando el dibujo se regenera
- **Mejora notablemente la velocidad** en dibujos grandes
- No puedes congelar la capa actual

> **Advertencia:** No congeles la capa actual porque crearías objetos que no puedes ver.

### Lock (Bloquear)

**Click en el ícono de candado** para bloquear una capa.

Características de capas bloqueadas:
- ✅ Puedes **ver** los objetos
- ✅ Puedes **agregar** nuevos objetos
- ❌ **No puedes cambiar** objetos existentes
- Útil para usar como referencia sin modificar

## Comando Layer Properties Manager

El comando Layer (alias: **LA**) te permite crear nuevas capas y controlar todas sus propiedades.

### Abrir Layer Properties Manager

Click en el ícono **Layer Properties Manager** en el Layers panel

![Layer Properties Manager](./imagenes/layer-properties-manager.png)

### Crear una Nueva Capa

1. Click en el ícono **New Layer**
2. Aparece "Layer1" (nombre predeterminado)
3. Escribe el nuevo nombre de la capa
4. Configura propiedades (color, linetype, lineweight)

**Nombres de capa válidos:**
- Hasta **255 caracteres**
- Letras, números, espacios permitidos
- Caracteres especiales: `$ . # _ -`
- **No permitidos:** `, < > / " ? : * | ' =`

### Configurar Color de Capa

1. Click en el cuadro de **Color** de la capa
2. Selecciona un color del cuadro Select Color
3. Tabs disponibles:
   - **Index Color** - 255 colores estándar de AutoCAD
   - **True Color** - RGB o HSL
   - **Color Books** - Colores de fabricantes de tinta

![Select Color Dialog](./imagenes/select-color-dialog.png)

**Colores estándar nombrados:**
- Red (Rojo)
- Yellow (Amarillo)
- Green (Verde)
- Cyan (Cian)
- Blue (Azul)
- Magenta
- White/Black (Blanco/Negro)

### Configurar Linetype de Capa

1. Click en **Linetype** de la capa
2. Selecciona del cuadro Select Linetype
3. Linetypes comunes:
   - **CONTINUOUS** - Línea continua
   - **CENTER** - Línea de centro (largo-corto-largo)
   - **HIDDEN** - Línea oculta (guiones)
   - **DASHED2** - Línea discontinua

Si no ves el linetype que necesitas, click en **Load** para cargar más opciones.

## Control de Colores

Hay dos métodos para controlar el color de objetos:

### Método 1: Color por Capa (Recomendado ✅)

- Configura el color de la capa
- Dibuja objetos en la capa apropiada
- **Mantiene el dibujo organizado**

### Método 2: Color Control en Properties Panel

- Permite sobrescribir el color de capa
- Usa con precaución
- Puede hacer confuso el dibujo

> **Mejor Práctica:** Siempre deja Color Control, Linetype Control y Lineweight Control configurados en **BYLAYER**.

## Hacer la Capa de un Objeto Actual

El botón **Make Current** te permite seleccionar un objeto y hacer su capa la actual.

**Pasos:**
1. Click en un objeto en el dibujo
2. Click en el ícono **Make Object's Layer Current**
3. La capa del objeto se vuelve actual
4. Mensaje: "[Nombre de capa] is now the current layer"

## Layer Previous

El botón **Layer Previous** restaura la capa actual anterior.

- Útil después de cambiar capas múltiples veces
- Retorna a la última capa actual

## Ejemplo Práctico: Crear Capa EASEMENTS

Vamos a crear una nueva capa llamada EASEMENTS con linetype HIDDEN y color cyan:

```
1. Click en Layer Properties Manager
2. Click en New Layer
3. Escribe: EASEMENTS
4. Click en Color → Selecciona cyan → OK
5. Click en Linetype → Selecciona HIDDEN → OK
6. Click en X para cerrar Layer Properties Manager
```

Resultado:
- **Nombre:** EASEMENTS
- **Color:** Cyan (cian)
- **Linetype:** HIDDEN (línea oculta)
- **On/Off:** On
- **Freeze/Thaw:** Thawed
- **Lock/Unlock:** Unlocked

## Columnas del Layer Properties Manager

| Columna | Función |
|---------|---------|
| Status | Estado actual de la capa |
| Name | Nombre de la capa |
| On | Encendida/Apagada |
| Freeze | Congelada/Descongelada |
| Lock | Bloqueada/Desbloqueada |
| Color | Color asignado |
| Linetype | Tipo de línea |
| Lineweight | Grosor de línea |
| Transparency | Transparencia |
| Plot Style | Estilo de impresión |
| Plot | Si se imprime o no |
| Description | Descripción opcional |

## Tips Avanzados

💡 **Tip 1:** Right-click en los encabezados de columna para **Maximize All Columns** y ver nombres completos.

💡 **Tip 2:** Puedes redimensionar el Layer Properties Manager arrastrando sus esquinas.

💡 **Tip 3:** Usa filtros de capas para encontrar capas específicas en dibujos complejos.

💡 **Tip 4:** En un fondo negro, el color usado para layer 0 aparece blanco. En un fondo blanco, aparece negro.

## Atajos de Teclado

| Comando | Atajo |
|---------|-------|
| Layer Properties Manager | LA |
| Match Layer | LAYMCH |
| Layer Previous | LAYERP |
| Make Object's Layer Current | LAYMCUR |

## Resumen

En esta lección aprendiste a:
- ✅ Entender el concepto de capas en AutoCAD
- ✅ Crear nuevas capas con el Layer Properties Manager
- ✅ Controlar la visibilidad de capas (On/Off, Freeze/Thaw)
- ✅ Bloquear capas para protegerlas
- ✅ Asignar colores y linetypes a capas
- ✅ Hacer una capa actual usando múltiples métodos
- ✅ Usar Layer Previous para volver a la capa anterior

---

**Lección Anterior:** [Lección 1 - Apertura de Dibujos](./leccion-01-apertura-dibujos.md)
**Próxima Lección:** [Lección 3 - Comando Arc](./leccion-03-comando-arc.md)
