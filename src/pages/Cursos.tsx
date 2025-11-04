import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const cursos = [
  {
    nombre: 'MMA Fundamentals',
    descripcion:
      'Programa completo de introducción a las artes marciales mixtas. Aprende las bases del striking, grappling, defensa personal y acondicionamiento físico.',
    nivel: 'Principiante',
    duracion: '3 meses',
    precio: '€120/mes',
    modulos: [
      'Técnicas básicas de striking',
      'Fundamentos de grappling',
      'Defensa personal práctica',
      'Acondicionamiento físico',
      'Prevención de lesiones',
      'Introducción al sparring',
    ],
    icono: '🥊',
  },
  {
    nombre: 'Brazilian Jiu-Jitsu (Gi)',
    descripcion:
      'El arte del grappling por excelencia. Aprende posiciones, transiciones, sumisiones y escapes con el gi tradicional. Sistema de graduación oficial.',
    nivel: 'Todos',
    duracion: 'Continuo',
    precio: '€100/mes',
    modulos: [
      'Posiciones fundamentales',
      'Guardias y pasajes',
      'Sumisiones principales',
      'Defensa y escapes',
      'Técnicas de competición',
      'Preparación para graduaciones',
    ],
    icono: '🥋',
  },
  {
    nombre: 'Muay Thai - El Arte de las 8 Extremidades',
    descripcion:
      'Domina el striking más efectivo del mundo. Puños, codos, rodillas, patadas, clinch y técnicas de defensa del auténtico Muay Thai.',
    nivel: 'Intermedio',
    duracion: '6 meses',
    precio: '€110/mes',
    modulos: [
      'Técnicas de puños y codos',
      'Patadas y rodillazos',
      'Clinch y control',
      'Defensa y contraataque',
      'Trabajo de pads',
      'Sparring controlado',
    ],
    icono: '🦵',
  },
  {
    nombre: 'Wrestling & Takedowns',
    descripcion:
      'Aprende las técnicas de lucha olímpica aplicadas al MMA. Derribos, control, defensa de takedowns y transiciones a posiciones dominantes.',
    nivel: 'Intermedio',
    duracion: '4 meses',
    precio: '€110/mes',
    modulos: [
      'Entradas y setup',
      'Single y double leg',
      'Defensa de takedowns',
      'Control y presión',
      'Cage wrestling',
      'Transiciones a sumisiones',
    ],
    icono: '🤼',
  },
  {
    nombre: 'Programa de Competición MMA',
    descripcion:
      'Entrenamiento de élite para peleadores amateur y semi-profesionales. Incluye planificación de peleas, estrategia y preparación física avanzada.',
    nivel: 'Avanzado',
    duracion: '12 meses',
    precio: '€200/mes',
    modulos: [
      'Estrategia de pelea',
      'Sparring intensivo',
      'Preparación física de élite',
      'Nutrición deportiva',
      'Análisis de video',
      'Mentalidad de campeón',
    ],
    icono: '🏆',
  },
  {
    nombre: 'Fitness & Defensa Personal',
    descripcion:
      'El equilibrio perfecto entre ponerte en forma y aprender a defenderte. Técnicas prácticas de defensa personal en un entrenamiento intenso.',
    nivel: 'Principiante',
    duracion: 'Flexible',
    precio: '€90/mes',
    modulos: [
      'Defensa contra agarres',
      'Situaciones de calle',
      'Acondicionamiento funcional',
      'Cardio de combate',
      'Confianza y mentalidad',
      'Técnicas de impacto',
    ],
    icono: '�',
  },
];

const Cursos = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14 animate-fade-in">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Nuestras <span className="text-primary-400">Disciplinas</span>
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            Explora nuestra oferta de programas especializados en artes
            marciales mixtas diseñados para llevarte desde los fundamentos hasta
            el dominio profesional. Cada disciplina está enseñada por
            instructores certificados con experiencia en competición.
          </p>
          <div className="flex gap-3 mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Clase de prueba gratis
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="px-6">
                Ver planes
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      {/* Filtros rápidos */}
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 text-sm rounded-full border border-primary-600/60 bg-primary-600/20 text-primary-300">
          Todas las disciplinas
        </button>
        <button className="px-4 py-2 text-sm rounded-full border border-neutral-800/60 bg-neutral-900/30 text-neutral-300 hover:border-primary-600/60">
          Principiante
        </button>
        <button className="px-4 py-2 text-sm rounded-full border border-neutral-800/60 bg-neutral-900/30 text-neutral-300 hover:border-primary-600/60">
          Intermedio
        </button>
        <button className="px-4 py-2 text-sm rounded-full border border-neutral-800/60 bg-neutral-900/30 text-neutral-300 hover:border-primary-600/60">
          Avanzado
        </button>
      </div>

      {/* Cursos Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso) => (
          <div
            key={curso.nombre}
            className="p-6 space-y-4 rounded-xl border transition-all border-neutral-800/60 bg-neutral-900/30 hover:border-primary-600/50 hover:shadow-lg hover:shadow-primary-600/10"
          >
            <div className="flex items-start justify-between">
              <div className="text-4xl">{curso.icono}</div>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  curso.nivel === 'Principiante'
                    ? 'bg-green-600/20 text-green-300'
                    : curso.nivel === 'Intermedio'
                      ? 'bg-blue-600/20 text-blue-300'
                      : 'bg-purple-600/20 text-purple-300'
                }`}
              >
                {curso.nivel}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium text-neutral-100">
                {curso.nombre}
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {curso.descripcion}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-800/60">
              <h4 className="text-sm font-medium text-primary-300 mb-2">
                Módulos incluidos:
              </h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                {curso.modulos.slice(0, 4).map((modulo, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">✓</span>
                    <span>{modulo}</span>
                  </li>
                ))}
                {curso.modulos.length > 4 && (
                  <li className="text-primary-400">
                    +{curso.modulos.length - 4} módulos más
                  </li>
                )}
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800/60">
              <div className="flex gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-neutral-800/60 text-neutral-300">
                  {curso.duracion}
                </span>
                <span className="px-3 py-1 rounded-full bg-primary-600/20 text-primary-300 font-medium">
                  {curso.precio}
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Más información
            </Button>
          </div>
        ))}
      </div>

      {/* Beneficios de nuestros cursos */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            ¿Qué incluyen{' '}
            <span className="text-primary-400">nuestros programas?</span>
          </h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: 'Equipamiento incluido',
                descripcion:
                  'Guantes, vendas y protecciones disponibles para principiantes.',
                icono: '🥊',
              },
              {
                titulo: 'Clases ilimitadas',
                descripcion:
                  'Entrena todas las veces que quieras según tu plan elegido.',
                icono: '♾️',
              },
              {
                titulo: 'Sparring supervisado',
                descripcion:
                  'Práctica segura con compañeros de tu nivel bajo supervisión.',
                icono: '🛡️',
              },
              {
                titulo: 'Acceso al gimnasio',
                descripcion:
                  'Usa nuestro área de pesas y cardio antes o después de clase.',
                icono: '🏋️',
              },
            ].map((beneficio) => (
              <div key={beneficio.titulo} className="space-y-2">
                <div className="text-3xl">{beneficio.icono}</div>
                <h3 className="font-medium text-neutral-100">
                  {beneficio.titulo}
                </h3>
                <p className="text-sm text-neutral-400">
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso de aprendizaje */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Tu camino de <span className="text-primary-400">aprendizaje</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              paso: '1',
              titulo: 'Clase de prueba',
              descripcion: 'Reserva tu primera clase gratis y conoce el gym.',
            },
            {
              paso: '2',
              titulo: 'Inscripción',
              descripcion: 'Elige tu programa y plan de entrenamiento ideal.',
            },
            {
              paso: '3',
              titulo: 'Entrenamiento',
              descripcion: 'Comienza a entrenar y evoluciona con cada clase.',
            },
            {
              paso: '4',
              titulo: 'Graduación',
              descripcion:
                'Obtén tu cinturón o pasa de nivel según tu progreso.',
            },
          ].map((item) => (
            <div
              key={item.paso}
              className="relative p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-600/20 border-4 border-neutral-900 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-300">
                  {item.paso}
                </span>
              </div>
              <h3 className="mt-4 font-medium text-neutral-100">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Preguntas <span className="text-primary-400">frecuentes</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              pregunta: '¿Necesito experiencia previa?',
              respuesta:
                'No, tenemos programas para todos los niveles. Los principiantes comienzan con MMA Fundamentals o Fitness & Defensa Personal.',
            },
            {
              pregunta: '¿Necesito estar en forma para empezar?',
              respuesta:
                'No. Nuestras clases te ayudarán a ponerte en forma progresivamente. Cada uno avanza a su ritmo bajo supervisión de instructores.',
            },
            {
              pregunta: '¿Qué debo traer a mi primera clase?',
              respuesta:
                'Ropa deportiva cómoda y una botella de agua. Tenemos guantes y protecciones disponibles para principiantes.',
            },
            {
              pregunta: '¿Puedo entrenar si quiero solo ponerme en forma?',
              respuesta:
                'Por supuesto. Muchos alumnos vienen por fitness y nunca compiten. Nuestros programas se adaptan a tus objetivos personales.',
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20"
            >
              <h3 className="font-medium text-neutral-100">{faq.pregunta}</h3>
              <p className="mt-2 text-sm text-neutral-400">{faq.respuesta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Únete a más de 500 guerreros que han transformado sus vidas con
            nosotros. Primera clase gratis.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Reservar clase de prueba
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" className="px-6">
                Ver horarios
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

export default Cursos;
