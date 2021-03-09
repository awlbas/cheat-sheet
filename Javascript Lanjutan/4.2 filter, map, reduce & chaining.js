const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// mencari angka >= 3
const angkaTiga = angka.filter(a => a >= 3);
console.log(angkaTiga);

// kalikan semua angka dengan 2
const kaliDua = angka.map(a => a*2);
console.log(kaliDua);

// jumlah seluruh elemen array
const jumlah = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(jumlah);

// method chaining: cari angka>5, kalikan 3, jumlahkan
const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce( (acc, curr) => acc + curr, 0 );
console.log(hasil);