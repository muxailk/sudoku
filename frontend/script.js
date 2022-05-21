const table = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
let selectedCell, selectedBox, selectedColumn, selectedRow


table.addEventListener('click', function(event) {
    if (!event.target.classList.contains('cell')) return;
    
    const { column, row } = event.target.dataset;

    if (selectedCell && selectedBox){
        selectedCell.classList.remove('selected')
        selectedBox.classList.remove('active')
    };

    // Paint column and row
    [...boxes].forEach((box, index) => {
        [...box.children].forEach((child, childIndex) => {
            const { column: childColumn, row: childRow } = child.dataset

            if (childColumn === column || childRow === row) {
                child.classList.add('active');
            }
        })
    });

    // Paint selected cell
    selectedCell = event.target;
    selectedCell.classList.add('selected');
    
    // Paint selected box
    selectedBox = selectedCell.closest('.box');
    selectedBox.classList.add('active');
})
