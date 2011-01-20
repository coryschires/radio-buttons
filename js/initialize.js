$(document).ready(function() {
    var matrix = matrix_builder('#checkbox_grid');

    matrix.create();
    
    // matrix.point(10,10).check().neighbor(0, -3).check();


    // $('select').change(function() {
    //     var selection = $(this).val();
    // 
    //     if (selection === "rain") {
    //         matrix.draw(rain_drops);
    //     } else {
            matrix.draw(snake);
    //     }
    // });
});