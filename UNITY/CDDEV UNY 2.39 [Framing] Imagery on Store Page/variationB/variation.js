(function () {
  "use strict";

if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

var tag = "cv-2-39",
  debug = document.cookie.indexOf("cfQA") > -1;

window[tag] = {
  log: function (msg) {
    if (debug) console.log("[CONV]", tag, "-->", msg);
  },

  waitForElement: function (cssSelector, callback) {
    var elementCached,
      maxCalls = 500,
      interval = setInterval(function () {
        elementCached = document.querySelector(cssSelector);

        if (elementCached) {
          clearInterval(interval);

          try {
            callback(elementCached);
          } catch (err) {
            window[tag].log(err.message);
          }
        }

        if (--maxCalls < 0) {
          clearInterval(interval);
          window[tag].log(cssSelector + " not found");
        }
      }, 20);
  },

  init: function () {
    try {
      this.waitForElement("body", function (docBody) {
        docBody.classList.add(tag);
      });

      if (debug && document.title.indexOf("CONV QA") < 0) {
        document.title = "[CONV QA] " + document.title;
      }

      initVariation();

      window[tag].log("test running");
    } catch (err) {
      window[tag].log(err.message);
    }
  },
};

window[tag].init();

function initVariation() {
  window[tag].waitForElement('.component-fluid-tabs div[data-tab-content-id="tab-pricing-2"] .component-pricing-card__feature-list li',function(ele){
         
    document.querySelector('html body.cv-2-39 .component-pricing-card--unity-pro .component-pricing-card__feature-list').insertAdjacentHTML('beforebegin', '<div class="cv-bullets-outer"></div>');

    document.querySelector('.cv-bullets-outer').insertAdjacentElement('beforeend', document.querySelector('html body.cv-2-39 .component-pricing-card--unity-pro .component-pricing-card__feature-list'));

    document.querySelector('.optimize-variant--individual--original > .row > div:nth-child(1) .component-pricing-card__title').insertAdjacentHTML('beforebegin', '<img src="https://cfactory-img.s3.amazonaws.com/UNY/2.39new/Unity_pro.jpg">');

    document.querySelector('.optimize-variant--individual--original > .row > div:nth-child(2) .component-pricing-card__title').insertAdjacentHTML('beforebegin', '<img src="https://cfactory-img.s3.amazonaws.com/UNY/2.39new/Unity_plus.jpg">');

    document.querySelector('div[data-tab-content-id="tab-pricing-3"] .optimize-variant--individual--original > .row > div:nth-child(1) .component-pricing-card__title').insertAdjacentHTML('beforebegin', '<img src="https://cfactory-img.s3.amazonaws.com/UNY/2.39new/Unity_enterprise.jpg">');

    document.querySelector('div[data-tab-content-id="tab-pricing-3"] .optimize-variant--individual--original > .row > div:nth-child(2) .component-pricing-card__title').insertAdjacentHTML('beforebegin', '<img src="https://cfactory-img.s3.amazonaws.com/UNY/2.39new/Unity_UIC.jpg">');
    
 document.querySelector('div[data-tab-content-id="tab-pricing-2"] .optimize-variant--business--original .component-pricing-card__title').insertAdjacentHTML('beforebegin', '<img class="cv-mobile-image" src="https://cfactory-img.s3.amazonaws.com/UNY/2.39new/unity-pro-enemies.jpg">');
   
    
      });
     
    
      
}
  function sendGaEvent(label, cat, action){
      if (typeof window.ga !== 'undefined' && typeof window.ga.getAll !== 'undefined') {
          var gtmName = window.ga.getAll()[0] ? window.ga.getAll()[0].get('name') + '.' : '';
      
          if (gtmName !== '') {
              window.ga(gtmName + 'send', {
                  hitType: 'event',
                  eventCategory: cat,
                  eventLabel: label,
                  eventAction: action
              });
          }
      }
  }
})();

