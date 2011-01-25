beforeEach(function() {  
  this.addMatchers({
    toHaveCoordinateChecked: function(x, y) {
      var raw_input = this.actual.self.find("input[data-y='"+y+"'][data-x='"+x+"']");
      return raw_input.attr('checked') === true;
    },
    toHaveCoordinates: function(x, y) {
      return this.actual.x === x && this.actual.y === y;
    }

  })
});
