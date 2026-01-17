async function getBTCPrice() {
  const data = await fetchPrices();
  return data.bitcoin.usd;
}
