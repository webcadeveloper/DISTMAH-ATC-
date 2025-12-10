# Scripts de Gestión de Lecciones - DISTMAH ATC

Esta carpeta contiene scripts útiles para administrar el contenido de las lecciones en la plataforma DISTMAH ATC.

---

## Scripts Disponibles

### 1. `update-lessons-content.ts`

**Propósito:** Actualiza masivamente todas las lecciones que tengan contenido placeholder con contenido HTML profesional.

**Uso:**
```bash
npx tsx scripts/update-lessons-content.ts
```

**Qué hace:**
- Escanea todas las lecciones en la base de datos
- Identifica lecciones con contenido placeholder genérico
- Genera contenido HTML profesional basado en:
  - Título del curso
  - Software (AutoCAD, Civil 3D, Revit, Navisworks)
  - Categoría y nivel
  - Título del módulo y lección
- Actualiza la base de datos con el nuevo contenido
- Reporta estadísticas de actualización

**Cuándo usar:**
- Después de agregar nuevos cursos con contenido placeholder
- Para regenerar contenido de lecciones específicas
- Cuando se detecten lecciones sin contenido profesional

---

### 2. `show-example-lesson.ts`

**Propósito:** Muestra un ejemplo completo de contenido generado.

**Uso:**
```bash
npx tsx scripts/show-example-lesson.ts
```

**Qué hace:**
- Busca una lección específica en la base de datos
- Muestra el contenido HTML completo
- Útil para revisar la calidad del contenido generado

**Cuándo usar:**
- Para verificar el formato del contenido generado
- Como referencia al crear contenido manualmente
- Para copiar estructura HTML en nuevas lecciones

---

### 3. `verify-lessons-stats.ts`

**Propósito:** Genera estadísticas completas de la base de datos de lecciones.

**Uso:**
```bash
npx tsx scripts/verify-lessons-stats.ts
```

**Qué hace:**
- Cuenta total de cursos, módulos, y lecciones
- Agrupa cursos por categoría
- Calcula duración total del contenido
- Verifica integridad de datos
- Lista top 5 cursos por número de lecciones

**Cuándo usar:**
- Para auditoría mensual de la plataforma
- Antes y después de actualizaciones masivas
- Para reportes a administración
- Para verificar integridad de la base de datos

---

### 4. `show-civil3d-example.ts`

**Propósito:** Muestra ejemplos de contenido de diferentes categorías de software.

**Uso:**
```bash
npx tsx scripts/show-civil3d-example.ts
```

**Qué hace:**
- Busca lecciones de Civil 3D, Revit, y Navisworks
- Muestra fragmentos del contenido generado
- Útil para comparar contenido entre categorías

**Cuándo usar:**
- Para verificar que el contenido se adapte correctamente a cada software
- Como referencia al crear contenido para diferentes categorías
- Para QA de contenido generado

---

## Requisitos

### Configuración Necesaria

1. **Base de datos configurada** en `.env`:
   ```env
   DATABASE_URL="postgresql://..."
   ```

2. **Dependencias instaladas**:
   ```bash
   npm install
   ```

3. **Prisma Client generado**:
   ```bash
   npx prisma generate
   ```

### Permisos

- Los scripts requieren acceso de **lectura/escritura** a la base de datos
- Se recomienda ejecutar con precaución en producción
- Siempre revisar el código antes de ejecutar

---

## Flujo de Trabajo Recomendado

### Para Agregar Nuevo Curso

1. Crear curso, módulos, y lecciones con títulos descriptivos
2. Dejar `richText` como null o con placeholder temporal
3. Ejecutar `update-lessons-content.ts` para generar contenido base
4. Revisar contenido generado con `show-example-lesson.ts`
5. Personalizar contenido desde dashboard de instructor

### Para Auditoría Periódica

1. Ejecutar `verify-lessons-stats.ts` mensualmente
2. Verificar que no haya lecciones sin contenido
3. Revisar duración total vs. expectativas
4. Identificar cursos con contenido incompleto

### Para Control de Calidad

1. Ejecutar `show-civil3d-example.ts` para revisar ejemplos
2. Verificar que el contenido sea apropiado para cada categoría
3. Comparar con documentación oficial de Autodesk
4. Solicitar feedback de instructores

---

## Personalización de Scripts

### Modificar Contenido Generado

Editar función `generateProfessionalContent()` en `update-lessons-content.ts`:

```typescript
function generateProfessionalContent(lesson: LessonData): string {
  // Personalizar estructura HTML aquí
  // Agregar secciones adicionales
  // Modificar formato de ejercicios
  // Ajustar estilos CSS inline
}
```

### Agregar Nueva Categoría de Software

Editar función `generateSpecificContent()`:

```typescript
case 'NUEVA_CATEGORIA':
  return `
    <h2>Contenido Específico para Nueva Categoría</h2>
    <p>Descripción personalizada...</p>
  `;
```

### Detectar Placeholders Diferentes

Editar función `hasPlaceholderContent()`:

```typescript
const placeholderPhrases = [
  'Nuevo placeholder a detectar',
  'Otra frase placeholder',
];
```

---

## Solución de Problemas

### Error: "Cannot connect to database"

**Solución:**
1. Verificar que DATABASE_URL en `.env` esté correcto
2. Verificar conectividad a internet (Neon requiere conexión)
3. Verificar que Neon no esté en mantenimiento

### Error: "Prisma Client not generated"

**Solución:**
```bash
npx prisma generate
```

### Script se ejecuta pero no actualiza lecciones

**Posibles causas:**
1. Lecciones ya tienen contenido profesional (no se detecta placeholder)
2. La función de detección no reconoce el placeholder usado
3. Error silencioso en generación de contenido

**Solución:**
- Revisar logs del script
- Ejecutar con modo verbose si está disponible
- Verificar manualmente una lección en la base de datos

---

## Mejores Prácticas

### Antes de Ejecutar en Producción

1. ✅ Hacer backup de base de datos
2. ✅ Probar script en ambiente de desarrollo primero
3. ✅ Revisar código para cambios recientes
4. ✅ Verificar que no haya otros procesos modificando lecciones
5. ✅ Tener plan de rollback si algo sale mal

### Durante Ejecución

1. 📊 Monitorear logs en tiempo real
2. ⏱️ Anotar tiempo de ejecución para futuras referencias
3. 🔍 Verificar que contador de lecciones actualizadas incremente
4. ⚠️ Estar atento a errores o warnings

### Después de Ejecutar

1. ✅ Verificar estadísticas con `verify-lessons-stats.ts`
2. 🔍 Revisar ejemplos con `show-example-lesson.ts`
3. 📝 Documentar resultados en bitácora de cambios
4. 👥 Notificar a instructores sobre actualización
5. 📊 Solicitar feedback de usuarios sobre calidad del contenido

---

## Contacto y Soporte

Para preguntas o problemas con estos scripts:

1. Revisar este README primero
2. Verificar logs de error
3. Consultar documentación de Prisma
4. Contactar al equipo de desarrollo

---

*Última actualización: 2025-11-28*
*Versión: 1.0*
