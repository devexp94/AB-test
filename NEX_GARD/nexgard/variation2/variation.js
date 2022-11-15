(function () {
  function waitForElement(selector, trigger, delayInterval, delayTimeout) {
    var interval = setInterval(function () {
      if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
        clearInterval(interval);
        trigger();
      }
    }, delayInterval);
    setTimeout(function () {
      clearInterval(interval);
    }, delayTimeout);
  }

  function waitForjQuery(trigger) {
    var interval = setInterval(function () {
      if (window.jQuery != undefined) {
        clearInterval(interval);
        trigger();
      }
    }, 50);
    setTimeout(function () {
      clearInterval(interval);
    }, 10000);
  }

  function init() {
    const vetsup = `
    <div class="account new_inserted">
    
  <div class="views-field views-field-nothing">        <span class="field-content"><div class="image"><div class="views-field views-field-field-icon"><img src="https://nexgard.com.au/sites/nexgardfordogs_au/files/store_logo_vetsupply.png" width="100" height="100" alt=""></div></div>
<div class="right-content">
<h3>Vet Supply</h3>
<div class="views-field views-field-field-account-description"></div>
<div class="views-filed views-field-field-shop-links"><a href="https://www.vetsupply.com.au/nexgard/b2047.aspx" rel="noopener" target="_blank">Shop the NexGard Range</a></div>
</div></span>  </div>  </div>
  `;
    jQuery('.view .view-content').append(vetsup);

    jQuery('.view .view-content .account').each((i, ele) => {
      jQuery(ele).addClass(`ss02Section${i}`);
    });
    jQuery('.account.ss02Section1').insertBefore('.account.ss02Section0');
    jQuery('.account.ss02Section8').insertBefore('.account.ss02Section0');
    jQuery('.account.ss02Section7').insertBefore('.account.ss02Section0');
    jQuery('.account.ss02Section10').insertBefore('.account.ss02Section0');
    jQuery('.account.new_inserted').insertBefore('.account.ss02Section0');
    jQuery('.account.ss02Section5').insertAfter('.account.ss02Section0');
    jQuery('.account.ss02Section11').hide();
    jQuery('.account .views-filed.views-field-field-shop-links a').each((i, ele) => {
      if (jQuery(ele).text() === 'Find a Store') {
        jQuery(ele).remove();
      }
      if (jQuery(ele).text() === 'Shop the NexGard range' || jQuery(ele).text() === 'Shop the NexGard Range') {
        jQuery(ele).text('Shop Now');
      }
    });
    jQuery('.account.ss02Section3 .views-filed.views-field-field-shop-links').append('<a href="https://www.indepet.com.au/Pet-Stores" rel="noopener" target="_blank">Shop Now</a>');
    jQuery('.account.ss02Section9 .views-filed.views-field-field-shop-links').append('<a href="https://peto.com.au/nexgard-spectra/ " rel="noopener" target="_blank">Shop Now</a>');
    jQuery(document).on('click', '.image > div > img', function (ele) {
      jQuery(ele.target).closest('span.field-content').find('div.right-content > div>a:nth-child(1)')[0].click();
    });
    jQuery(document).on('click', '.right-content > h3', function (ele) {
      jQuery(ele.target).closest('.right-content').find('> div > a:nth-child(1)')[0].click();
    });
    const observer = new MutationObserver(((mutationsList, observer) => {

      for(const mutation of mutationsList) {
        if(mutation.type == 'childList' && mutation.removedNodes.length == 1) {
          setTimeout(() => {
            if (jQuery('div#online-account .view.view-online-account .account').length === 2) {
              const lastbrand = `<div class="account ss02Section11">
          <div class="views-field views-field-nothing">        <span class="field-content"><div class="image"><div class="views-field views-field-field-icon"><img src="https://nexgard.com.au/sites/nexgardfordogs_au/files/vsa-2020-stacked-slogan-square100px.jpg" width="100" height="100" alt="nexgard vet shop australia" title="Vet shop australia"></div></div>
        <div class="right-content">
        <h3>Vet Shop Australia</h3>
        <div class="views-field views-field-field-account-description"></div>
        <div class="views-filed views-field-field-shop-links"><a href="https://www.vetshopaustralia.com.au/dog-supplies/flea-tick/nexgard-spectra" rel="noopener" target="_blank">Shop the NexGard Range</a></div>
        </div></span>  </div>  </div>`;
              jQuery('.view.view-online-account .view-content').prepend(lastbrand);
              jQuery('.account:not(.ss02Section11)').eq(0).insertAfter(jQuery('.account:not(.ss02Section11)').eq(1));
              jQuery('.account:not(.ss02Section11)').eq(1).hide();
              jQuery('.account .views-filed.views-field-field-shop-links a').each((i, ele) => {
                console.log(jQuery(ele).text());
                if (jQuery(ele).text() === 'Find a Store') {
                  jQuery(ele).remove();
                }
                if (jQuery(ele).text() === 'Shop the NexGard range' || jQuery(ele).text() === 'Shop the NexGard Range') {
                  jQuery(ele).text('Shop Now');
                }
              });
            } else {
              const vetsup = `
        <div class="account new_inserted">
        
      <div class="views-field views-field-nothing">        <span class="field-content"><div class="image"><div class="views-field views-field-field-icon"><img src="https://nexgard.com.au/sites/nexgardfordogs_au/files/store_logo_vetsupply.png" width="100" height="100" alt=""></div></div>
    <div class="right-content">
    <h3>Vet Supply</h3>
    <div class="views-field views-field-field-account-description"></div>
    <div class="views-filed views-field-field-shop-links"><a href="https://www.vetsupply.com.au/nexgard/b2047.aspx" rel="noopener" target="_blank">Shop the NexGard Range</a></div>
    </div></span>  </div>  </div>
      `;
              jQuery('.view .view-content').append(vetsup);
    
              jQuery('.view .view-content .account').each((i, ele) => {
                jQuery(ele).addClass(`ss02Section${i}`);
              });
              jQuery('.account.ss02Section1').insertBefore('.account.ss02Section0');
              jQuery('.account.ss02Section8').insertBefore('.account.ss02Section0');
              jQuery('.account.ss02Section7').insertBefore('.account.ss02Section0');
              jQuery('.account.ss02Section10').insertBefore('.account.ss02Section0');
              jQuery('.account.new_inserted').insertBefore('.account.ss02Section0');
              jQuery('.account.ss02Section5').insertAfter('.account.ss02Section0');
              jQuery('.account.ss02Section11').hide();
              jQuery('.account .views-filed.views-field-field-shop-links a').each((i, ele) => {
                if (jQuery(ele).text() === 'Find a Store') {
                  jQuery(ele).remove();
                }
                if (jQuery(ele).text() === 'Shop the NexGard range' || jQuery(ele).text() === 'Shop the NexGard Range') {
                  jQuery(ele).text('Shop Now');
                }
              });
              jQuery('.account.ss02Section3 .views-filed.views-field-field-shop-links').append('<a href="https://www.indepet.com.au/Pet-Stores" rel="noopener" target="_blank">Shop Now</a>');
              jQuery('.account.ss02Section9 .views-filed.views-field-field-shop-links').append('<a href="https://peto.com.au/nexgard-spectra/ " rel="noopener" target="_blank">Shop Now</a>');
    
            }
          }, 200);
        }
      }

    }));


    observer.observe(document.querySelector('div#online-account'), {
      characterData: false,
      subtree: false,
      childList: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  waitForjQuery(function () {
    waitForElement('.view .view-content', init, 50, 10000)
  })

}());
