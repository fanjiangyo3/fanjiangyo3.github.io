//選單
$(document).ready(function() {
    $("#header").load("header-load.html ", function(response, status, xhr) {

    });
});


window.onload = function() {
    var main = window.sessionStorage.getItem("menu");
    if (main == "menu1") {
        $("#header").removeClass("menu1 menu2 menu3 menu4");
        $("#header").addClass("menu1");
    } else if (main == "menu2") {
        $("#header").removeClass("menu1 menu2 menu3 menu4");
        $("#header").addClass("menu2");
    }
}