/*
! Property & Method

! 1.Properti
* Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- bahkan bisa juga berbentuk
* object dan fungsi. Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. Sebagai contoh:

*/

// Cara 1

class Mail {
    constructor() {
        this.form = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'this values';
    }

    sendMessage(msg, to) {
        console.log(`You send: ${msg} to ${to} from ${this.form}`);
        this.contacts.push(to); // Menyimpan kontak baru
    };

}

// Cara 2
function Mail1() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherProperty = 'this values';
};

Mail1.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); // Menyimpan kontak
}

/*
* Contoh class di atas memiliki 3 (tiga) property dan method. Yang perlu diingat, this merupakan representasi bahwasanya variable yang ditunjuk adalah
* atribute yang bersifat global dan menempel dengan objek tersebut. Sehingga, variabel dapat diakses dari method ataupun property di dalam kelas tersebut
* dengan menambahkan this di depannya. Sebagai gambaran, kita akan coba ubah kode di atas menjadi seperti berikut ini.
*/

class Mail3 {
    constructor() {
        this.from = 'Pengirim@dicoding.com';
        this.contacts = [];
    }

    sendMessage(msg, to, from) {
        console.log(`You Send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    }
}

const mail3 = new Mail3();
mail3.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

/*
* Contoh di atas menunjukan bahwa ketika kita ingin menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus
* menggunakan this.attributeName.

* Dalam OOP sendiri, properti dibagi menjadi 2:
* -- Internal interface : method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
* -- External interface : method dan property yang dapat diakses di luar kelas itu sendiri.

* Sedangkan di dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:
* -- Public : dapat diakses dari mana pun.
* -- Private : hanya dapat diakses dari dalam kelas itu sendiri.

* Secara default, semua atribut yang didefinisikan adalah public. Sehingga semua attribute tersebut dapat diakses oleh objek yang telah meng-instansiasi
* kelas tersebut. Sebagai contoh:
*/

const mail = new Mail();
mail.from; // 'pengirim@dicoding.com'
mail.contacts // ['penerima@dicoding.com']
mail.sendMessage('hallo', 'penerima@dicoding.com'); // method mengirim pesan

/* 
* Dari contoh tersebut, bagaimana jika kita ingin mengubah attribute contacts pada class Mail menjadi tidak bisa diakses di luar class atau oleh objek yang menjadi instansiasi class tersebut?


* cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
    * var contacts = [];
* contoh
function Mail() {
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
}

* cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
    * this._contacts = []
* contoh
class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}
 

* cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
    *#contacts = [];
* contoh
class Mail {
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}

* Dari contoh di atas, ketika kita ingin mengakses attribute contacts secara langsung melalui objek yang menginisiasi maka return-nya adalah undefined.
* Ketiga cara tersebut juga dapat digunakan pada sebuah method atau function.

const mail = new Mail();
 
mail.contacts; // undefined

! 2. Class Method
* Class Method adalah function atau method yang ada di dalam sebuah object. Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan.
* Contoh class mail di atas, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu.

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com

* Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instansiasi terlebih dahulu, misalkan:
Mail.sendMessage('hallo', 'penerima@dicoding.com');

output-nya error:
TypeError: Mail.sendMessage is not a function


! 3. Static Method
* Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama method-nya
* secara langsung (NamaClass.namaMethod()).
*/

class Mail4 {
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }
}

console.log(Mail4.isValidPhone(000000000000000));  // true

/*
* Dari contoh di atas, kita dapat memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu.

! 4. Contractor
* Ketika kita membuat sebuah objek, adakalanya karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali diinisiasi. Constructor adalah
* sebuah method/function yang dijalankan pertama kali ketika object dibuat. Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah
* objek diinisiasi. Maka dalam JavaScript ada dua cara, yaitu:

* Cara 1, jika menggunakan statemen class
class YourClassName{
    constractor(params1, params2, ...) {
       / do something here
    };
}

* Cara 2, jika menggunakan statement function
function Mail(params1, params2, ...) {
    this.yourPropertyName = params1;
    / do something here
}
*/

// * Cara 1
class Mail5 {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };
}


// * Cara 2
function Mail5(author) {
    this.author = author;
    console.log('is instantiated', author);
}


// * Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:
const mail5 = new Mail5('email@example.com');

// * Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita:

// const mail5 = new Mail5(9766875678979);
// const mail5 = new Mail5('mail@example.com');