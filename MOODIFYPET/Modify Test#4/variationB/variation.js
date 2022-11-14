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

    var tickMark = ''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="78.369px" height="78.369px" viewBox="0 0 78.369 78.369" style="enable-background:new 0 0 78.369 78.369;" xml:space="preserve">'+ 
'  <g>'+ 
'  	<path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   C78.477,17.894,78.477,18.586,78.049,19.015z"/>'+ 
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

    var egBenefit =''+ 
    '  <p class="eg-benefit">'+ tickMark +' Fast & effective, <span>100% of odour</span> removed in 1 minute.</p>'+ 
    '  <p class="eg-benefit">'+ tickMark +' Free shipping & <span>60-day money back</span> guarantee.</p>'+ 
    '  <p class="eg-benefit">'+ tickMark +' Easy to use, just <span>hang above litter</span> & forget.</p>'+ 
    '  <p class="eg-benefit">'+ tickMark +' Cats love it, <span>refreshing scent pack</span> lasts for 30 days.</p>'+ 
    '  <p class="eg-benefit">'+ tickMark +' IFRA approved, <span>cruelty free & safe</span> to use.</p>'+ 
    '  <p class="eg-benefit">'+ tickMark +' Subscribe and <span>save 25%</span> (no cancelation fee).</p>';

    var egReview = ''+
    '<blockquote>'+
    '<em><strong>It\'s a <span class="text-hightlight">brilliant invention,</span> I didn\'t believe at first but it <span class="text-hightlight">worked in minutes.</span></strong></em>&nbsp;</blockquote>';

    function init() {

      
      document.querySelector('.page-width .ic-list--product').insertAdjacentHTML('afterend', egReview);
      document.querySelector('.product-template__container .product-form').insertAdjacentHTML('afterend', egReview);


      document.querySelector('.product__description').innerHTML = egBenefit;

    }


    waitForElement(".product-template__container blockquote", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
