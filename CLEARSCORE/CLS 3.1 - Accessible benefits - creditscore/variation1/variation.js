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

    let eg_logos = [
      ["https://expogrowth.in/wp-content/uploads/2022/12/convicon1.svg"],
["https://expogrowth.in/wp-content/uploads/2022/12/convicon2.svg"],
["https://expogrowth.in/wp-content/uploads/2022/12/convicon3.svg"],
["https://expogrowth.in/wp-content/uploads/2022/12/convicon4.svg"]
    ]
  
    // div[class^='featureTitle'] 
    
    /* Variation Init */
    function init() {
      /* start your code here */
      let eg_ele = document.querySelector("section[data-qa ='hero'] > div[class^='sectionContent'] > div[class^='featureLists']");
      let eg_btn = document.querySelector("section[class^='featureSection'] > div[class^='ctaContainer'] ");
      eg_ele.insertAdjacentElement("beforeend", eg_btn);
      
      document.querySelector("section[data-qa ='hero'] div[class^='featureLists'] > div[class^='ctaContainer'] > a > div").innerText = "Sign up for free";

      document.querySelector("div[class^='sectionContent'] > div[class^='featureLists'] > div > div:nth-child(2) > div[class^='featureTitle']  > p").innerHTML = "Support to <br/> improve your score";

      document.querySelector("div[class^='sectionContent'] > div[class^='featureLists'] > div > div:nth-child(4) > div[class^='featureTitle']  > p").innerHTML = "Personalised and pre-approved credit offers";

      let egCredit = document.querySelectorAll("div[class^='sectionContent'] > div[class^='featureLists'] div[class^='featureTitle'] > p");
      
      let egLogo = document.querySelectorAll("div[class^='sectionContent']  > div[class^='featureLists'] div[class^='featureIcon']   picture > source");

      egCredit.forEach((credit, i)=>{
        credit.insertAdjacentHTML("afterend", egPara[i])
        egLogo[i].srcset = eg_logos[i]
      })
    }

    /* Initialize variation */
    waitForElement("div[class^='sectionContent'] div[class ^= 'featureLists']", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
