import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const QuienesSomos = () => {
  return (
    <section className="space-y-10">
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Quiénes <span className="text-primary-400">somos</span>
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            Somos una academia enfocada en la formación integral en artes
            marciales mixtas. Nuestro propósito es construir disciplina,
            confianza y fortaleza física y mental en cada guerrero,
            preparándolos para enfrentar los desafíos dentro y fuera del ring.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-medium text-primary-300">Misión</h3>
          <p className="mt-3 text-neutral-300">
            Ofrecer entrenamiento de artes marciales de calidad mundial, guiado
            por instructores expertos, para desarrollar habilidades de combate,
            disciplina y valores que trasciendan el dojo. Buscamos formar
            guerreros completos, capaces de defenderse y liderar con respeto.
          </p>
        </div>
        <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-xl font-medium text-primary-300">Visión</h3>
          <p className="mt-3 text-neutral-300">
            Ser reconocidos como la academia líder en artes marciales mixtas,
            creando una comunidad de atletas que transforman sus vidas con
            disciplina, respeto y excelencia en el combate.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Nuestra <span className="text-primary-400">Historia</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-300 font-bold">
                  2018
                </div>
                <h3 className="font-medium text-neutral-100">Los inicios</h3>
              </div>
              <p className="text-sm text-neutral-400">
                Academia Shozam nació con una visión clara: crear un espacio
                donde las artes marciales se enseñen con respeto y
                profesionalismo. Comenzamos con un pequeño grupo de 10 alumnos
                apasionados por el MMA.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-300 font-bold">
                  2020
                </div>
                <h3 className="font-medium text-neutral-100">Expansión</h3>
              </div>
              <p className="text-sm text-neutral-400">
                Agregamos nuevas disciplinas: BJJ, Muay Thai y Wrestling.
                Superamos los 100 alumnos activos y establecimos el primer
                equipo de competición.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-300 font-bold">
                  2022
                </div>
                <h3 className="font-medium text-neutral-100">Innovación</h3>
              </div>
              <p className="text-sm text-neutral-400">
                Inauguramos instalaciones de 500m² con tatami profesional,
                octógono y área de pesas. Alcanzamos más de 300 alumnos activos
                y 5 instructores certificados internacionalmente.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-300 font-bold">
                  2025
                </div>
                <h3 className="font-medium text-neutral-100">Presente</h3>
              </div>
              <p className="text-sm text-neutral-400">
                Más de 500 alumnos entrenando, 20 campeones regionales formados,
                y reconocimiento como una de las academias de MMA más destacadas
                de España.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
        <h3 className="text-2xl font-medium text-primary-300 mb-6">
          ¿Por qué elegirnos?
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="text-2xl">👨‍🏫</div>
            <h4 className="font-medium text-neutral-100">
              Instructores expertos
            </h4>
            <p className="text-sm text-neutral-400">
              Certificados con cinturones negros y experiencia en competencias
              nacionales e internacionales.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">📈</div>
            <h4 className="font-medium text-neutral-100">
              Metodología probada
            </h4>
            <p className="text-sm text-neutral-400">
              Basada en técnicas de MMA real y progresión estructurada desde
              principiante hasta avanzado.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">🤝</div>
            <h4 className="font-medium text-neutral-100">Ambiente inclusivo</h4>
            <p className="text-sm text-neutral-400">
              Comunidad diversa y orientada al respeto, sin importar edad,
              género o nivel físico.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">🎓</div>
            <h4 className="font-medium text-neutral-100">
              Eventos y competencias
            </h4>
            <p className="text-sm text-neutral-400">
              Seminarios con maestros invitados, torneos internos y apoyo para
              competencias amateur.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Nuestros <span className="text-primary-400">Valores</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icono: '🌟',
              titulo: 'Excelencia',
              descripcion:
                'Nos comprometemos a ofrecer la mejor calidad en entrenamiento de artes marciales, actualizando constantemente técnicas y metodologías.',
            },
            {
              icono: '🔄',
              titulo: 'Evolución',
              descripcion:
                'Fomentamos el crecimiento continuo, tanto físico como mental, adaptándonos a las necesidades de cada guerrero.',
            },
            {
              icono: '🎯',
              titulo: 'Compromiso',
              descripcion:
                'Dedicados al éxito de cada alumno, brindando apoyo personalizado en su camino marcial.',
            },
            {
              icono: '🤲',
              titulo: 'Respeto',
              descripcion:
                'Actuamos con honor y consideración en todas nuestras relaciones con alumnos, instructores y visitantes.',
            },
            {
              icono: '👥',
              titulo: 'Comunidad',
              descripcion:
                'Construimos una familia de guerreros donde todos se apoyan, entrenan juntos y crecen unidos.',
            },
            {
              icono: '♿',
              titulo: 'Inclusión',
              descripcion:
                'Creemos que las artes marciales son para todos, sin importar edad, género o condición física inicial.',
            },
          ].map((valor) => (
            <div
              key={valor.titulo}
              className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20"
            >
              <div className="text-3xl mb-3">{valor.icono}</div>
              <h3 className="text-lg font-medium text-neutral-100 mb-2">
                {valor.titulo}
              </h3>
              <p className="text-sm text-neutral-400">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Únete a nuestra comunidad
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Sé parte de una academia que está transformando vidas y forjando
            guerreros con disciplina, respeto y determinación.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/courses">
              <Button variant="primary" className="px-6">
                Ver disciplinas
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-6">
                Contáctanos
              </Button>
            </Link>
            <Link to="/teachers">
              <Button variant="ghost" className="px-6">
                Conoce a nuestros instructores
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuienesSomos;
