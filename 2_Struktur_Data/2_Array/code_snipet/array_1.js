let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[1]);

// menambahkan data ke dalam array, kita bisa menggunakan metode push().
// Fungsi push ini akan menambahkan data di akhir array.
myArray.push('JavaScript');
console.log(myArray);

// mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
myArray.pop();
console.log(myArray);

// shift() digunakan untuk mengeluarkan elemen pertama dari array
myArray.shift();
console.log(myArray);

// unshift() digunakan untuk menambahkan elemen di awal array.
myArray.unshift('Apple');
console.log(myArray);

// Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword delete.
// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
delete myArray[1];
console.log(myArray);

// Untuk menghapus elemen, gunakan metode splice()
myArray.splice(2, 1); // Untuk menghapus elemen, gunakan metode splice()
console.log(myArray);