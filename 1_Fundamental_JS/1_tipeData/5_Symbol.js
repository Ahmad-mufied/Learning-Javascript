/*
! Symbol

* Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik.
* Ketika membuat Symbol, kita bisa memberikan deskripsi atau nama symbol seperti ini:
*/

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

/*
* Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan
* nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda. 
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/

/* 
* Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan
* berbagai struktur data. Kita akan segera bertemu dan mempelajari tentang object pada modul Data Structure.
*/