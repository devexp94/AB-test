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

  </form>`

  
let input = `<div id="nfnLanguageTo" class="nfn__language">
<div class="nfn__label">Number Of Pages</div>
<input type="number" id="quantity" min="0">
</div>`


    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("section.template_banner > div.container div.form_container_desktop div.nfn__languages").insertAdjacentHTML("afterend", egForm)
      document.querySelector("#nfnLanguageTo").insertAdjacentHTML("afterend", input);

    }

    /* Initialize variation */
    waitForElement('.form_container_desktop .nfn__content ', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


