/*
! 1. Pure Function

* Salah satu konsep besar dari paradigma FP adalah Pure Function. Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi
* untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan
* sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.
*/

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80
console.log('');

/*
* Menurut Anda, apakah fungsi hitungLuasLingkaran merupakan pure function atau impure function (lawan dari pure function)? Jika Anda menjawab impure function,
* Anda tepat sekali!

* Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah,
* maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

* Lantas, bagiamama cara membuat fungsi tersebut menjadi pure?
*/

const hitungLuasLingkaran1 = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran1(4)); // 50.24
console.log(hitungLuasLingkaran1(4)); // 50.24
console.log(hitungLuasLingkaran1(8)); // 200.96
console.log(hitungLuasLingkaran1(8)); // 200.96
console.log('');

/*
* Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. Dengan begitu
* fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.

* Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja.
* Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

* Untuk lebih jelasnya, coba lihat contoh kode berikut:
*/

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);
console.log({
    person,
    newPerson,
})

/*
* Fungsi createPersonWithAge bertujuan untuk membuat objek person baru dengan tambahan properti age dari objek person yang ada. Namun alih-alih hanya membuat objek baru,
* ia juga malah mengubah nilai dari objek lama. Nah, hal inilah yang menyebabkan fungsi createPersonWithAge bukanlah pure function.

* Lalu bagaimana cara membuat fungsi tersebut menjadi pure? Mudah, kita manfaatkan destructuring object (spread operator) daripada mengubah objek tersebut secara langsung.
*/

console.log('');

const createPersonWithAge1 = (age, person1) => {
    return {...person1, age};
}

const person1 = {
    name: 'Bobo'
}

const newPerson1 = createPersonWithAge1(18, person1);
console.log(newPerson1)
console.log({
    person1,
    newPerson1
});
console.log('')

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/

/* 
* Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.
* -- Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
* -- Hanya bergantung pada argumen yang diberikan.
* -- Tidak menimbulkan efek samping.
* Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.

*/