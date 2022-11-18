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
      
      document.querySelector('body').classList.add('show-more');

      document.querySelector('.field.fb-checkbox.field-category.amform-layout-one .control').insertAdjacentHTML('afterend', '<div class="see-more"><span>See More</span></div>')

      document.querySelector('.see-more').addEventListener('click', function(){
        document.querySelector('body').classList.remove('show-more');
      })
    }

    /* Initialise variation */
    waitForElement(".field-category.amform-layout-one .control .checkbox-group", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
