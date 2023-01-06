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

    function listener() {
    
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {
        if(window.location.pathname == "/"){
          document.body.classList.add("egBody");
          waitForElement('main > section:nth-of-type(4)', init, 100, 15000);   
        }else{
          document.body.classList.remove("egBody");
        }
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

  listener();

    
    /* Variation Init */
    function init() {
      
      /* start your code here */

      if(window.location.pathname == "/"){

        document.body.classList.add("egBody");

        // const egTestimonialContainer =  document.querySelector("main > div.testimonial-container");
        // const egCtaContainer = document.querySelector("main > section:nth-of-type(4)");
        // egTestimonialContainer.insertAdjacentElement("beforebegin" ,egCtaContainer );
      }else{
        document.body.classList.remove("egBody");
      }
    }

    /* Initialize variation */
    waitForElement('main > section:nth-of-type(4)', init, 100, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


