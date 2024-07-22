import React from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'lucide-react';
import piedra1 from '../images/piedra1.jpg';
import piedra2 from '../images/piedra2.jpg';
import piedra3 from '../images/piedra3.jpg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <Slider {...settings} className="relative">
        <div className="relative">
          <img src={piedra1} alt="Piedra 1" className="w-full h-96 md:h-screen object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
        </div>
        <div className="relative">
          <img src={piedra2} alt="Piedra 2" className="w-full h-96 md:h-screen object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
        </div>
        <div className="relative">
          <img src={piedra3} alt="Piedra 3" className="w-full h-96 md:h-screen object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
        </div>
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-3xl px-8 py-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transforma tu espacio con elegancia natural</h2>
          <p className="text-lg md:text-xl mb-8">Descubre nuestra exclusiva colección de piedras decorativas para interiores y exteriores</p>
          <a href="#catalogo" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300">
            Ver catálogo
            <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
