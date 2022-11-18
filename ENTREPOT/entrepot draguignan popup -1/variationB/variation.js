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

    var egPopup =''+ 
    '  <div class="eg-popup-dra">'+ 
    '      <div class="eg-popup-overlay"></div>'+ 
    '      <div class="eg-content">'+ 
    '       <span class="eg-cross">&times;</span>'+
    '        <div class="eg-image"><img src="https://expogrowth.in/wp-content/uploads/2022/03/PopupImage.png" alt="Popup Image"></div>'+ 
    '          <p class="eg-para">Les retraits de commande en ligne se feront à partir du 03 mars.</p>'+ 
    '      </div>'+ 
    '  </div>';

    var offset;

    function createSession() {
      if (getCookie('Options') == null) {
        setCookie('Options', '1', 365);
      }
    }

    function init() {
      
      
      document.querySelector('body').insertAdjacentHTML('beforeend', egPopup);

      var egOptions = document.querySelector('select[name="store-select"] option[value="554"]').getAttribute('selected');

      if(egOptions === "selected"){

        setTimeout(function(){
          document.querySelector('body').classList.add('eg-popup-dra-show');
        }, 5000);

      }

      document.querySelector('.eg-popup-dra .eg-popup-overlay').addEventListener('click', function () {
        createSession();
        document.querySelector('body').classList.remove('eg-popup-dra-show');
      });

      document.querySelector('.eg-popup-dra .eg-content .eg-cross').addEventListener('click', function () {
        createSession();
        document.querySelector('body').classList.remove('eg-popup-dra-show');
      });


    }
    /* Initialise variation */
    if (!getCookie('Options')) {
      waitForElement('select[name="store-select"] option[value="554"]', init, 50, 25000);
    }
    document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://expogrowth.in/wp-content/uploads/2022/03/PopupImage.png" alt="Popup Image" style="display: none;">')
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();