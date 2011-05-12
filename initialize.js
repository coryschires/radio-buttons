$(document).ready(function() {

  var load_selected_demo = function() {
    var canvas;
    var effect = function() {
      var match = window.location.href.match(/#(.+)$/);
      return match ? match[1] : false;
    }();
  
    if (effect === 'rain') {
      canvas = $('#canvas').radio_button_canvas({
        height: 300
      });
      canvas.draw(rain_drops)      
    } else {
      canvas = $('#canvas').radio_button_canvas({
        height: 400
      });
      canvas.draw(snake)      
    }
  }();

  $('select#effect').change(function() {
    window.location.href = window.location.href //+ "#" + $(this).val();
  });

});