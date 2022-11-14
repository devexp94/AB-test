(function () {
  try {
    /* main variables */
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
      document.querySelector('body > div').insertAdjacentHTML('afterend', '<div class="col-popup-wrapper"><div class="col-popup"><div class="col-popup-inner"><div class="col-header"> <h2>EMMA NA MÍDIA</h2> <svg class="col-close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.292507 14.2926C-0.0979927 14.6831 -0.0979926 15.3166 0.293007 15.7066C0.684007 16.0966 1.31701 16.0971 1.70701 15.7061L7.88101 9.53256C7.91251 9.50106 7.95451 9.48356 7.99901 9.48356C8.04351 9.48356 8.08551 9.50106 8.11701 9.53256L14.291 15.7076C14.5435 15.9601 14.9115 16.0591 15.257 15.9666C15.6025 15.8741 15.8715 15.6046 15.9645 15.2596C16.057 14.9146 15.9585 14.5461 15.706 14.2936L9.53251 8.11756C9.50101 8.08606 9.48351 8.04406 9.48351 7.99956C9.48351 7.95506 9.50101 7.91306 9.53251 7.88156L15.7075 1.70756C16.098 1.31656 16.0975 0.683063 15.7065 0.292563C15.3155 -0.0979373 14.682 -0.0974372 14.2915 0.293563L8.11751 6.46656C8.08601 6.49806 8.04401 6.51556 7.99951 6.51556C7.95501 6.51556 7.91301 6.49806 7.88151 6.46656L1.70751 0.293563C1.31701 -0.0969372 0.684007 -0.0974372 0.293507 0.293063C-0.0969926 0.683563 -0.0974926 1.31656 0.293007 1.70706L6.46651 7.88106C6.49801 7.91256 6.51551 7.95456 6.51551 7.99906C6.51551 8.04356 6.49801 8.08556 6.46651 8.11706L0.293007 14.2921L0.292507 14.2926Z" fill="#2E2F3C"/> </svg> </div><iframe style="display: none;" id="col-content" src="" height="100%" width="100%" title="Iframe Example"></iframe></div></div><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');

      document.querySelectorAll('.hp-awards__top-content .hp-award__txt-content .button').forEach(function(item) {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();
        
          document.querySelector('.col-popup-wrapper').classList.add('col-show')
          document.querySelector('svg.col-close').addEventListener('click', function() {
            document.querySelector('.col-popup-wrapper').classList.remove('col-show')
            document.querySelector('.lds-roller').style.display = "block";
          })

          document.querySelector('#col-content').onload =function() {
            document.querySelector('#col-content').style.display = "block";
            document.querySelector('.lds-roller').style.display = "none";
          }

        })

        
      })

       document.querySelector('#col-content').setAttribute('src', '');

    }

    /* Initialise variation */
    waitForElement(".hp-awards__top-content .hp-award__txt-content .button", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
