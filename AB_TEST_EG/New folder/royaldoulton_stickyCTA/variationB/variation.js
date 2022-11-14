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

    /* Variation functions */

    /* Variation Init */
    function init() {
      /* start your code here */

        addClass();

        scroll();

    }


    function addClass(){
      if(document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button')){
        document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button').classList.add('ym_remove');
      }
      if(document.querySelector('.c-summary_continue:not(.-mobile) button')){
        document.querySelector('.c-summary_continue:not(.-mobile) button').classList.add('ym_remove');
      }
    }


    function scroll(){
      window.addEventListener('scroll',function(){
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
          if(document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button')){
            document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button').classList.remove('ym_remove');
          }
          if(document.querySelector('.c-summary_continue:not(.-mobile) button')){
            document.querySelector('.c-summary_continue:not(.-mobile) button').classList.remove('ym_remove');
          }
        }
        else{
          addClass();
        }
      })
    }

    // check the spa window location
    listener();    

    function listener() {
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {
        waitForElement('.btn-checkout-continue',init,50,15000);

        waitForElement('.c-checkout-foot .c-summary_continue.-mobile button',function(){
          if(window.location.href.indexOf('checkout-page#billing-information') != -1){
            if(!document.querySelector('.ym_add')){
              document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button').classList.add('ym_add');
            }

            document.querySelector('.collapse-toggle.collapsed .toggle-icon.closed').addEventListener('click',function(){
              document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button').classList.add('ym_sticky');
            })

            document.querySelector('.collapse-toggle .toggle-icon.opened').addEventListener('click',function(){
              document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button').classList.remove('ym_sticky');
            })

          }else{
            if(document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button')){
              if(document.querySelector('.ym_add')){
                document.querySelector('.c-checkout-foot .c-summary_continue.-mobile button').classList.remove('ym_add');
              }
            }
          }
        },50,1500);

      });
      history.pushState = ((f) =>
        function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("pushstate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.pushState);
      history.replaceState = ((f) =>
        function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("replacestate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.replaceState);
      window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"));
      });
    }
    
    
    /* Initialize variation */
    waitForElement(".c-checkout-foot .c-summary_continue.-mobile button", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
