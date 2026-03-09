import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const horariosSemanal = [
  {
    dia: 'Lunes',
    clases: [
      {
        hora: '07:00 - 08:00',
        nombre: 'MMA Fundamentals',
        nivel: 'Principiante',
        instructor: 'Carlos "El Titan" Mendoza',
        modalidad: 'Presencial',
      },
      {
        hora: '18:00 - 19:30',
        nombre: 'Muay Thai Avanzado',
        nivel: 'Avanzado',
        instructor: 'Ana "La Guerrera" Rodríguez',
        modalidad: 'Presencial',
      },
      {
        hora: '20:00 - 21:00',
        nombre: 'Brazilian Jiu-Jitsu Gi',
        nivel: 'Intermedio',
        instructor: 'Carlos "El Titan" Mendoza',
        modalidad: 'Presencial',
      },
    ],
  },
  {
    dia: 'Martes',
    clases: [
      {
        hora: '08:00 - 09:00',
        nombre: 'Boxing Fundamentals',
        nivel: 'Todos',
        instructor: 'Roberto "El Martillo" Martínez',
        modalidad: 'Presencial',
      },
      {
        hora: '19:00 - 20:30',
        nombre: 'Wrestling & Takedowns',
        nivel: 'Intermedio',
        instructor: 'Prof. Miguel "Iron" Torres',
        modalidad: 'Presencial',
      },
      {
        hora: '21:00 - 22:00',
        nombre: 'Fitness Combat',
        nivel: 'Todos',
        instructor: 'Laura "The Lioness" Sánchez',
        modalidad: 'Presencial',
      },
    ],
  },
  {
    dia: 'Miércoles',
    clases: [
      {
        hora: '07:00 - 08:00',
        nombre: 'Kickboxing Matinal',
        nivel: 'Intermedio',
        instructor: 'Ana "La Guerrera" Rodríguez',
        modalidad: 'Presencial',
      },
      {
        hora: '18:00 - 19:30',
        nombre: 'BJJ No-Gi & Grappling',
        nivel: 'Avanzado',
        instructor: 'Carlos "El Titan" Mendoza',
        modalidad: 'Presencial',
      },
      {
        hora: '20:00 - 21:00',
        nombre: 'Judo & Throws',
        nivel: 'Principiante',
        instructor: 'Patricia "La Samurai" Ramírez',
        modalidad: 'Presencial',
      },
    ],
  },
  {
    dia: 'Jueves',
    clases: [
      {
        hora: '08:00 - 09:00',
        nombre: 'Muay Thai Matinal',
        nivel: 'Todos',
        instructor: 'Ana "La Guerrera" Rodríguez',
        modalidad: 'Presencial',
      },
      {
        hora: '19:00 - 20:30',
        nombre: 'MMA Sparring (Competición)',
        nivel: 'Avanzado',
        instructor: 'Carlos "El Titan" Mendoza',
        modalidad: 'Presencial',
      },
      {
        hora: '21:00 - 22:00',
        nombre: 'Striking Defense',
        nivel: 'Intermedio',
        instructor: 'Roberto "El Martillo" Martínez',
        modalidad: 'Presencial',
      },
    ],
  },
  {
    dia: 'Viernes',
    clases: [
      {
        hora: '07:00 - 08:00',
        nombre: 'Conditioning & Fitness',
        nivel: 'Todos',
        instructor: 'Laura "The Lioness" Sánchez',
        modalidad: 'Presencial',
      },
      {
        hora: '18:00 - 19:30',
        nombre: 'BJJ Open Mat',
        nivel: 'Todos',
        instructor: 'Rotativo',
        modalidad: 'Presencial',
      },
      {
        hora: '20:00 - 21:00',
        nombre: 'Technique Drilling',
        nivel: 'Todos',
        instructor: 'Equipo completo',
        modalidad: 'Presencial',
      },
    ],
  },
  {
    dia: 'Sábado',
    clases: [
      {
        hora: '10:00 - 12:00',
        nombre: 'Workshop: MMA Full Contact',
        nivel: 'Avanzado',
        instructor: 'Equipo completo',
        modalidad: 'Presencial',
      },
      {
        hora: '12:00 - 13:30',
        nombre: 'Kickboxing para todos',
        nivel: 'Todos',
        instructor: 'Ana "La Guerrera" Rodríguez',
        modalidad: 'Presencial',
      },
    ],
  },
  {
    dia: 'Domingo',
    clases: [
      {
        hora: '10:00 - 11:30',
        nombre: 'Defensa Personal',
        nivel: 'Principiante',
        instructor: 'Carlos "El Titan" Mendoza',
        modalidad: 'Presencial',
      },
      {
        hora: '12:00 - 13:00',
        nombre: 'Kids MMA (8-14 años)',
        nivel: 'Niños',
        instructor: 'Laura "The Lioness" Sánchez',
        modalidad: 'Presencial',
      },
    ],
  },
];

const Horarios = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Nuestros <span className="text-primary-400">Horarios</span>
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            Encuentra el horario perfecto para ti. Ofrecemos clases en
            diferentes niveles y horarios para adaptarnos a tu rutina.
            Entrenamientos matinales, vespertinos y fines de semana disponibles.
          </p>
          <div className="flex gap-3 mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Clase de prueba gratis
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="px-6">
                Ver programas
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      {/* Información de modalidades */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            modalidad: 'Matinal',
            icono: '🌅',
            descripcion:
              'Clases de 07:00 a 09:00 para empezar el día con energía',
            color: 'bg-blue-600/20 text-blue-300',
          },
          {
            modalidad: 'Vespertino',
            icono: '�',
            descripcion: 'Entrenamientos de 18:00 a 22:00 después del trabajo',
            color: 'bg-green-600/20 text-green-300',
          },
          {
            modalidad: 'Fin de semana',
            icono: '🏋️',
            descripcion: 'Workshops y open mat para perfeccionar técnicas',
            color: 'bg-purple-600/20 text-purple-300',
          },
        ].map((item) => (
          <div
            key={item.modalidad}
            className="p-4 rounded-xl border border-neutral-800/60 bg-neutral-900/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.icono}</span>
              <span className={`px-3 py-1 text-xs rounded-full ${item.color}`}>
                {item.modalidad}
              </span>
            </div>
            <p className="text-sm text-neutral-400">{item.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Horario semanal */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Horario <span className="text-primary-400">Semanal</span>
        </h2>
        <div className="space-y-4">
          {horariosSemanal.map((dia) => (
            <div
              key={dia.dia}
              className="overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/30"
            >
              <div className="p-4 bg-neutral-900/50 border-b border-neutral-800/60">
                <h3 className="font-medium text-primary-300 text-lg">
                  {dia.dia}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {dia.clases.map((clase, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-neutral-800/60 bg-neutral-900/20 hover:border-primary-600/50 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1 min-w-[200px]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-primary-400">
                            {clase.hora}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-xs rounded-full ${
                              clase.modalidad === 'Presencial'
                                ? 'bg-green-600/20 text-green-300'
                                : 'bg-blue-600/20 text-blue-300'
                            }`}
                          >
                            {clase.modalidad}
                          </span>
                        </div>
                        <h4 className="font-medium text-neutral-100 mb-1">
                          {clase.nombre}
                        </h4>
                        <p className="text-sm text-neutral-400">
                          Instructor: {clase.instructor}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            clase.nivel === 'Principiante'
                              ? 'bg-green-600/20 text-green-300'
                              : clase.nivel === 'Intermedio'
                                ? 'bg-blue-600/20 text-blue-300'
                                : clase.nivel === 'Avanzado'
                                  ? 'bg-purple-600/20 text-purple-300'
                                  : 'bg-neutral-800/60 text-neutral-300'
                          }`}
                        >
                          {clase.nivel}
                        </span>
                        <Button variant="ghost" className="px-3 py-1 text-xs">
                          Reservar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Información adicional */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Información <span className="text-primary-400">importante</span>
          </h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">
                    Reserva tu plaza
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Cupos limitados por clase. Reserva con 24 horas de
                    anticipación para garantizar tu lugar en el tatami.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">�</span>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">
                    Vestuarios y duchas
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Instalaciones completas con casilleros, duchas y área de
                    cambio. Ven directo del trabajo sin preocupaciones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">
                    Grupos reducidos
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Máximo 20 alumnos por clase para garantizar atención
                    personalizada y técnica correcta.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">
                    Llega 10 minutos antes
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Tiempo para cambiarte, calentar y prepararte mentalmente
                    para el entrenamiento.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">
                    Comunidad activa
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Únete a nuestro grupo de WhatsApp para coordinar sparring,
                    entrenamientos extras y eventos sociales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥋</span>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">
                    Equipamiento disponible
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Guantes, espinilleras y protecciones disponibles para
                    principiantes. Puedes traer tu propio equipo si prefieres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Política de cancelación */}
      <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
        <h3 className="font-medium text-primary-300 mb-3">
          Normas del gimnasio
        </h3>
        <div className="space-y-2 text-sm text-neutral-400">
          <p>
            • Llega puntual y respeta el tiempo de todos los compañeros y
            entrenadores.
          </p>
          <p>
            • Mantén higiene personal y usa ropa limpia. Las uñas deben estar
            cortas.
          </p>
          <p>
            • Respeta a todos los miembros independientemente de su nivel o
            experiencia.
          </p>
          <p>
            • Durante el sparring, controla tu intensidad según el nivel de tu
            compañero.
          </p>
          <p>
            • Si tienes alguna lesión o condición médica, informa a tu
            instructor antes de la clase.
          </p>
        </div>
      </div>

      {/* CTA Final */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Comienza tu entrenamiento hoy
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Reserva tu clase de prueba gratuita y descubre por qué somos la
            academia #1 de MMA en Madrid.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Clase gratis
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="px-6">
                Ver membresías
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

export default Horarios;
