
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-cafe-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-cafe-brown font-semibold tracking-widest uppercase text-sm">The Experience</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown-dark">Captured Moments</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-lg"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-brown-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-medium uppercase tracking-widest text-cafe-brown-light mb-1 block">
                    {img.category}
                  </span>
                  <p className="text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <div className="flex flex-col items-center">
             <i className="fa-solid fa-mug-hot text-3xl mb-2"></i>
             <span className="text-[10px] uppercase font-bold">Premium Brews</span>
           </div>
           <div className="flex flex-col items-center">
             <i className="fa-solid fa-wifi text-3xl mb-2"></i>
             <span className="text-[10px] uppercase font-bold">Fast WiFi</span>
           </div>
           <div className="flex flex-col items-center">
             <i className="fa-solid fa-utensils text-3xl mb-2"></i>
             <span className="text-[10px] uppercase font-bold">Fresh Food</span>
           </div>
           <div className="flex flex-col items-center">
             <i className="fa-solid fa-music text-3xl mb-2"></i>
             <span className="text-[10px] uppercase font-bold">Chill Vibes</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
