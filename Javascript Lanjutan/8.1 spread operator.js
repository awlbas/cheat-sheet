// spread operator memecah iterables menjadi single element
const mhs = ['aldi','abas', 'baskara'];
const dosen = ['aldi','abas', 'baskara'];

// mengabungkan 2 array 
    // spread operator lebih flexsibel jika ingin menambah array
    const orang = [...mhs, ...dosen];
    // concat
    const orangCon= mhs.concat(dosen);

// mencopy array 
    // jika seperti ini maka array mhs juga ikut berubah
    // const mhs1 = mhs;
const mhs2 = [...mhs];
mhs2[0] = 'abas'

// contoh lain
const liMhs = document.querySelectorAll('li');
// cara normal
const mhs3 = [];
for (let i=0; i<liMhs.length; i++) {
    mhs3.push(liMhs[i].textContent);
}
// spread operator
const mhs4 = [...liMhs].map(m=>m.textContent);

const nama = document.querySelector('.judul');
const huruf = [...nama.textContent].map(h=> `<span>${h}</span>`).join('');
console.log(huruf);

nama.innerHTML = huruf;