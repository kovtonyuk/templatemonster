(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu')
                .toggleClass('menu_state_open');
        });

        $('.nav__link').on('click', function() {
            // do something

            $(this).closest('.menu')
                .removeClass('menu_state_open');
        });
    });
})(jQuery);