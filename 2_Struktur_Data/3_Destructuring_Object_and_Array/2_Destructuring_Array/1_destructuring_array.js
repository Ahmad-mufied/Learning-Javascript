/*
 ! Destructuring Array

 * Destructuring array serupa dengan destructuring object. Object menggunakan tanda 
 * kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah 
 * destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/

/*
* Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array. Contohnya, 
* jika ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk
* menampung nilai array pertama, kedua, atau pun keempat. Kita bisa melakukannya dengan membiarkan 
* index array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal). Lebih lanjut,
* tanda koma (,) tetap diperlukan untuk menunjukkan posisi index-nya 
*/

//? const [, , thirdFood] = favorites;

/* output:
Nugget
*/