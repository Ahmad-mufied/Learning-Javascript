/*
! While and do-While

* Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan
* menjalankan kode di dalam blok while ketika bernilai true.

* Untuk menampilkan angka 1 sampai 100 dengan while kita bisa menulis kode seperti berikut:
*/

let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

// * while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.

// * Bentuk lain dari while adalah perulangan do-while.

do {
    console.log(i);
    i++;
} while (i <= 100);

/* 
* Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan, sedangkan do-while akan mengevaluasi boolean expression
* setelah blok kodenya berjalan. Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.
*/