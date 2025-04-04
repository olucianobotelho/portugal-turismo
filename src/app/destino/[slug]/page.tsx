import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
// Importando os tipos corretos do Next.js
import { Metadata } from 'next';
// Removendo temporariamente a importação do motion
// import { motion } from 'framer-motion';

// Simula busca de dados do destino pelo slug
async function getDestino(slug: string) {
  const destinos = {
    'lisboa': {
      id: 1,
      nome: 'Lisboa',
      slug: 'lisboa',
      descricao: 'Capital de Portugal, conhecida por sua rica história, arquitetura e gastronomia.',
      descricaoLonga: 'Lisboa é uma cidade vibrante que combina tradição e modernidade. Conhecida por suas colinas, elétricos amarelos históricos e arquitetura deslumbrante, a capital portuguesa oferece uma experiência única aos visitantes. Explore os bairros históricos como Alfama e Bairro Alto, visite monumentos icônicos como o Mosteiro dos Jerônimos e a Torre de Belém, e não deixe de provar os famosos pastéis de Belém.',
      regiao: 'Lisboa e Vale do Tejo',
      pontosTuristicos: [
        'Torre de Belém',
        'Mosteiro dos Jerônimos',
        'Castelo de São Jorge',
        'Praça do Comércio',
        'Oceanário de Lisboa'
      ],
      gastronomia: [
        'Pastéis de Belém', 
        'Bacalhau à Brás', 
        'Ginjinha'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1548707309-dce39837b350?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1458805433004-6d29c1adcba3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 38.7223,
        longitude: -9.1393
      }
    },
    'porto': {
      id: 2,
      nome: 'Porto',
      slug: 'porto',
      descricao: 'Famosa pela produção de vinho do Porto e sua paisagem ribeirinha encantadora.',
      descricaoLonga: 'Porto é a segunda maior cidade de Portugal e é conhecida mundialmente pelo seu vinho. Situada na foz do Rio Douro, a cidade oferece paisagens deslumbrantes, especialmente ao longo da Ribeira, onde casas coloridas contrastam com a água do rio. A ponte Dom Luís I conecta Porto a Vila Nova de Gaia, onde se encontram as famosas caves de vinho do Porto. A cidade também é rica em patrimônio histórico, com uma catedral impressionante e a icônica livraria Lello, que inspirou J.K. Rowling para Harry Potter.',
      regiao: 'Norte',
      pontosTuristicos: [
        'Ponte Dom Luís I',
        'Ribeira',
        'Livraria Lello',
        'Caves de Vinho do Porto',
        'Catedral do Porto'
      ],
      gastronomia: [
        'Francesinha', 
        'Tripas à Moda do Porto', 
        'Vinho do Porto'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555987331-7f3b7b9f1f09?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 41.1579,
        longitude: -8.6291
      }
    },
    'algarve': {
      id: 3,
      nome: 'Algarve',
      slug: 'algarve',
      descricao: 'Região costeira com praias deslumbrantes e falésias impressionantes.',
      descricaoLonga: 'O Algarve é a região mais meridional de Portugal continental, famosa por suas praias deslumbrantes, falésias douradas e águas cristalinas. É um destino turístico por excelência, oferecendo não apenas belezas naturais, mas também campos de golfe de classe mundial, resorts luxuosos e uma rica herança cultural moura. As cidades costeiras como Lagos, Albufeira e Faro combinam um charme histórico com uma vibrante vida noturna e excelentes restaurantes de frutos do mar.',
      regiao: 'Sul',
      pontosTuristicos: [
        'Ponta da Piedade',
        'Praia da Marinha',
        'Benagil Cave',
        'Castelo de Silves',
        'Parque Natural da Ria Formosa'
      ],
      gastronomia: [
        'Cataplana de Marisco', 
        'Conquilhas à Algarvia', 
        'Doces de amêndoa e figo'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566726202190-5e18daa494ea?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593076441509-52656656d40f?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 37.0179,
        longitude: -7.9304
      }
    },
    'madeira': {
      id: 4,
      nome: 'Madeira',
      slug: 'madeira',
      descricao: 'Ilha paradisíaca conhecida por suas florestas, montanhas e clima ameno durante todo o ano.',
      descricaoLonga: 'A Ilha da Madeira é um verdadeiro paraíso no Atlântico, conhecida por sua vegetação exuberante, montanhas imponentes e clima primaveril durante todo o ano. O arquipélago da Madeira oferece uma combinação perfeita de natureza deslumbrante e cultura rica. Explore as levadas (canais de irrigação históricos) que serpenteiam pelas montanhas verdejantes, visite os famosos jardins botânicos, experimente o tradicional vinho da Madeira e desfrute das vistas panorâmicas de tirar o fôlego. As praias de areia preta vulcânica e as piscinas naturais formadas por rochas vulcânicas são ótimas opções para os amantes do mar.',
      regiao: 'Ilhas',
      pontosTuristicos: [
        'Cabo Girão',
        'Jardim Botânico da Madeira',
        'Pico do Arieiro',
        'Funchal (capital)',
        'Levadas da Madeira'
      ],
      gastronomia: [
        'Espetada Madeirense', 
        'Bolo do Caco', 
        'Vinho da Madeira',
        'Poncha'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1542309174-d0f3c4c3dfe1?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 32.7607,
        longitude: -16.9595
      }
    },
    'coimbra': {
      id: 5,
      nome: 'Coimbra',
      slug: 'coimbra',
      descricao: 'Cidade universitária histórica com uma das universidades mais antigas da Europa.',
      descricaoLonga: 'Coimbra é uma cidade histórica localizada no centro de Portugal, famosa por abrigar uma das universidades mais antigas da Europa, a Universidade de Coimbra, fundada em 1290. A cidade respira cultura e tradição acadêmica, com seus estudantes vestindo as icônicas capas pretas. O centro histórico, com suas ruas estreitas e íngremes, abriga tesouros arquitetônicos como a Biblioteca Joanina, a Sé Velha (Catedral Antiga) e o Mosteiro de Santa Cruz. O rio Mondego, que atravessa a cidade, oferece áreas verdes e de lazer, como o Parque Verde do Mondego. Coimbra também é conhecida pela sua tradição musical única, o Fado de Coimbra, uma variante do fado português cantada exclusivamente por homens.',
      regiao: 'Centro',
      pontosTuristicos: [
        'Universidade de Coimbra',
        'Biblioteca Joanina',
        'Sé Velha',
        'Mosteiro de Santa Cruz',
        'Jardim Botânico'
      ],
      gastronomia: [
        'Chanfana', 
        'Arrufada', 
        'Pastéis de Santa Clara'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1574867155812-614fd0806307?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518038152505-4b5e9aa41cf9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 40.2033,
        longitude: -8.4103
      }
    },
    'sintra': {
      id: 6,
      nome: 'Sintra',
      slug: 'sintra',
      descricao: 'Cidade encantadora conhecida por seus palácios românticos e paisagem montanhosa.',
      descricaoLonga: 'Sintra é uma cidade mágica localizada a apenas 30 km de Lisboa, famosa por seus palácios e castelos de conto de fadas, envolvidos pelo manto verde da Serra de Sintra. Este local encantador, classificado como Patrimônio Mundial pela UNESCO, foi a escolha preferida da nobreza e da elite portuguesa para suas residências de verão. Percorrer suas ruas é como viajar no tempo, com o colorido Palácio da Pena no topo da montanha, o misterioso Palácio da Quinta da Regaleira com seus poços iniciáticos, e o imponente Castelo dos Mouros oferecendo vistas panorâmicas deslumbrantes. A atmosfera romântica e mística de Sintra inspirou escritores como Lord Byron, que a descreveu como "o Éden glorioso".',
      regiao: 'Lisboa e Vale do Tejo',
      pontosTuristicos: [
        'Palácio da Pena',
        'Quinta da Regaleira',
        'Castelo dos Mouros',
        'Palácio Nacional de Sintra',
        'Cabo da Roca'
      ],
      gastronomia: [
        'Queijadas de Sintra', 
        'Travesseiros', 
        'Nozes de Sintra'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1590254527871-75c3ec564769?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1591283547354-a96f3839b33b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1529011664813-eca36b68227b?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 38.7975,
        longitude: -9.3909
      }
    },
    'acores': {
      id: 7,
      nome: 'Açores',
      slug: 'acores',
      descricao: 'Arquipélago de ilhas vulcânicas com paisagens de tirar o fôlego e vida marinha abundante.',
      descricaoLonga: 'Os Açores são um arquipélago de nove ilhas vulcânicas situadas no meio do Oceano Atlântico, formando uma região autônoma de Portugal. Conhecidas por suas paisagens deslumbrantes, estas ilhas são um paraíso para os amantes da natureza e da aventura. Lagos vulcânicos de águas cristalinas, caldeiras impressionantes, campos verdejantes e montanhas imponentes compõem cenários de tirar o fôlego. Os Açores também são um destino privilegiado para observação de baleias e golfinhos, com mais de 20 espécies de cetáceos habitando suas águas. A culinária local, baseada em produtos frescos e orgânicos, e a hospitalidade dos açorianos completam uma experiência inesquecível neste destino ainda preservado do turismo de massa.',
      regiao: 'Ilhas',
      pontosTuristicos: [
        'Lagoa das Sete Cidades',
        'Lagoa do Fogo',
        'Furnas e suas fumarolas',
        'Ilha do Pico e seu vulcão',
        'Caldeira do Faial'
      ],
      gastronomia: [
        'Cozido das Furnas', 
        'Queijo de São Jorge', 
        'Ananás dos Açores',
        'Vinho dos Biscoitos'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1591014979347-2b6e63f43f4e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1587608236550-acbe82975c9e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1499678335416-e62ccaeaead5?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 37.7412,
        longitude: -25.6756
      }
    },
    'evora': {
      id: 8,
      nome: 'Évora',
      slug: 'evora',
      descricao: 'Cidade histórica com um centro bem preservado e monumentos romanos antigos.',
      descricaoLonga: 'Évora é uma joia histórica localizada no coração do Alentejo, região sul de Portugal. Com seu centro histórico excepcionalmente bem preservado, a cidade foi declarada Patrimônio Mundial pela UNESCO. Caminhando por suas ruas de paralelepípedos, cercadas por muralhas do século XIV, encontra-se uma mistura fascinante de épocas e estilos arquitetônicos. O impressionante Templo Romano (também conhecido como Templo de Diana), a imponente Catedral de Évora e a macabra Capela dos Ossos são alguns dos monumentos que contam a história milenar desta cidade. A região ao redor de Évora é famosa por seus vinhos de qualidade, azeite de oliva e cortiça, sendo o Alentejo a maior região produtora de cortiça do mundo.',
      regiao: 'Alentejo',
      pontosTuristicos: [
        'Templo Romano de Évora',
        'Catedral de Évora',
        'Capela dos Ossos',
        'Praça do Giraldo',
        'Universidade de Évora'
      ],
      gastronomia: [
        'Açorda Alentejana', 
        'Ensopado de Borrego', 
        'Migas Alentejanas',
        'Vinhos do Alentejo'
      ],
      imagens: [
        'https://images.unsplash.com/photo-1579195056721-1f530d59e4d2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590865459604-5b0e6314309e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1576349633329-9b02fde8010f?auto=format&fit=crop&w=1200&q=80'
      ],
      coordenadas: {
        latitude: 38.5707,
        longitude: -7.9095
      }
    }
  };

  return destinos[slug as keyof typeof destinos] || null;
}

// Função para gerar metadata dinâmica
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const destino = await getDestino(slug);
  
  if (!destino) {
    return {
      title: 'Destino não encontrado',
      description: 'O destino solicitado não foi encontrado',
    };
  }
  
  return {
    title: `${destino.nome} | Turismo Portugal`,
    description: destino.descricao,
    openGraph: {
      images: [destino.imagens[0]],
    },
  };
}

// Definição correta dos tipos para páginas do App Router no Next.js 15
// Atualizando para atender requisitos do Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function DestinoPage({ params, searchParams }: PageProps) {
  // No Next.js App Router, quando acessamos propriedades de params, devemos realizar uma resolução da Promise primeiro
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Agora podemos usar a variável slug com segurança
  const destino = await getDestino(slug);

  if (!destino) {
    notFound();
  }

  return (
    <article className="pb-16">
      {/* Hero da página de destino */}
      <div className="relative h-[500px] mb-12">
        <Image
          src={destino.imagens[0]}
          alt={`Paisagem de ${destino.nome}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
            {destino.nome}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm">
          <Link href="/" className="text-azul-maritimo">Início</Link> 
          {' > '} 
          <Link href="/destinos" className="text-azul-maritimo">Destinos</Link> 
          {' > '} 
          <span>{destino.nome}</span>
        </div>

        {/* Introdução */}
        <div className="mb-12">
          <p className="text-xl text-cinza-pedra mb-6">{destino.descricaoLonga}</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-azul-maritimo/10 text-azul-maritimo">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Região {destino.regiao}
            </span>
          </div>
        </div>

        {/* Galeria de imagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destino.imagens.map((img, index) => (
              <div 
                key={index}
                className="rounded-lg overflow-hidden h-64 relative hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={img}
                  alt={`${destino.nome} - Imagem ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Atrações principais */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Principais Atrações</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destino.pontosTuristicos.map((ponto, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-amarelo-dourado text-white mr-4">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg font-medium">{ponto}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Gastronomia */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Gastronomia Local</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="divide-y divide-gray-200">
              {destino.gastronomia.map((item, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vermelho-portugues mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experiências relacionadas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experiências em {destino.nome}</h2>
          <div className="bg-azul-maritimo/5 p-6 rounded-lg">
            <p className="text-lg mb-4">
              Descubra atividades e tours que farão sua visita a {destino.nome} inesquecível.
            </p>
            <Link href="/experiencias" className="inline-block bg-azul-maritimo hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              Ver todas as experiências
            </Link>
          </div>
        </section>

        {/* CTA - Planejar visita */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Planejar sua visita a {destino.nome}</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Descubra as melhores épocas para visitar, onde se hospedar e como aproveitar ao máximo sua estadia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/planejar" className="bg-azul-maritimo hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Planejar Viagem
            </Link>
            <Link href="/gastronomia" className="bg-white border border-azul-maritimo hover:bg-gray-100 text-azul-maritimo font-bold py-3 px-6 rounded-lg transition-colors">
              Explorar Gastronomia
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 