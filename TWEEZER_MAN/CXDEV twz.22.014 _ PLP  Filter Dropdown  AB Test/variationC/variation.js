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

    function init() {

        var egTitle = document.querySelectorAll('.sidebar-main .filter-options-title');
       
        for(var i = 0; i < egTitle.length; i++){
            egTitle[i].insertAdjacentHTML('beforeend', '<small class="fa fa-chevron-down small"></small><small class="fa fa-chevron-right small"></small>');
        // egTitle[i].click();
        }
    }

    waitForElement(".sidebar-main .filter-options-title", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
