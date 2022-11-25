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

    let htmlStr = `<h3 class="eg_tile"> <img src="https://img.icons8.com/material-outlined/24/44aaab/checked--v1.png"/>
    Translating Over 90 Languages </br><img src="https://img.icons8.com/material-outlined/24/44aaab/checked--v1.png"/>
    Inc 5000 Award Winners 2021 & 2022 </h3>`;
    
    let htmlStr2 = `<h3 class="eg_tile"> <span class="eg_one"><img src="https://img.icons8.com/material-outlined/24/44aaab/checked--v1.png"/>
Lightning Fast Delivery. Same Day Delivery If Needed</span> <br/><img src="https://img.icons8.com/material-outlined/24/44aaab/checked--v1.png"/>
Contracted by Governments</h3>`;

let htmlStr3 = `<h3 class="eg_tile"> <span class="eg_two"> <img src="https://img.icons8.com/material-outlined/24/44aaab/checked--v1.png"/>
100% Guaranteed Acceptance for Translated Documents for USCIS.<br/>  <span class="eg_corp"><img src="https://img.icons8.com/material-outlined/24/44aaab/checked--v1.png"/>
Corporations Recommended by Embassies and Consulates</span> </span></h3>`;

    function init() {
      if (
        window.location.href.indexOf(
          "https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/"
        ) != -1
      ) {
        document
          .querySelector("#header-img > section.template_banner .row div")
          .insertAdjacentHTML("afterend", htmlStr);
      } else if (
        window.location.href.indexOf(
          "https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/"
        ) != -1
      ) {
        document
          .querySelector("#header-img > section.template_banner .row div")
          .insertAdjacentHTML("afterend", htmlStr2);
      } else if (
        window.location.href.indexOf(
          "https://thespanishgroup.org/translations/immigration-certificate-translation/"
        ) != -1
      ) {
        document
          .querySelector("#header-img > section.template_banner .row div")
          .insertAdjacentHTML("afterend", htmlStr3);
      }
    }
    /* Initialize variation */
    waitForElement(
      "#header-img > section.template_banner .row div",
      init,
      50,
      15000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
