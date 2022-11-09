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

    var eg_str = `
      <div class="eg_btm">
          <a href="#" class="eg_quote"> Get a quote</a>
          <a href="#" class="eg_learn"> Learn more</a>
      </div>
    `;

    function init() {

      let items = document.querySelectorAll('section:nth-child(6) > div > div > div div.css-gw8ne9');
      let egObj = [
        {
          link1: "https://www.regus.com/en-gb/get-a-quote",
          link2: "https://www.regus.com/en-gb/office-space/private-offices"
        },
        {
          link1: "https://www.regus.com/en-gb/get-a-quote",
          link2: "https://www.regus.com/en-gb/office-space/custom-office"
        },
        {
          link1: "https://www.regus.com/booking/#/meeting-room/search?paginationSize=100&searchRangeInMilesTo=2&locale=en-GB&countryCode=GB&location=&countryName=United%20Kingdom&centreNumber=",
          link2: "https://www.regus.com/en-gb/office-space/day-office"
        },
        {
          link1: "https://www.regus.com/en-gb/membership/office-checkout-page/#/en-gb/membership/membership-checkout-page/plan-options",
          link2: "https://www.regus.com/en-gb/membership"
        }
      ];

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