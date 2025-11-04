import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Contáctanos
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            ¿Tienes preguntas sobre nuestras clases, horarios o membresías?
            Nuestro equipo está listo para ayudarte a encontrar el programa
            perfecto para alcanzar tus objetivos en las artes marciales.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Formulario de contacto */}
        <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
          <h2 className="text-2xl font-semibold text-primary-300 mb-6">
            Envíanos un mensaje
          </h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="text-sm font-medium text-neutral-300"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full px-4 py-3 rounded-lg border border-neutral-800/60 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-neutral-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-neutral-800/60 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="telefono"
                className="text-sm font-medium text-neutral-300"
              >
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="telefono"
                className="w-full px-4 py-3 rounded-lg border border-neutral-800/60 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                placeholder="+34 600 000 000"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="motivo"
                className="text-sm font-medium text-neutral-300"
              >
                Motivo de contacto
              </label>
              <select
                id="motivo"
                className="w-full px-4 py-3 rounded-lg border border-neutral-800/60 bg-neutral-900/50 text-neutral-100 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              >
                <option>Información sobre programas</option>
                <option>Clase de prueba gratuita</option>
                <option>Consulta de membresías</option>
                <option>Horarios disponibles</option>
                <option>Inscripción</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="mensaje"
                className="text-sm font-medium text-neutral-300"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-neutral-800/60 bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 resize-none"
                placeholder="Cuéntanos cómo podemos ayudarte..."
              />
            </div>

            <Button variant="primary" className="w-full">
              Enviar mensaje
            </Button>

            <p className="text-xs text-neutral-500 text-center">
              Al enviar este formulario aceptas nuestra política de privacidad
            </p>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
            <h3 className="text-xl font-semibold text-primary-300 mb-6">
              Información de contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-2xl shrink-0">
                  📧
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Email</p>
                  <p className="text-sm text-neutral-400">
                    info@academiashozam.com
                  </p>
                  <p className="text-sm text-neutral-400">
                    soporte@academiashozam.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-2xl shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Teléfono</p>
                  <p className="text-sm text-neutral-400">+34 600 000 000</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Lun - Vie: 9:00 - 21:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Dirección</p>
                  <p className="text-sm text-neutral-400">
                    Calle Ejemplo 123
                    <br />
                    28000 Madrid, España
                  </p>
                  <Link to="/location">
                    <Button variant="ghost" className="px-0 mt-2 text-sm">
                      Ver en el mapa →
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-2xl shrink-0">
                  ⏰
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Horario</p>
                  <p className="text-sm text-neutral-400">
                    Lunes - Viernes: 9:00 - 21:00
                    <br />
                    Sábados: 10:00 - 18:00
                    <br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
            <h3 className="text-xl font-semibold text-primary-300 mb-4">
              Síguenos
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800/60 hover:border-primary-600/50 transition-colors"
              >
                <span className="text-2xl">📘</span>
                <span className="text-sm text-neutral-300">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800/60 hover:border-primary-600/50 transition-colors"
              >
                <span className="text-2xl">📷</span>
                <span className="text-sm text-neutral-300">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800/60 hover:border-primary-600/50 transition-colors"
              >
                <span className="text-2xl">🐦</span>
                <span className="text-sm text-neutral-300">Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800/60 hover:border-primary-600/50 transition-colors"
              >
                <span className="text-2xl">💼</span>
                <span className="text-sm text-neutral-300">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800/60 hover:border-primary-600/50 transition-colors"
              >
                <span className="text-2xl">📺</span>
                <span className="text-sm text-neutral-300">YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800/60 hover:border-primary-600/50 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span className="text-sm text-neutral-300">Discord</span>
              </a>
            </div>
          </div>

          {/* FAQ rápido */}
          <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
            <h4 className="font-medium text-neutral-100 mb-3">
              ¿Necesitas ayuda rápida?
            </h4>
            <div className="space-y-2 text-sm">
              <Link
                to="/courses"
                className="block text-primary-400 hover:text-primary-300 transition-colors"
              >
                → Ver catálogo de cursos
              </Link>
              <Link
                to="/pricing"
                className="block text-primary-400 hover:text-primary-300 transition-colors"
              >
                → Consultar precios y planes
              </Link>
              <Link
                to="/schedule"
                className="block text-primary-400 hover:text-primary-300 transition-colors"
              >
                → Ver horarios disponibles
              </Link>
              <Link
                to="/about"
                className="block text-primary-400 hover:text-primary-300 transition-colors"
              >
                → Conocer la academia
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Opciones de contacto alternativas */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Otras formas de{' '}
            <span className="text-primary-400">contactarnos</span>
          </h2>
          <div className="grid gap-6 mt-6 md:grid-cols-3">
            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-medium text-neutral-100 mb-2">
                Agendar reunión
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                Reserva una videollamada de 30 minutos con un asesor educativo
              </p>
              <Button variant="outline" className="w-full">
                Agendar ahora
              </Button>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-medium text-neutral-100 mb-2">
                Chat en vivo
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                Habla con nuestro equipo en tiempo real de lunes a viernes
              </p>
              <Button variant="outline" className="w-full">
                Iniciar chat
              </Button>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-medium text-neutral-100 mb-2">
                Visita presencial
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                Conoce nuestras instalaciones y habla con el equipo en persona
              </p>
              <Button variant="outline" className="w-full">
                Ver ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Estamos aquí para ayudarte a dar el siguiente paso en tu carrera
            profesional.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/courses">
              <Button variant="primary" className="px-6">
                Explorar cursos
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="px-6">
                Ver precios
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

export default Contacto;
