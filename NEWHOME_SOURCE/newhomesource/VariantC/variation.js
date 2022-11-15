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
    function init() {
    
      var egButton = document.querySelector('.nhs_AskBuilderAQuestion button');

      egButton.setAttribute('data-segment-event-button_action', 'Request a Tour');
      egButton.innerHTML = 'Request a Tour';

      egButton.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.tab-content.content-1 .nhs_RequestAptModal').click();
      });
      
    }

    waitForElement(".nhs_AskBuilderAQuestion button", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
