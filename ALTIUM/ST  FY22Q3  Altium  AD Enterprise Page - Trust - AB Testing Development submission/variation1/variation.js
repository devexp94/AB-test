(function() {
  try {
      /* main variables */
      var debug = 0;
      var variation_name = "";

      /* all Pure helper functions */


      // selector would be the parent div where your are changing css/js
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

      /* Variation functions */
      function init() {
          // write your js here(function can be outside)

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

          let egTrustLogosDiv = '<div class="eg-trust-title"><h2>Trusted By Companies Worldwide For Over 35 Years</h2></div><div class="eg-trust-logos">';

          // looping to add images to their parent div
          for (link of egLogosLink) {
              egTrustLogosDiv += '<div><img src="' + link + '" class="logo"></div>';
          }

          egTrustLogosDiv += '</div>';

          // appending logo div under the ctas
          document.querySelector(".s-hero__btn-group").insertAdjacentHTML("afterend",egTrustLogosDiv);
      }


      /* Initialize variation */
      waitForElement(".s-hero__btn-group", init, 50, 15000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();