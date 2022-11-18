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

      var ArrowPrev = ''+
      ' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="transform:rotate(90deg)">'+
      '  <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="#ffffff">'+
      '  </path>'+
      '  </svg>';
    
      var ArrowNext = ''+
      ' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="transform:rotate(-90deg)">'+
      '  <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="#ffffff">'+
      '  </path>'+
      '  </svg>';
    

      function init() {
        var $ = window.jQuery
  
        setTimeout(function(){
            $('#pdp--main-image').slick('unslick');

            $('#pdp--main-image').slick({
                arrows: true
              });
        },1000)

    }

    function init2() {
        
        $('#pdp--main-image .slick-prev').html(ArrowPrev);
        $('#pdp--main-image .slick-next').html(ArrowNext);

    }

      /* Initialise variation */
      onLoadJqueryLibrary(function () {
        waitForElement("#pdp--main-image img", init, 50, 15000);
        waitForElement("#pdp--main-image .slick-next", init2, 50, 15000);
        
      }, 50, 10000)
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();