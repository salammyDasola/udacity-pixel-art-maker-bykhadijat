// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
sizePicker.submit(function(event){
    event.preventDefault();
    makeGrid();
})

function makeGrid() {
    const width =$("#inputWeight").val();
    const height =$("#inputHeight").val;
    const table =$("#pixelCanvas");
    for(let row=1;row<=height; row++){
        table.append('<tr></tr>');
        for(let column=1;column <=width;column++){
          $('tr').filter(':last').append('<td></td>');
    }
    }
// Your code goes here!

};

