$(function () {
  $('.blog').click(function () {
    if ($('.blog').hasClass('onRight')) {
      console.log('ON RIGHT');
      $(".blog").removeClass("here");
      $(".blog").addClass("gone");
      $(".nav").removeClass("enter");
      $(".nav").one("webkitTransitionEnd", function() {
        window.location.replace("http://localhost:3000/blog");
      });
    } else {
      console.log('ON LEFT');
      $(".blog").removeClass("here");
      $(".blog").addClass("gone");
      $(".posts>*").removeClass("enter");
      $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
        window.location.replace("http://localhost:3000");
      });
    }
  });
});
