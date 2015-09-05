$(document).ready(function() {
  $.getJSON('http://www.leannethng.com/hearthstone_stats/data/winLoss.json', function(response) {

  $.each(response.stats, function(key, value) {
      var winrate =(value.wins / value.total) * 100;
      console.log(winrate.toFixed(0));



  var myCircle = Circles.create({

    id:                  'circles-1',
    radius:              70,
    value:               function(winrate){return winrate;},
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
  })
});
});
