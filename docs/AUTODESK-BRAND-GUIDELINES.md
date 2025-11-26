# Guía de Marca Autodesk para DISTMAH ATC

## Resumen de Brand Guidelines Oficiales

Este documento resume las directrices de marca de Autodesk para aplicar en la plataforma DISTMAH ATC.

---

## 1. Paleta de Colores

### Colores Primarios
| Color | Hex | Uso |
|-------|-----|-----|
| **Negro** | `#000000` | Texto principal, fondos oscuros |
| **Blanco** | `#FFFFFF` | Fondos principales, texto sobre oscuro |

### Colores de Acento (Hello Yellow)
| Color | Hex | Uso |
|-------|-----|-----|
| **Hello Yellow** | `#FFFF00` | Acentos destacados, CTAs importantes |
| **Hello Yellow Alt** | `#D7CB1D` | Variante para hover/estados |

### Colores Neutrales
| Color | Hex | Uso |
|-------|-----|-----|
| **Warm Slate** | `#D5D5CB` | Fondos sutiles, bordes |
| **Slate** | `#666666` | Texto secundario, iconos |

### Colores Secundarios
| Color | Hex | Uso |
|-------|-----|-----|
| **Dawn** | `#F09D4F` | Alertas, elementos cálidos |
| **Dusk** | `#F2520A` | Errores, elementos urgentes |
| **Twilight** | `#1D91D0` | Links, elementos interactivos |
| **Morning** | `#2AD0A9` | Éxito, confirmaciones |

---

## 2. Tipografía

### Fuentes Principales

| Fuente | Uso | Fallback |
|--------|-----|----------|
| **ArtifaktLegend** | Títulos, display text | Arial, Roboto |
| **ArtifaktElement** | Texto de cuerpo, párrafos | Arial, Roboto |

### Jerarquía Tipográfica

```css
/* Títulos principales */
h1 {
  font-family: 'ArtifaktLegend', Arial, sans-serif;
  font-weight: 700;
}

/* Subtítulos */
h2, h3 {
  font-family: 'ArtifaktLegend', Arial, sans-serif;
  font-weight: 600;
}

/* Texto de cuerpo */
body, p {
  font-family: 'ArtifaktElement', Arial, sans-serif;
  font-weight: 400;
}
```

---

## 3. Principios de Diseño

Autodesk define 5 principios clave que deben reflejarse en todo el diseño:

### Optimistic (Optimista)
- Diseños que transmiten posibilidades y futuro
- Uso de colores vivos cuando sea apropiado
- Mensajes positivos y orientados a soluciones

### Relentless (Incansable)
- Atención al detalle
- Consistencia en todos los elementos
- Calidad sin compromisos

### Brave (Valiente)
- Diseños audaces cuando sea necesario
- No temer a espacios en blanco
- Tipografía con presencia

### Ingenious (Ingenioso)
- Soluciones inteligentes de UX
- Interfaces intuitivas
- Diseño funcional sobre decorativo

### Trusted (Confiable)
- Consistencia visual
- Profesionalismo en cada detalle
- Respeto por los estándares de la industria

---

## 4. Aplicación para DISTMAH ATC

### Paleta Recomendada para la Plataforma

```css
:root {
  /* Primarios */
  --color-primary: #000000;
  --color-background: #FFFFFF;

  /* Acentos - Usar con moderación */
  --color-accent: #1D91D0; /* Twilight - links, botones */
  --color-success: #2AD0A9; /* Morning - éxito */
  --color-warning: #F09D4F; /* Dawn - alertas */
  --color-error: #F2520A; /* Dusk - errores */

  /* Neutrales */
  --color-text-secondary: #666666;
  --color-border: #D5D5CB;
  --color-background-subtle: #F5F5F5;
}
```

### Componentes Clave

#### Botones Primarios
```css
.btn-primary {
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  padding: 12px 24px;
  font-family: 'ArtifaktElement', Arial, sans-serif;
  font-weight: 600;
}

.btn-primary:hover {
  background-color: #1D91D0; /* Twilight */
}
```

#### Cards de Cursos
```css
.course-card {
  background: #FFFFFF;
  border: 1px solid #D5D5CB;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.course-card:hover {
  border-color: #1D91D0;
  box-shadow: 0 4px 16px rgba(29, 145, 208, 0.15);
}
```

#### Headers de Módulos
```css
.module-header {
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: #FFFFFF;
  padding: 24px;
}
```

---

## 5. Uso del Logo Autodesk

### Reglas Importantes
- Mantener espacio libre alrededor del logo
- No modificar proporciones
- Usar versión negra sobre fondos claros
- Usar versión blanca sobre fondos oscuros
- No agregar efectos (sombras, gradientes, etc.)

### Mención como ATC
Como Authorized Training Center, siempre incluir:
- Logo de Autodesk con tamaño apropiado
- Mención "Authorized Training Center"
- Cumplir con guías de co-branding

---

## 6. Iconografía

### Estilo Recomendado
- Líneas limpias y simples
- Grosor consistente (2px stroke)
- Colores: Negro primario, Slate para secundarios
- Tamaños estándar: 16px, 24px, 32px, 48px

---

## 7. Espaciado y Grid

### Sistema de Espaciado
```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

### Grid de Layout
- Container máximo: 1200px
- Columnas: 12
- Gutter: 24px
- Margins: 16px (móvil), 24px (tablet), 48px (desktop)

---

## 8. Imágenes y Media

### Directrices
- Fotografía profesional y de alta calidad
- Imágenes que muestren personas usando software
- Capturas de pantalla actualizadas de productos
- Evitar imágenes genéricas de stock

### Formatos Recomendados
- **Web**: WebP, PNG para logos, JPG para fotos
- **Tamaños**: Optimizar para web (max 200KB por imagen)
- **Aspect Ratios**: 16:9 para banners, 1:1 para thumbnails

---

## Referencias

- Sitio oficial: https://brand.autodesk.com/
- Recursos de marca: https://brand.autodesk.com/brand-assets
- Guías de producto: https://brand.autodesk.com/product

---

*Documento creado para DISTMAH ATC - Authorized Training Center*
*Última actualización: Noviembre 2025*
