$(function () {
  $('.blog.onRight > a').click(function (event) {
    event.preventDefault();

    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".back").removeClass("enter");
    $(".nav").removeClass("enter");
    $(".nav").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://fwren.ch/blog");
    });
  });
  $('.blog.onLeft > a').click(function (event) {
    event.preventDefault();

    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".none").addClass("gone");
    $(".posts>*").removeClass("enter");
    $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://fwren.ch");
    });
  });
  $('.blog.onMiddle > a').click(function (event) {
    event.preventDefault();

    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".titleCard").removeClass("enter");
    $(".share").removeClass("enter");
    $(".postContent").removeClass("enter");
    $(".postContent").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://fwren.ch/blog");
    });
  });

  $('.post').click(function (event) {
    event.preventDefault();

    if (!event) event = window.event;
    $(".blog").removeClass("here");
    $(".blog").addClass("gone");
    $(".none").addClass("gone");
    $(".posts>*").addClass("viewPost killMouse");
    var link = $(event.target).attr("data");
    var $elem = $(event.target);
    if (link == undefined) {
      link = $(event.target).closest(".post").attr("data");
      $elem = $elem.closest(".post");
    }
    $elem.addClass("postClicked");
    $(".posts>*").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
      window.location.replace("http://fwren.ch" + link);
    });
  });

  $(".post").hover(function() {
    $(this).addClass("hover");
  }, function() {
    if (!$(this).hasClass("postClicked")) {
      $(this).removeClass("hover");
    }
  });

  var clipboard = new Clipboard("#link");

  clipboard.on("success", function(e) {
    $(".successBubble").addClass("clicked");
    setTimeout(function () {
      $(".successBubble").addClass("gone");
      setTimeout(function() {
        $(".successBubble").removeClass("clicked gone");
      }, 400);
    }, 400);
  });

  clipboard.on("error", function(e) {
    $(".errorBubble").addClass("clicked");
    setTimeout(function () {
      $(".errorBubble").addClass("gone");
      setTimeout(function() {
        $(".errorBubble").removeClass("clicked gone");
      }, 400);
    }, 400);
  });
});
