# Módulo 2: Referencias Externas y Coordinación

## Descripción del Módulo

Las Referencias Externas (Xrefs) son fundamentales para proyectos complejos donde múltiples disciplinas trabajan simultáneamente en archivos separados que deben coordinarse. Este módulo te enseñará a gestionar eficientemente referencias externas, coordinar archivos DWG de diferentes equipos, trabajar con PDF e imágenes como underlays, y utilizar sistemas de notificación para mantener sincronización. También explorarás eTransmit para empaquetar proyectos y fundamentos de Sheet Sets para organización de planos.

En proyectos arquitectónicos modernos, el modelo arquitectónico se referencia en dibujos de estructuras, instalaciones eléctricas, mecánicas y sanitarias. Los cambios en el modelo base deben reflejarse automáticamente en todos los archivos dependientes, sin necesidad de copiar geometría manualmente. Dominar Xrefs es esencial para workflows colaborativos profesionales.

## Objetivos de Aprendizaje

Al finalizar este módulo serás capaz de:

- Adjuntar y gestionar referencias externas (Xrefs) con métodos Attach y Overlay
- Configurar rutas relativas vs. absolutas para portabilidad de proyectos
- Administrar layers de Xrefs y controlar visibilidad selectiva
- Trabajar con imágenes rasterizadas y PDFs como underlays
- Utilizar el sistema de notificaciones para detectar cambios en archivos referenciados
- Empaquetar proyectos completos con eTransmit para distribución
- Crear y gestionar Sheet Sets básicos para organización de layouts
- Implementar workflows de coordinación multi-disciplinaria
- Resolver conflictos y problemas comunes con referencias externas

## Contenido del Módulo

### Lección 7: Xrefs - Attach, Overlay, Bind
**Duración:** 1 hora

Fundamentos de referencias externas: diferencia entre Attach y Overlay, cuándo usar cada método, impacto en nested xrefs, y comando BIND para convertir xrefs en geometría permanente. Aprenderás a configurar rutas relativas para proyectos portables y rutas de búsqueda.

### Lección 8: Xref Manager y Layer Management
**Duración:** 1 hora

Gestión avanzada mediante External References palette: reload, unload, detach, path types. Layer Property Manager para xrefs: freeze/thaw selectivo, override de propiedades, layer filters, y Layer States para configuraciones guardadas.

### Lección 9: Images y PDF Underlays
**Duración:** 1 hora

Trabajo con archivos rasterizados (JPG, PNG, TIFF) y PDFs como referencias underlays. Configuración de clipping boundaries, ajuste de contraste/fade, control de plotting, y gestión mediante External References palette. Georeferenciación básica de imágenes.

### Lección 10: DWG References y Notification System
**Duración:** 1 hora

Sistema de notificaciones de AutoCAD 2026 para alertar sobre cambios en xrefs. Status bar icons, balloon notifications, Xref notification settings, y workflows para actualización coordinada. Manejo de xrefs modificados, missing, y unresolved.

### Lección 11: Transmittal Sets y eTransmit
**Duración:** 1 hora

Empaquetado de proyectos completos para distribución: eTransmit wizard, transmittal setups, inclusión de xrefs/fonts/plot styles, opciones de path (absolute/relative/no path), y creación de transmittal reports. Desempaquetado y verificación de sets recibidos.

### Lección 12: Sheet Sets Básico
**Duración:** 1 hora

Introducción a Sheet Set Manager: creación de sheet sets, organización de layouts en subsets, numeración automática, sheet properties y fields, publicación de sets completos, y archiving. Diferencia entre sheet sets y métodos tradicionales de gestión de planos.

## Proyecto Práctico del Módulo

Desarrollarás un **Proyecto Multi-Disciplinario de Edificio de Oficinas** con los siguientes componentes:

1. **Archivo Base Arquitectónico** (ARQ-Base.dwg): Planta arquitectónica master
2. **Archivo Estructural** (EST-Estructura.dwg): Referencia ARQ-Base, agrega elementos estructurales
3. **Archivo Eléctrico** (ELEC-Instalaciones.dwg): Referencia ARQ-Base, diseño eléctrico
4. **Archivo Mecánico** (MEC-HVAC.dwg): Referencia ARQ-Base, ductos y equipos
5. **Archivo de Coordinación** (COORD-General.dwg): Referencia todos los archivos anteriores como overlay
6. **Sheet Set** organizando todos los layouts para publicación
7. **eTransmit Package** del proyecto completo

El proyecto simulará workflow real de coordinación BIM 2D donde cambios en el modelo base se reflejan en archivos dependientes.

## Duración Total

**6 horas** (6 lecciones de 1 hora cada una)

## Requisitos Previos

- Dominio de creación de bloques (Módulo 1)
- Comprensión de layers y propiedades de objetos
- Experiencia trabajando con múltiples archivos DWG
- Familiaridad con layouts y viewports

## Recursos Incluidos

- Archivos DWG de proyecto multi-disciplinario
- PDFs e imágenes de ejemplo para underlays
- Plantillas de Transmittal Setup (.dts)
- Sheet Set templates (.dst)
- Guía de mejores prácticas para xrefs
- Videos de workflows de coordinación

## Software Requerido

- AutoCAD 2026 (versiones anteriores tienen limitaciones en Sheet Sets)
- Visor de PDF (Adobe Reader o similar)

## Evaluación

- Ejercicios prácticos de configuración de xrefs
- Proyecto de coordinación multi-disciplinaria
- Creación de transmittal package completo
- Sheet set funcional con propiedades automáticas

## Conexión con Otros Módulos

- **Módulo 1:** Bloques pueden usarse en xrefs, data extraction cruza múltiples xrefs
- **Módulo 3:** Objetos anotativos funcionan correctamente con xrefs
- **Módulo 4:** Automation scripts pueden gestionar xrefs masivamente

Dominar referencias externas es crítico para proyectos profesionales de escala media y grande, permitiendo colaboración eficiente y minimizando riesgo de desincronización.
