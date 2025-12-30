
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Coffee' | 'Pasta' | 'Main' | 'Snacks';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'Ambiance' | 'Food' | 'Coffee';
}
