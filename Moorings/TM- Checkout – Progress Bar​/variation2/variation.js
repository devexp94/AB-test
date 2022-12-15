
(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

    
    /* Variation Init */
    function init() {
      /* start your code here */
        document.querySelector("#booking-flow  nav > .step:nth-child(2)").childNodes[2].textContent = "Personal Detail";
    
    }

    listener()

    function listener() {
    
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {
        
          waitForElement('#booking-flow  nav > .step:nth-child(2)', init, 50, 15000);
          waitForElement('#booking-flow nav > .step > span', progress, 50, 15000);
       
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

  function progress(){

    setTimeout(()=>{

      if (window.location.href.indexOf("https://www.moorings.com/booking/passengers") != -1){
        document.querySelector("#booking-flow nav > .step:nth-child(1) > span").classList.add("eg-active");
       
        } 
        else if(window.location.href.indexOf("https://www.moorings.com/booking/payment") != -1){
          document.querySelector("#booking-flow nav > .step:nth-child(1) > span").classList.add("eg-active");
           document.querySelector("#booking-flow nav > .step:nth-child(2) > span").classList.add("eg-active");
         
          }
          else{
            console.log("there is some error")
          }
    }, 100)
  }

    /* Initialize variation */
    waitForElement('#booking-flow  nav > .step > span', init, 50, 15000);
    waitForElement('#booking-flow  nav > .step', progress, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
