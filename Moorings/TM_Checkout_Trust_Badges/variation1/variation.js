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
        let egLock = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 591.6 591.6" style="enable-background:new 0 0 591.6 591.6;" xml:space="preserve">
    <path d="M540.6,224.4h-51v-30.6C489.6,86.904,402.696,0,295.8,0S102,86.904,102,193.8v30.6H51c-28.152,0-51,22.848-51,51v265.2
      c0,28.152,22.848,51,51,51h489.6c28.152,0,51-22.848,51-51V275.4C591.6,247.248,568.752,224.4,540.6,224.4z M122.4,193.8
      c0-95.676,77.724-173.4,173.4-173.4s173.4,77.724,173.4,173.4v30.6H122.4V193.8z M571.2,540.6c0,16.932-13.668,30.6-30.6,30.6H51
      c-16.932,0-30.6-13.668-30.6-30.6V275.4c0-16.932,13.668-30.6,30.6-30.6h489.6c16.932,0,30.6,13.668,30.6,30.6V540.6z"/>
    <path d="M295.8,285.6c-29.376,0-56.1,18.36-66.708,45.9c-9.996,26.316-3.672,55.692,15.504,73.44v74.46
      c0,18.156,9.792,35.088,25.5,44.268c7.752,4.488,16.524,6.732,25.5,6.732s17.748-2.448,25.5-6.732
      c15.708-9.18,25.5-25.908,25.5-44.064v-74.46c19.176-17.748,25.704-47.124,15.504-73.44C351.9,303.96,325.176,285.6,295.8,285.6z
       M330.48,392.088c-2.448,1.836-3.876,4.896-3.876,8.16v79.356c0,10.812-5.916,21.012-15.3,26.52c-9.384,5.304-21.216,5.304-30.6,0
      c-9.384-5.508-15.3-15.504-15.3-26.52v-79.356c0-3.06-1.428-6.12-3.876-8.16c-15.096-11.832-20.604-33.66-13.056-53.448
      c7.548-19.584,26.724-32.64,47.532-32.64c20.808,0,40.188,13.056,47.532,32.64C350.88,358.428,345.576,380.256,330.48,392.088z"/>
    <path d="M132.6,270.3H51c-2.856,0-5.1,2.244-5.1,5.1V357c0,2.856,2.244,5.1,5.1,5.1s5.1-2.244,5.1-5.1v-76.5h76.5
      c2.856,0,5.1-2.244,5.1-5.1S135.456,270.3,132.6,270.3z"/>
</svg>
`;

        let egSheild = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">

    <path d="M446.132,69.061c-3.536-2.825-8.184-3.885-12.599-2.885c-0.13,0.029-13.283,2.952-33.888,2.952
      c-41.653,0-103.206-11.284-159.9-65.044c-5.744-5.446-14.745-5.446-20.488,0c-0.174,0.165-0.349,0.325-0.524,0.49
      c-0.034,0.031-0.07,0.059-0.104,0.091C162.08,57.941,100.793,69.125,59.338,69.126c-17.415,0-29.495-2.086-32.871-2.743
      c-4.185-0.816-8.091-1.018-12.502,1.885c-4.383,2.884-6.71,7.615-6.71,12.422c0,97.156,19.557,199.937,74.201,279.733
      c0.201,0.293,0.401,0.588,0.602,0.878c32.823,47.59,89.139,97.7,147.443,97.7c47.655,0,102.766-35.468,143.828-92.565
      c35.774-49.743,78.417-139.696,78.417-285.747C451.746,76.164,449.668,71.888,446.132,69.061z M213.95,427.442
      c-28.848-6.17-68.824-29.12-104.46-78.89C77.833,304.339,40.354,225.48,37.24,97.889c6.117,0.576,13.575,1.014,22.099,1.014
      c54.988-0.002,108.856-17.475,154.611-51.501V427.442z M349.155,349.05c-36.136,50.246-76.546,72.957-105.429,78.67v-43.591
      c55.49-12.164,136.761-93.085,136.761-262.986c0,0-10.45,2.423-27.097,2.423c-26.531,0-68.809-6.173-109.664-38.092V46.407
      c46.907,35.329,101.435,52.499,155.918,52.499c8.531,0,15.995-0.439,22.117-1.016C418.641,225.844,380.972,304.809,349.155,349.05
      z M243.727,353.23V121.748h0c40.945,25.532,81.155,31.073,105.918,31.558c-7.241,106.499-50.609,167.914-89.239,191.831
      C254.752,348.638,249.067,351.377,243.727,353.23z"/>
</svg>`;

        /* Variation Init */
        function init() {
            /* start your code here */
            let egCheckOutForm = document.querySelector("#checkoutForm");
            if (!document.querySelector(".eg-trust-wrapper") && egCheckOutForm && window.innerWidth < 768) {
                let egTrustHTML = `
                          <div class="eg-trust-wrapper">
                              <div class = 'eg-ssl'>
                                  <div class="eg-encryption">
                                      <span class="eg-img">${egLock}</span>
                                      <span class="eg-txt">secure ssl encryption</span>
                                  </div>
                                  <div class="eg-gurantee">
                                      <span class="eg-img">${egSheild}</span>
                                      <span class="eg-txt">guaranteed sage checkout</span>
                                  </div>
                              </div>
                              <!-- logos -->
                              <div class = "eg-trust-logos">
                                  <!-- paypal -->
                                  <div><img src="https://www.sunsail.com/sites/default/files/visa_3.png" alt="pappal"></div>
                                  <!-- visa -->
                                  <div><img src="https://www.sunsail.com/sites/default/files/visa_3.png" alt="visa"></div>
                                  <!-- master card -->
                                  <div><img src="https://www.sunsail.com/sites/default/files/visa_3.png" alt="master card"></div>
                                  <!-- last -->
                                  <div><img src="https://www.sunsail.com/sites/default/files/visa_3.png" alt="Visa"></div>
                              </div>
                          </div>`;
                egCheckOutForm.insertAdjacentHTML("afterend", egTrustHTML);

            }


        }

        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                setTimeout(function() {
                    waitForElement('#checkoutForm', init, 50, 15000);
                }, 500);
            });
            history.pushState = ((f) =>
                function pushState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("pushstate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.pushState);
            history.replaceState = ((f) =>
                function replaceState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("replacestate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.replaceState);
            window.addEventListener("popstate", () => {
                window.dispatchEvent(new Event("locationchange"));
            });
        }
        listener();

        /* Initialize variation */
        waitForElement('#checkoutForm', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();