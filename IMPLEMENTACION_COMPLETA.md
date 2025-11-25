# Implementación Completa - 3 Funcionalidades DISTMAH ATC

## Archivos Creados

### 1. RECUPERACIÓN DE CONTRASEÑA

#### Database Schema
- `prisma/schema.prisma` - Modelo `PasswordResetToken` agregado

#### API Routes
- `app/api/auth/forgot-password/route.ts` - Enviar email con token
- `app/api/auth/reset-password/route.ts` - Resetear contraseña con token

#### Páginas UI
- `app/[locale]/(auth)/forgot-password/page.tsx` - Formulario solicitud de recuperación
- `app/[locale]/(auth)/reset-password/page.tsx` - Formulario nueva contraseña

#### Email Template
- `lib/email.ts` - Función `sendPasswordResetEmail()` agregada

### 2. PÁGINA FAQ

#### Página
- `app/[locale]/(public)/faq/page.tsx` - Página FAQ con accordion y búsqueda

### 3. SISTEMA DE CUPONES/DESCUENTOS

#### Database Schema
- `prisma/schema.prisma` - Modelo `Coupon` y enum `CouponType` agregados

#### API Routes
- `app/api/coupons/validate/route.ts` - Validar cupón
- `app/api/admin/coupons/route.ts` - Listar y crear cupones
- `app/api/admin/coupons/[id]/route.ts` - Actualizar y eliminar cupón

#### UI Components
- `components/checkout/CouponInput.tsx` - Input para aplicar cupón en checkout
- `components/ui/alert.tsx` - Componente Alert (dependencia faltante)

#### Páginas Admin
- `app/admin/cupones/page.tsx` - Gestión de cupones (admin)

---

## Instrucciones de Migración de Base de Datos

### 1. Generar migración de Prisma

```bash
npx prisma migrate dev --name add_password_reset_and_coupons
```

Este comando:
- Crea una nueva migración con los modelos `PasswordResetToken` y `Coupon`
- Aplica la migración a tu base de datos
- Genera el cliente de Prisma actualizado

### 2. Verificar migración

```bash
npx prisma studio
```

Abre Prisma Studio en el navegador para verificar que las nuevas tablas existen:
- `password_reset_tokens`
- `coupons`

### 3. Si estás en producción

```bash
# Aplicar migración en producción
npx prisma migrate deploy
```

---

## Testing Básico de Funcionalidades

### 1. RECUPERACIÓN DE CONTRASEÑA

#### Flujo Completo de Testing:

**A. Solicitar recuperación de contraseña**
1. Navega a: `http://localhost:3000/login`
2. Haz clic en "¿Olvidaste tu contraseña?"
3. Ingresa un email registrado: `test@example.com`
4. Haz clic en "Enviar Email de Recuperación"
5. **Verificar:** Debes recibir un email con el link de reset

**B. Resetear contraseña**
1. Abre el email recibido
2. Haz clic en el botón "Resetear Contraseña"
3. Serás redirigido a: `/reset-password?token=xxx`
4. Ingresa nueva contraseña (mínimo 8 caracteres)
5. Confirma la contraseña
6. Haz clic en "Actualizar Contraseña"
7. **Verificar:** Debes ver mensaje de éxito y redirección a login

**C. Intentar login con nueva contraseña**
1. Navega a `/login`
2. Ingresa email y nueva contraseña
3. **Verificar:** Debes poder iniciar sesión exitosamente

#### Testing de Casos Extremos:

**Token expirado:**
```bash
# Crear un token expirado manualmente en la BD
# O esperar 1 hora y probar usar el link antiguo
# Debe mostrar error: "El token ha expirado"
```

**Token ya usado:**
```bash
# Usar el mismo link dos veces
# Segunda vez debe mostrar error: "Token inválido o ya utilizado"
```

**Cuenta con Microsoft:**
```bash
# Intentar recuperar contraseña de cuenta Azure AD
# Debe mostrar error: "Esta cuenta usa autenticación de Microsoft"
```

---

### 2. PÁGINA FAQ

#### Testing Funcional:

**A. Navegación**
1. Navega a: `http://localhost:3000/faq`
2. **Verificar:** Página carga correctamente con todas las categorías

**B. Búsqueda**
1. En el buscador, escribe: "certificado"
2. **Verificar:** Solo aparecen preguntas que contienen "certificado"
3. Borra búsqueda
4. **Verificar:** Vuelven a aparecer todas las preguntas

**C. Filtros de Categoría**
1. Haz clic en "Cursos"
2. **Verificar:** Solo aparecen preguntas de la categoría Cursos
3. Haz clic en "Todas"
4. **Verificar:** Vuelven a aparecer todas las categorías

**D. Accordion**
1. Haz clic en cualquier pregunta
2. **Verificar:** Se expande mostrando la respuesta
3. Haz clic en otra pregunta
4. **Verificar:** La anterior se colapsa y la nueva se expande

**E. Responsive**
1. Abre DevTools (F12)
2. Cambia a vista móvil (375px)
3. **Verificar:** El diseño se adapta correctamente

---

### 3. SISTEMA DE CUPONES

#### A. Crear Cupón (Admin)

**1. Acceder a gestión de cupones**
```bash
# Navega a (como admin):
http://localhost:3000/admin/cupones
```

**2. Crear cupón de porcentaje**
1. Haz clic en "Crear Cupón"
2. Completa el formulario:
   - Código: `VERANO2026`
   - Tipo: Porcentaje
   - Valor: 20
   - Válido Desde: Hoy
   - Válido Hasta: +30 días
3. Haz clic en "Crear Cupón"
4. **Verificar:** Cupón aparece en la lista con estado "Activo"

**3. Crear cupón de monto fijo**
1. Haz clic en "Crear Cupón"
2. Completa el formulario:
   - Código: `PROMO50`
   - Tipo: Monto Fijo
   - Valor: 50
   - Compra Mínima: 100
   - Descuento Máximo: (vacío)
   - Válido Desde: Hoy
   - Válido Hasta: +60 días
   - Usos Máximos: 100
3. **Verificar:** Cupón creado exitosamente

#### B. Validar Cupón (API)

**Usando cURL o Postman:**

```bash
# Test 1: Cupón válido de porcentaje
curl -X POST http://localhost:3000/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{
    "code": "VERANO2026",
    "totalAmount": 390
  }'

# Respuesta esperada:
{
  "valid": true,
  "coupon": {
    "id": "xxx",
    "code": "VERANO2026",
    "type": "PERCENTAGE",
    "value": 20
  },
  "discount": 78.00,
  "finalAmount": 312.00
}

# Test 2: Cupón con compra mínima no alcanzada
curl -X POST http://localhost:3000/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{
    "code": "PROMO50",
    "totalAmount": 50
  }'

# Respuesta esperada:
{
  "valid": false,
  "error": "Compra mínima de $100 requerida"
}

# Test 3: Cupón inválido
curl -X POST http://localhost:3000/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{
    "code": "INVALIDO",
    "totalAmount": 390
  }'

# Respuesta esperada:
{
  "valid": false,
  "error": "Cupón no encontrado"
}
```

#### C. Integración en Checkout

**NOTA:** Este componente está listo para usar en tu página de checkout.

**Ejemplo de uso:**

```tsx
// En tu página de checkout
import CouponInput from '@/components/checkout/CouponInput';

const CheckoutPage = () => {
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const coursePrice = 390;

  const handleCouponApplied = (
    discountAmount: number,
    code: string,
    finalAmount: number
  ) => {
    setDiscount(discountAmount);
    setCouponCode(code);
    // Actualizar total en Stripe/PayPal con finalAmount
  };

  const handleCouponRemoved = () => {
    setDiscount(0);
    setCouponCode('');
    // Restaurar precio original
  };

  return (
    <div>
      <h1>Checkout</h1>

      <CouponInput
        courseId="course-id-123"
        totalAmount={coursePrice}
        onCouponApplied={handleCouponApplied}
        onCouponRemoved={handleCouponRemoved}
      />

      <div>
        <p>Subtotal: ${coursePrice}</p>
        {discount > 0 && (
          <p>Descuento ({couponCode}): -${discount}</p>
        )}
        <p>Total: ${coursePrice - discount}</p>
      </div>
    </div>
  );
};
```

#### D. Gestionar Cupones (Admin)

**1. Desactivar cupón**
1. En `/admin/cupones`, encuentra el cupón
2. Haz clic en "Desactivar"
3. **Verificar:** Estado cambia a "Inactivo"
4. **Verificar:** Al intentar usar el cupón en checkout, debe mostrar error

**2. Eliminar cupón**
1. Haz clic en botón de eliminar (ícono de basura)
2. Confirma eliminación
3. **Verificar:** Cupón desaparece de la lista

---

## Variables de Entorno Requeridas

Asegúrate de tener estas variables en tu `.env`:

```env
# Database
DATABASE_URL="postgresql://..."

# Resend (para emails)
RESEND_API_KEY="re_..."

# App URL (para links en emails)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## Checklist de Implementación

### Recuperación de Contraseña
- [x] Modelo `PasswordResetToken` en schema.prisma
- [x] API `/api/auth/forgot-password` (POST)
- [x] API `/api/auth/reset-password` (POST)
- [x] Página `/forgot-password`
- [x] Página `/reset-password`
- [x] Template de email `sendPasswordResetEmail()`
- [x] Link "¿Olvidaste tu contraseña?" en página de login

### Página FAQ
- [x] Página `/faq` con accordion
- [x] Búsqueda client-side
- [x] Filtros por categoría
- [x] 19 preguntas en 4 categorías
- [x] Diseño responsive
- [x] SEO metadata

### Sistema de Cupones
- [x] Modelo `Coupon` y enum `CouponType` en schema.prisma
- [x] API `/api/coupons/validate` (POST)
- [x] API `/api/admin/coupons` (GET, POST)
- [x] API `/api/admin/coupons/[id]` (PATCH, DELETE)
- [x] Componente `CouponInput`
- [x] Página `/admin/cupones`
- [x] Lógica de validación completa
- [x] Soporte para porcentaje y monto fijo

---

## Próximos Pasos

1. **Migrar base de datos:**
   ```bash
   npx prisma migrate dev --name add_password_reset_and_coupons
   ```

2. **Probar recuperación de contraseña:**
   - Solicitar reset
   - Verificar email
   - Resetear contraseña
   - Login con nueva contraseña

3. **Probar página FAQ:**
   - Navegar a `/faq`
   - Probar búsqueda
   - Probar filtros
   - Verificar responsive

4. **Probar sistema de cupones:**
   - Crear cupón como admin
   - Validar cupón vía API
   - Integrar componente en checkout
   - Probar flujo completo de compra

---

## Notas Importantes

### Seguridad
- Los tokens de reset expiran en 1 hora
- Los tokens son únicos y criptográficamente seguros (32 bytes)
- Las contraseñas se hashean con bcrypt (10 rounds)
- Rate limiting aplicado a todas las rutas de autenticación

### Cupones
- Códigos automáticamente convertidos a mayúsculas
- Validación de fechas, usos, y compra mínima
- Soporte para cursos específicos o todos los cursos
- Descuento máximo configurable para porcentajes

### Email
- Usa Resend para envío de emails
- Templates responsive con diseño Nolivos Law
- Fallback a error 500 si email falla (no bloquea el flujo)

---

**Implementación completada el:** 24 de noviembre de 2025
**Por:** Claude (Sonnet 4.5)
**Proyecto:** DISTMAH ATC - Universidad Autodesk 2026
