document.addEventListener('keydown', function(e) {
    if (e.key === 'F2' || e.keyCode === 113) {
        // Show freeroam menu.
        if ($('#wrapper').css('display') === 'none') {
            mp.invoke('focus', true);
            $('#wrapper').fadeIn(250);
            $('.draggable_window').each((index, item) => {
                if ($(item).data('active') === 'true')
                    $(item).fadeIn(250);
            });

            // Hime freeroam menu.
        } else {
            mp.invoke('focus', false);
            $('#wrapper').fadeOut(250);
            $('.draggable_window').each((index, item) => {
                $(item).fadeOut(250);
            });

            // If colors were changed - trigger to server.
            if (newColorPrim !== oldColorPrim || newColorSec !== oldColorSec) {
                mp.trigger('cefData', 'server_color', 'color', JSON.stringify(newColorPrim), JSON.stringify(newColorSec));
                oldColorPrim = newColorPrim;
                oldColorSec  = newColorSec;
            }

            if (newColorNeon !== oldColorNeon && Object.keys(newColorNeon).length > 0) {
                mp.trigger('cefData', 'server_color', 'neon', JSON.stringify(newColorNeon));
                oldColorNeon = newColorNeon;
            }
        }
    }
});