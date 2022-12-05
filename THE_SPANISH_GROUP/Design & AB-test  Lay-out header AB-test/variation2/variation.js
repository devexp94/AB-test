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

    let egHtml = `
    <div class="eg_container">
    <div class="egformBox">
    <div class="eg_titles">
        <h3 class="text-white mt-5">
            Introducing One of the Nation's Leading
        </h3>
        <h1 style="font-size:2.2em;" class="text-white my-1 py-2">
            Certified Translation Services
        </h1>
        <h1 class="text-blue-green text-left my-1 py-2" id="feature-text"></h1>
        <a href="https://www.thespanishgroup.org/pricing" class="btn bg-blue-green text-white">Get a Free Quote</a>
    </div>
    
    <div class="eg_aside bg-primary-color p-4" style="width:300px; max-width: 400px;">
        <h4 class="text-center text-white">Translate Your Document Today</h4>
        <form class="d-flex flex-col" action="https://thespanishgroup.org/billing" method="POST">
            <div class="d-flex flex-col">
                <input type="text" placeholder="Name" name="name"
                    class="form-control form-control-lg rounded-sm border-0" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
            </div>
            <div class="mt-4">
                <input type="email" placeholder="Email" name="em"
                    class="form-control form-control-lg rounded-sm border-0" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
            </div>
            <div class="mt-3 text-center">
                <button type="submit" class="btn btn-lg bg-blue-green text-white border-0">
                    Get Started <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </form>
    </div>
</div>
</div>
`;
   
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("#header-img > section.template_banner > div.new-container").insertAdjacentHTML("afterbegin",egHtml);
    }

   

    /* Initialize variation */
    waitForElement('#header-img > section.template_banner > div.container ', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


