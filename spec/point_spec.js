describe("radio_button_canvas point functions", function() {
  var canvas;
  
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
  });
  
  describe("private initialization function", function() {
    it("should should automatically check the point when initialized", function() {
      var point = canvas.point(5,5);
      expect(point.is_checked()).toEqual(true);
    });
  });
  
  describe("getter functions for x and y cordinates", function() {
    it("should know its x coordinate", function() {
      var point = canvas.point(5,5);
      expect(point.x).toEqual(5);
    });
    it("should know its y coordinate", function() {
      var point = canvas.point(1,7);
      expect(point.y).toEqual(7);
    });
  });
  
  describe("#is_checked()", function() {
    it("should know if it's currently checked", function() {
      var point = canvas.point(2,2).check();
      expect(point.is_checked()).toEqual(true);
    });
    it("should know if it's not checked", function() {
      var point = canvas.point(2,2).uncheck();
      expect(point.is_checked()).toEqual(false);
    });
  });
  
  describe("#check() and #uncheck()", function() {
    it("should mark the radio button as checked", function() {
      var point = canvas.point(3,7).check();
      expect(point.is_checked()).toBe(true);
    });
    it("should mark the radio button as unchecked", function() {
      var point = canvas.point(3,7).uncheck();
      expect(point.is_checked()).toBe(false);
    });
  });
  
  describe("#neighbor()", function() {
    it("should find the point to the immediate north", function() {
      var point = canvas.point(3,3).neighbor('north');
      expect(point.x).toEqual(3);
      expect(point.y).toEqual(2);
    });
    it("should find the point to the immediate south", function() {
      var point = canvas.point(3,3).neighbor('south');
      expect(point.x).toEqual(3);
      expect(point.y).toEqual(4);
    });
    it("should find the point to the immediate east", function() {
      var point = canvas.point(3,3).neighbor('east');
      expect(point.x).toEqual(4);
      expect(point.y).toEqual(3);
    });
    it("should find the point to the immediate west", function() {
      var point = canvas.point(3,3).neighbor('west');
      expect(point.x).toEqual(2);
      expect(point.y).toEqual(3);
    });
    it("should find the neighbor using cartesian coordinates ", function() {
      var point = canvas.point(3,3).neighbor(-2, 0);
      expect(point.x).toEqual(1);
      expect(point.y).toEqual(3);
    });
    it("should check the neighboring point", function() {
      var point = canvas.point(3,3).neighbor('west');
      expect(point.is_checked()).toBe(true);
    });
  });
  
  describe("#move()", function() {
    it("should move the point in an ordinal direction", function() {
      var point = canvas.point(3,3).move('west');
      expect(point.x).toEqual(2);
    });
    it("should uncheck the previous location after moving", function() {
      var old_location = canvas.point(3,3);
      old_location.move('west');
      expect(old_location.is_checked()).toBe(false);
    });
    it("should automatically check the new location after moving", function() {
      var point = canvas.point(3,3).move('west');
      expect(point.is_checked()).toBe(true);
    });
  });
  
  describe("#coordinates()", function() {
    it("should return an array containing the x and y coordinates", function() {
      var point = canvas.point(3,3);
      expect(point.coordinates()).toEqual([3,3]);
    });
  });
  
  describe("#equals(another_point)", function() {
    it("should return true if the passed point has the same coordinates", function() {
      var point = canvas.point(3,3);
      var another_point = canvas.point(3,3);
      expect(point.equals(another_point)).toEqual(true);
    });
    it("should return false if the passed point has different coordinates", function() {
      var point = canvas.point(3,4);
      var another_point = canvas.point(3,3);
      expect(point.equals(another_point)).toEqual(false);
    });
  });
  
});
