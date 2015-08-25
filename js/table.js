$(document).ready(function() {

//Sorting table
$('button.key.loss-key').on('click', function () {
    var numericallyOrderedDivs = $(".columns").sort(function (a, b) {
        return parseInt($(a).find("div.win.bar").children("p").text()) >parseInt($(b).find("div.win.bar").children("p").text());
    });
    $("#graph").html(numericallyOrderedDivs);
      console.log(numericallyOrderedDivs)
});

$('button.key.win-key').on('click', function () {
    var numericallyOrderedDivs = $(".columns").sort(function (a, b) {
        return parseInt($(a).find("div.loss.bar").children("p").text()) > parseInt($(b).find("div.loss.bar").children("p").text());
    });
    $("#graph").html(numericallyOrderedDivs);

});
});
