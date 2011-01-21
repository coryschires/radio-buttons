var click_effects = function() {
    
    var capture_previous_mouse_position = function() {
        var px, py, x, y;

        return $(document).mousemove(function(e){
            x = e.pageX;
            y = e.pageY;

            if(!px){ px = x; }
            if(!py){ py = y; }

            if( (Math.abs(x - px) >= 50) || (Math.abs(y - py) >= 50) ){
                // do something with previous mouse position
                    // if y < py then mouse moved up
                    // if y > py then mouse moved down
                
                // reset previous previous mouse position
                px = x;
                py = y;
            }

            // console.log(x);
            // console.log(y);
        });
    }();

    
    $('input').click(function() {
        return false;
    });
    
}