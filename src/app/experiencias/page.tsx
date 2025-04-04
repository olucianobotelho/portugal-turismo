import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dados simulados para as experiências
const experiencias = [
  {
    id: 1,
    titulo: 'Passeio de Barco pelo Douro',
    descricao: 'Explore o majestoso rio Douro e admire as paisagens vinícolas em um passeio inesquecível.',
    imagemUrl: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80',
    slug: 'passeio-de-barco-pelo-douro'
  },
  {
    id: 2,
    titulo: 'Tour pelos Castelos Medievais',
    descricao: 'Viaje no tempo visitando os impressionantes castelos medievais de Portugal.',
    imagemUrl: 'https://64.media.tumblr.com/2dd3d0b7b80287108e4ffec9fb1de4a9/tumblr_inline_poeue5aPfT1qek3z9_1280.png',
    slug: 'tour-castelos-medievais'
  },
  {
    id: 3,
    titulo: 'Trilhas nos Açores',
    descricao: 'Aventure-se por trilhas com vistas de tirar o fôlego nas ilhas açorianas.',
    imagemUrl: 'https://cdn.bookatrekking.com/data/images/2023/07/azores-general.jpg',
    slug: 'trilhas-nos-acores'
  },
  {
    id: 4,
    titulo: 'Surfe na Nazaré',
    descricao: 'Conheça as famosas ondas gigantes da Nazaré e experimente o surfe nesta praia icônica.',
    imagemUrl: 'https://ohairesorts.com/nazare/wp-content/uploads/2020/06/surf-en-nazare.jpg',
    slug: 'surfe-na-nazare'
  },
  {
    id: 5,
    titulo: 'Roteiro Gastronômico',
    descricao: 'Descubra os sabores autênticos da culinária portuguesa com este roteiro gastronômico completo.',
    imagemUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    slug: 'roteiro-gastronomico'
  },
  {
    id: 6,
    titulo: 'Observação de Golfinhos',
    descricao: 'Embarque em uma experiência mágica de observação de golfinhos na costa portuguesa.',
    imagemUrl: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=800&q=80',
    slug: 'observacao-de-golfinhos'
  }
];

export default function ExperienciasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-preto-oliva">Experiências Únicas em Portugal</h1>
        <p className="text-lg text-cinza-pedra max-w-3xl mx-auto">
          Descubra experiências autênticas que tornarão sua viagem a Portugal verdadeiramente inesquecível. De passeios de barco a aventuras na natureza, temos opções para todos os gostos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiencias.map((experiencia) => (
          <Link key={experiencia.id} href={`/experiencias/${experiencia.slug}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src={experiencia.imagemUrl}
                  alt={experiencia.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-preto-oliva">{experiencia.titulo}</h2>
                <p className="text-cinza-pedra">{experiencia.descricao}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-azul-maritimo font-medium hover:text-azul-maritimo/90 transition-colors">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 