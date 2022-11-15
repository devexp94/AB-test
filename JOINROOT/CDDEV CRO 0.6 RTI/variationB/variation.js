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
        setTimeout(function(){
          document.querySelector('.wrap .container_content .headline').innerHTML = "Car insurance for Colorado’s good drivers";

          document.querySelector('.wrap .container_content .subhead').innerHTML = "Finally, auto coverage that puts Coloradans behind the wheel.";
        }, 500)
        console.log('hello1');
      }
      
        waitForElement('.wrap .container_content .subhead', init, 100, 35000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();