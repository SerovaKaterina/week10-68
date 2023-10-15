const productPrices = document.querySelectorAll('.product__price');
const quantity = productPrices.length;
const price = (productPrices[0].innerText).slice(0, -4);
const result = document.querySelector('.resultprice');
const button = document.querySelector('.button');

function calculateTotalPrice(quantity = 2, price = 200000) {
    const resultPrice = quantity * price;
    return resultPrice.toLocaleString('ru-RU');
}
const resultPrice = calculateTotalPrice(quantity, price);
console.log(resultPrice);
button.addEventListener('click', () => {
    const data = `Стоимость покупки : ${resultPrice} руб`;
    result.textContent = (data);
});
alert('Стоимость покупки : ' + resultPrice + 'руб');