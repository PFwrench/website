$(function () {
  $('.blog').click(function () {
    if ($('.blog').hasClass('onRight')) {
      $(".blog").removeClass("here");
      $(".blog").addClass("gone");
      $(".nav").removeClass("enter");
      $(".nav").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
        window.location.replace("http://localhost:3000/blog");
      });
    } else {
      $(".blog").removeClass("here");
      $(".blog").addClass("gone");
      $(".none").addClass("gone");
      $(".posts>*").removeClass("enter");
      $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
        window.location.replace("http://localhost:3000");
      });
    }
  });
});
