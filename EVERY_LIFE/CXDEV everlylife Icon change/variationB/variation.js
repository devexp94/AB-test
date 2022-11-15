(function() {
  var debug = 0;
  var variation_name = "";
  if (window.location.href.indexOf('qa-debug=true') > -1) {
      debug = 1;
  }
  try {
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

  var newVideo=`<section class="testimonial-logo">
    <div class="reptuation-of-trust">
    A Reputation of Trust
  </div>
  <div class="testimonial-logo-inner">
    <a href="https://www.trustpilot.com/review/everlylife.com?utm_medium=trustbox&utm_source=MicroStar"><img src="https://editor-assets.abtasty.com/49303/62bcacd4bb8031656532180.png" alt="trustpilot" style="position:relative; top: 10px"></a>
    <a href="https://www.securitybenefit.com/"><img src="https://editor-assets.abtasty.com/49303/62accb0de0f7c1655491341.png" alt="security-benefit" style="position: relative;left: -25px"></a>
   <a target="_blank" id="bbblink" class="ruhzbam" href="https://www.bbb.org/us/ks/topeka/profile/life-insurance/everly-life-0714-300284795#bbbseal" title="Everly Life, Life Insurance, Topeka, KS" style="display:inline-block; position: relative;top: 10px; overflow: hidden; width: 150px; height: 68px; margin: 0px; padding: 0px;"><img style="padding: 0px; border: none;" id="bbblinkimg" src="https://seal-nebraska.bbb.org/logo/ruhzbam/everly-life-300284795.png" width="300" height="68" alt="Everly Life, Life Insurance, Topeka, KS" /></a><script type="text/javascript">var bbbprotocol = ( ("https:" == document.location.protocol) ? "https://" : "http://" ); (function(){var s=document.createElement('script');s.src=bbbprotocol + 'seal-nebraska.bbb.org' + unescape('%2Flogo%2Feverly-life-300284795.js');s.type='text/javascript';s.async=true;var st=document.getElementsByTagName('script');st=st[st.length-1];var ×JavaScript
pt=st.parentNode;pt.insertBefore(s,pt.nextSibling);})();</script>
  </div>
</section>`;


      function init() {
          if (debug) {
              console.log('Inside init Function');
          }
      document.querySelector("main > section:first-of-type").insertAdjacentHTML("afterend",newVideo)

      }

      waitForElement("main > section:first-of-type", init, 50, 15000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

