# Lección 6: System Zones en Revit MEP 2026 - Control Zonal Avanzado

## Introducción

Las zonas de sistemas (System Zones) en Revit MEP 2026 son herramientas de modelado que permiten definir y gestionar grupos de espacios con características de control similares. Esta funcionalidad es fundamental para proyectos complejos donde múltiples difusores, VAVs y espacios deben coordinarse bajo una lógica de control común.

En esta lección aprenderemos a crear y configurar System Zones, asignar componentes, generar reportes y optimizar la documentación de sistemas HVAC complejos.

## Concepto Fundamental de System Zones

### Definición

Una System Zone es un conjunto de espacios (rooms) que comparten características comunes de climatización:
- Temperaturas de control similares
- Demanda térmica comparable
- Served por mismos equipos terminales
- Bajo control común (mismo termostato o controlador)

**Ejemplos:**
- Piso administrativo completo (1000 m²)
- Planta de oficinas privadas (15 espacios, 300 m²)
- Zona periférica (ventanas lado norte)
- Sección comercial (retail con múltiples locales)

### Beneficios de System Zones

**Organización jerárquica:**
- Estructura clara del sistema
- Facilita comunicación entre disciplinas
- Simplifica búsqueda información en modelos complejos

**Control de caudales:**
- Suma automática de flujos por zona
- Validación de diseño (¿suma equivale a UMA?)
- Identificación desbalances

**Documentación automática:**
- Reportes por zona
- Cálculos consolidados
- Especificaciones automáticas

**Coordinación:**
- Verifica asignación correcta equipos
- Detecta espacios sin sistema
- Garantiza completitud del diseño

## Creación de System Zones

### Estructura Jerárquica Recomendada

Para un proyecto complejo:

```
HVAC System
│
├── Sistema 1 (Zona A)
│   ├── Zona A-1: Oficinas piso 1
│   ├── Zona A-2: Comercio piso 1
│   └── Zona A-3: Servicios piso 1
│
├── Sistema 2 (Zona B)
│   ├── Zona B-1: Oficinas piso 2
│   ├── Zona B-2: Áreas comunes piso 2
│   └── Zona B-3: Servicios piso 2
│
└── Sistema 3 (Zona C)
    ├── Zona C-1: Penthouse
    └── Zona C-2: Terraza técnica
```

### Procedimiento en Revit MEP 2026

**Paso 1: Navegar a System Zones**

En ribbon MEP:
- Systems tab → HVAC Systems → System Zones

**Paso 2: Crear Nueva Zona**

Opciones:
- A) Crear vacía y asignar espacios manualmente
- B) Crear desde selección (pre-seleccionar espacios)

**Paso 3: Nombrar la Zona**

Convención recomendada:
```
Formato: [NIVEL]-[SECTOR]-[TIPO]

Ejemplos:
- P01-ADMIN-OFICINAS (Piso 1, Administrativo, Oficinas)
- P02-COMERCIO-RETAIL (Piso 2, Comercio, Retail)
- P03-TÉCNICA-SERVICIOS (Piso 3, Área técnica, Servicios)
- SÓTANO-ESTACIONAMIENTO-VENTILACIÓN (Sótano, etc.)
```

**Paso 4: Asignar Espacios**

Métodos:
- Seleccionar espacios de lista disponible
- Drag & drop si interfaz lo permite
- Búsqueda por criterios (nivel, tipo, etc.)

**Paso 5: Asignar Equipos Terminales**

Vincula a zona:
- Difusores (supply terminals)
- Rejillas de retorno (return terminals)
- Cajas VAV (terminal units)
- Equipos adicionales

## Propiedades y Parámetros de System Zones

### Información de Zona

**Datos administrativos:**
```
Nombre: P01-ADMIN-OFICINAS
Descripción: Zona oficinas piso 1, norte y sur
Clasificación: Zona climatizada / No climatizada
Nivel asociado: Piso 1
Área total: 1500 m² (suma de espacios)
Volumen: 4500 m³ (altura × área)
```

**Ocupación:**
```
Número de ocupantes: 125 personas
Ocupación pico: De 8 AM a 6 PM
Ocupación mínima: Noches (seguridad 10%)
Densidad: 0.083 personas/m²
```

**Requisitos de aire exterior (por ASHRAE 62.1):**
```
Aire por persona: 7 L/s
Aire por área: 0.5 L/s/m²

Caudal aire exterior = Max(
  125 personas × 7 L/s = 875 L/s,
  1500 m² × 0.5 L/s/m² = 750 L/s
)
Resultado = 875 L/s (mayor, persona-limitado)
```

### Caudales de Diseño

**Caudal suministro (supply):**
- Suma de todos los difusores en zona
- Típicamente 6-10 L/s per cápita
- Ejemplo: 125 personas × 8 L/s = 1000 L/s

**Caudal retorno (return):**
- Debe igualar suministro en sistema balanceado
- Suma de rejillas de retorno
- En plenum, parte va a retorno central

**Caudal aire exterior:**
- Mínimo según código (875 L/s arriba)
- Típicamente 15-20% de suministro total
- Resto es aire recirculado (1000 - 875 = 125 L/s en ejemplo)

### Cargas Térmicas

**Carga enfriamiento (verano):**
- Ganancia solar: Vidrios, superficies expuestas
- Carga interna: Ocupantes (100W/persona), equipos (3-5 W/m²)
- Infiltración: Si edificio permeable
- Total típico: 100-150 W/m² zona

En zona ejemplo:
```
Ganancia solar (fachadas norte/sur): 200 kW
Ocupantes: 125 × 100W = 12.5 kW
Equipos/iluminación: 1500 m² × 4 W/m² = 6 kW
TOTAL: 218.5 kW carga enfriamiento
```

**Carga calefacción (invierno):**
- Pérdida transmisión: A través de muros, vidrios, techo
- Pérdida infiltración: Aire exterior inyectado
- Típico: 50-80 W/m² en climas moderados

Ejemplo:
```
Pérdida transmisión: 150 kW
Aire exterior 875 L/s × 1.2 kg/m³ × 1005 J/kg·K × ΔT(25K) = 26 kW
TOTAL: 176 kW carga calefacción
```

## Asignación de Equipos a System Zones

### Difusores (Supply Terminals)

**Procedimiento:**
1. Seleccionar difusores en plano o 3D
2. En propiedades, asignar a System Zone
3. Revit suma caudales automáticamente

**Validación:**
- Total difusores debe aproximarse a caudal diseño zona
- Diferencia ±10% es aceptable
- Diferencia >15% indica problema diseño

**Ejemplo:**
```
Zona: P01-ADMIN-OFICINAS
Caudal diseño: 1000 L/s
Difusores asignados:
- 10 circulares × 80 L/s = 800 L/s
- 2 lineales × 100 L/s = 200 L/s
Total: 1000 L/s ✓ CORRECTO
```

### Rejillas de Retorno (Return Terminals)

**Asignación similar:**
1. Seleccionar rejillas
2. Asignar a System Zone
3. Verificar suma de caudales

**Consideración importante:**
Si sistema usa plenum de retorno (espacio entre techo y estructura), parte del aire retorna a través de plenum, no rejillas discretas.

**Cálculo en plenum:**
```
Aire retorno rejilla discreta: 600 L/s
Aire retorno vía plenum: 1000 - 600 = 400 L/s
Verificar capacidad plenum a través de toma de UMA
```

### Cajas VAV y Equipos Terminales

**Asignación VAV:**
1. Cada caja VAV a su Zone particular
2. Si múltiples VAVs en una zona, asignarlas todas
3. Revit verifica suma de capacidades

**Ejemplo sistema dual-zona:**
```
ZONA P01-ADMIN-NORTE (lado norte):
- Caudal diseño: 500 L/s
- VAV-101: 300 L/s
- VAV-102: 200 L/s
Total: 500 L/s ✓

ZONA P01-ADMIN-SUR (lado sur):
- Caudal diseño: 500 L/s
- VAV-201: 350 L/s
- VAV-202: 150 L/s
Total: 500 L/s ✓
```

## Validación y Reportes

### Checklists de Validación

Revit MEP puede generar reportes:

**Espacios sin sistema:**
- Identifica rooms no asignados a ninguna zone
- Requiere acción: Asignar a zone o justificar

**Equipos no asignados:**
- Difusores, rejillas, VAVs sin System Zone
- Impide reportes completos
- Requiere limpieza del modelo

**Desbalances de caudal:**
```
ZONA P01-ADMIN-OFICINAS
Caudal suministro (difusores): 1000 L/s
Caudal retorno (rejillas): 800 L/s
DIFERENCIA: 200 L/s (20%) ⚠ ADVERTENCIA

Posibles causas:
- Falta asignación rejilla de retorno
- Retorno vía plenum sin cuantificar
- Error en especificación difusores

Solución: Verificar diseño con plano y especificaciones
```

### Reportes de System Zones

**Información que genera:**

**Reporte de cargas:**
```
SISTEMA HVAC P01-ADMIN
├── ZONA P01-ADMIN-NORTE
│   ├── Área: 750 m²
│   ├── Ocupación: 60 personas
│   ├── Carga enfriamiento: 109 kW
│   ├── Caudal diseño: 500 L/s
│   ├── Difusores: 6 unidades
│   └── VAV: 2 unidades
│
└── ZONA P01-ADMIN-SUR
    ├── Área: 750 m²
    ├── Ocupación: 65 personas
    ├── Carga enfriamiento: 109.5 kW
    ├── Caudal diseño: 500 L/s
    ├── Difusores: 6 unidades
    └── VAV: 2 unidades

SISTEMA TOTAL:
├── Área: 1500 m²
├── Ocupación: 125 personas
├── Carga total: 218.5 kW
├── Caudal total: 1000 L/s
├── Aire exterior: 875 L/s
└── Aire recirculado: 125 L/s
```

**Reporte de componentes:**
```
DIFUSORES POR ZONA:
- P01-ADMIN-NORTE: 6 units, 500 L/s
- P01-ADMIN-SUR: 6 units, 500 L/s

CAJAS VAV POR ZONA:
- P01-ADMIN-NORTE: VAV-101 (300 L/s), VAV-102 (200 L/s)
- P01-ADMIN-SUR: VAV-201 (350 L/s), VAV-202 (150 L/s)

REJILLAS RETORNO POR ZONA:
- P01-ADMIN-NORTE: 4 units, 400 L/s
- P01-ADMIN-SUR: 4 units, 400 L/s
```

## Casos de Uso Avanzados

### Múltiples Sistemas Independientes

Edificio con varias UMAs independientes:

```
Sistema 1 (UMA-1): Zona norte
├── P01-ADMIN-NORTE (500 L/s)
├── P02-ADMIN-NORTE (500 L/s)
└── P03-ADMIN-NORTE (300 L/s)
Total UMA-1: 1300 L/s

Sistema 2 (UMA-2): Zona sur
├── P01-ADMIN-SUR (500 L/s)
├── P02-ADMIN-SUR (500 L/s)
└── P03-RETAIL (700 L/s)
Total UMA-2: 1700 L/s

Sistema 3 (Dedicado): Servicios
├── SÓTANO-ESTACIONAMIENTO (2000 L/s)
Total UMA-3: 2000 L/s
```

Revit puede:
- Generar reporte por UMA
- Verificar que sum of zones = caudal UMA
- Documentar fácilmente en especificaciones

### Zonas con Equipos Especiales

Áreas con requisitos adicionales:

```
ZONA LABORATORIO (crítica):
- Aire exterior: 100% (sin recirculación)
- Presión positiva: +20 Pa vs áreas adyacentes
- Cambios aire/hora: 8 ACH (vs típicos 4-6)
- Filtración: MERV 13 mínimo
- Control temperatura: ±1°C

Revit registra todos estos parámetros, facilita comunicación
a ingeniería, control, comisionamiento.
```

## Mejores Prácticas en System Zones

1. **Crear hierarchía clara** - Organizar por piso, sector, tipo
2. **Nombres descriptivos** - Facilitar búsqueda y coordinación
3. **Asignar todos los equipos** - Completitud del modelo
4. **Validar reportes regularmente** - Identificar problemas temprano
5. **Documentar supuestos** - En descripción de zona
6. **Coordinar con control** - System Zones alinean con lógica BMS
7. **Actualizar cuando cambia diseño** - Mantener modelo vigente

## Resumen

System Zones en Revit MEP 2026:
- Organizan espacios bajo lógica de control común
- Consolidan información de caudales y cargas
- Generan reportes automáticos completos
- Facilitan validación y coordinación
- Esenciales en proyectos complejos
- Permiten documentación profesional clara

El correcto uso de System Zones garantiza modelos integrados, documentación automática y comunicación clara entre disciplinas.

---

**Imagen de referencia:** Ejemplo hierarchía System Zones en edificio multi-piso - [Placeholder]

**Imagen de referencia:** Reporte de System Zone con cargas y equipos - [Placeholder]

**Tiempo estimado de lectura:** 45 minutos
**Nivel de dificultad:** Intermedio a Avanzado
