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

      document.querySelector('div#navbarNavDropdown li.nav-item:last-child').insertAdjacentHTML('afterend', '<li class="nav-item eg-nav-item"><a href="/the-jets" class="menu-link mega-menu"><span>Our Jets</span></a></li>')

    }

    
    waitForElement("div#navbarNavDropdown li.nav-item:last-child", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();