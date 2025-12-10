# Leccion 3: Activity Insights y Colaboracion

**Duracion:** 45 minutos
**Modulo:** 5 - Features IA de AutoCAD 2026
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Usar Activity Insights para rastrear cambios
- Analizar historial de modificaciones
- Comparar versiones de dibujos
- Colaborar efectivamente con equipos
- Usar Autodesk Drive para almacenamiento en nube

---

## Introduccion

Activity Insights es una caracteristica de AutoCAD 2026 que proporciona visibilidad completa sobre quien hizo que cambios y cuando. Esta herramienta es invaluable para equipos de diseno que necesitan rastrear modificaciones, resolver conflictos y mantener control de versiones.

---

## 1. Activity Insights

### 1.1 Que es Activity Insights

Activity Insights rastrea y muestra:
- Cambios realizados en el dibujo
- Quien realizo cada cambio
- Cuando se hicieron los cambios
- Que objetos fueron afectados

### 1.2 Acceso

- **Ribbon:** Collaborate Tab > Activity Insights
- **Command Line:** `ACTIVITYINSIGHTS`
- **Panel lateral:** Click en icono Activity Insights

### 1.3 Requisitos

- Archivo guardado en Autodesk Drive
- Cuenta de Autodesk activa
- Colaboradores con acceso al archivo

---

## 2. Panel Activity Insights

### 2.1 Interfaz

| Seccion | Contenido |
|---------|-----------|
| Timeline | Linea de tiempo de cambios |
| Filter | Filtrar por usuario, fecha, tipo |
| Details | Detalles del cambio seleccionado |
| Actions | Acciones disponibles |

### 2.2 Tipos de Eventos

| Evento | Icono | Descripcion |
|--------|-------|-------------|
| Create | + | Objeto creado |
| Modify | ~ | Objeto modificado |
| Delete | X | Objeto eliminado |
| Save | Disco | Archivo guardado |
| Open | Carpeta | Archivo abierto |

### 2.3 Filtros Disponibles

```
Filter by:
- User: Todos / Usuario especifico
- Date range: Hoy / Semana / Mes / Personalizado
- Event type: Creates / Modifies / Deletes
- Layer: Todas / Capa especifica
```

---

## 3. Rastrear Cambios

### 3.1 Ver Historial

```
1. Abrir Activity Insights panel
2. Seleccionar rango de fechas
3. Revisar lista de eventos
4. Click en evento para ver detalles
```

### 3.2 Identificar Cambios Especificos

```
Click en evento:
- User: Juan Garcia
- Date: 2024-01-15 14:32
- Action: Modified
- Objects: 15 polylines on layer WALLS
- Location: Grid area C-5

[Zoom to] [Highlight] [Revert]
```

### 3.3 Zoom a Cambio

```
1. Seleccionar evento en timeline
2. Click "Zoom to"
(viewport centra en area del cambio)
```

---

## 4. Comparar Versiones

### 4.1 Version Compare

Comparar version actual con version anterior:

```
Command: DWGCOMPARE
Select first drawing: (archivo actual)
Select second drawing: (version anterior o archivo diferente)
```

### 4.2 Resultados de Comparacion

| Color | Significado |
|-------|-------------|
| Verde | Objetos nuevos (en archivo 1) |
| Rojo | Objetos eliminados (estaban en archivo 2) |
| Gris | Objetos sin cambios |

### 4.3 Opciones de Comparacion

```
DWG Compare Settings:
- Compare: Geometry only / Include text / Include dimensions
- Tolerance: Precision de comparacion
- View: Side by side / Overlay
- Export: Crear reporte
```

---

## 5. Autodesk Drive

### 5.1 Que es Autodesk Drive

Autodesk Drive es el almacenamiento en nube de Autodesk que:
- Almacena archivos DWG
- Sincroniza entre dispositivos
- Permite colaboracion
- Habilita Activity Insights

### 5.2 Configurar Autodesk Drive

```
1. Iniciar sesion en Autodesk Account
2. Instalar Autodesk Drive Desktop
3. Vincular carpetas locales
4. Guardar archivos en Drive
```

### 5.3 Guardar en Drive

```
File > Save As
Location: Autodesk Drive > Proyecto-X
(archivo se sincroniza automaticamente)
```

---

## 6. Colaboracion en Tiempo Real

### 6.1 Shared Views

Crear vista compartible del dibujo:

```
Command: SHAREDVIEWS
1. Seleccionar area o todo el dibujo
2. Configurar opciones de vista
3. Generar enlace
4. Compartir enlace con colaboradores
```

### 6.2 Opciones de Shared View

| Opcion | Descripcion |
|--------|-------------|
| Expiration | Duracion del enlace (1 dia - 30 dias) |
| Comments | Permitir comentarios |
| Measurements | Permitir mediciones |
| Download | Permitir descarga |

### 6.3 Ver Comentarios

```
Shared View Panel > Comments
(muestra comentarios de colaboradores)

Click en comentario:
- Zoom a ubicacion
- Responder
- Marcar como resuelto
```

---

## 7. Trace (Rastreo)

### 7.1 Que es Trace

Trace permite dibujar sobre el dibujo sin modificar el original:
- Capas de anotaciones temporales
- Revision sin edicion
- Colaboracion de revision

### 7.2 Crear Trace

```
Command: TRACE
Create new trace: REVISION-JUAN
(capa de trace se activa)

Dibujar anotaciones de revision
(no afectan dibujo original)
```

### 7.3 Ver Traces de Otros

```
Trace Panel:
- Lista de traces disponibles
- Autor de cada trace
- Fecha de creacion
- Mostrar/Ocultar cada trace
```

### 7.4 Incorporar Cambios de Trace

```
1. Revisar trace con comentarios
2. Seleccionar anotaciones validas
3. "Accept and Incorporate"
(crea objetos reales en el dibujo)
```

---

## 8. Markup Import/Export

### 8.1 Importar Markups

Importar anotaciones de PDF:

```
Command: PDFIMPORT
Select PDF: revision-marcada.pdf
Import: Markups only
(importa anotaciones como objetos)
```

### 8.2 Exportar para Revision

```
Command: EXPORTPDF
Options:
- Include markups: Yes
- Enable comments: Yes
(PDF con capacidad de anotacion)
```

---

## 9. Mejores Practicas de Colaboracion

### 9.1 Organizacion

- Usar estructura de carpetas consistente
- Nombrar archivos descriptivamente
- Mantener versiones numeradas
- Documentar cambios mayores

### 9.2 Comunicacion

- Usar comentarios en Shared Views
- Crear traces para revisiones
- Especificar cambios requeridos claramente
- Responder a comentarios prontamente

### 9.3 Control de Versiones

- Guardar versiones importantes
- Usar Activity Insights para rastrear
- Comparar antes de incorporar cambios
- Mantener backup de versiones clave

---

## 10. Integracion con Otras Herramientas

### 10.1 AutoCAD Web

Acceder a dibujos desde navegador:

```
1. Guardar en Autodesk Drive
2. Acceder via web.autocad.com
3. Ver y editar basico desde navegador
```

### 10.2 AutoCAD Mobile

```
1. Instalar app AutoCAD Mobile
2. Iniciar sesion con Autodesk ID
3. Acceder a archivos de Drive
4. Ver y anotar en campo
```

### 10.3 BIM 360 / Autodesk Construction Cloud

Para proyectos mas complejos:

```
- Flujos de trabajo de revision formales
- Control de documentos avanzado
- Integracion con Revit y otros productos
```

---

## Ejercicio Practico 3

**Objetivo:** Dominar Activity Insights y colaboracion.

**Tarea 1: Configurar Autodesk Drive**
- Vincular carpeta local
- Guardar archivo en Drive
- Verificar sincronizacion

**Tarea 2: Activity Insights**
- Hacer cambios en dibujo
- Guardar varias veces
- Revisar historial en Activity Insights
- Filtrar por tipo de evento

**Tarea 3: Shared View**
- Crear Shared View
- Configurar opciones
- Compartir enlace
- Agregar comentario

**Tarea 4: Trace**
- Crear trace de revision
- Agregar anotaciones
- Revisar trace existente
- Incorporar cambios seleccionados

**Tarea 5: Comparar Versiones**
- Guardar version A
- Hacer cambios
- Guardar version B
- Usar DWGCOMPARE

**Entregable:** Reporte de colaboracion con capturas de proceso.

---

## Evaluacion

**Pregunta 1:** Que informacion muestra Activity Insights?

**Pregunta 2:** Donde deben guardarse los archivos para usar Activity Insights?

**Pregunta 3:** Que es un Trace y para que sirve?

**Pregunta 4:** Como se comparan dos versiones de un dibujo?

**Pregunta 5:** Que colores usa DWG Compare para mostrar diferencias?

---

## Resumen

En esta leccion aprendiste:

- Usar Activity Insights para rastrear cambios
- Configurar Autodesk Drive
- Comparar versiones de dibujos
- Crear y usar Shared Views
- Trabajar con Traces para revision
- Mejores practicas de colaboracion

**Proxima Leccion:** Mejoras de Rendimiento y Productividad

---

**Tiempo de estudio recomendado:** 45 minutos
**Practica adicional:** 30 minutos configurando flujo de colaboracion
