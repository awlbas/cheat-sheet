// 2.1 execution context, hoisting & scope

// 1. creation phase pada global context
    // 1. window = global object
    // 2. this = window
    // 3. Hoisting adalah proses mencari variabel dan fungsi kemudian diisi dengan undefined, jadi walaupun variabel ditulis dibawah dia akan ditarik ke atas.
        // var = undefined
        // function = function()
// 2. execution phase
 // maka jika perintah seperti console.log ditulis terlebih dahulu sebelum variable, hal ini tidak akan error akan tetapi console akan menampilak undefined karena konsep hoisting. jika sebaliknya, maka consolge baru akan menampilkan isi variable

// hal ini juga terjadi pada local context bedanya bisa mengakses window dan argument. pada context local parameter yang dikirim kedalam function, sedangkan jika pada function tidak mendklarasikan argument, maka parameter tidak akan hilang, tetapi masuk pada variabel 'arguments[]'. karena pada konteks local variable arguments akan selalu dibuat secara otomatis 