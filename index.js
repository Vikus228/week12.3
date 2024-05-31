const button = document.getElementById('button');
const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let result = '';
const div = document.getElementById('randomWord')

function generation() {
    const a = Math.floor(Math.random() * alphabet.length);
    const b = Math.floor(Math.random() * alphabet.length);
    const c = Math.floor(Math.random() * alphabet.length);
    const d = Math.floor(Math.random() * alphabet.length);
    result = alphabet.charAt(a) + alphabet.charAt(b) + alphabet.charAt(c) + alphabet.charAt(d);
    div.textContent = result;
}

button.addEventListener('click', generation);


