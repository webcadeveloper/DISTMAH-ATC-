'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        // Replace the locale in the pathname
        // Assumes pathname starts with /locale/ or is just /
        // This is a simplified version. For robust handling, use next-intl's navigation APIs if available or regex.
        // Since we are using middleware to rewrite/redirect, we can just push to the new locale prefix.

        // However, next-intl usually handles this via Link or router. 
        // A quick hack for this setup without full navigation config:
        const segments = pathname.split('/');
        if (segments[1] === 'es' || segments[1] === 'en') {
            segments[1] = newLocale;
            router.push(segments.join('/'));
        } else {
            router.push(`/${newLocale}${pathname}`);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-primary-600">
                    <Globe className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLocaleChange('es')} className={locale === 'es' ? 'bg-neutral-100 font-bold' : ''}>
                    Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLocaleChange('en')} className={locale === 'en' ? 'bg-neutral-100 font-bold' : ''}>
                    English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
