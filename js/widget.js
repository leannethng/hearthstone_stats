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
}); // end ready

// $(document).ready(function () {
//   $.getJSON('../data/winLoss.json', function (response) {
//     var statusHTML = '<ul class="bulleted">';
//     $.each(response.history,function (index, hero) {
//       console.log(typeof hero);
//       if (hero.result === "win") {
//         statusHTML +='<li class="won">';
//       } else {
//         statusHTML +='<li class="lost">';
//       }
//       statusHTML += hero.hero + ' vs ' + hero.opponent + '</li>';
//     });
//     statusHTML += '</ul>';
//     $('#games').html(statusHTML);
//   }); // end getJSON
// }); // end ready
