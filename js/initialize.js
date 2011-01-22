$(document).ready(function() {

    var canvas = $('#radio_button_canvas').radio_button_canvas();
    console.log(canvas);
    canvas.create();

    // canvas.point(10,10).check().neighbor(0, -3).check();


    // $('select').change(function() {
    //     var selection = $(this).val();
    // 
    //     if (selection === "rain") {
    //         matrix.draw(rain_drops);
    //     } else {
            canvas.draw(snake);
    //     }
    // });
});