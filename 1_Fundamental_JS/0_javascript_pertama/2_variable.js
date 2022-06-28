/* 
! Variable

* Variabel umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola dalam sebuah program.
* Pada JavaScript setidaknya ada tiga cara untuk mendeklarasikan sebuah variabel, yaitu menggunakan keyword var, let, dan const.
* Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var
* yang dinilai kontroversial dan rawan menimbulkan bug.
*/

let lastName;
/*
* Kode untuk mendeklarasikan variabel seperti di atas juga dikenal dengan declaration statement.
* Selanjutnya, Anda bisa mengisi nilai variabel di atas menggunakan tanda sama dengan (=).
*/

lastName = 'Skywalker';
console.log(lastName);

/* output
Skywalker
*/

// * Anda juga bisa langsung menginisialisasi nilai variabel setelah mendeklarasikannya.
let fisrtName = 'Skywalker';
console.log(fisrtName);

/* output
Skywalker
*/

/* 
* Kode untuk menginisialisasikan nilai ke dalam sebuah variabel dengan tanda sama dengan (=) ini disebut dengan assignment expression.

* Kita kembali bertemu dengan istilah statement dan expression. Karena expression pasti menghasilkan nilai, sehingga mereka bisa muncul di mana pun
* dalam program JavaScript. Sementara itu, statement merujuk pada aksi. Sehingga, pada bagian kode tertentu yang membutuhkan nilai
* tidak bisa kita isi dengan sebuah statement. 
*/

/*
let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
*/

/*
*  Berikut beberapa aturan dalam penamaan variabel yang perlu Anda ketahui:
* -- Harus dimulai dengan huruf atau underscore (_).
* -- Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
* -- Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
* -- Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
*/


/*
* Const merupakan kependekan dari constant. Artinya, kita akan mendeklarasikan sebuah variabel dengan const ketika ingin variabel bernilai konstan 
* dan tidak bisa diubah setelah diinisialisasi nilainya.

* Jika menginisialisasi kembali nilai variabel yang menggunakan const, kita akan mendapati eror “TypeError: Assignment to constant variable.”
*/

const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */