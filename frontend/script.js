const table = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
const cells = document.querySelectorAll('.cell')

let selectedCell, selectedBox, selectedColumn, selectedRow


table.addEventListener('click', function(event) {
    if (!event.target.classList.contains('cell')) return;
    
    const { column, row } = event.target.dataset;

    if (selectedCell && selectedBox && selectedColumn && selectedRow) {

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

    };
    
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


table.addEventListener('keypress', function(e) {
    e.preventDefault();

    if (e.which > 48 && e.which < 58) {
        e.target.textContent = String.fromCharCode(e.which)
    }
});