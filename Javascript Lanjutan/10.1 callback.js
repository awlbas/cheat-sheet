// synchronous callback
function halo(nama) {
    alert(`halo ${nama}`)
}
function tampilkanPesan(callback){
    const nama = prompt('masukkan nama :')
    callback(nama);
}
// tampilkanPesan(halo);
// tampilkanPesan( nama => alert(`halo, ${nama}`));

// asynchronous digunakan agar tidak terjadi blocking pada code yang lama dieksekusi sehingga bisa menjalankan code yang lain

// asynvhronous callback 
    // function getDataMahasiswa(url, success, error) {
    //     let xhr = new XMLHttpRequest();

    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status === 200) {
    //                 success(xhr.response);
    //             } else if (xhr.status === 404) {
    //                 error();
    //             }
    //         }
    //     }

    //     xhr.open('get', url);
    //     xhr.send();
    // }

    // console.log('mulai');

    // getDataMahasiswa('/data.json', results => {
    //     const mhs = JSON.parse(results);
    //     mhs.forEach( element => console.log(element.nama) );
    // }, () => {})

    // console.log('selesai');

//  asynchronos menggunakan jquery
console.log('mulai');

$.ajax({
    url:'/data.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => console.log(e.responseText),
});

console.log('selesai');