import Link from 'next/link';

export default function Contacto() {
  const redesData = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'ORCID', href: 'https://orcid.org' },
    { label: 'Academia', href: 'https://academia.edu' },
    { label: 'ResearchGate', href: 'https://researchgate.net' },
  ];

  return (
    <div 
      className="w-full bg-white text-gray-800 min-h-screen" 
      style={{ colorScheme: 'light' }}
    >
      <section className="max-w-7xl mx-auto px-6 py-8 space-y-10 bg-white">
        
        {/* Banner Superior Horizontal (Sobres/Cartas Postales) */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/banner-contacto.jpg" // Reemplaza con tu imagen real de las cartas postales
            alt="Cartas y sobres postales antiguos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido Principal */}
        <div className="space-y-12 max-w-6xl bg-white pt-4">
          
          {/* Título de la sección */}
          <h1 className="text-4xl font-light text-sky-700 tracking-wide text-left">
            Contacto
          </h1>

          {/* Contenedor de Botones y Correo Centrados */}
          <div className="flex flex-col items-center justify-center space-y-10 w-full pt-4">
            
            {/* Fila de Botones de Redes Académicas */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full">
              {redesData.map((red, index) => (
                <Link
                  key={index}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-2 border border-sky-700 text-sky-700 font-light text-sm tracking-wide rounded-sm bg-white hover:bg-sky-50 transition-colors min-w-[140px] text-center"
                >
                  {red.label}
                </Link>
              ))}
            </div>

            {/* Correo Electrónico */}
            <div className="text-center pt-2">
              <a 
                href="mailto:maggioangel@gmail.com" 
                className="text-gray-600 font-light tracking-wide text-sm md:text-base hover:text-sky-700 transition-colors"
              >
                maggioangel@gmail.com
              </a>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}