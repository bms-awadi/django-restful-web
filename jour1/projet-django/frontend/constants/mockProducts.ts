export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
};

export const categories = ['Electronique', 'Mode', 'Accessoires'];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15',
    category: 'Electronique',
    price: 869.0,
    description: 'Smartphone Apple, ecran 6.1 pouces, puce A16 Bionic.',
  },
  {
    id: '2',
    name: 'Casque Sony WH-1000XM5',
    category: 'Electronique',
    price: 349.0,
    description: 'Casque sans fil avec reduction de bruit active.',
  },
  {
    id: '3',
    name: 'PlayStation 5',
    category: 'Electronique',
    price: 499.0,
    description: 'Console de jeux nouvelle generation, lecteur disque.',
  },
  {
    id: '4',
    name: 'Nike Air Force 1',
    category: 'Mode',
    price: 119.99,
    description: 'Baskets basses en cuir, coloris blanc classique.',
  },
  {
    id: '5',
    name: "Veste Levi's Trucker",
    category: 'Mode',
    price: 89.9,
    description: 'Veste en jean coupe classique, doublure coton.',
  },
  {
    id: '6',
    name: 'Apple Watch SE',
    category: 'Accessoires',
    price: 279.0,
    description: 'Montre connectee, suivi activite et notifications.',
  },
  {
    id: '7',
    name: 'Sac a dos Eastpak Padded',
    category: 'Accessoires',
    price: 65.0,
    description: 'Sac a dos 24L, compartiment rembourre pour ordinateur.',
  },
  {
    id: '8',
    name: 'MacBook Air M2',
    category: 'Electronique',
    price: 1199.0,
    description: 'Ordinateur portable Apple, puce M2, 13 pouces.',
  },
];
