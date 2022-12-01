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

    /* Variation functions */

    let egStr = `<div class="eg-info-item">
    <span class="eg_templates"></span>
    <h5>Perforation Line</h5>
    <p class="eg_para b-caption mb-0">We perforate at a fixed distance from the short edge of your print, depending on artwork size and orientation. Keep all text at least 3mm away from this line. This ine can sometimes be cut in a slightly different position, so don't line any shapes or images up with it, just to be safe.</p>
</div>`;

    function init() {
      document.querySelector("cms-widget-templates-component div.c-templates__info > div.c-templates__info-item--safe-area").insertAdjacentHTML("afterend" , egStr);

      // document.querySelector("cms-widget-templates-component .c-templates__size-guide h6").innerHTML = "<h6 class='eg_heading'>105x105<br/>Perforated-Landscape</h6>";
     }
    /* Initialize variation */
    waitForElement("cms-widget-templates-component", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
