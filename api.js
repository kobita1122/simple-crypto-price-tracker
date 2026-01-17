async function fetchPrices() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
