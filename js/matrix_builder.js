var matrix_builder = function(wrapper_div) {
    var matrix = {};
    matrix.wrapper = $(wrapper_div);

    var create_buttons = function(num) {
        var button_count = $('input', matrix.wrapper).length
        
        for (var i=0; i < num; i++) {
            
            if (matrix.exists()) {
                var data_x = matrix.width - num + i + 1;
                $('#checkbox_grid').append('<input type="radio" name="radio_'+(i+button_count)+'" id="radio_'+(i+button_count)+'" data-y="'+matrix.height+'" data-x="'+data_x+'">');
            } else {
                $('#checkbox_grid').append('<input type="radio" name="radio_'+(i+button_count)+'" id="radio_'+(i+button_count)+'">');
            }
        }
    };
    
    var number_of_buttons_to_fill_screen = function() {
        var button_width = 13,
            num_of_rows = $(window).width() / button_width,
            num_of_cols = $(window).height() / button_width;

        return num_of_rows * num_of_cols;
    };

    var complete_final_row = function(width, height) {
        var current_width_of_final_row = $("input[data-y='"+ height +"']").length;
        create_buttons(width - current_width_of_final_row);
    };

    var apply_col_and_row_attributes = function() {
        var current_y = 0,
            current_top = 0;
        var current_x = 0,
            current_left = 0;

        $('input', matrix.wrapper).each(function() {

            // set row attributes
            if (this.offsetTop > current_top) {
                current_y += 1;
                current_top = this.offsetTop;
            }

            // set col attributes
            if (this.offsetLeft < current_left) {
                current_x = 1;
                current_left = this.offsetLeft;
            } else {
                current_x += 1;
                current_left = this.offsetLeft;
            }

            // apply attributes
            $(this).attr({'data-y': current_y, 'data-x': current_x});
        });
    };
    
    var set_demensions = function() {
        matrix.width = $("input[data-y='1']").length;
        matrix.height = $("input[data-x='1']").length;
    };
    
    matrix.exists = function() {
        return matrix.width && matrix.height;
    };
    
    matrix.line = function(x1, y1, x2, y2) {
        var initial_rise = (y1 - y2) * -1;
        var initial_run = (x1 - x2) * -1;
        
        var calculate_slope = function() {
            var rise = initial_rise
            var run = initial_run;

            var divisor = 2

            while (divisor < Math.abs(initial_rise) && divisor < Math.abs(initial_run)) {
                if (rise % divisor === 0 && run % divisor === 0) {
                    rise = rise / divisor
                    run = run / divisor
                } else {
                    divisor += 1;
                }
            }
            return { rise: rise, run: run }
        };
        
        console.log(calculate_slope());
        
        var plot_line = function(x, y, slope) {
            
            // check the current point
            matrix.point(x, y).check();
        
            // increment the x and y
            x += slope.run;
            y += slope.rise;
            
            // call recursively until end point has been reached
            if (x !== x2 && y !== y2) {
                plot_line(x, y, slope);
            } else {
                matrix.point(x2, y2).check();
            }
        };

        return plot_line(x1, y1, calculate_slope());
    }
    
    matrix.point = function(x, y) {
        var self = {}, cache;
        self.x = x;
        self.y = y;

        var cache = matrix.wrapper.find("input[data-y='"+self.y+"'][data-x='"+self.x+"']");
        
        self.check = function() {
            cache.attr('checked', true);
            return self;
        };
        self.uncheck = function() {
            cache.attr('checked', false);
            return self;
        };
        self.is_checked = function() {
            return cache.attr('checked') == true;
        };
        self.move = function(x, y) {
            return self.uncheck().neighbor(x, y).check();
        };

        self.neighbor = function(x, y) {
            var neighbor = { x: self.x, y: self.y };
            
            // allow user to pass ordinal/cardinal directions for convienence 
            if (x === "north")          { neighbor.y -= 1; }
            else if (x === "south")     { neighbor.y += 1; }
            else if (x === "east")      { neighbor.x += 1; }
            else if (x === "west")      { neighbor.x -= 1; }
            else if (x === "northeast") { neighbor.y -= 1; neighbor.x += 1; }
            else if (x === "southeast") { neighbor.y += 1; neighbor.x += 1; }
            else if (x === "northwest") { neighbor.y -= 1; neighbor.x -= 1; }
            else if (x === "southwest") { neighbor.y += 1; neighbor.x -= 1; }
            
            // but default to more powerful cartesian coordinates
            else { neighbor.x += x; neighbor.y += y; }
            
            return matrix.point(neighbor.x, neighbor.y);
        };

        // self.neighbors = function() {
        // 
        //     return {
        //         primary: {
        //             'north': self.neighbor('north'),
        //             'south': self.neighbor('south'),
        //             'east': neighbor('east'),
        //             'west': neighbor('west')
        //         },
        //         secondary: {
        //             'north': self.neighbor(0, 2),
        //             'south': self.neighbor(0, -2),
        //             'east': self.neighbor(2, 0),
        //             'west': self.neighbor(-2, 0),
        //             'northeast': self.neighbor('northeast'),
        //             'southeast': self.neighbor('southeast'),
        //             'southwest': self.neighbor('southwest'),
        //             'northwest': self.neighbor('northwest')
        //         },
        //         tertiary: {
        //             'north': self.neighbor(0, 3),
        //             'south': self.neighbor(0, -3),
        //             'east': self.neighbor(3, 0),
        //             'west': self.neighbor(-3, 0),
        //             'north_northeast': self.neighbor(1, -2),
        //             'north_northweat': self.neighbor(-1, -2),
        //             'south_southeast': self.neighbor(1, 2),
        //             'north_southhweat': self.neighbor(-1, 2),
        //             'east_northeast': self.neighbor(2, 1),
        //             'east_southeast': self.neighbor(2, 1),
        //             'west_northeast': self.neighbor(-2, -1),
        //             'west_southeast': self.neighbor(-2, -1)
        //         }
        // 
        //     };
        // };
        
        return self;
    }

    matrix.create = function() {        
        create_buttons(number_of_buttons_to_fill_screen());
        apply_col_and_row_attributes();
        set_demensions();
        
        complete_final_row(matrix.width, matrix.height)
    };
    
    matrix.destroy = function() {
        $('input', matrix.wrapper).remove();
    }
    matrix.draw = function(effect) {
        matrix.destroy();
        matrix.create();
        effect(this);
    }

    return matrix;
};