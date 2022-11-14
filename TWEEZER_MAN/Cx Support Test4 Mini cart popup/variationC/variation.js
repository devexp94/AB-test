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


var cartData;

function init() {
      /* start your code here */
      checkAjax();
    }

    function checkAjax() {
      //check ajax complete
      var send = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function () {
          if (this.responseURL.indexOf('https://mcstaging.tweezerman.com/us_tweezermanm_default/customer/section/load/?sections=cart') != -1) {
           //trigger mini cart popup 
           cartData = JSON.parse(this.responseText);
           waitForElement('#confirmBox #messageBox .added-item', addItem, 50, 10000);    
          }
        });
        return send.apply(this, arguments)
      }
    }
    function addItem() {
      var i = 45;
      var interval;
      var egItemText = document.querySelector('#confirmBox #messageBox .added-item').innerText;
      var egLink  = document.querySelector('#confirmBox #messageBox .added-item').getAttribute('href');
      var egHeading = '<p class="eg-text text">You have added <a class="added-item eg-added-item" href="'+ egLink +'" title="'+ egItemText +'"> '+ egItemText+'</a> to cart.</p>';
      
      if(!document.querySelector('.eg-text')){
        document.querySelector('#confirmBox #messageBox > .added-item').insertAdjacentHTML('beforebegin', egHeading);
      }
      interval = setInterval(function(){
      if(document.querySelector('#confirmButtons > button.am-btn-left')){
        document.querySelector('#confirmButtons > button.am-btn-left').textContent = "Continue ("+ i +" s)";
      }
     
     i--;
     if(i <= 0){
     document.querySelector('#confirmBox .cross').click();
     clearInterval(interval);
     }
     },1000);


     live('#confirmBox .cross, #confirmOverlay, #confirmBox #confirmButtons > button.am-btn-left', 'mousedown', function () {
        clearInterval(interval);
        console.log('Clear interval close')
     });
    }
   
    /* Initialise variation */
    waitForElement(".minicart-wrapper", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();