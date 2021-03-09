// penggunaan tagged template

const nama = 'aldi';
const email = 'aldi@mail';
const hp = '111-1111-1111';

function highlight(strings, ...values){
    return strings.reduce((result, string, index) => `${result}${string}<span class="hl">${values[index] || ''}</span>`,'')
    
    // console.log(strings);
    // console.log(values);
    
    // let result = '';
    // strings.forEach((element, index) => {
    //     result += `${element}${values[index] || ''}`;
    // });
    // return result;
}

const str = highlight`hallo nama saya ${nama}, email = ${email}, No.hp = ${hp}`;

document.body.innerHTML = str;

// escaping HTML tags = sanitasi html, teks untuk menghidari script yang dimasukan pada halaman html
    // codeburst.io/javascript-es6-tagged-template-literals-a45c26e54661
// translation & internationalization
    // github.com/skolmer/es2015-i18n-tag
// styled components