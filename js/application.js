var fun_with_checkboxes = function() {
    
    var create_radio_buttons = function() {
        var screen_width = $(window).width();
        var screen_height = $(window).height();
        
        var num_of_rows = screen_height / 12.63;
        var num_of_cols = screen_width / 12.63;
        
        num_of_checkboxes = num_of_rows * num_of_cols;
        
        // create the checkboxes
        for (var i=0; i < num_of_checkboxes; i++) {
            $('#checkbox_grid').append('<input type="radio" name="radio_'+i+'" id="radio_'+i+'">');
        }
    }();


    var apply_col_and_row_attributes = function() {
        var current_row = 1;
        var current_top = 0;

        var current_col = 0;
        var current_left = 0;

        $('#checkbox_grid input').each(function() {

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
    }();


    var check_radio_buttons_on_hover = function() {

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
        
    }();
};

$(document).ready(function() {
    fun_with_checkboxes();
});