describe("radio_button_canvas shape functions", function() {
  var canvas;
  var shape;
  
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
  });
  
  describe("shape#points", function() {
    beforeEach(function() {
      shape = canvas.shape([ [2,2], [3,2], [3,3] ]);
    });
    it("should have a point with coordinates 2,2 in the first position", function() {
      expect(shape.points[0]).toHaveCoordinates(2,2);
    });
    it("should have a point with coordinates 3,2 in the second position", function() {
      expect(shape.points[1]).toHaveCoordinates(3,2);
    });
    it("should have a point with coordinates 3,3 in the third position", function() {
      expect(shape.points[2]).toHaveCoordinates(3,3);
    });
  });
  
  describe("shape.move()", function() {
    beforeEach(function() {
      shape = canvas.shape([ [2,2], [3,2], [3,3] ]);
    });
    describe("moving in an ordinal direction", function() {
      it("should move the first point north", function() {
        expect(shape.move('north').points[0]).toHaveCoordinates(2,1);
      });
      it("should move the second point north", function() {
        expect(shape.move('north').points[1]).toHaveCoordinates(3,1);
      });
      it("should move the third point north", function() {
        expect(shape.move('north').points[2]).toHaveCoordinates(3,2);
      });
      it("should have all points checked", function() {
        $.each(shape.move('north').points, function(index, point) {
          expect(point.is_checked()).toEqual(true);
        });
      });
    });
    describe("moving with cartesian coordinates", function() {
      it("should move the first point to 3,5", function() {
        expect(shape.move(1,3).points[0]).toHaveCoordinates(3,5);
      });
      it("should move the second point to 4,5", function() {
        expect(shape.move(1,3).points[1]).toHaveCoordinates(4,5);
      });
      it("should move the third point to 4,6", function() {
        expect(shape.move(1,3).points[2]).toHaveCoordinates(4,6);
      });
      it("should have all points checked", function() {
        $.each(shape.move(1,3).points, function(index, point) {
          expect(point.is_checked()).toEqual(true);
        });
      });
    });
  });
  
  
});
