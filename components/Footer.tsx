
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-cream pt-20 pb-10 border-t border-cafe-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-cafe-brown-dark">Cafe Resé</h2>
            <p className="text-cafe-brown-dark/60 text-sm leading-relaxed">
              Your neighborhood sanctuary for specialty coffee, hearty meals, and the warm vibes of Malolos, Bulacan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cafe-beige flex items-center justify-center text-cafe-brown-dark hover:bg-cafe-brown hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cafe-beige flex items-center justify-center text-cafe-brown-dark hover:bg-cafe-brown hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cafe-beige flex items-center justify-center text-cafe-brown-dark hover:bg-cafe-brown hover:text-white transition-all">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-cafe-brown-dark mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">Home</a></li>
              <li><a href="#about" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">Menu Highlights</a></li>
              <li><a href="#visit" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cafe-brown-dark mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-cafe-brown-dark/60 text-sm hover:text-cafe-brown transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cafe-brown-dark mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-cafe-brown-dark/60 text-sm mb-4">Join our community for updates and special promos.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white border border-cafe-beige px-4 py-2 rounded-l-lg text-sm w-full focus:outline-none focus:ring-1 focus:ring-cafe-brown"
              />
              <button className="bg-cafe-brown text-white px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-cafe-brown-dark transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cafe-beige pt-10 text-center">
          <p className="text-cafe-brown-dark/40 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Cafe Resé Malolos. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
