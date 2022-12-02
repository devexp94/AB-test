(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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
    };

    let eg_search = `<a id="Clicks_Menu_Search" class="nav-link primary-color Clicks_Main_Search eg_menu">
                            <img width="15px" src="https://www.ooredoo.qa/web/wp-content/themes/ooredoo-cms/assets/images/Search-mobile.svg" class="lazyloaded" data-ll-status="loaded"><noscript><img width="15px" src="https://www.ooredoo.qa/web/wp-content/themes/ooredoo-cms/assets/images/Search-mobile.svg" /></noscript> 
                            <span class="eg_span">Search</span>
                        </a>`



    /* Variation Init */
    function init() {
      /* start your code here */

      if (window.innerWidth < 577) {
        document.querySelector("#header-menu-items").insertAdjacentHTML("beforebegin", eg_search);

        live('#Clicks_Menu_Search', 'click', function () {
          document.querySelector("#Clicks_Main_Menu_Search").click();
        });
  
        let eg_oredo = `<a id="Clicks_Main_Menu_logo" class="nav-link primary-color" href="https://www.ooredoo.qa/">
        <img class="eg_img" src="https://i.ibb.co/85Kj450/Ooredoo-Icon-Red-on-Transparent-Bg-CMYK.png" alt="Ooredoo-Icon-Red-on-Transparent-Bg-CMYK" border="0">
          <span>My Ooredoo</span>
        </a>`
  
        document.querySelector("div.container.navbar.navbar-expand-lg.header-main-navbar > div.navbar-header > div > div.header-menu-icons").insertAdjacentHTML("afterbegin", eg_oredo);
      }

    }

    /* Initialize variation */
    waitForElement('div.container.navbar.navbar-expand-lg.header-main-navbar', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();






