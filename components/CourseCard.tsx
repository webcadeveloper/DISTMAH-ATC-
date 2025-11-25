'use client';

import Image from 'next/image';
import { CourseMetadata } from '@/lib/course-loader';
import { Clock, BookOpen, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CourseCardProps {
  course: CourseMetadata;
  onViewDetails?: (course: CourseMetadata) => void;
}

export default function CourseCard({ course, onViewDetails }: CourseCardProps) {
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
          background: '#000000',
          borderRadius: '1.2rem',
          boxShadow: isHovered
            ? '0 0 0 1px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.4)'
            : '0 0 0 1px rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.3)',
        }}
      >
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

        <div className="relative h-44 w-full overflow-hidden" style={{ borderRadius: '1.2rem 1.2rem 0 0' }}>
          <div className="absolute inset-0 bg-black" />
          <motion.div
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Image
              src={course.imagen || '/images/course-placeholder.jpg'}
              alt={course.titulo || 'Curso DISTMAH'}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />

          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            {course.version === '2026' && (
              <Badge className="bg-neutral-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 border border-white/10">
                NUEVO 2026
              </Badge>
            )}
            <Badge className={`${getLevelBadgeStyle(course.nivel)} text-[10px] font-semibold px-2 py-0.5 ml-auto`}>
              {course.nivel}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
              {course.categoria}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span className="text-xs font-bold text-neutral-400">{course.rating || '4.9'}</span>
            </div>
          </div>

          <h3 className="font-bold text-base text-neutral-100 leading-tight mb-3 line-clamp-2 group-hover:text-white transition-colors">
            {course.titulo}
          </h3>

          <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 mb-4 flex-grow">
            {course.descripcion}
          </p>

          <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-medium mb-4 pb-4 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-600" />
              {course.duracion}
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-neutral-600" />
              {course.nivel}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-600 font-medium line-through">
                ${(course.precio * 1.2).toFixed(0)}
              </span>
              <span className="text-lg font-bold text-white">
                ${course.precio}
              </span>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onViewDetails?.(course);
                }}
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium px-4 py-2 h-auto border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{ borderRadius: '0.4rem' }}
              >
                Ver Detalles
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
