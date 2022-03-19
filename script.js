const myButton = document.getElementById('btn')
myButton.addEventListener('click', changeColor)
let myContainer = document.querySelector('.container')

function changeColor() {
    let myBody = document.querySelector('body')
    let cRed = Math.floor(Math.random()*255)
    let cGreen = Math.floor(Math.random()*255)
    let cBlue = Math.floor(Math.random()*255)
    myBody.style.backgroundColor = `rgb(${cRed}, ${cGreen}, ${cBlue})`

    let myText = document.createElement('h2')
    myText.innerHTML = `COR EXIBIDA : rgb(${cRed}, ${cGreen}, ${cBlue})`
    myText.className = 'new-btn'
    myBody.appendChild(myText)
}