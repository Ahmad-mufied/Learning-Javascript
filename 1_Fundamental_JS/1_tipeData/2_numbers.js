/*
! Numbers

* Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya:

 let x = 10;

* Jika angka tersebut merupakan sebuah bilangan desimal, maka kita bisa gunakan tanda titik pada pecahan bilangannya.
*/

let x = 10;
console.log(typeof(x))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/

/* 
* Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement
* digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

* Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:
* -- Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
* -- Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */