/* API Integration */

import { subscribe } from "./firebase/ddclub_data.js";

/* Get Form inputs values */

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const level = document.querySelector('#level');
const character = document.querySelector('#character');
const bttnSubscribe = document.querySelector('#bttnSubscribe');

/* Adding event listener on the buttton */

bttnSubscribe.addEventListener('click', async () => {
    if (name.value === '' || email.value === '' || level.value === '' || character.value === '') {
        return alert('Insira todas as informações para se inscrever');
    }

    else if (name.value !== '' && email.value !== '' && level.value !== '' && character.value !== '') {

        const body = {
            name: name.value,
            email: email.value,
            level: level.value,
            character: character.value
        };

        await subscribe(body);

        name.value = '';
        email.value = '';
        level.value = '';
        character.value = '';

        return alert('Você foi incrita(o) no clube, sua próxima aventura está prestes a começar');
    }    
});