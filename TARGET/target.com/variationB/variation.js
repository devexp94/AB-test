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
                nodes = (node.parentNode || node.document).querySelectorAll(
                  selector
                ),
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
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function elementInViewport2(el) {
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


    var egMobileNav = '' +
      ' <div class="eg-nav-container-mobile">' +
      '  <div class="eg-dropdown">' +
      '      <span class="eg-default-option">HOME</span>' +
      '<img src="/medias/sys_master/root/haa/h67/15684559929374/chevron%20closed%20state.png">' +
      '</svg>' +
      '      </div>' +
      '      <div class="eg-dropdown-options" style="display: block;">' +
      '          <span class="eg-dropdown-item" data-option="HOME"><span class="eg-dropdown-item-text">HOME</span></span>' +
      '          <span class="eg-dropdown-item" data-option="WOMENS"><span class="eg-dropdown-item-text">WOMENS</span></span>' +
      '          <span class="eg-dropdown-item" data-option="MENS"><span class="eg-dropdown-item-text">MENS</span></span>' +
      '          <span class="eg-dropdown-item" data-option="KIDS"><span class="eg-dropdown-item-text">KIDS</span></span>' +
      '          <span class="eg-dropdown-item" data-option="BABY"><span class="eg-dropdown-item-text">BABY</span></span>' +
      '      </div>' +
      ' </div>';


    
    function init() {      
      
       document.querySelector('.navigation-dropdown > .navigation-dropdown').insertAdjacentHTML('afterend', egMobileNav);

      var egButtonMobile = document.querySelectorAll('.eg-dropdown-item');

      for(var i=0; i< egButtonMobile.length; i++){
        egButtonMobile[i].addEventListener('click', function(){
            var egthisMobile = this;
          
            setTimeout(function(){
              document.querySelector('.eg-dropdown-item.eg-active') && document.querySelector('.eg-dropdown-item.eg-active').classList.remove('eg-active');
              egthisMobile.classList.add('eg-active');
              document.querySelector('.eg-default-option').innerHTML = egthisMobile.innerText;
            },1000);
        });
      }

  //mobile toggleFeature
  document.querySelector('.eg-nav-container-mobile .eg-dropdown').addEventListener('click',function(){
    if(!document.querySelector('.drop-open'))
    this.classList.add('drop-open');
    else
    document.querySelector('.drop-open').classList.remove('drop-open');
    });

    live('.eg-nav-container-mobile [data-option="HOME"]', 'click', function(){
      dropdownClassRemove()
      document.querySelector('a#home').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-nav-container-mobile [data-option="WOMENS"]', 'click', function(){
      dropdownClassRemove()
      document.querySelector('a#womens').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-nav-container-mobile [data-option="MENS"]', 'click', function(){
      dropdownClassRemove()
      document.querySelector('a#mens').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-nav-container-mobile [data-option="KIDS"]','click', function(){
      dropdownClassRemove()
      document.querySelector('a#kids').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-nav-container-mobile [data-option="BABY"]','click', function(){
      dropdownClassRemove()
      document.querySelector('a#baby').scrollIntoView({behavior: "smooth", block : "start"});
    });

      window.addEventListener('scroll', function() {
     
         document.querySelector('.eg-dropdown-item.eg-active') && document.querySelector('.eg-dropdown-item.eg-active').classList.remove('eg-active');
  
          
         if(elementInViewport2(document.querySelector('#page > div.content > div.main > section:nth-child(11)'))) {
            document.querySelector('.eg-dropdown-item[data-option="HOME"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "HOME";
          } else if(elementInViewport2(document.querySelector('#page > div.content > div.main > section:nth-child(3)'))) {
            document.querySelector('.eg-dropdown-item[data-option="WOMENS"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "WOMENS";
          } else if(elementInViewport2(document.querySelector('#page > div.content > div.main > section:nth-child(19)'))) {
            document.querySelector('.eg-dropdown-item[data-option="MENS"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "MENS";
          } else if(elementInViewport2(document.querySelector('#page > div.content > div.main > section:nth-child(7)'))) {
            document.querySelector('.eg-dropdown-item[data-option="KIDS"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "KIDS";
          } else if(elementInViewport2(document.querySelector('#page > div.content > div.main > section:nth-child(15)'))) {
            document.querySelector('.eg-dropdown-item[data-option="BABY"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML= "BABY";
          } 
        // }
      });

    }

    function dropdownClassRemove(){
      if(document.querySelector('.eg-dropdown.drop-open')){
        document.querySelector('.drop-open').classList.remove('drop-open');
      }
    }
  
    /* Initialise variation */
    waitForElement(".navigation-dropdown > .navigation-dropdown", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();