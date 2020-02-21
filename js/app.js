    // ждем загрузки документов
$(document).ready(function() {
    // создаем переменную слайдера и активируем его с нужными настройками
    let welcomeSlider = $(".welcome-slider").lightSlider({
        item: 1,
        pager: false,
        loop: true,
        auto: true,
        pause: 5000,
        controls: false
    }); 
    // клик по кнопке стрелки назад
    $(".welcome-prev").on('click', function() {
      // активтруем функцию, которая переключает слайдер назад
        welcomeSlider.goToPrevSlide(); 
    });
    // клик по кнопке стрелки вперед
    $(".welcome-next").on('click', function() {
      // активтруем функцию, которая переключает слайдер вперед
        welcomeSlider.goToNextSlide(); 
    });
});