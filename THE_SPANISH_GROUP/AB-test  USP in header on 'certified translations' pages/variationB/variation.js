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
  
    let htmlStr = `<h3 class="eg_tile"> Translating Over 90 Languages </br>Inc 5000 Award Winners 2021 & 2022 </h3>`
    let htmlStr2 = `<h3 class="eg_tile"> <span class="eg_one">Lightning Fast Delivery. Same Day Delivery If Needed</span> <br/> Contracted by Governments</h3>`
    let htmlStr3 = `<h3 class="eg_tile"> <span class="eg_one">100% Guaranteed Acceptance for Translated Documents for USCIS.<br/> Corporations Recommended by Embassies and Consulates</span></h3>`

function init(){

  if (window.location.href.indexOf('https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/') != -1) {
    document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", htmlStr);
  } 
  else if (window.location.href.indexOf('https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/') != -1) {
    document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", htmlStr2);
  } 
  else if (window.location.href.indexOf('https://thespanishgroup.org/translations/immigration-certificate-translation/') != -1) {
     document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", htmlStr3);
   } 
}
    /* Initialize variation */
    waitForElement("#header-img > section.template_banner .row div", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

