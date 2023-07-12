const urlProducts = import.meta.env.VITE_API_URL_ITEMS;
const urlTopSales = import.meta.env.VITE_API_URL_TOPSALES;
const urlCategories = import.meta.env.VITE_API_URL_CATEGORIES;


async function getProducts(categoryId, offset) {
  const response = await query(`${urlProducts}?&categoryId=${categoryId}&offset=${offset}`);

  return await response.json();
}

async function getProduct(productId) {
  
  const response = await query(`${urlProducts}/${productId}`);

  return await response.json();
}

async function getTopSales() {
  const response = await query(urlTopSales);

  return await response.json();
}

async function getCategories() {
  const response = await query(urlCategories);

  return await response.json();
}

function query(url, options = {}) {
  return fetch(url, options);
}

export { getProducts, getProduct, getTopSales, getCategories };