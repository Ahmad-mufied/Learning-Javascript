
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
console.log(favorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

/**   
 *! Spread Operator 
 **fitur ini digunakan untuk menyebarkan nilai array atau
 **lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).
 **Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array-nya. 
 */

 console.log(...favorites);
 /* Output
Seafood Salad Nugged Soup
 */

/* 
console.log(...favorites);
* Sama seperti kita menuliskan kode seperti ini:
console.log(favorites[0], favoritesp[1], favoritesd[2], favorites[3]);
*/

// --------------------------------------------------------------------------------------------------------------------

/*
*Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.
*Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini
 */

const others = ['Cake', 'Pie', 'Donut'];
var allFavorites = [favorites, others];
console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

/*
 * Menggabungkan nilainya, variabel allFavorites menjadi array baru yang menampung dua array di dalamnya.
*/
var allFavorites = [...favorites, ...others];
console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

// ------------------------------------------------------------------------------------------------------------------
/*
* Selain array, spread operator juga bisa digunakan untuk object literals.
* Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
 */

const obj1 = { fisrtName: 'Obi-Wan', age: 30};
const obj2 = { lastName: 'Kenobi', gender: 'M'};
const newObj = {...obj1, ...obj2};
console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/


