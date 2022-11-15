(function () {
    try {
      var debug = 0;
      var variation_name = "";
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
      
        var egLinkText = document.querySelectorAll('main [id^="auto-tiles_section"] .richtext:not(.text-grey) p');

        for(i=0; i < egLinkText.length; i++){
          egLinkText[i].insertAdjacentHTML('afterend', '<a class="eg-will-link" href="https://trustandwill.com/will/#product-half-half-fixed-aside_section_KzL9EQn9OMqeqT3hGPwnJ" target="_blank">See what documents are included</a>');
        }

      }
      
        waitForElement('main [id^="auto-tiles_section"] li:nth-child(3) .richtext:not(.text-grey) p', init, 100, 25000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();