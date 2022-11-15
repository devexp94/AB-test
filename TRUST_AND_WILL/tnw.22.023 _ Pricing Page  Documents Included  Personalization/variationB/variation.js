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
  
    let eg_link = `<div class="eg_tooltipIcon">
    <img src="https://img.icons8.com/pastel-glyph/64/null/external-link--v1.png"/>
</div>`
  

    let tooltip = 
   ` <div class="tooltip">${eg_tooltip}
  <span class="tooltiptext">The central hub of your plan with provisions for the management , control , and distribution of your assets during life and after death.<br/>
  <a class="link" href="https://trustandwill.com/learn/living-trust-vs-revocable-trust">Learn more about Living Trusts ${eg_link}</a>
  </span>
</div>`

function init(){

  document.querySelector("#pricing > div:nth-child(6) > ul > li:nth-child(2) > div:nth-child(1)").insertAdjacentHTML("beforeend", tooltip)

}

    /* Initialize variation */
    waitForElement("#pricing > div:nth-child(6) > ul > li:nth-child(2) > div:nth-child(1)", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();