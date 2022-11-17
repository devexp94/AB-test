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
    
    var egContactSection =''+
'           <div class="eg-contact-section">'+
'             <a class="eg-phone-link" href=""><span>Call us: </span></a>'+
'             <span class="eg-check-eligibilty"><span class="eg-sub-text">Free claim check</span><span class="eg-main-text">Check my claim</span></span>'+
'           </div>';

    function init() {
      var $ = window.jQuery;

      $('.page_title_module-content_container .page_title_module-cta, .standard_hero-cta').after(egContactSection);

      // $('.standard_hero-cta').after(egContactSection);
      
      
      var egNumberLink = $('.feature_cta-phone_link').attr('href');
      var egNumber = $('.feature_cta-phone_link').html();
      
      $('.eg-phone-link').attr('href', egNumberLink);
      $('.eg-phone-link').html('<span>Call us: </span> '+ egNumber);
 

      $('body').on('click', '.eg-check-eligibilty',function(){
        $('.feature_cta-content .feature_cta-button button').click();
      });

  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.feature_cta-phone_link', init, 50, 15000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();