/**
 * Radio Button Canvas - jQuery plugin that creates a matrix of radio buttons
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
            var matrix = {};
            
            this.each(function() {

                matrix.wrapper = $(this);

                matrix.width = function() {
                    var width = config.width;
                    return Math.floor(width / 12);
                }();
                matrix.height = function() {
                    var height = config.height;
                    return Math.floor(height / 13.8);
                }();
                matrix.create = function() {
                    var data_y = 1;
                    var data_x = 1;
                
                    for (var col = 0; col < matrix.height; col++) {
                        for (var row=0; row < matrix.width; row++) {
                            var count = (col * matrix.width) + row
                            var input = '<input type="radio" name="radio_'+count+'" id="radio_'+count+'" data-y="'+data_y+'" data-x="'+data_x+'" >';
                            matrix.wrapper.append(input);
                            data_x += 1;
                        }
                        matrix.wrapper.append('<br>');
                        data_y += 1;
                        data_x = 1;
                    }
                    
                };                
                matrix.destroy = function() {
                    $('input', matrix.wrapper).remove();
                }
                matrix.draw = function(effect) {
                    effect(this);
                }
                matrix.line = function(x1, y1, x2, y2) {
                    var initial_rise = (y1 - y2) * -1;
                    var initial_run = (x1 - x2) * -1;
                    var line = [];
                    
                    var calculate_slope = function() {
                        var rise = initial_rise
                        var run = initial_run;
                        
                        var divisor = 2
                        
                        while (divisor <= Math.abs(initial_rise) && divisor <= Math.abs(initial_run)) {
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
                        
                        // check the current point and add to line array
                        line.push(matrix.point(x, y).check());
                        
                        // increment the x and y
                        x += slope.run;
                        y += slope.rise;
                        
                        // call recursively until end point has been reached
                        if (x <= x2 && y <= y2) {
                            plot_line(x, y, slope);
                        }
                    };
                    
                    plot_line(x1, y1, calculate_slope());
                    
                    return line;
                }
                matrix.point = function(x, y) {
                    var self = {}, cache;
                    self.x = parseInt(x);
                    self.y = parseInt(y);
                    
                    cache = matrix.wrapper.find("input[data-y='"+self.y+"'][data-x='"+self.x+"']");
                    
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
                    
                    return self;
                }
            
            })
            return matrix;
        }
    })

})(jQuery);