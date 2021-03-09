function myFunction(...angka) {
    return angka;
}
console.log(myFunction(1,2,3,4,5));

// array
const mhs = ['aldi','abas', 'baskara', 'awladi'];
const [ketua, wakil, ...anggota] = mhs;
console.log(ketua, wakil, anggota);

// object
const team = {
    ketua1: 'aldi',
    wakil: 'abas',
    sekretaris: 'awladi',
    sekjen: 'baskara'
}

const {ketua1, ...myTeam} = team;
console.log(myTeam);

// filtering parameter

function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string',1,2,'aldi',false,10,true,'abas'))