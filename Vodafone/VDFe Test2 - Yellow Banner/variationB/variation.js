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

var egStrip = ''+
'<div class="eg-strip">'+
'    <div class="eg-strip-inr">'+
'        <p class="eg-strip-text"><strong>50% dto. 3 meses</strong>- Solo online</p>'+
'    </div>'+
'</div>';

    function init() {
              
      document.querySelector('.ws10-c-header-secondary__i .ws10-m-card-rate-ticket-detail__card-rate-ticket-section > section').insertAdjacentHTML('beforebegin', egStrip);

    }
    
    function init2() {
      var egContentBox = document.querySelectorAll('.ws10-m-card-rate-ticket-detail__card-rate-ticket-section > section');
      for(var i=0; i < egContentBox.length; i++){
        egContentBox[i].insertAdjacentHTML('beforebegin', egStrip);
      }

    }
    
    waitForElement(".ws10-c-header-secondary__i .ws10-m-card-rate-ticket-detail__card-rate-ticket-section > section", init, 100, 15000);

    
    waitForElement(".ws10-m-card-rate-ticket-detail__card-rate-ticket-section > section", init2, 100, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();