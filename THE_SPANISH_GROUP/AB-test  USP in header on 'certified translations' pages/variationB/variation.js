(function() {
  try {
      /* main variables */
      var debug = 0;
      var variation_name = "";

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

      /* Variation functions */

      let html = `
<div id="eg_container" class="eg_tile">
<div id="text"></div><div id="cursor"></div>
</div>`

      var eg_para_idx = 0;

      var eg_para = [
          ["Translating Over 90 Languages",
              "Inc 5000 Award Winners 2021 & 2022"
          ],

          ["Lightning Fast Delivery. Same Day Delivery If Needed",
              "Contracted by Governments"
          ],

          [
              "100% Guaranteed Acceptance for Translated Documents for USCIS",
              "Corporations Recommended by Embassies and Consulates"
          ]
      ];

      function init() {

          if (
              window.location.href.indexOf("https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/") != -1) {
              eg_para_idx = 0;
          } else if (
              window.location.href.indexOf("https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation") != -1) {
              eg_para_idx = 1;
          } else if (
              window.location.href.indexOf("https://thespanishgroup.org/translations/immigration-certificate-translation") != -1) {
              eg_para_idx = 2;
          }

          document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", html);

          var eg_count = 0;
          var eg_count_INDEX = 0;
          var interval;

          var eg_ele = document.querySelector("#text");
          var eg_point = document.querySelector("#cursor");

          function type() {
              // Get substring with 1 characater added
              var text = eg_para[eg_para_idx][eg_count].substring(0, eg_count_INDEX + 1);
              eg_ele.innerHTML = text;
              eg_count_INDEX++;

              // If full sentence has been displayed then start to del the sentence after some time
              if (text === eg_para[eg_para_idx][eg_count]) {
                  // Hide the cursor
                  // eg_point.style.display = 'none';

                  clearInterval(interval);
                  setTimeout(function() {
                      interval = setInterval(del, 50);
                  }, 1000);
              }
          }

          // Implements deleting effect
          function del() {
              // Get substring with 1 characater deld
              var text = eg_para[eg_para_idx][eg_count].substring(0, eg_count_INDEX - 1);
              eg_ele.innerHTML = text;
              eg_count_INDEX--;

              // If sentence has been deld then start to display the next sentence
              if (text === '') {
                  clearInterval(interval);

                  // If current sentence was last then display the first one, else move to the next
                  if (eg_count == (eg_para[eg_para_idx].length - 1))
                      eg_count = 0;
                  else
                      eg_count++;

                  eg_count_INDEX = 0;

                  // Start to display the next sentence after some time
                  setTimeout(function() {
                      eg_point.style.display = 'inline-block';
                      interval = setInterval(type, 100);
                  }, 200);
              }
          }

          // Start the typing effect on load
          interval = setInterval(type, 100);
      }
      /* Initialize variation */
      waitForElement(
          "#header-img > section.template_banner .row div",
          init,
          50,
          15000
      );
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();