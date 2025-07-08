import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartButton() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Link href="/cart" className="fixed bottom-6 right-6 z-50">
      <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-2xl w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.5 19h9a2 2 0 001.85-1.3L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full px-2 py-0.5 shadow-lg animate-bounce">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
} 