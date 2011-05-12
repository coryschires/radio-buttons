var snake = function(canvas) {
  
  var snake;

  var draw = function(point) {
    return {
      outer: canvas.polygon(
        point.neighbor(0, -3),
        point.neighbor(3, 0),
        point.neighbor(0, 3),
        point.neighbor(-3, 0)
      ),
      middle: canvas.polygon(
        point.neighbor(0, -2),
        point.neighbor(2, 0),
        point.neighbor(0, 2),
        point.neighbor(-2, 0)
      ),
      inner: canvas.polygon(
        point.neighbor(0, -1),
        point.neighbor(1, 0),
        point.neighbor(0, 1),
        point.neighbor(-1, 0),
        point
      )
    };
  };
  
  var fade = function(snake) {
    setTimeout(function() { snake.outer.uncheck(); }, 300);
    setTimeout(function() { snake.middle.uncheck(); }, 500);
    setTimeout(function() { snake.inner.uncheck(); }, 700);
  };
  
  return $('input').hover(function() {
    var input = $(this);
    var point = canvas.point(input.attr('data-x'), input.attr('data-y'));
    snake = draw(point);
  }, function() {
    fade(snake);
  });
 
};
