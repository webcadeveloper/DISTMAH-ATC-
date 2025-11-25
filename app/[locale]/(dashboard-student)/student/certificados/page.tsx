import { Metadata } from 'next';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { CertificatesList } from '@/components/student/CertificatesList';

export const metadata: Metadata = {
  title: 'Mis Certificados',
};

export default async function CertificadosPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mis Certificados</h1>
        <p className="text-gray-500 mt-1">
          Visualiza, descarga y comparte tus certificados de cursos completados
        </p>
      </div>

      <CertificatesList userId={session.user.id} />
    </div>
  );
}
