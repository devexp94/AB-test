(function () {
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

    function elementInViewport2(el) {
      if(el) {

        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
      }
      return false;
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
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
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function init() {

      var checkHTML = '<a class="nav-tab gtm-subnav-click" title="check address" href="#" aria-current="page"><div class="d-flex w-100 h-100 justify-content-center align-items-center"><img src="/images/sub-nav/Plans.svg" alt="check address"><div class="d-flex align-items-center ml-2">Check Address</div></div></a>';
      var extraHTML = '<a class="nav-tab gtm-subnav-click" title="extra" href="#" aria-current="page"><div class="d-flex w-100 h-100 justify-content-center align-items-center"><img src="/images/sub-nav/Plans.svg" alt="check address"><div class="d-flex align-items-center ml-2">Extras</div></div></a>';

      document.querySelector('#sub-navigation-floating [title="Plans"]').insertAdjacentHTML('beforebegin', checkHTML);

      document.querySelector('#sub-navigation-floating [title="Features"]').insertAdjacentHTML('beforebegin', extraHTML);

      document.querySelector('#sub-navigation-floating [title="Features"] div.ml-2').innerText = 'Benefits';

      document.querySelector('#sub-navigation-floating [title="Plans"] div.ml-2').innerText = 'Nbn Plans';

      document.querySelector('#sub-navigation-floating [title="Features"]').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(window.location.pathname != '/broadband/nbn') {
          document.querySelector('#sub-navigation-floating [title="Plans"]').click();
        }
        waitForElement('body .broadband-plans-features', function() {
          document.querySelector('body .broadband-plans-features').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, 1000, 10000);
      })

      document.querySelector('#sub-navigation-floating [title="check address"]').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(window.location.pathname != '/broadband/nbn') {
          document.querySelector('#sub-navigation-floating [title="Plans"]').click();
        }
        waitForElement('.broadband-plans.tab-container', function() {
          document.querySelector('.broadband-plans.tab-container').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, 50, 20000);
      })

      document.querySelector('#sub-navigation-floating [title="extra"]').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(window.location.pathname != '/broadband/nbn') {
          document.querySelector('#sub-navigation-floating [title="Plans"]').click();
        }
        waitForElement('.broadband-plans .nbn-fibre-extras', function() {
          document.querySelector('.broadband-plans .nbn-fibre-extras').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, 50, 20000);
      })

      live('.sub-navigation-floating .inner-container .tab-container .nav-tab', 'click', function() {
        document.querySelector('.sub-navigation-floating .inner-container .tab-container .nav-tab.active') && document.querySelector('.sub-navigation-floating .inner-container .tab-container .nav-tab.active').classList.remove('active');
        console.log('jhkhk')//
        this.classList.add('active');
      })

      window.addEventListener('scroll', function() {
        setTimeout(function() {
          if(elementInViewport2(document.querySelector('.page-container .nbn-plans .position-relative + div'))) {
            document.querySelector('.sub-navigation-floating  .nav-tab.active') && document.querySelector('.sub-navigation-floating  .nav-tab.active').classList.remove('active');
            document.querySelector('.sub-navigation-floating a[title="check address"]').classList.add('active');
          } else if(elementInViewport2(document.querySelector('.broadband-plans .nbn-fibre-extras'))) {
            document.querySelector('.sub-navigation-floating  .nav-tab.active') && document.querySelector('.sub-navigation-floating  .nav-tab.active').classList.remove('active');
            document.querySelector('.sub-navigation-floating a[title="extra"]').classList.add('active');
          } else if(elementInViewport2(document.querySelector('body .broadband-plans-features'))) {
            document.querySelector('.sub-navigation-floating  .nav-tab.active') && document.querySelector('.sub-navigation-floating  .nav-tab.active').classList.remove('active');
            document.querySelector('.sub-navigation-floating a[title="Features"]').classList.add('active');
          } else if(elementInViewport2(document.querySelector('body .hero-banner-nbn'))) {
            document.querySelector('.sub-navigation-floating  .nav-tab.active') && document.querySelector('.sub-navigation-floating  .nav-tab.active').classList.remove('active');
            document.querySelector('.sub-navigation-floating a[title="Plans"]').classList.add('eg-active');
          } 
        }, 200)
      });



    }

    function init2() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
              document.querySelector('body').classList.add('eg-scroll');
            } else {
              document.querySelector('body').classList.remove('eg-scroll');
            }
          });
    }

    waitForElement(
      '#sub-navigation-floating [title="Features"] div.ml-2',
      init,
      50,
      30000
    );
    waitForElement(
        'body',
        init2,
        50,
        30000
      );
    // viewChange();
})();