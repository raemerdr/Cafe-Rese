
import React from 'react';

const VisitUs: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cafe-brown-dark rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
              <h3 className="text-cafe-brown-light font-semibold tracking-widest uppercase text-xs mb-4">Find Us</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">We're waiting for you.</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-cafe-brown-light">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-white/70 mt-1">084 Hangga St, Malolos, Bulacan</p>
                    <a href="https://maps.google.com" target="_blank" className="text-sm text-cafe-brown-light hover:underline mt-2 inline-block">Get Directions</a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-cafe-brown-light">
                    <i className="fa-solid fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Operating Hours</h4>
                    <p className="text-white/70 mt-1">Open Daily: 10:00 AM – 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-cafe-brown-light">
                    <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Contact Us</h4>
                    <p className="text-white/70 mt-1">0906 480 2714</p>
                    <p className="text-white/70 text-sm italic">Feel free to call for inquiries or pickups!</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 w-28 text-center">
                  <i className="fa-solid fa-shop text-xl mb-2"></i>
                  <span className="text-[10px] uppercase">Dine-in</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 w-28 text-center">
                  <i className="fa-solid fa-bag-shopping text-xl mb-2"></i>
                  <span className="text-[10px] uppercase">Pickup</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 w-28 text-center">
                  <i className="fa-solid fa-truck text-xl mb-2"></i>
                  <span className="text-[10px] uppercase">Delivery</span>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-full min-h-[400px] relative">
              {/* Mock Map View */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.939226194174!2d120.81232817591605!3d14.856230970725586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339651fb26487e87%3A0x6d908d132c3f9a74!2s084%20Hangga%20St%2C%20Malolos%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1715421234567!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90 contrast-125"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-cafe-brown-dark rounded-[3rem] lg:rounded-none lg:border-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
