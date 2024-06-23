const canvas = document.querySelector('.canvas');
const gridSize = document.querySelector('input');



gridSize.addEventListener('click', function() {
    console.log(gridSize.value);
    createDivs(gridSize.value);
    console.log(canvas);
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
            columnDiv.classList.add('boo');
        }
        canvas.appendChild(rowDiv);
        rowDiv.classList.add('foo');
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
    