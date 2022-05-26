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

    // Show the same values
    [...cells].forEach(cell => {
        if ((cell.textContent === selectedCell.textContent) && (cell.textContent !== "")) {
            cell.classList.add('same')
        }
    });

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


table.addEventListener('keypress', function(e) {

    e.preventDefault();
    if (e.which > 48 && e.which < 58) {
        e.target.textContent = String.fromCharCode(e.which)
    }
    
});

clear.addEventListener('click', function(e) {

    cells.forEach(cell => {
        if (cell.hasAttribute('contenteditable')) { 
            cell.textContent = ''
            hide()
        }
    })

});
