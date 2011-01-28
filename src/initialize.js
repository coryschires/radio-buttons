$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
        width: 507,
        height: 347
    });
    
    var face = canvas.shape(
      [3,2], [4,3], [5,2], [2,4], [6,4], [3,5], [4,5], [5,5]
    );
    
    // canvas.point(2,2); // left eye
    // canvas.point(6,2); // right eye
    // canvas.point(4,4); // nose
    // canvas.point(2,6); // mouth
    // canvas.point(3,6); // mouth
    // canvas.point(4,6); // mouth
    // canvas.point(5,6); // mouth
    // canvas.point(6,6); // mouth

    // setInterval(function() {
    //   shape.move('south');
    // }, 200);
    
    // draw a face

    // canvas.line(2,2, 8,3);
    
    
    // canvas.line(2,2, 4,4)
    
    // var line = canvas.line(3,3, 3,6)
    
    // canvas.shape([line]);
    
    // canvas.line(3,6, 3,3)
    
    
    // var rect = canvas.rectangle(2,2, 8,6);
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