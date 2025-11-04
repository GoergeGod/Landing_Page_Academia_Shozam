import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const eventos = [
  {
    fecha: '15 Noviembre 2025',
    titulo: 'Seminario de BJJ con Ricardo Almeida',
    descripcion:
      'Aprende las técnicas avanzadas de Brazilian Jiu-Jitsu de un cinturón negro 5to grado. Incluye técnicas de guardia, pasajes y finalizaciones.',
    tipo: 'Seminario',
    duracion: '4 horas',
    instructor: 'Ricardo Almeida (Invitado especial)',
    modalidad: 'Presencial',
    cupos: '30 disponibles',
    nivel: 'Intermedio/Avanzado',
    precio: '€40 (€30 miembros)',
    icono: '🥋',
  },
  {
    fecha: '22 Noviembre 2025',
    titulo: 'Bootcamp de Striking: Muay Thai Intensivo',
    descripcion:
      'Jornada intensiva de técnicas de golpeo. Incluye combinaciones, clinch work y defensa. Para todos los niveles.',
    tipo: 'Bootcamp',
    duracion: '6 horas',
    instructor: 'Ana "La Guerrera" Rodríguez',
    modalidad: 'Presencial',
    cupos: '25 disponibles',
    nivel: 'Todos',
    precio: '€35 (€25 miembros)',
    icono: '🥊',
  },
  {
    fecha: '28 Noviembre 2025',
    titulo: 'Torneo Interno: King of the Mat',
    descripcion:
      'Competencia amistosa de grappling (Gi y No-Gi). Categorías por peso y experiencia. Premios para los ganadores.',
    tipo: 'Competencia',
    duracion: '5 horas',
    instructor: 'Equipo de jueces certificados',
    modalidad: 'Presencial',
    cupos: '40 disponibles',
    nivel: 'Todos',
    precio: '€15 inscripción',
    icono: '�',
  },
  {
    fecha: '5 Diciembre 2025',
    titulo: 'Workshop: Defensa Personal para Mujeres',
    descripcion:
      'Técnicas prácticas de defensa personal y situaciones de riesgo. Ambiente seguro y empoderamiento.',
    tipo: 'Workshop',
    duracion: '3 horas',
    instructor: 'Laura "The Lioness" Sánchez',
    modalidad: 'Presencial',
    cupos: '20 disponibles',
    nivel: 'Principiante',
    precio: 'Gratis (exclusivo mujeres)',
    icono: '💪',
  },
  {
    fecha: '12 Diciembre 2025',
    titulo: 'Sparring Night: MMA Open Mat',
    descripcion:
      'Noche de sparring abierto para practicar técnicas en ambiente controlado. Todos los niveles bienvenidos.',
    tipo: 'Open Mat',
    duracion: '3 horas',
    instructor: 'Supervisado por instructores',
    modalidad: 'Presencial',
    cupos: 'Ilimitados',
    nivel: 'Todos',
    precio: 'Gratis para miembros',
    icono: '�',
  },
  {
    fecha: '18 Diciembre 2025',
    titulo: 'Campeonato Amateur Madrid MMA',
    descripcion:
      'Competencia oficial amateur con peleadores de toda la comunidad. Nuestra academia participa con 10+ atletas.',
    tipo: 'Campeonato',
    duracion: '8 horas',
    instructor: 'Varios equipos de Madrid',
    modalidad: 'Presencial',
    cupos: 'Inscripción cerrada (espectadores bienvenidos)',
    nivel: 'Competidores',
    precio: 'Entrada: €10',
    icono: '🥇',
  },
];

const Eventos = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Eventos y <span className="text-primary-400">Actividades</span>
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            Participa en seminarios, competiciones, workshops y más. Conecta con
            peleadores profesionales, aprende de campeones mundiales y amplía
            tus habilidades en eventos exclusivos para nuestra comunidad.
          </p>
          <div className="flex gap-3 mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Inscribirse a evento
              </Button>
            </Link>
            <Button variant="outline" className="px-6">
              Ver calendario completo
            </Button>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      {/* Tipos de eventos */}
      <div className="grid gap-4 md:grid-cols-5">
        {[
          { tipo: 'Seminarios', icono: '🥋', color: 'bg-blue-600/20' },
          { tipo: 'Bootcamps', icono: '�', color: 'bg-green-600/20' },
          { tipo: 'Open Mat', icono: '�', color: 'bg-purple-600/20' },
          { tipo: 'Competencias', icono: '🏆', color: 'bg-yellow-600/20' },
          { tipo: 'Workshops', icono: '�', color: 'bg-red-600/20' },
        ].map((item, idx) => (
          <button
            key={idx}
            className="p-4 rounded-xl border border-neutral-800/60 bg-neutral-900/30 hover:border-primary-600/50 transition-colors"
          >
            <div className="text-3xl mb-2">{item.icono}</div>
            <p className="text-sm font-medium text-neutral-100">{item.tipo}</p>
          </button>
        ))}
      </div>

      {/* Próximos eventos */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Próximos <span className="text-primary-400">eventos</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/30 hover:border-primary-600/50 transition-all space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{evento.icono}</div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary-600/20 text-primary-300 font-medium">
                      {evento.fecha}
                    </span>
                    <span
                      className={`inline-block ml-2 px-3 py-1 text-xs rounded-full ${
                        evento.tipo === 'Seminario'
                          ? 'bg-blue-600/20 text-blue-300'
                          : evento.tipo === 'Bootcamp'
                            ? 'bg-green-600/20 text-green-300'
                            : evento.tipo === 'Open Mat'
                              ? 'bg-purple-600/20 text-purple-300'
                              : evento.tipo === 'Competencia' ||
                                  evento.tipo === 'Campeonato'
                                ? 'bg-yellow-600/20 text-yellow-300'
                                : 'bg-neutral-800/60 text-neutral-300'
                      }`}
                    >
                      {evento.tipo}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-neutral-100">
                  {evento.titulo}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {evento.descripcion}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800/60 text-sm">
                <div>
                  <p className="text-neutral-500 text-xs">Instructor</p>
                  <p className="text-neutral-300">{evento.instructor}</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-xs">Duración</p>
                  <p className="text-neutral-300">{evento.duracion}</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-xs">Modalidad</p>
                  <p className="text-neutral-300">{evento.modalidad}</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-xs">Nivel</p>
                  <p className="text-neutral-300">{evento.nivel}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/60">
                <div>
                  <p className="text-sm text-neutral-400">{evento.cupos}</p>
                  <p className="text-lg font-medium text-primary-300">
                    {evento.precio}
                  </p>
                </div>
                <Button variant="outline" className="px-4">
                  Inscribirse
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios de asistir */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            ¿Por qué asistir a{' '}
            <span className="text-primary-400">nuestros eventos?</span>
          </h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: 'Networking con pros',
                descripcion:
                  'Conoce peleadores profesionales, entrenadores y atletas de élite.',
                icono: '👥',
              },
              {
                titulo: 'Aprendizaje intensivo',
                descripcion:
                  'Experiencia hands-on con técnicas avanzadas y situaciones reales.',
                icono: '🥋',
              },
              {
                titulo: 'Certificados',
                descripcion:
                  'Recibe certificados de participación en seminarios oficiales.',
                icono: '📜',
              },
              {
                titulo: 'Descuentos miembros',
                descripcion:
                  'Acceso gratuito o con descuento para miembros activos.',
                icono: '🎁',
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

      {/* Eventos pasados destacados */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Eventos <span className="text-primary-400">pasados</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: 'Torneo Primavera 2024',
              participantes: '60+',
              peleas: '35',
              descripcion:
                'Competencia interna con categorías por peso y nivel',
            },
            {
              titulo: 'Seminario Gracie Barra',
              participantes: '80+',
              horas: '6',
              descripcion: 'Seminario intensivo de BJJ con cinturones negros',
            },
            {
              titulo: 'Open Mat Aniversario',
              participantes: '100+',
              academias: '12',
              descripcion:
                'Evento especial con peleadores de toda la comunidad',
            },
          ].map((evento, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/30"
            >
              <h3 className="text-lg font-medium text-primary-300 mb-3">
                {evento.titulo}
              </h3>
              <div className="flex gap-4 mb-3">
                {evento.participantes && (
                  <div>
                    <p className="text-2xl font-bold text-neutral-100">
                      {evento.participantes}
                    </p>
                    <p className="text-xs text-neutral-400">Participantes</p>
                  </div>
                )}
                {evento.peleas && (
                  <div>
                    <p className="text-2xl font-bold text-neutral-100">
                      {evento.peleas}
                    </p>
                    <p className="text-xs text-neutral-400">Peleas</p>
                  </div>
                )}
                {evento.horas && (
                  <div>
                    <p className="text-2xl font-bold text-neutral-100">
                      {evento.horas}
                    </p>
                    <p className="text-xs text-neutral-400">Horas</p>
                  </div>
                )}
                {evento.academias && (
                  <div>
                    <p className="text-2xl font-bold text-neutral-100">
                      {evento.academias}
                    </p>
                    <p className="text-xs text-neutral-400">Academias</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-neutral-400">{evento.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            No te pierdas nuestros eventos
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Únete a nuestra comunidad y recibe notificaciones sobre próximos
            seminarios, competiciones y oportunidades exclusivas de
            entrenamiento.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Inscribirme
              </Button>
            </Link>
            <Button variant="outline" className="px-6">
              Ver calendario
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/20" />
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none bg-purple-600/15" />
      </div>
    </section>
  );
};

export default Eventos;
