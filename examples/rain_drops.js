var rain_drops = function(matrix) {
    var rain = {};
    var active_drops = 0;

    rain.make = function(drop) {
        drop.move('south');

        var drop_is_active = drop.y < matrix.height && !matrix.point(drop.x, drop.y+1).is_checked();

        if (drop_is_active) {
            setTimeout(function() {
                rain.make(drop)
            }, 25);
        } else {
            active_drops -= 1;
        };
    };    
    var drop = function() {
        var x = (Math.floor(Math.random() * matrix.width)) + 1;
        return matrix.point(x, 0);
    };
    
    // make it rain
    setInterval(function() {
        if (active_drops < 4) {
            rain.make(drop());
            active_drops += 1;
        };
    }, 600);

    return rain;
};