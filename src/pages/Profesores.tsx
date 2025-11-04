import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const team = [
  {
    nombre: 'Carlos "El Titan" Mendoza',
    especialidad: 'MMA & Brazilian Jiu-Jitsu',
    bio: 'Cinturón negro de BJJ, campeón nacional de MMA. 15+ años compitiendo profesionalmente y formando campeones.',
    experiencia: [
      'Campeón Nacional MMA 2018-2020',
      'Cinturón Negro BJJ bajo Marcelo Garcia',
      'Ex-peleador UFC con récord 12-3',
    ],
    tecnologias: [
      'MMA',
      'BJJ',
      'Grappling',
      'Defensa Personal',
      'Conditioning',
    ],
    linkedin: '#',
    github: '#',
    icono: '🥋',
  },
  {
    nombre: 'Ana "La Guerrera" Rodríguez',
    especialidad: 'Muay Thai & Kickboxing',
    bio: 'Campeona mundial de Muay Thai, especialista en striking. Ha entrenado campeones olímpicos y peleadores profesionales.',
    experiencia: [
      'Campeona Mundial Muay Thai 2019',
      'Instructora certificada IFMA',
      '50+ peleas profesionales invicta',
    ],
    tecnologias: [
      'Muay Thai',
      'Kickboxing',
      'Boxing',
      'Clinch',
      'Striking Defense',
    ],
    linkedin: '#',
    github: '#',
    icono: '🥊',
  },
  {
    nombre: 'Prof. Miguel "Iron" Torres',
    especialidad: 'Wrestling & Takedowns',
    bio: 'Ex-olímpico de lucha greco-romana, especialista en control y takedowns. Ha entrenado equipos nacionales durante 12 años.',
    experiencia: [
      'Atleta Olímpico Rio 2016',
      'Entrenador Equipo Nacional Junior',
      'Medalla de Oro Campeonato Europeo',
    ],
    tecnologias: [
      'Wrestling',
      'Greco-Roman',
      'Freestyle',
      'Takedown Defense',
      'Control',
    ],
    linkedin: '#',
    behance: '#',
    icono: '🤼',
  },
  {
    nombre: 'Laura "The Lioness" Sánchez',
    especialidad: 'MMA Femenino & Fitness Combat',
    bio: 'Pionera del MMA femenino en España. Ha creado programas de entrenamiento para atletas de élite con resultados extraordinarios.',
    experiencia: [
      'Campeona Europea MMA Femenino',
      'Coach de 15+ campeonas profesionales',
      'Especialista en preparación física de combate',
    ],
    tecnologias: [
      'MMA',
      'Strength Training',
      'Combat Fitness',
      'Nutrition',
      'Mental Coaching',
    ],
    linkedin: '#',
    github: '#',
    icono: '�',
  },
  {
    nombre: 'Roberto "El Martillo" Martínez',
    especialidad: 'Boxing & Striking Fundamentals',
    bio: 'Ex-boxeador profesional con récord impresionante. Experto en técnica de golpeo y desarrollo de poder explosivo.',
    experiencia: [
      'Ex-Boxeador Profesional (28-2 KO)',
      'Entrenador certificado WBC',
      'Especialista en striking para MMA',
    ],
    tecnologias: [
      'Boxing',
      'Footwork',
      'Power Punching',
      'Defense',
      'Combinations',
    ],
    linkedin: '#',
    github: '#',
    icono: '🥊',
  },
  {
    nombre: 'Patricia "La Samurai" Ramírez',
    especialidad: 'Judo & Submission Specialist',
    bio: 'Cinturón negro 4to Dan de Judo, especialista en throws y transiciones. Ha formado medallistas olímpicos y peleadores de élite.',
    experiencia: [
      'Campeona Nacional Judo 2015-2018',
      'Instructora certificada IJF',
      'Consultora técnica para equipos MMA',
    ],
    tecnologias: [
      'Judo',
      'Throws',
      'Submissions',
      'Transitions',
      'Ground Control',
    ],
    linkedin: '#',
    github: '#',
    icono: '🥋',
  },
];

const Profesores = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Nuestros <span className="text-primary-400">Entrenadores</span>
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            Aprende de campeones con experiencia real en competiciones de élite.
            Nuestros instructore s no solo enseñan, sino que han peleado en los
            octágonos más prestigiosos del mundo y han formado campeones.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      {/* Stats rápidos */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { numero: '80+', label: 'Años de experiencia combinada' },
          { numero: '25+', label: 'Títulos y campeonatos' },
          { numero: '500+', label: 'Alumnos entrenados' },
          { numero: '98%', label: 'Satisfacción de estudiantes' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/30 text-center"
          >
            <div className="text-3xl font-bold text-primary-400">
              {stat.numero}
            </div>
            <p className="mt-2 text-sm text-neutral-300">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((profesor) => (
          <div
            key={profesor.nombre}
            className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 hover:border-primary-600/50 transition-all space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary-600/40 to-purple-600/40 flex items-center justify-center text-3xl">
                  {profesor.icono}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary-300">
                    {profesor.nombre}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {profesor.especialidad}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-300">{profesor.bio}</p>

            <div className="space-y-2">
              <h4 className="text-xs font-medium text-primary-300 uppercase tracking-wider">
                Logros destacados
              </h4>
              <ul className="space-y-1">
                {profesor.experiencia.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <span className="text-primary-400 mt-0.5">✓</span>
                    <span className="text-neutral-400">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-3 border-t border-neutral-800/60">
              <h4 className="text-xs font-medium text-primary-300 uppercase tracking-wider">
                Especialidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {profesor.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md bg-neutral-800/60 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-3 border-t border-neutral-800/60">
              {profesor.linkedin && (
                <a
                  href={profesor.linkedin}
                  className="px-3 py-2 text-xs rounded-md border border-neutral-800/60 hover:border-primary-600/50 text-neutral-300 hover:text-primary-300 transition-colors"
                >
                  Instagram
                </a>
              )}
              {profesor.github && (
                <a
                  href={profesor.github}
                  className="px-3 py-2 text-xs rounded-md border border-neutral-800/60 hover:border-primary-600/50 text-neutral-300 hover:text-primary-300 transition-colors"
                >
                  Facebook
                </a>
              )}
              {profesor.behance && (
                <a
                  href={profesor.behance}
                  className="px-3 py-2 text-xs rounded-md border border-neutral-800/60 hover:border-primary-600/50 text-neutral-300 hover:text-primary-300 transition-colors"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Proceso de selección */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Nuestro proceso de{' '}
            <span className="text-primary-400">selección</span>
          </h2>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            Solo el 3% de los aplicantes se convierten en instructores de
            Academia Shozam. Buscamos no solo experiencia en combate, sino
            pasión por enseñar y capacidad para inspirar y transformar vidas.
          </p>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: 'Experiencia verificada',
              descripcion:
                'Mínimo 5 años compitiendo profesionalmente o cinturón negro certificado.',
              icono: '🏆',
            },
            {
              titulo: 'Prueba técnica',
              descripcion:
                'Evaluación rigurosa de técnica, conocimientos y habilidades pedagógicas.',
              icono: '🥋',
            },
            {
              titulo: 'Clase demo',
              descripcion:
                'Demostración de capacidad de enseñanza y comunicación efectiva con alumnos.',
              icono: '👥',
            },
            {
              titulo: 'Formación continua',
              descripcion:
                'Actualización constante en nuevas técnicas y metodologías de entrenamiento.',
              icono: '📚',
            },
          ].map((paso) => (
            <div key={paso.titulo} className="space-y-2">
              <div className="text-3xl">{paso.icono}</div>
              <h3 className="font-medium text-neutral-100">{paso.titulo}</h3>
              <p className="text-sm text-neutral-400">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios sobre profesores */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Lo que dicen nuestros{' '}
          <span className="text-primary-400">estudiantes</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              estudiante: 'Patricia López',
              curso: 'MMA Fundamentals',
              testimonio:
                'Carlos tiene un don para enseñar las técnicas más complejas de forma simple. Sus ejemplos de peleas reales fueron invaluables.',
              profesor: 'Carlos "El Titan" Mendoza',
            },
            {
              estudiante: 'Jorge Hernández',
              curso: 'Muay Thai Avanzado',
              testimonio:
                'Ana es simplemente increíble. Su experiencia en el ring hace que todo tenga sentido inmediatamente. Mi técnica mejoró 100%.',
              profesor: 'Ana "La Guerrera" Rodríguez',
            },
            {
              estudiante: 'Sofía Martín',
              curso: 'Fitness Combat',
              testimonio:
                'Laura no solo enseña técnicas de combate, te hace pensar como una verdadera atleta. Su mentoría cambió mi vida.',
              profesor: 'Laura "The Lioness" Sánchez',
            },
          ].map((test, idx) => (
            <div
              key={idx}
              className="p-6 space-y-4 rounded-xl border border-neutral-800/60 bg-neutral-900/30"
            >
              <p className="text-sm text-neutral-300 italic">
                "{test.testimonio}"
              </p>
              <div className="pt-4 border-t border-neutral-800/60">
                <p className="font-medium text-neutral-100">
                  {test.estudiante}
                </p>
                <p className="text-xs text-neutral-400">{test.curso}</p>
                <p className="text-xs text-primary-400 mt-1">
                  Instructor: {test.profesor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Entrena con los mejores
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Nuestros instructores están comprometidos con tu evolución como
            guerrero. Únete a una comunidad donde la excelencia es el estándar.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/courses">
              <Button variant="primary" className="px-6">
                Ver programas
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-6">
                Agendar clase de prueba
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/20" />
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none bg-purple-600/15" />
      </div>
    </section>
  );
};

export default Profesores;
