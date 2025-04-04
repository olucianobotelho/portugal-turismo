'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Card from '../../components/ui/Card';
import Image from 'next/image';

// Dados simulados de destinos (mesmos da página de destinos)
const todosDestinos = [
  {
    id: 1,
    titulo: 'Lisboa',
    descricao: 'Capital de Portugal, conhecida por sua rica história, arquitetura e gastronomia.',
    imagem: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=800&q=80',
    slug: 'lisboa',
    regiao: 'centro',
    categorias: ['cidade', 'cultura', 'gastronomia'],
    preco: 2 // Nível de preço de 1 a 3
  },
  {
    id: 2,
    titulo: 'Porto',
    descricao: 'Famosa pela produção de vinho do Porto e sua paisagem ribeirinha encantadora.',
    imagem: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
    slug: 'porto',
    regiao: 'norte',
    categorias: ['cidade', 'vinho', 'cultura'],
    preco: 2
  },
  {
    id: 3,
    titulo: 'Algarve',
    descricao: 'Região costeira com praias deslumbrantes e falésias impressionantes.',
    imagem: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
    slug: 'algarve',
    regiao: 'sul',
    categorias: ['praia', 'natureza', 'resort'],
    preco: 3
  },
  {
    id: 4,
    titulo: 'Madeira',
    descricao: 'Ilha paradisíaca conhecida por suas florestas, montanhas e clima ameno durante todo o ano.',
    imagem: 'https://images.unsplash.com/photo-1592985684811-5280406f3fe5?auto=format&fit=crop&w=800&q=80',
    slug: 'madeira',
    regiao: 'ilhas',
    categorias: ['natureza', 'aventura', 'montanha'],
    preco: 2
  },
  {
    id: 5,
    titulo: 'Coimbra',
    descricao: 'Cidade universitária histórica com uma das universidades mais antigas da Europa.',
    imagem: 'https://images.unsplash.com/photo-1574700273208-e71f048e2be1?auto=format&fit=crop&w=800&q=80',
    slug: 'coimbra',
    regiao: 'centro',
    categorias: ['cidade', 'cultura', 'universidade'],
    preco: 1
  },
  {
    id: 6,
    titulo: 'Sintra',
    descricao: 'Cidade encantadora conhecida por seus palácios românticos e paisagem montanhosa.',
    imagem: 'https://images.unsplash.com/photo-1559629427-08fd7de7e31c?auto=format&fit=crop&w=800&q=80',
    slug: 'sintra',
    regiao: 'centro',
    categorias: ['cultura', 'palácio', 'natureza'],
    preco: 2
  },
  {
    id: 7,
    titulo: 'Açores',
    descricao: 'Arquipélago de ilhas vulcânicas com paisagens de tirar o fôlego e vida marinha abundante.',
    imagem: 'https://images.unsplash.com/photo-1627755244677-35b8d37b3c4e?auto=format&fit=crop&w=800&q=80',
    slug: 'acores',
    regiao: 'ilhas',
    categorias: ['natureza', 'aventura', 'vulcão'],
    preco: 2
  },
  {
    id: 8,
    titulo: 'Évora',
    descricao: 'Cidade histórica com um centro bem preservado e monumentos romanos antigos.',
    imagem: 'https://images.unsplash.com/photo-1582289545741-dcd93619a0d4?auto=format&fit=crop&w=800&q=80',
    slug: 'evora',
    regiao: 'alentejo',
    categorias: ['cidade', 'cultura', 'história'],
    preco: 1
  }
];

export default function BuscaPage() {
  const searchParams = useSearchParams();
  const termoBusca = searchParams?.get('q') || '';
  
  // Estado para os resultados filtrados
  const [resultados, setResultados] = useState<typeof todosDestinos>([]);
  
  // Estado para os filtros
  const [filtros, setFiltros] = useState({
    regiao: 'todas',
    categoria: 'todas',
    preco: 0
  });
  
  // Estado para controlar se os filtros estão visíveis em dispositivos móveis
  const [filtrosVisiveis, setFiltrosVisiveis] = useState(false);

  // Aplicar busca e filtros
  useEffect(() => {
    if (!termoBusca && filtros.regiao === 'todas' && filtros.categoria === 'todas' && filtros.preco === 0) {
      setResultados(todosDestinos);
      return;
    }
    
    let resultadosFiltrados = [...todosDestinos];
    
    // Filtrar por termo de busca
    if (termoBusca) {
      const termo = termoBusca.toLowerCase();
      resultadosFiltrados = resultadosFiltrados.filter(destino => 
        destino.titulo.toLowerCase().includes(termo) || 
        destino.descricao.toLowerCase().includes(termo) ||
        destino.categorias.some(cat => cat.toLowerCase().includes(termo)) ||
        destino.regiao.toLowerCase().includes(termo)
      );
    }
    
    // Aplicar filtros adicionais
    if (filtros.regiao !== 'todas') {
      resultadosFiltrados = resultadosFiltrados.filter(destino => destino.regiao === filtros.regiao);
    }
    
    if (filtros.categoria !== 'todas') {
      resultadosFiltrados = resultadosFiltrados.filter(destino => 
        destino.categorias.includes(filtros.categoria)
      );
    }
    
    if (filtros.preco > 0) {
      resultadosFiltrados = resultadosFiltrados.filter(destino => destino.preco === filtros.preco);
    }
    
    setResultados(resultadosFiltrados);
  }, [termoBusca, filtros]);

  // Listas de opções para os filtros (mesmas da página de destinos)
  const regioes = ['todas', 'norte', 'centro', 'sul', 'alentejo', 'ilhas'];
  const categorias = ['todas', 'cidade', 'praia', 'natureza', 'cultura', 'vinho', 'aventura', 'gastronomia', 'resort', 'montanha', 'história'];
  const precos = [
    { valor: 0, label: 'Todos os preços' },
    { valor: 1, label: '€ Econômico' },
    { valor: 2, label: '€€ Médio' },
    { valor: 3, label: '€€€ Premium' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {termoBusca ? `Resultados para "${termoBusca}"` : 'Todos os destinos'}
        </h1>
        <p className="text-lg text-cinza-pedra">
          {resultados.length === 0 
            ? 'Nenhum resultado encontrado. Tente outros termos ou remova os filtros.' 
            : `Encontramos ${resultados.length} ${resultados.length === 1 ? 'destino' : 'destinos'} para você explorar.`}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtros laterais (versão desktop) */}
        <aside className="hidden lg:block w-full lg:w-1/4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-6">Filtrar Resultados</h2>
          
          <div className="space-y-6">
            {/* Filtro de região */}
            <div>
              <label htmlFor="regiao-desktop" className="block text-sm font-medium mb-2">Região</label>
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
            
            {/* Filtro de categoria */}
            <div>
              <label htmlFor="categoria-desktop" className="block text-sm font-medium mb-2">Categoria</label>
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
            
            {/* Filtro de preço */}
            <div>
              <label htmlFor="preco-desktop" className="block text-sm font-medium mb-2">Nível de Preço</label>
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

            {/* Botão para limpar filtros */}
            <button
              className="w-full mt-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-cinza-pedra dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={() => setFiltros({regiao: 'todas', categoria: 'todas', preco: 0})}
            >
              Limpar Filtros
            </button>
          </div>
        </aside>

        {/* Botão para mostrar/esconder filtros (versão mobile) */}
        <div className="lg:hidden mb-4">
          <button
            className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex justify-between items-center"
            onClick={() => setFiltrosVisiveis(!filtrosVisiveis)}
          >
            <span className="font-medium">Filtrar Resultados</span>
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
          
          {/* Filtros em mobile */}
          {filtrosVisiveis && (
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-2">
              <div className="space-y-6">
                {/* Filtros (mesmo conteúdo da versão desktop) */}
                <div>
                  <label htmlFor="regiao-mobile" className="block text-sm font-medium mb-2">Região</label>
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
                  <label htmlFor="categoria-mobile" className="block text-sm font-medium mb-2">Categoria</label>
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
                  <label htmlFor="preco-mobile" className="block text-sm font-medium mb-2">Nível de Preço</label>
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
                  onClick={() => setFiltros({regiao: 'todas', categoria: 'todas', preco: 0})}
                >
                  Limpar Filtros
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Resultados da busca */}
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
              <h3 className="text-2xl font-bold mb-4">Nenhum resultado encontrado</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Tente ajustar os filtros ou usar termos diferentes na sua busca.
              </p>
              <button 
                className="bg-azul-maritimo hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setFiltros({regiao: 'todas', categoria: 'todas', preco: 0})}
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 