import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import StockIndicator from '../../components/StockIndicator';
import Link from 'next/link';

const DEMO_PRODUCTS = [
  {
    _id: '1',
    name: 'Premium Dog Food',
    description: 'High-protein, grain-free food for active dogs.',
    price: 29.99,
    stock: 34,
    category: 'Food',
    petType: 'Dog',
    imageUrl: '/logo.png',
  },
  {
    _id: '2',
    name: 'Catnip Toy',
    description: 'Fun plush toy filled with organic catnip.',
    price: 7.99,
    stock: 12,
    category: 'Toys',
    petType: 'Cat',
    imageUrl: '/logo.png',
  },
  {
    _id: '3',
    name: 'Bird Cage Cleaner',
    description: 'Safe, non-toxic cleaner for all bird cages.',
    price: 11.49,
    stock: 3,
    category: 'Health',
    petType: 'Bird',
    imageUrl: '/logo.png',
  },
  {
    _id: '4',
    name: 'Aquarium Filter',
    description: 'Quiet, efficient filter for small aquariums.',
    price: 24.99,
    stock: 18,
    category: 'Accessories',
    petType: 'Fish',
    imageUrl: '/logo.png',
  },
  {
    _id: '5',
    name: 'Rabbit Grooming Brush',
    description: 'Gentle brush for small animal fur care.',
    price: 9.99,
    stock: 7,
    category: 'Grooming',
    petType: 'Small Animal',
    imageUrl: '/logo.png',
  },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = DEMO_PRODUCTS.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">Back to Products</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Head>
        <title>{product.name} - Pet Retail Hub</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 w-full">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mt-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-xl flex items-center justify-center overflow-hidden mb-4 sm:mb-0">
              <img src={product.imageUrl || '/logo.png'} alt={product.name} className="object-contain h-32 w-32" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm">{product.category}</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm">For {product.petType}s</span>
              </div>
              <StockIndicator stock={product.stock} />
              <p className="text-gray-700 mt-4 mb-2">{product.description}</p>
              <div className="text-2xl font-bold text-blue-700 mb-4">${product.price.toFixed(2)}</div>
              <Link href="/products" className="btn-primary">Back to Products</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 