var snake = function(matrix) {

    var fade = function(point) {
        var neighbors = point.neighbors();
        
        // main radio button
        setTimeout(function() { 
            point.uncheck();
        }, 900);
        
        setTimeout(function() {
            $.each(neighbors.primary, function(key, val) {
                val.uncheck();
            });
        }, 700);
        
        setTimeout(function() {
            $.each(neighbors.secondary, function(key, val) {
                val.uncheck();
            });
        }, 500);
            
        setTimeout(function() {
            $.each(neighbors.tertiary, function(key, val) {
                val.uncheck();
            });
        }, 300);
    };

    var draw = function(point) {
        var neighbors = point.neighbors();

        $.each(neighbors.primary, function(key, val) {
            val.check();
        });

        $.each(neighbors.secondary, function(key, val) {
            val.check();
        });

        $.each(neighbors.tertiary, function(key, val) {
            val.check();
        });

        point.check();
    };

    return $('input').hover(function() {
        var input = $(this);
        draw(matrix.point(input.attr('data-x'), input.attr('data-y')));
    }, function() {
        var input = $(this);
        fade(matrix.point(input.attr('data-x'), input.attr('data-y')));
    });

};