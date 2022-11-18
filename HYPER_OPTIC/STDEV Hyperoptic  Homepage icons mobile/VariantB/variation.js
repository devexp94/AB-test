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

    function waitForSlick(trigger) {
      var interval = setInterval(function () {
          if (window.jQuery.fn.slick != undefined) {
              clearInterval(interval);
              trigger();
          }
      }, 50);
      setTimeout(function () {
          clearInterval(interval);
      }, 15000)
    }

    function waitForjQuery(trigger) {
      var interval = setInterval(function () {
          if (window.jQuery != undefined) {
              clearInterval(interval);
              trigger();
          }
      }, 50);
      setTimeout(function () {
          clearInterval(interval);
      }, 15000)
    }

    function addScript() {
      var cssScript=''+ 
      "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
          
      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
      }

  
    function init() {
      waitForjQuery(function() {
        addScript();

        waitForSlick(function() {
          var $ = window.jQuery;
          $('.icons-grid').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
          });   

        });

      });
    }


    /* Initialise variation */
    waitForElement(".icons-grid", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
