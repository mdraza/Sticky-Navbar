$(document).ready(function(){
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("nav").addClass("black logo2");
    }else{
        $("nav").removeClass("black logo2");
    }

})