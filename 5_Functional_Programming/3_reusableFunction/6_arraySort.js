/*
! Array Sort

* array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai.
* Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

arr.sort([compareFunction])

[...] adalah opsional parameter

* Contoh sederhananya adalah sebagai berikut:3
*/

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort()
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

/*
* Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan
* sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.
*/

const compareNumber = (a, b) => {
    return a-b;
}

const sorting = array1.sort(compareNumber);
console.log(sorting)

/**
output
[ 1, 4, 30, 1000 ]
**/    