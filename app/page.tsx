import Image from 'next/image';
import Navbar from '../app/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased font-sans">

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* SECCIÓN: Áreas de trabajo */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl font-light text-sky-700 flex items-center gap-2">
              Áreas de trabajo
              <span className="text-gray-300 text-2xl font-normal cursor-pointer select-none hover:text-sky-600 transition-colors">#</span>
            </h1>
            
            <p className="text-gray-600 leading-relaxed font-light text-justify">
                En la actualidad me encuentro investigando en el campo de la historia social y cultural de los conflictos armados con el propósito de analizar el impacto de la guerra en las sensibilidades y la memoria colectiva. A partir de la diversidad de fuentes —oficiales y alternativas— que resguardan las experiencias subjetivas de la Guerra del Atlántico Sur, es posible estudiar el modo en que se configuraron las mentalidades, las representaciones del conflicto y las identidades en tensión.  
            </p>
          </div>

          {/* Foto de perfil */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-sm">
            <Image 
              src="/foto-perfil.jpg" // Reemplaza con tu archivo real en public/
              alt="Ángel Leonardo Maggio"
              fill
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* SECCIÓN: Sostener la Italianidad */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl font-light text-red-800">
              Sostener la Italianidad
            </h2>
            
            <p className="text-red-700 italic font-light text-sm">
              El liderazgo en el asociacionismo migrante italiano de Argentina (fines del siglo XIX y comienzos del XXI)
            </p>

            <p className="text-gray-600 leading-relaxed font-light text-justify">
              Esta obra se propone analizar los espacios de sociabilidad de la comunidad italiana de 
              Argentina a partir del rol que desempeñaron los líderes que los condujeron. Las...
            </p>
          </div>

          {/* Banner/Portada del libro */}
          <div className="flex border-l-8 border-red-800 pl-6 h-full items-center bg-gray-50 p-6 min-h-[250px]">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-wide text-red-900 leading-tight">
                SOSTENER <br /> LA ITALIANIDAD
              </h3>
              <p className="text-xs text-gray-600 font-light max-w-[200px]">
                El liderazgo en el asociacionismo migrante italiano de Argentina (fines del siglo XIX y comienzos del XXI)
              </p>
              {/* Espacio para la miniatura del libro */}
              <div className="w-24 h-32 bg-gray-200 relative mt-4 shadow-sm">
                {/* <Image src="/portada-libro.jpg" alt="Portada Libro" fill className="object-cover" /> */}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
