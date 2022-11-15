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
    
    var egFullRangeButton = ''+
    '   <div class="eg-button-outer content-wrapper">'+
    '     <div class="eg-button-inr">'+
    '     <button class="eg-range-button">View More Options</button>'+
    '     </div>'+
    '   </div>';

    function init() {
      var $ = window.jQuery;   

      $('.find-your-tyre-page .recommended .content-wrapper').after(egFullRangeButton);      


      $('body').on('click', '.eg-range-button', function(){
        $('body').addClass('eg-full-range-show');
      });


  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.find-your-tyre-page .recommended .content-wrapper', init, 100, 20000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();