import Head from 'next/head';
import Link from 'next/link';

const demoStats = {
  productCount: 5,
  totalStock: 74,
  sales: [
    { label: 'Jan', value: 12 },
    { label: 'Feb', value: 19 },
    { label: 'Mar', value: 8 },
    { label: 'Apr', value: 15 },
    { label: 'May', value: 22 },
    { label: 'Jun', value: 10 },
  ],
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-50">
      <Head>
        <title>Admin Dashboard - Pet Retail Hub</title>
      </Head>
      <header className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold text-gray-800">Admin Dashboard</h1>
          <button className="btn-secondary" onClick={() => window.location.href = '/'}>Logout</button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 mb-12">
          <Link href="#" className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:ring-2 hover:ring-purple-400 transition-all">
            <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" /></svg>
            <span className="font-bold text-lg text-gray-800">Manage Products</span>
          </Link>
          <Link href="/analytics" className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:ring-2 hover:ring-purple-400 transition-all">
            <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 17a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2v10zm-6 0a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10z" /></svg>
            <span className="font-bold text-lg text-gray-800">View Analytics</span>
          </Link>
          <Link href="#" className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:ring-2 hover:ring-purple-400 transition-all">
            <svg className="w-10 h-10 text-red-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            <span className="font-bold text-lg text-gray-800">Other Admin Task</span>
          </Link>
        </div>
        {/* Embedded Analytics Dashboard */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Analytics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center">
              <span className="text-5xl font-bold text-blue-700 mb-2">{demoStats.productCount}</span>
              <span className="text-lg font-medium text-gray-600">Products</span>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center">
              <span className="text-5xl font-bold text-purple-700 mb-2">{demoStats.totalStock}</span>
              <span className="text-lg font-medium text-gray-600">Total Stock</span>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Sales (Demo)</h3>
            <div className="flex items-end h-48 space-x-4">
              {demoStats.sales.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center flex-1">
                  <div
                    className="w-8 rounded-t-lg bg-gradient-to-t from-blue-400 to-purple-400 shadow-md transition-all duration-300"
                    style={{ height: `${s.value * 8}px` }}
                  ></div>
                  <span className="mt-2 text-xs text-gray-600">{s.label}</span>
                  <span className="text-xs text-gray-800 font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 