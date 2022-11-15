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

    var pricingObj = {
      '/billing/full-access-cb-pr20ts2v': [
        {
          name: '14-DAY LIMITED ACCESS',
          price: '$1.45',
          desc: 'After 14 days, auto-renews $39.95 billed every 4 weeks. You may cancel anytime'
        },
        {
          name: '14-DAY FULL ACCESS',
          price: '$1.95',
          desc: 'After 14 days, auto-renews $39.95 billed every 4 weeks. You may cancel anytime'
        }
      ],
      '/billing/full-access-cb-pr20ts2c': [
        {
          name: '3-DAY PLAN',
          price: 'SIMPLE USE',
          desc: 'After 3 days, auto-renews $12.95 every 4 weeks. You may cancel anytime.'
        },
        {
          name: '14-DAY FULL ACCESS',
          price: '$1.95',
          desc: 'Auto-renews $39.95 billed every 4 weeks. You may cancel anytime.'
        }
      ], 
      '/billing/full-access-cb-pr20ts2': [
        {
          name: '14-DAY LIMITED ACCESS',
          price: '$1.45',
          desc: 'After 14 days, auto-renews $39.95 billed every 4 weeks. You may cancel anytime'
        },
        {
          name: '14-DAY FULL ACCESS',
          price: '$1.95',
          desc: 'After 14 days, auto-renews $39.95 billed every 4 weeks. You may cancel anytime'
        }
      ]
    }
    
    function generatePricingSecHTML(key) {
      return ''+ 
        '  <div class="au-pricing-section eg-content">'+ 
        '      <ul class="au-pricing-nav">'+ 
        '          <li class="au-pricing-nav-item">'+ 
        '              <a href="#au-monthlyLimited" class="au-nav-active">'+ 
        '                  <span class="eg-text">'+pricingObj[key][0].name+'</span>'+ 
        '                  <span class="eg-price">'+pricingObj[key][0].price+'</span>'+ 
        '              </a>'+ 
        '          </li>'+ 
        '          <li class="au-pricing-nav-item">'+ 
        '              <a href="#au-monthlyFull">'+ 
        '                  <span class="eg-text">'+pricingObj[key][1].name+'</span>'+ 
        '                  <span class="eg-price">'+pricingObj[key][1].price+'</span>'+ 
        '              </a>'+ 
        '          </li>'+ 
        '      </ul>'+ 
        '      <div class="au-pricing-tab-content">'+ 
        '          <div class="au-pricing-tab au-tab-active" id="au-monthlyLimited">'+ 
        '              <div class="au-tab-list">'+ 
        '                  <ul>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Download & save in multiple formats</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Best & simplest form creation tool on the web</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Electrinically send any form for signature from anywhere</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Browse tens of thousands of templates</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> 30 days money refund</li>'+ 
        '                  </ul>'+ 
        '              </div>'+ 
        '              <div class="au-tab-pricing">'+ 
        '                  <p>'+pricingObj[key][0].desc+'</p>'+ 
        '              </div>'+ 
        '              <div class="au-tab-desc">'+ 
        '                  <p>'+pricingObj[key][0].name+'</p>'+ 
        '                  <p class="au-price">'+pricingObj[key][0].price+'</p>'+ 
        '              </div>'+ 
        '          </div>'+ 
        '          <div class="au-pricing-tab" id="au-monthlyFull">'+ 
        '              <div class="au-tab-list">'+ 
        '                  <ul>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Download & save in multiple formats</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Best & simplest form creation tool on the web</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Electrinically send any form for signature from anywhere</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> Browse tens of thousands of templates</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> 5 users Per account</li>'+ 
        '                      <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;"> 30 days money refund</li>'+ 
        '                  </ul>'+ 
        '              </div>'+ 
        '              <div class="au-tab-pricing">'+ 
        '                  <p>'+pricingObj[key][1].desc+'</p>'+ 
        '              </div>'+ 
        '              <div class="au-tab-desc">'+ 
        '                  <p>'+pricingObj[key][1].name+'</p>'+ 
        '                  <p class="au-price">'+pricingObj[key][1].price+'</p>'+ 
        '              </div>'+ 
        '          </div>'+ 
        '      </div>'+ 
        '  </div>';

    }  

    function init() {

      document.querySelector('section#pricing div.pricing-mobile .nav-tabs, .pricing_section .pricing_plan').insertAdjacentHTML('beforebegin', generatePricingSecHTML(window.location.pathname));


      document.querySelectorAll('li.au-pricing-nav-item a').forEach(function(item, index) {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector('li.au-pricing-nav-item a.au-nav-active').classList.remove('au-nav-active');
          this.classList.add('au-nav-active');
          var targetId = this.getAttribute('href');
          document.querySelector('.au-pricing-tab.au-tab-active').classList.remove('au-tab-active');
          document.querySelector(targetId).classList.add('au-tab-active');
        })
      })

      document.querySelector('.pricing-mobile-button a').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation(); 
        var key = document.querySelector('.au-pricing-nav-item .au-nav-active').getAttribute('href');
        var sku;
        if(key == '#au-monthlyLimited') {
          sku = window.monthlyLimitedAccessSKU;
        } else if(key == '#au-monthlyFull') {
          sku = window.monthlyFullAccessSKU;
        }
        window.location.href = 'https://pdfsimpli.com/billing/main-cb?skuguid='+sku;
      })

    }

    /* Initialise variation */
    waitForElement('section#pricing div.pricing-mobile .nav-tabs', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();