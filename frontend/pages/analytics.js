import Head from 'next/head';
import Header from '../components/Header';

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

export default function Analytics() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Head>
        <title>Analytics - Pet Retail Hub</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Analytics Dashboard</h1>
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Sales (Demo)</h2>
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
      </main>
    </div>
  );
} 