'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from '../../components/ui/Calendar';

export default function PlanningPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [destination, setDestination] = useState<string>('');
  const [numAdults, setNumAdults] = useState<number>(2);
  const [numChildren, setNumChildren] = useState<number>(0);
  const [numNights, setNumNights] = useState<number>(3);
  
  // Datas com promoção (simulação)
  const promotionDates = [
    new Date(new Date().getFullYear(), new Date().getMonth(), 15),
    new Date(new Date().getFullYear(), new Date().getMonth(), 16),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 5),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 6),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 7),
  ];
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Planejamento criado com sucesso para ${destination} com data de ida em ${selectedDate?.toLocaleDateString('pt-BR')}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-preto-oliva">Planeje Sua Viagem</h1>
        <p className="text-xl text-cinza-pedra max-w-3xl mx-auto">
          Encontre as melhores opções para sua próxima aventura em Portugal,
          organize datas, escolha destinos e prepare-se para uma experiência incrível.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Coluna do Calendário */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-preto-oliva">Selecione a Data</h2>
            <Calendar 
              onDateSelect={handleDateSelect}
              highlightedDates={promotionDates}
              className="mb-4"
            />
            
            {selectedDate && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-azul-maritimo/10 rounded-lg"
              >
                <p className="font-medium text-preto-oliva">Data selecionada:</p>
                <p className="text-lg text-cinza-pedra">{selectedDate.toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Coluna do Formulário */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-preto-oliva">Detalhes da Viagem</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="destination" className="block text-sm font-semibold text-preto-oliva mb-2">
                  Destino
                </label>
                <select
                  id="destination"
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white text-preto-oliva focus:border-azul-maritimo focus:ring-1 focus:ring-azul-maritimo"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                >
                  <option value="">Selecione um destino</option>
                  <option value="lisboa">Lisboa</option>
                  <option value="porto">Porto</option>
                  <option value="algarve">Algarve</option>
                  <option value="madeira">Madeira</option>
                  <option value="acores">Açores</option>
                  <option value="coimbra">Coimbra</option>
                  <option value="evora">Évora</option>
                  <option value="sintra">Sintra</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="numAdults" className="block text-sm font-semibold text-preto-oliva mb-2">
                    Adultos
                  </label>
                  <div className="flex">
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-l-lg border border-gray-200"
                      onClick={() => setNumAdults(Math.max(1, numAdults - 1))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-preto-oliva" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      id="numAdults"
                      className="w-full p-2 text-center border-y border-gray-200 text-preto-oliva"
                      value={numAdults}
                      readOnly
                    />
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-r-lg border border-gray-200"
                      onClick={() => setNumAdults(numAdults + 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-preto-oliva" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="numChildren" className="block text-sm font-semibold text-preto-oliva mb-2">
                    Crianças
                  </label>
                  <div className="flex">
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-l-lg border border-gray-200"
                      onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-preto-oliva" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      id="numChildren"
                      className="w-full p-2 text-center border-y border-gray-200 text-preto-oliva"
                      value={numChildren}
                      readOnly
                    />
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-r-lg border border-gray-200"
                      onClick={() => setNumChildren(numChildren + 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-preto-oliva" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="numNights" className="block text-sm font-semibold text-preto-oliva mb-2">
                    Noites
                  </label>
                  <div className="flex">
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-l-lg border border-gray-200"
                      onClick={() => setNumNights(Math.max(1, numNights - 1))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-preto-oliva" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      id="numNights"
                      className="w-full p-2 text-center border-y border-gray-200 text-preto-oliva"
                      value={numNights}
                      readOnly
                    />
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-r-lg border border-gray-200"
                      onClick={() => setNumNights(numNights + 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-preto-oliva" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-azul-maritimo hover:bg-azul-maritimo/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Buscar Disponibilidade
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 