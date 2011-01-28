$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
        width: 507,
        height: 347
    });
    
    var shape = canvas.shape(
      [2,2], [3,2], [3,3], [4,3], 
      canvas.line(4,10, 8,6)
    );

    setInterval(function() {
      shape.move('south');
    }, 200);
    

    // canvas.line(4,10, 8,6)
    
    
    // canvas.line(2,2, 4,4)
    
    // var line = canvas.line(3,3, 3,6)
    
    // canvas.shape([line]);
    
    // canvas.line(3,6, 3,3)
    
    
    // var rect = canvas.rect(2,2, 8,8);
    //       console.log(rect.points);


    // setInterval(function() {
    //   rect.move('east');
    // }, 200);
    
    // setInterval(function() {
    //   line.move('east');
    // }, 200);
 
    // canvas.draw(snake);
    
    // $('select').change(function() {
    //     var selection = $(this).val();
    // 
    //     if (selection === "rain") {
    //         matrix.draw(rain_drops);
    //     } else {
    //         canvas.draw(snake);
    //     }
    // });
});