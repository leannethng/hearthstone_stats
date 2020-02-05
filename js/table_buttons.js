$(document).ready(function() {

//Sorting table
$('button.key.loss-key').on('click', function () {

    var numericallyOrderedDivs = $(".columns").sort(function(a, b) {
      var aValue = parseInt($(a).find("div.win.bar").children("p").text(),10);
      var bValue = parseInt($(b).find("div.win.bar").children("p").text(),10);
      // console.log(aValue);
      // console.log(bValue);

      return aValue > bValue ? 1 : -1;
    });
    $("#graph").html(numericallyOrderedDivs);

});

$('button.key.win-key').on('click', function () {
    var numericallyOrderedDivs = $(".columns").sort(function(a, b) {
        var aValue = parseInt($(a).find("div.loss.bar").children("p").text(),10);
        var bValue = parseInt($(b).find("div.loss.bar").children("p").text(),10);
        console.log(aValue);

        return aValue > bValue ? 1 : -1;
    });
    $("#graph").html(numericallyOrderedDivs);
});

});
