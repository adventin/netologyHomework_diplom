import { Header } from "./Header";
import { Footer } from "./Footer";
export function Page({ children }) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}