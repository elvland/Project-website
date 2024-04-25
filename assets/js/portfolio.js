$(document).ready(function(){
    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var filter = $(this).attr("data-filter");

        if (filter == "all"){
            $(".gallery .portfolio-item").show(400);
        } else {
            $(".gallery .portfolio-item").hide().filter("[data-category='" + filter + "']").show(400);
        }
    });


});
