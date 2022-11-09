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
 
   

function init(){
  let egObj = [
    {
      link1:"https://www.regus.com/en-us/enquiry",
      link2:"https://www.regus.com/en-us/office-space/private-offices"
    },
    {
      link1:"https://www.regus.com/en-us/enquiry",
      link2:"https://www.regus.com/en-us/office-space/custom-office"
    },
    {
      link1:"https://www.regus.com/booking/#/meeting-room/search?paginationSize=100&searchRangeInMilesTo=2&locale=en-US&countryCode=US&location=&countryName=United%20States&centreNumber=",
      link2:"https://www.regus.com/en-us/office-space/day-office"
    },
    {
      link1:"https://www.regus.com/en-us/membership/office-checkout-page/#/en-us/membership/membership-checkout-page/plan-options",
      link2:"https://www.regus.com/en-us/membership"
    }
  ];
    let items = document.querySelectorAll('section:nth-child(6) > div > div > div div.css-gw8ne9');

    items.forEach(function(item,i){
      var eg_str = `
      <div class="eg_btm">
          <a href="${egObj[i].link1}" class="eg_quote"> Get a quote</a>
          <a href="${egObj[i].link2}" class="eg_learn"> Learn more</a>
      </div>
    `;
      item.insertAdjacentHTML('afterend',eg_str);
    });
    document.querySelector("section:nth-child(6) div:nth-child(3) div.eg_btm > a.eg_quote").innerText  = "Book now";
    document.querySelector("section:nth-child(6) div:nth-child(4) div.eg_btm > a.eg_quote").innerText  = "Buy now";

}


    /* Initialize variation */
    waitForElement("section:nth-child(6) > div > div", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
