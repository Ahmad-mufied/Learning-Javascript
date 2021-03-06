/* 
! Export Beberapa Nilai pada Node.js

* Pada materi sebelumnya kita telah mengetahui cara export nilai dari suatu berkas JavaScript. Lantas bagaimana jika kita perlu meng-export beberapa nilai sekaligus?

* Mari kita contohkan dengan menambahkan variabel isCoffeeMachineReady pada berkas state.js seperti berikut:

    const coffeeStock = {
        arabica: 100,
        robusta: 150,
        liberica: 200
    };
     
    const isCoffeeMachineReady = true;

* Kita tidak bisa melakukan export dari kedua nilai di atas dengan cara seperti di bawah ini:

    module.exports = coffeeStock;
    module.exports = isCoffeeMachineReady;

* Solusinya adalah kita tetap mengekspor satu nilai, tetapi kita akan memanfaatkan object literals ({ }).

    module.exports = {coffeeStock, isCoffeeMachineReady}; 

* Jika kita lihat nilai module pada console, nilai dari properti exports merupakan sebuah objek yang menampung nilai dari objek coffeeStock dan variabel isCoffeeMachineReady.


    Module {
      id: '.',
      path: '/home/dicoding/Playground/javascript/CoffeeMachine',
      exports: {
        coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
        isCoffeeMachineReady: true
      },
      parent: null,
      filename: '/home/dicoding/Playground/javascript/CoffeeMachine/state.js',
      loaded: false,
      children: [],
      paths: [
        '/home/dicoding/Playground/javascript/CoffeeMachine/node_modules',
        '/home/dicoding/Playground/javascript/node_modules',
        '/home/dicoding/Playground/node_modules',
        '/home/dicoding/node_modules',
        '/home/node_modules',
        '/node_modules'
      ]
    }

* Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan
* nilai yang di-import seperti ini:

const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

* Namun ingat, ketika menggunakan destructuring object pastikan penamaan variabel lokal sesuai dengan properti objeknya. Jika tidak, maka variabel tersebut akan menghasilkan undefined.
*/