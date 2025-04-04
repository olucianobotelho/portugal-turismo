import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Dados simulados para pratos típicos
const pratosTipicos = [
  {
    id: 1,
    nome: 'Bacalhau à Brás',
    descricao: 'Um dos pratos de bacalhau mais populares, feito com bacalhau desfiado, batatas palha, ovos e azeitonas.',
    imagem: 'https://images.unsplash.com/photo-1559557892-e59b0ab7121e?auto=format&fit=crop&w=800&q=80',
    regiao: 'Nacional'
  },
  {
    id: 2,
    nome: 'Francesinha',
    descricao: 'Sanduíche emblemático do Porto, com várias carnes, queijo derretido e um molho especial picante.',
    imagem: 'https://images.unsplash.com/photo-1602657063699-91a8bbe66772?auto=format&fit=crop&w=800&q=80',
    regiao: 'Porto'
  },
  {
    id: 3,
    nome: 'Pastéis de Nata',
    descricao: 'Doce tradicional português, feito de massa folhada e creme de ovos, típico de Lisboa.',
    imagem: 'https://images.unsplash.com/photo-1577391846175-d57a76814389?auto=format&fit=crop&w=800&q=80',
    regiao: 'Lisboa'
  },
  {
    id: 4,
    nome: 'Caldo Verde',
    descricao: 'Sopa tradicional do norte de Portugal, feita com couve portuguesa finamente cortada, batata e chouriço.',
    imagem: 'https://images.unsplash.com/photo-1588455337296-6688586993a3?auto=format&fit=crop&w=800&q=80',
    regiao: 'Minho'
  },
  {
    id: 5,
    nome: 'Arroz de Marisco',
    descricao: 'Prato de arroz cremoso com diversos frutos do mar, típico das regiões costeiras.',
    imagem: 'https://images.unsplash.com/photo-1626962133845-45215e570a71?auto=format&fit=crop&w=800&q=80',
    regiao: 'Algarve'
  },
  {
    id: 6,
    nome: 'Leitão à Bairrada',
    descricao: 'Leitão assado no forno a lenha com pele crocante e temperos especiais.',
    imagem: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80',
    regiao: 'Bairrada'
  },
  {
    id: 7,
    nome: 'Cozido à Portuguesa',
    descricao: 'Prato tradicional com vários tipos de carnes, legumes e enchidos, cozidos juntos.',
    imagem: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    regiao: 'Nacional'
  },
  {
    id: 8,
    nome: 'Polvo à Lagareiro',
    descricao: 'Polvo assado no forno com batatas a murro, regado com azeite e alho.',
    imagem: 'https://images.unsplash.com/photo-1532465909-4e0278962a2b?auto=format&fit=crop&w=800&q=80',
    regiao: 'Alentejo'
  }
];

// Dados simulados para as regiões gastronômicas
const regioes = [
  {
    id: 1,
    nome: 'Norte',
    descricao: 'Conhecida pelos pratos substanciais, como tripas à moda do Porto, rojões e cozido à portuguesa.',
    imagem: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    nome: 'Centro',
    descricao: 'Famosa pelo leitão à Bairrada, chanfana e queijo da Serra da Estrela.',
    imagem: 'https://images.unsplash.com/photo-1547465025-0307e2139b9d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    nome: 'Lisboa',
    descricao: 'Destaque para os pastéis de Belém, amêijoas à Bulhão Pato e pratos de bacalhau.',
    imagem: 'https://images.unsplash.com/photo-1580935761024-cbb8c03feb63?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    nome: 'Alentejo',
    descricao: 'Região dos ensopados, migas, açordas e deliciosos vinhos.',
    imagem: 'https://images.unsplash.com/photo-1519905110673-f4413f4f3e33?auto=format&fit=crop&w=800&q=80'
  }
];

export default function GastronomiaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Seção de Hero */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80"
          alt="Gastronomia Portuguesa"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Gastronomia Portuguesa</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Descubra os sabores autênticos e tradicionais da culinária portuguesa, uma das mais ricas e diversificadas da Europa.
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-preto-oliva">Uma Viagem Gastronômica por Portugal</h2>
          <p className="text-lg text-cinza-pedra mb-6">
            A gastronomia portuguesa é um reflexo da história, geografia e cultura do país. Com influências mediterrâneas, atlânticas e até mesmo das antigas colônias, a cozinha portuguesa é rica em sabores, cores e tradições.
          </p>
          <p className="text-lg text-cinza-pedra">
            De norte a sul, cada região oferece especialidades únicas, ingredientes frescos e receitas passadas de geração em geração. Do bacalhau, que tem mais de 365 formas de preparo, aos doces conventuais à base de ovos, a culinária portuguesa é uma verdadeira festa para os sentidos.
          </p>
        </div>
      </section>

      {/* Pratos Típicos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-preto-oliva text-center">Pratos Típicos Imperdíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pratosTipicos.map((prato) => (
            <div key={prato.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={prato.imagem}
                  alt={prato.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-preto-oliva">{prato.nome}</h3>
                  <span className="text-sm bg-azul-maritimo/10 text-azul-maritimo px-2 py-1 rounded-full">
                    {prato.regiao}
                  </span>
                </div>
                <p className="mt-2 text-cinza-pedra">{prato.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regiões Gastronômicas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-preto-oliva text-center">Regiões Gastronômicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regioes.map((regiao) => (
            <div key={regiao.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src={regiao.imagem}
                  alt={regiao.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-preto-oliva mb-3">{regiao.nome}</h3>
                <p className="text-cinza-pedra">{regiao.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiência Gastronômica */}
      <section className="mb-16 bg-azul-maritimo/5 rounded-lg p-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-preto-oliva">Experiência Gastronômica</h2>
            <p className="text-lg text-cinza-pedra mb-6">
              Quer conhecer mais sobre a gastronomia portuguesa? Participe de um tour gastronômico e descubra os sabores autênticos de Portugal, acompanhado por guias especializados.
            </p>
            <p className="text-lg text-cinza-pedra mb-6">
              Desde aulas de culinária até visitas a mercados tradicionais, temos opções para todos os gostos.
            </p>
            <Link href="/experiencias/roteiro-gastronomico" className="inline-block bg-azul-maritimo hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Ver Roteiro Gastronômico
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566127444941-8e789b4e846d?auto=format&fit=crop&w=800&q=80"
              alt="Experiência Gastronômica"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-preto-oliva text-center">Curiosidades Gastronômicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-azul-maritimo mb-4">🍷</div>
            <h3 className="text-xl font-bold mb-3 text-preto-oliva">Vinho do Porto</h3>
            <p className="text-cinza-pedra">
              O Vinho do Porto é um dos produtos mais famosos de Portugal. Produzido no Vale do Douro, é um vinho fortificado, geralmente servido como vinho de sobremesa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-azul-maritimo mb-4">🐟</div>
            <h3 className="text-xl font-bold mb-3 text-preto-oliva">Capital do Bacalhau</h3>
            <p className="text-cinza-pedra">
              Portugal é conhecido como a "capital mundial do bacalhau", com mais de 365 receitas diferentes - uma para cada dia do ano!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-azul-maritimo mb-4">🍰</div>
            <h3 className="text-xl font-bold mb-3 text-preto-oliva">Doces Conventuais</h3>
            <p className="text-cinza-pedra">
              Muitos dos doces tradicionais portugueses foram criados em conventos durante os séculos XVI e XVII, utilizando muitas gemas de ovos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 