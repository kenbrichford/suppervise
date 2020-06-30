(function($) {
    if(location.hash === '#thank-you') {
        $('.thank-you').text('Thanks so much for your support! We\'ll be in touch when we\'re ready to share our app with the world.');
        $('.thank-you').show();
        $('.signup-form').hide();
    }
})(jQuery);