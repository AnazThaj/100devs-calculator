// TODO Display the pressed keys on the calculator display
    // TODO Digits should be from Right to Left
    // TODO Accept only numeric values
    // TODO Choose the right font, size, and color for the display
    // TODO Character limits (10/12)
    // TODO Decimal point can only entered only once
    // TODO Default display should be with '0'
// TODO Calculation - '+' / '-' / '/' / 'x' / '='
// TODO Function keys
    // TODO On/Off toggle
    // TODO When "AC" is pressed the display should be cleared with '0' appearing
// *
// *

window.addEventListener("keydown", (e) => {
    addTransition(e.key);
    displayInput(e.key)
});

window.addEventListener('click', (e) => {
    addTransition(e.key);
    displayInput(e.key)
})

function addTransition(pressedKey) {
    const keyPressed = document.querySelector(`.keys[key="${pressedKey}"]`)
    if(!keyPressed) return
    keyPressed.classList.add('pressed')
    keyPressed.addEventListener('transitionend', resetTransition)
}

function resetTransition(e) {
    if(e.propertyName !=='transform') return
    this.classList.remove('pressed')
}

function displayInput(pressedKey) {
    const keyPressed = document.querySelector(`.keys[key="${pressedKey}"]`)
}