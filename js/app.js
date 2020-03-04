// ждем загрузки документов
$(document).ready(() => {
    // создаем переменную слайдера и активируем его с нужными настройками
    const welcomeSlider = $(".welcome-slider").lightSlider({
        item: 1,
        pager: false,
        loop: true,
        auto: true,
        pause: 5000,
        controls: false
    });

    // клик по кнопке стрелки назад
    $(".welcome-prev").on('click', () => {
        // активируем функцию, которая переключает слайдер назад
        welcomeSlider.goToPrevSlide();
    });

    // клик по кнопке стрелки вперед
    $(".welcome-next").on('click', () => {
        // активируем функцию, которая переключает слайдер вперед
        welcomeSlider.goToNextSlide();
    });


    //слайдер latest
    const latestSlider = $(".latest-slider").lightSlider({
        item: 1,
        controls: false,
        pager: false
    });

    // клик по кнопке стрелки назад
    $(".latest-prev").on('click', () => {
        latestSlider.goToPrevSlide();
    });

    // клик по кнопке стрелки вперед
    $(".latest-next").on('click', () => {
        latestSlider.goToNextSlide();
    });
});