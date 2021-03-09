// promise untuk menghindari callback hell

// fulfiiled / resolve / then | rejected / reject / catch | pending / finally

// 

// jquery
    // $.ajax({
    //     url:'http://www.omdbapi.com/?apikey=46c8a735&s=avengers',
    //     success: movies => console.log(movies),
    //     error: (e) => console.log(e.responseText),
    // });

// vanilla javascript
    // fetch('http://www.omdbapi.com/?apikey=46c8a735&s=avengers')
    // .then(response => response.json())
    // .then( response => console.log(response));

// contoh 1
let ditepati = true;
    // const janji1 = new Promise((resolve, reject) => {
    //     if(ditepati){
    //         resolve('ditepati');
    //     } else {
    //         reject('ingkar');
    //     }
    // });

// janji1.then(response => console.log(response)).catch(response => console.log(response));


//contoh 2
const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(()=>{resolve('ditepati tapi nunggu');},2000) 
    } else {
        setTimeout(()=>{reject('tidak ditepati tapi nunggu');},2000) 
    }
});

console.log('mulai');
janji2
 .finally(()=> console.log('selesai menunggu / bisa buat animasi loading'))
 .then(response => console.log(response))
 .catch(response => console.log(response))
console.log('selesai');

// promise all
const film = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            judul: 'avengers',
            sutradara: 'aldi',
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            kota: 'tangerang',
            temperatur: 25,
        }])
    }, 500);
});

Promise.all([film, cuaca])
 // array
    // .then(response => console.log(response)).catch(response => console.log(response));
 // terpisah
 .then(response => {
     const[film, cuaca] = response;
     console.log(film);
     console.log(cuaca);
 })