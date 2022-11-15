// (function () {
//   try {
//     /* main variables */
//     var debug = 0;
//     var variation_name = "";

//     /* all Pure helper functions */

//     function waitForElement(selector, trigger, delayInterval, delayTimeout) {
//       var interval = setInterval(function () {
//         if (
//           document &&
//           document.querySelector(selector) &&
//           document.querySelectorAll(selector).length > 0
//         ) {
//           clearInterval(interval);
//           trigger();
//         }
//       }, delayInterval);
//       setTimeout(function () {
//         clearInterval(interval);
//       }, delayTimeout);
//     }


//     function init() {
      
//     }

//     /* Initialise variation */
//     waitForElement("html body .pdp-tile .add-to-cart-button:not(.d-disable) button.add-to-cart", init, 100, 35000);
//   } catch (e) {
//     if (debug) console.log(e, "error in Test" + variation_name);
//   }
// })();
