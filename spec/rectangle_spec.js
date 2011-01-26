describe("radio_button_canvas rectangle functions", function() {
  var canvas;
  var rectangle;
  
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
  });
  
  describe("rectangle", function() {
    beforeEach(function() {
      rectangle = canvas.rect(2,2, 8,8);
    });
    
    it("should check the top side of the rectange", function() {

      expect(rectangle.points).toContainPointWithCoordinates(2,2);
      expect(rectangle.points).toContainPointWithCoordinates(3,2);
      expect(rectangle.points).toContainPointWithCoordinates(4,2);
      expect(rectangle.points).toContainPointWithCoordinates(5,2);
      expect(rectangle.points).toContainPointWithCoordinates(6,2);
      expect(rectangle.points).toContainPointWithCoordinates(7,2);
      expect(rectangle.points).toContainPointWithCoordinates(8,2);
    });
    it("should check the right side of the rectange", function() {
      expect(rectangle.points).toContainPointWithCoordinates(8,2);
      expect(rectangle.points).toContainPointWithCoordinates(8,3);
      expect(rectangle.points).toContainPointWithCoordinates(8,4);
      expect(rectangle.points).toContainPointWithCoordinates(8,5);
      expect(rectangle.points).toContainPointWithCoordinates(8,6);
      expect(rectangle.points).toContainPointWithCoordinates(8,7);
      expect(rectangle.points).toContainPointWithCoordinates(8,8);
    });
    it("should check the bottom side of the rectange", function() {
      expect(rectangle.points).toContainPointWithCoordinates(2,8);
      expect(rectangle.points).toContainPointWithCoordinates(3,8);
      expect(rectangle.points).toContainPointWithCoordinates(4,8);
      expect(rectangle.points).toContainPointWithCoordinates(5,8);
      expect(rectangle.points).toContainPointWithCoordinates(6,8);
      expect(rectangle.points).toContainPointWithCoordinates(7,8);
      expect(rectangle.points).toContainPointWithCoordinates(8,8);
    });
    it("should check the left side of the rectange", function() {
      expect(rectangle.points).toContainPointWithCoordinates(2,2);
      expect(rectangle.points).toContainPointWithCoordinates(2,3);
      expect(rectangle.points).toContainPointWithCoordinates(2,4);
      expect(rectangle.points).toContainPointWithCoordinates(2,5);
      expect(rectangle.points).toContainPointWithCoordinates(2,6);
      expect(rectangle.points).toContainPointWithCoordinates(2,7);
      expect(rectangle.points).toContainPointWithCoordinates(2,8);
    });
    
  });
  
});
