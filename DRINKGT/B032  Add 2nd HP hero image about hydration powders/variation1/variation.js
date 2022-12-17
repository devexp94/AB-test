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

    let egBtns = `<div class="egSliderBtn">
    <div class="egBtnOne egBtnMain">
        <button class="egDrink">Location Drink</button>
    </div>
    <div class="egBtnTwo egBtnMain">
        <button class="egPower">Hydration Power</button>
    </div>
</div>`

let egBanner = `
<div class="row usp-block bws-home-banner egHydrationPower">
            <div class="col-12">
                <div class="gradient-bg">
                    <h1>Hidration Power<br>Hi Electrolytes.<br>Great Taste!</h1>
                    <h2>Non GMO | No Additives | Family Owned</h2>
                    <a href="/collections/all">Shop Now</a>
                </div>
            </div>
        </div>`
    
        let egIcon = `
        <svg class="egRightAro" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="chevronRightIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000"> <title id="chevronRightIconTitle">Chevron Right</title> <polyline points="10 6 16 12 10 18 10 18"/> </svg>`

        
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("div[id ^= 'shopify-section']> div.home-top-section > div.container").insertAdjacentHTML("afterbegin" , egBtns);
      document.querySelector("div[id ^= 'shopify-section'] > div.home-top-section > div.container > div:nth-child(2)").insertAdjacentHTML("afterend" , egBanner);
      
      live(['.egPower', '.egRightAro'],"click" , function(){
        
        document.querySelector(".egPower").classList.add("egActive");
        document.querySelector(".egDrink").classList.remove("egActive");
        document.querySelector("main > div[id ^= 'shopify-section']:first-child > div > div > div:nth-child(2)").style.zIndex = "0";
        document.querySelector("div.bws-home-banner.egHydrationPower").style.zIndex = "5";
      });
        
       live(".egDrink","click" , function(){
        document.querySelector(".egPower").classList.remove("egActive");
        document.querySelector(".egDrink").classList.add("egActive");
        document.querySelector("main > div[id ^= 'shopify-section']:first-child > div > div > div:nth-child(2)").style.zIndex = "5";
        document.querySelector("div.bws-home-banner.egHydrationPower").style.zIndex = "0"
        });

          document.querySelector("div[id ^= 'shopify-section']> div.home-top-section > div.container").insertAdjacentHTML("beforeend" , egIcon);
    
    }

    /* Initialize variation */
    waitForElement("div[id ^= 'shopify-section']> div.home-top-section > div.container", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();