import Link from 'next/link';

export default function Publicaciones() {
  const publicacionesData = [
    {
      id: 1,
      texto: <>Maggio, Ángel Leonardo (2025). &ldquo;La participación de las italianas de Buenos Aires durante la Primera Guerra Mundial&rdquo;. <span className="italic">Anuario del Instituto de Historia Argentina</span>, Vol. 25, N° 1, e229. Descarga </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2025-1.pdf',
    },
    {
      id: 2,
      texto: <>Maggio, Ángel Leonardo (2025). &ldquo;La incorporación de los italoargentinos al asociacionismo migrante de Buenos Aires (1980-2010)&rdquo;. <span className="italic">Revista de Historia Americana y Argentina</span>, Vol. 60, N° 1, pp. 1-21. Descarga </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2025-2.pdf',
    },
    {
      id: 3,
      texto: <>Maggio, Ángel Leonardo (2024). &ldquo;La &apos;pacificación&apos; de la comunidad italiana de Buenos Aires (1945-1965)&rdquo;. <span className="italic">Revista De Historia</span>, N° 25, pp. 25-39. Descarga </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2024.pdf',
    },
    {
      id: 4,
      texto: <>Maggio, Ángel Leonardo (2023). &ldquo;El asociacionismo italiano de Buenos Aires durante los años del fascismo (1922-1939)&rdquo;. <span className="italic">PolHis. Revista Bibliográfica Del Programa Interuniversitario De Historia Política</span>, N° 32, pp. 219-246. Descarga </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2023-1.pdf',
    },
    {
      id: 5,
      texto: <>Maggio, Ángel Leonardo (2023). &ldquo;La comunidad italiana de Buenos Aires y las elecciones para el COMITES (1986-1997)&rdquo;. <span className="italic">Pasado Abierto</span>, N° 18, julio - diciembre, pp. 246-265. Descarga </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2023-2.pdf',
    },
    {
      id: 6,
      texto: <>Maggio, Ángel Leonardo (2022). &ldquo;La articulación del asociacionismo italiano de Buenos Aires, 1878-1918&rdquo;. <span className="italic">Revista Páginas</span>, Año XIV, N° 35, mayo - agosto. Descarga </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2022.pdf',
    },
    {
      id: 7,
      texto: <>Maggio, Ángel Leonardo (2020). &ldquo;La comunidad italiana de la Argentina y la guerra de Malvinas&rdquo;. <span className="italic">Anuario del PROEHAA</span>, Año V, N° 5, pp. 161-189. Disponible </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2020-1.pdf',
    },
    {
      id: 8,
      texto: <>Maggio, Ángel Leonardo (2020). &ldquo;El liderazgo étnico italiano en Argentina: el caso de la Confederación General de Federaciones Italianas en Argentina (FEDITALIA) (1912-2003)&rdquo;. <span className="italic">Odisea. Revista de Estudios Migratorios</span>, N° 7, pp. 55-80. Disponible </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2020-2.pdf',
    },
    {
      id: 9,
      texto: <>Maggio, Ángel Leonardo (2017). &ldquo;La <span className="italic">Conferenza Nazionale dell&apos;Emigrazione</span> y los inmigrantes italianos en Argentina&rdquo;. <span className="italic">Odisea. Revista de Estudios Migratorios</span>, N° 4, pp. 257-284. Disponible </>,
      linkTexto: 'aquí',
      href: '/descargas/publicacion-2017.pdf',
    },
  ];

  return (
    <div 
      className="w-full bg-white text-gray-800 min-h-screen" 
      style={{ colorScheme: 'light' }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-8 bg-white">
        
        {/* Título de la sección */}
        <h1 className="text-4xl font-light text-sky-700 tracking-wide">
          Publicaciones
        </h1>

        {/* Lista de Publicaciones */}
        <ul className="space-y-6 text-gray-700 font-light leading-relaxed text-sm md:text-base bg-white max-w-6xl">
          {publicacionesData.map((pub) => (
            <li 
              key={pub.id} 
              className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 text-justify"
            >
              {pub.texto}
              <Link 
                href={pub.href} 
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900 transition-colors"
              >
                {pub.linkTexto}
              </Link>
              .
            </li>
          ))}
        </ul>

      </section>
    </div>
  );
}