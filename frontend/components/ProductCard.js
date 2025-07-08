import StockIndicator from './StockIndicator';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="relative group">
      <Link href={`/products/${product._id}`} className="block group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-2xl">
        <div className="card group relative flex flex-col h-full cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all">
          <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center mb-3 sm:mb-4 overflow-hidden rounded-xl">
            <img
              src={product.imageUrl || '/logo.png'}
              alt={product.name}
              className="object-contain h-24 sm:h-32 group-hover:scale-105 transition-transform duration-300 max-w-full"
              onError={e => (e.target.style.display = 'none')}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1 sm:mb-2">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-blue-700 transition-colors duration-200">{product.name}</h3>
                <p className="text-gray-500 text-xs mb-1">For {product.petType}s</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm">
                {product.category}
              </span>
            </div>
            <p className="text-gray-700 mb-2 sm:mb-4 line-clamp-2 min-h-[2.5em]">{product.description}</p>
            <div className="flex justify-between items-center mt-auto pt-2">
              <span className="text-lg sm:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <StockIndicator stock={product.stock} />
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:opacity-100 focus:outline-none"
        tabIndex={0}
      >
        Add to Cart
      </button>
    </div>
  );
} 