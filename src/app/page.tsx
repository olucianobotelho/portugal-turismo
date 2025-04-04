import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Card from '../components/ui/Card';

export default function HomePage() {
  // Simulated data for popular destinations
  const popularDestinations = [
    {
      id: 1,
      title: 'Lisbon',
      description: 'Capital of Portugal, known for its rich history, architecture and gastronomy.',
      imageUrl: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80',
      slug: 'lisboa'
    },
    {
      id: 2,
      title: 'Porto',
      description: 'Famous for Port wine production and its enchanting riverside landscape.',
      imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80',
      slug: 'porto'
    },
    {
      id: 3,
      title: 'Algarve',
      description: 'Coastal region with stunning beaches and impressive cliffs.',
      imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
      slug: 'algarve'
    },
    {
      id: 4,
      title: 'Madeira',
      description: 'Paradise island known for its forests, mountains and mild climate throughout the year.',
      imageUrl: 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1280,h=680,fit=cover,format=jpeg/wp-content/uploads/2020/02/ilha-da-madeira-camara-de-lobos.jpg',
      slug: 'madeira'
    },
  ];

  // Simulated data for unique experiences
  const uniqueExperiences = [
    {
      id: 1,
      title: 'Douro River Boat Tour',
      description: 'Explore the majestic Douro River and admire the wine landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Gastronomic Tour',
      description: 'Discover the authentic flavors of Portuguese cuisine.',
      imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Hiking in the Azores',
      description: 'Venture through trails with breathtaking views on the Azorean islands.',
      imageUrl: 'https://images.unsplash.com/photo-1500576992153-0271099def59?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <div className="space-y-16">
      <Hero 
        title="Discover Portugal"
        subtitle="A country of natural beauty, rich history and vibrant culture"
        backgroundImage="https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="container mx-auto px-4">
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <Link 
              href="/destinos" 
              className="text-azul-maritimo hover:text-azul-maritimo/80 font-medium flex items-center"
            >
              View all
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <div key={destination.id} className="transform hover:-translate-y-1 transition-transform duration-300">
                <Link href={`/destino/${destination.slug}`}>
                  <Card
                    title={destination.title}
                    description={destination.description}
                    imageUrl={destination.imageUrl}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Unique Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uniqueExperiences.map((experience) => (
              <div key={experience.id} className="transform hover:-translate-y-1 transition-transform duration-300">
                <Card
                  title={experience.title}
                  description={experience.description}
                  imageUrl={experience.imageUrl}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Plan Your Trip</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Portugal offers experiences for all types of travelers. Use our tools
            to plan the perfect trip based on your interests and preferences.
          </p>
          <div className="flex justify-center">
            <Link href="/planejar">
              <button className="bg-azul-maritimo hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Start Planning
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 