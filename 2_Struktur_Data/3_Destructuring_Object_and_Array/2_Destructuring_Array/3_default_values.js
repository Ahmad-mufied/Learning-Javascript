/* 
! Default Values

* Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array,
* maka variabel tersebut akan bernilai undefined.
* Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang
* tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.
*/

const favorites = ["Seafood"];
const [myFood, herFood = "Salad"] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/