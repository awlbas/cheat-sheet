let mahasiswa = [
    {
        nama: 'aldi',
        email: 'aldi@mail',
        hp: '111-1111-1111',
        mataKuliah: [
            'rekayasa web',
            'anailsis sistem informasi',
        ]
    },
    {
        nama: 'abas',
        email: 'abas@mail'
    },
    {
        nama: 'baskara',
        email: 'baskara@mail'
    }
];

let aldi =
    {
        nama: 'aldi',
        email: 'aldi@mail',
        hp: '111-1111-1111',
        mataKuliah: [
            'rekayasa web',
            'anailsis sistem informasi',
        ]
    }

console.log(mahasiswa.nama);

// looping
const looping = 
`<div class="mhs">
    ${mahasiswa.map(m => 
        `<ul>
            <li>${m.nama}</li>
            <li>${m.email}</li>
        </ul>`
    ).join('')}
</div>`

// conditional
const cond = 
`<div class="mhs">
    ${mahasiswa.map(m => 
        `<ul>
            <li>${m.nama}</li>
            <li>${m.email} </li>
            ${m.hp ? `<li>${m.hp}</li>` : ''}
        </ul>`
    ).join('')}
</div>`

// nested conditional
const nested = `
    <div class="mhs">
        <h2>${aldi.nama}</h2>
        <h4>mata kuliah</h4>
        ${cetakMataKuliah(aldi.mataKuliah)}
    </div>
`
function cetakMataKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>

    `
}

document.body.innerHTML = nested;