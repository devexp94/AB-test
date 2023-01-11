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

        let timerInterval;

        /* total seconds means time you are passing convert it to seconds
        then pass like if you want a timer of 2days 23hours 5mins 0sec calculate total 
        seconds of this time */

        function timer(totalSeconds = 0, timerObj) {

            // date string should be in the same format
            const date = new Date("1 jan 2022");

            const mSec = 1000;

            // getting millisecond of your total Seconds
            let totalMilliSec = totalSeconds * mSec;

            timerInterval = setInterval(() => {
                totalMilliSec -= mSec;
                if (totalMilliSec >= 0) {
                    const fDate = new Date(date.getTime() + totalMilliSec);
                    /* don't remove these variables uncomment those which your are
                    going to use */

                    /* for example if you want days timer like day 1 hour 23 min 1 sec 40 
                    like that uncomment all these variables */

                    let daysLeft = fDate.getDate() - date.getDate();
                    let hoursLeft = fDate.getHours();
                    const minsLeft = fDate.getMinutes();
                    const secsLeft = fDate.getSeconds();

                    // do your work with these variables

                    timerObj.dys.textContent = daysLeft;
                    timerObj.hours.textContent = hoursLeft;
                    timerObj.mins.textContent = minsLeft;
                    timerObj.secs.textContent = secsLeft;

                    if (!document.querySelector(".eg-timer")) {
                        document.querySelector(".eg-promo-wrapper").insertAdjacentElement("beforeend", egTimerEle);
                        document.body.style.cssText = `margin-top:${document.querySelector(".nav-promo").offsetHeight}px !important`;
                    }

                } else {
                    console.log("times up");
                    clearInterval(timerInterval);
                }
            }, 1000);

        }



        /* Variation Init */
        let egTimerEle;
        function init() {
            /* start your code here */
            
            // adding promo bar
            const egPromoText = "Get 25% Off Sitewide (Offer applied at checkout.)";
            const egPromoHtml = `
                  <div class="eg-promo-container">
       <div class="eg-promo-wrapper">
         <p class="eg-txt">${egPromoText}</p>
         <!-- offer timer -->
        </div></div>
              `;
            document.querySelector("#shopify-section-promo-bar").insertAdjacentHTML("beforeend", egPromoHtml);

            egTimerEle = document.createElement("p");
            egTimerEle.innerHTML = `<span>Offer ends in</span> <strong><span class="eg-dys">00</span>dys <span class="eg-hrs">00</span>hrs <span class="eg-min">00</span>min <span class="eg-sec">00</span>sec</strong>`;
            egTimerEle.classList.add("eg-timer");
            timer(604800, {
                dys: egTimerEle.querySelector(".eg-dys"),
                hours: egTimerEle.querySelector(".eg-hrs"),
                mins: egTimerEle.querySelector(".eg-min"),
                secs: egTimerEle.querySelector(".eg-sec")
            });

        }

        /* Initialize variation */
        waitForElement('#shopify-section-promo-bar', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();