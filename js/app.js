$(function(){
    //init
    var hash = window.location.hash;
    if(hash){
        setActiveMenu($("[href='" + hash + "']"));
        $('body,html').stop().animate({scrollTop: $("[data-hash='" + hash.slice(1) + "']").offset().top},'slow');
        console.log($(".section-header[data-hash='" + hash.slice(1) + "']"));
        console.log($('#section-header').index($(".section-header[data-hash='" + hash.slice(1) + "']")));
        $( "#accordion" ).accordion( { active: 2 } );
    }
    $( "#accordion" ).accordion();

    // add listeners
    $("nav li").on("click", function(event){
        setActiveMenu(event.target);
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
    function setActiveMenu(element){
        $("nav li a").removeClass("active");
        $(element).addClass("active")
    };

    function navigate(event){
        var target = $(event.target).attr("href");
        console.log("[data-hash='" + target.slice(1) + "']")
        $('body,html').stop().animate({scrollTop: $("[data-hash='" + target.slice(1) + "']").offset().top},'slow');
        window.location.hash = target;
        event.preventDefault();

    };
})
