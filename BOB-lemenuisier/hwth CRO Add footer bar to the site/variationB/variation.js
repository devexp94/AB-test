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
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    var offset;

    function createSession() {
      if (getCookie('Footer-strip') == null) {
        setCookie('Footer-strip', '1', 365);
      }
    }

    var footerStrip =''+ 
    '  <div class="eg-footer-strip">'+ 
    '      <div class="eg-footer-strip-inr">'+ 
    '          <span class="strip-cross">&times;</span>'+ 
    '          <div class="col col-md-6 col-12">Vous avez une idée de ce que vous cherchez ?</div>'+ 
    '          <div class="col col-md-6 col-12"><a href="#">Votre devis gratuit ici</a></div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
     
      document.querySelector('body').insertAdjacentHTML('beforeend', footerStrip);
      document.body.classList.add('footer-strip-show');

      document.querySelector('.strip-cross').addEventListener('click', function () {
        createSession();
       document.body.classList.remove('footer-strip-show');
      });

    }

        if (!getCookie('Footer-strip')) {
      waitForElement("body", init, 100, 25000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
