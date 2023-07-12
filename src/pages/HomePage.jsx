import { Header, Footer } from '../layout';
import { Banner, CatalogSearch } from '../components/common';
import { TopSales, ProductCatalog } from '../components';

export default function HomePage(props) {
  
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <TopSales />
            <ProductCatalog />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}