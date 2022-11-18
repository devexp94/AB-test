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

      var egDate = document.querySelector('#booking-form .ngb-dp-day').getAttribute('aria-label').split('-');
      function getCurrentMonth(month){
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return monthNames[month];
          
      }

      var egMonth = getCurrentMonth(egDate[1]);

      document.querySelector('main .mrb-holder form').insertAdjacentHTML('beforebegin', '<h5 class="eg-month">'+ egMonth +'</h5>');
      console.log(getCurrentMonth(egDate[1]));

    }

    /* Initialise variation */
    waitForElement("main .mrb-holder form", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
