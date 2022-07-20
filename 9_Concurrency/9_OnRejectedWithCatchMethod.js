/*
! onRejected with Catch Method

* Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut separation of concerns atau pemisahan masalah.
* Pemisahan masalah berarti mengorganisasikan kode ke dalam bagian-bagian yang berbeda berdasarkan tugas tertentu. Hal ini
* akan memudahkan kita kelak mencari kode yang salah jika aplikasi tidak bekerja dengan baik.

* Perlu diketahui bahwa method .then() akan mengembalikan nilai promise yang sama dengan ketika objek promise itu dipanggil.
* Melalui sifatnya ini, daripada kita menetapkan logika resolve dan reject pada satu method then(), kita dapat memisahkan
* kedua logika tersebut menggunakan masing-masing method then() seperti ini:

    checkStock()
      .then(handleSuccess)
      .then(null, handleFailure);

* Namun untuk menetapkan onRejected handler, kita perlu memberikan nilai null pada parameter pertama method .then(). Hal ini
* sedikit merepotkan bukan? Solusinya kita dapat menggunakan method lain, yakni .catch().

* Method .catch() mirip seperti .then(). Namun, method ini hanya menerima satu parameter function yang digunakan untuk
* rejected handler. Method catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected. Berikut contoh
* penggunaan method .catch():

    checkStock()
      .then(handleSuccess)
      .catch(handleFailure);

* Dengan menggunakan method catch(), kita dapat menerapkan prinsip separation of concerns sekaligus membuat kodenya menjadi lebih rapi.
*/

const stock = {
    coffeeBeans: 500,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 20 && stock.water >= 200) {
            resolve('Stock Cukup. Bisa membuat kopi.');
        } else {
            reject('Stock tidak cukup');
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionValue => {
    console.log(rejectionValue)
}

checkStock()
    .then(handleSuccess)
    .catch(handleFailure);

console.log('-------------------------------------------------------------')
const sparepart = {
    ban: 12,
    kaca: 15
}

const checkSparePart = () => {
    return new Promise((resolve, reject) => {
        if (sparepart.ban >= 4 && sparepart.kaca >= 5) {
            resolve('Oke Sparepart cukup semua');
        } else {
            reject('Waduh Sparepart kurang nih..');
        }
    })
}

const handleEnough = resolvedValue => {
    console.log(resolvedValue);
}

const handleNotEnough = rejectionValue => {
    console.log(rejectionValue);
}

checkSparePart()
    .then(handleEnough)
    .catch(handleNotEnough);