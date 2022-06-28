/* 
 ! Destructuring Assignment
 * Kita juga bisa melakukan destructuring assignment pada array.
 * Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
 */

 const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

 let myFood = "Ice Cream";
 let herFood = "Noodles";

 [myFood, herFood] = favorites;

 console.log(myFood);
 console.log(herFood);

 /*
 * Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel.
 * Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting .
 */

var a = 1;
var b = 2;
var temp;

console.log("Before swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("After swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

/* 
* Untuk melakukan pertukaran nilai, kita membutuhkan variabel penengah. Pada contoh kode di atas
* menggunakan variabel temp. Variabel penengah dibutuhkan untuk menyimpan data sementara pada
* variabel yang akan ditukar. Hal ini menjadi kurang efektif karena kita harus membuat variabel
* baru yang sebenarnya hanya bersifat sementara.

* Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah
* tanpa membuat variabel tambahan.
*/

let c = 1;
let d = 2;

console.log("Before swap");
console.log("Nilai a: " + c);
console.log("Nilai b: " + d);

[c, d] = [d, c]

console.log("After swap");
console.log("Nilai a: " + c);
console.log("Nilai b: " + d);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/


