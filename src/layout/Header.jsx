import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useCart, useSearch } from '../hooks';


export function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const [searchField, setSearchField] = useState(searchQuery);
  const searchForm = useRef(null);
  const searchFieldControl = useRef(null);
  const [isOpenedSearch, setIsOpenedSearch] = useState(false);

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

  const onClickOpenSearch = (event) => {
    const searchFieldValue = searchFieldControl.current.value;

    if (isOpenedSearch && Boolean(searchFieldValue)) {
      setSearchQuery(searchFieldValue);
      return navigate("/catalog");
    }
    setIsOpenedSearch(!isOpenedSearch);
    searchForm.current.classList.toggle('invisible');
    searchForm.current.querySelector('input').focus();
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
  }

  const onChangeSearch = (event) => {
    setSearchField(event.target.value);
  }

  useEffect(() => {
    setSearchField(searchQuery);
  }, [searchQuery]);

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
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={onClickOpenSearch} />
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible" ref={searchForm} onSubmit={onSubmitSearch}>
                  <input className="form-control" placeholder="Поиск" ref={searchFieldControl} value={searchField} onChange={onChangeSearch} />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}