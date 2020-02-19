$(document).ready(function() {
    var welcomeSlider = $(".welcome-slider").lightSlider({
        item: 1,
        pager: false,
        loop: true,
        auto: true,
        pause: 5000,
        controls: false
    }); 

    $(".welcome-prev").on('click', function() {
        welcomeSlider.goToPrevSlide(); 
    });
          
    $(".welcome-next").on('click', function() {
        welcomeSlider.goToNextSlide(); 
    });
});
    