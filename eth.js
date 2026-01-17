async function getETHPrice() {
  const data = await fetchPrices();
  return data.ethereum.usd;
}
