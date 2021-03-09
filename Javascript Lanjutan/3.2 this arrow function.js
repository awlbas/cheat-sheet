// constructor function
    // const Mahasiswa = function () {
    //     this.nama = 'aldi';
    //     this.umur = 17;
    //     this.sayHello = function() {
    //         console.log(`halo ${this.nama}, ${this.umur}`);
    //     }
    // }
    // const aldi = new Mahasiswa();

// arrow function | di dalam arrow function tidak ada konsep this, maka akan dicari pada lexical scope nya yaitu function biasa yg memiliki konsep this
    // const Mahasiswa = function () {
    //     this.nama = 'aldi';
    //     this.umur = 17;
    //     this.sayHello = () => {
    //         console.log(`halo ${this.nama}, ${this.umur}`);
    //     }
    // }
    // const aldi = new Mahasiswa();

// pada object literal this akan dicari ke lexical scope yaitu window, dan akan berisi window/undefined
    // const mhs1 = {
    //     nama: 'aldi',
    //     umur: 17,
    //     sayHello: () => {
    //         console.log(`halo ${this.nama}, ${this.umur}`);
    //     }
    // }
// contoh lagi penggunaan arrow function, jika menggunakan function maka this di dalam setInterval tidak akan ketemu karena proses hoisting untuk menanganinya digunakan arrow function
    // const Mahasiswa = function () {
    //     this.nama = 'aldi';
    //     this.umur = 17;
    //     this.sayHello = function () {
    //         console.log(`halo ${this.nama}, ${this.umur}`);
    //     }
        
    //     setInterval(()=>{
    //         console.log(this.umur++)
    //     }, 500);
    // }
    // const aldi = new Mahasiswa();
// contoh real penggunaan arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    console.log(this);
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        // dulu penulisannya
        // satu = temp;
        // satu = dua;
        // dua = temp;
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu)
    setTimeout(()=>{ // jika menggunakan function maka this akan berisi window karena hoisting pada fungsi timeout dulu cara mengakalinya dengan membuat variable baru yaitu that yang berisi this, sekarang cukup menggunakan arrow function
        this.classList.toggle(dua)
    }, 600);
})



