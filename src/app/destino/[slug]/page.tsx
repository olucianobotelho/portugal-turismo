import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
// Importing the correct types from Next.js
import { Metadata } from 'next';
// Temporarily removing the motion import
// import { motion } from 'framer-motion';

// Simulates fetching destination data by slug
async function getDestino(slug: string) {
  const destinos = {
    'lisboa': {
      id: 1,
      nome: 'Lisbon',
      slug: 'lisboa',
      descricao: 'Capital of Portugal, known for its rich history, architecture and gastronomy.',
      descricaoLonga: 'Lisbon is a vibrant city that combines tradition and modernity. Known for its hills, historic yellow trams and stunning architecture, the Portuguese capital offers a unique experience to visitors. Explore historic neighborhoods like Alfama and Bairro Alto, visit iconic monuments such as the Jerónimos Monastery and Belém Tower, and don\'t forget to taste the famous Pastéis de Belém.',
      regiao: 'Lisbon and Tagus Valley',
      pontosTuristicos: [
        'Belém Tower',
        'Jerónimos Monastery',
        'São Jorge Castle',
        'Praça do Comércio',
        'Lisbon Oceanarium'
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
      descricao: 'Famous for Port wine production and its enchanting riverside landscape.',
      descricaoLonga: 'Porto is the second largest city in Portugal and is known worldwide for its wine. Located at the mouth of the Douro River, the city offers breathtaking landscapes, especially along the Ribeira, where colorful houses contrast with the river water. The Dom Luís I Bridge connects Porto to Vila Nova de Gaia, where the famous Port wine cellars are located. The city is also rich in historical heritage, with an impressive cathedral and the iconic Lello Bookstore, which inspired J.K. Rowling for Harry Potter.',
      regiao: 'North',
      pontosTuristicos: [
        'Dom Luís I Bridge',
        'Ribeira',
        'Lello Bookstore',
        'Port Wine Cellars',
        'Porto Cathedral'
      ],
      gastronomia: [
        'Francesinha', 
        'Tripas à Moda do Porto', 
        'Port Wine'
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
      descricao: 'Coastal region with stunning beaches and impressive cliffs.',
      descricaoLonga: 'The Algarve is the southernmost region of mainland Portugal, famous for its stunning beaches, golden cliffs and crystal-clear waters. It is a prime tourist destination, offering not only natural beauties but also world-class golf courses, luxury resorts and a rich Moorish cultural heritage. Coastal cities like Lagos, Albufeira and Faro combine historical charm with vibrant nightlife and excellent seafood restaurants.',
      regiao: 'South',
      pontosTuristicos: [
        'Ponta da Piedade',
        'Marinha Beach',
        'Benagil Cave',
        'Silves Castle',
        'Ria Formosa Natural Park'
      ],
      gastronomia: [
        'Seafood Cataplana', 
        'Conquilhas à Algarvia', 
        'Almond and fig sweets'
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
      descricao: 'Paradise island known for its forests, mountains and mild climate throughout the year.',
      descricaoLonga: 'Madeira Island is a true paradise in the Atlantic, known for its lush vegetation, imposing mountains and spring-like climate throughout the year. The Madeira archipelago offers a perfect combination of stunning nature and rich culture. Explore the levadas (historic irrigation channels) that wind through the verdant mountains, visit the famous botanical gardens, try traditional Madeira wine and enjoy the breathtaking panoramic views. The black volcanic sand beaches and natural pools formed by volcanic rocks are great options for sea lovers.',
      regiao: 'Islands',
      pontosTuristicos: [
        'Cabo Girão',
        'Madeira Botanical Garden',
        'Pico do Arieiro',
        'Funchal (capital)',
        'Madeira Levadas'
      ],
      gastronomia: [
        'Espetada Madeirense', 
        'Bolo do Caco', 
        'Madeira Wine',
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
      descricao: 'Historic university city with one of the oldest universities in Europe.',
      descricaoLonga: 'Coimbra is a historic city located in central Portugal, famous for housing one of the oldest universities in Europe, the University of Coimbra, founded in 1290. The city breathes culture and academic tradition, with its students wearing iconic black capes. The historic center, with its narrow and steep streets, houses architectural treasures such as the Joanina Library, the Old Cathedral and the Santa Cruz Monastery. The Mondego River, which crosses the city, offers green and leisure areas, such as the Mondego Green Park. Coimbra is also known for its unique musical tradition, Fado de Coimbra, a variant of Portuguese fado sung exclusively by men.',
      regiao: 'Center',
      pontosTuristicos: [
        'University of Coimbra',
        'Joanina Library',
        'Old Cathedral',
        'Santa Cruz Monastery',
        'Botanical Garden'
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
      descricao: 'Charming city known for its romantic palaces and mountainous landscape.',
      descricaoLonga: 'Sintra is a magical city located just 30 km from Lisbon, famous for its fairy-tale palaces and castles, surrounded by the green mantle of the Sintra Mountains. This enchanting place, classified as a UNESCO World Heritage Site, was the preferred choice of Portuguese nobility and elite for their summer residences. Walking through its streets is like traveling back in time, with the colorful Pena Palace at the top of the mountain, the mysterious Quinta da Regaleira Palace with its initiation wells, and the imposing Moorish Castle offering breathtaking panoramic views. The romantic and mystical atmosphere of Sintra inspired writers such as Lord Byron, who described it as "the glorious Eden".',
      regiao: 'Lisbon and Tagus Valley',
      pontosTuristicos: [
        'Pena Palace',
        'Quinta da Regaleira',
        'Moorish Castle',
        'Sintra National Palace',
        'Cabo da Roca'
      ],
      gastronomia: [
        'Queijadas de Sintra', 
        'Travesseiros', 
        'Sintra Walnuts'
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
      nome: 'Azores',
      slug: 'acores',
      descricao: 'Archipelago of volcanic islands with breathtaking landscapes and abundant marine life.',
      descricaoLonga: 'The Azores are an archipelago of nine volcanic islands situated in the middle of the Atlantic Ocean, forming an autonomous region of Portugal. Known for their stunning landscapes, these islands are a paradise for nature and adventure lovers. Crystal-clear volcanic lakes, impressive calderas, verdant fields and imposing mountains compose breathtaking scenery. The Azores are also a privileged destination for whale and dolphin watching, with more than 20 species of cetaceans inhabiting their waters. The local cuisine, based on fresh and organic products, and the hospitality of the Azoreans complete an unforgettable experience in this destination still preserved from mass tourism.',
      regiao: 'Islands',
      pontosTuristicos: [
        'Sete Cidades Lake',
        'Fogo Lake',
        'Furnas and its fumaroles',
        'Pico Island and its volcano',
        'Faial Caldera'
      ],
      gastronomia: [
        'Cozido das Furnas', 
        'São Jorge Cheese', 
        'Azores Pineapple',
        'Biscoitos Wine'
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
      descricao: 'Historic city with a well-preserved center and ancient Roman monuments.',
      descricaoLonga: 'Évora is a historical gem located in the heart of the Alentejo, southern Portugal. With its exceptionally well-preserved historic center, the city was declared a World Heritage Site by UNESCO. Walking through its cobblestone streets, surrounded by 14th-century walls, you\'ll find a fascinating blend of epochs and architectural styles. The impressive Roman Temple (also known as the Temple of Diana), the imposing Évora Cathedral and the macabre Chapel of Bones are some of the monuments that tell the millennial history of this city. The region around Évora is famous for its quality wines, olive oil and cork, with Alentejo being the largest cork-producing region in the world.',
      regiao: 'Alentejo',
      pontosTuristicos: [
        'Roman Temple of Évora',
        'Évora Cathedral',
        'Chapel of Bones',
        'Giraldo Square',
        'University of Évora'
      ],
      gastronomia: [
        'Açorda Alentejana', 
        'Lamb Stew', 
        'Migas Alentejanas',
        'Alentejo Wines'
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

// Function to generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const destino = await getDestino(slug);
  
  if (!destino) {
    return {
      title: 'Destination not found',
      description: 'The requested destination was not found',
    };
  }
  
  return {
    title: `${destino.nome} | Portugal Tourism`,
    description: destino.descricao,
    openGraph: {
      images: [destino.imagens[0]],
    },
  };
}

// Update of PageProps type for Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>;
  // Remove searchParams from type definition if not used
  // searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DestinoPage({ params /* removing searchParams */ }: PageProps) {
  // Resolving the params Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const destino = await getDestino(slug);

  if (!destino) {
    notFound();
  }

  return (
    <article className="pb-16">
      {/* Destination page hero */}
      <div className="relative h-[500px] mb-12">
        <Image
          src={destino.imagens[0]}
          alt={`${destino.nome} landscape`}
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
          <Link href="/" className="text-azul-maritimo">Home</Link> 
          {' > '} 
          <Link href="/destinos" className="text-azul-maritimo">Destinations</Link> 
          {' > '} 
          <span>{destino.nome}</span>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-xl text-cinza-pedra mb-6">{destino.descricaoLonga}</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-azul-maritimo/10 text-azul-maritimo">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Region {destino.regiao}
            </span>
          </div>
        </div>

        {/* Image gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destino.imagens.map((img, index) => (
              <div 
                key={index}
                className="rounded-lg overflow-hidden h-64 relative hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={img}
                  alt={`${destino.nome} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Main attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Main Attractions</h2>
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

        {/* Gastronomy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Gastronomy</h2>
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

        {/* Related experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experiences in {destino.nome}</h2>
          <div className="bg-azul-maritimo/5 p-6 rounded-lg">
            <p className="text-lg mb-4">
              Discover activities and tours that will make your visit to {destino.nome} unforgettable.
            </p>
            <Link href="/experiencias" className="inline-block bg-azul-maritimo hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              View all experiences
            </Link>
          </div>
        </section>

        {/* CTA - Plan visit */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Plan your visit to {destino.nome}</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Discover the best times to visit, where to stay and how to make the most of your stay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/planejar" className="bg-azul-maritimo hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Plan Trip
            </Link>
            <Link href="/gastronomia" className="bg-white border border-azul-maritimo hover:bg-gray-100 text-azul-maritimo font-bold py-3 px-6 rounded-lg transition-colors">
              Explore Gastronomy
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 