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
  
    /* Variation Init */
    function init() {

      document.querySelector(".navigator .navigator-content a[data-label='continue']").style.pointerEvents = "none"
      document.querySelector(".navigator .navigator-content a[data-label='continue']").style.cursor = "block";
      document.querySelector(".navigator .navigator-content a[data-label='continue']").style.opacity = "0.7";

     if(window.location.href.indexOf("https://app.lingokids.com/es/multifeed") != -1){
      document.querySelector(".title.title-presentation").innerText = "¿Cuántos años tiene tu hijo/a?"
     }else{
       document.querySelector(".title.title-presentation").innerText = "How old is your kid?"
     }

      live(".bg-red-vintage .content-center .pagination + div div.leading-tight > div", "click", function(){
        if(document.querySelector(".egActive")){
          document.querySelector(".egActive").classList.remove("egActive");
        }
        this.classList.add("egActive");
        document.querySelector(".navigator .navigator-content a[data-label='continue']").style.pointerEvents = "auto"
        document.querySelector(".navigator .navigator-content a[data-label='continue']").style.cursor = "pointer";
        document.querySelector(".navigator .navigator-content a[data-label='continue']").style.opacity = "1";
      });

    }
  
    /* Initialize variation */
      waitForElement('.pagination + div', init, 50, 15000);      
  
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
