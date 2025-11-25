'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Star } from 'lucide-react';
import type { CourseMetadata } from '@/lib/course-loader';
import { AnimatedElement } from '@/components/animations/AnimatedElement';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CourseCardProps {
    course: any;
    index?: number;
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
    const [isHovered, setIsHovered] = useState(false);

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
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' }
                }}
            >
            <Card className="overflow-hidden transition-all duration-300 group h-full flex flex-col border-neutral-200 shadow-md hover:shadow-2xl">
            <div className="relative h-48 w-full overflow-hidden">
                {/* Image placeholder if no image provided */}
                <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
                {course.image && (
                    <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="w-full h-full"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                )}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute top-3 right-3">
                    <Badge variant={course.level === 'Básico' ? 'secondary' : course.level === 'Intermedio' ? 'default' : 'destructive'} className="font-medium shadow-sm">
                        {course.level}
                    </Badge>
                </div>
                {course.version === '2026' && (
                    <motion.div
                        className="absolute top-3 left-3"
                        initial={{ scale: 1 }}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Badge className="bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-sm">
                            NUEVO 2026
                        </Badge>
                    </motion.div>
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
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button size="sm" className="bg-neutral-900 hover:bg-primary-600 text-white transition-colors">
                                Ver Curso
                            </Button>
                        </motion.div>
                    </Link>
                </div>
            </CardFooter>
        </Card>
        </motion.div>
        </AnimatedElement>
    );
}
