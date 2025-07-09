import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Head>
        <title>Login - Pet Retail Hub</title>
      </Head>
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fade-in">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">Sign In</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">Sign In</button>
        </form>
        <div className="text-center mt-6 text-gray-600 text-sm">
          Don&apos;t have an account? <Link href="#" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
} 