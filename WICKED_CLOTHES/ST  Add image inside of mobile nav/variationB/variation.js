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
    };

    /* Variation functions */

    let egImgContent = `<div class="eg_trust" eg-href="https://www.wickedclothes.com/collections/cats">
                         <h4>Over 717,000+ happy customers</h4>
                         <div class="eg_img">
                         <img src="https://expogrowth.in/wp-content/uploads/2022/11/wc.png" alt="img">
                       </div>
                      </div>`

    function init() {

      if (window.innerWidth < 768) {
        document.querySelector("#shopify-section-navigation > div.mobile__nav > div.creep-it-real__container").insertAdjacentHTML("beforebegin", egImgContent); 

        let eg_link = document.querySelector('.eg_trust');
        eg_link.addEventListener('click',function(){
            window.location.href = this.getAttribute('eg-href');
          });
      };
    };
    /* Initialize variation */
    waitForElement("#shopify-section-navigation div.nav--content", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();