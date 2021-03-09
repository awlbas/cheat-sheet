// higher order function
    
// contoh 1 - kerjakanTugas = higher order function | selesai = callback
    // function KerjakanTugas(matakuliah, selesai) {
    //     console.log(`mulai mengerjakan tugas ${matakuliah}... `);
    //     selesai();
    // }
    // function selesai() {
    //     alert('selseai mengerjakan tugas');
    // }
    // KerjakanTugas('pemerograman web', selesai);

// contoh 2 parameter function dan integer
    // setTimeout(function(){
    //     console.log('hello');
    // }, 1000)

//contoh 3 argumennya event dan function sebagai callback
    // const tombol = document.querySelector('.submit');
    // tombol.addEventListener('click', function(){
    //     console.log('tombol ditekan!');
    // })

// contoh 4
      function ucapkanSalam(waktu){
        return function(nama) {
            console.log(`halo ${nama}, selamat ${waktu}`);
        }
    }
    let selamatMalam = ucapkanSalam('malam');
    console.dir(selamatMalam('aldi'));

// penggunaan higher order function untuk abstraksi atau membuat kode lebih sederhana
function repeat(n, action) {
    for(let i = 0; i<n; i++) {
        action(i);
    }
}
repeat(10, console.log);
repeat(3, alert);