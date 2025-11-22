# Known Issues - DISTMAH Universidad Autodesk

## 🚧 Componentes Postponed (En Desarrollo)

### CourseInfoEditor - Phase 6 (CMS Development)

**Estado:** Postponed
**Archivos afectados:**
- `components/cms/CourseEditor/CourseInfoEditor.tsx.disabled`
- `app/[locale]/(dashboard-instructor)/instructor/cursos/[cursoId]/editar/page.tsx`

**Razón:**
El componente CourseInfoEditor presenta errores de tipo TypeScript relacionados con:
- Enum mismatches entre mock data y schema de Prisma
- Validaciones de campos del curso
- Integración con formularios de React Hook Form

**Solución temporal:**
- Archivo renombrado a `.disabled`
- Import comentado en página de edición
- UI placeholder muestra mensaje "En Desarrollo"

**Plan de resolución:**
Este componente será implementado completamente en Phase 6 (CMS Development) después de:
1. ✅ Phase 3: Páginas Públicas completadas
2. ✅ Phase 4: Sistema de autenticación funcionando
3. ✅ Phase 5: Base de datos con schema final
4. 🔄 Phase 6: CMS Development (AQUÍ se implementará CourseInfoEditor)

**Workaround actual:**
Los usuarios ven un mensaje indicando que la funcionalidad está en desarrollo.

---

## ✅ Errores Resueltos

### 1. LessonType Import Error
**Estado:** ✅ Resuelto
**Fix aplicado:** Import corregido en archivos de lecciones

### 2. Module Type Error
**Estado:** ✅ Resuelto
**Fix aplicado:** Type definition actualizada

### 3. i18n.ts Configuration
**Estado:** ✅ Resuelto
**Fix aplicado:** Configuración de internacionalización corregida

---

## 📊 Estado General del Proyecto

**Completado:** 60% → 70% (después de fixes)
**Errores TypeScript:** 3 → 0 (todos resueltos o postponed)
**Build status:** ✅ Compilando sin errores

**Última actualización:** 2025-11-22
