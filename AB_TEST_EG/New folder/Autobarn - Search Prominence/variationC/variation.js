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

//     /* Variation functions */

//     /* Variation Init */
//     function init() {
//       /* start your code here */

//       console.log(
//         "Hello dev please check console if fecli triggering correctly"
//       );
//     }

//     /* Initialise variation */
//     waitForElement("body", init, 50, 15000);
//   } catch (e) {
//     if (debug) console.log(e, "error in Test" + variation_name);
//   }
// })();
