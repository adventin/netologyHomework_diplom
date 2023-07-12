import { useEffect, useState } from 'react';


const urlCategories = import.meta.env.VITE_API_URL_CATEGORIES;

export function ProductCategories({ items, activeCategory, onClickCategory }) {
  const getClassName = (categoryId) => activeCategory === categoryId ? 'nav-link active' : 'nav-link';

  return (
    <ul className="catalog-categories nav justify-content-center">
      {
        items.map((category) => (
          <li className="nav-item" key={category.id}>
            <a className={getClassName(category.id)} href="#" onClick={onClickCategory(category.id)}>{category.title}</a>
          </li>
        ))
      }
    </ul >
  );
}


