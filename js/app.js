$(function(){
    //init
    $( "#accordion" ).accordion();

    // add listeners
    $("nav li").on("click", function(event){
        setActiveMenu(event);
        navigate(event);
    })
    $(".review-more").click(function(){
        $(".review-section").animate({marginTop: "-90px"}, 500, function(){
            $(".review-section .review").eq(0).clone().appendTo(".review-section");
            $(".review-section .review").eq(0).remove();
            $(".review-section").css({"marginTop":"0px"});
        });
    });

    // privet functions
    function setActiveMenu(event){
        $("nav li a").removeClass("active");
        $(event.target).addClass("active")
    };

    function navigate(event){
        var target = $(event.target).attr("href");
        $('body,html').stop().animate({scrollTop: $(target).offset().top},'slow');
        event.preventDefault();
    };
})
