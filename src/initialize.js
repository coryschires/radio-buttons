$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
      width: 220,   // 18 buttons
      height: 500   // 36 buttons
    });
    
    var tetris = function(canvas) {
      var board = { 
        height: 36, 
        width: 18 
      };
      
      var block_types = {
        pipe: [[7,1], [8,1], [9,1], [10,1], [11,1], [12,1]],
        square: [[9,1], [9,2], [10,1], [10,2]],
        backwards_z: [[9,1], [9,2], [10,2], [10,3]],
        forwards_z: [[9,2], [9,3], [10,1], [10,2]],
        triangle: [[10,1], [9,2], [10,2], [11,2]]
      };
      
      var block_builder = function() {
        var block = canvas.shape.apply(this, block_types.square);

        block.lowest_point = function() {
          return block.points.map(function(b) { return b.y; }).sort().pop();
        };
        block.active = function() {
          return board.height > block.lowest_point();
        }
        
        return block;
      }
      
      
      
      var block_pile = function() {
        var self = canvas.shape.apply(this, $.makeArray(arguments));
        
        // self.points = [];
        
        // self.add_points = function(block) {
        //   self.points = canvas.shape(self.points, block).points;
        // };
        
        return self;
      }

      // initialize objects
      var block = block_builder();
      var pile = {};
      
      // loop for game logic
      setInterval(function() {

        if ( block.active() ) {
            block.move('south');
        } else {
          pile = block_pile(block, pile);
          console.log(pile);
          block = block_builder();
        }
      }, 250);
      
    }; // end to tetris function

    canvas.draw(tetris);
    
});