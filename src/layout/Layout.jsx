import { Banner } from '../components/common';
export function Layout({ children }) {

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          {children}
        </div>
      </div>
    </main>
  );
}