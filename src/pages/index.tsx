import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Turismo em Portugal</h1>
      <p className="mb-8">Descubra as maravilhas de Portugal</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/destinos" className="p-4 bg-blue-100 rounded-lg">
          <h2 className="text-2xl font-bold">Destinos</h2>
          <p>Explore os melhores destinos de Portugal</p>
        </Link>
        
        <Link href="/experiencias" className="p-4 bg-green-100 rounded-lg">
          <h2 className="text-2xl font-bold">Experiências</h2>
          <p>Descubra experiências únicas em Portugal</p>
        </Link>
        
        <Link href="/gastronomia" className="p-4 bg-yellow-100 rounded-lg">
          <h2 className="text-2xl font-bold">Gastronomia</h2>
          <p>Conheça a deliciosa culinária portuguesa</p>
        </Link>
        
        <Link href="/planejar" className="p-4 bg-red-100 rounded-lg">
          <h2 className="text-2xl font-bold">Planejar Viagem</h2>
          <p>Planeje sua viagem perfeita para Portugal</p>
        </Link>
      </div>
    </div>
  );
} 