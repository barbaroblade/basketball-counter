let countEl = document.getElementById("count-home")
let countGuest = document.getElementById("guest-count")
let count = 0
let count1 = 0

function incrementOne(){

    count += 1
    countEl.textContent = count
}

function incrementTwo(){

    count += 2
    countEl.textContent = count
}
function incrementThree(){

    count += 3
    countEl.textContent = count
}
// GUEST
function GincrementOne(){
    
    count1 += 1
    countGuest.textContent = count1
}

function GincrementTwo(){

    count1 += 2
    countGuest.textContent = count1
}
function GincrementThree(){

    count1 += 3
    countGuest.textContent = count1
}

