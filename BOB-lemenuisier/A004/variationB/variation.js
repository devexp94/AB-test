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


    var offset;

    function createSession() {
      if (getCookie('FormShow') == null) {
        setCookie('FormShow', '1', 365);
      }
    }

    function init() {
      
        document.getElementsByClassName('webcallbackwidget ').className = 'openPopup';

        document.querySelector('.webcallbackwidget .container-bob').insertAdjacentHTML('beforebegin', '<div class="eg-overlay"></div>');

        document.querySelector('.webcallbackwidget .container-bob .banner-call').insertAdjacentHTML('beforebegin', '<span class="eg-cross">&times;</span>')

      document.querySelector('.eg-cross').addEventListener('click', function () {
        createSession();
       document.body.classList.remove('openPopup');
      });

      document.querySelector('.eg-overlay').addEventListener('click', function () {
        createSession();
       document.body.classList.remove('openPopup');
      });

     //add mouseout event 
      document.addEventListener("mouseout", function (e) {
        if (e.toElement == null && e.relatedTarget == null) {
          if (!getCookie('FormShow')){
            document.body.classList.add("openPopup");
            }
        }
      });
      if(window.screen.width < 1024)
      { 
          // listen to "scroll" event
          window.onscroll = function(){
            if (checkScrollSpeed() > 100 && !getCookie('FormShow')) {
              document.body.classList.add("openPopup");
          }
          };
      }

    }

 var checkScrollSpeed = (function(settings){
      settings = settings || {};
  
      var lastPos, newPos, timer, delta, 
          delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
  
      function clear() {
        lastPos = null;
        delta = 0;
      }
  
      clear();
  
      return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll 
          delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
  })();
    /* Initialise variation */
    if (!getCookie('FormShow')) {
      waitForElement(".webcallbackwidget .container-bob .banner-call", init, 100, 25000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();