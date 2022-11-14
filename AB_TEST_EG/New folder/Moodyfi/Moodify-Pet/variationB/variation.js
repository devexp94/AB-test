(function () {
  try {
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


    var HeroText =''+ 
    '  <h2 class="rte rte-setting featured-row__title">'+ 
    '      <p>Eliminate The Bad Smell From Your Cat Litter With Our Easy To Use Pendant</p>'+ 
    '  </h2>'+ 
    '  <ul class="hero-list">'+ 
    '      <li>'+ 
    '          <div class="eg-list-image">'+ 
    '              <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Tick-Gold.svg?v=1648737751" alt="tick-icon">'+ 
    '          </div>'+ 
    '          <div class="eg-list-content">'+ 
    '              <p class="list-heading">Easy to use</p>'+ 
    '              <p class="list-para">just hang above the litter & forget it</p>'+ 
    '          </div>'+ 
    '  '+ 
    '      </li>'+ 
    '      <li>'+ 
    '          <div class="eg-list-image">'+ 
    '              <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Tick-Gold.svg?v=1648737751" alt="tick-icon">'+ 
    '          </div>'+ 
    '          <div class="eg-list-content">'+ 
    '              <p class="list-heading">Cats love it</p>'+ 
    '              <p class="list-para">refreshing scent pack lasts for 30 days</p>'+ 
    '          </div>'+ 
    '  '+ 
    '      </li>'+ 
    '      <li>'+ 
    '          <div class="eg-list-image">'+ 
    '              <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Tick-Gold.svg?v=1648737751" alt="tick-icon">'+ 
    '          </div>'+ 
    '          <div class="eg-list-content">'+ 
    '              <p class="list-heading">IFRA approved</p>'+ 
    '              <p class="list-para">cruelty-free & safe to use</p>'+ 
    '          </div>'+ 
    '  '+ 
    '      </li>'+ 
    '  </ul>'+ 
    '  <a href="https://moodifypet.co.uk/discount/25offnow?redirect=%2Fproducts%2Fodor-neutralizing-case" class="btn btn--accent eg-learn-more eg-learn-more-desktop" aria-label="Learn More">Learn More <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/button-arrow.png?v=1648737751" alt="arrow"></a>';

    var heroFlotingText = ''+
    ' <div class="hero-mobile-section">'+
    '    <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Herompbile.png?v=1648737751" class="hero-mobile-image">'+
    '<a href="https://moodifypet.co.uk/discount/25offnow?redirect=%2Fproducts%2Fodor-neutralizing-case" class="btn btn--accent eg-learn-more eg-learn-more-mobile" aria-label="Learn More">Learn More <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/button-arrow.png?v=1648737751" alt="arrow"></a>'+
    '<div class="subscribe-container subscribe-container-mobile">Subscribe for <b>£7.43</b> Only 1st Month </br> Discount</div>'+
    ' </div>'+
    '<p class="floating-text"><img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/DoubleArrow.png?v=1648737751"> Loved by over <b> 10,000 </b> UK cat owners</p>'+
    '<div class="subscribe-container subscribe-container-desktop">Subscribe for <b>£7.43</b> Only 1st Month </br> Discount</div>';

    var homeImageGrid =''+ 
'  <li class="ic-list__item ic-list__item--mob-1">'+ 
'      <div class="ic-item-desktop">'+ 
'           <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/cat-left-desktop.png?v=1648737751" class="cat-image-desktop">'+
'          <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/doctors-examining-desktop.png?v=1648737751" srcset="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/doctors-examining-desktop.png?v=1648737751" alt="">'+ 
'      </div>'+ 
'      <div class="ic-item-mobile">'+ 
'           <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/cat-left-mobile.png?v=1648737751" class="cat-image-mobile">'+
'          <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/doctors-examining-mobile.png?v=1648737751" srcset="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/doctors-examining-mobile.png?v=1648737751" alt="">'+ 
'      </div>'+ 
'      <div class="ic-item-text">'+ 
'      <h1 class="ic-list__text">Science based</h1>'+ 
'      <div class="grid-content">'+ 
'          <p>Revolutionary 15+ year </br> WhiteScent research</p>'+ 
'      </div>'+ 
'      </div>'+ 
'  </li>'+ 
'  <li class="ic-list__item ic-list__item--mob-1">'+ 
'      <div class="ic-item-desktop">'+ 
'           <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/car-center-desktop.png?v=1648737751" class="cat-image-desktop">'+
'          <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-center-desktop.png?v=1648737751" srcset="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-center-desktop.png?v=1648737751" alt="">'+ 
'      </div>'+ 
'      <div class="ic-item-mobile">'+ 
'           <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/car-center-mobile.png?v=1648737751" class="cat-image-mobile">'+
'          <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-center-mobile.png?v=1648737751" srcset="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-center-mobile.png?v=1648737751" alt="">'+ 
'      </div>'+ 
'      <div class="ic-item-text">'+ 
'      <h1 class="ic-list__text">Effective</h1>'+ 
'      <div class="grid-content">'+ 
'          <p>Cruelty-free & safe to use, save 25% with a cat-lover subscription</p>'+ 
'      </div>'+ 
'      </div>'+ 
'  </li>'+ 
'  <li class="ic-list__item ic-list__item--mob-1">'+ 
'      <div class="ic-item-desktop">'+ 
'           <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/cat-right-desktop.png?v=1648737751" class="cat-image-desktop">'+
'          <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-right.png?v=1648737751" srcset="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-right.png?v=1648737751" alt="">'+ 
'      </div>'+ 
'      <div class="ic-item-mobile">'+ 
'           <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/cat-right-mobile.png?v=1648737751" class="cat-image-mobile">'+
'          <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-right-mobile.png?v=1648737751" srcset="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Image-right-mobile.png?v=1648737751" alt="">'+ 
'      </div>'+ 
'      <div class="ic-item-text">'+ 
'      <h1 class="ic-list__text">Hassle free</h1>'+ 
'      <div class="grid-content">'+ 
'          <p>Hang & forget, lasts </br>for 30 days</p>'+ 
'      </div>'+ 
'      </div>'+ 
'  </li>';

var videoBottomBanner = ''+
'<div class="video-bottom-banner">'+
'    <p class="video-bottom-banner-heading">Just hang it & the smell is gone!</p>'+
'</div>';

var aboutSectionText = ''+ 
'  <h2 class="section-title">About Moodify Pet</h2>'+ 
'  <p class="section-para">Moodify is cat litter odour eliminator, it\'s a pendant that you hang above the litter tray, it\'s made of clay and are impregnated with a unique malodour control solution, based on patented technology, which achieves a cancelling effect that is faster,'+ 
'      smarter, more efficient, less intense and much more pleasant than other solutions</p>'+ 
'   <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/about-cat-mobile.png?v=1648737751" class="about-cat-mobile">'+
'  <a href="https://moodifypet.co.uk/discount/25offnow?redirect=%2Fproducts%2Fodor-neutralizing-case" class="btn btn--accent" aria-label="SHOP MOODIFY">SHOP MOODIFY <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/button-arrow.png?v=1648737751" alt="arrow"></a>';


var cartIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9758 8.28521C28.025 7.98899 27.9404 7.68573 27.7464 7.4565C27.5512 7.22838 27.2658 7.09595 26.9655 7.09595H2.38923C2.08895 7.09595 1.80353 7.22839 1.6084 7.4565C1.41461 7.68597 1.32974 7.98895 1.37893 8.28521C1.37893 8.28521 2.77439 16.8104 3.46119 21.0138C3.75877 22.8298 5.32751 24.1623 7.16677 24.1623H22.1884C24.0273 24.1623 25.5963 22.8298 25.8939 21.0138L27.9762 8.28521H27.9758ZM25.7598 9.14388L23.8716 20.6837C23.7365 21.5084 23.0238 22.1146 22.1881 22.1146H7.16648C6.33078 22.1146 5.61831 21.5084 5.4829 20.6837L3.59472 9.14388H25.7598Z" fill="black"/>'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7474 7.59365L19.6513 0.766893C19.3605 0.282279 18.731 0.125248 18.2464 0.416069C17.7618 0.70689 17.6047 1.33639 17.8956 1.82101L21.9917 8.64777C22.2825 9.13238 22.912 9.28941 23.3966 8.99859C23.8812 8.70777 24.0382 8.07827 23.7474 7.59365Z" fill="black"/>'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.36276 8.64704L11.4589 1.82028C11.7497 1.33566 11.5926 0.706147 11.108 0.415333C10.6234 0.124519 9.9939 0.281544 9.70309 0.766158L5.60699 7.59292C5.31617 8.07753 5.4732 8.70705 5.95781 8.99786C6.44242 9.28868 7.07194 9.13165 7.36276 8.64704Z" fill="black"/>'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6531 12.8991V18.3604C13.6531 18.9256 14.1117 19.3845 14.6772 19.3845C15.2423 19.3845 15.7013 18.9259 15.7013 18.3604V12.8991C15.7013 12.334 15.2426 11.875 14.6772 11.875C14.112 11.875 13.6531 12.3337 13.6531 12.8991Z" fill="black"/>'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.19165 12.8991V18.3604C8.19165 18.9256 8.65032 19.3845 9.21576 19.3845C9.78092 19.3845 10.2399 18.9259 10.2399 18.3604V12.8991C10.2399 12.334 9.78121 11.875 9.21576 11.875C8.6506 11.875 8.19165 12.3337 8.19165 12.8991Z" fill="black"/>'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1145 12.8991V18.3604C19.1145 18.9256 19.5732 19.3845 20.1386 19.3845C20.7038 19.3845 21.1627 18.9259 21.1627 18.3604V12.8991C21.1627 12.334 20.7041 11.875 20.1386 11.875C19.5735 11.875 19.1145 12.3337 19.1145 12.8991Z" fill="black"/>'+ 
'  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3307 7.09595H1.02411C0.45895 7.09595 0 7.55461 0 8.12006C0 8.68522 0.458666 9.14417 1.02411 9.14417H28.3307C28.8959 9.14417 29.3548 8.6855 29.3548 8.12006C29.3548 7.5549 28.8962 7.09595 28.3307 7.09595Z" fill="black"/>'+ 
'  </svg>';


var egVideoPopup =''+ 
'  <div class="eg-video-popup">'+ 
'      <div class="eg-video-popup-overlay"></div>'+ 
'      <div class="eg-video-popup-content">'+ 
'          <div class="eg-cross">&times;</div>'+ 
'          <div class="eg-video-container" id="eg-video-container">'+ 
'              <video controls="" id="video" preload="metadata" poster="//cdn.shopify.com/s/files/1/0554/3670/5969/files/image_10_900X500.png?v=1637243985">'+ 
'                <source src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/Moodify_Pet_Product.mp4?v=1635743505" type="video/mp4">'+ 
'              </video>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {

      document.querySelector('body').insertAdjacentHTML('beforeend', egVideoPopup);

      document.querySelector('div[data-section-type="video-section"] .video-wrapper').insertAdjacentHTML('beforeend', '<img class="eg-play-button" src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/play-icon.svg?v=1648822308">')

      document.querySelector('.site-header__cart svg').outerHTML = cartIcon;

      document.querySelector('.site-header__mobile-nav > div.site-header__icons:nth-child(2)').insertAdjacentElement('afterend', document.querySelector('.site-icons-mobile .site-header__icon.site-header__menu'));

      document.querySelector('.home-banner-main .feature-row .feature-row__item').innerHTML = HeroText;

      document.querySelector('.home-banner-main .feature-row .feature-row__item').insertAdjacentHTML('afterend', heroFlotingText);

      document.querySelector('.home-image-text-grid-wrapper .ic-list').innerHTML = homeImageGrid;

      document.querySelector('.text-with-video-wrapper.home-video-section-wrapper').insertAdjacentHTML('afterend', videoBottomBanner);

      document.querySelector('.video-bottom-banner .video-bottom-banner-heading').insertAdjacentElement('afterend', document.querySelector('.home-video-section-wrapper .feature-row > a[aria-label="SHOP MOODIFY"]'));

      document.querySelector('.video-bottom-banner > a[aria-label="SHOP MOODIFY"]').innerHTML = 'SHOP MOODIFY <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/button-arrow.png?v=1648737751" alt="arrow">'

      document.querySelector('.custom-halves-wrapper .halves__part > a').innerHTML = 'BUY NOW <img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/button-arrow.png?v=1648737751" alt="arrow">'

      document.querySelector('.custom-halves-wrapper .halves .cat-opposit').innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/monthely-sub-icon.png?v=1648737751">';

      document.querySelector('.home-table-content-wrapper h1').innerHTML = 'Moodify Pet <span>vs</span> Competitors'
      document.querySelector('.table-wrapper >div:last-child .simple-block').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none"> <path d="M1.41176 1L15 13M14.5882 1L1 13" stroke="#D6CE69" stroke-width="2"/></svg>';

      document.querySelector('.home-about-section .halves__image .ratio-container').innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/about-section-image.png?v=1648737751" class="about-desktop-image"><img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/About-main-cat-mobile.png?v=1648737751" class="about-mobile-image">';

      document.querySelector('html body .text-with-video-wrapper').insertAdjacentHTML('beforebegin', '<div class="eg-seprator"><img src="https://cdn.shopify.com/s/files/1/0554/3670/5969/files/separator.png?v=1648737751"></div>')

      document.querySelector('html body .text-with-video-wrapper > .featured-row__subtitle').innerHTML = 'See How It Works';
      document.querySelector('html body .text-with-video-wrapper .feature-row .featured-row__subtitle').innerHTML = 'See How It Works';

      document.querySelector('.home-about-section .halves__content .halves__part').innerHTML = aboutSectionText;
    
      live('.eg-video-popup .eg-cross, .eg-video-popup-overlay', 'click', function () {
        document.querySelector('body').classList.remove('eg-popup-show')
      });

      live('div[data-section-type="video-section"] .video-wrapper', 'click', function () {
        document.querySelector('body').classList.add('eg-popup-show')
      });
      
      live('.btn.btn--accent, .btn.btn--secondary-accent', 'click', function () {
        TrackGAEvent('Clicks_on_Shop_Button', 'GA_Clicks', 'Click_on_Shop_Button');
      });
      

    }


function TrackGAEvent($eventCategory, $eventAction, $eventLabel) {
  if ('ga' in window) {
    ga.getAll()[0].send('event', {
      eventCategory: $eventCategory,
      eventAction: $eventAction,
      eventLabel: $eventLabel,
    });
  }
}


    waitForElement(".home-about-section .halves__image img", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
