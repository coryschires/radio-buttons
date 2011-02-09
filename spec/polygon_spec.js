describe("radio_button_canvas polygon functions", function() {
  var canvas;
  var ploygon;
  
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
  });
  
  describe("private initialize method", function() {
    it("should accept points as well as coordinates", function() {
      
    });
  });
  
  describe("three sided polygon", function() {
    beforeEach(function() {
      polygon = canvas.polygon([3,4], [7,2], [7,8]);
    });
    
    it("should check the first side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(3,4);
      expect(polygon.points).toContainPointWithCoordinates(5,3);
      expect(polygon.points).toContainPointWithCoordinates(7,2);
    });
    it("should check the second side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(7,2);
      expect(polygon.points).toContainPointWithCoordinates(7,3);
      expect(polygon.points).toContainPointWithCoordinates(7,4);
      expect(polygon.points).toContainPointWithCoordinates(7,5);
      expect(polygon.points).toContainPointWithCoordinates(7,6);
      expect(polygon.points).toContainPointWithCoordinates(7,7);
      expect(polygon.points).toContainPointWithCoordinates(7,8);
    });
    it("should check the third side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(7,8);
      expect(polygon.points).toContainPointWithCoordinates(6,7);
      expect(polygon.points).toContainPointWithCoordinates(5,6);
      expect(polygon.points).toContainPointWithCoordinates(4,5);
      expect(polygon.points).toContainPointWithCoordinates(3,4);
    });
  });
  
  describe("four sided polygon", function() {
    beforeEach(function() {
      polygon = canvas.polygon([2,4], [6,2], [8,6], [6,8]);
    });
    
    it("should check the first side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(2,4);
      expect(polygon.points).toContainPointWithCoordinates(4,3);
      expect(polygon.points).toContainPointWithCoordinates(6,2);
    });
    it("should check the second side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(6,2);
      expect(polygon.points).toContainPointWithCoordinates(7,4);
      expect(polygon.points).toContainPointWithCoordinates(8,6);
    });
    it("should check the third side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(8,6);
      expect(polygon.points).toContainPointWithCoordinates(7,7);
      expect(polygon.points).toContainPointWithCoordinates(6,8);
    });
    it("should check the fourth side of the ploygon", function() {
      expect(polygon.points).toContainPointWithCoordinates(6,8);
      expect(polygon.points).toContainPointWithCoordinates(5,7);
      expect(polygon.points).toContainPointWithCoordinates(4,6);
      expect(polygon.points).toContainPointWithCoordinates(3,5);
      expect(polygon.points).toContainPointWithCoordinates(2,4);
    });
  });
  
});
