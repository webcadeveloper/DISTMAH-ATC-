'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Star } from 'lucide-react';
import { AnimatedElement } from '@/components/animations/AnimatedElement';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CourseCardProps {
    course: any;
    index?: number;
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const getLevelBadgeStyle = (level: string) => {
        switch (level) {
            case 'Básico':
                return 'bg-amber-500/90 text-white';
            case 'Intermedio':
                return 'bg-orange-500/90 text-white';
            case 'Avanzado':
            case 'Básico a Avanzado':
            case 'Intermedio a Avanzado':
                return 'bg-red-500/90 text-white';
            default:
                return 'bg-neutral-500/90 text-white';
        }
    };

    return (
        <AnimatedElement
            animation={{
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 500,
                ease: 'outExpo',
            }}
            delay={index * 80}
            trigger="scroll"
        >
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{
                    y: -6,
                    transition: { duration: 0.4, ease: 'easeOut' }
                }}
                className="h-full"
            >
                <div
                    className="relative h-full flex flex-col overflow-hidden transition-all duration-500 group"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, #3a3a3a 0%, #1a1a1a 64%)',
                        borderRadius: '1.2rem',
                        boxShadow: isHovered
                            ? 'inset 0 1px 0.1rem -0.5rem rgba(255,255,255,0.4), 0 0 0 1px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.4)'
                            : 'inset 0 1px 0.2rem -1rem rgba(255,255,255,0), 0 0 0 1px rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.3)',
                    }}
                >
                    {/* Outer glow border effect */}
                    <div
                        className="absolute inset-0 pointer-events-none transition-all duration-500"
                        style={{
                            borderRadius: '1.4rem',
                            margin: '-0.15rem',
                            boxShadow: isHovered
                                ? 'inset 0 0 0 1px rgba(255,255,255,0.08)'
                                : 'inset 0 0 0 1px rgba(255,255,255,0.03)',
                        }}
                    />

                    {/* Image Section */}
                    <div className="relative h-44 w-full overflow-hidden" style={{ borderRadius: '1.2rem 1.2rem 0 0' }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-700" />
                        <motion.div
                            animate={{ scale: isHovered ? 1.08 : 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="w-full h-full"
                        >
                            <Image
                                src={course.image || '/images/course-placeholder.jpg'}
                                alt={course.title || 'Curso DISTMAH'}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                            {course.version === '2026' && (
                                <Badge className="bg-neutral-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 border border-white/10">
                                    NUEVO 2026
                                </Badge>
                            )}
                            <Badge className={`${getLevelBadgeStyle(course.level)} text-[10px] font-semibold px-2 py-0.5 ml-auto`}>
                                {course.level}
                            </Badge>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-grow p-5">
                        {/* Category & Rating */}
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                                {course.category}
                            </span>
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                <span className="text-xs font-bold text-neutral-400">4.9</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-base text-neutral-100 leading-tight mb-3 line-clamp-2 group-hover:text-white transition-colors">
                            {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 mb-4 flex-grow">
                            {course.subtitle || course.description}
                        </p>

                        {/* Duration & Sessions */}
                        <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-medium mb-4 pb-4 border-b border-white/5">
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-neutral-600" />
                                {course.duration}h
                            </div>
                            <div className="flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-neutral-600" />
                                {course.sessions} Sesiones
                            </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-neutral-600 font-medium line-through">
                                    ${(course.price * 1.2).toFixed(0)}
                                </span>
                                <span className="text-lg font-bold text-white">
                                    ${course.price}
                                </span>
                            </div>
                            <Link href={`/cursos/${course.slug}`}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Button
                                        size="sm"
                                        className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium px-4 py-2 h-auto border border-white/10 hover:border-white/20 transition-all duration-300"
                                        style={{ borderRadius: '0.4rem' }}
                                    >
                                        Ver Curso
                                    </Button>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatedElement>
    );
}
