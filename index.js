document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var app = document.getElementById("app")

    setTimeout(function(){
        loader.style.display = "none"
    }, 2000)

    setTimeout(function(){
        app.style.display = "flex"
    }, 2000)
})

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function reset() {
    count = 0
    countEl.innerText = count
    countStr.innerText = 0
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}
