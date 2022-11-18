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

    var bmNewSection =''+ 
    '  <div class="buying-benefit-wrapper">'+ 
    '      <div class="buying-benefit-item amazon-item">'+ 
    '          <div class="btn-area">'+ 
    '              <a href="javascript:void(0);" class="open-klavio-modal  has-image " data-href="https://www.amazon.com/Greater-Than-Sports-Coconut-Variety/dp/B08WJRG4C6?maas=maas_adg_93C112004BFF453672AF947A32848145_afap_abs&ref_=aa_maas&tag=maas&ref_=ast_sto_dp&th=1&psc=1">'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <p>Lowest Price & Quick Delivery</p>'+ 
    '          <div class="btn-area simple-wrapper">'+ 
    '              <a class="gt-transperant-button-simple-link" href="https://drinkgt.com/collections/single-flavor-packs">Check out all our flavors</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>'+
    ' <div class="bg-image-wrapper lazyautosizes lazyloaded" sizes="1170px">'+
    '  <img src="//cdn.shopify.com/s/files/1/1428/0736/files/mom_top-banner.png?v=1650706604">'+
    '   </div>';

    function init() {
        document.querySelector('.home-top-section .moms-top-rating-section').insertAdjacentHTML('afterend', bmNewSection);
    }

    /* Initialise variation */
    waitForElement(".home-top-section .moms-top-rating-section", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
