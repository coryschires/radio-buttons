$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
      width: 220,   // 18 buttons
      height: 500   // 36 buttons
    });
    
    var tetris = function(canvas) {
      var board = {
        width: 18,
        height: 36
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
        
        // block.lowest_point = function() {
        //   return block.points.map(function(b) { return b.y; }).sort().pop();
        // };
        block.touching_edge_of_board = function() {
          var edge = false;
          $.each(block.points, function(index, point) {
            if (point.x <= 0 || point.x >= board.width || point.y >= board.height) {
              edge = true;
            }
          });
          return edge;
        };
        block.touching_edge_of_pile = function() {
          var edge = false;
          $.each(block.points, function(index, point) {
            if (pile.edges.includes(point)) {
              edge = true; 
            }
          });
          return edge;
        };
        block.active = function() {
          var active = true
           
          if ( block.touching_edge_of_board() ) {
            active = false;
          }
          
          if ( block.touching_edge_of_pile() ) {
            active = false;
          };
          return active;
        };
        
        return block;
      }
      

      var block_pile = function(pile, block) {

        var self = function() {
          pile = pile || canvas.shape();
          block = block || canvas.shape();
          $.each(block.points, function(index, point) {
            if ( !pile.includes(point) ) { pile.points.push(point); }
          });
          return canvas.shape.apply(this, pile.points);
        }();
        
        self.edges = function() {
          var edges = [];
          
          $.each(self.points, function(index, point) {
            var edge = point.neighbor('north');
            
            if ( !self.includes(edge) ) {
              edges.push( edge.uncheck() );
            }
          });
          return canvas.shape.apply(this, edges);
        }();
        
        return self;
      }

      // initialize objects
      var block = block_builder();
      var pile = block_pile();
      
      // loop for game logic
      setInterval(function() {

        if ( block.active() ) {
            block.move('south');
        } else {
          pile = block_pile(pile, block);
          block = block_builder();
        }
      }, 250);
      
    }; // end to tetris function

    canvas.draw(tetris);
    
});