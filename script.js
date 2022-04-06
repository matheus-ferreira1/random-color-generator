const myButton = document.getElementById('btn')
myButton.addEventListener('click', changeColor)
let checkbox = document.querySelector('.checkbox')
checkbox.addEventListener('click', rgbOrHex)
let textInjected = document.querySelector('#inject')

let cRed = ''
let cGreen = ''
let cBlue = ''

function colorToHex (color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex(red, green, blue) {
    return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

function changeColor() {
    let checkWrapper = document.querySelector('.main')
    let myBody = document.querySelector('body')
    cRed = Math.floor(Math.random()*255)
    cGreen = Math.floor(Math.random()*255)
    cBlue = Math.floor(Math.random()*255)

    if (!checkbox.checked) {
        textInjected.innerHTML = `rgb(${cRed}, ${cGreen}, ${cBlue})`
    } 
    if (checkbox.checked) {
        textInjected.innerHTML = `${rgbToHex(cRed, cGreen, cBlue)}`
    }

    myBody.style.backgroundColor = `rgb(${cRed}, ${cGreen}, ${cBlue})`
    textInjected.style.display = "block"
    checkWrapper.style.display = "flex"
}

function rgbOrHex() {

    rgbToHex(cRed, cGreen, cBlue)

    if (!checkbox.checked) {
        textInjected.innerHTML = `rgb(${cRed}, ${cGreen}, ${cBlue})`
    } else {
        textInjected.innerHTML = rgbToHex(cRed, cGreen, cBlue)
    }
}