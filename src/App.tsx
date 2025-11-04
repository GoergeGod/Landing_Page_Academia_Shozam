import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import Cursos from './pages/Cursos';
import Profesores from './pages/Profesores';
import Contacto from './pages/Contacto';
import Horarios from './pages/Horarios';
import Eventos from './pages/Eventos';
import Precios from './pages/Precios';
import Ubicacion from './pages/Ubicacion';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="px-4 py-10 mx-auto max-w-7xl">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<QuienesSomos />} />
          <Route path="/courses" element={<Cursos />} />
          <Route path="/schedule" element={<Horarios />} />
          <Route path="/events" element={<Eventos />} />
          <Route path="/pricing" element={<Precios />} />
          <Route path="/teachers" element={<Profesores />} />
          <Route path="/location" element={<Ubicacion />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
