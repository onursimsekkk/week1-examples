const productList = [
  { id: 1, name: 'Kola', price: 4, img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg' },
  { id: 2, name: 'Iskender', price: 30, img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg' },
  { id: 3, name: 'Yat', price: 45005555559, img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg'  },
  { id: 4, name: 'Bahceli Ev', price: 95000000, img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg' },
  { id: 5, name: 'Araba Fabrikası', price: 1200000000555, img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg' },
  { id: 6, name: 'Ada', price: 600000050000400, img: 'https://www.vladi-private-islands.de/fileadmin/_processed_/0/1/csm_little_whale_cay_007_821a0f921c.jpg' },
  { id: 7, name: 'Saat', price: 1558, img: 'https://storage.googleapis.com/watchesguild/upload/staging/system/media_libraries/353/file.jpg' }
  // ... Kendi örneklerinizi eklemeye çekinmeyin.
];

const productsBox = document.querySelector('#products');
const moneyBox = document.querySelector('#moneyAmount');
const canBuy = document.querySelector('#canBuy');

let billGatesMoney = Number.MAX_SAFE_INTEGER;

document.addEventListener('DOMContentLoaded', () => {
  productList.map(product => productsBox.innerHTML += `
    <div id="product">
        <img src="${product.img}" alt="product-${product.id}" class="product-img">
        <button id="${product.id}" class="p-button">Sepete Ekle</button>
        <h4>${product.name}</h4>
        <span>Fiyatı: ${product.price} $</span>
        <span class="class${product.id}">${counter}</span>
    </div>
  `);
});

// Kalan Para
productsBox.addEventListener('click', (e) => {
  const minusMoney = (productList[e.target.id - 1].price);
  billGatesMoney = (billGatesMoney - minusMoney); // -=
  console.log(billGatesMoney); // deneme
  moneyBox.innerHTML = `Kalan Para: ${billGatesMoney}`;

  // Butonu Disable Etme ve Satın alamaz Uyarısı
  if (Math.floor(billGatesMoney / minusMoney) <= 0) {
    canBuy.innerHTML= "Bu üründen daha fazla satın alamazsın!"
    e.target.disabled = true;
    e.target.className= "disabled-button"
  };
});


// Kalan Satın Alma Kapasitesi
productsBox.addEventListener('mouseover', (e) => {
  if (e.target.className === "p-button") {
    const neededMoney = (productList[e.target.id - 1].price);
    const buyableProduct = Math.floor(billGatesMoney / neededMoney);
    buyableProduct > 0 
    ? canBuy.innerHTML= `${buyableProduct} adet ${productList[e.target.id - 1].name} daha satın alabilirsiniz.` 
    : "";
  };

});

// Product Counter - Sepet Function  
let counter = 0;

productsBox.addEventListener('click', (e) => {
  if (e.target.className === "p-button") {
    const basket = document.querySelector(`.class${e.target.id}`);
    
    counter ++;
    basket.innerHTML = counter;
  };
});