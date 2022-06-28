/*
! Truthy & Falsy

* Di dalam if statement kita perlu memasukkan expression yang akan dievaluasi. Umumnya, expression tersebut mengembalikan nilai boolean 
* untuk menentukan kondisi true atau false. Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean? Jawabannya bisa.

* Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai truthy berarti nilai yang
* ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk truthy dan falsy?
* Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

* -- Number 0
* -- BigInt 0n
* -- String kosong seperti ```` autau ''
* -- null
* -- undefined
* -- NaN, atau Not a Number

* Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true. Berikut ini contohnya dalam kode:
*/

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kososng");
}

/* output:
Nama masih kosong
 */