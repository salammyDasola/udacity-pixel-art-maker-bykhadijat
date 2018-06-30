// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("sizePicker").submit(function(event){
    event.preventDefault();
    var height, width, color;
    width =$("#inputWeight").val();
    height =$("#inputHeight").val;
    makeGrid(height,width);
});

function makeGrid(x,y) {
    
   table =$("#pixelCanvas");
   
    for(var i= 1; i <=x; i++){
    $("#pixelCanvas").append('<tr></tr>');

    for(let j =1; j <= y; j++){
          $('tr').filter(':last').append('<td></td>');
    }
    }
// codes to add color
  $("td").click(function  addColor() {
     color = $("#colorPicker").val();
    
     if( $(this).attr("style")){
      $(this).removeAttr("style");
    } else {
        $(this).attr("style" ,"background-color" + color);
     }
     });
    }
      
    
