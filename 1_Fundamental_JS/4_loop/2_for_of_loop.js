/* 
! For of loop

* Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6).
* Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. 

for(arrayItem of myArray) {
    / do something
}

* for of tidak membutuhkan banyak statement untuk melakukan looping pada array. Dengan for..of nilai tiap array akan diinisialisasi pada 
* variabel baru yang kita tentukan pada tiap proses looping-nya. Jumlah proses looping-nya pun akan menyesuaikan dengan ukuran dari array.
* Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray, akses tiap nilainya, dan simpan pada variabel arrayItem”.
* Pada proses looping kita gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArray.

*/


let myArray = ["Luke", "Han", "Chewbacca", 'Leila'];

for(const arrayItem of myArray) {
    console.log(arrayItem);
}

/* output
Luke
Han
Chewbacca
Leia
*/