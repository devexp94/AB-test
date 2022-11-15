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

    let eg_tooltip = `<div class="eg_tooltipIcon">
    <img src="https://i.ibb.co/g6zXGXh/images.jpg" alt="images" border="0">
</div>`
  
    let eg_link = `<div class="eg_tooltipIcon eg_location">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="16px" height="16px">
<g id="surface119356093">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(41.176471%,52.549022%,76.47059%);fill-opacity:1;" d="M 5 3 C 3.90625 3 3 3.90625 3 5 L 3 19 C 3 20.09375 3.90625 21 5 21 L 19 21 C 20.09375 21 21 20.09375 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 Z M 14 3 L 14 5 L 17.585938 5 L 8.292969 14.292969 L 9.707031 15.707031 L 19 6.414062 L 19 10 L 21 10 L 21 3 Z M 14 3 "/>
</g>
</svg>
</div>`
  

    let tooltip = 
   ` <div class="egtooltip">${eg_tooltip}
  <span class="egtooltiptext">The central hub of your estate plan with provisions for the management, control, and distribution of your assets during life and after death..<br/>
  <a class="egLink" href="https://trustandwill.com/learn/living-trust-vs-revocable-trust">Learn more about Living Trusts ${eg_link}</a>
  </span>
</div>`

function init(){

  setTimeout(() => {
    document.querySelector("#pricing > div:nth-child(6) > ul > li:nth-child(2) > div:nth-child(1)").insertAdjacentHTML("beforeend", tooltip)
  }, 200);

}

    /* Initialize variation */
    waitForElement("#pricing > div:nth-child(6) > ul > li:nth-child(2) > div:nth-child(1)", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();