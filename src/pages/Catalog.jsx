
import { Page, Layout } from '../layout';
import { CatalogSearch } from '../components/common';
import { ProductCatalog } from '../components';

export default function Catalog(props) {

  return (
    <Page>
      <Layout>
        <ProductCatalog>
          <CatalogSearch />
        </ProductCatalog>
      </Layout>
    </Page>
  );
}