/* 
! 4 Pilar OOP

* terdapat empat pilar dalam OOP, yaitu encapsulation, abstraction, inheritance, dan polymorphism.

* 1 Encapsulation
* Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat.
* Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. Pada contoh
* kasus Mail kita tidak bisa langsung mengubah daftar contact, namun kita bisa menambahkannya melalui fungsi
* saat kirim pesan atau mengambil data tersebut melalui method showAllContacts.
*/

class Mail {
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send: ', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

/*
! 2. Abstraction
* Abstraksi bisa dibilang merupakan penerapan alami dari enkapsulasi. Abstraksi berarti sebuah objek hanya
* menunjukkan operasinya secara high-level. Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima,
* namun kita tidak perlu tahu seperti apa proses enkripsi dan dekripsi isi pesan, atau bagaimana sebuah daftar
* contact dapat bertambah.
*/

/*
* Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama.
* Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki
* juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb.
* Maka dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail.
* Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, whatsapp bisa membuat grup, mengirim 
* broadcast message sedangkan Email tidak.

/ Cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
class ChildClassName extends ParentClassName{}

/ Cara 2: menggunakan `prototype` jika menggunakan `function`
ChildClassNmae.prtotype = new ParentClassName()

*/

class WhatsApp extends Mail {
    constructor(author) {
        super(author);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    };
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Bussiness': 'Personal'}`;
    };
};

const wa1 = new WhatsApp(03224234234);
console.log(wa1.myProfile());
wa1.sendMessage('halo', 09023092039);

/*
! Polymorphism
* Polymorphism dalam bahasa Yunani berarti “banyak bentuk”. Sederhananya objek dapat memiliki bentuk atau implementasi yang
* berbeda-beda pada satu metode yang sama. Semua jenis Mail dapat mengirim pesan, namun whatsapp, email, sms tentunya memiliki
* cara yang berbeda dalam mengirim pesan, misalkan: whatsapp dapat mengirim pesan suara sedangkan yang lainnya tidak, email
* dapat menyaring konten spam saat mengirim pesan sedangkan yang lain tidak. Perbedaan bentuk atau cara mengirim pesan tersebut
* merupakan contoh dari polymorphism.
*/