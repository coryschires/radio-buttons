$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
        width: 507,
        height: 347
    });
    canvas.create();
    
    canvas.line(2,2, 8,5);

    
    

    // canvas.draw(snake);
    

    // canvas.point(10,10).check().neighbor(0, -3).check();


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