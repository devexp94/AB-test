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



    function init() {
      // document.querySelector('.homepage .homepage-banner svg:first-child').insertAdjacentElement('beforebegin', document.querySelector('.homepage .mobile-sq.text-center'));
    
      var lastScroll = 0;

      window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset;      
        if (currentScroll > lastScroll){
            document.querySelector('.homepage .mobile-sq.text-center').classList.add('eg-search-show'); 
          } else if (currentScroll < lastScroll) {
            document.querySelector('.homepage .mobile-sq.text-center').classList.remove('eg-search-show'); 
          }
              lastScroll = currentScroll;
          });

          

    }

    /* Initialise variation */
    waitForElement(".homepage .mobile-sq.text-center", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();