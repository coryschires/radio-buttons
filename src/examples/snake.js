var snake = function(matrix) {
  
  var draw = function(point) {
    var diamonds = canvas.polygon(
      point.neighbor(0, -3),
      point.neighbor(0, 3),
      point.neighbor(3, 0),
      point.neighbor(-3, 0)
    );
  };
  
  var fade = function(point) {
  };
  
  return $('input').hover(function() {
    var input = $(this);
    var point = matrix.point(input.attr('data-x'), input.attr('data-y'));
    draw(point);
  }, function() {
    var input = $(this);
    var point = matrix.point(input.attr('data-x'), input.attr('data-y'));
    fade(point);
  });
  
  
  
  
  
  // var get_neighbors = function(point) {
  //     return {
  //         primary: {
  //             'north': point.neighbor('north'),
  //             'south': point.neighbor('south'),
  //             'east': point.neighbor('east'),
  //             'west': point.neighbor('west')
  //         },
  //         secondary: {
  //             'north': point.neighbor(0, -2),
  //             'south': point.neighbor(0, 2),
  //             'east': point.neighbor(2, 0),
  //             'west': point.neighbor(-2, 0),
  //             'northeast': point.neighbor('northeast'),
  //             'southeast': point.neighbor('southeast'),
  //             'southwest': point.neighbor('southwest'),
  //             'northwest': point.neighbor('northwest')
  //         },
  //         tertiary: {
  //             'north': point.neighbor(0, -3),
  //             'south': point.neighbor(0, 3),
  //             'east': point.neighbor(3, 0),
  //             'west': point.neighbor(-3, 0),
  //             'north_northeast': point.neighbor(1, -2),
  //             'north_northweat': point.neighbor(-1, -2),
  //             'south_southeast': point.neighbor(1, 2),
  //             'north_southwest': point.neighbor(-1, 2),
  //             'east_northeast': point.neighbor(2, -1),
  //             'east_southeast': point.neighbor(2, 1),
  //             'west_northeast': point.neighbor(-2, -1),
  //             'west_southeast': point.neighbor(-2, 1)
  //         }
  //     };
  // };
  // 
  // var fade = function(point) {
  //     var neighbors = get_neighbors(point);
  //     
  //     // main radio button
  //     setTimeout(function() { 
  //         point.uncheck();
  //     }, 900);
  //     
  //     setTimeout(function() {
  //         $.each(neighbors.primary, function(key, val) {
  //             val.uncheck();
  //         });
  //     }, 700);
  //     
  //     setTimeout(function() {
  //         $.each(neighbors.secondary, function(key, val) {
  //             val.uncheck();
  //         });
  //     }, 500);
  //         
  //     setTimeout(function() {
  //         $.each(neighbors.tertiary, function(key, val) {
  //             val.uncheck();
  //         });
  //     }, 300);
  // };
  // 
  // var draw = function(point) {
  //     var neighbors = get_neighbors(point);
  // 
  //     $.each(neighbors.primary, function(key, val) {
  //         val.check();
  //     });
  // 
  //     $.each(neighbors.secondary, function(key, val) {
  //         val.check();
  //     });
  // 
  //     $.each(neighbors.tertiary, function(key, val) {
  //         val.check();
  //     });
  // 
  //     point.check();
  // };
  // 
  // return $('input').hover(function() {
  //     var input = $(this);
  //     draw(matrix.point(input.attr('data-x'), input.attr('data-y')));
  // }, function() {
  //     var input = $(this);
  //     fade(matrix.point(input.attr('data-x'), input.attr('data-y')));
  // });

};