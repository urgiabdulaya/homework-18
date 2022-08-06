
  $(".project-section").click(function() {
    console.log("clicked")

$([document.documentElement, document.body]).animate({
scrollTop: $("#project").offset().top
},1000);
});