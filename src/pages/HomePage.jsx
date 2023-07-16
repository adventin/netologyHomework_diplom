import { Page, Layout } from '../layout';
import { TopSales, ProductCatalog } from '../components';

export default function HomePage(props) {

  return (
    <Page>
      <Layout>
        <TopSales />
        <ProductCatalog />
      </Layout>
    </Page>
  );
}