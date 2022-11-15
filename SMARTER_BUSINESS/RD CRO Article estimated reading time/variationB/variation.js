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
    /* Variation functions */
    /* Variation Init */

    var timeIcon =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">'+ 
    '  <metadata>'+ 
    '  Created by potrace 1.16, written by Peter Selinger 2001-2019'+ 
    '  </metadata>'+ 
    '  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">'+ 
    '  <path d="M2305 5113 c-671 -72 -1279 -393 -1707 -903 -301 -358 -488 -764 -571 -1240 -19 -109 -21 -162 -21 -410 0 -248 2 -301 21 -410 94 -540 320 -987 693 -1374 383 -398 866 -650 1430 -749 109 -19 162 -21 410 -21 313 0 407 10 653 73 882 228 1600 946 1828 1828 63 246 73 340 73 653 0 313 -10 407 -73 653 -228 881 -946 1600 -1828 1828 -227 58 -334 71 -613 74 -140 2 -273 1 -295 -2z m565 -418 c486 -78 869 -273 1210 -615 298 -297 494 -648 584 -1040 70 -309 70 -651 0 -960 -121 -532 -453 -1006 -931 -1328 -184 -124 -463 -243 -693 -296 -309 -70 -651 -70 -960 0 -532 121 -1006 453 -1328 931 -124 184 -243 463 -296 693 -70 309 -70 651 0 960 90 392 286 743 584 1040 377 378 808 578 1365 634 79 8 372 -4 465 -19z"/>'+ 
    '  <path d="M2515 3931 c-55 -14 -95 -41 -123 -83 l-27 -42 -3 -655 -2 -656 22 -45 c20 -39 73 -83 418 -343 217 -164 418 -311 445 -328 44 -27 57 -30 116 -27 119 6 192 81 192 199 0 102 -5 108 -419 419 l-374 280 -2 578 -3 578 -28 42 c-42 65 -137 102 -212 83z"/>'+ 
    '  </g>'+ 
    '  </svg>';

    function init() {
      /* start your code here */
      var ele = document.querySelector('#article-text');
        setTime(ele,'');
        var targetELe = document.querySelectorAll('.article__sidebar li .list-module__content a');
        targetELe.forEach(function (val) {
         getArticle(val.getAttribute('href'));
        });
        }
  function getArticle(url){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var newEle = document.createElement('div');
      newEle.innerHTML = this.responseText;
      var articleText = newEle.querySelector('#article-text');
      setTime(articleText,url);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
  }

  function setTime(newEle,url){
 var artLength = newEle.textContent.split(' ').length;
 var readTime = Math.round(artLength/200);
  addTimeELe(readTime,url);
  }
 function addTimeELe(readTime,url){
   if(url.length > 1){
   var domEle = document.querySelector('.article__sidebar li .list-module__content a[href="'+url+'"]');
   var parentEle = domEle.closest('.list-module__content');
   parentEle.querySelector('.list-module__date').insertAdjacentHTML('afterend','<span class="read-time">'+timeIcon + readTime+' min</span>');
   
   }
   else
   {
   document.querySelector('.article .article__date span').insertAdjacentHTML('afterend','<span class="read-time">'+timeIcon +readTime+' min</span>');
   document.querySelector('.large-9-7.column .author-card__date').insertAdjacentHTML('afterend','<span class="read-time">'+timeIcon +readTime+' min</span>');
   }
 }
    /* Initialise variation */
    waitForElement(".article__sidebar li .list-module__content a", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();