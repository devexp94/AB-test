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
     
      document.querySelectorAll('.footer-links .h3-footer').forEach(function(item){
        item.classList.add('active');
      })
        document.querySelectorAll('.footer-links .h3-footer').forEach(function(item) {
          item.addEventListener('click', function() {
            this.classList.toggle('active');
          });
        });

    }

    /* Initialise variation */
    waitForElement(".footer-links .h3-footer", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
