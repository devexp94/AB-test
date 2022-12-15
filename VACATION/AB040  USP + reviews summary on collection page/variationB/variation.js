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

    var egReview =''+ 
'  <div class="eg-review-container">'+ 
'      <p class="eg-text">“The World\'s Most Best-Smelling Sunscreen”</p>'+ 
'      <div class="eg-review">'+ 
'      <p class="eg-text">4.93 / 5</p>'+ 
'          <div class="eg-star">'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'          </div>'+ 
'          <p class="eg-review-text">1297 Reviews</p>'+ 
'      </div>'+ 
'  </div>';

    function init() {
      // listener()
    }

    listener()

    function listener() {
    
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {        
          waitForElement('#__next main > div.filters-container > div.filters-list', insert, 50, 15000);
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

  function insert(){
    setTimeout(()=>{
      document.querySelector("#__next main > div.filters-container > div.filters-list").insertAdjacentHTML('beforebegin', egReview);
    }, 1000)
  }

    /* Initialise variation */
    waitForElement("#__next main > div.filters-container > div.filters-list", init, 100, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
