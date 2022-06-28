/*
* Dari beberapa cara melakukan proses loop pada JavaScript, “for” merupakan salah satu cara yang banyak digunakan.
* Struktur dasar dari for tampak seperti berikut:

for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    / do something
}
*/

for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/

/*
* Terdapat tiga bagian utama dalam sintaks for di atas:
* -- Pertama, variabel i sebagai index iterasi. Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
* -- Kedua, operasi perbandingan. Pada bagian ini, JavaScript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan.
*    Jika bernilai true, maka kode di dalam blok for akan dijalankan.
* -- Ketiga, increment/decrement. Di sini kita melakukan penambahan atau pengurangan variabel iterasi. Jadi, pada contoh di atas variabel i
*    akan ditambah dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika kita mengubah nilainya, proses perulangan
*    dapat terus berjalan selama kondisinya terpenuhi.
*/