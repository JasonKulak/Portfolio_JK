$("h1").css("color", "red");

$(".off").on("click", function() {
    $(".header").fadeOut();
});

$(".on").on("click", function() {
    $(".header").fadeIn();
});