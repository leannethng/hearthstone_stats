$(document).ready(function() {
  $.getJSON('http://www.leannethng.com/hearthstone_stats/data/winLoss.json', function(response) {

    var winrate = (function(){
      var wins = response.stats.overall.wins;
      var total = response.stats.overall.total;
      return (wins / total) * 100;
    }());


        var myCircle = Circles.create({

          id:                  'circles-1',
          radius:              70,
          value:               winrate.toFixed(0),
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#D3B6C6', '#4B253A'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
        });

    

  });
});
