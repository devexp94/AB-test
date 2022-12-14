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

    const egNewDivHtml = `<div class="eg-calculator full-width-image lazyloaded" data-bg="/getmedia/4ec2507f-a90e-43dd-aafe-58eda99b8f90/drone17.webp?ext=.webp">
                            <div class="full-width-image__wrapper rhythm">
                              <h2 class="heading heading--h2 full-width-image__heading">Investing in video can lead to significant savings </h2>
                              <p class="full-width-image__context">Learn more about our pricing and how an investment today can result in years of savings.</p>
                              <div class="full-width-image__ctas">
                                <a href="/en-us/savings-calculator" class="button button--link button--primary button--size-default button--icon">
                                  Calculate your savings <svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.537.018H1.463c-.723 0-1.3.578-1.3 1.3V14.21c0 .722.577 1.3 1.3 1.3h10.092c.723 0 1.3-.578 1.3-1.3V1.318a1.321 1.321 0 00-1.318-1.3zM4.442 12.711a.317.317 0 01-.307.307H2.51a.317.317 0 01-.307-.307v-1.625c0-.162.145-.307.307-.307h1.625c.162 0 .307.145.307.307v1.625zm0-3.16a.317.317 0 01-.307.307H2.51a.317.317 0 01-.307-.307V7.926c0-.162.145-.307.307-.307h1.625c.162 0 .307.145.307.307v1.625zm3.177 3.16a.317.317 0 01-.307.307H5.687a.317.317 0 01-.306-.307v-1.625c0-.162.144-.307.306-.307h1.625c.163 0 .307.145.307.307v1.625zm0-3.16a.317.317 0 01-.307.307H5.687a.317.317 0 01-.306-.307V7.926c0-.162.144-.307.306-.307h1.625c.163 0 .307.145.307.307v1.625zm3.178 3.16a.317.317 0 01-.306.307H8.866a.317.317 0 01-.307-.307v-1.625c0-.162.144-.307.307-.307h1.625c.162 0 .306.145.306.307v1.625zm0-3.16a.317.317 0 01-.306.307H8.866a.317.317 0 01-.307-.307V7.926c0-.162.144-.307.307-.307h1.625c.162 0 .306.145.306.307v1.625zm.596-3.972a.317.317 0 01-.306.307H1.914a.317.317 0 01-.307-.306V2.366c0-.163.144-.307.306-.307h9.19c.163 0 .307.144.307.307v3.213h-.017z" fill="#FFF"></path></svg>
                                </a>
                                <a href="" class="button button--link button--primary button--size-default button--icon" style="display:none" id="hero-button-instance"></a>
                              </div>
                            </div>
                            <!--/ wrapper -->
                          </div>`
    
    /* Variation Init */
    function init() {
      /* start your code here */
      const egTarget = document.querySelector("#content > div > div:nth-child(8)");


      egTarget.insertAdjacentHTML("beforebegin",egNewDivHtml);
    }

    /* Initialize variation */
    waitForElement('#content > div > div:nth-child(8) div.full-width-image__ctas > a.button:nth-child(1)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


