'use client';

import React, { useState } from 'react';
import Autocomplete from './Autocomplete';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = 'Onde você quer conhecer em Portugal?',
  onSearch,
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleSuggestionSelect = (suggestion: any) => {
    setQuery(suggestion.name);
    if (onSearch) {
      onSearch(suggestion.name);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="relative flex w-full max-w-2xl"
      >
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-cinza-pedra"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full p-4 pl-10 text-base rounded-lg bg-branco-calcario border-2 border-cinza-pedra/20 focus:border-azul-maritimo focus:ring-2 focus:ring-azul-maritimo/20 outline-none transition-all"
            placeholder={placeholder}
          />
        </div>
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 bg-vermelho-portugues text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Pesquisar
        </button>
      </form>
      
      {/* Componente de autocompletar */}
      <Autocomplete 
        query={query} 
        onSelect={handleSuggestionSelect} 
      />
    </div>
  );
} 