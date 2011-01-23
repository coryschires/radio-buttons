beforeEach(function() {  
  this.addMatchers({
    toHaveCoordinateChecked: function(x, y) {
      var raw_input = this.actual.wrapper.find("input[data-y='"+y+"'][data-x='"+x+"']");
      return raw_input.attr('checked') === true;
    }
  })
});
