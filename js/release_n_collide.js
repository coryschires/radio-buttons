var matrix_builder = function() {
    var self = {};

    var create_buttons = function(num) {
        for (var i=0; i < num; i++) {
            $('#checkbox_grid').append('<input type="radio" name="radio_'+i+'" id="radio_'+i+'">');
        }
    };
    
    var number_of_buttons_to_fill_screen = function() {
        var button_width = 12.63,
            num_of_rows = $(window).width() / button_width,
            num_of_cols = $(window).height() / button_width;

        return num_of_rows * num_of_cols;
    };

    var complete_final_row = function(width, height) {
        var current_width_of_final_row = $("input[row='"+ height +"']").length;
        create_buttons(width - current_width_of_final_row);
    };

    var apply_col_and_row_attributes = function() {
        var current_row = 1,
            current_top = 0;
        var current_col = 0,
            current_left = 0;

        $('input').each(function() {

            // set row attributes
            if (this.offsetTop > current_top) {
                current_row += 1;
                current_top = this.offsetTop;
            }

            // set col attributes
            if (this.offsetLeft < current_left) {
                current_col = 1;
                current_left = this.offsetLeft;
            } else {
                current_col += 1;
                current_left = this.offsetLeft;
            }

            // apply attributes
            $(this).attr({'row': current_row, 'col': current_col});
        });
    };

    self.create = function() {
        create_buttons(number_of_buttons_to_fill_screen());
        apply_col_and_row_attributes();
        
        martix_width = $("input[row='1']").length;
        martix_height = $("input[col='1']").length;
        
        complete_final_row(martix_width, martix_height)
    };

    return self;
};


var hover_effects = function() {

    var get_neighbors = function(radio) {
        var row = parseInt(radio.attr('row')),
            col = parseInt(radio.attr('col'));

        var find_radio = function(row, col) {
            return $("input[col='"+ col +"'][row='"+ row +"']");
        }

        return {
            primary: {
                'north': find_radio(row-1, col),
                'south': find_radio(row+1, col),
                'east': find_radio(row, col+1),
                'west': find_radio(row, col-1)
            },
            secondary: {
                'north': find_radio(row-2, col),
                'south': find_radio(row+2, col),
                'east': find_radio(row, col+2),
                'west': find_radio(row, col-2),
                'northeast': find_radio(row-1, col+1),
                'southeast': find_radio(row+1, col+1),
                'southwest': find_radio(row+1, col-1),
                'northwest': find_radio(row-1, col-1)
            },
            tertiary: {
                'north': find_radio(row-3, col),
                'south': find_radio(row+3, col),
                'east': find_radio(row, col+3),
                'west': find_radio(row, col-3),
                'north_northeast': find_radio(row-2, col+1),
                'north_northweat': find_radio(row-2, col-1),
                'south_southeast': find_radio(row+2, col+1),
                'north_southhweat': find_radio(row+2, col-1),
                'east_northeast': find_radio(row-1, col+2),
                'east_southeast': find_radio(row+1, col+2),
                'west_northeast': find_radio(row-1, col-2),
                'west_southeast': find_radio(row+1, col-2),
            }

        };

    };

    var uncheck = function(radio) {
        var neighbors = get_neighbors(radio);
        
        // main radio button
        setTimeout(function() { 
            radio.attr('checked', false); 
        }, 900);
        
        // primary neighboring radio buttons
        setTimeout(function() {
            $.each(neighbors.primary, function(key, val) {
                val.attr('checked', false);
            });
        }, 700);
        
        // secondary radio buttons
        setTimeout(function() {
            $.each(neighbors.secondary, function(key, val) {
                val.attr('checked', false);
            });
        }, 500);

        // secondary radio buttons
        setTimeout(function() {
            $.each(neighbors.tertiary, function(key, val) {
                val.attr('checked', false);
            });
        }, 300);
    };

    var check = function(radio) {
        var neighbors = get_neighbors(radio);
    
        $.each(neighbors.primary, function(key, val) {
            val.attr('checked', true);
        });

        $.each(neighbors.secondary, function(key, val) {
            val.attr('checked', true);
        });

        $.each(neighbors.tertiary, function(key, val) {
            val.attr('checked', true);
        });
        
        radio.attr('checked', true);
    };


    return $('input').hover(function() {
        check($(this));
    }, function() {
        uncheck($(this));
    });
    
};


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


$(document).ready(function() {
    var matrix = matrix_builder();
    matrix.create(); // on page load

    // $(window).resize(function() {
    //     matrix.destroy();
    //     matrix.create();
    // });

    hover_effects();
    click_effects();
});