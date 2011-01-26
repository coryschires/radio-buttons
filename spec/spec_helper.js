beforeEach(function() {  
  this.addMatchers({
    toHaveCoordinateChecked: function(x, y) {
      var raw_input = this.actual.self.find("input[data-y='"+y+"'][data-x='"+x+"']");
      return raw_input.attr('checked') === true;
    },
    toHaveCoordinates: function(x, y) {
      return this.actual.x === x && this.actual.y === y;
    },
    toContainPointWithCoordinates: function(x, y) {
      var has_point = false
      $.each(this.actual, function(index, point) {
        if (point.x === x && point.y === y) { has_point = true; }
      });
      return has_point;
    }

  })
});
