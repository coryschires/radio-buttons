var rain_effect = function(matrix) {
    var rain = {};

    rain.fall = function(drop) {
        drop.move('south');

        if (drop.y < matrix.height) {
            setTimeout(function() {
                rain.fall(drop)
            }, 250);
        };
    };

    var test_drop = matrix.point(10,0);
    rain.fall(test_drop);

    return rain;
};

// file:///Users/coryschires/Desktop/radio-buttons/index.html