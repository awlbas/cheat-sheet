// 1. membuat object literal
    let mahasiswa1 = {
        nama: 'aldi',
        energi: 10,

        makan: function(porsi) {
            this.energi = this.energi + porsi;
            console.log(`halo ${this.nama}, selamat makan` );
        }

    }

    let mahasiswa2 = {
        nama: 'abas',
        energi: 10,

        makan: function(porsi) {
            this.energi = this.energi + porsi;
            console.log(`halo ${this.nama}, selamat makan` );
        }

    }

// 2. function declaration
    function Mahasiswa(nama, energi){
        let mahasiswa = {};
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;

        mahasiswa.makan = function(porsi) {
            this.energi += porsi;
            console.log(`halo ${this.nama}, selamat makan!`)
        }

        mahasiswa.main = function(jam){
            this.energi -= jam;
            console.log(`halo ${this.nama}, selamat main!`)
        }

        return mahasiswa
    }

    let aldi = Mahasiswa('aldi', 10);
    let abas = Mahasiswa('abas', 20);

// 3. constructor function
    function Mahasiswa(nama, energi){
        this.nama = nama;
        this.energi = energi;

        this.makan = function(porsi) {
            this.energi += porsi;
            console.log(`halo ${this.nama}, selamat makan!`)
        }

        this.main = function(jam){
            this.energi -= jam;
            console.log(`halo ${this.nama}, selamat main!`)
        }
    }

    let aldi = new Mahasiswa('aldi', 10);
