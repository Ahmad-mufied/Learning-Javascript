/*
! Destructuring Object & Array
* JSON (JavaScript Object Notation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini

    [
        {
            "id": 14,
            "title": "Belajar Fundamental Aplikasi Android",
            "author": "Google ATP"
        },
        {
            "id": 51,
            "title": "Belajar Membuat Aplikasi Android untuk Pemula",
            "author": "Google ATP"
        },
        {
            "id": 123,
            "title": "Belajar Dasar Pemrograman Web",
            "author": "Dicoding Indonesia"
        },
        {
            "id": 163,
            "title": "Belajar Fundamental Front-End Web Development",
            "author": "Dicoding Indonesia"
        }
    ]

    * struktur tersebut dibangun dari array dan object.
    * kedua hal ini banyak digunakan untuk mengelola data pada JavaScript untuk memudahkan developer,
    * ES6 menambahkan fitur untuk destructuring object dan array.
    * 
    * Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai
    * dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
    

    const profile = {
        firstName: "John",
        lastName: "Doe",
        age: 18
    }
     
    const firstName = profile.firstName
    const lastName = profile.lastName
    const age = profile.age
     
    console.log(firstName, lastName, age)
     
    ? output:
    ? John Doe 18
    
    * Mungkin mengekstraksi nilai dari object dengan langkah ini terlihat mudah, tetapi bayangkan jika object memiliki
    * banyak properti dan harus melakukan hal tersebut secara manual satu persatu. Terlalu banyak kode yang dituliskan berulang
    * 
    * Itulah alasan ES6 menambahkan fitur yang memudahkan kita untuk destructuring object maupun array. Ketika kita 
    * ingin memecah struktur data menjadi bagian-bagian yang lebih kecil, kita akan dipermudah untuk mendapatkan data yang diinginkan.

 */