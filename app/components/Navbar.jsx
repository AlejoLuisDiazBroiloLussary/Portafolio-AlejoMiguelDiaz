import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Formación académica', href: '/formacion' },
    { label: 'Publicaciones', href: '/publicaciones' },
    { label: 'Congresos y jornadas', href: '/congresos' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    // Agregamos 'sticky top-0 z-50' para fijar el menú en la parte superior
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Nombre */}
        <div className="text-xl text-gray-600 font-light tracking-wide">
          Alejo Miguel Díaz
        </div>

        {/* Menú de Navegación */}
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm text-gray-500 font-light">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-gray-900 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Icono de Búsqueda (Lupa simple) */}
          <button className="text-gray-400 hover:text-gray-600 focus:outline-none" aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}