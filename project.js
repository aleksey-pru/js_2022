'use strict'
console.log('dfdg..');

const button = document.getElementById('add_action');

button.addEventListener('click',() => {
    console.log('CLICKED');
})
button.addEventListener('mouseover',() => {
    console.log('MOUSEOVER');
})
button.addEventListener('focus',() => {
    console.log('FOCUS');
})
button.addEventListener('blur',() => {
    console.log('BLUR');
})

const guestName = prompt('Please, enter your name');
alert('available rooms are 530, 234, 230')
const roomNumber = prompt('Choose room number');
const greeting2 = `Welcome ${guestName}, your name number is ${roomNumber}!`;
if (guestName && roomNumber) {
    const el = document.createElement('span');
    el.innerHTML = greeting2;
    el.className = 'container';
    document.body.appendChild(el);
}



