import { getAllCourses } from '@/lib/course-loader';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import CursosClientPage from './CursosClientPage';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Cat\u00e1logo de Cursos 2026 | DISTMAH ATC',
  description: 'Explora nuestro cat\u00e1logo completo de cursos Autodesk 2026: AutoCAD, Revit, Civil 3D, Navisworks. Certificaci\u00f3n oficial, instructores expertos, metodolog\u00eda pr\u00e1ctica.',
  keywords: [
    'cursos Autodesk 2026',
    'AutoCAD 2026',
    'Revit 2026',
    'Civil 3D 2026',
    'Navisworks 2026',
    'cat\u00e1logo cursos',
    'certificaci\u00f3n Autodesk',
    'DISTMAH',
  ],
  openGraph: {
    title: 'Cat\u00e1logo de Cursos Autodesk 2026 | DISTMAH ATC',
    description: 'Todos los cursos de AutoCAD, Revit, Civil 3D y Navisworks 2026 con certificaci\u00f3n oficial',
    url: 'https://distmah-atc.com/cursos',
    type: 'website',
  },
};

export default async function CursosPage() {
  const catalogData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cat\u00e1logo de Cursos Autodesk 2026',
    description: 'Cursos profesionales de Autodesk con certificaci\u00f3n oficial',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'DISTMAH ATC',
      url: 'https://distmah-atc.com',
    },
  };

  const courses = await getAllCourses();

  return (
    <>
      <JsonLd data={catalogData} />
      <CursosClientPage courses={courses} />
    </>
  );
}
