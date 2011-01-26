/**
 * Radio Button Canvas - jQuery plugin that creates a canvas of radio buttons
 * that you can use to create simple animations, pictures, and even games.
 *
 * Copyright (c) 2011 Cory Schires (coryschires.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 0.0.1
 */

(function($) {

    $.radio_button_canvas = {
        defaults: {
            width: $(window).width(),
            height: $(window).height()
        }
    }

    $.fn.extend({
        radio_button_canvas: function(config) {
            
            var config = $.extend({}, $.radio_button_canvas.defaults, config);
            var canvas = {};
            
            this.each(function() {

                canvas.self = $(this);
                canvas.width = function() {
                    return Math.floor(config.width / 12);
                }();
                canvas.height = function() {
                    return Math.floor(config.height / 13.8);
                }();
                canvas.draw = function(effect) {
                    effect(this);
                }
                canvas.line = function(x1, y1, x2, y2) {
                    var initial_rise = (y1 - y2) * -1;
                    var initial_run = (x1 - x2) * -1;
                    var points = [];
                    
                    var calculate_slope = function() {
                        var rise = initial_rise
                        var run = initial_run;
                        var divisor = 2
                        
                        while (divisor <= Math.abs(initial_rise) || divisor <= Math.abs(initial_run)) {
                            if (rise % divisor === 0 && run % divisor === 0) {
                                rise = rise / divisor
                                run = run / divisor
                            } else {
                                divisor += 1;
                            }
                        }

                        return { rise: rise, run: run }
                    };
                    
                    var plot_line = function(x, y, slope) {
                        var have_not_reached_endpoint = !(x === x2 && y === y2);

                        // push the current coordinates into the points array
                        points.push([x, y]);
                        
                        if ( have_not_reached_endpoint ) {
                            // increment the x and y and call recursively
                            x += slope.run;
                            y += slope.rise;
                            plot_line(x, y, slope);
                        }
                    };
                    
                    var initialize = function() {
                      plot_line(x1, y1, calculate_slope());
                    }();
                    
                    return canvas.shape(points);
                }
                canvas.point = function(x, y) {
                    var self = {}, cache;
                    self.x = parseInt(x);
                    self.y = parseInt(y);
                    
                    cache = canvas.self.find("input[data-y='"+self.y+"'][data-x='"+self.x+"']");
                    
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
                        
                        return canvas.point(neighbor.x, neighbor.y).uncheck();
                    };
            
                    self.neighbors = function() {
                        return {
                            primary: {
                                'north': self.neighbor('north'),
                                'south': self.neighbor('south'),
                                'east': self.neighbor('east'),
                                'west': self.neighbor('west')
                            },
                            secondary: {
                                'north': self.neighbor(0, -2),
                                'south': self.neighbor(0, 2),
                                'east': self.neighbor(2, 0),
                                'west': self.neighbor(-2, 0),
                                'northeast': self.neighbor('northeast'),
                                'southeast': self.neighbor('southeast'),
                                'southwest': self.neighbor('southwest'),
                                'northwest': self.neighbor('northwest')
                            },
                            tertiary: {
                                'north': self.neighbor(0, -3),
                                'south': self.neighbor(0, 3),
                                'east': self.neighbor(3, 0),
                                'west': self.neighbor(-3, 0),
                                'north_northeast': self.neighbor(1, -2),
                                'north_northweat': self.neighbor(-1, -2),
                                'south_southeast': self.neighbor(1, 2),
                                'north_southwest': self.neighbor(-1, 2),
                                'east_northeast': self.neighbor(2, -1),
                                'east_southeast': self.neighbor(2, 1),
                                'west_northeast': self.neighbor(-2, -1),
                                'west_southeast': self.neighbor(-2, 1)
                            }
                        };
                    };
                    
                    var initialize = function() {
                      self.check();
                    }();
                    
                    return self;
                }
                
                canvas.rect = function(top_left_x, top_left_y, bottom_right_x, bottom_right_y) {
                  var points = [];
                  
                  var tlX = top_left_x,
                      tlY = top_left_y,
                      trX = top_left_x,
                      trY = bottom_right_y,
                      blX = top_left_x,
                      blY = bottom_right_y,
                      brX = bottom_right_x,
                      brY = bottom_right_y
                    
                  // var top_side = canvas.line(tlX, tlY, trX, trY)
                  
                  // canvas.point(tlX, tlY)
                  // canvas.point(blX, blY)
                  
                  canvas.line(tlX, tlY, blX, blY)
                  
                  
                  // var initialize = function() {
                  // 
                  //   var add_point = function(x, y) {
                  //     points.push([x,y]);
                  // 
                  //     var east = x < bottom_right_x && y === top_left_y;
                  //     var south = x === bottom_right_x && y < bottom_right_y;
                  //     var west = x > top_left_x && y === bottom_right_y;
                  //     var north = x === top_left_x && y > top_left_y;
                  //     
                  //     if (east) {
                  //       add_point(x+1, y);
                  //     } else if (south) {
                  //       add_point(x, y+1)
                  //     } else if (west) {
                  //       add_point(x-1, y)
                  //     } else if (north) {
                  //       if ((x, y-1) !== (top_left_x, top_left_y)  && north) {
                  //         add_point(x, y-1);
                  //       }
                  // 
                  //     }
                  //   };
                    
                    // add_point(top_left_x, top_left_y);
                    
                  // }();

                  // return canvas.shape(points);
                };
                
                
                canvas.shape = function(points) {
                  var self = {};
                  self.points = [];
                  
                  self.move = function(x, y) {
                    $.each(self.points, function(index, point) {
                      self.points[index] = point.move(x, y);
                    });
                    $.each(self.points, function(index, point) {
                      self.points[index].check();
                    });
                    return self;
                  };
                  
                  var initialize = function() {
                    $.each(points, function(index, coordinate) {
                      var point = canvas.point(coordinate[0], coordinate[1]);
                      self.points.push(point);
                    });
                  }();


                  return self;
                };
                
                var initialize = function() {
                    var data_y = 1;
                    var data_x = 1;
                
                    for (var col = 0; col < canvas.height; col++) {
                        for (var row=0; row < canvas.width; row++) {
                            var count = (col * canvas.width) + row
                            var input = '<input type="radio" name="radio_'+count+'" id="radio_'+count+'" data-y="'+data_y+'" data-x="'+data_x+'" >';
                            canvas.self.append(input);
                            data_x += 1;
                        }
                        canvas.self.append('<br>');
                        data_y += 1;
                        data_x = 1;
                    }
                    
                }();
            
            })
            return canvas;
        }
    })

})(jQuery);