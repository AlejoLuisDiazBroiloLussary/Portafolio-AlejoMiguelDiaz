export default function CongresosYJornadas() {
  const congresosData = [
    {
      id: 1,
      texto: <>Maggio, Ángel Leonardo (septiembre, 2024). &ldquo;El antifascismo italiano de Buenos Aires luego de la Segunda Guerra Mundial a partir del periódico Italia&rdquo;. En Nadia De Cristóforis y Bibiana Andreucci (Coord.) &ldquo;Las migraciones entre Europa y América y los factores de transformación socio-económica, política y cultural (siglos XIX y XX)&rdquo;. XIX Jornadas Interescuelas Historia. Universidad Nacional de Rosario, Rosario, Argentina.</>
    },
    {
      id: 2,
      texto: <>Maggio, Ángel Leonardo (noviembre, 2023). &ldquo;Las inmigrantes italianas de Buenos Aires y la Primera Guerra Mundial&rdquo;, en el Seminario de discusión &ldquo;Migraciones, exilios y mujeres en la Historia&rdquo;, co-organizado por el Proyecto de Investigación Plurianual de CONICET 11220210100201CO y el Instituto de Historia de España &ldquo;Dr. Claudio Sánchez Albornoz&rdquo; (Facultad de Filosofía y Letras - UBA).</>
    },
    {
      id: 3,
      texto: <>Maggio, Ángel Leonardo (julio, 2023). &ldquo;Representaciones en un periódico fascista de Buenos Aires luego de la Segunda Guerra Mundial (1955-1965)&rdquo;. En De Cristóforis, Nadia y Andreucci, Bibiana (Coord.) &ldquo;Las crisis y los conflictos de la etapa contemporánea y sus repercusiones sobre los flujos y las comunidades de migrantes en el Continente Americano&rdquo;. XII Jornadas de Historia Moderna y Contemporánea. Universidad Nacional de Quilmes, Quilmes, Argentina.</>
    },
    {
      id: 4,
      texto: <>Maggio, Ángel Leonardo (mayo, 2022). &ldquo;Liderazgos y enfrentamientos entre grupos dirigentes de la comunidad italiana de la argentina (1965-1983)&rdquo;. En De Cristóforis, Nadia y Castro Montero, María de los Ángeles (Coord.) &ldquo;Migraciones y exilios entre Europa y América: experiencias y dinámicas configurativas en los siglos XIX y XX&rdquo;. XVIII Jornadas Interescuelas Historia. Universidad Nacional de Santiago del Estero, Santiago del Estero, Argentina.</>
    }
  ];

  return (
    <div 
      className="w-full bg-white text-gray-800 min-h-screen" 
      style={{ colorScheme: 'light' }}
    >
      <section className="max-w-7xl mx-auto px-6 py-8 space-y-10 bg-white">
        
        {/* Banner Superior Horizontal (Auditorio) */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/banner-auditorio.jpg" // Reemplaza con tu imagen real del auditorio
            alt="Auditorio de conferencias"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido Principal */}
        <div className="space-y-8 max-w-6xl bg-white">
          {/* Título de la sección */}
          <h1 className="text-4xl font-light text-sky-700 tracking-wide">
            Congresos y jornadas
          </h1>

          {/* Lista de Eventos Académicos */}
          <ul className="space-y-6 text-gray-700 font-light leading-relaxed text-sm md:text-base bg-white">
            {congresosData.map((item) => (
              <li 
                key={item.id} 
                className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 text-justify"
              >
                {item.texto}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </div>
  );
}