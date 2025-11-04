import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import fighterHero from '../assets/vector_inicio.webp';
import CounterAnimation from '../components/CounterAnimation';

const Inicio = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section con imagen de impacto */}
      <div className="overflow-hidden relative bg-linear-to-b from-neutral-900/60 to-neutral-900/20 min-h-screen lg:min-h-[80vh]">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contenido del Hero - Sticky */}
          <div className="relative z-10 p-8 md:p-14 lg:sticky lg:top-20 lg:self-start">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in-left">
              Desata el{' '}
              <span className="text-primary-400 relative inline-block">
                guerrero
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4C50 2 150 6 200 4"
                    stroke="rgb(126, 34, 206)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              que llevas dentro
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300 leading-relaxed animate-fade-in-left delay-200">
              Transforma tu cuerpo y mente con entrenamiento de MMA de clase
              mundial. Instructores certificados, instalaciones profesionales y
              una comunidad que te impulsa.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-left delay-300">
              <Link to="/contact">
                <Button
                  variant="primary"
                  className="px-8 py-6 text-lg hover-lift"
                >
                  Clase gratis
                  <span className="ml-2">→</span>
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg hover-lift"
                >
                  Ver disciplinas
                </Button>
              </Link>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-800/60 animate-fade-in-up delay-400">
              <div>
                <div className="text-3xl font-bold text-primary-400">
                  <CounterAnimation end={500} duration={2000} suffix="+" />
                </div>
                <div className="text-sm text-neutral-400">Alumnos activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">
                  <CounterAnimation end={15} duration={1200} suffix="+" />
                </div>
                <div className="text-sm text-neutral-400">Años experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">
                  <CounterAnimation end={20} duration={1200} suffix="+" />
                </div>
                <div className="text-sm text-neutral-400">Campeones</div>
              </div>
            </div>
          </div>

          {/* Imagen/Vector del guerrero */}
          <div className="relative h-[500px] lg:h-[700px] overflow-hidden animate-fade-in-right delay-200">
            {/* Imagen del guerrero */}
            <div className="absolute inset-0">
              <img
                src={fighterHero}
                alt="Guerrero de MMA en acción"
                className="w-full h-full object-cover object-center nonselectable"
              />

              {/* Overlay gradiente para mezclar con el fondo */}
              <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/50 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />
            </div>

            {/* Elementos decorativos flotantes */}
            <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-primary-600/30 animate-pulse" />
            <div
              className="absolute bottom-20 left-20 w-40 h-40 rounded-full blur-3xl pointer-events-none bg-purple-600/20 animate-pulse"
              style={{ animationDelay: '1s' }}
            />

            {/* Formas geométricas decorativas */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="heroGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(59, 130, 246)"
                    stopOpacity="0.6"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(147, 51, 234)"
                    stopOpacity="0.3"
                  />
                </linearGradient>
              </defs>
              <circle
                cx="20%"
                cy="30%"
                r="80"
                fill="none"
                stroke="url(#heroGradient)"
                strokeWidth="2"
              />
              <circle
                cx="80%"
                cy="70%"
                r="60"
                fill="none"
                stroke="url(#heroGradient)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: 'Instructores certificados',
            d: 'Entrena con campeones y maestros con experiencia en competencias.',
          },
          {
            t: 'Técnicas modernas',
            d: 'Metodología actualizada de MMA, striking y grappling.',
          },
          {
            t: 'Comunidad de guerreros',
            d: 'Ambiente familiar y motivador para alcanzar tus metas.',
          },
        ].map((f, idx) => (
          <div
            key={f.t}
            className={`p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/30 hover-lift animate-fade-in-up delay-${(idx + 1) * 100}`}
          >
            <h3 className="text-lg font-medium text-primary-300">{f.t}</h3>
            <p className="mt-2 text-sm text-neutral-300">{f.d}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between animate-fade-in">
          <h2 className="text-3xl font-semibold tracking-tight">
            Nuestros <span className="text-primary-400">Cursos</span>
          </h2>
          <Link to="/courses">
            <Button variant="outline" className="px-4 hover-lift">
              Ver todos
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              nombre: 'MMA Fundamentals',
              descripcion:
                'Aprende las bases del striking, grappling y defensa personal en un ambiente controlado.',
              nivel: 'Principiante',
              duracion: '3 meses',
            },
            {
              nombre: 'Brazilian Jiu-Jitsu',
              descripcion:
                'Domina el arte del grappling y las sumisiones con técnicas de BJJ auténtico.',
              nivel: 'Todos',
              duracion: 'Continuo',
            },
            {
              nombre: 'Muay Thai Avanzado',
              descripcion:
                'Perfecciona tu striking con el arte de las 8 extremidades, clinch y técnicas de élite.',
              nivel: 'Intermedio',
              duracion: '6 meses',
            },
          ].map((curso, idx) => (
            <div
              key={curso.nombre}
              className={`p-6 space-y-4 rounded-xl border transition-colors border-neutral-800/60 bg-neutral-900/30 hover:border-primary-600/50 hover-lift animate-scale-in delay-${(idx + 2) * 100}`}
            >
              <div>
                <h3 className="text-xl font-medium text-neutral-100">
                  {curso.nombre}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {curso.descripcion}
                </p>
              </div>
              <div className="flex gap-2 pt-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-primary-600/20 text-primary-300">
                  {curso.nivel}
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-800/60 text-neutral-300">
                  {curso.duracion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            ¿Por qué elegir{' '}
            <span className="text-primary-400">Academia Shozam?</span>
          </h2>
          <p className="mt-3 text-neutral-300">
            Descubre las ventajas que nos hacen diferentes en el mundo de las
            artes marciales mixtas.
          </p>
        </div>
        <div className="relative z-10 grid gap-6 md:grid-cols-2">
          {[
            {
              titulo: 'Entrenamiento real de MMA',
              descripcion:
                'Técnicas auténticas de striking, grappling y defensa personal aplicadas en sparring controlado.',
              icon: '🥊',
            },
            {
              titulo: 'Horarios flexibles',
              descripcion:
                'Clases matutinas, vespertinas y nocturnas adaptadas a tu ritmo de vida. Consulta nuestros horarios.',
              icon: '⏰',
              link: '/schedule',
            },
            {
              titulo: 'Cinturones y graduaciones',
              descripcion:
                'Sistema de graduación reconocido en BJJ y certificaciones en striking para validar tu progreso.',
              icon: '🥋',
            },
            {
              titulo: 'Eventos y torneos',
              descripcion:
                'Participa en seminarios, campeonatos amateur y conoce a peleadores profesionales.',
              icon: '🏆',
              link: '/events',
            },
          ].map((ventaja) => (
            <div
              key={ventaja.titulo}
              className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20"
            >
              <div className="text-3xl mb-3">{ventaja.icon}</div>
              <h3 className="text-lg font-medium text-neutral-100">
                {ventaja.titulo}
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {ventaja.descripcion}
              </p>
              {ventaja.link && (
                <Link to={ventaja.link}>
                  <Button
                    variant="ghost"
                    className="px-0 mt-3 text-primary-400 hover:text-primary-300"
                  >
                    Ver más →
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative space-y-6">
        {/* Elemento decorativo de fondo */}
        <div className="absolute -top-10 right-1/4 w-40 h-40 rounded-full blur-3xl pointer-events-none bg-yellow-600/5 animate-pulse" />

        <h2 className="text-3xl font-semibold tracking-tight">
          Lo que dicen{' '}
          <span className="text-primary-400">nuestros estudiantes</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              nombre: 'María González',
              rol: 'Cinturón Azul BJJ',
              testimonio:
                'Gracias a Academia Shozam, transformé mi vida. Los instructores son increíbles y el ambiente es como una familia. He ganado confianza y disciplina.',
              rating: 5,
            },
            {
              nombre: 'Carlos Ramírez',
              rol: 'Peleador Amateur',
              testimonio:
                'El entrenamiento de MMA aquí es de primer nivel. He competido en varios torneos y los coaches me prepararon perfectamente. ¡Ambiente de élite!',
              rating: 5,
            },
            {
              nombre: 'Ana Martínez',
              rol: 'Fitness Fighter',
              testimonio:
                'Vine por fitness y me quedé por la comunidad. He perdido 15kg, aprendí a defenderme y encontré un grupo de amigos increíble.',
              rating: 5,
            },
          ].map((testimonio) => (
            <div
              key={testimonio.nombre}
              className="p-6 space-y-4 rounded-xl border border-neutral-800/60 bg-neutral-900/30"
            >
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-sm text-neutral-300 italic">
                "{testimonio.testimonio}"
              </p>
              <div className="pt-4 border-t border-neutral-800/60">
                <p className="font-medium text-neutral-100">
                  {testimonio.nombre}
                </p>
                <p className="text-sm text-neutral-400">{testimonio.rol}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/about">
            <Button variant="outline" className="px-6">
              Conoce más sobre nosotros
            </Button>
          </Link>
        </div>
      </div>

      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-14 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Listo para transformar tu vida?
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Únete a cientos de guerreros que ya están forjando su mejor versión
            física y mental con nosotros.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/pricing">
              <Button variant="primary" className="px-6">
                Ver planes y precios
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-6">
                Contáctanos
              </Button>
            </Link>
            <Link to="/teachers">
              <Button variant="ghost" className="px-6">
                Conoce a nuestros profesores
              </Button>
            </Link>
          </div>
        </div>

        {/* Elementos decorativos mejorados */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-primary-600/20" />
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-purple-600/15" />

        {/* Formas geométricas decorativas */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor="rgb(147, 51, 234)"
                stopOpacity="0.5"
              />
            </linearGradient>
          </defs>
          <circle
            cx="10%"
            cy="20%"
            r="60"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
          />
          <circle
            cx="90%"
            cy="80%"
            r="40"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
          />
          <path
            d="M 50 50 L 100 100 L 150 50 Z"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </svg>

        {/* Puntos decorativos flotantes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary-400 opacity-40 animate-pulse" />
        <div
          className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-purple-400 opacity-30 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-400 opacity-40 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  );
};

export default Inicio;
