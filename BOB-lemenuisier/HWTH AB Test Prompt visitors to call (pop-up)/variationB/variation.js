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

    var egPopup =''+ 
    '  <div class="eg-popup">'+ 
    '      <div class="eg-popup-overlay"></div>'+ 
    '      <div class="eg-popup-content">'+ 
    '          <div class="eg-cross">&times;</div>'+ 
    '          <h2 class="eg-popup-heading">Vous ne trouvez pas l’information que vous souhaitez ? Nous avons probablement oublié de l’indiquer !</h2>'+ 
    '          <p class="eg-popup-subheading">Prenez contact avec un expert Bob qui vous apportera la réponse.</p>'+ 
    '          <div class="green-number eg-phone">'+
    '             <div class="bg-white"><a class="tel" href="tel:+33805542084">0 805 542 084</a></div>'+
    '             <div class="bg-green"><span>Service &amp; appel gratuits</span></div>'+
    '          </div>'+
    '          <div class="eg-mobile-button"><a href="tel:+33805542084">Appelez maintenant</a></div>'+
    '      </div>'+ 
    '  </div>';

    var offset;
    
    function createSession() {
      if(getCookie('firstVisit') == null) {
        setCookie('firstVisit', '1',365);
      }
    }

    function init() {
    
        document.querySelector('body').insertAdjacentHTML('beforeend', egPopup);
        
        var egPhoneNumber = document.querySelector('.header-social .green-number .tel').getAttribute('href');
        var egPhoneText = document.querySelector('.header-social .green-number .tel').innerHTML;
        
        document.querySelector('.eg-phone .tel').setAttribute('href', egPhoneNumber);
        document.querySelector('.eg-phone .tel').innerHTML = egPhoneText;
        document.querySelector('.eg-mobile-button').setAttribute('href', egPhoneNumber);
        
        setTimeout(function(){
          document.querySelector('body').classList.add('eg-popup-show');
          createSession();
        })

        document.querySelector('.eg-popup .eg-cross').addEventListener('click', function(){
          document.querySelector('body').classList.remove('eg-popup-show');
        })
        document.querySelector('.eg-popup .eg-popup-overlay').addEventListener('click', function(){
          document.querySelector('body').classList.remove('eg-popup-show');
        })

    }

    /* Initialise variation */
    if(!getCookie('firstVisit')){
      waitForElement(".header-social .green-number .tel", init, 100, 35000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
