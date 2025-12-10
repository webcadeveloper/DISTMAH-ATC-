# Manual del Profesor - Sistema de Exámenes y Certificados

## Guía Paso a Paso para Instructores

---

## 1. Crear un Examen

### Paso 1: Navegar a Exámenes
1. Ve a tu curso en el dashboard de instructor
2. Click en la pestaña **"Exámenes"**
3. Click en el botón **"Crear Examen"**

### Paso 2: Configurar el Examen
Completa el formulario con:

**Información Básica:**
- **Título:** Ej: "Examen Final - AutoCAD 2026 Básico"
- **Descripción:** Breve descripción del examen (opcional)
- **Instrucciones:** Instrucciones específicas para los estudiantes

**Configuración:**
- **Duración:** Tiempo en minutos (ej: 60)
- **Puntaje mínimo:** Porcentaje para aprobar (ej: 70%)
- **Intentos máximos:** Cuántas veces puede intentar el estudiante (ej: 3)

**Opciones Avanzadas:**
- **Mezclar preguntas:** ✓ Recomendado para evitar copia
- **Mostrar resultados:** ✓ Permite al estudiante ver su puntaje y respuestas

**Disponibilidad:**
- **Disponible desde:** Fecha de inicio
- **Disponible hasta:** Fecha límite (opcional)

### Paso 3: Guardar y Continuar
- Click en **"Crear Examen"**
- Serás redirigido a la página de preguntas

---

## 2. Agregar Preguntas

### Tipos de Preguntas Disponibles

#### A. Opción Múltiple (Multiple Choice)
**Calificación:** Automática
**Uso:** Conceptos, definiciones, procesos

**Cómo crear:**
1. Selecciona **"Opción Múltiple"** en el selector de tipo
2. Escribe la pregunta
3. Ingresa las opciones (mínimo 2, recomendado 4)
4. Marca la casilla de la opción correcta
5. Agrega explicación (se mostrará al estudiante al finalizar)
6. Click **"Guardar Pregunta"**

**Ejemplo:**
```
Pregunta: ¿Qué comando se usa para crear una línea en AutoCAD?
Opciones:
  ☑ LINE
  ☐ CIRCLE
  ☐ RECTANGLE
  ☐ POLYLINE
Puntos: 1
Explicación: El comando LINE se usa para crear líneas rectas en AutoCAD
```

#### B. Verdadero/Falso (True/False)
**Calificación:** Automática
**Uso:** Afirmaciones simples, conceptos básicos

**Cómo crear:**
1. Selecciona **"Verdadero/Falso"**
2. Escribe la afirmación
3. Marca la respuesta correcta
4. Agrega explicación
5. Click **"Guardar Pregunta"**

**Ejemplo:**
```
Pregunta: En AutoCAD, el comando UNDO deshace la última acción.
  ☑ Verdadero
  ☐ Falso
Puntos: 1
Explicación: UNDO es el comando estándar para deshacer acciones
```

#### C. Respuesta Corta (Short Answer)
**Calificación:** Automática (por palabras clave)
**Uso:** Definiciones, conceptos que tienen palabras clave específicas

**Cómo crear:**
1. Selecciona **"Respuesta Corta"**
2. Escribe la pregunta
3. En **"Respuesta esperada"** ingresa palabras clave separadas por comas
4. El sistema buscará estas palabras en la respuesta del estudiante
5. Click **"Guardar Pregunta"**

**Ejemplo:**
```
Pregunta: ¿Qué es el comando OFFSET en AutoCAD?
Respuesta esperada: paralela, distancia, copia, objeto
Puntos: 2
Explicación: OFFSET crea una copia paralela de un objeto a una distancia específica
```

**Calificación automática:**
- Si encuentra 4 de 4 palabras = 100% (2 puntos)
- Si encuentra 3 de 4 palabras = 75% (1.5 puntos)
- Si encuentra 2 de 4 palabras = 50% (1 punto)
- Si encuentra 1 de 4 palabras = 25% (0.5 puntos)
- Si encuentra 0 de 4 palabras = 0% (0 puntos)

#### D. Ensayo (Essay)
**Calificación:** Manual (requiere tu revisión)
**Uso:** Preguntas de desarrollo, análisis, opinión

**Cómo crear:**
1. Selecciona **"Ensayo"**
2. Escribe la pregunta
3. En **"Rúbrica"** describe los criterios de calificación
4. Click **"Guardar Pregunta"**

**Ejemplo:**
```
Pregunta: Explica la diferencia entre coordenadas absolutas y relativas en AutoCAD
Rúbrica:
- Definición clara de ambos conceptos (40%)
- Ejemplos correctos (30%)
- Explicación de cuándo usar cada una (30%)
Puntos: 5
```

**IMPORTANTE:**
- Tendrás que calificar manualmente después
- El estudiante verá "Pendiente de revisión"
- Ve a **"Resultados"** para calificar

#### E. Subir Archivo (File Upload)
**Calificación:** Manual (requiere tu revisión)
**Uso:** Ejercicios prácticos, archivos DWG, RVT, etc.

**Cómo crear:**
1. Selecciona **"Subir Archivo"**
2. Escribe las instrucciones del ejercicio
3. En **"Rúbrica"** describe qué evaluarás
4. Click **"Guardar Pregunta"**

**Ejemplo:**
```
Pregunta: Crea un plano arquitectónico básico con AutoCAD que incluya:
- Muros exteriores
- Ventanas y puertas
- Acotaciones
- Escala 1:100

Rúbrica:
- Uso correcto de layers (25%)
- Acotaciones correctas (25%)
- Escala apropiada (25%)
- Limpieza del dibujo (25%)
Puntos: 10
```

---

## 3. Gestionar Preguntas

### Reordenar Preguntas
- Las preguntas se muestran en el orden que las creaste
- Para cambiar el orden, edita el campo **"Orden"** en cada pregunta

### Editar Pregunta
1. Click en la pregunta que quieres editar
2. Modifica los campos necesarios
3. Click **"Guardar Pregunta"**

### Eliminar Pregunta
1. Click en el ícono de basura en la pregunta
2. Confirma la eliminación

### Vista Previa
- Click en **"Vista Previa"** para ver cómo se verá la pregunta
- Útil para verificar formato y opciones

---

## 4. Publicar el Examen

Una vez agregadas todas las preguntas:
1. Verifica que todas estén correctas
2. El examen estará disponible automáticamente en las fechas configuradas
3. Los estudiantes lo verán en su curso

---

## 5. Ver Resultados

### Ver Intentos de Estudiantes
1. Ve a **"Exámenes"** en tu curso
2. Click en el examen
3. Click en **"Ver Resultados"**

Verás:
- Lista de todos los intentos
- Nombre del estudiante
- Puntaje obtenido
- Porcentaje
- Aprobado/Reprobado
- Fecha y hora
- Tiempo invertido

### Calificar Preguntas Manuales

Para preguntas de tipo **Essay** o **File Upload**:

1. Ve a **"Resultados"**
2. Click en el intento del estudiante
3. Busca las preguntas no calificadas
4. Lee la respuesta/descarga el archivo
5. Asigna puntos según tu rúbrica
6. Escribe feedback (opcional)
7. Click **"Guardar Calificación"**

El puntaje total se recalculará automáticamente.

---

## 6. Certificados

### Generación Automática
Los certificados se generan automáticamente cuando:
1. El estudiante completa 100% del curso
2. Y aprueba el examen final

**NO necesitas hacer nada manualmente**

### Ver Certificados Emitidos
1. Ve a **"Dashboard"**
2. Sección **"Certificados Emitidos"**
3. Verás lista de todos los certificados generados

---

## 7. Mejores Prácticas

### Para Exámenes Efectivos

**1. Mezcla tipos de preguntas:**
- 60% Multiple Choice / True-False (fáciles de calificar)
- 30% Short Answer (evalúa comprensión)
- 10% Essay / File Upload (evalúa aplicación)

**2. Distribución de puntos:**
- Conceptos básicos: 1 punto
- Conceptos intermedios: 2-3 puntos
- Ejercicios prácticos: 5-10 puntos

**3. Tiempo adecuado:**
- 1 minuto por pregunta de opción múltiple
- 2 minutos por pregunta de respuesta corta
- 10-15 minutos por pregunta de ensayo
- 20-30 minutos por ejercicio práctico

**Ejemplo:**
- 20 preguntas MCQ = 20 minutos
- 5 preguntas Short Answer = 10 minutos
- 1 pregunta Essay = 15 minutos
- 1 ejercicio práctico = 25 minutos
- **Total: 70 minutos** (agregar 10 min buffer = **80 minutos**)

**4. Puntaje de aprobación:**
- Examen básico: 60-70%
- Examen intermedio: 70-80%
- Examen avanzado: 80-90%

**5. Intentos:**
- Examen formativo: 3+ intentos
- Examen final: 2 intentos
- Certificación: 1 intento

### Para Preguntas de Calidad

**DO:**
- ✓ Sé claro y específico
- ✓ Usa lenguaje profesional
- ✓ Agrega explicaciones útiles
- ✓ Verifica ortografía
- ✓ Usa ejemplos reales

**DON'T:**
- ✗ Preguntas ambiguas
- ✗ Opciones obviamente incorrectas
- ✗ Preguntas "trick"
- ✗ Jerga innecesaria

### Ejemplos de Preguntas

**MALA:**
```
¿Cuál es el mejor comando en AutoCAD?
A) LINE
B) CIRCLE
C) RECTANGLE
D) TODOS
```
Problema: Subjetivo, no hay respuesta correcta definida

**BUENA:**
```
¿Qué comando se utiliza para crear círculos en AutoCAD?
A) LINE
B) CIRCLE ✓
C) ARC
D) ELLIPSE
Explicación: CIRCLE es el comando específico para crear círculos perfectos
```

---

## 8. Solución de Problemas

### El estudiante no ve el examen
**Posibles causas:**
1. El examen no está disponible aún (revisar fechas)
2. El estudiante agotó los intentos
3. El estudiante no está inscrito en el curso

**Solución:**
- Verifica las fechas de disponibilidad
- Aumenta el número de intentos máximos
- Verifica enrollment del estudiante

### El auto-grading no funciona
**Posibles causas:**
1. Pregunta de tipo Essay o File Upload (requiere grading manual)
2. Short Answer sin palabras clave configuradas

**Solución:**
- Revisa el tipo de pregunta
- Configura palabras clave para Short Answer
- Califica manualmente si es necesario

### El certificado no se generó
**Posibles causas:**
1. El estudiante no completó 100% del curso
2. El estudiante no aprobó el examen final

**Solución:**
- Verifica el progreso del estudiante
- Verifica que haya aprobado el examen con el % mínimo

---

## 9. Shortcuts y Tips

### Shortcuts de Teclado
- **Tab:** Navegar entre campos
- **Enter:** Guardar (en algunos formularios)
- **Ctrl+S:** No disponible (usa botón Guardar)

### Tips de Productividad

**1. Banco de Preguntas:**
Crea un documento separado con preguntas reutilizables:
```
BANCO_PREGUNTAS_AUTOCAD_BASICO.md

## Comandos Básicos
1. ¿Qué comando crea líneas? → LINE
2. ¿Qué comando crea círculos? → CIRCLE
...
```

**2. Templates:**
Crea un examen template y duplícalo:
- Mismo formato
- Mismos parámetros
- Solo cambia las preguntas

**3. Revisión Rápida:**
Antes de publicar:
- Click en cada pregunta → Vista Previa
- Verifica respuestas correctas
- Verifica puntos
- Revisa explicaciones

---

## 10. FAQ - Preguntas Frecuentes

**P: ¿Puedo editar un examen después de que estudiantes lo hayan tomado?**
R: Sí, pero no es recomendado. Los cambios no afectarán intentos ya realizados.

**P: ¿Puedo ver las respuestas de un estudiante específico?**
R: Sí, ve a Resultados → Click en el intento del estudiante.

**P: ¿Puedo cambiar el puntaje de aprobación después de crear el examen?**
R: Sí, edita el examen y cambia el campo "Puntaje mínimo".

**P: ¿Cuántos puntos totales debe tener un examen?**
R: No hay límite. Puede ser 10, 50, 100. El sistema calcula el porcentaje automáticamente.

**P: ¿Puedo agregar imágenes en las preguntas?**
R: En la versión actual, no. Próximamente se agregará esta funcionalidad.

**P: ¿Puedo importar preguntas de otro examen?**
R: No directamente. Deberás copiarlas manualmente.

**P: ¿Los estudiantes pueden ver la explicación antes de finalizar?**
R: No, solo después de enviar el examen (si "Mostrar resultados" está activado).

**P: ¿Puedo dar tiempo extra a un estudiante específico?**
R: No en la versión actual. El tiempo es el mismo para todos.

**P: ¿Qué pasa si un estudiante cierra el navegador durante el examen?**
R: Las respuestas se guardan automáticamente cada 30 segundos. Puede continuar donde quedó.

**P: ¿Puedo descargar los resultados en Excel?**
R: Próximamente. Por ahora, solo visualización en pantalla.

---

## 11. Checklist - Antes de Publicar

Antes de que los estudiantes tomen el examen, verifica:

- [ ] Todas las preguntas tienen respuestas correctas configuradas
- [ ] Los puntos están distribuidos correctamente
- [ ] Las explicaciones son claras y útiles
- [ ] La duración es apropiada para el número de preguntas
- [ ] El puntaje de aprobación es justo
- [ ] Las fechas de disponibilidad son correctas
- [ ] "Mostrar resultados" está configurado según tu preferencia
- [ ] Hiciste una vista previa de todas las preguntas
- [ ] Las instrucciones son claras

---

## 12. Contacto y Soporte

Si tienes problemas técnicos:
1. Revisa este manual
2. Consulta la sección de Solución de Problemas
3. Contacta al administrador del sistema

---

**¡Listo para crear exámenes profesionales!**

Este sistema está diseñado para ser intuitivo y eficiente. Con práctica, crearás exámenes de calidad en minutos.

**Éxito en tus cursos!**
