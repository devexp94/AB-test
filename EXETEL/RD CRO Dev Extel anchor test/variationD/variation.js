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
  

    var egOrderOption =''+ 
    '  <div class="eg-order">'+ 
    '          <p class="eg-text">Click here to continue your order</p>'+ 
    '  </div>';

    function init() {

    var planbutton = document.querySelectorAll('.desktop-plans .plan-list  .inner .bottom');

    for(var i =0; i < planbutton.length; i++){
      planbutton[i].insertAdjacentHTML('beforeend', egOrderOption);
    }

    var mobileButton = document.querySelectorAll('.plan-inner-wrapper .owl-item .btn-bottom');

    for(var i =0; i < mobileButton.length; i++){
      mobileButton[i].insertAdjacentHTML('beforeend', egOrderOption);
    }


    live('.eg-order', 'click', function () {
      document.querySelector('.nbn-fibre-extras .inner-container').scrollIntoView({behavior: "smooth", block : "start"}); 
    });


    }
    function init2() {
  // console.log('hello');
      var mobileButton = document.querySelectorAll('.plan-inner-wrapper .owl-item.active .btn-bottom');
  
      for(var i =0; i < mobileButton.length; i++){
        mobileButton[i].insertAdjacentHTML('beforeend', egOrderOption);
      }
  
  live('.plan-inner-wrapper .owl-item','mousedown',function(){
    // console.log('hello',this);
    var self= this;
    setTimeout(function() {
     
      //console.log('hello',document.querySelector('.owl-item.active .btn-bottom'));

      if(!document.querySelector('.owl-item.active .eg-order')){
        document.querySelector('.owl-item.active .btn-bottom').insertAdjacentHTML('beforeend', egOrderOption);
      }
      
    },1000);
  });
      live('.eg-order', 'click', function () {
        document.querySelector('.nbn-fibre-extras .inner-container').scrollIntoView({behavior: "smooth", block : "start"}); 
      });
  
  
      }


    /* Initialise variation */
    waitForElement(".desktop-plans .plan-list  .inner .bottom", init, 50, 25000);
    waitForElement(".plan-inner-wrapper .owl-item.active .btn-bottom", init2, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();