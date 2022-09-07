window.addEventListener('keydown', e => addTransition(e.key))

function addTransition(pressedKey) {
    const key = document.querySelector(`.key[key="${pressedKey}"]`);
    const fkey = document.querySelector(`.key[key="${pressedKey}"]`);
    const display = document.querySelector('.display')


    if(!key || !fkey) return;

    display.innerText = `${pressedKey}`
}