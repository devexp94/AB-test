(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var $;
        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

           const egBoxesHTML = `
          <div class="eg-boxes">
              <div class="container">
                  <div class="eg-support">
                      <div class="eg-small-box"></div>
                      <a href="#" class="eg-box-link">Help &amp; Support</a>
                  </div>
                  <div class="eg-account">
                        <div class="eg-small-box"></div>
                      <a href="#" class="eg-box-link">My Account</a>
                  </div>
              </div>
          </div>`;
        /* Variation Init */
        function init() {
            /* start your code here */

            document.querySelector("h4.contactSupportTeam_Title").innerText = "Contact our 24/7 support team";

            document.querySelector("h4.contactSupportTeam_Title").insertAdjacentHTML("afterend", "<p class='egTxt'>Our support team are on hand 24 hours a day, 7 days a week.</p>");

            document.querySelector(" div.container div:nth-child(1) > div > div:nth-child(2) > p:nth-child(2)").innerText = "Email";

            document.querySelector("#conForm h2").innerText = "We're here if you need us" ;
            document.querySelector("#conForm h2").insertAdjacentHTML("afterend" , "<p class='egFormDesc'>Fill out the form below to contact our 24/7 support team. </p>");

            let checkBox = document.querySelector("#conForm  div.checkbox");
            let element = document.querySelector("#conForm  div.panel-white  p:nth-child(2)")
            element.insertAdjacentElement("beforebegin", checkBox);
   

            // inserting boxes
            document.querySelector("#pageContent>div:nth-of-type(9)").insertAdjacentHTML("beforebegin", egBoxesHTML);

        }

        /* Initialize variation */
        waitForElement('#pageContent>div:nth-of-type(7)', init, 100, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();