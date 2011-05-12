$(document).ready(function() {

    var canvas = $('#canvas').radio_button_canvas({
      width: 220,   // 18 buttons
      height: 500   // 36 buttons
    });
    
    canvas.point(2,10)
    
    // var tetris = function(canvas) {
    //   
    //   // 1. Should not be able to move off the edge of the board
    //   // 2. Rotating blocks?
    //   // 3. Full lines should disappear.
    //   // 4. Should not be able to move south when touching bottom edge of board or edge of pile.
    //   // 5. Game should have an end?
    //   
    //   var game = function() {
    //     var self = {};
    //     var keyboard_events = {
    //      37: 'west',
    //      39: 'east',
    //      40: 'south'
    //     }
    //     
    //     var block_types = {
    //       pipe: [[7,1], [8,1], [9,1], [10,1], [11,1], [12,1]],
    //       square: [[9,1], [9,2], [10,1], [10,2]],
    //       backwards_z: [[9,1], [9,2], [10,2], [10,3]],
    //       forwards_z: [[9,2], [9,3], [10,1], [10,2]],
    //       triangle: [[10,1], [9,2], [10,2], [11,2]]
    //     };
    //     
    //     var execute_move = function(block, direction) {
    //       if ( !block.touching_edge_of_board() ) { 
    //         block.move(direction);
    //       }
    //     }
    //     
    //     self.board = {
    //       width: 18,
    //       height: 36
    //     };
    //     
    //     self.random_block = function() {
    //       var types = [];
    //       $.each(block_types, function(key, val) {
    //         types.push(key);
    //       });
    //       var type = types[Math.floor(types.length * Math.random())];
    //       return canvas.shape.apply(this, block_types[type]);
    //     }
    //     self.respond_to_keyboard_events = function(block) {
    //       $(document).unbind('keydown'); // clear any queued events
    //       
    //       $(document).one('keydown', function(event){
    //         var direction = keyboard_events[event.keyCode];
    //         if (direction) {
    //           execute_move(block, direction);
    //           event.preventDefault();
    //         }
    //       });
    //     }
    //     
    //     return self;
    //   }();
    //   
    //   var block_builder = function() {
    //     var block = game.random_block();
    // 
    //     block.touching_edge_of_board = function() {
    //       var edge = false;
    //       $.each(block.points, function(index, point) {
    //         if (point.x <= 0 || point.x >= game.board.width) {
    //           edge = true;
    //         }
    //       });
    //       return edge;
    //     };
    //     block.touching_bottom_of_board = function() {
    //       var touching_bottom = false;
    //       $.each(block.points, function(index, point) {
    //         if (point.y >= game.board.height) {
    //           touching_bottom = true;
    //         }
    //       });
    //       return touching_bottom;
    //     };
    //     block.touching_edge_of_pile = function() {
    //       var edge = false;
    //       $.each(block.points, function(index, point) {
    //         if (pile.edges.includes(point)) {
    //           edge = true;
    //         }
    //       });
    //       return edge;
    //     };
    //     block.active = function() {
    //       return !block.touching_edge_of_pile() && !block.touching_bottom_of_board();
    //     };
    //     return block;
    //   }
    // 
    //   var block_pile = function(pile, block) {
    //     var self = function() {
    //       pile = pile || canvas.shape();
    //       block = block || canvas.shape();
    //       $.each(block.points, function(index, point) {
    //         if ( !pile.includes(point) ) { pile.points.push(point); }
    //       });
    //       return canvas.shape.apply(this, pile.points);
    //     }();
    //     self.edges = function() {
    //       var edges = [];
    //       
    //       $.each(self.points, function(index, point) {
    //         var edge = point.neighbor('north');
    //         
    //         if ( !self.includes(edge) ) {
    //           edges.push( edge.uncheck() );
    //         }
    //       });
    //       return canvas.shape.apply(this, edges);
    //     }();
    //     return self;
    //   }
    // 
    //   // initialize objects
    //   var block = block_builder();
    //   var pile = block_pile();
    // 
    //   // loop for game logic
    //   setInterval(function() {
    // 
    //     game.respond_to_keyboard_events(block);
    //     
    //     if ( block.active() ) {
    //         block.move('south');
    //     } else {
    //       pile = block_pile(pile, block);
    //       block = block_builder();
    //     }
    //   }, 250);
    //   
    // }; // end to tetris function
    // 
    // canvas.draw(tetris);
    //     
});