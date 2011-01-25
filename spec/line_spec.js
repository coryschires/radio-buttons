describe("radio_button_canvas line functions", function() {
  var canvas;
  var line;
    
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
  });
  
  describe("the line between 2,2 and 4,4", function() {
    beforeEach(function() { 
      line = canvas.line(2,2, 4,4);
    });
    it("should check point 2,2", function() {
      expect(canvas).toHaveCoordinateChecked(2,2);
    });
    it("should check point 3,3", function() {
      expect(canvas).toHaveCoordinateChecked(3,3);
    });
    it("should check point 4,4", function() {
      expect(canvas).toHaveCoordinateChecked(4,4);
    });
  });
  
  describe("the line between 2,2 and 14,4", function() {
    beforeEach(function() { 
      line = canvas.line(2,2, 14,4);
    });
    it("should check point 2,2", function() {
      expect(canvas).toHaveCoordinateChecked(2,2);
    });
    it("should check point 8,3", function() {
      expect(canvas).toHaveCoordinateChecked(8,3);
    });
    it("should check point 14,4", function() {
      expect(canvas).toHaveCoordinateChecked(14,4);
    });
  });
  
  describe("the array returned by line(2,2, 4,4)", function() {
    beforeEach(function() {
      line = canvas.line(2,2, 4,4);
    });
    it("should contain three points (those that constitute the line)", function() {
      expect(line.points.length).toEqual(3);
    });
    it("should contian point(2,2) in the first position", function() {
      expect(line.points[0]).toHaveCoordinates(2,2)
    });
    it("should contian point(3,3) in the second position", function() {
      expect(line.points[1]).toHaveCoordinates(3,3)
    });
    it("should contian point(4,4) in the third position", function() {
      expect(line.points[2]).toHaveCoordinates(4,4)
    });
  });
});