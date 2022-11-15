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

      var promoCountdown =''+ 
      '      <div class="eg-promo-banner">'+ 
      '          <div class="eg-promo-timer">'+ 
      '              <div class="eg-promo-timer-inr">'+ 
      '                 <p class="promo-heading"><b>Promo de rentrée</b> se tremine dans </p>'+
      '                  <div class="eg-date eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">jours</span>'+ 
      '                  </div>'+ 
      '                  <div class="eg-hours eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">heures</span>'+ 
      '                  </div>'+ 
      '                  <div class="eg-minutes eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">minutes</span>'+ 
      '                  </div>'+ 
      '                  <div class="eg-seconds eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">secondes</span>'+ 
      '                  </div>'+ 
      '              </div>'+ 
      '          </div>'+ 
      '  </div>';

      
      function init() {

        document.querySelector('.main-container .checkout-page > div:first-child').insertAdjacentHTML('beforebegin', promoCountdown);

        setInterval(function () {

          var egEndDate = new Date('Nov 10, 2021 12:59:59').getTime();
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
      waitForElement(".main-container .checkout-page > div:first-child", init, 100, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();


