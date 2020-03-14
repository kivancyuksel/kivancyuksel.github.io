$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});




window.addEventListener("load", function(event) {
    var equations = document.getElementsByClassName("MathJax_Display");
    for (var i = 0; i < equations.length; i++) {
        equations[i].className += " my-equation";
    }
});

