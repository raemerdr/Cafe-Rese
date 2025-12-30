
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://picsum.photos/seed/cafe-hero/1920/1080"
          alt="Cafe Resé Ambiance"
          className="w-full h-full object-cover filter brightness-75 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-brown-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-4 bg-cafe-brown/30 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full w-fit">
            <span className="text-yellow-400"><i className="fa-solid fa-star"></i></span>
            <span className="text-sm font-medium">4.5 Rating (137 Reviews)</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            A Sip of <span className="text-cafe-brown-light">Comfort</span>,<br />
            A Bite of <span className="text-cafe-brown-light">Joy</span>.
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed font-light">
            Discover the perfect blend of specialty coffee and satisfying comfort food in the heart of Malolos. Whether you crave a cozy corner or fresh alfresco air, we have the perfect spot waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-cafe-brown text-white rounded-full font-semibold text-center hover:bg-cafe-brown-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-cafe-brown-dark/20"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-center hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              Visit Us
            </a>
          </div>
          <div className="mt-12 flex items-center space-x-8 text-white/80">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">100+</span>
              <span className="text-xs uppercase tracking-widest">Happy Customers Daily</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">4.5/5</span>
              <span className="text-xs uppercase tracking-widest">Star Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
