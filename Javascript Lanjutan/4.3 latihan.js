// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// ambil pilih js lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('js lanjutan'))

// ambil durasi masing2 video
.map(item => item.dataset.duration)

// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0]*60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik, 0);

// ubah format menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent =  `${jam} jam, ${menit} menit, ${detik} detik.`
const jmlVideo = videos.filter(video => video.textContent.includes('js lanjutan')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent =  `${jmlVideo} video.`
console.log(jmlVideo);