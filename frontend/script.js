'use strict'
let table = document.querySelector('.container')
let selectedCell, selectedBox, selectedColumn, selectedRow, boxes
boxes = document.querySelectorAll('.box')


table.addEventListener('click', function(event) {
    if (!event.target.classList.contains('cell')) return;

    if (selectedCell && selectedBox){
        selectedCell.classList.remove('selected')
        selectedBox.classList.remove('active')
    } 

    selectedCell = event.target
    selectedCell.classList.add('selected')
    
    selectedBox = selectedCell.closest('.box')
    selectedBox.classList.add('active');
})
