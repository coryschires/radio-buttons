var fireworks = function(matrix) {
    var firework = {};
    
    var effects = {
        star: function() {
            matrix.point(10,10).check().neighbor('southwest', 3).check();
        },
        dimond: function() {
            console.log('dimond explosion');
        }
    }
    
    firework.explode = $('input', matrix.wrapper).click(function() {

        // var x = (Math.floor(Math.random() * matrix.width)) + 1;
        effects.star();
    });
    
    return firework;
}