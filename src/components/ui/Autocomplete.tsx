import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuggestionItem {
  id: string;
  name: string;
  type: 'cidade' | 'regiao' | 'atracao';
}

interface AutocompleteProps {
  query: string;
  onSelect: (item: SuggestionItem) => void;
  className?: string;
}

// Simulação de sugestões para demonstração
const mockSuggestions: SuggestionItem[] = [
  { id: '1', name: 'Lisboa', type: 'cidade' },
  { id: '2', name: 'Porto', type: 'cidade' },
  { id: '3', name: 'Algarve', type: 'regiao' },
  { id: '4', name: 'Sintra', type: 'cidade' },
  { id: '5', name: 'Torre de Belém', type: 'atracao' },
  { id: '6', name: 'Mosteiro dos Jerónimos', type: 'atracao' },
  { id: '7', name: 'Douro', type: 'regiao' },
  { id: '8', name: 'Cascais', type: 'cidade' },
  { id: '9', name: 'Palácio da Pena', type: 'atracao' },
  { id: '10', name: 'Alentejo', type: 'regiao' },
];

export default function Autocomplete({ query, onSelect, className = '' }: AutocompleteProps) {
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filtrar sugestões com base na consulta
    if (query.length >= 2) {
      const normalizedQuery = query.toLowerCase();
      const filtered = mockSuggestions.filter(item => 
        item.name.toLowerCase().includes(normalizedQuery)
      );
      setSuggestions(filtered);
      setIsVisible(filtered.length > 0);
    } else {
      setSuggestions([]);
      setIsVisible(false);
    }
  }, [query]);

  // Fechamento ao clicar fora do componente
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ícones para tipos de sugestão
  const typeIcons = {
    cidade: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    regiao: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    atracao: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  };

  const typeLabels = {
    cidade: 'Cidade',
    regiao: 'Região',
    atracao: 'Atração',
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg dark:bg-preto-oliva border border-cinza-pedra/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="max-h-60 overflow-auto py-1 text-base">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="cursor-pointer group py-2 px-3 flex items-center hover:bg-branco-calcario dark:hover:bg-cinza-pedra/20"
                  onClick={() => {
                    onSelect(suggestion);
                    setIsVisible(false);
                  }}
                >
                  <div className="mr-3 text-cinza-pedra group-hover:text-azul-maritimo">
                    {typeIcons[suggestion.type]}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-preto-oliva dark:text-branco-calcario">{suggestion.name}</p>
                    <p className="text-xs text-cinza-pedra">{typeLabels[suggestion.type]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 