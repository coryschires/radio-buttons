describe("radio_button_canvas#line", function() {
  var canvas;
  var line;
    
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
    canvas.create();
  });
  
  describe("the line is between 2,2 and 4,4", function() {
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
      expect(line.length).toEqual(3);
    });
    it("should contian point(2,2) in the first position", function() {
      expect(line[0].x).toEqual(2);
      expect(line[0].y).toEqual(2);
    });
    it("should contian point(3,3) in the second position", function() {
      expect(line[1].x).toEqual(3);
      expect(line[1].y).toEqual(3);
    });
    it("should contian point(4,4) in the third position", function() {
      expect(line[2].x).toEqual(4);
      expect(line[2].y).toEqual(4);
    });
  });
});