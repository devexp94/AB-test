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

    var htmlString =''+ 
'  <div class="eg_container">'+ 
'  '+ 
'      <div class="eg_bag">'+ 
'          <h2>My bag: <span>1 item</span></h2>'+ 
'          <p> <span id="eg_rprice"></span> <span id="eg_totalprice"></span>'+ 
'      </div>'+ 
'  '+ 
'      <div class="eg_checkout">'+ 
'          <a href="#">CHECKOUT</a>'+ 
'      </div>'+ 
'  '+ 
'      <div class="eg_collect">'+ 
'          <a href="#">CLICK AND COLLECT</a>'+ 
'      </div>'+ 
'  '+ 
'  </div>';

    function init() {
      document
        .querySelector("#shopify-section-cart-template")
        .insertAdjacentHTML("afterbegin", htmlString);


        /**** Price adding ***/
        const total = document.querySelector("#cartform > div.row > div.column.cart-right-section > div.section.padless-top.light-space-above > div > div.amount-summary > div:nth-child(1) > div:nth-child(2) > h2 > span")
        const eg_totalP = document.querySelector("#eg_totalprice")
        eg_totalP.innerText = total.textContent

        /*****Line through */
        const saving = document.querySelector("#cartform > div.row > div.column.cart-right-section > div.section.padless-top.light-space-above > div > div.amount-summary > div:nth-child(2) > div:nth-child(2) > span")
        const net = document.querySelector("#eg_rprice")

        total.innerHTML = total.innerHTML.replace(/\$/g, "");
        total.innerHTML = total.innerHTML.replace(/\,/g, "");
        saving.innerHTML = saving.innerHTML.replace(/\$/g, "");
        saving.innerHTML = saving.innerHTML.replace(/\,/g, "");


        parseFloat(saving.innerHTML)
        parseFloat(total.innerHTML)
        
        const overall = Number(parseFloat(total.innerHTML)) - Number(parseFloat(saving.innerHTML))
        net.innerText = overall
        net.insertAdjacentText("afterbegin","$")

      }

    waitForElement("#shopify-section-cart-template", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();