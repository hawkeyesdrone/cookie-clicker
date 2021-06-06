const cookie = document.getElementById('cookie')
const counter = document.getElementById("counter")

let cookieCount = 0;
let cookiesPerSecond = 0;

function addCounter() {
    cookieCount++
    document.getElementById("counter").innerHTML = cookieCount
}
