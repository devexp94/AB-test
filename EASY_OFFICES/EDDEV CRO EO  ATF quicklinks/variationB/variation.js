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

    var searchIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;color: #ffffff;fill: #ffffff;width: 20px;height: 20px;" xml:space="preserve">'+ 
'  <g>'+ 
'  	<g>'+ 
'  		<path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>'+ 
'  	</g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  </svg>';

    function init() {

      document.querySelector('.office-search-form-wrap .office-search-fields .office-search-locate').insertAdjacentElement('afterend',document.querySelector('.office-search-form-wrap .office-search-submit'));

      document.querySelector('.office-search-form-wrap .office-search-input').setAttribute('placeholder', 'Search by city, street or postcode...')


      setTimeout(function(){
        document.querySelector('.office-search-form-wrap .office-search-form .office-search-fields').setAttribute('style', ' ');

      },2000);

      document.querySelector('.office-search-form-wrap .office-search-form .office-search-submit').innerHTML =  searchIcon+' Search';
    }

    /* Initialise variation */
    waitForElement(".office-search-form-wrap .office-search-submit", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
