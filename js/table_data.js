$(document).ready(function() {

//history
<<<<<<< HEAD
  $.getJSON('http://www.leannethng.com/hearthstone_stats/data/classes.json', function(response) {
=======
  $.getJSON('../data/classes.json', function(response) {
>>>>>>> master
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

    //making new list of type of match
    var statusHTML = '<ul class="bulleted">';
    $.each(response.history, function(index, hero) {
      // console.log(typeof hero);
      statusHTML += '<li>'+ hero.mode + '</li>';
    });
    statusHTML += '</ul>';
    $('#games-extra').html(statusHTML);

<<<<<<< HEAD
    //making new list of time
    //  $("li.timeago").timeago();
    // var statusHTML = '<ul class="bulleted">';
    // $.each(response.history, function(index, hero) {
    //   // console.log(typeof hero);
    //   statusHTML += '<li class="timeago" title="'+ hero.added +'></li>';
    // });
    // statusHTML += '</ul>';
    // console.log(statusHTML);
    // $('#games-times').html(statusHTML);
=======

    //making new list of time
    // $("abbr.timeago").timeago();
    // var statusHTML = '<ul class="bulleted">';
    // $.each(response.history, function(index, hero) {
    //   // console.log(typeof hero);
    //   statusHTML += '<li> <abbr class="timeago" title="'+ hero.added +'>'+ hero.added+'</abbr></li>';
    // });
    // statusHTML += '</ul>';
    // console.log(statusHTML);
    // $('#games-time').html(statusHTML);
>>>>>>> master

  }); // end getJSON

//history mode


//Win rate chart

  $.getJSON('http://www.leannethng.com/hearthstone_stats/data/winLoss.json', function(response) {
      var statusHTML = "<div id='graph'>";

    $.each(response.stats.as_class, function(key, value) {
        var losses =(value.losses / value.total) * 100;

          if (isNaN(losses)){
              losses = losses || 0;
          }
// console.log(losses);
        var wins = (value.wins / value.total) * 100;
        if (isNaN(wins)){
            wins = wins || 0;
        }

      statusHTML += '<div class="columns" >';
      statusHTML += '<div class="loss bar" style="height:'+ losses +'%;">';

      if (losses === 0){
        statusHTML += "<p class='loss-percentage'>0%</p>"
      } else{
          statusHTML += "<p class='loss-percentage'>" + losses.toFixed(0) + '%'+'</p>';
      }
      statusHTML += "</div>";
      statusHTML += '<div class="win bar" style="height:'+ wins +'%;">';

      if (wins === 0){
        statusHTML += "<p class='win-percentage' style='display: none;'>0%</p>"
      } else{
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
