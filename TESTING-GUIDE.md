# Gu\u00eda de Testing - Funcionalidades Implementadas

## 1. B\u00daSQUEDA Y FILTROS DE CURSOS

### Archivo implementado
- `app/[locale]/(public)/cursos/CursosClientPage.tsx` - Componente cliente con toda la l\u00f3gica

### C\u00f3mo probar:

1. **B\u00fasqueda Full-Text**
   - Ir a `/cursos`
   - Escribir en el campo de b\u00fasqueda (ej: "AutoCAD", "Revit", "Civil")
   - Verificar que filtra en tiempo real por t\u00edtulo, descripci\u00f3n, categor\u00eda, instructor

2. **Filtros por Categor\u00eda**
   - Usar el dropdown "Categor\u00eda"
   - Seleccionar "AutoCAD", "Revit", "Civil3D", o "Navisworks"
   - Verificar que solo muestra cursos de esa categor\u00eda

3. **Filtros por Nivel**
   - Usar el dropdown "Nivel"
   - Seleccionar "B\u00e1sico", "Intermedio", o "Avanzado"
   - Verificar que filtra correctamente

4. **Filtros por Precio**
   - Usar el dropdown "Precio"
   - Seleccionar rangos: "Gratis", "$0-$100", "$100-$300", "$300+"
   - Verificar que filtra por rango de precio

5. **Ordenamiento (Sorting)**
   - Usar el dropdown "Ordenar por"
   - Probar cada opci\u00f3n:
     - M\u00e1s reciente (por fecha de actualizaci\u00f3n)
     - M\u00e1s popular (por n\u00famero de estudiantes)
     - Mejor calificado (por rating)
     - Precio: menor a mayor
     - Precio: mayor a menor
     - Alfab\u00e9tico A-Z

6. **Contador de Resultados**
   - Verificar que muestra "Mostrando X de Y cursos"
   - Se actualiza en tiempo real con los filtros

7. **Limpiar Filtros**
   - Aplicar varios filtros
   - Click en "Limpiar filtros"
   - Verificar que resetea todo

8. **Badges de Filtros Activos**
   - Aplicar filtros
   - Verificar que aparecen badges con los filtros activos
   - Click en la X de cada badge para remover individualmente

### Casos de prueba:

```
Test 1: B\u00fasqueda + Categor\u00eda
- Buscar "2026" + Categor\u00eda "AutoCAD"
- Debe mostrar solo cursos AutoCAD 2026

Test 2: Precio + Nivel
- Precio "$100-$300" + Nivel "B\u00e1sico"
- Debe filtrar correctamente

Test 3: Sin resultados
- Buscar algo que no existe "zzzzz"
- Debe mostrar mensaje "No se encontraron cursos"
```

---

## 2. LIVE CLASSES - INSTRUCTOR

### Archivos implementados
- `app/instructor/cursos/[id]/clases-en-vivo/page.tsx`
- `app/api/live-classes/route.ts` (GET, POST)
- `app/api/live-classes/[id]/route.ts` (GET, PATCH, DELETE)

### C\u00f3mo probar:

1. **Acceso a la p\u00e1gina**
   - Login como INSTRUCTOR
   - Navegar a `/instructor/cursos/[id]/clases-en-vivo`
   - Debe cargar la p\u00e1gina con lista de clases

2. **Programar nueva clase**
   - Click en "Programar nueva clase"
   - Llenar formulario:
     - T\u00edtulo: "Introducci\u00f3n a AutoCAD 2026"
     - Descripci\u00f3n: "Sesi\u00f3n introductoria..."
     - Fecha: [Fecha futura]
     - Hora: "10:00"
     - Duraci\u00f3n: "60" minutos
   - Click "Programar clase"
   - Verificar:
     - Toast de \u00e9xito
     - Clase aparece en la tabla
     - Se cre\u00f3 evento en Microsoft Calendar
     - Estudiantes recibieron email

3. **Tabla de clases**
   - Verificar columnas:
     - T\u00edtulo + Descripci\u00f3n
     - Fecha y hora formateada
     - Duraci\u00f3n en minutos
     - Botones de acci\u00f3n

4. **Copiar link de Teams**
   - Click en icono de "Copy"
   - Verificar toast "\u00e9xito"
   - Pegar en navegador
   - Debe abrir Teams meeting

5. **Abrir en Teams**
   - Click en icono de "External Link"
   - Debe abrir link en nueva pesta\u00f1a

6. **Eliminar clase**
   - Click en icono de "Trash"
   - Confirmar eliminaci\u00f3n
   - Verificar:
     - Toast de \u00e9xito
     - Clase desaparece de la tabla
     - Evento eliminado de Microsoft Calendar

### APIs a probar:

```bash
# GET - Listar clases del curso
GET /api/live-classes?courseId=autocad-2d-2026

# POST - Crear clase
POST /api/live-classes
{
  "courseId": "autocad-2d-2026",
  "title": "Clase de prueba",
  "description": "Descripci\u00f3n de prueba",
  "startDate": "2025-12-01T10:00:00Z",
  "durationMinutes": 60
}

# DELETE - Eliminar clase
DELETE /api/live-classes/[id]
```

---

## 3. LIVE CLASSES - ESTUDIANTE

### Archivos implementados
- `app/estudiante/clases-en-vivo/page.tsx`

### C\u00f3mo probar:

1. **Acceso a la p\u00e1gina**
   - Login como ESTUDIANTE
   - Navegar a `/estudiante/clases-en-vivo`
   - Debe cargar clases de cursos inscritos

2. **Filtro por curso**
   - Usar dropdown "Filtrar por curso"
   - Seleccionar un curso espec\u00edfico
   - Verificar que filtra correctamente

3. **Card de clase pr\u00f3xima**
   - Verificar elementos:
     - T\u00edtulo de la clase
     - Nombre del curso
     - Fecha formateada en espa\u00f1ol
     - Hora de inicio y fin
     - Instructor
     - Bot\u00f3n "Abrir en Teams"

4. **Badge "En vivo"**
   - Si una clase est\u00e1 en curso:
     - Debe mostrar badge rojo "En vivo"
     - Punto pulsante animado
     - Bot\u00f3n cambiar a "Unirse ahora"

5. **Clases pasadas**
   - Scroll hacia abajo
   - Verificar secci\u00f3n "Clases Pasadas"
   - Cards en opacidad reducida

6. **Sin clases programadas**
   - Si no hay clases:
     - Icono de calendario
     - Mensaje "No hay clases pr\u00f3ximas programadas"
     - Link "Ver todas las clases"

---

## 4. WIDGET PR\u00d3XIMA CLASE

### Archivos implementados
- `components/dashboard/NextLiveClass.tsx`
- `components/ui/countdown.tsx`

### C\u00f3mo probar:

1. **Integrar en Dashboard**
   - Importar componente en dashboard del estudiante:
   ```tsx
   import { NextLiveClass } from '@/components/dashboard/NextLiveClass';

   <NextLiveClass />
   ```

2. **Con clase pr\u00f3xima**
   - Verificar elementos:
     - T\u00edtulo de la clase
     - Nombre del curso
     - Fecha y hora
     - Instructor
     - Countdown timer animado
     - Bot\u00f3n "Abrir en Teams"
     - Link "Ver todas las clases"

3. **Countdown Timer**
   - Verificar que actualiza cada segundo
   - Formato: D\u00edas, Horas, Minutos, Segundos
   - Si falta < 1 d\u00eda, no muestra d\u00edas
   - Cuando llega a 0: muestra "La clase ha comenzado"

4. **Badge "En vivo"**
   - Si clase est\u00e1 en curso:
     - Badge rojo en esquina superior
     - Punto pulsante blanco
     - Texto "En vivo"
     - Bot\u00f3n "Unirse ahora" en verde

5. **Sin clases**
   - Icono de calendario
   - Mensaje "No hay clases programadas"
   - Link "Ver todas las clases"

### Casos de prueba del Countdown:

```
Test 1: Clase en 2 d\u00edas
- Debe mostrar: 2 d\u00edas, X horas, X minutos, X segundos

Test 2: Clase en 30 minutos
- Debe mostrar: 0 horas, 30 minutos, X segundos

Test 3: Clase en 10 segundos
- Debe actualizar cada segundo
- Llegar a 0 y mostrar "La clase ha comenzado"

Test 4: Clase en curso
- No mostrar countdown
- Mostrar badge "En vivo"
- Bot\u00f3n "Unirse ahora"
```

---

## 5. COMPONENTE COUNTDOWN

### Archivo implementado
- `components/ui/countdown.tsx`

### Props:
```typescript
interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}
```

### C\u00f3mo usar:

```tsx
import { Countdown } from '@/components/ui/countdown';

<Countdown
  targetDate={new Date('2025-12-01T10:00:00')}
  onComplete={() => console.log('Clase iniciada!')}
/>
```

### Verificar:
1. Actualiza cada segundo
2. Formato correcto (2 d\u00edgitos con padding)
3. Muestra d\u00edas solo si > 0
4. Al llegar a 0: muestra "La clase ha comenzado"
5. Callback `onComplete` se ejecuta al terminar

---

## INTEGRACI\u00d3N COMPLETA

### Flujo completo a probar:

1. **Instructor programa clase**
   - Login como instructor
   - Ir a curso \u2192 Clases en vivo
   - Programar clase para ma\u00f1ana 10:00 AM
   - Verificar creaci\u00f3n exitosa

2. **Sistema env\u00eda invitaciones**
   - Verificar que se cre\u00f3 evento en Microsoft Calendar
   - Verificar emails enviados a estudiantes
   - Link de Teams v\u00e1lido

3. **Estudiante ve clase**
   - Login como estudiante
   - Dashboard muestra widget con countdown
   - P\u00e1gina de clases muestra la clase
   - Puede copiar/abrir link de Teams

4. **D\u00eda de la clase**
   - 30 min antes: countdown muestra tiempo restante
   - Al inicio: badge "En vivo" aparece
   - Durante: estudiante puede unirse
   - Despu\u00e9s: clase pasa a "Clases Pasadas"

---

## VALIDACIONES Y SEGURIDAD

### Verificar:

1. **Autorizaci\u00f3n**
   - Solo INSTRUCTOR puede crear/eliminar clases
   - Solo del curso que le pertenece
   - ESTUDIANTE solo ve clases de cursos inscritos

2. **Validaci\u00f3n de datos**
   - Fecha no puede ser en el pasado
   - Duraci\u00f3n entre 30-180 minutos
   - Todos los campos requeridos

3. **Error handling**
   - Sin cuenta M365: error claro
   - Curso no existe: error 404
   - Sin permisos: error 403

4. **UI/UX**
   - Loading states mientras carga
   - Toast notifications para feedback
   - Confirmaci\u00f3n antes de eliminar
   - Responsive en mobile

---

## CHECKLIST FINAL

- [ ] B\u00fasqueda de cursos funciona
- [ ] Filtros por categor\u00eda, nivel, precio funcionan
- [ ] Ordenamiento funciona correctamente
- [ ] Contador de resultados correcto
- [ ] Instructor puede programar clases
- [ ] Clases aparecen en tabla
- [ ] Link de Teams se copia correctamente
- [ ] Eliminar clase funciona
- [ ] Estudiante ve clases de sus cursos
- [ ] Filtro por curso funciona
- [ ] Badge "En vivo" aparece cuando corresponde
- [ ] Widget dashboard funciona
- [ ] Countdown actualiza en tiempo real
- [ ] APIs responden correctamente
- [ ] Autorizaci\u00f3n funciona
- [ ] Validaciones funcionan
- [ ] UI responsive
- [ ] Toast notifications aparecen
- [ ] Integraci\u00f3n con Microsoft Calendar funciona
- [ ] Emails se env\u00edan a estudiantes

---

## COMANDOS PARA TESTING

```bash
# Iniciar servidor de desarrollo
npm run dev

# Revisar logs de consola
# Abrir DevTools en navegador

# Probar APIs directamente
curl http://localhost:3000/api/live-classes

# Ver base de datos
npx prisma studio
```

---

## NOTAS IMPORTANTES

1. **Zona horaria**: Todas las fechas usan `America/Caracas`
2. **Formato de fecha**: `date-fns` con locale `es`
3. **Microsoft Graph**: Requiere configuraci\u00f3n de credenciales
4. **Prisma**: Modelos `LiveClass`, `User`, `Enrollment` deben existir
5. **NextAuth**: Sesi\u00f3n debe estar configurada

---

## TROUBLESHOOTING

### Problema: "No autorizado" al crear clase
**Soluci\u00f3n**: Verificar que el usuario tenga rol "INSTRUCTOR" en la BD

### Problema: Link de Teams no se genera
**Soluci\u00f3n**: Verificar que el usuario tenga `m365UserId` configurado

### Problema: Estudiante no ve clases
**Soluci\u00f3n**: Verificar que tenga enrollments activos (status: ACTIVE)

### Problema: Countdown no actualiza
**Soluci\u00f3n**: Verificar que el componente sea 'use client' y useEffect funciona

### Problema: Filtros no funcionan
**Soluci\u00f3n**: Verificar que CourseMetadata tenga los campos correctos
