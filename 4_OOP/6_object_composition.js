/*
! Object Composition

* Object composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class. Prinsip ini didasarkan
* pada kumpulan perilaku (method/function) yang sudah kita definisikan. Sehingga, ketika ingin membuat alur bisnis lain dengan beberapa
* perilaku (method) yang sama, kita dapat menggunakan fungsi yang sudah ada tanpa melakukan inheritance/pewarisan.

* Pada dasarnya konsep yang harus dilakukan adalah :

* 1. Memisahkan fungsi-fungsi umum yang biasa digunakan.

*/
const yourGenericAction  = paramas => ({
    actionA: () => { /** do action A **/ },
    actionB: () => { /** do action B **/ },
});

//* 2. Membuat Class seperti biasa.

const YourClassName = (paramA, paramB) => {

}

//* 3. Kita dapat menyimpan atribut yang kita punya ke dalam sebuah object, biasanya seorang engineer menggunakan konstanta dengan nama self
//* atau state untuk menampung attribute.

const YourClassName1 = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };
}

//* 4. Menambahkan perilaku (method/function) yang hanya ada pada kelas tersebut.

const YourClassName2 = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };

    const yourSpecificActions = self => ({
        specificActionA: { /** do action A **/ },
    });
}

//* 5. Membuat kumpulan attribute, generic method, dan method menjadi satu objek.

const YourClassName3 = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };

    const yourSpecificActions = self => ({
        specificActionA: { /**do action A **/},
    });

    return Object.assign(self, yourSpecificActions(self), yourGenericAction(self))
}

//* Sebagai contoh, dari hirarki Mail yang sudah kita buat sebelumnya, kita akan merombak dan membuatnya dengan pendekatan Object composition.

// [1] list of abstraction

const canSendMessage = self => ({
    sendMessage: () => console.log('send message', self.message)
 });

 const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
 });

 // [2] create object composition
 const personalEnterprise = (from, message, store) => {
    // [3] attributes
    const self = {
        from,
        message,
        store,
    };
    // [4] method
    const personalEnterpriseBehavior = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehavior(self), canSendMessage(self), checkIsValidPhone(self));
 };

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); // catalog has created: Dicoding Store
pe1.sendMessage(); // send message: hai produk baru nih

/*
* Penjabaran kode di atas: 

* 1. Kita membuat sebuah abstraksi untuk method-method yang umum digunakan (di sini misalkan method mengirim pesan, dan validasi nomor hp).
* 2. Kita membuat sebuah kelas baru dengan nama personalEnterprise, di mana seperti biasa kita dapat menggunakan parameter yang akan digunakan.
* 3. Pada  object composition ini, penggunaan parameter biasa digunakan untuk mendaftarkan attribute-attribute dari kelas tersebut. Pada contoh di atas,
*    kita mengumpulkan attribute tersebut pada konstanta bernama self atau state.
* 4. Method, kita dapat juga menambahkan method/fungsi yang spesifik hanya ada pada kelas tersebut (kapabilitasnya hanya pada kelas tersebut / tidak umum).
* 5. Proses pembuatan object dengan perintah Object.assign(attribute, method1, method2, methodN).

* Dari contoh kode di atas maka kita dapat membuat sebuah object dengan nama personalEnterprise tanpa harus melakukan pewarisan.
*/