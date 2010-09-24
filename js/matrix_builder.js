var matrix_builder = function(wrapper_div) {
    var matrix = {};
    matrix.wrapper = $(wrapper_div);

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
    
    matrix.point = function(x, y) {
        var self = {}
        self.x = x;
        self.y = y;        
        self.check = function() {
            matrix.wrapper.find("input[data-y='"+self.y+"'][data-x='"+self.x+"']").attr('checked', true);
        };
        self.uncheck = function() {
            matrix.wrapper.find("input[data-y='"+self.y+"'][data-x='"+self.x+"']").attr('checked', false);
        };
        self.is_checked = function() {
            return matrix.wrapper.find("input[data-y='"+self.y+"'][data-x='"+self.x+"']").attr('checked') == true;
        };
        self.move = function(direction) {
            self.uncheck();
            if (direction === "north")          { self.y -= 1; }
            else if (direction === "south")     { self.y += 1; }
            else if (direction === "east")      { self.x += 1; }
            else if (direction === "west")      { self.x -= 1; }
            else if (direction === "northeast") { self.y -= 1; self.x += 1; }
            else if (direction === "southeast") { self.y += 1; self.x += 1; }
            else if (direction === "northwest") { self.y -= 1; self.x -= 1; }
            else if (direction === "southwest") { self.y += 1; self.x -= 1; }
            self.check();
        };
        return self;
    }

    matrix.create = function() {
        create_buttons(number_of_buttons_to_fill_screen());
        apply_col_and_row_attributes();
        set_demensions();
        
        complete_final_row(matrix.width, matrix.height)
    };

    return matrix;
};