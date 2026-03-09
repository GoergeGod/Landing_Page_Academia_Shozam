import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/teachers', label: 'Profesores' },
  { to: '/courses', label: 'Cursos' },
  { to: '/events', label: 'Eventos' },
  { to: '/schedule', label: 'Horarios' },
  { to: '/pricing', label: 'Precios' },
  { to: '/about', label: 'Quiénes somos' },
  { to: '/location', label: 'Ubicación' },
  { to: '/contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/60 bg-[hsl(var(--background))]/70 backdrop-blur">
      <div className="flex justify-between items-center px-4 mx-auto max-w-6xl h-16">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))]"
        >
          Academia Shozam
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                'text-sm transition-colors hover:text-primary-400 ' +
                (isActive ? 'text-primary-400' : 'text-neutral-400')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" aria-label="Abrir menú">
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost">Cerrar</Button>
                </SheetClose>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        'text-base ' +
                        (isActive ? 'text-primary-500' : 'text-neutral-300')
                      }
                    >
                      {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
