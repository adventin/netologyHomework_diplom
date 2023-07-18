const urlProducts = import.meta.env.VITE_API_URL_ITEMS;
const urlTopSales = import.meta.env.VITE_API_URL_TOPSALES;
const urlCategories = import.meta.env.VITE_API_URL_CATEGORIES;
const urlOrder = import.meta.env.VITE_API_URL_ORDER;


async function getProducts(categoryId = 0, offset = 0, searchQuery = '') {
  const response = await query(`${urlProducts}?&categoryId=${categoryId}&offset=${offset}&q=${searchQuery}`);

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

function confirmOrder(order) {
  const response = query(urlOrder, {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

function query(url, options = {}) {
  return fetch(url, options);
}

export { getProducts, getProduct, getTopSales, getCategories, confirmOrder };