// lexical scope
    // function init() {
    //     let nama = 'aldi'; // local variable
    //     function tampilNama() { // inner function (closure*)
    //         console.log(nama); // akses ke parent variable
    //     }
    //     console.dir(tampilNama); // variable nama akan masuk closure scope
    // }
    // init();

// contoh penggunaan closure
    // function init() {
    //     let nama = 'aldi'; // local variable
    //     function tampilNama() { // inner function (closure*)
    //         console.log(nama); // akses ke parent variable
    //     }
    //     return tampilNama;
    // }
    // let panggilNama = init();
    // panggilNama();

// closure for function factories
    // function ucapkanSalam(waktu){
    //     return function(nama) {
    //         console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    //     }
    // }

    // let selamatPagi = ucapkanSalam('pagi');
    // let selamatSiang = ucapkanSalam('siang');
    // let selamatMalam = ucapkanSalam('malam');

    // selamatMalam('aldi');
    // selamatPagi('aldi');
    // selamatSiang('aldi');

// closure for private function
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());