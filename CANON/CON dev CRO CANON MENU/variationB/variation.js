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

    var egMenuOption =''+ 
    '  <li class="nav__menu-item item-layer-2 has-sub-level cv-144-menu"><a href="https://www.canon.co.uk/business/imaging-solutions/" class="nav__submenu-link nav__menu-link canon-color--white canon-paragraph--medium" tabindex="0">Business Imaging solutions<span class="canon-hidden headeren">Business Imaging solutions</span>'+ 
    '          <span class="nav__icon-chev"> <i class="canon-icon icon-icon-right-t" aria-hidden="true">'+ 
    '                  '+ 
    '              </i></span>'+ 
    '      </a>'+ 
    '      <div class="nav__submenu-content nav__menu-level-js canon-bg--black">'+ 
    '          <div class="nav__mobile-layer">'+ 
    '              <button type="reset" class="nav__menu-close-button" tabindex="0">'+ 
    '                  <span class="nav__icon-menu-close" aria-hidden="true">'+ 
    '                      <i class="canon-icon icon-icon-close-t" aria-hidden="true"> '+ 
    '                      </i>'+ 
    '                  </span> <span class="visually-hidden"> Close Menu </span>'+ 
    '              </button>'+ 
    '              <div class="container container--static">'+ 
    '                  <button type="button" class="nav__menu-return-button" tabindex="0">'+ 
    '                      <span class="nav__icon-menu-close" aria-hidden="true">'+ 
    '                          <i class="canon-icon icon-icon-left-t" aria-hidden="true"> '+ 
    '                          </i>'+ 
    '                      </span> <span class="visually-hidden"> Return </span>'+ 
    '                  </button>'+ 
    '                  <div class="nav__menu-category">'+ 
    '                      <p class="nav__menu-category-label canon-paragraph--title-small canon-color--white">You are viewing:'+ 
    '                      </p>'+ 
    '                      <div class="nav__menu-category-title-wrapper">'+ 
    '                          <p class="nav__menu-category-title canon-paragraph--big canon-color--white">Imaging Solutions'+ 
    '                          </p>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <ul class="nav__submenu-content-list" aria-label="Group Tertiary Navigation">'+ 
    '  '+ 
    '                      <li class="nav__submenu-content-item">'+ 
    '  '+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/photo-video-and-software-solutions/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/corporate-photography-and-video/" target="_self" class="nav__submenu-img-link nav__submenu-img-link--zoom-in canon-bg--grey-darkest"'+ 
    '                              tabindex="0">'+ 
    '                              <picture class="canon-amplience canon-amplience__lazy">'+ 
    '                                  <source type="image/webp" media="(min-width: 1472px)" class="canon-amplience__image lazy" srcset="https://cfactory-img.s3.amazonaws.com/CAN/144/pro-changing-fashion-photography-styleshoots.jpg" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 1200px)" class="canon-amplience__image lazy" srcset="https://cfactory-img.s3.amazonaws.com/CAN/144/pro-changing-fashion-photography-styleshoots.jpg" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 769px)" class="canon-amplience__image lazy" srcset="https://cfactory-img.s3.amazonaws.com/CAN/144/pro-changing-fashion-photography-styleshoots.jpg" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 0)" class="canon-amplience__image lazy" srcset="https://cfactory-img.s3.amazonaws.com/CAN/144/pro-changing-fashion-photography-styleshoots.jpg" data-ll-status="entered">'+ 
    '                                  <img alt="Corporate Photo & Video" class="canon-amplience__image nav__submenu-img placeholder--one-by-one lazy loaded" srcset="https://cfactory-img.s3.amazonaws.com/CAN/144/pro-changing-fashion-photography-styleshoots.jpg" src="https://cfactory-img.s3.amazonaws.com/CAN/144/pro-changing-fashion-photography-styleshoots.jpg"'+ 
    '                                      data-ll-status="loaded">'+ 
    '                              </picture>'+ 
    '                              <span class="canon-hidden headeren">Corporate Photo & Video Solutions</span>'+ 
    '                          </a>'+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/photo-video-and-software-solutions/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/corporate-photography-and-video/" target="_self" class="nav__submenu-title-link canon-color--white canon-paragraph--medium"'+ 
    '                              tabindex="0">Commerce Photo Solutions<span class="canon-hidden headeren">Commerce Photo'+ 
    '                                  Solutions</span>'+ 
    '                              <span class="nav__icon-chev canon-color--white">'+ 
    '                                  <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                      <g fill="none" fill-rule="evenodd">'+ 
    '                                          <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                          <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                          <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465"></path>'+ 
    '                                      </g>'+ 
    '                                  </svg>'+ 
    '                              </span>'+ 
    '                          </a>'+ 
    '                          <p class="nav__submenu-paragraph-description canon-color--grey canon-paragraph--small">'+ 
    '                              Discover how to produce high volume, high creative images of merchandise for your web site or catalogues, by creating cost-effective and high-quality content to bring your product to life and drive your brands forward. Find out more here.</p>'+ 
    '  '+ 
    '  '+ 
    '                      </li>'+ 
    '                      <li class="nav__submenu-content-item">'+ 
    '  '+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/3d-photogrammetry/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/3d-photogrammetry/" target="_self" class="nav__submenu-img-link nav__submenu-img-link--zoom-in canon-bg--grey-darkest"'+ 
    '                              tabindex="0">'+ 
    '                              <picture class="canon-amplience canon-amplience__lazy">'+ 
    '                                  <source type="image/webp" media="(min-width: 1472px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/3d-photogrammetry-sample-and-hold-lifestyle_01_65d5460e10894afb88462a4a4f42a784?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 1200px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/3d-photogrammetry-sample-and-hold-lifestyle_01_65d5460e10894afb88462a4a4f42a784?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 769px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/3d-photogrammetry-sample-and-hold-lifestyle_01_65d5460e10894afb88462a4a4f42a784?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 0)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/3d-photogrammetry-sample-and-hold-lifestyle_01_65d5460e10894afb88462a4a4f42a784?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <img alt="3D Photogrammetry" class="canon-amplience__image nav__submenu-img placeholder--one-by-one lazy loaded" srcset="//i1.adis.ws/i/canon/3d-photogrammetry-sample-and-hold-lifestyle_01_65d5460e10894afb88462a4a4f42a784?$1by1-menu-grid$" src="//i1.adis.ws/i/canon/3d-photogrammetry-sample-and-hold-lifestyle_01_65d5460e10894afb88462a4a4f42a784?$1by1-menu-grid$"'+ 
    '                                      data-ll-status="loaded">'+ 
    '                              </picture>'+ 
    '                              <span class="canon-hidden headeren">D Photogrammetry</span>'+ 
    '                          </a>'+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/3d-photogrammetry/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/3d-photogrammetry/" target="_self" class="nav__submenu-title-link canon-color--white canon-paragraph--medium"'+ 
    '                              tabindex="0">'+ 
    '                              3D Photogrammetry'+ 
    '  '+ 
    '  '+ 
    '                              <span class="canon-hidden headeren">D Photogrammetry</span>'+ 
    '                              <span class="nav__icon-chev canon-color--white">'+ 
    '                                  <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                      <g fill="none" fill-rule="evenodd">'+ 
    '                                          <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                          <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                          <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465"></path>'+ 
    '                                      </g>'+ 
    '                                  </svg>'+ 
    '                              </span>'+ 
    '                          </a>'+ 
    '                          <p class="nav__submenu-paragraph-description canon-color--grey canon-paragraph--small">'+ 
    '                              Discover our solution for 3D Photogrammetry. From manufacturing to healthcare, Canon provides hardware, software & support. Find out more here.</p>'+ 
    '  '+ 
    '  '+ 
    '                      </li>'+ 
    '  '+ 
    '                      <li class="nav__submenu-content-item">'+ 
    '  '+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/inspection/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/inspection/" target="_self" class="nav__submenu-img-link nav__submenu-img-link--zoom-in canon-bg--grey-darkest" tabindex="0">'+ 
    '                              <picture class="canon-amplience canon-amplience__lazy">'+ 
    '                                  <source type="image/webp" media="(min-width: 1472px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/adobestock_215842794_a0c075e7233b4c2f8edacf214b99b142?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 1200px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/adobestock_215842794_a0c075e7233b4c2f8edacf214b99b142?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 769px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/adobestock_215842794_a0c075e7233b4c2f8edacf214b99b142?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 0)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/adobestock_215842794_a0c075e7233b4c2f8edacf214b99b142?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <img alt="Inspection and detection" class="canon-amplience__image nav__submenu-img placeholder--one-by-one lazy loaded" srcset="//i1.adis.ws/i/canon/adobestock_215842794_a0c075e7233b4c2f8edacf214b99b142?$1by1-menu-grid$" src="//i1.adis.ws/i/canon/adobestock_215842794_a0c075e7233b4c2f8edacf214b99b142?$1by1-menu-grid$"'+ 
    '                                      data-ll-status="loaded">'+ 
    '                              </picture>'+ 
    '                              <span class="canon-hidden headeren">Inspection Solutions</span>'+ 
    '                          </a>'+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/inspection/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/inspection/" target="_self" class="nav__submenu-title-link canon-color--white canon-paragraph--medium" tabindex="0">'+ 
    '                              Inspection Solutions'+ 
    '  '+ 
    '  '+ 
    '                              <span class="canon-hidden headeren">Inspection Solutions</span>'+ 
    '                              <span class="nav__icon-chev canon-color--white">'+ 
    '                                  <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                      <g fill="none" fill-rule="evenodd">'+ 
    '                                          <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                          <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                          <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465"></path>'+ 
    '                                      </g>'+ 
    '                                  </svg>'+ 
    '                              </span>'+ 
    '                          </a>'+ 
    '                          <p class="nav__submenu-paragraph-description canon-color--grey canon-paragraph--small">'+ 
    '                              Discover our comprehensive solution for Inspection. For manufacturing, infrastructure and medical industries, Canon provides hardware, software & support.</p>'+ 
    '  '+ 
    '  '+ 
    '                      </li>'+ 
    '                      <li class="nav__submenu-content-item">'+ 
    '  '+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/sdk/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/sdk/" target="_self" class="nav__submenu-img-link nav__submenu-img-link--zoom-in canon-bg--grey-darkest" tabindex="0">'+ 
    '                              <picture class="canon-amplience canon-amplience__lazy">'+ 
    '                                  <source type="image/webp" media="(min-width: 1472px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/pro-eos-digital-sdk-explained-2_6168da0ef00e45818b756b18cda28cd7?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 1200px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/pro-eos-digital-sdk-explained-2_6168da0ef00e45818b756b18cda28cd7?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 769px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/pro-eos-digital-sdk-explained-2_6168da0ef00e45818b756b18cda28cd7?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 0)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/pro-eos-digital-sdk-explained-2_6168da0ef00e45818b756b18cda28cd7?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <img alt="Software Development Kit (SDK)" class="canon-amplience__image nav__submenu-img placeholder--one-by-one lazy loaded" srcset="//i1.adis.ws/i/canon/pro-eos-digital-sdk-explained-2_6168da0ef00e45818b756b18cda28cd7?$1by1-menu-grid$" src="//i1.adis.ws/i/canon/pro-eos-digital-sdk-explained-2_6168da0ef00e45818b756b18cda28cd7?$1by1-menu-grid$"'+ 
    '                                      data-ll-status="loaded">'+ 
    '                              </picture>'+ 
    '                              <span class="canon-hidden headeren">Software Development Kit (SDK)</span>'+ 
    '                          </a>'+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/sdk/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/sdk/" target="_self" class="nav__submenu-title-link canon-color--white canon-paragraph--medium" tabindex="0">'+ 
    '                              Software Development Kit (SDK)'+ 
    '  '+ 
    '  '+ 
    '                              <span class="canon-hidden headeren">Software Development Kit (SDK)</span>'+ 
    '                              <span class="nav__icon-chev canon-color--white">'+ 
    '                                  <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                      <g fill="none" fill-rule="evenodd">'+ 
    '                                          <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                          <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                          <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465"></path>'+ 
    '                                      </g>'+ 
    '                                  </svg>'+ 
    '                              </span>'+ 
    '                          </a>'+ 
    '                          <p class="nav__submenu-paragraph-description canon-color--grey canon-paragraph--small">'+ 
    '                              Discover our Software Development Kit (SDK). Find out how it works and the benefits. Join the Canon Developer Programme to refine your imaging workflows.</p>'+ 
    '  '+ 
    '  '+ 
    '                      </li>'+ 
    '                      <li class="nav__submenu-content-item">'+ 
    '  '+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/photo-booth/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/photo-booth/" target="_self" class="nav__submenu-img-link nav__submenu-img-link--zoom-in canon-bg--grey-darkest" tabindex="0">'+ 
    '                              <picture class="canon-amplience canon-amplience__lazy">'+ 
    '                                  <source type="image/webp" media="(min-width: 1472px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/gettyimages-1187651037_d292358f91eb4e31ad08905928d5970b?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 1200px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/gettyimages-1187651037_d292358f91eb4e31ad08905928d5970b?$1by1-menu-full-grid$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 769px)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/gettyimages-1187651037_d292358f91eb4e31ad08905928d5970b?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <source type="image/webp" media="(min-width: 0)" class="canon-amplience__image lazy" srcset="//i1.adis.ws/i/canon/gettyimages-1187651037_d292358f91eb4e31ad08905928d5970b?$1by1-menu-full-grid-1px$" data-ll-status="entered">'+ 
    '                                  <img alt="Photo Booth" class="canon-amplience__image nav__submenu-img placeholder--one-by-one lazy loaded" srcset="//i1.adis.ws/i/canon/gettyimages-1187651037_d292358f91eb4e31ad08905928d5970b?$1by1-menu-grid$" src="//i1.adis.ws/i/canon/gettyimages-1187651037_d292358f91eb4e31ad08905928d5970b?$1by1-menu-grid$"'+ 
    '                                      data-ll-status="loaded">'+ 
    '                              </picture>'+ 
    '                              <span class="canon-hidden headeren">Photo Booth Solutions</span>'+ 
    '                          </a>'+ 
    '                          <a href="https://www.canon.co.uk/business/imaging-solutions/photo-booth/" data-iframe="https://www.canon.co.uk/business/imaging-solutions/photo-booth/" target="_self" class="nav__submenu-title-link canon-color--white canon-paragraph--medium" tabindex="0">'+ 
    '                              Photo Booth Solutions'+ 
    '  '+ 
    '  '+ 
    '                              <span class="canon-hidden headeren">Photo Booth Solutions</span>'+ 
    '                              <span class="nav__icon-chev canon-color--white">'+ 
    '                                  <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                      <g fill="none" fill-rule="evenodd">'+ 
    '                                          <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                          <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                          <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465"></path>'+ 
    '                                      </g>'+ 
    '                                  </svg>'+ 
    '                              </span>'+ 
    '                          </a>'+ 
    '                          <p class="nav__submenu-paragraph-description canon-color--grey canon-paragraph--small">'+ 
    '                              Find out about our comprehensive solution for Photo Booth. Canon provides hardware, software and supports that meet your photo booth needs.</p>'+ 
    '  '+ 
    '  '+ 
    '                      </li>'+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '                      <li class="nav__submenu-content-item nav__submenu-content-item--inner-links nav__submenu-content-item--border-left">'+ 
    '                          <ul class="nav__submenu-inner-list">'+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '                              <li class="nav__submenu-inner-item">'+ 
    '  '+ 
    '                                  <a href="https://www.canon.co.uk/business/imaging-solutions/" class="nav__submenu-inner-link canon-link canon-color--white canon-link--fwd canon-link--small" target="_self" tabindex="0">Business Imaging solutions<span'+ 
    '                                          class="canon-hidden headeren">Business Imaging solutions</span>'+ 
    '                                      <span class="nav__link-icon"><i class="canon-icon icon-icon-right-c-t"'+ 
    '                                              aria-hidden="true">  </i></span>'+ 
    '                                      <span class="nav__icon-chev canon-color--white">'+ 
    '                                          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                              <g fill="none" fill-rule="evenodd">'+ 
    '                                                  <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                                  <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                                  <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465">'+ 
    '                                                  </path>'+ 
    '                                              </g>'+ 
    '                                          </svg>'+ 
    '                                      </span>'+ 
    '                                  </a>'+ 
    '  '+ 
    '  '+ 
    '  '+ 
    '                              </li>'+ 
    '  '+ 
    '                              <li class="nav__submenu-inner-item">'+ 
    '  '+ 
    '  '+ 
    '                                  <a href="https://www.canon.co.uk#gate-a7d45767-d718-4247-b2fb-47c85baa23cc" class="nav__shop-now-cta button--blue button--small button nav__cta" target="_self" tabindex="0">'+ 
    '                                      Talk to the Team'+ 
    '                                      <span class="canon-hidden headeren">Talk to the Team</span>'+ 
    '                                      <span class="nav__icon-chev canon-color--white">'+ 
    '                                          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                              <g fill="none" fill-rule="evenodd">'+ 
    '                                                  <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                                  <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                                  <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465">'+ 
    '                                                  </path>'+ 
    '                                              </g>'+ 
    '                                          </svg>'+ 
    '                                      </span>'+ 
    '                                  </a>'+ 
    '  '+ 
    '  '+ 
    '                              </li>'+ 
    '                              <li class="nav__submenu-inner-item">'+ 
    '  '+ 
    '  '+ 
    '                                  <a href="https://www.canon.co.uk/where-to-buy/" class="nav__shop-now-cta button--blue button--small button nav__cta" target="_self" tabindex="0">'+ 
    '                                      Where to Buy'+ 
    '                                      <span class="canon-hidden headeren">Where to Buy</span>'+ 
    '                                      <span class="nav__icon-chev canon-color--white">'+ 
    '                                          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">'+ 
    '                                              <g fill="none" fill-rule="evenodd">'+ 
    '                                                  <circle cx="7.5" cy="7.5" r="7.5"></circle>'+ 
    '                                                  <circle stroke="currentColor" cx="7.5" cy="7.5" r="7"></circle>'+ 
    '                                                  <path stroke="currentColor" d="M6.134 3.764L9.6 7.231l-3.466 3.465">'+ 
    '                                                  </path>'+ 
    '                                              </g>'+ 
    '                                          </svg>'+ 
    '                                      </span>'+ 
    '                                  </a>'+ 
    '  '+ 
    '  '+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </li>';

    function init() {

      document.querySelector('#main-header .nav__menu-list > .nav__menu-item.has-sub-level:nth-child(2) .nav__menu-item.item-layer-2').insertAdjacentHTML('afterend', egMenuOption);

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/"]', 'click', function () {
        console.log('CAN 144 Solutions clicks')
      });

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/"]', 'click', function () {
        console.log('CAN 144 Imaging solutions clicks')
      });

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/photo-video-and-software-solutions/"]', 'click', function () {
        console.log('CAN 144 Commerce clicks')
      });

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/3d-photogrammetry/"]', 'click', function () {
        console.log('CAN 144 3D photogrammetry clicks')
      });

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/inspection/"]', 'click', function () {
        console.log('CAN 144 Inspection Solutions clicks')
      });

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/sdk/"]', 'click', function () {
        console.log('CAN 144 SDK clicks')
      });

      live('.cv-144-menu a[href="https://www.canon.co.uk/business/imaging-solutions/photo-booth/"]', 'click', function () {
        console.log('CAN 144 Photo Booth clicks')
      });

      live('.cv-144-menu .nav__submenu-content-item.nav__submenu-content-item--inner-links li.nav__submenu-inner-item:nth-child(2) .nav__shop-now-cta', 'click', function () {
        console.log('CAN 144 Talk to Canon clicks')
      });
      

    }

    waitForElement("#main-header .nav__menu-list > .nav__menu-item.has-sub-level:nth-child(2) .nav__menu-item.item-layer-2", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
