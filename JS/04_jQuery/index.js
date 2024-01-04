$("p").css("color", "red");
//----------------------------------------------
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title margin-50");
//----------------------------------------------
$("p").text("Modified");
$("button").html("<em>Modified</em>");
//----------------------------------------------
$("a").attr("href", "https://www.google.com");
console.log($("h1").attr("class"));
//----------------------------------------------
$("button").click(function () {
    this.style.backgroundColor = "yellowgreen";
    $("p").css("color", "purple");
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 })

});
//----------------------------------------------
$("input").on("keydown", function (event) {
    $("h1").text(event.key);
})
//----------------------------------------------
//----------------------------------------------

