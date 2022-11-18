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
      var interval = setInterval(function () {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    

    function init() {
      var $ = window.jQuery

      var TextFind = "Designed by"

      var getText = $( ".active.description p:contains('Designed by')" ).html();

      var newContent = getText.slice(getText.indexOf(TextFind) + TextFind.length);

      document.querySelector('#pdp--title ~ .mi-content--shipping .orankl-summary').insertAdjacentHTML('beforebegin', '<p class="eg-artist">Artist: <span>'+ newContent +'</span></p>');

      document.querySelector('.pdp--header.mobile .mi-content--shipping .orankl-summary').insertAdjacentHTML('beforebegin', '<p class="eg-artist">Artist: <span>'+ newContent +'</span></p>');
      

    }
    /* Initialise variation */
    onLoadJqueryLibrary(function () {
      waitForElement(".active.description p:last-child", init, 100, 35000);
    }, 50, 10000)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();