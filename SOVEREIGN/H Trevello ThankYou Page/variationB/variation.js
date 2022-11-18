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
      document.querySelector('div#lp-pom-text-13 span > span').innerHTML = ' Mon - Sat 9am - 5.30pm';

      window.addEventListener('resize', function(event) {
        egresize();
      }, true);

      egresize();
      
  }

    function egresize(){
      if(window.screen.width < 768){
        document.querySelector('div#lp-pom-image-20 img').insertAdjacentElement('afterend', document.querySelector('#lp-pom-text-21'));
        document.querySelector('#lp-pom-text-21').insertAdjacentElement('afterend', document.querySelector('#lp-pom-text-22'));
      }else{
        document.querySelector('div#lp-pom-image-20').insertAdjacentElement('afterend', document.querySelector('#lp-pom-text-21'));
        document.querySelector('#lp-pom-text-21').insertAdjacentElement('afterend', document.querySelector('#lp-pom-text-22'));
      }
    }

    /* Initialise variation */
    waitForElement("#lp-pom-text-22", init, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
