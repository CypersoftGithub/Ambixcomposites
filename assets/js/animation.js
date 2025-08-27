AOS.init({
    duration: 1000,
    offset: 120,
    easing: 'ease-in-out'
})

// Header scroll effect for transparent header
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.header2').addClass('scrolled');
    } else {
        $('.header2').removeClass('scrolled');
    }
});