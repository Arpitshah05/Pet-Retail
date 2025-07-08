export default function StockIndicator({ stock }) {
  let status, color;
  
  if (stock > 20) {
    status = 'In Stock';
    color = 'bg-green-100 text-green-800';
  } else if (stock > 5) {
    status = 'Low Stock';
    color = 'bg-yellow-100 text-yellow-800';
  } else {
    status = 'Out Soon';
    color = 'bg-red-100 text-red-800';
  }
  
  return (
    <div className="flex items-center">
      <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${color}`}>
        {status}: {stock}
      </span>
    </div>
  );
} 