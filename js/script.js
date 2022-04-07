const userKm = parseInt(prompt('Quanti km devi percorrere?'));
console.log(userKm, typeof(userKm));

const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge, typeof(userAge));

const priceKm = userKm * 0.21
console.log(priceKm);

let discount;

if (userAge < 18) {
    discount = (priceKm * 20) / 100;
    console.log(discount);
} else if (userAge > 65) {
    discount = (priceKm * 40) / 100;
    console.log(discount);
} else {
    discount = 0;
    console.log(discount);
}

const finalPrice = priceKm - discount
console.log(finalPrice);
const priceSimple = finalPrice.toFixed(2)

let message;

if (finalPrice === priceKm) {
    message = `Il tuo biglietto costa: € ${priceSimple}`
} else {
    message = `Il tuo biglietto costa: € ${priceSimple} (è stata applicata una tariffa speciale in base alla tua età!)`
}

document.getElementById('ticket-price').innerHTML = message