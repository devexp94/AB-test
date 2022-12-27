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


        /* Variation Init */
        function init() {
            /* start your code here */
            document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__content form").insertAdjacentHTML("beforeend", `<div class="field"></div>`);
            const egSigninBtn = document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__content form > button");
            const egSignupBtn = document.querySelector("html body #auth-module-page .base-layout__menu>button");
            [egSigninBtn, egSignupBtn].forEach(btn => {
                document.querySelector(".eg-form-field").insertAdjacentElement("beforeend", btn);
            });

            document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__providers>.providers>div:nth-child(1)>span").innerText = document.querySelector("html body #auth-module-page .base-layout__main>.base-layout__providers>.providers>div:nth-child(1)>span").innerText.replace("Or","");

        }

        /* Initialize variation */
        waitForElement('html body', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();