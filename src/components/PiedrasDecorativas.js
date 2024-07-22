/*
import React from 'react';
import { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import piedra1 from '../images/piedra1.jpg';
//import { Link } from 'react-router-dom';
import Banner from './Banner'; // Asegúrate de que la ruta sea correcta

const PiedrasDecorativas = () => {
  const [piedras] = useState([
    { id: 1, nombre: 'Mármol', descripcion: 'Elegante y duradero, perfecto para interiores.', imagen:piedra1 },
    { id: 2, nombre: 'Pizarra', descripcion: 'Ideal para exteriores con un toque rústico.', imagen: '/api/placeholder/400/300' },
    { id: 3, nombre: 'Cuarcita', descripcion: 'Resistente y versátil, adecuada para ambos usos.', imagen: '/api/placeholder/400/300' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">PiedrasExclusivas</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-gray-800">Inicio</a></li>
            <li><a href="#Productos" className="text-gray-600 hover:text-gray-800">Productos</a></li>
            <li><a href="#contacto" className="text-gray-600 hover:text-gray-800">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">

      <Banner />

        <section id="Productos" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestras Piedras Más Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {piedras.map((piedra) => (
              <div key={piedra.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl">
                <img src={piedra.imagen} alt={piedra.nombre} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{piedra.nombre}</h3>
                  <p className="text-gray-600 mb-4">{piedra.descripcion}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:underline">Más detalles</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p>+34 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@piedrasexclusivas.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p>Calle Principal 123, Ciudad</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 PiedrasExclusivas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PiedrasDecorativas;
*/
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import piedra1 from '../images/piedra1.jpg';
import Banner from './Banner'; // Asegúrate de que la ruta sea correcta
import piedra2 from '../images/piedra2.jpg';
import piedra3 from '../images/piedra3.jpg';

const PiedrasDecorativas = () => {
  const [piedras] = useState([
    { id: 1, nombre: 'Mármol', descripcion: 'Elegante y duradero, perfecto para interiores.', imagen: piedra1 },
    { id: 2, nombre: 'Pizarra', descripcion: 'Ideal para exteriores con un toque rústico.', imagen: piedra2 },
    { id: 3, nombre: 'Cuarcita', descripcion: 'Resistente y versátil, adecuada para ambos usos.', imagen: piedra3 },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md w-full fixed top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">PiedrasExclusivas</h1>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <ul className={`lg:flex lg:space-x-6 lg:items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
            <li><a href="#home" className="block text-gray-600 hover:text-gray-800 px-4 py-2">Inicio</a></li>
            <li><a href="#Productos" className="block text-gray-600 hover:text-gray-800 px-4 py-2">Productos</a></li>
            <li><a href="#contacto" className="block text-gray-600 hover:text-gray-800 px-4 py-2">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12 pt-20"> {/* Ajustamos el padding top para dejar espacio al header fijo */}
        <Banner />

        <section id="Productos" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestras Piedras Más Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {piedras.map((piedra) => (
              <div key={piedra.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl">
                <img src={piedra.imagen} alt={piedra.nombre} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{piedra.nombre}</h3>
                  <p className="text-gray-600 mb-4">{piedra.descripcion}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:underline">Más detalles</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p>+34 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@piedrasexclusivas.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p>Calle Principal 123, Ciudad</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 PiedrasExclusivas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PiedrasDecorativas;
