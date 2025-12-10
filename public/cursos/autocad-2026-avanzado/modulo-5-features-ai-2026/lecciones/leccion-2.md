# Leccion 2: Smart Blocks - Search and Convert

**Duracion:** 60 minutos
**Modulo:** 5 - Features IA de AutoCAD 2026
**Curso:** AutoCAD 2026 Avanzado

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Usar SMARTBLOCKSSEARCH para buscar objetos similares
- Convertir objetos encontrados a bloques existentes
- Reemplazar geometria con bloques de biblioteca
- Aplicar flujos de trabajo de busqueda y sustitucion
- Combinar busqueda con bibliotecas de bloques

---

## Introduccion

Mientras Smart Blocks Detect encuentra automaticamente todos los patrones repetitivos, Smart Blocks Search te permite buscar objetos similares a una muestra especifica. Esta herramienta es ideal cuando sabes exactamente que tipo de objeto quieres encontrar y convertir.

---

## 1. Concepto de Search and Convert

### 1.1 Diferencia con Detect

| Detect | Search |
|--------|--------|
| Busca todos los patrones | Busca patron especifico |
| Automatico | Dirigido por usuario |
| Descubre grupos desconocidos | Encuentra objetos conocidos |
| Para limpieza general | Para sustitucion especifica |

### 1.2 Casos de Uso

- Reemplazar simbolos obsoletos con nuevos bloques
- Encontrar instancias de un objeto para convertir
- Sustituir geometria con bloques de biblioteca
- Estandarizar elementos especificos

---

## 2. Comando SMARTBLOCKSSEARCH

### 2.1 Acceso

- **Command Line:** `SMARTBLOCKSSEARCH`
- **Ribbon:** Insert Tab > Block Definition > Smart Blocks Search
- **Menu contextual:** Click derecho > Smart Blocks > Search and Convert

### 2.2 Proceso

```
Command: SMARTBLOCKSSEARCH
Select sample geometry: (seleccionar objeto muestra)
Analyzing... Please wait.
Found 45 similar objects.
```

### 2.3 Panel de Resultados

**Search Results:**
- Numero de objetos encontrados
- Nivel de similitud de cada uno
- Vista previa de coincidencias

**Conversion Options:**
- Crear nuevo bloque
- Usar bloque existente
- Seleccionar de biblioteca

---

## 3. Flujo de Trabajo Basico

### 3.1 Paso 1: Seleccionar Muestra

```
1. Identificar objeto que representa el patron
2. Ejecutar SMARTBLOCKSSEARCH
3. Select sample geometry: (seleccionar)
```

### 3.2 Paso 2: Revisar Resultados

```
AutoCAD resalta todos los objetos similares encontrados.

Opciones:
- Refine Search: Ajustar parametros
- Select All: Seleccionar todos
- Deselect: Quitar de seleccion
- Preview: Ver cada coincidencia
```

### 3.3 Paso 3: Decidir Accion

**Opcion A: Crear nuevo bloque**
```
1. Convert to New Block
2. Nombrar bloque
3. Configurar punto base
4. Confirmar conversion
```

**Opcion B: Usar bloque existente**
```
1. Convert to Existing Block
2. Seleccionar bloque de lista
3. Confirmar sustitucion
```

**Opcion C: Seleccionar de biblioteca**
```
1. Select from Library
2. Navegar a biblioteca
3. Seleccionar bloque apropiado
4. Confirmar
```

---

## 4. Busqueda Avanzada

### 4.1 Parametros de Busqueda

| Parametro | Descripcion |
|-----------|-------------|
| Match geometry | Coincidencia de forma |
| Match scale | Coincidencia de tamano |
| Match rotation | Coincidencia de rotacion |
| Match properties | Coincidencia de propiedades |
| Tolerance | Porcentaje de tolerancia |

### 4.2 Configurar Tolerancia

```
Search Settings > Tolerance: 95%
(encuentra objetos con 95%+ de similitud)
```

### 4.3 Refinar Busqueda

Si los resultados incluyen objetos no deseados:

```
1. Refine Search
2. Ajustar tolerancia (mas estricta)
3. Excluir por propiedad (capa, color)
4. Re-ejecutar busqueda
```

---

## 5. Conversion a Bloques Existentes

### 5.1 Usar Bloque del Dibujo

```
1. SMARTBLOCKSSEARCH
2. Seleccionar muestra
3. Convert to Existing Block
4. Seleccionar de lista de bloques del dibujo
5. Confirmar

Resultado: Geometria reemplazada con instancias del bloque
```

### 5.2 Insertar de Biblioteca

```
1. SMARTBLOCKSSEARCH
2. Seleccionar muestra
3. Select from Library
4. Navegar a archivo .dwg de biblioteca
5. Seleccionar bloque
6. Confirmar

Resultado: Bloque importado y geometria reemplazada
```

### 5.3 Mapear Propiedades

Al reemplazar, AutoCAD puede mapear:
- Capa original a capa del bloque
- Color original a color del bloque
- Rotacion original a rotacion del bloque

---

## 6. Integracion con DesignCenter

### 6.1 Flujo Combinado

```
1. Abrir DesignCenter (Ctrl+2)
2. Navegar a biblioteca de bloques
3. Identificar bloque de reemplazo
4. SMARTBLOCKSSEARCH
5. Seleccionar geometria a reemplazar
6. Select from Library
7. Seleccionar bloque del DesignCenter
```

### 6.2 Crear Biblioteca de Reemplazo

```
1. Crear archivo BIBLIOTECA-ESTANDAR.dwg
2. Agregar bloques estandarizados
3. Organizar por categoria
4. Usar en busquedas de Smart Blocks
```

---

## 7. Sugerencias de IA

### 7.1 Block Suggestions

AutoCAD 2026 puede sugerir bloques de reemplazo basado en:
- Geometria similar en bibliotecas
- Bloques usados previamente
- Bloques estandar de la industria

### 7.2 Activar Sugerencias

```
Smart Blocks Settings > Enable AI Suggestions: Yes
```

### 7.3 Ejemplo

```
SMARTBLOCKSSEARCH
Seleccionar: Silla dibujada manualmente

AI Suggestion:
"This object is similar to 'CHAIR-OFFICE-STD' from your
project library. Would you like to use this block?"

[Use Suggested] [Browse Other] [Create New]
```

---

## 8. Flujos de Trabajo Profesionales

### 8.1 Actualizacion de Simbolos

**Escenario:** Actualizar simbolos obsoletos a nueva version.

```
1. Importar nuevo bloque a biblioteca
2. SMARTBLOCKSSEARCH
3. Seleccionar simbolo obsoleto
4. Select from Library > Nuevo bloque
5. Convertir todas las instancias
```

### 8.2 Estandarizacion de Proyecto

**Escenario:** Unificar elementos de multiples dibujantes.

```
1. Definir bloques estandar del proyecto
2. En cada archivo:
   a. SMARTBLOCKSSEARCH por tipo
   b. Reemplazar con bloque estandar
3. Verificar consistencia
```

### 8.3 Migracion de Biblioteca

**Escenario:** Migrar a nueva biblioteca de bloques.

```
1. Mapear bloques antiguos a nuevos
2. Por cada tipo:
   a. Buscar geometria antigua
   b. Reemplazar con bloque nuevo
3. Verificar y ajustar
```

---

## 9. Comparacion Search vs Detect

### 9.1 Cuando Usar Detect

- Limpieza general de dibujo
- Descubrir patrones desconocidos
- Optimizacion automatica
- Primera revision de dibujo legacy

### 9.2 Cuando Usar Search

- Reemplazo especifico
- Actualizacion de simbolos
- Estandarizacion dirigida
- Conoces el patron a buscar

### 9.3 Uso Combinado

```
1. SMARTBLOCKSDETECT para identificar patrones
2. Revisar grupos detectados
3. Para patrones que requieren bloques especificos:
   - SMARTBLOCKSSEARCH con bloque de biblioteca
4. Para patrones nuevos:
   - Crear bloque desde Detect
```

---

## 10. Limitaciones y Consideraciones

### 10.1 Limitaciones

- No encuentra objetos con diferencias significativas
- Requiere muestra clara y completa
- Objetos parcialmente seleccionados dan resultados pobres
- No funciona bien con geometria muy simple

### 10.2 Tips para Mejores Resultados

- Seleccionar muestra completa (no parcial)
- Usar tolerancia apropiada
- Verificar resultados antes de convertir
- Guardar backup antes de cambios masivos

---

## Ejercicio Practico 2

**Objetivo:** Dominar Smart Blocks Search.

**Tarea 1: Busqueda Basica**
- Abrir archivo con objetos repetitivos
- Seleccionar un objeto como muestra
- Ejecutar SMARTBLOCKSSEARCH
- Contar objetos encontrados

**Tarea 2: Conversion a Nuevo Bloque**
- Buscar patron especifico
- Convertir a nuevo bloque
- Nombrar descriptivamente

**Tarea 3: Usar Bloque Existente**
- Crear bloque estandar
- Buscar geometria similar
- Reemplazar con bloque existente

**Tarea 4: Biblioteca Externa**
- Preparar archivo de biblioteca
- Buscar geometria en dibujo
- Reemplazar con bloque de biblioteca

**Tarea 5: Flujo Completo**
- Combinar Detect y Search
- Estandarizar dibujo completo
- Documentar mejoras

**Entregable:** Dibujo estandarizado con reporte de cambios.

---

## Evaluacion

**Pregunta 1:** Cual es la diferencia entre Detect y Search?

**Pregunta 2:** Como se selecciona un bloque de biblioteca externa?

**Pregunta 3:** Que parametros se pueden ajustar en la busqueda?

**Pregunta 4:** Cuando es preferible usar Search sobre Detect?

**Pregunta 5:** Que hace la funcion AI Suggestions?

---

## Resumen

En esta leccion aprendiste:

- Usar SMARTBLOCKSSEARCH para busqueda dirigida
- Convertir a bloques nuevos o existentes
- Usar bloques de bibliotecas externas
- Configurar parametros de busqueda
- Flujos de trabajo profesionales
- Combinar Search con Detect

**Proxima Leccion:** Activity Insights y Mejoras de Rendimiento

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 45 minutos estandarizando proyecto real
