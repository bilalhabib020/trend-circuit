
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Products from './pages/Products';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Checkout from './pages/CheckoutPage';
import OrderSuccess from './pages/OrderSuccess';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
   // <div id="wrapper">
    <Router>
      <ScrollToTop />
      <div id="wrapper">
      <Header />
      <main id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
   // </div>
  )
}

export default App
