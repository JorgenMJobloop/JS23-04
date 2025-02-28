const container = document.querySelector(".container")
const title = document.getElementById("title")
const description = document.querySelector("#description")
const buttons = document.getElementsByClassName("btn")
const listItems = document.querySelectorAll(".item")
const inputField = document.getElementById("nameInput")
const submitBtn = document.getElementById("submitBtn")
const changeColorBtn = document.getElementById("changeColor")

document.getElementById("changeTextBtn").addEventListener("click", () => {
    description.textContent ="Bob's Burgers is a great show!"
})

Array.from(buttons).forEach((btn) => {
    btn.style.backgroundColor = "hotpink"
    btn.style.color ="black"
})

document.getElementById("addElementBtn").addEventListener("click", () => {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = "Click me!"
    newParagraph.style.color = "green"
    newParagraph.style.cursor = "pointer"

    newParagraph.addEventListener("click", () => {
        newParagraph.textContent = "You clicked me! Ow!"
        newParagraph.style.color = "red"
    })

    document.body.appendChild(newParagraph)
})

listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.textContent = `You have clicked item ${index +1}`
        item.style.color = "blue"
    })
})

submitBtn.addEventListener("click", () => {
    alert(`Hello, ${inputField.value}!`)
})

console.log("Parent of Container", container.parentNode)
console.log("First child of container", container.firstElementChild)

/////////////////////////////////////////////////// 28.02 ////////////////////////
 
// Create a div
const counterDiv = document.createElement("div")

// create counter button
const counterBtn = document.createElement("button")

counterBtn.textContent = "Click me!"
counterBtn.style.padding = "20px 25px"
counterBtn.style.margin = "20px"
counterBtn.style.fontSize = "16px"
counterBtn.style.border = "none"
counterBtn.style.backgroundColor = "darkblue"

// create reset button
const resetBtn = document.createElement("button")
resetBtn.textContent = "Reset"
resetBtn.style.padding = "20px 25px"
resetBtn.style.margin = "20px"
resetBtn.style.fontSize = "16px"
resetBtn.style.backgroundColor = "darkblue"

// create counter text
const counterDisplay = document.createElement("p")


counterDisplay.textContent ="You have clicked me 0 times"
counterDisplay.style.color = "red"

// create the counter function
let clickCount = 0
counterBtn.addEventListener("click", () => {
    clickCount ++
    counterDisplay.textContent = `You have clicked me ${clickCount} times`

    if (clickCount % 5===0) {
        counterBtn.style.backgroundColor = getRandomColor()
    }
})

// reset the click counter
resetBtn.addEventListener("click", () => {
    clickCount = 0
    counterDisplay.textContent = "You have clicked me 0 times"
    counterBtn.style.backgroundColor  = "darkblue"

})
// add the elements to the page
document.body.appendChild(counterDiv)
counterDiv.appendChild(counterBtn)
counterDiv.appendChild(resetBtn)
counterDiv.appendChild(counterDisplay)

// generates a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color+= letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// add shake effect to reset button

resetBtn.addEventListener("click", () => {
    resetBtn.style.position = "relative"

let counter = 0
let interval = setInterval(() => {
    const offset = counter % 2 === 0? 10 : -10
    resetBtn.style.left =`${offset}px`
    counter++
    if (counter > 6) {
        clearInterval(interval)
        resetBtn.style.left ="0px"
    }
}, 50)
})

// Change background color

changeColorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor()
})

// Create confetti

function createConfetti() {
    for (let i = 0; i < 75; i++){
        let confetti = document.createElement("div")
        confetti.classList.add("confetti")
        confetti.style.left = `${Math.random() * 100}vw`
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`
        confetti.style.backgroundColor = getRandomColor()
        document.body.appendChild(confetti)

        setTimeout(() => confetti.remove(), 5000)
    }
}

counterBtn.addEventListener("click", () => {
    if (clickCount % 10 === 0){
        createConfetti()
    }
})