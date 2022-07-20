const {state,checkAvailability, checkStock, boilWater, grindCoffeeBeans, brewCoffee} = require('./11_PromiseAll');

/* 
! Handle onRejected using async-await

* Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). Lantas bagaimana jika promise
* gagal dilakukan (onRejected)? Caranya cukup sederhana. Kembali lagi kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau
* tolakan dengan menggunakan try...catch.

* Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah promise, untuk menempatkannya di dalam blok try seperti ini:


async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    }
}

* Dengan begitu kita dapat menggunakan blok catch untuk menangani jika promise gagal dilakukan (onRejected).

async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeCoffee();

/* output
Biji kopi habis!

! Chaining Promise using async-await

* Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan async/await? Jawabannya adalah
* sama seperti ketika kita mendapatkan nilai dari function yang berjalan secara synchronous.

* Dengan pendekatan async-await, maka kode mesin kopi kita akan menjadi seperti ini:
*/

// async function makeEspresso() {
//     try {
//         await checkAvailability();
//         await checkStock();
//         const coffee = await brewCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }

// makeEspresso();

/* output
Membuatkan kopi Anda...
Kopi sudah siap!
*/

/* 
* Terakhir untuk menjalankan beberapa promise sekaligus secara bersamaan dengan Promise.all, kita bisa menuliskannya seperti ini:
*/
console.log('')

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectionReason) {
        console.log(rejectionReason);
    }
}

makeEspresso()

/*
* Async/await ini menjadi fitur baru yang sangat berguna. Terlebih untuk kita yang lebih nyaman menangani proses asynchronous
* dengan menggunakan gaya synchronous.
*/