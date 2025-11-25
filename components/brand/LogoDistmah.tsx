import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    variant?: 'horizontal' | 'icon';
}

export function LogoDistmah({ className, variant = 'horizontal' }: Props) {
    if (variant === 'icon') {
        return (
            <div className={cn("relative w-12 h-12", className)}>
                <img
                    src="/images/logodis.PNG"
                    alt="DISTMAH"
                    className="w-full h-full object-contain"
                />
            </div>
        );
    }

    return (
        <div className={cn("relative h-16", className)}>
            <img
                src="/images/logodis.PNG"
                alt="DISTMAH - Centro de Entrenamiento Digital"
                className="h-full w-auto object-contain"
            />
        </div>
    );
}
