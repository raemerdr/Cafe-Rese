
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cafe-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-cafe-brown font-semibold tracking-widest uppercase text-sm">Social Proof</h3>
            <h2 className="text-4xl font-serif font-bold text-cafe-brown-dark">Loved by the <br />Community.</h2>
            <div className="flex items-center space-x-4 py-4">
              <div className="text-5xl font-bold text-cafe-brown">4.5</div>
              <div className="space-y-1">
                <div className="flex text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="text-sm text-cafe-brown-dark/60 font-medium">137 Verified Reviews</p>
              </div>
            </div>
            <p className="text-cafe-brown-dark/70">
              We're honored to be one of Malolos' highest-rated cafes. Our customers love us for the generous portions, cozy vibes, and consistent quality.
            </p>
            <a href="https://facebook.com" target="_blank" className="inline-flex items-center text-cafe-brown font-bold group">
              Read more on Facebook
              <i className="fa-brands fa-facebook-f ml-3 transform group-hover:scale-125 transition-transform"></i>
            </a>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={review.id}
                className={`p-8 bg-white rounded-3xl shadow-sm border border-cafe-beige/50 relative ${idx === 1 ? 'md:translate-y-8' : ''}`}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-cafe-brown rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="flex text-yellow-400 text-xs mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fa-solid fa-star ${i >= Math.floor(review.rating) ? 'opacity-30' : ''}`}></i>
                  ))}
                </div>
                <p className="text-cafe-brown-dark/80 italic mb-6 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-cafe-brown-light flex items-center justify-center text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-cafe-brown-dark">{review.name}</h5>
                      <span className="text-[10px] uppercase tracking-wider text-cafe-brown-dark/40">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
