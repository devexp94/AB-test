(function () {
  if (!document.querySelector('.egMain')){
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
      window.addEventListener("locationchange", function () {
        if (window.location.href.indexOf("https://www.everlylife.com/overview") !== -1){
          waitForElement("main section:nth-child(4)", init, 1000, 15000);
        } else {
          document.body.classList.remove("egBody");
          document.querySelector(".egMain").remove();
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


    let html = `<section class="egMain">
    <div class="egMainDiv">
    <div class="container">
    <div class="title">
    <h2 class="egTitle">Let’s get started on your new Universal Life insurance policy.</h2>
    </div>
    <div class="egDesc description">
    <p>No email or payment info required.</p>
    </div>
    <div class="ctasWrapper">
    <div class="egBtnContainer">
    <a href="/apply" target="" rel="noopener noreferrer" style="text-decoration: none;">
    <span class="egLinkBtn">
    <span class="btnCopy egBtnEstimate">Get free estimate</span>
    </span></a><a href="/protection" target="" rel="noopener noreferrer" style="text-decoration: none;">
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>`;

    /* Variation Init */
    function init() {
      /* start your code here */

        document.body.classList.add("egBody");
        const egInterval = setInterval(() => {
          if(!document.querySelector('.egMain')){
            document.querySelector("main section:nth-child(4)").insertAdjacentHTML("afterend" , html);          
          }else{
            clearInterval(egInterval)
          }
        }, 100);

      } 

    /* Initialize variation */
    if ((window.location.href.indexOf("https://www.everlylife.com/overview") !== -1) && (!document.querySelector('.egMain'))) {
    waitForElement("main section:nth-child(4)", init, 50, 15000);
    }else {
      document.body.classList.remove("egBody");
      document.querySelector(".egMain").remove();
    }

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
}
})();
