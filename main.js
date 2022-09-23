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
    console.log('hello')
    this.classList.remove('pressed')
}

function displayInput(pressedKey) {
    const keyPressed = document.querySelector(`.keys[key="${pressedKey}"]`)
}