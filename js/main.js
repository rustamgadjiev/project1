let mainMenu = document.querySelector('.mainMenu'),
aboutMenu = document.querySelector('.aboutMenu'),
servicesMenu = document.querySelector('.servicesMenu'),
contactMenu = document.querySelector('.contactsMenu'),
main = document.querySelector('.slider'),
services = document.querySelector('.services'),
about = document.querySelector('.about'),
contact = document.querySelector('.footer');

mainMenu.addEventListener('click', function() {
    main.scrollIntoView({
        block: "start"
    });
});

servicesMenu.addEventListener('click', function() {
    services.scrollIntoView({
        block: "start"
    });
});

aboutMenu.addEventListener('click', function() {
    about.scrollIntoView({
        block: "start"
    });
});

contactMenu.addEventListener('click', function() {
    contact.scrollIntoView({
        block: "start"
    });
});

$(function() {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    });
});