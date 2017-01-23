function changeCards() {
  $("#about").click(function() {
    $(".card-1").removeClass("hidden");
    $(".card-2").addClass("hidden");
    $(".card-3").addClass("hidden");
    $(".card-4").addClass("hidden");
  });

  $("#experience").click(function() {
    $(".card-2").removeClass("hidden");
    $(".card-1").addClass("hidden");
    $(".card-3").addClass("hidden");
    $(".card-4").addClass("hidden");
  });

  $("#projects").click(function() {
    $(".card-3").removeClass("hidden");
    $(".card-1").addClass("hidden");
    $(".card-2").addClass("hidden");
    $(".card-4").addClass("hidden");
  });

  $("#contact").click(function() {
    $(".card-4").addClass("hidden");
    $(".card-1").addClass("hidden");
    $(".card-2").addClass("hidden");
    $(".card-3").addClass("hidden");

    $(".nav, .back").addClass("flip");
  });

  $(".back-button").click(function() {
    $(".card-4").addClass("hidden");
    $(".card-1").addClass("hidden");
    $(".card-2").addClass("hidden");
    $(".card-3").addClass("hidden");

    $(".nav, .back").removeClass("flip");
  })
}

$(function() {
  //$.when()
  $(".nav").animate({
    "margin-left": "0px"
  }, 1000);
  changeCards();
});
