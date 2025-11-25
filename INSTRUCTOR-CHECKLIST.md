# Checklist de Implementación - API de Edición de Cursos

## ✅ Archivos Creados (Completado)

### APIs - 5 archivos
- [x] `app/api/instructor/cursos/[slug]/lecciones/[moduleId]/[lessonSlug]/route.ts`
- [x] `app/api/instructor/cursos/[slug]/lecciones/[moduleId]/create/route.ts`
- [x] `app/api/instructor/cursos/[slug]/modulos/[moduleId]/route.ts`
- [x] `app/api/instructor/cursos/[slug]/curso-json/route.ts`
- [x] `app/api/instructor/cursos/[slug]/imagenes/upload/route.ts`

### Componentes - 4 archivos
- [x] `components/instructor/MarkdownEditor.tsx`
- [x] `components/instructor/LessonEditor.tsx`
- [x] `components/instructor/ModuleEditor.tsx`
- [x] `components/instructor/index.ts`

### Utilidades y Types - 2 archivos
- [x] `lib/instructor-utils.ts`
- [x] `types/instructor.ts`

### Documentación - 4 archivos
- [x] `INSTRUCTOR-API-README.md`
- [x] `INSTRUCTOR-QUICKSTART.md`
- [x] `INSTRUCTOR-API-SUMMARY.md`
- [x] `INSTRUCTOR-CHECKLIST.md` (este archivo)

**Total: 15 archivos creados**

---

## 📋 Pasos de Implementación

### 1. Verificación del Sistema (5 min)

- [ ] Verificar que Next.js está corriendo
- [ ] Verificar que las dependencias están instaladas:
  ```bash
  npm list gray-matter react-markdown remark-gfm
  ```
- [ ] Verificar estructura de carpetas en `public/cursos/`

### 2. Integración Básica (30 min)

- [ ] Crear ruta de prueba para editar lección:
  ```tsx
  // app/[locale]/(dashboard-instructor)/instructor/test-editor/page.tsx
  import { LessonEditor } from '@/components/instructor';

  export default function TestEditor() {
    return (
      <LessonEditor
        courseSlug="revit-2026-basico"
        moduleId="modulo-1-introduccion"
        lessonSlug="leccion-1"
      />
    );
  }
  ```

- [ ] Navegar a `/instructor/test-editor`
- [ ] Verificar que el editor carga correctamente
- [ ] Intentar editar contenido
- [ ] Guardar cambios
- [ ] Verificar que se creó backup

### 3. Pruebas de Funcionalidad (1 hora)

#### Edición de Lecciones
- [ ] GET lección existente
- [ ] Editar frontmatter (título, descripción, duración)
- [ ] Editar contenido Markdown
- [ ] Guardar cambios
- [ ] Verificar backup creado
- [ ] Verificar changelog actualizado

#### Subida de Imágenes
- [ ] Upload vía botón "Imagen"
- [ ] Upload vía paste (Ctrl+V)
- [ ] Verificar imagen en carpeta `imagenes/`
- [ ] Verificar URL generada en Markdown
- [ ] Verificar preview de imagen

#### Preview de Markdown
- [ ] Alternar entre Editar y Vista Previa
- [ ] Verificar formato (negrita, cursiva, etc.)
- [ ] Verificar imágenes se muestran
- [ ] Verificar enlaces funcionan

#### Eliminación Segura
- [ ] Eliminar una lección
- [ ] Verificar que se movió a `.trash/`
- [ ] Verificar que NO se eliminó permanentemente

### 4. Integración con Dashboard (2 horas)

- [ ] Mapear IDs de base de datos a slugs de archivos
- [ ] Crear función helper:
  ```typescript
  async function getCourseSlugById(id: string): Promise<string>
  ```

- [ ] Integrar en rutas existentes:
  - [ ] Editar lección desde lista de lecciones
  - [ ] Editar módulo desde lista de módulos
  - [ ] Crear nueva lección
  - [ ] Crear nuevo módulo

- [ ] Agregar botones de acción:
  - [ ] "Editar" en cada lección
  - [ ] "Editar" en cada módulo
  - [ ] "Nueva Lección"
  - [ ] "Nuevo Módulo"

### 5. Seguridad y Permisos (1 hora)

- [ ] Crear middleware de autenticación:
  ```typescript
  // middleware para /api/instructor/*
  ```

- [ ] Verificar que usuario es instructor
- [ ] Verificar que instructor tiene acceso al curso
- [ ] Agregar rate limiting para uploads
- [ ] Validar permisos antes de editar/eliminar

### 6. Testing (2 horas)

#### Tests Manuales
- [ ] Editar lección con éxito
- [ ] Editar módulo con éxito
- [ ] Subir imagen < 5MB
- [ ] Intentar subir imagen > 5MB (debe fallar)
- [ ] Intentar subir archivo no-imagen (debe fallar)
- [ ] Eliminar lección
- [ ] Restaurar desde backup
- [ ] Verificar changelog

#### Tests de Error
- [ ] Intentar editar lección inexistente
- [ ] Intentar editar sin permisos
- [ ] Intentar subir sin courseSlug
- [ ] Forzar error durante guardado (verificar restauración)

### 7. Optimizaciones (opcional)

- [ ] Agregar autosave cada 30 segundos
- [ ] Agregar indicador "Sin guardar" si hay cambios
- [ ] Agregar confirmación antes de salir con cambios
- [ ] Agregar preview de imagen antes de insertar
- [ ] Agregar gallery de imágenes del curso

### 8. Documentación para el Equipo

- [ ] Crear guía para instructores (cómo editar cursos)
- [ ] Documentar estructura de archivos
- [ ] Documentar proceso de backup/restauración
- [ ] Crear video tutorial de uso

---

## 🚨 Problemas Comunes y Soluciones

### Error: "Failed to read lesson"
**Causa:** Archivo no existe o ruta incorrecta
**Solución:** Verificar que el slug, moduleId, lessonSlug son correctos

### Error: "Failed to upload image"
**Causa:** Carpeta no existe o permisos
**Solución:** Verificar que `public/cursos/[slug]/imagenes/` existe

### Preview no muestra Markdown
**Causa:** Dependencias no instaladas
**Solución:** `npm install react-markdown remark-gfm`

### Cambios no se guardan
**Causa:** Error durante escritura
**Solución:** Verificar logs del servidor, revisar permisos de archivo

---

## 📊 Métricas de Éxito

- [ ] Instructores pueden editar lecciones sin ayuda técnica
- [ ] 0 pérdidas de datos (gracias a backups)
- [ ] Tiempo de edición reducido en 80%
- [ ] Sistema de papelera evita eliminaciones accidentales
- [ ] Changelog permite auditoría completa

---

## 🎯 Próximos Pasos Post-Implementación

### Corto Plazo (1-2 semanas)
- [ ] Recolectar feedback de instructores
- [ ] Ajustar UI según usabilidad
- [ ] Agregar shortcuts de teclado
- [ ] Optimizar performance

### Mediano Plazo (1-2 meses)
- [ ] Sistema de versionado
- [ ] Edición colaborativa
- [ ] Templates de lecciones
- [ ] Sugerencias IA

### Largo Plazo (3+ meses)
- [ ] Importar desde Word/PDF
- [ ] Exportar a diferentes formatos
- [ ] Analytics de edición
- [ ] Sistema de revisión/aprobación

---

## 📞 Contacto

**Problemas técnicos:**
- Revisar `INSTRUCTOR-API-README.md` (documentación completa)
- Revisar `INSTRUCTOR-QUICKSTART.md` (guía rápida)
- GitHub Issues
- Email: tech@distmah.com

**Documentación:**
- README completo: `INSTRUCTOR-API-README.md`
- Guía rápida: `INSTRUCTOR-QUICKSTART.md`
- Resumen ejecutivo: `INSTRUCTOR-API-SUMMARY.md`

---

**Status:** ✅ Sistema completo y listo para implementación
**Fecha:** Noviembre 2024
**Plataforma:** DISTMAH ATC - Authorized Training Center Autodesk
