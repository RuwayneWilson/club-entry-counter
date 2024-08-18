let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let entryEl = document.getElementById("total")
let count = 0
let entry = 30

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}

function fees() {
    let due = count * entry + " - "
    entryEl.textContent += due
    count = 0
}