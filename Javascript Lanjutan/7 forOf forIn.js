// for..of membuat iterasi loop pada object iterasi: string, array, arguments/nodelist, typedArray, map, set, user-defined iterables
const mhs = ['aldi','abas', 'baskara'];
const nama = 'aldi';
// for
for (let i = 0; i<mhs.length; i++) {
    console.log(mhs[i])
}
// forEach
mhs.forEach((m,i)=>console.log(m,i));
// for..of array
for(const m of mhs){
    console.log(m);
}
// for..of array with index
for(const [i,m] of mhs.entries()){
    console.log(m,i);
}
// for..of sring
for(const n of nama){
    console.log(n);
}
// for..of nodlist
const liNama = document.querySelectorAll('.nama');console.log(liNama);
liNama.forEach(n=>console.log(n.textContent));
for (n of liNama) { console.log(n.innerHTML); }

// for..of arguments
function jumlahkanAngka(){
    console.log(arguments);
    let jumlah = 0;
    for ( a of arguments ){
        jumlah += a;
    }
    return jumlah
}
console.log(jumlahkanAngka(1,2,3,4,5));

// for..in untuk iterable property object
const mhs1 = {
    nama:'aldi',
    umur:33,
    email: 'aldi@mail.com'
}

for (m in mhs1) {
    console.log(m, mhs1[m]);
}