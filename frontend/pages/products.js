import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

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

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Mock admin check (replace with real auth later)
  const isAdmin = false;

  useEffect(() => {
    setTimeout(() => {
      setProducts(DEMO_PRODUCTS);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex flex-col overflow-x-hidden">
      <Head>
        <title>Products - Pet Retail Hub</title>
      </Head>
      <Header />
      {/* Animated Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-pulse-slow z-0" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-purple-200 via-blue-100 to-indigo-100 rounded-full blur-2xl opacity-30 animate-pulse-slower z-0" />
      {/* Hero Section with Mascot */}
      <section className="relative w-full bg-gradient-to-r from-blue-100/90 via-indigo-100/90 to-purple-100/90 py-10 sm:py-16 mb-4 sm:mb-8 shadow-lg rounded-b-3xl z-10 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center text-center gap-2 relative z-10">
          <div className="mb-2 animate-fade-in">
            {/* Cute mascot SVG */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto drop-shadow-lg">
              <ellipse cx="32" cy="48" rx="20" ry="10" fill="#c7d2fe" />
              <circle cx="32" cy="28" r="18" fill="#fff" stroke="#6366f1" strokeWidth="2" />
              <ellipse cx="24" cy="26" rx="3" ry="4" fill="#6366f1" />
              <ellipse cx="40" cy="26" rx="3" ry="4" fill="#6366f1" />
              <ellipse cx="32" cy="36" rx="7" ry="4" fill="#a5b4fc" />
              <ellipse cx="32" cy="36" rx="3" ry="2" fill="#6366f1" />
              <ellipse cx="24" cy="24" rx="1" ry="1.5" fill="#fff" />
              <ellipse cx="40" cy="24" rx="1" ry="1.5" fill="#fff" />
            </svg>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-gray-800 drop-shadow-lg mb-2 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pet Products Inventory</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-2 animate-fade-in">
            Explore our curated selection of premium pet products for every animal companion.
          </p>
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-xs shadow animate-fade-in">Demo Mode</span>
        </div>
      </section>
      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 flex-1 w-full z-10">
        {loading ? (
          <div className="text-center py-12 sm:py-16">
            <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-14 sm:w-14 border-t-4 border-b-4 border-blue-500"></div>
            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">Loading products...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 sm:p-6 rounded-xl sm:rounded-2xl max-w-2xl mx-auto text-center shadow-md">
            <p className="text-base sm:text-lg">Error loading products: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 animate-fade-in">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </main>
      {/* Floating Action Button */}
      {isAdmin && (
        <button className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-2xl p-4 hover:scale-105 active:scale-95 transition-all duration-200 border-4 border-white/60 flex items-center gap-2 animate-fade-in">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <span className="hidden sm:inline font-semibold">Add Product</span>
        </button>
      )}
      {/* Glassy Footer */}
      <footer className="bg-white/80 backdrop-blur-lg border-t border-blue-100 shadow-inner py-6 mt-8 rounded-t-3xl animate-fade-in z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 font-semibold">© {new Date().getFullYear()} Pet Retail Hub. All rights reserved.</p>
          <p className="mt-1 text-gray-400 text-xs">Demo project for portfolio and learning purposes.</p>
        </div>
      </footer>
    </div>
  );
} 