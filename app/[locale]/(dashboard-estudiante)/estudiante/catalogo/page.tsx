import { getAllCourses } from '@/lib/course-loader';
import CatalogoDashboard from './CatalogoDashboard';

export const revalidate = 3600;

export default async function CatalogoPage() {
  const courses = await getAllCourses();
  return <CatalogoDashboard courses={courses} />;
}
