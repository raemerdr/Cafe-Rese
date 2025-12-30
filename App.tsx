
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Testimonials />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />

      {/* Persistent CTA for mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a
          href="tel:09064802714"
          className="flex items-center justify-center w-14 h-14 bg-cafe-brown text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
