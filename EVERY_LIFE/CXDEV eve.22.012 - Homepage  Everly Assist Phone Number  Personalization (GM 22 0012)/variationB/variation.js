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

        document.querySelector('header nav ul > li:nth-child(5) > a[data-fullstory="apply_top_splash_page"]').innerHTML = 'Apply';
        var telephone = document.querySelector('footer a[href^="tel:"]');

        telephoneLink = telephone.getAttribute('href');
        telephoneNumber = telephone.innerHTML;

        document.querySelector('header nav ul > li:nth-child(5) > a').insertAdjacentHTML('afterend', '<a class="eg-telephone" href='+ telephoneLink +'>'+ telephoneNumber +'</a>');

        document.querySelector('header > div button[aria-label="Open the menu"]').insertAdjacentHTML('beforebegin', '<a class="eg-telephone-mobile" href='+ telephoneLink +'>'+ telephoneNumber +'</a>');
    }


    waitForElement('footer a[href^="tel:"]', init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
