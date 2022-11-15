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
        addCTA(); 
      
    }
  function initListener(){
    listener(function() {
      if(window.location.href.indexOf('/summary.html') != -1) {
        waitForElement('.audi-basket .audi-basket__content-wrapper .audi-basket-button-cta', function() {
            addCTA();           
        }, 50, 10000);
      }
    });
  }
    function addCTA(){
      var  egButton = document.querySelectorAll('.audi-basket .audi-basket__content-wrapper .audi-basket-button-cta');
      for(i=0; i < egButton.length; i++){
        egButton[i].innerHTML = "Request a quote";
      }
    }
    function listener(trigger) {
      window.addEventListener("locationchange", function () {
        trigger();
      });
      /* These are the modifications: */
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
    /* Initialise variation */
    waitForElement(".audi-basket .audi-basket__content-wrapper .audi-basket-button-cta", init, 50, 20000);
    waitForElement('body',initListener,50,10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();