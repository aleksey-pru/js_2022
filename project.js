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
