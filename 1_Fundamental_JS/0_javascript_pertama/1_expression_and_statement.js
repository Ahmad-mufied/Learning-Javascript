/*
! Expression dan Statement
* JavaScript membagi instruksi secara umum menjadi dua jenis, yaitu expression dan statement.
* Expression adalah unit kode yang dapat dievaluasi menjadi suatu nilai. Untuk lebih mudahnya, perhatikan contoh kode berikut:
*/

5; //* Baris kode ini merupakan expression karena interpreter akan membaca kode ini dan menghasilkan nilai 5.
2 + 3; //* Baris kode ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan menghasilkan nilai 5.

/*
* Sementara itu, statement adalah instruksi untuk melakukan sebuah aksi tertentu. Aksi ini bisa termasuk membuat variabel,
* melakukan perulangan, pengecekan kondisi, dll.
*/

var yourName;
let yourAge;
const numberOfDays = null;  // declaration statement

/*
* Unlike var or let, you must specify a value for a const declaration.
* Do not use const if you weren't meaning to declare a constant. Maybe you meant to declare a block-scoped variable with let
* or global variable with var. Both don't require an initial value. 

* Yang perlu Anda ingat adalah:
* -- Expression merupakan kode yang menghasilkan nilai.
* -- Statement menunjukkan aksi yang dilakukan.

*/