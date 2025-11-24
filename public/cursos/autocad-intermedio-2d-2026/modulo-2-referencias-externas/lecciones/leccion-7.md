# Lección 7: Xrefs - Attach, Overlay, Bind

## Introducción

Las Referencias Externas (External References o Xrefs) permiten vincular archivos DWG completos dentro de otro dibujo sin importar permanentemente su geometría. Los objetos del archivo referenciado aparecen en el dibujo host, pero la definición permanece en el archivo externo. Cuando el archivo externo se modifica, todos los dibujos que lo referencian reflejan automáticamente los cambios al recargar la referencia.

Este sistema es fundamental en proyectos donde múltiples disciplinas trabajan simultáneamente: arquitectura crea el modelo base, y estructuras, instalaciones eléctricas, mecánicas y sanitarias lo referencian para coordinar sus diseños sin duplicar información. Las xrefs garantizan que todos trabajen siempre con la versión más actualizada del modelo base.

## Fundamentos de Referencias Externas

### Ventajas de Xrefs vs. Copiar Geometría

**Con Xrefs:**
- Tamaño de archivo reducido (solo almacena ruta de referencia)
- Actualización automática cuando archivo fuente cambia
- Un solo archivo maestro como fuente de verdad
- Facilita colaboración multi-disciplinaria
- Cambios centralizados en lugar de propagación manual

**Sin Xrefs (copiando geometría):**
- Duplicación masiva de datos
- Desincronización inevitable
- Actualizaciones manuales propensas a errores
- Archivos bloated y difíciles de manejar
- Imposibilidad de coordinar equipos grandes

### Conceptos Clave

**Archivo Host (Host Drawing):** El dibujo que contiene referencias a otros archivos

**Archivo Referenciado (Referenced Drawing):** El archivo DWG que se adjunta como xref

**Path (Ruta):** Ubicación del archivo referenciado (absoluta o relativa)

**Nested Xrefs:** Xrefs dentro de xrefs (archivo A referencia B, B referencia C)

**Attach vs Overlay:** Dos métodos de adjuntar xrefs con diferentes comportamientos en nested scenarios

## Adjuntando Referencias Externas: XATTACH

### Comando XATTACH (eXternal reference ATTACH)

**Acceso:**
- Comando: `XATTACH`
- Ribbon: Insert tab > Reference panel > Attach
- External References palette > Attach DWG button

**Proceso:**
1. `XATTACH`
2. Select Reference File dialog: Navega y selecciona archivo DWG
3. Attach External Reference dialog se abre

**Attach External Reference Dialog:**

**Sección Name:**
- Nombre del archivo que se adjuntará
- Path display (editable)

**Sección Reference Type:**
- **Attachment:** Xref estándar (visible en nested scenarios)
- **Overlay:** Xref solo visible en host directo (no en nested)

**Sección Path type:**
- **Full path:** Ruta absoluta completa (C:\Proyectos\Archivo.dwg)
- **Relative path:** Ruta relativa al archivo host (.\Subproyectos\Archivo.dwg)
- **No path:** Solo nombre de archivo (busca en rutas configuradas)

**Sección Insertion point:**
- Specify On-screen: Definir punto de inserción manualmente
- X, Y, Z: Coordenadas específicas
- Típicamente: 0,0,0 para alineación perfecta

**Sección Scale:**
- Specify On-screen: Definir escala al insertar
- X, Y, Z: Factores de escala
- Típicamente: 1 (sin escalado)

**Sección Rotation:**
- Specify On-screen: Rotar al insertar
- Angle: Ángulo en grados
- Típicamente: 0 (sin rotación)

**Sección Block Unit:**
- Unidades del bloque (automático en archivos con units definidos)

![Attach External Reference Dialog](../imagenes/leccion-7-xattach-dialog.png)

### Attachment vs. Overlay

La diferencia crítica entre estos dos tipos aparece en escenarios de xrefs anidados (nested).

**Attachment:**
- El xref aparece en el host y en cualquier archivo que referencie al host
- Visible en todos los niveles de anidamiento
- Uso: Archivos que son parte integral del diseño y deben verse siempre

**Overlay:**
- El xref solo aparece en el host directo
- NO aparece cuando otro archivo referencia al host
- Uso: Referencias temporales, contexto visual, coordinación

**Ejemplo práctico:**

```
Escenario:
- Arquitectura.dwg (modelo base)
- Estructura.dwg referencia Arquitectura.dwg
- Electrico.dwg referencia Arquitectura.dwg
- Coordinacion.dwg referencia Estructura.dwg y Electrico.dwg

Si Estructura.dwg referencia Arquitectura.dwg como ATTACHMENT:
  → Coordinacion.dwg ve: Estructura + Arquitectura (nested)

Si Estructura.dwg referencia Arquitectura.dwg como OVERLAY:
  → Coordinacion.dwg ve: Solo Estructura (Arquitectura no se propaga)
```

**Best practice:**
- **Attachment:** Para modelo base que todos necesitan ver (ej: Arquitectura)
- **Overlay:** Para referencias de contexto que no deben propagarse (ej: imágenes de sitio, grids temporales)

## Path Types: Full, Relative, No Path

La configuración de path determina cómo AutoCAD localiza el archivo referenciado.

### Full Path (Ruta Absoluta)

**Formato:** `C:\Proyectos\Edificio_A\Arquitectura\ARQ-Planta.dwg`

**Ventajas:**
- AutoCAD encuentra archivo sin ambigüedad
- Funciona siempre que la ruta exacta exista

**Desventajas:**
- NO portable (si mueves proyecto a otra carpeta o PC, paths se rompen)
- Problemático en equipos (rutas de red diferentes, letras de drives diferentes)

**Uso recomendado:** Solo cuando archivos permanecen en ubicación fija (ej: servidor con path estándar)

### Relative Path (Ruta Relativa)

**Formato:** `..\Arquitectura\ARQ-Planta.dwg` o `.\Arquitectura\ARQ-Planta.dwg`

**Símbolos:**
- `.` = Carpeta actual (donde está el archivo host)
- `..` = Carpeta padre (un nivel arriba)

**Ventajas:**
- Completamente portable (puedes mover carpeta de proyecto completa)
- Funciona en cualquier PC sin modificación
- Ideal para colaboración

**Desventajas:**
- Requiere mantener estructura relativa de carpetas
- Si reorganizas carpetas, puede romperse

**Uso recomendado:** SIEMPRE que sea posible, especialmente en proyectos colaborativos

**Ejemplo de estructura:**
```
Proyecto_Edificio/
├── Host_Coordinacion.dwg (archivo host)
├── Arquitectura/
│   └── ARQ-Planta.dwg (referenced como .\Arquitectura\ARQ-Planta.dwg)
├── Estructura/
│   └── EST-Planta.dwg
└── Instalaciones/
    ├── ELEC-Planta.dwg
    └── MEC-Planta.dwg
```

### No Path (Sin Ruta)

**Formato:** `ARQ-Planta.dwg` (solo nombre de archivo)

**Comportamiento:**
- AutoCAD busca archivo en:
  1. Carpeta del archivo host
  2. Carpeta actual de AutoCAD
  3. Support File Search Paths (configuradas en OPTIONS)
  4. Project Files Search Path

**Ventajas:**
- Flexible (AutoCAD busca en múltiples ubicaciones)
- Útil con bibliotecas de xrefs estándar

**Desventajas:**
- Puede encontrar archivo equivocado si hay duplicados
- Menos predecible que relative path

**Uso recomendado:** Para xrefs de biblioteca estándar (ej: bloques de título, borders) en rutas configuradas corporativamente

## Comando BIND: Convertir Xref a Geometría Permanente

BIND convierte un xref en parte permanente del dibujo host, importando toda su geometría y definiciones.

**Acceso:**
- External References palette > Click derecho en xref > Bind
- Comando: `XBIND` (para bind selectivo)

**Bind Dialog:**

**Dos opciones:**

**1. Bind:**
- Convierte xref en bloque normal
- Layers del xref se renombran: `NombreXref$0$NombreLayer`
- Ejemplo: Si xref "Arquitectura" tiene layer "MUROS", se convierte en "Arquitectura$0$MUROS"
- Otras definiciones (blocks, dimstyles, etc.) también se renombran

**2. Insert:**
- Convierte xref insertándolo como si fuera bloque
- Layers del xref se fusionan con layers del host si coinciden nombres
- Ejemplo: Layer "MUROS" en xref se fusiona con layer "MUROS" en host
- NO se renombran, se integran directamente

**Diferencia clave:**
- **Bind:** Mantiene separación (prefijos en nombres)
- **Insert:** Integración completa (fusiona definiciones)

**Cuándo usar BIND:**
- Entregar archivo stand-alone sin dependencias externas
- Archivo final después de completar coordinación
- Archivar proyecto como single-file
- Cliente requiere DWG sin xrefs

**Advertencia:** BIND aumenta drásticamente tamaño de archivo y elimina la actualización automática (ya no es xref).

## Gestión Básica de Xrefs

### External References Palette

**Acceso:**
- Comando: `EXTERNALREFERENCES` (o `XREF`)
- Ribbon: Insert tab > Reference panel > External References
- Ctrl + Click en xref border en dibujo

**Interfaz:**

**File References pane (izquierda):**
- Lista tipo árbol de todos los xrefs
- Muestra nested xrefs con jerarquía
- Iconos indican status (loaded, unloaded, not found, etc.)

**Details pane (derecha):**
- Información detallada del xref seleccionado
- Reference Name, Status, Size, Type, Date, Saved Path

**Preview pane (abajo, opcional):**
- Preview visual del xref seleccionado

**Toolbar:**
- Attach DWG, Attach Image, Attach PDF, etc.

**Context menu (right-click en xref):**
- Open: Abre el archivo referenciado para edición
- Attach: Adjuntar nuevo xref
- Unload: Descarga xref (no visible pero mantiene referencia)
- Reload: Recarga xref (actualiza cambios)
- Detach: Elimina xref completamente
- Bind: Convierte a permanente
- Path type: Cambia entre Full/Relative/No path

### Reload: Actualizar Xref

Cuando archivo referenciado cambia, xref NO se actualiza automáticamente en sesión activa.

**Reload manual:**
1. External References palette
2. Right-click en xref > Reload
3. O: Selecciona xref y presiona F5
4. Xref se actualiza mostrando última versión guardada

**Reload all:**
- Right-click en encabezado "File References" > Reload All References
- Actualiza todos los xrefs simultáneamente

**System variable XLOADCTL:**
- Controla demand loading (carga bajo demanda)
- `XLOADCTL = 0`: Carga completa
- `XLOADCTL = 1`: Demand loading enabled (performance mejorado)
- `XLOADCTL = 2`: Demand loading con copy (permite editar xref mientras está referenciado)

### Unload vs. Detach

**Unload:**
- Xref deja de mostrarse visualmente
- Referencia se mantiene (aparece en lista como "Unloaded")
- Puedes Reload para que reaparezca
- Uso: Temporalmente ocultar xref para performance o claridad visual

**Detach:**
- Elimina referencia completamente
- Xref desaparece de lista
- No se puede Reload (debe re-adjuntar)
- Uso: Eliminar xref que ya no se necesita

## Ejemplo Paso a Paso: Proyecto Multi-Disciplinario

Simularemos workflow real: modelo arquitectónico base + disciplinas que lo referencian.

**Estructura de carpeta:**
```
Proyecto_Oficina/
├── 01_Arquitectura/
│   └── ARQ-Planta-Baja.dwg
├── 02_Estructura/
│   └── EST-Planta-Baja.dwg
├── 03_Instalaciones/
│   ├── ELEC-Planta-Baja.dwg
│   └── MEC-Planta-Baja.dwg
└── 04_Coordinacion/
    └── COORD-General.dwg
```

**Paso 1: Crear archivo arquitectónico base**
1. Nuevo dibujo: `ARQ-Planta-Baja.dwg`
2. Dibuja muros, puertas, ventanas (planta arquitectónica simple)
3. Layers: MUROS, PUERTAS, VENTANAS, EJES
4. Guarda en `01_Arquitectura/`

**Paso 2: Archivo estructural referencia arquitectura (ATTACHMENT)**
1. Nuevo dibujo: `EST-Planta-Baja.dwg` en `02_Estructura/`
2. `XATTACH`
3. Select: `..\01_Arquitectura\ARQ-Planta-Baja.dwg` (relative path)
4. Reference Type: **Attachment** (se propagará a coord)
5. Insertion point: 0,0,0
6. OK
7. Arquitectura aparece como referencia
8. Dibuja columnas, vigas en layers: COLUMNAS, VIGAS
9. Guarda

**Paso 3: Archivo eléctrico referencia arquitectura (ATTACHMENT)**
1. Nuevo dibujo: `ELEC-Planta-Baja.dwg` en `03_Instalaciones/`
2. `XATTACH`
3. Select: `..\01_Arquitectura\ARQ-Planta-Baja.dwg`
4. Reference Type: **Attachment**
5. OK
6. Dibuja circuitos, tomacorrientes en layers: CIRCUITOS, TOMAS
7. Guarda

**Paso 4: Archivo de coordinación referencia todo (OVERLAY)**
1. Nuevo dibujo: `COORD-General.dwg` en `04_Coordinacion/`
2. `XATTACH` > `..\01_Arquitectura\ARQ-Planta-Baja.dwg` (Attachment)
3. `XATTACH` > `..\02_Estructura\EST-Planta-Baja.dwg` (Overlay)
   - Como EST tiene ARQ como nested xref (Attachment), ARQ aparece en COORD
4. `XATTACH` > `..\03_Instalaciones\ELEC-Planta-Baja.dwg` (Overlay)
   - Igual, ARQ aparece nested
5. Ahora ves: ARQ (directo) + EST + ELEC + ARQ (nested desde EST) + ARQ (nested desde ELEC)
6. External References palette muestra jerarquía

**Paso 5: Probar actualización automática**
1. Abre `ARQ-Planta-Baja.dwg`
2. Modifica geometría (agrega una puerta)
3. Guarda y cierra
4. Abre `EST-Planta-Baja.dwg`
5. External References palette: Icono de notificación aparece
6. Right-click en ARQ xref > Reload
7. Cambios de arquitectura aparecen
8. Repetir en ELEC y COORD

## Troubleshooting Común

**Problema: "File not found" al abrir dibujo con xrefs**
- Causa: Path roto (archivo movido o renombrado)
- Solución: External References palette > Select Path > Browse a nueva ubicación

**Problema: Xref aparece en ubicación incorrecta**
- Causa: Insertion point no es 0,0,0 o units diferentes
- Solución: Detach y re-attach con insertion 0,0,0

**Problema: Cambios en xref no se reflejan**
- Causa: Xref no reloaded
- Solución: Reload manualmente o configurar auto-reload

**Problema: Performance lento con muchos xrefs**
- Causa: Xrefs muy pesados cargándose completamente
- Solución: `XLOADCTL = 1` (demand loading), Layer Freeze selectivo

## Mejores Prácticas

**Rutas:**
- Usa Relative Path siempre que sea posible
- Establece estructura de carpetas clara desde inicio
- Documenta estructura de carpetas en README del proyecto

**Nomenclatura:**
- Prefijos consistentes por disciplina (ARQ-, EST-, ELEC-, MEC-)
- Nombres descriptivos (ARQ-Planta-Nivel-1.dwg no ARQ-01.dwg)

**Layers:**
- Cada disciplina usa prefijo en layers (ARQ-MUROS, EST-COLUMNAS)
- Evita conflictos de nombres entre disciplinas
- Coordina estándares de layers entre equipo

**Coordinación:**
- Archivo base (arquitectura) es master
- Otras disciplinas solo referencian, no modifican base
- Reuniones de coordinación regulares para sincronizar cambios

**Backup:**
- Backup completo de estructura de carpetas
- No solo archivos individuales (mantener relative paths)

## Conclusión

Las referencias externas son fundamentales para colaboración profesional en CAD. La comprensión de Attachment vs. Overlay, rutas relativas vs. absolutas, y operaciones básicas (Reload, Bind, Unload) te permite gestionar proyectos multi-disciplinarios de manera eficiente.

El uso correcto de xrefs reduce duplicación, garantiza sincronización automática, y facilita workflows donde múltiples personas trabajan simultáneamente en componentes interdependientes del proyecto. En la próxima lección profundizaremos en gestión avanzada mediante Xref Manager y control granular de layers de xrefs.

## Resumen de Conceptos Clave

- Xrefs vinculan archivos DWG sin importar geometría permanentemente
- Attachment propaga xref en nested scenarios, Overlay no
- Relative Path garantiza portabilidad de proyectos
- XATTACH adjunta referencias externas al dibujo
- BIND convierte xref en geometría permanente (opción Bind o Insert)
- External References palette gestiona todos los xrefs
- Reload actualiza xref cuando archivo fuente cambia
- Unload oculta temporalmente, Detach elimina completamente
- Best practice: Relative paths, nomenclatura clara, estructura organizada
