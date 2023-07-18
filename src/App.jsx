import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFoundPage from './pages/NotFoundPage';
import './scss/styles.scss';

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default App