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

    var egGripSection =''+ 
'  <div class="eg-grip-size-section">'+ 
'      <div class="eg-grip-size-section-inr page-width">'+ 
'          <h2 class="eg-heading">Which Size Should I Buy?</h2>'+ 
'          <div class="eg-image-section">'+
'             <img src="https://expogrowth.in/wp-content/uploads/2022/07/img1.png">'+
'             <p class="eg-detail1">Recommendation: This size is best for most goals and Hand Sizes</p>'+
'             <p class="eg-detail2">All size have the same inside diameter (1.1 inch / 2.7 cm) and Length (4.75 inch / 12cm)</p>'+
'         </div>'+ 
'          <div class="eg-content-section">'+ 
'              <p class="eg-content-heading">Buy for Where you are at today and then move up.</p>'+ 
'              <p class="eg-content-para">We understand hand size and grip strength varies greatly from one person to the next. So it\'s important to start with correct size. As your strength increases, you will graduate to using a larger diameter. the fat Gripz Pro is best size for'+ 
'                  most goals and hand sizes. That being said, if you have smaller hands or weak grip strength you may want to consider the Fat Gripz One.</p>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {
      
    document.querySelector('.home-products-section').insertAdjacentHTML('afterend', egGripSection); 

    }

    /* Initialise variation */
    waitForElement(".home-products-section", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
