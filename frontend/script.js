const table = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
let selectedCell, selectedBox, selectedColumn, selectedRow


table.addEventListener('click', function(event) {
    if (!event.target.classList.contains('cell')) return;
    
    const { column, row } = event.target.dataset;

    if (selectedCell && selectedBox && selectedColumn && selectedRow) {

        selectedCell.classList.remove('selected');
        selectedBox.classList.remove('active');

        [...selectedColumn].forEach(cell => {
            cell.classList.remove('active')
        });
    
        [...selectedRow].forEach(cell => {
            cell.classList.remove('active')
        });

    };

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

    // Paint cell
    selectedCell = event.target;
    selectedCell.classList.add('selected');
    
    // Paint box
    selectedBox = selectedCell.closest('.box');
    selectedBox.classList.add('active');
})
