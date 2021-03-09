// array
const coba = ['satu','dua','tiga'];

// const [a,b,c] = coba;
const [a,,c] = coba; //skip item
console.log(a,c); // satu tiga
// console.log(b); // error

// object | nama tidak boleh asal
const mhs = {
    id: 123,
    nama: 'aldi',
    email: 'aldi@mail',
    jurusan: 'teknik informasi'
};

// const {nama, email} = mhs;
// console.log(nama); // aldi
// console.log(email); // aldi@mail

// swap items
let q = 1;
let w =2;

[q,w] = [w,q];

console.log(q);
console.log(w);

// return value function
function cobaReturn(){
    return [1,2];
}
const e = cobaReturn();
const [r,t] = cobaReturn();
console.log(e);
console.log(r,t);

//rest parameter
const [y, ...u] = [1,2,3,4,5];
console.log(u);

// assignment tanpa deklarasi object
    // ({namaA, emailA} = {namaA: 'aldi',emailA: 'aldi@mail'});
    // console.log(namaA, emailA);

// object assign variable baru
    // const {nama: na, email:em, jurusan: ju ='teknik informasi'} = mhs;
    // console.log(na, mhs, ju); 

// object assign variable baru rest parameter
const {nama, ...value } = mhs;
console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
    // function getIdMhs(mhs) {
    //     return mhs.id;
    // }
    // console.log(getIdMhs(mhs));

function getIdMhs({id}) {
    return id;
}
console.log(getIdMhs(mhs));

