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

    function listener(trigger) {
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {
          waitForElement("main h1 + p", init, 100, 15000);
      });
      history.pushState = ((f) =>
        function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("pushstate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.pushState);
      history.replaceState = ((f) =>
        function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("replacestate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.replaceState);
      window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"));
      });
    }

    function init() {
 
      if(document.querySelector('.eg-start')) return;
      document.querySelector('main h1 + p').insertAdjacentHTML('afterend', '<div class="eg-start"><a href="/apply">Start Estimate</a></div>')

      if(window.location.pathname === '/tax-benefits'){
        document.querySelector('body').classList.add('eg-tax-page');
      }
    }

    listener(init)
    /* Initialise variation */
    waitForElement("main h1 + p", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
