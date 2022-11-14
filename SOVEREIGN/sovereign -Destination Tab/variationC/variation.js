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

    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element && function (ElementPrototype) {
        ElementPrototype.matches = ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found, el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    var viewMoreImage =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">'+ 
    '  <path d="M21.0833 1.125H5.75C4.69144 1.125 3.83333 1.88051 3.83333 2.8125V11.8125C3.83333 12.7445 4.69144 13.5 5.75 13.5H21.0833C22.1419 13.5 23 12.7445 23 11.8125V2.8125C23 1.88051 22.1415 1.125 21.0833 1.125ZM8.90851 3.375C9.61448 3.375 10.1863 3.87879 10.1863 4.5C10.1863 5.12121 9.65122 5.625 8.90851 5.625C8.20293 5.625 7.63073 5.12121 7.63073 4.5C7.63073 3.87879 8.23767 3.375 8.90851 3.375ZM19.7297 10.9547C19.6179 11.1375 19.4023 11.25 19.1667 11.25H7.66667C7.42617 11.25 7.20627 11.1312 7.09726 10.9424C6.98825 10.7537 7.00881 10.5272 7.15044 10.356L9.94558 6.98098C10.0665 6.83438 10.2582 6.75 10.4618 6.75C10.6659 6.75 10.8578 6.83582 10.9781 6.98112L11.8706 8.05901L14.3758 4.75045C14.4589 4.59492 14.6585 4.5 14.9061 4.5C15.1196 4.5 15.319 4.59394 15.4376 4.75049L19.6981 10.3755C19.8295 10.5469 19.8415 10.7684 19.7297 10.9547ZM18.2083 15.1875H4.79167C3.20642 15.1875 1.91667 14.052 1.91667 12.6562V4.21875C1.91667 3.75469 1.48741 3.375 0.958333 3.375C0.429253 3.375 0 3.75469 0 4.21875V12.6562C0 14.9836 2.14946 16.875 4.79167 16.875H18.2083C18.7374 16.875 19.1667 16.4971 19.1667 16.0312C19.1667 15.5654 18.7394 15.1875 18.2083 15.1875Z" fill="white"/>'+ 
    '  </svg>';


    var egTravelContainer =''+ 
    '  <div class="eg-option-container">'+ 
    '      <div class="eg-option-inr">'+ 
    '          <p class="eg-note"></p>'+ 
    '          <p class="eg-price-container">'+ 
    '              <span class="eg-price-number"></span>'+ 
    '              <span class="eg-price-text">/per person</span>'+ 
    '          </p>'+ 
    '          <div class="eg-details-container">'+ 
    '              <div class="eg-date-outer"><p class="eg-date"></p><div class="eg-dropdown"></div></div>'+ 
    '              <div class="eg-destination-outer"><p class="eg-destination"></p><div class="eg-dropdown"></div></div>'+ 
    '              <div class="eg-transfer-outer"><p class="eg-transfer"></p><div class="eg-dropdown"></div></div>'+ 
    '              <div class="eg-luggage-outer"><p class="eg-luggage"></p><div class="eg-dropdown"></div></div>'+ 
    '              <div class="eg-refund-outer"><p class="eg-refund">COVID-19 Refund Guarantee</p><div class="eg-dropdown"></div></div>'+ 
    '          </div>'+ 
    '          <div class="eg-total-container">'+ 
    '              <span class="eg-total-text">Total</span>'+ 
    '              <span class="eg-total-price"></span>'+ 
    '          </div>'+ 
    '          <div class="eg-button-container">'+ 
    '              <button class="eg-button">Select Room</button>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var tickMark =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">'+ 
    '  <path d="M15 7L8 14L5 11" stroke="#BEA393" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg>';

   
    function init() {

      document.querySelector('.body-content #heroCarousel').insertAdjacentElement('beforebegin', document.querySelector('.body-content .hero-outside.container.css-force-display'));
      
      var egReviewHeader = document.querySelector('.review-container .clearfix:nth-child(2)').innerHTML;
      document.querySelector('.hero-outside.container.css-force-display .tag-list ').insertAdjacentHTML('beforeend', egReviewHeader);

      var a = document.querySelectorAll('.sov-hero-slider .slick-slide');

      if(document.querySelector('.MiniBasket_desktop .MiniBasket_options .MiniBasket_box .AtolText')){
        var egAlt = document.querySelector('.MiniBasket_desktop .MiniBasket_options .MiniBasket_box .AtolText').innerHTML;        
      }

      
      var egPriceNumber = document.querySelector('.MiniBasket_desktop .MiniBasket_options .MiniBasket_box .title-font').innerHTML;

      var egTotalPrice = document.querySelector('.MiniBasket_desktop .MiniBasket_options .MiniBasket_box .h4').textContent;

      var egTotalNumber = egTotalPrice.split(' ');

      for(i=0; i < a.length; i++){
        a[i].insertAdjacentHTML('beforeend', '<div class="view-more">View more images '+ viewMoreImage +'</div>');  
          a[i].insertAdjacentHTML('beforeend', egTravelContainer);  
          a[i].querySelector('.eg-option-container').setAttribute('eg-index', i);      
          
      if(document.querySelector('.MiniBasket_desktop .MiniBasket_options .MiniBasket_box .AtolText')){
        a[i].querySelector('.eg-option-container .eg-note').innerHTML = egAlt;
      }
       
          a[i].querySelector('.eg-option-container .eg-price-number').innerHTML = egPriceNumber;
          a[i].querySelector('.eg-option-container .eg-total-price').innerHTML = egTotalNumber[1];
      }

      document.querySelector('.sov-hero-slider').insertAdjacentHTML('afterend', egTravelContainer);
      if(document.querySelector('.MiniBasket_desktop .MiniBasket_options .MiniBasket_box .AtolText')){
        document.querySelector('.sov-hero-slider + .eg-option-container .eg-note').innerHTML = egAlt;
      }


      document.querySelector('.sov-hero-slider + .eg-option-container .eg-price-number').innerHTML = egPriceNumber;
      document.querySelector('.sov-hero-slider + .eg-option-container .eg-total-price').innerHTML = egTotalNumber[1];

        var options = document.querySelectorAll('.MiniBasket_options .MiniBasket_box.MiniBasket_box-hover');
        var html = '';
        for(var i = 0 ;i < options.length; i++) {
          var label = options[i].querySelector('.MiniBasket_buttonContent').textContent;
          html += '<div class="eg-label" data-index="'+i+'"><p class="eg-label-name">'+label+' <span>'+ tickMark +'</span></p><div class="eg-dropdown"></div></div>';
        }
        html += '<div class="eg-label"><p class="eg-label-name">COVID-19 Refund Guarantee <span>'+ tickMark +'</span></p><div class="eg-dropdown"></div></div>';
        document.querySelector('body .eg-details-container').innerHTML = html;
        document.querySelectorAll('.eg-option-container .eg-details-container').forEach(function(el) {
          el.innerHTML = html;
        })

        document.querySelectorAll('.eg-details-container .eg-label').forEach(function(item) {
          item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            var index = this.getAttribute('data-index');
            var targetEl = document.querySelectorAll('.MiniBasket_options .MiniBasket_box.MiniBasket_box-hover')[index];
            this.classList.toggle('eg-active');
            document.querySelectorAll('.eg-details-container .eg-label').forEach(function(coin) {
              if(coin != item) {
                coin.classList.remove('eg-active')
              }
            })

            targetEl.click();
            
            var self = this;
            waitForElement(".MiniBasket_desktop .MiniBasket_popupContent", function() {
              self.querySelector('.eg-dropdown').innerHTML = document.querySelector('.MiniBasket_desktop .MiniBasket_popupContent').innerHTML;
              document.querySelector('.MiniBasket_desktop .MiniBasket_popupContent .MiniBasket_close.btn.btn-default').click();
            }, 50, 10000)

          })
        });


        document.querySelectorAll('.eg-option-container .eg-option-inr .eg-details-container > .eg-label').forEach(function(item) {
          item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            var index = this.getAttribute('data-index');
            var targetEl = document.querySelectorAll('.MiniBasket_options .MiniBasket_box.MiniBasket_box-hover')[index];
            this.classList.toggle('eg-active');
            document.querySelectorAll('.eg-details-container .eg-label').forEach(function(coin) {
              if(coin != item) {
                coin.classList.remove('eg-active')
              }
            })

            targetEl.click();
            
            var self = this;
            waitForElement(".MiniBasket_desktop .MiniBasket_popupContent", function() {
              self.querySelector('.eg-dropdown').innerHTML = document.querySelector('.MiniBasket_desktop .MiniBasket_popupContent').innerHTML;
              document.querySelector('.MiniBasket_desktop .MiniBasket_popupContent .MiniBasket_close.btn.btn-default').click();
            }, 50, 10000)

          })
        });


        live('.eg-button-container .eg-button', 'mousedown', function () {
          document.querySelector('.MiniBasket .MiniBasket_continue').click();
        });

       window.dispatchEvent(new Event('resize'));

       
    }


    function init2() {


      
      var egTag = document.querySelector('.hero-outside-content .tag-list').innerHTML;

      var egReview = document.querySelector('.review-container .clearfix:nth-child(2)').innerHTML;


      document.querySelector('.body-content #heroCarousel').insertAdjacentElement('beforebegin', document.querySelector('.body-content .hero-outside.container.css-force-display'));

      var egReviewHeader = document.querySelector('.review-container .clearfix:nth-child(2)').innerHTML;

      document.querySelector('.hero-outside.container.css-force-display .tag-list ').insertAdjacentHTML('beforeend', egReviewHeader);

      document.querySelector('body').classList.add('eg-check-price-page');

      var  egTravelContainer1= ''+
      '<div class="eg-option-container">'+
      ' <div class="eg-option-inr">'+
      ' <div class="eg-review-container">'+ egReview +
      '  </div>'+
      '          <div class="eg-tag-details-container">'+ egTag +
      '  </div>'+
      '  <div class="eg-button-container">'+
      '      <button class="eg-button">View Date & Prices</button>'+
      '  </div>'+
      ' </div>'+
      '</div>';


      // document.querySelector('.sov-hero-slider-wrapper').insertAdjacentHTML('beforeend', egTravelContainer1);  

      var egSlider = document.querySelectorAll('.sov-hero-slider .slick-slide');

      for(i=0; i < egSlider.length; i++){
        egSlider[i].insertAdjacentHTML('beforeend', egTravelContainer1);  
        egSlider[i].insertAdjacentHTML('beforeend', '<div class="view-more">View more images '+ viewMoreImage +'</div>');  
      }
      
      live('.eg-button-container .eg-button', 'mousedown', function () {
        document.querySelector('.CheckAvailability_continue[data-availability="open"]').click();
      });

    }
    /* Initialise variation */
    waitForElement('.MiniBasket_options .MiniBasket_box span', init, 100, 25000);

    waitForElement('.CheckAvailability_continue[data-availability="open"]', init2, 500, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
