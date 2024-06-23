const canvas = document.querySelector('.canvas');
const gridSize = document.querySelector('input');
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', function() {
    createDivs(gridSize.value)
})

gridSize.addEventListener('input', function() {
    console.log(gridSize.value);
    createDivs(gridSize.value);
    console.log(canvas);
})

const eraseButton = document.querySelector('#erase-button');

eraseButton.addEventListener('click', function() {
    if (eraseButton.classList.contains('draw')) {
        eraseButton.classList.remove('draw');
        eraseButton.classList.add('erase');
        console.log('erase true');
    }
    else {
        eraseButton.classList.remove('erase');
        eraseButton.classList.add('draw');
        console.log('erase false');
    }
})

function createDivs(nums) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for (let i = 0; i < nums; i++) {
        let rowDiv = document.createElement('div');
        for (j = 0; j < nums; j++) {
            let columnDiv = document.createElement('div');
            rowDiv.appendChild(columnDiv);
            columnDiv.classList.add('column');
            columnDiv.addEventListener('mouseover', function() {
                draw(columnDiv);
            })
        }
        canvas.appendChild(rowDiv);
        rowDiv.classList.add('row');
    }

    const inputText = document.querySelector('#grid-size');
    inputText.textContent = `${nums} x ${nums}`;
}

function draw(columnDiv) {
    if (eraseButton.classList.contains('draw')){
        columnDiv.classList.add('drawn');
        columnDiv.classList.remove('erased');
    }
    else {
        columnDiv.classList.add('erased')
        columnDiv.classList.remove('drawn');
    }
}



    // create the parent div
    // make another for loop that creates and appends 16 divs into the parent
    // append the parent div to the canvas

    // Create 16 Horizontal Divs  (Act as parents)
    // Put 16 Divs in each of those horizontal divs (children)

    /*
    let button = document.querySelector('button');
    let container = document.querySelector('.container');
    button.addEventListener('click', function() {
    console.log(container.childElementCount);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }}) 
    */
    