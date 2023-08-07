const BITCOIN = document.getElementById("bitcoin");
const ETHEREUM = document.getElementById("ethereum");
const DOGECOIN = document.getElementById("dogecoin");

async function updatePrices() {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd");
    const data = await response.json();

    BITCOIN.innerHTML = "$" + data.bitcoin.usd;
    ETHEREUM.innerHTML = "$" + data.ethereum.usd;
    DOGECOIN.innerHTML = "$" + data.dogecoin.usd;
}

updatePrices();

document.querySelector(".update-prices").addEventListener("click" , (event)=> {
    event.preventDefault();
    updatePrices();
})