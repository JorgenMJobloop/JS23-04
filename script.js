const container = document.querySelector(".container")
const title = document.getElementById("title")
const description = document.querySelector("#description")
const buttons = document.getElementsByClassName("btn")
const listItems = document.querySelectorAll(".item")
const inputField = document.getElementById("nameInput")
const submitBtn = document.getElementById("submitBtn")

document.getElementById("changeTextBtn").addEventListener("click", () => {
    description.textContent ="Bob's Burgers is a great show!"
})

Array.from(buttons).forEach((btn) => {
    btn.style.backgroundColor = "pink"
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