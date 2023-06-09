import { NavLink } from 'react-router-dom';
import { useCart, useSearch } from '../hooks';


export function Header() {
  const { cart } = useCart();
  const { search } = useSearch();
  const headerMenu = [
    {
      title: "Главная",
      link: "/"
    },
    {
      title: "Каталог",
      link: "/catalog"
    },
    {
      title: "О магазине",
      link: "/about"
    },
    {
      title: "Контакты",
      link: "/contacts"
    },
  ];

  const getClassNameNavLink = ({ isActive, isPending }) => `menu__item ${isPending ? "menu__item-pending" : isActive ? "menu__item-active" : ""}`;

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/img/header-logo.png" alt="Bosa Noga" />
            </a>
            <div id="navbarMain" className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                {headerMenu.map(menuItem => (
                  <li className="nav-item" key={menuItem.link}>
                    <NavLink className="nav-link" to={menuItem.link}>{menuItem.title}</NavLink>
                  </li>
                ))}
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}