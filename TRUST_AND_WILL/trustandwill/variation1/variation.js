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
    function hasClass( target, className ) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }


    /* Variation Init */
    function init() {
        search_icon = document.querySelector('main > section #search-icon');
        search_bar = document.querySelector('#search-modal #search-modal_div_modal-close.w-full');

        search_icon.addEventListener('click', function(){
            document.querySelector('body').classList.toggle('search-show');
        });
        // search_icon.addEventListener('click',function(){
        // search_bar.style.width = '800px';
        
        // if(search_bar.offsetWidth >= 800){
        //     search_bar.style.width = '0px';  
        // }
        // });

        window.addEventListener('scroll', function() {
            if(hasClass(document.querySelector('#header'), 'fixed')){
                document.querySelector('body').classList.add('eg-fixed')
            }else{
                document.querySelector('body').classList.remove('eg-fixed')
            }
        }, true);
    }

    /* Initialise variation */
    waitForElement("#search-modal #search-modal_div_modal-close.w-full", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
