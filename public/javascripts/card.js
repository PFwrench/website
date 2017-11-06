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
  });
}

$(function() {
  $(".blog").addClass("here");
  $(".none").removeClass("gone");

  $(".titleCard").addClass("enter");
  $(".postContent").addClass("enter");

  $(".nav").addClass("enter");
  $(".back").addClass("enter");
  var posts = $(".post");
  var i = 0;
  var staggerPostAnimations = function() {
    $(posts[i++]).addClass("enter");
    if (i < posts.length) {
      setTimeout(staggerPostAnimations, 100);
    }
  }
  staggerPostAnimations();
  changeCards();
});
