
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cafe-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2">
              <img
                src="https://picsum.photos/seed/about-img/800/1000"
                alt="Cafe Resé Atmosphere"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cafe-brown-light/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cafe-brown/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-4 w-24 h-24 border-8 border-cafe-beige rounded-lg hidden lg:block"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-cafe-brown font-semibold tracking-widest uppercase text-sm flex items-center">
                <span className="w-8 h-px bg-cafe-brown mr-3"></span>
                Our Story
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown-dark leading-tight">
                Crafting Moments, <br />One Cup at a Time.
              </h2>
            </div>

            <p className="text-cafe-brown-dark/70 text-lg leading-relaxed italic">
              "At Cafe Resé, we believe every cup tells a story and every meal should feel like home."
            </p>

            <div className="space-y-6 text-cafe-brown-dark/80">
              <p>
                Founded in the historic city of Malolos, Bulacan, Cafe Resé has quickly become a sanctuary for coffee lovers and food enthusiasts alike. Our name represents our commitment to comfort, quality, and the simple joy of a well-crafted experience.
              </p>
              <p>
                From our air-conditioned indoor seating perfect for productive afternoons to our breezy alfresco area for social evenings, we've designed a space that adapts to your mood. We take pride in our generous portions, premium ingredients, and the warm smiles that greet you at every visit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cafe-beige rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-wind text-cafe-brown text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-cafe-brown-dark">Indoor Cool</h4>
                  <p className="text-xs text-cafe-brown-dark/60 mt-1">Full A/C comfort for work or rest.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cafe-beige rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-leaf text-cafe-brown text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-cafe-brown-dark">Alfresco Vibe</h4>
                  <p className="text-xs text-cafe-brown-dark/60 mt-1">Breezy outdoor dining experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
