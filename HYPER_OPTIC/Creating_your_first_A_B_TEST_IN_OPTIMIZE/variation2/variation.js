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

    const egCustomHTML = `
    <ul class="eg-container">
      <li class="eg-item eg-item1"><p class="eg-title">Which speed should I pick?</p></li>
      <li class="eg-item eg-item2"><p class="eg-info">We have four speed levels to choose from, from fast to hyperfast</p></li>
      <li class="eg-item eg-item3">
        <ul class="eg-speed-levels">

          <!-- speed level 1 -->
          <li class="eg-speed-level">
            <img src="https://www.hyperoptic.com/wp-content/uploads/2022/10/50Mb-speed-icon-v2.png" alt="speed-level-50mb">
            <p class="eg-speed-level__title">Average speed 57Mbps</p>
            <p class="eg-speed-level__info">Great for streaming and wifi</p>
          </li>

          <!-- speed level 2 -->
          <li class="eg-speed-level">
            <img src="https://www.hyperoptic.com/wp-content/uploads/2022/10/150Mb-speed-icon-v2.png" alt="speed-level-150mb">
            <p class="eg-speed-level__title">Average speed 158Mbps</p>
            <p class="eg-speed-level__info">Perfect for gaming and downloading on multiple devices</p>
          </li>

          <!-- speed level 3 -->
          <li class="eg-speed-level">
            <img src="https://www.hyperoptic.com/wp-content/uploads/2022/10/500Mb-speed-icon-v2.png" alt="speed-level-500mb">
            <p class="eg-speed-level__title">Average speed 522Mbps</p>
            <p class="eg-speed-level__info">Keeps heavy-user households with lots of gadgets happy</p>
          </li>

          <!-- speed level 4 -->
          <li class="eg-speed-level">
            <img src="https://www.hyperoptic.com/wp-content/uploads/2022/10/1gb-speed-icon-v2.png" alt="speed-level-1gb">
            <p class="eg-speed-level__title">Average speed 900Mbps</p>
            <p class="eg-speed-level__info">The ultimate experience, whatever you throw at it.</p>
          </li>
        </ul>
      </li>
    </ul>
    `;

   
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("#block_621c75f11a91b").insertAdjacentHTML("afterbegin",egCustomHTML);
      
    }

   

    /* Initialize variation */
    waitForElement('#block_621c75f11a91b', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


