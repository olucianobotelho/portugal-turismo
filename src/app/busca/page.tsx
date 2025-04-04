'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Card from '../../components/ui/Card';

// Simulated destination data (same as the destinations page)
const todosDestinos = [
  {
    id: 1,
    titulo: 'Lisbon',
    descricao: 'Capital of Portugal, known for its rich history, architecture and gastronomy.',
    imagem: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=800&q=80',
    slug: 'lisboa',
    regiao: 'center',
    categorias: ['city', 'culture', 'gastronomy'],
    preco: 2 // Price level from 1 to 3
  },
  {
    id: 2,
    titulo: 'Porto',
    descricao: 'Famous for Port wine production and its enchanting riverside landscape.',
    imagem: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
    slug: 'porto',
    regiao: 'north',
    categorias: ['city', 'wine', 'culture'],
    preco: 2
  },
  {
    id: 3,
    titulo: 'Algarve',
    descricao: 'Coastal region with stunning beaches and impressive cliffs.',
    imagem: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
    slug: 'algarve',
    regiao: 'south',
    categorias: ['beach', 'nature', 'resort'],
    preco: 3
  },
  {
    id: 4,
    titulo: 'Madeira',
    descricao: 'Paradise island known for its forests, mountains and mild climate throughout the year.',
    imagem: 'https://images.unsplash.com/photo-1592985684811-5280406f3fe5?auto=format&fit=crop&w=800&q=80',
    slug: 'madeira',
    regiao: 'islands',
    categorias: ['nature', 'adventure', 'mountain'],
    preco: 2
  },
  {
    id: 5,
    titulo: 'Coimbra',
    descricao: 'Historic university city with one of the oldest universities in Europe.',
    imagem: 'https://images.unsplash.com/photo-1574700273208-e71f048e2be1?auto=format&fit=crop&w=800&q=80',
    slug: 'coimbra',
    regiao: 'center',
    categorias: ['city', 'culture', 'university'],
    preco: 1
  },
  {
    id: 6,
    titulo: 'Sintra',
    descricao: 'Charming city known for its romantic palaces and mountainous landscape.',
    imagem: 'https://images.unsplash.com/photo-1559629427-08fd7de7e31c?auto=format&fit=crop&w=800&q=80',
    slug: 'sintra',
    regiao: 'center',
    categorias: ['culture', 'palace', 'nature'],
    preco: 2
  },
  {
    id: 7,
    titulo: 'Azores',
    descricao: 'Archipelago of volcanic islands with breathtaking landscapes and abundant marine life.',
    imagem: 'https://images.unsplash.com/photo-1627755244677-35b8d37b3c4e?auto=format&fit=crop&w=800&q=80',
    slug: 'acores',
    regiao: 'islands',
    categorias: ['nature', 'adventure', 'volcano'],
    preco: 2
  },
  {
    id: 8,
    titulo: 'Évora',
    descricao: 'Historic city with a well-preserved center and ancient Roman monuments.',
    imagem: 'https://images.unsplash.com/photo-1582289545741-dcd93619a0d4?auto=format&fit=crop&w=800&q=80',
    slug: 'evora',
    regiao: 'alentejo',
    categorias: ['city', 'culture', 'history'],
    preco: 1
  }
];

export default function BuscaPage() {
  const searchParams = useSearchParams();
  const termoBusca = searchParams?.get('q') || '';
  
  // State for filtered results
  const [resultados, setResultados] = useState<typeof todosDestinos>([]);
  
  // State for filters
  const [filtros, setFiltros] = useState({
    regiao: 'all',
    categoria: 'all',
    preco: 0
  });
  
  // State to control if filters are visible on mobile devices
  const [filtrosVisiveis, setFiltrosVisiveis] = useState(false);

  // Apply search and filters
  useEffect(() => {
    if (!termoBusca && filtros.regiao === 'all' && filtros.categoria === 'all' && filtros.preco === 0) {
      setResultados(todosDestinos);
      return;
    }
    
    let resultadosFiltrados = [...todosDestinos];
    
    // Filter by search term
    if (termoBusca) {
      const termo = termoBusca.toLowerCase();
      resultadosFiltrados = resultadosFiltrados.filter(destino => 
        destino.titulo.toLowerCase().includes(termo) || 
        destino.descricao.toLowerCase().includes(termo) ||
        destino.categorias.some(cat => cat.toLowerCase().includes(termo)) ||
        destino.regiao.toLowerCase().includes(termo)
      );
    }
    
    // Apply additional filters
    if (filtros.regiao !== 'all') {
      resultadosFiltrados = resultadosFiltrados.filter(destino => destino.regiao === filtros.regiao);
    }
    
    if (filtros.categoria !== 'all') {
      resultadosFiltrados = resultadosFiltrados.filter(destino => 
        destino.categorias.includes(filtros.categoria)
      );
    }
    
    if (filtros.preco > 0) {
      resultadosFiltrados = resultadosFiltrados.filter(destino => destino.preco === filtros.preco);
    }
    
    setResultados(resultadosFiltrados);
  }, [termoBusca, filtros]);

  // Lists of options for filters (same as the destinations page)
  const regioes = ['all', 'north', 'center', 'south', 'alentejo', 'islands'];
  const categorias = ['all', 'city', 'beach', 'nature', 'culture', 'wine', 'adventure', 'gastronomy', 'resort', 'mountain', 'history'];
  const precos = [
    { valor: 0, label: 'All prices' },
    { valor: 1, label: '€ Budget' },
    { valor: 2, label: '€€ Medium' },
    { valor: 3, label: '€€€ Premium' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {termoBusca ? `Results for "${termoBusca}"` : 'All destinations'}
        </h1>
        <p className="text-lg text-cinza-pedra">
          {resultados.length === 0 
            ? 'No results found. Try other terms or remove filters.' 
            : `We found ${resultados.length} ${resultados.length === 1 ? 'destination' : 'destinations'} for you to explore.`}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Side filters (desktop version) */}
        <aside className="hidden lg:block w-full lg:w-1/4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-6">Filter Results</h2>
          
          <div className="space-y-6">
            {/* Region filter */}
            <div>
              <label htmlFor="regiao-desktop" className="block text-sm font-medium mb-2">Region</label>
              <select
                id="regiao-desktop"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                value={filtros.regiao}
                onChange={(e) => setFiltros({...filtros, regiao: e.target.value})}
              >
                {regioes.map((regiao) => (
                  <option key={regiao} value={regiao}>
                    {regiao.charAt(0).toUpperCase() + regiao.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Category filter */}
            <div>
              <label htmlFor="categoria-desktop" className="block text-sm font-medium mb-2">Category</label>
              <select
                id="categoria-desktop"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                value={filtros.categoria}
                onChange={(e) => setFiltros({...filtros, categoria: e.target.value})}
              >
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price filter */}
            <div>
              <label htmlFor="preco-desktop" className="block text-sm font-medium mb-2">Price Level</label>
              <select
                id="preco-desktop"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                value={filtros.preco}
                onChange={(e) => setFiltros({...filtros, preco: parseInt(e.target.value)})}
              >
                {precos.map((preco) => (
                  <option key={preco.valor} value={preco.valor}>
                    {preco.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Button to clear filters */}
            <button
              className="w-full mt-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-cinza-pedra dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={() => setFiltros({regiao: 'all', categoria: 'all', preco: 0})}
            >
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Button to show/hide filters (mobile version) */}
        <div className="lg:hidden mb-4">
          <button
            className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex justify-between items-center"
            onClick={() => setFiltrosVisiveis(!filtrosVisiveis)}
          >
            <span className="font-medium">Filter Results</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transform transition-transform ${filtrosVisiveis ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Mobile filters */}
          {filtrosVisiveis && (
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-2">
              <div className="space-y-6">
                {/* Filters (same content as desktop version) */}
                <div>
                  <label htmlFor="regiao-mobile" className="block text-sm font-medium mb-2">Region</label>
                  <select
                    id="regiao-mobile"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                    value={filtros.regiao}
                    onChange={(e) => setFiltros({...filtros, regiao: e.target.value})}
                  >
                    {regioes.map((regiao) => (
                      <option key={regiao} value={regiao}>
                        {regiao.charAt(0).toUpperCase() + regiao.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="categoria-mobile" className="block text-sm font-medium mb-2">Category</label>
                  <select
                    id="categoria-mobile"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                    value={filtros.categoria}
                    onChange={(e) => setFiltros({...filtros, categoria: e.target.value})}
                  >
                    {categorias.map((categoria) => (
                      <option key={categoria} value={categoria}>
                        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="preco-mobile" className="block text-sm font-medium mb-2">Price Level</label>
                  <select
                    id="preco-mobile"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                    value={filtros.preco}
                    onChange={(e) => setFiltros({...filtros, preco: parseInt(e.target.value)})}
                  >
                    {precos.map((preco) => (
                      <option key={preco.valor} value={preco.valor}>
                        {preco.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className="w-full mt-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-cinza-pedra dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors"
                  onClick={() => setFiltros({regiao: 'all', categoria: 'all', preco: 0})}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search results */}
        <div className="w-full lg:w-3/4">
          {resultados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultados.map((destino) => (
                <motion.div 
                  key={destino.id}
                  className="h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link href={`/destino/${destino.slug}`} className="h-full block">
                    <Card
                      title={destino.titulo}
                      description={destino.descricao}
                      imageUrl={destino.imagem}
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {destino.regiao.charAt(0).toUpperCase() + destino.regiao.slice(1)}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        {'€'.repeat(destino.preco)}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">No results found</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your filters or using different terms in your search.
              </p>
              <button 
                className="bg-azul-maritimo hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setFiltros({regiao: 'all', categoria: 'all', preco: 0})}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 