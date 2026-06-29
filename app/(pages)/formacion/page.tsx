import Image from 'next/image';
import Link from 'next/link';

export default function FormacionAcademica() {
  return (
    // Forzamos el estilo de luz de fondo y texto, y añadimos color-scheme: light
    <div 
      className="w-full bg-white text-gray-800 min-h-screen" 
      style={{ colorScheme: 'light' }}
    >
      <section className="max-w-7xl mx-auto px-6 py-8 space-y-10 bg-white">
        
        {/* Banner Superior Horizontal */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100 shadow-sm">
          <Image 
            src="/banner-facultad.jpg" 
            alt="Facultad de Filosofía y Letras UBA"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido Principal */}
        <div className="space-y-8 max-w-5xl bg-white">
          {/* Título de la sección */}
          <h1 className="text-4xl font-light text-sky-700 tracking-wide">
            Formación académica
          </h1>

          {/* Lista de hitos académicos */}
          <ul className="space-y-6 text-gray-700 font-light leading-relaxed text-sm md:text-base bg-white">
            
            {/* Doctorado */}
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800">
              <strong className="font-medium text-gray-900">Doctorado en el área de Historia (2023)</strong> Universidad de Buenos Aires - Facultad de Filosofía y Letras. Título de la tesis: <span className="italic">El liderazgo &ldquo;étnico&rdquo; y las redes personales dentro de la comunidad italiana migrante a partir del caso de la Confederación General de Federaciones Italianas en la República Argentina (FEDITALIA) (fines del siglo XIX y comienzos del XXI).</span> Descarga{' '}
              <Link href="/descargas/tesis-doctorado.pdf" className="text-sky-700 underline underline-offset-2 hover:text-sky-900 transition-colors">
                aquí
              </Link>.
            </li>

            {/* Licenciatura */}
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800">
              <strong className="font-medium text-gray-900">Licenciado en Historia (2017)</strong> Universidad de Buenos Aires - Facultad de Filosofía y Letras. Título de la tesis: <span className="italic">Identidades italianas y espacios de representación en Buenos Aires: el surgimiento del periódico L&apos;Eco D&apos;Italia (1965-1975).</span>
            </li>

            {/* Profesorado */}
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800">
              <strong className="font-medium text-gray-900">Profesor de Enseñanza Media y Superior en Historia (2016)</strong> Universidad de Buenos Aires - Facultad de Filosofía y Letras.
            </li>

          </ul>
        </div>

      </section>
    </div>
  );
}