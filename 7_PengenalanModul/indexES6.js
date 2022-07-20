import {coffeeStock as stock, isCoffeeMachineReady} from './stateES6.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(stock);