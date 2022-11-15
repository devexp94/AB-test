(function () {
try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* all Pure helper functions */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
    var interval = setInterval(function () {
        if (
        document &&
        document.querySelector(selector) &&
        document.querySelectorAll(selector).length > 0
        ) {
        clearInterval(interval);
        trigger();
        }
    }, delayInterval);
    setTimeout(function () {
        clearInterval(interval);
    }, delayTimeout);
    }
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
    var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn) {
        clearInterval(interval);
        trigger();
        }
    }, delayInterval);
    setTimeout(function() {
        clearInterval(interval);
    }, delayTimeout);
    }
    

    function init() {
    var $ = window.jQuery;

    $('.product-card .price.price--listing .price__badge.price__badge--sale > span').html('In den Warenkorb');
}
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.product-card .price.price--listing .price__badge.price__badge--sale > span', init, 50, 15000);
    }, 50, 10000);
} catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
}
})();