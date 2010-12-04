$(document).ready(function() {
    var matrix = matrix_builder('#checkbox_grid');

    matrix.create();
    
    // matrix.line(3,3, 12, 12);
    
    // matrix.draw(snake); // on page load
    
    // matrix.draw(fireworks);
    
    // matrix.line(2,2, 4,3); // 1/2
    // matrix.line(2,2, 5,3); // 1/3 errors?
    // matrix.line(2,2, 6,3); // 1/4


    // matrix.line(2,2, 5,3)
    // // rise 1
    // // run 3
    // 
    // matrix.line(5,3, 2,2)
    // // rise = -1
    // // rise = -3
    // 
    matrix.line(4,20, 8,6)
    // // rise = -7
    // // rise = 2

    // $('select').change(function() {
    //     var selection = $(this).val();
    // 
    //     if (selection === "rain") {
            // matrix.draw(rain_drops);
    //     } else {
    //         matrix.draw(snake);
    //     }
    // });
});