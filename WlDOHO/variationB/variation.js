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
    var newEle = `<div class="eg-step-section">
<div class="eg-step-inr">
    <div class="eg-step-content">
        <p class="eg-heading">Cut enstcheidung! Nur noch <span></span> schriett</p>
<p class="eg-step eg-step-1">1. Adresse</p>
        <p class="eg-step eg-step-2">2. Versand</p>
        <p class="eg-step eg-step-3">3. Zahlung</p>
    </div>
</div>    
</div>`;
    var stepsReached;
    function init() {
      document.querySelector('header.banner').insertAdjacentHTML('afterend', newEle);
      var breadcrumb = document.querySelectorAll('nav[aria-label="Breadcrumb"] ol li a, nav[aria-label="Breadcrumb"] ol li span');
      for (var i = 0; i < breadcrumb.length; i++) {
        switch (i) {
          case 1:
            breadcrumb[i].innerHTML = i + ". Adresse";
            break;
          case 2:
            var value = breadcrumb[i].innerHTML;
            breadcrumb[i].innerHTML = i + '. ' + value;
            break;
          case 3:
            breadcrumb[i].innerHTML = i + ". Zahlung- schier und bequeme";
            break;
        }
        if (breadcrumb[i].closest("li.breadcrumb__item--current")) {
          stepsReached = i;
        }

      }
      for (var j = 1; j < stepsReached; j++) {
        document.querySelector('.eg-step-' + j) && document.querySelector('.eg-step-' + j).classList.add('eg-comp');
      }
      document.querySelector('.eg-step-section .eg-heading span').innerHTML = (breadcrumb.length - 1) - stepsReached;
    }

    /* Initialise variation */
    waitForElement('header.banner', init, 500, 15000);
    // waitForElement('nav[aria-label="Breadcrumb"]',)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

