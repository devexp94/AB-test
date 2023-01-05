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

    
let eg_icon = `
<div class="eg_desc">
<div class="eg_icon">
   <div class="eg_img">
   <img src="https://i.ibb.co/p366Mxv/send.png" alt="send" border="0">
   </div>

   <div class="eg_detail">
   Guaranteed Acceptance with <br/> 90+ Languages
   </div>
</div>

<div class="eg_icon">
   <div class="eg_img">
   <img src="https://i.ibb.co/yQ4kpnj/lock.png" alt="lock" border="0">
   </div>

   <div class="eg_detail">
   Expert Translators Ready to <br/> Support You
   </div>
</div>

<div class="eg_icon">
   <div class="eg_img">
   <img src="https://i.ibb.co/myxBpfk/message.png" alt="message" border="0">
   </div>

   <div class="eg_detail">
   Same Day Delivery Available
   </div>
</div>

<div class="eg_icon">
   <div class="eg_img">
   <img src="https://i.ibb.co/J7qcqMm/ssl.png" alt="ssl" border="0">
   </div>

   <div class="eg_detail">
   Secure & Safe Checkout
   </div>
</div>
</div>

`

    let egHtml = `
    <div class="eg_container">
    <div class="egformBox">
    <div class="eg_titles">
        <h3 class="text-white">
            Introducing one of <br/> the Nation's Leading
        </h3>
        <span class="eg_heading">
            Certified <br/> Translation <br/> Services
        </span>
        <a href="https://www.thespanishgroup.org/pricing" class="eg_quote">Get Free Quote <i class="fa-solid fa-chevron-right"></i></a>
    </div>
    
    <div class="eg_aside">
        <h4 class="eg_title">Translate Your <br/> Document Today</h4>
        <form class="efForm" action="https://thespanishgroup.org/billing" method="POST">
            <div class="eg_name">
                <input type="text" placeholder="Name" name="name"
                    class="form-control form-control-lg rounded-sm border-0"
                    aria-describedby="emailHelp">
            </div>
            <div class="eg_mail">
                <input type="email" placeholder="Email" name="em"
                    class="form-control form-control-lg rounded-sm border-0"
                    aria-describedby="emailHelp">
            </div>

            <a id="eg-urgent" href="/billing?q=egBilling">
                       <button type="button" class="nfn__btn"> Get Started <i class="fa-solid fa-chevron-right"></i></button>
               </a>
        </form>
    </div>
</div>

 ${eg_icon}
</div>
`;


    /* Variation Init */
    function init() {
      /* start your code here */
   if(window.innerWidth > 1024){
    document.querySelector("#header-img > section.template_banner > div.new-container").insertAdjacentHTML("afterbegin", egHtml);

   }
    }



    /* Initialize variation */
    waitForElement('#header-img > section.template_banner > div.new-container', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


