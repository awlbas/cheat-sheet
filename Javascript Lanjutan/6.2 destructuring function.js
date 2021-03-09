// function penjumlahanPerkalian(a,b) {
//     return [a+b, a*b];
// }

// native
    // const jumlah = penjumlahanPerkalian(2,3)[0];
    // const kali = penjumlahanPerkalian(2,3)[1];
    // console.log(jumlah, kali);

// destructuring
    // const [jumlah, kali] = penjumlahanPerkalian(2,3);
    // console.log(jumlah, kali);

// ------------

// array harus berurutan
    // function kalkulasi (a,b) {
    //     return [a+b,a-b,a*b,a/b];
    // }
    // const [tambah,kurang,kali,bagi,persen='tidak ada'] = kalkulasi(2,3);
    // console.log(bagi, persen);

// object tidak harus berurutan
    // function kalkulasi (a,b) {
    //     return {
    //         tambah:a+b,
    //         kurang:a-b,
    //         kali:a*b,
    //         bagi:a/b};
    // }
    // const {kurang,tambah,kali,bagi,persen='tidak ada'} = kalkulasi(2,3);
    // console.log(bagi, persen);

// distruction function argument
const mhs1 = {
    nama: 'aldi',
    umur: 33,
    email: 'aldi@mail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75,
    },
}
// cara pertama
    // function cetakMhs(nama, umur) {
    //     return `halo ${nama} umurmu ${umur} tahun`
    // }
    // console.log(cetakMhs(mhs1.nama, mhs1.umur));

// cara kedua
    // function cetakMhs(mhs) {
    //     return `halo ${mhs.nama} umurmu ${mhs.umur} tahun`
    // }
    // console.log(cetakMhs(mhs1));

// cara destructuring
function cetakMhs( {nama, umur, nilai:{tugas,uts,uas} } ) {
    return `halo ${nama} umurmu ${umur} tahun dan nilai uas adalah ${uas}`
}
console.log(cetakMhs(mhs1));