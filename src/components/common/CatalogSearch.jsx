import { useEffect, useRef, useState } from "react";
import { useSearch } from "../../hooks";

export function CatalogSearch() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [searchField, setSearchField] = useState(searchQuery);
  const searchFieldControl = useRef(null);

  useEffect(() => {
    setSearchField(searchQuery);
  }, [searchQuery]);
  
  const onSubmitCatalogSearch = (event) => {
    event.preventDefault();
    setSearchQuery(searchField);
  }

  const onChangeCatalogSearch = (event) => setSearchField(event.target.value);

  return (
    <form className="catalog-search-form form-inline" onSubmit={onSubmitCatalogSearch}>
      <input className="form-control" placeholder="Поиск" ref={searchFieldControl} value={searchField} onChange={onChangeCatalogSearch} />
    </form>
  );
}