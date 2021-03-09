// 1. membuat object literal [tidak efektif untuk object yang banyak, karena menulis ulang dan memenuhi memory]
    // let mahasiswa1 = {
    //     nama: 'aldi',
    //     energi: 10,

    //     makan: function(porsi) {
    //         this.energi = this.energi + porsi;
    //         console.log(`halo ${this.nama}, selamat makan` );
    //     }

    // }

    // let mahasiswa2 = {
    //     nama: 'abas',
    //     energi: 10,

    //     makan: function(porsi) {
    //         this.energi = this.energi + porsi;
    //         console.log(`halo ${this.nama}, selamat makan` );
    //     }

    // }

// 2. function declaration [manajemen memory masih buruk walau tidak menulis ulang tapi, tetap mengulang code]
    // function Mahasiswa(nama, energi){
    //     let mahasiswa = {};
    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;

    //     mahasiswa.makan = function(porsi) {
    //         this.energi += porsi;
    //         console.log(`halo ${this.nama}, selamat makan!`)
    //     }

    //     mahasiswa.main = function(jam){
    //         this.energi -= jam;
    //         console.log(`halo ${this.nama}, selamat main!`)
    //     }

    //     return mahasiswa
    // }

    // let aldi = Mahasiswa('aldi', 10);
    // let abas = Mahasiswa('abas', 20);

// 2.1 function declaration optimize [manajemen memory efektif tapi tidak otomatis mendaftarkan method baru kedalam function]
    // const methodMahasiswa = {
    //     makan: function(porsi) {
    //         this.energi += porsi;
    //         console.log(`halo ${this.nama}, selamat makan!`)
    //     },

    //     main: function(jam){
    //         this.energi -= jam;
    //         console.log(`halo ${this.nama}, selamat main!`)
    //     },

    //     tidur: function(jam){
    //         this.energi += jam*2;
    //         console.log(`halo ${this.nama}, selamat tidur!`)
    //     },
    // }

    // function Mahasiswa(nama, energi){
    //         let mahasiswa = {};
    //         mahasiswa.nama = nama;
    //         mahasiswa.energi = energi;
            
    //         mahasiswa.makan = methodMahasiswa.makan;
    //         mahasiswa.main = methodMahasiswa.main;
    //         mahasiswa.tidur = methodMahasiswa.tidur;

    //         return mahasiswa
    //     }

    // let aldi = Mahasiswa('aldi', 10);
    // let abas = Mahasiswa('abas', 20);

// 2.2 function declaration optimize object.create [manajemen memory efektif dan sudah otomatis mendaftarkan method baru kedalam function]
    const methodMahasiswa = {
        makan: function(porsi) {
            this.energi += porsi;
            console.log(`halo ${this.nama}, selamat makan!`)
        },

        main: function(jam){
            this.energi -= jam;
            console.log(`halo ${this.nama}, selamat main!`)
        },

        tidur: function(jam){
            this.energi += jam*2;
            console.log(`halo ${this.nama}, selamat tidur!`)
        },
    }

    function Mahasiswa(nama, energi){
            let mahasiswa = Object.create(methodMahasiswa);
            mahasiswa.nama = nama;
            mahasiswa.energi = energi;

            return mahasiswa;
        }

    let aldi = Mahasiswa('aldi', 10);
    let abas = Mahasiswa('abas', 20);

// 3. constructor function
    // function Mahasiswa(nama, energi){
    //     this.nama = nama;
    //     this.energi = energi;

    //     this.makan = function(porsi) {
    //         this.energi += porsi;
    //         console.log(`halo ${this.nama}, selamat makan!`)
    //     }

    //     this.main = function(jam){
    //         this.energi -= jam;
    //         console.log(`halo ${this.nama}, selamat main!`)
    //     }
    // }

    // let aldi = new Mahasiswa('aldi', 10);
