import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  rating?: number;
  onClick?: () => void;
  className?: string;
}

export default function Card({
  title,
  description,
  imageUrl,
  rating,
  onClick,
  className = '',
}: CardProps) {
  return (
    <div 
      className={`overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-preto-oliva">{title}</h3>
          {rating && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amarelo-dourado" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-semibold">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        <p className="mt-2 text-sm text-cinza-pedra line-clamp-2">{description}</p>
        
        <button className="mt-4 text-azul-maritimo font-semibold text-sm hover:underline">
          Explorar
        </button>
      </div>
    </div>
  );
} 