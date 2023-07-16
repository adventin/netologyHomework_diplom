import { Page, Layout } from '../layout';
export default function NotFoundPage(props) {

  return (
    <Page>
      <Layout>
        <section className="top-sales">
          <h2 className="text-center">Страница не найдена</h2>
          <p>Извините, такая страница не найдена!</p>
        </section>
      </Layout>
    </Page>
  );
}
