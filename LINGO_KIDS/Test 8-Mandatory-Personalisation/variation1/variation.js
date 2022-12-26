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
    function addEvent(el, type, handler) {
      if (el.attachEvent) el.attachEvent('on' + type, handler);
     else el.addEventListener(type, handler);
    }
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
 

    function listener() {
    
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {   
        
        
     if(window.location.href.indexOf("https://app.lingokids.com/es/multifeed") != -1){
      document.querySelector(".bg-red-vintage .title.title-presentation").innerText = "¿Cuántos años tiene tu hijo/a?"
     }else {
       document.querySelector(".bg-red-vintage .title.title-presentation").innerText = "How old is your kid?"
     }

          waitForElement('.bg-red-vintage .title.title-presentation', init, 5000, 15000);
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

    /* Variation Init */
    function init() {

      document.querySelector(".bg-red-vintage .navigator .navigator-content a[data-label='continue']").classList.add("egCss")

     if(window.location.href.indexOf("https://app.lingokids.com/es/multifeed") != -1){
      document.querySelector(".bg-red-vintage .title.title-presentation").innerText = "¿Cuántos años tiene tu hijo/a?"
     }else{
       document.querySelector(".bg-red-vintage .title.title-presentation").innerText = "How old is your kid?"
     }

      live(".bg-red-vintage .content-center .pagination + div div.leading-tight > div", "click", function(){
        if(document.querySelector(".egActive")){
          document.querySelector(".egActive").classList.remove("egActive");
        }
        this.classList.add("egActive");
        document.querySelector(".bg-red-vintage .navigator .navigator-content a[data-label='continue']").classList.remove("egCss")
      });

      listener();

      live(".leading-tight> div:nth-child(1)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'personalization age 2-3');
      });

      live(".leading-tight> div:nth-child(2)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'personalization age 4-5');
      });

      live(".leading-tight> div:nth-child(3)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'personalization age 6-8');
      });

      live("#menu-button", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'language selector');
      });
      
      live("nav div[role] a:nth-child(2)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'language selector_en');
      });
      
      live("nav div[role] a:nth-child(3)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'language selector_es');
      });
      
      live(".eg_header a:nth-child(2)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'language selector_en');
      });
      
      live(".eg_header a:nth-child(3)", "mousedown", function(){
        trackGAEvent('body button', 'click button', 'language selector_es');
      });
    }

    /************** GA Events *****************/
    function trackGAEvent(eventCategory, eventAction, eventLabel) {
      if ('ga' in window) {
        ga.getAll()[0].send('event', {
          eventCategory: eventCategory,
          eventAction: eventAction,
          eventLabel: eventLabel,
        });
      }
    }

  
    /* Initialize variation */
      waitForElement('.pagination + div', init, 50, 15000);      
  
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
