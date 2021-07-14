$(document).ready(() => {
    // menu
    $('#my-menu').mmenu();

    // create | add => pizza
    (() => {
        $(".create-more__more").hide(0);
        $(".create-mor__title-toggle").click((e) => {
            e.preventDefault();
            $(e.target).parent().parent().siblings()
            .find(".create-more__more").slideUp();
            $(e.target).parent().parent().find(".create-more__more")
            .slideToggle("slow");
        })
    })();

    $(".owl-carousel").owlCarousel({
          items: 1,
          autoplay: true,
          loop: true,
          autoplayHoverPause: true,
          autoplayTimeout: 4000,
          autoplaySpeed: 1000,
          lazyLoad: true,
          mergeFit:true
    });

});