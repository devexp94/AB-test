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

      $('body').addClass('eg-currency-trf');
      $('body > .calculator_clone').insertAfter('#islognout .form_row');
      $('body > .calculator').insertAfter('#islognout > .calculator_clone');

      $('.hometranfer-row .customBtn.trackTransferBtn').after('<p class="eg-notice">Special offer: Zero transfer fees on <b>first transfer 0f $200 and above, made by an individual customer only.</b> Payment method charges, if any, will apply. Offer not valid for existing customers & corporate clients. Promotion may be subject to change. </p>');

      

      // $.fn.isInViewport = function() {
      //   var elementTop = $(this).offset().top;
      //   var elementBottom = elementTop + $(this).outerHeight();
      
      //   var viewportTop = $(window).scrollTop();
      //   var viewportBottom = viewportTop + $(window).height();
      
      //   return elementBottom > viewportTop && elementTop < viewportBottom;
      // };

    //   $(window).on('resize scroll', function() {
    //     if ($('.calculator').isInViewport()) {
    //       $('body').addClass('eg-currency-trf');
          
    //     } else {
    //       $('body').removeClass('eg-currency-trf');  
    //     }
    // });

  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('body > .calculator', init, 50, 15000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();