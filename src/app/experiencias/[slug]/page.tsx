import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dados simulados das experiências
const experiencias = {
  'passeio-de-barco-pelo-douro': {
    id: 1,
    titulo: 'Passeio de Barco pelo Douro',
    descricao: 'Explore o majestoso rio Douro e admire as paisagens vinícolas em um passeio inesquecível.',
    descricaoLonga: 'O Vale do Douro, classificado como Patrimônio Mundial pela UNESCO, é um dos destinos mais deslumbrantes de Portugal. Nosso passeio de barco pelo rio Douro oferece uma experiência única para admirar as paisagens de vinhedos em terraços, quintas históricas e pequenas aldeias ribeirinhas. Durante o percurso, você poderá degustar vinhos da região, incluindo o famoso Vinho do Porto, acompanhados de iguarias locais. Os barcos são confortáveis e possuem áreas externas para apreciar a vista e tirar fotos incríveis. Guias especializados compartilham histórias fascinantes sobre a região vinícola mais antiga do mundo.',
    duracao: '8 horas',
    inclui: [
      'Passeio de barco pelo rio Douro',
      'Almoço tradicional a bordo',
      'Degustação de vinhos',
      'Guia em português',
      'Visita a uma vinícola'
    ],
    dicas: [
      'Use roupas confortáveis e protetor solar',
      'Traga uma câmera para registrar as paisagens',
      'Reserve com antecedência na alta temporada (verão)'
    ],
    pontoPartida: 'Porto - Cais da Ribeira',
    imagens: [
      'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596470668405-4b2064df477d?auto=format&fit=crop&w=1200&q=80'
    ],
    preco: 'A partir de €85 por pessoa'
  },
  'tour-castelos-medievais': {
    id: 2,
    titulo: 'Tour pelos Castelos Medievais',
    descricao: 'Viaje no tempo visitando os impressionantes castelos medievais de Portugal.',
    descricaoLonga: 'Portugal é um país com uma rica história medieval, evidenciada pelos seus imponentes castelos e fortificações espalhados por todo o território. Este tour leva você em uma viagem ao passado, explorando os castelos mais emblemáticos do país, como o Castelo de São Jorge em Lisboa, o Castelo dos Mouros em Sintra, e o Castelo de Óbidos. Acompanhado por um guia especializado em história medieval, você conhecerá as histórias de batalhas, conquistas e lendas que cercam estas impressionantes estruturas. A arquitetura única e as vistas panorâmicas deslumbrantes fazem desta uma experiência imperdível para os amantes de história.',
    duracao: '1 a 3 dias',
    inclui: [
      'Transporte entre os castelos',
      'Ingressos para os monumentos',
      'Guia especializado em história medieval',
      'Material informativo',
      'Hospedagem em hotel histórico (para tours de múltiplos dias)'
    ],
    dicas: [
      'Use calçados confortáveis para caminhar em superfícies irregulares',
      'Traga uma câmera com baterias extras',
      'Leve uma garrafa de água reutilizável',
      'Prepare-se para subir muitas escadas'
    ],
    pontoPartida: 'Lisboa - Praça do Comércio',
    imagens: [
      'https://images.unsplash.com/photo-1519905110673-f4413f4f3e33?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600688640154-9619e002df30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548301548-3c5bdaf3baa3?auto=format&fit=crop&w=1200&q=80'
    ],
    preco: 'A partir de €95 por pessoa'
  },
  'trilhas-nos-acores': {
    id: 3,
    titulo: 'Trilhas nos Açores',
    descricao: 'Aventure-se por trilhas com vistas de tirar o fôlego nas ilhas açorianas.',
    descricaoLonga: 'O arquipélago dos Açores é um verdadeiro paraíso para os amantes do ecoturismo e caminhadas. Com suas paisagens vulcânicas, lagoas cristalinas, montanhas verdejantes e vistas panorâmicas do oceano Atlântico, as trilhas dos Açores oferecem uma experiência inesquecível. Nossa excursão o levará pelas mais belas trilhas das ilhas, com guias especializados que compartilharão conhecimentos sobre a flora, fauna e geologia única desta região. Você explorará crateras vulcânicas, caminhos costeiros, florestas endêmicas e poderá se refrescar em piscinas naturais. Esta aventura é ideal para quem busca contato com a natureza em sua forma mais pura.',
    duracao: 'De 4 horas a vários dias',
    inclui: [
      'Guia especializado em trilhas',
      'Kit de primeiros socorros',
      'Equipamento básico de segurança',
      'Transporte entre trilhas',
      'Lanches e água'
    ],
    dicas: [
      'Use calçados apropriados para caminhada',
      'Vista-se em camadas (o clima pode mudar rapidamente)',
      'Traga protetor solar e repelente',
      'Uma câmera à prova d\'água é recomendada'
    ],
    pontoPartida: 'São Miguel - Ponta Delgada',
    imagens: [
      'https://images.unsplash.com/photo-1518799175676-a0fed7996acb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591025637340-6ac91891880f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566419808848-30d312df8a49?auto=format&fit=crop&w=1200&q=80'
    ],
    preco: 'A partir de €40 por pessoa'
  },
  'surfe-na-nazare': {
    id: 4,
    titulo: 'Surfe na Nazaré',
    descricao: 'Conheça as famosas ondas gigantes da Nazaré e experimente o surfe nesta praia icônica.',
    descricaoLonga: 'A Nazaré se tornou mundialmente famosa por suas ondas gigantes que atraem surfistas de elite do mundo todo. Nossa experiência de surfe na Nazaré é personalizada para todos os níveis, desde iniciantes até surfistas avançados que desejam desafiar ondas maiores. Com instrutores profissionais e equipamentos de qualidade, você terá a oportunidade de surfar em uma das praias mais icônicas do mundo. Para os que preferem apenas observar, oferecemos tours para os melhores pontos de vista para assistir aos surfistas enfrentando as ondas gigantes durante a temporada de inverno. A experiência inclui também visitas ao farol da Nazaré e ao museu do surfe local, onde você conhecerá mais sobre a história e a ciência por trás deste fenômeno natural impressionante.',
    duracao: '4 a 8 horas',
    inclui: [
      'Aulas de surfe com instrutores profissionais',
      'Equipamento completo (prancha, roupa de neoprene)',
      'Transporte para os melhores spots',
      'Visita ao Farol da Nazaré',
      'Fotos e vídeos da sua experiência'
    ],
    dicas: [
      'Não é necessária experiência prévia para iniciantes',
      'Tenha em mente que as ondas gigantes ocorrem apenas no inverno',
      'Traga protetor solar à prova d\'água',
      'Leve uma muda de roupa extra'
    ],
    pontoPartida: 'Nazaré - Praia do Norte',
    imagens: [
      'https://images.unsplash.com/photo-1547465025-0307e2139b9d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520443240718-fce21901db79?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506797220058-533e019ac7b3?auto=format&fit=crop&w=1200&q=80'
    ],
    preco: 'A partir de €60 por pessoa'
  },
  'roteiro-gastronomico': {
    id: 5,
    titulo: 'Roteiro Gastronômico',
    descricao: 'Descubra os sabores autênticos da culinária portuguesa com este roteiro gastronômico completo.',
    descricaoLonga: 'Portugal é conhecido por sua gastronomia rica e diversificada, com influências mediterrâneas, atlânticas e até mesmo de suas antigas colônias. Este roteiro gastronômico o levará por uma jornada pelos sabores mais autênticos do país. Você visitará mercados tradicionais, participará de degustações e terá aulas de culinária com chefs locais. Aprenda a preparar pratos típicos como o Bacalhau à Brás, Caldo Verde e os deliciosos Pastéis de Nata. Conheça restaurantes históricos e tabernas familiares onde os portugueses realmente comem. Esta experiência é perfeita para amantes da boa comida que desejam conhecer Portugal através de seus sabores.',
    duracao: '6 horas',
    inclui: [
      'Visita guiada a mercados locais',
      'Degustação de produtos típicos',
      'Aula de culinária com chef local',
      'Almoço ou jantar completo',
      'Guia especializado em gastronomia'
    ],
    dicas: [
      'Venha com fome!',
      'Informe sobre restrições alimentares com antecedência',
      'Use roupas confortáveis'
    ],
    pontoPartida: 'Lisboa - Mercado da Ribeira',
    imagens: [
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566127444941-8e789b4e846d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?auto=format&fit=crop&w=1200&q=80'
    ],
    preco: 'A partir de €75 por pessoa'
  },
  'observacao-de-golfinhos': {
    id: 6,
    titulo: 'Observação de Golfinhos',
    descricao: 'Embarque em uma experiência mágica de observação de golfinhos na costa portuguesa.',
    descricaoLonga: 'A costa portuguesa é habitada por diversas espécies de golfinhos e cetáceos, oferecendo uma oportunidade única para observar estes magníficos animais em seu habitat natural. Em nosso passeio de barco especializado, você navegará com biólogos marinhos que compartilharão conhecimentos fascinantes sobre estas criaturas inteligentes. Com alta taxa de avistamentos, é possível observar golfinhos-comuns, golfinhos-roazes, e até baleias em determinadas épocas do ano. Esta excursão é cuidadosamente planejada para respeitar o bem-estar dos animais, seguindo rigorosos códigos de conduta para observação responsável. Câmeras e binóculos são recomendados para capturar momentos inesquecíveis com estes encantadores mamíferos marinhos.',
    duracao: '3 a 4 horas',
    inclui: [
      'Passeio de barco com biólogo marinho',
      'Equipamentos de segurança',
      'Bebidas e snacks a bordo',
      'Material educativo sobre os cetáceos',
      'Fotos digitais da experiência'
    ],
    dicas: [
      'Leve medicamento contra enjoo se for sensível',
      'Vista camadas de roupas e traga casaco impermeável',
      'Use protetor solar e chapéu',
      'A observação depende de condições naturais, não é garantida'
    ],
    pontoPartida: 'Setúbal - Marina de Tróia',
    imagens: [
      'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484499995616-30a8d216abef?auto=format&fit=crop&w=1200&q=80'
    ],
    preco: 'A partir de €65 por pessoa'
  }
};

type Props = {
  params: {
    slug: string;
  };
};

export default function ExperienciaPage({ params }: Props) {
  const slug = params.slug;
  const experiencia = experiencias[slug as keyof typeof experiencias];

  if (!experiencia) {
    notFound();
  }

  return (
    <article className="pb-16">
      {/* Hero da experiência */}
      <div className="relative h-[500px] mb-12">
        <Image
          src={experiencia.imagens[0]}
          alt={experiencia.titulo}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
            {experiencia.titulo}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm">
          <Link href="/" className="text-azul-maritimo">Início</Link> 
          {' > '} 
          <Link href="/experiencias" className="text-azul-maritimo">Experiências</Link> 
          {' > '} 
          <span>{experiencia.titulo}</span>
        </div>

        {/* Descrição principal */}
        <div className="mb-12">
          <p className="text-xl text-cinza-pedra mb-6">{experiencia.descricaoLonga}</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-azul-maritimo/10 text-azul-maritimo">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Duração: {experiencia.duracao}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-azul-maritimo/10 text-azul-maritimo">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Local: {experiencia.pontoPartida}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-verde-portugues/10 text-verde-portugues">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {experiencia.preco}
            </span>
          </div>
        </div>

        {/* Galeria de imagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experiencia.imagens.map((img, index) => (
              <div 
                key={index}
                className="rounded-lg overflow-hidden h-64 relative hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={img}
                  alt={`${experiencia.titulo} - Imagem ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* O que está incluído */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O que está incluído</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiencia.inclui.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-verde-portugues text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Dicas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Dicas úteis</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="divide-y divide-gray-200">
              {experiencia.dicas.map((dica, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">{dica}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA - Reservar */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Reserve sua experiência</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Garanta seu lugar nesta experiência incrível e crie memórias inesquecíveis em Portugal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-azul-maritimo hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Reservar agora
            </button>
            <button className="bg-white border border-azul-maritimo hover:bg-gray-100 text-azul-maritimo font-bold py-3 px-6 rounded-lg transition-colors">
              Verificar disponibilidade
            </button>
          </div>
        </section>
      </div>
    </article>
  );
} 