'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  initialDate?: Date;
  highlightedDates?: Date[];
  className?: string;
}

export default function Calendar({
  onDateSelect,
  minDate = new Date(),
  maxDate,
  initialDate = new Date(),
  highlightedDates = [],
  className = '',
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Obtém o primeiro dia do mês atual
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  
  // Obtém o último dia do mês atual
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  // Obtém o dia da semana do primeiro dia do mês (0 = Domingo, 1 = Segunda, etc.)
  const startDay = firstDayOfMonth.getDay();

  // Nomes dos meses em português
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Nomes dos dias da semana em português (começando por domingo)
  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Vai para o mês anterior
  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    
    // Verifica se o mês anterior está dentro dos limites
    if (!minDate || previousMonth >= new Date(minDate.getFullYear(), minDate.getMonth(), 1)) {
      setCurrentDate(previousMonth);
    }
  };

  // Vai para o próximo mês
  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    // Verifica se o próximo mês está dentro dos limites
    if (!maxDate || nextMonth <= new Date(maxDate.getFullYear(), maxDate.getMonth() + 1, 0)) {
      setCurrentDate(nextMonth);
    }
  };

  // Seleciona uma data
  const handleDateSelect = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    // Verifica se a data selecionada está dentro dos limites
    const isAfterMinDate = !minDate || selected >= new Date(minDate.setHours(0, 0, 0, 0));
    const isBeforeMaxDate = !maxDate || selected <= new Date(maxDate.setHours(23, 59, 59, 999));
    
    if (isAfterMinDate && isBeforeMaxDate) {
      setSelectedDate(selected);
      if (onDateSelect) {
        onDateSelect(selected);
      }
    }
  };

  // Verifica se uma data está destacada
  const isHighlighted = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return highlightedDates.some(
      highlightedDate => 
        highlightedDate.getDate() === date.getDate() &&
        highlightedDate.getMonth() === date.getMonth() &&
        highlightedDate.getFullYear() === date.getFullYear()
    );
  };

  // Verifica se uma data está selecionada
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  // Verifica se uma data está desabilitada
  const isDisabled = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    date.setHours(0, 0, 0, 0);
    
    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      if (date < min) return true;
    }
    
    if (maxDate) {
      const max = new Date(maxDate);
      max.setHours(23, 59, 59, 999);
      if (date > max) return true;
    }
    
    return false;
  };

  // Gera as células do calendário
  const generateCalendarCells = () => {
    const cells = [];
    
    // Células em branco para os dias antes do primeiro dia do mês
    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`empty-${i}`} className="h-10 px-2 py-1"></div>);
    }
    
    // Células para os dias do mês
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const disabled = isDisabled(day);
      const selected = isSelected(day);
      const highlighted = isHighlighted(day);
      const today = 
        day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() && 
        currentDate.getFullYear() === new Date().getFullYear();
      
      cells.push(
        <motion.div
          key={`day-${day}`}
          whileHover={!disabled ? { scale: 1.1 } : {}}
          whileTap={!disabled ? { scale: 0.95 } : {}}
          className={`
            h-10 flex items-center justify-center rounded-full cursor-pointer
            ${disabled ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100 text-preto-oliva'}
            ${selected ? 'bg-azul-maritimo text-white' : ''}
            ${highlighted && !selected ? 'bg-amarelo-dourado/20 text-amarelo-dourado font-semibold' : ''}
            ${today && !selected ? 'border border-azul-maritimo text-azul-maritimo font-semibold' : ''}
          `}
          onClick={() => !disabled && handleDateSelect(day)}
        >
          {day}
        </motion.div>
      );
    }
    
    return cells;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {/* Cabeçalho do calendário */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-1 rounded-full hover:bg-gray-100 text-preto-oliva"
          aria-label="Mês anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-xl font-bold text-preto-oliva">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        
        <button
          onClick={goToNextMonth}
          className="p-1 rounded-full hover:bg-gray-100 text-preto-oliva"
          aria-label="Próximo mês"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dias da semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day, index) => (
          <div key={index} className="text-center text-sm font-medium text-cinza-pedra">
            {day}
          </div>
        ))}
      </div>
      
      {/* Grade do calendário */}
      <div className="grid grid-cols-7 gap-1">
        {generateCalendarCells()}
      </div>
      
      {/* Legenda */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-amarelo-dourado/20"></div>
          <span className="text-cinza-pedra">Promoção</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-azul-maritimo"></div>
          <span className="text-cinza-pedra">Hoje</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-azul-maritimo"></div>
          <span className="text-cinza-pedra">Selecionado</span>
        </div>
      </div>
    </div>
  );
} 