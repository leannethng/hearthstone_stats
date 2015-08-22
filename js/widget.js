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


  // $.getJSON('../data/winLoss.json', function(response) {
  //   var statusHTML = '<tbody>';
  //   $.each(response.stats.as_class, function(key, value) {
  //     statusHTML += "<tr class=" + key + " " +"id=" + key +">";
  //
  //
  //     statusHTML += "<th scope='row'>"+ key +"</th>";
  //       statusHTML += "<td class='loss bar' style='height: 24px;'>";
  //       statusHTML += "</td>";
  //       statusHTML += "<td class='win bar' style='height: 24px;'>";
  //       statusHTML += "</td>";
  //     statusHTML += "</tr>";
  //
  //     // $.each(response.stats.as_class, function(key, value) {
  //     //   console.log(value);
  //     //
  //     // });
  //
  //   });
  //   statusHTML += '</tbody>';
  //   $('#table').html(statusHTML);
  //   $("#table").appendTo($("#graph"))
  // }); // end getJSON

  $.getJSON('../data/winLoss.json', function(response) {
      statusHTML = "<div id='graph'>";
    $.each(response.stats.as_class, function(key, value) {
      statusHTML += "<div>";
      statusHTML += '<div class="loss bar" style="height: 40%;">';
      statusHTML += '<p>2</p>';
      statusHTML += "</div>";
      statusHTML += '<div class="win bar" style="height: 40%;">';
      statusHTML += '<p>2</p>';
      statusHTML += "</div>";
      statusHTML += '<p class="row">' + key + '</p>';
        statusHTML += "</div>";
        console.log(statusHTML);


      // $.each(response.stats.as_class, function(key, value) {
      //   console.log(value);
      //
      // });

    });
    statusHTML += "</div>";
    $('#wrapper').html(statusHTML);


      // $.each(response.stats.as_class, function(key, value) {
      //   statusHTML = key;
      //   $('.row').html(statusHTML);
    // $("#table").appendTo($("#graph"))
  }); // end getJSON


}); // end ready
