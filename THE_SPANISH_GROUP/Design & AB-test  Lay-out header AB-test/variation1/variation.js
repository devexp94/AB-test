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

    let egForm = `
    <form class="eg_form" action="/action_page.php">
    <input type="text" id="fname" name="firstname" placeholder="Name">

    <input type="Email" id="email" name="email" placeholder="Email">

  </form>
  
  <div class="eg_desc">
    <div class="eg_icon">
       <div class="eg_img">
       <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/47acad/external-send-basic-ui-elements-flatart-icons-outline-flatarticons.png"/>
       </div>

       <div class="eg_detail">
           Secure SSL <br/> Encryption
       </div>
    </div>

    <div class="eg_icon">
       <div class="eg_img">
       <img src="https://img.icons8.com/ios/50/47acad/lock--v1.png"/>
       </div>

       <div class="eg_detail">
           Secure SSL <br/> Encryption
       </div>
    </div>

    <div class="eg_icon">
       <div class="eg_img">
       <img src="https://img.icons8.com/ios/50/47acad/speech-bubble--v1.png"/>
       </div>

       <div class="eg_detail">
           Secure SSL <br/> Encryption
       </div>
    </div>

    <div class="eg_icon">
       <div class="eg_img">
       <img src="https://img.icons8.com/ios/50/47acad/security-ssl.png"/>
       </div>

       <div class="eg_detail">
           Secure SSL <br/> Encryption
       </div>
    </div>

</div>`

  
let input = `<div id="nfnLanguageTo" class="nfn__language">
<div class="nfn__label">Number of pages</div>
<input type="number" id="quantity" min="1">
</div>`


    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("section.template_banner > div.container div.form_container_desktop div.nfn__languages").insertAdjacentHTML("afterend", egForm)
      document.querySelector("#nfnLanguageTo").insertAdjacentHTML("afterend", input);

      document.querySelector("#nfnQuoteBtn").innerText = "Get Free Quote"
      document.querySelector("#header-img > section.template_banner > div.container > div > div > div.form_container_desktop > div").insertAdjacentHTML("afterbegin",`<div class="eg_logo"><img src="https://thespanishgroup.org/translations/wp-content/themes/translations/uploads/1/4/8/2/14823004/1382166907.png"></div>
`);

    }

    /* Initialize variation */
    waitForElement('.form_container_desktop .nfn__content ', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
