(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = '';

    /* all Pure helper functions */

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    /* Variation functions */

    var customImg = `<div class="eg_contain">

<div class="eg_wrap">
<div class="eg-img-row">
<img src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=224684.jpg&amp;imageType=tile"
    class="b-lazy b-loaded">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='png'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=211472.png&amp;imageType=tile">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=233272.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=332834.jpg&imageType=tile">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=283110.jpg&imageType=tile">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=319335.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=278712.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=346483.jpg&amp;imageType=tile">
</div>
<div class="eg-img-row">
<img data-v-c37533c6="" class="b-lazy b-loaded" src=" https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=80&Width=405&Height=227&ImageUrl=224583.png&imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=284278.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=230010.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=346483.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=203006.jpg&amp;imageType=tile
"><img class="b-lazy b-loaded" src=" https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=201950.jpg&imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=310236.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=331649.jpg&amp;imageType=tile">
</div>
<div class="eg-img-row">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='png'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=201193.png&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=302291.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=203006.jpg&imageType=tile
">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=295371.jpg&amp;imageType=tile"><img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=341426.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=213232.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=295371.jpg&amp;imageType=tile">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=341426.jpg&imageType=tile">
</div>
<div class="eg-img-row">
<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=201950.jpg&imageType=tile">

<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='png'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=285073.png&amp;imageType=tile">

<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=224684.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded" src=" https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=310236.jpg&imageType=tile">

<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=233272.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded" src= https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=80&Width=405&Height=227&ImageUrl=321588.jpg&imageType=tile
">

<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=283110.jpg&amp;imageType=tile">


<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=319335.jpg&amp;imageType=tile">
</div>
<!-- <div class="eg-img-row eg-res-row">

<img class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=201950.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=233272.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=337408.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='png'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=206456.png&amp;imageType=tile">

<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=319335.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=278712.jpg&amp;imageType=tile">

<img class="b-lazy b-loaded"
    src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=346483.jpg&amp;imageType=tile">

<img data-v-c37533c6="" class="b-lazy b-loaded" src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=80&amp;Width=405&amp;Height=227&amp;ImageUrl=223345.jpg&amp;imageType=tile">
</div> -->

</div>

<div class="eg-britbox-container">
<section class="eg_container">
<div class="eg_row">
<div class="eg_content">
<h2>Start your free trial now</h2>
<p class="eg_para">No commitment, no ads, no hassle. Explore the biggest and best collection of unmissable British TV. Exclusive premieres, award-winning originals and regular binge-worthy new releases.</p>
<a href="https://www.britbox.com/us/account/signup">Try free for 7 days</a>
<p class="eg_small">Free 7-day trial, then just $7.99/month or $79.99/year</p>
<img src="https://www.britbox.com/Content/img/Logo_Britbox_color_V2.png" alt="" srcset="">
</div>
</div>
</section>
</div>

<div class="eg-overlay"></div>

</div>`;

    function init() {
      document.querySelector('main #page-block-u0ux7mqdsri').insertAdjacentHTML('afterend', customImg);
    }
    /* Initialize variation */
    waitForElement('main #page-block-u0ux7mqdsri', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, 'error in Test' + variation_name);
  }
})();