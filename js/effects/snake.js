var snake = function() {

    var get_neighbors = function(radio) {
        var row = parseInt(radio.attr('data-y')),
            col = parseInt(radio.attr('data-x'));

        var find_radio = function(row, col) {
            return $("input[data-x='"+ col +"'][data-y='"+ row +"']");
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