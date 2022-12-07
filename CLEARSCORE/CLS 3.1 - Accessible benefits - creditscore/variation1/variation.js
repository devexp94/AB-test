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


    let egPara = [
      ["<p class='egDetail'>Enter your details once, and get free credit reports forever.</p>"],
      ["<p class='egDetail'>Get clear, personalised insights about your credit, plus tips on how to improve it.</p>"],
      ["<p class='egDetail'>Over 12 million people  trust ClearScore to help them with their financial future.</p>"],
      ["<p class='egDetail'>Get pre-approved for exclusive offers you won’t see anywhere else.</p>"]
    ]

    let egIdx = 0

    /* Variation Init */
    function init() {
      /* start your code here */
      let eg_ele = document.querySelector("#gatsby-focus-wrapper > div.grid--dzRBT > div > div > section.section--X5hzU > div.sectionContent--Ec-Z7 > div.featureLists--Cs4RX");

      let eg_btn = document.querySelector("#gatsby-focus-wrapper > div.grid--dzRBT > div > div > section.featureSection--LIx35 > div.ctaContainer--itgrz");

      eg_ele.insertAdjacentElement("beforeend", eg_btn);

      document.querySelector("div.sectionContent--Ec-Z7 > div.featureLists--Cs4RX > div > div:nth-child(2) > div.featureTitle--u3vBs > p").innerHTML = "Support to <br/> improve your score";

      document.querySelector("div.sectionContent--Ec-Z7 > div.featureLists--Cs4RX > div > div:nth-child(4) > div.featureTitle--u3vBs > p").innerHTML = "Personalised and pre-approved credit offers";

      let egcredit = document.querySelectorAll("div.sectionContent--Ec-Z7 > div.featureLists--Cs4RX  div.featureTitle--u3vBs > p");

      for (let credit of egcredit) {
        credit.insertAdjacentHTML("afterend", egPara[egIdx++])
      }

    }

    function changeText() {
      document.querySelector("section.section--X5hzU div.featureLists--Cs4RX > div.ctaContainer--itgrz > a > div").innerText = "Sign up for free"
    }

    /* Initialize variation */
    waitForElement('section.section--X5hzU div.featureLists--Cs4RX > div.ctaContainer--itgrz > a > div', changeText, 50, 15000);
    waitForElement('.featureSection--LIx35', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


