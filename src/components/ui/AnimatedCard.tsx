import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedCard({
  title,
  description,
  imageUrl,
  delay = 0,
  onClick,
  className = '',
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`overflow-hidden rounded-lg bg-white shadow-md cursor-pointer ${className}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-preto-oliva">{title}</h3>
        <p className="mt-2 text-sm text-cinza-pedra line-clamp-2">{description}</p>
        
        <motion.button
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="mt-4 text-azul-maritimo font-semibold text-sm flex items-center"
        >
          Explorar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
} 