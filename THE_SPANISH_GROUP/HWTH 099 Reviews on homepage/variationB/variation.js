(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

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

var review='<div xmlns="http://www.w3.org/1999/xhtml" style="margin-top: 38px;"><div style="min-height: 100px;" class="shopperapproved_widget sa_rotate sa_count1 sa_horizontal sa_bgWhite sa_colorBlack sa_borderGray sa_rounded sa_jMy sa_fixed sa_showlinks sa_large sa_showdate "></div><div style="text-align:right;"><a aria-label="www.thespanishgroup.org certificate URL" title="Reviews" class="sa_footer" href="https://www.shopperapproved.com/reviews/www.thespanishgroup.org/" target="_blank" rel="nofollow"><img class="sa_widget_footer" style="border: 0;" alt="www.thespanishgroup.org widget logo" src="https://www.shopperapproved.com/widgets/widgetfooter-darklogo.png"></a></div></div>  ';
   

    function init() {

console.log('073 Started');
document.querySelector('div.container .banner_text').insertAdjacentHTML('afterend',review);
var ins = document.querySelector('select#myonoffswitch');
var rtg = document.createElement('a');
rtg.href = 'https://www.shopperapproved.com/reviews/www.thespanishgroup.org/';
rtg.classList.add('shopperlink');
rtg.innerHTML = '<img src="https://www.shopperapproved.com/newseals/30105/white-header-details.gif" style="border: 0" alt="Customer Reviews" />';
ins.insertAdjacentElement('afterend', rtg);

var sj = window.document.createElement("script"); 
sj.src = "https://www.shopperapproved.com/seals/certificate.js";
sj.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(sj);

var sa_interval = 5000;
function saLoadScript(src) { 
var js = window.document.createElement('script'); 
js.src = src; 
js.type = 'text/javascript'; 
document.getElementsByTagName("head")[0].appendChild(js);
} 
if (typeof(shopper_first) == 'undefined') {     saLoadScript('https://www.shopperapproved.com/widgets/testimonial/3.0/30105.js'); 
shopper_first = true;
}

    }

    /* Initialise variation */
    waitForElement("select#myonoffswitch", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();