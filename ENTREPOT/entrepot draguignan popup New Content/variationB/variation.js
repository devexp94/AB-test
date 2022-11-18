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

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    var egPopup = '' +
    '  <div class="eg-popup-dra">'+ 
    '      <div class="eg-popup-overlay"></div>'+ 
    '      <div class="eg-content">'+ 
    '          <span class="eg-cross">×</span>'+ 
        // '          <h2 class="eg-heading">VOTRE MAGASIN D\'ANNEMASSE FAIT PEAU NEUVE !</h2>'+ 
    // '          <div class="eg-subheading">Votre magasin d\'Annemasse est en travaux pour bâtir un magasin tout beau, tout neuf. Pendant cette période :</div>'+ 
    '      <div class="eg-content-inr">'+ 
    '      <div class="eg-image-container">'+ 
    '      </div>'+ 
    '          <div class="eg-description-outer">'+ 
    '          <div class="eg-description">'+ 
    '              <div class="eg-left-section">'+ 
    '                  <h2 class="description-heading">COMMANDEZ</h2>'+ 
    '                  <p class="description-para">sur </br> <a href="https://www.entrepot-du-bricolage.fr/">entrepot-du-bricolage.fr</a></p>'+ 
    '              </div>'+ 
    '              <div class="eg-right-section">'+ 
    '                  <h2 class="description-heading">ET RETIREZ</h2>'+ 
    '                  <p class="description-para"><b>VOTRE MARCHANDISE AU BRICORETRAIT</b> SUR LE PARKING DE L\'AGENCE SAMSE VILLE LA GRAND</p>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <p class="eg-para">Pour toute commande passée sur le site <span>avant 17h</span>, retrait possible dès le lendemain <span>à partir de 9h</span></p>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </div>';

    function createSession() {
      if (getCookie('Options1') == null) {
        setCookie('Options1', '1', 365);
      }
    }
    function initMain() {
      if(!document.querySelector('.eg-popup-dra')){
      document.querySelector('body').insertAdjacentHTML('beforeend', egPopup);

      document.querySelector('.eg-popup-dra .eg-popup-overlay').addEventListener('click', function () {
        createSession();
        document.querySelector('body').classList.remove('eg-popup-dra-show');
      });

      document.querySelector('.eg-popup-dra .eg-content .eg-cross').addEventListener('click', function () {
        createSession();
        document.querySelector('body').classList.remove('eg-popup-dra-show');
      });
    }
    }
    function init() {
      var egCopy = document.querySelector('.m-card-inner .o-store-locator-header h1') && document.querySelector('.m-card-inner .o-store-locator-header h1').textContent;
      if (egCopy && egCopy.indexOf('ANNEMASSE') != -1)
        document.querySelector('body').classList.add('eg-popup-dra-show');
    }
    function init2() {
      var egCopy = document.querySelector('.o-purchase-cart-pickup p') && document.querySelector('.o-purchase-cart-pickup p').textContent;
      if (egCopy && egCopy.indexOf('ANNEMASSE') != -1)
        document.querySelector('body').classList.add('eg-popup-dra-show');
    }
    function initAll() {
      document.querySelector('.m-store-choice-header select').addEventListener('change', function () {
        if ((this.value == 701 || this.value == '701'))
          document.querySelector('body').classList.add('eg-popup-dra-show');

      });
      setTimeout(function () {
        var egOptions = document.querySelector('.m-store-choice-header select').value;
        if ((egOptions == 701 || egOptions == '701'))
          document.querySelector('body').classList.add('eg-popup-dra-show');
      }, 5000);

    }
    /* Initialise variation */
    waitForElement('body', initMain, 50, 25000);
    if (!getCookie('Options1') && window.location.pathname == '/mon-magasin/draguignan') {
      waitForElement('.m-card-inner .o-store-locator-header h1', init, 50, 25000);
    }
    else if (!getCookie('Options1') && window.location.pathname == '/commande/finalisation') {
      waitForElement('.o-purchase-cart-pickup p', init2, 50, 25000);
    }
    else if(!getCookie('Options1'))
      waitForElement('.m-store-choice-header select', initAll, 50, 25000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();