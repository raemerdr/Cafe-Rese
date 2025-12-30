
import { MenuItem, Testimonial, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Biscoff Latte',
    description: 'A signature creamy latte infused with the unique spiced flavor of Biscoff cookies.',
    price: '₱185',
    image: 'https://picsum.photos/seed/biscoff/600/400',
    category: 'Coffee'
  },
  {
    id: '2',
    name: 'Spanish Latte',
    description: 'The perfect balance of sweetened condensed milk and rich espresso.',
    price: '₱175',
    image: 'https://picsum.photos/seed/spanish/600/400',
    category: 'Coffee'
  },
  {
    id: '3',
    name: 'Pepperoni Pizza',
    description: 'Crispy dough topped with premium pepperoni and our signature hot honey drizzle.',
    price: '₱350',
    image: 'https://picsum.photos/seed/pizza/600/400',
    category: 'Main'
  },
  {
    id: '4',
    name: 'Truffle Pasta',
    description: 'Creamy fettuccine tossed in a decadent white truffle oil and mushroom sauce.',
    price: '₱320',
    image: 'https://picsum.photos/seed/truffle/600/400',
    category: 'Pasta'
  },
  {
    id: '5',
    name: 'Bangus Inasal',
    description: 'Grilled milkfish marinated in local spices, served with garlic rice.',
    price: '₱290',
    image: 'https://picsum.photos/seed/bangus/600/400',
    category: 'Main'
  },
  {
    id: '6',
    name: 'Mojo Chicken Fingers',
    description: 'Crispy breaded chicken breast strips served with our house mojo dip.',
    price: '₱260',
    image: 'https://picsum.photos/seed/chicken/600/400',
    category: 'Snacks'
  },
  {
    id: '7',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel.',
    price: '₱180',
    image: 'https://picsum.photos/seed/caramel/600/400',
    category: 'Coffee'
  },
  {
    id: '8',
    name: 'Fil-Italian Spaghetti',
    description: 'Our unique take on spaghetti, blending sweet Filipino style with Italian herbs.',
    price: '₱240',
    image: 'https://picsum.photos/seed/pasta-it/600/400',
    category: 'Pasta'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Maria Santos',
    rating: 5,
    comment: 'The Biscoff Latte is to die for! The ambiance here in Malolos is unbeatable, whether indoor or alfresco.',
    date: '2 weeks ago'
  },
  {
    id: 't2',
    name: 'Juan Dela Cruz',
    rating: 4.5,
    comment: 'Delicious and affordable meals. The Pepperoni Pizza with hot honey is a game changer. Generous portions!',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Isabella Gomez',
    rating: 5,
    comment: 'Perfect spot for remote work. The WiFi is stable and the coffee keeps me going. Highly recommended.',
    date: '3 days ago'
  }
];

export const GALLERY: GalleryImage[] = [
  { url: 'https://picsum.photos/seed/ambiance1/800/600', alt: 'Cozy indoor seating area', category: 'Ambiance' },
  { url: 'https://picsum.photos/seed/food1/800/600', alt: 'Truffle pasta serving', category: 'Food' },
  { url: 'https://picsum.photos/seed/coffee1/800/600', alt: 'Latte art close-up', category: 'Coffee' },
  { url: 'https://picsum.photos/seed/alfresco/800/600', alt: 'Outdoor alfresco dining space', category: 'Ambiance' },
  { url: 'https://picsum.photos/seed/pizza2/800/600', alt: 'Pepperoni pizza slice', category: 'Food' },
  { url: 'https://picsum.photos/seed/vibe1/800/600', alt: 'Busy cafe atmosphere', category: 'Ambiance' },
];
