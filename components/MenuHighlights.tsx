
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const MenuHighlights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Coffee' | 'Pasta' | 'Main' | 'Snacks'>('All');

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = ['All', 'Coffee', 'Pasta', 'Main', 'Snacks'] as const;

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-cafe-brown font-semibold tracking-widest uppercase text-sm">Our Specialties</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown-dark">Menu Highlights</h2>
          <div className="w-24 h-1 bg-cafe-brown mx-auto rounded-full"></div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-cafe-brown text-white border-cafe-brown shadow-lg'
                  : 'bg-white text-cafe-brown-dark border-cafe-beige hover:border-cafe-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-cafe-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cafe-beige"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cafe-brown shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-serif text-xl font-bold text-cafe-brown-dark group-hover:text-cafe-brown transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-cafe-brown font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-cafe-brown-dark/60 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-2">
                  <button className="text-cafe-brown text-xs font-bold uppercase tracking-widest flex items-center group/btn transition-all">
                    More Details
                    <i className="fa-solid fa-arrow-right ml-2 transform group-hover/btn:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-cafe-brown-dark/50 mb-6 italic">Prices range from ₱200–400 per person</p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-cafe-brown font-bold border-b-2 border-cafe-brown pb-1 hover:text-cafe-brown-dark hover:border-cafe-brown-dark transition-all"
          >
            <span>Download Full Menu</span>
            <i className="fa-solid fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
