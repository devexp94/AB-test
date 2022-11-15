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

    var magnifyingGlass =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 96 96" height="96px" id="magnifying_glass" version="1.1" viewBox="0 0 96 96" width="96px" xml:space="preserve"><path d="M90.63,84.971l-22.5-22.5C73.05,56.311,76,48.5,76,40C76,20.12,59.88,4,40,4S4,20.12,4,40  s16.12,36,36,36c8.5,0,16.311-2.95,22.471-7.87l22.5,22.5c0.779,0.78,1.812,1.17,2.829,1.17c1.021,0,2.05-0.39,2.83-1.17  C92.189,89.07,92.189,86.529,90.63,84.971z M40,68c-15.464,0-28-12.536-28-28s12.536-28,28-28s28,12.536,28,28S55.464,68,40,68z" id="_x3C_Path_x3E_"/></svg>';

    var searchBanner =''+ 
    '  <div class="eg-search-options">'+ 
    '      <div class="eg-search-options-inr">'+ 
    '          <h3 class="eg-heading">popular searches this week</h3>'+ 
    '          <div class="eg-options">'+ 
    '              <a href="https://www.target.com.au/search?sEngine=c&text=christmas" class="eg-option-box">'+ magnifyingGlass +' Christmas</a>'+ 
    '              <a href="https://www.target.com.au/search?sEngine=c&text=clearance" class="eg-option-box">'+ magnifyingGlass +' Clearance</a>'+ 
    '              <a href="https://www.target.com.au/search?text=halloween&sEngine=c" class="eg-option-box">'+ magnifyingGlass +' Halloween</a>'+ 
    '              <a href="https://www.target.com.au/search?text=disney&sEngine=cn-box" class="eg-option-box">'+ magnifyingGlass +' Disney</a>'+ 
    '              <a href="https://www.target.com.au/search?sEngine=c&text=bluey" class="eg-option-box">'+ magnifyingGlass +' Bluey</a>'+ 
    '              <a href="https://www.target.com.au/search?text=christmas%20tree&sEngine=c" class="eg-option-box">'+ magnifyingGlass +' Christmas Tree</a>'+ 
    '              <a href="https://www.target.com.au/search?text=cushion&sEngine=c" class="eg-option-box">'+ magnifyingGlass +' Cushion</a>'+ 
    '              <a href="https://www.target.com.au/search?text=minecraft&sEngine=c" class="eg-option-box">'+ magnifyingGlass +' Minecraft</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      
        document.querySelector('.main > .comp-heading').insertAdjacentHTML('beforebegin', searchBanner);
    }

    /* Initialise variation */
    waitForElement(".main > .comp-heading", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
