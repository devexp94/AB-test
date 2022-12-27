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

        const egTickSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          `;


        /* Variation Init */
        function init() {
            /* start your code here */
            document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__content form").insertAdjacentHTML("beforeend", `<div class="field eg-form-field"></div>`);
            const egSigninBtn = document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__content form > button");
            const egSignupBtn = document.querySelector("html body #auth-module-page .base-layout__menu>button");
            [egSigninBtn, egSignupBtn].forEach(btn => {
                document.querySelector(".eg-form-field").insertAdjacentElement("beforeend", btn);
            });

            document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__providers>.providers>div:nth-child(1)>span").innerText = document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__providers>.providers>div:nth-child(1)>span").innerText.replace("Or", "");

            document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__providers>.providers").insertAdjacentHTML("beforeend",`
            <div class="line providers__line eg-providers__line"><span class="line__text">Or</span></div>
            `);
            
            // right side updation
            document.querySelector("#content .intro__title").innerHTML = `<h1 class="eg-intro-title">Where The World Designs Electronics</h1>`;
            '<h1 class="eg-intro-title">Your Altium Account Gets You Access To:</h1>';

            document.querySelector("#content .intro__items").innerHTML = `
              <ul class="eg-usps">
                  <li class="eg-usp">
                      ${egTickSvg}
                      <p>Take your designs to the next level with access to Altium Designer, CircuitStudio and other products for yourself or your entire team.</p>
                  <li>

                  <li class="eg-usp">
                      ${egTickSvg}
                      <p>Create seamless collaborations with your team across the entire PCB design process with Altium 365.</p>
                  <li>

                  <li class="eg-usp">
                      ${egTickSvg}
                      <p>Join thousands of designers to share your experiences, learn and grow with AltiumLive.</p>
                  <li>
              </ul>`;

            // adding logos
            // adding logos
            // all logos src links serial wise
            const egLogosLink = ["https://www.altium.com/sites/default/files/media_icon/2022-01/ArduinoLogo_%C2%AE.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/bae_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/leicamicrosystems_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/microsoft_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/lyft_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/amazon_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/facebook_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/dell_color.svg"
            ]

            let egTrustLogosDiv = '<div class="eg-trust-logos">';

            // looping to add images to their parent div
            for (link of egLogosLink) {
                egTrustLogosDiv += '<div><img src="' + link + '" class="logo"></div>';
            }

            egTrustLogosDiv += '</div>';

            // appending logo div above the ctas
            document.querySelector("html body #content .intro").insertAdjacentHTML("beforeend", egTrustLogosDiv);
        }

        /* Initialize variation */
        waitForElement('html body', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();