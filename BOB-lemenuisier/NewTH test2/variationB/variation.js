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

    var egToster =''+ 
    '  <div class="eg-toster">'+ 
    '      <span class="eg-toster-cross">×</span>'+ 
    '      <div class="eg-toster-content">'+ 
    '      <div class="eg-toster-image"><a href="/portail-en-aluminium/portails-battants-en-aluminium"></a></div>'+ 
    '          <h2 class="eg-toster-heading">Profitez de nos bons plans</h2>'+ 
    '          <div class="eg-promo-timer">'+ 
    '              <div class="eg-promo-timer-inr">'+ 
    '                  <span>Plus que</span>'+
    '                  <div class="eg-date eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">jours</span>'+ 
    '                  </div>'+ 
    '                  <span class="eg-colon">:</span>'+ 
    '                  <div class="eg-hours eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">heures</span>'+ 
    '                  </div>'+ 
    '                  <span class="eg-colon">:</span>'+ 
    '                  <div class="eg-minutes eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">minutes</span>'+ 
    '                  </div>'+ 
    '                  <span class="eg-colon">:</span>'+ 
    '                  <div class="eg-seconds eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">secondes</span>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function getDateEg() {
        var days = 0;
        var result = new Date();
        switch(result.getDay()){
            case 5: 
            days = 3;
            break;
            case 6: 
            days = 2;
            break;
            case 7: 
            days = 1;
            break;
            case 1: 
            days = 0;
            break;
        }
        result.setDate(result.getDate() + days);
        return result.setHours('12');
      }
    
    function init() {
        document.querySelector('body').insertAdjacentHTML('beforeend', egToster);
          document.querySelector('body').classList.add('eg-top-toster');
        
      document.querySelector('.eg-toster-cross').addEventListener('click', function(){
        document.querySelector('body').classList.remove('eg-top-toster');
      });

      var Bundle = document.querySelector('.eg-toster-image a');
      var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var fetchDetails = document.createElement('div');
              fetchDetails.innerHTML = this.responseText;
              var getDetails = fetchDetails.querySelector('.banner-image-simple-widget .link').innerHTML;
              Bundle.innerHTML = getDetails;
         }
      };
      xhttp.open("GET","https://www.bob-lemenuisier.fr", true);
      xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*"); 
      xhttp.send();

      var egEndDate = getDateEg();
          setInterval(function () {
           var egStartDate = new Date().getTime();
          var egDiff = egEndDate - egStartDate;
          var days = Math.floor(egDiff / (1000 * 60 * 60 * 24));
          var hours = Math.floor((egDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((egDiff % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((egDiff % (1000 * 60)) / (1000));
          if (days < 10) {
            document.querySelector('.eg-date .eg-number').innerHTML = "0" + days;
          } else {
            document.querySelector('.eg-date .eg-number').innerHTML = days;
          }
          if (hours < 10) {
            document.querySelector('.eg-hours .eg-number').innerHTML = hours = "0" + hours;
          } else {
            document.querySelector('.eg-hours .eg-number').innerHTML = hours;
          }
          if (minutes < 10) {
            document.querySelector('.eg-minutes .eg-number').innerHTML = "0" + minutes;
          } else {
            document.querySelector('.eg-minutes .eg-number').innerHTML = minutes;
          }
          if (seconds < 10) {
            document.querySelector('.eg-seconds .eg-number').innerHTML = "0" + seconds;
          } else {
            document.querySelector('.eg-seconds .eg-number').innerHTML = seconds;
          }
          if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(interval);
            document.querySelector('.eg-promo-timer').style.display = "none";
          }
        }, 1000);
    }

    /* Initialise variation */
    waitForElement("body", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();