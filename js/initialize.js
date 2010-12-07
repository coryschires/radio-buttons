$(document).ready(function() {
    var matrix = matrix_builder('#checkbox_grid');

    matrix.create();
    
    // matrix.line(3,3, 12,9)


    // $('select').change(function() {
    //     var selection = $(this).val();
    // 
    //     if (selection === "rain") {
            // matrix.draw(rain_drops);
    //     } else {
            matrix.draw(snake);
    //     }
    // });
});