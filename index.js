$("h1").css("color", "red");

$("button").on("click", function() {
    $(".header").fadeOut();
});
$("button").on("click", function() {
    $(".header").fadeIn();
});