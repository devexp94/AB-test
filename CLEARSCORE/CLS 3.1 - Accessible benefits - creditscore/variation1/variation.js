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


    let egOverviewHTML = `
    <section class="eg-overview-container">
        <div class="eg-overview-wrapper">
            <div class="eg-callouts-container">

                <!--Certified Translation-->
                <div class="eg-callouts">

                <div class="eg_img">
                   <img src="https://expogrowth.in/wp-content/uploads/2022/12/convicon1.svg" alt="callout-icon"> 
                </div>
                     
                <div class ="eg_rows">
                   <h3 class="eg-title">Your free credit score & report, updated weekly</h3>
                   <p class="eg-info">Enter your details once, and get free credit reports forever.</p>
                   </div>   
                </div>

                <!--Professional Translation-->
                <div class="eg-callouts">
                <div class="eg_img">
                    <img src="https://expogrowth.in/wp-content/uploads/2022/12/convicon2.svg" alt="callout-icon">
               </div>

               <div class="eg_rows">
                    <h3 class="eg-title">Support to <br/> improve your score</h3>
                    <p class="eg-info">Get clear, personalised insights about your credit, plus tips on how to improve it.</p>

                    </div>
                </div>

                <!--Academic Translation-->
                <div class="eg-callouts">
                <div class="eg_img">
                    <img src="https://expogrowth.in/wp-content/uploads/2022/12/convicon3.svg" alt="callout-icon">
                 </div>
                 
                 <div class="eg_rows">
                    <h3 class="eg-title">The UK’s number 1 free credit score and report app</h3>
                    <p class="eg-info">Over 12 million people  trust ClearScore to help them with their financial future.</p>

                    </div>
                </div>

                <!--90+ Languages Supported-->
                <div class="eg-callouts">

                <div class="eg_img">
                    <img src="https://expogrowth.in/wp-content/uploads/2022/12/convicon4.svg" alt="callout-icon">
                    </div>

                    <div class="eg_rows">
                    <h3 class="eg-title">Personalised and pre-approved credit offers</h3>
                    <p class="eg-info">Get pre-approved for exclusive offers you won’t see anywhere else.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    
    /* Variation Init */
    function init() {
      /* start your code here */

      document.querySelector("#gatsby-focus-wrapper section[class ^= 'featureSection'] > div[class ^= 'ctaContainer'] > a > div").innerText = "Sign up for free";

      document.querySelector("#gatsby-focus-wrapper  section[data-qa='hero'] ").insertAdjacentHTML("afterend" , egOverviewHTML )

    }

    /* Initialize variation */
    waitForElement("#gatsby-focus-wrapper  section[data-qa='hero'] ", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
