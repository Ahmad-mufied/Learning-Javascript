/*
! Array every

* array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array 
* sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.

arr.every(callback(element, [index], [array]))

* Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi:
*/

const scores = [70, 85, 90];
const minimumScore = 75;

const examPassed = scores.every(score => score >= minimumScore); // array every
const somePassed = scores.some(score => score >= minimumScore); // array some
console.log(examPassed);
console.log(somePassed)