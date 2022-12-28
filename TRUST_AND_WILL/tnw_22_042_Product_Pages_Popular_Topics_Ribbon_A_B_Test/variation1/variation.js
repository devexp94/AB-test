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

    const egNewSection = `
      <section class="eg-section">
    <div class="container eg-container">
        <!-- left side div -->
        <div class="eg-left">
            <div class="eg-content">
                <p class="eg-title">
                    If you're not sure where to start,<br>we get you.
                </p>
                <p class="eg-desc">
                    Estate Planning can be confusing and we are trying to simply the process to make it more accessible to all.
                </p></div>
            </div>
        <div class="eg-right">
            <div class="eg-content">
                <p class="eg-title">POPULAR TOPICS</p>
                <div class="eg-tags">
                    <a href="https://trustandwill.com/learn/difference-between-trust-and-will" class="eg-tag-link">Difference between a Trust and Will</a>
                    <a href="https://trustandwill.com/learn/what-is-probate" class="eg-tag-link">What is Probate</a>
                    <a href="https://trustandwill.com/learn/how-to-set-up-a-trust-fund" class="eg-tag-link">How to Set Up a Trust Fund</a>
                    <a href="https://trustandwill.com/learn/family-trust" class="eg-tag-link">Family Trust</a>
                    <a href="https://trustandwill.com/trust/" class="eg-tag-link">Create a Trust</a>
                </div>
            </div>
        </div></div>
</section>
      `;

    
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("#__layout main > section:nth-child(3)").insertAdjacentHTML("afterend",egNewSection);
    }

    /* Initialize variation */
    waitForElement('#__layout main > section:nth-child(3)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


