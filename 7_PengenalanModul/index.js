const {coffeeStock, isCoffeeMachineReady} = require('./state');

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

const makeCoffee = (type, miligram) => {
    if (coffeeStock[type] >= miligram) {
        console.log('Kopi berhasil dibuat!');
    } else {
        console.log("Biji kobi Habis");
    }
}

makeCoffee("robusta", 80)

/* output
Kopi berhasil dibuat!
*/