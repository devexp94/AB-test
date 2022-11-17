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
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    var egTickIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">'+ 
'  <path d="M15 7L8 14L5 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  </svg>';
    
    var egRightSection =''+ 
'  <div class="eg-right-div">'+ 
'      <div class="eg-top-section">'+ 
'          <h2 class="eg-top-heading">What\'s Included In Your Free Trial</h2>'+ 
'          <ul class="eg-list">'+ 
'              <li>'+ egTickIcon + 
'                  <p class="eg-list-heading">Sell in more Channels</p>'+ 
'                  <p class="eg-list-para">Webstore, POS, eBay, Catch, Amazon, Kogan.com and more</p>'+ 
'              </li>'+ 
'              <li>'+ egTickIcon +  
'                  <p class="eg-list-heading">Unified stock management</p>'+ 
'                  <p class="eg-list-para">Inventory management, purchase order management and reporting</p>'+ 
'              </li>'+ 
'              <li>'+ egTickIcon +  
'                  <p class="eg-list-heading">Seamless shipping and fulfilment</p>'+ 
'                  <p class="eg-list-para">Pick and pack, live shipping rates and shipping labelling</p>'+ 
'              </li>'+ 
'          </ul>'+ 
'      </div>'+ 
'      <hr>'+
'      <div class="eg-bottom-section">'+ 
'          <h2 class="eg-bottom-heading">Trusted by Successful Sellers</h2>'+ 
'          <div class="eg-logo-section">'+ 
'              <img src="https://assets.netohq.com/cms/Luxottica_logo.png?mtime=20210331172720" alt="Luxottica">'+ 
'              <img src="https://drive.google.com/uc?export=view&id=1cuuDrxZO0zzxlL_xmh9ZWDRaAU_p8GT-" alt="Edible Blooms">'+ 
'              <img src="https://assets.netohq.com/cms/bicycles_homepage_logo.png?mtime=20210114112701" alt="Bikesonline">'+ 
'          </div>'+ 
'          <div class="eg-testimonial">'+ 
'              <p class="eg-para">Since moving to Neto our month on month profit has increased by over 30%, our admin workload has decreased by at least 50%, and our warehouse staff are completing an average of 20-30% more orders per day.</p>'+ 
'              <div class="eg-author">- Aly Suleman, Morgan Sports</div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

var egSubHeading = '<p class="mb-0 eg-para">Try Neto free for 14 days. No credit card required.<br> Questions? Need a demo? Call us on <a href="tel:1300730300" title="Call this number">1300 730 300</a></p>';

    function init() {
      var $ = window.jQuery;
      $('.hero_content h1').insertBefore('.hero-form .text-blue');
      $('.hero-form .text-blue').after(egSubHeading);
      $('.hero_content').append(egRightSection)

      $('#logo').insertBefore('.free-trial-wrapper h1');
      
  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.hero-form .text-blue', init, 50, 25000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();