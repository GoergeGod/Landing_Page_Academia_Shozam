import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const planes = [
  {
    nombre: 'Básico',
    precio: '€79',
    precioMensual: '€79/mes',
    descripcion: 'Perfecto para comenzar tu viaje en las artes marciales',
    duracion: 'Sin permanencia',
    caracteristicas: [
      'Acceso ilimitado a clases de grupo',
      '2 disciplinas a elección',
      'Uso de instalaciones y equipamiento',
      'Acceso a comunidad WhatsApp',
      'Vestuarios y duchas',
      '1 clase de prueba para amigos',
    ],
    destacado: false,
    color: 'border-neutral-800/60 bg-neutral-900/30',
  },
  {
    nombre: 'Premium',
    precio: '€120',
    precioMensual: '€120/mes',
    descripcion: 'La opción más popular para guerreros comprometidos',
    duracion: 'Sin permanencia',
    caracteristicas: [
      'Acceso ilimitado a TODAS las clases',
      'Todas las disciplinas sin restricción',
      'Asesoría nutricional mensual',
      'Plan de entrenamiento personalizado',
      'Acceso prioritario a workshops',
      '10% descuento en tienda de equipo',
      'Invitado gratis una vez al mes',
      '1 sesión privada mensual incluida',
    ],
    destacado: true,
    color: 'border-primary-600 bg-primary-600/10',
    badge: 'Más popular',
  },
  {
    nombre: 'Competidor',
    precio: '€200',
    precioMensual: '€200/mes',
    descripcion: 'Para atletas que buscan competir profesionalmente',
    duracion: 'Sin permanencia',
    caracteristicas: [
      'Todo lo del plan Premium',
      '4 sesiones privadas mensuales',
      'Programa de competición personalizado',
      'Preparación física especializada',
      'Análisis de video de técnicas',
      'Sparring partners dedicados',
      'Acceso 24/7 al gimnasio',
      'Acompañamiento a competiciones',
    ],
    destacado: false,
    color: 'border-purple-600/60 bg-purple-900/20',
    badge: 'Elite',
  },
];

const Precios = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Membresías y <span className="text-primary-400">Precios</span>
          </h1>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Invierte en tu desarrollo como guerrero con planes diseñados para
            cada etapa de tu journey. Sin permanencia, cancela cuando quieras.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      {/* Comparación rápida */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icono: '💰', titulo: 'Sin costos ocultos', desc: 'Todo incluido' },
          {
            icono: '🔄',
            titulo: 'Sin permanencia',
            desc: 'Cancela cuando quieras',
          },
          {
            icono: '💳',
            titulo: 'Pago flexible',
            desc: 'Mensual o anticipado',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-neutral-800/60 bg-neutral-900/30 text-center"
          >
            <div className="text-3xl mb-2">{item.icono}</div>
            <h3 className="font-medium text-neutral-100">{item.titulo}</h3>
            <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Planes Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {planes.map((plan) => (
          <div
            key={plan.nombre}
            className={`rounded-2xl border p-8 ${plan.color} ${plan.destacado ? 'ring-2 ring-primary-600 scale-105' : ''} transition-all hover:shadow-lg`}
          >
            {plan.badge && (
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary-600/20 text-primary-300 font-medium mb-4">
                {plan.badge}
              </span>
            )}
            <h3 className="text-2xl font-semibold text-primary-300">
              {plan.nombre}
            </h3>
            <p className="mt-2 text-sm text-neutral-400">{plan.descripcion}</p>
            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-neutral-100">
                  {plan.precio}
                </span>
                <span className="text-sm text-neutral-400">/ mes</span>
              </div>
              <p className="text-sm text-neutral-400 mt-1">{plan.duracion}</p>
            </div>
            <ul className="mt-8 space-y-3">
              {plan.caracteristicas.map((caracteristica, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className="text-primary-400 mt-0.5 shrink-0">✓</span>
                  <span className="text-neutral-300">{caracteristica}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button
                variant={plan.destacado ? 'primary' : 'outline'}
                className="w-full mt-8"
              >
                Empezar ahora
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Beneficios adicionales */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Todos los planes <span className="text-primary-400">incluyen</span>
          </h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: 'Acceso completo',
                descripcion:
                  'Entrena cuando quieras en horarios matinales, vespertinos y fines de semana.',
                icono: '🌐',
              },
              {
                titulo: 'Sin permanencia',
                descripcion:
                  'Cancela tu membresía en cualquier momento sin penalizaciones.',
                icono: '🔓',
              },
              {
                titulo: 'Actualizaciones',
                descripcion:
                  'Acceso a nuevos programas y técnicas conforme se agregan al gimnasio.',
                icono: '🔄',
              },
              {
                titulo: 'Soporte completo',
                descripcion:
                  'Asistencia de instructores por WhatsApp y presencialmente.',
                icono: '💬',
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

      {/* Opciones de financiamiento */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Opciones de <span className="text-primary-400">pago</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-lg font-medium text-neutral-100 mb-2">
              Pago mensual
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Paga mes a mes sin compromiso. Cancela cuando quieras sin cargos
              adicionales.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Débito automático mensual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Flexibilidad total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Cambio de plan en cualquier momento</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-medium text-neutral-100 mb-2">
              Pago trimestral/anual
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Ahorra hasta un 20% pagando tu membresía por adelantado. Inversión
              única, entrenamiento ilimitado.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>20% descuento en plan anual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>10% en plan trimestral</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Acceso inmediato sin preocupaciones</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-primary-600/60 bg-primary-900/20">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-lg font-medium text-primary-300 mb-2">
              Descuentos especiales
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Ofrecemos descuentos para estudiantes, familias y grupos de amigos
              que entrenan juntos.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>15% descuento estudiantes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>20% segundo familiar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Consulta condiciones</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full mt-4">
                Consultar descuento
              </Button>
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="text-lg font-medium text-neutral-100 mb-2">
              Paquetes corporativos
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              ¿Quieres ofrecer MMA como beneficio para tu equipo? Ofrecemos
              planes corporativos con descuentos especiales.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>5-10 personas: 15% descuento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>11+ personas: 25% descuento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Team building workshops incluidos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ de precios */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Preguntas <span className="text-primary-400">frecuentes</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              pregunta: '¿Puedo congelar mi membresía?',
              respuesta:
                'Sí, puedes congelar tu membresía hasta por 2 meses al año por motivos de viaje, lesión o personales sin cargo adicional.',
            },
            {
              pregunta: '¿Qué incluye la clase de prueba?',
              respuesta:
                'Una clase completa de la disciplina que elijas, uso de instalaciones, préstamo de equipo básico y orientación personalizada.',
            },
            {
              pregunta: '¿Hay costos de inscripción?',
              respuesta:
                'No hay cuota de inscripción. Solo pagas tu membresía mensual desde el primer día.',
            },
            {
              pregunta: '¿Puedo cambiar de disciplina?',
              respuesta:
                'Con las membresías Premium y Competidor tienes acceso ilimitado a todas las disciplinas. Con la Básica puedes cambiar una vez al mes.',
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
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Agenda tu clase de prueba gratuita y descubre por qué somos la mejor
            academia de MMA en Madrid.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Clase gratis
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="px-6">
                Ver programas
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

export default Precios;
