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
      statusHTML += hero.hero + '</li>';
    });
    statusHTML += '</ul>';
    $('#games').html(statusHTML);
  }); // end getJSON

  //   //rooms
  //   $.getJSON('../data/rooms.json', function (data) {
  //   var roomHTML = '<ul class="rooms">';
  //   $.each(data,function (index, room) {
  //     if (room.available === true) {
  //       roomHTML +='<li class="empty">';
  //     } else {
  //       roomHTML +='<li class="full">';
  //     }
  //     roomHTML += room.room + '</li>';
  //   });
  //   roomHTML += '</ul>';
  //   $('#roomList').html(roomHTML);
  //
  // }); // end getJSON

}); // end ready
