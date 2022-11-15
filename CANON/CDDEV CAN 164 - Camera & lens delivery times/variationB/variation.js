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

    var egTruckIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="38" viewBox="0 0 59 38" fill="none">'+ 
'  <path d="M39.115 1V31.6H17.38C17.2911 30.2193 16.68 28.9242 15.6707 27.9779C14.6615 27.0315 13.3298 26.5048 11.9462 26.5048C10.5627 26.5048 9.23104 27.0315 8.22179 27.9779C7.21254 28.9242 6.60139 30.2193 6.5125 31.6H1V1H39.115Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M57.25 20.8V31.6H53.6275C53.5386 30.2193 52.9274 28.9242 51.9182 27.9779C50.9089 27.0315 49.5773 26.5048 48.1937 26.5048C46.8102 26.5048 45.4785 27.0315 44.4693 27.9779C43.46 28.9242 42.8489 30.2193 42.76 31.6H39.115V10H46.6975L57.25 20.8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M57.25 20.8V31.6H53.6275C53.5386 30.2193 52.9274 28.9242 51.9182 27.9779C50.9089 27.0315 49.5773 26.5048 48.1937 26.5048C46.8102 26.5048 45.4785 27.0315 44.4693 27.9779C43.46 28.9242 42.8489 30.2193 42.76 31.6H39.115V20.8H57.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M11.935 37C14.9422 37 17.38 34.5823 17.38 31.6C17.38 28.6177 14.9422 26.2 11.935 26.2C8.9278 26.2 6.48999 28.6177 6.48999 31.6C6.48999 34.5823 8.9278 37 11.935 37Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M48.1825 37C51.1897 37 53.6275 34.5823 53.6275 31.6C53.6275 28.6177 51.1897 26.2 48.1825 26.2C45.1753 26.2 42.7375 28.6177 42.7375 31.6C42.7375 34.5823 45.1753 37 48.1825 37Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  </svg>';

    var egDelivery =''+ 
'  <div class="eg-delivery">'+ 
'      <div class="eg-delivery-inr">'+ 
'          <div class="eg-image">'+ egTruckIcon +'</div>'+ 
'          <div class="eg-delivery-content">'+ 
'              <p class="eg-delivery-heading"><span>Free standard delivery</span> on all orders £30 and more</p>'+ 
'              <p class="eg-delivery-subheading">Delivery within 5-7 working days</p>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {

        document.querySelector('.pl-hero').insertAdjacentHTML('afterend', egDelivery);

    }

    /* Initialise variation */
    waitForElement(".pl-hero", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
