$(function () {
  $('.blog.onRight').click(function () {
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".back").removeClass("enter");
    $(".nav").removeClass("enter");
    $(".nav").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://localhost:3000/blog");
    });
  });
  $('.blog.onLeft').click(function () {
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".none").addClass("gone");
    $(".posts>*").removeClass("enter");
    $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://localhost:3000");
    });
  });
  $('.blog.onMiddle').click(function () {
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".titleCard").removeClass("enter");
    $(".share").removeClass("enter");
    $(".postContent").removeClass("enter");
    $(".postContent").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://localhost:3000/blog");
    });
  });

  $('.post').click(function (event) {
    if (!event) event = window.event;
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".none").addClass("gone");
    $(".posts>*").addClass("viewPost");
    var link = $(event.target).attr("data");
    console.log(event.target);
    if (link == undefined) {
      link = $(event.target).closest(".post").attr("data");
    }
    $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://localhost:3000" + link);
    });
  })
});
