function changeCards() {
  $("#about").click(function() {
    $(".card-1").addClass("enter");
    $(".card-1").removeClass("gone");

    $(".card-2").addClass("gone");
    $(".card-2").removeClass("enter");

    $(".card-3").addClass("gone");
    $(".card-3").removeClass("enter");
  });

  $("#experience").click(function() {
    $(".card-2").addClass("enter");
    $(".card-2").removeClass("gone");

    $(".card-1").addClass("gone");
    $(".card-1").removeClass("enter");

    $(".card-3").addClass("gone");
    $(".card-3").removeClass("enter");
  });

  $("#projects").click(function() {
    $(".card-3").addClass("enter");
    $(".card-3").removeClass("gone");

    $(".card-2").addClass("gone");
    $(".card-2").removeClass("enter");

    $(".card-1").addClass("gone");
    $(".card-1").removeClass("enter");
  });

  $("#contact").click(function() {
    $(".card-4").addClass("gone");
    $(".card-1").addClass("gone");
    $(".card-2").addClass("gone");
    $(".card-3").addClass("gone");

    $(".nav, .back").addClass("flip");
  });

  $(".back-button").click(function() {
    $(".card-4").addClass("gone");
    $(".card-1").addClass("gone");
    $(".card-2").addClass("gone");
    $(".card-3").addClass("gone");

    $(".nav, .back").removeClass("flip");
  });

  $(".exit").click(function() {
    $(".card-1").addClass("gone");
    $(".card-1").removeClass("enter");

    $(".card-2").addClass("gone");
    $(".card-2").removeClass("enter");

    $(".card-3").addClass("gone");
    $(".card-3").removeClass("enter");
  })
}

$(function() {
  //$.when()
  $(".nav").animate({
    "margin-left": "0px"
  }, 1000);
  changeCards();
});
