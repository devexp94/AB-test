// (function () {
//     try {
//       var debug = 0;
//       var variation_name = "";
//       function waitForElement(selector, trigger, delayInterval, delayTimeout) {
//         var interval = setInterval(function () {
//           if (
//             document &&
//             document.querySelector(selector) &&
//             document.querySelectorAll(selector).length > 0
//           ) {
//             clearInterval(interval);
//             trigger();
//           }
//         }, delayInterval);
//         setTimeout(function () {
//           clearInterval(interval);
//         }, delayTimeout);
//       }
  


//       function init() {

//       }
      
//         waitForElement('.main-content .auth_container .auth_container_form h1', init, 50, 15000);
      
//     } catch (e) {
//       if (debug) console.log(e, "error in Test" + variation_name);
//     }
//   })();