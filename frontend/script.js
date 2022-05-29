const table = document.querySelector('.template__container');
const boxes = document.querySelectorAll('.box');
const cells = document.querySelectorAll('.cell')
const clear = document.getElementById('clear')
const newgame = document.getElementById('new')
const check = document.getElementById('check')

let selectedCell, selectedBox, selectedColumn, selectedRow


table.addEventListener('click', function(event) {

    if (!event.target.classList.contains('cell')) return;
    
    const { column, row } = event.target.dataset;

    if (selectedCell && selectedBox && selectedColumn && selectedRow) hide();
    
    // Paint cell
    selectedCell = event.target;
    selectedCell.classList.add('selected');
    
    // Paint box
    selectedBox = selectedCell.closest('.box');
    selectedBox.classList.add('active');

    // Paint column
    selectedColumn = document.querySelectorAll('.cell[data-column="' + column + '"]');
    [...selectedColumn].forEach(cell => {
        cell.classList.add('active')
    });

    // Paint row
    selectedRow = document.querySelectorAll('.cell[data-row="' + row + '"]');
    [...selectedRow].forEach(cell => {
        cell.classList.add('active')
    });

    // Paint same
    showSame();

})


table.addEventListener('keypress', function(e) {

    // Insert only numbers from 1 to 9
    e.preventDefault();
    if (e.which > 48 && e.which < 58) {
        e.target.textContent = String.fromCharCode(e.which)
        selectedCell = e.target
        removeSame();
        showSame();

        // Row is filled in
        let filledRow = true;

        [...selectedRow].forEach(cell => {
            if (cell.textContent === '') filledRow = false; 
        });

        if (filledRow) setRowAnimation()
        
        // Column is filled in
        let filledColumn = true;
        
        [...selectedColumn].forEach(cell => {
            if (cell.textContent === '') filledColumn = false; 
        });

        if (filledColumn) setColumnAnimation()
    }
    
});


clear.addEventListener('click', function(e) {

    // Clear user inserted numbers
    cells.forEach(cell => {
        if (cell.hasAttribute('contenteditable')) { 
            cell.textContent = ''
            hide()
        }
    })

});


check.addEventListener('click', function() {

    // Send sudoku to server and check if it is solved
    
    // Form data
    let output = []

    for (let i = 0; i < 81; i += 9) {
        let arr = []

        for (let j = 0; j < 9; j++) {
            arr[j] = cells[i + j].textContent
        }
        
        output.push(arr)
    }

    // Send data
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "check.php");
    xhr.send(JSON.stringify(output));

    xhr.onload = () => {
        
        if (xhr.response) {

        }
    }

})



function hide() {

    // Hide cell and box
    selectedCell.classList.remove('selected');
    selectedBox.classList.remove('active');

    // Hide column
    [...selectedColumn].forEach(cell => {
        cell.classList.remove('active')
    });

    // Hide row
    [...selectedRow].forEach(cell => {
        cell.classList.remove('active')
    });

    // Hide the same values
    [...cells].forEach(cell => {
        if (cell.textContent === selectedCell.textContent) {
            cell.classList.remove('same')
        }
    });

}

function showSame() {

    // Show the same values
    [...cells].forEach(cell => {
        if ((cell.textContent === selectedCell.textContent) && (cell.textContent !== "")) {
            cell.classList.add('same')
        }
    });
}

function removeSame() {

    // Remove the same values
    [...cells].forEach(cell => {
        if (cell.classList.contains('same')) {
            cell.classList.remove('same')
        }
    });
}

function setRowAnimation() {

    [...selectedRow].forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.add('filled')
        }, 120 * index)
    });

    [...selectedRow].forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.remove('filled')
        }, 120 * index + 500)
    });
}

function setColumnAnimation() {

    [...selectedColumn].forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.add('filled')
        }, 120 * index)
    });

    [...selectedColumn].forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.remove('filled')
        }, 120 * index + 500)
    });
}