$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
        width: 507,
        height: 347
    });
    
    // var shape = canvas.shape([ 
    //   [2,2], [3,2], [3,3], [4,3] 
    // ]);
    // 
    // setInterval(function() {
    //   shape.move('south');
    // }, 200);
    
    
    var rect = canvas.rect(2,2, 8,8);
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