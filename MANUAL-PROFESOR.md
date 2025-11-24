# Manual del Profesor - Universidad Autodesk DISTMAH ATC

**Versión:** 1.0
**Fecha:** Noviembre 2023
**Para:** Profesores e Instructores Certificados

---

## 📚 Índice

1. [Introducción](#introducción)
2. [Estructura de los Cursos](#estructura-de-los-cursos)
3. [Sistema 100% Editable](#sistema-100-editable)
4. [Cómo Editar Contenido](#cómo-editar-contenido)
5. [Gestión de Imágenes](#gestión-de-imágenes)
6. [Personalización Regional](#personalización-regional)
7. [Actualización Anual de Cursos](#actualización-anual-de-cursos)
8. [Best Practices para Instructores](#best-practices-para-instructores)
9. [Soporte Técnico](#soporte-técnico)

---

## Introducción

Bienvenido al sistema de cursos de **Universidad Autodesk - DISTMAH ATC** (Authorized Training Center).

Este manual explica cómo los profesores pueden editar, personalizar y mantener los cursos de forma completamente autónoma.

### Cursos Disponibles

**Civil 3D 2026:**
- ✅ Civil 3D 2026 Básico ($390 USD, 30 horas, 30 lecciones)
- ✅ Civil 3D 2026 Avanzado ($390 USD, 30 horas, 30 lecciones)

**Revit 2026 MEP:**
- ✅ Revit 2026 MEP Arquitectura
- ✅ Revit 2026 MEP Mecánicas
- ✅ Revit 2026 MEP Eléctricas
- ✅ Revit 2026 MEP Sanitarias

**AutoCAD 2026:**
- (En desarrollo)

---

## Estructura de los Cursos

### Organización de Archivos

Cada curso tiene esta estructura estandarizada:

```
civil-3d-2026-basico/
├── curso.json                    ← Metadatos del curso (editable)
├── modulo-1-nombre-modulo/
│   ├── README.md                 ← Overview del módulo (editable)
│   ├── ejercicios.md             ← Ejercicios prácticos (editable)
│   ├── imagenes/                 ← Carpeta para capturas de pantalla
│   └── lecciones/
│       ├── leccion-1.md          ← Lección completa (100% editable)
│       ├── leccion-2.md
│       ├── leccion-3.md
│       └── ...
├── modulo-2-nombre-modulo/
│   └── ... (misma estructura)
└── ...
```

### Componentes de una Lección

Cada archivo `leccion-X.md` contiene:

1. **Encabezado** - Título, duración, módulo
2. **Objetivos de Aprendizaje** - Con checkmarks ✅
3. **Introducción** - Contexto profesional
4. **Contenido Técnico** - Secciones numeradas
5. **Ejercicio Práctico** - Al final de la lección
6. **Evaluación** - 5 preguntas mínimo
7. **Recursos Adicionales** - Links, documentación
8. **Resumen** - Recapitulación de conceptos

---

## Sistema 100% Editable

### ✅ **IMPORTANTE: TODO es Editable**

**Formato Markdown (.md):**
- Los archivos .md son **texto plano** completamente editable
- Compatible con cualquier editor de texto
- Se renderiza automáticamente en la plataforma web
- Sin código compilado que bloquee cambios

**Qué pueden editar los profesores:**

| Elemento | ¿Editable? | Ubicación |
|----------|------------|-----------|
| Precio del curso | ✅ Sí | `curso.json` |
| Duración del curso | ✅ Sí | `curso.json` |
| Descripción del curso | ✅ Sí | `curso.json` |
| Título de lección | ✅ Sí | `lecciones/leccion-X.md` |
| Contenido de lección | ✅ Sí | `lecciones/leccion-X.md` |
| Objetivos de aprendizaje | ✅ Sí | `lecciones/leccion-X.md` |
| Ejercicios prácticos | ✅ Sí | `ejercicios.md` |
| Evaluaciones | ✅ Sí | `lecciones/leccion-X.md` |
| Imágenes | ✅ Sí | Subir a `/imagenes/` |
| Recursos adicionales | ✅ Sí | Añadir links en lecciones |

### Sin Restricciones Técnicas

- ❌ **NO** hay código compilado
- ❌ **NO** hay bases de datos bloqueadas
- ❌ **NO** hay dependencias de APIs externas
- ✅ **SÍ** es 100% portable y modificable
- ✅ **SÍ** funciona en cualquier plataforma

---

## Cómo Editar Contenido

### Opción 1: Dashboard Web (Recomendado)

**Paso a paso:**

1. **Login al Dashboard de Profesor**
   - URL: `https://distmah.com.ve/profesor/login`
   - Usuario: Tu email de profesor
   - Contraseña: Tu clave asignada

2. **Navegar al Curso**
   - Sidebar → "Mis Cursos"
   - Click en "Civil 3D 2026 Básico" (o el curso a editar)

3. **Seleccionar Módulo y Lección**
   - Click en "Módulo 1: Introducción a Civil 3D 2026"
   - Click en "Lección 1: Interfaz de Civil 3D"

4. **Editar Contenido**
   - Click en botón "Editar Lección" (ícono de lápiz)
   - Se abre el editor WYSIWYG (tipo Word) o Markdown
   - Modificar texto, añadir/quitar secciones
   - Preview en tiempo real

5. **Guardar Cambios**
   - Click en "Guardar" (cambios en borrador)
   - Click en "Publicar" (cambios visibles para estudiantes)

**Editor Visual:**
- Bold, italic, listas con botones
- Insertar tablas con interfaz gráfica
- Añadir código con syntax highlighting
- Insertar imágenes con drag & drop

**Editor Markdown:**
- Para usuarios avanzados
- Control total sobre formato
- Más rápido para ediciones masivas

### Opción 2: Edición Directa de Archivos (Avanzado)

**Para profesores con conocimientos técnicos:**

1. **Acceder a los Archivos**
   - Clonar repositorio Git: `git clone https://github.com/webcadeveloper/DISTMAH-ATC-.git`
   - O acceder vía FTP/SFTP al servidor

2. **Editar con Editor de Código**
   - Recomendado: **VS Code**, Sublime Text, Notepad++
   - Abrir archivo: `universidad-autodesk/public/cursos/civil-3d-2026-basico/modulo-1-introduccion-civil3d/lecciones/leccion-1.md`

3. **Modificar Contenido**
   - Usar sintaxis Markdown:
     ```markdown
     # Título de Sección
     ## Subsección
     **Negrita** *Cursiva*
     - Lista item 1
     - Lista item 2
     ```

4. **Guardar y Sincronizar**
   - Si usas Git: `git add .`, `git commit -m "Actualizar lección 1"`, `git push`
   - Si usas FTP: Subir archivo modificado

### Sintaxis Markdown Básica

```markdown
# Título H1
## Título H2
### Título H3

**Texto en negrita**
*Texto en cursiva*

- Lista no ordenada
- Otro item

1. Lista ordenada
2. Segundo item

[Link a Autodesk](https://autodesk.com)

![Descripción de imagen](../imagenes/archivo.png)

| Columna 1 | Columna 2 |
|-----------|-----------|
| Dato 1    | Dato 2    |

```código de ejemplo```
```

---

## Gestión de Imágenes

### Placeholders de Imágenes

Todos los cursos incluyen **placeholders** para imágenes:

```markdown
![Interfaz de Civil 3D 2026](../imagenes/leccion-1-interfaz-civil3d.png)
```

**Formato del placeholder:**
- `![Descripción clara]` - Alt text para accesibilidad
- `(../imagenes/nombre-descriptivo.png)` - Ruta relativa a la imagen

### Cómo Subir Imágenes

#### Dashboard Web:

1. **En el Editor de Lección**
   - Posicionar cursor donde quieres la imagen
   - Click en botón "Insertar Imagen" (ícono de foto)
   - Drag & drop de tu captura de pantalla
   - O click en "Seleccionar Archivo"

2. **Opciones de Imagen**
   - Añadir texto alternativo (alt text)
   - Ajustar tamaño (ancho/alto)
   - Alineación (izquierda, centro, derecha)
   - Caption opcional

3. **Guardar**
   - La imagen se sube automáticamente a `/imagenes/`
   - Se inserta el código Markdown correcto

#### Directamente en Carpeta:

1. **Crear tu captura de pantalla**
   - Usar Civil 3D 2026, Revit 2026, etc.
   - Resolución recomendada: 1920x1080 (Full HD)
   - Formato: PNG (transparencias) o JPG (fotos)

2. **Nombrar Archivo**
   - Formato: `leccion-X-descripcion-clara.png`
   - Ejemplos:
     - `leccion-1-interfaz-ribbon.png`
     - `leccion-2-drawing-settings.png`
     - `ejercicio-1-superficie-completa.png`

3. **Subir a Carpeta**
   - Ubicación: `modulo-X-nombre/imagenes/`
   - Vía FTP, dashboard web, o Git

4. **Referenciar en Markdown**
   ```markdown
   ![Ribbon de Civil 3D mostrando Home Tab](../imagenes/leccion-1-interfaz-ribbon.png)
   ```

### Recomendaciones para Capturas

**Calidad:**
- Resolución mínima: 1280x720
- Resolución óptima: 1920x1080
- Formato preferido: PNG (para interfaces de software)

**Contenido:**
- Captura limpia sin elementos distractores
- Zoom apropiado para ver detalles
- Usar cursor para señalar elementos importantes
- Añadir anotaciones si es necesario (flechas, círculos)

**Herramientas recomendadas:**
- Windows: **Snipping Tool** (Windows 10) o **Snip & Sketch** (Windows 11)
- Avanzado: **ShareX** (gratis, con editor integrado)
- Mac: Command + Shift + 4

---

## Personalización Regional

### Adaptar a tu País/Región

Los cursos están diseñados para ser **adaptables regionalmente**.

#### Sistemas de Coordenadas

**Original (genérico):**
```markdown
Coordinate System: UTM Zone 19N, WGS84
```

**Personalización por país:**

**México (Ciudad de México):**
```markdown
Coordinate System: UTM Zone 13N, WGS84
Datum: ITRF2008
```

**Venezuela (Caracas):**
```markdown
Coordinate System: UTM Zone 19N, WGS84 / REGVEN
Datum: SIRGAS-REGVEN
```

**Chile (Santiago):**
```markdown
Coordinate System: UTM Zone 19S, WGS84
Datum: SIRGAS-Chile
```

**Colombia (Bogotá):**
```markdown
Coordinate System: MAGNA-SIRGAS / CTM12
```

#### Normas y Estándares

**Original (USA):**
```markdown
Normas aplicables: AASHTO Green Book
```

**Personalización:**

**México:**
```markdown
Normas aplicables:
- SCT - Normas Técnicas para Proyecto Geométrico
- SCT-N-PRY-CAR-1-01-002/00
```

**Chile:**
```markdown
Normas aplicables:
- MOP - Manual de Carreteras Volumen 3 (Instrucciones y Criterios de Diseño)
```

**Colombia:**
```markdown
Normas aplicables:
- INVIAS - Manual de Diseño Geométrico de Carreteras
```

#### Unidades y Formatos

**Todos los cursos usan sistema métrico**, pero puedes ajustar formatos:

**Elevaciones:**
- Internacional: `125.43 m`
- Venezuela: `125,43 m` (coma decimal)

**Estacionamiento:**
- USA: `STA 1+325.50`
- Métrico: `0+325.50` o `K0+325.50`

#### Ejemplos de Proyectos

Personaliza los ejercicios con proyectos locales:

**Original:**
```markdown
Ejercicio: Autopista interurbana de 50 km
```

**México:**
```markdown
Ejercicio: Libramiento de Querétaro - Tramo 5km
Diseño según SCT, velocidad 110 km/h
```

**Venezuela:**
```markdown
Ejercicio: Autopista Regional del Centro - Tramo Valencia-Maracay
Diseño según Normas MINFRA, velocidad 120 km/h
```

### Cómo Personalizar

1. **Identificar secciones a adaptar**
   - Sistemas de coordenadas
   - Normas y estándares
   - Ejemplos de proyectos
   - Unidades/formatos si aplica

2. **Editar archivos Markdown**
   - Buscar y reemplazar términos genéricos
   - Añadir notas específicas del país
   - Actualizar ejercicios con contexto local

3. **Guardar versión regional**
   - Opcional: Duplicar curso completo
   - Nombrar: `civil-3d-2026-basico-mexico`
   - Así tienes versión para cada país

---

## Actualización Anual de Cursos

### Ciclo de Autodesk

**Autodesk lanza nuevas versiones cada enero:**
- Enero 2025 → Autodesk Civil 3D 2025
- Enero 2026 → Autodesk Civil 3D 2026
- Enero 2027 → Autodesk Civil 3D 2027

### Proceso de Actualización

#### Opción 1: Actualización Incremental

**Cuando sale Civil 3D 2027:**

1. **Duplicar curso 2026**
   - Dashboard → "Civil 3D 2026 Básico"
   - Click en "Duplicar Curso"
   - Nuevo nombre: "Civil 3D 2027 Básico"

2. **Actualizar metadatos**
   - Editar `curso.json`
   - Cambiar `"version": "2026"` → `"version": "2027"`
   - Actualizar `"titulo"` y `"descripcion"`
   - Añadir nuevas características en `"novedades_2027"`

3. **Revisar "What's New" de Autodesk**
   - Consultar: https://help.autodesk.com/view/CIV3D/2027/ENU/WhatsNew/
   - Identificar nuevas características
   - Anotar cambios en la interfaz

4. **Actualizar lecciones afectadas**
   - Si hay nueva herramienta → Añadir sección en lección apropiada
   - Si cambió interfaz → Actualizar capturas de pantalla
   - Si hay workflow mejorado → Actualizar pasos

5. **Crear capturas nuevas**
   - Instalar Civil 3D 2027 (trial o licencia)
   - Recrear screenshots con nueva interfaz
   - Reemplazar imágenes antiguas

6. **Probar ejercicios**
   - Verificar que funcionan en versión 2027
   - Ajustar si hay cambios en comandos
   - Actualizar archivos DWG de ejemplo

7. **Publicar curso 2027**
   - Mantener curso 2026 disponible (estudiantes actuales)
   - Publicar curso 2027 para nuevas inscripciones
   - Precio: Mismo ($390 USD) o ajustado por inflación

**Tiempo estimado:** 2-5 días de trabajo

#### Opción 2: Actualización Completa

Para cambios mayores en Autodesk:

1. **Evaluar magnitud de cambios**
   - Leer "What's New" completamente
   - Si hay cambios >30% → Considerar reescritura

2. **Priorizar módulos afectados**
   - Algunos módulos no cambian (conceptos básicos)
   - Enfocarse en módulos con novedades

3. **Reescribir secciones necesarias**
   - Mantener estructura general
   - Actualizar contenido técnico
   - Añadir nuevas lecciones si aplica

### Versionado de Cursos

**Nomenclatura:**
- `civil-3d-2026-basico` ← Versión actual
- `civil-3d-2027-basico` ← Versión siguiente
- Mantener ambos activos simultáneamente

**En `curso.json`:**
```json
{
  "id": "civil-3d-2027-basico",
  "version": "2027",
  "actualizacion": "2027-01-15",
  "vigencia": "2027"
}
```

---

## Best Practices para Instructores

### Antes de Impartir el Curso

1. **Revisar contenido completo**
   - Leer todas las lecciones del módulo
   - Verificar que entiendes todos los conceptos
   - Probar ejercicios prácticos

2. **Preparar software**
   - Instalar Autodesk Civil 3D 2026 (o versión actual)
   - Configurar licencia educativa/comercial
   - Preparar archivos DWG de ejemplo

3. **Crear material complementario**
   - Videos demostrativos (opcional)
   - Presentaciones PowerPoint de soporte
   - Checklists para estudiantes

4. **Adaptar a tu audiencia**
   - Si son principiantes → Añadir más explicaciones básicas
   - Si son avanzados → Acelerar conceptos básicos, profundizar avanzados
   - Si son de región específica → Aplicar personalización regional

### Durante la Impartición

1. **Seguir estructura del curso**
   - Los módulos están diseñados progresivamente
   - No saltar temas (cada lección construye sobre la anterior)
   - Respetar tiempos estimados

2. **Fomentar práctica**
   - Cada lección tiene ejercicio práctico
   - Asegurar que estudiantes completen ejercicios
   - Revisar entregables

3. **Responder preguntas**
   - Usar sección "Evaluación" al final de cada lección
   - Añadir preguntas frecuentes (FAQ) si detectas patrones

4. **Recopilar feedback**
   - Preguntar a estudiantes qué fue confuso
   - Anotar secciones que necesitan mejora
   - Actualizar contenido basado en feedback

### Después del Curso

1. **Actualizar contenido**
   - Editar lecciones basado en feedback
   - Añadir aclaraciones donde hubo confusión
   - Corregir errores detectados

2. **Mejorar ejercicios**
   - Si ejercicio fue muy difícil → Simplificar o añadir más guía
   - Si fue muy fácil → Añadir complejidad o bonus

3. **Compartir con equipo**
   - Comunicar mejoras al equipo de profesores
   - Versionar cambios en Git
   - Documentar en README del módulo

---

## Gestión de Versiones con Git

### ¿Por qué Git?

- ✅ Control de cambios (quién modificó qué y cuándo)
- ✅ Revertir errores fácilmente
- ✅ Colaboración entre múltiples profesores
- ✅ Backup automático en la nube

### Workflow Básico

**Configuración inicial (una vez):**

```bash
# Clonar repositorio
git clone https://github.com/webcadeveloper/DISTMAH-ATC-.git

# Entrar a carpeta
cd DISTMAH-ATC-/universidad-autodesk
```

**Editar contenido:**

1. Modificar archivos .md con tu editor preferido
2. Guardar cambios

**Publicar cambios:**

```bash
# Ver qué archivos cambiaron
git status

# Añadir cambios
git add public/cursos/civil-3d-2026-basico/modulo-1-introduccion-civil3d/lecciones/leccion-1.md

# Crear commit con mensaje descriptivo
git commit -m "Actualizar lección 1 con ejemplos de México"

# Subir a GitHub
git push
```

**Sincronizar cambios de otros profesores:**

```bash
# Descargar últimos cambios
git pull
```

### Mensajes de Commit Profesionales

**Buenos ejemplos:**
- `"Actualizar lección 2 con normas SCT México"`
- `"Corregir error tipográfico en ejercicio 3"`
- `"Añadir capturas de pantalla a lección 5"`
- `"Mejorar explicación de surfaces en módulo 2"`

**Malos ejemplos:**
- `"cambios"` ❌ (muy genérico)
- `"fix"` ❌ (no dice qué se arregló)
- `"asdf"` ❌ (sin sentido)

---

## Soporte Técnico

### Contactos

**Soporte General:**
- Email: soporte@distmah.com.ve
- WhatsApp: +58 XXX-XXXXXXX
- Horario: Lunes a Viernes 9am-6pm

**Soporte Técnico Plataforma:**
- Email: dev@distmah.com.ve
- Para problemas con dashboard, login, subida de archivos

**Coordinación Académica:**
- Email: academico@distmah.com.ve
- Para consultas sobre contenido de cursos

### Recursos Adicionales

**Documentación Oficial Autodesk:**
- Civil 3D 2026: https://help.autodesk.com/view/CIV3D/2026/ENU/
- Revit 2026: https://help.autodesk.com/view/RVT/2026/ENU/
- AutoCAD 2026: https://help.autodesk.com/view/ACD/2026/ENU/

**Comunidad:**
- Autodesk Forums: https://forums.autodesk.com/
- YouTube Autodesk: https://www.youtube.com/@autodesk

**Capacitación para Profesores:**
- Autodesk Certified Instructor (ACI) program
- Webinars mensuales de actualización

---

## Preguntas Frecuentes (FAQ)

### ¿Puedo cambiar el precio del curso?

**Sí.** Editar `curso.json`:
```json
{
  "precio": 450,
  "moneda": "USD"
}
```

### ¿Puedo añadir lecciones adicionales?

**Sí.**
1. Crear nuevo archivo: `leccion-7.md` (si el módulo tenía 6)
2. Copiar estructura de una lección existente
3. Actualizar `README.md` del módulo
4. Actualizar `curso.json` (incrementar número de lecciones)

### ¿Puedo eliminar lecciones?

**Sí, pero con cuidado.**
- Asegurar que lecciones posteriores no dependan de la eliminada
- Actualizar `README.md` y `curso.json`
- Renombrar lecciones subsecuentes para mantener numeración consecutiva

### ¿Puedo crear un curso completamente nuevo?

**Sí.**
1. Duplicar estructura de un curso existente
2. Renombrar carpetas
3. Editar todo el contenido
4. Crear `curso.json` nuevo
5. Notificar a equipo técnico para integración en plataforma

### ¿Las imágenes tienen copyright?

**Los placeholders no tienen imágenes.** Tú creas tus propias capturas:
- Capturas de pantalla de software Autodesk → OK (uso educativo)
- Imágenes de internet → NO (verificar licencia)
- Tus propias fotos de proyectos → OK
- Diagramas creados por ti → OK

### ¿Qué pasa si rompo algo al editar?

**Git al rescate:**
```bash
# Ver historial de cambios
git log

# Revertir a versión anterior
git checkout [commit-id] archivo.md

# O restaurar todo el repositorio
git reset --hard origin/master
```

Siempre puedes volver a una versión anterior.

### ¿Puedo traducir cursos a otro idioma?

**Sí, pero contactar a equipo técnico primero.**
- El contenido está en español
- Traducir a inglés/portugués requiere duplicar estructura completa
- Notificar para configurar curso multi-idioma en plataforma

---

## Anexo: Checklist de Actualización Anual

### Cuando Autodesk lanza nueva versión (ej: 2027)

**Preparación (1 día):**
- [ ] Leer "What's New" oficial de Autodesk
- [ ] Listar nuevas características
- [ ] Identificar módulos/lecciones afectados
- [ ] Descargar trial de la nueva versión

**Duplicación (2 horas):**
- [ ] Duplicar curso 2026 → 2027 en dashboard
- [ ] O clonar carpeta: `cp -r civil-3d-2026-basico civil-3d-2027-basico`
- [ ] Actualizar `curso.json` (version, titulo, novedades)

**Actualización de Contenido (2-4 días):**
- [ ] Revisar módulo 1 (interfaz suele cambiar)
- [ ] Actualizar lecciones con nuevas características
- [ ] Añadir notas "Nuevo en 2027" donde aplique
- [ ] Revisar ejercicios (verificar que funcionen)

**Capturas de Pantalla (1-2 días):**
- [ ] Instalar nueva versión de Autodesk
- [ ] Recrear capturas con nueva interfaz
- [ ] Reemplazar imágenes antiguas

**Pruebas (1 día):**
- [ ] Seguir curso completo como estudiante
- [ ] Verificar todos los links
- [ ] Probar todos los ejercicios
- [ ] Corregir errores encontrados

**Publicación (1 hora):**
- [ ] Commit y push a Git
- [ ] Notificar a equipo técnico
- [ ] Activar curso en plataforma
- [ ] Promocionar a estudiantes

**Total estimado: 5-8 días de trabajo**

---

## Conclusión

Este manual te proporciona todas las herramientas necesarias para:

- ✅ Editar contenido de cursos completamente
- ✅ Personalizar según tu región
- ✅ Actualizar anualmente con nuevas versiones de Autodesk
- ✅ Gestionar imágenes y recursos
- ✅ Colaborar con otros profesores vía Git

**Recuerda:**
- Todo es 100% editable (Markdown)
- Sin restricciones técnicas
- Adaptable a cualquier región
- Control total sobre el contenido

**Para soporte:**
- Email: soporte@distmah.com.ve
- WhatsApp: +58 XXX-XXXXXXX

---

**¡Éxito en tus clases!** 🎓

*DISTMAH Universidad Autodesk - Authorized Training Center*
