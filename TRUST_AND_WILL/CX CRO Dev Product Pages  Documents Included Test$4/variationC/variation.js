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


    function init() {


      var egTextContent = document.querySelector('#hero .min-h-full > p').textContent;

      setTimeout(function(){
        document.querySelector('#hero .min-h-full > p').innerHTML= egTextContent + '<span class="eg-link">See Documents Included.</span>';
      }, 1000)
 

      document.querySelector('.eg-link').addEventListener('click', function(){
        document.querySelector('section#title-aside-two-column-list_section_01SgGs7rR5idTrrZfhhO9W').scrollIntoView({behavior: "smooth", block : "start"}); 
      })
    }

    /* Initialise variation */
    waitForElement("#hero .min-h-full > p", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
