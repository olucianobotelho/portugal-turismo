'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SearchBar from './ui/SearchBar';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onSearch?: (query: string) => void;
}

export default function Hero({ 
  title = "Descubra o Melhor de Portugal",
  subtitle = "Explore destinos únicos, cultura rica e experiências inesquecíveis em terras lusitanas",
  ctaText = "Explorar Destinos",
  backgroundImage = 'https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1920&q=80',
  onSearch 
}: HeroProps) {
  const router = useRouter();

  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/busca?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative h-[600px] w-full -mt-16">
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Conteúdo central */}
      <div className="relative h-full flex flex-col items-center justify-center container mx-auto px-4 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 mt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title.includes("Portugal") ? (
            <>
              {title.split("Portugal")[0]}
              <span className="text-amarelo-dourado highlight">Portugal</span>
              {title.split("Portugal")[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-white mb-8 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SearchBar 
            onSearch={handleSearch} 
            className="shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
} 