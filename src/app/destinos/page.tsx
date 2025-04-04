'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '../../components/ui/Card';

// Dados simulados de destinos
const todosDestinos = [
  {
    id: 1,
    titulo: 'Lisboa',
    descricao: 'Capital de Portugal, conhecida por sua rica história, arquitetura e gastronomia.',
    imagem: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=800&q=80',
    slug: 'lisboa',
    regiao: 'centro',
    categorias: ['cidade', 'cultura', 'gastronomia'],
    preco: 2
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
    imagem: 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1280,h=680,fit=cover,format=jpeg/wp-content/uploads/2020/02/ilha-da-madeira-camara-de-lobos.jpg',
    slug: 'madeira',
    regiao: 'ilhas',
    categorias: ['natureza', 'aventura', 'montanha'],
    preco: 2
  },
  {
    id: 5,
    titulo: 'Coimbra',
    descricao: 'Cidade universitária histórica com uma das universidades mais antigas da Europa.',
    imagem: 'https://accetur.com.br/wp-content/uploads/2020/04/coimbra-portugal-3.jpg',
    slug: 'coimbra',
    regiao: 'centro',
    categorias: ['cidade', 'cultura', 'universidade'],
    preco: 1
  },
  {
    id: 6,
    titulo: 'Sintra',
    descricao: 'Cidade encantadora conhecida por seus palácios românticos e paisagem montanhosa.',
    imagem: 'https://cdn.sanity.io/images/9buzw47c/solfaktor-prod/99e2881a6c62d04713a5a42229779303f3d16381-1920x1080.jpg?h=1200',
    slug: 'sintra',
    regiao: 'centro',
    categorias: ['cultura', 'palácio', 'natureza'],
    preco: 2
  },
  {
    id: 7,
    titulo: 'Açores',
    descricao: 'Arquipélago de ilhas vulcânicas com paisagens de tirar o fôlego e vida marinha abundante.',
    imagem: 'https://www.lusoacademico.com/wp-content/uploads/2023/01/20-Ilha-Da-Madeira.jpg',
    slug: 'acores',
    regiao: 'ilhas',
    categorias: ['natureza', 'aventura', 'vulcão'],
    preco: 2
  },
  {
    id: 8,
    titulo: 'Évora',
    descricao: 'Cidade histórica com um centro bem preservado e monumentos romanos antigos.',
    imagem: 'https://media.cntraveller.com/photos/6475f44d11c0a20a41c89239/3:2/w_5520,h_3680,c_limit/Evora-GettyImages-879729108.jpeg',
    slug: 'evora',
    regiao: 'alentejo',
    categorias: ['cidade', 'cultura', 'história'],
    preco: 1
  }
];

export default function DestinosPage() {
  // Estados para os filtros
  const [regiaoSelecionada, setRegiaoSelecionada] = useState<string>('todas');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('todas');
  const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
  const [pesquisa, setPesquisa] = useState<string>('');
  
  // Estado para os destinos filtrados
  const [destinosFiltrados, setDestinosFiltrados] = useState(todosDestinos);

  // Atualiza a lista de destinos quando os filtros mudarem
  useEffect(() => {
    let novaLista = [...todosDestinos];
    
    // Filtro por região
    if (regiaoSelecionada !== 'todas') {
      novaLista = novaLista.filter(destino => destino.regiao === regiaoSelecionada);
    }
    
    // Filtro por categoria
    if (categoriaSelecionada !== 'todas') {
      novaLista = novaLista.filter(destino => 
        destino.categorias.includes(categoriaSelecionada)
      );
    }
    
    // Filtro por preço
    if (precoSelecionado > 0) {
      novaLista = novaLista.filter(destino => destino.preco === precoSelecionado);
    }
    
    // Filtro por pesquisa
    if (pesquisa.trim() !== '') {
      const termoPesquisa = pesquisa.toLowerCase();
      novaLista = novaLista.filter(destino => 
        destino.titulo.toLowerCase().includes(termoPesquisa) || 
        destino.descricao.toLowerCase().includes(termoPesquisa)
      );
    }
    
    setDestinosFiltrados(novaLista);
  }, [regiaoSelecionada, categoriaSelecionada, precoSelecionado, pesquisa]);

  // Listas de opções para os filtros
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
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-preto-oliva">Destinos em Portugal</h1>
        <p className="text-xl text-cinza-pedra max-w-3xl mx-auto">
          Descubra os melhores lugares para visitar em Portugal, desde praias paradisíacas até cidades históricas cheias de cultura.
        </p>
      </div>

      {/* Seção de filtros */}
      <div className="bg-white rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-preto-oliva">Filtrar Destinos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Filtro de pesquisa */}
          <div>
            <label htmlFor="pesquisa" className="block text-sm font-semibold text-preto-oliva mb-2">Pesquisar</label>
            <input
              type="text"
              id="pesquisa"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-preto-oliva placeholder-cinza-pedra focus:border-azul-maritimo focus:ring-1 focus:ring-azul-maritimo"
              placeholder="Buscar destinos..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </div>
          
          {/* Filtro de região */}
          <div>
            <label htmlFor="regiao" className="block text-sm font-semibold text-preto-oliva mb-2">Região</label>
            <select
              id="regiao"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-preto-oliva focus:border-azul-maritimo focus:ring-1 focus:ring-azul-maritimo"
              value={regiaoSelecionada}
              onChange={(e) => setRegiaoSelecionada(e.target.value)}
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
            <label htmlFor="categoria" className="block text-sm font-semibold text-preto-oliva mb-2">Categoria</label>
            <select
              id="categoria"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-preto-oliva focus:border-azul-maritimo focus:ring-1 focus:ring-azul-maritimo"
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}
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
            <label htmlFor="preco" className="block text-sm font-semibold text-preto-oliva mb-2">Faixa de Preço</label>
            <select
              id="preco"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-preto-oliva focus:border-azul-maritimo focus:ring-1 focus:ring-azul-maritimo"
              value={precoSelecionado}
              onChange={(e) => setPrecoSelecionado(Number(e.target.value))}
            >
              {precos.map((preco) => (
                <option key={preco.valor} value={preco.valor}>
                  {preco.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid de destinos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinosFiltrados.map((destino) => (
          <motion.div
            key={destino.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="transform hover:-translate-y-1 transition-transform duration-300"
          >
            <Link href={`/destino/${destino.slug}`}>
              <Card
                title={destino.titulo}
                description={destino.descricao}
                imageUrl={destino.imagem}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 