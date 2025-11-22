import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    variant?: 'horizontal' | 'icon';
}

export function LogoDistmah({ className, variant = 'horizontal' }: Props) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Icono: "D" con elementos geométricos de ingeniería */}
            <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg transform rotate-12" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-400 rounded-lg opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl z-10">D</span>
                </div>
                {/* Líneas de precisión */}
                <div className="absolute -right-1 top-2 w-3 h-0.5 bg-blue-400 z-10" />
                <div className="absolute -right-1 top-1/2 w-3 h-0.5 bg-blue-400 z-10" />
                <div className="absolute -right-1 bottom-2 w-3 h-0.5 bg-blue-400 z-10" />
            </div>

            {/* Texto */}
            {variant === 'horizontal' && (
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-neutral-900 tracking-tight leading-none">
                        DISTMAH
                    </span>
                    <span className="text-[10px] text-neutral-600 font-medium tracking-wide">
                        AUTODESK AUTHORIZED TRAINING CENTER
                    </span>
                </div>
            )}
        </div>
    );
}
