# Guía de Carga de Multimedia

## Visión General
La plataforma DISTMAH permite a los instructores subir diversos tipos de contenido multimedia para enriquecer sus lecciones. Actualmente, el sistema soporta:
- **Imágenes**: Para ilustrar conceptos en el editor de texto.
- **Videos**: Lecciones principales o material de apoyo.
- **Archivos**: Recursos descargables (PDF, DWG, RVT, ZIP).

## Proveedores de Almacenamiento
El sistema está diseñado para ser agnóstico del proveedor, pero optimizado para el ecosistema Microsoft 365.

### 1. Microsoft OneDrive / SharePoint (Recomendado)
- **Uso**: Almacenamiento de archivos pesados (DWG, RVT) y videos originales.
- **Flujo**:
  1. El instructor selecciona un archivo.
  2. El sistema solicita una URL de subida a Microsoft Graph API.
  3. El archivo se sube directamente a la carpeta del curso en OneDrive.
  4. Se genera un enlace de visualización/descarga seguro.

### 2. Microsoft Stream
- **Uso**: Streaming de video adaptativo.
- **Flujo**:
  1. Los videos subidos a la carpeta "Videos" de OneDrive se procesan automáticamente.
  2. Se genera un embed code de Stream.
  3. El reproductor del curso utiliza este embed para mostrar el video.

### 3. Almacenamiento Local (Desarrollo)
- **Uso**: Entornos de prueba sin conexión a M365.
- **Flujo**: Los archivos se simulan como subidos y se devuelven URLs locales o mock.

## Límites y Restricciones
- **Tamaño Máximo**: 
  - Imágenes: 5 MB
  - Documentos: 50 MB
  - Videos: 2 GB (vía OneDrive)
- **Formatos Permitidos**:
  - Imágenes: .jpg, .png, .webp
  - Documentos: .pdf, .docx, .xlsx
  - CAD/BIM: .dwg, .rvt, .ifc
  - Video: .mp4, .mov

## Solución de Problemas
- **Error de Permisos**: Asegúrese de que la cuenta de servicio de Azure AD tenga permisos de escritura en el sitio de SharePoint.
- **Fallo en Subida**: Verifique su conexión a internet. Para archivos >100MB, el sistema utiliza subida por fragmentos (chunked upload) para mayor estabilidad.
