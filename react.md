MEMBUAT REACT APP
    1. Install development server dan react app
Download node js
npx create-react-app my-app
Cd my-app
Npm start
    2. Karena react adalah app satu halaman maka semua komponen akan dinesting pada root
Import Komponenen from ‘./Komponen
<komponen />
    3. Props digunakan untuk mengirimkan data dari root komponen ke komponen yang lain
Root komponen: <komponen prop=”value” />
Pada komponen yang dikirimkan data bisa mengakses data dengan variabel props yang berbentuk object, jadi bisa menggunakan destructuring
Props bisa juga dipakai untuk mengirimkan state : prop={this.state.property}
Untuk mengubah prop pada state mengunakan method this.setState()
Setiap div child di dalam array atau iterasi harus memiliki unik id
    4. Container vs ui component
Dalam react ada komponen untuk data yaitu container dan ui yang tidak perlu memerlukan data
    5. Membuat form menggunakan event listener(onChange & onSubmit), state, dan function untuk menyimpan data. Data form akan diproses pada child komponen yang kemudian akan mengubah state pada root dengan mengambil fungsi yang ada di root yang telah dijadikan props nesting komponen (function as props).  mengubah state merupakan praktek yang buruk maka kita membuat copy array dengan menggunakan spread operator
    6. Untuk mendelete state cukup menggunakan method filter yang memberikan ide. Dan menggunakan arrow function agar tidak berjalan otomatis
    7. Css tetap berjalan walaupun hanya diimport pada satu komponen, untuk mengscope bisa menggunakan class https://blog.pusher.com/css-modules-react/
    8. Lifecycle method: 
mounting > constructor (mengambil data dari internal state) > render > dom update > component mounted
Updating > menerima prop baru, mengubah state > apakah komponen perlu di update ? = force update (render > getsnpashot > update ui > update) : null; 
    9. React router agar client tidak perlu request ke server dan cukup mengubah komponen yang perlu berubah tidak semua halaman. menggunakan prop exact agar content root tidak duplikat. Kemudian untuk navbar tidak menggunakan tag a tapi menggunakan link dan navlink. Link tab tidak ada class active tapi kalau navlink ada class active.
    10. Programtic redirect bisa menggunakan prop.history.push
    11. Hoc untuk melalkukan wrap pada komponen sehingga bisa menggunakan fungsi yang di wrapkan
    12. Mengambil data dari api menggunakan axios. Axios menggunakan componentDidMount() yang berisi promise 
    13. Route parameter bisa dengan mengirimkan  parameter /:post_ide ke fungsi componentDidMount. Dan menggunakan switch tag agar hanya memilih satu route saja 
    14. Redux : ketika komponen menginginkan data maka ia akan subskrib untuk mengubah data dan redux akan mengirim data dalam bentuk props. Kemudiak komponen dapat mengakses data, ketika ingin mengubah data harus ada proses. Pertama memutuskan untuk mengubah data, kemudian komponen melakukan dispatch action atau mengirimkan paerintah atau aksi dan bisa mengandung payload atau data. Kemudian di kirim ke reducer dan reducer yang akan mengupdate data. Didalam redux ada dua state dan action. Tempat menyimpan data disebut store. Action js object yang mempunyai type property, biasanya berbentuk string, kapital, underscore. Dan property lainnya. Kemudian store melakukan dispatch action. Kemudian store melakukan subscribe setiap update data
    15. Install redux
Npm install redux react-redux
Import createStore dari redux untuk membuat store di indeks.js
Import provider dari react-redux agar react bisa berinteraksi dengan store. Dengan membungkus app dengan tak provider
Dan membuat root reducer yang berisi banyak reducer dan diimport ke indeks.js
Mengimpor connect dari react-redux agar komponen menggil hoc  dan menyambungkan ke store. Kemudian melakukan mapping dari state ke prop untuk membungkus dengan data distore.
Untuk individual data bisa mengambil parameter ide komponen prop dari route dan mencari dari ide digunakan untuk mencari post dengan ide tersebut
Menggunakan dispatch method untuk action mapDispatchtoprops. Dan bisa menggunakan action creator dengan mengipor action komponen


CONTEXT
    • Untuk mengakses context ada dua cara:
        ◦ pertama: import dan buat variable “static contextType =”
        ◦ kedua: menggunakana “<Context.Consumer>”
    • Untuk cara pertama lebih sederhana tetapi hanya bisa menggunakan satu context saja
    • Untuk cara kedua bisa menggunakan context lebih dari satu
    • Selain data atau state, context dapat berisi function, function bisa juga digunakan untuk merubah data atau state di dalam context
HOOKS
    • Hooks membuat kita bisa melakukan beberapa hal di dalam functional component yang biasanya tidak bisa, misalnya menggunakan state, menjalakan code Ketika render atau re-render, menggunakan context.
    • Reducer (useReducer) digunakan untuk menempatkan semua fungsi pada satu file sehingga memudahkan perawatan Ketika aplikasi semakin besar. 
