// prototype adalah parent template yang sudah memiliki method

// 1. prototype
    // function Mahasiswa(nama, energi){
    //     this.nama = nama;
    //     this.energi = energi;
    // }

    // Mahasiswa.prototype.makan = function(porsi) {
    //     this.energi += porsi;
    //     return `halo ${this.nama}, selamat makan!`;
    // }

    // Mahasiswa.prototype.main = function(jam){
    //     this.energi -= jam;
    //     return `halo ${this.nama}, selamat main!`
    // }

    // Mahasiswa.prototype.tidur = function(jam){
    //     this.energi += jam*2;
    //     return `halo ${this.nama}, selamat tidur!`
    // }

    // let aldi = new Mahasiswa('aldi', 10);

// 2. class
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan!`;
    }
    main(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat main!`
    }
    tidur(jam){
        this.energi += jam*2;
        return `halo ${this.nama}, selamat tidur!`
    }
}

let aldi = new Mahasiswa('aldi', 20);