/*
! Destructuring Assignment
* Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel. Namun, pada kasus tertentu 
* mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.
 */

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
};

let firstName = "Dimas";
let age = 20;

// Menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile);

console.log(firstName);
console.log(age);

/* output:
John
18
*/

/* 
* Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object
* di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal
* akan membuat JavaScript mengira kita membuat block statement, sementara block statement
* tidak bisa berada pada sisi kiri assignment.

 tidak bisa karena JavaScript mengira kita membuat block statement
 block statement tidak bisa berada pada sisi kiri assignment
 {firstName, age} = profile;

*/

