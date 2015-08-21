$(document).ready(function () {
  $.getJSON('../data/classes.json', function (response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response.history,function (index, hero) {
      console.log(typeof hero);
      if (hero.result === "win") {
        statusHTML +='<li class="won">';
      } else {
        statusHTML +='<li class="lost">';
      }
      statusHTML += hero.hero + ' vs ' + hero.opponent + '</li>';
    });
    statusHTML += '</ul>';
    $('#games').html(statusHTML);
  }); // end getJSON


    $.getJSON('../data/winLoss.json', function (response) {
      var statusHTML = '<ul class="bulleted">';
      $.each(response.stats.as_class,function (index, data) {
        console.log(typeof data);
        if (data.wins > 0) {
          statusHTML +='<li class="won">';
        } else {
          statusHTML +='<li class="lost">';
        }
        statusHTML += data.total +" "+ Object.getOwnPropertyNames(data) + '</li>';
      });
      statusHTML += '</ul>';
      $('#winloss').html(statusHTML);
    }); // end getJSON




}); // end ready
