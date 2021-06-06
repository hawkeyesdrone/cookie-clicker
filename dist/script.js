const cookie = document.getElementById('cookie')
const counter = document.getElementById("counter")

let cookieCount = 0;
let cookiesPerSecond = 0;
const audio = new Audio('./assets/munch.mp3')

function addCounter() {
    audio.play()
    cookieCount++
    document.getElementById("counter").innerHTML = cookieCount
}
