describe("radio_button_canvas utilities functions", function() {
  var canvas;
  
  beforeEach(function() {
    canvas = $('<div>').radio_button_canvas();
  });
  
  describe("#is_a_point(object)", function() {
    it("should return true if the passed object is a point", function() {
      var point = canvas.point(3,3);
      expect(canvas.is_a_point(point)).toEqual(true)
    });
    it("should return false if the passed object is not a point", function() {
      var coordinate = [3,3];
      expect(canvas.is_a_point(coordinate)).toEqual(false)
    });
  });

  describe("#is_a_shape(object)", function() {
    it("should return true if the passed object is a shape", function() {
      var shape = canvas.shape([3,3], [5,5], [7,7]);
      expect(canvas.is_a_shape(shape)).toEqual(true)
    });
    it("should return false if the passed object is not a shape", function() {
      var coordinate = [3,3];
      expect(canvas.is_a_shape(coordinate)).toEqual(false)
    });
  });

  describe("#is_a_coordinate(object)", function() {
    it("should return false unless passed be an array", function() {
      expect(canvas.is_a_coordinate("I'm a string")).toEqual(false);
    });
    it("should return false unless passed an array containing exactly two objects", function() {
      expect(canvas.is_a_shape([3,3,5])).toEqual(false)
    });
    it("should return false unless passed be an array containing only numbers", function() {
      expect(canvas.is_a_coordinate([3,'a'])).toEqual(false);
    });
  });

  describe("#convert_point_to_coordinates(point)", function() {
    it("should simply return the coordinate if passed a coordinate", function() {
      expect(canvas.convert_point_to_coordinates([3,3])).toEqual([3,3]);
    });
    it("should return an array of coordinates if passed a point", function() {
      var point = canvas.point(3,3);
      expect(canvas.convert_point_to_coordinates(point)).toEqual([3,3]);
    });
    it("should thorw an error if passed anything other than a point or coordinate", function() {
      var shape = canvas.shape([3,3], [5,5], [7,7]);
      expect(function() {
        canvas.convert_point_to_coordinates(shape);
      }).toThrow("Can't covert object to coordinates. Please pass a point.");
    });
  });

  describe("#normalize_arguments(arguments)", function() {
    it("should accept whatever arguments (points or coordinates) and return an array of only coordinates", function() {
      var args = [canvas.point(3,3), [5,5]]
      expect(canvas.normalize_arguments(args)).toEqual([ [3,3], [5,5] ]);
    });
  });
  
});
