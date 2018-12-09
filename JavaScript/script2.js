$(document).ready(function() {

  //All Pages jQuery
  $("#btn").on('mouseover', () => {
    $("#btn").css({
      backgroundColor: "white",
      color: "#4CAF50"
    });
    $(".navMedia").slideDown();
  });
  $(".navMedia").on('mouseenter', () => {
    $(".navMedia").show();
  });
  $("#btn").on('mouseleave', () => {
    $("#btn").css({
      backgroundColor: "#4CAF50",
      color: "white"
    });
  });
  $(".navMedia").on('mouseleave', () => {
    $(".navMedia").slideUp();
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 500) {
      $("#scrollUpFooter").fadeIn("slow");
    }
    else if (scroll < 500) {
      $("#scrollUpFooter").fadeOut("slow");
    }
  });

  $("#scrollBtn").click(function() {
    $(window).scrollTop(0);
  })
  //About jQuery

  //Contact jQuery

  //Services jQuery
  //Services Search Bar
  $("#searchBar").on("keyup", () => {
    let value = $(this).val().toLowerCase();
    $("#servicesTable tr").filter(() => {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  });
  //Gallery jQuery
});
