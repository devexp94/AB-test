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

    var egArrow = ''+
    '<div class="eg-arrow">'+
    '   <span class="icon icon-chevron-left icon-prev slick-arrow"></span>'+
    '   <span class="icon icon-chevron-right icon-next slick-arrow"></span>'+
    '</div>';


      function init() {
        document.querySelector('.product-image-slider .slick-dots').insertAdjacentHTML('afterend', egArrow);

        document.querySelector('.eg-arrow .icon-prev').addEventListener('click', function(){
            document.querySelector('.product-image-slider').slick.slickPrev()
        });
        document.querySelector('.eg-arrow .icon-next').addEventListener('click', function(){
            document.querySelector('.product-image-slider').slick.slickNext()
        });


      }
      /* Initialise variation */
      waitForElement(".product-image-slider .slick-dots", init, 50, 15000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();