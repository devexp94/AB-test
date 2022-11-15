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


var egButton = ''+
'   <p class="text--align-center eg-specification-button">'+
'		  <span class="spec-sheet__show">Show Specifications</span>'+
'     <span class="spec-sheet__hide">Hide Specifications</span>'+
'   </p>';

    function init() {
    
      document.querySelector('.img-with-feature-icons > .wrapper > div:last-child a').insertAdjacentHTML('afterend', egButton);
      
      var buttonLink = document.querySelector('.eg-specification-button');
      buttonLink.addEventListener('click', function(){
        buttonLink.classList.toggle('eg-open');
        document.querySelector('.spec-sheet .spec-sheet__summary').click();
      })
      
    }

    /* Initialise variation */
    waitForElement(".img-with-feature-icons > .wrapper > div:last-child a", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
