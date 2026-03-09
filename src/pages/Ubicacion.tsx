import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Ubicacion = () => {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b border-neutral-800/60 from-neutral-900/60 to-neutral-900/20 md:p-14">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Nuestra <span className="text-primary-400">Ubicación</span>
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
            Encuéntranos en el corazón de Madrid. Nuestras instalaciones están
            diseñadas para el entrenamiento de artes marciales de alto nivel,
            con tatamis profesionales, ring de MMA y equipamiento de última
            generación.
          </p>
          <div className="flex gap-3 mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Agendar visita
              </Button>
            </Link>
            <Button variant="outline" className="px-6">
              Ver en Google Maps
            </Button>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-primary-600/15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none bg-purple-600/10" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Información de ubicación */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
            <h2 className="text-2xl font-semibold text-primary-300 mb-6">
              Información de contacto
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">
                  📍 Dirección
                </h3>
                <p className="text-neutral-100">Calle Ejemplo 123</p>
                <p className="text-neutral-100">28000 Madrid, España</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">
                  📧 Email
                </h3>
                <p className="text-neutral-100">info@academiashozam.com</p>
                <p className="text-neutral-100">soporte@academiashozam.com</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">
                  📞 Teléfono
                </h3>
                <p className="text-neutral-100">+34 600 000 000</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">
                  ⏰ Horario de atención
                </h3>
                <div className="space-y-1 text-neutral-300">
                  <p>Lunes - Viernes: 9:00 - 21:00</p>
                  <p>Sábados: 10:00 - 18:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cómo llegar */}
          <div className="p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
            <h3 className="text-xl font-semibold text-primary-300 mb-4">
              Cómo llegar
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center text-xl shrink-0">
                  🚇
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Metro</p>
                  <p className="text-sm text-neutral-400">
                    Línea 1 - Estación Sol (5 min a pie)
                    <br />
                    Línea 2 - Estación Opera (8 min a pie)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center text-xl shrink-0">
                  🚌
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Autobús</p>
                  <p className="text-sm text-neutral-400">
                    Líneas: 3, 50, 150 (parada a 2 min)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center text-xl shrink-0">
                  🚗
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Coche</p>
                  <p className="text-sm text-neutral-400">
                    Parking público disponible en Plaza Mayor
                    <br />
                    (10 min a pie)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center text-xl shrink-0">
                  🚲
                </div>
                <div>
                  <p className="font-medium text-neutral-100">Bicicleta</p>
                  <p className="text-sm text-neutral-400">
                    Estación BiciMAD a 1 min
                    <br />
                    Aparcamiento de bicis disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/30">
            <div className="flex justify-center items-center w-full text-sm aspect-square bg-neutral-800/60 text-neutral-400">
              <div className="text-center p-8">
                <p className="text-4xl mb-4">🗺️</p>
                <p>Mapa de Google Maps</p>
                <p className="text-xs mt-2">
                  (Inserta aquí tu iframe de Google Maps)
                </p>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20">
            <h4 className="font-medium text-neutral-100 mb-3">
              Información adicional
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Acceso para personas con movilidad reducida</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>WiFi de alta velocidad gratuito</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Zona de descanso y cafetería</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Equipos Mac y PC disponibles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Salas de estudio privadas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nuestras instalaciones */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Nuestras <span className="text-primary-400">instalaciones</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: 'Aulas modernas',
              descripcion:
                'Espacios equipados con tecnología de última generación, pantallas 4K y sistemas de videoconferencia profesionales.',
              icono: '🖥️',
            },
            {
              titulo: 'Laboratorio tech',
              descripcion:
                'Acceso a equipos Mac, PCs de alto rendimiento y servidores para prácticas avanzadas.',
              icono: '💻',
            },
            {
              titulo: 'Zona de networking',
              descripcion:
                'Espacios diseñados para fomentar la colaboración y el intercambio de ideas entre estudiantes.',
              icono: '🤝',
            },
            {
              titulo: 'Biblioteca digital',
              descripcion:
                'Acceso a miles de recursos, libros digitales, cursos complementarios y documentación técnica.',
              icono: '📚',
            },
            {
              titulo: 'Cafetería',
              descripcion:
                'Zona de descanso con café, snacks y espacios cómodos para estudiar o socializar.',
              icono: '☕',
            },
            {
              titulo: 'Salas de proyectos',
              descripcion:
                'Espacios privados para trabajo en equipo, hackathons y desarrollo de proyectos grupales.',
              icono: '🚀',
            },
          ].map((instalacion, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/30"
            >
              <div className="text-4xl mb-3">{instalacion.icono}</div>
              <h3 className="text-lg font-medium text-neutral-100 mb-2">
                {instalacion.titulo}
              </h3>
              <p className="text-sm text-neutral-400">
                {instalacion.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lugares cercanos */}
      <div className="overflow-hidden relative p-8 space-y-6 rounded-2xl border md:p-12 border-neutral-800/60 bg-neutral-900/30">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl pointer-events-none bg-primary-600/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none bg-purple-600/10" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Lugares <span className="text-primary-400">cercanos</span>
          </h2>
          <p className="mt-3 text-neutral-300">
            Estamos en una ubicación céntrica con fácil acceso a servicios y
            lugares de interés.
          </p>
          <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-2xl">🍽️</div>
              <h3 className="font-medium text-neutral-100">Restaurantes</h3>
              <p className="text-sm text-neutral-400">
                Más de 20 opciones a menos de 5 minutos
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">☕</div>
              <h3 className="font-medium text-neutral-100">Cafeterías</h3>
              <p className="text-sm text-neutral-400">
                Starbucks, cafés locales y más
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🏦</div>
              <h3 className="font-medium text-neutral-100">Bancos</h3>
              <p className="text-sm text-neutral-400">
                Cajeros y sucursales bancarias
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🏢</div>
              <h3 className="font-medium text-neutral-100">Coworking</h3>
              <p className="text-sm text-neutral-400">
                Espacios de trabajo complementarios
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="overflow-hidden relative p-8 rounded-2xl border bg-linear-to-b md:p-12 border-primary-800/60 from-primary-900/20 to-neutral-900/20">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ven a conocernos
          </h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Agenda una visita para conocer nuestras instalaciones, hablar con el
            equipo y descubrir si Academia Shozam es para ti.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact">
              <Button variant="primary" className="px-6">
                Agendar visita
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="px-6">
                Ver cursos
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

export default Ubicacion;
