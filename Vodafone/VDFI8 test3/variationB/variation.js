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

    var egTimer = '' +
      '  <div class="eg-promo-timer">' +
      '      <div class="eg-promo-timer-inr">' +
      '          <div class="eg-date eg-box">' +
      '              <span class="eg-number">00</span>' +
      '              <span class="eg-text">Giorni</span>' +
      '          </div>' +
      '          <div class="eg-hours eg-box">' +
      '              <span class="eg-number">00</span>' +
      '              <span class="eg-text">Ore</span>' +
      '          </div>' +
      '          <div class="eg-minutes eg-box">' +
      '              <span class="eg-number">00</span>' +
      '              <span class="eg-text">Minuti</span>' +
      '          </div>' +
      '          <div class="eg-seconds eg-box">' +
      '              <span class="eg-number">00</span>' +
      '              <span class="eg-text">Secondi</span>' +
      '          </div>' +
      '      </div>' +
      '  </div>';
    var itMonth = {
      "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May",
      "06": "Jun", "07": "July", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
    };
    var CrossVal = {
      '/portal/Aziende/Partita-IVA/Fibra-e-ADSL/Rete-Fissa/Snodo': "30,00",'/portal/Aziende/Partita-IVA/Fibra-e-ADSL/Rete-Fissa/one-net-pro':'35,00','/portal/aziende/partita-iva/fibra-e-adsl/rete-fissa/snodo':'30,00',
      '/portal/aziende/partita-iva/landing/retargeting-fissa': '30,00', '/portal/aziende/partita-iva/landing/iperfibra-adv-red-internet': '30,00',
      '/pages/BUSINESS/retargeting-fissa':'30,00','/pages/BUSINESS/iperfibra-adv-red-PIVA-Internet':'30,00','/pages/BUSINESS/one-net-pro':'35,00','/pages/BUSINESS/ADSL_fibra':'30,00'
    };

    function init() {
      setTimeout(function () {
       var promoDate =  getPromoDate();
        document.querySelector('.vf_ps_sidePanel h2 strong').insertAdjacentHTML('afterend', egTimer);
        //  console.log(date,'hello');
        var crossValue = CrossVal[window.location.pathname];
        console.log(crossValue);
        document.querySelector('.vf_ps_sidePanel .vf_ps_prize strong').insertAdjacentHTML('beforebegin','<span class="eg-crossvalue">'+crossValue+'€</span>');
        var egStartDate = new Date("" + promoDate + ", 2021 23:59:59").getTime();
        //var bmDaysContent1 = $('html body #block-hero-sprint-1 .top-content p');
        setInterval(function () {
          var egEndDate = new Date().getTime();
          var egDiff = egStartDate - egEndDate;
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

        // document.querySelector('.eg-seconds .eg-number').innerHTML = seconds;
      }, 2000);
    }
  function getPromoDate(){
    var promoDate = document.querySelector('.vf_ps_sidePanel #vf_ps_promoEndDate') || document.querySelector('.vf_ps_sidePanel small b, .vf_ps_sidePanel header + h3 .vf_ps_ylwStrip');
        var promoDateVal = promoDate.textContent;
        var promo = promoDateVal.length > 5 ? promoDateVal.replace('Promo valida solo fino al ','') : promoDateVal;
        var ar = promo.split('/');
        //console.log(ar[0],ar[1],'hhhh')
        var month = itMonth[ar[1]];
        var endDay = ar[0];
        var date = month + ' ' + endDay;
        return date;
  }
    /* Initialise variation */
    waitForElement(".vf_ps_sidePanel h2 strong", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();