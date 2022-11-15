console.log('hello2');
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


      }
      
        waitForElement('.wrap .container_content .subhead', init, 100, 35000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();