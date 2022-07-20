/*
! Array Map

* Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari
* sebuah data bertipe array dan menerima satu buah callback function.

['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => {});

* Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

['Harry], 'Ron', 'Jeff', 'Thomas'].map((name) => {});

* Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari
* kembalian callback function-nya. Karena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru.
*/

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {return `${name}!`});

console.log(newArray);