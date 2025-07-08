import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Head>
        <title>Pet Retail Hub</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10 text-center drop-shadow-lg">Welcome to Pet Retail Hub</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-2xl">
          <Link href="/products" className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:ring-4 hover:ring-blue-400 transition-all cursor-pointer">
            <svg className="w-16 h-16 text-blue-600 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" /></svg>
            <span className="text-2xl font-bold text-gray-800 mb-2">User Panel</span>
            <span className="text-gray-500 text-center">Browse products, manage your cart, and checkout as a customer.</span>
          </Link>
          <Link href="/admin-login" className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:ring-4 hover:ring-purple-400 transition-all cursor-pointer">
            <svg className="w-16 h-16 text-purple-600 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" /></svg>
            <span className="text-2xl font-bold text-gray-800 mb-2">Admin Panel</span>
            <span className="text-gray-500 text-center">Login as admin to manage products, view analytics, and more.</span>
          </Link>
        </div>
      </main>
    </div>
  );
} 