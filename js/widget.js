$(document).ready(function() {
  $.getJSON('../data/classes.json', function(response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response.history, function(index, hero) {
      // console.log(typeof hero);
      if (hero.result === "win") {
        statusHTML += '<li class="won">';
      } else {
        statusHTML += '<li class="lost">';
      }
      statusHTML += hero.hero + ' vs ' + hero.opponent + '</li>';
    });
    statusHTML += '</ul>';
    $('#games').html(statusHTML);
  }); // end getJSON



  $.getJSON('../data/winLoss.json', function(response) {
      var statusHTML = "<div id='graph'>";

    $.each(response.stats.as_class, function(key, value) {
        var losses = (value.losses / value.total) * 100;

          if (isNaN(losses)){
              losses = losses || 0;
          }

        var wins = (value.wins / value.total) * 100;
        if (isNaN(wins)){
            wins = wins || 0;
        }

      statusHTML += "<div>";
      statusHTML += '<div class="loss bar" style="height:'+ losses +'%;">';

      if (losses === 0){
        statusHTML += "<p></p>"
      } else{
          statusHTML += '<p>' + value.losses +'</p>';
      }
      statusHTML += "</div>";
      statusHTML += '<div class="win bar" style="height:'+ wins +'%;">';

      if (wins === 0){
        statusHTML += "<p></p>"
      } else{
          statusHTML += '<p>' + value.wins +'</p>';
      }
      statusHTML += "</div>";
      statusHTML += '<p class="row">' + key +'</p>';
        statusHTML += "</div>";


    });
    statusHTML += "</div>";
    $('#wrapper').html(statusHTML);

  }); // end getJSON

}); // end ready
