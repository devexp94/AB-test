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


    var egbanner =''+ 
    '  <div class="eg-banner">'+ 
    '      <div class="eg-banner-container eg-banner-inr">'+ 
    '          <div class="eg-banner-content">'+ 
    '              <div class="eg-banner-text">'+ 
    '                  <h4 class="eg-heading">Únete a la Red Móvil número 1 en España</h4>'+ 
    '                  <p class="eg-subheading">Sabemos que estar conectado con tus clientes y proveedores nunca ha sido tan importante, por eso estamos orgullosos de haber sido premiados de forma independiente como la mejor Red Móvil en España por sexto año consecutivo.</p>'+ 
    '              </div>'+ 
    '              <picture>'+ 
    '                  <source srcset="/c/microsite/1500138384489/img/badge.webp?v=d450a800c0421cb9ec346de5f4660792" type="image/webp">'+ 
    '                  <source srcset="/c/microsite/1500138384489/img/badge.png?v=b746d215a8fcfd54ba26e1f2f89b8351" type="image/png">'+ 
    '                  <img src="/c/microsite/1500138384489/img/badge.png?v=b746d215a8fcfd54ba26e1f2f89b8351" alt="Best in test: Vodafone 11/2020" data-ws10-js="lazy-load" loading="lazy" width="84">'+ 
    '              </picture>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
          
      document.querySelector('#content > div:nth-child(3)').insertAdjacentHTML('afterend', egbanner);

    }
    /* Initialise variation */
    waitForElement("#content > div:nth-child(3)", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();