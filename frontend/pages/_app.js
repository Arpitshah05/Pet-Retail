import '../styles/globals.css';
import { CartProvider } from '../components/CartContext';
import CartButton from '../components/CartButton';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <CartButton />
    </CartProvider>
  );
}

export default MyApp; 