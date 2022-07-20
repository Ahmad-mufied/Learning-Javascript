/*
! Overriding Method

* Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki
* oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class.

! Overriding Constructor

* Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di inheritance atau pewarisan, kita menemukan kasus seperti di bawah ini.


class WhatsApp extends Mail {
    constructor() {
        super();
        this.username = 'dicoding';
        this.BussiniessAccount = true;
    }
}

const wa1 = new WhatsApp('89878907690348');

* Sekarang bagiamana jika kita menambahkan username dan isBussinessAccount ke dalam constructor? jika kita membuat constructor baru kodenya akan seperti ini:

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const wa1 = new WhatsApp('dicoding', true, '90806788880983890');
*/

class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContact() {
        return this._contacts;
    }
} 

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const wa1 = new WhatsApp('dicoding', true, '0984503853090348');

console.log(wa1.form); // undefined

/*
* Ups! Hasilnya undefined. Hal itu terjadi karena constructor pada kelas parent kita sudah tergantikan dengan constructor turunannya. Solusinya, kita dapat 
* memanfaatkan operator super() dengan memberikan nilai yang dibutuhkan untuk mengeksekusi constructor parent-nya. Sehingga constructor parent tetap terpanggil dengan benar.

* Silakan ubah constructor pada kelas WhatsApp menjadi seperti ini.

constructor(username, isBussinessAccount, phoneNumber) {
    super(phoneNumber);
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
}
*/ 

class Telegram extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by Telegram');
    }
}

const telegram = new Telegram('ahmad', true, '0788454223523452345');
console.log(telegram.from);

/*
! Overriding Method

* Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang ada pada parent class. Pada dasarnya semua method yang ada pada kelas parent
* dapat diakses langsung di child kelasnya (as is).

super.methodNmae();

* Kadang kita tidak menggunakan sebuah method seutuhnya sama seperti parent kelasnya. Namun, kita dapat menambahkan perintah tertentu ataupun menguranginya. Berikut merupakan
* contoh override pada method sendMessage.

    class WhatsApp extends Mail {
        constructor(username, isBussinessAccount, phoneNumber) {
            super(phoneNumber);
            this.username = username;
            this.isBussinessAccount = isBussinessAccount;
        }
     
         // Overriding method => Melakukan Override Total
        sendMessage(msg, to) {
            console.log('Send by WA');
        }
    }

* Ketika kita memanggil method sendMessage pada contoh di atas, ia hanya akan mengeksekusi kode yang ada pada child class.

const wa1 = new WhatsApp('di', true, '089000999888');
wa1.sendMessage('halo', '089000999888');

* Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName().

sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log('Send by WA');
}

*/

telegram.sendMessage('halo', '097809834');

/* 
Catatan:

* super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.

* super.methodName(...) digunakan untuk memanggil parent method.
*/



