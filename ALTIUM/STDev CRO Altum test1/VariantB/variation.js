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
    
    var egIcon =''+ 
    '  <div class="eg-icon-section">'+ 
    '      <div class="eg-icon-inr">'+ 
    '          <img src="https://cdn.optimizely.com/img/8453775962/3f30bd14f9594f5eaeab9e468a149551.png" alt="Leader Fall">'+ 
    '          <img src="https://cdn.optimizely.com/img/8453775962/b4962bb542d34464a278ae99668c90a9.svg" alt="Capterra">'+
    '          <img src="https://cdn.optimizely.com/img/8453775962/dacd95403f35476094be61d27a4380b9.png" alt="Get App">'+ 
    '      </div>'+ 
    '  </div>';

    /* Variation Init */
    function init() {
    
      document.querySelector('.am-container .s-ad-video__buy').insertAdjacentHTML('beforeend', egIcon);

    }
    /* Initialise variation */
    waitForElement(".am-container .s-ad-video__buy", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
