/*
 ! Destructuring Object
 * Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
 */

 const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
 };

const {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);

/*
 * Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi.
 * Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan
 * nilai properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya.
 * Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object
 * akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName,
 * lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan nilai profile.age.
  
 * Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan.
 * Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya.
        
const {lastName} = profile;

 */