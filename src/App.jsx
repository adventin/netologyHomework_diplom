import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
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
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App