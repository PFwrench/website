$(function () {
  $('.blog.onRight').click(function () {
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
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
    $(".postContent").removeClass("enter");
    $(".postContent").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://localhost:3000/blog");
    });
  });

  $('.articleLink').click(function () {
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".none").addClass("gone");
    $(".posts>*").removeClass("enter");
    var link = $(event.target).attr('data');
    $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://localhost:3000" + link);
    });
  })
});
