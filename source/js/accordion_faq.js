// j

//// accordion navigation menu
function accordion(section, heading, list){
    $(section).each(function(){
        var act = 'active',
            actClass = '.active',
            that = $(this);

        function tglH(){
            that.find(list).slideToggle(250);
        }
        function open(click){
            $(click).toggleClass('plus minus');
            tglH();
            that.find(list).addClass(act);
        }
        function close(click){
            $(click).toggleClass('minus plus');
            tglH();
            that.find(list).removeClass(act);
        }

        if ( that.find(list).length == 0 ) {
            $(this).find(heading).removeClass('plus').addClass('no-sub');
        } else {
            $(this).find(heading).click(function(e) {
                e.preventDefault();
            });
        }

        $(this).find(heading).click(function() {
            if ( $(this).hasClass('minus') ) {
                // close this menu
                close(this);
                that.find(list).removeClass(act);
            } else if ( $(this).hasClass('plus') ) {
                if ( $(heading).hasClass('minus') ) {
                    $(heading).each(function(){
                        if ( !$(this).hasClass('no-sub') ) {
                            $(this).removeClass('minus').addClass('plus');
                        }
                    })
                    $(section).each(function() {
                        if ( $(this).find(list).hasClass(act) ) {
                            $(actClass).slideToggle(250);
                            $(this).find(list).removeClass(act);
                        }
                    });
                    // open this menu
                    open(this);
                } else if ( $(this).hasClass('plus') ) {
                    // open this menu
                    open(this);
                }
            }
        })
    })
}
accordion('.nav-item', '.nav-item-inner-heading', '.nav-sub-list');