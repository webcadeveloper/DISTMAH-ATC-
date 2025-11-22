import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Star } from 'lucide-react';
import { Course } from '@/lib/courses-catalog-2026';
import { AnimatedElement } from '@/components/animations/AnimatedElement';

interface CourseCardProps {
    course: Course;
    index?: number;
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
    return (
        <AnimatedElement
            animation={{
                translateY: [50, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 600,
                ease: 'outExpo',
            }}
            delay={index * 100}
            trigger="scroll"
        >
            <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 group h-full flex flex-col border-neutral-200">
            <div className="relative h-48 w-full overflow-hidden">
                {/* Image placeholder if no image provided */}
                <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
                {course.image && (
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                )}
                <div className="absolute top-3 right-3">
                    <Badge variant={course.level === 'Básico' ? 'secondary' : course.level === 'Intermedio' ? 'default' : 'destructive'} className="font-medium shadow-sm">
                        {course.level}
                    </Badge>
                </div>
                {course.version === '2026' && (
                    <div className="absolute top-3 left-3">
                        <Badge className="bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-sm">
                            NUEVO 2026
                        </Badge>
                    </div>
                )}
            </div>

            <CardHeader className="p-5 pb-2">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                        {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-xs font-bold text-neutral-700">4.9</span>
                    </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary-600 transition-colors line-clamp-2">
                    {course.title}
                </h3>
            </CardHeader>

            <CardContent className="p-5 pt-2 flex-grow">
                <p className="text-neutral-500 text-sm line-clamp-3 mb-4">
                    {course.subtitle || course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-neutral-500 font-medium">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-neutral-400" />
                        {course.duration}h
                    </div>
                    <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-neutral-400" />
                        {course.sessions} Sesiones
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 border-t border-neutral-100 mt-auto bg-neutral-50/50">
                <div className="flex items-center justify-between w-full mt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-400 font-medium line-through">
                            ${(course.price * 1.2).toFixed(0)}
                        </span>
                        <span className="text-xl font-bold text-neutral-900">
                            ${course.price}
                        </span>
                    </div>
                    <Link href={`/cursos/${course.slug}`}>
                        <Button size="sm" className="bg-neutral-900 hover:bg-primary-600 text-white transition-colors">
                            Ver Curso
                        </Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
        </AnimatedElement>
    );
}
