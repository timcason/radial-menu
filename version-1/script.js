+ function() {
  var to;
  $(".wrap").on('mouseenter', function() {
    var circles = $(this).find(".circle");
    var degree = (2 * Math.PI) / circles.length; //calc delta angle
    var transforms = [];

    // Calculate the position for each circle
    circles.each(function(index) {
        var x = 100 * Math.cos(-0.5 * Math.PI + degree * (-1 * index - 0.5));
        var y = 100 * Math.sin(-0.5 * Math.PI + degree * (-1 * index - 0.5));

      transforms.push('translate(' + x + 'px,' + y + 'px)');
    });

    // Function to moves all the circles
    // We'll pop a circle each time and than call this function recursively
    function moveCircles() {
      var transform = transforms.shift();
      circles.css('transform', transform);

      circles.splice(0, 1);
      if (circles.length) to = setTimeout(moveCircles, 400);
    }

    moveCircles();
  });

  $(".wrap").on('mouseleave', function() {
    var circles = $(this).children().css('transform', '');
    clearTimeout(to);
  });
}();