const myButton = document.getElementById('btn')
myButton.addEventListener('click', changeColor)
let checkbox = document.querySelector('.checkbox')
checkbox.addEventListener('click', rgbOrHex)
let cRed = ''
let cGreen = ''
let cBlue = ''

function changeColor() {
    let checkWrapper = document.querySelector('.main')
    let myBody = document.querySelector('body')
    cRed = Math.floor(Math.random()*255)
    cGreen = Math.floor(Math.random()*255)
    cBlue = Math.floor(Math.random()*255)
    myBody.style.backgroundColor = `rgb(${cRed}, ${cGreen}, ${cBlue})`
    
    let textInjected = document.querySelector('#inject')
    textInjected.innerHTML = `rgb(${cRed}, ${cGreen}, ${cBlue})`
    textInjected.style.display = "block"
    checkWrapper.style.display = "flex"
}

function rgbOrHex() {
    let textInjected = document.querySelector('#inject')

    function colorToHex (color) {
        let hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    function rgbToHex(red, green, blue) {
        return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue);
    }
    

    if (!checkbox.checked) {
        textInjected.innerHTML = `rgb(${cRed}, ${cGreen}, ${cBlue})`
    } else {
        textInjected.innerHTML = rgbToHex(cRed, cGreen, cBlue)
    }
}