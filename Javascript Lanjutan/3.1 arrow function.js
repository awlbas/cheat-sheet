// function expression => anonymous function
    // let tampilPesan = function (nama) {
    //     alert('halo' + nama);
    // }
    // tampilPesan('aldi');

// arrrow function | versi lebih ringkas dari function expression
    // let tampilPesan = (nama) => {
    //     alert('halo' + nama);
    // }
    // tampilPesan('aldi');

// arrow function to implisit return
    // let tampilNama = (nama, waktu) => {
    //     return `selamat ${waktu}, ${nama}`;
    // }
// implisit return
    // let tampilNama = nama => `halo ${nama}`;
    // let tampilNama = () => 'hello world';

// contoh penggunaan arrow function
    let mahasiswa = ['aldi','abas','baskara'];

    // let jumlahHuruf = mahasiswa.map(function (nama) {
    //     return nama.length;
    // });
    // console.log(jumlahHuruf);

    // let jumlahHuruf = mahasiswa.map( nama => nama.length)
// return Object
let jumlahHuruf = mahasiswa.map( nama => ({nama, jumlahHuruf:nama.length}))
console.table(jumlahHuruf);