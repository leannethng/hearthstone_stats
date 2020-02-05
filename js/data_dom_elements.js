$(document).ready(function() {

//HISTORY

  $.getJSON('https://www.leannethng.com/hearthstone_stats/data/classes.json', function(response) {
    //getting the wins and losses and hero and opponent
    var statusHTML = '<ul class="bulleted">';
    $.each(response.history, function(index, value) {
      if (value.result === "win") {
        statusHTML += '<li class="won">';
      } else {
        statusHTML += '<li class="lost">';
      }
      statusHTML += value.hero + ' vs ' + value.opponent + '</li>';
    });
    statusHTML += '</ul>';
    $('#games').html(statusHTML);

    //making new list of type of match
    var statusHTML = '<ul class="bulleted">';
    $.each(response.history, function(index, value) {
      statusHTML += '<li class="cols">'+ value.mode + '</li>';
    });
    statusHTML += '</ul>';
    $('#games-extra').html(statusHTML);

    //getting the date
    var statusHTML = '<ul class="bulleted">';
    $.each(response.history, function(index, value) {
    var date = new Date(value.added);
    var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
    statusHTML += '<li class="cols">'+ month[date.getMonth()] + ' ' + date.getDate() +'th' +  '</li>';
  });
  statusHTML += '</ul>';
  $('#games-time').html(statusHTML);
  }); // end getJSON


//WINRATE PERCENTAGE
  $.getJSON('https://www.leannethng.com/hearthstone_stats/data/winLoss.json', function(response) {
    var winrate = (function(){
      var wins = response.stats.overall.wins;
      var total = response.stats.overall.total;
      return (wins / total) * 100;
    }());
        //creating a circle svg with the circles library
        var myCircle = Circles.create({

          id:                  'circles-1',
          radius:              70,
          //calling in my values from the JSON
          value:               winrate.toFixed(0),
          maxValue:            100,
          width:               10,
          text:                function(value){return value + '%';},
          colors:              ['#db664e', '#5ab795'],
          duration:            400,
          wrpClass:            'circles-wrp',
          textClass:           'circles-text',
          valueStrokeClass:    'circles-valueStroke',
          maxValueStrokeClass: 'circles-maxValueStroke',
          styleWrapper:        true,
          styleText:           true
        });
  });


//WIN RATE CHART
  $.getJSON('https://www.leannethng.com/hearthstone_stats/data/winLoss.json', function(response) {
      var statusHTML = "<div id='graph'>";
    //using key value instead of index value
    //getting the percentage value and if 0 replace NaN with 0
    $.each(response.stats.as_class, function(key, value) {
        var losses =(value.losses / value.total) * 100;
          if (isNaN(losses)){
              losses = losses || 0;
          }

        var wins = (value.wins / value.total) * 100;
        if (isNaN(wins)){
            wins = wins || 0;
        }
      statusHTML += '<div class="columns" >';
      statusHTML += '<div class="loss bar" style="height:'+ losses.toFixed(0) +'%;">';

      if (losses === 0 && value.total === 0){
        statusHTML += "<p class='loss-percentage' style='display: none;'>-1%</p>";
      } else if(losses === 0  && value.total > 0) {
        statusHTML += "<p class='loss-percentage' style='display: none;'>0%</p>";
      } else {
          statusHTML += "<p class='loss-percentage'>" + losses.toFixed(0) + '%'+'</p>';
      }
      statusHTML += "</div>";
      statusHTML += '<div class="win bar" style="height:'+ wins.toFixed(0) +'%;">';

      if (wins === 0 && value.total === 0){
        statusHTML += "<p class='win-percentage' style='display: none;'>-1%</p>";
      } else if (wins === 0 && value.total > 0){
          statusHTML += "<p class='win-percentage' style='display: none;'>0%</p>";
      }else{
          statusHTML += "<p class='win-percentage'>" + wins.toFixed(0) + '%' +'</p>';
      }
      statusHTML += "</div>";
      statusHTML += '<p class="row">' + key +'</p>';
      statusHTML += "</div>";
    });
    statusHTML += "</div>";
    $('#wrapper').html(statusHTML);

  }); // end getJSON

}); // end ready
