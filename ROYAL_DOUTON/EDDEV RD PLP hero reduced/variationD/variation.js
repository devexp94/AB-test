(function () {
  try {
    var debug = 0;
    var variation_name = "";

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

      document.querySelector('html body .layout-section .c-title-component-text p').insertAdjacentHTML('beforeend', '<span class="eg-toggle"></span>');

      document.querySelector(' .c-title-component-text p .eg-toggle').addEventListener('click', function(){
        document.querySelector('html body .layout-section .c-title-component-text p').classList.toggle('active');
      })      

    }


    waitForElement("html body .layout-section .c-title-component-text p", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

