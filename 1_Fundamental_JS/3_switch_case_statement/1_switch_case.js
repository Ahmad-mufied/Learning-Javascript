/*
! Switch Case Statement

    switch (expression) {
      case value1:
        / do something
        break;
      case value2:
        / do something
        break;
      ...
      ...
      default:
        / do something else
    }

* Tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi. Kemudian untuk setiap kondisi yang mungkin terjadi,
* kita masukkan keyword case diikuti dengan nilai yang valid. Jika kondisi pada case sama dengan variabel pada switch, maka blok kode
* setelah titik dua (:) akan dijalankan. Keyword break digunakan untuk keluar dari proses switch. Terdapat satu case bernama default yang
* memiliki fungsi yang sama dengan keyword else pada control flow if-else. Jika tidak ada nilai yang sama dengan variabel pada switch, maka
* blok kode ini akan dijalankan.

*/

let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

/* 
Bonjour!
*/