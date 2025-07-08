import { useCart } from '../components/CartContext';
import Header from '../components/Header';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">Your cart is empty.<br />
            <Link href="/products" className="btn-primary mt-4 inline-block">Browse Products</Link>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 animate-fade-in">
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item._id} className="flex items-center py-4 gap-4">
                  <img src={item.imageUrl || '/logo.png'} alt={item.name} className="w-16 h-16 object-contain rounded-lg bg-gradient-to-br from-blue-100 to-purple-100" />
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-gray-800">{item.name}</h2>
                    <div className="text-gray-500 text-sm">${item.price.toFixed(2)} x {item.quantity}</div>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="ml-2 text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
              <button onClick={clearCart} className="btn-secondary">Clear Cart</button>
              <div className="text-xl font-bold text-blue-700">Total: ${total.toFixed(2)}</div>
            </div>
            <button className="btn-primary w-full mt-6">Checkout</button>
          </div>
        )}
      </main>
    </div>
  );
} 