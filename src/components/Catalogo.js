import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const productos = [
  { id: 1, nombre: 'Mármol Carrara', tipo: 'Interior', color: 'Blanco', imagen: '/api/placeholder/300/300' },
  { id: 2, nombre: 'Pizarra Negra', tipo: 'Exterior', color: 'Negro', imagen: '/api/placeholder/300/300' },
  { id: 3, nombre: 'Granito Rosa', tipo: 'Interior/Exterior', color: 'Rosa', imagen: '/api/placeholder/300/300' },
];

const Catalogo = () => {
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    producto.tipo.toLowerCase().includes(filtro.toLowerCase()) ||
    producto.color.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de Piedras Decorativas</h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
        <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-4">
          <input
            type="text"
            placeholder="Buscar piedras..."
            className="w-full px-4 py-2 border rounded-lg"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center">
          <Filter size={20} className="mr-2" />
          Filtros
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">Tipo: {producto.tipo}</p>
              <p className="text-sm text-gray-600 mb-4">Color: {producto.color}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
