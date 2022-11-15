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
        }, 
        {
          name: 'MONTHLY ACCESS',
          price: '$24.91',
          desc: 'Pay one-time $299.00. You may cancel anytime.'
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
        },
        {
          name: 'Annual Plan',
          price: '$24.95',
          desc: 'Pay one-time $299.40. You may cancel anytime.'
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
        },
        {
          name: 'MONTHLY ACCESS',
          price: '$5.95',
          desc: 'Billed Annually at $71.40 save 85%. Cancel anytime.'
        }
      ]
    }
    
    function generatePricingSecHTML(key) {

      return ''+ 
      '  <div class="simp-collapse">'+ 
      '      <div class="simp-collapse-tab" simp-key="monthlyLimitedAccessSKU">'+ 
      '          <div class="simp-collapse-cta"><div class="eg-tick"><i class="far fa-check"></i></div><span class="simp-label">'+pricingObj[key][0].name+'</span><span class="simp-price">'+pricingObj[key][0].price+'</span></div>'+ 
      '      </div>'+ 
      '      <div class="simp-collapse-tab simp-open" simp-key="monthlyFullAccessSKU">'+ 
      '          <div class="simp-collapse-cta"><div class="eg-tick"><i class="far fa-check"></i></div><span class="simp-label">'+pricingObj[key][1].name+'</span><span class="simp-price">'+pricingObj[key][1].price+'</span></div>'+ 
      '      </div>'+ 
      '      <div class="simp-collapse-tab" simp-key="yearlyFullAccessSKU">'+ 
      '          <div class="simp-collapse-cta"><div class="eg-tick"><i class="far fa-check"></i></div><span class="simp-label">'+pricingObj[key][2].name+'</span><span class="simp-price">'+pricingObj[key][2].price+'</span></div>'+ 
      '      </div>'+ 
      '     <div class="simp-tab-content">'+
      '          <div class="simp-collapse-content" id="monthlyLimitedAccessSKU">'+ 
      '              <ul>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Download & save in multiple formats</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-petition.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Best & simplest form creation tool on the web</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-sign.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Electronically send any form for signature from anywhere</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-magnifying-glass.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Browse tens of thousands of templates</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-refund.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">30 days money refund</li>'+ 
      '              </ul>'+ 
      '              <p class="simp-sub">'+pricingObj[key][0].desc+'</p>'+ 
      '          </div>'+ 
      '          <div class="simp-collapse-content simp-tab-open" id="monthlyFullAccessSKU">'+ 
      '              <ul>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Download & save in multiple formats</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-petition.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Best & simplest form creation tool on the web</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-sign.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Electronically send any form for signature from anywhere</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-magnifying-glass.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Browse tens of thousands of templates</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-users.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px">7 users Per account</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-refund.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">30 days money refund</li>'+ 
      '              </ul>'+ 
      '              <p class="simp-sub">'+pricingObj[key][1].desc+'</p>'+ 
      '          </div>'+ 
      '          <div class="simp-collapse-content" id="yearlyFullAccessSKU">'+ 
      '              <ul>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-download.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Download & save in multiple formats</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-petition.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Best & simplest form creation tool on the web</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-sign.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Electronically send any form for signature from anywhere</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-magnifying-glass.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">Browse tens of thousands of templates</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-users.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px">5 users Per account</li>'+ 
      '                  <li><img src="https://prodblobcdn.azureedge.net/content/img/skeu-icon-refund.png?v=20210203062351" alt="Download" draggable="false" style="margin-right: .5em; margin-bottom: 1px;">30 days money refund</li>'+ 
      '              </ul>'+ 
      '              <p class="simp-sub">'+pricingObj[key][2].desc+'</p>'+ 
      '          </div>'+ 
      '     </div>'+
      '  </div>';
    }

    function init() {

        document.querySelector('section#pricing div.pricing-mobile .nav-tabs, .pricing_section .pricing_plan').insertAdjacentHTML('beforebegin', generatePricingSecHTML(window.location.pathname));

        document.querySelectorAll('.simp-collapse-cta').forEach(function(item, index) {
          item.addEventListener('click', function() {
            var self = this;
            document.querySelectorAll('.simp-collapse-tab').forEach(function(item, index) {
              if(item != self) {
                item.classList.remove('simp-open')
              }
            })
            this.parentNode.classList.toggle('simp-open');
            // tab open
            var id = this.closest('.simp-collapse-tab').getAttribute('simp-key');
            document.querySelector('.simp-tab-open').classList.remove('simp-tab-open');
            document.querySelector('.simp-collapse-content#'+id).classList.add('simp-tab-open');
          })
        })

        document.querySelector('.pricing-mobile-button a').addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          if(document.querySelector('.simp-collapse-tab.simp-open')) {
            var sku = window[document.querySelector('.simp-collapse-tab.simp-open').getAttribute('simp-key')];
            window.location.href = "https://pdfsimpli.com/billing/main-cb?skuguid="+sku;
          }
        })

    }

    /* Initialise variation */
    waitForElement('section#pricing div.pricing-mobile .nav-tabs', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();