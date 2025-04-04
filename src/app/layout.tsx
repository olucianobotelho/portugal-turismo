import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Turismo em Portugal',
  description: 'Descubra as melhores experiências turísticas em Portugal',
}

// Componente para lidar com a hidratação
function BodyContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-background">
        {children}
      </main>
      <footer className="bg-azul-maritimo text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <p className="text-center">© {new Date().getFullYear()} Turismo Portugal. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="bg-background" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <Suspense fallback={<div className="bg-background">Carregando...</div>}>
          <BodyContent>{children}</BodyContent>
        </Suspense>
      </body>
    </html>
  )
} 