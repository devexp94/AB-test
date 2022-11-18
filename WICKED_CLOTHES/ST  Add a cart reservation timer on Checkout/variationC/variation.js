(function () {
  try {
    /* main variables */
    var debug = 0;
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
    }
    var intervalFn;
    function init() {
   //write variation code here
    const egHtml = '<div class="s001-banner-wrapper" style="display:block;">\
      <div class="s001-banner-data">\
          <p>Due to demand we can only reserve your cart for <span class="whole-time-block"><span class="s001-timer-m"></span> : <span class="s001-timer-s"></span> minutes.</p>\
      </div>\
  </div>';
  document.querySelector('div.main > div.main__header').insertAdjacentHTML('beforebegin',egHtml);
 
 live('div.inline-cart__contents > div.inline-cart__footer > div > a.inline-cart__btn','click',function(){
clearInterval(intervalFn);	
  timerfn();
 document.querySelector('.s001-banner-wrapper').style.display = 'block';
  });
}
    function timerfn () {
  let ss02minutes = 10;
  let ss02seconds = 0;
   intervalFn = setInterval(function() {
    --ss02seconds;
    if(ss02minutes === 0 && ss02seconds === 0) {
       clearInterval(intervalFn);
       timerfn();
       ss02minutes = 10;
     ss02seconds = 0;
    }
    if(ss02seconds <= 0) {
      ss02seconds = 59;
      --ss02minutes;
    }
    // console.log(ss02seconds);
    document.querySelector('.s001-timer-m').innerHTML=ss02minutes;
    if (ss02seconds < 10) {
      document.querySelector('.s001-timer-s').innerHTML= '0' + ss02seconds;
    }
         else
      document.querySelector('.s001-timer-s').innerHTML=ss02seconds;
    
  }, 1000);
};

timerfn();

    /* Initialise variation */
    waitForElement("div.main > div.main__header", init, 50, 15000);
  } catch (e) {
  if(debug) console.log(e, "error in Test");
  };
})();