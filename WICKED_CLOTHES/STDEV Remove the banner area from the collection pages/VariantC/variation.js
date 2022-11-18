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

    var discount = ''+
    ' <div class="eg-discount">'+
    '   <div class="eg-discount-inr">'+
    '     <span class="eg-cross">&times;</span>'+
    '     <p class="eg-text">Get 20% off</p>'+
    '   </div>'+
    ' </div>';

    function init() {

      document.querySelector('body').insertAdjacentHTML('beforeend', discount);

      document.querySelector('.eg-discount .eg-text').addEventListener('click', function(){

        document.querySelector('div.remodal-wrapper.email-modal-remodal').classList.add('remodal-is-opened');
        document.querySelector('div.remodal-wrapper.email-modal-remodal #EmailModal').classList.add('remodal-is-opened');
        document.querySelector('div.remodal-wrapper.email-modal-remodal').previousSibling.classList.add('remodal-is-opened');
        document.querySelector('div.remodal-wrapper.email-modal-remodal').style.display='block';
        document.querySelector('div.remodal-wrapper.email-modal-remodal #EmailModal').style.display='inline-block';
        document.querySelector('div.remodal-wrapper.email-modal-remodal').previousSibling.style.display='block';
      });

      document.querySelector('.eg-discount .eg-cross').addEventListener('click', function(){
          document.querySelector('body').classList.add('eg-discount-banner');
      })
    }

    /* Initialise variation */
    waitForElement("body", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
