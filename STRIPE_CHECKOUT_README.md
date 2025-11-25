# Sistema de Inscripción y Checkout con Stripe

Sistema completo de pago e inscripción a cursos integrado con Stripe para DISTMAH ATC.

## Archivos Creados

### 1. Backend - Stripe Integration

**`lib/stripe.ts`**
- Cliente de Stripe inicializado
- Funciones helper para checkout
- Sistema de cupones de descuento
- Validación y cálculo de descuentos

**`app/api/stripe/checkout/route.ts`**
- API endpoint para crear Stripe checkout session
- Validación de datos de entrada
- Integración con catálogo de cursos
- Manejo de errores

**`app/api/stripe/webhook/route.ts`**
- Webhook para recibir eventos de Stripe
- Verificación de firma del webhook
- Manejo de evento `checkout.session.completed`
- Logging de transacciones exitosas
- Preparado para inscripción automática

### 2. Frontend - Páginas de Usuario

**`app/[locale]/(public)/checkout/[cursoId]/page.tsx`**
- Formulario de inscripción
- Validación de cupones en tiempo real
- Resumen de compra dinámico
- Diseño profesional Nolivos Law
- Integración con Stripe

**`app/[locale]/(public)/checkout/success/page.tsx`**
- Página de confirmación de pago exitoso
- Próximos pasos para el estudiante
- Links a "Mis Cursos"
- Información de contacto a soporte

**`app/[locale]/(public)/checkout/cancel/page.tsx`**
- Página de cancelación de pago
- Opción de reintentar pago
- Links de navegación
- Información de métodos de pago

## Variables de Entorno Requeridas

Crear un archivo `.env.local` con las siguientes variables:

```env
# Stripe Secret Key (Backend)
STRIPE_SECRET_KEY=sk_test_51...

# Stripe Webhook Secret (para validar webhooks)
STRIPE_WEBHOOK_SECRET=whsec_...

# Stripe Publishable Key (Frontend) - NO USADO AÚN
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# URL de la aplicación
NEXT_PUBLIC_URL=http://localhost:3000
```

### Cómo Obtener las Keys de Stripe

1. **Crear cuenta en Stripe**: https://dashboard.stripe.com/register
2. **Activar modo Test**: Toggle "Test mode" en el dashboard
3. **Obtener API Keys**:
   - Ir a: Developers > API keys
   - `STRIPE_SECRET_KEY`: Secret key (comienza con `sk_test_`)
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Publishable key (comienza con `pk_test_`)

4. **Obtener Webhook Secret**:
   - Ir a: Developers > Webhooks
   - Click "Add endpoint"
   - URL: `https://tu-dominio.com/api/stripe/webhook`
   - Eventos a escuchar: `checkout.session.completed`
   - Copiar el "Signing secret" (comienza con `whsec_`)

## Sistema de Cupones

Cupones disponibles en `lib/stripe.ts`:

```typescript
COUPONS = {
  'DISTMAH2026': { discount: 0.10, type: 'percentage' },    // 10% descuento
  'BLACKFRIDAY': { discount: 0.50, type: 'percentage' },    // 50% descuento
  'FIRSTCOURSE': { discount: 50, type: 'fixed' },           // $50 USD descuento
  'STUDENT10': { discount: 0.15, type: 'percentage' },      // 15% descuento
}
```

### Agregar Nuevos Cupones

Editar `lib/stripe.ts` y agregar nuevas entradas al objeto `COUPONS`:

```typescript
'CODIGO_CUPON': {
  discount: 0.20,              // 20% o monto fijo
  type: 'percentage',          // 'percentage' o 'fixed'
  maxUses: 100,                // Opcional: usos máximos
  expiresAt: new Date('2026-12-31'), // Opcional: fecha expiración
}
```

## Flujo de Checkout

1. Usuario hace click en "Inscribirse" en página de curso
2. Navega a `/checkout/[cursoId]`
3. Completa formulario (nombre, email, cupón opcional)
4. Sistema valida cupón y calcula descuento
5. Usuario acepta términos y hace click en "Pagar con Stripe"
6. API crea Stripe checkout session
7. Usuario es redirigido a Stripe Checkout (página de pago de Stripe)
8. Usuario completa el pago con tarjeta
9. Stripe procesa el pago
10. Si exitoso: Redirect a `/checkout/success`
11. Si cancelado: Redirect a `/checkout/cancel`
12. Stripe envía webhook a `/api/stripe/webhook`
13. Sistema registra inscripción (próximo: actualizar base de datos)

## Webhook de Stripe

### Testing Local con Stripe CLI

1. Instalar Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks a localhost:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
4. Copiar el webhook secret que aparece (comienza con `whsec_`)
5. Agregar a `.env.local` como `STRIPE_WEBHOOK_SECRET`

### Testing de Pago

Usar tarjetas de prueba de Stripe:
- **Éxito**: 4242 4242 4242 4242
- **Requiere autenticación**: 4000 0025 0000 3155
- **Rechazada**: 4000 0000 0000 9995

Fecha expiración: Cualquier fecha futura
CVC: Cualquier 3 dígitos
ZIP: Cualquier 5 dígitos

## Diseño y Colores

Sistema respeta las reglas de diseño de Nolivos Law:

- **Colores principales**: Blanco, Negro, Gris, Azul corporativo
- **NO usa**: Rosa, púrpura, colores LGBT
- **Estilo**: Limpio, minimalista, profesional
- **Tipografía**: Seria y legible

## Seguridad

- Validación de firma de webhook con `STRIPE_WEBHOOK_SECRET`
- Validación de email con regex
- No exponer `STRIPE_SECRET_KEY` en cliente
- Manejo de errores sin exponer detalles internos
- Logging de transacciones para auditoría

## Próximos Pasos

1. **Integrar con base de datos**:
   - Crear tabla `enrollments`
   - Guardar inscripciones en webhook handler
   - Actualizar estado de usuario

2. **Sistema de emails**:
   - Enviar confirmación de pago
   - Enviar credenciales de acceso
   - Template profesional

3. **Dashboard de estudiante**:
   - Página "Mis Cursos"
   - Historial de pagos
   - Facturas descargables

4. **Webhooks adicionales**:
   - `payment_intent.payment_failed`
   - `customer.subscription.created` (para cursos de suscripción)
   - `invoice.paid`

## Pruebas

### Test Checkout Completo

1. Iniciar servidor: `npm run dev`
2. Navegar a: `http://localhost:3000/checkout/autocad-2d-2026`
3. Completar formulario
4. Usar cupón: `DISTMAH2026`
5. Usar tarjeta de prueba: `4242 4242 4242 4242`
6. Verificar redirect a `/checkout/success`
7. Verificar logs de webhook en consola

### Test Cupones

```typescript
// En consola del navegador (DevTools):
fetch('/api/stripe/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    courseId: 'autocad-2d-2026',
    email: 'test@example.com',
    couponCode: 'DISTMAH2026'
  })
}).then(r => r.json()).then(console.log)
```

## Soporte

Para problemas de integración Stripe:
- Documentación oficial: https://stripe.com/docs
- Dashboard de logs: https://dashboard.stripe.com/test/logs
- Webhook logs: https://dashboard.stripe.com/test/webhooks

## Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Testing webhooks local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger evento de test
stripe trigger checkout.session.completed

# Ver logs de Stripe
stripe logs tail
```

## Estructura de Archivos

```
DISTMAH-ATC-/
├── lib/
│   └── stripe.ts                 # Cliente Stripe + helpers
├── app/
│   ├── api/
│   │   └── stripe/
│   │       ├── checkout/
│   │       │   └── route.ts      # API crear checkout session
│   │       └── webhook/
│   │           └── route.ts      # Webhook handler
│   └── [locale]/(public)/
│       └── checkout/
│           ├── [cursoId]/
│           │   └── page.tsx      # Formulario checkout
│           ├── success/
│           │   └── page.tsx      # Página éxito
│           └── cancel/
│               └── page.tsx      # Página cancelación
├── .env.local                    # Variables de entorno (NO COMMITEADO)
└── .env.example                  # Template de variables
```

## Metadata de Transacciones

Cada transacción incluye metadata completa:

```typescript
{
  courseId: string,           // ID del curso
  userId: string,             // ID del usuario (si está logueado)
  couponCode: string,         // Código de cupón usado
  originalPrice: string,      // Precio original
  discountAmount: string,     // Monto de descuento
  finalPrice: string,         // Precio final pagado
}
```

Disponible en:
- Stripe Dashboard
- Webhook `session.metadata`
- Logs de servidor

---

Sistema creado con estándares profesionales para DISTMAH ATC - Authorized Training Center de Autodesk.
