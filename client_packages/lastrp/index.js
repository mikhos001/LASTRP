//InGame Browser
let menu;

// Initialization functions.

let playersInit  = require('./lastrp/menu_init/players.js');


//Create the browser


mp.events.add('guiReady', () => {
    if (!menu) {
        // Creating CEF browser.
        menu = mp.browsers.new('package://lastrp/view/index.html');
        // Init menus and events, when browser ready.
        mp.events.add('browserDomReady', (browser) => {
            if (browser == menu) {

                //init evens
                require('lastrp/events.js')(menu);

                //init menu
                playersInit(menu);

                
            }
        });
    }
});