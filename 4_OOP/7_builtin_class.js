/*
* Built-in Class

* Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String. Built-in class tersebut dapat digunakan 
* untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.

* Date merupakan built-in object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Ini sangat membantu
* ketika dalam program yang kita buat terdapat penggunaaan dan manipulasi tanggal dan waktu.

* Untuk menggunakan kita dapta meng-instansiasi Date Object tersebut dengan 4 cara:

* 1. Tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date();

* 2. Parameter tanggal dalam bentuk string, misal 'January 01, 2021'
const myDate = new Date(dateSting);

* 3. Parameter dalam bentuk number, misal 8740000
const myDate = new Date(miliseconds);

* 4. Parameter tanggal dalam bentuk number (7 parameter), [hour, minute, milisecond] bersifat opsional
const myDate = new Date(year, month, hour, minute, second , milisecond);
*/

const myDate = new Date();
console.log(myDate);

//* Nilai kembaliannya adalah bulan dalam bentuk angka (0 sampai 11), 0 berarti Januari. 
const month = myDate.getMonth();
console.log(month);

//* Nilai kembaliannya adalah tahun, misalkan 2021.
const fullYear = myDate.getFullYear();
console.log('tahun:',fullYear);

//* Nilai kembaliannya adalah tanggal dari 1 sampai 31.
const date = myDate.getDate();
console.log('tanggal:',date);

//* Nilai kembaliannya adalah jam dari 0 sampai 23
const hours = myDate.getHours();
console.log('Jam:', hours);

//* Nilai kembaliannya adalah menit dari 0 sampai 59 Nilai kembaliannya
const minutes = myDate.getMinutes();
console.log('Minutes:', minutes);

//* Nilai kembaliannya adalah detik dari 0 sampai 59
const second = myDate.getSeconds();
console.log('Seconds:', second);

//* getMilliseconds()
const milisecond = myDate.getMilliseconds();
console.log('miliseconds: ', milisecond);

//* Nilai kembaliannya adalah waktu dalam bentuk epoch mili-detik (dimulai dari 1 January, 1970 yang berarti 0)
const time = myDate.getTime();
console.log(time);

//* Nilai kembaliannya adalah hari dalam seminggu dari 0 sampai 6. 0 berarti minggu
const day = myDate.getDay();
console.log(day);

//* Selain itu, juga terdapat static method yang dapat digunakan tanpa perlu melakukan instansiasi, yaitu:

//* 1. digunakan untuk mengubah tanggal dalam format string, menjadi epoch miliseconds
const dateParser = Date.parse('2022-07-03');
console.log(dateParser);

//* 2. digunakan untuk mengubah tanggal dalam format integer/number, menjadi epoch miliseconds
const utc = Date.UTC(2021, 01, 01);
console.log(utc);

// parameter birthday dapta berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghsilkan nilai miliseconds saat ini

    const diff_ms = today - birtday.getTime(); // menghitung nilai milisecond hari ini dan tanggal lahir
    const difDate = new Date(diff_ms);

    return difDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge('2002-04-04')); // 20 tahun

/* 
* Selain Date, kita juga dapat menggunakan built-in class javascript yang lainnya.
*/

const listOfContent = [1, 2, 'President', {}];
console.log(Array.isArray(listOfContent));
// result is true

const splitText = '12:20:00'.split(':');
console.log(splitText);