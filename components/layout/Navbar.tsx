'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoDistmah } from '@/components/brand/LogoDistmah';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Navbar() {
    const t = useTranslations('Navbar');
    const tCommon = useTranslations('Common');

    return (
        <nav className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/">
                    <LogoDistmah variant="horizontal" className="scale-90" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/cursos" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('courses')}
                    </Link>
                    <Link href="/certificaciones" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('certifications')}
                    </Link>
                    <Link href="/empresas" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('companies')}
                    </Link>
                    <Link href="/nosotros" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('about')}
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link href="/instructor/dashboard">
                        <Button variant="ghost" className="text-neutral-600">
                            {tCommon('login')}
                        </Button>
                    </Link>
                    <Link href="/estudiante/dashboard">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20">
                            {tCommon('register')}
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
