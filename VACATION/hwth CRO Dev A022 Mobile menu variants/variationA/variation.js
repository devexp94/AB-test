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

    var arrowIcon = ''+ 
    '<svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">'+ 
    '  <path d="M0.195262 0.528514C0.435585 0.288191 0.813739 0.269705 1.07527 0.473055L1.13807 0.528514L5.13807 4.52851C5.37839 4.76884 5.39688 5.14699 5.19353 5.40852L5.13807 5.47132L1.13807 9.47132C0.877722 9.73167 0.455612 9.73167 0.195262 9.47132C-0.0450605 9.231 -0.0635469 8.85285 0.139803 8.59132L0.195262 8.52851L3.72333 4.99992L0.195262 1.47132C-0.0450605 1.231 -0.0635469 0.852847 0.139803 0.591319L0.195262 0.528514Z" fill="black"/>'+ 
    '  </svg>';



    function init() {
      document.querySelector('.header__nav').addEventListener('click', function(){

        waitForElement(".pf.bottom div +.bt--black .mb1",function(){
          document.querySelector('.pf.bottom div +.bt--black').insertAdjacentHTML('beforeend', '<span class="eg-pre">'+ arrowIcon +'</span><span class="eg-next">'+ arrowIcon +'</span>');
        
          
          var a=0;
          var list = document.querySelectorAll('.pf.bottom div +.bt--black .mb1');
          for(var i=0; i< list.length; i++){
          list[i].setAttribute('eg-val',i);
          
          }
          document.querySelector('.pf.bottom div +.bt--black .mb1').classList.add('eg-active');

          document.querySelector('.eg-pre').addEventListener('click',function(){
              
          document.querySelector('.eg-active') && document.querySelector('.eg-active').classList.remove('eg-active');
          document.querySelector('div[eg-val="'+a+'"]').classList.add('eg-active');
          a--;
              if(a<=0)
              a=3;
          });
          document.querySelector('.eg-next').addEventListener('click',function(){
             
              document.querySelector('.eg-active') && document.querySelector('.eg-active').classList.remove('eg-active');
          document.querySelector('div[eg-val="'+a+'"]').classList.add('eg-active');
              a++;
               if(a>=3)
              a=0;
          }); 
        },100, 35000);

      });
      

    }

    /* Initialise variation */
    waitForElement("footer", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
