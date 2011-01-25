describe("radio_button_canvas core functions", function() {

  describe("#self", function() {
    it("should return a cached copy of $(this)", function() {
      var canvas = $('<div id="my_canvas">').radio_button_canvas();
      expect(canvas.self.attr('id')).toEqual('my_canvas');
    });
  });

  describe("#width", function() {
    it("should return the width of the canvas (as measured in the number of radio buttons)", function() {
      var canvas = $('<div>').radio_button_canvas({ width: 360 });
      expect(canvas.width).toEqual(30);
    });
  });

  describe("#height", function() {
    it("should return the height of the canvas (as measured in the number of radio buttons)", function() {
      var canvas = $('<div>').radio_button_canvas({ height: 414 });
      expect(canvas.height).toEqual(30);
    });
  });

});

  



