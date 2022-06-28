/*
* Selain if statement di atas, JavaScript juga mendukung ternary operator atau conditional expressions. Dengan ini,
*  kita bisa menuliskan if-else statement hanya dalam satu baris.
*/

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda Mendapatkan diskon sebesar ${discount * 100}`);

/* output
Anda mendapatkan diskon sebesar 0%
 */

/*
* Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. Kemudian diikuti
* dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika
* kondisinya salah. Karena merupakan conditional expression, maka operand kedua dan ketiga harus mengembalikan nilai.
*/