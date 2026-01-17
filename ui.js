async function updatePrices() {
  const btc = await getBTCPrice();
  const eth = await getETHPrice();

  document.getElementById("btcPrice").innerText = formatPrice(btc);
  document.getElementById("ethPrice").innerText = formatPrice(eth);
}
