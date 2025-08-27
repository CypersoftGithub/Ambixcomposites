// Header scroll effect for mobile responsiveness
$(document).ready(function() {
    // Add scroll effect to header
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.header2').addClass('scrolled');
        } else {
            $('.header2').removeClass('scrolled');
        }
    });
    
    // Ensure header is visible on mobile when menu is open
    $('.navbar-toggler').on('click', function() {
        if ($(window).width() <= 991) {
            $('.header2').addClass('scrolled');
        }
    });
    
    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() <= 991) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    
    // Add smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
}); 