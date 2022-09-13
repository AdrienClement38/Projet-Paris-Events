import app from './app.js';

import config from './config.js';

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
    // Instancier ici le Vanilla Router dans l'objet "app.mvc.router"
    const router = new Router({
        mode: 'hash',
        page404: function(path) {
            console.log('"/' + path + '" Page not found');
        }
    });

    router.add('', function() {
        console.log('Home page');
    });

    router.addUriListener();
    router.navigateTo('/').check();

    // ...
}


// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation du routeur.
    initializeRouter();
});