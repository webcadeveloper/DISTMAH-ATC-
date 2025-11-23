# Lección 1: Apertura y Gestión de Dibujos

## Introducción

En AutoCAD, generalmente se crean dibujos combinando y modificando varias formas primitivas básicas como líneas, círculos y arcos para crear formas más complejas. Una de las ventajas de usar CAD sobre el dibujo en papel es que estás creando un modelo preciso de la geometría del dibujo.

> **Importante:** La información extraída del dibujo es precisa solo si creas el dibujo con precisión desde el principio.

## Abrir un Dibujo Existente

### Método 1: Usando el Botón Open

1. Click en el **botón Open** (ícono de carpeta abierta) en la Quick Access toolbar
2. O usa el Application menu → Open

### Método 2: Usando el Cuadro de Diálogo

El cuadro de diálogo **Select File** te permite:

- Navegar por directorios y unidades
- Ver vista previa de archivos
- Buscar archivos por nombre o fecha

![Select File Dialog](./imagenes/select-file-dialog.png)

### Herramienta Find para Buscar Archivos

Si no recuerdas dónde guardaste un archivo:

1. Click en **Tools → Find** en el Select File dialog
2. Escribe el nombre del archivo (o parte de él)
3. Especifica la ubicación de búsqueda
4. Click en **Find Now**

**Ejemplo de búsqueda:**
```
Named: subdivis
Type: Drawing (*.dwg)
Look in: C:\datafiles
```

## Guardar Como Nuevo Archivo

El comando **Save As** te permite guardar tu dibujo con un nuevo nombre y/o en una ubicación diferente.

### Pasos para Save As:

1. Click en **Save As button** en Quick Access toolbar
2. Selecciona la carpeta de destino
3. Especifica el nombre del archivo
4. Click en **Save**

> **Advertencia:** No uses el comando Save regular, ya que sobrescribirá el archivo original.

## Configuraciones del Dibujo

Cuando abres un archivo, este mantiene sus propias configuraciones predeterminadas:
- Grid
- Snap
- Capas
- Otras características

Estas configuraciones se guardan en el archivo de dibujo.

## Práctica

### Ejercicio 1: Abrir subdivis.dwg

1. Launch AutoCAD 2026
2. Click en Open button
3. Navega a tu carpeta `datafiles`
4. Selecciona `subdivis.dwg`
5. Click en **Open**
6. Double-click en el centro de la pantalla para zoom a los extents

### Ejercicio 2: Guardar con Nuevo Nombre

1. Click en Save As
2. Selecciona la carpeta `work`
3. Nombre del archivo: `subdivis.dwg` (misma carpeta diferente)
4. Click en Save

## Agregar a Favoritos

Para acceso rápido a carpetas frecuentes:

1. Navega a la carpeta deseada
2. Right-click en el botón **Favorites**
3. Pick **Add Current Folder**

O usa: **Tools → Add Current Folder to Places**

## Tips Importantes

💡 **Tip 1:** Los archivos más antiguos pueden no mostrar vista previa en el cuadro de diálogo.

💡 **Tip 2:** Usa los botones de la izquierda para acceder rápidamente a:
- History (archivos recientes)
- My Documents
- Favorites
- Desktop

💡 **Tip 3:** Si guardas un archivo con el mismo nombre que uno existente, aparecerá un mensaje de advertencia.

## Atajos de Teclado

| Comando | Atajo |
|---------|-------|
| Open | Ctrl+O |
| Save As | (ninguno) |
| Close | Ctrl+W |

## Comandos Relacionados

- **OPEN** - Abre un dibujo existente
- **SAVEAS** - Guarda el dibujo con un nuevo nombre
- **CLOSE** - Cierra el dibujo actual
- **NEW** - Crea un nuevo dibujo

## Resumen

En esta lección aprendiste a:
- ✅ Abrir dibujos existentes usando múltiples métodos
- ✅ Usar la herramienta Find para buscar archivos
- ✅ Guardar dibujos con nuevos nombres usando Save As
- ✅ Navegar por el sistema de archivos en AutoCAD
- ✅ Agregar carpetas a Favoritos para acceso rápido

---

**Próxima Lección:** [Lección 2 - Trabajando con Capas](./leccion-02-trabajando-con-capas.md)
